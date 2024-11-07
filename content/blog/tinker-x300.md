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

![Asrock x300 boxes](/blog_img/hardware/x300.jpg)

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


{{< details title="Benchmarks of Asrock x300 with Ryzen 5600G 📌" closed="true" >}}



{{< /details >}}


### What am I using it for right now?


#### Video Editing 101

I recently started to make some simple video edits.

Video editing [with shell scripts](https://github.com/JAlcocerT/YT-Video-Edition/tree/main/With_FFmpeg) was interesting.

But I needed to try [Python video editing with moviePy](https://github.com/JAlcocerT/YT-Video-Edition/tree/main/With_Python).

And it can do crazy stuff.

{{< callout type="info" >}}
[Video Edition Repo](https://github.com/JAlcocerT/YT-Video)
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
    * Dont forget about the [Gitlab Workflow Extension](https://marketplace.visualstudio.com/items?itemName=GitLab.gitlab-workflow)

```sh
git add .
git commit -m "some good msg"
git push
```

{{< /details >}}