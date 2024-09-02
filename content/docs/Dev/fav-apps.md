---
title: Must Have Apps
type: docs
prev: /docs/gcp/
next: docs/ansible/
draft: false
---

A list of Apps that will [cover 80% of the needs from 80% of the people](https://fossengineer.com/pareto-principle-for-data-analytics/).

## Productivity

* LogSec + Pomatez

```sh
flatpak install flathub com.logseq.Logseq #https://github.com/logseq/logseq/releases/download/0.10.2/Logseq-linux-x64-0.10.2.AppImage
snap install pomatez #https://zidoro.github.io/pomatez/
```

{{< callout type="info" >}}
LogSec can do more than notes, [Power your knowledge with F/OSS Local LLMs](https://fossengineer.com/selfhosting-logseq/)
{{< /callout >}}

* Thunderbird: A Free email Client to rule them all

```sh
nix-shell -p thunderbird #flatpak install flathub org.mozilla.Thunderbird
```


{{< callout type="info" >}}
* If you need to create Diagrams, consider: [Mermaid](https://mermaid.live/edit), [Python Diagrams](https://pypi.org/project/diagrams/)

* And for PPT's: [Sli.dev](https://github.com/slidevjs/slidev), [marp](https://github.com/marp-team/marp) or [revealjs](https://revealjs.com/)

{{< /callout >}}

## Daily Driver

* Browser

```sh
nix-shell -p librewolf #flatpak install flathub org.mozilla.firefox
#flatpak install flathub io.gitlab.librewolf-community

#https://flathub.org/apps/org.chromium.Chromium 
#nix-shell -p mullvad-browser
```

* Office

```sh
nix-env -iA nixpkgs.libreoffice
```

* Cloud

```sh
nix-shell -p nextcloud-client
```


{{< callout type="info" >}}
This installs a Nextcloud Client. [You can also have your own Nextcloud Server](https://jalcocert.github.io/RPi/posts/selfhosting-nextcloud/).
{{< /callout >}}



{{< tabs items="Celeste,Weylus,App Fleet" defaultIndex="1" >}}

  {{< tab >}}**Celeste**: [A simple GUI sync client](https://github.com/hwittenborn/celeste) which supports multiple cloud providers.
  ```sh
  flatpak install flathub com.hunterwittenborn.Celeste
  ```

  As simple as this, you have support for Google Drive or **Proton Drive** (among others) in Linux.
  
    You can have a look also to FreeFileSync, RClone as well.{{< /tab >}}
  {{< tab >}}**Weylus**: [A great App](https://github.com/H-M-H/Weylus) to use your Table as a second (Touch) Screen.
  ```sh
  sudo apt-get install libgtk-3-dev libappindicator3-dev libwebkit2gtk-4.0-dev
  wget https://github.com/H-M-H/Weylus/releases/download/v0.11.4/Weylus_0.11.4_amd64.deb
  sudo dpkg -i Weylus_*.deb
  sudo apt-get -f install
  #ifconfig
  ```
  And this is it, visit `http:localip:1701`

  You can also have a look to Deskreen or Remmina.

  Also, you can [try WebTops from your Tablet's browser](https://fossengineer.com/selfhosting-webtops-docker/) to have full desktop experience.
  {{< /tab >}}
  {{< tab >}}**App Fleet**:
  Create workspaces for your Desktop
  
  ```sh
  curl https://raw.githubusercontent.com/omegaui/app_fleet/main/network-install.sh | bash
  ``` 
  {{< /tab >}}

{{< /tabs >}}



## Dev + Content

* VSCodium

```sh
nix-shell -p vscodium
```

* OBS Studio

```sh
nix-shell -p obs-studio
```

* Blender

```sh
nix-env -iA nixpkgs.blender
```

Have a look to [other Apps for content creation](https://jalcocert.github.io/Linux/docs/debian/content_creation/).

{{< callout emoji="❓" >}}
  I am an engineer, where can I get [the good stuff (FEM, CAD...) in Linux](https://jalcocert.github.io/Linux/docs/debian/foss_engineering/)?
{{< /callout >}}

{{% details title="And that's not All 🚀" closed="true" %}}



{{% /details %}}

## Sec/Privacy

* Bitwarden

```sh
nix-shell -p bitwarden
```

* 2Fa's

```sh
nix-env -iA nixpkgs.waydroid
#https://github.com/twofas/2fas-android
```

* Mullvad VPN

```sh
nix-shell -p mullvad-vpn
```

* Freetube

```sh
nix-env -iA nixpkgs.freetube
```

* Chat

```sh
nix-env -iA nixpkgs.element-desktop
```

{{< callout type="info" >}}
This will install a client for Matrix. You can have own server, checkout the [**Matrix Server** Docker installation](https://fossengineer.com/selfhosting-matrix-synapse-docker/).
{{< /callout >}}


{{% details title="Offline Maps" closed="true" %}}

* For offline explorers:

```sh
nix-env -iA nixpkgs.organicmaps
```


{{% /details %}}

{{% details title="How to create bootable USB's" closed="true" %}}

* Create a bootable usb with your favourite Linux:

```sh
nix-env -iA nixpkgs.rpi-imager
```

* Use [Ventoy](https://github.com/ventoy/Ventoy) to have MultiBoot USB Drive Tool:

```sh
wget https://github.com/ventoy/Ventoy/releases/download/v1.0.97/ventoy-1.0.97-linux.tar.gz

tar xvf ventoy-1.0.97-linux.tar.gz
cd ventoy

sudo sh VentoyWeb.sh
```

> Access Ventoy at: `localhost:24680`

* Create a Windows ISO with [WoeUSB](https://github.com/WoeUSB/WoeUSB)

```sh
sudo apt install git p7zip-full python3-pip python3-wxgtk4.0 grub2-common grub-pc-bin
sudo pip3 install WoeUSB-ng
```

{{% /details %}}

{{% details title="What If I need to Format a Drive in Linux?" closed="true" %}}

Use GParted:

```sh
apt install gparted
```

Or try with Fdisk:

    Open a terminal.
    Run the command `sudo fdisk -l` to list all available hard drives and partitions. Identify the device name of the hard drive you want to format (e.g., /dev/sdb) or try: lsblk -d -o NAME,SIZE,MODEL
    lsblk /dev/sdb
    See what mounted with mount | grep sdb
    Run the command sudo fdisk /dev/sdX (replace X with the appropriate letter for your hard drive).
    Use the m command to display the help menu and view available options.
    Use the d command to delete existing partitions (if any).
    Use the n command to create a new partition.
    Use the t command to set the partition type.
    Use the w command to write changes to the disk and exit.

{{% /details %}}

{{% details title="Persistent Mounting - Mount USB on Boot" closed="true" %}}

To mount always at the same place when reboot:

```sh
lsblk -d -o NAME,SIZE,MODEL
lsblk /dev/nvme0n1
mount | grep nvme0n1p1

sudo blkid /dev/nvme0n1p1 #provides uuid

sudo nano /etc/fstab #add the line below
UUID=YOUR-UUID-HERE /media/jalcocert/BackUp exfat defaults,uid=1000,gid=1000,fmask=0022,dmask=0022 0 0

# sudo mkdir -p /media/jalcocert/BackUp
# sudo chmod 777 /media/jalcocert/BackUp

#sudo apt install exfat-fuse
#sudo apt install fuse
#sudo mount.exfat-fuse /dev/sda1 /media/sda1_BackUp

```
{{% /details %}}


---


## FAQ

### What if I am using Windows still?

You can get these Apps in Windows as well. It would be great if you try them out before switching to Linux as main OS.

If you want to make your life easier, check how to install them with [Chocolatey](https://jalcocert.github.io/Linux/docs/chocolatey/chocolatey).

### What about browser extensions?

* https://2fas.com/browser-extension/
* https://bitwarden.com/download/

### What about PWA?

Progressive Web Apps can fit any form factor (desktop, mobile, tablet, or forms yet to emerge).

They are also Connectivity independent – Service workers allow apps to work offline or on low-quality networks.
And they are App-like – Feel like a native app to the user with app-style interactions and navigation, plus they can be distributed without using the Google/Apple stores, simply use them with a browser and *no installation required**.

* Hand Written notes in browser - [ExcaliDraw](https://fossengineer.com/selfhosting-excalidraw)

* More Ideas? [Awsome-PWA](https://github.com/hemanth/awesome-pwa)

### What about the remaining 20% of people and 20% of use cases?

First, I did not want to make this a really complex and long list.

Secondly, if you are able to use Linux with these Apps covering most of your needs, you need to celebrate. You have already passed the most difficult part in your Linux journey.

And now, you should be able to find and use any other App that you need. 

Still something offering resistance? Checkout [how to Virtualize other OS's](https://jalcocert.github.io/Linux/docs/debian/virtualization/)