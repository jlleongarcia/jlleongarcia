---
title: "Cloud vs Pi's"
date: 2024-08-10T23:20:21+01:00
draft: false
tags: ["Dev"]
summary: Comparing SBCs performance with the Cloud
---


* https://jalcocert.github.io/RPi/posts/minipc-vs-pi/

| Device         | CPU                                       | GPU           | RAM | Dimensions                | Idle Power | Max Power & Temp Seen | Power Adapter Requirements |
| :------------- | :---------------------------------------- | :------------- | :-- | :------------------------- | :--------- | :-------- | :-------------------------- |
| Raspberry Pi 4 | Broadcom BCM2711 Quad-core (4x ARM Cortex-A72) | VideoCore VI @ 500mhz   | 2 GB | 85.6mm × 56.5mm × 17mm (0.082L) | 2-3W        | 6W        | 5V 3A           |
| Orange Pi 5    | Rockchip RK3588S (4x Cortex-A76 @ 2.4GHz + 4x Cortex-A55 @ 1.8GHz) | Mali G510 MP4 | 8 GB | 100mm × 62mm × 18mm (0.112L) | ~2W & 45°C | 8W, 80C   | 5V 4A     |
| BMAX B4        | Intel N95 (x4 cores Alder-Lake)                       | -              | 16 GB | 12.5 x 11.2 x 4.4 cm  (0.608L) | 9W & 37C  | 64W & 64°C, fan | -   |

{{< callout type="info" >}}
  It's very important to use proper adapter 170 events/s vs
{{< /callout >}}

**Additional notes**:
* Disabling Wi-Fi on the BMAX B4 can improve power efficiency by ~10% (~1W).

* https://jalcocert.github.io/RPi/posts/pi-vs-orange/

| Device         | Docker Build  | Max Temp | CPU Benchmark (4 threads) | CPU Benchmark (8 threads) | Peak Temp (Docker Build) | Avg Temp (Docker Build) |
| :------------- | :----------------- | :------- | :------------------------- | :------------------------- | :----------------------- | :----------------------- |
| Raspberry Pi 4 | ~3672s             | -        | ~1.7k events           | -                         | ~46°C                   | ~39°C                   |
| Orange Pi 5    | ~1777s             | 80°C    | ~38k events           | ~50k            | ~65°C                   | ~50°C                   |
| BMAX B4        | 45 seconds         | 64°C  fan  | -                          | -                         | -                       | -                       |
| AMD 5600G        |         |    fan | -                          | -                         | -                       | -                       |

* opi - 5min 20s
* rpi4b 2gb - 

{{< callout type="info" >}}
  * How to run [these tests](#faq)
  * For some reason, the ARM SBC's were using just one core during the docker builds (25% and 13%)
{{< /callout >}}

* https://jalcocert.github.io/Linux/docs/linux__cloud/cloud/#hetzner

The Hetzner x4 SkyLake and 8GB RAM provides similar performance to the BMAX (when used to build the trip-planner container image).

* Hetzner Shared vCPU (2x Skylake @2ghz) 4GB	~77s
* Hetzner Shared vCPU (4x Skylake @2ghz) 8GB	~45s

---

## FAQ


{{% details title="Testing CPU Performance - Sysbench, TripPlanner, build Astral-sh,..." closed="true" %}}

```sh
#cat /proc/cpuinfo
#uname -a
#nproc
sudo apt install sysbench 
sysbench --test=cpu --cpu-max-prime=20000 --num-threads=4 run
```

* 7zip

```sh
sudo apt-get install p7zip-full
7z b -mmt
7z b -mmt4
7z b
```

* Trip Planner docker build time:
```sh
git clone https://github.com/JAlcocerT/Py_Trip_Planner/
cd Py_Trip_Planner

sudo bash -c 'time docker pull python:3.8' #let's remove the time of downloading the Python base image from the equation, it was ~1 min!

#docker build -t pytripplanner .
sudo bash -c 'time docker build -t pytripplanner .'
```

* Astral-sh Python Dependency Manager:

```sh
apt install cargo
#cargo install --git https://github.com/astral-sh/rye rye
time cargo install --git https://github.com/astral-sh/rye rye
```

* Just simple stress test:

```sh
sudo apt-get install stress-ng

sudo stress --cpu  8 --timeout 120
```


{{% /details %}}


{{% details title="Testing Connectivity" closed="true" %}}

```sh
ip addr show
ping -c 4 192.168.3.1 #gateway
ping 9.9.9.9 #quad9
```

```sh
sudo apt-get install dnsutils -y #dns resolution
nslookup github.com 
dig google.com
```

```sh
sudo apt-get install speedtest-cli
speedtest-cli
```

{{% /details %}}

```yml
version: '3.8'
services:
  netdata:
    container_name: netdata
    image: netdata/netdata:v1.25.0 #https://hub.docker.com/r/netdata/netdata/tags
    ports:
      - '19999:19999'
    volumes:
      - netdataconfig:/etc/netdata
      - netdatalib:/var/lib/netdata
      - netdatacache:/var/cache/netdata
      - '/etc/passwd:/host/etc/passwd:ro'
      - '/etc/group:/host/etc/group:ro'
      - '/proc:/host/proc:ro'
      - '/sys:/host/sys:ro'
      - '/etc/os-release:/host/etc/os-release:ro'
    restart: unless-stopped
    cap_add:
      - SYS_PTRACE
    security_opt:
      - apparmor=unconfined

volumes:
  netdataconfig:
  netdatalib:
  netdatacache:
```

{{< youtube id="Y_W35yuOeRk" autoplay="false" >}}s