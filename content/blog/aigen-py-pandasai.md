---
title: "Talk to your DataFrames with PandasAI"
date: 2024-07-12T23:20:21+01:00
draft: false
cover:
  image: "https://socialify.git.ci/gventuri/pandas-ai/image?description=1&font=Inter&language=1&name=1&stargazers=1&theme=Auto"
  alt: "How to use PandasAI" # alt text
  caption: "PandasAI 101 - Step by Step" # display caption under cover
tags: ["Gen-AI","Python","Dev"]
description: 'RAG with PandasAI'
summary: 'How to chat with your data with PandasAI (Together with OpenAI API or with Ollama)'
url: 'how-to-use-pandasAI'
---

Let's have a look to [PandasAI - A Python Project](#the-pandasai-project) that allow us to **chat with our data**.

By incorporating retrieved information, [RAG frameworks](#faq) can generate more informative, accurate, and **contextually relevant responses** compared to models (LLMS) that rely solely on their internal knowledge.

**You will need** [Python installed](/guide-python/#installing-python-) in your PC and a basic understanding of how to [manage properly python Dependencies](/python-dependencies-for-ai/) to make it run.

## The PandasAI Project

Chat with your database (SQL, CSV, pandas, polars, mongodb, noSQL, etc).

PandasAI makes **data analysis conversational using LLMs** (GPT 3.5 / 4, Anthropic, VertexAI) and RAG.

* {{< newtab url="https://github.com/gventuri/pandas-ai" text="The PandasAI Source Code at Github" >}}
    * {{< newtab url="https://docs.pandas-ai.com/intro" text="The PandasAI Docs" >}}
    * License: {{< newtab url="https://github.com/sinaptik-ai/pandas-ai?tab=License-1-ov-file#readme" text="Partly MIT ❗" >}} 

> Open Source AI Agents for Data Analysis

### Why PandasAI?

It's all about **smartdataframes**.


PandasAI SmartDataFrames are essentially regular **Pandas DataFrames** with an added layer of functionality that allows you to **interact with them using natural language**. 

* {{< newtab url="https://github.com/Sinaptik-AI/pandas-ai/blob/main/pandasai/smart_dataframe/__init__.py?ref=fossengineer.com" text="Smart DataFrame Example" >}}

<!-- 
<https://www.linkedin.com/feed/update/urn:li:activity:7061324262439075840/> 
-->

## Interesting Project with PandasAI

Let's give it a try to Pandas AI:

{{< dropdown title="Option 1 - with a Python Venv 👇" closed="true" >}}

```sh
python -m venv pdai #create the venv | python3 if you are on linux

pdai\Scripts\activate #activate venv (windows)
source pdai/bin/activate #(linux)
```

```sh
pip install pandasai==2.0.37 #pip install -r requirements.txt #all at once
```

{{< /dropdown >}}


* Option 2 - With [Google Colaboratory](#colab-examples-pandas-ai)

I found good working examples at:

* https://github.com/TirendazAcademy/PandasAI-Tutorials
    * https://www.youtube.com/watch?v=bw_e6xgGSTY

### Colab Examples Pandas AI

You will need Python installed and **the PandasAI package**:

* https://pypi.org/project/pandasai/2.2.12/

```sh
pip install pandasai==2.2.12
```

* With OpenAI and PandasAI 
    * https://github.com/thepycoach/pandasai-tutorial/blob/main/PandasAI-Tutorial.ipynb
    * https://github.com/TirendazAcademy/PandasAI-Tutorials/blob/main/Intro-to-PandasAI.ipynb
    * You can open them in Colab - https://colab.research.google.com/github/TirendazAcademy/PandasAI-Tutorials/blob/main/Intro-to-PandasAI.ipynb

```sh
export OPENAI_API_KEY="sk-..." #linux
```

[![OpenInColab](/img/OpenInColab.svg#center)](https://colab.research.google.com/github/TirendazAcademy/PandasAI-Tutorials/blob/main/Intro-to-PandasAI.ipynb)

[![PandasAI](https://img.shields.io/badge/PandasAI-1.2.0-FF4B4B.svg?style=flat&logo=Streamlit&logoColor=white#center)](https://pandas-ai.com/)





### PandasAI with Ollama and Streamlit

```sh
git clone https://github.com/TirendazAcademy/PandasAI-Tutorials
cd ./PandasAI-Tutorials/PandasAI-with-Llama3
#pip install -r requirements.txt #all at once
pip install pandasai==2.0.36 streamlit==1.33 PyYAML==6.0.1
streamlit run app.py
```

{{< dropdown title="We will need Ollama running ⏬" closed="true" >}}

We can spin up [Ollama with Docker](//selfhosting-llms-ollama/) like so:

```yml
version: '3'
services:
  ollama:
    image: ollama/ollama
    container_name: ollama
    ports:
      - "11434:11434"
    volumes:
      - ollama_data:/root/.ollama
    command: ollama run tinyllama #or any other model
    #command: tail -f /dev/null    

volumes:
  ollama_data:
```

If you dont want to execute a command in the docker-compose, do it with:
```sh
#docker run -d --name python_container_for_dev -p 8502:8501 pythonaicontainer tail -f /dev/null
docker exec -it ollama /bin/bash
ollama run tinyllama
```

Now the ollama API es ready, serving the tinyllama model at: `localhost:11434`

```sh
#linux
curl http://localhost:11434/api/generate -d '{
  "model": "tinyllama",
  "prompt": "Why is the sky blue?",
  "stream": false
}'
```

And the API is ready here:

```sh
#Windows
curl.exe -X POST http://192.168.3.200:11434/api/generate -d "{\"model\":\"tinyllama\",\"prompt\":\"Who are you?\",\"stream\":false}"
```

{{< /dropdown >}}

### PandasAI with Groq

* https://github.com/TirendazAcademy/PandasAI-Tutorials/blob/main/PandasAI-with-Groq.ipynb
    * You can open them in Colab - https://colab.research.google.com/github/TirendazAcademy/PandasAI-Tutorials/blob/main/PandasAI-with-Groq.ipynb

```sh
conda create -n genai python=3.10

conda activate genai
python --version

#python -m pip install -r requirements.txt #all at once

conda deactivate
conda env remove --name myenv
```


{{< dropdown title="PandasAI with OpenAI Key ⏬" closed="true" >}}


```py 
import pandas as pd #https://github.com/thepycoach/pandasai-tutorial/blob/main/PandasAI-Tutorial.ipynb
from pandasai import PandasAI
from pandasai.llm.openai import OpenAI

df = pd.read_csv("supermarket_sales.csv")
df = df[['Gender', 'Product line', 'Total']]

OPENAI_API_KEY = "your-api-key"
llm = OpenAI(api_token=OPENAI_API_KEY)

pandas_ai = PandasAI(llm)
```

```py
pandas_ai.run(df, prompt="Which products are in Product Line")
pandas_ai.run(df, prompt="Plot a barplot that shows the total spent by each gender")
```

{{< /dropdown >}}

---

## Conclusion

We have seen how to use PandasAI to Chat with our Data.

But PandasAI is not the only Python Package that we can use for that - Other Popular Options are:

1. [LangChain](#langchain) ❤️
2. [LlamaIndex](#llamaindex) ❤️

If you are not sure which LLM will be the best, you can give it a try to:

* Combine strong/weak models with: https://github.com/lm-sys/RouteLLM

> A framework for serving and evaluating LLM routers - save LLM costs without compromising quality!
<!-- 
https://www.youtube.com/watch?v=mcZKQe2pUA0 -->

* https://github.com/BerriAI/litellm

> Call all LLM APIs using the OpenAI format. Use Bedrock, Azure, OpenAI, Cohere, Anthropic, Ollama, Sagemaker, HuggingFace, Replicate (100+ LLMs)

If you would like to have a look to a project that implements RAG with UI:

{{< dropdown title="A RAG With UI - QUIVR ⏬" closed="true" >}}

* https://github.com/QuivrHQ/quivr - Apache License Version 2.0

> Open-source RAG Framework for building GenAI Second Brains 🧠 Build productivity assistant (RAG) ⚡️🤖 Chat with your docs (PDF, CSV, ...) & apps using Langchain, GPT 3.5 / 4 turbo, Private, Anthropic, VertexAI, Ollama, LLMs, Groq that you can share with users ! Efficient retrieval augmented generation framework

{{< /dropdown >}}

---

## FAQ

{{< dropdown title="What it is a RAG? ⏬" closed="true" >}}

In a RAG framework, when a user poses a question or provides a prompt, the **system first retrieves relevant information** from a large corpus of text data.

The retrieved information is then used to augment the input prompt, providing additional context and knowledge to the language generation model.

The language generation model, often based on deep learning architectures like transformers, takes the augmented prompt and generates a response or continuation of the text.



{{< /dropdown >}}

I was also explaining about {{< newtab url="/embedchain-ai/#understanding-retrieval-augmented-generation" text="RAGs when having a look to the EmbedChain Project" >}}

The Project was under Apache v2 Licensed, but now have been absorbed by {{< newtab url="https://github.com/mem0ai/mem0/tree/main/embedchain?ref=fossengineer.com" text="mem0" >}}

{{< dropdown title="Have you heard about Koalas? ⏬" closed="true" >}}

Koalas is a Python library developed by Databricks to provide a pandas-like API for [Apache Spark](/guide-python-PySpark/), allowing you to **scale your pandas code to big data**.

It's designed to make the transition from pandas to Spark easier by providing an interface that's familiar to pandas users.

{{< /dropdown >}}




### How to run Ollama together with a Python container

{{< dropdown title="Create and run a Docker Stack ⏬" closed="true" >}}


```Dockerfile
FROM python:3.10-slim

# Install git
RUN apt-get update && apt-get install -y git nano

# Set up the working directory
WORKDIR /app
```

```sh
docker build --no-cache -t pythonaicontainer . #> build_log.txt 2>&1
```

```yml
version: '3'

services:
  ollama:
    image: ollama/ollama
    container_name: ollamapython
    ports:
      - "11434:11434"
    volumes:
      - ollama_data:/root/.ollama
    #command: ollama run tinyllama

  dev-pythonaicontainer:
    image: pythonaicontainer
    container_name: pythonaicontainer
    volumes:
      - ai_pythonaicontainer:/app
    working_dir: /app
    command: tail -f /dev/null
    ports:
      - "8503:8501"

volumes:
  ollama_data:
  ai_pythonaicontainer:
```

{{< /dropdown >}}

Access the containers with:

```sh
podman exec -it ollamapython /bin/bash
ollama --version
ollama pull tinyllama #https://ollama.com/library/tinyllama
#ollama list

podman exec -it pythonaicontainer /bin/bash
python --version
git clone https://github.com/TirendazAcademy/PandasAI-Tutorials
cd ./PandasAI-Tutorials/PandasAI-with-Llama3
pip install -r requirements.txt #all at once
streamlit run app.py
```

### Other F/OSS Ways to Chat with your Data

* {{< newtab url="https://fossengineer.com/embedchain-ai/" text="Mem0, ex-EmbedChain" >}}

> The memory layer for Personalized AI 

#### LangChain

* **LangChain** with Pandas DataFrame Agent
    * https://python.langchain.com/v0.2/docs/integrations/toolkits/pandas/
    * https://github.com/langchain-ai/langchain (MIT Licensed ❤️)
    * The docs - https://python.langchain.com/v0.2/docs/introduction/



{{< dropdown title="LangChain Examples ⏬" closed="true" >}}


* https://pypi.org/project/langchain/
* Example Q&A About their (Python) docs - https://github.com/langchain-ai/chat-langchain
    

```sh
pip install langchain
```
* It has very interesting features, like the prompt templates - https://python.langchain.com/v0.2/docs/concepts/#prompt-templates

* With **LangChain DF Agent** (A [PandasAI Alternative!](#other-foss-ways-to-chat-with-your-data))
    * https://github.com/AssemblyAI/youtube-tutorials/blob/main/pandas-dataframe-agent/Interesting%20examples%20for%20Pandas%20Dataframe%20Agent.ipynb

{{< /dropdown >}}

<!-- https://www.youtube.com/watch?v=aUds2W7A_FY -->
{{< youtube id="aUds2W7A_FY" autoplay="false" >}}

> 🦜🔗 Build context-aware reasoning applications

#### LLamaIndex

* **LLamaIndex** - https://github.com/run-llama/llama_index (MIT Licensed ❤️)
    * https://docs.llamaindex.ai/en/stable/


{{< dropdown title="LLamaIndex Examples ⏬" closed="true" >}}

* Example 1: https://colab.research.google.com/github/anthropics/anthropic-cookbook/blob/main/third_party/LlamaIndex/Basic_RAG_With_LlamaIndex.ipynb
* Example 2: https://colab.research.google.com/github/JAlcocerT/anthropic-cookbook/blob/main/third_party/LlamaIndex/Multi_Document_Agents.ipynb
* https://www.youtube.com/@LlamaIndex/videos

{{< /dropdown >}}


> LlamaIndex is a data framework for your LLM applications


* **Sketch** - https://github.com/approximatelabs/sketch (MIT Licensed)
    * It allows to get DA tasks, like: questions / visualizations
    * Also Data Cataloguing: like general tagging (PII Identification)

{{< dropdown title="Using Sketch ⏬" closed="true" >}}
You can also directly use a few pre-built hugging face models (right now MPT-7B and StarCoder), which will run entirely locally (once you download the model weights from HF).

Do this by setting environment 3 variables:

```sh
os.environ['LAMBDAPROMPT_BACKEND'] = 'StarCoder'
os.environ['SKETCH_USE_REMOTE_LAMBDAPROMPT'] = 'False'
os.environ['HF_ACCESS_TOKEN'] = 'your_hugging_face_token'
```

{{< /dropdown >}}


>  AI code-writing assistant that understands data content 


* **DuckDB** (vs) Pandas for Data Analysis - https://duckdb.org/
    * https://ecoagi.ai/topics/DuckDB/duckdb-pandas

{{< dropdown title="More about DuckDB ⏬" closed="true" >}}

* It's designed to support analytical SQL queries and data analysis tasks. The DuckDB project also provides a Python library, allowing you to interact with DuckDB databases using Python.
* DuckDB is multithreaded. It uses multiple threads to execute queries, which can lead to significant performance improvements on multicore systems.
* DuckDB is generally faster than Pandas when it comes to executing SQL queries on large datasets.

```sh
pip install duckdb
```

{{< /dropdown >}}


> DuckDB is an in-memory analytical database written in C++ (speed and efficiency)

* Polars - https://github.com/pola-rs/polars

{{< dropdown title="More about Polars ⏬" closed="true" >}}

DuckDB and Polars are both tools used for data analysis, but they have some key differences. DuckDB is an in-memory analytical database that excels at executing SQL queries on large datasets.

Polars is a DataFrame library implemented in Rust and Python that is designed to be fast and flexible. While DuckDB focuses on providing SQL capabilities, Polars provides a DataFrame API that is similar to Pandas.

{{< /dropdown >}}

>  Dataframes powered by a multithreaded, vectorized query engine, written in Rust 

### How to use AI (LLMs) Locally

* {{< newtab url="/selfhosting-llms-ollama/" text="Ollama" >}}
* {{< newtab url="/Local-LLMs-with-cpu/" text="Oobabooga - Text Gen Web UI" >}}
* {{< newtab url="/genai-with-python-gpt4all/" text="GPT4All" >}}
* {{< newtab url="/selfhosting-privateGPT/" text="PrivateGPT" >}}
* {{< newtab url="/genai-with-python-gpt4all" text="GPT4All" >}}
* {{< newtab url="/koboldcpp/" text="KoboldCpp" >}}

* LocalAI - Drop-in replacement for OpenAI running on consumer-grade hardware. No GPU required.

{{< dropdown title="How to get Started with LocalAI ⏬" closed="true" >}}

* https://github.com/mudler/LocalAI/
* https://github.com/mudler/LocalAI/blob/master/docker-compose.yaml


Runs gguf, transformers, diffusers and many more models architectures. It allows to generate Text, Audio, Video, Images. Also with voice cloning capabilities.

* https://localai.io/models/

Keep in mind models compatible with LocalAI must be **quantized in the gguf** format.

It will be available at: `localhost:8080`

* http://192.168.3.235:8080/swagger/index.html

* https://quay.io/repository/go-skynet/local-ai?tab=tags&tag=latest

```yml
version: '3.6'

services:
  api:
    # See https://localai.io/basics/getting_started/#container-images for
    # a list of available container images (or build your own with the provided Dockerfile)
    # Available images with CUDA, ROCm, SYCL
    # Image list (quay.io): https://quay.io/repository/go-skynet/local-ai?tab=tags
    # Image list (dockerhub): https://hub.docker.com/r/localai/localai
    image: quay.io/go-skynet/local-ai:master-ffmpeg-core
    build:
      context: .
      dockerfile: Dockerfile
      args:
      - IMAGE_TYPE=core
      - BASE_IMAGE=ubuntu:22.04
    ports:
      - 8080:8080
    env_file:
      - .env
    environment:
      - MODELS_PATH=/models
    #  - DEBUG=true
    volumes:
      - ./models:/models:cached
      - ./images/:/tmp/generated/images/
    command:
    # Here we can specify a list of models to run (see quickstart https://localai.io/basics/getting_started/#running-models )
    # or an URL pointing to a YAML configuration file, for example:
    # - https://gist.githubusercontent.com/mudler/ad601a0488b497b69ec549150d9edd18/raw/a8a8869ef1bb7e3830bf5c0bae29a0cce991ff8d/phi-2.yaml
    - phi-2
```

{{< /dropdown >}}

> 🤖 The free, Open Source OpenAI alternative. **Self-hosted, community-driven and local-first**.

* AnythingLLM

{{< dropdown title="AnythingLLM ⏬" closed="true" >}}

* https://github.com/Mintplex-Labs/anything-llm?tab=readme-ov-file

* {{< newtab url="https://useanything.com/" text="The AnythingLLM Official Site" >}}
* {{< newtab url="https://github.com/Mintplex-Labs/anything-llm" text="The AnythingLLM Source Code at Github" >}}
    * License: {{< newtab url="https://github.com/Mintplex-Labs/anything-llm?tab=readme-ov-file" text="aGPL 3.0" >}} ❤️

{{< /dropdown >}}

> The all-in-one Desktop & Docker AI application with full RAG and AI Agent capabilities.

#### And Multi-Agents

If one LLM can be helpful, how about combining them to work together?

* [MetaGPT](/selfhosting-metagpt/)
* [CrewAI](/ai-agents-crewai/) - CrewAI is designed to enable AI agents to assume roles, share goals, and operate in a cohesive unit
* AutoGen
* ChatDev - https://github.com/OpenBMB/ChatDev

> Try them together with LLMOps Tools like [Pezzo AI](/pezzo-ai-with-docker/) or [Agenta](https://github.com/Agenta-AI/agenta)

### How to get Better at Prompt Engineering

I was exploring prompt engineering already sometime ago [here](/learning-with-generative-ai/#prompt-engineering).

But lately discovered about the following resources:

* https://github.com/Hannibal046/Awesome-LLM?tab=readme-ov-file#llm-books
* https://github.com/dair-ai/Prompt-Engineering-Guide - MIT Licensed
  * https://www.promptingguide.ai/
  * Example - https://www.promptingguide.ai/prompts/question-answering/closed-domain
    * https://www.promptingguide.ai/models/chatgpt

> 🐙 Guides, papers, lecture, notebooks and resources for prompt engineering