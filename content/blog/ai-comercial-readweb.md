---
title: "Ask the Web with Streamlit"
date: 2024-09-03T23:20:21+01:00
draft: true
tags: ["Gen-AI","Python","Dev"]
summary: 'Using Streamlit with OpenAI API and FireCrawl'
url: 'scrap-and-chat-with-the-web'
---


> https://github.com/JAlcocerT/Scrap_Tools

* https://github.com/ScrapeGraphAI/Scrapegraph-ai


--- 

## Resources

### How to use Streamlit with Containers

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

### How to Customize Streamlit Apps


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