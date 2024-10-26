---
title: "Ask the Web with Streamlit and AI"
date: 2024-10-17
draft: false
tags: ["Gen-AI","Python","Dev"]
summary: 'Using Streamlit with OpenAI API and FireCrawl to Scrap the Web for Info'
url: 'scrap-and-chat-with-the-web'
---

## Old School Scrapping

* Some Alternatives to Selenium and BS4:
  * https://github.com/ScrapeGraphAI/Scrapegraph-ai
  * https://github.com/mendableai/firecrawl
  * https://github.com/unclecode/crawl4ai

{{< callout type="info" >}}
  A post of what I learnt about **[Scrapping Tools](https://github.com/JAlcocerT/Scrap_Tools)**
{{< /callout >}}


Some time ago I was doing an interview and it was quite hard from them to see my CV.

But..if I always send pdf's, whats wrong?

It seems that there are some HR parsing systems that can interprete data.

Sometimes breaking totally the initial format.

Lesson learnt.

A CV must be cool for the human eye, and understandable for the machines.


{{< callout type="info" >}}
And Applied it for [**better CV** and job search](https://gitlab.com/fossengineer1/cv-check)
{{< /callout >}}

Is it a good moment to **look for a Job?**

Just have a look to **how many offers are available now** (and remote) vs the historical ones.

{{< details title="Using bs4 and requests to Get a feel on the Job Market - Total offers vs Remote offers📌" closed="true" >}}

Within the [CV Check Project](https://gitlab.com/fossengineer1/cv-check) at the [folder `./Scrap_Pracuj`](https://gitlab.com/fossengineer1/cv-check/-/tree/main/Scrap_Pracuj?ref_type=heads)...


We are just pushing the data to a sqlite DB.

The data is extarcted with the known approach of beautiful soup. Where you need to **input the Web structure**.


{{< /details >}}

{{< callout type="warning" >}}
If the Web Structure Changes - Codes needs to be [re-worked, as it happened here](https://gitlab.com/fossengineer1/py_vacations/-/tree/main/Z_Scrap_bs4?ref_type=heads)
{{< /callout >}}

{{< details title="How to explore the SQLiteDB📌" closed="true" >}}

```sh
sudo apt install sqlite3
sqlite3 --version

sqlite3 ./job_offers_v3.db

#SELECT * FROM your_table_name ORDER BY your_primary_key_column DESC LIMIT 5;

#SELECT name FROM sqlite_master WHERE type='table';
#.tables

SELECT * FROM job_offers;
SELECT * FROM job_offers ORDER BY timestamp DESC LIMIT 5;

#.quit

```


{{< /details >}}

You can make it run every night by setting **CRON task with [a script](https://gitlab.com/fossengineer1/cv-check/-/blob/main/Scrap_Pracuj/run_pracuj.sh?ref_type=heads)**.

```sh
df -h | awk '$2 ~ /G/ && $2+0 > 3' #if you set logs, careful with the disk space (see drives >3GB)
```

## Scrapping with AI

So, what can we do to make the code once, and scrap *forever*?

There are few options!

### ScrapeGraph

[ScrapeGraph allows for open](https://fossengineer.com/scrapping-with-llms/#scrapegraph-with-ollama) and also closed LLMs to work with it.

* [Streamlit with ScrapeGraph](https://github.com/JAlcocerT/Streamlit-MultiChat/blob/main/Streamlit_Pages/Streamlit_ScrapeGraph.py)



### FireCrawl

> "Ive got the Key for Success"

{{< cards cols="1" >}}
  {{< card link="/www.firecrawl.dev" title="FireCrawl API" >}}
  {{< card link="https://platform.openai.com/api-keys" title="OpenAI API" >}}
{{< /cards >}}


{{< cards cols="2" >}}
  {{< card link="https://github.com/mendableai/firecrawl" title="FireCrawl Github" >}}
  {{< card link="https://docs.firecrawl.dev/sdks/python" title="FireCrawl Python Docs" >}}
{{< /cards >}}


{{< callout type="info" >}}
  I used it for the [DocPlanner Migration](https://jalcocert.github.io/JAlcocerT/docplanner-web-migration/) - With [this repo](https://github.com/JAlcocerT/Scrap_Tools/tree/main/FireCrawl/Z_UseCase1-Nevin) and for 
{{< /callout >}}

---

## Streamlit WebScrap

Time to create something.

### Deploying

Cloudflare Tunnels + Cloudflare Access Control

### Conclusions

{{< callout type="info" >}}
  Now you can try the app at:
{{< /callout >}}


--- 

## Resources

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