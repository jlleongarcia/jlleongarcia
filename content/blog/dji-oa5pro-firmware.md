---
title: "DJI OA5 pro Firmware Updates"
date: 2025-01-01T00:20:21+01:00
draft: false
tags: ["Tinkering"]
summary: Learning how to edit videos with the OA5Pro
description: Updating OA5 Pro Firmware. Compared with a go pro hero 9 and Commenting on my new video edition learnings for youtube.
url: 'dji-oa5pro-firmware-updates'
---


{{< cards >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/dji-osmo-action-5-pro/" title="Osmo 5 Pro" image="/blog_img/hardware/dji_oa5pro.jpg" subtitle="Oa5Pro Review" >}}
{{< /cards >}}


{{< callout type="info" >}}
Currently im using the [Mimo app v2.1.8](https://www.dji.com/pl/downloads/djiapp/dji-mimo)
{{< /callout >}}

## Updating OA5Pro Firmware

<!-- https://www.youtube.com/watch?v=cfwlf_SDkQU&t -->
{{< youtube "cfwlf_SDkQU" >}}

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

> Once muted, you can use [Youtube free licensed music](https://www.youtube.com/audiolibrary?feature=blog) for your videos - https://www.youtube.com/audiolibrary


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


{{< details title="Overlay a Video in KDenLive 📌" closed="true" >}}


**1. Place Videos on the Timeline**

* **Main Video:** Drag and drop your main video clip onto the bottom video track.
* **Overlay Video:** Drag and drop the overlay video clip onto the top video track.

**2. Adjust Overlay Position and Size**

* **Select Overlay Clip:** Click on the overlay video clip in the timeline.
* **Transform Effect:** Right-click on the overlay clip and select "Add Effect > Video Filters > Transform."
* **Adjust Parameters:** In the "Transform" effect settings, you can:
    * **Resize:** Adjust the width and height of the overlay video.
    * **Position:** Move the overlay video within the frame using the X and Y coordinates.
    * **Rotation:** Rotate the overlay video if needed.

**3. Control Overlay Appearance (Optional)**

* **Opacity:** Adjust the opacity of the overlay video in the "Transform" effect settings to make it more or less transparent.
* **Blending Modes:** Experiment with different blending modes (e.g., "Screen," "Overlay," "Multiply") in the "Transform" effect settings to achieve various visual effects.


**Key Considerations:**

* **Video Formats:** Ensure that both videos have compatible formats and frame rates for smooth playback.
* **Timeline Order:** The video on the top track will appear on top of the video on the bottom track.
* **Keyframing:** Use keyframes within the "Transform" effect to animate the position, size, or opacity of the overlay video over time.


{{< /details >}}



{{< details title="Adding Text in KDenLive 📌" closed="true" >}}

**1. Create a Title Clip**

* **Right-click** in the "Project Bin" and select **"Add Title Clip."** 
* This will open a new window for you to design your text.

**2. Add Your Text**

* **Click anywhere** within the canvas area of the title window.
* **Type your text.**

**3. Customize the Text**

* **Font:** Choose from a variety of fonts installed on your system.
* **Size:** Adjust the font size to suit your needs.
* **Color:** Select a color for your text.
* **Alignment:** Align the text (left, center, right).
* **Effects:** 
    * **Bold/Italic:** Apply bold or italic styles.
    * **Outline:** Add an outline around the text for better visibility.
    * **Shadow:** Create a shadow effect behind the text.

**4. Adjust the Title Clip**

* **Duration:** Control how long the text appears on the screen by adjusting the duration of the title clip in the timeline.
* **Position:** Move the title clip within the timeline to determine when it appears in your video.
* **Effects (Optional):**
    * **Transitions:** Apply transitions (like fade in/out) to the appearance of the text.
    * **Animations:** Use keyframes to animate the position, size, or opacity of the text over time.

**5. Place the Title Clip in the Timeline**

* **Drag and drop** the title clip from the "Project Bin" onto the timeline. 
* Make sure it's on a track above your video clips.

**6. Preview and Render**

* **Preview** your video with the added text to see how it looks. 
* **Render** your project to export it as a finished video file.

**Tips:**

* **Keep it Simple:** Avoid overly complex text overlays that can distract viewers.
* **Readability:** Choose font sizes and colors that are easy to read on your video background.
* **Less is More:** Use text sparingly and only when it adds value to your video.

By following these steps, you can effectively add text overlays to your videos in Kdenlive to convey information, enhance storytelling, or add visual interest.


{{< /details >}}

{{< details title="Speed Up video in KDenLive 📌" closed="true" >}}

**Using the "Speed" Effect:**

* **Right-click** on the video clip in the timeline.
* Select "**Apply an Effect**" > "**Motion**" > "**Speed**."
* **Adjust the speed:** 
    * Use the slider or enter a value in the "Speed" field. 

{{< /details >}}

You can also **record an audio voice cover** on KDEnlive:

<!-- https://www.youtube.com/watch?v=_6zOPgtSjds -->
{{< youtube "_6zOPgtSjds" >}}


And blur some area thanks to the **Obscure effect**

<!-- https://www.youtube.com/watch?v=QehEtfw8Yas -->
{{< youtube "QehEtfw8Yas" >}}


{{< callout type="info" >}}
`CTRL+Enter` to **render the video**.
{{< /callout >}}

Rendering 3 files 4k60fps@60,2Mbit/s (3840x2160) 9.1GB video from the GoPro took **~3h** with the X300. 

![Streamlit with Cloudflare Tunnels Port](/blog_img/outro/kdenlive-render.png)


It was rendering at ~6fps, so be patience, depending on your CPU.


### ShotCut

As an alternative to KDenLive.

```sh
flatpak install flathub org.shotcut.Shotcut
```


### OBS

* https://github.com/obsproject/obs-studio

```sh
flatpak install flathub com.obsproject.Studio
```

Im recording on a Dell 25` (2560x1440 16:9).

> **OBS Settings** -> Output MPEG4 `.mp4` and codex x264.



### Youtube Tricks

Text2Speech, Speech2Text...

{{< details title="Get the mp3, make it text and then AI audio with OpenAI 📌" closed="true" >}}

* https://github.com/JAlcocerT/YT-Video-Edition

If you have rendered it as `.mp4`:

```sh
sudo apt install ffmpeg
ffmpeg -i video.mp4 audio.mp3
```

Then, pass that `.mp3` to OpenAI, to get the speech:

```sh

```

Finally, do Text2Speech, also with OpenAI:

```sh

```

{{< /details >}}

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

* https://dronexl.co/2024/10/21/dji-osmo-action-5-pro-firmware-update-bitrate/

---

## FAQ

### Transfer Speeds

The USB-c on my [x13 laptop](https://jalcocert.github.io/JAlcocerT/laptop-lenovo-thinkpad-x13-benchmark) can transfer **~250mb/s to an external ssd 2280 nvme** drive.

But, when **pulling video from the OA5Pro**:

* via USB ~25mb/s
* via USB-c ~28mb/s

The **limitant is the internal memory** / the SD card im using with the osmo camera.


### OA5Pro vs GoProHero9

1. GoPro cuts the files at ~3.7GB.

Files has an interesting naming with the GoPro: `GX010389`, then it would go the `GX020389`...


2. The bit rate when recording at 4K60 is ~60.2Mbit/s with a GPH9.

The OA5Pro now was ~100Mbit/s when bit rate is selected as high.

3. The **GoPro has GPS** - Which allow us to do [cool analysis with python](https://github.com/JAlcocerT/Py_RouteTracker/tree/main/Z_GoPro)

#### Extracting Telemtry Data from GPH9

> It all started with [PhyPhox](https://jalcocert.github.io/JAlcocerT/blog/tinker-phyphox/) and [PyRouteTracker](https://jalcocert.github.io/JAlcocerT/polar-data-python-analysis/)

```sh
sudo apt-get install libimage-exiftool-perl
exiftool -ee ./GX030390.MP4
#exiftool -ee ./GX030390.MP4 > output.txt
```

If you do similarly with a OA5Pro video, the output is **much more reduced**

```sh
exiftool -ee ./DJI_20241008163958_0031_D.MP4 #no GPS - no party
```


### Out of Space?

```sh
df -h | awk '$5 > "5G" {print $0}' #list the partitions greater than 5GB
```