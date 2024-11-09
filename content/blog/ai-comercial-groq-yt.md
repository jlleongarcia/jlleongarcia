---
title: "Summarize Youtube Videos with Groq and Streamlit"
date: 2024-05-27T23:20:21+01:00
draft: false
cover:
    image: "https://socialify.git.ci/phidatahq/phidata/image?description=1&font=Inter&language=1&name=1&stargazers=1&theme=Auto"
    alt: "Summarize Youtube Videos with AI" # alt text
    caption: "Using Groq to Summarize Youtube Videos." # display caption under cover
tags: ["Docker","Gen-AI","Python","Dev","Self-Hosting"]
description: 'Groq Video Summaries with LLMs'
summary: 'How to avoid falling into click baits with Generative AI. Use Groq and Streamlit to summarize and video and to know if its worth your time!'
url: 'summarize-yt-videos'
---

<!-- 
* How to chat with websites(Streamlit) =>>> https://github.com/alejandro-ao/chat-with-websites
https://www.youtube.com/watch?v=bupx08ZgSFg

* GPT4 Clone -  LangChain Memory Tutorial | Building a ChatGPT Clone in Python =>> https://github.com/alejandro-ao/chagpt-cli-python
https://www.youtube.com/watch?v=Cwq91cj2Pnc

---
--- -->

The API offered by 'Groq, Inc.' for their Language Processing Unit (LPU) hardware - AI hardware specifically designed to accelerate performance for natural language processing (NLP) tasks.

Thanks to the **Groq LPU API** we have a programmatic way for developers to interact with the LPU and leverage its capabilities for their applications.

- The **PhiData Project** is available on **GitHub** 
  * {{< newtab url="https://github.com/phidatahq/phidata" text="Project Source Code at GitHub" >}}
    * It is Licensed under the {{< newtab url="https://github.com/phidatahq/phidata?tab=MPL-2.0-1-ov-file#readme" text="Mozilla Public License v2" >}} ✅

> Build AI Assistants with memory, knowledge and tools.

Today, we are going to use **Groq API with F/OSS Models** to...[chat with a Youtube video](#selfhosting-groq-video-summaries).


<!-- - You will need an **API key from Groq** to use the project - The models might be open, but you wont have full local control over them and send queries to a 3rd Party ❎
  * {{< newtab url="https://console.groq.com/keys" text="Get the Groq API Keys" >}}
  * But the LLMs that they run are open -->

| **Information**                | **Details**                                                                                                     |
|--------------------------------|------------------------------------------------------------------------------------------------------------------|
| **API Key from Groq**           | You will need an API key from Groq to use the project.                                                           |
| **Model Control**               | The models might be open, but you won't have full local control over them - send queries to a 3rd party. ❎|
| **Get API Keys**                | [Get the Groq API Keys](https://console.groq.com/keys)                                                           |
| **LLMs**            | The LLMs that we will run are open sourced  ✅                                                                               |


This is what we will get:

![Groq Youtube Summaries](/img/GenAI/yt-summaries/yt-summaries-groq.png)

> And there are many more interesting projects in their repository!

<!-- 
https://github.com/phidatahq/phidata
+
Groq ❎
https://console.groq.com/keys

## Groq
https://console.groq.com/keys -->


## SelfHosting Groq Video Summaries

The phi-data repository contains several sample applications like this one, but our focus today will be at: `phidata/cookbook/llms/groq/video_summary`

It is very simple to get Youtube video summaries with Groq, we are going to do it systematically with Docker.

{{< dropdown_docker title="Really, Just Get Docker 🐋👇" closed="true" >}}

We will use this Dockerfile to capture the App we are interested from the repository and bundle it:

```Dockerfile
FROM python:3.11

# Install git
RUN apt-get update && apt-get install -y git

# Set up the working directory
#WORKDIR /app

# Clone the repository
RUN git clone --depth=1 https://github.com/phidatahq/phidata && \
    cd phidata && \
    git sparse-checkout init && \
    git sparse-checkout set cookbook/llms/groq/video_summary && \
    git pull origin main

WORKDIR /phidata

# Install Python requirements
RUN pip install -r /phidata/cookbook/llms/groq/video_summary/requirements.txt

#RUN sed -i 's/numpy==1\.26\.4/numpy==1.24.4/; s/pandas==2\.2\.2/pandas==2.0.2/' requirements.txt


# Set the entrypoint to a bash shell
CMD ["/bin/bash"]
```

And now we just have to **build our Docker Image** with the Groq Youtube Summarizer App:

```sh
docker build -t phidata_yt_groq .

sudo docker-compose up -d
#docker-compose -f phidata_yt_groq_Docker-compose.yml up -d

docker exec -it phidata_yt_groq /bin/bash
```

Now, you are inside the built container.

Just execute the Streamlit app to test it:

```sh
#docker or podman run
docker run -d --name=phidata_yt_groq -p 8502:8501 -e GROQ_API_KEY=your_api_key_here \
phidata:yt_summary_groq streamlit run cookbook/llms/groq/video_summary/app.py

# podman run -d --name=phidata_yt_groq -p 8502:8501 -e GROQ_API_KEY=your_api_key_here \
# phidata:yt_summary_groq tail -f /dev/null
```


{{< dropdown title="How to use Github Actions to build a multi-arch Container Image ⏬" closed="true" >}}

If you are familiar with [github actions](/docker-github-actions-cicd/), you will need the following workflow:

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

    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v1

    - name: Login to GitHub Container Registry
      uses: docker/login-action@v1
      with:
        registry: ghcr.io
        username: ${{ github.actor }}
        password: ${{ secrets.CICD_TOKEN_YTGroq }}

    - name: Set lowercase owner name
      run: |
        echo "OWNER_LC=${OWNER,,}" >> $GITHUB_ENV
      env:
        OWNER: '${{ github.repository_owner }}'

    - name: Build and push Docker image
      uses: docker/build-push-action@v2
      with:
        context: .
        push: true
        platforms: linux/amd64,linux/arm64
        tags: |
          ghcr.io/${{ env.OWNER_LC }}/phidata:yt-groq
```

It uses **QEMU** together with **docker buildx** command to build **x86 and ARM64** container images for you.

{{< /dropdown >}}


And once you are done, deploy the AI youtube summarizer as a **Docker Compose Stack**:

```yml
version: '3.8'

services:
  phidata_service:
    image: phidata_yt_groq #ghcr.io/jalcocert/phidata:yt-groq
    container_name: phidata_yt_groq
    ports:
      - "8501:8501"    
    environment:
      - GROQ_API_KEY=your_api_key_here #your_api_key_here 😝 
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

> For Production deployment, you can use [NGINX](https://fossengineer.com/selfhosting-nginx-proxy-manager-docker/) or [Cloudflare Tunnels](https://fossengineer.com/selfhosting-cloudflared-tunnel-docker/) to get HTTPs.

{{< details title="Docker Compose Stack for GenAI Apps: YT Summarizer, Ollama and MultiChat 📌" closed="true" >}}


* https://github.com/JAlcocerT/phidata/pkgs/container/phidata
* This is my [AI-Gen docker Compose](https://github.com/JAlcocerT/Docker/blob/main/Z_Dockge/stacks/z_aigen/compose.yaml)

```yml
version: '3.8'

services:
  phidata_service: 
    image: ghcr.io/jalcocert/phidata:yt-groq #phidata:yt_summary_groq
    container_name: phidata_yt_groq
    ports:
      - "8502:8501"    
    environment:
      - GROQ_API_KEY="gsk_dummy-groq-api" # your_api_key_here
    command: streamlit run cookbook/llms/groq/video_summary/app.py
    restart: always
    networks:
      - cloudflare_tunnel

  streamlit_multichat:
    image: ghcr.io/jalcocert/streamlit-multichat:latest
    container_name: streamlit_multichat
    volumes:
      - ai_streamlit_multichat:/app
    working_dir: /app
    command: /bin/sh -c "\
            mkdir -p /app/.streamlit && \
            echo 'OPENAI_API_KEY = "sk-dummy-openai-key"' > /app/.streamlit/secrets.toml && \
            echo 'GROQ_API_KEY = "dummy-groq-key"' >> /app/.streamlit/secrets.toml && \
            echo 'ANTHROPIC_API_KEY = "sk-dummy-anthropic-key"' >> /app/.streamlit/secrets.toml && \
            streamlit run Z_multichat_Auth.py
    ports:
      - "8501:8501"
    networks:
      - cloudflare_tunnel
    restart: always
      # - nginx_default   

  ollama:
    image: ollama/ollama
    container_name: ollama
    ports:
      - "11434:11434" #Ollama API
    volumes:
      #- ollama_data:/root/.ollama
      - /home/Docker/AI/Ollama:/root/.ollama
    networks:
      - ollama_network      

  ollama-webui:
    image: ghcr.io/ollama-webui/ollama-webui:main
    container_name: ollama-webui
    ports:
      - "3000:8080" # 3000 is the UI port
    environment:
      - OLLAMA_BASE_URL=http://192.168.3.200:11434
    # add-host:
    #   - "host.docker.internal:host-gateway"
    volumes:
      - /home/Docker/AI/OllamaWebUI:/app/backend/data
    restart: always          
    networks:
      - ollama_network    

networks:
  cloudflare_tunnel:
    external: true
  ollama_network:
    external: false
  # nginx_default:
  #   external: true

volumes:
  ai_streamlit_multichat:
```

{{< /details >}}


{{< dropdown title="How to SelfHost the Streamlit AI App with Cloudflare ⏬" closed="true" >}}

1. Visit - `https://one.dash.cloudflare.com`
2. Hit Tunnels (Network section)
3. Create a new Tunnel

![Streamlit with Cloudflare Tunnels](/img/GenAI/yt-summaries/streamlit-cloudflare.png)

And make sure to place the name of the container and its internal port:

![Streamlit with Cloudflare Tunnels Port](/img/GenAI/yt-summaries/cloudflare_streamlit_port.png)

{{< /dropdown >}}


---

## Conclusion

<!-- {{< dropdown_docker title="Really, Just Get Docker 🐋👇" closed="true" >}} -->

Now we have our Streamlit UI at: `localhost:8501`

Feel free to ask for **Summaries about Youtube Videos with Groq**:

![Groq Youtube Summaries Example](/img/GenAI/yt-summaries/yt-summaries-groq_example.png)

{{< dropdown title="Similar AI Projects 👇" closed="true" >}}

* Using [PrivateGPT to Chat with your Docs Locally](/selfhosting-privateGPT) ✅
* Using [Streamlit + OpenAI API](/how-to-chat-with-pdfs) to chat with your PDF Docs

{{< /dropdown >}}


### Groq vs Others

<!-- * [Ollama](https://fossengineer.com/selfhosting-llms-ollama/) - A free and open-source AI service that features local models, allowing users to host their own machine learning models. This service is ideal for users who prefer to keep their data on their own servers.

* [Text Generation Web UI](https://fossengineer.com/Local-LLMs-with-cpu/) - This is a free and open-source AI service that uses local models to generate text. It's a great tool for content creators and writers who need a quick and easy way to generate text.

* Mistral - An AI service that specializes in creating personalized experiences for users. It uses machine learning algorithms to understand user behavior and preferences.

* Grok (Twitter) - An AI service developed by Twitter for data analysis and pattern recognition. It's primarily used for analyzing social media data to provide insights into user behavior.

* Gemini (Google) - An AI service from Google that provides APIs for machine learning and data analysis. You can access the [documentation here](https://ai.google.dev/gemini-api/docs)

* Vertex AI (Google) - Another AI service from Google, Vertex AI provides tools for data scientists and developers to build, deploy, and scale AI models.

* AWS Bedrock - This is Amazon's foundational system for AI and ML services. It provides a wide range of tools and services for building, training, and deploying machine learning models.

* Anthropic (Claude) - A research-oriented AI service developed by Anthropic. It aims to build models that understand and respect human values. You can access their [API here](https://www.anthropic.com/api) and manage your settings and keys on their [console](https://console.anthropic.com/settings/keys). -->

| **Service**                          | **Description**                                                                                                                                                      |
|--------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **[Ollama](https://fossengineer.com/selfhosting-llms-ollama/)**           | A free and open-source AI service that features local models, allowing users to host their own machine learning models. Ideal for users who prefer to keep data on their own servers.     |
| **[Text Generation Web UI](https://fossengineer.com/Local-LLMs-with-cpu/)** | A free and open-source AI service using local models to generate text. Great for content creators and writers needing quick text generation.                                |
| **Mistral**                          | AI service specializing in creating personalized user experiences using machine learning algorithms to understand behavior and preferences.                          |
| **Grok (Twitter)**                   | AI service by Twitter for data analysis and pattern recognition, primarily used for analyzing social media data to gain insights into user behavior.                   |
| **[Gemini (Google)](https://ai.google.dev/gemini-api/docs)**              | Google’s AI service providing APIs for machine learning and data analysis.                                                                                              |
| **Vertex AI (Google)**               | Google’s AI service offering tools for data scientists and developers to build, deploy, and scale AI models.                                                           |
| **AWS Bedrock**                      | Amazon's foundational system for AI and ML services, offering a wide range of tools for building, training, and deploying machine learning models.                     |
| **Anthropic (Claude)**               | Research-oriented AI service by Anthropic, aiming to build models that respect human values. Access their [API](https://www.anthropic.com/api) and manage your keys in their [console](https://console.anthropic.com/settings/keys). |
                                               | [API](https://www.anthropic.com/api), [Console](https://console.anthropic.com/settings/keys) |


### Adding Simple Streamlit Auth

We can use this simple package: https://pypi.org/project/streamlit-authenticator/

* https://github.com/mkhorasani/Streamlit-Authenticator
  * https://github.com/mkhorasani/Streamlit-Authenticator?tab=Apache-2.0-1-ov-file#readme ✅

>  A secure authentication module to validate user credentials in a Streamlit application. 

```py
import streamlit as st
from Z_Functions import Auth_functions as af


def main():
    if af.login():
        # Streamlit UI setup
        st.title("Portfolio Dividend Visualization")

if __name__ == "__main__":
    main()        
```

It is a referencing a `Auth_functions.py` in another file:

{{< dropdown title="Define Auth_functions.py in a separate file with ⏬" closed="true" >}}

```py
import streamlit_authenticator as stauth

# Authentication function #https://github.com/naashonomics/pandas_templates/blob/master/login.py
def login():
    names = ['User Nick 1 🐷', 'User Nick 2']
    usernames = ['User 1', 'User 2']
    passwords = ['SomePassForUser1', 'anotherpassword']

    hashed_passwords = stauth.Hasher(passwords).generate()
    authenticator = stauth.Authenticate(names, usernames, hashed_passwords,
                                        'some_cookie_name', 'some_signature_key', cookie_expiry_days=1)
    name, authentication_status, username = authenticator.login('Login', 'main')
    
    if authentication_status:
        authenticator.logout('Logout', 'main')
        st.write(f'Welcome *{name}*')
        return True
    elif authentication_status == False:
        st.error('Username/password is incorrect')
    elif authentication_status == None:
        st.warning('Please enter your username (🐷) and password (💰)')
    return False
```

{{< /dropdown >}}




### FAQ

<!-- * https://sourcegraph.com/search

* you.com

* https://www.perplexity.ai/discover

* Google Colab Free Tier
2-bit Quantization is Magical! See How to Run Mixtral-8x7B on Free-tier Colab
https://www.youtube.com/watch?v=Qx8PNk4OkUA -->


| **What's Trending Now?**        | **Description**                                                                                               |
|---------------------------------|---------------------------------------------------------------------------------------------------------------|
| **[Toolify](https://www.toolify.ai/)**       | A platform that showcases the latest AI tools and technologies, helping users discover trending AI solutions.  |
| **[Future Tools](https://www.futuretools.io/)** | A website dedicated to featuring the most cutting-edge and trending tools in the tech and AI industry.          |



{{< dropdown title="How to use Groq API Step by Step with Python ⏬" closed="true" >}}

Thanks to **TirendazAcademy**, we have a step by step guide to know how to make queries to **Groq API via Python**:

* https://github.com/TirendazAcademy/LangChain-Tutorials/blob/main/Groq-Api-Tutorial.ipynb - We can even use Google Colab!
  * https://colab.research.google.com/github/TirendazAcademy/LangChain-Tutorials/blob/main/Groq-Api-Tutorial.ipynb

```sh
!pip install -q -U langchain==0.2.6 langchain_core==0.2.10 langchain_groq==0.1.5 gradio==4.37.1
```

```py
from google.colab import userdata
groq_api_key = 'your_groq_API'

from langchain_groq import ChatGroq

chat = ChatGroq(
    api_key = groq_api_key,
    model_name = "mixtral-8x7b-32768"
)

from langchain_core.prompts import ChatPromptTemplate

system = "You are a helpful assistant."
human = "{text}"

prompt = ChatPromptTemplate.from_messages(
    [
        ("system", system), ("human", human)
    ]
)

from langchain_core.output_parsers import StrOutputParser
chain = prompt | chat | StrOutputParser()

chain.invoke(
    {"text":"Why is the sky blue?"}
)
```
{{< /dropdown >}}



### Ways to Secure a Streamlit App

We have already seen a simple way with [the Streamlit Auth Package](#adding-simple-streamlit-auth).

But what if we need something more robust?

#### How to secure the Access for your AI Apps

* F/OSS Apps to manage Application access Management:
  * Authentik
  * **LogTo:**
<!-- 
https://docs.logto.io/docs/recipes/protected-app/
https://docs.logto.io/docs/recipes/manage-users/admin-console/
https://docs.logto.io/docs/recipes/webhooks/  https://cloud.logto.io/yourtenantid/webhooks -->

| **Interesting LogTo Resources**                                | **Link**                                                                                         |
|------------------------------------------------|---------------------------------------------------------------------------------------------------|
| **Protected App Recipe**                       | [Documentation](https://docs.logto.io/docs/recipes/protected-app/)                                |
| **Manage Users (Admin Console) Recipe**        | [Documentation](https://docs.logto.io/docs/recipes/manage-users/admin-console/)                   |
| **Webhooks Recipe**                            | [Documentation](https://docs.logto.io/docs/recipes/webhooks/) --> [Webhooks URL](https://cloud.logto.io/yourtenantid/webhooks) |


<!-- https://www.youtube.com/watch?v=sv60N9eW8Ew -->
{{< youtube id="sv60N9eW8Ew" autoplay="false" >}}

>  Social sign-in experience with Logto


<!-- It provides an email to authenticate users.

* Create a Protected App: Add authentication with simplicity and epic speed
  * Protected App securely maintains user sessions and proxies your app requests. Powered by Cloudflare Workers, enjoy the top-tier performance and 0ms cold start worldwide. 
  * https://docs.logto.io/docs/recipes/protected-app/

https://www.youtube.com/watch?v=ZBrXW3iZyKY

> Build your app's authentication in clicks, no code required -->

- **Authenticate Users via Email**: Easily authenticate users through email.
  
- **Create a Protected App**: Add authentication with simplicity and speed.
  - Protected App securely maintains user sessions and proxies your app requests.
  - Powered by Cloudflare Workers, enjoy top-tier performance and 0ms cold start worldwide.
  - [Protected App Documentation](https://docs.logto.io/docs/recipes/protected-app/)

- **Video Tutorial**: Learn how to build your app's authentication in clicks, no code required.
  - [Watch on YouTube](https://www.youtube.com/watch?v=ZBrXW3iZyKY)


#### How to install AI easily

Some F/OSS Projects to help us **get started with AI**:

* https://pinokio.computer/
  * https://github.com/pinokiocomputer/pinokio

> AI Browser - MIT ❤️ Licensed!

And if you need, these are some **FREE Vector Stores** for AI Projects


| **Project/Tool**              | **Link**                                                                                             |
|-------------------------------|------------------------------------------------------------------------------------------------------|
| **Vector Admin Project**       | [Self-Hosting Vector Admin with Docker](https://fossengineer.com/selfhosting-vector-admin-docker/#the-vector-admin-project) |
| **FOSS Vector DBs for AI Projects** | [Self-Hosting Vector Admin with Docker](https://fossengineer.com/selfhosting-vector-admin-docker/#foss-vector-dbs-for-ai-projects) |
| **ChromaDB**                   | [Self-Hosting ChromaDB with Docker](https://fossengineer.com/selfhosting-chromadb-docker/)           |