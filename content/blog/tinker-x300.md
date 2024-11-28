---
title: "[Review] Asrock x300 as Home Server"
date: 2024-11-03
draft: false
tags: ["Dev"]
summary: Checking my new small factor computer - Asrock x300 with AMD 5600G
url: asrock-x300-home-server
---

It is about **time to put everything together**.

This year I got this compact ~2L box as my new personal computer (probably server at some point).

Why a server? I went crazy and build it with 64GB RAM.

![Asrock x300 boxes](/blog_img/hardware/x300.jpg)

{{< callout type="info" >}}
* Processing power for my new YT Video creation: [Dji OA5Pro](https://jalcocert.github.io/JAlcocerT/dji-osmo-action-5-pro/) & [Pixel 8Pro](https://jalcocert.github.io/JAlcocerT/pixel-8-pro-tricks/) +++ [Video edition with ffmpeg](https://github.com/JAlcocerT/YT-Video-Edition) and [video with remotion](https://github.com/JAlcocerT/VideoEditingRemotion)
* Companion for the [SBC's](https://jalcocert.github.io/JAlcocerT/cloud-vs-single-board-computers), and the [ThinkPad](https://jalcocert.github.io/JAlcocerT/laptop-lenovo-thinkpad-x13-benchmark/)
{{< /callout >}}


## Asrock x300 How to

Im using **Ubuntu KDE Plasma** with Kernel 6.8. Customized [like so](https://jalcocert.github.io/Linux/docs/debian/conky_configuring_ubuntu/#how-to-tweak-kde-plasma).



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

* The Opi5 with cable has 780/60 for comparison.

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

## Conclusions of Asrock X300

* https://github.com/masonr/yet-another-bench-script

{{< details title="Benchmarks of Asrock x300 with Ryzen 5600G 📌" closed="true" >}}



{{< /details >}}


### What am I using it for right now?


#### Video Editing 101

I recently started to make some simple video edits.

Video editing [with shell scripts](https://github.com/JAlcocerT/YT-Video-Edition/tree/main/With_FFmpeg) was interesting.

But I needed to try [Python video editing with moviePy](https://github.com/JAlcocerT/YT-Video-Edition/tree/main/With_Python).

And it can do crazy stuff.

{{< callout type="info" >}}
[Video Edition Repo](https://github.com/JAlcocerT/YT-Video). Using **[ffmpeg](https://github.com/JAlcocerT/YT-Video-Edition/tree/main/With_FFmpeg)**. Or using [**Python MoviePy**](https://github.com/JAlcocerT/YT-Video-Edition/tree/main/With_Python) which worked for Windows/Linux
{{< /callout >}}

Like having **speech recognition** and silencing the parts with human voices...

...so that only the music is playing at those moments.

#### AI Stuff

* Generating Content - [like so](<https://github.com/JAlcocerT/Scrap_Tools/tree/main/FireCrawl/Z_Scrap_GHRepo)>)
    * Already working for interesting sites, like [this](https://gitlab.com/fossengineer1/fossengineerpapermod)
* [Better CVs](https://gitlab.com/fossengineer1/cv-check) for all with [OpenAI API](https://platform.openai.com/usage)
    * [MailerLite API to check emails](https://gitlab.com/fossengineer1/cv-check/-/blob/main/Z_Tests/MailerLite/test_mailerlite_v1.py?ref_type=heads), makes it easy to place a [small wall to streamlit](https://gitlab.com/fossengineer1/cv-check/-/blob/main/Z_CVCheck_pdfmineropenAI_v2b.py?ref_type=heads)
        * If you choose doble opt-in, they will verify the email
    * But we could also use [FormBricks](https://gitlab.com/fossengineer1/cv-check/-/tree/main/Z_Tests/FormBricks?ref_type=heads) as a wall
        * You can get feedback on the users needs before/after trying the app
        * If you connect the form with GSheets and make python read it, you have a simple way to compare emails for access
        * Forms can be embed on email, on website (as iframe or pop up) and...with a simple link.
    * Or...a real paywall, with [StripeAPI](https://dashboard.stripe.com/apps)
        * It allow to have [pricing tables](https://dashboard.stripe.com/test/pricing-tables/create), to embed on your website with a async scrypt that you can copy paste
        * Stripe API is crazy cool - YOu can get info about sessions, customers (which product/ subscription have they bought, if its on trial, active...)
    * Keeping the [prompts tidy & consistent](https://gitlab.com/fossengineer1/cv-check/-/tree/main/Prompts?ref_type=heads)
    * And Streamlit can be customized in cool ways with option menu and [bootstrap icons](https://icons.getbootstrap.com/)
    * And improvement the way I build my [docker-compose with API keys](https://gitlab.com/fossengineer1/cv-check/-/blob/main/Z_DeployMe/Docker-Compose.yml?ref_type=heads)
    * Oh, and even [gitlab CI/CD](https://gitlab.com/fossengineer1/cv-check/-/blob/main/.gitlab-ci.yml?ref_type=heads) testing!
        * You can see their status at the [jobs tab](https://gitlab.com/fossengineer1/cv-check/-/jobs)
    * Better [sqlite logs to see](https://gitlab.com/fossengineer1/cv-check/-/blob/main/Consolidate_logins.py?ref_type=heads) who actually uses it

{{< details title="Exploring SQLite content 📌" closed="true" >}}

I made similar thing Check [whats in there](https://jalcocert.github.io/JAlcocerT/scrap-and-chat-with-the-web/#old-school-scrapping)

```sh
sqlite3 ./login_log.db
#.tables

SELECT * FROM login_logs;
SELECT * FROM job_offers ORDER BY timestamp DESC LIMIT 5;
#.quit
```

```sh
python3 query_pracuj_sqlite_v3b.py
```

{{< /details >}}

* Better vacation planning

#### Web Stuff

* https://jalcocert.github.io/JAlcocerT/portfolio-websites/



### What happened with the Bmax B4?

I decided to give it to a friend.

Reason being that I wanted an upgrade in computing power from my previous Desktop with a 2200G.

![BMax B4 vs Asrock X300 Size](/blog_img/mini_pc/bmax_asrockx300.jpg)

{{< figure 
    src="/blog_img/mini_pc/bmax_asrockx300.jpg" 
    link="https://www.youtube.com/@JAlcocerTech"
    title="BMax-B4 Mini PC" 
    caption="BMaxB4 vs Asrock X300." 
    attr="Photo by JAlcocerT" 
    attrlink="https://jalcocertech.xyz"
    align="center"
>}}

{{< figure src="/static/blog_img/mini_pc/bmax_asrockx300.jpg" alt="BMax B4 vs Asrock X300 Size" >}}

{{< figure src="/blog_img/mini_pc/bmax_asrockx300.jpg"
           alt="CV with a RPI4"
           class="center"
           link="https://example.com"
           caption="This is an image of a BMAX ASRock x300 used as a mini PC."
           title="Mini PC Setup"
           target="_blank"
           rel="noopener noreferrer"
           width="300"
           height="200" >}}

### Benchmarks 101

Its always a good start to [get ready for SelfHosting](https://jalcocert.github.io/Linux/docs/linux__cloud/selfhosting/).

For **Quick Benchmarks**, just do:

```sh
curl -O https://raw.githubusercontent.com/JAlcocerT/Linux/main/Z_Linux_Installations_101/Benchmark101.sh
chmod +x Benchmark101.sh
./Benchmark101.sh
```

{{< callout type="info" >}}
Other Benchmarks: [SBC-Reviews](https://github.com/geerlingguy/sbc-reviews) / [RPi-benchmark](https://github.com/aikoncwd/rpi-benchmark)
{{< /callout >}}



{{% details title="Testing CPU Performance - SysBench, TripPlanner, build Astral-sh,..." closed="true" %}}

Check CPU cores and test with **sysbench**:

```sh
#cat /proc/cpuinfo
#uname -a
#nproc
sudo apt install sysbench -y
sysbench --test=cpu --cpu-max-prime=20000 --num-threads=4 run
```

* Benchmark with **7zip**:

```sh
sudo apt-get install p7zip-full
7z b -mmt
7z b -mmt4
7z b
```

and with **7zr**:

```sh
7zr b -mmt1
```

* [Trip Planner](https://github.com/JAlcocerT/Py_Trip_Planner/) **docker build** time:

```sh
git clone https://github.com/JAlcocerT/Py_Trip_Planner/
cd Py_Trip_Planner

sudo bash -c 'time docker pull python:3.8' #let's remove the time of downloading the Python base image from the equation, it was ~1 min!

#docker build -t pytripplanner .
sudo bash -c 'time docker build --no-cache -t pytripplanner .'
#sudo bash -c 'time podman build -t pytripplanner .'
```

* **Astral-sh** Python Dependency Manager:

```sh
apt install cargo
#cargo install --git https://github.com/astral-sh/rye rye
time cargo install --git https://github.com/astral-sh/rye rye
```

* Just simple **stress test**:

```sh
sudo apt-get install stress-ng

sudo stress --cpu  8 --timeout 120
```


{{% /details %}}

{{% details title="Testing **Internet Connectivity** 📌" closed="true" %}}

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

#### Hardware Table Comparison

Hardware / Computing Power / Volume / Energy Consumption


Here's a consolidated version of the data from all the tables into a single table. The columns are organized to combine all the relevant information:

| Device                     | CPU                                                | Price | Sysbench (4 threads) (events) | Tot (4 threads) 7 zip (events) | Docker Build (s) | Build Astral (Time) | Docker Build (s/Price) | CPU Benchmark (4 threads) (events/Price) | Tot (4 threads) 7 zip (events/Price) |
|----------------------------|----------------------------------------------------|-------|-----------------------------|-------------------------------|------------------|----------------------|--------------------------|----------------------------------------|---------------------------------------|
| Raspberry Pi 4 2GB         | Broadcom BCM2711 Quad-core (4x ARM Cortex-A72)    | $35   | ~1.7k                       | 1622/6311                     | ~3672s           | 10min 7s             | 128520                   | 48.57                                  | 46.34                                 |
| Raspberry Pi 4 4GB         | Broadcom BCM2711 Quad-core (4x ARM Cortex-A72)    | $55   | ~28k                        | 1442/5508                     | ~3480s           | -                    | 191400                   | 509.09                                 | 26.49                                 |
| Orange Pi 5                | Rockchip RK3588S (4x Cortex-A76 + 4x Cortex-A55)  | $150  | ~38k                        | 2.7k/11.8k                    | ~1777s           | 5min 20s             | 266550                   | 253.33                                 | 18.00                                 |
| Raspberry Pi 5 8GB         | -                                                  | -     | -                           | 2.7k/10k                      | -                | 4min 30s             | -                        | -                                      | -                                     |
| BMAX B4 (16 GB)            | Intel N95 (x4 cores Alder-Lake)                    | $150  | ~26.9k                       | ~4.2k/15.34k                  | ~45s             | -                    | 6750                     | 179.33                                 | 28.00                                 |
| **FireBat AK2 Plus (8 GB)**| Intel N100 (x4 cores Alder-Lake)                   | $75   | ~35k                        | ~1.8k/6.4k                    | ~47s             | 2min 45s             | **3525**                  | 466.67                                 | 24.00                                 |
| AMD 2200g                  | -                                                  | -     | ~26.9k                       | ~4.2k/15.34k                  | -                | -                    | -                        | -                                      | -                                     |
| **AMD 5600G**                  | -                                                  | -     | -                           | -                             | -                | -                    | -                        | -                                      | -                                     |
| Hetzner                    | -                                                  | -     | -                           | -                             | -                | 6min 15s             | -                        | -                                      | -                                     |

> Hetzner CX22 Cloud Server ~2.35 eur +23% VAT ~3$/month

Explanation:
- **Device**: The name of the device.
- **CPU**: The CPU specifications of the device.
- **Price**: The price of the device in USD.
- **Sysbench (4 threads) (events)**: The results from the `sysbench` CPU test for 4 threads, in events.
- **Tot (4 threads) 7 zip (events)**: The results from the 7zip benchmark for 4 threads (compression and decompression speeds).
- **Docker Build (s)**: The time it takes to build the Docker image (in seconds).
- **Build Astral (Time)**: The time it takes to install or build the Astral dependency manager.
- **Docker Build (s/Price)**: The ratio of Docker build time in seconds to the price of the device.
- **CPU Benchmark (4 threads) (events/Price)**: The ratio of the CPU benchmark events to the price of the device.
- **Tot (4 threads) 7 zip (events/Price)**: The ratio of 7zip benchmark events to the price of the device.

This table combines the information across all your tests, and it should give you a comprehensive overview of the devices, their performance, and their costs.


| Device                     | Sysbench (4 threads)    | Sysbench (8 threads)  | Tot (4 threads) 7 zip    | Docker Build       | Max Temp | Peak Temp (Docker Build) | Avg Temp (Docker Build) | Idle Power | Max (Power & Temp Seen) | Power Adapter | Yearly 🔌 Cost (USD) | Release Date     | CPU Benchmark (4 threads)  | CPU Benchmark (8 threads) | Build Time (Astral-SH) |
|----------------------------|-------------------------|------------------------|--------------------------|---------------------|----------|--------------------------|--------------------------|------------|-------------------------|---------------|-----------------------|------------------|---------------------------|---------------------------|-------------------------|
| Raspberry Pi 4 2GB         | ~1.7k events            | -                      | 1622/6311                | ~3672s              | -        | ~46°C                    | ~39°C                   | ~2/3w      | 6W                      | 5V 3A         | ~$5                  | June 2019        | ~1.7k events              | -                         | 10min 7s                |
| Raspberry Pi 4 4GB         | ~28k events             | -                      | 1442/5508                | ~3480s              | -        | -                        | -                        | ~2/3w      | 6W                      | 5V 3A         | ~$5                  | June 2019        | ~28k events               | -                         | 10min 7s                |
| Orange Pi 5                | ~38k events             | ~50k events             | 2.7k/11.8k               | ~1777s              | 80°C     | ~65°C                    | ~50°C                   | ~3/5w      | 8W, 80°C                 | 5V 4A         | ~$8                  | November 2022    | ~38k events               | ~50k events               | 5min 20s                |
| BMAX B4                    | -                       | -                      | -                        | ~45 seconds         | 64°C fan | -                        | -                        | 9W         | 18W & 64°C, fan          | -             | ~$14                 | -                | -                         | -                         | -                       |
| **FireBat AK2 Plus**       | ~35k events             | -                      | ~1.8k/6.4k               | ~3525s              | -        | -                        | -                        | -          | -                       | -             | -                    | -                | ~46052.63 events          | -                         | -                       |
| **FireBat AK2 Plus N100**  | -                       | -                      | -                        | ~47s                | 64°C     | -                        | -                        | -          | -                       | -             | -                    | -                | ~46052.63 events          | -                         | 2min 45s                |
| Raspberry Pi 5 8GB         | -                       | -                      | 2.7k/10k                 | -                   | -        | -                        | -                        | -          | -                       | -             | -                    | -                | -                         | -                         | 4min 30s                |
| AMD 2200g                  | ~26.9k events           | -                      | ~4.2k/15.34k             | -                   | -        | -                        | -                        | -          | -                       | -             | -                    | -                | ~44225 events             | -                         | -                       |
| AMD 5850U (AMD Ryzen 7)    | ~72k events             | ~121k events            | -                        | -                   | -        | -                        | -                        | -          | -                       | -             | -                    | Jan 2021         | ~72k events               | ~121k events              | -                       |
| **AMD 5600G (AMD Ryzen 5)**    | ~79k events             | ~123k events (12 threads ~130k) | ~6.1k/24.1k (7zip)     | -                   | -        | -                        | -                        | -          | -                       | -             | -                    | April 2021      | ~79k events               | ~123k events              | -                       |


Now, the large table includes:

- Sysbench performance (4 and 8 threads)
- 7zip performance (Tot 4 threads)
- Docker build times and temperatures
- Idle power consumption, max power usage, and yearly cost
- Release dates for devices
- CPU benchmark results (4 and 8 threads)
- Build time for Astral-SH

This provides a comprehensive view of all the devices' performance and specifications in one table.

## Desktop with VPS as VPN with Wireguard

Time to combine a Desktop, like the X300 + [Hetzner](https://jalcocert.github.io/Linux/docs/linux__cloud/cloud/#other-clouds) to get a **custom VPN connection** with Wireguard.

> Use the [Hetzner Setup Script](https://github.com/JAlcocerT/Linux/blob/main/Z_Cloud/Hetzner_101.sh) or the[ SelfHosting script](https://raw.githubusercontent.com/JAlcocerT/Linux/main/Z_Linux_Installations_101/Selfhosting_101.sh)

{{% steps %}}

### Server Setup

I am spinning a Hetzner server with this [Wireguard Server DockerCompose](https://github.com/JAlcocerT/Docker/blob/main/Security/VPNs/Wireguard_docker_compose.yaml)


{{< details title="Connect via SSH & Setup WireGuard📌" closed="true" >}}

```sh
ssh root@serverip #or use a terminal via
```


Lets do it with [wgeasy](https://github.com/wg-easy/wg-easy), or if you prefer with [WireGuard](https://github.com/JAlcocerT/Docker/blob/main/Security/VPNs/Wireguard_docker_compose.yaml)

```sh
#create the hashed PWD
docker run --rm -it ghcr.io/wg-easy/wg-easy wgpw 'YOUR_PASSWORD'

docker run --rm -it ghcr.io/wg-easy/wg-easy wgpw 'YOUR_PASSWORD' | sed 's/\$/\$\$/g'

```

{{< callout type="warning" >}}
* Don't wrap the generated hash password in single quotes when you use docker-compose.yml. Instead, replace each $ symbol with two $$ symbols. [Example](https://github.com/wg-easy/wg-easy/blob/master/How_to_generate_an_bcrypt_hash.md)

* You'll get different results (for the same given pass) because the hash is salted
{{< /callout >}}

```sh
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

{{< /details >}}

```sh
curl -sS https://ipinfo.io/json #the command to use
#  "org": "AS24940 Hetzner Online GmbH",
```

### Wireguard Setup


{{< details title="Check that the Wireguard Connection works 📌" closed="true" >}}


{{< /details >}}


### Connecting the Wireguard Client

Setup a regular Wireguard Client in Windows / Linux.

Or use Gluetun
* https://fossengineer.com/using-bard-selfhosting-firefox-with-vpn-and-docker/#vpn---via-docker-gluetun
* https://github.com/qdm12/gluetun-wiki/blob/main/setup/wireguard.md
* https://github.com/qdm12/gluetun-wiki/blob/main/setup/providers/custom.md

{{< details title="Check the Desktop IP 📌" closed="true" >}}


{{< /details >}}

### [Optional] - Setup Wifi2ETH Bridge

You can do this steps with a Raspberry Pi (connected to WIFI) as Wireguard  client.

Which will then provide VPN access to your desktop via the Ethernet cable.

> Wifi2Eth [Post1](https://jalcocert.github.io/RPi/posts/rpi-wifi-ethernet-bridge/) and Post2

{{< details title="Details 📌" closed="true" >}}


{{< /details >}}

{{% /steps %}}


---

## FAQ



{{< details title="Other Cloud Resources 📌" closed="true" >}}

* Digital Ocean - https://www.digitalocean.com/pricing
* https://lowendbox.com/
* https://www.netcup.de/

RunPod, Linode, DigitalOcean, Paper Space, Lambda Cloud, Hetzner…
vast.ai,
Google Colab TPU…

* <https://cloud.google.com/free>
  * PUB/SUB <https://cloud.google.com/free/docs/free-cloud-features#pub-sub>

<https://www.youtube.com/watch?v=jYIgcdIW1yk>

* AWS IoT - <https://www.youtube.com/watch?v=hgQ-Ewrm48c>



{{< /details >}}

{{< cards cols="3" >}}
  {{< card link="https://www.vultr.com/pricing/#cloud-gpu" title="Vultr Cloud GPUs" >}}
  {{< card link="https://vast.ai/pricing" title="VastAI GPUs" >}}
  {{< card link="https://lambdalabs.com/" title="Lambdalabs GPUs" >}}    
{{< /cards >}}

{{< details title="**OS Inside Containers**: RPi emulator / Windows / macOS 📌" closed="true" >}}

A raspberry Pi inside a container - https://github.com/ptrsr/pi-ci

> A Raspberry **Pi emulator in a Docker image** that lets developers easily prepare and flash RPi configurations.


{{< /details >}}

{{< details title="Keeping GIT tidy 📌" closed="true" >}}

* With [Remote development](https://jalcocert.github.io/JAlcocerT/blog/dev-in-docker/) and [git best practices](https://jalcocert.github.io/JAlcocerT/github-gists/#git-101) 
    * Dont forget about the [Gitlab Workflow Extension](https://marketplace.visualstudio.com/items?itemName=GitLab.gitlab-workflow)

```sh
git add .
git commit -m "some good msg"
git push
```

{{< /details >}}



### Outro

#### Using HuggingFace for LLMs

* https://huggingface.co/spaces
* https://www.youtube.com/watch?v=_Ua6065p-Cw
* https://www.youtube.com/watch?v=_Ua6065p-Cw

#### How I Edited this video

* Video was recorded with a Huawei P30 and Iphone 15Pro - Back in ~Apr2024
* I Have silenced it as learn with the [DJI Workflow](https://jalcocert.github.io/JAlcocerT/dji-osmo-action-5-pro/#my-workflow-with-the-dji-oa5-pro)

{{< callout type="info" >}}
The videos were filmed Spring this year, just put them together now
{{< /callout >}}

