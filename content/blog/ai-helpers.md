---
title: "Can AI be: Neuromarketer, PPT Creator..."
date: 2024-10-21
draft: false
tags: ["dev"]
summary: 'Make AI be helpful. While learning to make Streamlit better.'
url: 'ai-useful-yet-simple'
---

Some examples I have been testing with the [Streamlit MultiChat Summary](https://github.com/JAlcocerT/Streamlit-MultiChat).

But it was time to **[level up my Streamlit](https://jalcocert.github.io/JAlcocerT/ai-useful-yet-simple/#making-streamlit-better), again.**

* https://github.com/JAlcocerT/Streamlit-Speech
* https://github.com/JAlcocerT/Streamlit-MultiChat
* https://github.com/JAlcocerT/Py_RouteTracker

Lets make some **Business value driven projects!**

## A Neuromarketing Agent

{{< callout type="info" >}}
* [Neuromarketing with openAI](https://github.com/JAlcocerT/Streamlit-MultiChat/blob/main/Z_Tests/OpenAI/openai_neumkt.py)
{{< /callout >}}

{{< details title="CTAs Examples that Ive found 📌" closed="true" >}}


* CTA's
    * Quieres el premium? No, correre el riesgo!
    * You don’t have to miss out
    * They all laugh when…
    * What sounds better than privacy?
    * Is your Business performing at 100%? Here is the best/easiest way to find out
        * Measure, Check, Act

![NeuroMKT1](/blog_img/outro/canva-free-trial-neuromkt.png)


![NeuroMKT2](/blog_img/outro/insurance-neuromarketing.png)


{{< /details >}}


---

## Work Companion

{{< callout type="info" >}}
Its all about the prompts, as we can see with **these use cases**
{{< /callout >}}

### Slides Creation Agent

[SliDev is an awsome project](https://fossengineer.com/how-to-use-slidev/) to generate PPT as code - **leveraging VueJS**.

I love the SliDev project so much, that [I forked it](https://github.com/JAlcocerT/slidev).

{{< callout type="info" >}}
* [OpenAI PPT with **Slidev**](https://github.com/JAlcocerT/Streamlit-MultiChat/blob/main/Z_Tests/OpenAI/openai_slidev.py
)
* **SliDev PPT** for Streamlit Multichat - Deployed [here](https://jalcocert.github.io/Streamlit-MultiChat/1) using [GH Actions](https://github.com/JAlcocerT/Streamlit-MultiChat/blob/main/.github/workflows/SliDev_CICD.yml)
    * [Result](https://jalcocert.github.io/Streamlit-MultiChat/1)
    * [Code](https://github.com/JAlcocerT/Streamlit-MultiChat/tree/main/slidev)
{{< /callout >}}

> You can also create **PPTs from markdown** with [Marpit](https://github.com/marp-team/marpit)

### Diagrams with AI

{{< callout type="info" >}}
* [OpenAI + mermaid](https://github.com/JAlcocerT/Streamlit-MultiChat/blob/main/Z_Tests/OpenAI/openai_mermaid.py)
{{< /callout >}}

### Ticket Creation with AI

{{< callout type="info" >}}
* [Jira with OpenAI](https://github.com/JAlcocerT/Streamlit-MultiChat/blob/main/Z_Tests/OpenAI/openai_create_ticket.py)
{{< /callout >}}

### Email with Ai


---

## CV with AI

It all started with [CV with OpenAI](https://github.com/JAlcocerT/Streamlit-MultiChat/blob/main/Z_Tests/OpenAI/openai_cv.py)

{{< callout type="info" >}}
And continued with [this repo](https://gitlab.com/fossengineer1/cv-check) with a Streamlit Web App
{{< /callout >}}

## Speech Rater with AI

{{< callout type="info" >}}
[SpeechRater](https://github.com/JAlcocerT/streamlitspeechrater) and [StreamlitSpeech](https://github.com/JAlcocerT/Streamlit-Speech)
{{< /callout >}}

## Kindle Notes to AI

Kindle notes are saved into a .txt in the device.

I was storing notes for few years already and im really curious to see whats inside.

---

## Making Streamlit Better

### User Authentication

There will be some diagrams here, with Mermaid ofc.

{{< details title="Simple User/Pass Challenge for Streamlit 📌" closed="true" >}}

* It just require a single additional file to your App
* [Example in Streamlit-Multichat](https://github.com/JAlcocerT/Streamlit-MultiChat/blob/main/Streamlit_Pages/Auth_functions.py) - A very simple one that allow certain user/passwords to access an app



> Thanks to Naashonomics and [the code](https://github.com/naashonomics/pandas_templates/blob/master/login.py)

{{< /details >}}

```mermaid
flowchart TD
    Start([User Arrives at App]) --> LoginPrompt{User enters<br>username & password}
    
    LoginPrompt -->|Input redentials| AuthCheck["Check credentials<br>against Auth_functions.py"]

    AuthCheck -->|Valid credentials| Welcome["Display Welcome Message<br>and access to the app"]
    AuthCheck -->|Invalid credentials| LoginPrompt

    Welcome -->|Logout| LoginPrompt
```

{{< dropdown title="Simple User/Pass Challenge for Streamlit 👇" closed="true" >}}

* It just require a single additional file to your App
* [Example in Streamlit-Multichat](https://github.com/JAlcocerT/Streamlit-MultiChat/blob/main/Streamlit_Pages/Auth_functions.py) - A very simple one that allow certain user/passwords to access an app



> Thanks to Naashonomics and [the code](https://github.com/naashonomics/pandas_templates/blob/master/login.py)

```mermaid
flowchart TD
    Start([User Arrives at App]) --> LoginPrompt{User enters<br>username & password}
    
    LoginPrompt -->|Input redentials| AuthCheck["Check credentials<br>against Auth_functions.py"]

    AuthCheck -->|Valid credentials| Welcome["Display Welcome Message<br>and access to the app"]
    AuthCheck -->|Invalid credentials| LoginPrompt

    Welcome -->|Logout| LoginPrompt
```

{{< /dropdown >}}


* 

### Streamlit Github CI/CD

To use Github Actions to create automatic container images for your streamlit projects, you will need such [configuration file](https://github.com/JAlcocerT/Streamlit-MultiChat/actions/workflows/Streamlit_GHA_MultiArch.yml).

And to follow [these steps](https://fossengineer.com/docker-github-actions-cicd/).