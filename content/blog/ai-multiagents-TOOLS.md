---
title: "AI Multi Agents"
date: 2025-12-31
draft: true
# cover:
#     image: "https://socialify.git.ci/jw782cn/Claude-Streamlit/image?description=1&font=Inter&language=1&name=1&stargazers=1&theme=Auto"
#     alt: "" # alt text
#     caption: "" # display caption under cover
tags: ["Gen-AI","Python","Dev"]
description: 'Reviewing the most Popular AI Agents frameworks'
summary: '.'
url: 'ai-multi-agents-frameworks'
---


[RAGs](https://jalcocert.github.io/JAlcocerT/how-to-use-rags-with-python/), [Function calling](https://jalcocert.github.io/JAlcocerT/how-to-use-openai-function-calling/), [Structured Output](https://jalcocert.github.io/JAlcocerT/how-to-use-structured-outputs-LLM/),...

They are all great.

But can we just have LLMs working together? 

Actually, this is great tool to have when doing **research** of some new topic.

{{< details title="Interesting Research Tools 📌" closed="true" >}}

**Research Agent**

* https://github.com/assafelovic/gpt-researcher
    * https://gptr.dev/

> LLM based autonomous agent that conducts local and web research on any topic and generates a comprehensive report with citations - **Apache v2**

{{< /details >}}

{{< callout type="info" >}}
Im testing these tools at the [**MultiAgents** Repo](https://github.com/JAlcocerT/multiagents) 💻 
{{< /callout >}}


### Agents with LangChain

You guessed it.

[LangChain can also do Agents](https://www.langchain.com/agents) tricks.

* https://www.langchain.com/stateofaiagents

{{< callout type="info" >}}
With **LangChain as RAG** we can [chat with CSV & DBs](https://jalcocert.github.io/JAlcocerT/how-to-chat-with-your-data/). Also [with PDFs](https://jalcocert.github.io/JAlcocerT/how-to-chat-with-pdfs/)
{{< /callout >}}


### Agents with Llama-Index

* https://docs.llamaindex.ai/en/stable/

LlamaIndex, as described, is designed to work with various tools, data sources, and workflows. It helps to augment LLMs with context from different data sources such as APIs, SQL databases, PDFs, etc., without being tied to a specific framework. The ability to integrate multiple agents, tools, and data sources makes it adaptable to various development environments and workflows.

Context augmentation involves providing an LLM with specific data (private or external) to help solve a problem, enhancing the LLM's ability to generate relevant answers by accessing relevant data.
Agents are knowledge assistants powered by LLMs that perform tasks using various tools, including Retrieval-Augmented Generation (RAG) as one tool in a larger workflow.
Workflows combine multiple agents, tools, and data connectors to create complex, event-driven processes that can automate tasks, reflecting advanced LLM applications.

### Agents with PydanticAI

<!-- https://www.youtube.com/watch?v=1lBpIbRafvI -->

{{< youtube "1lBpIbRafvI" >}}


### Chat-DEV

* {{< newtab url="https://.kuma.pet/" text="The   Site" >}}
* {{< newtab url="https://github.com/louislam/-" text="The   Source Code at Github" >}}
    * License: {{< newtab url="https://github.com/louislam/-?tab=MIT-1-ov-file#readme" text="MIT" >}} ❤️


https://github.com/OpenBMB/ChatDev
https://github.com/OpenBMB/ChatDev?tab=Apache-2.0-1-ov-file#readme

>  **Create Customized Software** using Natural Language Idea (through LLM-powered **Multi-Agent Collaboration**) 

### Langroid

* https://github.com/langroid/langroid
    * https://langroid.github.io/langroid/

Example - https://github.com/langroid/langroid/blob/main/examples/basic/chat-search-assistant.py

> Harness LLMs with Multi-Agent Programming - **MIT LICENSED!**

### Auto-Gen

### Auto-GPT

* https://github.com/Significant-Gravitas/AutoGPT
* https://agpt.co/

> AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission is to provide the tools, so that you can focus on what matters.



### CrewAI

https://github.com/streamlit/cookbook/tree/main/recipes/crewai

Example - https://github.com/tonykipkemboi/trip_planner_agent

> CrewAI agents that can plan your vacation.


<!-- https://www.youtube.com/watch?v=TbTqA09-cwQ -->

{{< youtube "TbTqA09-cwQ" >}}



### MetaGPT
 
###  SuperAGI

https://github.com/TransformerOptimus/SuperAGI
https://github.com/TransformerOptimus/SuperAGI?tab=MIT-1-ov-file#readme

>  <⚡️> SuperAGI - A dev-first open source autonomous AI agent framework. Enabling developers to build, manage & run useful autonomous agents quickly and reliably. 


---

## FAQ

* https://e2b.dev/ai-agents/open-source


### Interesting LLMs Architectures

* MoE - Mix of Experts
* MoA - Mix of Agents
* ReACT

{{< details title="More about Solara - ReACT Framework 📌" closed="true" >}}

https://github.com/widgetti/solara

> A Pure Python, React-style Framework for Scaling Your Jupyter and Web Apps


Build a Python WebApp in 3 minutes with [Solara (Streamlit Alternative)](https://www.youtube.com/watch?v=hXA4JPNXhqQ)


{{< /details >}}

### How to Provide Web Context to the Agents

#### Via Scrapping

#### Via Web Search

For example, with duckduckgo:

```sh
pip install duckduckgo-search
```

```py
from duckduckgo_search import ddg_answers

# Perform search query
results = ddg_answers('Python programming')

# Output the search results
print(results)
```