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

Lesson learnt. A CV must be cool for the human eye, and understandable for the machines.


{{< callout type="info" >}}
And Applied it for [**better CV** and job search](https://gitlab.com/fossengineer1/cv-check)
{{< /callout >}}

### ScrapeGraph

[ScrapeGraph allows for open](https://fossengineer.com/scrapping-with-llms/#scrapegraph-with-ollama) and also closed LLMs to work with it.

* [Streamlit with ScrapeGraph](https://github.com/JAlcocerT/Streamlit-MultiChat/blob/main/Streamlit_Pages/Streamlit_ScrapeGraph.py)



### FireCrawl

{{< callout type="info" >}}
  I used it for the [DocPlanner Migration](https://jalcocert.github.io/JAlcocerT/docplanner-web-migration/) and used [this repo](https://github.com/JAlcocerT/Scrap_Tools/tree/main/FireCrawl/Z_UseCase1-Nevin)
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