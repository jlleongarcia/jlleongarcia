---
title: "[AI] Exploring RAGs. Creating a Chat over custom Data"
date: 2024-11-30
draft: false
# cover:
#     image: "https://socialify.git.ci/alejandro-ao/ask-multiple-pdfs/image?description=1&font=Inter&language=1&name=1&stargazers=1&theme=Auto"
#     alt: "ChatPDF" # alt text
#     caption: "SelfHosting A RAG App to chat with PDFs." # display caption under cover
tags: ["Gen-AI","Python","Dev"]
description: 'Exploring RAGs and creating a Data Chat using LLMs via APIs'
summary: 'How to create a Python Apps to chat with your data.'
url: 'how-to-use-rags-with-python'
---


{{< callout type="info" >}}
The **[Data-ChatBot](https://github.com/JAlcocerT/Data-Chat)**
{{< /callout >}}

## How to use RAGs

Previously this year, I got lucky enough to find these open source projects:

{{< cards >}}
  {{< card link="https://github.com/JAlcocerT/ask-multiple-pdfs/" title="My Fork in Github for Ask Multiple PDFs ↗" icon="book-open" >}}
  {{< card link="https://github.com/JAlcocerT/langchain-ask-csv" title="My Fork in Github for Ask CSV ↗" icon="user" >}}
{{< /cards >}}

They both use [LangChain as RAG framework](#exploring-langchain)

We can build very interesting QnA over knowledge apps: https://github.com/langchain-ai/chat-langchain

### ChatBot for Real Estate - LlamaIndex

LlamaIndex + **Mem0** does the trick.

How Exactly? See [this repo folder](https://github.com/JAlcocerT/Data-Chat/tree/main/LLamaIndex/With_Mem0)


{{< callout type="info" >}}
For the [Real Estate Web Project](https://github.com/JAlcocerT/ScrewFastMoiRealEstate) commented in [this post](https://jalcocert.github.io/JAlcocerT/astro-web-setup/) I was asked to provide a QnA Bot
{{< /callout >}}

### Exploring LangChain

https://github.com/langchain-ai/langchain

{{< cards cols="2" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/how-to-chat-with-your-data/" title="Blog on LangChain" >}}
  {{< card link="https://github.com/JAlcocerT/Data-Chat/tree/main/LangChain" title="LangChain in DataChat" >}}
{{< /cards >}}

### Exploring PandasAI

I was using PandasAI previously to `talk with dataframes`

{{< cards cols="2" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/how-to-use-pandasAI/" title="Blog on PandasAI" >}}
  {{< card link="https://github.com/JAlcocerT/Data-Chat/tree/main/PandasAI" title="Pandas AI in DataChat" >}}
{{< /cards >}}

---

## Summing Up

### Interesting API keys for LLMs

* Mistral AI
* https://openrouter.ai/modelsOpenRouter

> You can always use Ollama!