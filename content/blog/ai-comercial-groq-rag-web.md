---
title: "How to use Groq to Chat with a Website"
date: 2024-09-18T19:20:21+01:00
draft: true
cover:
    image: "https://socialify.git.ci/PromtEngineer/YoutTube-Tutorial/image?description=1&font=Inter&language=1&name=1&stargazers=1&theme=Auto"
    alt: "Chat with Websites with Groq" # alt text
    caption: "Using Groq to chat with Websites." # display caption under cover
tags: ["Docker","Gen-AI","Python","Dev","Self-Hosting"]
description: 'Chat with Websites with Groq'
summary: 'How to use Groq with a Streamlit RAG to chat with Websites'
url: 'streamlit-rag-groq'
---

<!-- https://www.youtube.com/watch?v=_IcgfbXAAPM
https://github.com/PromtEngineer/YoutTube-Tutorial

https://github.com/JAlcocerT/Streamlit-Rag-Groq
 -->

We already used [Groq together with Streamlit](/summarize-yt-videos) to create a Youtube Video summarizer.

Now, it's time to use Groq API to chat with Websites.

## Streamlit RAG with Groq

 - Fully available on **GitHub** ✅
  * {{< newtab url="https://github.com/JAlcocerT/Streamlit-Rag-Groq" text="Project Source Code at GitHub" >}}

### What it is Powering this Project

* FAISS as [Vector Store](#foss-vector-databases-for-ai-projects)
* LLama2 as Embedding Model
* LLM Mixtral-8x7b (Via Groq API)

By default it will summarize the content of: 

It has to create the embeddings - which will be the time consuming part (one time).

Later, the calls to Mixtral through Groq API will be pretty quick.


---

## Conclusions


## FAQ

### Other F/OSS RAG Frameworks

https://fossengineer.com/embedchain-ai/

#### But What it is a RAG?



### Other F/OSS Projects Implementing a RAG

* The [Ask Multiple PDF Project](/how-to-chat-with-pdfs/)
  * It provides a Streamlit UI, to use together with OpenAI and HF API's
  * As a [Vector Store](how-to-chat-with-pdfs/#selfhosting-a-pdf-chat-bot) it uses [FAISS - A F/OSS Vector Database](/selfhosting-vector-admin-docker/#foss-vector-dbs-for-ai-projects)
  * For the RAG, it uses LangChain

* [DifyAI](/selfhosting-dify-ai-docker) - a development platform specifically designed for LLMs
  * Integrates well with Retrieve, Ask, Generate (RAG) pipelines. RAG pipelines allow your LLM workflows to access and process information from the real world through [search engines](/selfhosting-dify-ai-docker/#how-to-use-dify-ai) or other external sources, enhancing the capabilities of your LLM applications.

### F/OSS Vector Databases for AI Projects

FAISS is great and open sourced with the {{< newtab url="https://github.com/facebookresearch/faiss?tab=MIT-1-ov-file#readme" text="MIT ❤️" >}}.


But that's not all regarding Vector Stores, there are other popular alternatives like: [ChromaDB](/selfhosting-chromadb-docker/), Qdrant, PineCone, ...

> You can [Manage Vector DBs with UI](/selfhosting-vector-admin-docker) in the blink of an eye