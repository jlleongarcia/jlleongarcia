---
title: Arch with Garuda Linux
type: docs
prev: docs/Debian/
---

## Garuda Linux

Garuda Linux is a rolling-release, Arch Linux-based distribution that boasts a user-friendly approach, a focus on performance, and a visually striking desktop experience, catering to both newcomers and experienced Linux users.


> Consider **Garuda a flavour of Arch** and most likely, the easiest way that will allow you to say: *I use Arch, btw*

Why Garuda Linux?

It comes with [Searx as the default search engine](https://jalcocert.github.io/Linux/docs/privacy/#changing-bad-habits) and KDE Plasma as Desktop Environment.

### How to use Garuda Linux

#### Pacman - Package Manager

Garuda Linux uses the **Arch Linux package manager**, which is called "Pacman".

**Pacman** is a powerful command-line package manager that handles software installation, upgrades, removals, and dependency resolution. 

Additionally, Garuda Linux also provides a graphical package manager called "Pamac" for those who prefer a user-friendly interface.
* The **official Arch Linux website** provides a package search tool that lets you search for packages available in the official repositories.
    * The Arch Linux Package Search:  <https://archlinux.org/packages/>


{{% details title="Its as simple as this" closed="true" %}}

Update repos with:

```sh
#sudo pacman -Syu
garuda-update
```

And install packages with:

```sh
sudo pacman -S firefox
```

{{% /details %}}


> More examples [here](https://gist.github.com/JAlcocerT/9865a045b2b86adb41fad71e4beddc06).

### Useful Repositories

But the beauty is that anyone can contribute and publish their Apps at:

* Arch User Repository (AUR)
    * AUR Website: <https://aur.archlinux.org/>

The AUR is a **community-driven repository** that contains a wide range of software packages not available in the official Arch Linux repositories. And we, as Garuda Linux users can also benefit from the AUR.


{{% details title="More about AUR" closed="true" %}}

When you visit these websites, you can use the search functionality to look for packages by name. 

The AUR website is particularly useful for finding user-contributed packages that may not be in the official repositories. Once you find a package you want to install, you can note its name and use it with the pacman or yay command in the terminal, or search for it in the Pamac graphical package manager.

{{% /details %}}

<!-- https://itsfoss.com/rua-aur-tool/ -->


Remember that when installing packages from the AUR, you should follow the AUR guidelines and consider using an **AUR helper like yay** for better package management and dependency handling.

Lets install yay and use it to give us an [UI to manage packages](https://aur.archlinux.org/packages/pamac-all)

```sh
sudo pacman -Syu

sudo pacman -S yay #install yay
yay -S pamac-all
pamac-manager
```

> yay can also handle packages from the official repositories!

### Gaming on Arch


{{% details title="How to Install Games in Garuda Linux" closed="true" %}}


* With Steam Platform (Thanks to [Proton](https://jalcocert.github.io/Linux/docs/debian/gaming/#steam-play--proton)):

```sh
sudo nano /etc/pacman.conf
#[multilib]
#Include=/etc/pacman.d/mirrorlist
sudo pacman -Sy

sudo pacman -S steam
yay -S protonup-qt
```

> Dont Forget to enable Steam Play as per [this guide](https://linuxiac.com/how-to-play-games-on-arch-linux-using-steam/)

* You also can with Lutris:

```sh
sudo pacman -S lutris

#example #https://lutris.net/games/ea-app/
```

{{% /details %}}
<!-- 
```sh
sudo pacman -Sy
sudo pacman -S steam
``` -->

{{% details title="How to use SteamOS with Docker in Garuda Linux" closed="true" %}}

Thanks to the project: <https://docs.linuxserver.io/images/docker-steamos/>

{{% /details %}}

---

## FAQ

### Other *User Friendly* Arch Distros

I really like Garuda KDE (Dragonized Edition), but you can also try:

* [Manjaro](https://manjaro.org/)
* [BlendOS](https://blendos.co/) -  It is an immutable, container-based operating system that allows you to run applications from multiple Linux distributions and Android without the fear of breaking your system.
* [EndevourOS](https://endeavouros.com/)

### How can I try Arch Easily?

If you are really new to Linux, I would recommend to start with [Debian Based Distros](https://jalcocert.github.io/Linux/docs/debian/).

{{% details title="Anyways, you can always try Garuda risk-free by following these ✌️" closed="true" %}}

* Create a [Virtual Machine and run Garuda](https://jalcocert.github.io/Linux/docs/debian/virtualization/#how-to-virtualize) inside of it, without worrying to break your main OS (Windows, mac, other linux...)
* [Get Garuda](https://garudalinux.org/downloads) and boot it from USB (without removing your SSD OS)
* Or...if you are somehow familiar with [Docker](https://jalcocert.github.io/Linux/docs/debian/docker/) and [have it running in your system](https://fossengineer.com/docker-first-steps-guide-for-data-analytics/) - You can also [try Arch with A Webtop](https://fossengineer.com/selfhosting-webtops-docker/) without any risk to damage your main OS.

{{% /details %}}



### Example App installation with Pacman

Getting UFW (A [Firewall to Secure Linux](https://jalcocert.github.io/Linux/docs/debian/securing_linux/#firewall-setup-ufw)) up and running:

```sh
#install updates
sudo pacman -Syu

# sudo pacman -S openssh
# sudo systemctl enable sshd
# sudo systemctl start sshd
# systemctl status sshd


#install ufw
sudo pacman -S ufw
sudo systemctl enable ufw.service
```

Or say that you just installed Garuda and want to see how are the [system resources doing with htop](https://jalcocert.github.io/Linux/docs/debian/securing_linux/#firewall-setup-ufw) or to [Benchmark the system](https://jalcocert.github.io/Linux/docs/debian/useful_tools/#system-info):


```sh
sudo pacman -S htop
#sudo pacman -S gotop conky glances

sudo pacman -S sysbench
```

> You can also try with [Phoronix in Arch](https://jalcocert.github.io/Linux/docs/arch/#benchmark-with-arch)


### Other Ways to Install Apps

* [AppImages](https://jalcocert.github.io/Linux/docs/debian/linux_installing_apps/#appimages) are self-contained and portable Apps - compatible with Arch bases Distros as well

* [FlatPak!](https://jalcocert.github.io/Linux/docs/debian/linux_installing_apps/#flatpak)

```sh
sudo pacman -S flatpak
#flatpak install flathub org.audacityteam.Audacity
```

* [Try SelfHosting](https://jalcocert.github.io/Linux/docs/selfhosting)

{{% details title="Get Docker in Arch 🐳✌️" closed="true" %}}

```sh
sudo pacman -S docker
#systemctl status docker

sudo systemctl start docker
sudo systemctl enable docker
#docker --version

sudo pacman -S docker-compose

#sudo pacman -S podman
```

Now you can start feel at home with [Portainer](https://fossengineer.com/selfhosting-portainer-docker/) or [Dockge](https://fossengineer.com/selfhosting-dockge/) and even [local Gen-AI](https://jalcocert.github.io/Linux/docs/linux__cloud/llms/) awaits.

{{% /details %}}

* [Try Nix](https://jalcocert.github.io/Linux/docs/nix/) Package Manager - Learn this once and use it on any Linux and even on Macs!


### Rolling vs Fix Releases?

Garuda Linux, being a rolling-release distribution, continually delivers the latest software to users, providing the cutting-edge experience (which can cut us sometimes).

{{% details title="Rolling or Fixed Release? 😧" closed="true" %}}

A rolling release is a software distribution model where updates and new features are continuously rolled out to users as soon as they're ready, eliminating the need for major version upgrades. This means that you always have the latest software versions and improvements without needing to reinstall the entire operating system.

In comparison, Debian-based distributions, like Ubuntu, follow a more traditional release model. They have fixed release cycles (e.g., every 6 months or every 2 years) where a new version is created, tested, and released as a complete package. Users then upgrade to the new version by performing an upgrade process.

#### Advantages of a rolling release

- **Continuous Updates:** You're always running the latest software versions without waiting for a new release.
- **Less Disruption:** No need to perform major version upgrades, which can sometimes require a lot of time and effort.
- **Access to New Features:** You can access new features and improvements as soon as they're available.

#### Advantages of a fixed release 

Like Debian-based distributions:
- **Stability:** Software updates are thoroughly tested before being released, which can lead to a more stable experience.
- **Predictability:** You know when major releases will occur, allowing for better planning.
- **Long-term Support:** Some fixed-release distributions offer long-term support (LTS) versions, which receive updates and security patches for an extended period.

Fixed releases prioritize stability and ease of maintenance but might not have the latest features as soon as they're released.

{{% /details %}}


### How to Customize Garuda

Garuda is an impressive looking distro out of the box:

* You can get their Art-Work of Garuda Dragonized from [this Gitlab repo](https://gitlab.com/garuda-linux/themes-and-settings/artwork/garuda-wallpapers/-/blob/master/src/garuda-wallpapers/Dr460nized%20Honeycomb.png?ref_type=heads)
* And the base KDE Plasma Theme used is: Sweet KDE - https://store.kde.org/p/1294174 