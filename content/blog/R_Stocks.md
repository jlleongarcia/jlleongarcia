---
title: "R Stocks: Interactive Stock Analysis with R Shiny"
date: 2022-11-27T23:20:21+01:00
draft: false
tags: ["R","Dashboards","R-Stocks"]
cover:
    image: "https://socialify.git.ci/JAlcocerT/R_Stocks/image?description=1&descriptionEditable=Shiny%20Dashboard%20that%20displays%20free%20available%20financial%20information.%20%0A%0A&font=Inter&name=1&owner=1&pattern=Solid&theme=Auto" # image path/url 
    alt: "R Stocks" # alt text
    caption: "Building an interactive R Shiny dashboard that displays financial information." # display caption under cover
editPost:
    URL: "https://github.com/JAlcocerT/R_Stocks"
    Text: "Suggest Changes" # edit text
    appendFilePath: false # to append file path to Edit link
description: "R Stocks - Testing HUGO Hextra and saying Hi to the RStock project from the other side.s"
url: 'R-Stocks'
isPinned: false
---

# R Stocks

After some time of using R and loving it, I was wondering if there was any [open source project](#the-app-r-stocks) combining some of my favourite packages to easily get **financial data and have it displayed interactively** in Shiny Dashboard.

Since I found nothing on Github, I decided to start it myself - *This is how the [R Stocks project](#the-app-r-stocks) started*.


{{< callout type="info" >}}
R/Stocks [Source Code](https://github.com/JAlcocerT/R_Stocks). Deploy with [GHCR image](https://github.com/JAlcocerT/R_Stocks/pkgs/container/r-stocks) or [build it DIY version](https://github.com/JAlcocerT/R_Stocks/tree/main/Z_Deploy_Me)
{{< /callout >}}

With such a project, you not only get the chance to create something cool but also to learn and discover great tools.

* Libraries that are used to fetch the main financial data: 
    * YfR - [My guide on yfR](/r-yfR-package-guide/)
    * Quantmod - [My guide on quantmod](/r-Quantmod-package-guide/)
    * PriceR - [My guide on priceR](/r-priceR-package-guide/)
    * Quandl - [My guide on quandl](/r-quandl-package-guide/)


And of course I am also using **Plotly and Shiny** for the visualization and interactive dashboard building.

## The App: R Stocks

* More about R_Stocks:
    * R Stocks **Project Details**:
        * R_Stocks{{< newtab url="https://github.com/JAlcocerT/R_Stocks" text=" Source Code at Github" >}}
        * License: {{< newtab url="https://github.com/JAlcocerT/R_Stocks?tab=GPL-3.0-1-ov-file#readme" text="GPL-3.0" >}} 📜
    * **Disclaimer:** ☝️ 
        * This is just **a Shiny Dashboard** sample that displays freely available financial information.
        * It's important understand that the dashboard is **NOT created to provide financial advice** ❗.

- 📊 **Interactive Data Visualization:**
  - I chose Shiny Dashboard for its ability to create interactive and dynamic visualizations of data, enhancing user the insights.

- 🚀 **Deployment:**
  - Shiny Dashboard provides an easy deployment process, whether [hosting on a server](##how-can-i-self-host-r-stocks) or sharing as a standalone application, ensuring accessibility for users.

{{< dropdown title="And few other Reasons that made me user R Shiny👇" closed="true" >}}

- 🔄 **Real-time Updates:**
  - Shiny Dashboard enables real-time updates of the dashboard as new data becomes available, crucial for monitoring live data feeds.

- 🎨 **Customization:**
  - Shiny Dashboard offers extensive customization options, allowing me to tailor the interface to meet specific user needs with custom styling and interactive elements. 
  - Yes, I was playing a little bit with CSS 🙈

- 🔗 **Integration with R:**
  - Shiny Dashboard seamlessly integrates with [R Language](), leveraging the language's power for data manipulation, analysis, and visualization within the dashboard environment.


{{< /dropdown >}}

The R Stock App has right now **six tabs**:
* [Selected Stocks](#interactive-stocks-analysis-with-r) Performance Overview
* [Dividends Overview](#interactive-dividend-analysis-with-r)
* A look to some [global indexes](#interactive-indexes-analysis-with-r)
* How about [commodities](#interactive-commodities-analysis-with-r)?
* What has been FIAT currencies doing?
* Oh, yep, some inflation coming


### Interactive Stocks Analysis with R 

In the first tab, you will have available general information of the selected tickers:

The first panel is just using the **yfR** library to get the data displayed:

{{< gist jalcocert 879fecd6ae9bccaa0175d1c180a032cd "RStocks - StocksPriceEvolution.JPG">}}

The panels below, are using **QuanDL**, so remember to have your API_key available:

{{< gist jalcocert 879fecd6ae9bccaa0175d1c180a032cd "RStocks - GrossMarginEvolution.JPG">}}


{{< gist jalcocert 879fecd6ae9bccaa0175d1c180a032cd "RStocks - DEBTASSETSEvolution.JPG">}}


{{< gist jalcocert 879fecd6ae9bccaa0175d1c180a032cd "RStocks - EVEBITDAEvolution.JPG">}}


{{< gist jalcocert 879fecd6ae9bccaa0175d1c180a032cd "RStocks - DEBTASSETSEvolution.JPG">}}


{{< gist jalcocert 879fecd6ae9bccaa0175d1c180a032cd "RStocks - EBITDAMarginEvolution.JPG">}}


### Interactive Dividend Analysis with R

In the second tab of the dashboards, you can find information related to the historical dividends per selected ticker.

This panels have been possible thanks to **QuantMod**, where we can get access to historical dividen data and then create the following:

{{< gist jalcocert 879fecd6ae9bccaa0175d1c180a032cd "RStocks -DividendEvolution.JPG">}}


{{< gist jalcocert 879fecd6ae9bccaa0175d1c180a032cd "RStocks -DividendGrowthDistribution.JPG">}}


{{< gist jalcocert 879fecd6ae9bccaa0175d1c180a032cd "RStocks - HistoricalYieldEvolution.JPG">}}

{{< gist jalcocert 879fecd6ae9bccaa0175d1c180a032cd "RStocks - HistoricalYieldDistribution.JPG">}}

Also, thanks to **QuanDL**, we can have access to some interesting ratios concerning dividends:

{{< gist jalcocert 879fecd6ae9bccaa0175d1c180a032cd "RStocks - PayoutRatioEvolution.JPG">}}


### Interactive Indexes Analysis with R

Once again, thanks to **yfR** we can query general market indexes, like SP500, DJ, Nikkei and check on how were the markets behaving globally at a given moment:

{{< gist jalcocert 879fecd6ae9bccaa0175d1c180a032cd "RStocks - IndexPriceEvolution.JPG">}}

### Interactive Commodities Analysis with R

Another interesting source of information can be created when comparing the price of commodities with the one of any of the indexes.

Thanks to **yfR** and this view, we can see the evolution in the  relation of any pair index/commodity. 

{{< gist jalcocert 879fecd6ae9bccaa0175d1c180a032cd "RStocks - Index2ComEvolution.JPG">}}

---

## FAQ

### How Can I try the R Stocks Shiny App?

### How Can I try the R Stocks Shiny App?

* **Ready to Try?**: If you've read this far, you're probably eager to give the app a try. I've deployed it using the latest Docker image.
    * **Access my instance**:  I am making an effort to self-host at home at a Raspberry Pi
        * You can access it for free from any browser {{< newtab url="https://r_stocks.fossengineer.com/" text="here" >}}
    * **Docker Image**: The Docker image I'm using is available on DockerHub: [fossengineer/r_stocks](https://hub.docker.com/repository/docker/fossengineer/r_stocks)

#### What if the site can't be reached?

* **Temporary Unavailability**: If the site can't be reached, it might be because my Raspberry Pi isn't powered on at the moment or I've decided to free up resources for other projects.
* But don't worry, you can also [self-host R_Stocks](#how-can-i-self-host-r-stocks) on your own system.


### How can I self-host R-Stocks?

{{< dropdown title="Option 1👇" closed="true" >}}



{{< /dropdown >}}

* **Self-hosting Effort**: Host your own free and open-source version of this R Shiny App at home using Docker and Cloudflare tunnels.
    * **Option 1**: 
        * **Pros**: Full control over the deployment process & can customize it to fit your needs perfectly.
        * **Cons**: Requires some technical expertise to set up and maintain the environment.
    * **Option 2**: You can use the Docker image I've already built:
        * **Pros**: Quick and easy to get started, no need to build the image yourself ✅
        * **Cons**: Less flexibility compared to self-hosting from source, may not be tailored to your specific requirements.



```yml
version: '3.8'
services:
  r_stocks_shiny:
    image: fossengineer/r_stocks
    container_name: r_stocks
    ports:
      - 3838:3838
    restart: unless-stopped 
```

### How to deploy R Stocks with Docker and a GUI?

You can [install Portainer with Docker](https://fossengineer.com/selfhosting-portainer-docker/) and use the configuration above to self-host your own instance of RStocks with a GUI to manage the container.

<!-- ### How can I contribute?

The code is accesible from [my Github Repository of R/Stocks](https://github.com/JAlcocerT/R_Stocks "R Stocks Github {rel='nofollow'}")

Please feel free to fork the repository and experiment with the code. -->


<!-- fossengineer/rstocks_shiny:latest
 docker run --name stocksubuntu -p 3836:3838 --detach fossengineer/rstocks_rbase2:latest
# you may need log out first `docker logout` ref. https://stackoverflow.com/a/53835882/248616 docker login

docker tag firstimage YOUR_DOCKERHUB_NAME/firstimage


docker push YOUR_DOCKERHUB_NAME/firstimage
docker run --name py_trip_planner --network tunnel -p 8050:8050 --detach py_trip_planner


docker run --name py_trip_planner --network tunnel -p 8050:8050 --detach fossengineer/trip_planner:arm64
MANIFEST: to detect that is arm64 directly -> multi-image (?)
https://hub.docker.com/r/fossengineer/trip_planner:arm64

To label docker images
To Private


 -->
