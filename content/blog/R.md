---
title: "A recap on R Language."
date: 2025-01-10T05:20:21+01:00
draft: false
tags: ["Dev","Python"]
description: 'All I wish someone had told me about R when I first had to use it'
summary: 'R language recap'
url: 'r-language-101'
---

Its been a while since I have done some project/tasks with R.

But recently, I had an idea to put a Flexdashboard inside a mdx post for Astro websites.

And this thing worked perfectly...

But how can explain to someone whats going on?

Well...

## R Setup

```sh
sudo apt update
sudo apt install -y software-properties-common apt-transport-https
```

```sh
sudo apt update
sudo apt install r-base #this is ~150mb to get installed
sudo apt install pandoc #and this around ~200mb
```

See that **R is ready** with:

```sh
R --version
```

> Right now im getting the **4.3.3 R version for x86**.

### IDE Setup

As always, anything will work...but vscode was not the popular one for R.

I used RStudio, which has been renamed to post

```sh
wget https://download1.rstudio.org/electron/jammy/amd64/rstudio-2024.12.0-467-amd64.deb
sudo dpkg -i rstudio-2024.12.0-467-amd64.deb
sudo apt-get install -f #with dependencies
rstudio #open it
R.version #test the R CLI inside rstudio
```

https://posit.co/download/rstudio-desktop/

https://www.youtube.com/watch?v=k0r3iLGJgmQ

https://posit.co/blog/rstudio-is-now-posit/

Where are we working now?

```sh
getwd()
setwd("~/Documents/acoolproject")
```

### R Dependencies Setup

```sh
install.packages("leaflet", dependencies = TRUE)
install.packages("leaflet.extras")

install.packages("remotes")
#remotes::install_github('rstudio/flexdashboard')
```


## Features I Love in R

### Maps

[Geospatial Data](https://jalcocert.github.io/JAlcocerT/geospatial-data/) is awsome, and most of the times unused.

https://jalcocert.github.io/JAlcocerT/blog/tinker-phyphox/

At some point I was putting together `.GPX` files with the help of https://www.youtrack.es

But you can do it also with some script.

* References:
    * https://r-craft.org/r-and-gpx-how-to-read-and-visualize-gpx-files-in-r/
    * https://trafficonese.github.io/leaflet.extras/reference/omnivore.html
    * <https://www.kaggle.com/code/miguelfzzz/cool-dashboard-in-r-with-youtube-tutorial/report?scriptVersionId=74682468>
    * <https://rfun.library.duke.edu/portfolio/mapping_workshop/>
    * <https://rfun.library.duke.edu/portfolio/dashboard_workshop/>
    * <https://rfun.library.duke.edu/portfolio/shiny_workshop/>


{{% details title="Put simply, GPX stands for GPS eXchange Format 🌍" closed="true" %}}

And it’s nothing but a simple text file with geographical information, such as latitude, longitude, elevation, time, and so on.

If you plot these points on a map, you’ll know exactly where you need to go, and what sort of terrain you might expect, at least according to the elevation.

{{% /details %}}


You will also hear about **GeoJSON format**, KML, TopoJSON

### Animations


Generally plots in R got me in love: <https://r-graph-gallery.com/> 




### FlexDashboards


The cool thing? 

We can have leaflet maps, HTML widgets, even animations inside of them.

They can be enhanced with:

1. https://www.htmlwidgets.org/


* https://pkgs.rstudio.com/flexdashboard/
* https://cloud.r-project.org/web/packages/flexdashboard/index.html
* https://github.com/rstudio/flexdashboard
    * https://rstudio.github.io/flexdashboard/articles/using.html

```sh
install.packages("flexdashboard") #flexdashboard package from CRAN
remotes::install_github('rstudio/flexdashboard') #development version of the package, install it from GitHub via the remotes package
```

And now render the dashboard:

```sh
Rscript -e "rmarkdown::render('z_my_dashboardv2.Rmd')"
python3 -m http.server 8001 #or 8001 if thats taken...
```

* References:
    * http://lenkiefer.com/2017/01/22/a-guide-to-building-an-interactive-flexdashboard/


{{< callout type="info" >}}
See a sample flexdashboard at [**RStocks** project](https://github.com/JAlcocerT/R_Stocks)  💻
{{< /callout >}}



#### FlexDashboard with Github Pages and Github Actions

[Github Actions](https://jalcocert.github.io/JAlcocerT/github-actions-use-cases/#actions-cicd-for-python-projects) is an awsome and free CI/CD tool to use.

{{< callout type="info" >}}
And thse Flexdashboards are having as output a html, feel free to **combine them within SSGs!**
{{< /callout >}}

{{< details title="GH Actions workflow for FlexDashboards to Github Pages 📌" closed="true" >}}



{{< /details >}}

{{< callout type="info" >}}
More **GHA uses cases**, [here](https://jalcocert.github.io/JAlcocerT/github-actions-use-cases/#actions-cicd-for-python-projects)
{{< /callout >}}


### Shiny

Shiny I created my very first web app.

In the meantime, there is now Shiny for Python.


{{< callout type="info" >}}
See [RStocks Project repo](https://github.com/JAlcocerT/R_Stocks) for ideas  💻 
{{< /callout >}}

#### Containers for Shiny Apps

https://jalcocert.github.io/JAlcocerT/building-r-shiny-apps-container-image-with-docker/




---

