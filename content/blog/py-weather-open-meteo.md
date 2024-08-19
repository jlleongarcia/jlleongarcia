---
title: "Improving Python Trip Planner with Weather Forecasts: Open Meteo API"
date: 2023-06-30T15:20:21+01:00
draft: false
tags: ["Python","Trip-Planner"]
cover:
    image: "https://socialify.git.ci/JAlcocerT/Py_Trip_Planner/image?language=1&name=1&theme=Auto" # image path/url 
    alt: "Python Weather Forecast with Open-Meteo" # alt text
    caption: "Python Weather Forecast API - Open Meteo" # display caption under cover
description: "Weather forecasting in Python with Open-Meteo API. How to use the Python API and including it on the Python Trip Planner App"
summary: 'Discovering the Open-Meteo Python API to have weather forecasts data insights. Installing the library and preparing plots to include them in the Python Trip Planner Dash App.'
url: 'python-weather-forecast-with-open-meteo-api'
---

## Python Weather API - Open Meteo


After releasing the [Python Trip Planner Project](https://fossengineer.com/python-trip-planner/), I have received some comments about an open source project with a wonderful API to include weather forecasts.

I am talking about [the Open-meteo project](https://open-meteo.com/ "Open Meteo Project {rel='nofollow'}") and its wonderful API to query weather data.

<!-- <https://github.com/open-meteo/open-meteo>
<https://github.com/open-meteo/open-meteo#who-is-using-open-meteo>
<https://github.com/m0rp43us/openmeteopy> -->

## Using Open-Meteo: Weather Forecast in Python

<!-- 

<https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m> -->

If you enjoy developing in Python like I do, you will be wondering how to use this API. *Let me show you how simple it is.*

We are going to be using the [Python Interface for Open-Meteo](https://pypi.org/project/openmeteo-py/ "Open Meteo Project {rel='nofollow'}") 

```sh
pip install openmeteo-py
```

Once it is installed, you can query a forecast for weather data from python by just providing the latitude and longitude:

```py
from openmeteo_py import Hourly,Daily,Options,OWmanager

# Latitude, Longitude input
latitude = 30
longitude = 20

hourly = Hourly()
daily = Daily()
options = Options(latitude,longitude)

mgr = OWmanager(options,
    hourly.all(),
    daily.all())

# Download data
meteo = mgr.get_data() #This is a dict with your data
```

### Open-Meteo: Discovering Weather Fields

The good news - Now we have our weather data ready in Python.
The *not so good* news - It is in dictionary format, but dont worry - I will show you how to extract it


```py
print(meteo) #we almost have our plots
print(type(meteo))
```

The extracted dictionary contains a couple of dictionaries inside. One interesting one is the **dictionary daily**: we can extract the lists time and list apparent_temperature_max from that dictionary like so:

```py
import pandas as pd

# assuming that your dictionary is called `meteo`
daily_data = meteo["daily"]

# check if 'time' and 'apparent_temperature_max' are in daily_data
if 'time' in daily_data and 'apparent_temperature_max' in daily_data:
    df = pd.DataFrame({
        'time': daily_data['time'],
        'apparent_temperature_max': daily_data['apparent_temperature_max']
    })
else:
    print("'time' or 'apparent_temperature_max' not found in daily data")
```

Another interesting dictionary is called **hourly** and we can extract some interesting weather attributes like so:

```py
import pandas as pd

# assuming that your dictionary is called `meteo`
hourly_data = meteo["hourly"]

# check if 'time', 'apparent_temperature_max' and 'apparent_temperature_min' are in daily_data
if 'time' in daily_data and 'apparent_temperature' in hourly_data:
    df_meteo_h = pd.DataFrame({
        'time': hourly_data['time'],
        'apparent_temperature': hourly_data['apparent_temperature'],
        'windspeed_10m': hourly_data['windspeed_10m'],
        'winddirection_10m': hourly_data['winddirection_10m'],
        'precipitation': hourly_data['precipitation']
    })
else:
    print("'time', 'apparent_temperature' not found in daily data")
```

Now that we have a great pandas dataframe, lets create some plots:

```py
#import plotly.express as px
import plotly.graph_objects as go

#pip install --upgrade nbformat


fig = go.Figure()
fig.add_trace(go.Scatter(x=df_meteo_h['time'], y=df_meteo_h['apparent_temperature'], name='Temperature', line=dict(color='green')))

fig.update_layout(
    title='Temperature Forecast',
    xaxis=dict(title='Time'),
    yaxis=dict(title='Temperature (Celsius)')
)

fig.show()
```

--- 

## FAQ

### How can I try the Python DASH App?

Trying the app locally might be an easy process for people that are familiar with software development. But I want this project to help as much people as possible.

* For that reason I [deployed the DASH App at home using Docker and Cloudflare Tunnels](https://fossengineer.com/selfhosting-python-dash-apps-with-docker/).
    * You can **use it for free from any browser at:** <https://trip-planner.fossengineer.com/>


### How can I Contribute?

* I have made all the code **Open Source** and this is the public Github repository where I have built the code, please feel free to have a look, experiment with the code and suggest any improvements:
    * The [Python Trip Planner with Weather Github Repository](https://github.com/JAlcocerT/Py_Trip_Planner "Python Trip Planner DASH Repository {rel='nofollow'}").
    * Don't have a IDE right now? Have a look to the .ipynb notebook that I used to integrate the packages with Google Colaboratory:
 [![Google Colab](/img/OpenInColab.svg)](https://colab.research.google.com/github/JAlcocerT/Py_Trip_Planner/blob/main/TripPlanner.ipynb "Python Trip Planner DASH Google Colab {rel='nofollow'}").