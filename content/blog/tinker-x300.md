---
title: "[Review] Asrock x300 as Home Server"
date: 2024-11-03
draft: false
tags: ["Dev"]
summary: Checking my new small factor computer - Asrock x300 with AMD 5600G
url: asrock-x300-home-server
---

It is about time to put everything together.

This year I got this compact ~2L box as my new personal computer (probably server at some point).

Why a server? I went crazy and build it with 64GB RAM.

{{< callout type="info" >}}
* Processing power for my new YT Video creation: [Dji OA5Pro](https://jalcocert.github.io/JAlcocerT/dji-osmo-action-5-pro/) & [Pixel 8Pro](https://jalcocert.github.io/JAlcocerT/pixel-8-pro-tricks/) +++ [Video edition with ffmpeg](https://github.com/JAlcocerT/YT-Video-Edition) and [video with remotion](https://github.com/JAlcocerT/VideoEditingRemotion)
* Companion for the [SBC's](https://jalcocert.github.io/JAlcocerT/cloud-vs-single-board-computers), and the [ThinkPad](https://jalcocert.github.io/JAlcocerT/laptop-lenovo-thinkpad-x13-benchmark/)
{{< /callout >}}


## Asrock x300 How to

Im using Ubuntu KDE plasma with Kernel 6.8. Customized [like so](https://jalcocert.github.io/Linux/docs/debian/conky_configuring_ubuntu/#how-to-tweak-kde-plasma).

{{< details title="Screen/Display Setup in Linux 📌" closed="true" >}}

I am using a Flatron W1946, which it is native 1360x768 and it was not detected by default.

```sh
#xrandr --query #get the name, in this case, DisplayPort-1
cvt 1360 768 60
xrandr --newmode "1360x768_60.00" 85.25  1360 1424 1568 1776  768 771 778 795 -hsync +vsync
xrandr --addmode DisplayPort-1 "1360x768_60.00"
xrandr --output DisplayPort-1 --mode "1360x768_60.00"
```

And now, I could see the configuration also in the System Settings UI, right at Display Configuration.


{{< /details >}}

{{< details title="See Hardware Info and Disks Setup 📌" closed="true" >}}

```sh
lscpu
#sudo lshw

#sudo apt install lm-sensors
#sensors
```

```sh
df -h | awk '$2 ~ /G/ && $2+0 > 3' #if you set logs, careful with the disk space (see drives >3GB)
df -h | awk 'NR==1 || $2 ~ /[GT]/'

lsblk -o NAME,SIZE,TYPE,FSTYPE,MOUNTPOINT | awk 'NR==1 || $2 ~ /[GT]/'
```

{{< /details >}}


{{% details title="Asrock X300 Wifi Connectivity 📌" closed="true" %}}

Using an TP-Link Archer T3U (AC1300), which I upgraded to the **AC1300 T4U Plus** version.


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

> Got 195mb/s and 58mb/s with the T3U and **218/59 with the t4U Plus**.

* Regular browser speed test: https://www.speedtest.pl/

```sh
curl -sS https://ipinfo.io/json #the command to use
curl -sS http://ip-api.com/json/ #provides info about country, ISP, ...
curl -6 ifconfig.me #ipv6 info 
```

{{% /details %}}


{{< details title="Better DNS's 📌" closed="true" >}}

I like to use **QUAD9 DNS's**:

```sh
sudo nano /etc/resolv.conf
```

Add the following, if you want, to use **quad9 DNS**:

```sh
#nameserver 192.168.0.117 #to use the OPi5 locally
nameserver 9.9.9.9
nameserver 149.112.112.112
```

```sh
nslookup google.com #see that now you are using quad9 DNS
```
{{< /details >}}




### Server Power and Fan Management

As per [this post](https://askubuntu.com/questions/22108/how-to-control-fan-speed)

But I decided to manage everything via the BIOS.

So now the fan is at 30% up to 60 Celsius.

> For Windows you can use [FanControl](https://github.com/Rem0o/FanControl.Releases) and AMD Adrenaline Software

{{< details title="Changing Power Profiles 📌" closed="true" >}}

```sh
#sudo apt-get -y install power-profiles-daemon
powerprofilesctl list
#powerprofilesctl set performance
```

{{< /details >}}



---

## FAQ

### How I Edited this video

* Video was recorded with a Huawei P30 and Iphone 15Pro - Back in ~Apr2024
* I Have silenced it as learn with the [DJI Workflow](https://jalcocert.github.io/JAlcocerT/dji-osmo-action-5-pro/#my-workflow-with-the-dji-oa5-pro)

{{< callout type="info" >}}
The videos were filmed Spring this year, just put them together now
{{< /callout >}}


{{< details title="Keeping GIT tidy 📌" closed="true" >}}

* With [Remote development](https://jalcocert.github.io/JAlcocerT/blog/dev-in-docker/) and [git best practices](https://jalcocert.github.io/JAlcocerT/github-gists/#git-101) 

```sh
git add .
git commit -m "some good msg"
git push
```

{{< /details >}}