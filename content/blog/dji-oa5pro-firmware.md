---
title: "DJI OA5 pro Firmware Updates"
date: 2025-01-05T00:20:21+01:00
draft: false
tags: ["Tinkering"]
summary: Learning how to edit videos with the OA5Pro
description: Updating OA5 Pro Firmware and commenting on my video edition learnings
url: 'dji-oa5pro-firmware-updates'
---




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

{{< youtube "4qLgpJc2Ghs" >}}

### About OA5Pro Videos

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

After the firmware update:

* 4k UW RS - 100% to 67% battery with a 

---

## Video Workflow

{{< callout type="info" >}}
CLI code base video workflow - 
{{< /callout >}}


But there is live beyond the CLI.

### KDEnLive


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


{{< callout type="info" >}}
`CTRL+Enter` to **render the video**.
{{< /callout >}}


### ShotCut

```sh
#https://flathub.org/apps/org.inkscape.Inkscape
flatpak install flathub org.inkscape.Inkscape

```

### Youtube Tricks

{{< gist jalcocert 879fecd6ae9bccaa0175d1c180a032cd "RStocks - IndexPriceEvolution.JPG">}}


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