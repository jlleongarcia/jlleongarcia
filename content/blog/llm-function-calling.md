---
title: "LLMs Function Calling"
date: 2024-08-18T23:20:21+01:00
draft: false
tags: ["Dev"] 
summary: "Testing function calling with OpenAI Models. OpenAI Functions"
url: "how-to-use-openai-function-calling"
---


## OpenAI

* https://platform.openai.com/docs/guides/function-calling
    * Example: https://github.com/openai/openai-cookbook/blob/main/examples/How_to_call_functions_with_chat_models.ipynb
    * https://openai.com/index/introducing-structured-outputs-in-the-api/

> Thanks to https://www.promptingguide.ai/applications/function_calling

{{< callout type="info" >}}
Testing it together with chainlit {{< callout type="info" >}}
Thanks to [daveebbelaar repository](https://github.com/daveebbelaar/langchain-experiments)
{{< /callout >}}
{{< /callout >}}


{{% details title="How to use OpenAI API? " closed="true" %}}

```sh
pip install openai==1.40.0
```

```py
api_key = os.getenv("OPENAI_API_KEY")

client = OpenAI(api_key=api_key)

#df = read_excel(file_name)
#df_markdown = df.to_markdown(index=False)
df_markdown="12345"

chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "system",
            "content": """
                        You are an expert data analyst.
                    """,
        },
        {"role": "user", "content": f"What it is this variable containing?: {df_markdown}"}
    ],
    model="gpt-4o-mini",
    temperature=0.3,
)

completed_message = chat_completion.choices[0].message.content
print(completed_message)
```

{{% /details %}}


### Interesting Resources for Function Calling

* https://github.com/daveebbelaar/langchain-experiments/tree/main/openai-functions

ChatGPT returns natural text, and it can be unreliable. Returning functions makes the output more controlled and deterministic.

{{< callout type="info" >}}
Thanks to [daveebbelaar repository](https://github.com/daveebbelaar/langchain-experiments)
{{< /callout >}}

The feature can extract structured data from text (prompt) and assign them as arguments to a chosen function.

Developers can create their own functions connecting the LLMs to internal and external APIs and databases, and let the model decides which function to use and which arguments to pass.

Non-technical users can interact with LLMs to obtain data without having to know the underlying functions and required arguments.

## Claude


{{% details title="How to use Anthropic API?" closed="true" %}}

* https://docs.anthropic.com/en/api/client-sdks
    * https://github.com/anthropics/anthropic-sdk-python/blob/main/api.md

```sh
pip install anthropic==0.34.1 #https://github.com/anthropics/anthropic-sdk-python
```

```py
import anthropic

client = Anthropic(api_key = os.getenv("ANTHROPIC_API_KEY"),)

system_prompt = "You are a helpful Data Analyst."

message = client.messages.create(
    max_tokens=1024,
    system=system_prompt,  # Use the top-level "system" parameter
    messages=[
        {"role": "user", "content": "Hello, who you?"}
    ],
    model="claude-3-5-sonnet-20240620",
    #model="claude-3-opus-20240229",
)

#print(message.content)
content = message.content[0].text
print(content)
```
{{% /details %}}

## Groq

## Ollama

* https://mer.vin/2024/07/ollama-tool-call-example/

---

## Conclusions

There is another feature called **[Structured Outputs](https://openai.com/index/introducing-structured-outputs-in-the-api/)**

..but we can see [its all about the prompts!](https://www.reddit.com/r/ChatGPTPro/comments/17mr3z7/system_level_prompt_that_ive_been_refining_and/)



{{% details title="Example of system Prompt that works well for me " closed="true" %}}


* https://www.promptingguide.ai/techniques/activeprompt

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
    temperature=0.7,
)

# Extract and print the content of the completed message
completed_message = chat_completion.choices[0].message.content
print(completed_message)
```

{{% /details %}}

---

## FAQ

* https://aman.ai/primers/ai/prompt-engineering/

### About LangChain and Frameworks

Interesting Article - https://www.octomind.dev/blog/why-we-no-longer-use-langchain-for-building-our-ai-agents

However, as their requirements became more sophisticated, LangChain's rigid high-level abstractions turned into a source of friction and hindered productivity.


{{% details title="Issues with LangChain's abstractions were... " closed="true" %}}

* The Main Issues with LangChain's Abstractions

1. 🚧 Increased complexity of code without perceivable benefits
2. 🤔 Difficulty in understanding and maintaining code
3. 🔒 Inflexibility in adapting to new requirements
4. 🕸️ Nested abstractions leading to debugging internal framework code

Octomind's development team faced challenges when trying to implement more complex architectures, such as spawning sub-agents or having multiple specialist agents interact with each other. LangChain's limitations forced them to reduce the scope of their implementations.

* Building AI Applications Without a Framework

After removing LangChain, Octomind realized that a framework might not be necessary for building AI applications. Instead, they suggest using a building blocks approach with simple low-level code and carefully selected external packages. **The core components most applications need are**:

1. 💬 A client for LLM communication
2. 🛠️ Functions/Tools for function calling
3. 📊 A vector database for RAG
4. 🔍 An Observability platform for tracing, evaluation, etc.

By using modular building blocks with minimal abstractions, Octomind's team can now develop more quickly and with less friction, focusing on solving problems rather than translating ideas into framework-specific code.

{{% /details %}}



> `Dont marry the framework?` :)

### Generating Images with OpenAI

You can use Dalle Text2Image models via the openAI API



{{< callout type="info" >}}
I tested it during StreamlitMultichat, at [this script](https://github.com/JAlcocerT/Streamlit-MultiChat/blob/main/Z_Tests/Pict_for_SliDev-DaLLe/Dalle3SliDev.py)
{{< /callout >}}

### Understanding Images with Claude

* https://docs.anthropic.com/en/docs/build-with-claude/vision