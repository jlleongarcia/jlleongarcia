---
title: "Networking - Wifi to Ethernet Bridge"
date: 2024-08-23T10:20:21+01:00
draft: false
tags: ["Dev"]
description: 'Tinkering with a Raspberry Pi and Networking.'
summary: 'Raspberry Pi - Wifi2Ethernet Bridge (With Wireguard) and more'
url: 'raspberry-pi-networking'
---



<!-- <https://www.youtube.com/watch?v=qhe6KUw3D78> -->


## Raspberry Pi: Wifi Bridge

Inspired by the awsome work of **[William Halley in his blog](https://www.willhaley.com/blog/raspberry-pi-wifi-ethernet-bridge/)**, where I was able to follow succesfully and *to share Wifi through Ethernet on a separated subnet* [with a Raspberry Pi 4 2GB](https://jalcocert.github.io/RPi/posts/rpi-wifi-ethernet-bridge/)

> Let's learn a little bit about **Networking by doing!**


{{< details title="Option 1 - Wifi to Ethernet with Separated subnet 📌" closed="true" >}}


The script that is provided is this one (again, credits to William):

```sh
#!/usr/bin/env bash

set -e

[ $EUID -ne 0 ] && echo "run as root" >&2 && exit 1

apt update && \
  DEBIAN_FRONTEND=noninteractive apt install -y \
    dnsmasq netfilter-persistent iptables-persistent

# Create and persist iptables rule.
iptables -t nat -A POSTROUTING -o wlan0 -j MASQUERADE
netfilter-persistent save

# Enable ipv4 forwarding.
sed -i'' s/#net.ipv4.ip_forward=1/net.ipv4.ip_forward=1/ /etc/sysctl.conf

# The Ethernet adapter will use a static IP of 10.1.1.1 on this new subnet.
cat <<'EOF' >/etc/network/interfaces.d/eth0
auto eth0
allow-hotplug eth0
iface eth0 inet static
  address 10.1.1.1
  netmask 255.255.255.0
  gateway 10.1.1.1
EOF

# Create a dnsmasq DHCP config at /etc/dnsmasq.d/bridge.conf. The Raspberry Pi
# will act as a DHCP server to the client connected over ethernet.
cat <<'EOF' >/etc/dnsmasq.d/bridge.conf
interface=eth0
bind-interfaces
server=8.8.8.8
domain-needed
bogus-priv
dhcp-range=10.1.1.2,10.1.1.254,12h
EOF

systemctl mask networking.service
```

{{< callout type="info" >}}
**Remember**, the names of wlan0 and eth0 used, can be different in other devices, check it with:
{{< /callout >}}

```sh
ifconfig
```

{{< /details >}}


The end result is that **the Raspberry Pi will act as a bridge between the WiFi connection and the Ethernet connection**, providing Internet access to devices connected via Ethernet- to the RPi.


## Raspberry Pi Bridge: Wifi to Ethernet (With wireguard)

That was really great and I was really impressed and happy that it worked perfectly the first time I tried.

Then, I wondered...*if the Raspberry Pi would be having a VPN connection, could we provide to the ethernet connected device that same connection?*

I decided to try with **Wireguard** (you will need a working VPN server that generates Wireguard config) and surprisingly **it worked with some modification**:

{{< details title="Pre-Requisite - We need to have wireguard installed: 📌" closed="true" >}}


```sh
sudo apt install wireguard
cp /home/Downloads/your_vpn_wireguard_configuration.conf /etc/wireguard #download the wireguard config: account-wireguard configuration
sudo wg-quick your_vpn_wireguard_configuration #the name of the .conf file that you have downloaded
```

This will make your wireguard client to be connected to the server.

Do you want to [check your public IP?](#is-the-vpn-working)

```sh
curl -sS https://ipinfo.io/json #the command to use
```

And if you need, to disconnect from Wireguard, just:

```sh
wg-quick down <name>
sudo wg-quick down your_vpn_wireguard_configuration
#sudo nano /etc/resolv.conf #to check/adapt DNS name (optional)
#sudo reboot (optional)
```

{{< /details >}}
 
{{% steps %}}

### Use this command to check which network interface your wireguard VPN has:

```sh
ifconfig
```

### This will be our new **bridge_wireguard.sh** script to route the WIFI to ethernet and provide VPN connection at the same time:

```sh
sudo nano bridge_wireguard.sh
```

{{% /steps %}}


{{< details title="Wifi to Ethernet Bridge (Wireguard) Script 📌" closed="true" >}}


```sh
#!/usr/bin/env bash

set -e

[ $EUID -ne 0 ] && echo "run as root" >&2 && exit 1

apt update && \
  DEBIAN_FRONTEND=noninteractive apt install -y \
    dnsmasq netfilter-persistent iptables-persistent

# Create and persist iptables rule.
# Here's the change: we're using the WireGuard interface (your_vpn_wireguard_netw_interface) instead of the WiFi interface (wlan0).
iptables -t nat -A POSTROUTING -o your_vpn_wireguard_netw_interface -j MASQUERADE
netfilter-persistent save

# Enable ipv4 forwarding.
sed -i'' s/#net.ipv4.ip_forward=1/net.ipv4.ip_forward=1/ /etc/sysctl.conf

# The Ethernet adapter will use a static IP of 10.1.1.1 on this new subnet.
cat <<'EOF' >/etc/network/interfaces.d/eth0
auto eth0
allow-hotplug eth0
iface eth0 inet static
  address 10.1.1.1
  netmask 255.255.255.0
  gateway 10.1.1.1
EOF

# Create a dnsmasq DHCP config at /etc/dnsmasq.d/bridge.conf. The Raspberry Pi
# will act as a DHCP server to the client connected over ethernet.
cat <<'EOF' >/etc/dnsmasq.d/bridge.conf
interface=eth0
bind-interfaces
server=8.8.8.8
domain-needed
bogus-priv
dhcp-range=10.1.1.2,10.1.1.254,12h
EOF

systemctl mask networking.service
```

{{< /details >}}

```sh
sudo bash bridge_wireguard.sh
sudo reboot
```

{{< callout type="info" >}}
with this version, you can route the traffic through any Wireguard Traffic (from your [custom VPS](#vps-for-the-experiment) or a provider like Mullvad, ProtonVPN,...)
{{< /callout >}}



## FAQ

{{< details title="Which WIFI is the raspberry pi connected to?" closed="true" >}}

```sh
nano /etc/wpa_supplicant/wpa_supplicant.conf
```

{{< /details >}}

{{< details title="What's the ping and internet speed?" closed="true" >}}

```sh
apt-get install -y iputils-ping
```

```sh
sudo apt-get install speedtest-cli
speedtest-cli
```

{{< /details >}}

{{< details title="Is the VPN Working?" closed="true" >}}

In addition to ipinfo.io, you can use:

```sh
#curl -sS https://ipinfo.io/json
curl -sS http://ip-api.com/json/ #provides info about country, ISP, ...
```
{{< /details >}}

{{< details title="What about DNS?" closed="true" >}}

```sh
nmcli device show | grep DNS #check which DNS the device is using
#ip a #get netwk interface to check, something like eth0, wlan...
#nmcli device show <your_netwk_interface> | grep IP4.DNS
##sudo nmcli connection modify <your_connection_name> ipv4.dns "192.168.3.200 9.9.9.9"
```

* dnscheck.tools
* DNS Leaks Check - https://mullvad.net/en/check
* https://cmdns.dev.dns-oarc.net/

Is port 67 free?

```sh
netstat -tuln | grep :67
#sudo systemctl stop a_conflicting_service #for now
##sudo systemctl stop a_conflicting_service #prevent it to run on boot
```

{{< /details >}}

{{< details title="How to Block ads with the Raspberry Pi" closed="true" >}}

1. You can use [PiHole with a RPi](https://jalcocert.github.io/RPi/posts/selfh-internet-better/)
2. You can also use [RaspAP](#how-to-setup-raspap) ad-blocking capabilities

{{< /details >}}

<!-- 

### How to add Debian Buster Backports to Raspberry Pi OS (libseccomp2)

> FOR JELLYFIN & QBITTORRENT TO WORK:

```sh
$ echo 'deb http://deb.debian.org/debian buster-backports main contrib non-free' | sudo tee -a /etc/apt/sources.list
$ sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 04EE7237B7D453EC 648ACFD622F3D138
$ sudo apt update
$ sudo apt install -t buster-backports [package]
sudo apt install -t buster-backports youtube-dl

```

```sh
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 04EE7237B7D453EC 648ACFD622F3D138
echo "deb http://deb.debian.org/debian buster-backports main" | sudo tee -a /etc/apt/sources.list.d/buster-backports.list
sudo apt update
sudo apt install -t buster-backports libseccomp2
``` -->



### VPS for the Experiment

| Provider Name         | Comments                                 |
|-----------------------|------------------------------------------|
| [Skillhost.pl Hosting VPS Polska](https://skillhost.pl/hosting-vps-polska) | Polish-based VPS provider with a focus on local services and support. |
| [Hetzner](https://jalcocert.github.io/Linux/docs/linux__cloud/cloud/#hetzner) | Well-known European hosting provider with a wide range of server options. / ISP will appear as Hetzner. |
| [GCP](https://console.cloud.google.com/) |  |


### How to Setup WG-Easy

{{% steps %}}

### Step 1

Get your VPS public IP

```sh
ip -4 -brief a #you will need to use it
```

### Step 2

[Install Docker](https://jalcocert.github.io/Linux/docs/linux__cloud/selfhosting/) and use the stack below.

{{% /steps %}}

{{< details title="How to Setup Wireguard with WG-Easy and Docker 📌" closed="true" >}}


```yml
version: '3'
services:
  wg-easy:
    container_name: wg-easy
    #env_file: .env
    environment:
      - WG_HOST= your-vps-ip-address #${WG_HOST}
      - WG_PORT=51820
      - PASSWORD= someamazingpassword #${WG_PASSWORD} # It's recommended to keep sensitive data in an .env file
      #- WG_PEER_DEFAULT_DNS=9.9.9.9
      - LANG=en
    volumes:
      - ./wg-easy:/etc/wireguard
      #- wg_data:/etc/wireguard
    ports:
      - 51820:51820/udp # VPN traffic
      - 51821:51821/tcp # Web interface
    cap_add:
      - NET_ADMIN
      - SYS_MODULE
    sysctls:
      - net.ipv4.conf.all.src_valid_mark=1
      - net.ipv4.ip_forward=1
    restart: unless-stopped
    image: ghcr.io/wg-easy/wg-easy
#     networks:
#       - nginx_default #https for wg-easy UI  
  
# networks:
#   nginx_default:
#     external: true    

# volumes:
#   wg_data:
#     name: wg_data    
```


{{< /details >}}


### How to Setup RaspAP

```yml


```

> Go to `http://raspberrypi.local` and access it with `admin/secret`


### Software for Routers

#### VyOS

* https://github.com/runborg/vyos-pi-builder

#### OpenWRT

* https://openwrt.org/toh/raspberry_pi_foundation/raspberry_pi
* <https://www.youtube.com/watch?v=fOYmHPmvSVg>