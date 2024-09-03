---
title: "Using Linux in Android - Termux"
date: 2024-10-15T23:20:21+01:00
draft: true
tags: ["Dev"]
summary: I always wanted to run Docker on Android - Here is how to do it
url: setup-termux-android
---


{{< callout type="info" >}}
How to run [these tests](#faq)
{{< /callout >}}


> **Big Thanks to [Alex](https://www.linkedin.com/in/dunayeu/) 🙌** - For sharing the results of the Raspberry Pi 5 8GB  

{{< details title="OrangePi 5 with Latest Kernel 📌" closed="true" >}}
* [Installing OS](https://jalcocert.github.io/RPi/posts/getting-started/) with latest kernel thanks to [Joshua-Riek](https://joshua-riek.github.io/ubuntu-rockchip-download/boards/orangepi-5b.html)
  * Remember that they are not the [official ones](https://github.com/orangepi-xunlong/orangepi-build)!
  * I have tried the 6.1.75 version, which has HDMI support working
  * Other 3rd party images: **[Armbian](https://www.armbian.com/orangepi-5/)**

{{< /details >}}

{{< callout type="info" >}}
* You can boot RPi5 from NVMe [like so](https://jalcocert.github.io/RPi/posts/pi-vs-orange/#using-nvme-with-the-orange-pi-5)
  * The SD card will still have the boot priority (if it's there)
{{< /callout >}}