---
title: "How to create awsome Presentations with AI" 
date: 2024-12-25
draft: false
tags: ["AI"]
description: 'Creating AI Driven Presentations'
summary: 'Using LLMs to create PPTs'
url: 'creating-presentations-with-ai'
---

It all started with the [AIssistant post](https://jalcocert.github.io/JAlcocerT/ai-useful-yet-simple/#slides-creation-agent).

But the AI powered PPT creation deserves a separate post.


## Understanding PPT as a Code Frameworks

### SliDev

[SliDev is an awsome project](https://fossengineer.com/how-to-use-slidev/) to generate PPT as code - **leveraging VueJS framework**.

> I love the SliDev project so much, that [I forked it](https://github.com/JAlcocerT/slidev).

{{< callout type="info" >}}
**SliDev** can be deployed as static sites to [GH Pages with GH Actions CI/CD](https://github.com/JAlcocerT/Streamlit-MultiChat/blob/main/.github/workflows/SliDev_CICD.yml)
{{< /callout >}}

### Marp

You can also create **PPTs from markdown** with [Marp](https://github.com/marp-team/marpit)

### RemarkJS

With [RemarkJS](https://fossengineer.com/create-ppt-with-code/#remark)

## AI Powered SliDev


First **SliDev with AI scheleton**, pretty much an OpenAI API call:

```py
#https://raw.githubusercontent.com/JAlcocerT/Streamlit-MultiChat/refs/heads/main/Z_Tests/OpenAI/openai_slidev.py
#python3 pyopen.py > output.mdx

import os
from dotenv import load_dotenv
from openai import OpenAI  # pip install openai==1.30.5

# Load environment variables from the .env file
load_dotenv()

# Get the OpenAI API key from the environment variables
api_key = os.getenv("OPENAI_API_KEY")

# Initialize the OpenAI client
client = OpenAI(
    api_key=api_key,
)

chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "system",
            "content": """You are an expert developer in SliDev - the framework to create PPTs
                        """,
        },
        {"role": "user", "content": "Who are you and what can you do?"}

    ],
    model="gpt-4o-mini",
    temperature=0.3,
)

# print(chat_completion)
# Extract and print the content of the completed message
completed_message = chat_completion.choices[0].message.content
print(completed_message)
```

## Conclusions


---

## FAQ

### Cool resources to design PPTs

* https://english-at-home.com/business/vocabulary-and-phrases-for-making-presentations/
* https://www.amazon.com/How-Design-Worthy-Presentation-Slides-ebook/dp/B00FX3IMZY

### Cool Diagrams as a Code

* [MermaidJS](https://jalcocert.github.io/JAlcocerT/how-to-use-mermaid-diagrams/)
* [Python Diagrams](https://fossengineer.com/free-diagram-tools/#free-diagrams-as-a-code)

> See how to make [AI powered Diagrams](https://jalcocert.github.io/JAlcocerT/ai-useful-yet-simple/#diagrams-with-ai)