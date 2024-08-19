---
title: "Financial data in R - Fundamentals - QuanDL"
date: 2022-09-18T23:20:21+01:00
draft: false
tags: ["R-Stocks","R"] 
description: 'QuanDL - Using R together with QuanDL to fetch financial data.'
summary: 'You might be curious about getting historical fundamental data on companies, for some project that you want to accomplish - QuanDL is an open source library that helps us with this task (provided the  API).'
url: 'r-quandl-package-guide'
---

# The QuanDL Package

## What is QuanDl about?

While looking for financial historical data for our projects, we might be interested to gather **historical fundamental data** for some companies.

**QuanDl** is a package available in R that will help is with this task.

You can find the source code at:

* [Github - QuanDl](https://github.com/quandl/quandl-r/ "GH {rel='nofollow'}")
* [CRAN - QuanDl](https://cran.r-project.org/web/packages/Quandl/index.html/ "CRAN {rel='nofollow'}")


## How to use the QuanDl package


### How to install QuanDl in RStudio


You can install QuantMod in R with the following command:

```r
# CRAN (stable)
install.packages("quantmod")
```


### Using QuanDl in R 

#### Query Historical Stock Information:

You can use QuanDl to query historical stocks information in R the following way:

First log your API key:

```r
# Get your API key from quandl.com and include it on a 'config.yaml' file
vars = yaml.load_file("config.yml")
quandl_api = vars$config$quandl_api
 
# Add the key to the Quandl keychain
Quandl.api_key(quandl_api)
```

```r
Your_Ticker <- 'KO'


df_quandl <- Quandl.datatable('SHARADAR/SF1',
                               ticker = Your_Ticker,
                               calendardate.gte='2000-12-31',
                               )

```

Now enhance the dataframe with a plotly graph:

```r
plot_ly(df1_quandl, type = 'scatter', mode = 'lines') %>%
      add_trace(x = ~calendardate, y = ~ros*100, name='ROS') %>%
                    layout(title = '<b>Return on Sales<b>', xaxis = list(title = 'Date'), 
                 yaxis = list(title = 'ROS (%)'), legend = list(title=list(text='<b> Date </b>')))
```

## Project example using QuanDl

I found PriceR really useful and have used it during the creation of this Shiny project:

* <https://github.com/JAlcocerT/R_Stocks/>