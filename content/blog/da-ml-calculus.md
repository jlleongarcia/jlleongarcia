---
title: "Understanding Calculus"
date: 2025-04-27T23:20:21+01:00
draft: true
tags: ["DSc"]
description: ''
url: 'calculus-101'
math: true
---


The essence of calculus.

https://www.youtube.com/watch?v=WUvTyaaNkzM
{{< youtube "WUvTyaaNkzM" >}}

Laws of physics are explained with differential equations.

The series that **3Blue1Brown** has made on the topic, are simply **magestic**: https://www.youtube.com/watch?v=p_di4Zn4wz4 and https://www.youtube.com/playlist?list=PLZHQObOWTQDNPOjrT6KVlfJuKtYTftqH6


## ODE - 

https://www.youtube.com/watch?v=ly4S0oi3Yz8
{{< youtube "ly4S0oi3Yz8" >}}

### The Double Pendulum

No, a double pendulum is typically modeled using a system of **ordinary differential equations (ODEs)**, not partial differential equations (PDEs).

Here's why:

*   **Ordinary Differential Equations (ODEs):** ODEs describe how functions of *one* independent variable change. In the case of a double pendulum, the independent variable is *time*. The dependent variables are the angles of the two pendulum arms (θ₁ and θ₂).  We're looking at how these angles change *over time*.

*   **Partial Differential Equations (PDEs):** PDEs describe how functions of *multiple* independent variables change.  PDEs are used when the quantity of interest depends on more than one independent variable.  For example, the temperature distribution in a metal plate depends on both *time* and *position* (x, y coordinates).  This would require a PDE.

**Why ODEs for the Double Pendulum?**

The motion of a double pendulum is described by how the angles θ₁ and θ₂ change over time.  There's no other independent variable involved.  The equations of motion are derived from Newton's laws or Lagrangian mechanics, and they result in a set of coupled second-order ODEs:

```
d²θ₁/dt² = f₁(θ₁, θ₂, dθ₁/dt, dθ₂/dt)
d²θ₂/dt² = f₂(θ₁, θ₂, dθ₁/dt, dθ₂/dt)
```

Where f₁ and f₂ are functions that depend on the angles, their first derivatives (angular velocities), and other parameters like the lengths and masses of the pendulum arms.

**In summary:** The double pendulum is a classic example of a system that is accurately and effectively modeled using ordinary differential equations because the angles of the pendulum arms depend solely on time.  There are no spatial dependencies that would necessitate the use of partial differential equations.


## PDE - Partial Derivate Equations


{{< youtube "m3hxPxPgSIY" >}}



---


<!-- https://www.youtube.com/watch?v=ToIXSwZ1pJU -->
{{< youtube "ToIXSwZ1pJU" >}}
