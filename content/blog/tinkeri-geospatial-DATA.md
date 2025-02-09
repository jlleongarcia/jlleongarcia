---
title: "Geospatial Data Tricks and a GoPro"
date: 2025-01-05T23:20:21+01:00
draft: false
tags: ["Dev"]
description: 'What Ive learnt so far about GeoSpatial Data Analysis. Applied to GoPro MetaData Extraction. And karting.'
url: 'geospatial-data'
math: true
---



## GeoSpatial Data Formats


{{< callout type="info" >}}
Geospatial learnings are collected at [RouteTracker Repo](https://github.com/JAlcocerT/Py_RouteTracker) 💻
{{< /callout >}}

### GeoJSON

### GPX

Phone apps like Komoot or even [PhyPhox can save the GPS records as GPX files](https://www.leafwindow.com/en/get-gps-log-with-phyphox-and-plot-it-with-wp-gpx-maps-en/)



> With R i learnt about many other formats.

https://github.com/exiftool/exiftool/blob/master/fmt_files/gpx.fmt

## GoPro Metadata Extraction

* https://github.com/gopro/gpmf-parser

> Parser for GPMF™ formatted telemetry data used within GoPro® cameras.


{{< callout type="info" >}}
Related Projects Files are at [RouteTracker](https://github.com/JAlcocerT/Py_RouteTracker/tree/main/Z_GoPro) 💻
{{< /callout >}}


* https://github.com/exiftool/exiftool
    * https://medium.com/@jrballesteros/a-simple-guide-to-extract-gps-information-from-gopro-photos-and-videos-cf6edf6dc601
    * https://github.com/exiftool/exiftool/blob/master/fmt_files/gpx.fmt

> GPLv3 | ExifTool meta information reader/writer

Hey, but why would you want to...

{{< cards >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/blog/tinker-phyphox/" title="PhyPhox" image="/blog_img/iot/phyphox-android.jpg" subtitle="Physical Experiments with an Android Phone" >}}
  {{< card link="https://github.com/JAlcocerT/Py_RouteTracker" title="Route Tracker" image="/blog_img/apps/gh-jalcocert.svg" subtitle="Analyzing Routes Data with Python" >}}
{{< /cards >}}

<!-- 
![Phyphox Android Karting](/blog_img/iot/phyphox-android.jpg) 
-->

People do this kind of **cool stuff**:

<!-- https://www.youtube.com/watch?v=2eDWxUTfZHY -->

{{< youtube "2eDWxUTfZHY" >}}


### Garmin VIRB Edit

[Garmin VIRB Edit](https://www8.garmin.com/support/download_details.jsp?id=6591), which works for Windows

<!-- https://www.youtube.com/watch?v=s5v9ZCwcung -->

{{< youtube "s5v9ZCwcung" >}}

### Telemetry Overlay

There is a possibility to use paid Programs to create these kind of videos:

<!-- https://www.youtube.com/watch?v=3Y-lh6hbp14 -->
<!-- https://www.youtube.com/watch?v=Oimk7-vG5pk -->

{{< youtube "3Y-lh6hbp14" >}}

> Very interesting how those 390cc and 15cv (77) differ from the 390cc 18 cv (80) and 460cc 22cv (88km/h topspeed)

### Exif and Python with GoPro

```sh
sudo apt-get install libimage-exiftool-perl #install exif
#exiftool -ee ./GX030390.MP4 #you will see it on CLI
exiftool -ee ./GX030390.MP4 > output-GX030390.txt #saves it
```

#### Extracting Location Data from GoPro MP4



[![Open in Google Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/JAlcocerT/Py_RouteTracker/blob/main/Z_GoPro/gopro_explore.ipynb)

#### Extracting Speed Data from GoPro MP4

---

## PhyPhox Data Extraction


---

## Polar Data Extraction

<!-- [![Python Notebook - RoutePolar](/img/OpenInColab.svg)](https://colab.research.google.com/github/JAlcocerT/Py_RouteTracker/blob/main/Py_RoutePolar.ipynb) -->
<!-- 
[![Open in Google Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/JAlcocerT/Py_RouteTracker/blob/main/Py_RoutePolar.ipynb) -->

You can also open it with: [![Open in Google Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/JAlcocerT/Py_RouteTracker/blob/main/Py_RoutePolar.ipynb)

![PhyPhox Karting](/blog_img/iot/phyphox-android.jpg)

![Heart zones](/blog_img/iot/Zonas-Cardiacas.png)


---

## FAQ

### DJi Metadata Extraction

The DJi OA5Pro does not have a GPS.

Videos can look like:

<!--
https://studio.youtube.com/video/2ZSDeD3HzHg/edit
 -->

{{< youtube "2ZSDeD3HzHg" >}}

With the [updated firmware](https://jalcocert.github.io/JAlcocerT/dji-oa5pro-firmware-updates/) and **high bit rate**, `1080p30 UW RS` I got:

* 38.9GB total files (every 17.2gb or 1h 12min there is a file reset)
* Bitrate 31168 kbps, with an average size of **~3.75MB/s**
* Using 80% of the total battery


Im now using rsync to move the big files:

```sh
#cp *.MP4 /home/jalcocert/Desktop/oa5pro/
rsync -avP *.MP4 /home/jalcocert/Desktop/oa5pro/ #speeds of ~32mb/s from internal card!

#rm *.LRF #clean if needed LRF
```

## Learn with this one

### Video to Image to GIF


The choice between PNG and JPG depends on the trade-off between **image quality** and **file size**:  

```bash
#from second 90 of the video, give me 1fps
ffmpeg -i DJI_20250116072852_0036_D.MP4 -vf "select='gte(t\,90)',fps=1" -vsync vfr frame_%03d.png
ffmpeg -i DJI_20250116072852_0036_D.MP4 -vf "select='gte(t\,90)',fps=1" -vsync vfr frame_%03d.jpg
```

- **Use PNG** if you need high-quality, lossless images.
- **Use JPG** if you want smaller file sizes and are okay with slight quality loss.

{{< cards cols="2" >}}
  {{< card link="https://github.com/JAlcocerT/YT-Video-Edition/tree/main/With_FFmpeg/Video2Images" title="Video2Images ↗" >}}
  {{< card link="https://github.com/JAlcocerT/YT-Video-Edition/tree/main/With_FFmpeg/Images2Gif" title="Images2Gif ↗" >}}
{{< /cards >}}

And just between 90s and 105s:

```sh
ffmpeg -i DJI_20250116072528_0035_D.MP4 -vf "select='between(t,90,105)',fps=1" -vsync vfr frame_%03d.png
```

> This is an interesting way to generate Images for YT Videos!

{{< callout type="info" >}}
And if the image is too big, [you can reduce it](https://jalcocert.github.io/JAlcocerT/dji-oa5pro-firmware-updates/#image-caption).
{{< /callout >}}


### More power is good BUT

But!

Speed wont increase that quick.

Remember that the **kinetic energy** of a body goes as: $KE = \frac{1}{2}mv^2$

Remember that the relationship isn't linear, so these percentages describe the *change* but don't explain the *why* behind the change (as discussed in the previous response about non-linear relationships).

**Calculations:**

* **Percentage Change = (New Value - Old Value) / Old Value * 100%**

**1. 390cc 15 cv (77 km/h) to 390cc 18 cv (80 km/h):**

* **Power Increase:** (18 - 15) / 15 * 100% = 20%
* **Speed Increase:** (80 - 77) / 77 * 100% ≈ 3.9%

**2. 390cc 15 cv (77 km/h) to 460cc 22 cv (88 km/h):**

* **Power Increase:** (22 - 15) / 15 * 100% ≈ 46.7%
* **Speed Increase:** (88 - 77) / 77 * 100% ≈ 14.3%

**3. 390cc 18 cv (80 km/h) to 460cc 22 cv (88 km/h):**

* **Power Increase:** (22 - 18) / 18 * 100% ≈ 22.2%
* **Speed Increase:** (88 - 80) / 80 * 100% = 10%

**Summary Table:**

| Comparison                                 | Power Increase (%) | Speed Increase (%) |
| ------------------------------------------- | ----------------- | ----------------- |
| 15 cv to 18 cv (same cc)                   | 20                | 3.9               |
| 15 cv to 22 cv (different cc)              | 46.7              | 14.3              |
| 18 cv to 22 cv (different cc)              | 22.2              | 10                |

**Important Reminder:**

These percentage increases show the *change* in power and speed, but they *do not* imply a direct, proportional relationship.

Factors like aerodynamic drag, gearing, weight, and other variables play a crucial role, especially at higher speeds.

The smaller speed increase from 15 cv to 18 cv illustrates this point—even with a 20% power increase, the speed gain was relatively small due to the influence of these other factors.

Also, these are top speed at different days, by different drivers.

Lower temperatures can benefit lap times due to increased engine power, but it's crucial to consider tire temperature. The optimal temperature for the best lap times is a balance between these two factors and can vary depending on the track, kart setup, and driver skill.