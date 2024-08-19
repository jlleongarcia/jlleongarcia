---
title: "How to use Anthropic claude-3.5-sonnet with Streamlit"
date: 2024-06-21T11:20:21+01:00
draft: false
cover:
    image: "https://socialify.git.ci/jw782cn/Claude-Streamlit/image?description=1&font=Inter&language=1&name=1&stargazers=1&theme=Auto"
    alt: "Claude with Streamlit" # alt text
    caption: "Running Claude (3.5 SOnnet) Models with Streamlit." # display caption under cover
tags: ["Docker","Gen-AI","Python","Dev","Self-Hosting"]
description: 'Python Claude 3.5 Sonnet API'
summary: ''
url: 'how-to-use-anthropic-api'
---

## Examples

### Claude API + Streamlit 

* https://github.com/jw782cn/Claude-Streamlit **This one helped me a lot**

* https://console.anthropic.com/settings/keys
    * https://docs.anthropic.com/en/docs/about-claude/models
* https://platform.openai.com/api-keys
* https://github.com/jw782cn/Claude-Streamlit

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

https://docs.anthropic.com/en/prompt-library/library
https://docs.anthropic.com/en/docs/about-claude/models

https://console.anthropic.com/settings/plans

<!-- fopaturo -->

![Streamlit Chat with PDF with OpenAI](/img/GenAI/Anthropic/Claude_vs_OpenAI.jpeg)

### Getting Access to Anthropic API

### Get


The Power of Claude 3 API: Building a Generative AI App with Anthropic Claude AI

https://www.youtube.com/watch?v=ximj9QWle-g

You need to take into consideration the Name as described at the Column 'Latest 1P API model name'
in their web: https://docs.anthropic.com/en/docs/about-claude/models

claude-3-opus-20240229", "claude-3-sonnet-20240229" 
"claude-3.5-sonnet-20240620"

---

## Conclusions

### FAQ


Fireship

{{< youtube id="v=m_xoN8KlP3w" autoplay="false" >}}

* Groq - https://console.groq.com/keys