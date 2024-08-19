---
title: "R Shiny Apps with Docker: X86 and ARM32/64"
date: 2023-06-24T23:20:21+01:00
draft: false
tags: ["R","Docker","Dashboards","My Projects","R-Stocks"]
description: ''
summary: '.'
url: 'building-shiny-apps-with-docker-x86-and-arm'
---

<!-- 
dejar multiplatform para medium y aqui poner R shiny docker en los 3: x86 arm32 and 64 

Docker Multi-Platform-->


Some months ago I was sharing with you my Shiny App [R Stocks](https://github.com/JAlcocerT/R_Stocks)

## Building R Shiny Apps Docker Image
d
### X86 Images


The Dockerfile that we need to build the image of a basic Shiny App for X86 is:

```yml
#https://hub.docker.com/_/r-base/tags
FROM r-base:3.4.2

RUN apt-get update && apt-get install -y \
libpq-dev \
build-essential \
libcurl4-gnutls-dev \
libxml2-dev \
libssl-dev

# Install R packages
RUN R -e "install.packages(c('yaml', 'dplyr', 'dtplyr', 'shiny', 'shinythemes', 'shinyWidgets', 'readxl', 'scales', 'tidyverse', 'DT', 'ggthemes', 'ggplot2', 'plotly', 'plyr', 'leaflet', 'devtools', 'yfR', 'priceR', 'quantmod', 'Quandl', 'qmao', 'lubridate', 'reshape2', 'rstudioapi', 'bslib'))"

RUN R -e "install_version("reshape",version=)"
```

This took me longer to run than this one that starts from the following image:


```yml

```


<!-- 
https://towardsdatascience.com/reproducible-work-in-r-e7d160d5d198 -->


### ARM32 - R Shiny

I am using the

### ARM64 - R Shiny

Recently I got an Orange Pi and I am using it to self-host some of my favourite services, as well of my personal projects.

The Docker setup to make Shiny works on armv8 has been way more challenging than the x86, particularly to make the yfR package work properly.
