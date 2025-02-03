---
title: "Testing new LLMs with Streamlit MultiChat"
date: 2025-02-02T23:20:21+01:00
draft: false
cover:
  image: "https://socialify.git.ci/jalcocert/streamlit-multichat/image?description=1&font=Inter&language=1&name=1&stargazers=1&theme=Auto"
  alt: "ChatGPT Clone" # alt text
  caption: "Improving a ChatGPT Clone with Streamlit." # display caption under cover
tags: ["Gen-AI","Python","Dev"]
description: 'Enhancing LLM support for Streamlit-MultiChat'
summary: 'Avoid LLM lock-in and the recurring subscription bills. Simply use APIs.'
url: 'streamlit-multichat'
---

{{< callout type="info" >}}
See [**Streamlit-Multichat** Source Code](https://github.com/JAlcocerT/Streamlit-MultiChat) 💻
{{< /callout >}}

{{< cards cols="2" >}}
  {{< card link="https://jalcocert.github.io/Streamlit-MultiChat/1" title="About Streamlit MultiChat" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/create-streamlit-chatgpt" title="Previous Blog Post" >}}
{{< /cards >}}

## OpenAI

They have released recently **o3-mini** model.

GPT-4o-mini has been my go to in terms of value per money.

But we have now **o1 (mini also) and o3-mini** with higher context window (200K)

* https://openai.com/api/
* https://platform.openai.com/docs/models/#current-model-aliases


```sh
pip install openai==1.61.0
```

See the **latest openAI models**:

```sh
import os
from dotenv import load_dotenv
from openai import OpenAI  # pip install openai>0.28

# Load environment variables from the .env file
load_dotenv()

client = OpenAI()
models = client.models.list()
for model in models:
    print(model.id)
```


## Grok


{{< cards cols="1" >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/how-to-use-grok-api" title="Grok API Blog Post" >}}
{{< /cards >}}

## DeepSeek via Ollama