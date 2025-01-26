---
title: "How to use Grok (X) API"
date: 2025-02-07
draft: false
tags: ["AI"]
summary: 'A Recap on AI APIs calls and learning how to use Grok API'
url: 'how-to-use-grok-api'
---

## About Grok

* https://x.ai/api
    * https://console.x.ai/
    * https://docs.x.ai/docs/overview

## Using Grok API

You will need some **credits ($) first**, and just try that Grok API works:

```sh
curl https://api.x.ai/v1/chat/completions -H "Content-Type: application/json" -H "Authorization: Bearer xai-somecoolapikey" -d '{
  "messages": [
    {
      "role": "system",
      "content": "You are a test assistant."
    },
    {
      "role": "user",
      "content": "Testing. Just say hi and hello world and nothing else."
    }
  ],
  "model": "grok-2-latest",
  "stream": false,
  "temperature": 0
}'
```

### Ways to Call Grok

#### Grok via OpenAI API

#### Grok via Anthropic

#### Grok via LiteLLM

https://jalcocert.github.io/JAlcocerT/how-to-use-lite-llm/

---

