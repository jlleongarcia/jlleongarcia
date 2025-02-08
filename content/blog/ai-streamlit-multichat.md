---
title: "Testing new LLMs with Streamlit MultiChat"
date: 2025-02-28T23:20:21+01:00
draft: false
cover:
  image: "https://socialify.git.ci/jalcocert/streamlit-multichat/image?description=1&font=Inter&language=1&name=1&stargazers=1&theme=Auto"
  alt: "ChatGPT Clone" # alt text
  caption: "Improving a ChatGPT Clone with Streamlit." # display caption under cover
tags: ["Gen-AI","Python","Dev"]
description: 'Enhancing LLM support for Streamlit-MultiChat: Grok, DeepSeep and more.'
summary: 'Avoid LLM lock-in and the recurring subscription bills. Simply use APIs.'
url: 'streamlit-multichat'
---

{{< callout type="info" >}}
See [**Streamlit-Multichat** Source Code](https://github.com/JAlcocerT/Streamlit-MultiChat) 💻
{{< /callout >}}

{{< cards cols="2" >}}
  {{< card link="https://jalcocert.github.io/Streamlit-MultiChat/1" title="About Streamlit MultiChat" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/create-streamlit-chatgpt" title="Previous Blog Post" >}}
{{< /cards >}}

## OpenAI

They have released recently **o3-mini** model.

GPT-4o-mini has been my go to in terms of value per money.

But we have now **o1 (mini also) and o3-mini** with higher context window (200K)

* https://openai.com/api/
* https://platform.openai.com/docs/models/#current-model-aliases


```sh
pip install openai==1.61.0
```

See the **latest openAI models**:

```sh
import os
from dotenv import load_dotenv
from openai import OpenAI  # pip install openai>0.28

# Load environment variables from the .env file
load_dotenv()

client = OpenAI()
models = client.models.list()
for model in models:
    print(model.id)
```


## Grok

{{< cards cols="1" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/how-to-use-grok-api" title="Grok API Blog Post" >}}
{{< /cards >}}

## DeepSeek via Ollama


## Conclusions

Companions for this multichat.

{{< cards >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/R-Stocks//" title="Youtube Summarizer" image="/blog_img/GenAI/yt-summaries/yt-summaries-groq.png" subtitle="With Groq API" >}}
  {{< card link="https://github.com/JAlcocerT/RStocks" title="AIssistant" image="/blog_img/apps/gh-jalcocert.svg" subtitle="Leveraging LLMs for several tasks." >}}
{{< /cards >}}

![Groq Youtube Summaries](/blog_img/GenAI/yt-summaries/yt-summaries-groq.png)


### AIssistant

{{< cards cols="2" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/ai-useful-yet-simple/" title="AIssistant blog post" >}}
  {{< card link="https://github.com/JAlcocerT/Streamlit-AIssistant" title="Aissistant 💻 code" >}}  
{{< /cards >}}

#### Read the Web!

https://jalcocert.github.io/JAlcocerT/scrap-and-chat-with-the-web/


### YT Summarizer

{{< cards cols="2" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/summarize-yt-videos" title="Groq Youtube Summarizer" >}}
  {{< card link="https://github.com/JAlcocerT/phidata/" title="My YT Summarizer 💻 - PhiData Fork with container created" >}}  
{{< /cards >}}

* https://console.groq.com/keys

```yml
version: '3.8'

services:
  phidata_service:
    image: ghcr.io/jalcocert/phidata:yt-groq #phidata_yt_groq #ghcr.io/jalcocert/phidata:yt-groq
    container_name: phidata_yt_groq
    ports:
      - "8501:8501"    
    environment:
      - GROQ_API_KEY=gsk_your_api_key_here #your_api_key_here 😝 
    command: streamlit run cookbook/llms/groq/video_summary/app.py 
    #command: tail -f /dev/null # Keep the container running
#     networks:
#       - cloudflare_tunnel
#       - nginx_default
            
# networks:
#   cloudflare_tunnel:
#     external: true
#   nginx_default:
#     external: true
```