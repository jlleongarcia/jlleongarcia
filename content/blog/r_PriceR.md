---
title: "Financial data in R - FOREX and Inflation - PriceR"
date: 2022-08-14T23:20:21+01:00
draft: false
tags: ["R-Stocks","R"]
description: 'PriceR - Fetch Financial Data with R and PriceR package.'
summary: 'You might be curious about getting historical exchange rates between currencies or check historical inflation data for some project that you want to accomplish - PriceR is an open source library that helps us with this task.'
url: 'r-priceR-package-guide'
---

# The PriceR Package

## What is PriceR about?

While Operating with financial data, we might want to incorporate information about floating **exchange rate** between FIAT currencies or historical data about the **inflation** on a specific country.

**PriceR** is a package available in R that will collect such information for us in a very simple way.

You can find the source code at:

* [Github - PriceR](https://github.com/stevecondylios/priceR/ "GH {rel='nofollow'}")
* [CRAN - PriceR](https://cran.r-project.org/web/packages/priceR/index.html/ "CRAN {rel='nofollow'}")


## Using PriceR Package


### Installing PriceR in RStudio


You can install PriceR in R with the following command:

```r
# CRAN (stable)
install.packages("priceR")
```


### Using PriceR in R together with plotly

#### Query Historical FIAT Exchange Rates:

You can use PriceR to query historical exchange rates in R the following way:

```r
exc_rate <- historical_exchange_rates("EUR", to = "USD",
                                    start_date = "2010-01-01",
                                    end_date = "2022-08-30")


colnames(exc_rate)[which(names(exc_rate) == "date")] <- "ref_date"
colnames(exc_rate)[2] <- "ratio"
```

Then, just get some help from plotly to create one interactive visualization:

```r
plot_ly(exc_rate, type = 'scatter', mode = 'lines')%>%
      add_trace(x = ~ref_date, y = ~ratio, showlegend = FALSE) %>%
                    layout(title = '<b>USD to EUR<b>', xaxis = list(title = 'Date'), 
                           yaxis = list(title = 'Exchange Rate'),
                           legend = list(title=list(text='<b> Date </b>')))
```


#### Query Historical FIAT Exchange Rates:

We can query historical inflation data in R the following way:

```r
Year <- 2000:2021
nominal_prices <- rep(1,length(Year))

df_inflation <- data.frame(Year, nominal_prices)
df_inflation$in_202x_dollars_factor <- adjust_for_inflation(nominal_prices, Year, "US", to_date = 2021) #PriceR


df_inflation <- mutate(df_inflation, inflation_level = ( lag(in_202x_dollars_factor)/in_202x_dollars_factor -1)*100 )
```

NOTE: *Data for a recently ended year might take some time to be ready in the package*

```r
plot_ly(df_inflation, type = 'scatter', mode = 'lines') %>%
      add_trace(x = ~Year, y = ~in_202x_dollars_factor, name="Inflation factor to Y2021") %>%
                    layout(title = '<b>US Historical Inflation<b>', xaxis = list(title = 'Year'), 
                           yaxis = list(title = 'a'),
                           legend = list(title=list(text='<b> Legend </b>')))  %>%
      add_trace(x = ~Year, y = ~inflation_level, name="Inflation Yearly") %>%
                    layout(title = '<b>US Historical Inflation<b>', xaxis = list(title = 'Year'), 
                          yaxis = list(title = '(%)'), 
                          legend = list(title=list(text='<b> Legend </b>')))
```


## Project Example using PriceR

I found PriceR really useful and have used it during the creation of this Shiny project:

* <https://github.com/JAlcocerT/R_Stocks/>