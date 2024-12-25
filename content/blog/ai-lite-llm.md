---
title: "[AI] Using LiteLLM to unify LLMs calls"
date: 2024-12-25
draft: false
# cover:
#     image: "https://socialify.git.ci/alejandro-ao/ask-multiple-pdfs/image?description=1&font=Inter&language=1&name=1&stargazers=1&theme=Auto"
#     alt: "ChatPDF" # alt text
#     caption: "SelfHosting A RAG App to chat with PDFs." # display caption under cover
tags: ["Gen-AI","Python"]
description: 'How to use LiteLLM with different APIs - From OpenAI to Mistral APIs'
summary: 'Setup LiteLLM to make LLMs API calls.'
url: 'how-to-use-lite-llm'
---

Its time to discover **LiteLLM**

* https://github.com/BerriAI/litellm
* https://pypi.org/project/litellm/

> Python SDK, Proxy Server (LLM Gateway) to call 100+ LLM APIs in OpenAI format - [Bedrock, Azure, OpenAI, VertexAI, Cohere, Anthropic, Sagemaker, HuggingFace, Replicate, Groq]




{{< callout type="warning" >}}
Make sure to understand each **API costs**. This can help - https://models.litellm.ai/ 
{{< /callout >}}


### LiteLLM Setup

Proper [dev env please](https://jalcocert.github.io/JAlcocerT/useful-python-stuff/#python-apps-reliability).

```sh
python3 -m venv litellm_venv #create the venv

#litellm_venv\Scripts\activate #activate venv (windows)
source litellm_venv/bin/activate #(linux)
```

```sh
pip install litellm==1.55.9 #https://pypi.org/project/litellm/#history

```
As of today, it automatically installs OpenAI version `1.58.1`

```sh
source .env

#export OPENAI_API_KEY="your-api-key-here"
#set OPENAI_API_KEY=your-api-key-here
#$env:OPENAI_API_KEY="your-api-key-here"
echo $OPENAI_API_KEY
```

## About LLMs APIs


> Tested LiteLLM as per its Docs [here](https://github.com/JAlcocerT/Streamlit-AIssistant/tree/main/Z_Tests/Gemini_API)

### OpenAI

* https://platform.openai.com/api-keys


```py
from litellm import completion
import os

## set ENV variables
os.environ["OPENAI_API_KEY"] = "your-openai-key"

messages = [{ "content": "Hello, how are you?","role": "user"}]

# openai call
response = completion(model="openai/gpt-4o", messages=messages)

# anthropic call
response = completion(model="anthropic/claude-3-sonnet-20240229", messages=messages)
print(response)
```


### Anthropic

* https://console.anthropic.com/workbench/


```py
from litellm import completion
import os

## set ENV variables
os.environ["ANTHROPIC_API_KEY"] = "your-cohere-key"

messages = [{ "content": "Hello, how are you?","role": "user"}]


# anthropic call
response = completion(model="anthropic/claude-3-sonnet-20240229", messages=messages)
print(response)
```

### Groq

* Get your Groq API for the app <https://console.groq.com/keys>

### Ollama

You can setup [Ollama, even with UI](https://fossengineer.com/ollama-web-ui/)

### MistralAPI

## Conclusions

This very cool library can simplify AI Apps like the multichat I built.

As it can unify the API calls across different providers

---

## FAQ

### LLMs APIs in a Nutshell