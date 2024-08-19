---
title: "How to deploy your Shiny app publically to ShinyApps"
date: 2021-11-03T23:20:21+01:00
draft: false
tags: ["R","Dashboards"]
cover:
    image: "https://socialify.git.ci/JAlcocerT/R_is_Great/image?description=1&descriptionEditable=Learning%20how%20to%20deploy%20Shiny%20apps.&language=1&name=1&owner=1&theme=Auto" # image path/url 
    alt: "R Shiny Apps" # alt text
    caption: "How to use ShinyApps to deploy your Shiny Dashboard." 
description: 'Deploying a R Shiny Dashboard to shinyapps.io'
summary: 'Providing that we have a working Shiny Dashboard, we can be interested to expose it to a wider audience instead of just locally. One simple option is to use ShinyApps.io as I cover in this post.'
url: 'guide-deploy-shinyapps'
---
<!-- 
https://github.com/RamiKrispin/shinylive
https://www.dataquest.io/blog/install-package-r/ -->

# Shiny to ShinyApps.io

After building a great **Shiny dashboard**, you will be wondering **how could you share it** with others and keep the interactivity.

Using **ShinyApps** service is one of the options that are available - They offer a free tier after registering that can be used for starters.

Remember that shiny dashboards require computation to be processed (not like flexdashboards), this is why they cant be deployed as a static site.

> In this case you are not in control of the Infrastructure ❗

## Requirements

First install and activate the package:

```R
install.packages("rsconnect")
library(rsconnect)
```

Then, registering your free account at: <https://www.shinyapps.io>


You will need to visit: <https://www.shinyapps.io/admin/#/dashboard> to complete your variables below as provided by the site: 

```R
#install.packages('rsconnect')
library(rsconnect)

#Remember to use your:
rsconnect::setAccountInfo(name='your_user_name',
			  token='your_token',
			  secret='your_secret')
```

Then, when you will have your files ready with your Shiny dashboard, remember that they should be in the same directory from where you will be doing the deployment and in the following way:

* server.R

```R
library(shiny)

source("any_UDF_needed_optional.R")


function(input, output) {
   #your shiny server configuration - reactive dataframes, plot creation...
}
```

* ui.R

```R
library(plotly) #yes, I love plotly

ui =  fluidPage(
  #your user interface for the shiny dashboard, sliderInput, plotlyOutput...
) 
```

Normally I configure my Shiny dashboards in a single .Rmd file, but to check if the app still works properly after splitting it into ui and server, we can use:

```R
library(shiny)
runApp()
```

Finally, you can deploy it to the **ShinyApps** free tier with:

```R
wd<-dirname(rstudioapi::getActiveDocumentContext()$path)
setwd(wd)

#deploy
deployApp(appName = 'your_desired_app_name') #it will look for your ui.R and server.R files in the same directory
```


You can check one simple **working example** at: <https://jalcocert.shinyapps.io/retirement_facts/>

The code of that sample is on the public repository: <https://github.com/JAlcocerT/R_is_Great/tree/main/ShinyApps>