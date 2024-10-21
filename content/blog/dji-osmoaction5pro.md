---
title: "[Review] DJI Osmo Action 5 Pro"
date: 2024-10-05T00:20:21+01:00
draft: false
tags: ["Tinkering"]
summary: Learning how to edit videos with the OA5Pro
description: Testing the OA5 Pro
url: 'dji-osmo-action-5-pro'
---

First, A photo of the latest DJI Camera:

![DJI Osmo Action 5 Pro](/blog_img/hardware/dji_oa5pro.jpg)

{{< youtube "MlbJ3tY43vE" >}}

<!-- https://demo.mediacms.io/view?m=ZLjVzLcCE

{{< video "https://www.w3schools.com/tags/movie.mp4" >}} -->

### How to edit Videos

{{< callout type="info" >}}
How to [setup your PC for content creation](https://jalcocert.github.io/Linux/docs/debian/content_creation/): OBSStudio, Shotcut, KDenLive...
{{< /callout >}}

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

Make sure to **explore the resolutions and modes**.

There is the possibility to record at FHD 1080p@240fps, but not with wide mode, for example.

* Video Modes
   * TimeLapse 1h/3s Sunset Scene - 1080p@30 aka **1080P30/3s**- It makes 1 real hour to be 40s in the video and 93mb - 2.3mb/s
      * It can also be 2.7k and 4k
   * Hyperlapse during the night was having some glitches

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

{{< details title="Battery Drain Tests 📌" closed="true" >}}

1. **0% to 60% at 23W**  
   - `Time = Energy for 60% ÷ 23W`

2. **60% to 85% at 17W**  
   - `Time = Energy for 25% ÷ 17W`

3. **85% to 100% at 9W**  
   - `Time = Energy for 15% ÷ 9W`

4. **Total Time**  
   - `Total Time = Time (0-60%) + Time (60-85%) + Time (85-100%)` ~ 30 min
{{< /details >}}

* Memory wise 
    * The built in is ~45GB 👌
    * I added a **Kingston SD** 128GB CL10 (up to 80mb/s reading and **10 mb/s of writing** - which might be to slow)
        * It is enough to record in there video at 1080p@30fps **without micro-stops**
         * 1080p@30fps is around 4mb/s in size
         * FHD - 1080@60fps/RS+/UW, its ~5mb/s and also works
        * **Even 2.7k@30fps/RS/UltraWide works!** It's ~5.6mb/s in average size
        * 2.7k@30/RS+/UW, but I prefered the quality of the RS mode
        * 4K@25/rs/uw
        * And I got to **work in the SD** 4K@48/ / at ~7.5 mb/s
    * When transfering files to my laptop I saw up to 90MB/s speed (reading from SD, writing to SSD)

* Transfering files:
    * Via the Mimo App
    * Via usb-c (**turn ON the camera first** and then connect the cable)
        * You will see one drive for the internal card and another for your SD card if any
        * Transfer speed is ~25mb/s from the internal SD card

* File size:
    * Super night mode FHD (**Full HD**) 1920x**1080@30fps** has a 29.5mb/s video bitrate, making a 4.4gb for 20min duration. 
    * Super night mode with UHD (Ultra High Definition) **3840**x2160@30fps - **4k**@30fps makes a ~8gb file for 20 min duration and used 20% battery - the super night mode needs stabilization ON
    * **2688**x1522 resolution, aka 2.7K

{{< callout type="warning" >}}
  Stabilization is great during the day, but **not during the night.**
{{< /callout >}}

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

{{< details title="How to Combine .mp4 Videos with Python MoviePy 📌" closed="true" >}}

You will need the [MoviePy Package](https://github.com/Zulko/moviepy) 

```py
from moviepy.editor import VideoFileClip, concatenate_videoclips
```

> Thanks to [NeuralNine yt Video](https://www.youtube.com/watch?v=Q2d1tYvTjRw)

{{< /details >}}

{{< callout type="info" >}}
This is the repo I use for [my Video Editing WorkFlow](https://github.com/JAlcocerT/VideoEditingRemotion)
{{< /callout >}}


> Very Interesting way to make [video animations with python](https://zulko.github.io/moviepy/gallery.html#data-animations) and even [vector animations](https://zulko.github.io/blog/2014/09/20/vector-animations-with-python/)


{{< details title="Audio for Videos 📌" closed="true" >}}

In [Youtube Studio](https://studio.youtube.com/channel/UCPPMA8ZEusAe5dVH6PbjZFA/music), you also have a library for audio that you can use freely on your videos.

> I tried [freepd](https://freepd.com/) as per [this reddit post](https://www.reddit.com/r/Filmmakers/comments/wjq71o/does_anyone_know_where_to_get_copyright_free/)

You can find open-source, royalty-free, or Creative Commons-licensed music from several platforms that offer chill music for video projects. Here are some great resources:

### 1. **Free Music Archive (FMA)**
   - **Website**: [https://freemusicarchive.org](https://freemusicarchive.org)
   - FMA offers a vast collection of free music under Creative Commons licenses, which means you can use music for your videos based on the licensing terms (some require attribution).
   - **Genres**: Many genres, including chill, ambient, and downtempo music.
   
### 2. **YouTube Audio Library**
   - **Website**: [https://www.youtube.com/audiolibrary/music](https://www.youtube.com/audiolibrary/music)
   - YouTube provides a large collection of free music and sound effects that you can use for personal and commercial projects, even outside of YouTube.
   - **Genres**: Chill, ambient, and various others.
   - **Note**: Some tracks require attribution, so always check the licensing information.

### 3. **ccMixter**
   - **Website**: [https://ccmixter.org](https://ccmixter.org)
   - A community music remixing site featuring tracks licensed under Creative Commons. Many artists share their music for use in videos, often for free, as long as you provide credit.
   - **Genres**: Lots of ambient, electronic, chill, and experimental tracks.
   - **Licensing**: Pay attention to the specific Creative Commons license for each track (e.g., some require attribution or are non-commercial).

### 4. **Incompetech**
   - **Website**: [https://incompetech.com](https://incompetech.com)
   - Kevin MacLeod’s music collection, with a wide range of genres, is available under Creative Commons. You can find many chill and ambient tracks here.
   - **Genres**: Chill, ambient, background music, etc.
   - **Licensing**: Free to use with attribution. A paid option allows use without attribution.

### 5. **Bensound**
   - **Website**: [https://www.bensound.com](https://www.bensound.com)
   - Bensound offers a collection of royalty-free music, including a lot of chill, relaxing, and ambient tracks.
   - **Genres**: Chill, ambient, cinematic, electronic.
   - **Licensing**: Free to use with attribution for non-commercial use. Paid licenses available for commercial use.

### 6. **Jamendo Music**
   - **Website**: [https://www.jamendo.com](https://www.jamendo.com/start](https://www.jamendo.com/start)
   - Jamendo provides a large collection of royalty-free tracks for use in personal and commercial projects. They offer free music for non-commercial projects and paid licenses for commercial use.
   - **Genres**: Chill, ambient, electronic, acoustic.
   - **Licensing**: Free for personal use, and commercial licenses are available for purchase.

### 7. **Audionautix**
   - **Website**: [https://audionautix.com](https://audionautix.com)
   - Audionautix offers free music tracks composed by Jason Shaw, licensed under Creative Commons. You can filter by mood and genre to find chill or relaxing tracks.
   - **Genres**: Chill, acoustic, ambient, and more.
   - **Licensing**: Free with attribution under Creative Commons 4.0.

### 8. **SoundCloud (Creative Commons Music)**
   - **Website**: [https://soundcloud.com](https://soundcloud.com)
   - Many independent artists on SoundCloud publish their music under Creative Commons licenses. You can search for music tagged with CC licenses by using the "Creative Commons" filter.
   - **Genres**: Diverse, with a good selection of chill, electronic, ambient, and more.
   - **Licensing**: Check the license of each track individually.

### 9. **Musopen**
   - **Website**: [https://musopen.org](https://musopen.org)
   - Musopen offers free classical music, which can add a relaxing, ambient, or chill vibe to videos. All music is public domain or Creative Commons licensed.
   - **Genres**: Classical, instrumental.
   - **Licensing**: Most tracks are public domain or licensed for free use.

### 10. **Pixabay Music**
   - **Website**: [https://pixabay.com/music/](https://pixabay.com/music/)
   - Pixabay has a growing collection of royalty-free music available for use in videos, completely free for commercial and non-commercial projects.
   - **Genres**: Chill, electronic, ambient, acoustic.
   - **Licensing**: Free to use without attribution (though attribution is appreciated).

### Key Points:
- Always check the specific license of each track, especially if you’re using it for commercial purposes.
- If the track requires attribution, make sure to include proper credits as specified by the artist.

These resources should help you find the perfect chill music for your video project! Let me know if you need any specific help with any of them.

{{< /details >}}

### Video as a Code

To create **video from code**, you can use the [React Framework - **Remotion**](https://www.youtube.com/watch?v=deg8bOoziaE&t=58s)