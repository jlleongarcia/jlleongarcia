---
title: "Science is so Cool!"
date: 2025-02-25T23:20:21+01:00
draft: false
cover:
  image: "https://socialify.git.ci/jalcocert/streamlit-multichat/image?description=1&font=Inter&language=1&name=1&stargazers=1&theme=Auto"
  alt: "What about science?" # alt text
  caption: "Science Recap with LLMs" # display caption under cover
tags: ["Tinkering"]
description: 'Science recap with LLMs'
summary: 'Simply science'
url: 'cool-science'
---


## Electrical Engineering

<!--
https://www.youtube.com/watch?v=1spW6vkpPMU 
-->
{{< youtube "1spW6vkpPMU" >}}

{{< callout type="info" >}}
Only for AC (not DC!)
{{< /callout >}}

{{< details title="More about Reactive Power 📌" closed="true" >}}

Reactive power is crucial for efficient electricity transmission and distribution.
*   **Real Power:** The power that performs actual work (measured in watts).
*   **Reactive Power:** The power needed to create and maintain electromagnetic fields for energy transmission (measured in VAR).
*   Reactive power is consumed by:
    *   **Inductive Loads:** Motors and transformers (causing lagging power factor).
    *   **Capacitive Loads:** Capacitor banks (causing leading power factor).
*   Poor reactive power management leads to:
    *   Higher transmission losses.
    *   Increased energy costs.
    *   Greater power plant emissions.
*   **Power Factor (PF):** The ratio of real power (kW) to apparent power (kVA). It shows how effectively power is used.  A low PF (below 0.9) means poor real power utilization and increased reactive power needs.
*   PF improvement solutions:
    *   **Passive PF Correction:** Adding fixed capacitors or inductors.
    *   **Active PF Correction:** Installing controllable VAR compensators or SVCs.
*   Reactive power control aims to:
    *   Improve PF.
    *   Minimize losses.
    *   Maintain voltage stability.
*   Reactive power compensation methods:
    *   **Series Compensation:** Capacitors in series with the transmission line.
    *   **Shunt Compensation:** Capacitors or reactors in parallel with a load or line section.
    *   **Hybrid Compensation:** Combining series and shunt compensation.
*   Understanding and managing reactive power leads to:
    *   Better electrical network performance.
    *   Reduced losses and costs.
    *   Lower emissions.
    *   Increased equipment lifespan and efficiency.

{{< /details >}}


## Mechanical Engineering

{{< cards >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/R-Stocks//" title="Summarizer" image="/blog_img/GenAI/yt-summaries/yt-summaries-groq.png" subtitle="With Groq API" >}}
  {{< card link="https://github.com/JAlcocerT/Slider-Crank" title="Slider Crank" image="/blog_img/apps/gh-jalcocert.svg" subtitle="Slider Crank Mechanism in Python" >}}
{{< /cards >}}

<!-- https://www.youtube.com/watch?v=DT-1REn31eQ -->
{{< youtube "DT-1REn31eQ" >}}




$$
\begin{aligned}
  \nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
  \nabla \cdot \mathbf{B} &= 0 \\
  \nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
  \nabla \times \mathbf{B} &= \mu_0 \left( \mathbf{J} + \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} \right)
\end{aligned}
$$

## Chemistry


$$\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}$$



{{< details title="Cool chemistry 📌" closed="true" >}}

Reacción del nitrato de potasio con azúcar y del ácido nítrico con aluminio

**Nitrato de potasio y azúcar**

La mezcla de nitrato de potasio (KNO3) y azúcar (sacarosa, C12H22O11) produce humo al calentarse debido a una reacción de combustión. El nitrato de potasio actúa como un oxidante, proporcionando el oxígeno necesario para que el azúcar se queme. La reacción general es compleja y produce varios productos, incluyendo dióxido de carbono (CO2), vapor de agua (H2O), nitrógeno (N2) y óxido de potasio (K2O).

La ecuación química simplificada de la reacción sería:

```
KNO3 + C12H22O11 → CO2 + H2O + N2 + K2O
```

$$\ce{KNO3 + C12H22O11 -> CO2 + H2O + N2 + K2O}$$


Esta reacción es exotérmica, lo que significa que libera calor, lo que a su vez mantiene la reacción en marcha y produce el humo característico. El humo está compuesto por partículas sólidas (principalmente óxido de potasio) y gases (dióxido de carbono, vapor de agua y nitrógeno).

**Ácido nítrico y aluminio**

La reacción del ácido nítrico (HNO3) concentrado con aluminio (Al) es una reacción redox compleja que produce nitrato de aluminio (Al(NO3)3), óxidos de nitrógeno (NOx) y agua (H2O). La reacción es altamente exotérmica y puede ser peligrosa si no se realiza con precaución.

La ecuación química simplificada de la reacción sería:

```
Al + HNO3 → Al(NO3)3 + NOx + H2O
```


$$\ce{Al + HNO3 -> Al(NO3)3 + NOx + H2O}$$


El aluminio se oxida, perdiendo electrones, mientras que el ácido nítrico se reduce, ganando electrones. Los óxidos de nitrógeno (NOx) son los que producen el humo marrón característico de esta reacción.

Es importante tener en cuenta que esta reacción puede ser muy violenta y generar gases tóxicos, por lo que se debe realizar únicamente en un laboratorio con las medidas de seguridad adecuadas.

**Precauciones**

Tanto la mezcla de nitrato de potasio y azúcar como la reacción de ácido nítrico con aluminio pueden ser peligrosas si no se manejan correctamente. Se recomienda no intentar estos experimentos en casa y buscar la guía de un profesional en caso de ser necesario.


{{< /details >}}

---


* Thanks to [HUGO Hextra Theme and katex](https://imfing.github.io/hextra/docs/guide/latex/)!
