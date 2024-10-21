---
title: "Chat with LLama3 with Streamlit (and Ollama)"
date: 2024-06-17T23:20:21+01:00
draft: false
cover:
    image: "https://socialify.git.ci/AIDevBytes/Streamlit-Ollama-Chatbot/image?description=1&font=Inter&language=1&name=1&stargazers=1&theme=Auto"
    alt: "Streamlit Chat Ollama" # alt text
    caption: "SelfHosting a Streamlit Chat with Ollama." # display caption under cover
tags: ["Gen-AI","Python","Dev"]
description: 'Streamlit Chat with Ollama'
summary: 'Communicate with Llama3 with an user friendly UI. SelfHostable Streamlit App to Chat with Ollama'
url: 'streamlit-ollama-chat'
---

Sometime ago I was really happy to discover {{< newtab url="https://fossengineer.com/ollama-web-ui/" text="the Ollama Project" >}}, that allows us to use open LLM's in our laptops.

If you are looking for a quick and easy Ollama UI, you should have a look to the Open Web UI project (ex ollama web UI)

> Because you already know about [Ollama](https://github.com/ollama/ollama), right?

But, if you want to go one step further and get an understanding on how this work in Python, [keep reading](#the-streamlit-ollama-project) and you will learn how to create your Streamlit LLM Chat integrated with Ollama, that you can SelfHost.

**Setup Ollama in 5 minutes as per**
<!-- 
https://www.youtube.com/watch?v=vukAQPCv7Tw -->

{{< youtube "vukAQPCv7Tw" >}}


<!-- https://github.com/AIDevBytes/Streamlit-Ollama-Chatbot -->

<!-- https://github.com/JAlcocerT/Streamlit-Ollama-Chatbot -->

### The Streamlit Ollama Project

I have covered some very cool Gen AI projects with LLMs and streamlit, but those LLMs were using some 3rd party provider with closed sourced models.

* There are ther Projects with Gen AI using Streamlit, but 3rd Party APIs 👇
  * {{< newtab url="https://fossengineer.com/create-chatgpt-clone-streamlit/" text="Streamlit ChatGPT Clone" >}}
  * {{< newtab url="https://fossengineer.com/summarize-yt-videos/" text="Groq API to summarize Videos" >}}
  * {{< newtab url="https://fossengineer.com/how-to-chat-with-pdfs/" text="Chat with PDFs with a Streamlit RAG and OpenAI API" >}}

> Why dont we make it fully open?


- Here it comes the Streamlit-Ollama-Chatbot - Fully available on **GitHub** ✅
  * {{< newtab url="https://github.com/AIDevBytes/Streamlit-Ollama-Chatbot" text="Project Source Code at GitHub" >}}
  * {{< newtab url="https://github.com/AIDevBytes/Streamlit-Ollama-Chatbot?tab=MIT-1-ov-file#readme" text="License MIT" >}} ❤️

You can try the project very quick by following these steps:

1. [Install Python](/guide-python/#installing-python-) 🐍
2. Install an [IDE (optional)](#foss-ides-for-python)
3. Clone the repository 
4. Get [Ollama Ready](/selfhosting-llms-ollama/)
5. Download LLama3 with Ollama - Check other models at [Ollama official page](https://ollama.com/library?sort=popular). As simple as:

```sh
ollama pull llama3:8b
#ollama list

ollama run llama3:8b #this will make the llama3 model ready for our streamlit App
```
6. And [install Python dependencies](/python-dependencies-for-ai/): for a quick spin, we can use [Python Virtual environments](/python-dependencies-for-ai/#venvs) to make sure it works

```sh
git clone https://github.com/JAlcocerT/Streamlit-Ollama-Chatbot

python -m venv streamllama #create it

streamllama\Scripts\activate #activate venv (windows)
source streamllama/bin/activate #(linux)

#deactivate #when you are done
```

{{< dropdown title="Activate the venv and **install packages** (that will affect only that venv) 👇" closed="false" >}}

```sh
pip install -r requirements.txt #all at once

#pip list
#pip show streamlit #check the installed version
```

{{< /dropdown >}}

Now, just sping the Python Streamlit App with:

```sh
streamlit run ollama_chatbot.py
```

If you want a more robust implementation for production, definitely have a look to the [Streamlit+Ollama Docker Container](#streamlit-ollama-chat-container) Setup


## Deploying Streamlit Ollama Chat

You can [Build your own Streamlit Ollama Docker Image](#how-to-use-github-actions-to-build-my-streamlit-docker-image), or use the one of the project created by Github Actions CI/CD

There is just one pre-requisite to deploy this Streamlit Chat Bot for Free

{{< dropdown_docker title="Really, Just Get Docker 🐋👇" closed="true" >}}


### Streamlit Ollama Chat Container

{{< dropdown title="To Build your own Streamlit Ollama Chat image... ⏬" closed="true" >}}

Feel free to use Docker or [Podman as containerization platform](/docker-alternatives-for-data-analytics/).

```sh
docker build --no-cache -t streamllama . > build_log.txt 2>&1
#podman build --no-cache -t streamllama . > build_log.txt 2>&1

#docker run -p 8501:8501 chat_multiple_pdf:latest
#docker exec -it chat_multiple_pdf /bin/bash

docker run -p 8501:8501 -v ai_streamlit_ollama:/app --name streamlit_ollama streamllama:latest /bin/sh -c "cd /app && streamlit run ollama_chatbot.py"
#podman run -p .....
```

You can make this build manually, [use Github Actions](/docker-github-actions-cicd/), or your can even [combine Gitea](/selfhosting-Gitea-docker) and [Jenkins](/selfhosting-jenkins-ci-cd) to do it for you.

{{< /dropdown >}}

If you are not [confortable yet with Docker & containers](https://fossengineer.com/docker-container-registries/), you can these tools to manage them with a UI:
* [Portainer](https://fossengineer.com/selfhosting-portainer-docker/)
* [Dockge](https://fossengineer.com/selfhosting-dockge/)

### SelfHosting the Streamlit Ollama Chat

Use the following Docker Compose Stack the spin the streamlit chat UI.

You can use the same docker compose to deploy the second required service (ollama), if you want to use it as well via container:

```yml
version: '3'

services:
  streamlit-ollama-chat:
    image: streamllama
    container_name: streamlit_ollama
    volumes:
      - ai_streamlit_ollama:/app
    working_dir: /app
    command: /bin/sh -c "streamlit run ollama_chatbot.py"
    ports:
      - "8501:8501"

  ollama:
    image: ollama/ollama
    container_name: ollama
    ports:
      - "11434:11434"
    volumes:
      - ollama_data:/root/.ollama
    command: /bin/sh -c "ollama run llama3:7b"

volumes:
  ai_streamlit_ollama:
  ollama_data:
```

> To Expose it Safely to the internet, you can use the configuration provided together with [Cloudflare Tunnels Docker Container or NGINX](#how-to-use-streamlit-with-https)


---

## Conclusions

### FAQ

#### How to use Github Actions to Build my Streamlit Docker Image

You need to setup the following configuration file - https://github.com/JAlcocerT/Streamlit-Ollama-Chatbot/blob/main/.github/workflows/streamlit_GH_Actions.yml

https://fossengineer.com/docker-github-actions-cicd/

> Remember that you will need to link the package to the repository and to make the package public https://github.com/JAlcocerT/Streamlit-Ollama-Chatbot/pkgs/container/streamlit-ollama-chatbot

#### How to use streamlit with HTTPs

Feel free to use [Cloudflare Tunnels](/selfhosting-cloudflared-tunnel-docker/) or a Proxy like [NGINX](/selfhosting-nginx-proxy-manager-docker/), Caddy, ...


#### F/OSS IDE's for Python

* VSCodium - {{< newtab url="https://github.com/VSCodium/vscodium" text="VS Code without MS branding/telemetry/licensing" >}} - MIT License ❤️
  * You can support your development with Gen AI thanks to **F/OSS extensions**
    * [Tabby](/selfhosting-Tabby-coding-assistant/) - Apache License ✅
    * Continue Dev - Apache License ✅