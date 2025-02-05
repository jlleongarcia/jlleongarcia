---
title: "[AI] Using LiteLLM to unify LLMs calls"
date: 2025-05-28
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

[![Star History Chart](https://api.star-history.com/svg?repos=BerriAI/litellm,type=Date)](https://star-history.com/BerriAI/litellm&Date)


{{< callout type="info" >}}
Been testing LiteLLM at [AIssistant](https://github.com/JAlcocerT/Streamlit-AIssistant/tree/main/Z_Tests), with this [script](https://github.com/JAlcocerT/Streamlit-AIssistant/blob/main/Z_Tests/LiteLLM/litellm_sample.py)
{{< /callout >}}



{{< cards >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/ai-useful-yet-simple/" title="AIssistant" image="/blog_img/GenAI/AIssistant.png" subtitle="AI all in one assistant" >}}
{{< /cards >}}


### LiteLLM Setup

Proper [dev env please](https://jalcocert.github.io/JAlcocerT/useful-python-stuff/#python-apps-reliability).


{{< callout type="warning" >}}
Then, Make sure to understand each **API costs**. This can help - https://models.litellm.ai/ 
{{< /callout >}}


```sh
python3 -m venv litellm_venv #create the venv

#litellm_venv\Scripts\activate #activate venv (windows)
source litellm_venv/bin/activate #(linux)
```

```sh
pip install litellm==1.55.9 #https://pypi.org/project/litellm/#history
```

As of today, it **automatically installs OpenAI** (version `1.58.1`).


## About LLMs APIs


> Tested LiteLLM as per its Docs [here](https://github.com/JAlcocerT/Streamlit-AIssistant/tree/main/Z_Tests/Gemini_API)

API Keys will be passed via env variables:

```sh
source .env

#export OPENAI_API_KEY="your-api-key-here"
#set OPENAI_API_KEY=your-api-key-here
#$env:OPENAI_API_KEY="your-api-key-here"
echo $OPENAI_API_KEY
```

```py
import os

from dotenv import load_dotenv

# Load environment variables from the .env file - 
## Instead of hardcoding them in the py script
load_dotenv()
```


{{< callout type="info" >}}
See this repo to get to know more [**free LLM API** resources](https://github.com/cheahjs/free-llm-api-resources) 
{{< /callout >}}



### OpenAI

* https://platform.openai.com/api-keys


```py
from litellm import completion
import os

## set ENV variables
##os.environ["OPENAI_API_KEY"] = "your-openai-key"

messages = [{ "content": "Hello, how are you?","role": "user"}]

# openai call
response = completion(model="openai/gpt-4o", messages=messages)

# anthropic call
response = completion(model="anthropic/claude-3-sonnet-20240229", messages=messages)
print(response)
```

### Anthropic

* https://console.anthropic.com/workbench/

Go to [Anthropic Dashboard](https://console.anthropic.com/dashboard) -> Settings -> Keys

> Remember that **Claude models** are ordered: Opus > Sonnet > Haiku

Lets try the balanced **Claude Sonnet 3.5 via LiteLLM API unified call**

```py
from litellm import completion
import os

## set ENV variables
##os.environ["ANTHROPIC_API_KEY"] = "sk-ant-api03-..."
import os
from litellm import completion

#anthropic api call
messages = [{"role": "user", "content": "Hey! Which model are you and who train you?"}]
response = completion(model="claude-3-5-sonnet-20240620", messages=messages)
print(response)

#Extracting the message content
message_content = response.choices[0].message.content
print(message_content)


# Extracting the total tokens
total_tokens = response.usage.total_tokens
print(total_tokens)
```

> This is much simpler than having to remember how to use each API

For the [Anthropic API, it worked as per](https://github.com/JAlcocerT/Streamlit-AIssistant/blob/main/Z_Tests/ST_Anthropic/anthropic_api_test.py):

```py
    client = anthropic.Anthropic(api_key=api_key)
    response = client.messages.create(
        model=model,
        max_tokens=1024,
        temperature=temperature,
        system="Generate 5 attention-grabbing blog titles based on user-provived keywords",
        messages=[{"role":"user", "content":user_content}],
    )
    return response.content[0].text
```

### Groq

* Get your **Groq API** for the app <https://console.groq.com/keys>

```py
from litellm import completion
import os

##os.environ['GROQ_API_KEY'] = "gsk_...."
response = completion(
    model="groq/llama3-8b-8192",  #llama3-70b-8192 #mixtral-8x7b-32768 
    #llama-3.1-70b-versatile #llama-3.3-70b-versatile
    messages=[
       {"role": "user", "content": "hello from litellm, which model are you?"}
   ],
)
##print(response)

message_content = response.choices[0].message.content
print(message_content)


# Extracting the total tokens
total_tokens = response.usage.total_tokens
print(total_tokens)
```


See all **models available via Groq API** with:

```sh
source .env

curl https://api.groq.com/openai/v1/models \
-H "Authorization: Bearer $GROQ_API_KEY"
```


{{< callout type="info" >}}
See newer models first with [this script](https://github.com/JAlcocerT/Streamlit-AIssistant/blob/main/Z_Tests/Groq_API/list_groq_llms.py).
{{< /callout >}}

As of now, we can use the Mixtral model (mixtral-8x7b-32768) with Groq, or directly with their creators - [Mistral](#mistralapi)


### Ollama

```py
from litellm import completion

response = completion(
            model="ollama/llama2",
            messages = [{ "content": "Hello, how are you?","role": "user"}],
            api_base="http://localhost:11434"
)
```

{{< callout type="info" >}}
You can setup [Ollama, even with UI](https://fossengineer.com/ollama-web-ui/)
{{< /callout >}}

### Cloudflare Workers AI


Cloudflare is not only great to [distribute our websites globally](https://fossengineer.com/alternatives-for-hosting-static-websites/).

We can use [CF WnP with Github to build and deploy our sites](https://jalcocert.github.io/JAlcocerT/astro-web-cloudflare-pages/)

Now they offer free AI tier: https://developers.cloudflare.com/workers-ai/

And CF WnP also works with LiteLLM

These are the models available: <https://developers.cloudflare.com/workers-ai/models/>


{{< callout type="info" >}}
Ill focus just on LLMs, but there are more AI models already there (speech, image,...)
{{< /callout >}}

### MistralAPI

https://docs.mistral.ai/api/#tag/chat/operation/chat_completion_v1_chat_completions_post

1. Go to https://console.mistral.ai/
2. Register (they require phone number too)
3. Get Mistral APi key

```py

```

{{< callout type="info" >}}

{{< /callout >}}

### Hugging Face Models

* https://huggingface.co/

Go to the [HF Profile](https://huggingface.co/settings/profile) -> `Access Tokens`

* https://huggingface.co/docs/api-inference/en/index

```py
import os
from litellm import completion

# [OPTIONAL] set env var
##os.environ["HUGGINGFACE_API_KEY"] = "huggingface_api_key"

messages = [{ "content": "There's a llama in my garden 😱 What should I do?","role": "user"}]

# e.g. Call 'https://huggingface.co/meta-llama/Meta-Llama-3.1-8B-Instruct' from Serverless Inference API
response = completion(
    model="huggingface/meta-llama/Meta-Llama-3.1-8B-Instruct",
    messages=[{ "content": "Hello, how are you?","role": "user"}],
    stream=True
)
print(response)
```


{{< callout type="warning" >}}
Requires **HF Pro**
{{< /callout >}}

### Google Gemini API

https://www.youtube.com/watch?v=iw6xozGZH3g

### Open Router API

https://docs.litellm.ai/docs/providers/openrouter

---

## Conclusions

This very cool library can simplify AI Apps like the multichat I built.

As it can unify the API calls across different providers

---

## FAQ

### LLMs APIs in a Nutshell