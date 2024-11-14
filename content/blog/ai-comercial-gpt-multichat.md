---
title: "Chat with different models with Streamlit"
date: 2024-06-20T23:20:21+01:00
draft: false
cover:
  image: "https://socialify.git.ci/dataprofessor/openai-chatbot/image?description=1&font=Inter&language=1&name=1&stargazers=1&theme=Auto"
  alt: "ChatGPT Clone" # alt text
  caption: "Build a ChatGPT Clone with Streamlit." # display caption under cover
tags: ["Gen-AI","Python","Dev"]
description: 'ChatGPT Clone with Streamlit, but supporting multiple LLMs. Streamlit-MultiChat'
summary: 'Building a ChatGPT4 Clone with Streamlit. Use GPT4 and GPT-4o through their APIs and avoid the recurring monthly subscription bill for ChatGPT.'
url: 'create-streamlit-chatgpt'
---

<!-- * Using chatgpt with your own data: langchain + OPENAI API
https://www.youtube.com/watch?v=9AXP7tCI9PI -->

<!-- 
* https://github.com/JAlcocerT/openai-chatbot
* https://platform.openai.com/api-keys

* https://platform.openai.com/docs/models/
* https://platform.openai.com/docs/models/gpt-4o -->


## A MultiChat with Streamlit

WIth this project, we will have a **[single Python Streamlit UI](#the-streamlit-multichat-project)** to Interact with:

<!-- * https://github.com/siddhardhan23/gemini-pro-streamlit-chatbot
  * Might be sensitive to your location - [check your IP with](/transmission-with-vpn-torrent/#how-to-check-your-container-ip) -->
* Streamlit [OpenAI Chat](#streamlit-chat-with-openai)
* Streamlit [Anthropic Chat](#streamlit-chat-with-anthropic)
* Streamlit [Groq API](#streamlit-chat-with-groq)
* Streamlit running local [LLMs with Ollama](#streamlit-chat-with-ollama)

If you want, you can try these projects, first:

1. [Install Python](/guide-python/#installing-python-) 🐍
2. Clone the repository
3. And [install Python dependencies](/guide-python/#how-to-install-python-dependencies)
* We will be using venv first and later create a Docker [Container version with GH Ci/CD](https://github.com/JAlcocerT/Streamlit-MultiChat/pkgs/container/streamlit-multichat) for SelfHosting the GenAI App. 


{{< callout type="info" >}}
See [**Streamlit-Multichat** Source Code](https://github.com/JAlcocerT/Streamlit-MultiChat) 💻 and the [SliDev PPT about the App](https://jalcocert.github.io/Streamlit-MultiChat/1)
{{< /callout >}}

Lets have a look to **the projects that have made this possible**.

### Streamlit Chat with OpenAI

I first had a look to this existing project.

{{< callout type="info" >}}
- The project is available on **GitHub** ✅
  * {{< newtab url="https://github.com/dataprofessor/openai-chatbot" text="Project Source Code at GitHub" >}}. Credits to DataProfessor.
{{< /callout >}}

- You will need an API key from OpenAI to use the project ❎
  * {{< newtab url="https://platform.openai.com/api-keys" text="OpenAI API Keys" >}}

- Documentation for the models used can be found here:
  * {{< newtab url="https://platform.openai.com/docs/models/" text="OpenAI Models Documentation" >}}
  * {{< newtab url="https://platform.openai.com/docs/models/gpt-4" text="GPT-4 Documentation" >}}
  * {{< newtab url="https://platform.openai.com/docs/models/gpt-4o" text="GPT-4o Documentation" >}}


```sh
git clone https://github.com/JAlcocerT/openai-chatbot

python -m venv openaichatbot #create it

openaichatbot\Scripts\activate #activate venv (windows)
source openaichatbot/bin/activate #(linux)

#deactivate #when you are done
```

Once active, you can just **install the Python packages** as usual and that will affect only that **venv**:

```sh
pip install -r requirements.txt #all at once

#pip list
#pip show streamlit #check the installed version
```

```sh
streamlit==1.26.0 #https://pypi.org/project/streamlit/#history
openai==0.28.0 #https://pypi.org/project/openai/#history
```

Now, to create the Docker Image:

{{< dropdown_docker title="Really, Just Get Docker 🐋👇" closed="true" >}}

```Dockerfile
FROM python:3.11

# Install git
RUN apt-get update && apt-get install -y git

# Set up the working directory
#WORKDIR /app

# Clone the repository
RUN git clone https://github.com/JAlcocerT/openai-chatbot

WORKDIR /openai-chatbot

# Install Python requirements
RUN pip install -r /phidata/cookbook/llms/groq/video_summary/requirements.txt

#RUN sed -i 's/numpy==1\.26\.4/numpy==1.24.4/; s/pandas==2\.2\.2/pandas==2.0.2/' requirements.txt

# Set the entrypoint to a bash shell
CMD ["/bin/bash"]
```


```sh
export DOCKER_BUILDKIT=1
docker build --no-cache -t openaichatbot . #> build_log.txt 2>&1
```

Or if you prefer, [with Podman](/docker-alternatives-for-data-analytics/):

```sh
podman build -t openaichatbot .
#podman run -d -p 8501:8501 openaichatbot
```

```sh
#docker run -p 8501:8501 openaichatbot:latest
docker exec -it openaichatbot /bin/bash

#sudo docker run -it -p 8502:8501 openaichatbot:latest /bin/bash
```

#### Run the Multichat App

With Portainer and the **docker-compose stack**:

```yml
version: '3'

services:
  streamlit-openaichatbot:
    image: openaichatbot
    container_name: openaichatbot
    volumes:
      - ai_openaichatbot:/app
    working_dir: /app  # Set the working directory to /app
    command: /bin/sh -c "streamlit run streamlit_app.py"    
    #command: tail -f /dev/null #streamlit run appv2.py # tail -f /dev/null
    ports:
      - "8507:8501"    

volumes:
  ai_openaichatbot:
```

### Streamlit Chat with Groq

* https://github.com/tonykipkemboi/groq_streamlit_demo -> Groq + Streamlit Chat

### Streamlit Chat with Anthropic

* https://github.com/TirendazAcademy/Streamlit-Tutorials/blob/main/Blog-Generator-App-with-Claude-API/app.py

### Streamlit Chat with Ollama

* https://github.com/AIDevBytes/Streamlit-Ollama-Chatbot

## The Streamlit MultiChat Project

{{< callout type="info" >}}
The project's magic is publically available on **[GitHub](https://github.com/JAlcocerT/Streamlit-MultiChat)** ✅
{{< /callout >}}
 

### SelfHosting Streamlit MultiChat

{{< callout type="info" >}}
Build or use the [CICD Generated Container Image](https://fossengineer.com/docker-github-actions-cicd/)
{{< /callout >}}


{{< details title="Build & Deploy Streamlit-MultiChat 📌" closed="true" >}}

**Build** the container image:

```sh
podman build -t streamlit-multichat .
```

{{< callout type="info" >}}
You could use the [GHCR multi-architecture container Image](https://github.com/JAlcocerT/Streamlit-MultiChat/pkgs/container/streamlit-multichat). Generated with [this Workflow](https://github.com/JAlcocerT/Streamlit-MultiChat/blob/main/.github/workflows/Streamlit_GHA_MultiArch.yml)
{{< /callout >}}

And deploy with docker-compose, where you have **environment variables to place your API's**

* {{< newtab url="https://platform.openai.com/api-keys" text="OpenAI API Keys" >}}


```yml
version: '3'

services:
  streamlit-multichat:
    image: streamlit-multichat #ghcr.io/jalcocert/streamlit-multichat:latest
    container_name: streamlit_multichat
    volumes:
      - ai_streamlit_multichat:/app
    working_dir: /app
    #command: tail -f /dev/null # Keep the container running
    command: /bin/sh -c "\
      mkdir -p /app/.streamlit && \
      echo 'OPENAI_API_KEY = \"sk-proj-yourkey\"' > /app/.streamlit/secrets.toml && \
      echo 'GROQ_API_KEY = \"gsk_yourkey\"' >> /app/.streamlit/secrets.toml && \
      echo 'ANTHROPIC_API_KEY = \"sk-ant-api03-yourkey\"' >> /app/.streamlit/secrets.toml && \      
      streamlit run Z_multichat.py"
    ports:
      - "8503:8501"
    networks:
      - cloudflare_tunnel
      # - nginx_default      

volumes:
  ai_streamlit_multichat:

networks:
  cloudflare_tunnel:
    external: true
  # nginx_default:
  #   external: true

#docker-compose up -d
```


{{< /details >}}

---

## Conclusion - And what I learnt

Now you are free to **prompt those different models!**

During the process, I also explored: [SliDev PPTs](https://github.com/JAlcocerT/Streamlit-MultiChat/tree/main/slidev), [ScrapeGraph](https://github.com/JAlcocerT/Streamlit-MultiChat/blob/main/Z_Tests/ScrapeGraph/test_scrapegraph_stv2.py), [DaLLe](https://github.com/JAlcocerT/Streamlit-MultiChat/tree/main/Z_Tests/Pict_for_SliDev-DaLLe), [Streamlit Auth](https://github.com/JAlcocerT/Streamlit-MultiChat/tree/main/Z_Tests/Auth_sqlite) and [OpenAI as Custom Agents](https://github.com/JAlcocerT/Streamlit-MultiChat/tree/main/Z_Tests/OpenAI).

It was also a good chance to use **Github Actions CI/CD with buildx** - to get **[MultiArch container image](https://github.com/JAlcocerT/Streamlit-MultiChat/blob/main/.github/workflows/Streamlit_GHA_MultiArch.yml)**.


And ofc, the **SliDev PPT** is also using **Github Actions with Pages** and it is built with a different workflow. [This one](https://github.com/JAlcocerT/Streamlit-MultiChat/blob/main/.github/workflows/SliDev_CICD.yml)

{{< details title="Interesting Prompts 📌" closed="true" >}}

# ChatGPT Productivity Techniques

### 1. Use the 80/20 principle to learn faster:
_"I want to learn about [insert topic]. Identify and share the most important 20% of learnings from this topic that will help me understand 80% of it."_
___

### 2. Improve your writing by getting feedback:
_[Paste your writing]_

_"Proofread my writing above. Fix grammar and spelling mistakes. And make suggestions that will improve the clarity of my writing."_
___

### 3. Turn ChatGPT into your intern:
_"I am creating a report about [insert topic]. Research and create an in-depth report with a step-by-step guide that will help me understand how to [insert outcome]."_
___

### 4. Learn any new skill:
_"I want to learn [insert desired skill]. Create a 30-day learning plan that will help a beginner like me learn and improve this skill."_
___

### 5. Strengthen your learning by testing yourself:
_"I am currently learning about [insert topic]. Ask me a series of questions that will test my knowledge. Identify knowledge gaps in my answers and give me better answers to fill those gaps."_
___

### 6. Train ChatGPT to generate prompts for you:
___

### 7. Get ChatGPT to write in your style:
_"Analyze the writing style from the text below and write a 200-word piece guide on [insert topic]."_

_[Insert your text]_
___

### 8. Learn any complex topic in only a few minutes:
_"Explain [insert topic] in simple and easy terms that any beginner can understand."_
___

### 9. Summarize long documents and articles:
_"Summarize the text below and give me a list of bullet points with key insights and the most important facts."_

_[Insert text]_
___

### 10. Understand things faster by simplifying complex texts:
_"Rewrite the text below and make it easy for a beginner to understand."_

_[Insert text]_


{{< /details >}}

{{< dropdown title="Similar AI Projects 👇" closed="true" >}}

* Using [Streamlit + OpenAI API](/how-to-chat-with-pdfs) to chat with your Docs
* Summarize [YT Videos with Groq](/summarize-yt-videos)

{{< /dropdown >}}


Once you get to know how to use an API, is quite easy to add new ones.

And feel free to use any of these:


| **LLM Service**                   | **Description/Link**                                                                        |
|--------------------------------|---------------------------------------------------------------------------------------------|
| **Groq**                       | [Groq API Keys](https://console.groq.com/keys)      - Use Open Models, like Llama3-70B         |
| **Gemini (Google)**            | [Gemini API Documentation](https://ai.google.dev/gemini-api/docs)                              |
| **Mixtral**                    | **Open Models** - You can use their API [here](https://docs.mistral.ai/api/)                   |
| **Anthropic (Claude)**         | [Anthropic API Documentation](https://www.anthropic.com/api), [Console](https://console.anthropic.com), [API Keys](https://console.anthropic.com/settings/keys)                                                                                                      |
| **OpenAI**                     | GPT [API Keys](https://platform.openai.com/api-keys)                                           |
| **Grok (Twitter)**             | -                                                                                              |
| **Azure OpenAI**               | -                                                                                       |
| **Amazon Bedrock**             | -                                                                                     |


<!-- {{< dropdown title="Other Non Local Models for Projects ❎👇" closed="true" >}}

* Groq - 
    * https://console.groq.com/keys
* Gemini (Google)
  * https://ai.google.dev/gemini-api/docs
* Mixtral - **Open Models**, you can use their API
    * https://docs.mistral.ai/api/
* Anthropic (Claude) - https://www.anthropic.com/api
  * https://console.anthropic.com
  * https://console.anthropic.com/settings/keys
* Open AI - GPT APIs https://platform.openai.com/api-keys
* Grok (Twitter)
* Azure

{{< /dropdown >}} -->

Remember to link the **GHCR Package** with your repository Readme:

![GHCR Connecting Package to Repository](/blog_img/GH_package_to_repo.png)


{{< dropdown title="Using buildx with Github Actions to create x86 and ARM64 images ⏬" closed="true" >}}

We need to define a **Github Actions workflow** with **buildx**:

```yml
name: CI/CD Build MultiArch

on:
  push:
    branches:
      - main

jobs:
  build-and-push:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    - name: Set up QEMU
      uses: docker/setup-qemu-action@v1

    - name: Set up Docker Buildx #here the cool thing happens
      uses: docker/setup-buildx-action@v1

    - name: Login to GitHub Container Registry
      uses: docker/login-action@v1
      with:
        registry: ghcr.io
        username: ${{ github.actor }}
        password: ${{ secrets.CICD_TOKEN_MultiChat }}

    - name: Build and push Docker image
      uses: docker/build-push-action@v2
      with:
        context: .
        push: true
        platforms: linux/amd64,linux/arm64 #any other
        tags: |
          ghcr.io/yourGHuser/multichat:v1.0
          ghcr.io/yourGHuser/multichat:latest
```

It uses **QEMU** to emulate different computer architecture to be able to build the images.

Locally, you could do:

```sh
#build and push the image and manifest to DockerHub
docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t yourDockerHubUser/multichat --push .
```

![DockerHub Multi-Arch Image](/blog_img/selfh/multi-arch-pushed-dockerhub.png)


{{< /dropdown >}}


<!-- ### Level Up Streamlit

#### Adding Authelia Authentification

#### Monitoring Streamlit Logs
 -->

* Similar Tools - https://github.com/yvann-ba/Robby-chatbot
  * https://github.com/yvann-ba/Robby-chatbot?tab=MIT-1-ov-file#readme

> Chat with CSV, PDF, TXT files 📄 and YTB videos 🎥 | using Langchain🦜 | OpenAI | Streamlit ⚡

```sh
git clone https://github.com/yvann-hub/Robby-chatbot.git
cd Robby-chatbot

python3 -m venv robby #create it

robby\Scripts\activate #activate venv (windows)
source robby/bin/activate #(linux)

streamlit run src/Home.py
#deactivate #when you are done
```

This one [also summarizes YT Videos](/summarize-yt-videos/) thanks to https://python.langchain.com/v0.2/docs/tutorials/summarization/


### F/OSS RAGs

* Mem0 ( ex-[embedchain](/embedchain-ai) ) - https://github.com/mem0ai/mem0
  * https://github.com/mem0ai/mem0/tree/main/embedchain/examples
  * https://docs.embedchain.ai/examples/full_stack
  * https://docs.mem0.ai/examples/personal-travel-assistant
  * With Qdrant vector DB - https://docs.mem0.ai/examples/customer-support-agent

```yml
version: '3'
services:
  qdrant:
    container_name: my_qdrant_container
    image: qdrant/qdrant
    ports:
      - "6333:6333"
    volumes:
      - qdrant_data:/path/to/qdrant_data

volumes:
  qdrant_data:
```

> Build resource-driven LLM-powered bots

* LangChain
* LLamaIndex

> LlamaIndex is a data framework for your LLM applications

* PandasAI 
* Chainlit - https://docs.chainlit.io/integrations/llama-index

> Chainlit is an open-source Python package to build production ready Conversational AI.

### F/OSS Knowledge Graphs

* Neo4j -  A popular graph database that uses a property graph model. It supports complex queries and provides a rich ecosystem of tools and integrations.
* Apache Jena -  A Java framework for building semantic web and linked data applications. It provides tools for RDF data, SPARQL querying, and OWL reasoning.

{{< dropdown title="What it is GraphRAG ⏬" closed="true" >}}

Create LLM derived knowledge Graph which serve as the LLM memory representation.

* https://microsoft.github.io/graphrag/

> This is great for explainability!

{{< /dropdown >}}

### How to use LLMs with MultiAgents Frameworks

* [MetaGPT](/selfhosting-metagpt/)
* [CrewAI](/ai-agents-crewai/) - CrewAI is designed to enable AI agents to assume roles, share goals, and operate in a cohesive unit
* AutoGen
* ChatDev - https://github.com/OpenBMB/ChatDev

> Try them together with LLMOps Tools like [Pezzo AI](/pezzo-ai-with-docker/) or [Agenta](https://github.com/Agenta-AI/agenta)

### F/OSS Conversational AI

* RASA - https://github.com/RasaHQ/conversational-ai-course-3.x
  * https://www.youtube.com/watch?v=hIWnpyTWsLQ

> Build Conversational AI Experiences

* [Chatwoot](/selfhosting-chatwoot/) 


{{< details title="Edit 📌" closed="true" >}}

* https://www.chatwoot.com/docs/self-hosted/deployment/docker
* https://github.com/chatwoot/chatwoot


```sh
# Download the env file template
wget -O .env https://raw.githubusercontent.com/chatwoot/chatwoot/develop/.env.example
# Download the Docker compose template
wget -O docker-compose.yaml https://raw.githubusercontent.com/chatwoot/chatwoot/develop/docker-compose.production.yaml
```

```yml
version: '3'

services:
  base: &base
    image: chatwoot/chatwoot:latest
    env_file: .env ## Change this file for customized env variables
    volumes:
      - /data/storage:/app/storage

  rails:
    <<: *base
    depends_on:
      - postgres
      - redis
    ports:
      - '127.0.0.1:3000:3000'
    environment:
      - NODE_ENV=production
      - RAILS_ENV=production
      - INSTALLATION_ENV=docker
    entrypoint: docker/entrypoints/rails.sh
    command: ['bundle', 'exec', 'rails', 's', '-p', '3000', '-b', '0.0.0.0']

  sidekiq:
    <<: *base
    depends_on:
      - postgres
      - redis
    environment:
      - NODE_ENV=production
      - RAILS_ENV=production
      - INSTALLATION_ENV=docker
    command: ['bundle', 'exec', 'sidekiq', '-C', 'config/sidekiq.yml']

  postgres:
    image: postgres:12
    restart: always
    ports:
      - '127.0.0.1:5432:5432'
    volumes:
      - /data/postgres:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=chatwoot
      - POSTGRES_USER=postgres
      # Please provide your own password.
      - POSTGRES_PASSWORD=

  redis:
    image: redis:alpine
    restart: always
    command: ["sh", "-c", "redis-server --requirepass \"$REDIS_PASSWORD\""]
    env_file: .env
    volumes:
      - /data/redis:/data
    ports:
      - '127.0.0.1:6379:6379'

```

{{< /details >}}

* [FlowiseAI](/selfhosting-flowise-ai/)
* Langflow - **Visual framework** for building multi-agent and RAG applications. It is open-source, Python-powered, fully customizable, LLM and vector store agnostic.
  * https://docs.langflow.org/getting-started-installation
  * MIT Licensed ❤️- https://github.com/langflow-ai/langflow?tab=MIT-1-ov-file#readme

```sh
pip install langflow==1.0.0 #https://pypi.org/project/langflow/
python -m langflow run
```

> Langflow is a no-code AI ecosystem, integrating seamlessly with the tools and stacks your team knows and loves.
<!-- 
you can embedd langflow in your websites with few lines of JS
https://github.com/langflow-ai/langflow-embedded-chat -->

### FAQ

* Langchain + Docker + Neo4j + Ollama -  https://github.com/docker/genai-stack

> The GenAI Stack will get you started building your own GenAI application in no time

<!-- 
https://www.youtube.com/watch?v=Y9YbCvzAwas 
-->

{{< dropdown title="How to create an interesting readme.md ⏬" closed="true" >}}

* https://github.com/octokatherine/readme.so

{{< /dropdown >}}

#### Similar Free and Open Tools for Generative AI

* Using [PrivateGPT to Chat with your Docs Locally](/selfhosting-privateGPT)  

* Agents Swarm with [CrewAI and Docker](/ai-agents-crewai)

* [Ollama with Docker](/selfhosting-llms-ollama/)
* [Open Web UI](/ollama-web-ui) - previously known as Ollama Web UI 

* Fabric - a toolbox that contains various AI tools you can use for different tasks
  * https://github.com/danielmiessler/fabric

{{< youtube id="Wjrdr0NU4Sk" autoplay="false" >}}

#### How can I use LLMs to help me code

* Open Source VSCode extensions:
  * https://github.com/codota/TabNine
    [MIT](https://github.com/codota/TabNine?tab=MIT-1-ov-file#readme)
    https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode

* Tabby
https://fossengineer.com/selfhosting-Tabby-coding-assistant/

* https://github.com/sourcegraph/cody
AI that knows your entire codebase
https://sourcegraph.com/docs/cody
https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai

* https://sourcegraph.com/docs/cody/usage-and-pricing

* Codeium
https://github.com/Exafunction/CodeiumVisualStudio
  https://marketplace.visualstudio.com/items?itemName=Codeium.CodeiumVS
https://github.com/Exafunction/codeium-chrome

* Rivet - https://github.com/Ironclad/rivet/releases

* Codestral Mamba (Open Source Coding Model from MistralAI)

