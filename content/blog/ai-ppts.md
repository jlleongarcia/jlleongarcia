---
title: "How to create awsome Presentations with AI" 
date: 2025-01-01
draft: false
tags: ["AI"]
description: 'Creating AI Driven Presentations'
summary: 'Using LLMs to create PPTs'
url: 'creating-presentations-with-ai'
---

It all started with the [AIssistant post](https://jalcocert.github.io/JAlcocerT/ai-useful-yet-simple/#slides-creation-agent).

But the **AI powered PPT creator** deserves a separate post.


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


First **SliDev with AI scheleton**, pretty much an [OpenAI API call](https://github.com/JAlcocerT/Streamlit-AIssistant/tree/main/PPT_Service):

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

But thats too hard to maintain, **how about this?**

```py
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

mtg_must_have= """
* Purpose - Every meeting should have an objective—the reason why you're having the meeting. Before you schedule a meeting be sure you know what it is that you want out of the meeting.
* Agenda - An agenda outlines the plan for the meeting and lets participants know what to expect. It allows them to be prepared so they can actively participate and bring their expertise to the table.  
* preparation - Before the meeting all participants should take some time to review the agenda and prepare any questions they may have. 
"""

system_reminder = """
Never start your answers with "As an AI language model" when responding to questions.

No disclaimer is needed in any situation.

Write using simple language so a grandma could understand.

Use a conversational tone, be informal and approachable. Write like how people in real life would talk. A bit of slang is okay but don't overdo it.

If you don’t know the answer, just say you don’t know.

Your answers should be on point, succinct and useful. Each response should be written with maximum usefulness in mind rather than being polite.

If something seems out of reach, don’t ask the user to do it; instead, try to work through all your available options first.

When solving problems, take a breath and tackle them step by step.

My career depends on you giving me a good answer

Speak only what needs to be said. Keep the responses brief and to the point, avoid extra words and overly long explanations.
"""

chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "system",
            "content": f"""You are an expert meeting assistant. Very aware of the following:
                              {mtg_must_have} 
                            Remember also, that: {system_reminder}
                        """,
        },
        {"role": "user", "content": "Who are you and what can you do?"}

    ],
    model="gpt-4o-mini",
    temperature=0.3,
)

# Extract and print the content of the completed message
completed_message = chat_completion.choices[0].message.content
print(completed_message)
```

> With this approach you can have the prompts saved at `./Z_AIgents/Prompts/prompts_mdsummarizer.md`

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