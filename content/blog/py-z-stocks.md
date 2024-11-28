---
title: "Stocks with Python"
date: 2024-10-23
draft: false
tags: ["Python"]
description: "A Cooler R/Stocks - This time with Python. And with proper auth"
summary: 'A Cooler R/Stocks - This time with Python. And with proper auth'
url: 'python-stocks-webapp'
---




{{< callout type="info" >}}
After [Weather Planning](https://jalcocert.github.io/JAlcocerT/trip-planner-with-weather/), there is also the financial aspects of travelling
{{< /callout >}}


{{< callout type="info" >}}
The project [**source code**](https://gitlab.com/fossengineer1/py_stocks) - PyStocks 💻 
{{< /callout >}}

If all of this sounds familiar. It is because it is actually familiar.

{{< callout type="info" >}}
Sometime ago I was doing similar Project in **R Shiny** - [R/Stocks](https://jalcocert.github.io/JAlcocerT/R-Stocks/)
{{< /callout >}}

{{< details title="API's I was using with R/Stocks 📌" closed="true" >}}

* [PriceR](https://jalcocert.github.io/JAlcocerT/r-priceR-package-guide/#what-is-pricer-about)
* [QuantDL](https://jalcocert.github.io/JAlcocerT/r-quandl-package-guide/#how-to-use-the-quandl-package) - [API](https://docs.data.nasdaq.com/v1.0/docs/getting-started) required
* [QuantMod](https://jalcocert.github.io/JAlcocerT/r-Quantmod-package-guide/#how-to-use-the-quantmod-package)
* [yfR - yahoo finance in R](https://jalcocert.github.io/JAlcocerT/r-yfR-package-guide/#the-yfr-package)

{{< /details >}}

## PyStocks

For user authentication: clear/supabase/logto...
* https://clerk.com/docs
* https://github.com/clerk/clerk-sdk-python/blob/main/README.md
* https://www.reddit.com/r/Supabase/comments/1dvabn6/what_is_the_best_solution_to_use_supabase_auth/
* https://www.reddit.com/r/nextjs/comments/1bvda9r/officially_hate_supabase_auth/?rdt=40537
* https://www.reddit.com/r/Supabase/comments/xaxecr/authentication_with_supabase_is_easy_almost/




{{< filetree/container >}}
  {{< filetree/folder name="content" >}}
    {{< filetree/file name="_index.md" >}}
    {{< filetree/folder name="docs" state="open" >}}
      {{< filetree/file name="_index.md" >}}
      {{< filetree/file name="getting-started.md" >}}
      {{< filetree/folder name="guide" state="open" >}}
        {{< filetree/file name="_index.md" >}}
        {{< filetree/file name="organize-files.md" >}}
      {{< /filetree/folder >}}
    {{< /filetree/folder >}}
    {{< filetree/folder name="blog" state="open" >}}
      {{< filetree/file name="_index.md" >}}
      {{< filetree/file name="post-1.md" >}}
    {{< /filetree/folder >}}
  {{< /filetree/folder >}}
{{< /filetree/container >}}

```
content
├── _index.md // <- /
├── docs
│   ├── _index.md // <- /docs/
│   ├── getting-started.md // <- /docs/getting-started/
│   └── guide
│       ├── _index.md // <- /docs/guide/
│       └── organize-files.md // <- /docs/guide/organize-files/
└── blog
    ├── _index.md // <- /blog/
    └── post-1.md // <- /blog/post-1/
```

## Conclusions

This goes one step further than the previous project RStocks.

And definitely much more than the older FlexDashboards in R.

### Stock Questions - Answered

* Stocks overperforming SP500 in xyz period / last xyz months
* YoC when I stopped investing at a certain point of time (Dave van Knapp made a all in approach, but it can serve to see what happens after a DCA strategy)


### Interesting Pkgs I got to learn

* Data Load Tool - https://github.com/dlt-hub/dlt

> the open-source Python library for data loading

* How to inspect a SQL DB with AI (without knowing much about it...)
  * https://github.com/alex-wolf-ps/dbchatpro/tree/main
  * https://www.youtube.com/watch?v=REw3y_Jv3Ig&t=0s
  * Paid alternative - https://www.outerbase.com/

---

## FAQ

### How to use AI LLM Agents to get posts with this program as Source

### Interesting Software for Finances

{{< details title="Crypto is...back? 📌" closed="true" >}}


{{< /details >}}

* https://github.com/serversideup/financial-freedom

`Financial Freedom` is an open-source financial management tool.

It serves as an alternative to commercial apps like Mint and YNAB.

This project addresses privacy concerns by allowing users to self-host their financial data.

Users can run the application on any device with Docker support, enhancing control over their financial information.

Key features include:

- **Supports any bank**: Integrate with various banking institutions.
  
- **Private synchronization**: Ensures data privacy during synchronization.

- **Self-hosting**: Run on AWS, Digital Ocean, or even Raspberry Pi.

- **Budgeting tools**: Helps in managing cash flow and setting budgets.

- **Global currency support**: Manages finances in multiple currencies.

The project is actively being developed, inviting community involvement through contributions.

Users can follow progress on GitHub, join discussions on Discord, or sponsor the project.

Conclusion: `Financial Freedom` empowers users to manage finances privately and securely.

Similar projects include **Firefly III** and **GnuCash**.

### Interesting Financial Stories

* https://dividendsandincome.com/author/dave-van-knapp/
* https://dividendsandincome.com/2024/04/08/how-my-dividend-growth-portfolios-income-keeps-expanding/

* https://engineeredportfolio.com/

* https://wtfhappenedin1971.com/
* https://whycryptocurrencies.com/


{{< callout type="info" >}}
You can create an [ebook like this](https://www.amazon.es/stores/Marco-Garrido/author/B0BW46JD83?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true) one with AI. How? with an [**AIssistant**](https://jalcocert.github.io/JAlcocerT/ai-useful-yet-simple/#kindle-notes-to-ai) 
{{< /callout >}}

* https://www.visualcapitalist.com/top-sp-500-stocks-return/

### Interesting Financial Data WebSites

* https://www.multpl.com/
  * it has Sp500 PE Ratios, 10y treausry rates...
* https://www.wallstreetmojo.com/trailing-pe-vs-forward-pe/


- https://stockanalysis.com/ esta es buena para stocks, etfs no
- https://www.justetf.com/uk/ esta es un screener de ETFs muy bueno, además están todas las variantes monetarias de cada ETF
- https://divvydiary.com/en/?via=elisa&gad_source=1&gclid=Cj0KCQiA0fu5BhDQARIsAMXUBOIN8XXGkoEZZbfhufMr55Y2kSIuAGXDP4Lb1LYgLlRMnezpTUl2tkAaAp2kEALw_wcB esta la encontré el otro día, ofrece datos históricos de stocks y algún ETF (FUSD te lo da pero IDUS no), pero mola que me da el ISIN rápido, entonces veo rápidamente en qué país cotiza
- https://tools.mhinvest.com/mhichart una web app que tiene una idea muy parecida a la que pensamos en su momento, pero no considera seguir metiendo gasolina, parte de una cantidad inicial y listo.

* https://www.marketbeat.com/

* https://www.cazadividendos.com/

* https://www.gurufocus.com/
* https://www.morningstar.com/stocks/xnys/pg/quote

#### Financial Data Apps

https://stockevents.app/en
https://stockle.app/