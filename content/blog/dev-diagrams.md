---
title: "How to make quick diagrams"
date: 2023-12-29T23:20:21+01:00
draft: false
tags: ["Dev"]
summary: 'How to use Mermaid Diagrams'
url: 'how-to-use-mermaid-diagrams'
---


## MermaidJS

A top down flow chart:

```
graph TD;
    Apps-->Double-Click;
    Double-Click-->.deb
    Double-Click-->.Appimage
    Apps-->Terminal;
    Terminal-->APT/NALA;
```