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
The **[Data-ChatBot](https://github.com/JAlcocerT/Data-Chat)**
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

This is the general idea of a RAG architecture:

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
Normally, you will see that RAG frameworks relate with: [VectorDBs](#vectordbs)
{{< /callout >}}

## RAG Frameworks

### ChatBot for Real Estate - LlamaIndex

LlamaIndex + **Mem0** does the trick.

How Exactly? See [this repo folder](https://github.com/JAlcocerT/Data-Chat/tree/main/LLamaIndex/With_Mem0)


{{< callout type="info" >}}
For the [Real Estate Web Project](https://github.com/JAlcocerT/ScrewFastMoiRealEstate) commented in [this post](https://jalcocert.github.io/JAlcocerT/astro-web-setup/) I was asked to provide a QnA Bot
{{< /callout >}}

### Exploring LangChain

The [LangChain](https://github.com/langchain-ai/langchain) framework is amazing.


{{< cards cols="2" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/how-to-chat-with-your-data/" title="Blog on LangChain" >}}
  {{< card link="https://github.com/JAlcocerT/Data-Chat/tree/main/LangChain" title="LangChain in DataChat" >}}
{{< /cards >}}

{{< callout type="info" >}}
You might be interested to see also [LangGraph](https://github.com/langchain-ai/langgraph)
{{< /callout >}}

### Exploring PandasAI

I was using the [**PandasAI**](https://github.com/Sinaptik-AI/pandas-ai) project previously to `talk with dataframes` as covered on [this Post](https://jalcocert.github.io/JAlcocerT/how-to-use-pandasAI/)

{{< cards cols="2" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/how-to-use-pandasAI/" title="Blog on PandasAI" >}}
  {{< card link="https://github.com/JAlcocerT/Data-Chat/tree/main/PandasAI" title="Pandas AI in DataChat" >}}
{{< /cards >}}

### HayStack as RAG Framework

The [**Haystack**](https://github.com/deepset-ai/haystack) framework is completely now to me.

```sh
pip install haystack-ai
```


### EmbedChain - Mem0

It seems that the [embedchain project](https://fossengineer.com/embedchain-ai/) got absorbed into a bigger one. Im talking about the mem0 framework.


---

## Summing Up


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

### Interesting RAG Resoures

#### VectorDBs

