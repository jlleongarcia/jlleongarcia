---
title: "Discovering Meteostat: Historical Weather API in Python"
date: 2023-03-19T23:20:21+01:00
draft: false
tags: ["Python","Trip-Planner"]
cover:
    image: "https://socialify.git.ci/meteostat/meteostat-python/image?language=1&name=1&theme=Auto" # image path/url 
    alt: "Meteostat" # alt text
    caption: "Meteostat - Historical Weather API in Python." # display caption under cover
description: "Meteostat Python Weather API - Discover how to integrate Historical Weather Data into your Python Apps."
summary: 'Using Meteostat Python API to access and display historical weather data in our Apps. Building a Trip Planner App based on historical weather patterns of interesting locations.'
url: 'python-historical-weather-api-with-meteostat'
---

# Historical Weather in Python

Weather plays a crucial role in many domains, from planning outdoor activities to optimizing business operations.

Historical weather data provides valuable insights into past weather patterns and trends, allowing us to understand climate variations and make informed decisions.

As I am building an [interactive weather trip planner application to show historical weather patterns to plan my trips](https://fossengineer.com/tags/trip-planner/), I needed reliable and comprehensive weather data and that led me to discover the **Meteostat library in Python**.

In this blog post, I will show you **how to use Meteostat library into your Python applications** with the use of its simple API, so that you can also access and display historical weather data for your projects. 

## Meteostat - Weather API in python

Meteostat is a weather data provider that offers a free API to access historical weather data. The Meteostat API allows us to retrieve weather information such as temperature, precipitation, wind speed, and other meteorological parameters for specific locations around the world.

* The [Meteostat project in Github](https://github.com/meteostat/meteostat-python "Meteostat Python Weather API in Github {rel='nofollow'}") 
* Meteostat documentation - [Data Sources](https://dev.meteostat.net/sources.html "Meteostat Documentation {rel='nofollow'}") 

## Getting Started with Meteostat API for Python

First, we need to install the meteostat package:

```py
pip install meteostat
```

Now, we can import meteostat as a Python library:

```py
import meteostat
print(f'Meteostat version: {meteostat.__version__}') #check the installed version
```

Ok, now that everything is setup, lets explore Meteostat API a little further.

## Exploring Meteostat API Features - Examples

To retrieve weather data using the Meteostat API, you typically need to provide the location (latitude and longitude) and the desired time period for which you want to obtain the data. 

The API supports various parameters for specifying the location, time range, and other options.

### Meteostat - Historical Weather in a Location

Let's make one sample query to Meteostat, particularly to the **Point Class** -  we will need:
* Latitude
* Longitude
* Time Range
* Outputs - Weather attributes: Temperatures, Wind...

```py
from meteostat import Point, Daily
from datetime import datetime

import plotly.express as px


# Set time period
start = datetime(2022, 1, 1)
end = datetime(2022, 12, 31)

# Create Point (KOS island in Greece)
#location = Point(36.8925871 , 27.2877926, 70) #lat, long, altitude (optional)
location = Point(36.8925871 , 27.2877926)

# Get daily data
data = Daily(location, start, end)
data = data.fetch()
```

In the output dataframe, we are getting several attributes, like: tavg, tmin, tmax, prcp, snow, wdir, wspd, wpgt, pres, tsun

You will observe that **we dont have data available in all the given locations...**, for example:

```py
### The Point Class: latitude, longitude, altitude
#https://dev.meteostat.net/python/point.html

from meteostat import Point, Daily
from datetime import datetime

import plotly.express as px


# Set time period
start = datetime(2022, 1, 1)
end = datetime(2022, 12, 31)

# Create Point (near Istambul in Turkey)
location = Point(40 , 30)

# Get daily data
data = Daily(location, start, end)
data = data.fetch()

print(data) #no data is queried
print(type(data))
```

**...but we can of course tweak that**.

### Meteostat - Nearest Stations to the given Location

But there is no need to worry - we can still get the nearest data to our desired location.

For that, we need to use the **class Stations** of Meteostat and provide:
* Latitude
* Longitude

```py
from meteostat import Stations

# Get nearby weather stations
stations = Stations()
stations = stations.nearby(40 , 30)
station = stations.fetch(1) 

nearest_lat = station['latitude'].values[0]
nearest_lon = station['longitude'].values[0]
```

With this approach, I am getting the closest station to the desired location (and we can feed that as corrected input of the Point Class).


## Python Weather - Use case: Trip-Planner

Based on the Meteostat library and supported by Plotly and DASH projects, I am building an intereactive application that will display the historical weather data from Meteostat to an interactive Map (where the user can select the desired location).

* The project repository is [at my Github](https://github.com/JAlcocerT/Py_Trip_Planner "JAlcocerT Github Py Trip Planner {rel='nofollow'}") 
    * You are more than welcome to fork it and propose improvements.
    *  **Want to have a quick look to Meteostat package?** Access the .ipynb notebook that I used to integrate Meteostat with the other packages in Google Colaboratory and play with Meteostat API without downloading any file to your computer:
 [![Google Colab](/img/OpenInColab.svg)](https://colab.research.google.com/github/JAlcocerT/Py_Trip_Planner/blob/main/TripPlanner.ipynb)