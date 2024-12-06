---
title: "How to make Quick Diagrams: MermaidJS and more"
date: 2023-12-29T23:20:21+01:00
draft: false
tags: ["Dev"]
description: 'How to use Mermaid Diagrams for Quick diagrams. Compared with Python Diagrams, DrawIO'
summary: 'How to use Mermaid Diagrams.'
url: 'how-to-use-mermaid-diagrams'
---


## MermaidJS

**Example** A top down flow chart:

```
graph TD;
    Apps-->Double-Click;
    Double-Click-->.deb
    Double-Click-->.Appimage
    Apps-->Terminal;
    Terminal-->APT/NALA;
```


## Other Diagram Tools

1. Python Diagrams
2. DrawIO

{{< callout type="info" >}}
These tools play great with **PPTs as a code**: SliDev, Remark, MARP
{{< /callout >}}
