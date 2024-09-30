---
title: "[Review] Firebat AK2 PLUS"
date: 2024-09-29T23:20:21+01:00
draft: false
tags: ["Dev"]
summary: Testing Firebat Mini PC
url: firebat-ak2-plus-minipc-review
---



## The FIREBAT AK2 PLUS MiniPC

* N100 8GB 256GB

> Great accesibility to add an additional 2.5" drive
---

| Device | CPU Benchmark (4 threads) | CPU Benchmark (8 threads) |
| :-- | :-- | :-- |
| Raspberry Pi 4 2GB | ~1.7k events | - |
| Raspberry Pi 4 4GB | ~28k events | - |
| Orange Pi 5 | ~38k events | ~50k events |
| FireBat | ~22k events | - |

```sh
sysbench --test=cpu --cpu-max-prime=20000 --num-threads=4 run
7z b -mmt4
```

| Device | Tot (4 threads) |
| :-- | :-- | :-- |
| Raspberry Pi 4 2GB | 1622/6311 | 
| Raspberry Pi 4 4GB | 1442/5508 | 
| Raspberry Pi 5 8GB | 2.7k/10k | 
| Orange Pi 5 |  2.7k/11.8k | 
| FireBat | ~1.8k events | ~6.4k events |




```sh
git clone https://github.com/JAlcocerT/Py_Trip_Planner/
cd Py_Trip_Planner

sudo bash -c 'time docker pull python:3.8' #let's remove the time of downloading the Python base image from the equation, it was ~1 min!

#docker build -t pytripplanner .
sudo bash -c 'time docker build --no-cache -t pytripplanner .'
#sudo bash -c 'time podman build -t pytripplanner .'
```

```sh
apt install cargo
#cargo install --git https://github.com/astral-sh/rye rye
time cargo install --git https://github.com/astral-sh/rye rye
```


| Device              | Docker Build  |
|---------------------|---------------|
| Raspberry Pi 4 2GB  | ~3672s         |
| Raspberry Pi 4 4GB  | ~3480s         |
| Orange Pi 5         | ~1777s         |
| BMAX B4 N95         | ~45 seconds    |
| Firebat AK2 Plus N100| ~47 seconds    |
| AMD 5600G           | -             |

| Platform | opi    | rpi4b 2gb | RPi 5 8GB | Hetzner  | FireBat |
|----------|--------|-----------|-----------|----------|----------|
| Build Time | 5min 20s | 10min 7s  | 4min 30s  | 6min 15s | 2min 45s|


## FAQ

Enter the FireBat MiniPC bios by pressing ESC.

### How to Benchmark the Firebat MiniPC


{{% details title="Testing CPU Performance - SysBench, TripPlanner, build Astral-sh,..." closed="true" %}}

Check CPU cores and test with sysbench:

```sh
#cat /proc/cpuinfo
#uname -a
#nproc
sudo apt install sysbench -y
sysbench --test=cpu --cpu-max-prime=20000 --num-threads=4 run
```

* Benchmark with 7zip:

```sh
sudo apt-get install p7zip-full
7z b -mmt
7z b -mmt4
7z b
```

and with 7zr:

```sh
7zr b -mmt1
```

* [Trip Planner](https://github.com/JAlcocerT/Py_Trip_Planner/) docker build time:

```sh
git clone https://github.com/JAlcocerT/Py_Trip_Planner/
cd Py_Trip_Planner

sudo bash -c 'time docker pull python:3.8' #let's remove the time of downloading the Python base image from the equation, it was ~1 min!

#docker build -t pytripplanner .
sudo bash -c 'time docker build --no-cache -t pytripplanner .'
#sudo bash -c 'time podman build -t pytripplanner .'
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


{{% details title="Testing Internet Connectivity" closed="true" %}}

```sh
ip addr show
hostname -I

#sudo apt-get install net-tools
#ifconfig

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
speedtest-cli #speedtest-cli --simple
```


```sh
curl -sS https://ipinfo.io/json #the command to use
curl -sS http://ip-api.com/json/ #provides info about country, ISP, ...
curl -6 ifconfig.me #ipv6 info 
```

{{% /details %}}



### How to use a RPi - Without a RPi

A raspberry Pi inside a container - https://github.com/ptrsr/pi-ci

> A Raspberry **Pi emulator in a Docker image** that lets developers easily prepare and flash RPi configurations.




