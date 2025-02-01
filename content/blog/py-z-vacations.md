---
title: "[AI] Vacation Planning - Recommendations, Costs, Weather"
date: 2025-03-23
draft: false
tags: ["Dev","AI"]  
description: "Python App to explore vacation destination. LLMs ❤️ Data. While exploring Agents."
summary: 'Where to go. When to go. Can I go?' 
url: 'vacation-planner-python'
isPinned: false
---


Some time ago, I made a [Trip Planner Web App](https://github.com/JAlcocerT/Py_Trip_Planner), based purely on weather patterns as [described here](https://jalcocert.github.io/JAlcocerT/trip-planner-with-weather/).

If you are tired of this:

![Karting Adventure](/blog_img/memes/oldnewjob.jpg)

Why not taking a break in between?

{{< details title="[How to] Spin the Python Trip Planner! 📌" closed="true" >}}

* Follow the [repo instructions](https://github.com/JAlcocerT/Py_Trip_Planner/tree/main/Deploy)

```sh
git clone https://github.com/JAlcocerT/Py_Trip_Planner && cd ./Py_Trip_Planner

#docker build -t trip_planner .
DOCKER_BUILDKIT=1 docker build --no-cache --progress=plain -t trip_planner .

docker run -d \
  --name tripplanner \
  -p 8051:8050 \
  --restart unless-stopped \
  trip_planner #ghcr.io/jalcocert/py_trip_planner #fossengineer/trip_planner
```

Or...Use the following **docker compose**:

```yml
version: "2"
services:
  tripplanner:
    image: trip_planner #ghcr.io/jalcocert/py_trip_planner #fossengineer/trip_planner
    container_name: tripplanner
    ports:
      - 8051:8050
    restart: unless-stopped
```

{{< /details >}}

But we need something more to decide **where and how to go next**.

{{< callout type="info" >}}
Related project [**Source Code**](https://gitlab.com/fossengineer1/py_vacations) - **PyVacAItions** 💻
{{< /callout >}}

<!-- {{< callout type="info" >}}
https://github.com/JAlcocerT/PyVacAItions
{{< /callout >}} -->

**THE USE CASE** - Plan a Trip To MRK

<!-- 
* Hotel 
  * Avenue Houmane El Fatouaki, 30 APT N°1, Marrakech, Medina, 40000 Marrakesh, Morocco
  * https://maps.app.goo.gl/PuPUZhHAykdFYrVa6
* Marrakesh Menara Airport - RAK
* To see in MRK
  * https://en.wikipedia.org/wiki/Saadian_Tombs - 700m from Hotel
  * https://en.wikipedia.org/wiki/Bahia_Palace - 600m
  * Madrasa Ben Youssef - 1.5KM
  * El Badi Palace - 1.6km
  * https://el-fenn.com/majorelle-gardens/ - 3km
* City Break
  * Ouzoud Waterfalls - 150KM - https://www.viator.com/tours/Marrakech/Ouzoud-Waterfalls-Full-Day-Trip-from-Marrakech/d5408-7674P21
  * Essaouira Athlantic Coast - 250km
   
To get to Essaouira, the coastal city from Marrakech, you have a few options:

1. Bus:

CTM: This is a reliable and affordable option. There's one departure per day, taking about 3 hours.
Supratours: Offers multiple daily departures, also taking around 3 hours.
2. Taxi:

A faster option, taking about 2.5 hours. However, it's more expensive.
3. Rental Car:

Gives you the most flexibility to explore the scenic route and stop at your own pace.
Time Zone:

Morocco is on Western European Time (WET), which is the same as CET.

Currency:

The currency in Morocco is the Moroccan Dirham (MAD). As of November 2023, the exchange rate is approximately 10 Moroccan Dirham to 1 US Dollar. However, exchange rates fluctuate, so it's best to check the current rate before your trip.

 -->


## Py-VacAItions

The project to know [where/when to go and **IF** you can go](https://gitlab.com/fossengineer1/py_vacations)


{{< details title="PyVacations Project Structure 📌" closed="true" >}}


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


{{< /details >}}

### Numbeo Data

Its all about **Knowledge of Crowds**


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


### Interactivity & Maps with Streamlit

This is a really cool **new feature from Streamlit**.



### The Agents

Its been a while since I got to know about [**CrewAI**](https://fossengineer.com/ai-agents-crewai/)

Not its time to do something with it


#### Adding memory to the AI to know your preferences

* https://docs.mem0.ai/examples/personal-travel-assistant

---

## FAQ

### How to's about SQLite

SQLite is a very handy and portable DB to place some logs.

{{< details title="Storing in SQLite 📌" closed="true" >}}


{{< /details >}}

{{< details title="Reading SQLite 📌" closed="true" >}}


{{< /details >}}


And now, there is even a fork of it

{{< youtube "PGpL5hYpY1o" >}}

{{< details title="More about SQLite Fork - libSQL [Optimized for AI] 📌" closed="true" >}}

SQLite is the most deployed database in history, with over **1 trillion active users**. It was developed 25 years ago by **Richard Hipp** for a **US Navy damage control system**. This lightweight database is contained in a single **600 KB file**, requires **no server process**, and is an essential part of many modern applications.

Although **SQLite** is in the **public domain**, its development is managed by just **three people**, with **no outside contributions** allowed. Despite these limitations, SQLite has become ubiquitous due to its simplicity and reliability.

In **October 2022**, a new fork called **libSQL** was introduced, with a focus on **community-controlled development**. It retains **SQL-like compatibility** with SQLite, but introduces new features to address some of SQLite’s limitations.

Key features of **libSQL**:
- **One database per user**: This approach could **improve performance**, **reduce latency**, and **enhance security**.
- **Server mode**: Allows access to the database via **HTTP**.
- **Native replication system**: Enables embedded **replica features**.
- **Encryption at rest**: Adds an extra layer of **security** for data storage.
- **Web Assembly triggers**: Lets you run **code when specific events** occur in the database.
- **Shared schema across multiple databases**: Makes it easier to manage databases together.
- **Vector queries**: Optimized for **AI applications**, enabling complex data operations.

Benefits and Challenges of libSQL:
- **Performance**: The one-database-per-user model can significantly **boost performance** and reduce **latency**, but it may create challenges with **data retrieval** and **combining data** across different locations.
- **Security**: Enhanced **security** through encryption and the isolated nature of individual user databases.
- However, retrieving and combining data from different databases may **not be practical** in all cases, especially when data is spread across geographically distant locations.

In conclusion, **libSQL** brings significant improvements over **SQLite** by offering a more **flexible, community-driven approach** to database management. With its new features and robust capabilities, it has the potential to **revolutionize** how we build and manage databases, especially for applications requiring high **performance**, **security**, and **AI integration**.

SQLite may be **underappreciated**, but with libSQL, it becomes even more powerful and adaptable to modern needs.


{{< /details >}}



{{< details title="Reading SQLite DBs 📌" closed="true" >}}

You can explore a SQLite via a script, like we did [during the Scrapping Post](https://jalcocert.github.io/JAlcocerT/scrap-and-chat-with-the-web/#old-school-scrapping)

There is a cool project for this - https://github.com/sqlitebrowser/sqlitebrowser

**sqlitebrowser** - DB Browser for SQLite (DB4S) is an open-source tool for creating, designing, and editing SQLite database files.

It simplifies database management for users and developers, eliminating the need for complex SQL commands.

**Key Features:**

- Visual interface resembling a spreadsheet.

- Allows creation and modification of database files.

- Supports searching, editing, and deleting database records.

- Facilitates importing/exporting of data in various formats (CSV, SQL).

- Offers SQL query capabilities with result inspection.

- Provides graphical plotting of data.

**Key Information:**

- Continuous and nightly builds are available for download.

- Compatible with Windows, macOS, Linux, and FreeBSD.

- Installation options include package managers like Chocolatey, Homebrew, and Snap.

- The project has a rich history of community contributions and updates.

**Conclusions:**

DB4S is a valuable tool for users needing an intuitive interface for SQLite database management. 

**Similar Projects:**

- DBeaver: A universal database tool for developers.

- HeidiSQL: A lightweight SQL client for MySQL, SQL Server, and PostgreSQL.


{{< /details >}}

### Interesting software for Vacations

Interesting maps for offline mode:

* https://organicmaps.app/news/
* Maps.me
  * 
  * 

```sh
flatpak install flathub app.organicmaps.desktop
```

* https://github.com/joaovitoriasilva/endurain
* https://github.com/johanohly/AirTrail

> GPL3.0 | A modern, open-source personal flight tracking system

See also the Jetlog project:

* https://github.com/seanmorley15/AdventureLog


Share media with your friends (airdrop for all devices):
* https://github.com/seemoo-lab/opendrop
* https://github.com/SnapDrop/snapdrop - Game changer!

> GPL 3.0 | A Progressive Web App for local file sharing

* VPN
  * Wireguird with `.conf` file you have vpn setup on ubuntu
  * and maybe a [travel router](https://jalcocert.github.io/JAlcocerT/travel-router-gl-mt3000-review)


* https://github.com/rohitkumbhar/surmai

> MIT | Surmai is a personal/family **travel organizer**



### Using hoppscotch

### HomeAssistant

With HA we also can...

<https://pirateweather.net/en/latest/ha/>



{{< callout type="info" >}}
After [Weather Planning](https://jalcocert.github.io/JAlcocerT/trip-planner-with-weather/), there is also the financial aspects of travelling. [**Source Code**](https://gitlab.com/fossengineer1/py_vacations)
{{< /callout >}}




### Scrapping and LLMs

Get Google Flights information with python.


{{< cards cols="1" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/scrap-and-chat-with-the-web/" title="Scrapping Tools" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/create-streamlit-chatgpt" title="Together with AI to summarize - Streamlit MultiChat - Project" >}}
{{< /cards >}}

<!-- {{< cards cols="2" >}}
  {{< card link="/" title="Left Card" >}}
  {{< card link="/" title="Right Card" >}}
{{< /cards >}} -->