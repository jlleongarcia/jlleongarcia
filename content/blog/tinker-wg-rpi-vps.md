---
title: "Using a VPS as VPN with Wireguard"
date: 2024-12-01
draft: false
tags: ["Dev"]
summary: How to setup WG-easy in a VPS and use a Raspberry Pi as wireguard client. Bonus Wifi2eth.
url: how-to-use-wg-easy-with-a-vps
---


This year I have been [trying few **VPS providers**](https://jalcocert.github.io/Linux/docs/linux__cloud/cloud/#other-clouds).

I even had the chance to benchmark some of those [VPS and compare it with a **minipc/sbc**](https://jalcocert.github.io/JAlcocerT/cloud-vs-single-board-computers/).

But that's not it.

How about putting all of this together...with a [Wifi2Ethernet Bridge](https://jalcocert.github.io/RPi/posts/rpi-wifi-ethernet-bridge/)?


{{< cards cols="2" >}}
  {{< card link="https://jalcocert.github.io/RPi/posts/rpi-wifi-ethernet-bridge/" title="RPi Wifi2Eth" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/raspberry-pi-networking/" title="Wifi2Eth with Wireguard" >}}
{{< /cards >}}

> I like to bring such VPN configration [when Im far from home](#software-for-vacations)

## Setup Wireguard Server on a VPS

If you use a 3rd party VPN provider - you are skipping this step.

But its actually not complicated at all.

{{< callout type="info" >}}
Use the [Hetzner Setup Script](https://github.com/JAlcocerT/Linux/blob/main/Z_Cloud/Hetzner_101.sh) or the[ **SelfHosting script**](https://raw.githubusercontent.com/JAlcocerT/Linux/main/Z_Linux_Installations_101/Selfhosting_101.sh) as described [here](https://jalcocert.github.io/Linux/docs/linux__cloud/selfhosting/) to get **Docker ready**
{{< /callout >}}

We can use this [docker configuration](https://github.com/JAlcocerT/Docker/blob/main/Security/VPNs/Wireguard_docker_compose.yaml) with pure Wireguard.

But doing it with **wgeasy** will be much simpler.

Lets do it with [wgeasy](https://github.com/wg-easy/wg-easy)

**Generate a Hashed Password**

```sh
# Create the hashed password
docker run --rm -it ghcr.io/wg-easy/wg-easy wgpw 'YOUR_PASSWORD'

docker run --rm -it ghcr.io/wg-easy/wg-easy wgpw 'YOUR_PASSWORD' | sed 's/\$/\$\$/g'
```


{{< callout type="warning" >}}
1. Don't wrap the generated hash password in single quotes when you use docker-compose.yml. Instead, replace each $ symbol with two $$ symbols. [Example](https://github.com/wg-easy/wg-easy/blob/master/How_to_generate_an_bcrypt_hash.md)

2. You'll get different results (for the same given pass) because the hash is salted
{{< /callout >}}

### WGEasy Docker Compose File

```yaml
version: "3.8"  # Specify Docker Compose version (optional)

services:
  wg-easy:
    image: ghcr.io/wg-easy/wg-easy
    container_name: wg-easy
    environment:
      LANG: en  # Set the language for the web UI
      WG_HOST: 188.245.198.60  # Replace with your actual server IP
      PASSWORD_HASH: thisishashed!  # Replace with your generated password hash
      PORT: 51821  # Web UI port
      WG_PORT: 51820  # WireGuard UDP port
    volumes:
      - "/home/your_user/.wg-easy:/etc/wireguard"  # Mount local configuration directory (replace with absolute path)
    ports:
      - "51820:51820/udp"  # Publish WireGuard UDP port
      - "51821:51821/tcp"  # Publish Web UI port
    cap_add:
      - NET_ADMIN  # Grant network administration capabilities
      - SYS_MODULE  # Grant access to load kernel modules (potentially risky)
    sysctls:
      net.ipv4.conf.all.src_valid_mark: "1"  # Enable source address validation
      net.ipv4.ip_forward: "1"  # Enable IP forwarding
    restart: unless-stopped  # Restart container if it crashes

# Optional Networks (if needed)
# networks:
#   wg_network:
#     driver: bridge  # Define a bridge network (optional)
```

**Verifying Your Public IP Address**

```sh
curl -sS https://ipinfo.io/json #the command to use
curl -sS http://ip-api.com/json/ #provides info about country, ISP, ...
curl -6 ifconfig.me #ipv6 info 
```

Example output (if you use Hetzner VPS):

```json
{
  "org": "AS24940 Hetzner Online GmbH"
}
```

> For [DO](https://jalcocert.github.io/Linux/docs/linux__cloud/cloud/#digital-ocean---do) will appear as `DigitalOcean` and with [OVH there is extra config needed](https://jalcocert.github.io/Linux/docs/linux__cloud/cloud/#ovh-cloud)


## Wireguard Client Setup

Using the wgeasy UI at `http://vpsip:51821` you will be able to connect devices via QR code.

Also to download the wireguard config file.

If you raspberry pi has desktop enabled, you can just download the file and use it to configure the bridge.

{{< callout type="info" >}}
The wifi2bridge script. And the one with wireguard are here.
{{< /callout >}}

**If your Pi has CLI only**



---

## FAQ

{{< callout type="info" >}}
You can also use **[TailScale](https://jalcocert.github.io/Linux/docs/debian/linux_vpn_setup/#tailscale) VPN** on your devices.
{{< /callout >}}

### Software for Vacations

A VPN can be useful for vacations.

And this projects can help you plan them:

{{< cards cols="2" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/vacation-planner-python/" title="PyVacation Blog Post" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/trip-planner-with-weather/" title="Trip Planner Blog Post" >}}
{{< /cards >}}