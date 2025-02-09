---
title: "Financial Data for Python - Trying YahooFinancial and YFinance packages"
date: 2025-01-26
draft: false
tags: ["Python"]
description: "Initial yield vs growth, the math. How to analyze stock and dividend data with Python. Together with Data animations."
summary: 'Data for Python Financial Apps'
url: 'python-financial-data-with-yfinance'
math: true
---


## Financial Data with Python

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

## Dividend Data - DGI vs Yield

When you put together **few stocks with growing dividends**, you might expect something like this:

 
![Portfolio DGI Example](/blog_img/data-experiments/dgi_example.png) 

Some years might have a decrease due to:

* Global financial circunstances
* Or maybe just one of the stocks gave you a special dividend last year

What this tries to illustrate its just the general upwards trend.

Specially, if you build a so called *dividend aristocrats* portfolio.

These are companies with a track record of increasing dividends for many years, even during recessions like in 2008.

To compare it with real estate, rental prices decreased about 20% (dividend) and rental 40% from its peak.

The price of the companies was also reduced at those times, which caused anomaly *high* initial yield when buying those stocks

<!-- {{< rawhtml >}} 
<iframe src="/static/blog_img/data-experiments/dgi_example.html"
style="width: 100%; height: 450px;"></iframe>
{{< /rawhtml >}} -->

But **what's better, high yield or high dividend growth?**

Ideally something that give us both, but, there is always a trade off.

And some people call high yield investments as **divs traps**.

{{< callout type="info" >}}
[Investing in Real Estate](https://jalcocert.github.io/JAlcocerT/python-real-estate-mortage-calculator/) can be seen as a **leveraged high initial yield**
{{< /callout >}}

What does the **data and math** tell us about it?


![Div Yield vs Growth](/blog_img/data-experiments/div-growth-vs-yield-3d.png) 


As seen on the real estate post, the catch up its all about: $t = \frac{\ln(A/B)}{\ln(1 + (r))}$

* Where A and B are the initial yield of each stock
* And r the difference in growth between them

### No Dividend Reinvestment

In this case, you **just buy one time in the beginning, no debt**, sit and wait to see how each of those 2 evolve:

![Div No Re-Investment](/blog_img/data-experiments/div_no_reinvestment.png) 

> See how long it takes for 2.5% yield growing at 12% to **catch up** with 5.5% which grows at 2.57%

{{< callout type="info" >}}
Without [re-investing](#with-dividend-reinvestment), is harder to see the snowball effect 
{{< /callout >}}


### With Dividend Reinvestment

How about keep buying by **re-investing** the dividends?

Assuming that the price of the stock and the initial yield is the same, we would get:

<!-- 
![Div Re-Investment](/blog_img/data-experiments/div_reinvestment.png)  
-->

## Stock Value Data

So that's how dividends can behave over time.

How about the stock value?

---


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


### Animating Stock Data

{{< details title="Data Animations with Python 📌" closed="true" >}}

It's absolutely possible to create animations with Plotly, and you can export them as GIFs or MP4s.  

Plotly itself doesn't directly create MP4s, but you can achieve this using other tools in conjunction with Plotly.

Here's a breakdown of how to create animations and export them in different formats:

**1. Creating the Animation with Plotly:**

Plotly's `frames` argument is key to creating animations. You essentially create a series of plots (frames), each representing a step in your animation, and then Plotly smoothly transitions between them.

```python
import plotly.graph_objects as go

# Sample Data (replace with your own)
x_data = [1, 2, 3, 4, 5]
y_data_list = [[2, 1, 4, 3, 5], [1, 3, 2, 5, 4], [3, 2, 5, 1, 4]]

# Create Frames
frames = []
for i, y_data in enumerate(y_data_list):
    frame = go.Frame(data=[go.Scatter(x=x_data, y=y_data)], name=f"frame{i}") # Name is important for GIF export
    frames.append(frame)

# Create Figure with initial data
fig = go.Figure(
    data=[go.Scatter(x=x_data, y=y_data_list[0])], # Initial data
    layout=go.Layout(title="Animated Plot", updatemenus=[dict(type="buttons", buttons=[dict(label="Play", method="animate", args=None)])]),
    frames=frames
)

fig.show() # Display the interactive animation
```

**2. Exporting to GIF:**

*   **Using `kaleido` (Recommended):**  Kaleido is a static image export utility for Plotly.  It's the easiest way to export to GIF.

    ```python
    import imageio # For GIF creation

    images = []
    for frame in fig.frames:
        fig.update_layout(scene=frame.layout) # Important for 3D plots
        img_bytes = fig.to_image(format="png")  # or "jpg"
        img = imageio.v2.imread(img_bytes)
        images.append(img)

    imageio.mimsave("animation.gif", images, fps=2) # fps controls the animation speed
    ```

    You'll need to install `kaleido` and `imageio`: `pip install kaleido imageio`

*   **Alternative (if `kaleido` has issues):**  You could save each frame as a PNG and then use a separate tool (like ImageMagick) to combine them into a GIF.  This is more complex.

**3. Exporting to MP4:**

Plotly doesn't directly export to MP4. You'll need to use a video encoding library like `moviepy`.

```python
from moviepy.editor import ImageSequenceClip

# ... (code from GIF export to create 'images' list) ...

clip = ImageSequenceClip(images, fps=2)
clip.write_videofile("animation.mp4", codec='libx264', audio=False) # libx264 is a common codec
```

You'll need to install `moviepy`: `pip install moviepy`

**Key Considerations:**

*   **`fps` (frames per second):**  Controls the animation speed. Adjust this in `imageio.mimsave` or `ImageSequenceClip`.
*   **`codec` (for MP4):**  `libx264` is a widely supported codec.  You might need to install it separately on some systems (it's often included with `ffmpeg`, which `moviepy` may require).
*   **File Size:** GIFs can get very large.  MP4s are usually more efficient for longer animations.
*   **3D Animations:** For 3D animations, make sure to update the `scene` layout in each frame before exporting to an image.  The example code shows how to do this.
*   **Interactivity:** The interactive Plotly display (using `fig.show()`) is different from the exported GIF or MP4. The exported files are static animations.

This comprehensive explanation should help you create and export Plotly animations in your desired format.  Remember to install the necessary libraries. Let me know if you have any other questions.

{{< /details >}}