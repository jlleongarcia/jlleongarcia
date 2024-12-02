---
title: "How to Share Pi OS via Torrent [with VPN]"
date: 2024-12-02
draft: false
tags: ["Dev"]
summary: How to share Raspberry Pi OS (Bullseye) as Torrent with Qbitrorrent/rTorrent and VPN.
url: how-to-torrent-with-a-raspberry
---

First of all: Why sharing Raspberry Pi OS?

I got some incompatibility issues with [some IoT Projects](https://jalcocert.github.io/RPi/categories/iot-data-analytics/) and the latest Pi Images (bookworm, DEBIAN12).

So want to make sure that the projects that I place effort on will continue to work.

We can get Legacy images from [here](https://www.raspberrypi.com/software/operating-systems/#raspberry-pi-os-legacy)

But what if at some point they wont be available?

The raspberry team provides for each image a `.torrent` file so that any of us will become P2P keepers of the OS history.


{{< callout type="info" >}}
We will need **Docker/Portainer** - So get ready with this [SelfHosting Script](https://raw.githubusercontent.com/JAlcocerT/Linux/main/Z_Linux_Installations_101/Selfhosting_101.sh) as **described [here](https://jalcocert.github.io/Linux/docs/linux__cloud/selfhosting/)**
{{< /callout >}}

## 