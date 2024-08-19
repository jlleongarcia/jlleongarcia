---
title: LLMs on Linux
type: docs
prev: /docs/gcp/
next: docs/ansible/
draft: false
---

**Generative AI** and particularly LLMs are taking over.

You can **Get LLMs Running** in your personal computer or in big servers just for you or whoever you want to give access.

> To get the most popular commercial trends: https://theresanaiforthat.com/most-saved/

## Interfaces

{{< tabs items="Ollama,PrivateGPT,TextGeneration Web UI" >}}

  {{< tab >}}
  Probably the **Ollama is the quickest way** to [get LLMs working locally](https://fossengineer.com/selfhosting-llms-ollama), specially if you already have Docker installed.


<iframe width="560" height="315" src="https://www.youtube.com/embed/jl9bfPsBBcM" frameborder="0" allowfullscreen></iframe>
  {{< /tab >}}
  {{< tab >}}
  Say Hi to your documents, locally, when you interact with them with [PrivateGPT Freely](https://fossengineer.com/selfhosting-local-llms-with-privateGPT)



<iframe width="560" height="315" src="https://www.youtube.com/embed/Ib3nQu5bB_k" frameborder="0" allowfullscreen></iframe>
  
  {{< /tab >}}
  {{< tab >}}

  Yet another way to [get LLMs running locally, and with UI](https://fossengineer.com/Generative-AI-LLMs-locally-with-cpu/).
  
  <iframe width="560" height="315" src="https://www.youtube.com/embed/-zNWDTqKF1E" frameborder="0" allowfullscreen></iframe>


  {{< /tab >}}

{{< /tabs >}}

* **Others:** [LibreChat](https://www.youtube.com/watch?v=0BRnK5BGZHU), Autogen + AutogenStudio https://microsoft.github.io/autogen/blog/2023/12/01/AutoGenStudio/ or [Quivir](https://github.com/StanGirard/quivr) with great [docs](https://docs.quivr.app/home/intro) or [LocalGPT](https://github.com/PromtEngineer/localGPT).
  * Bindings:
    * https://github.com/abetlen/llama-cpp-python
* https://github.com/khoj-ai/khoj


## VectorDBs

When you are using [embedding models](https://www.youtube.com/watch?v=QdDoFfkVkcw) to give LLMs context about your files, this is where that knowledge goes.

And there are many Vector DBs that you can use with Linux

{{< tabs items="VectorAdmin,ChromaDB,Other Vector DBs" >}}

  {{< tab >}}
  Manage them with [VectorAdmin and Docker](https://fossengineer.com/what-are-vector-dbs/#selfhosting-vectoradmin-with-docker)
  {{< /tab >}}
  {{< tab >}}
  [ChromaDB with Docker](https://fossengineer.com/selfhosting-chroma-vector-db/)
  {{< /tab >}}
  {{< tab >}}QDrant{{< /tab >}}

{{< /tabs >}}

All of this tech will work in Linux and **with just CPU**, if you dont have a GPU handy.

---

## FAQ

### How to monitor Hardware while using LLMs?

You can [setup Netdata with Docker](https://fossengineer.com/selfhosting-server-monitoring-with-netdata-and-docker/) really quick.

It will give you insights on workload, temperatures of your Hardware where you run LLMs.

### Can I use LLMs to Code?

Yes, there are many ways to replace Github Copilot for Free:

* [Tabby](https://fossengineer.com/selfhosting-Tabby-coding-assistant/)
* [LLama Coder](https://github.com/ex3ndr/llama-coder) in a [vscode extension](https://marketplace.visualstudio.com/items?itemName=ex3ndr.llama-coder&ssr=false#review-details)
  * [CodeLLama in HF](https://huggingface.co/codellama/CodeLlama-70b-hf)
* Others: Bito, Codeium, or [Adrenaline](https://github.com/shobrook/adrenaline/)

### And to Power my Notes?

* LogSeq + Ollama
    * The plugin: <https://github.com/omagdy7/ollama-logseq>

### What is a MoE?

**Mixed of Experts** is an approach in machine learning where a model consists of numerous sub-models (referred to as "experts"). Each expert specializes in handling different types of data or tasks. The main idea is to route different inputs to the most relevant experts to handle **specific tasks more efficiently** and effectively.

For example, some experts might be better at understanding technical jargon, while others might excel at creative writing or conversational language.

GPT4 is an example of MoE. But also [Mixtral](https://erichartford.com/dolphin-25-mixtral-8x7b?source=more_articles_bottom_blogs) - Which you [download from HF](https://huggingface.co/TheBloke/dolphin-2.5-mixtral-8x7b-GGUF) or [this](https://huggingface.co/mistralai/Mixtral-8x7B-v0.1) and [run for Free locally with Ollama](https://fossengineer.com/selfhosting-llms-ollama/):

```sh
ollama run mixtral:8x7b #https://mistral.ai/news/mixtral-of-experts/
```

You can also try Solar 10.7B to compare these MoE's:

```sh 
ollama run solar:10.7b #https://ollama.ai/library/solar/tags
```

You can also run it in Google Colab: https://www.youtube.com/watch?v=ZyFlySElG1U

### Choosing the Right Model

#### Quantization

* GPTQ quantization, a state-of-the-art method featured in research papers, offers minimal performance loss compared to previous techniques. It's most efficient on NVIDIA GPUs when the model fits entirely in VRAM.
* GGML, a machine learning library by Georgi Gerganov (who also developed llama.cpp for running local LLMs on Mac), performs best on Apple or Intel hardware.

Thanks: https://aituts.com/local-llms/#Which_Quantization

#### Which LLMs are Trending now?

You can always check the LLM's Leaderboards:

* <https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard>
* With **ELO** Rating: <https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard>
    * <https://chat.lmsys.org/?arena>

* Examples: use them also with GPT4All or TextGenWebUI
  * <https://huggingface.co/TheBloke/Llama-2-13B-Chat-fp16/tree/main>
  * <https://huggingface.co/docs/transformers/main/model_doc/mpt>
    * And [this one](https://www.mosaicml.com/mpt) you can train it and use commercially: https://www.mosaicml.com/training

> You can also check this repository: https://github.com/sindresorhus/awesome-chatgpt and https://github.com/f/awesome-chatgpt-prompts

#### What about Image Generation?

You can find them in [Hugging Face](https://huggingface.co/spaces):

* Stable Difussion: Quick Setup -> https://github.com/AbdBarho/stable-diffusion-webui-docker/wiki/Setup (Thanks to Jim Garage https://www.youtube.com/watch?v=5XHSV56hsJM)
  * <https://huggingface.co/runwayml/stable-diffusion-v1-5/tree/main>
  * <https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/tree/main>
  * <https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/tree/main>
  * <https://huggingface.co/stabilityai/stable-diffusion-2-base>
  * <https://github.com/AUTOMATIC1111/stable-diffusion-webui> or <https://github.com/vladmandic/automatic>
    * <https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Features#stable-diffusion-20>

* Foocus: <https://www.youtube.com/watch?v=zIhODzEVZqg> https://github.com/lllyasviel/Fooocus
* Speech to IMG?!: https://www.youtube.com/watch?v=IAc-G-enRII

What are other people building? https://civitai.com/

#### Voice?

Generally, here you can get many ideas: <https://github.com/sindresorhus/awesome-whisper>

Also, in [HF there are already interesting projects](https://jalcocert.github.io/Linux/docs/linux__cloud.md/llms/#how-to-use-hf).

* <https://www.futuretools.io/tools/uberduck>
* [Audiocraft](http://localhost:1313/whishper-docker/#how-to-install-audiocraft)
* ecoute (OpenAI API needed)
* Meeper (OpenAI API needed)
* Bark
* Whisper - https://github.com/openai/whisper
  * https://github.com/Vaibhavs10/insanely-fast-whisper
  * https://github.com/ggerganov/whisper.cpp
  * https://huggingface.co/openai/whisper-large-v2#long-form-transcription
  * https://github.com/SYSTRAN/faster-whisper
* [Whishper](https://fossengineer.com/whishper-docker)
  * <https://github.com/pluja/whishper>
  * https://libretranslate.com/
* https://github.com/CorentinJ/Real-Time-Voice-Cloning

* Linux Desktop App:

```sh
flatpak install flathub net.mkiol.SpeechNote
flatpak run net.mkiol.SpeechNote
```

* Not F/OSS: 
  * https://www.gladia.io/pricing
  * https://bigwav.app/

#### Other Interesting AI Tools

* <https://www.futuretools.io/?pricing-model=open-source>

### What is a RAG?

RAG, which stands for "Retrieval-Augmented Generation" is a methodology used in the development of advanced natural language processing (NLP) systems, particularly in the context of large language models (LLMs)

RAG is particularly useful for tasks that require a blend of understanding context, generating coherent responses, and incorporating up-to-date or specific factual information, such as in question-answering systems or chatbots.


### Do I need to Know programming to use LLMs?

You dont have to be a developer to get to use LLMs.

Mostly we will be using frameworks that provide a level of abstraction to the real code behind the scenes.

It would be definitely beneficial if you are [familiar with Python](https://fossengineer.com/guide-python/) if you want to try [Cutting-Edge and Free AI](https://fossengineer.com/tags/gen-ai/) or at least to know [how to manage Python Dependencies](https://fossengineer.com/guide-python/).


### Prompting

* <https://prompthero.com/prompt/ccc554cf355-stable-diffusion-1-5-renaissance-painting-of-darth-vader-in-pink-fur-as-a-fashion-model-vogue-oil-paint-on-dark-background-masked-darth>

### Where to host in the Cloud?

If you need big GPU power, you can always try https://www.runpod.io/gpu-instance/pricing and similar services.

### Using HuggingFace for LLMs

* https://huggingface.co/spaces
* https://www.youtube.com/watch?v=_Ua6065p-Cw
* https://www.youtube.com/watch?v=_Ua6065p-Cw

### You might be Wondering


{{% details title="Awsome Question to Start! 🚀" closed="true" %}}

* RNN (Recurrent Neural Network):

Typical Use: RNNs are typically used for sequential data where the order and context of the data points are important. They are well-suited for time-series data, natural language processing (NLP), speech recognition, and other tasks where data points are interdependent.
Characteristics: RNNs have a memory-like feature that captures information about what has been calculated so far, essentially allowing them to have a sense of 'time' or sequence. This makes them ideal for processing sequences of data like sentences or time series.

* CNN (Convolutional Neural Network):

Typical Use: CNNs are predominantly used for image and video recognition, image classification, object detection, and similar tasks that require the model to recognize patterns in spatial data. They are also used in some NLP tasks, although to a lesser extent than RNNs and Transformers.
Characteristics: CNNs use convolutional layers, pooling layers, and fully connected layers. The convolutional layers automatically and adaptively learn spatial hierarchies of features from input images. This makes them particularly good at tasks like image recognition where understanding spatial hierarchy in pixels is crucial.

* Transformers, is another type of neural network architecture.
These mechanisms allow the model to weigh the importance of different parts of the input data differently.

Unlike traditional neural networks that process data sequentially (like RNNs and LSTMs), transformers can process entire sequences of data simultaneously, making them highly efficient for tasks like language modeling and translation.

{{% /details %}}



### How to use HF?

In HuggingFace you will find really cool and Open AI Projects to try out:

* Image to Code: <https://huggingface.co/spaces/HuggingFaceM4/screenshot2html>
* Audio to text: <https://huggingface.co/spaces/sanchit-gandhi/whisper-jax>

<!-- 
### How to install Torch? -->

### Other Resources

* <https://github.com/jondot/awesome-rust-llm>


langchain 
https://www.youtube.com/watch?v=mrjq3lFz23s