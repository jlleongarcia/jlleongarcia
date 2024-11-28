---
title: "Testing AI Audio projects"
date: 2025-12-31
draft: true
tags: ["Dev","Python"]
description: 'How to use '
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


---

## Interesting Music Related Projects

{{< details title="GraphMuse (Python) 📌" closed="true" >}}

* https://github.com/manoskary/graphmuse

**GraphMuse** is a Python library designed for **symbolic music graph processing**, addressing the growing need for efficient and effective analysis of musical scores through graph-based methods.

- **Problem Solved**: Traditional music processing lacks efficient tools for analyzing complex musical scores, which often include various elements beyond just notes. 

- **Functionality**:
  - Converts musical scores into graphs where:
    - Each note is a vertex.
    - Temporal relationships between notes define edges.
  - Supports deep graph models for music analysis.
  - Built on **PyTorch** and **PyTorch Geometric**, offering strong flexibility and performance.

- **Graph Structure**:
  - Edges are categorized into:
    - Onset edges (notes starting simultaneously).
    - Consecutive edges (notes starting after others).
    - During edges (notes overlapping with others).
    - Silent edges (connecting notes separated by silence).

- **Key Features**:
  - Efficient graph creation (up to 300x faster).
  - Built-in utilities for preprocessing musical scores.
  - Sampling methods for handling variable graph sizes during training.

- **Use Case**:
  - Demonstrates pitch spelling tasks using annotated datasets.

- **Future Plans**:
  - Improve installation processes.
  - Expand model and data loader support.
  - Foster community contributions.

GraphMuse is a promising tool for anyone interested in symbolic music analysis, combining music theory with advanced graph neural networks.

In conclusion, GraphMuse simplifies symbolic music processing through advanced graph techniques, fostering innovation and analysis.

**Similar Projects**: MusGViz for music visualization and other graph neural network frameworks in music processing.

{{< /details >}}