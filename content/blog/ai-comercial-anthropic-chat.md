---
title: "How to use Anthropic claude-3.5-sonnet with Streamlit"
date: 2024-06-21T11:20:21+01:00
draft: false
cover:
    image: "https://socialify.git.ci/jw782cn/Claude-Streamlit/image?description=1&font=Inter&language=1&name=1&stargazers=1&theme=Auto"
    alt: "Claude with Streamlit" # alt text
    caption: "Running Claude (3.5 SOnnet) Models with Streamlit." # display caption under cover
tags: ["Docker","Gen-AI","Python","Dev","Self-Hosting"]
description: 'How to use Python with Claude 3.5 Sonnet API'
summary: 'Testing Anthropic LLMs with Python'
url: 'how-to-use-anthropic-api'
---

It time to use **Claude LLMs**.

Lets have a look to `Anthropic API` and its models.

### Claude API + Streamlit 

* https://github.com/jw782cn/Claude-Streamlit **This one helped me a lot**

* Get your API keys: <https://console.anthropic.com/settings/keys>
    * https://docs.anthropic.com/en/docs/about-claude/models

* https://platform.openai.com/api-keys

Thanks to this project for inspiration: https://github.com/jw782cn/Claude-Streamlit

```sh
python -m venv chatbot #create it

chatbot\Scripts\activate #activate venv (windows)
source chatbot/bin/activate #(linux)
```

```sh
pip install -r requirements.txt #all at once
streamlit run claude.py
```

> that project also supports OpenAI Models

* https://docs.anthropic.com/en/prompt-library/library
* https://docs.anthropic.com/en/docs/about-claude/models

* https://console.anthropic.com/settings/plans

<!-- fopaturo -->

![Streamlit Chat with PDF with OpenAI](/img/GenAI/Anthropic/Claude_vs_OpenAI.jpeg)

### Getting Access to Anthropic API


The Power of Claude 3 API: Building a Generative AI App with Anthropic Claude AI

<!-- https://www.youtube.com/watch?v=ximj9QWle-g -->

{{< youtube "ximj9QWle-g" >}}


You need to take into consideration the Name as described at the Column 'Latest 1P API model name'
in their web: https://docs.anthropic.com/en/docs/about-claude/models

* claude-3-opus-20240229
* claude-3-sonnet-20240229 
* claude-3.5-sonnet-20240620

---

## Conclusions

I am building a **multi LLM provider** chat right here: <https://github.com/JAlcocerT/Streamlit-MultiChat>

Thanks to the learnings on how to use Claude with Python.

The way to call the API is a little bit different than the OpenAI one.

{{< callout type="info" >}}
To get consistent API calls across providers, I need to have a look to the LiteLLM project
{{< /callout >}}

Its a good complement to the GROQ API for LLMs.

* Groq - https://console.groq.com/keys

### FAQ


Thanks to Fireship and the video:

<!-- {{< youtube id="v=m_xoN8KlP3w" autoplay="false" >}} -->

{{< youtube "m_xoN8KlP3w" >}}