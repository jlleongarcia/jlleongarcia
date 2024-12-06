---
title: "[AI] LangChain Explained - Providing context to LLMs"
date: 2024-07-15
draft: false
# cover:
#     image: "https://socialify.git.ci/alejandro-ao/ask-multiple-pdfs/image?description=1&font=Inter&language=1&name=1&stargazers=1&theme=Auto"
#     alt: "ChatPDF" # alt text
#     caption: "SelfHosting A RAG App to chat with PDFs." # display caption under cover
tags: ["Gen-AI","Python","Dev"]
description: 'Why LangChain is great for AI Projects. How to RAG with LangChain: CSV and DB examples.'
summary: 'How to create a Streamlit App that uses LangChain to chat with your data.'
url: 'how-to-chat-with-your-data'
---

As [commented earlier this year](https://jalcocert.github.io/JAlcocerT/how-to-chat-with-pdfs/), I was inspired by **Alejandro AO** and its **Python AI projects**.


[I commented the PDF one **here** →](/JAlcocerT/how-to-chat-with-pdfs)

But today, it is the **time for [CSV's](#chat-with-csv-with-langchain)** and with **[Databases](#chat-with-a-db-with-langchain)**!

You guessed it.

We will be using **LangChain** as RAG framework to provide the **CSV context to the LLM**.

{{< cards >}}
  {{< card link="https://github.com/JAlcocerT/ask-multiple-pdfs/" title="My previous Fork in GH for Ask Multiple PDFs ↗" icon="book-open" >}}
  {{< card link="https://github.com/JAlcocerT/langchain-ask-csv" title="My Fork in Github for Ask CSV ↗" icon="user" >}}
{{< /cards >}}


[LangChain is an alternative](https://jalcocert.github.io/JAlcocerT/how-to-use-pandasAI/#other-foss-ways-to-chat-with-your-data) to [PandasAI](https://jalcocert.github.io/JAlcocerT/how-to-use-pandasAI/).


{{< callout type="info" >}}
I am creating a public repo with all sort if interesting RAG libraries to **[Chat over Data](https://github.com/JAlcocerT/Data-Chat)** 💻 
{{< /callout >}}

## Chat with CSV with LangChain

You will need to have:

* [Python installed](https://jalcocert.github.io/JAlcocerT/guide-python/#installing-python-) and a [virtual environment](https://jalcocert.github.io/JAlcocerT/useful-python-stuff/) ready.
* The OpenAI API keys - https://platform.openai.com/api-keys


{{< callout type="info" >}}
See the modified working code [here](https://github.com/JAlcocerT/langchain-ask-csv) 💻
{{< /callout >}}

These are the libraries you will need:

```sh
pip install langchain python-dotenv streamlit openai
```

{{< callout type="warning" >}}
But that way will install the latest version of each.
{{< /callout >}}



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

## Chat with a DB with LangChain

It's not that SQL is impossible to learn.

But why not using AI as leverage to help us with D&A tasks?

And it is possible thanks to LangChain with [Python](https://jalcocert.github.io/JAlcocerT/useful-python-stuff/) and the great work of AlejandroAO

{{< callout type="info" >}}
One more time, thanks to AlejandroAO this have been possible. The working code is on my [data-chat repo](https://github.com/JAlcocerT/langchain-ask-csv) 💻 as it was not provided an original one.
{{< /callout >}}


{{< details title="Useful Tools for DBs 📌" closed="true" >}}

* [ChartDB](https://github.com/chartdb/chartdb) - Database diagrams editor that allows you to visualize and design your DB with a single query.
* [SQLiteViz](https://github.com/lana-k/sqliteviz)
* [SQliteBrowser](https://github.com/sqlitebrowser/sqlitebrowser)

{{< /details >}}


You can see that the **DB is loaded** and we can see its **Schema**.

Actually, we can make already a **MermaidJS ER diagram** to represent it:

```mermaid
erDiagram
    Album {
        int AlbumId PK
        varchar Title
        int ArtistId FK
    }
    Artist {
        int ArtistId PK
        varchar Name
    }
    Customer {
        int CustomerId PK
        varchar FirstName
        varchar LastName
        varchar Company
        varchar Address
        varchar City
        varchar State
        varchar Country
        varchar PostalCode
        varchar Phone
        varchar Fax
        varchar Email
        int SupportRepId FK
    }
    Employee {
        int EmployeeId PK
        varchar LastName
        varchar FirstName
        varchar Title
        int ReportsTo FK
        datetime BirthDate
        datetime HireDate
        varchar Address
        varchar City
        varchar State
        varchar Country
        varchar PostalCode
        varchar Phone
        varchar Fax
        varchar Email
    }
    Genre {
        int GenreId PK
        varchar Name
    }
    Invoice {
        int InvoiceId PK
        int CustomerId FK
        datetime InvoiceDate
        varchar BillingAddress
        varchar BillingCity
        varchar BillingState
        varchar BillingCountry
        varchar BillingPostalCode
        decimal Total
    }
    InvoiceLine {
        int InvoiceLineId PK
        int InvoiceId FK
        int TrackId FK
        decimal UnitPrice
        int Quantity
    }
    MediaType {
        int MediaTypeId PK
        varchar Name
    }
    Playlist {
        int PlaylistId PK
        varchar Name
    }
    PlaylistTrack {
        int PlaylistId PK
        int TrackId PK
    }
    Track {
        int TrackId PK
        varchar Name
        int AlbumId FK
        int MediaTypeId FK
        int GenreId FK
        varchar Composer
        int Milliseconds
        int Bytes
        decimal UnitPrice
    }

    %% Relationships
    Album ||--o{ Artist : "belongs to"
    Track ||--o{ Album : "belongs to"
    Track ||--o{ MediaType : "uses"
    Track ||--o{ Genre : "categorized as"
    PlaylistTrack ||--o{ Playlist : "contains"
    PlaylistTrack ||--o{ Track : "contains"
    Invoice ||--o{ Customer : "issued to"
    InvoiceLine ||--o{ Invoice : "part of"
    InvoiceLine ||--o{ Track : "tracks"
    Customer ||--o{ Employee : "assisted by"
    Employee ||--o{ Employee : "reports to"
```

---

## FAQ

Other Tools to **Chat over custom data** (and locally~) is [PrivateGPT](https://fossengineer.com/selfhosting-privateGPT/)

{{< youtube "Ib3nQu5bB_k" >}}

You can also try:

* [PandasAI](https://jalcocert.github.io/JAlcocerT/how-to-use-pandasAI/) which I covered
* LlamaIndex


* https://console.anthropic.com/settings/keys
    * https://docs.anthropic.com/en/docs/about-claude/models
* https://platform.openai.com/api-keys