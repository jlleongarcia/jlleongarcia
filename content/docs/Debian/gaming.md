---
title: Gaming
type: docs
prev: docs/Debian/
---

Yes, it is definitely possible to **play games on Linux**.

While Linux was traditionally less popular for gaming compared to Windows, there have been significant improvements in recent years, making Linux a viable gaming platform. Here's how you can play games on Linux:

Some game developers now release their titles with native Linux support. These games are optimized to run on Linux systems without the need for compatibility layers or emulators. You can find Linux-native games on platforms like Steam, GOG, and the Humble Store.

## Gaming on Linux

### WINE

[Wine](https://www.winehq.org/) is a compatibility layer that allows you to **run some Windows applications, including games, on Linux**. While it's not as user-friendly as some other options, it can be a valuable tool for running older or unsupported games.

#### PlayOnLinux

[PlayOnLinux](https://www.playonlinux.com/en/supported_apps-1-0.html) is a **graphical front-end for Wine**, making it easier to install and manage Windows games on Linux. It provides a user-friendly interface and pre-configured scripts for various games.

#### Bottles

[Bottles](https://flathub.org/apps/com.usebottles.bottles) is a graphical wrapper for Wine that makes it easier to manage and use Windows applications.

### Steam Play + Proton

Steam, one of the largest gaming platforms, has a feature called Proton, which allows you to play Windows games on Linux.

> Database of everything on Steam - ttps://steamdb.info/

**[Proton](https://github.com/ValveSoftware/Proton) is a compatibility layer** based on wine that includes Wine and various enhancements to make many Windows games work seamlessly on Linux. It's worth noting that not all Windows games are compatible, but the [list of supported games](https://www.protondb.com/explore) is continually growing.

> ProtonDB is a community-driven website and database that provides compatibility information for running Windows games on Linux using Valve’s Proton compatibility layer.

### Lutris

[Lutris](https://lutris.net/) is an **open-source gaming platform** that simplifies the installation and management of games on Linux. It supports a [wide range of games](https://lutris.net/games) from various sources, including Steam, GOG, and more. Lutris also allows you to configure different game emulators and wine versions for maximum compatibility.


## Other Ways

* Game Emulators: Linux supports various game emulators, allowing you to play retro games from consoles like NES, SNES, PlayStation, and more.

* ProtonGE: ProtonGE is a custom version of Proton that includes additional features and compatibility improvements for running Windows games on Linux.

* Native Linux Game Stores: Apart from Steam, there are other game stores that offer native Linux games, such as the Epic Games Store and itch.io.

* SteamOS: Valve, the company behind Steam, developed SteamOS, a Linux-based ([Debian](https://jalcocert.github.io/Linux/docs/debian/))operating system designed for gaming. While it was primarily designed for use on Steam Machines and dedicated gaming consoles, you can install SteamOS on a regular PC to create a Linux-based gaming system.

### Virtual Machine with Windows

This is another choice - Have your **Linux main OS** and then just 'swap' to Windows for those games that you are not able to make work properly.

[QEMU](https://jalcocert.github.io/Linux/docs/debian/virtualization/#installing-qemu-kvm) and KVM are two open-source virtualization technologies that work together to create powerful virtual machines.

* QEMU is a general purpose emulator that can run operating systems on different hardware architectures. It can also be used to create virtual machines that run on top of a host operating system. QEMU is written in C and C++ and is available for a wide range of platforms, including Linux, Windows, and macOS.

* KVM (Kernel-based Virtual Machine) is a hypervisor that runs directly in the Linux kernel. It provides high performance virtualization by using the hardware virtualization features of modern CPUs. KVM is a type 1 hypervisor, which means that it runs at the highest level of the system, even above the operating system. This gives KVM direct access to the hardware, which allows it to run virtual machines with near-native performance.

When QEMU and KVM are used together, QEMU provides the emulation of the virtual machine's hardware, while KVM provides the acceleration that makes the virtual machine run quickly. This combination makes QEMU and KVM a powerful and versatile virtualization solution that can be used for a wide variety of purposes.

> You can play games with QEMU, but it depends on the type of games you want to play and your hardware configuration.

#### Without GPU passthrough

If you only want to play older or less demanding games, you may be able to get by without using GPU passthrough. However, this will significantly impact the performance of your games. You may experience lag, stuttering, and low frame rates.

This is because **QEMU will have to emulate the graphics hardware**, which can be a very CPU-intensive task.

#### With GPU passthrough

If you want to play modern or graphically demanding games, you will need to use GPU passthrough. This involves [**passing one of your physical GPUs** (assuming you have 2) to the virtual machine](https://jalcocert.github.io/Linux/docs/debian/virtualization/#how-to-do-gpu-passthrough). This will allow the virtual machine to use the graphics card directly, which will significantly improve the performance of your games.

> Learn more about it: <https://github.com/JamesTurland/JimsGarage/tree/main/GPU_passthrough>

#### Nested Virtualization

If you have only one GPU, it's still possible to play games with QEMU, but you'll need to use a technique called **nested virtualization**. This involves running a separate hypervisor inside the virtual machine, such as KVM. The nested hypervisor will then take control of the GPU and pass it on to the virtual machine.

Nested virtualization is a more complex setup than GPU passthrough, but it can be a good option if you only have one GPU and you need to play modern games.

---

## FAQ

### How to Benchmark Gaming Performance

* https://github.com/flightlessmango/MangoHud


### Emulators on Linux

```sh
flatpak install flathub org.ryujinx.Ryujinx
flatpak install flathub org.duckstation.DuckStation
flatpak install flathub app.xemu.xemu
```