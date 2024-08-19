---
title: "Power Laws:"
date: 2025-07-26T23:20:21+01:00
draft: true
tags: ["Python","Blog"]
cover:
    image: "https://socialify.git.ci/JAlcocerT/Python_is_awesome/image?language=1&name=1&theme=Auto" # image path/url 
    alt: "" # alt text
    caption: "." # display caption under cover
description: ""
summary: 'Explaining series and the relation with the power law.'
url: 'predictions-series-and-data-analysis'
---

# The Power Law

<!-- 
In mathematics, a power law is a functional relationship between two quantities [1], where a relative change in one quantity results in a proportional relative change in the other quantity [2][3], independent of the initial size of those quantities. In other words, small changes in one variable result in large changes in another variable, and vice versa. This type of relationship is often observed in nature, such as in the size distribution of cities or the frequency of words in a language. The power law is also known as a scaling law or a Pareto distribution. -->

Sure, here are some examples of power laws and how they affect our lives:

* The distribution of wealth: The distribution of wealth in many countries follows a power law, where a small fraction of the population holds a large fraction of the wealth. This means that the gap between the rich and the poor is much wider than would be expected in a random distribution, and can have significant social and economic consequences.

* The frequency of words in natural language: In any language, a few words are used very frequently, while the majority of words are used much less frequently. This follows a power law distribution, where a small number of words (such as "the", "and", "of", etc.) make up a large fraction of all words used, while the rest of the words are used much less frequently.

* The size distribution of cities: In many countries, the size distribution of cities follows a power law, where a few large cities have much larger populations than the majority of smaller cities. This can have significant implications for urban planning, transportation, and economic development.

* The frequency of occurrence of diseases: The frequency of occurrence of many diseases follows a power law, where a few rare diseases account for a large fraction of all cases. This can have implications for public health policies and the allocation of resources for disease prevention and treatment.

By understanding the underlying mechanisms that give rise to power laws, we can gain insights into the complex systems that govern our world and make more informed decisions about how to shape them.

## Understanding Series

Before we move on, let me get a little bit technical here.

There are many  types of series that appear in mathematics, science, and engineering, each with their own unique properties and applications. Some examples that you will be familiar with after such studies include: **Fourier** series, **Taylor** series, and series expansions for special functions like the gamma function and Bessel functions.

These series are used in a variety of contexts, from physics and engineering to finance and economics. You have to remember that they are **an important tool for understanding and modeling complex systems**. Basically these ones deserve its own post.

### Non-Geometric Series

* The series 1, 3, 6, 10, 15, ... is an **arithmetic series** where each term is the sum of the previous terms and the first term is 1.
* The series 1, 1/2, 1/3, 1/4, 1/5, ... is the **harmonic series**, which diverges (i.e. does not have a finite sum).
* The series 1, -1/2, 1/3, -1/4, 1/5, ... is the **alternating harmonic series**, which converges to ln(2).

### Geometric series

The series 1, 2, 4, 8, 16, ... is a geometric series with a common ratio of 2.
The series 3, 6, 12, 24, 48, ... is a geometric series with a common ratio of 2.
The series 1/2, 1/4, 1/8, 1/16, ... is a geometric series with a common ratio of 1/2.

A geometric series is a sequence of numbers in which each term after the first is obtained by multiplying the previous term by a fixed number called the common ratio (r). The formula for a geometric series is:

S = a + ar + ar^2 + ar^3 + ... = a(1 - r^n)/(1 - r)

where S is the sum of the series, a is the first term, n is the number of terms, and r is the common ratio.

For example, the series 2 + 4 + 8 + 16 + 32 is a geometric series with a first term of 2 and a common ratio of 2. The sum of this series can be calculated as:

S = 2(1 - 2^5)/(1 - 2) = 2(-31)/(-1) = 62

So the sum of the series is 62.

Geometric series are commonly used in mathematics, physics, and engineering to model exponential growth or decay, such as the growth of a population or the decay of a radioactive substance.

### Fibonacci

Yes, Fibonacci sequence is an example of a geometric series with a common ratio of the golden ratio, which is approximately 1.618.

Here's some sample Python code to plot a geometric series:


```
import numpy as np
import matplotlib.pyplot as plt

# Define the common ratio and the number of terms
r = 0.5
n = 10

# Define the first term and calculate the series
a = 1
series = [a * (r ** i) for i in range(n)]

# Plot the series
plt.plot(series, '-o')
plt.title("Geometric series with r = {}".format(r))
plt.xlabel("Term number")
plt.ylabel("Value")
plt.show()
```

In this example, we set the common ratio r to 0.5 and the number of terms n to 10. We then calculate the geometric series using a list comprehension and plot the values using Matplotlib.

You can easily modify this code to plot other geometric series with different values of the common ratio and number of terms.

## The Power Law & Geometric series

A power law is a functional relationship between two quantities, where one quantity varies as a power of another quantity. In other words, a power law is a mathematical formula of the form y = ax^k, where k is a constant that determines the degree of the power law. 

Power laws are commonly found in many natural and social phenomena, such as the distribution of wealth, the frequency of words in natural language, and the size distribution of earthquakes.

Power laws can be related to geometric series through the concept of infinite sums. In particular, if a power law has a value of k between -1 and 0, then the infinite sum of its terms converges to a finite value, and can be expressed as a geometric series. For example, the series 1 + 1/2 + 1/4 + 1/8 + ... is a geometric series with a common ratio of 1/2, and can be shown to converge to a finite value of 2.

The relationship between power laws and geometric series arises because **both describe the behavior of a quantity that changes exponentially over time.**
* In the case of a geometric series, the quantity changes by a fixed factor with each term, whereas in the case of a power law, the quantity changes by a variable factor that depends on the exponent k. Thus, **power laws can be thought of as a generalization of geometric series**, where the growth factor is not constant but varies with the exponent.

## Power Law & Pareto

Recently I wrote a post on The Pareto Principle.

## Power Law & Data Analytics

For a data analyst, understanding power laws and Pareto analysis can be extremely valuable for their career. By recognizing the presence of power laws in their data, they can better understand the underlying patterns and relationships that drive the behavior of the system they are analyzing. 

Similarly, by applying Pareto analysis techniques, they can identify the most important factors that contribute to a given outcome, and prioritize their efforts accordingly.

This can lead to more effective decision-making and resource allocation, and ultimately better outcomes for their organization.

To make the most of these techniques, a data analyst should have:
* A solid understanding of statistics and data analysis techniques
* Tools for data visualization and analysis
* Comfortable working with large datasets
* Be able to communicate their findings effectively to non-technical stakeholders.