---
title: "How to use LangChain to chat with your PDFs"
date: 2024-03-07T23:20:21+01:00
draft: false
cover:
    image: "https://socialify.git.ci/alejandro-ao/ask-multiple-pdfs/image?description=1&font=Inter&language=1&name=1&stargazers=1&theme=Auto"
    alt: "ChatPDF" # alt text
    caption: "SelfHosting A RAG App to chat with PDFs." # display caption under cover
tags: ["Docker","Gen-AI","Python","Dev","Self-Hosting"]
description: 'A Streamlit RAG to Chat with PDFs'
summary: 'How to create a Streamlit App to chat with your docs by using OpenAI API + FAISS Vector Store.'
url: 'how-to-chat-with-pdfs'
---

<!-- 
https://medium.com/@cleancoder/build-a-chatbot-in-minutes-with-chainlit-gpt-4-and-langchain-7690968578f0

https://github.com/satwikide/Generative-AI-explorer
 -->

- The Project is done in **Python Streamlit** for the UI part ✅
  * {{< newtab url="https://github.com/alejandro-ao/ask-multiple-pdfs" text="Project Source Code at Github" >}}

- The [vector store](/selfhosting-vector-admin-docker/) it is Open Source (FAISS) ✅
- The RAG Framework used is **LangChain** ✅

- This part (the LLMs) is not Free & Open Source ❎
  * {{< newtab url="https://platform.openai.com/api-keys" text="OpenAI API Keys" >}}
  * {{< newtab url="https://huggingface.co/settings/tokens" text="Hugging Face API Tokens" >}}

> You can always replace those with Open LLMs by using [LLM's with Ollama](/selfhosting-llms-ollama/) 🦙

The initial project is available in Github, but you can use [your own Gitea repository](/selfhosting-Gitea-docker) as well.

<!-- * chat with pdfs =>>> https://github.com/alejandro-ao/ask-multiple-pdfs ==>> https://github.com/JAlcocerT/ask-multiple-pdfs
https://www.youtube.com/watch?v=dXxQ0LR-3Hg
https://www.youtube.com/watch?v=e9hJZrT7HLw -->

### Chat with PDF Streamlit

<!-- python-dependencies-for-ai -->

If you want, you can try the project first:

1. [Install Python](/guide-python/#installing-python-) 🐍
2. Clone the repository 
3. And [install Python dependencies](/guide-python/#how-to-install-python-dependencies) 👇
4. (Optional) - Use [GH Actions](#how-to-use-github-actions-to-build-a-streamlit-image) to build a production ready env

```sh
git clone https://github.com/JAlcocerT/ask-multiple-pdfs/

python -m venv chatwithpdf #create it

chatwithpdf\Scripts\activate #activate venv (windows)
source chatwithpdf/bin/activate #(linux)

#deactivate #when you are done
```

Once active, you can just **install packages** as usual and that will affect only that venv:

```sh
pip install -r requirements.txt #all at once

#pip list
#pip show streamlit #check the installed version
```

## SelfHosting a PDF Chat Bot

As always, we are going to use containers to simplify the deployment process.

{{< dropdown_docker title="Really, Just Get Docker 🐋👇" closed="true" >}}

Now, these are the things you need:

1. The Dockerfile
2. The requirements.txt file
3. The App ([Python](/tags/python/)+Streamlit, of course)
4. The Docker Image ready with the App bunddled and the [Docker Configuration](#pdf-chat-bot---docker-compose)

{{< dropdown title="The Dockerfile " closed="true" >}}

```Dockerfile
FROM python:3.11-slim

# Copy local code to the container image.
ENV APP_HOME /app
WORKDIR $APP_HOME

COPY . ./

RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    software-properties-common \
    git \
    && rm -rf /var/lib/apt/lists/*

# Install production dependencies.
RUN pip install -r requirements.txt

EXPOSE 8501
```

{{< /dropdown >}}

We will need the libraries for:

* OpenAI API
* LangChain for [the RAG](#rag-frameworks) 
* [FAISS as vector store](#other-free-vector-stores).

{{< dropdown title="The Packages required for Python " closed="true" >}}

```py
streamlit==1.28.0
pypdf2==3.0.1

langchain==0.0.325
python-dotenv==1.0.0

faiss-cpu==1.7.4

openai==0.28.1
tiktoken==0.5.1
```

{{< /dropdown >}}


{{< dropdown title="And if you want to build your own image... ⏬" closed="true" >}}

```sh
docker build -t chat_multiple_pdf .

#export DOCKER_BUILDKIT=1
#docker build --no-cache -t chat_multiple_pdf .

#docker build --no-cache -t chat_multiple_pdf . > build_log.txt 2>&1

#docker run -p 8501:8501 chat_multiple_pdf:latest
#docker exec -it chat_multiple_pdf /bin/bash

#sudo docker run -it -p 8502:8501 chat_multiple_pdf:latest /bin/bash
```

You can make this build manually, [use Github Actions](/docker-github-actions-cicd/), or your can even [combine Gitea](/selfhosting-Gitea-docker) and [Jenkins](/selfhosting-jenkins-ci-cd) to do it for you.



{{< /dropdown >}}



### PDF Chat Bot - Docker Compose

With this Docker Compose below, you will be using the x86 Docker Image created by the [CI/CD of Github Actions](#how-to-use-github-actions-to-build-a-streamlit-image)

```yml
version: '3'

services:
  streamlit-embeddings-pdfs:
    image: ghcr.io/jalcocert/ask-multiple-pdfs:v1.0 #chat_multiple_pdf / whatever name you built
    container_name: chat_multiple_pdf
    volumes:
      - ai_chat_multiple_pdf:/app
    working_dir: /app  # Set the working directory to /app
    command: /bin/sh -c "export OPENAI_API_KEY='your_openai_api_key_here' && export HUGGINGFACE_API_KEY='your_huggingface_api_key_here' && streamlit run app.py"
    #command: tail -f /dev/null    
    ports:
      - "8501:8501"    

volumes:
  ai_chat_multiple_pdf:  
```

If you followed along, the PDF chat it is available at `localhost:8501` and looks like:

![Streamlit Chat with PDF with OpenAI](/img/Dev/streamlit-pdf-chat.png)

---

## FAQ

### How to use Github Actions to Build a Streamlit Image

<!-- The project has a {{< newtab url="https://github.com/JAlcocerT/ask-multiple-pdfs/blob/main/.github/workflows/main.yml" text="GH Actions Worflow created" >}} that will push a new image to the [Github Container Registry](/docker-container-registries/#github-and-gitlab-container-registries) whenever a new push of the code is submited. -->

The project has a **GH Actions Worflow created** that will push a new image to the [Github Container Registry](/docker-container-registries/#github-and-gitlab-container-registries) whenever a new push of the code is submited.

{{< dropdown title="The Workflow Configuration File 👇" closed="false" >}}

You just need this at: `.github/workflows`:

```yml
name: CI/CD Pipeline

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

    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v1 #it will produce x86 and ARM64 arch images

    - name: Login to GitHub Container Registry
      uses: docker/login-action@v1
      with:
        registry: ghcr.io
        username: ${{ github.actor }}
        password: ${{ secrets.CICD_TOKEN_AskPDF }} #Settings -> Dev Settings -> PAT's -> Tokens +++ Repo Settings -> Secrets & variables -> Actions -> New repo secret 

    - name: Build and push Docker image
      uses: docker/build-push-action@v2
      with:
        context: .
        push: true
        tags: ghcr.io/yourghuser/ask-multiple-pdfs:v1.0
```

> Copy it to your project and [get the most out of GH Actions](/docker-github-actions-cicd/)

{{< /dropdown >}}

### Other FREE AI Tools to Chat with Docs


| **Service**                         | **Description**                                                                                                               |
|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| **PrivateGPT**                      | The [PrivateGPT Project works with Docker](/selfhosting-privateGPT) and with local and open models out of the box.             |
| **Other FREE Vector Stores 👇**        | This project uses **[FAISS](https://fossengineer.com/selfhosting-vector-admin-docker/#foss-vector-dbs-for-ai-projects)** as Vector Database, but there are other F/OSS alternatives:  |
| **[ChromaDB](https://fossengineer.com/selfhosting-chromadb-docker/)** | Another F/OSS vector store option.                                                                                            |
| **[Vector Admin Project](https://fossengineer.com/selfhosting-vector-admin-docker/#the-vector-admin-project)** | An additional F/OSS vector store alternative.                                                                                  |


### RAG Frameworks

RAG is a technique for enhancing the capabilities of large language models (LLMs) by allowing them to access and process information from external sources.

* It follows a three-step approach:
  * **R**etrieve: Search for relevant information based on the user query using external sources like search engines or knowledge bases.
  * **A**sk: Process the retrieved information and potentially formulate additional questions based on the context.
  * **G**enerate: Use the retrieved and processed information to guide the LLM in generating a more comprehensive and informative response.

> Sometime ago, I was covering another RAG - [The EmbedChain RAG Framework](/embedchain-ai)


{{< details title="Interesting Concepts for RAGs 📌" closed="true" >}}


| Concept            | Description                                                                                                   |
|--------------------|---------------------------------------------------------------------------------------------------------------|
| **Embedded Models** | Machine learning models that convert text into dense vector representations with semantic information.         |
| **Vector Store**    | Data structure that stores vector representations of text/content with associated metadata.                   |
| **Chroma**          | A library by Spotify for efficient vector similarity search, often used in music recommender systems.          |
| **FAISS**           | A library by Facebook AI Research for scalable and high-performance vector similarity search.                 |
| **Role in Semantic Search** | Embedded models generate vector representations, vector stores hold these vectors, and tools like Chroma/FAISS facilitate efficient search. |
| **Applications**    | Semantic search, recommendation systems, content retrieval, personalized content delivery, question answering. |

---

### Examples of Embedded Models:

- **NLP (Natural Language Processing)**: Models like BERT or GPT-3 used for tasks like text summarization, sentiment analysis, chatbots.
- **Computer Vision**: CNNs for object recognition, facial recognition, or medical image analysis.
- **Speech Recognition**: Used in transcribing speech for voice-controlled systems.

---

### How Embedded Models Enhance Semantic Search:

1. **Natural Language Understanding**: Grasp the semantics and relationships in user queries.
2. **Intent Recognition**: Identify different user intents (informational, transactional, etc.).
3. **Query Expansion**: Suggest related terms or synonyms to improve results.
4. **Contextual Search**: Take into account the query and content context for relevant results.
5. **Entity Recognition**: Identify entities (people, places, etc.) in queries.
6. **Question Answering**: Answer questions using context from the query and data.
7. **Relevance Ranking**: Rank search results by semantic similarity.
8. **Personalization**: Tailor results to individual user preferences.

---

### How Components Work Together:

1. **Embedded Models**: Convert text into dense vector representations (embeddings).
2. **Vector Store**: Stores embeddings with metadata for efficient retrieval.
3. **Chroma**: Scalable vector similarity search library (developed by Spotify).
4. **FAISS**: High-performance similarity search library (developed by Facebook AI).

**Typical Workflow for Semantic Search**:
- Text is processed by embedded models into vectors.
- These vectors are stored in the vector store.
- User queries are converted into vectors.
- Libraries like Chroma/FAISS search for the most similar vectors.
- Results are ranked and presented as recommendations or search results.

---

### Applications

- Semantic search
- Recommendation systems
- Content retrieval
- Personalized content delivery
- Question-answering systems


{{< /details >}}

#### LangChain

[This Streamlit Project](#chat-with-pdf-streamlit) is using **LangChain as RAG** -  with its core focus on the retrieval aspect of the RAG pipeline:

* {{< newtab url="https://github.com/langchain-ai/langchain" text="langchain Source Code at Github" >}}
  * {{< newtab url="https://github.com/langchain-ai/langchain?tab=MIT-1-ov-file#readme" text="License MIT" >}} ❤️
  * {{< newtab url="https://pypi.org/project/langchain/" text="LangChain in PyPi" >}}  

> A Python Library to Build context-aware reasoning applications

{{< dropdown title="Why or Why not LangChain as RAG? ⏬ " closed="true" >}}

* Provides a high-level interface for building RAG systems
* Supports various retrieval methods, including vector databases and search engines
* Offers a wide range of pre-built components and utilities for text processing and generation
* Integrates well with popular language models like OpenAI's GPT series

{{< /dropdown >}}

LangChain supports several Vector Stores: https://python.langchain.com/v0.1/docs/modules/data_connection/vectorstores/

But LangChain it is not the only F/OSS option...

...we also have [LLamaIndex](#llama-index), [LangFlow](#langflow)

#### LLama Index

{{< dropdown title="Why LLama Index as RAG? ⏬ " closed="true" >}}

* Designed specifically for building index-based retrieval systems
* Provides a simple and intuitive API for indexing and querying documents
* Supports various indexing techniques, including vector-based and keyword-based methods
* Offers built-in support for common document formats (e.g., PDF, HTML)
* Lightweight and easy to integrate into existing projects

{{< /dropdown >}}

Primarily **focused on indexing and retrieval**, may lack advanced generation capabilities

* {{< newtab url="https://github.com/run-llama/llama_index" text="LLamaIndex Source Code at Github" >}}
  * {{< newtab url="https://github.com/run-llama/llama_index?tab=MIT-1-ov-file#readme" text="License MIT" >}} ❤️

#### LangFlow

Langflow is a visual framework for building multi-agent and RAG applications. It's open-source, Python-powered, fully customizable, model and vector store agnostic.


{{< dropdown title="Why (or Why not) LangFlow as RAG? ⏬ " closed="true" >}}

* LangFlow - Pros:
  * Offers a visual programming interface for building RAG pipelines
  * Allows for easy experimentation and prototyping without extensive coding
  * Provides a library of **pre-built nodes for various tasks** (e.g., retrieval, generation)
  * Supports integration with popular language models and libraries
  * Enables rapid development and iteration of RAG systems
* Cons:
  * May have limitations in terms of customization and fine-grained control compared to code-based approaches
  * Visual interface may not be suitable for complex or large-scale projects
  * Dependency on the LangFlow platform and its ecosystem

{{< /dropdown >}}

* {{< newtab url="https://github.com/langflow-ai/langflow" text="Langflow Source Code at Github" >}}
  * {{< newtab url="https://github.com/langflow-ai/langflow?tab=MIT-1-ov-file#readme" text="License MIT" >}} ❤️