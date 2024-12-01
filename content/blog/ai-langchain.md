---
title: "[AI] LangChain Explained - Providing context to LLMs"
date: 2024-07-15
draft: false
# cover:
#     image: "https://socialify.git.ci/alejandro-ao/ask-multiple-pdfs/image?description=1&font=Inter&language=1&name=1&stargazers=1&theme=Auto"
#     alt: "ChatPDF" # alt text
#     caption: "SelfHosting A RAG App to chat with PDFs." # display caption under cover
tags: ["Docker","Gen-AI","Python","Dev","Self-Hosting"]
description: 'Why LangChain is great for AI Project'
summary: 'How to create a Streamlit App that uses LangChain to chat with your data.'
url: 'how-to-chat-with-your-data'
---

As [commented earlier this year](https://jalcocert.github.io/JAlcocerT/how-to-chat-with-pdfs/), I was inspired by Alejandro AO and its **Python AI projects**.


[I commented the PDF one **here** →](/JAlcocerT/how-to-chat-with-pdfs)

You guessed it. They are using **LangChain**.

{{< cards >}}
  {{< card link="https://github.com/JAlcocerT/ask-multiple-pdfs/" title="My Fork in Github for Ask Multiple PDFs ↗" icon="book-open" >}}
  {{< card link="https://github.com/JAlcocerT/langchain-ask-csv" title="My Fork in Github for Ask CSV ↗" icon="user" >}}
{{< /cards >}}


[LangChain is an alternative](https://jalcocert.github.io/JAlcocerT/how-to-use-pandasAI/#other-foss-ways-to-chat-with-your-data) to [PandasAI](https://jalcocert.github.io/JAlcocerT/how-to-use-pandasAI/).



{{< callout type="info" >}}
I am creating a public repo with all sort if interesting libraries to **[Chat over Data](https://github.com/JAlcocerT/Data-Chat)**
{{< /callout >}}

## Chat with CSV with LangChain

You will need to have:

* [Python installed](https://jalcocert.github.io/JAlcocerT/guide-python/#installing-python-) and a [virtual environment](https://jalcocert.github.io/JAlcocerT/useful-python-stuff/) ready.
* The OpenAI API keys - * https://platform.openai.com/api-keys


These are the libraries you will need:

```sh
pip install langchain python-dotenv streamlit openai
```

But that way will install the latest version of each.

Which may cause incompatibilities in the future.

Thats why the original Alejandro AO Project has the `requirements.txt` file specifying the version.

```sh
pip install -r requirements.txt
#pip install langchain==0.0.208 python-dotenv==1.0.0 streamlit==1.25.0 openai==0.27.0 transformers==4.28.1 sentence_transformers==2.2.2 torch==2.0.1 tensorflow==2.12.0
```

I just removed most of them as the original file seemed to have many more than required.

Remember to place your OpenAI API key in the `.env` file.

And run the Streamlit App:

```sh
streamlit run main.py
```

### Understanding CSV with LangChain App

This is the general workflow of the Python app:


```mermaid
graph TD
    A[Load environment variables with dotenv] --> B{Check if OPENAI_API_KEY is set?}
    B -- No --> C[Exit program]
    B -- Yes --> D[Set Streamlit page config and header]
    D --> E[User uploads CSV file]
    E --> F{CSV file uploaded?}
    F -- No --> G[Wait for CSV upload]
    F -- Yes --> H[Create CSV agent using Langchain and OpenAI]
    H --> I[User inputs question]
    I --> J{Is a question provided?}
    J -- No --> K[Wait for question]
    J -- Yes --> L[Process the question with agent]
    L --> M[Display result using Streamlit]
```


---

## FAQ

Other Tools to **Chat over custom data** (and locally~) is [PrivateGPT](https://fossengineer.com/selfhosting-privateGPT/)

{{< youtube "Ib3nQu5bB_k" >}}