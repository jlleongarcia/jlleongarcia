---
title: "How to create a ChatGPT Clone with Streamlit"
date: 2024-06-02T23:20:21+01:00
draft: false
cover:
  image: "https://socialify.git.ci/dataprofessor/openai-chatbot/image?description=1&font=Inter&language=1&name=1&stargazers=1&theme=Auto"
  alt: "ChatGPT Clone" # alt text
  caption: "Build a ChatGPT Clone with Streamlit." # display caption under cover
tags: ["Gen-AI","Python","Dev"]
description: 'ChatGPT Clone with Streamlit'
summary: 'Building a ChatGPT4 Clone with Streamlit. Use GPT4 and GPT-4o through their APIs and avoid the recurring monthly subscription bill for ChatGPT.'
url: 'create-chatgpt-clone-streamlit'
---

For the ones who want to use the latest OpenAI Models, but dont want to commit to a monthly subscription, there is an alternative.

To use an amazing and F/OSS **[Python Streamlit App](#the-openai-chatbot-project) that communicates with OpenAI API**.

> You will need the API Keys to OpenAI GPT's 'black box'

<!-- * Using chatgpt with your own data: langchain + OPENAI API
https://www.youtube.com/watch?v=9AXP7tCI9PI -->

<!-- 
* https://github.com/JAlcocerT/openai-chatbot
* https://platform.openai.com/api-keys

* https://platform.openai.com/docs/models/
* https://platform.openai.com/docs/models/gpt-4o -->

## The Openai-Chatbot Project

- The project is available on **GitHub** ✅
  * {{< newtab url="https://github.com/dataprofessor/openai-chatbot" text="Project Source Code at GitHub" >}}

- You will need an API key from OpenAI to use the project 
  * {{< newtab url="https://platform.openai.com/api-keys" text="OpenAI API Keys" >}}
  * Remember that you will be using Closed Sourced Models ❎

{{< dropdown title="Documentation for the Open AI models used can be found here 👇" closed="true" >}}

* {{< newtab url="https://platform.openai.com/docs/models/" text="OpenAI Models Documentation" >}}
* {{< newtab url="https://platform.openai.com/docs/models/gpt-4" text="GPT-4 Documentation" >}}
* {{< newtab url="https://platform.openai.com/docs/models/gpt-4o" text="GPT-4o Documentation" >}}

{{< /dropdown >}}

This is what we will get: A Web UI to use Gpt3.5, GPT4 and the latest GPT4-o:

![Streamlit Chat GPT Clone](/img/GenAI/streamlit-gpt-clone/streamlit-chatbot-clone.png)

## A GPT Clone with Streamlit

If you want, you can try the project, first:

1. [Install Python](/guide-python/#installing-python-) 🐍
2. Clone the repository 
3. Get [a F/OSS IDE](#faq) (Optional, but why not)
4. And [install Python dependencies](/guide-python/#how-to-install-python-dependencies): We will be using venv first and later create a Docker version for SelfHosting the GenAI App. 
5. (Optional) - [Deploy to Production](#selfhosting-streamlit-chatgpt-clone)
```sh
git clone https://github.com/JAlcocerT/openai-chatbot

#python --version
python -m venv openaichatbot #create a Python virtual environment

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


We are relying in these 2 [Python Packages](/guide-python#how-to-install-python-dependencies):

```sh
streamlit==1.26.0 #https://pypi.org/project/streamlit/#history
openai==0.28.0 #https://pypi.org/project/openai/#history
```

Now, to create the **container Image**: It will make everything (dependencies) simpler.

{{< dropdown_docker title="Really, Just Get Docker 🐋👇" closed="true" >}}

We just need this Dockerfile:

```Dockerfile
FROM python:3.11

# Install git
RUN apt-get update && apt-get install -y git

# Clone the repository
#RUN git clone https://github.com/JAlcocerT/openai-chatbot
#WORKDIR /openai-chatbot

# Set up the working directory
COPY . ./app
WORKDIR ./app

# Install Python requirements
RUN pip install -r requirements.txt

# Set the entrypoint to a bash shell
CMD ["/bin/bash"]
```

And now we [build our image](/building-docker-container-images/) with:

```sh
export DOCKER_BUILDKIT=1
docker build --no-cache -t openaichatbot . #> build_log.txt 2>&1
```


{{< dropdown title="Or if you prefer, build it with Podman 👇" closed="true" >}}

You will need to install [Podman, a Docker alternative](//docker-alternatives-for-data-analytics/)

```sh
podman build -t openaichatbot .
#podman run -d -p 8501:8501 openaichatbot
```
{{< /dropdown >}}

Once built, we can run the image with CLI:

```sh
#docker run -p 8501:8501 openaichatbot:latest
#docker exec -it openaichatbot /bin/bash

#sudo docker run -it -p 8502:8501 openaichatbot:latest /bin/bash
```

### SelfHosting Streamlit ChatGPT Clone

Or, With [Portainer](/selfhosting-portainer-docker/) as Stack:


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

Now we have our Streamlit UI at: `localhost:8501`

> For Production deployment, you can use [NGINX](/selfhosting-nginx-proxy-manager-docker/) or [Cloudflare Tunnels](/selfhosting-cloudflared-tunnel-docker/) to get HTTPs

---

## Conclusion

Now you have your own Streamlit Clone to **use GPT Models and pay by what you use**, instead of paying for a full month up front.

But if now you want to give a try to **open LLMs**, definitely check:

<!-- * [Ollama](/selfhosting-llms-ollama/) - A free and open-source AI service that features local models.
* [Text Generation Web UI](/Local-LLMs-with-cpu/) - This is a free and open-source AI service that uses local models to generate text.
* **[GPT4All](/genai-with-python-gpt4all/)**: A robust open-source project that supports interactions with LLMs on local machines. Designed to be versatile, it supports both CPU and GPU hardware.
* The [KoboldCPP Project](/koboldcpp/) - Use GGML and GGUF models locally -->

| **Service**                              | **Description**                                                                                                             |
|------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| **[Ollama](/selfhosting-llms-ollama/)**   | A free and open-source AI service that features local models.                                                               |
| **[Text Generation Web UI](/Local-LLMs-with-cpu/)** | A free and open-source AI service that uses local models to generate text.                                                |
| **[GPT4All](/genai-with-python-gpt4all/)** | A robust open-source project supporting interactions with LLMs on local machines. Designed for both CPU and GPU hardware. |
| **[KoboldCPP Project](/koboldcpp/)**     | A project that allows you to use GGML and GGUF models locally.                                                               |


> Which LLM is giving you the [best results with your Prompts](/learning-with-generative-ai)?

{{< dropdown title="Similar F/OSS AI Projects using API's 👇" closed="true" >}}

By using Streamlit, you can create similar projects to chat with your PDF's or get summaries of youtube videos:

* Using [Streamlit + OpenAI API](/how-to-chat-with-pdfs) to chat with your Docs
* Summarize [YT Videos with Groq](/summarize-yt-videos)
  * Through Groq's API, you can access open models like LLama3

{{< /dropdown >}}

{{< dropdown title="Non Local Models for Projects ❎👇" closed="true" >}}

You can make some F/OSS Project that delegates the model execution to a third party, for example:

* [Groq](https://console.groq.com/keys) - An AI service that focuses on providing high-performance, computationally efficient systems for machine learning tasks.

* [Gemini (Google)](https://ai.google.dev/gemini-api/docs) - An AI service from Google that provides APIs for machine learning and data analysis.

* [Mistral](https://docs.mistral.ai/api/) - An AI service that specializes in creating personalized experiences for users. It uses machine learning algorithms to understand user behavior and preferences. With its open models, you can use their API for a variety of applications.

* [Anthropic (Claude)](https://www.anthropic.com/api) - A research-oriented AI service developed by Anthropic. It aims to build models that understand and respect human values. You can manage your settings and keys on their [console](https://console.anthropic.com/settings/keys).

* [Open AI](https://platform.openai.com/api-keys) - Known for its GPT APIs, OpenAI offers a range of AI and machine learning services.

* Grok (Twitter) - An AI service developed by Twitter for data analysis and pattern recognition. It's primarily used for analyzing social media data to provide insights into user behavior.

* Vertex AI (Google) - Another AI service from Google, Vertex AI provides tools for data scientists and developers to build, deploy, and scale AI models.

* AWS Bedrock - Amazon's foundational system for AI and ML services. It provides a wide range of tools and services for building, training, and deploying machine learning models.

{{< /dropdown >}}

{{< dropdown title="Where can I download the latest F/OSS LLM's? 👇" closed="true" >}}
* https://huggingface.co
{{< /dropdown >}}

{{< dropdown title="Ways to Evaluate LLMs 👇" closed="true" >}}

* https://lmsys.org/
* LMSYS Chatbot Arena: Benchmarking LLMs in the Wild: https://chat.lmsys.org/
*  https://github.com/ray-project/llmperf - a library for validating and benchmarking LLMs

{{< /dropdown >}}

### Other Interesting F/OSS Apps built on top of OpenAI API

* [MetaGPT is a promising framework that you can SelfHost](/selfhosting-metagpt/) if you want to explore the potential of LLMs for collaborative software development. It streamlines the process, allows for efficient LLM integration, and facilitates a **multi-agent approach** for tackling complex projects.
  * Focuses on **multi-agent collaboration** within LLMs. It assigns **different roles** (product manager, engineer, etc.) to various LLMs, enabling them to **work together on a project**
  * You can run MetaGPT fully local with Ollama

> Great for LLM driven complex software development

* Agents Swarm with [CrewAI and Docker](/ai-agents-crewai)
  *  Focuses on building multi-agent systems that leverage LLMs alongside other tools and functionalities. It allows developers to create **custom workflows and utilize LLMs for specific tasks** within the system.
  * Offers a more user-friendly interface and might be easier to pick up for developers with a basic understanding of LLMs and APIs

> More flexible and can be used for a wider range of tasks, including data processing, automation of repetitive tasks

* [Flowise AI](/selfhosting-flowise-ai/) - Drag & drop UI to build your customized LLM flows 
  * **Low-code application** building with LLMs. It offers a drag-and-drop interface that allows users to visually construct workflows and applications using LLMs without extensive coding.
  * User-friendly interface, ideal for beginners or those with limited coding experience. Supports various LLMs and offers pre-built components for common tasks.
  * Less flexibility and customization compared to code-based frameworks like crewAI or MetaGPT.

* [DifyAI](/selfhosting-dify-ai-docker) -  an open-source project that functions as a development platform specifically designed for LLMs
  * Provides a user-friendly graphical interface to design and manage complex LLM workflows. You can drag and drop components to visually construct the workflow, making it accessible to users even without extensive coding experience.
  * RAG Pipeline Integration: Dify integrates well with Retrieve, Ask, Generate (RAG) pipelines. RAG pipelines allow your LLM workflows to access and process information from the real world through [search engines](/selfhosting-dify-ai-docker/#how-to-use-dify-ai) or other external sources, enhancing the capabilities of your LLM applications.
{{< dropdown title="What else can I do with AI? ⏬" closed="true" >}}

Some other interesting repositories to have a look for ideas:

* https://github.com/mckaywrigley/kindle-gpt
* https://github.com/sindresorhus/awesome-chatgpt
* https://github.com/pinokiocomputer/pinokio

> Remember, OpenAI models like GPT4 are closed source ❎

{{< /dropdown >}}


### FAQ

{{< dropdown title="How can I monitor my AI Server ⏬" closed="true" >}}

* You can use [NetData](/selfhosting-netdata/)

{{< /dropdown >}}

{{< dropdown title="F/OSS IDE's and extensions for AI Projects ⏬" closed="true" >}}

* VSCodium - {{< newtab url="https://github.com/VSCodium/vscodium" text="VS Code without MS branding/telemetry/licensing" >}} - MIT License ❤️
  * You can support your development with Gen AI thanks to **F/OSS extensions**
    * [Tabby](/selfhosting-Tabby-coding-assistant/) - Apache License ✅
    * Continue Dev - Apache License ✅

{{< /dropdown >}}

#### Similar Free and Open Tools for Generative AI

If you are looking for an UI to interact with Open Models, you can try any of these:

* Using [PrivateGPT to Chat with your Docs COMPLETELY Locally](/selfhosting-privateGPT)  

* [Ollama with Docker](/selfhosting-llms-ollama/)
* [Open Web UI](/ollama-web-ui) - previously known as Ollama Web UI 
* The text generation web UI Project, a [SelfHostable Gradio App](/Local-LLMs-with-cpu/) to interact with local LLMs 