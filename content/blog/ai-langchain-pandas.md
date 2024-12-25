---
title: "Using LangchAIn with pandas - Enhancing Trip Planner"
date: 2024-11-19
draft: false
# cover:
#     image: "https://socialify.git.ci/alejandro-ao/ask-multiple-pdfs/image?description=1&font=Inter&language=1&name=1&stargazers=1&theme=Auto"
#     alt: "ChatPDF" # alt text
#     caption: "SelfHosting A RAG App to chat with PDFs." # display caption under cover
tags: ["Gen-AI","Python","Dev"]
description: 'How to use LangChain to chat with a Pandas DF.'
url: 'using-langchain-with-pandas-df'
---

What if we could use **AI to chat about weather** patterns in a location?

By using Langchain, together with pandas DF, we will extract relevant information.

The weather information?

Thats covered on the Python **[Trip Planner](https://github.com/JAlcocerT/Py_Trip_Planner/) Project**.

With MeteoStat and OpenMeteo APIs.

## Intro to LangChain with PandasDF

As [commented earlier this year](https://jalcocert.github.io/JAlcocerT/how-to-chat-with-pdfs/), I was inspired by **Alejandro AO** and its **Python AI projects**.


[I commented the PDF one **here** →](/JAlcocerT/how-to-chat-with-pdfs)


{{< cards >}}
  {{< card link="https://github.com/JAlcocerT/ask-multiple-pdfs/" title="My previous Fork in GH for Ask Multiple PDFs ↗" icon="book-open" >}}
  {{< card link="https://github.com/JAlcocerT/langchain-ask-csv" title="My Fork in Github for Ask CSV ↗" icon="user" >}}
{{< /cards >}}


[LangChain is an alternative](https://jalcocert.github.io/JAlcocerT/how-to-use-pandasAI/#other-foss-ways-to-chat-with-your-data) to [PandasAI](https://jalcocert.github.io/JAlcocerT/how-to-use-pandasAI/).


{{< callout type="info" >}}
I am creating a public repo with all sort if **interesting RAG** libraries to **[Chat over Data](https://github.com/JAlcocerT/Data-Chat)** 💻 
{{< /callout >}}

### Pre Requisites

* [Python installed](https://jalcocert.github.io/JAlcocerT/guide-python/#installing-python-) and a [virtual environment](https://jalcocert.github.io/JAlcocerT/useful-python-stuff/) ready.
* The OpenAI API keys - <https://platform.openai.com/api-keys>


{{< callout type="info" >}}
See the modified working code [here](https://github.com/JAlcocerT/langchain-ask-csv) 💻
{{< /callout >}}


<!-- https://www.youtube.com/watch?v=rFQ5Kmkd4jc -->

{{< youtube "rFQ5Kmkd4jc" >}}


---

## FAQ


You can also try, these below (Which I already covered):

* [PandasAI](https://jalcocert.github.io/JAlcocerT/how-to-use-pandasAI/)
* LlamaIndex

### API Keys for LLMs

* https://console.anthropic.com/settings/keys
    * https://docs.anthropic.com/en/docs/about-claude/models
* https://platform.openai.com/api-keys