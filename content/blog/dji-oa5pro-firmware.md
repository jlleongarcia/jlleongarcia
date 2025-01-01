---
title: "DJI OA5 pro Firmware Updates"
date: 2025-01-01T00:20:21+01:00
draft: false
tags: ["Tinkering"]
summary: Learning how to edit videos with the OA5Pro
description: Updating OA5 Pro Firmware and commenting on my video edition workflow learnings for youtube
url: 'dji-oa5pro-firmware-updates'
---


{{< cards >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/dji-osmo-action-5-pro/" title="Osmo 5 Pro" image="/blog_img/hardware/dji_oa5pro.jpg" subtitle="Oa5Pro Review" >}}
{{< /cards >}}


{{< callout type="info" >}}
Currently im using the [Mimo app v2.1.8](https://www.dji.com/pl/downloads/djiapp/dji-mimo)
{{< /callout >}}

## Updating OA5Pro Firmware

### Bitrates Improvements

**Bit rate** refers to the amount of data processed or transmitted over a period of time, usually measured in bits per second (bps) or its larger units like kilobits per second (kbps) or megabits per second (Mbps). 

For example, in video or audio, the **bit rate** determines the **quality** and **file size**:
- A **higher bit rate** generally means **better quality** (because more data is used to represent the video/audio) but also a **larger file size**.
- A **lower bit rate** typically results in **poorer quality** but a **smaller file size**.

> It controls how much detail is retained in the video or audio, and it directly affects how large the file will be and how smooth it will play.

<!-- {{< youtube "4qLgpJc2Ghs" >}} -->

### About OA5Pro Videos

After the firmware update:

* 4k UW RS - 100% to 67% battery with a 


Before Firmwaure update

|**Image Quality**|**Space (per second)**|**Space (30min)**|**Bit Rate**|**Battery**|
|:---|:---|:---|:---|:---|
|1080p@30fps|4MB/s|7200MB|To be filled|—|
|FHD - 1080@60fps/RS+/UW|5MB/s|9000MB|To be filled|—|
|2.7k@30fps/RS/UltraWide|5.6MB/s|10080MB|To be filled|—|
|2.7k@30/RS+/UW|—|—|To be filled|—|
|4K@25/RS/UW|—|—|To be filled|—|
|4K@48|7.5MB/s|13500MB|To be filled|—|
|4k@100/RS+/UW|—|—|To be filled|10% for 10min|


---

## Video Workflow

{{< callout type="info" >}}
CLI code base video workflow - https://github.com/JAlcocerT/YT-Video-Edition
{{< /callout >}}

But there is live beyond the CLI.

### KDEnLive

> https://github.com/KDE/kdenlive

Cutting a Video

<!-- https://www.youtube.com/watch?v=IH25sxOTKuc -->

{{< youtube "IH25sxOTKuc" >}}

* `S` to select
* `X` to activate the slicer to cut video when selected the timeframe

<!-- https://www.youtube.com/watch?v=oaqin5Nqe3A -->

{{< youtube "oaqin5Nqe3A" >}}


* `CTRL + Shift + G` - to ungroup and being able to remove audio only from a video
    * Audio fade out is a good choice to finish the audios

Once muted, you can use [Youtube free licensed music](https://www.youtube.com/audiolibrary?feature=blog) for your videos.


{{< details title="Rotate & Zoom in KDenLive 📌" closed="true" >}}

**1. Using the "Rotate" Effect:**

* **Import your video:** Drag and drop your video clip onto the Kdenlive timeline.
* **Apply the "Rotate" effect:**
    * Right-click on the video clip in the timeline.
    * Select "Apply an Effect" > `Transform`. 
    * The "Properties" window will open. Select the "Rotate" tab.
* **Adjust the rotation:** 
    * Use the slider or enter "900" in the "Rotate X / Y / Z" field. (Note: Kdenlive uses units of 1/10th of a degree).
* **Preview and adjust:** 
    * Play the video to preview the rotation. 
    * Adjust other parameters like scaling or cropping as needed.
* **Render your video:** 
    * Once you're satisfied, render the project to export the rotated video.


{{< /details >}}

{{< details title="Speed Up video in KDenLive 📌" closed="true" >}}

**Using the "Speed" Effect:**

* **Right-click** on the video clip in the timeline.
* Select "**Apply an Effect**" > "**Motion**" > "**Speed**."
* **Adjust the speed:** 
    * Use the slider or enter a value in the "Speed" field. 



{{< /details >}}

{{< callout type="info" >}}
`CTRL+Enter` to **render the video**.
{{< /callout >}}


### ShotCut

As an alternative to KDenLive


```yml
---
version: "2.1"
services:
  filebrowser:
    image: filebrowser/filebrowser
    container_name: filebrowser
    ports:
      - 8080:80
    volumes:
      - /home/Docker/FileBrowser/config:/config
      #- /home/Docker/FileBrowser/data:/srv
      - ~/user/Sync-Folder-Data:/srv #same as Syncthing!
    restart: unless-stopped    
```

### OBS

https://github.com/obsproject/obs-studio

```sh
flatpak install flathub com.obsproject.Studio
```

Im recording on a Dell 25` (2560x1440 16:9)

OBS Settings -> Output MPEG4 `.mp4` and codex x264

### Youtube Tricks

#### Descriptions

Youtube descriptions allow to use some kind of simplified markdown, like this:

<!-- {{< gist jalcocert 1b799eb643647096b80ba0f63eccf334 "RStocks - IndexPriceEvolution.JPG">}}
https://gist.github.com/JAlcocerT/1b799eb643647096b80ba0f63eccf334 -->
{{< gist jalcocert 1b799eb643647096b80ba0f63eccf334>}}

#### Fixed Comment


#### Image Caption

You can use **inkscape, gimp** to create a catchy image:

```sh
#https://flathub.org/apps/org.inkscape.Inkscape
flatpak install flathub org.inkscape.Inkscape
```

or, if you have an image already but it is bigger than 2.5mb, you can use CLI to reduce it:

```sh
sudo apt install imagemagick
convert too_big_image.jpg -quality 50% output_image.jpg #ok to upload to YT
```

## Conclusions

### Thanks to

For explaining the firmware update process:

<!-- https://www.youtube.com/watch?v=1GTZzLX86u4 -->

{{< youtube "1GTZzLX86u4" >}}


---

## FAQ

### Transfer Speeds

The USB-c on my [x13 laptop](https://jalcocert.github.io/JAlcocerT/laptop-lenovo-thinkpad-x13-benchmark) can transfer ~250mb/s to an external ssd 2280 nvme drive.

And when pulling video data from the OA5Pro:

* via USB ~25mb/s
* via USB-c ~28mb/s

The limitant is the internal memory / the SD card im using with the osmo camera.