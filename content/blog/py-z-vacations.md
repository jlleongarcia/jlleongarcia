---
title: "Vacation Planning - Recommendations, Costs, Weather [With AI]"
date: 2024-10-25
draft: false
tags: ["Dev","AI"]  
description: "Python App to explore vacation destination. LLMs ❤️ Data"
summary: 'Where to go. When to go. Can I go?'
url: 'vacation-planner-python'
isPinned: false
---

Its all about **Knowledge of Crowds**

Some time ago, I made a [Trip Planner Web App](https://github.com/JAlcocerT/Py_Trip_Planner), based purely on weather patterns as [described here](https://jalcocert.github.io/JAlcocerT/trip-planner-with-weather/).


But we need something more to decide where and how to go next.

{{< callout type="info" >}}
Related project [Source Code](https://gitlab.com/fossengineer1/py_vacations)
{{< /callout >}}

<!-- {{< callout type="info" >}}
https://github.com/JAlcocerT/PyVacAItions
{{< /callout >}} -->


## Py-VacAItions

The project to know [where/when to go and **IF** you can go](https://gitlab.com/fossengineer1/py_vacations)


{{< details title="First Knowledge Adquisition (with FireCrawl + openAI) 📌" closed="true" >}}

```sh
python3 firecrawl_test4.py "https://www.numbeo.com/cost-of-living/in/Warsaw" "output4"
```

**Comparing 2 cities' costs with [FireCrawl + OpenAI](https://gitlab.com/fossengineer1/py_vacations/-/blob/main/Z_Scrap_firecrawl/Z_FireCrawl_Numbeo_Compare_v6.py?ref_type=heads)

```sh
python3 Z_FireCrawl_Numbeo_Compare_v6.py "https://www.numbeo.com/cost-of-living/in/Warsaw" "https://www.numbeo.com/cost-of-living/in/Barcelona"
```
{{< /details >}}



### Weather Analytics

*  Code and documentation for the **Pirate Weather API**  - https://github.com/Pirate-Weather/pirateweather

{{< details title="Pirate Weather 📌" closed="true" >}}

* https://pirateweather.net/en/latest/API/
* <https://www.latlong.net/>

{{< /details >}}

> This is a new addition to the ones used at TripPlanner


{{< details title="Weather Patterns with MeteoStat 📌" closed="true" >}}


{{< /details >}}


{{< details title="Weather Forecasts with OpenMeteo 📌" closed="true" >}}


{{< /details >}}





{{< callout type="info" >}}
It enhances the [python trip planner - with weather](https://github.com/JAlcocerT/Py_Trip_Planner), described [here](https://jalcocert.github.io/JAlcocerT/trip-planner-with-weather/)
{{< /callout >}}


### Cost of Living Data


* https://www.numbeo.com/common/api.jsp - Max 200,000 queries per month
    * https://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=Philippines&country2=Poland&city1=Manila&city2=Warsaw&tracking=getDispatchComparison

### The Agents


### Interactivity & Maps with Streamlit

This is a really cool **new feature from Streamlit**.

---

## FAQ

### How to's about SQLite

SQLite is a very handy and portable DB to place some logs.

{{< details title="Storing in SQLite 📌" closed="true" >}}


{{< /details >}}

{{< details title="Reading SQLite 📌" closed="true" >}}


{{< /details >}}


### Using hoppscotch

### HA

<https://pirateweather.net/en/latest/ha/>



{{< callout type="info" >}}
After [Weather Planning](https://jalcocert.github.io/JAlcocerT/trip-planner-with-weather/), there is also the financial aspects of travelling. [**Source Code**](https://gitlab.com/fossengineer1/py_vacations)
{{< /callout >}}




### Scrapping and LLMs


{{< cards cols="1" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/scrap-and-chat-with-the-web/" title="Scrapping Tools" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/create-streamlit-chatgpt" title="Together with AI to summarize - Streamlit MultiChat - Project" >}}
{{< /cards >}}

<!-- {{< cards cols="2" >}}
  {{< card link="/" title="Left Card" >}}
  {{< card link="/" title="Right Card" >}}
{{< /cards >}} -->