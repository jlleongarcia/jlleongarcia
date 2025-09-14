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


