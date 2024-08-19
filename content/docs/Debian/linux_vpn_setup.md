---
title: Linux and VPNs
type: docs
prev: docs/Debian/
---

## Tailscale

To install **a home working VPN**, the easiest way is to use [Tailscale](https://tailscale.com/kb/installation) and pair our devices.

Lets install it with:


```sh
curl -fsSL https://tailscale.com/install.sh | sh
# sudo apt-get install apt-transport-https &&
# curl -fsSL https://pkgs.tailscale.com/stable/raspbian/buster.gpg | sudo apt-key add - &&
# curl -fsSL https://pkgs.tailscale.com/stable/raspbian/buster.list | sudo tee /etc/apt/sources.list.d/tailscale.list &&
# sudo apt-get update &&
# sudo apt-get install tailscale &&
sudo tailscale up
tailscale ip -4 #get the ip 

#sudo tailscale logout
#sudo tailscale down
#To force all the traffic to go through the device, Port forwarding is needed:
```

```sh
echo 'net.ipv4.ip_forward = 1' | sudo tee -a /etc/sysctl.conf &&
echo 'net.ipv6.conf.all.forwarding = 1' | sudo tee -a /etc/sysctl.conf &&
sudo sysctl -p /etc/sysctl.conf &&
sudo tailscale down
```

With this final command, the PC/RPi will be an exit node:


```sh
sudo tailscale up --advertise-exit-node
```

**Remember** to allow as admin in the tailscale network this machine as exit node as well. In review **route settings -> use as exit node**.

## Mullvad

As third Party VPN provider, Mullvad worked great for me.

### Mullvad ❤️ Tailscale 

* <https://tailscale.com/mullvad>

* <https://tailscale.com/kb/1258/mullvad-exit-nodes>
* <https://mullvad.net/en/blog/2023/9/7/tailscale-has-partnered-with-mullvad>

### DNS What?

Think of DNS like a phonebook for the internet. Instead of using people's names to find their phone numbers, we use domain names (like www.google.com) to find the addresses (IP addresses) of websites and services on the internet.

DNS servers are essential for the internet to work smoothly because they help connect domain names (like website names) to the actual places (IP addresses) where those websites are hosted.

* Choosing domain provider - https://www.reddit.com/r/selfhosted/comments/19fmoy2/aaand_it_begins/
    * DDNS Updater - https://github.com/qdm12/ddns-updater
    * https://github.com/rohit267/cloudflare-ddns-updater
    * https://www.reddit.com/r/selfhosted/comments/19fjva1/just_got_an_email_from_googledomains_that_they/

#### Which DNS am I using?

You can check it with:

```sh
nmcli device show | grep DNS
```

If you see a local IP, it means you are most likely using the ones your Router dictates.


{{< callout type="info" >}}
You should be able to change the default ones for your router, or, just change individually the DNS Server for a particular device (laptop, phone...).

Be mindful about this change, if you lost connectivity to internet. No valid DNS Server means that websites will not resolve in your browser.

{{< /callout >}}

#### Typical DNS's

* Google Public DNS: Google provides public DNS servers at the IP addresses 8.8.8.8 and 8.8.4.4. These are easy to remember and are known for their speed and reliability.

* OpenDNS: OpenDNS offers both free and paid DNS services. They provide public DNS servers with filtering options to block certain websites or content categories.

* Cloudflare DNS: Cloudflare offers public DNS servers at the IP addresses 1.1.1.1 and 1.0.0.1. They focus on privacy and speed and claim to be one of the fastest DNS services available.

* Quad9: Quad9 provides a free DNS service at the IP addresses 9.9.9.9 and 149.112.112.112. They emphasize security and block access to known malicious websites.



#### Checking DNS Leaks

You can use: <https://mullvad.net/en/check>


> You might also be interested in **HeadScale**: https://www.youtube.com/watch?v=OECp6Pj2ihg, or [Zrok](https://zrok.io/) or [telebit](https://www.youtube.com/watch?v=-QGbfTY5ExE)

---

## FAQ

### How to use VPN for Firefox only?

There are few approaches to achieve this, but you can try the container approach - [Run Firefox and Mullvad VPN in Docker containers](https://fossengineer.com/using-bard-selfhosting-firefox-with-vpn-and-docker/).

### How about Torrenting safely?

You can also make your containerized [qbittorrent to have as network only your VPN](https://fossengineer.com/selfhosting-qBittorrent-with-docker-and-VPN/) - which will block your home IP be ever exposed.

### How can I have my own DNS Server?

* [Unbound](https://jalcocert.github.io/RPi/posts/selfh-internet-better/#unbound-dns)
* [CoreDNS](https://github.com/coredns/coredns)
* Bind9

#### Check Port 67 is Free

```sh
netstat -tuln | grep :67
#netstat -tuln
```

If something is there, you can stop it for this session

```sh
sudo systemctl stop a_conflicting_service #for now
#sudo systemctl stop a_conflicting_service #prevent it to run on boot
```

### So I can block Adds On the go now?

Yes, if you have [PiHole](https://fossengineer.com/selfhosting-PiHole-docker/) at home, you can access it from anywhere when using Tailscale: <https://tailscale.com/kb/1114/pi-hole>

<!-- {{< gist jalcocert 302f787db6f6d75e978674e0e18d1185
"Docker-Security-Pihole.yml">}}

{{< gist "JAlcocerT/197667ec5ec0da53e78eb58c4253a73f/Docker-Security-Pihole.yml" >}} -->


### And also code from an Ipad?

Yes, you can with Tailscale + VSCode Server: <https://tailscale.com/kb/1166/vscode-ipad>


### Tailscale MagicDNS

<https://tailscale.com/kb/1081/magicdns>


### DuckDNS?

You might have heard about DuckDNS as well.

#### what is DuckDNS?

DuckDNS is a free dynamic DNS (Domain Name System) service that allows users to create a custom domain name (subdomain) that points to their dynamic IP address. 

It can provide HTTPs to your SelfHosted services - [example](https://fossengineer.com/selfhosting-whoogle-docker/)

#### How can I use DuckDNS?

You can use DuckDNS together with [NGINX](https://fossengineer.com/selfhosting-nginx-proxy-manager-docker/#https-locally-nginx--duckdns)

### And No-IP?

No-IP is a dynamic DNS service that offers more options and additional services compared to some other free dynamic DNS providers like DuckDNS.

<https://www.noip.com/>

### What are DHCPs?

A DHCP (Dynamic Host Configuration Protocol) server is a **network service that automatically assigns IP addresses and network configuration settings** to devices on a local area network (LAN) or network segment. Here's what a DHCP server does and why it's important:

### Other VPNs

Tailscale is really easy to use and avoid problems with Port Forwarding with your Router. If you want a fully F/OSS equivalent, **try Headscale**.

With time, you should get also familiar with **Wireguard** or OpenVPN.