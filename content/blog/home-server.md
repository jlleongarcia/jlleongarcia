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

### Podman
```sh
apt install podman
podman --version # just to make sure it is correctly installed
```