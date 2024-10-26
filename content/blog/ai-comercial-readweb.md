---
title: "Ask the Web with Streamlit and AI"
date: 2024-10-17
draft: false
tags: ["Gen-AI","Python","Dev"]
summary: 'Using Streamlit with OpenAI API and FireCrawl to Scrap the Web for Info'
url: 'scrap-and-chat-with-the-web'
---


* **Some Alternatives to Selenium and BS4**:
  * https://github.com/ScrapeGraphAI/Scrapegraph-ai
  * https://github.com/mendableai/firecrawl
  * https://github.com/unclecode/crawl4ai

But first, some recap on the old school.

{{< callout type="info" >}}
A post of what I learnt about **[Scrapping Tools](https://github.com/JAlcocerT/Scrap_Tools)**
{{< /callout >}}

## Old School Scrapping

Some time ago I was doing an interview and it was quite hard from them to see my CV.

But..if I always send pdf's, whats wrong?

It seems that there are some HR parsing systems that can interprete data.

Sometimes breaking totally the initial format.

Lesson learnt.

A CV must be cool for the human eye, and **understandable by machines**.

But first, I want to know how many offers are out there.

For sure there is some seasonality. Lets just have a daily look and see how is the market

Or even better, lets make a script to do that.

{{< callout type="info" >}}
And Applied it for [**better CV** and job search](https://gitlab.com/fossengineer1/cv-check)
{{< /callout >}}

Is it a good moment to **look for a Job?**

Just have a look to **how many offers are available now** (and remote) vs the historical ones.

{{< details title="Using bs4 and requests to Get a feel on the Job Market - Total offers vs Remote offers📌" closed="true" >}}

Within the [CV Check Project](https://gitlab.com/fossengineer1/cv-check) at the [folder `./Scrap_Pracuj`](https://gitlab.com/fossengineer1/cv-check/-/tree/main/Scrap_Pracuj?ref_type=heads)...


We are just pushing the **data to a sqlite DB**.

The data is extarcted with the known approach of beautiful soup. Where you need to **input the Web structure**.


{{< /details >}}

{{< callout type="warning" >}}
If the Web Structure Changes - Codes needs to be [re-worked, as it happened here](https://gitlab.com/fossengineer1/py_vacations/-/tree/main/Z_Scrap_bs4?ref_type=heads)
{{< /callout >}}

{{< details title="How to explore the SQLiteDB📌" closed="true" >}}

After executing the script...

```sh
./run_pracuj.sh
#/home/reisipi/dirty_repositories/cv-check/Scrap_Pracuj/run_pracuj.sh

#just with python would do the same
#python3 pracuj_v3.py
```

we will have records:

```sh
sudo apt install sqlite3
sqlite3 --version

sqlite3 ./job_offers_v3.db
#sqlite3 /home/reisipi/dirty_repositories/cv-check/Scrap_Pracuj/job_offers_v3.db

#SELECT * FROM your_table_name ORDER BY your_primary_key_column DESC LIMIT 5;

#SELECT name FROM sqlite_master WHERE type='table';
#.tables

SELECT * FROM job_offers;
SELECT * FROM job_offers ORDER BY timestamp DESC LIMIT 5;

#.quit

```
{{< /details >}}
You can make it run every night by setting **CRON task with [a script](https://gitlab.com/fossengineer1/cv-check/-/blob/main/Scrap_Pracuj/run_pracuj.sh?ref_type=heads)**.

{{< details title="Setup CRON job to execute python -> Bs4 -> SQLiteDB📌" closed="true" >}}


```sh
nano run_pracuj.sh
chmod +x /home/reisipi/dirty_repositories/cv-check/Scrap_Pracuj/run_pracuj.sh
./run_pracuj.sh

crontab -e
#0 0 * * * /path/to/your/run_pracuj.sh >> /path/to/your/logfile.log 2>&1
0 23 * * * /home/reisipi/dirty_repositories/cv-check/Scrap_Pracuj/run_pracuj.sh
crontab -l
#python3 pracuj_v3.py >> /home/reisipi/dirty_repositories/cv-check/Scrap_Pracuj/script_output.log 2>&1
```

Look if you have space, still:
```sh
df -h | awk '$2 ~ /G/ && $2+0 > 3' #if you set logs, careful with the disk space (see drives >3GB)
```

{{< /details >}}




## Scrapping with AI

So, what can we do to make the code once, and scrap *forever*?

There are few options!

### ScrapeGraph

I was testing[ ScrapeGraph with Streamlit here](https://github.com/JAlcocerT/Streamlit-MultiChat/blob/main/Streamlit_Pages/Streamlit_ScrapeGraph.py)

{{< callout type="info" >}}
[ScrapeGraph **allows for open Models**](https://fossengineer.com/scrapping-with-llms/#scrapegraph-with-ollama) and also closed LLMs to work with it.
{{< /callout >}}



### FireCrawl

FireCrawl makes it reale easy to parse Web Info.

> "Ive got the Key for Success"

{{< callout type="info" >}}
I mean, [FireCrawl needs an APi](https://www.firecrawl.dev/app/usage) to work (there is free Tier)
{{< /callout >}}

{{< cards cols="1" >}}
  {{< card link="www.firecrawl.dev" title="FireCrawl API" >}}
  {{< card link="https://platform.openai.com/api-keys" title="OpenAI API" >}}
{{< /cards >}}


{{< cards cols="2" >}}
  {{< card link="https://github.com/mendableai/firecrawl" title="FireCrawl Github" >}}
  {{< card link="https://docs.firecrawl.dev/sdks/python" title="FireCrawl Python Docs" >}}
{{< /cards >}}


{{< callout type="info" >}}
  I used it for the [DocPlanner Migration](https://jalcocert.github.io/JAlcocerT/docplanner-web-migration/) - With [this repo](https://github.com/JAlcocerT/Scrap_Tools/tree/main/FireCrawl/Z_UseCase1-Nevin) and for [WPMigration](https://gitlab.com/fossengineer1/py_vacations/-/tree/main/Z_Scrap_firecrawl?ref_type=heads#other---jmodels-sample)
{{< /callout >}}

* Sample FireCrawl to get [Numbeo Data and pushes it to Sqlite](https://gitlab.com/fossengineer1/py_vacations/-/blob/main/Z_Scrap_firecrawl/firecrawl_testv5.py?ref_type=heads) using [openAI API](https://github.com/JAlcocerT/Streamlit-MultiChat/blob/main/Z_Tests/OpenAI/openai_neumkt.py)

### Crawl4AI

- **Crawl4AI** is an open-source Python library designed to simplify web crawling and data extraction, particularly for large language models (LLMs) and AI applications. It offers a user-friendly interface and a range of features, including:
  
  - **Ease of use:** Crawl4AI is designed to be easy to use, even for those new to web scraping.
  
  - **Fast performance:** It is built for speed, outperforming many paid services.
  
  - **LLM-friendly output:** It produces output formats that are easy for LLMs to process, such as JSON and cleaned HTML.
  
  - **Asynchronous support:** It can crawl multiple URLs simultaneously, making it efficient for large-scale projects.
  
  - **Media extraction:** It can extract and return all media tags, including images, audio, and video.
  
- Crawl4AI is available as a Python package and as a Docker image. It is a powerful tool for anyone who needs to extract data from the web for AI applications.

---

## WebScrap with Streamlit

Time to create something.

### WebScrap Features

1. Get summarized web content
2. Get Youtube Summaries - Enhanced [**PhiData** project](https://jalcocert.github.io/JAlcocerT/summarize-yt-videos/) & [my fork](https://github.com/JAlcocerT/phidata)
3. Get web search summarized 



### Deploying WebScrap

Cloudflare Tunnels + Cloudflare Access Control

## Conclusions

{{< callout type="info" >}}
Now you can try the app at:
{{< /callout >}}

**What can we do now?**

### Tweaking a CV as per Offer Info

Its not lying.

Its having a base CV and some instructions for the AI to tweak few details so that
it resonates more with an offer.

#### Exploring Job Offers with AI

### Summarize Github Readmes

Summarize Github Readme (or actually any web).

And...create [posts scheletons based on that info](https://github.com/JAlcocerT/Scrap_Tools/tree/main/FireCrawl/Z_Scrap_GHRepo)


--- 

## Resources

### Related Projects

* [Project YT2Doc](https://github.com/shun-liang/yt2doc) - YouTube, Apple Podcast (and more) to readable Markdown.

* [Project YT2MD](https://github.com/bryanfriedman/yt2md) - Turn a YouTube video or playlist into Markdown file(s) to add to SSG site

 

### Streamlit Related Stuff

#### How to use Streamlit with Containers

{{< details title="Docker-Compose for Streamlit 📌" closed="true" >}}

* https://github.com/JAlcocerT/Streamlit-MultiChat/tree/main/Z_DeployMe

```yml
version: '3'

services:
  streamlit-openaichatbot:
    image: youraiimage ##docker build -t youraiimage . OR WITH -> podman build -t youraiimage .
    container_name: youraiimage_bot
    volumes:
      - ai_aichatbot:/app
    working_dir: /app  # Set the working directory to /app
    command: /bin/sh -c "streamlit run streamlit_app.py"    
    #command: tail -f /dev/null #debug
    ports:
      - "8507:8501"    

volumes:
  ai_aichatbot:
```

{{< /details >}}

#### How to Customize Streamlit Apps

{{< details title="Remove the default Streamlit Sections 📌" closed="true" >}}

* https://gist.github.com/Sven-Bo/1ad6efa04afc2e957717e5a5fc4320b8

```py
hide_st_style = """
            <style>
            #MainMenu {visibility: hidden;}
            footer {visibility: hidden;}
            header {visibility: hidden;}
            </style>
            """
st.markdown(hide_st_style, unsafe_allow_html=True)
```

{{< /details >}}

{{< details title="How to add Simple Auth to Streamlit -  📌" closed="true" >}}

https://github.com/naashonomics/pandas_templates/blob/master/login.py

```py

```

> https://github.com/JAlcocerT/Streamlit-MultiChat/blob/main/Streamlit_Pages/Auth_functions.py

{{< /details >}}


{{< details title="How to customize Streamlit Meta Description📌" closed="true" >}}

* https://discuss.streamlit.io/t/adding-a-meta-description-to-your-streamlit-app/17847/5


{{< /details >}}