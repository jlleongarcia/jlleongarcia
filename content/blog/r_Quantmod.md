---
title: "Financial data in R - Dividend and Splits - QuantMod"
date: 2022-09-14T23:20:21+01:00
draft: false
tags: ["R-Stocks","R"] 
description: 'QuantMod - Using R together with QuantMod to fetch financial data.'
summary: 'You might be curious about getting historical dividends and stock splits for some project that you want to accomplish - QuantMod is an open source library that helps us with this task.'
url: 'r-Quantmod-package-guide'
---

# The QuantMod Package

## What is QuantMod about?

While looking for financial historical data for our projects, we might be interested to gather **historical dividends** for some companies or if they ever executed some **stock split**.

**QuantMod** is a package available in R that will help is with this task.

You can find the source code at:

* [Github - QuantMod](https://github.com/joshuaulrich/quantmod/ "GH {rel='nofollow'}")
* [CRAN - QuantMod](https://cran.r-project.org/web/packages/quantmod/ "CRAN {rel='nofollow'}")


## How to use the QuantMod package


### How to install QuantMod in RStudio


You can install QuantMod in R with the following command:

```r
# CRAN (stable)
install.packages("quantmod")
```


### Using QuantMod in R 

#### Query Historical Stock Splits:

You can use QuantMod to query historical stocks splits in R the following way:

```r
Your_Ticker <- 'KO'

df_splits <- quantmod::getSplits(Your_Ticker)

```

Then, you will have the dates and split ratio of the stock.

#### Query Historical Stock Dividends:


```r
Your_Ticker <- 'KO'

df_divs <- getDividends(Your_Ticker, 
             from = "2010-01-01",
             to = Sys.Date()-30, 
             src = "yahoo", 
             auto.assign = TRUE, 
             auto.update = TRUE, 
             verbose = FALSE)



df_divs <- data.frame(date=index(df_divs), coredata(df_divs))
colnames(df_divs) <- c('date','div')
```

```r
plot_ly(df_divs, type = 'bar')%>%
      add_trace(x = ~date, y = ~div, showlegend = FALSE) %>%
                    layout(title = '<b>Historical Ticker Dividend<b>', xaxis = list(title = 'Date'), 
                 yaxis = list(title = 'USD'), legend = list(title=list(text='<b> Date </b>')))
```

## Project Example Using QuantMod

I found QuantMod really useful and have used it during the creation of this Shiny project:

* <https://github.com/JAlcocerT/R_Stocks/>