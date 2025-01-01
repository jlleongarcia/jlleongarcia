---
title: Tools for SelfHosting 
type: docs
prev: docs/debian
next: docs/arch
sidebar:
  open: false
---


## Cloudflare Tunnels

How to expose Apps safely, through your domain, with https and **without exposing your home public IP**.

```sh
sudo docker network tunnel
```


```yml
version: '3.8'

services:
  cloudflared:
    image: cloudflare/cloudflared:latest
    container_name: cloudflared
    command: tunnel --no-autoupdate run --token yourfantastictoken
    networks:
      - tunnel #Cloudflare Network
    restart: always

networks:
  tunnel: #Cloudflare Network
```

{{< callout type="info" >}}
Remember to use the `tunnel` network on the containers you want to expose!
{{< /callout >}}

```sh
docker network connect tunnel portainer #your_docker_container_to_expose  #network (tunnel) - service
```

---


{{% details title="Screen Rotation? 🚀" closed="true" %}}

```sh
xrandr --output HDMI-A-0 --rotate normal
xrandr --output HDMI-A-0 --rotate right
```

{{% /details %}}


{{% details title="Whats my Local IP? 🚀" closed="true" %}}

```sh
ifconfig

#ifconfig eth0 | grep -A 10 "<global>" #check mac, and transfered packages

ifconfig eth0 | grep "inet " | awk '{ print $2 }' #if ETH Connected - SEE THE LOCAL IP

#ifconfig tailscale0 | grep "inet " | awk '{ print $2 }' #for Tailscale
```

{{% /details %}}