---
title: "How to use Structured Outputs in LLMs"
date: 2024-08-21T23:20:21+01:00
draft: false
tags: ["Dev"] 
summary: "How to use the Structured Output Feature with OpenAI"
url: "how-to-use-structured-outputs-LLM"
---

* https://openai.com/index/introducing-structured-outputs-in-the-api/

---

## FAQ

### Using LLMs to apply to Linkedin Jobs

* https://github.com/feder-cr/Auto_Jobs_Applier_AIHawk

### How to use LLMs to create a CV

{{< details title="Use a CV Builder Framework: OpenResume or " closed="true" >}}

* With [Reactive-Resume](https://fossengineer.com/open-source-curriculum/#the-reactive-resume-project)

* Or with **OpenResume**:

```sh
version: '3'
services:
  open-resume:
    container_name: openresume #https://github.com/xitanggg/open-resume
    image: ghcr.io/jalcocert/open-resume:latest #https://github.com/users/JAlcocerT/packages/container/package/open-resume
    ports:
      - "3333:3000"
#     networks:
#       - cloudflare_tunnel
          
# networks:
#   cloudflare_tunnel:
#     external: true
```

{{< /details >}}