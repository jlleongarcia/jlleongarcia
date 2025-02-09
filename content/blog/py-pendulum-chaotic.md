---
title: "What a Double Pendulum can teach about Chaos Theory"
date: 2023-09-03T23:20:21+01:00
draft: false
tags: ["Python","Dashboards","Mechanics"]
cover:
    image: "https://socialify.git.ci/jalcocert/Py_Double_Pendulum/image?description=0&name=1&owner=1&pattern=Brick%20Wall&theme=Light"
    alt: "Double Pendulum Simulation with Python" # alt text
    caption: "Double Pendulum with Python & Streamlit." # display caption under cover
editPost:
    URL: "https://github.com/JAlcocerT/Py_Double_Pendulum"
    Text: "Suggest Changes" # edit text
    appendFilePath: false # to append file path to Edit link        
description: "Python Streamlit Double Pendulum"
summary: 'Exploring Chaos Theory with Python, a Double Pendulum Simulator App. By using Streamlit and physics equations, the app showcases the unpredictable yet deterministic movement in a digital realm.'
url: 'chaos-theory-and-the-double-pendulum-with-python'
math: true
---

<!-- N95 vs iphone
https://forocoches.com/foro/showthread.php?t=995246 -->

<!-- # Chaos Theory: Understanding Non-Linearity with Python -->

It became a dream of mine to encapsulate the wonder of **Chaos Theory into something tangible**, something that wasn't confined to the pages of a physics textbook.

The particular example of a Double Pendulum is a great point to start comprehending and reflecting on the Chaos concept.

Today, I am thrilled to unveil this dream, not just as a tribute to a fascinating physical phenomenon, but as an ode to the unpredictable beauty of life itself.

I have prepared a **Python Double Pendulum App** that is more than just a simulation; it's a gateway into the world of Chaos Theory.

Textbooks are great, images are worth more than a thousand words, now dive in and determine for yourself the value of an interactive journey through chaos.

After reading this post, the next time you see a pendulum, you will know that there's more to its swing than meets the eye.

Furthermore, this interactive app nudges visitors to consider the broader implications of chaos theory on society at large.

How can a subtle shift in daily habits lead to monumental transformations in overall well-being? How do minute changes in public opinion sway elections? How can a small act of kindness ripple into a community-wide movement? These are the profound questions that lurk beneath the surface, urging individuals to understand and appreciate the inescapable influence of chaos in shaping both personal narratives and societal trajectories.


## The Dance of the Double Pendulum: A Dive into Chaos Theory and Non-Linearity

Picture this: A pendulum swinging back and forth. Simple, predictable, and linear. 

Now, add another pendulum to the end of the first one. Suddenly, the predictable becomes unpredictable, the linear becomes non-linear, and we're plunged into the mesmerizing world of Chaos Theory.

The double pendulum is Chaos Theory's poster child. At first glance, it might seem like just another pendulum, but set it in motion, and you'll witness a dance of unpredictability. It twirls, it spins, it goes haywire, and just when you think you've figured out its pattern, it surprises you.

## Chaos in Our Lifes: The Butterfly Effect and Breakfast Toast

Ever heard of the saying that a butterfly flapping its wings in Brazil can cause a tornado in Texas? That's Chaos Theory in a nutshell.

**It's the idea that small changes in initial conditions can lead to wildly different outcomes.**

It's why predicting the weather, stock markets, or even whether your toast will land butter-side up or down can be so darn tricky.

### Weather Woes: The Ultimate Chaotic System

Ever tried predicting the specific weather conditions months in advance for a particular day? Good luck with that. 

The atmosphere is a classic example of a chaotic system. Tiny changes in the conditions in one part of the world, can set off a chain reaction leading to a tornado in Texas. This sensitivity to initial conditions makes long-term weather forecasting **a game of educated guesses**.

For the case of planning according to weather conditions for long time, I would just stick to basic statistics given [the usual weather patterns of a particular place](https://fossengineer.com/trip-planner-with-weather/) and cross the fingers not to have any outlier on that day.

You can have a look to this at [ventusky](https://www.ventusky.com/?p=51;73;1&l=temperature-2m).

### The Pareto Principle: 80/20 and Chaos

You might've heard of the **80/20 rule**: 80% of effects come from 20% of causes.

**It's seen everywhere**, from business to nature. 

But what's chaos got to do with it?

The Pareto Principle is a manifestation of **non-linear dynamics**. 

Small inputs (the 20%) can lead to significant outputs (the 80%), much like the unpredictable swings of our double pendulum.

### Newton Got It... Kinda Right

Sir Isaac Newton painted a universe of clockwork predictability. And he wasn't wrong. Many systems are deterministic, meaning they follow set patterns.

But here's the twist: some deterministic systems are chaotic in practice. They might follow laws, but good luck predicting their behavior. 

> It's like knowing all the rules of a game but having no idea how it'll play out in the long term.


### Chaos Striking

Just when you think you know how everything will unfold, interesting behaviours will appear:

{{< youtube NF-YC0Zh4J0 >}}

<!-- 
w2 40

w2 40 and L2 1.01 
-->


## From Theory to App: The Double Pendulum in Action 

Inspired by this dance of unpredictability, I embarked on a journey to create an app that simulates the double pendulum's movements.

Let me remind you now that the system is **chaotic, yet deterministic**.

Given the same initial conditions, you will always get the same trajectory.

It's not just an app; it's a digital playground where you can tweak initial conditions, set the pendulums in motion, and **watch the magic of non-linearity unfold**.

Every app has its genesis, a series of steps and decisions that bring it from concept to reality. The double pendulum app was no different, and its creation was a blend of technology, physics, and a dash of ingenuity.

These are the technologies that helped me craft the Python Double Pendulum App:

###  Streamlit: The Digital Canvas

The first challenge was to create an interactive and user-friendly interface.

**Enter Streamlit**. 

<!--
![Py_double_Pendulum APP gif](/img/Projects/double_pendulum.gif)
-->

This powerful tool became the canvas upon which the double pendulum would dance.

With its intuitive design capabilities, Streamlit allowed for the seamless integration of visuals and controls, making the app not just functional but also a delight to use.

### The Heartbeat: Physics and Equations of Movement

An app simulating a double pendulum needs to get the physics right. Delving into the world of classical mechanics, the equations of movement for the pendulum were derived. 

This ensured that the app wasn't just a visual treat but also a scientifically accurate representation of the double pendulum's chaotic dance.

### Docker: Packaging the Magic

With the front end designed and the physics in place, the next step was to package the app.

Docker came to the rescue, **encapsulating the app** and its environment into a neat, portable container. 

This ensured that the app could run consistently across different platforms, making it both versatile, reliable as it contains no external dependencies and reproducible.

###  Home Deployment: Cloudflare's Protective Shield

The final piece of the puzzle was deployment. While many options were available, the decision to deploy the app at home added a personal touch.

But [how to make it accessible to the world? Cloudflare](https://fossengineer.com/selfhosting-cloudflared-tunnel-docker/) provided the solution.

Acting as a protective shield, Cloudflare ensured that the app, hosted from home, was safely exposed to the world, allowing users everywhere to witness the mesmerizing movements of the double pendulum.

---

## FAQ

### Show Me The Code

I was definitely inspired with [jakevdp's work with a triple pendulum](http://jakevdp.github.io/blog/2017/03/08/triple-pendulum-chaos/) which it is a great resource. But let's face it, not everyone will check a pyhon notebook, so I decided to create the Python Double Pendulum Simulator together with Streamlit so that any person with a web browser could *play* and sense chaos theory in a practical and hassle free manner. 


To simulate the **motion of a double pendulum**, we just need...

$$
\begin{aligned}
\ddot{\theta}_1 &= \frac{m_2 g \sin(\theta_2) \cos(\theta_1 - \theta_2) - m_2 \sin(\theta_1 - \theta_2) (L_1 \dot{\theta}_1^2 \cos(\theta_1 - \theta_2) + L_2 \dot{\theta}_2^2) - (m_1 + m_2) g \sin(\theta_1)}{L_1 (m_1 + m_2 \sin^2(\theta_1 - \theta_2))}\\
\ddot{\theta}_2 &= \frac{(m_1 + m_2)(L_1 \dot{\theta}_1^2 \sin(\theta_1 - \theta_2) - g \sin(\theta_2) + g \sin(\theta_1) \cos(\theta_1 - \theta_2)) + m_2 L_2 \dot{\theta}_2^2 \sin(\theta_1 - \theta_2) \cos(\theta_1 - \theta_2)}{L_2 (m_1 + m_2 \sin^2(\theta_1 - \theta_2))}
\end{aligned}
$$

...its equation of motion.

And now its all about writting them in Python:

```py
import numpy as np
import plotly.graph_objects as go
from scipy.integrate import solve_ivp

def double_pendulum(t, y, m1, m2, L1, L2, g):
    """
    Returns the derivatives of the double pendulum equations.
    """
    theta1, omega1, theta2, omega2 = y
    
    # Calculate the angular acceleration of the pendulums
    dtheta1_dt = omega1
    domega1_dt = (m2 * g * np.sin(theta2) * np.cos(theta1 - theta2) - m2 * np.sin(theta1 - theta2) * (L1 * omega1 ** 2 * np.cos(theta1 - theta2) + L2 * omega2 ** 2) - (m1 + m2) * g * np.sin(theta1)) / (L1 * (m1 + m2 * np.sin(theta1 - theta2) ** 2))
    dtheta2_dt = omega2
    domega2_dt = ((m1 + m2) * (L1 * omega1 ** 2 * np.sin(theta1 - theta2) - g * np.sin(theta2) + g * np.sin(theta1) * np.cos(theta1 - theta2)) + m2 * L2 * omega2 ** 2 * np.sin(theta1 - theta2) * np.cos(theta1 - theta2)) / (L2 * (m1 + m2 * np.sin(theta1 - theta2) ** 2))
    
    return [dtheta1_dt, domega1_dt, dtheta2_dt, domega2_dt]

# Define the parameters of the double pendulum
m1, m2 = 1, 1
L1, L2 = 1, 1
g = 9.81

# Define the initial conditions and the time range
y0 = [np.pi / 2, 0, np.pi / 2, 0]
t_span = (0, 20)
t_eval = np.linspace(*t_span, 10000)

# Solve the differential equations using the solve_ivp function
sol = solve_ivp(double_pendulum, t_span, y0, args=(m1, m2, L1, L2, g), t_eval=t_eval)

# Create a Plotly figure with subplots for each pendulum
fig = go.Figure()
fig.add_trace(go.Scatter(x=L1 * np.sin(sol.y[0]), y=-L1 * np.cos(sol.y[0]), mode='lines', line=dict(color='blue')))
fig.add_trace(go.Scatter(x=L1 * np.sin(sol.y[0]) + L2 * np.sin(sol.y[2]), y=-L1 * np.cos(sol.y[0]) - L2 * np.cos(sol.y[2]), mode='lines', line=dict(color='red')))
fig.update_xaxes(range=[-2, 2])
fig.update_yaxes(range=[-2, 2])
fig.update_layout(width=600, height=600)

# Save the figure as a PNG file
fig.write_image('double_pendulum.png')
```

You can run it with: `streamlit run app.py`

### How Can I try the Python Double Pendulum App?

* Use the [docker container image](https://hub.docker.com/r/fossengineer/double_pendulum/ "Python Double Pendulum DockerHUB {rel='nofollow'}") to self-host it yourself.

### How Can I Contribute?

* I have made all the code **Open Source** and this is the public Github repository where I have built the code, please feel free to have a look, experiment with the code and suggest any improvements:
    * The [Python Double Pendulum Github Repository](https://github.com/JAlcocerT/Py_Double_Pendulum/ "Python Double Pendulum Repository {rel='nofollow'}").