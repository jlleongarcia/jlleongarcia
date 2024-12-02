---
title: "How to Share Pi OS via Torrent [with VPN]"
date: 2024-12-02
draft: false
tags: ["Dev"]
summary: How to share Raspberry Pi OS (Bullseye) as Torrent with Qbitrorrent/Transmission and VPN.
url: how-to-torrent-with-a-raspberry
---

First of all: Why sharing Raspberry Pi OS?

I got some incompatibility issues with [some **IoT Projects**](https://jalcocert.github.io/RPi/categories/iot-data-analytics/) and the latest Pi Images (bookworm, DEBIAN12).

So want to make sure that the projects that I place effort on will continue to work.

We can get Legacy images from [here](https://www.raspberrypi.com/software/operating-systems/#raspberry-pi-os-legacy)

But what if at some point they wont be available?

The raspberry team provides for each image a `.torrent` file so that any of us will become P2P keepers of the OS history.

{{< callout type="warning" >}}
Make sure that you **understand what you are sharing** via P2P. This is just a guide to allow you to share **Open Source Software** with others.
{{< /callout >}}

## How to Setup Torrents for a Raspberry Pi

I have been collecting some [similar interesting Services to spin with Docker](https://github.com/JAlcocerT/Docker/tree/main/Media/P2P).

{{< callout type="info" >}}
We will need **Docker/Portainer** - So get ready with this [SelfHosting Script](https://raw.githubusercontent.com/JAlcocerT/Linux/main/Z_Linux_Installations_101/Selfhosting_101.sh) as **described [here](https://jalcocert.github.io/Linux/docs/linux__cloud/selfhosting/)**
{{< /callout >}}

You have many alternatives, among them: QBittorrent, Transmission,...

### Qbittorrent with the Raspberry Pi


You need this **docker-compose config** file:

```yml
---
version: "2.1"
services:
  qbittorrent:
    image: ghcr.io/linuxserver/qbittorrent
    container_name: qbittorrent
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Madrid
      - WEBUI_PORT=6011
    volumes:
      - /home/Docker/qbittorrent/config:/config
      - /home/Downloads:/downloads
    #network_mode: "container:your_gluetun_container_name" #change gluetun to your VPN container name   
    #network_mode: "service:your_gluetun_service_name" #change gluetun to your VPN service name  
    # ports: #you wont need the ports in this configuration file, you will need to include them in the Gluetun container
    #   - 6081:6881
    #   - 6081:6881/udp
    #   - 6011:6011  
    restart: unless-stopped
```


> **Thanks to [this guide](https://fossengineer.com/selfhosting-qBittorrent-with-docker-and-VPN/)** and this [one](https://fossengineer.com/transmission-with-vpn-torrent/) for Transmission

### Transmission with the Pi

```yml
---
version: "2.1"
services:
  transmission:
    image: ghcr.io/linuxserver/transmission 
    container_name: transmission
    environment:
      - PUID=1000 
      - PGID=1000 
      - TZ=Europe/Madrid 
    ports:
      - 9091:9091 #UI Port for Transmission
      - 51413:51413 
      - 51413:51413/udp 
    volumes:
      - /home/Docker/Torrents/Transmission/config:/config
      - /home/Downloads:/downloads
      - /home/Downloads/Transmission_watch:/watch
    restart: unless-stopped
```


{{< callout type="info" >}}
When sharing content via P2P, you are **exposing your public IP**. You might want to [use a **VPN**](#how-to-torrent-with-a-vpn)
{{< /callout >}}


### How to Torrent with a VPN

{{< cards cols="1" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/how-to-use-wg-easy-with-a-vps/" title="Wireguard on a VPS" >}}
    {{< card link="https://jalcocert.github.io/JAlcocerT/how-to-use-wg-easy-with-a-vps/" title="wgEasy on VPS" >}}
{{< /cards >}}

**Here I want to show you have to do it using the VPN you just setup**.

But you can do similarly with 3rd party VPNs.

Choose one and use your `wg0` network interface from the **wireguard client**:

```yaml
version: "2.1"
services:
  qbittorrent:
    image: ghcr.io/linuxserver/qbittorrent
    container_name: qbittorrent
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Madrid
      - WEBUI_PORT=6011 #UI PORT FOR QBITTORRENT
    #network_mode: "container:your_gluetun_container_name" #change gluetun to your VPN container name   
    #network_mode: "service:your_gluetun_service_name" #change gluetun to your VPN service name  
    # ports: #you wont need the ports in this configuration file, you will need to include them in the Gluetun container
    #   - 6081:6881
    #   - 6081:6881/udp
    #   - 6011:6011        
    volumes:
      - /home/Docker/qbittorrent/config:/config
      - /home/Downloads:/downloads
    network_mode: "host"  # Use the host network stack (which includes wg0)
    restart: unless-stopped



```

Key Points to understand:
1. **`network_mode: "host"`**
   - This allows the container to share the host network stack directly, including the `wg0` interface.

2. **No Port Mapping**
   - When using `network_mode: "host"`, port mapping (`ports:`) is unnecessary since the container uses the host's network stack.

3. **Ensure `wg0` is Active**
   - Before starting the container, ensure that your WireGuard interface (`wg0`) is active and routes traffic properly. Use the following command to check:

```bash
wg show
```

4. **Routing Through WireGuard**
   - Verify that your host system routes the necessary traffic through the WireGuard tunnel. For example, you may need to ensure that the `qBittorrent` container traffic follows the correct `wg0` routing rules.

**Verify the Setup** After starting the container with `docker-compose up -d`:

1. Access the `qBittorrent` Web UI at `http://<host-ip>:6011`.
2. Verify the external IP of your `qBittorrent` traffic to confirm it uses the WireGuard tunnel:
   - Check your IP address via a tracker (e.g., [ipleak.net](https://ipleak.net)) or using the tracker settings in `qBittorrent`.

```sh
#docker exec -it qbittorrent sh
curl -sS https://ipinfo.io/json #the command to use
#wget -qO- https://ipinfo.io/json

#for windows you would use
#powershell -Command "(Invoke-WebRequest -Uri https://ipinfo.io/json).Content"
```

---

## Conclusiones

So thats it for now.

You you can improve software availability and resilience.

Kind of share your work, but...share what you've saved?

At least, **Ill keep a copy of Raspberry Pi OS (Debian 11)** for the Pi.

And probably some good [Armbian](https://www.armbian.com/orangepi-5/) for the [Orange Pi 5](https://jalcocert.github.io/RPi/posts/pi-vs-orange/)

{{< callout type="warning" >}}
Sharing OSS OS images might seem trivial. But it can help smaller projects to get going!
{{< /callout >}}

### FAQ

#### VPN Providers

* [Mullvad](https://mullvad.net/en/account)
* [ProtonVPN](https://account.protonvpn.com)
    * [Downloads → WireGuard configuration](https://account.protonvpn.com/downloads#wireguard-configuration)
* NordVPN

#### Setup a VPN with Wireguard on a VPS

{{< cards cols="1" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/how-to-use-wg-easy-with-a-vps/" title="Setup a VPS with Wireguard with wgEasy" >}}
{{< /cards >}}

#### How to use Gluetun

* Setup [Gluetun Container](https://fossengineer.com/gluetun-vpn-docker/)
    * https://github.com/qdm12/gluetun-wiki/blob/main/setup/options/wireguard.md

#### How to check IPs

* https://ipleak.net/

```sh
curl -sS https://ipinfo.io/json #the command to use
curl -sS http://ip-api.com/json/ #provides info about country, ISP, ...
curl -6 ifconfig.me #ipv6 info 
```