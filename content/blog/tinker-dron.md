---
title: "Using DJI Tello Drone with Python"
date: 2024-07-30T23:20:21+01:00
draft: false
tags: ["Tinkering"]
summary: Learning drone programming with Python and a DJI Tello drone.
url: 'dji-tello-python-programming'
---

Last year I got **a drone**.

This is what I've learn with it so far.

![DJI Tello Dron](/blog_img/hardware/dji-dron.png)


## DJI Tello Python

I have [forked](https://github.com/damiafuentes/DJITelloPy) and created a Docker Image with Python Code which is able to control the drone:
* https://github.com/JAlcocerT/DJITelloPy

* Hardware wise:
    * The battery last ~10 min
    * Weight ~80g
    * Price ~100$
    * It has an Intel CPU which **we can program with python**, 5MP Camera with 720p Live View Vision System, WIFI 802.11n 2.4G,

So far it can do the following:

1. Test Setup
2. Keyboard Control
3. Camera (Photo/Video) Control
4. Computer Vision with DJI Tello

Credits to [Murtaza's YT Video](https://www.youtube.com/watch?v=LmEcyQnfpDA&t=1286s) that helped to get started.

{{< youtube id="v=LmEcyQnfpDA" autoplay="false" >}}

### Computer Vision without a Dron

* With a [Rpi and a small camera!](https://jalcocert.github.io/JAlcocerT/raspberry-pi-camera-setup/)

![CV with a RPI4](/blog_img/hardware/RPi4_2gb_cam.jpg)

> I got a small camera for the Pi this year - Try `OpenCV` and `yolov8`

---

## FAQ

### How to Control DJI Tello with Mobile Apps

* There are official Apps for DJI Tello (Manufactured by Ryze)
    * [iOS App](https://apps.apple.com/us/app/tello/id1330559633)
    * Android - The **official app seems outdated** and non compatible with my Android
        A Free Demo alternative is [this one](https://play.google.com/store/apps/details?id=com.volatello.tellofpv.demo)

### About Dron Regulations

* https://drony.gov.pl/
* https://www.seguridadaerea.gob.es/es/particulares/piloto-de-drones

* **Remember** 
    * An exam is generally required for drones weighing over 250 grams (0.55 pounds) in most countries.
    * Check your local regulations to ensure compliance, as rules can differ significantly by region.

### DIY Dron Resources

* Haga un PEQUEÑO dron Arduino con cámara FPV: ¿volará?

https://www.youtube.com/watch?v=Sa6EslOHsI0

* Haga un avión de papel FPV RC que vuele | ESP32


https://www.youtube.com/watch?v=hDjBi0ErDdw

* Open Source Motion Capture for Autonomous Drones

https://www.youtube.com/watch?v=0ql20JKrscQ
https://github.com/jyjblrd/Low-Cost-Mocap
https://github.com/jyjblrd/Low-Cost-Mocap?tab=MIT-1-ov-file#readme
> Low cost motion capture system for room scale tracking






