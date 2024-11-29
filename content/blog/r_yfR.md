---
title: "Financial data in R - Stocks Price - yfR"
date: 2022-08-07T23:20:21+01:00
draft: false
tags: ["R-Stocks","R"]
description: 'yfR - Using R together with yfR to fetch financial data.'
summary: 'You might be curious about getting historical stock price on companies, for some project that you want to accomplish - yfR is an open source library that helps us with this task. '
url: 'r-yfR-package-guide'
---

The yfR Package - Data from Yahoo Finance for your Projects in R.

## What is yfR?

If you are looking for data sources for your projects, I am sure that using financial data has come to your mind at some point.

We are going to see how to make available to in R **historical stock data**.

**yfR** is a new package available in R that will simplify the financial data collection from [Yahoo Finance](https://finance.yahoo.com/ "Yahoo Finance {rel='nofollow'}").

You can find the source code at:

* <https://cran.r-project.org/web/packages/yfR/index.html>
* <https://github.com/ropensci/yfR>

### Previous work - BatchGetSymbols

Previously there author of this function created the package *BatchGetSymbols*, but now it has been improved <https://github.com/msperlin/BatchGetSymbols>.

## Using the yfR Package


### How to install yfR in RStudio


You can install yfR in R with any of the following commands:

```r
# CRAN (stable)
install.packages('yfR')

# Github (dev version)
devtools::install_github('ropensci/yfR')

# ropensci
install.packages("yfR", repos = "https://ropensci.r-universe.dev")
```


### Using yfR in R together with plotly

You can use yfR to query historical stock data in R the following way:

```r
hist_price <- yf_get(tickers = test_ticker,
                        first_date= initial_date,
                        last_date= ending_date,
                        thresh_bad_data = 0.2,
                        freq_data="monthly") %>% select(ticker, price_close, ref_date) 
                        
hist_price$ym <- format(as.Date(hist_price$ref_date), "%Y-%m")
hist_price$Year <- as.integer(format(as.Date(hist_price$ref_date), "%Y"))
```

Then, just get some help from plotly to create one interactive visualization:

```r
       plot_ly(hist_price, type = 'scatter', mode = 'lines') %>%
                          add_trace(x = ~ym, y = ~price_close, name = ~ticker)
```

