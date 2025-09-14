---
title: "From Scratch to Self-Hosting"
date: 2025-09-14
draft: false # set True to not renderize
tags: ["Dev"] # no implication, can be deleted
description: 'All commands to have a working server with Linux from scratch.'
url: 'server-ubuntu-commands'
---

Here I post a step-by-step guide to have a home server from a newly bought minipc.

## Let's install Ubuntu

First of all, prepare a USB device for Ubuntu OS installation. Thanks to [Ventoy](https://sourceforge.net/projects/ventoy/files/v1.1.07/), we can [download Ubuntu](https://ubuntu.com/download/desktop) and create a bootable USB drive for it. Then, just install Ubuntu, alongside Windows if your minipc has it already installed or just erase the disk. I prefer the later to have more usable memory for my stuff.


## Things to install in Ubuntu

{{< callout type="info" >}}
  To update all packages, run:
  ```sh
  sudo apt update
 ```
{{< /callout >}}

{{< callout type="info" >}}
  if you ever need to uninstall any package, run:
  ```sh
  sudo apt purge whatever_package -y
  sudo apt autoremove
 ```
{{< /callout >}}

Here I have listed all commands needed to install all my stuff in my minipc to have it working as a home server:

### Curl
```sh
sudo apt-get install curl
```

### Tailscale
```sh
curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up
```

Then, to make sure you can connect to your server, run:

```sh
sudo systemctl status ssh
```

If inactive (dead), then run:

```sh
sudo systemctl enable --now ssh
```

This will start the service immediately and ensure it starts on boot. After all, you will be able to connect to you server terminal by running in cmd or Powershell:

```powershell
ssh username@100.x.y.z
```

### Podman
```sh
apt install podman
podman --version # just to make sure it is correctly installed
```

### Docker
```sh
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
docker version
```

After installation, check if Docker gets started at system boot:

```sh
sudo systemctl is-enabled docker
```

It should prompt as output *enabled*. If not, run:

```sh
sudo systemctl enable docker
```

Test your installation by running:
```sh
docker run hello-world
```

Then, install Docker Compose 2:
```sh
DOCKER_CONFIG=${DOCKER_CONFIG:-$HOME/.docker}
mkdir -p $DOCKER_CONFIG/cli-plugins
curl -SL https://github.com/docker/compose/releases/download/v2.27.0/docker-compose-linux-x86_64 -o $DOCKER_CONFIG/cli-plugins/docker-compose
sudo chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose
```

If the last command line returns *"No such file or directory"*, then you have to add to your system's PATH where to find docker-compose:

```sh
nano ~/.bashrc
```

Then, add at the end of the file:
```sh
export PATH=$PATH:~/.docker/cli-plugins
```

Save the file (Ctrl+O), exit the editor (Ctrl+X) and apply the changes to your current session by sourcing the file:

```sh
source ~/.bashrc
```

Finally, start and run Portainer, a graphical user interface (GUI) that sits on top of your Docker setup. By running this command, you're essentially installing a user-friendly control panel:

```sh
docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce
docker restart portainer
```

Now, navigate to server_IP:9000 and you can create your admin user.

### htop
```sh
sudo apt install htop
```

### Git

Git should have been installed by now, but if not:

```sh
sudo apt update
sudo apt install git
```

Now, it's time to configure your Git user information:

```sh
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```

Replace "Your Name" and "youremail@example.com" with your GitHub name and email.

Once you have configured your Git information, choose an authentication method; I have chosen SSH key:

```sh
ssh-keygen -t ed25519 -C "youremail@example.com"
```

Then, copy the output of the following command line:

```sh
cat ~/.ssh/id_ed25519.pub
```

and go to Github > Settings > SSH and GPG Keys > New SSH Key > *Key* field. Paste the output there and give it a title. After all, test the connection:

```sh
ssh -T git@github.com
```

To sync all your projects without having to be logged in, just create the pull script and timer, then run the timer with *systemd*. Follow these steps:

Create the script:
```sh
sudo nano /usr/local/bin/git-pull-all
```

Paste the following code:
```sh
#!/bin/bash

# Path to your projects directory
PROJECTS_DIR="/home/jlleongarcia/projects"

# Check if the directory exists
if [ ! -d "$PROJECTS_DIR" ]; then
  echo "Projects directory not found at $PROJECTS_DIR"
  exit 1
fi

# Change to the projects directory
cd "$PROJECTS_DIR" || exit

# Loop through each directory and pull the latest changes
for repo in */; do
  if [ -d "$repo/.git" ]; then
    echo "Syncing $repo..."
    cd "$repo"
    git pull
    cd ..
  fi
done
```

Make the script executable:

```sh
sudo chmod +x /usr/local/bin/git-pull-all
```

Create a systemd Service:

```sh
sudo nano /etc/systemd/system/git-sync.service
```

Add the service configuration:

```sh
[Unit]
Description=Git synchronization service
After=network.target

[Service]
ExecStart=/usr/local/bin/git-pull-all
User=jlleongarcia
Group=jlleongarcia

[Install]
WantedBy=multi-user.target
```

Create a systemd Timer:

```sh
sudo nano /etc/systemd/system/git-sync.timer
```

Add the timer configuration:

```sh
[Unit]
Description=Runs git-sync.service every day at 8am

[Timer]
OnCalendar=*-*-* 08:00:00
RandomizedDelaySec=15m
Persistent=true

[Install]
WantedBy=timers.target
```

Finally, enable and start the Timer:

```sh
sudo systemctl daemon-reload
sudo systemctl start git-sync.timer # Start the Timer
sudo systemctl enable git-sync.timer # Enable the timer to run on boot
```

To check the status of your timer, run:

```sh
sudo systemctl status git-sync.timer
```


