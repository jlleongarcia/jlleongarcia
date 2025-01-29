---
title: "Real Estate Calculator with Python"
date: 2025-01-25
draft: false
tags: ["Python"]
description: "Making my own mortage calculator in Python."
url: 'python-real-estate-mortage-calculator'
math: true
---

A friend asked me about some **add-on for his real estate project**.

He wanted to know how profitable can be real estate, compared with a dividend investing strategy.

After thinking about it for a while, we can see the following pattern:

1. Stock value can be seen as property value
2. Stock dividend yield as the renting price of the property
3. Most *8significant difference**: we dont take loans for dividend investing, but people normally do for real estate

This arise the question: *what it is the **return** on the money that ive given **from my pocket**?*

Apparently, finance people call that the **ROIC** (without leverage on a loan, ROI=ROIC)

But its all about few mathematical ways to represent very logical financial concepts.


{{< callout type="warning" >}}
**No information exposed on this post can be taken as financial recommendations** 
These are just my notes on how Python can be used to create a calculator app.
{{< /callout >}}

## Understanding Loans

When we get a mortage, our **net total assets today are reduced**, as we have some interests to pay (liabilities):


### French Amortization 101


<!-- This $\sigma(z) = \frac{1}{1 + e^{-z}}$ is inline.

$$F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-j\omega t} \, dt$$ -->


This is the French amortization formula: $M = P \times \frac{r(1 + r)^n}{(1 + r)^n - 1}$.



{{< details title="More about French Amortization 📌" closed="true" >}}

To calculate the French amortization schedule in Python, you need to use a formula that generates a fixed monthly payment throughout the loan term, and then gradually allocates it to both interest and principal.

The formula for calculating the **fixed monthly payment** is:

\[
M = P \times \frac{r(1 + r)^n}{(1 + r)^n - 1}
\]

Where:
- \(M\) is the monthly payment
- \(P\) is the **principal** amount
- \(r\) is the monthly **interest rate** (annual interest rate divided by 12)
- \(n\) is the number of payments (loan term in years multiplied by 12)

Each month, the interest portion of the payment decreases, and the principal portion increases.


**Understanding French Amortization**

French amortization is a loan repayment method where you make equal periodic payments (usually monthly) over a fixed term. Each payment consists of two parts:

1. **Interest payment:** Calculated on the outstanding loan balance.
2. **Principal repayment:** The portion of the payment that reduces the outstanding loan balance.

**Key Characteristics:**

* **Equal periodic payments:** The total amount you pay each period remains constant.
* **Declining interest:** As the loan balance decreases, the interest portion of your payment also decreases.
* **Increasing principal repayment:** Since the total payment is fixed, the portion allocated to principal repayment increases over time.

**Excel Parameters for French Amortization:**

To create an amortization schedule in Excel, you'll need the following parameters:

1. **Loan amount (principal):** The initial amount borrowed.
2. **Interest rate:** The annual interest rate on the loan.
3. **Loan term:** The total number of periods (usually months or years) over which the loan will be repaid.

> See [these functions](https://support.google.com/docs/answer/3093185?hl=en)

* **PMT(rate, nper, pv):** Calculates the periodic payment amount.
  * `rate`: The periodic interest rate (annual rate divided by the number of periods per year).
  * `nper`: The total number of payment periods.
  * `pv`: The present value of the loan (the amount borrowed).
  * It does not care about the period, as the key about this amortization is that all are the same!

* **IPMT(rate, per, nper, pv, [fv], [type]):** Calculates the interest portion of a specific payment.
  * `rate`, `nper`, `pv`: Same as in the PMT function.
  * `per`: The period for which you want to calculate the interest.
  * `fv`: The future value of the loan (usually 0).
  * `type`: Specifies when payments are due (0 for end of period, 1 for beginning of period).

* **PPMT(rate, per, nper, pv, [fv], [type]):** Calculates the principal portion of a specific payment.
  * Parameters are the same as for IPMT.

{{< /details >}}

How does **french amortization** looks like **in practice**?

As mentioned, you will have constant payments (given constant interest rate) and **you start by paying mostly interests**.

![French Amortiz Example](/blog_img/data-experiments/french_amortiz.png) 

There you have a **sample split evolution** of how much you are paying on interest and on principal return to the bank.

The shape of the **curve depends on the parameters** you set:

* Interest Rate
* Years of Return

As you can imagine, the higher those 2 are, the higher interest you pay in value and also in relation with the principal you got the loan for.

{{< callout type="info" >}}
Ive also covered **mortage with python** as part of the [EDA of pystocks](https://gitlab.com/fossengineer1/py_stocks/-/tree/main/EDA_Mortage?ref_type=heads) and ofc created a streamlit app.
{{< /callout >}}


## Dividend Growth vs Rent Growth

```sh
#https://www.nasdaq.com/market-activity/stocks/o/dividend-history
=(importxml("https://www.nasdaq.com/market-activity/stocks/o/dividend-history";$AJ$28))
```

First div of 2025 has been 0.264 and first of 2024 was 0.2565, or a 2.92% growth.

But some years are better than others, right?

Lets see the **CAGR for dividend growth**

### Useful Concepts

#### CAGR

The **CAGR formula** is just: $CAGR = \left( \frac{V_f}{V_i} \right)^{\frac{1}{t}} - 1$.

Where:
- \( V_f \) is the final value
- \( V_i \) is the initial value
- \( t \) is the time period (usually in years)

In the example, as per [NASDAQ O Data](https://www.nasdaq.com/market-activity/stocks/o/dividend-history),
the first div of 2020 was 0.2325$, thats a x1.135, but in 5 years.

So...can we have some kind of constant growth rate over that period?

<!--
$$
CAGR = \left( \frac{0,264}0,2325} \right)^{\frac{1}{5}} - 1 = 2,57
$$
 -->

$$
CAGR = \left( \frac{0.264}{0.2325} \right)^{\frac{1}{5}} - 1 \approx 0.0257
$$

So its an equivalent of **2,57% of dividend growth**, each year, during the last 5 years.

This is a 'virtual' number, some years was more, some less, buts **thats the compound rate**

And it ofc depends in your stock investment, same as your potential property investment.

Other example with [MCD](https://www.nasdaq.com/market-activity/stocks/mcd/dividend-history):
<!-- 
$$
CAGR = \left( \frac{1.77}1.25} \right)^{\frac{1}{5}} - 1 = 7,2
$$
 -->

$$
CAGR = \left( \frac{1.77}{1.25} \right)^{\frac{1}{5}} - 1 \approx 0.072
$$

Or 'just' a ~7,2%

And now, the logical question appears: *when will (if ever) catch up with the higher initial yield one?*

#### How many years to...

1. The `72 rule`: The "Rule of 72" is a simple way to estimate the number of **years it takes for an investment to double**, based on a fixed annual rate of return (interest or growth rate).

{{< details title="More about this 72 magic rule 📌" closed="true" >}}

It’s called the "Rule of 72" because you divide 72 by the annual rate of return to get a rough estimate of how many years it will take for your investment to double in value.

The reason it works is because of logarithmic math, specifically from the compound interest formula. 

If you start with the compound interest formula for growth:

\[
A = P(1 + r)^t
\]

Where:
- \( A \) is the final amount
- \( P \) is the initial principal
- \( r \) is the annual growth rate (expressed as a decimal)
- \( t \) is the time in years

For doubling, we set \( A = 2P \) (because we want the value to double), so the equation becomes:

\[
2P = P(1 + r)^t
\]

Simplifying:

\[
2 = (1 + r)^t
\]

Taking the natural logarithm of both sides:

\[
\ln(2) = t \ln(1 + r)
\]

Solving for \( t \):

\[
t = \frac{\ln(2)}{\ln(1 + r)}
\]

Now, \(\ln(2) \approx 0.693\). For small rates of return (say, 5% or 10%), the natural logarithm of \( (1 + r) \) is roughly equal to \( r \). So for small \( r \), we can approximate:

\[
t \approx \frac{0.693}{r}
\]

And since \( \frac{0.693}{0.01} \approx 69.3 \), the approximation uses 72 for simplicity, as it’s close enough for most practical purposes.

**Why 72?**
72 is used because it’s a simple, convenient number that works well with typical interest rates.

{{< /details >}}

It's an easy-to-remember approximation that gives results that are accurate enough for most financial calculations (especially with rates between 6% and 10%).

If you divide 72 by the interest rate in percentage terms, you get a good estimate for the doubling time.

For example:
- At a 6% return: \( 72 \div 6 = 12 \) years to double.
- At a 9% return: \( 72 \div 9 = 8 \) years to double.


2. With proper math:

The **exact formula** to find the time to **double** is $t = \frac{\ln(2)}{\ln(1 + r)}$.


3. The formula to find the **time to grow by a general factor** of XYZ is $t = \frac{\ln(XYZ)}{\ln(1 + r)}$.

With this one, we can see when MCD will potentially, catch up with O (while O also grows, but to a slower rate)

$$
t = \frac{\ln(5.8/2.5)}{\ln(1 + (7.2-2.7))}=17.8
$$

And with those rates, the yield of that stock you are buying today, catch up in ~17.8 years!

## Div Growth

The important fact here is, that we dont get a loan for dividend investing (do we?)

In these examples, for dividends:

1. Higher initial yield ~5,8% and lower Div Growth ~2,7%
2. Lower initial yield ~2,5% and Higher Div Growth ~7,2%

What's better?

As always, it depends, faster growing divs, also tend to imply higher stock value growth rate.

**Parameters to Track**
1. DCA or all in approach?
2. Value of the stock and yield on cost
3. **Estimations of**: value growth and dividend (it could also be decrease!)


## Rent Growth

In this case, we are receiving rental income (dividend income) also from the borrowed amount!

This can (or not) help to pay mortage interests.

So the costs from your pocket of this one are: Initial payment + Mortage Payment - Net Rent 

**Parameters to Track**
1. Interest Rate & Years
2. Value of the property and % the bank loaned
3. **Estimations of**: property value growth and rental growth (it could also be decrease!)

![Cash Flow when Buy and Rent with Loan](/blog_img/data-experiments/buy_mortage_and_rent_CF.png) 

As you can imagine, if the real life goes like this, you have earned a lot by using debt.

You were using the rental price to pay the mortage (and you got a surplus later on)

And also the property most likely increased the value on a 25years horizon since you bought it.

Those 2 factors, while you 'just' put from your pocket the orange part of the graph.

This is an **example on how ROIC >> ROI**

### Rent Price vs Property Price

There are some **interesting dynamics** between these 2, the [price2rent ratio](https://tradingeconomics.com/country-list/price-to-rent-ratio).

<!-- 
https://www.youtube.com/watch?v=6whiAFXk3IU 
-->

{{< youtube "6whiAFXk3IU" >}}

People trying to leverage loans, tend to look for low property price to rent price ratios.

Also using low interest rates and long horizons to pay back the debt, so that very quickly the rental prices exceed the mortage amount, which provides them with Free Cash Flow (using loaned money).

This of course has several risks involved:

1. How consistent is the rental? Any damages? Occupancy ratio? Whats the rental growth if any?
2. What will be the interest rate evolution during the loan period? 

If interest rise enough, you can go from FCF to be unable to pay to the bank, hence potentially loosing the house.

Those situations where people lost it all, happened not so long ago, in ~2008.

People buying it very high prices, then interest went up, making the property value go down (which was
their biggest asset) and when you cant pay and all you have lost 50% of its value...you stay with nothing.

To avoid such situations to happen again (in theory), there are rules that wont let you take too much credit in comparison with what you earn. For example:

Max credit monthly payment < 0.35*(Net Salary + Other Net Income)

> Imo, even with such formulas there are risk, but...what do I know about finances!


## Real Estate Data

First thing I thought was **airbnb data**.

* https://insideairbnb.com/get-the-data/
  * https://insideairbnb.com/valencia/

But I also heard about idealista:

* https://www.idealista.com/data/
* https://www.idealista.com/labs/blog/?p=4207
  * https://www.idealista.com/labs/blog/?p=4207
  * https://paezha.github.io/idealista18/

> They even create a [R Package `paezha/idealista18`](https://github.com/paezha/idealista18) for this, with 2018 data!


Credits to both platforms for sharing such interesting data!

### Modelling Bull and Bear Markets

If you have a look at the data, its clear that the trend (at least the nominal value), tends to be upwards.

But there are moments where the price and rental price dont grow, or even decrease.

It also happens with interest rates!

There are 2 very simple ways to model this:

1. Constant growth, whatever you decide, ignoring the big ups and downs, which should be more or less precise on the long run (if you get right the rates, ofc)
2. To make something cooler, how about:
* The general trend is upwards, but there will be sin functions applied as well
* The initial/final values will be the same
* Just in between, thanks to the periodic functions we will have ups and downs

{{< callout type="warning" >}}
How much up and down? As this is just a python data exercise, I will say
* +-20% every 7 years for buying price and +-10% for the rental one
* interest rates will be +-50%, but will peak 1 year before the peak on buy/rental
{{< /callout >}}

How does it looks like?


---

## Conclusions

See some crazy rates and you will be soon rich?

Calm down :)

Those are **nominal growth** values, dont forget to take into consideration [inflation](https://tradingeconomics.com/poland/inflation-cpi), which is part of those figures.

[More **about inflation**](https://jalcocert.github.io/JAlcocerT/r-dashboard-shinyapps/) and how it can hurt (or benefit?)


{{< cards >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/r-dashboard-shinyapps/" title="Retirement Facts" image="/blog_img/data-experiments/Inflation_Mild.JPG" subtitle="Life savings and inflation in a R Shiny App." >}}
  {{< card link="https://github.com/JAlcocerT/R_is_Great/tree/main/ShinyApps" title="Retirement Facts" image="https://socialify.git.ci/jalcocert/jalcocert?description=1&name=1&theme=Auto" subtitle="Life savings and inflation in a R Shiny App." >}}
{{< /cards >}}

{{< callout type="info" >}}
Retirements facts, the inflation shiny app [repo](https://github.com/JAlcocerT/R_is_Great/tree/main/ShinyApps)
{{< /callout >}}

Taking inflation into consideration is very important.

I was talking with a friend recently, who bought a flat in 2020 and she told me now it's wort more than 50% what she paid for.

Remember to have a broader look to this kind of conversation.

Providing that return is true, that's the **nominal one**.

And as you understand what it is [CAGR](#cagr), you know that x1.5 in 5 years is a ~8% compund yearly return.

Is it much? is it low?

> Here is where most people disconnect, **please continue reasoning**

Well, on the same period, the inflation level has been ~8% a year.

So now you now that in real value, flats are as expensive or as cheap as they were in 2020 compared with the rest of prices.

Was it a good decision? a bad one?

As always, **depends how you look at it**.

My friend is not renting the apartment (hence doing the automatic reinvestment of the property yield).

But, she is not paying an increasingly high rent (which actually in this period grew more than the flat price).


https://github.com/JAlcocerT/R_is_Great/tree/main/ShinyApps


---

## Thanks

* Thanks to airbnb and idealista for the historical data
* Thanks to [HUGO Hextra Theme and katex](https://imfing.github.io/hextra/docs/guide/latex/)!

$$
\begin{aligned}
  \nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
  \nabla \cdot \mathbf{B} &= 0 \\
  \nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
  \nabla \times \mathbf{B} &= \mu_0 \left( \mathbf{J} + \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} \right)
\end{aligned}
$$


$$\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}$$