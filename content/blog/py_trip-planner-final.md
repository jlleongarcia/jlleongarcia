---
title: "Trip Planner with Weather: a F/OSS App for Bikepacking"
date: 2023-10-27T08:20:21+01:00
draft: false
tags: ["Python","Dashboards","Trip-Planner"]
cover:
    image: "https://socialify.git.ci/jalcocert/py_trip_planner/image?description=0&name=1&owner=1&pattern=Brick%20Wall&theme=Light" # image path/url 
    alt: "Python Trip Planner with Weather" # alt text
    caption: "A Free and Open Source Weather App to plan better adventures." # display caption under cover
editPost:
    URL: "https://github.com/JAlcocerT/Py_Trip_Planner"
    Text: "Suggest Changes" # edit text
    appendFilePath: false # to append file path to Edit link    
description: "Python App as (Historical and Forecasted) Weather Guide"
summary: 'Unpredictable weather led to the creation of the Python Trip Planner app. This open source tool forecasts weather, ensuring a smoother trip planning. Discover the features, how to use it for Free.'
url: 'trip-planner-with-weather'
isPinned: false
---


## Trip Planner with Weather

Imagine a world where you're about to embark on a trip, you already know where you are going and now, there is an App that also whispers in your ear about the weather.

Not just the weather of yesteryears, but a glimpse into the future.

Sounds like magic? Well, it's not.

> It's the power of Python and some coding.

### The Trip-Planner Project

* {{< newtab url="https://github.com/JAlcocerT/Py_Trip_Planner" text="Project Source Code at Github" >}}
    * {{< newtab url="https://github.com/JAlcocerT/Py_Trip_Planner?tab=GPL-3.0-1-ov-file#readme" text="License: GNU v3" >}} ✅

* Powered Thanks to:
    * OpenMeteo - https://fossengineer.com/python-weather-forecast-with-open-meteo-api/
    * DASH - https://fossengineer.com/improving-ui-python-dash-apps/
    * MeteoStat - https://fossengineer.com/python-historical-weather-api-with-meteostat/
    * Docker for SelfHosting - https://fossengineer.com/selfhosting-python-dash-apps-with-docker/

## How A Python App can be a Weather Compass

The open landscapes ahead, and the rhythmic turning of the pedals beneath me. Last year, I embarked on a cycling journey that took me [from the historic landscapes of Poland to the picturesque terrains of Hungary](https://fossengineer.com/trip-bike-poland-hungary/). 

Bikepacking, as they call it, is not just about the journey; it's about the stories you collect along the way.

One such story was my tryst with the weather. Europe, with its unpredictable climate, threw at me sunny days, cloudy afternoons, and occasional rain showers.

While I mostly got lucky with the weather, there were moments when I wished I had a crystal ball to peek into the future. **And that's when this idea struck.**

It's not just an app; it's the culmination of a dream, [a dream born on the open roads of Europe](https://fossengineer.com/tags/cyclingthrougheurope/).

### The Birth of the Python Trip Planner

If I couldn't have a crystal ball, why not build the next best thing? An app that could tell me not just about the historical weather patterns but also give me a glimpse of the future. As I pedaled through the countryside, the blueprint of the Python Trip Planner started taking shape in my mind.

Fast forward to today, the app is a reality. With features like forecast weather data, historical weather patterns, and an intuitive UI, it's like having a weather oracle in our pocket.

<!-- ### The Baltics Beckon

As I gear up for my next adventure, cycling through the Baltics from Lithuania to Latvia and Estonia, I feel more prepared. The Python Trip Planner is now my companion, guiding me through the weather patterns, helping me plan my journey better. 

Minimizing the surprises, no more wishing for a crystal ball. I know what to pack, where to go, and when to take that coffee break.

I feel ready to face whatever the skies of the Baltics throw at me *(but please not too much front wind)*.  -->


<!-- Weather travel planner -->


## Features to Fall in Love With

So, After All This Story... You must be wondering, "What's so special about this app?" Well, let me unveil the magic behind it.

> And yes, before moving on it is **FREE and Open Source** - You can use it too!

### Historical Weather Patterns

Planning a trip months in advance? No worries - Using the powerful Meteostat library, the app dives deep into historical weather patterns. Dive deep into the [usual weather patterns](https://fossengineer.com/python-trip-planner/) of your desired location.

Whether it's the rainy season in Bali or the chilly winters of New York, you'll know what to expect.

### Forecast Weather Data

No more relying on just historical data. Thanks to the fantastic [Open Meteo API](https://fossengineer.com/python-weather-forecast-with-open-meteo-api/), you're no longer just looking at the past.

The app [integrates forecasted weather data](https://fossengineer.com/python-weather-forecast-with-open-meteo-api/), giving you a clearer picture of what to expect.

Rain on Tuesday? Pack that raincoat. Sunny on Wednesday? Don't forget the sunscreen.

### Revamped UI

The user interface is now more intuitive, user-friendly, and pleasing to the eyes. Planning your trip is not just efficient but also [a delightful experience](https://fossengineer.com/improving-ui-python-dash-apps/).

With streamlined processes and easy-to-understand features, even your grandma can plan her trip without breaking a sweat.

### Open Source Magic

How the magic happens? Dive into the code.

## The Odyssey of Building and Deploying a Python Dash App: Trials, Triumphs and Tunnels

Every great app has a story behind it, a journey of discovery, challenges, and those "Aha!" moments. The Python Trip Planner 2.0 is no different.

Let's embark on this roller coaster of a learning process together.

### Creating a Python DASH App: The Dawn

It all started with the basics. Python Dash, a framework that promises interactive web applications, was the chosen tool. The initial steps were like learning to walk. 

### Python Dash Meets Docker: The Docker Detour

Then came Docker, the tool that promises to package an app and its environment into a neat little container. [Integrating Python Dash with Docker](https://fossengineer.com/dash-docker-gcr/) felt like learning a new dance. It's all about rhythm and coordination. And once the two were in sync, the app was not just functional but also portable.

### One Docker Image, Multiple Architectures: The Manifest Mystery

The world of tech is vast, with myriad architectures and platforms. The challenge? [Creating manifests for a single Docker image](https://fossengineer.com/building-docker-container-images/#managing-multi-arch-images-in-dockerhub) that catered to different architectures.

It was like trying to fit a square peg in a round hole, but with some tweaks and turns, the peg was carved to perfection.

### Deploying to Google Cloud Run: The Gamble

With the app ready, it was time to showcase it to the world. Google Cloud Run seemed like the perfect stage. Deploying the Python Dash app on it felt like launching a rocket. But rockets are expensive, and so was the cloud. The costs started skyrocketing, and it was time for a rethink.

### Self-hosting with Docker and Cloudflare Tunnel: The Homecoming

Why rely on external platforms when you can be the master of your domain? The decision to self-host the Python Dash app at home was both daring and ingenious.

Docker ensured the app ran smoothly, and [Cloudflare Tunnel](https://fossengineer.com/selfhosting-python-dash-apps-with-docker/) was the guardian, safely exposing the app to the world. It was like building a castle and then drawing up the bridge to let the world in, securely.


<!-- 
* How to develop a python dash app inside a running docker container
    * Docker and Docker extension
    * DevContainer extension
    * Attach to running container -->
<!-- 
    https://github.com/RamiKrispin/vscode-python -->

--- 

## FAQ

* Other interesting F/OSS Weather Sources
    * https://github.com/jdemaeyer/brightsky

* Interesting Repository with Free API's
    * https://github.com/public-apis/public-apis

### How Can I try the Python Trip Planner App?

Trying the DASH App locally might be an easy process for people that are familiar with software development. But I want this project to help as much people as possible.

* For that reason I [deployed the DASH App at home using Docker and Cloudflare Tunnels](https://fossengineer.com/selfhosting-python-dash-apps-with-docker/).
    * You can **use it for free from any browser at:** <https://trip-planner.fossengineer.com/>


### How Can I Contribute?

* I have made all the code **Open Source** and this is the public Github repository where I have built the code, please feel free to have a look, experiment with the code and suggest any improvements:
    * The [Python Trip Planner with Weather Github Repository](https://github.com/JAlcocerT/Py_Trip_Planner "Python Trip Planner DASH Repository {rel='nofollow'}").
    * Don't have a IDE right now? Have a look to the .ipynb notebook that I used to integrate the packages with Google Colaboratory:
 [![Google Colab](/img/OpenInColab.svg)](https://colab.research.google.com/github/JAlcocerT/Py_Trip_Planner/blob/main/TripPlanner.ipynb "Python Trip Planner DASH Google Colab {rel='nofollow'}")

### Do I need to Know Python to use it?

No, you dont need [to know Python]()

* You can use it for free here:
* SelfHost it locally with Docker

> You can build interesting [Weather Forecast with Grafana](https://ibug.io/blog/2024/01/weather-forecast-with-grafana/) or with a [RPi and some sensors](https://jalcocert.github.io/RPi/tags/sensors/)

### F/OSS Android Apps for Maps

* Organic Maps - https://github.com/organicmaps/organicmaps
    * https://organicmaps.app/
    * Also available for Desktop!

* Maps.me - https://github.com/mapsme/omim
    * https://github.com/mapsme/omim?tab=Apache-2.0-1-ov-file#readme

### F/OSS Android App for Weather

* Breezy Weather - https://github.com/breezy-weather/breezy-weather/tree/main

{{< dropdown title="Options to Install Breezy Weather... ⏬" closed="true" >}}

* With f-Droid

* With Obtanium - https://github.com/ImranR98/Obtainium
    * https://github.com/ImranR98/Obtainium?tab=GPL-3.0-1-ov-file#readme ✅

> Install Apps on Android directly from the source

{{< /dropdown >}}


> Also Powered by [Open-Meteo](#the-trip-planner-project)