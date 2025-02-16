---
title: "More video Tricks."
date: 2025-02-12
draft: false
tags: ["Dev"]
description: 'Quick videos with action cameras.'
url: 'my-action-cam-video-workflow'
---

So far, ive been doing couple of things with the **action cam**.

{{< cards >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/dji-osmo-action-5-pro/" title="OA5 Pro 101"  >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/dji-oa5pro-firmware-updates/" title="OA5Pro Firmware Update" >}}
{{< /cards >}}


Even apply data analytics for action cams and for karting!

{{< cards >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/geospatial-data/" title="Geospatial Analysis (with action cams)" >}}
{{< /cards >}}

Now its time for a recap on my latest video tricks.


## High vs Low Bit Rate

### FHD - 1080/30

With the [updated firmware](https://jalcocert.github.io/JAlcocerT/dji-oa5pro-firmware-updates/) and **high bit rate**, `1080p30 UW RS` I got these files with `H.265` codec:

* 38.9GB total MP4 files (every 17.2gb or 1h 12min there is a file reset)
* Bitrate 31168 kbps, with an average size of **~4.03MB/s**
* Using 80% of the total battery for those ~2h 45min of video

> This happened while recording at ~0C


With the [updated firmware](https://jalcocert.github.io/JAlcocerT/dji-oa5pro-firmware-updates/) and **low bit rate**, `1080p30 UW RS` I got:

* 41.6GB total MP4 files (every 17.2gb or 1h 13min there is a file reset)
* Bitrate 30739 kbps, with an average size of **~3.98MB/s**
* Using 93% of the total battery for those ~2h 45min of video

> This happened while recording at room temperature ~20C

---

## FAQ

### Transfering Files

**Moving just MP4's** will save you ~23% of the transfer load (100gb instead of 120 for example)

```sh
#cp *.MP4 /home/jalcocert/Desktop/oa5pro/
rsync -avP *.MP4 /home/jalcocert/Desktop/oa5pro/ #it creates the folder if its not there | no overwrite

#rm *.LRF #clean if needed LRF
```

### Quick Videos - CLI


#### Telemetry Data

Extracting data from action camera `.MP4` files.

> It all started with [PhyPhox](https://jalcocert.github.io/JAlcocerT/blog/tinker-phyphox/) and [PyRouteTracker](https://jalcocert.github.io/JAlcocerT/polar-data-python-analysis/)

```sh
sudo apt-get install libimage-exiftool-perl
exiftool -ee ./GX030390.MP4
#exiftool -ee ./GX030390.MP4 > output.txt
```

If you do similarly with a OA5Pro video and **see the metadata**, the output is **much more reduced**

```sh
exiftool -ee ./DJI_20241008163958_0031_D.MP4 #no GPS - no party
```

#### FFMPEG

Some tricks with ffmpeg package.

No reencoding = Quick 

1. **Simply Join**

```sh
ls *.MP4 | sed "s/^/file '/; s/$/'/" > file_list.txt #add .mp4 of current folder to a list

#du -sh ./* #check their size

#generate a video with them (IT PRESERVES THE ORIGINAL BITRATE)
ffmpeg -f concat -safe 0 -i file_list.txt -c copy output_video.mp4
#ffmpeg -f concat -safe 0 -i file_list.txt -c:v copy -an output_video.mp4 #silenced video
#ffmpeg -i output_video.mp4 -filter:v "setpts=PTS/4" -an fast_output_video.mp4 #
```

2. **Join (Silenced) + Song**

```sh
ls *.MP4 | sed "s/^/file '/; s/$/'/" > file_list.txt #add .mp4 of current folder to a list

#du -sh ./* #check their size

#generate a video from few parts
#ffmpeg -f concat -safe 0 -i file_list.txt -c copy output_video.mp4
ffmpeg -f concat -safe 0 -i file_list.txt -c:v copy -an silenced_output_video.mp4 #silenced video
#ffmpeg -i output_video.mp4 -filter:v "setpts=PTS/4" -an fast_output_video.mp4 #

#ffmpeg -stream_loop -1 -i "AETHER - Density & Time.mp3" -i silenced_output_video.mp4 -c:v copy -c:a aac -shortest output_with_song.mp4
ffmpeg -stream_loop -1 -i "TRAVELATOR - Density & Time.mp3" -i silenced_output_video.mp4 -c:v copy -c:a aac -shortest output_with_song.mp4

### 🎵 Music by: 
```

3. Extract images from video:

```sh
4ffmpeg -i input_video.mp4 -vf "select='gte(t\,120)',fps=1" -vsync vfr frame_%03d.png
ffmpeg -i DJI_20250116072852_0036_D.MP4 -vf "select='gte(t\,90)',fps=1" -vsync vfr frame_%03d.png
#ffmpeg -i DJI_20250116072852_0036_D.MP4 -vf "select='gte(t\,90)',fps=1" -vsync vfr frame_%03d.jpg


#between 2 seconds, 1fps extracts and creates a folder
#ffmpeg -i DJI_20250116072528_0035_D.MP4 -vf "select='between(t,90,105)',fps=1" -vsync vfr frame_%03d.png
mkdir -p "./$(basename DJI_20250215215547_0006_D.MP4 .MP4)" && ffmpeg -i DJI_20250215215547_0006_D.MP4 -vf "select='between(t,260,262)',fps=1" -vsync vfr "./$(basename DJI_20250215215547_0006_D.MP4 .MP4)/frame_%03d.png"
```

4. How to reduce image quality in Linux to upload as **youtube thumbnail**:

```sh
#ffmpeg -i thumbnail.png -c:v libwebp -quality 80 compressed_thumbnail.webp
#ffmpeg -i PXL_20241030_115355466.jpg -q:v 3 compressed_PXL_20241030_115355466.jpg
ffmpeg -i thumbnail.png -qscale:v 2 compressed_thumbnail.jpg
```

**Space what?**


```sh
df -h | awk '$2 ~ /G/'
#df -h | awk '$2 ~ /G/' | sort -rh -k 2 #sorted
df -h | awk '$5 > "5G" {print $0}' #list the partitions greater than 5GB
```

1. Have a look to the **trash**

```sh
#gio trash --empty
du -sh ~/.local/share/Trash/files
```

2. Maybe unused **container** images?

```sh
docker builder prune
#docker system prune -a
#docker volume prune
docker image prune -a
```

**Summary Table:**

| Command             | Focus                     | Cleans                                     | Data Loss Risk |
|----------------------|---------------------------|---------------------------------------------|----------------|
| `docker builder prune` | Build Cache               | Unused build layers                       | Low            |
| `docker system prune`  | All Unused Resources       | Containers, Networks, Dangling Images, Build Cache | Medium         |
| `docker volume prune`  | Unused Volumes            | Volumes not attached to any container       | **HIGH**       |
| `docker image prune`   | Dangling/Untagged Images | Dangling images, optionally all untagged images | Medium         |

**Which one to use?**

* Start with `docker system prune` if you want a general cleanup.
* Use `docker builder prune` if you're only concerned about build cache.
* Be *extremely* careful with `docker volume prune` as it can delete data.
* Use `docker image prune` with the `-a` option if you want to remove all untagged images (including older versions that might be taking up space).  Be sure you don't need those older versions!