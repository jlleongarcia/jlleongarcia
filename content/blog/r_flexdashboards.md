---
title: "How to create and deploy Flexdashboard with R"
date: 2021-10-06T23:20:21+01:00
draft: false
tags: ["R","Dashboards","Dev"]
cover:
    image: "https://socialify.git.ci/JAlcocerT/R_is_Great/image?description=1&descriptionEditable=Flexdashboards%20with%20R.&language=1&name=1&owner=1&theme=Auto" # image path/url 
    alt: "R Flexdashboards" # alt text
    caption: "How to create Flexdashboards and deploy them for free." 
description: 'Step-by-step guide to using Flexdashboards on GitHub Pages. Perfect for data enthusiasts seeking dynamic visual storytelling.'
summary: 'Integrating R Flexdashboards with GitHub Pages. Learn how to create interactive data visualizations, host them on GitHub, and share your insights effectively for free.'    
url: 'guide-r-flexdashboards-in-github-pages'
---


## R Flexdashboards

Flexdashboards are a powerful tool for creating **dynamic, interactive dashboards within R**.

Developed by RStudio, they leverage the infrastructure of R Markdown to allow users to build robust visual displays of information.

Flexdashboards support a variety of visual outputs, including tables, data frames, plots, and even more advanced interactive visualizations using packages such as plotly and leaflet.

The strength of Flexdashboards lies in their **simplicity and ease of deployment**. They use a simple markdown syntax, which makes it easy to layout and design the dashboard. They can be rendered as standalone HTML documents, which can be easily hosted on a variety of platforms, including GitHub Pages. This makes Flexdashboards an excellent choice for static reporting and when sharing insights with an audience that does not require real-time interaction with the underlying data.

Flexdashboards are **static dashboards** - this means that they can be hosted like a **static web page** on Github pages, Gitlab pages...

This does not mean that you can't have interactivity in flexdashboards, since you can, for example include plotly graphs and include widgets to filter the data.


## Using Flexdashboards for the first time

You will need to install the package in R:

```r
install.packages("flexdashboard")

#remotes::install_github('rstudio/flexdashboard')
```

To author a flexdashboard you create an **R Markdown document with the flexdashboard::flex_dashboard output** format. You can do this from within RStudio using the New R Markdown dialog:


Let's create one Markdown file (I like to call it *index.Rmd*), that will be the one containing the logic of our flexdashboard:

```r
---
title: "Flex Dashboards"
author: JAT
output: 
  flexdashboard::flex_dashboard:
    orientation: column
    vertical_layout: fill
    source_code: embed
runtime: shiny
---
```

To test the changes that you are performing to the index.Rmd file, you will need to use the following commands in R:

```r
#wd<-dirname(rstudioapi::getActiveDocumentContext()$path)
#setwd(wd)

rmarkdown::run("index.Rmd", shiny_args = list(port = 3838, host = "0.0.0.0"))
```
With this command, a new window will be displayed were you can interact with the dashboard locally.

When you will be done with the changes, you can **generate the HTML content** that will get displayed on the Github Page:

```r
rmarkdown::render_site("index.Rmd")
```

I Like to have those in a specific file **Flexdashboards.Rmd** to make easier the workflow.

After completion, you will see a new /docs folder containing the dashboard that will get displayed at Github.

## How to Customize a Flexdashboard

There are great sources for ideas, I would start with:

* <https://pkgs.rstudio.com/flexdashboard/articles/layouts.html>
* <https://plotly.com/r/>
* <https://r-graph-gallery.com/>


## Flexdashboard Example - Open Data Analysis

Let's explore one example that I created. I created separated tabs to showcase different uses:

* Map
* Interactive line chart
* 3D Scatter plot

* You can use it in the Github Page link: <https://jalcocert.github.io/R_is_Great/>
* And check the code to get ideas at: <https://github.com/JAlcocerT/R_is_Great/tree/main/Flexdashboards>

---

## FAQ

<!-- Flexdashboards: bootstrap, css, framekow (a,b,c),mcustomize from R with {bslib} 
RSHiny + bslib

DASH - flask, plotly.js, react.js, dash_bootstrap_components

heroku
netlify? -->

### Other Ways to Present Data with R

#### How about Shiny?

Shiny is another product from RStudio that offers a framework for building interactive web applications entirely in R. Shiny is more flexible than Flexdashboards and can create more complex and interactive applications. 

Shiny allows for real-time interaction, meaning that the user's inputs can directly affect the output, and the output is updated immediately. This is ideal for creating dashboards where users may want to filter, slice, or manipulate the data to answer different questions.

However, **Shiny requires a running R session in the background**, which makes hosting a bit more complex compared to Flexdashboards. Shiny apps can be hosted using Shiny Server or RStudio's hosting service, ShinyApps.io.


<!-- 
<https://r-graph-gallery.com/> -->


<!-- ### How to create Maps in R


<https://www.kaggle.com/code/miguelfzzz/cool-dashboard-in-r-with-youtube-tutorial/report?scriptVersionId=74682468>
<https://rfun.library.duke.edu/portfolio/mapping_workshop/>
<https://rfun.library.duke.edu/portfolio/dashboard_workshop/>
<https://rfun.library.duke.edu/portfolio/shiny_workshop/>

### How to create animations in R

 -->

### Other F/OSS Static Stuff

Impactful Data Driven Presentations:

* Marp
* RevealJS