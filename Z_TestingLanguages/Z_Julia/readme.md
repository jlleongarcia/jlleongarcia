# Julia

* <https://julialang.org/>

Install it in ubuntu: 

```sh

```

## extensions

ext install julialang.language-julia

## notebook

pip install notebook

import Pkg
Pkg.add("IJulia")

using IJulia
notebook()


## Packages

<https://juliapackages.com/>

* As of my last knowledge update in September 2021, there wasn't an exact equivalent to Streamlit, which is a popular Python library for building web applications with minimal effort. However, Julia has its own ecosystem of web application development frameworks and libraries that can be used to create web apps with different levels of complexity. Here are a few options you can consider:

1. **Genie.jl:** Genie.jl is a high-level web application framework for Julia. It is similar in spirit to Streamlit, as it aims to simplify web application development. You can create interactive web applications using Julia code. It provides features like routing, templates, and interactive widgets. It's a good choice for building web apps in Julia.

   - GitHub Repository: https://github.com/GenieFramework/Genie.jl

2. **Makie.jl with WebIO:** Makie.jl is a powerful and flexible plotting library for Julia. While it's not a direct replacement for Streamlit, you can combine Makie with WebIO to create interactive web-based visualizations and dashboards. You can embed Makie plots in web applications.

   - Makie GitHub Repository: https://github.com/JuliaPlots/Makie.jl
   - WebIO GitHub Repository: https://github.com/JuliaGizmos/WebIO.jl

3. **Dashboards with Pluto.jl:** Pluto.jl is an interactive notebook for Julia. While it's not a web application framework per se, you can create interactive dashboards and visualizations within Pluto notebooks. It allows for reactive and live coding, which can be useful for data exploration and visualization.

   - Pluto.jl GitHub Repository: https://github.com/fonsp/Pluto.jl

Please note that the Julia ecosystem is constantly evolving, and new libraries and frameworks may have emerged since my last update. I recommend checking the official Julia Package Registry (https://juliapackages.com/) or Julia's GitHub repositories to see if there are new tools or frameworks that better suit your needs for web application development in Julia.


#https://lorenz-pere.geniecloud.app/
#https://github.com/MakieOrg/Makie.jl
#https://github.com/JuliaGizmos/WebIO.jl
#https://github.com/JuliaPlots/PlotlyJS.jl
#https://github.com/GenieFramework/Genie.jl