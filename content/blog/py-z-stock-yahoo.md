---
title: "Financial Data for Python - YahooFinancial and YFinance packages"
date: 2025-01-26
draft: false
tags: ["Python"]
description: "Math Recap: initial yield vs growth. How to analyze stock and dividend data with Python"
summary: 'Data for Python Financial Apps'
url: 'python-financial-data-with-yfinance'
math: true
---

How to pull data from: https://finance.yahoo.com/


### Yahoo Financials

* https://pypi.org/project/yahoofinancials/

* https://github.com/JECSand/yahoofinancials

> MIT | A powerful financial data module used for pulling data from Yahoo Finance. This module can pull fundamental and technical data for stocks, indexes, currencies, cryptos, ETFs, Mutual Funds, U.S. Treasuries, and commodity futures.

```sh
pip install yahoofinancials==1.20
```
You can get started with a `.ipynb` jupyter for exploration.




{{< callout type="warning" >}}
The first time, [you will need a **venv**](https://jalcocert.github.io/JAlcocerT/useful-python-stuff) and the [vscode jupyter **extension**](https://github.com/microsoft/vscode-jupyter/wiki/Jupyter-Kernels-and-the-Jupyter-Extension#python-extension-and-ipykernel)
{{< /callout >}}

### YFinance

* https://pypi.org/project/yfinance/
* https://rowzero.io/blog/yfinance
* https://github.com/ranaroussi/yfinance
    * https://ranaroussi.github.io/yfinance/

> Apache v2 | Download market data from **Yahoo! Finance's API**


```sh
pip install yfinance==0.2.52
```

```py
import yfinance as yf
import pandas as pd

def STOCK(ticker):
    return yf.Ticker(ticker).history(period="max")

STOCK('KO')
```

## DGI vs Yield

When you put together **few stocks with growing dividends**, you might expect something like this:

 
![Portfolio DGI Example](/blog_img/data-experiments/dgi_example.png) 

Some years might have a decrease due to:

* Global financial circunstances
* Or maybe just one of the stocks gave you a special dividend last year

What this tries to illustrate its just the general upwards trend.

<!-- {{< rawhtml >}} 
<iframe src="/static/blog_img/data-experiments/dgi_example.html"
style="width: 100%; height: 450px;"></iframe>
{{< /rawhtml >}} -->

But **what's better, high yield or high dividend growth?**

Ideally something that give us both, but, there is always a trade off.

And some people call high yield investments as **divs traps**.

What does the data and math tell us about it?

### No Dividend Reinvestment

### With Dividend Reinvestment


## Conclusions

Is it possible to life from dividends?

**How much** do I need to live from dividends?

Those are typical questions i frequently see over the internet.

In theory, you just need to know 2 things:

1. How much you spend (the net + taxes and so on)
2. What it is the avg return on your assets

And the math goes... $Needs = P \times \frac{Yearly_Gross_Expenses}{(Yearly_returns)}$.

People mention about different strategies to estimate the returns:

* The 4% rule, which apparently is an estimate of what you can take from a portfolio without killing your principal every year
* Others just go with a dividend investing approach, so they dont need to sell shares
* And some people have a balance between stocks funds and bonds, so that if stock market goes down they can live with those bonds, without selling really cheap the stocks

{{< callout type="warning" >}}
To keep it simple, lets go with the 4%, but as you can imagine, life is much more complex and unpredictable than a fixed rate. Definitely, **this is not any financial advice of any type**.
{{< /callout >}}

---

## FAQ

### YFinance with Google Sheets

You can have a simple, yet useful **Google Sheets with Stocks** info:

```sh
=GoogleFinance(S35;"eps") #S35 can reference some ticket, like NYSE:KO
=GoogleFinance(S35;"pe")
=GoogleFinance("INDEXSP:.INX") #sp500

=INDICE(GoogleFinance("INDEXSP:.INX"; "price"; HOY()-365);2;2) #get the price 365 ago

=SPARKLINE(GoogleFinance("CURRENCY:EURCHF"; "price"; HOY()-J$1; HOY()))
=SPARKLINE(GoogleFinance("CURRENCY:"&"USD" & DERECHA(A6;3); "price"; HOY()-J$1; HOY()))
```

And if you need, you can also **import info from other website** sources:

{{< callout type="warning" >}}
You will need to go to inspect -> find the proper div with the info -> copy **full xpath**
These xpath might change if there is a redesign in the website!
{{< /callout >}}


1. Import from **ycharts**:

```sh
=VALOR(IZQUIERDA(importxml(CONCATENAR("https://ycharts.com/companies/";REGEXEXTRACT(S33;"[^:]*$");"/profit_margin");$AJ$28);3))/100
#S33 is a ticker, NASDAQ:PEP, for example and AJ28 the XPATH
# =importxml("https://ycharts.com/companies/"& REGEXEXTRACT("NASDAQ:PEP";"\:(.*)") & "/profit_margin";$AI$28)
```

> with xpath being `/html/body/div[3]/div[2]/section[1]/div/div/div[1]/div[2]/ul/li[1]/span[2]`

2. Import from **numbeo**:

```sh
=IZQUIERDA(importxml(C36;C37);6)/IZQUIERDA(importxml(C36;C38);6)
```

With:

* C36 `https://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=Poland&country2=spain&city1=Warsaw&city2=barcelona&tracking=getDispatchComparison`
* C37 `/html/body/div[2]/aside[1]/div[2]/div/span[1]/text()`
* C38 `/html/body/div[2]/aside[1]/div[2]/div/span[3]`

3. Even from **Etherscan** for crypto related info!

```sh
=importxml("https://etherscan.io/address/some_address";"/html/body/main/section[3]/div[2]/div[1]/div/div/div[2]/div/div")
```

{{< callout type="info" >}}
You can learn more about **Scrapping** as covered on this [blog post](https://jalcocert.github.io/JAlcocerT/scrap-and-chat-with-the-web/) and the [Scrapping-Tools repo](https://github.com/JAlcocerT/Scrap_Tools) 💻
{{< /callout >}}