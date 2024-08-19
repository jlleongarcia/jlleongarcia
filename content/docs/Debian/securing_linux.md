---
title: Secure your Linux
type: docs
prev: docs/Debian/
---

First things first - Remember to have your system packages & Kernel updated.

```sh
sudo apt update && apt upgrade
hostnamectl
```

{{% details title="How to get latest ZorinOS Version" closed="true" %}}

```sh
sudo apt install zorin-os-updater
```

{{% /details %}}

### Setup fail2ban

```sh
#fail2ban
sudo apt-get install -y \
apt-transport-https \
ca-certificates \
curl \
gnupg2 \
vim \
fail2ban \
ntfs-3g
```

Then:


```sh
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local && #copying it to edit
sudo nano /etc/fail2ban/jail.local
```

Add this to the file to ban for 24h if retry +3 times:


```sh
bantime = 86400
port    = ssh
logpath = %(sshd_log)s
backend = %(sshd_backend)s
maxretry = 3
```

```sh
sudo service fail2ban restart &&
sudo nano /var/log/fail2ban.log
```

### Create SSH keys

This will make possible to log in to your linux server without typing a password when both computers have the same key files.

In combination with fail2ban described before, it makes the brutte-force attacks to loose sense with your server.

### Firewall setup (UFW)

sudo ss -tupln #ports in use


```sh
sudo apt install ufw && #ufw
sudo ufw status &&
sudo ufw allow 22 && #allow ssh
sudo ufw enable &&
sudo ufw status &&
sudo ufw reload #restart it
sudo ufw allow 717 #example to allow conexion
```

Typical ports that are used: 22 for ssh, 443 for https, 80 for http.

### Check devices in local network

```sh
sudo apt install nast nmap \
sudo nast -m
```

or simply:


```sh
nmap -sP 192.168.1.0/24 | grep "scan"
```

You can also use any of these tools for [local Network Monitoring](https://jalcocert.github.io/RPi/posts/selfh-internet-better/#pi-alert) with Docker.

---

## FAQ

### WatchYourLAN with Docker

An awsome tool that will alert you of new devices on your Home network.

You can [install WYL really quickly with Docker](https://fossengineer.com/selfhosting-WatchYourLAN-docker/).

#### My internet still slow - ISP issues?

You can get regular internet speed tests with the help of [OpenSpeedTest Tracker in Docker](https://fossengineer.com/selfhosting-internet-speed-tracker-with-docker/).

### How to expose services safely to the Internet

* A great starting point is to [get Cloudflare tunnels running in Docker](https://fossengineer.com/selfhosting-cloudflared-tunnel-docker/).

Then, you can connect any other Docker container to Cloudflare Tunnel Network and expose it to the internet, without your home Address being discovered.

* You might also want to try another approach.

Setup [NGINX with Docker](https://fossengineer.com/selfhosting-nginx-proxy-manager-docker/) and just expose the Home Router / Cloud Provider ports for NGINX. For this approach to work at home, you will need to Port Forward. And the IP of the home/cloud would be expose.

### How to have HTTPs with Local Services

For this case, you can setup a [local NGINX with Docker and use DuckDNS](https://fossengineer.com/selfhosting-nginx-proxy-manager-docker/#https-locally-nginx--duckdns).