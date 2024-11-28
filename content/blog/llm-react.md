---
title: "LLMs ReAct"
date: 2025-12-31
draft: true
tags: ["Dev"] 
summary: "Testing ReAct with LLMs"
url: "how-to-use-ReAct"
---

## ReAct (vs) Function Calling

🛠️ Function Calling Agents

[Function calling](how-to-use-openai-function-calling) agents rely on the vendor to select the correct tools and inputs based on a provided schema, shifting the responsibility of tool selection to the vendor.

This approach is similar to the serverless model and is supported by many vendors, with LangChain providing an abstraction for easy switching between models.

Key points:

🔧 Vendor-driven tool selection
🌐 Serverless-like model
🔄 Easy switching between models with LangChain abstraction
🧠 ReACt Agents

Now let's see **ReACt agents** use the ReACt prompter, which is based on the ReACt paper and incorporates prompt engineering techniques. This approach makes the LLM a reasoning engine, selecting tools and inputs itself. ReACt agents offer more control and flexibility to developers but require more work and thinking in the tool selection process.

Key points:

🎨 Developer-driven tool selection
📜 Based on the ReACt paper
🔧 Incorporates prompt engineering techniques
🔍 LLM acts as a reasoning engine
🛠️ More control and flexibility for developers
🤔 Requires more work and thinking from developers
🤔 Choosing the Right Approach

The **choice between function calling agents and ReACt agents** depends on the level of control and flexibility desired by the developer.

Function calling agents provide ease of use but less control, while ReACt agents offer more control but require more effort from the developer.


## LangChain - AgentsExecutors

* https://api.python.langchain.com/en/latest/agents/langchain.agents.agent.AgentExecutor.html

{{% details title="Why ? 🚀" closed="true" %}}


{{% /details %}}

---

## FAQ

* https://aman.ai/primers/ai/agents/

> AI Agents



{{% details title="What could ReAct enhance? Two projects in mind 🚀" closed="true" %}}

* Streamlit Multichat and the YT Summarizer with Groq from PhiData

```yml
version: '3'

services:
  streamlit_multichat:
    image: ghcr.io/jalcocert/streamlit-multichat:latest
    container_name: streamlit_multichat
    volumes:
      - ai_streamlit_multichat:/app
    working_dir: /app
    command: /bin/sh -c "\
      mkdir -p /app/.streamlit && \
      echo 'OPENAI_API_KEY = \"sk-proj-oaiapi\"' > /app/.streamlit/secrets.toml && \
      echo 'GROQ_API_KEY = \"gsk_yourgroqapi\"' >> /app/.streamlit/secrets.toml && \
      echo 'ANTHROPIC_API_KEY = \"sk-ant-anthapikey-\"' >> /app/.streamlit/secrets.toml && \      
      streamlit run Z_multichat_Auth.py"
    ports:
      - "8501:8501"
    networks:
      - cloudflare_tunnel
    restart: always
      # - nginx_default      

networks:
  cloudflare_tunnel:
    external: true
  # nginx_default:
  #   external: true

volumes:
  ai_streamlit_multichat:
```

```yml
version: '3.8'

services:
  phidata_service:
    image: ghcr.io/jalcocert/phidata:yt-groq #phidata:yt_summary_groq
    container_name: phidata_yt_groq
    ports:
      - "8502:8501"    
    environment:
      - GROQ_API_KEY=gsk_yourgroq_apikey # your_api_key_here
    command: streamlit run cookbook/llms/groq/video_summary/app.py
    restart: always
#     networks:
#       - cloudflare_tunnel
            
# networks:
#   cloudflare_tunnel:
#     external: true        
```

To use Cloudflare tunnels, you will need:

```yml
version: '3.8'

services:
  cloudflared:
    image: cloudflare/cloudflared:latest
    container_name: cloudflared
    command: tunnel --no-autoupdate run --token your_cloudflare_token
    networks:
      - tunnel
    restart: unless-stopped

networks:
  tunnel:
```

{{% /details %}}