---
title: "[AI] Exploring RAGs. Creating a Chat over custom Data"
date: 2024-11-30
draft: false
# cover:
#     image: "https://socialify.git.ci/alejandro-ao/ask-multiple-pdfs/image?description=1&font=Inter&language=1&name=1&stargazers=1&theme=Auto"
#     alt: "ChatPDF" # alt text
#     caption: "SelfHosting A RAG App to chat with PDFs." # display caption under cover
tags: ["Gen-AI","Python","Dev"]
description: 'Exploring RAGs and creating a Data Chat using LLMs via APIs. LangChain, LLamaIndex, PandasAI and HayStack compared.'
summary: 'How to create a Python Apps to chat with your data.'
url: 'how-to-use-rags-with-python'
---


{{< callout type="info" >}}
The **[Data-ChatBot](https://github.com/JAlcocerT/Data-Chat)** 💻 
{{< /callout >}}

## How to use RAGs

Previously this year, I got lucky enough to find these open source projects:

{{< cards >}}
  {{< card link="https://github.com/JAlcocerT/ask-multiple-pdfs/" title="My Fork in GH for Ask Multiple PDFs ↗" icon="book-open" >}}
  {{< card link="https://github.com/JAlcocerT/langchain-ask-csv" title="My Fork in Github for Ask CSV ↗" icon="user" >}}
{{< /cards >}}

They both use [**LangChain** as RAG framework](#exploring-langchain)

We can build very interesting QnA over knowledge apps: https://github.com/langchain-ai/chat-langchain

### General RAG Architecture

This is the general idea of a **RAG architecture**:

```mermaid
flowchart TD
    A[User Query] -->|Send Query| B[Retrieval Module]

    subgraph RAG_Framework[ ]
        B -->|Retrieve Documents| C[Knowledge Base]
        C -->|Relevant Documents| B
        B -->|Provide Context| D[Generation Module]
        D -->|Generate Response| E[Final Response]
    end
    
    E -->|Send Back| F[User Response]

    style RAG_Framework fill:#f9f9f9,stroke:#333,stroke-width:2px
    style A fill:#FFDDC1
    style E fill:#85E3FF
    style F fill:#85E3FF

    %% Annotations
    classDef query fill:#FFDDC1,stroke:#333,stroke-width:1px;
    classDef retrieval fill:#FFABAB,stroke:#333,stroke-width:1px;
    classDef knowledgeBase fill:#FFC3A0,stroke:#333,stroke-width:1px;
    classDef generation fill:#D5AAFF,stroke:#333,stroke-width:1px;
    classDef response fill:#85E3FF,stroke:#333,stroke-width:1px;
```

And as you can imagine, there as few frameworks already out there.

{{< callout type="info" >}}
Normally, you will see that [RAG frameworks relate](#interesting-rag-resoures) with: [VectorDBs](#vectordbs), Embedding Models and [LLMs](#interesting-api-keys-for-llms)
{{< /callout >}}

## RAG Frameworks

### ChatBot for Real Estate - LlamaIndex

**[LLamaIndex](https://github.com/run-llama/llama_index)** is awsome.

And for a real estate agent bot, LlamaIndex + **Mem0** does the trick.

How Exactly?

See [this repo folder](https://github.com/JAlcocerT/Data-Chat/tree/main/LLamaIndex/With_Mem0). You will need [OpenAI & Anthropic APIs](#interesting-api-keys-for-llms)


{{< callout type="info" >}}
For the [Real Estate Web Project](https://github.com/JAlcocerT/ScrewFastMoiRealEstate) commented in [this post](https://jalcocert.github.io/JAlcocerT/astro-web-setup/) I was asked to provide a QnA Bot
{{< /callout >}}

### Exploring LangChain

The [**LangChain**](https://github.com/langchain-ai/langchain) framework is amazing.

* https://pypi.org/project/langchain/
* https://python.langchain.com/v0.2/docs/introduction/

It can helpful to:

1. Chat with PDFs
2. Even with CSV's...
3. ...or a Database!

{{< cards cols="2" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/how-to-chat-with-your-data/" title="Blog on LangChain (CSV & DB)" >}}
  {{< card link="https://github.com/JAlcocerT/Data-Chat/tree/main/LangChain" title="LangChain in DataChat" >}}
{{< /cards >}}

{{< callout type="info" >}}
You might be interested to see also [LangGraph](https://github.com/langchain-ai/langgraph)
{{< /callout >}}

#### LangChain PandasDF Chat

{{< callout type="info" >}}
Kind of [PandasAI](#exploring-pandasai), but with LangChain
{{< /callout >}}

### Exploring PandasAI

I was using the [**PandasAI**](https://github.com/Sinaptik-AI/pandas-ai) project previously to `talk with dataframes` as covered on [this Post](https://jalcocert.github.io/JAlcocerT/how-to-use-pandasAI/)

* https://pypi.org/project/pandasai/
* https://platform.openai.com/

{{< cards cols="2" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/how-to-use-pandasAI/" title="Blog about PandasAI" >}}
  {{< card link="https://github.com/JAlcocerT/Data-Chat/tree/main/PandasAI" title="Pandas AI in DataChat" >}}
{{< /cards >}}

### HayStack as RAG Framework

The [**Haystack**](https://github.com/deepset-ai/haystack) framework is completely now to me.

```sh
pip install haystack-ai
```


### EmbedChain - Mem0

It seems that the [embedchain project](https://fossengineer.com/embedchain-ai/) got absorbed into a bigger one. Im talking about the **mem0 framework**.

### Llama-Index

You might Know Llama-Index because of its RAG capabilities.

* https://github.com/run-llama/llama_index
* https://docs.llamaindex.ai/en/stable/

> LlamaIndex is a framework for building context-augmented generative AI applications with LLMs including agents and workflows.




### PydanticAI

I was using Pydantic this year.

* https://github.com/pydantic/pydantic-ai
* https://ai.pydantic.dev/
* https://pypi.org/project/pydantic-ai/

> Agent Framework / shim to use Pydantic with LLMs. **MIT Licensed!**



{{< details title="What it is Pydantic? 📌" closed="true" >}}

Pydantic is a data validation and settings management library in Python. 

It’s widely used for validating data and ensuring that inputs conform to the expected types and formats.

{{< /details >}}


---

## Summing Up

We have seen some interesting **RAG Frameworks working in Python**

[![Star History Chart](https://api.star-history.com/svg?repos=langchain-ai/langchain,run-llama/llama_index,deepset-ai/haystack,Sinaptik-AI/pandas-ai&type=Date)](https://star-history.com/#langchain-ai/langchain&run-llama/llama_index&deepset-ai/haystack&Sinaptik-AI/pandas-ai&type=Date)

Whats next from here?

Why not building something cool?


[![Star History Chart](https://api.star-history.com/svg?repos=langchain-ai/langchain,deepset-ai/haystack,Sinaptik-AI/pandas-ai&,type=Date)](https://star-history.com/langchain-ai/langchain&deepset-ai/haystack&Sinaptik-AI/pandas-ai&Date)

### Interesting API keys for LLMs

Other LLMs that I have not covered yet in posts

* Mistral AI
* https://openrouter.ai/modelsOpenRouter

> You can always use Ollama!

LLMs that have already appeared:

* OpenAI API - 
* ANthropic API - 
* GROQ APO - 

### Running LLMs Locally

* [GPT4ALL Guide](https://fossengineer.com/genai-with-python-gpt4all/) - https://github.com/nomic-ai/gpt4all

### Interesting RAG Resoures

#### VectorDBs

* qdrant - https://fossengineer.com/selfhosting-vector-admin-docker/
* ChromaDB -  https://fossengineer.com/selfhosting-chromadb-docker/

## FAQ


### More Github Actions CI/CD

* https://github.com/nektos/act

```sh
#https://github.com/nektos/act/releases/tag/v0.2.70

wget https://github.com/nektos/act/releases/download/v0.2.70/act_Linux_x86_64.tar.gz

tar -xzf act_Linux_x86_64.tar.gz
sudo mv act /usr/local/bin/
sudo chmod +x /usr/local/bin/act

act --version
```

Then go to the repo folder (where `./github/workflows` are)

```sh
act
```