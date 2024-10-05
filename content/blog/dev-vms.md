---
title: "Trying NixOS with VMs"
date: 2024-10-30T23:20:21+01:00
draft: true
tags: ["Tinkering"]
summary: 'How to use VMs and try a new OS like NixOS'
url: 'testing-nix-os'
---

There are some options to virtualize OS: VMWare, VirtualBox (Free to use) or...**GNOME Boxes**:

```sh
sudo apt update
sudo apt install gnome-boxes qemu-kvm libvirt-daemon-system libvirt-clients
```

Download the latest NixOS ISO and launch it:

```sh
#wget https://channels.nixos.org/nixos-unstable/latest-nixos-minimal-x86_64-linux.iso -O nixos.iso
gnome-boxes
```

You can manage gnome-boxes via CLI, but I went the UI way.


As [desktop environment](https://wiki.nixos.org/wiki/Category:Desktop_environment), I went with Plasma 5 (instead of 6), but the Deepin one was also tempting.

## Getting started with NixOS

I came here for the package manager (stayed for the ease of use? we'll see).

Some useful commands:

```sh
sudo reboot

sudo systemctl start <service>
sudo systemctl stop <service>
sudo systemctl restart <service>
```

Installing stuff is so easy:

```sh
#nix-env -iA nixpkgs.<package-name>
nix-env -iA nixos.librewolf

nix search <query> #search for a pkg
nix search vim

#nix-env -e <package-name> #uninstall

nix-env -q #list installed pkgs
```

Update and upgrade pkgs:

```sh
sudo nix-channel --update
nix-env -u
```

---

## Interesting Stuff Regarding Emulation

* GNOME Boxes is a virtualization tool for Linux desktop environments (like GNOME on Ubuntu). It allows you to create, manage, and run virtual machines in a desktop environment. It’s primarily used to virtualize full operating systems on Linux PCs using technologies like QEMU/KVM.

* Termux, on the other hand, is a terminal emulator and Linux environment app for Android devices. It allows users to run a lightweight Linux environment on their Android phone or tablet, providing access to a wide range of command-line utilities and programming environments without rooting the device.