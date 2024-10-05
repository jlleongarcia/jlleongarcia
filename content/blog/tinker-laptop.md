---
title: "Reviewing a Laptop: ThinkPad x13 G2"
date: 2024-10-04T23:20:21+01:00
draft: false
tags: ["Dev"]
summary: Checking my new Laptop - The Lenovo ThinkPad x13
url: laptop-benchmark
---

As simple as it gets: it has a 8C/16T CPU, 16GB Ram and 500GB SSD.

![Lenovo Thinkpad x13](/blog_img/hardware/Lenovo_x13.jpg)

## Benchmarks

{{< details title="Results - SysBench 📌" closed="true" >}}

| Device                                      | Sysbench (4 threads) | Sysbench (8 threads)  | Release Date     |
|---------------------------------------------|---------------------------|----------------------------|------------------|
| Raspberry Pi 4 2GB (Broadcom BCM2711, 4C/4T)| ~1.7k events              | -                          | June 2019        |
| Raspberry Pi 4 4GB (Broadcom BCM2711, 4C/4T)| ~28k events               | -                          | June 2019        |
| Orange Pi 5 (Rockchip RK3588S, 8C/8T)       | ~38k events               | ~50k events                | November 2022    |
| Intel i3 5005U (Intel Core i3 5005U, 2C/4T) | ~7.3k events              | no 8C, but it served me to try Linux for the first time!  | January 2015     |
| **AMD 5850U (AMD Ryzen 7 8C/16T)**       | ~72k events               | ~121k events               | January 2021     |
| AMD 5600G (AMD Ryzen 5, 6C/12T)       | ~79k events                | ~123k events (with 12 threads goes up to ~130k and 6.1k 24.1k 7zip) | April 2021       |

> I am really impress for the CPU performance, almost the most powerful CPU I ever tried

<!-- The first CPU was an Intel and then a AMD Athlon 64 3200+ (both 1 core!) -->

```sh
sysbench --test=cpu --cpu-max-prime=20000 --num-threads=4 run
#sysbench --test=cpu --cpu-max-prime=20000 --num-threads=8 run
```

{{< /details >}}

### How to check dead Pixels

* https://lcdtech.info/en/tests/dead.pixel.htm
* https://deadpixeltest.org/colors/black

---

## FAQ

Enter the boot menu of the Lenovo Thinkpad x13 g2 by **pressing F12**

{{< details title="Changing Power Profiles 📌" closed="true" >}}

```sh
powerprofilesctl list
#powerprofilesctl set performance
```

{{< /details >}}