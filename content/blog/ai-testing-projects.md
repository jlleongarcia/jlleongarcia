---
title: "Testing AI projects with Python"
date: 2024-12-25
draft: false
tags: ["Dev","Python"]
description: 'How to use the latest AI Project. With Code and Systematically. Example with PrivateGPT and ChatDev'
summary: 'How I Test AI Projects with Python'
url: 'ai-projects-python-dependencies'
---

Ive been updating [this Python Docs](https://jalcocert.github.io/JAlcocerT/useful-python-stuff/) on useful Python stuff I found out along the way.

Time to make some upgrades:

## Dependencies with Python

1. **Conda**

```sh
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh

# Miniconda3 will now be installed into this location:
# /home/jalcocert/miniconda3

source ~/.bashrc
conda --version
```

```sh
#conda config --set auto_activate_base false

conda create --name myenv python=3.8
conda activate myenv
conda deactivate
```

2. The one I usually use: **Venvs**

{{< details title="Setup proper dev environment for Python | Venv 📌" closed="true" >}}


```sh
python -m venv video_venv #create it

video_venv\Scripts\activate #activate venv (windows)
source video_venv/bin/activate #(linux)
```

```sh
pip install -r requirements.txt #all at once
```

prepare `.gitignore`

```md
*_venv
```

{{< /details >}}

3. **Poetry** is a Python dependency management and packaging tool.

It provides a way to manage Python project dependencies, create virtual environments, and package your Python projects for distribution.

Poetry aims to simplify and streamline the process of managing Python projects by providing a unified and consistent toolset.



### With Containers


{{< callout type="info" >}}
Example of **Artifacts to containerize a Python Project** with the [MultiChat](https://github.com/JAlcocerT/Streamlit-MultiChat)
{{< /callout >}}


{{< details title="Dockerfile 📌" closed="true" >}}



{{< /details >}}


{{< details title="Docker-Compose 📌" closed="true" >}}



{{< /details >}}

## Setup 2 AI Projects

### ChatDev

* {{< newtab url="https://github.com/OpenBMB/ChatDev" text="The ChatDev Repository" >}}
    * License: {{< newtab url="https://github.com/OpenBMB/ChatDev?tab=Apache-2.0-1-ov-file#readme" text="Apache v2" >}} ❤️


> **Create Customized Software** using Natural Language Idea (through LLM-powered **Multi-Agent Collaboration**) 



{{< details title="ChatDev Setup 📌" closed="true" >}}


```yml
version: '3'

services:
  chatdev:
    image: python:3.8-slim
    container_name: chat-dev
    command: tail -f /dev/null
    volumes:
      - chatdev:/app
    working_dir: /app  # Set the working directory to /app
    ports:
      - "8000:8000"    

volumes:
  chatdev:
```

```sh
git clone https://github.com/OpenBMB/ChatDev.git
cd ChatDev
pip3 install -r requirements.txt
export OPENAI_API_KEY="your_OpenAI_API_key"

python3 run.py --task "[description_of_your_idea]" --name "[project_name]"

cd WareHouse/project_name_DefaultOrganization_timestamp
python3 main.py
```

{{< /details >}}

{{< youtube "yoAWsIfEzCw" >}}

<!-- * <https://www.youtube.com/watch?v=yoAWsIfEzCw> -->


### PrivateGPT

{{< details title="About and Setup PrivateGPT 📌" closed="true" >}}

* 👉 <https://www.youtube.com/watch?v=XFiof0V3nhA>
    * <https://gist.github.com/mberman84/9b3c281ae5e3e92b7e946f6a09787cde>
* <https://github.com/imartinez/privateGPT>
    * <https://docs.privategpt.dev/>


* It can run a server and you can use its API to port 8001: **python3 api-privategpt.py**
    * <https://docs.privategpt.dev/#section/API>
    * Chat completion API (same as OpenAI): <https://docs.privategpt.dev/#tag/Contextual-Completions/operation/prompt_completion_v1_completions_post>

```sh 
docker build -t privategpt .
docker-compose up -d
```

```sh
git clone https://github.com/imartinez/privateGPT

#conda create -n privategpt python=3.11
#conda activate privategpt

pip install poetry
#conda install -c conda-forge pipx
#pipx install poetry

poetry --version

apt update
apt-get install build-essential # C and C++ compilers installed on your system.

poetry lock
poetry install --with ui,local

#review the model to use: local/amazon sagemaker/openai -> settings.yaml

poetry run python scripts/setup #download models

PGPT_PROFILES=local make run

#pyproject.toml -> openai="0.28.0"
#poetry update


#GPT_PROFILES=local make run
```

When the server is started it will print a log Application startup complete.

Navigate to `http://localhost:8001` to use the **PrivateGPT Gradio UI**

Or to `http://localhost:8001/docs` (API section) to try the API using Swagger UI.

```dockerfile
# Use the specified Python base image
FROM python:3.11-slim

# Set the working directory in the container
WORKDIR /app

# Install necessary packages
RUN apt-get update && apt-get install -y \
    git \
    build-essential

# Clone the private repository
RUN git clone https://github.com/imartinez/privateGPT

WORKDIR /app/privateGPT

# Install poetry
RUN pip install poetry

# Copy the project files into the container
COPY . /app

#Adding openai pre v1 to avoid error
RUN sed -i '/\[tool\.poetry\.dependencies\]/a openai="0.28.1"' pyproject.toml

# Lock and install dependencies using poetry
RUN poetry lock
RUN poetry install --with ui,local

# Run setup script
#RUN poetry run python scripts/setup # download models

# Keep the container running
#CMD ["tail", "-f", "/dev/null"]


#docker build -t privategpt .
#docker tag py_gpt4all docker.io/fossengineer/privategpt:v1
#docker push docker.io/fossengineer/privategpt:v1
```

Once built, you can use this **docker-compose to deploy PrivateGPT**:

```yml
version: '3'

services:
  ai-privategpt:
    image: privategpt  # Replace with your image name and tag
    container_name: privategpt2
    ports:
      - "8002:8001"
    volumes:
      - ai-privategpt:/app
    # environment:
    #   - SOME_ENV_VAR=value  # Set any environment variables if needed
    #command: tail -f /dev/null
    # environment:
    #   - PGPT_PROFILES=local
    command: /bin/bash -c "poetry run python scripts/setup && tail -f /dev/null" 
    
volumes:
  ai-privategpt:
```

You can use the **PrivateGPT API via python** like so:

```py
#pip install gradio_client

from gradio_client import Client

from gradio_client import Client

client = Client("http://localhost:8001/")
result = client.predict(
		"What is flutter?",	# str  in 'Message' Textbox component
		api_name="/chat"
)
print(result)
```

{{< /details >}}

{{< youtube "Ib3nQu5bB_k" >}}

<!-- https://www.youtube.com/watch?v=Ib3nQu5bB_k&t=47s -->