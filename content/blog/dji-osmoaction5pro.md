---
title: "[Review] DJI Osmo Action 5 Pro"
date: 2024-10-05T00:20:21+01:00
draft: false
tags: ["Tinkering"]
summary: Learning how to edit videos with the OA5Pro
description: Testing the OA5 Pro
url: 'dji-osmo-action-5-pro'
---

A photo of the latest DJI camera:

![DJI Osmo Action 5 Pro](/blog_img/hardware/dji_oa5pro.jpg)

{{< youtube "MlbJ3tY43vE" >}}

<!-- https://demo.mediacms.io/view?m=ZLjVzLcCE

{{< video "https://www.w3schools.com/tags/movie.mp4" >}} -->

### How to edit Videos

I was including [here](https://jalcocert.github.io/Linux/docs/debian/content_creation/) how to setup your PC for content creation.

{{< details title="Shotcut with OA5 Pro📌" closed="true" >}}

```sh
sudo snap install shotcut --classic
```

1. Open Shotcut, add the .mp4 file (not the [DJI's LRF](https://raw.githubusercontent.com/JAlcocerT/Docker/refs/heads/main/Backups/NextCloud/nc_mariadb.yml) - Low Resolution File used for the video playback)
2. On the top left side - **add filter**: audio mute / brightness / ...
3. When you are done witht he changes: CTRLE+E to export as .mp4

{{< /details >}}

{{< details title="KDEnlive with OA5Pro 📌" closed="true" >}}

```sh
sudo snap install shotcut --classic
```

1. Open Shotcut, add the .mp4 file (not the [DJI's LRF](https://raw.githubusercontent.com/JAlcocerT/Docker/refs/heads/main/Backups/NextCloud/nc_mariadb.yml) - Low Resolution File used for the video playback)
2. On the top left side: add filter: audio mute

{{< /details >}}


## Conclusions of Osmo Action 5 Pro

* You are required to [install DJI Mimo app](https://www.dji.com/pl/downloads/djiapp/dji-mimo) - which will allow you to activate the warranty + transfer files (no need for cable!) + receive firmware updates
    * The app is neither in Google not Apple store...❗
    * I would keep the .apk handy, as per my experience with the [DJI Tello Drone](https://jalcocert.github.io/JAlcocerT/dji-tello-python-programming/)

{{< callout type="info" >}}
As they required email registration, I put to test how seriously DJI takes privacy by using **[addy.io](https://github.com/anonaddy/docker) email aliases** ([ex-anonaddy](https://github.com/anonaddy/anonaddy?tab=readme-ov-file#will-people-see-my-real-email-if-i-reply-to-a-forwarded-one))
{{< /callout >}}

<!-- 
https://app.addy.io/docs/#account-details-GETapi-v1-account-details 
-->

* The battery is 1950mah and charges really fast 👌
    * From 10% to 80% - ~30 min
    * From 10% to 100% - ~40 min
    * If you leave the battery connected, it will loose ~2% charge during a night

{{< details title="Watermark pictures with Python and Pillow 📌" closed="true" >}}

1. **0% to 60% at 23W**  
   - `Time = Energy for 60% ÷ 23W`

2. **60% to 85% at 17W**  
   - `Time = Energy for 25% ÷ 17W`

3. **85% to 100% at 9W**  
   - `Time = Energy for 15% ÷ 9W`

4. **Total Time**  
   - `Total Time = Time (0-60%) + Time (60-85%) + Time (85-100%)` ~ 30 min
{{< /details >}}

* Memory wise 👌
    * The built in is ~45GB
    * I added a Kingston SD 128GB CL10 (up to 80mb/s reading and 10 mb/s of writing - which might be to slow)
    * When transfering files to my laptop I saw up to 90MB/s speed

* Transfering files:
    * Via the Mimo App
    * Via usb-c (turn of the camera first and then connect the cable)
        * You will see one drive for the internal card and another for your SD card if any
        * Transfer speed is ~25mb/s

* File size:
    * Super night mode FHD (Full HD) 1920x**1080@30fps** has a 29.5mb/s video bitrate, making a 4.4gb for 20min duration. 
    * Super night mode with UHD (Ultra High Definition) **3840**x2160@30fps - 4k@30fps makes a ~8gb file for 20 min duration and used 20% battery - the super night mode needs stabilization ON
    * **2688**x1522 resolution, aka 2.7K

### My Workflow with the DJI OA5-Pro

* Uploading the videos!
    * To youtube
    * [To MediaCMS](https://hub.docker.com/r/mediacms/mediacms/tags)
        * https://github.com/mediacms-io/mediacms/blob/main/docker-compose.yaml
        * https://mediacms.io/

---

### Other topics related to Photo/Video


{{< details title="Watermark pictures with Python and Pillow 📌" closed="true" >}}

* https://www.geeksforgeeks.org/python-pillow-creating-a-watermark/

{{< /details >}}

{{< details title="Scaling video resolution with - Upscayl + Shotcut 📌" closed="true" >}}

Thanks to this [Freeware Focus fantastic video](https://www.youtube.com/watch?v=QdYdq3xO7-k&pp=ygUPdXBzY2F5bCBzaG90Y3V0) for the idea

{{< /details >}}