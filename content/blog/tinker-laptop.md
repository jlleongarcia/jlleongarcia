---
title: "Reviewing a Laptop: ThinkPad x13-G2"
date: 2024-10-04T23:20:21+01:00
draft: false
tags: ["Dev"]
summary: Checking my new Laptop - The Lenovo ThinkPad x13
url: laptop-lenovo-thinkpad-x13-benchmark
---

As simple as it gets: it has a 8C/16T CPU, 16GB Ram and 500GB SSD.

![Lenovo Thinkpad x13](/blog_img/hardware/Lenovo_x13.jpg)

**It's 13'**, over 1kg of weight and 30.44x21,58x1,55cm. 

{{< callout type="info" >}}
With **~1.005L in volume** its even smaller than the AsrockX300
{{< /callout >}}

It comes with W11 already installed, which I kept together with an Ubuntu installation (you need to desable Windows bitlocker first to be able to tweak the SDD space distribution).

For a quick Windows setup, I used [Chocolatey](https://jalcocert.github.io/JAlcocerT/how-to-use-chocolatey-windows/)

## Benchmarks ThinkPad x13-G2

{{< details title="Results - SysBench 📌" closed="true" >}}

| Device                                      | Sysbench (4 threads) | Sysbench (8 threads)  | Release Date     |
|---------------------------------------------|---------------------------|----------------------------|------------------|
| Raspberry Pi 4 2GB (Broadcom BCM2711, 4C/4T)| ~1.7k events              | -                          | June 2019        |
| Raspberry Pi 4 4GB (Broadcom BCM2711, 4C/4T)| ~28k events               | -                          | June 2019        |
| Orange Pi 5 (Rockchip RK3588S, 8C/8T)       | ~38k events               | ~50k events                | November 2022    |
| Intel i3 5005U (2C/4T) | ~7.3k events         | no 8C, but it served me to try Linux for the first time!  | Jan 2015     |
| Intel i5-1135G7 (4C/8T)       |     ~35.7k events           |    ~37.7k events            | Nov 2020     |
| **AMD 5850U (AMD Ryzen 7 8C/16T)**       | ~72k events               | ~121k events               | January 2021     |
| AMD 5600G (AMD Ryzen 5, 6C/12T)       | ~79k events                | ~123k events (with 12 threads goes up to ~130k and 6.1k 24.1k 7zip) | April 2021       |

> I am really **impressed with the CPU performance**, almost the most powerful CPU I ever tried

<!-- The first CPU was an Intel and then a AMD Athlon 64 3200+ (both 1 core!) -->

```sh
#lscpu
sysbench --test=cpu --cpu-max-prime=20000 --num-threads=4 run
#sysbench --test=cpu --cpu-max-prime=20000 --num-threads=8 run
```

{{< /details >}}

{{< callout type="info" >}}
It feels much faster than the i7-1185G7+32Gb Ram that im using at work (specially with Linux)
{{< /callout >}}

## My Setup for a Laptop

Whether you want to [use Conky](https://jalcocert.github.io/Linux/docs/debian/conky_configuring_ubuntu/) or not...

Give it a cool wallpaper, like [Garuda](https://jalcocert.github.io/Linux/docs/arch/garuda/) has:

```sh
wget "https://gitlab.com/garuda-linux/themes-and-settings/artwork/garuda-wallpapers/-/raw/master/src/garuda-wallpapers/Dr460nized%20Honeycomb.png?ref_type=heads&inline=false" -O Dr460nized_Honeycomb.png #download garuda wallpaper
```

You will probably want [Gitlab ready](https://jalcocert.github.io/JAlcocerT/how-to-use-gitlab/) and get [ready for SelfHosting](https://jalcocert.github.io/Linux/docs/linux__cloud/selfhosting/):

```sh
curl -O https://raw.githubusercontent.com/JAlcocerT/Linux/main/Z_Linux_Installations_101/Selfhosting_101.sh
#nano Selfhosting_101.sh #MAKE SURE YOU UNDERSTAND WHAT YOU WILL BE RUNNING

chmod +x Selfhosting_101.sh
sudo ./Selfhosting_101.sh
```

{{< callout type="info" >}}
* [SelfH Script](https://github.com/JAlcocerT/Linux/blob/main/Z_Linux_Installations_101/Selfhosting_101.sh)
{{< /callout >}}


You might want to consider OS like:

* NixOS - https://search.nixos.org/packages?channel=24.05&show=librewolf&size=50&sort=relevance&type=packages&query=librewolf
* ZorinOS
* KDE with some customization


{{< details title="Tailscale and DNS's 📌" closed="true" >}}


I like to use **QUAD9 DNS's**:

```sh
sudo nano /etc/resolv.conf
```

Add the following if you want to use quad9 DNS:

```sh
#nameserver 192.168.0.117 #to use the OPi5 locally
nameserver 9.9.9.9
nameserver 149.112.112.112
```

```sh
nslookup google.com #see that now you are using quad9 DNS
```

* https://login.tailscale.com/admin/machines

1. Enable **Magic DNS** at the [DNS Tab](https://login.tailscale.com/admin/dns)
2. Add Quad9 Public DNS as nameserver
3. YOu will have an unique name like: `abcdef.ts.net`

Now, you can do:

```sh
ping orangepi5.abcdef.ts.net #nameofthedevicefortailscale.yourtailnetname
ssh youruser@orangepi5.abcdef.ts.net #connect ssh with the same name!
```

Even in your browser, you could go to: `http://orangepi5.abcdef.ts.net:9000` and use portainer or any other service!

{{< /details >}}


Then, if you want to do **cool things** with VSCode and a server...


{{< callout type="info" >}}
Setup a Server as [Remote dev environment](https://jalcocert.github.io/JAlcocerT/blog/dev-in-docker/)
{{< /callout >}}

### Sync and BackUps

I love my Syncthing setup, but...

...Syncthing Android Apps is about to be gone

```sh
df -h | awk '$2 ~ /G/ && $2+0 > 3' #if you set logs, careful with the disk space (see drives >3GB)
df -h | awk 'NR==1 || $2 ~ /[GT]/'

lsblk -o NAME,SIZE,TYPE,FSTYPE,MOUNTPOINT | awk 'NR==1 || $2 ~ /[GT]/'
```

With Syncthing, I sync my pixel at `/media/jalcocert/BackUp/Sync_Pixel`

{{< details title="Connect to NextCloud as WebDav 📌" closed="true" >}}

* You can install NextCloud Clients or...
* You can browse the available files without taking space on your PC by adding the [NC Instance as a WebDav Folder](https://jalcocert.github.io/RPi/posts/selfhosting-nextcloud/#faq)

> Im assuming you have already a [NextCloud Server Setup](https://raw.githubusercontent.com/JAlcocerT/Docker/refs/heads/main/Backups/NextCloud/nc_mariadb.yml)

You will need to go to folders, other locations and use: ``dav://nextcloudurl:8080/remote.php/dav/files/YOUR_USERNAME_HERE/``

![NextCloud WebDav](/blog_img/selfh/webdav-nc-tailscale.png)

Once you provide the user and pass, you will be able to see all the NC Files.

{{< /details >}}




{{< details title="SFTPgo as WebDav 📌" closed="true" >}}

> SFTPgo with docker compose [JMLabarta video](https://www.youtube.com/watch?v=ME5t2UREY_Q&t=570s)


{{< /details >}}

### Using the ThinkPad w a Server

I am using my OrangePi5 as server now.

```mermaid
graph TD
    A[ThinkPad] --> B[Orange Pi 5]
```


{{< details title="Opi5 latest Linux tricks 📌" closed="true" >}}

Could not find one of my 2tb drives...

```sh

```

It seems it got corrupted due to improper reboots.

**We need to unmount before reboots as well**

```sh

```


{{< /details >}}


---

## FAQ

Enter the **boot menu** of the Lenovo Thinkpad x13 g2 by **pressing F12**

* https://github.com/boschkundendienst/guacamole-docker-compose
* https://www.proxmox.com/en/proxmox-virtual-environment/overview
* https://github.com/FreeRDP/Remmina
* https://github.com/TigerVNC/tigervnc

{{< details title="Changing Power Profiles in your Laptop 📌" closed="true" >}}

```sh
#sudo apt-get -y install power-profiles-daemon
powerprofilesctl list
#powerprofilesctl set performance
```

{{< /details >}}


{{% details title="Testing **Internet Connectivity** of a new Laptop 📌" closed="true" %}}

```sh
ip addr show
hostname -I

#sudo apt-get install net-tools
#ifconfig

ping -c 4 192.168.0.1 #gateway
ping -c 4 192.168.0.117 #ping the orange pi which is connected to same device
ping 9.9.9.9 #ping quad9 dns server
```

```sh
sudo apt-get install dnsutils -y #dns resolution
nslookup github.com 
dig google.com
```

```sh
sudo apt-get install speedtest-cli
speedtest-cli #speedtest-cli --simple
```

* Regular browser speed test: https://www.speedtest.pl/

```sh
curl -sS https://ipinfo.io/json #the command to use
curl -sS http://ip-api.com/json/ #provides info about country, ISP, ...
curl -6 ifconfig.me #ipv6 info 
```

{{% /details %}}

Connecting your laptop to your server with https:

{{< cards >}}
  {{< card link="/" title="Local Image" image="/blog_img/mini_pc/nginx_posteio.png" subtitle="Raw image under static directory." >}}
  {{< card link="https://fossengineer.com/selfhosting-nginx-proxy-manager-docker/" title="HTTPS Everywhere" image="/blog_img/mini_pc/nginx_posteio.png" subtitle="Setup NGINX with DuckDNS to have https certificates." method="Resize" options="600x q80 webp" >}}
{{< /cards >}}


### How to Check dead Pixels

* https://lcdtech.info/en/tests/dead.pixel.htm
* https://deadpixeltest.org/colors/black