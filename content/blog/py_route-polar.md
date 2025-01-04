---
title: "Analyzing your Sport Performance with Python and Polar data"
date: 2023-02-26T23:20:21+01:00
draft: false
tags: ["Python","Trip-Planner"]
cover:
    image: "https://socialify.git.ci/JAlcocerT/Py_RouteTracker/image?language=1&name=1&owner=1&theme=Auto" # image path/url    
    alt: "Python Polar Analysis" # alt text
    caption: "Improving your sport Performance with Polar." # display caption under cover
description: "Using Polar Data together with Python to see your improvement in performance.Python Route Tracker."
summary: 'As I plan to make a complete route by bike from Tallin to Athens, I need to track how my fitness level improves over the months, to be ready for the next challenge. Polar and Python are helping me with it.'
url: 'polar-data-python-analysis'
---

Last year I made my first **bikepacking trip** in central Europe.

The experience was much better than I could have thought, so right now I am planning to join that route with the baltic countries this year - where I plan to make around **600km in 5 days**.

The preparation for such trip needs to start months before the event.

So I decided to get one Polar HR monitor and play a little bit with the data that its recorded during the routes:

{{< callout type="info" >}}
* See the Project: https://github.com/JAlcocerT/Py_RouteTracker
{{< /callout >}}

### Tracking your Heart Rate

{{< rawhtml >}} 
<iframe src="/videos/Output_HR_Distrib.html"
style="width: 100%; height: 450px;"></iframe>
{{< /rawhtml >}}

### Tracking your Speed Pace

{{< rawhtml >}} 
<iframe src="/videos/Output_Speed_Distrib.html"
style="width: 100%; height: 450px;"></iframe>
{{< /rawhtml >}}

---

### Try me with Google Colaboratory

If you have a Google account, you can run this code by uploading the `.GPX` file of the route that you want to visualize and avoid any installation in your computer.

[![Python Notebook - RoutePolar](/img/OpenInColab.svg)](https://colab.research.google.com/github/JAlcocerT/Py_RouteTracker/blob/main/Py_RoutePolar.ipynb)


* GPX studio

 https://www.roadrunner.travel/articles/how-to-create-and-edit-gpx-files-with-gpx-studio/
 https://github.com/mpetazzoni/leaflet-gpx