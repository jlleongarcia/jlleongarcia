---
title: "Testing AI projects"
date: 2025-12-31
draft: true
tags: ["Dev","Python"]
description: 'How to use the latest AI Project. With Code and Systematically.'
summary: 'How I Test AI Projects'
url: 'ai-projects'
---


{{< details title="Setup proper dev environment for Python 📌" closed="true" >}}


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

# ChatDev


* <https://www.youtube.com/watch?v=yoAWsIfEzCw>
* <https://github.com/OpenBMB/ChatDev>


{{< details title="Edit 📌" closed="true" >}}


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


# PrivateGPT

{{< details title="Edit 📌" closed="true" >}}

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

When the server is started it will print a log Application startup complete. Navigate to http://localhost:8001 to use the Gradio UI or to http://localhost:8001/docs (API section) to try the API using Swagger UI.

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

## Poetry

Poetry is a Python dependency management and packaging tool. It provides a way to manage Python project dependencies, create virtual environments, and package your Python projects for distribution. Poetry aims to simplify and streamline the process of managing Python projects by providing a unified and consistent toolset.

{{< /details >}}