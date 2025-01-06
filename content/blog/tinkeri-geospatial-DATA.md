---
title: "Geospatial Data Tricks and a GoPro"
date: 2025-01-05T23:20:21+01:00
draft: flase
tags: ["Dev"]
description: 'What Ive learnt so far about GeoSpatial Data Analysis. Applied to GoPro MetaData Extraction.'
summary: '.'
url: 'geospatial-data'
---


{{< callout type="info" >}}
Geospatial learnings are collected at [RouteTracker Repo](https://github.com/JAlcocerT/Py_RouteTracker) 💻
{{< /callout >}}

## GeoSpatial Data Formats

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

![Phyphox Android Karting](/blog_img/iot/phyphox-android.jpg)

People do this kind of **cool stuff**:

<!-- https://www.youtube.com/watch?v=2eDWxUTfZHY -->

{{< youtube "2eDWxUTfZHY" >}}


### Garmin VIRB Edit

[Garmin VIRB Edit](https://www8.garmin.com/support/download_details.jsp?id=6591) for Windows

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

[![Open in Google Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/JAlcocerT/Py_RouteTracker/blob/main/Py_RoutePolar.ipynb)

![PhyPhox Karting](/blog_img/iot/phyphox-android.jpg)

![PhyPhox Karting](/blog_img/iot/Zonas-Cardiacas.png)


---

## FAQ