---
title: "What is Lean? Why do I need it as Software ?"
date: 2022-10-02T23:20:21+01:00
draft: true
tags: ["Outro"]
description: 'Understanding and applying Lean.'
summary: 'Talking about Lean and how we can apply this philosophy to all processes to improve efficiency, quality, response time as well as reducing costs and waste.'
url: 'lean'
---

## What is Lean?

Lean is a management philosophy that originated at Toyota and is now used by organizations (and not only) around the world.

At its core, Lean is focused on creating value for customers by eliminating waste and continuously improving processes.

### The Lean improvement cycle

The Lean improvement cycle, also known as the **PDCA** (Plan-Do-Check-Act) cycle, is a continuous improvement process used in Lean management. The cycle consists of four steps. Here's a brief overview of each step:

* {{< dropdown title="Plan" closed="true" >}}
The Plan step involves identifying the problem or opportunity for improvement, and developing a plan to address it. This can involve defining the scope of the problem, setting goals and objectives, and determining the resources and activities required to achieve them. The goal of the Plan step is to develop a clear and actionable plan that addresses the problem or opportunity for improvement.
{{< /dropdown >}}

* {{< dropdown title="Do" closed="true" >}}
The Do step involves implementing the plan developed in the previous step. This can involve testing the plan on a small scale, and making any necessary adjustments before implementing it more broadly. The goal of the Do step is to put the plan into action and test its effectiveness.
{{< /dropdown >}}


* {{< dropdown title="Check" closed="true" >}}
The Check step involves evaluating the results of the implementation to determine whether the plan was effective in addressing the problem or opportunity for improvement. This can involve collecting and analyzing data, and comparing the results to the goals and objectives established in the Plan step. The goal of the Check step is to determine whether the plan was effective, and identify any areas for improvement.
{{< /dropdown >}}

* {{< dropdown title="Act" closed="true" >}}
The Act step involves making any necessary adjustments to the plan or the implementation based on the results of the Check step. This can involve modifying the plan to address any issues or problems identified during the implementation, and implementing the revised plan on a larger scale. The goal of the Act step is to incorporate the lessons learned from the Check step into the plan, and continually improve the process.
{{< /dropdown >}}

The Lean improvement cycle is a continuous process, and once the Act step is completed, the cycle begins again with the Plan step. The goal is to continually identify areas for improvement, develop and implement plans to address them, and evaluate the results to ensure that the improvements are effective and sustainable.

### The 5 Lean Principles

* {{< dropdown title="Value" closed="true" >}}
The first Lean principle is to focus on [creating value for the customer](https://fossengineer.com/lean/#vsm). In software development, this means identifying what the customer needs and delivering it in the most efficient and effective way possible. An example of applying this principle to software development would be to conduct user research to understand the needs and preferences of the target audience, and using this information to guide the development process and ensure that the product delivers value to the customer.
{{< /dropdown >}}

* {{< dropdown title="Flow" closed="true" >}}
The second Lean principle is to **optimize the flow of work** through the system.

In software development, this means identifying and removing bottlenecks and inefficiencies in the development process. An example of applying this principle to software development would be to use Kanban boards to visualize the flow of work and identify areas where work is getting stuck, so that improvements can be made to optimize the flow of work.
{{< /dropdown >}}

* {{< dropdown title="Pull" closed="true" >}}
The third Lean principle is to use a pull-based system, where work is pulled through the system in response to demand, rather than pushed through based on arbitrary timelines or quotas.

In software development, this means focusing on delivering features or functionality as they are needed, rather than trying to deliver everything at once. An example of applying this principle to software development would be to use agile development methodologies, such as Scrum or Kanban, to prioritize work based on customer needs and pull work through the development process as it is needed.
{{< /dropdown >}}

* {{< dropdown title="Continuous Improvement" closed="true" >}}
The fourth Lean principle is to strive for perfection by [continuously improving processes](https://fossengineer.com/lean/#kaizen) and eliminating waste. In software development, this means continually identifying and eliminating inefficiencies in the development process, such as manual testing or redundant code. 

An example of applying this principle to software development would be to implement a continuous improvement process, such as the PDCA (Plan-Do-Check-Act) cycle, to identify areas for improvement and make iterative changes to the development process.
{{< /dropdown >}}

* {{< dropdown title="Respect" closed="true" >}}
The fifth Lean principle is to **respect the people doing the work and empower them** to make improvements to the development process.

In software development, this means creating a culture of collaboration and continuous improvement, where team members are encouraged to share their ideas and contribute to the development process.

An example of applying this principle to software development would be to implement a continuous improvement program, such as Kaizen, that encourages team members to identify areas for improvement and make changes to the development process based on their own observations and experiences
{{< /dropdown >}}


## Lean Concepts

There are several key concepts that are central to the Lean approach, lets go one by one.

### VSM

Value stream mapping is a technique used in Lean to **identify and eliminate waste in a process**. It involves mapping out the flow of materials and information through a process, and identifying areas where value is added and areas where waste is occurring.

> Why things are the way we are? Most processes just evolve overtime.

The goal of value stream mapping is to **create a visual representation of the process** that highlights opportunities for improvement and identifies areas where value can be added.

In software development, VSM can be used to map out the flow of work from the initial idea to the delivery of the final product. This can help identify areas of waste, such as excessive waiting times or rework, and identify opportunities to streamline the development process. By understanding the value stream of software development, teams can focus on delivering value to the customer by optimizing the flow of work.

> Do not accept something because it has always been that way.

### Kanban

Kanban is a method for managing and optimizing the flow of work. It involves using visual signals, such as cards or boards, to represent work and its progress through a process. Kanban helps teams to understand the current state of the work and identify any bottlenecks or areas for improvement. The goal of Kanban is to create a smooth and efficient flow of work that meets the needs of customers.

Kanban is a popular method used in software development for visualizing and managing workflow. It involves breaking down tasks into manageable pieces, represented as cards on a board, and moving them through a series of columns that represent different stages of the development process. This visual representation helps teams to identify bottlenecks and areas of improvement, and prioritize work based on customer needs.

* It will put a spotlight on inefficient processes - It looks at all steps in the process and find the ones that are more value
* It focus on changing the current process.
* **Limit Work in Progress** (the number of cards on the *Doing* Step)
* Visualizing the workflow:
    * Working on too many things?
    * Combination of fast and slow teams?
* Installing a free opensource Kanban board for your team - [Focalboard guide](https://fossengineer.com/focalboard-docker/)

### Kaizen

Kaizen is a Japanese term that means **continuous improvement**. It is a key principle of the Lean approach, and involves constantly looking for ways to improve processes and eliminate waste. Kaizen can be applied to any area of an organization, from manufacturing to marketing. It encourages employees at all levels to contribute to the improvement process and creates a culture of continuous learning and improvement.

Kaizen can be applied in software development to encourage continuous improvement. It involves identifying areas of waste and inefficiency, such as manual testing or lengthy code reviews, and finding ways to automate or streamline these processes. Teams can also regularly review their development practices and seek feedback from customers to identify areas for improvement and make iterative changes to the product.

* It relies heavily on the team's hands, no tools provided.
* This is the technique (**a work process management tool**) inside lean that drives continuous improvement.

### Jidoka

Jidoka is a term used in Lean to describe a process that stops automatically when a problem occurs. The goal of jidoka is to build quality into the process and prevent defects from occurring. When a problem is detected, the process stops, and the problem is addressed before the process resumes. Jidoka helps to create a culture of quality and encourages employees to take ownership of the process and the product.

In software development, Jidoka can be applied to prevent defects and improve the quality of the product. This can involve implementing automated testing and continuous integration processes to catch errors early in the development cycle. By building quality into the development process, teams can improve the reliability and stability of the final product.

> "Do it right, even when nobody is looking".

---

## FAQ

Lean is a management philosophy that focuses on creating value for customers by eliminating waste and continuously improving processes. VSM value stream mapping, Kanban, Kaizen, and Jidoka are all key concepts that are central to the Lean approach.

By applying these concepts, we can create a culture of continuous improvement and create products and services that meet the needs of our customers.

### TPM

Total Productive Maintenance (TPM) is a Lean concept that is focused on maximizing the effectiveness of equipment and processes by involving all employees in the maintenance process.

**TPM aims to eliminate defects, breakdowns, and other inefficiencies** by improving the overall reliability and maintainability of equipment and processes.

In the context of software development, TPM can be applied to improve the efficiency and effectiveness of development processes. This can involve implementing best practices for software maintenance, such as automated testing and continuous integration, to prevent defects and improve the reliability of the software. TPM can also involve involving all team members in the maintenance process, encouraging a culture of ownership and accountability for the quality of the software.

### How Lean Relates with DevOps?

* Focus on reliability and quality: DevOps and CI/CD place a strong emphasis on delivering reliable and high-quality software quickly and efficiently. TPM and CI can be applied in software development to improve the reliability and maintainability of the software, thereby reducing the likelihood of defects and improving the overall quality of the software.

* Continuous improvement: Both DevOps and CI/CD promote a culture of continuous improvement, where teams are encouraged to identify inefficiencies and implement changes to improve the efficiency and effectiveness of the development process. TPM and CI can be applied to identify opportunities for improvement and implement changes that improve the overall efficiency and quality of the software development process.

* Collaboration: DevOps and CI/CD emphasize collaboration and communication between development, operations, and other teams involved in the software development process. TPM and CI involve involving all team members in the maintenance process, encouraging a culture of ownership and accountability for the quality of the software, and promoting collaboration across different teams and departments.

* Automation: DevOps and CI/CD rely heavily on automation to streamline the software development process and reduce the likelihood of errors and defects. TPM and CI can be applied to implement automated testing and continuous integration processes to catch errors early in the development cycle and improve the overall reliability and stability of the software.

TPM and CI can be applied in software development to improve the reliability, quality, and efficiency of the development process. By promoting a culture of continuous improvement, collaboration, and automation, software development teams can improve the overall effectiveness of their processes and deliver high-quality software quickly and efficiently. These principles align with the goals of DevOps and CI/CD, making them complementary approaches to software development.

### 5s

The 5S system is a Lean tool used to organize and maintain a clean and efficient workspace.

The 5S principles are: **Sort, Set in order, Shine, Standardize, and Sustain**.

* {{< dropdown title="Sort" closed="true" >}}
The Sort principle involves separating necessary items from unnecessary ones and getting rid of anything that is not needed. This helps to eliminate waste and make the workspace more efficient. In Lean, eliminating waste is a key principle, and sorting helps to identify areas of waste and remove them from the workspace. By reducing clutter and unnecessary items, teams can focus on the tasks that add value and improve the efficiency of their work.
* In software development, the Sort principle can be applied by identifying unnecessary or redundant code and removing it. This helps to reduce complexity and improve the maintainability of the software. By reducing the amount of code that needs to be maintained, teams can focus on the most important parts of the software and improve the overall efficiency of the development process.
{{< /dropdown >}}

* {{< dropdown title="Set in order" closed="true" >}}
Tt involves organizing the necessary items in a way that is efficient and easy to use. This helps to reduce wasted time and effort, and improve productivity. In Lean, creating a visual workplace that is easy to understand and use is important for optimizing workflow. By organizing tools, equipment, and materials in a logical way, teams can reduce the time and effort required to complete tasks, and make it easier to identify problems or areas of waste.
* In software development, the Set in order principle can be applied by organizing code, documentation, and other artifacts in a logical and consistent way.
{{< /dropdown >}}

* {{< dropdown title="Shine" closed="true" >}}
The Shine principle involves cleaning and maintaining the workspace to keep it in good condition. This helps to prevent defects and breakdowns, and improve the overall quality of the workspace. In Lean, maintaining a clean and organized workspace is important for optimizing workflow and preventing waste. By regularly cleaning and maintaining tools, equipment, and the workspace, teams can prevent defects and breakdowns, and improve the overall quality of their work.
* In software development, the Shine principle can be applied by regularly reviewing and optimizing the development process to eliminate inefficiencies and prevent defects. This can involve implementing automated testing and continuous integration processes, and regularly reviewing code and development practices to identify areas for improvement. 
{{< /dropdown >}}

* {{< dropdown title="Standardize" closed="true" >}}
The Standardize principle involves creating standards and procedures for maintaining the workspace and completing tasks. This helps to ensure consistency and reduce variability in the work process. In Lean, standardization is important for optimizing workflow and eliminating waste. By establishing standard procedures for completing tasks and maintaining the workspace, teams can reduce the likelihood of errors and defects, and improve the efficiency and quality of their work.
* In software development, the Standardize principle can be applied by establishing standard procedures for completing tasks and maintaining code. By creating standards and procedures for coding, testing, and documentation, teams can reduce the likelihood of errors and defects, and improve the overall quality of the software.
{{< /dropdown >}}

* {{< dropdown title="Sustain" closed="true" >}}
The Sustain principle involves **maintaining the improvements** made through the 5S system over the long term. This requires ongoing effort and commitment to maintain the organized and efficient workspace created through the 5S system. In Lean, sustaining improvements is important for creating a culture of continuous improvement and preventing waste from creeping back into the work process.
* In software development, the Sustain principle involves regularly reviewing and updating code and development practices, and maintaining a culture of ownership and accountability for the quality of the software. 
{{< /dropdown >}}


### JIT

JIT or simple, **Just-In-Time** is a manufacturing philosophy that aims to **produce goods only when they are needed**, and in the quantities required, to reduce waste and increase efficiency. JIT is a key component of Lean manufacturing, which emphasizes the elimination of waste in all aspects of production.

In software development, JIT can be applied in a similar way to reduce waste and increase efficiency. By using a pull-based system, where work is pulled through the development process in response to demand, rather than pushed through based on arbitrary timelines or quotas, developers can reduce the risk of overproduction and ensure that the software being developed meets the needs of the customer. 

This can be achieved through the use of agile development methodologies, such as Scrum or Kanban, which prioritize work based on customer needs and pull work through the development process as it is needed.

### What is Total Quality Management?

**Total quality management (TQM)** is a management philosophy that aims to improve quality and efficiency by involving all employees in the organization in a continuous improvement process. TQM emphasizes the importance of customer satisfaction, employee involvement, and the continuous improvement of processes and products.

TQM and lean methodology share a common goal of improving efficiency and productivity through continuous improvement. Both approaches emphasize the importance of eliminating waste and optimizing processes to achieve greater results with fewer resources. However, while lean methodology focuses primarily on manufacturing processes, TQM is applicable to a wide range of industries and contexts.

Another important aspect of TQM is the emphasis on involving all employees in the improvement process. This aligns with the concept of "respect for people" in lean methodology, which emphasizes the importance of valuing and empowering employees to improve processes and drive continuous improvement.

### Push vs Pull

* In a push system, products are produced in anticipation of demand, based on forecasted sales or production goals. This can lead to overproduction and excess inventory, as products may not sell as expected.

* In a **pull system, products are produced in response to actual demand**, based on customer orders or requests. This helps to reduce waste and increase efficiency, as production is aligned with actual demand.

### A Lean Workforce

* Cross-functional teams
* Continuous improvement mindset
* Root Cause Analysis - RCA