---
title: "Self-hosting Python DASH Apps: Cloudflare Tunnels"
date: 2023-04-15T23:20:21+01:00
draft: false
tags: ["Docker","Self-Hosting","Python","DASH","Trip-Planner"]
description: 'Python DASH Apps with Docker and Cloudflare Zero Trust Tunnels.'
summary: 'The deployment process of a Python DASH App - Google Cloud Run vs. Docker Image + Cloudflare to serve it securely and free from home.'    
url: 'selfhosting-python-dash-apps-with-docker'   
---


Dash is a popular **Python framework for building interactive web applications**, and Docker is a powerful tool for containerizing and deploying these applications.

When it comes to deploying a Dash Docker App, you have two main options: self-hosting or using a cloud service *like Google Cloud Run*. 

**The goal today** is to  compare these two options, highlighting their respective pros and cons, share a personal experience of unexpected billing when deploying a Dash app on Google Cloud Run and show you how to share with the world securely your Python DASH Apps by using Docker and Cloudflare (for free).

* The project in [Github - Py_Trip_Planner](https://github.com/JAlcocerT/Py_Trip_Planner "Python Trip Planner with Weather in Github {rel='nofollow'}") 

* Don't have a IDE right now? Have a look to the .ipynb notebook that I used to integrate the packages with Google Colaboratory:
 [![Google Colab](/img/OpenInColab.svg)](https://colab.research.google.com/github/JAlcocerT/Py_Trip_Planner/blob/main/TripPlanner.ipynb "Google Colaboratory: Python Trip Planner {rel='nofollow'}") 


## Deploying Python Apps: Self-Hosting vs Google Cloud Run

### Self-Hosting a Dash Docker App

* Pros:
    * Control: Self-hosting gives you complete control over your infrastructure, including the server hardware, operating system, and software stack. This can provide greater flexibility and customization options.
    * Cost: Self-hosting can be more cost-effective than using a cloud service, particularly if you already have the necessary hardware and infrastructure in place.
    * Security: Self-hosting can provide greater security and privacy, as you are not relying on a third-party service to store or process your data.
* Cons:
    * Maintenance: Self-hosting requires ongoing maintenance and upkeep of the infrastructure, which can be time-consuming and resource-intensive.
    * Scalability: Self-hosting can be more challenging to scale up or down, particularly if you experience unexpected spikes in traffic or demand.

### Deploying with Google Cloud Run

I already created a post to deploy with GCR a dockerized DASH app, and I discovered the hard way about one of the CONS of it.

* Pros:
    * Scalability: Google Cloud Run provides automatic scaling, which means that your app can automatically handle increases or decreases in traffic without any manual intervention.
    * Flexibility: Google Cloud Run provides flexibility in terms of the programming languages and frameworks you can use, which can be particularly useful if you are developing in multiple languages.
    * Integration: Google Cloud Run integrates with other Google Cloud services, such as Cloud Storage and Cloud SQL, which can simplify deployment and management.    
* Cons:
    * Cost: Google Cloud Run **can be more expensive than self-hosting**, particularly if you experience high levels of traffic or demand.
    * Control: Google Cloud Run limits your control over the infrastructure and software stack, which can be limiting in terms of customization options.    

## Why Self-Hosting DASH apps? -  My experience with GCR

At the end of the last month, I received an unexpected bill for running the Python Trip-Planner with Weather App, which turned out to be much higher than I anticipated.

After investigating, I realized that I had not optimized the app's resources and configuration for Google Cloud Run, which resulted in higher costs. 

This experience taught me the importance of understanding the cost structure and resource utilization of cloud services, and the need for careful planning and optimization.

At the same time, it motivated me to create this guide to help you **have your Python DASH app dockerized and deployed to the internet securely** with [the help of Cloudflare Tunnels in Docker.](https://fossengineer.com/selfhosting-cloudflared-tunnel-docker)

## How to Self-Host a Python DASH Apps with Docker

* Step 1: Have your App's code located and ready to be used in [a repository](https://github.com/JAlcocerT/Py_Trip_Planner "Python Trip Planner with Weather Project {rel='nofollow'}") 

* Step 2: Clone it

```sh
git clone https://github.com/JAlcocerT/Py_Trip_Planner.git ./Py_Trip_Planner &&
cd Py_Trip_Planner
```

* Step 3: Have [docker installed](https://jalcocert.github.io/RPi/projects/selfhosting_101/#install-docker) and [build the Docker Image](https://fossengineer.com/building-docker-container-images/):


{{< dropdown title="Pre-Requisites!! Just Get Docker 🐋" closed="true" >}}

Important step and quite recommended for any SelfHosting Project - Get Docker Installed

It will be one command, this one, if you are in Linux:

```sh
apt-get update && sudo apt-get upgrade && curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh && docker version
```

{{< /dropdown >}}

```sh
#docker build -t py_trip_planner .
DOCKER_BUILDKIT=1 docker build --no-cache --progress=plain --cpuset-cpus 0,1,2 -t py_trip_planner .
#DOCKER_BUILDKIT=1 docker build --no-cache --progress=plain --cpuset-cpus 0-$(($(nproc) - 1)) -t trip_planner .

```

This might take a while, depending in the device where you will run it.

* Step 4: Deploy your App together [with Cloudflare](https://fossengineer.com/selfhosting-cloudflared-tunnel-docker) to expose it securely:

{{< details title="With CLI" closed="true" >}}

```sh
docker run --name py_trip_planner --network tunnel -p 8050:8050 --detach py_trip_planner
```

{{< /details >}}


{{< details title="Or Docker-Compose:" closed="true" >}}


```yml
version: '3.8'

services:
  py_trip_planner:
    image: py_trip_planner
    container_name: py_trip_planner
    ports:
      - "8050:8050"
    networks:
      - tunnel
    restart: unless-stopped

networks:
  tunnel:
    external: true
```

{{< /details >}}



* Step 5: go to the Cloudflare UI and add the public host names as explained [in this Cloudflare Guide](https://fossengineer.com/selfhosting-cloudflared-tunnel-docker/#cloudflare-tunnel---adding-the-docker-container-to-the-ui).
* https://one.dash.cloudflare.com -> Networks -> `Tunnels`

{{< youtube id="VrV0udRUi8A" autoplay="false" >}}

---

## FAQ

### How to use Cloudflare to Restrict Access to Apps

* Go to https://www.cloudflare.com/ -> [Zero Trust](https://one.dash.cloudflare.com)
* Access -> Applications -> Add an application (selecting Self-hosted)
  * **Version 1 - with IP** At the `Add policies` section, give it a name to the policy and configure rules
    * Select `IP ranges` and include your (or friends/family) **home Public IP address** as below
      * You might need to add ipv4 AND **ipv6 range**: `some:ip:v6:string::/64`
  * Finish the process with clicking `add an application`
  * **Version 2 - with email** At the `Add policies` section, give it a name to the policy and configure rules
    * Select `email` or `emails ending in` and include your (or friends/family) **home Public IP address** as below  

```sh
curl -sS https://ipinfo.io/json
curl -6 ifconfig.me #provided ipv6
```

{{< callout type="info" >}}
* You can use **Tailscale** with a home device as **exit node** if you are away
* You can setup custom logos available at a website, like: https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png
  * Make sure to understand that you are allowed to use a logo!
* You can use **Accesses Groups** to make re-usable rules
{{< /callout >}}


{{< youtube id="65FdHRs0axE" autoplay="false" >}}

> Thanks a lot to DBTech for this!

#### Cloudflare API

* https://blog.cloudflare.com/python-cloudflare/
  * https://github.com/cloudflare/python-cloudflare

> Could be interesting to feed the allowed emails, ipv4/ipv6 programatically