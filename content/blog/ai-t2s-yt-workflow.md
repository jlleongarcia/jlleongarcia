---
title: "My [AI] Youtube Workflow"
date: 2024-10-02T05:20:21+01:00
draft: true
tags: ["Dev","Python"]
description: 'How to use Flask'
summary: 'How I Test AI Projects'
url: 'openai-text2audio'
---


```py
import openai

#https://platform.openai.com/api-keys
#export OPENAI_API_KEY='sk-...' # on Linux/Mac

#cd ai-openai
#python3 texttoaudio.py

##################### NETDATA OLLAMA YT ###################################

#After you will watch this video, you will know how to Monitor your server while performing AI workloads, all locally, this time thanks to the NetData.
#Before moving on, remember that you will need Docker installed on your machine, together with Portainer to follow along. I will leave the commands below if you need to Setup those.
#Also, make sure you have some Local AI project to test NetData out. For example you can follow along the Ollama installation and pull some Free Model, like Orca-mini.
#Now, lets just login to Portainer and create a new Stack. And yes, you will find this information in the video description. 
#And today, we just need one artifact, the docker-compose, that will configure and spin up our Netdata instance thanks to the already existing Docker container. So yea, today no python scripts, no docker builds
#Lets just create our stack with Portainer and lets wait for the service to be deployed. The idea is that we will have historical monitoring data for our laptops when we are running LLMs locally. But same process applies if you want to run them on big servers and monitor them.
#And now, the fun part. Lets use Ollama, which we already covered how to install locally here. Lets make it use Mistral and ask something to the model. You can see how the increase of temperature is being registered
#Let me know in the comments which workloads you cant wait to monitor with Netdata. Consider giving a like to the video if it was helpful!And stay tuned for more.

# timeline
#     title Monitoring AI Infrastructure with NetData
#     Pre-Requisites : Get Docker 🐋
#                    : Install Portainer
#                    : Have Ollama Ready with a local LLM
#     SelfHosting Netdata : Using the Docker-Compose Stack
#     NetData + Ollama : Overview to Netdata
#                      : Running prompts with Ollama
#                      : Checking System Load and Temps 🔥

client = openai.OpenAI()
speech_file_path = "Netdata10.mp3"
response = client.audio.speech.create(
    model="tts-1",
    voice="onyx",
    input="Let me know in the comments which workloads you cant wait to monitor with Netdata. Consider giving a like to the video if it was helpful!And stay tuned for more."
)
response.stream_to_file(speech_file_path)
```



## Other interesting AI Audio stuff


{{< details title="Whishper 📌" closed="true" >}}



Whishper is an open-source, 100% local audio transcription and subtitling suite with a full-featured web UI.

https://github.com/pluja/whishper



https://whishper.net/guides/install/

```sh
# Get the script
curl -fsSL -o get-whishper.sh https://raw.githubusercontent.com/pluja/whishper/main/get-whishper.sh
# Run it
bash get-whishper.sh
```

{{< /details >}}


{{< details title="Whisper 📌" closed="true" >}}


## Whisper

* <https://github.com/sindresorhus/awesome-whisper> : Awesome list for Whisper — an open-source AI-powered speech recognition system developed by OpenAI
    * <https://openai.com/research/whisper>
    * <https://github.com/openai/whispers>
        * MIT
        * 👉 <https://www.youtube.com/watch?v=ABFqbY_rmEk>
        * <https://github.com/openai/whisper/discussions/categories/show-and-tell>
* <https://github.com/sindresorhus/awesome-whisper>    
    * <https://github.com/ggerganov/whisper.cpp>
    * <https://github.com/serg-plusplus/meeper>


```yml
version: '3'

services:
  whisper:
    image: python:3.11-slim
    container_name: ai-whisper
    command: tail -f /dev/null
    volumes:
      - ai_whisper:/app
    working_dir: /app  # Set the working directory to /app
    ports:
      - "7865:7865"

volumes:
  ai_whisper:
```


```sh
pip install -U openai-whisper
#pip install git+https://github.com/openai/whisper.git 
#pip install --upgrade --no-deps --force-reinstall git+https://github.com/openai/whisper.git

sudo apt update && sudo apt install ffmpeg
```


Using Whisper:

```sh
whisper --help
whisper audio.flac audio.mp3 audio.wav --model medium #--model large

#whisper japanese.wav --language Japanese #transcribe non English
#whisper japanese.wav --language Japanese --task translate #speach to English
```

## bigwav

https://github.com/ggerganov/whisper.cpp/discussions/604

{{< /details >}}



{{< details title="Meeper is your secretary for any in-browser conference.📌" closed="true" >}}
https://chromewebstore.google.com/detail/meeper-transcribe-summari/pollmehpbdljnolojdajljeoejeglcfi
https://github.com/serg-plusplus/meeper

```sh
python3 -m venv meepervenv
source meepervenv/bin/activate



git clone git@github.com:serg-plusplus/meeper.git && cd meeper

python -m pip install -r requirements.txt

chmod +x cygwin_cibuildwheel_build.sh

./cygwin_cibuildwheel_build.sh

#deactivate
```

{{< /details >}}