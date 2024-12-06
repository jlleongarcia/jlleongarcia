---
title: "[Review]ing a Travel Router - GL-MT3000"
date: 2024-12-06
draft: false
# cover:
#     image: "https://socialify.git.ci/alejandro-ao/ask-multiple-pdfs/image?description=1&font=Inter&language=1&name=1&stargazers=1&theme=Auto"
#     alt: "ChatPDF" # alt text
#     caption: "SelfHosting A RAG App to chat with PDFs." # display caption under cover
tags: ["Gen-AI","Python","Dev"]
description: 'Better Networking while Traveling with GL-MT3000 and Tailscale VPN.'
summary: 'How to use a travel router to access home resources while abroad.'
url: 'travel-router-gl-mt3000-review'
---

The last years I have been interested to improve my networking knowledge.

Being involved in [Telecom projects](https://jalcocert.github.io/JAlcocerT/telecom-concepts-101/) was a great motivation.

But its something that goes even behind in time with the [Raspberry Pi](https://jalcocert.github.io/RPi/posts/rpi-wifi-ethernet-bridge/).

Which I tried to summarize [here with 3rd party VPNs](https://jalcocert.github.io/JAlcocerT/raspberry-pi-networking/) and recently using [VPS+Wifi2Ethernet](https://jalcocert.github.io/JAlcocerT/how-to-use-wg-easy-with-a-vps/)

And VPNs are helpful of course to make sure that relevant content will be available, like [Linux OS images that we want to keep](https://jalcocert.github.io/JAlcocerT/how-to-torrent-with-a-raspberry/).

But they are also useful to connect to our home server when we are far from home.

And if for some reason you are no table to do **port forwarding** with your home router...

...you will have come across already with **TailScale**

> This is why I got a GL-MT3000 Router, to combine it with Tailscale VPN

## Setup GL-MT3000 Router

1. Connect to the router WIFI signal via the default `http://192.168.8.1/#/login`
2. Change the master password & select the language
3. 

![MT3000 Admin PWD](/blog_img/hardware/GL-MT3000-pwd.png)

## Closing Thoughts

We can also use [Wireguard and OpenVPN](#interesting-vpns-solutions) with the ML3000.

---

## FAQ

### Interesting VPNs Solutions

* Tailscale
* HeadScale
* Wireguard - Requires Port Forwarding at home