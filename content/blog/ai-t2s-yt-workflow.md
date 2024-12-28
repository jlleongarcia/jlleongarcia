---
title: "My [AI] Youtube Workflow"
date: 2024-11-07
draft: false
tags: ["Tinkering"]
description: 'How to use AI to share more (and hopefully better video content) with others'
summary: 'How Im slowly getting better at publishing to Youtube and creating content.'
url: 'my-youtube-ai-workflow'
---

It all started with the [DJI OA5 Pro](https://jalcocert.github.io/JAlcocerT/dji-osmo-action-5-pro/)

It takes ~1h48min/41.5GB of video at 2.7k/RS/Standard/60fps to fill the internal memory.

...And continued with the [**x300** *as a video creation center...*](https://jalcocert.github.io/JAlcocerT/asrock-x300-home-server/#video-editing-101)

If you need help summarizing YT Videos content you can try:

{{< callout type="info" >}}
With the [YT Groq Summarizer](https://jalcocert.github.io/JAlcocerT/summarize-yt-videos/) by PhiData. Or with the [AIssistant YT Summarizer](https://github.com/JAlcocerT/Streamlit-AIssistant/blob/main/Z_AIgents/Z_Groq_YTSummaries_appv4.py).
{{< /callout >}}

## My Initial Workflow

### OBS + OpenAI [Whisper]

1) OBS to record video. Then create audio with OpenAI API
* API Required - https://platform.openai.com/api-keys

{{< details title="OpenAI API Audio creation - Example 📌" closed="true" >}}

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


{{< /details >}}

{{< callout type="info" >}}
The initial scripts I used are at [YT_Audios](https://github.com/JAlcocerT/JAlcocerT/tree/main/Z_YT_Audios). The more advance version of **handling audio with AI** is at AIssistant tests
{{< /callout >}}

#### Updating My YT Video WF [AI Powered]

* OBSStudio to record + I record myself commenting the video
* Then, that .mp4 gets a transcript, which is passed to the OpenAI API to generate an AI voice

![Karting Adventure](/blog_img/memes/ezoeazin.JPG)


{{< details title="A friend gave me this cool idea [AI & Audio Transcription] 📌" closed="true" >}}

It uses the **Whisper** model to make the audio2text conversion/transcription:

```py
##1 abre archivo de audio transcribe y guarda como texto
# metele la API Key y el path tuyo

from openai import OpenAI

# Initialize the OpenAI client with your API key
client = OpenAI(api_key='')
 
# Path to your audio file
audio_file_path = r'C:\Users\diazc\OneDrive\Escritorio\speech-analyzer-app\audio_test_api.wav'

 
# Open the audio file
with open(audio_file_path, "rb") as audio_file:
    # Transcribe the audio using Whisper model
    transcription = client.audio.transcriptions.create(
        model="whisper-1",
        file=audio_file
    )

    # Print the transcription text
    print(transcription.text)

 

# Extract the transcription text
transcription_text = transcription.text
 

# Step 2: Save the transcription to a .txt file
output_file_path = 'audio.txt'

with open(output_file_path, 'w') as text_file:
    text_file.write(transcription_text)

# Step 3: Print confirmation
print(f"Transcription saved to {output_file_path}")

###Python Audio #2 abre archivo de texto y lo manda a chatGPT a que lo analice

import openai
# Initialize the OpenAI client with your API key
openai.api_key = ''


# Path to the file containing the speech text (audio.txt)
file_path = r'C:\Users\diazc\OneDrive\Escritorio\speech-analyzer-app\audio.txt'

 

# Step 1: Read the content of the file
with open(file_path, 'r') as file:
    file_content = file.read()

 

# Step 2: Create the prompt for GPT-4 using the content from the file
analysis_prompt = f"You are an expert in public speaking. Analyze this speech: {file_content}"

# Step 3: Send the prompt to GPT-4 for analysis
response = openai.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "user", "content": analysis_prompt}
    ]
)


# Step 4: Extract the analysis from the response

analysis = response.choices[0].message.content

 

# Step 5: Print the analysis

print("Speech Analysis: ")

print(analysis)

```

{{< /details >}}

{{< callout type="info" >}}
For a **transcription with OpenAI + Whisper**, [you have this script](https://github.com/JAlcocerT/Streamlit-AIssistant/blob/main/Z_Tests/ST_AudioSpeechRater/audio2text_OpenAI.py)
For **Text to Audio** - [using tts1, this script](https://github.com/JAlcocerT/Streamlit-AIssistant/tree/main/Z_Tests/ST_CreateYTAudio)
{{< /callout >}}


It is quite clear that Combining those with a the [new **Audio feature on Streamlit**](https://github.com/JAlcocerT/Streamlit-AIssistant/blob/main/Z_Tests/test_audioinput.py) can create **sth cool**.

```sh
#streamlit run test_audioinput.py
#streamlit run test_audioinput.py --server.address=0.0.0.0
streamlit run test_audioinput.py --server.address=0.0.0.0 --server.port=8501
```

{{< callout type="info" >}}
But thats the story of **the SpeechRAIter Project**.
{{< /callout >}}

And maybe a future...**podcast creator** with AI and [the AstroPod Theme](https://github.com/manuelernestog/astropod)?

### Quick Vlogs as a Code

2) Using ffmpeg or Python MoviePy

{{< callout type="info" >}}
Rencoding? save time not doing it. If the parts have similar resolution/fps/codecs and other features, you dont need to.
With [this Script you can **bundle together videos** with MoviePy on W11/Linux](https://github.com/JAlcocerT/YT-Video-Edition/blob/main/With_Python/joinALLvideosFolderNoRencod2.py)
{{< /callout >}}

You can also try to silence, include another audio as background (Rencoding needed for those)

#### Data Driven Videos with Streamlit

3) Find interesting data - Create an **animation with Streamlit** - Record with OBS - Upload to Youtube
  
{{< callout type="info" >}}
[As tested during AIssistant - STAutomaticYTVideo](https://github.com/JAlcocerT/Streamlit-AIssistant/tree/main/Z_Tests/ST_AutomaticYTVideo)
{{< /callout >}}


#### Videos with RemotionJS

4) 

{{< callout type="info" >}}
See [the VideoEditingWF repo](https://github.com/JAlcocerT/VideoEditingRemotion)
{{< /callout >}}

---


## Other interesting AI Audio stuff


{{< details title="WhiSHper 📌" closed="true" >}}



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

---

## FAQ

### TelePrompter for Youtube Videos

* https://qprompt.app/

```sh
flatpak install flathub com.cuperino.qprompt
flatpak run com.cuperino.qprompt
```

* Or a specific Qprompt-teleprompter version:
   * https://github.com/Cuperino/QPrompt-Teleprompter/releases/tag/v1.0.0-beta-005
      * https://github.com/Cuperino/QPrompt-Teleprompter/blob/main/build.md#android-build-instructions
   * https://github.com/Cuperino/QPrompt-Teleprompter/releases/tag/v1.1.6

```sh
wget https://github.com/Cuperino/QPrompt-Teleprompter/releases/download/v1.1.6/qprompt-v1.1.6-51788eb-linux-gcc-x86_64.AppImage

chmod +x qprompt-v1.1.6-51788eb-linux-gcc-x86_64.AppImage
./qprompt-v1.1.6-51788eb-linux-gcc-x86_64.AppImage
```



### Social Media Automation

Social Media can be simplified

![Forocoches3kbmw](/blog_img/memes/ezoeazin.jpg)

* Postiz-App - https://github.com/gitroomhq/postiz-app

> 📨 The ultimate social media scheduling tool, with a bunch of AI 🤖 and Apache 2.0!

* [Zapier](https://zapier.com/app/home)

* Canva seems to have it too

* [IFTTT](https://ifttt.com/plans)

* N8N AI Automation

[N8N with ollama video](https://www.youtube.com/watch?v=VDuA5xbkEjo)


#### Social Media Management Apps

- [Shoutify](https://github.com/TechSquidTV/Shoutify)