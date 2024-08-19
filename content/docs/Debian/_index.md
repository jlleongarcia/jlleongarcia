---
title: Debian Based Distros
type: docs
prev: docs/first-page
next: docs/folder/leaf
sidebar:
  open: false #true
---

Debian is a widely respected, stable Linux distribution known for its reliability, **extensive software repository**, and strong commitment to free and open-source software principles.

Debian's **package management system, [APT](https://jalcocert.github.io/Linux/docs/debian/linux_installing_apps/#apt)** (Advanced Package Tool), simplifies software installation, upgrades, and maintenance. The distribution **emphasizes system stability** and security, making it a popular choice for servers and mission-critical environments.

> Here you have a [GIST with examples](https://gist.github.com/JAlcocerT/197667ec5ec0da53e78eb58c4253a73f) ♻️

{{% details title="Get to Know! 🚀" closed="true" %}}

* Debian provides users with a robust and well-maintained ecosystem of software packages, covering a wide range of applications and utilities. It offers multiple release branches, including the stable, testing, and unstable branches, allowing users to choose the level of stability and software freshness that suits their needs.

* While Debian doesn't have the same "do-it-yourself" philosophy as [Arch Linux](https://jalcocert.github.io/Linux/docs/arch/), it provides a solid foundation for various use cases, including desktop computing, server hosting, and embedded systems. 


{{% /details %}}



> It's well-regarded for its community-driven development process and commitment to free software, making it a trusted choice for users who **prioritize open-source principles and long-term support**.

### My Favourite Debian *flavours*

* K/Ubuntu - KDE or GNOME Desktop Environment
* ZorinOS - KDE
* Raspbian - if you are into Raspberries!

---

  <!-- {{< hextra/feature-card
    title="Get Ubuntu"
    subtitle="The most popular OS to start your Linux Journey."
    class="aspect-auto md:aspect-[1.1/1] max-lg:min-h-[340px]"
    image="https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/ubuntu.png"
    imageClass="top-[40%] left-[36px] w-[180%] sm:w-[110%] dark:opacity-80"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(142,53,74,0.15),hsla(0,0%,100%,0));"
  >}}

{{< hextra/feature-card
    title="Get Ubuntu"
    subtitle="The most popular OS to start your Linux Journey."
    class="aspect-auto md:aspect-[1.1/1] max-lg:min-h-[100px]"  
    image="https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/ubuntu.png"
    imageClass="top-[40%] left-[10px] w-[45%] sm:w-[35%]"  
    style="background: radial-gradient(ellipse at 50% 80%,rgba(142,53,74,0.15),hsla(0,0%,100%,0));"
>}}


{{< hextra/feature-card
    title="Get Ubuntu"
    subtitle="The most popular OS to start your Linux Journey."
    class="aspect-auto md:aspect-[1.1/1] max-lg:min-h-[85px]" 
    image="https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/ubuntu.png"
    imageClass="top-[20%] left-[9px] w-[45%] sm:w-[27.5%]"  
    style="background: radial-gradient(ellipse at 50% 80%,rgba(142,53,74,0.15),hsla(0,0%,100%,0));"
>}} -->



## Managing Packages in Debian

You might be wondering, where do I start to install my favourite Apps in Debian (most likely, in Ubuntu)?

### How can I Use APT?

You can search for available Packages at: <https://tracker.debian.org/>  - (For example: <https://tracker.debian.org/pkg/7zip>)

{{% details title="Check HOW 🔥" closed="true" %}}

APT (Advanced Package Tool) is a package management system used in Debian-based Linux distributions, including Debian itself, Ubuntu, and many others. It simplifies the process of installing, updating, and managing software packages on your system. Here are some common APT commands and tasks:

1. Updating Package Lists:
   To update the list of available packages from the repositories, use the following command:

```sh
sudo apt update
```

2. Installing Packages:
   To install a package, use the `apt install` command followed by the package name. For example:
```sh
sudo apt install package-name
```

3. Removing Packages:
   To remove a package from your system, use the `apt remove` command followed by the package name:
```sh
sudo apt remove package-name
```

4. Upgrading Packages:
   To upgrade all installed packages to their latest versions, use the following command:
```sh
sudo apt upgrade
```

   To upgrade the entire distribution to a new release (e.g., from Ubuntu 20.04 to 22.04), you can use the `dist-upgrade` command:
```sh
sudo apt dist-upgrade
```

5. Searching for Packages:
   To search for packages by name or keywords, use the `apt search` command. For example:
```sh
apt search package-name
```

6. Listing Installed Packages:
   You can list all installed packages using the `apt list` command:
```sh
apt list --installed
```

7. Cleaning Up:
   To remove cached package files that are no longer needed, you can use the `apt clean` command:
```sh
sudo apt clean
```

These are some of the basic APT commands you can use to manage software packages on your Debian-based system. Remember to run these commands with superuser privileges (using `sudo`) if you're not already logged in as the root user. Additionally, you can use the `man apt` command to access the manual pages for APT and learn more about its options and features.

{{% /details %}}

### Ways to Manage Packages with Debian

1. With .deb files
2. With tar files
3. [Snap](https://jalcocert.github.io/Linux/docs/debian/linux_installing_apps/#snap)
4. [Flatpak](https://jalcocert.github.io/Linux/docs/debian/linux_installing_apps/#flatpak)
5. [Nix](https://jalcocert.github.io/Linux/docs/nix/)

6. The already mentioned - [APT](https://jalcocert.github.io/Linux/docs/debian/linux_installing_apps/#apt)
7. Or use APT with [NALA](https://jalcocert.github.io/Linux/docs/debian/linux_installing_apps/#nala)
8. AppImages

> A [Gist](https://gist.github.com/JAlcocerT/197667ec5ec0da53e78eb58c4253a73f) with useful installations for Debian ♻️

### How to Install HomeBrew in Linux

[HomeBrew](https://brew.sh/) is the MacOS package manager.

```sh
sudo apt install build-essential procps curl file git -y
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
<!-- https://www.youtube.com/watch?v=kDlfAM-2RTw -->