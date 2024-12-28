---
title: "[Review]ing a TPlink 4G Router -"
date: 2024-12-07
draft: false
# cover:
#     image: "https://socialify.git.ci/alejandro-ao/ask-multiple-pdfs/image?description=1&font=Inter&language=1&name=1&stargazers=1&theme=Auto"
#     alt: "ChatPDF" # alt text
#     caption: "SelfHosting A RAG App to chat with PDFs." # display caption under cover
tags: ["Gen-AI","Python","Dev"]
description: 'Using 4G internet. Few years of use review.'
summary: 'How it is to live with 4g home internet only.'
url: 'tplink-archer-mr200-router-review'
---

## Intro

There is no fiber for you.

- But my neighbour has it, why not here?

- We will let you know once available.

- But that was not my question.

- Do you have any other question?

If this sounds familiar for you, you probably have a 4G router already

## TP-Link Archer MR200

Fortunately, 4G connectivity is more and more spread.

And also getting cheaper.

Recently I got an update for unlimited data for ~15$/month

But how good is this?


### Benchmark 4G Connectivity

{{% details title="Connectivity Review 📌" closed="true" %}}

```sh
ping -c 4 google.com #4 pings to google
```

```sh
ip addr show #see network interfaces
hostname -I

#sudo apt-get install net-tools
#ifconfig
#ifconfig eth0 | grep -A 10 "<global>" #check mac, and transfered packages
ifconfig eth0 | grep "inet " | awk '{ print $2 }' #if ETH Connected - SEE THE LOCAL IP
#ifconfig tailscale0 | grep "inet " | awk '{ print $2 }' #for Tailscale

ping -c 4 192.168.0.1 #gateway
ping -c 4 192.168.0.117 #ping the orange pi which is connected to same device
ping 9.9.9.9 #ping quad9 dns server
```

```sh
sudo apt-get install dnsutils -y #dns resolution
nslookup github.com #see which one is being used

dig google.com
```

```sh
sudo resolvectl dns <INTERFACE_NAME> 9.9.9.9 149.112.112.112 #change ethernet network interface to QUAD9 DNS
#example with firebat
#sudo resolvectl dns enp2s0f0 9.9.9.9 149.112.112.112
```

```sh
sudo apt-get install speedtest-cli
speedtest-cli #speedtest-cli --simple

sudo snap install fast
fast
#npm install --global fast-cli && fast
```

* Regular browser speed test:
    * https://www.speedtest.pl/
    * https://speed.cloudflare.com

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


{{< cards cols="1" >}}
  {{< card link="https://jalcocert.github.io/RPi/posts/self-internet-monit/" title="Internet Monitoring Post at RPi Blog" >}}
{{< /cards >}}

{{< callout type="info" >}}
More [Docker config files](https://github.com/JAlcocerT/Docker/tree/main/IoT/InternetQuality) 💻 
{{< /callout >}}


#### Open Speed Test

We can use [OpenSpeedTest](https://jalcocert.github.io/RPi/posts/self-internet-monit/#openspeedtest)
together with Container and Portainer to deploy the docker compose.

Just go to OST UI dashboard at: `localhost:6040`

![OpenSpeedTest](/blog_img/hardware/TPLink4G-OpenSpeedTest.png)

> It will required ~130mb for upload and download

#### SpeedTest Tracker

I mentioned about **[SpeedTest-Tracker](https://github.com/alexjustesen/speedtest-tracker)**, which we can use to **test our internet connectivity**:

```sh
echo -n 'base64:'; openssl rand -base64 32; #generte API key
```

Now the **container image** is provided by lscr instead of GHCR:

```yml
#https://docs.speedtest-tracker.dev/getting-started/installation/using-docker-compose
services: #https://docs.speedtest-tracker.dev/getting-started/installation/using-docker-compose
    speedtest-tracker: 
        image: lscr.io/linuxserver/speedtest-tracker:latest
        restart: unless-stopped
        container_name: speedtest-tracker
        ports:
            - 8089:80
            - 8443:443
        environment: #https://docs.speedtest-tracker.dev/getting-started/environment-variables
            - PUID=1000
            - PGID=1000
            - APP_KEY=base64:somethingsomething #generate it as per CLI above
            - DB_CONNECTION=mariadb
            - DB_HOST=db
            - DB_PORT=3306
            - DB_DATABASE=speedtest_tracker
            - DB_USERNAME=speedtest_tracker
            - DB_PASSWORD=password
        volumes:
            - /path/to/data:/config
            - /path/to-custom-ssl-keys:/config/keys
        depends_on:
            - db
    db: #you can also use the SQLITE one as per the docs
        image: mariadb:11
        restart: always
        environment:
            - MYSQL_DATABASE=speedtest_tracker
            - MYSQL_USER=speedtest_tracker
            - MYSQL_PASSWORD=password
            - MYSQL_RANDOM_ROOT_PASSWORD=true
        volumes:
            - speedtest-db:/var/lib/mysql
        healthcheck:
            test: ["CMD", "healthcheck.sh", "--connect", "--innodb_initialized"]
            interval: 5s
            retries: 3
            timeout: 5s
volumes:
  speedtest-db:
```


{{< callout type="info" >}}
Using these docker container connected via Ethernet to the Firebat MiniPC 
{{< /callout >}}

> Go to the UI at: `http://192.168.1.101:8089/` with [default creds](https://docs.speedtest-tracker.dev/security/authentication) `admin@example.com` and `password`

![SpeedtestTracker](/blog_img/hardware/TPLink4G-SpeedTestTraker.png)

#### Youtube Upload

Totally personal experience.

But I tried to upload a [DJi Oa5 video](https://jalcocert.github.io/JAlcocerT/dji-osmo-action-5-pro/) to youtube.

Following my current [video workflow](https://jalcocert.github.io/JAlcocerT/my-youtube-ai-workflow/).

And a 9GB file took ~1h 30 min, making **~6mb/s the avg upload speed**.