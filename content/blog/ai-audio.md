---
title: "Testing AI Audio projects"
date: 2024-10-02T05:20:21+01:00
draft: true
tags: ["Dev","Python"]
description: 'How to use Flask'
summary: 'How I Test AI Projects'
url: 'ai--audioprojects'
---


https://github.com/SevaSk/ecoute
https://pypi.org/project/PyAudioWPatch/#description

**TRY IT IN WINDOWS**

```sh
python3 -m venv ecoutevenv
source ecoutevenv/bin/activate


apt install ffmpeg


git clone https://github.com/SevaSk/ecoute ./ecoute_repo
cd ecoute_repo
python -m pip install -r requirements.txt

chmod +x cygwin_cibuildwheel_build.sh

./cygwin_cibuildwheel_build.sh

#deactivate
```