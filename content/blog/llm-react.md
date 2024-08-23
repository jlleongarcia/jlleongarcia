---
title: "LLMs ReAct"
date: 2024-08-22T23:20:21+01:00
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