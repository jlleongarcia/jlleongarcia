---
title: "Getting Started with Python"
date: 2020-08-30T23:20:21+01:00
draft: false
tags: ["Dev","Python"]
# cover:
#     image: "img/differences.PNG" # image path/url
#     alt: "<alt text>" # alt text
#     capt-ion: "<text>" # display caption under cover   
description: 'The must know in Python to get started with your projects.'
summary: 'As part of your Data Analytics journey, you will have to build knowledge of Python.
In this post I am collecting some of the must know tricks to start your projects.'
url: 'guide-python'
---

As part of your **Data Analytics** journey, you will have to build **knowledge of Python**.

In this post I am collecting some of the must know tricks to start your projects.

* {{< newtab url="https://www.python.org/" text="The Python Site" >}}
* {{< newtab url="https://github.com/python/cpython" text="The Python Source Code at Github" >}}
    <!-- * License: {{< newtab url="https://github.com/flet-dev/flet?tab=Apache-2.0-1-ov-file#readme" text="Apache 2.0" >}} ❤️ -->

Python has evolved into a go-to choice for programmers across various domains. Let's delve into Python's history, philosophy, syntax, features, applications, and ecosystem.

## About Python

### History and Philosophy

Python, created by Guido van Rossum in 1991, draws inspiration from Monty Python's Flying Circus, evident in whimsical names like "Spam" and "Eggs" in code samples.

Its guiding philosophy, encapsulated in "The Zen of Python," prioritizes readability and simplicity, fostering a welcoming environment for beginners and seasoned developers alike.

### Syntax and Features

Python's hallmark is its concise and readable syntax. It's strongly typed yet dynamic, eliminating the need for explicit type annotations. Indentation defines code blocks, promoting clean and consistent formatting. Python supports multiple programming paradigms, including functional and object-oriented programming, enhancing its versatility.

### Applications and Ecosystem

Python finds application across diverse fields, including:

* web development with frameworks like Django
* data analysis
* and machine learning

Its extensive ecosystem boasts third-party libraries like TensorFlow and OpenCV, accessible via the pip package manager. Python's flexibility and ease of use make it an invaluable tool for tackling projects of all scales.    

### Takeaways

Python is prized for its simplicity and readability, making it an ideal language for beginners.
Its versatility lends itself to a myriad of applications, from web development to machine learning.
Python's dynamic syntax supports various programming paradigms, enhancing developer productivity.
The extensive ecosystem of libraries and robust community support empowers developers to tackle complex challenges with confidence.

---

## Installing Python 🐍

Python is F/OSS and you can download it {{< newtab url="https://www.python.org/downloads/" text="here." >}}

{{< dropdown title="How to Install Python in Linux" closed="true" >}}

```sh
sudo apt update
sudo apt install build-essential software-properties-common -y
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update

sudo apt install python3.11 -y
```
{{< /dropdown >}}


Dont forget to add it to the PATH if you are on Windows - Then **check the version** with:

```sh
python --version
```

```py
import sys
print(sys.version)
```

You can also start an interactive session and try it:

```sh
python
1+1
```

> Dont forget to check [how to install dependencies](#how-to-install-python-dependencies)

### Choosing IDE

* VScode or {{< newtab url="https://vscodium.com/#install" text="VSCodium" >}}
* {{< newtab url="https://www.spyder-ide.org/" text="Spyder" >}} - For DSc's
* Thonny - For IoT
* Jupyter Notebook - Great for EDA

## Python 101 for your Projects

Let's make a recap on **Python's Data Structures**:

### Lists

Index-value pairs in Python. **Their order is maintained, they are mutable, and allows duplicate values.**

```py
your_list = ['one', 'two', 'three']
```


```py
your_list[0]
```



### Dictionaries

Your key-value friend from now on. Remember that the dictionary is **unordered and mutable, but the dictionary doesn't allow duplicate values with the same key in it.**

They are great to store large amounts of data for easy and quick access.

```py
your_dictionary = {
                    'one': 1,
                    'two': 2,
                    'three': 3,
                    'four': 4
                }
```

You can access an element with:

```py
your_dictionary['two']
```

### Sets

The sets are an **unordered** collection of data types. These are **mutable, iterable, and do not allow of any duplicate elements.**

Remember that they can't be indexed.

```py
your_set = {"hello", "fantastic", "world", True, 1, 2}
```

```py
your_set
```

### Tuples

Tuples are used to store multiple items in a single variable.

A tuple is a collection which **is ordered and unchangeable, also they allow duplicates.**

They are more space efficient, as they are inmutable, the memory allocation is better handdled.

```py
your_tuple = ("hello", "fantastic", "world")
```

See a particular value with:

```py
your_tuple[0]
```



## Loops

### Non-Pythonic approach

```py
i = 0
new_list= []
while i < len(your_list):
    if len(your_list[i]) >= 4:
        new_list.append(your_list[i])
    i += 1
print(new_list)
```

A more Pythonic approach would loop over the contents of names, rather than using an index variable.

### Looping over the contents of a list

```py
better_list = []

for item in your_list:
    if len(item) >= 4:
        better_list.append(item)
print(better_list)
```

### Best - List Comprehension

```py
# Print the list created by using list comprehension

best_list = [item for item in your_list if len(item) >= 4]
print(best_list)
```


## Functions

### Regular Functions

```py
def my_function():
  print("Hello World")

my_function()
```

```py
def my_function_a(x,y):
  return 5 * x + y

print(my_function_a(3,1))

```

You can also define functions in other python scripts and call them as:


```py
from Z_Folder_with_UDF import my_function_a as udf 
```

With this approach you can have all your User Defined Functions clearly ordered.


### Lambda Functions

```py
your_lambda = lambda a : a + 1

print(your_lambda(5))
```

Or also, with multiple arguments

```py
your_lambda = lambda a, b : a * b

print(your_lambda(2, 3))
```

### Using them together


Here, we will be using the output of the UDF *myfunc* as the input of the lambda function:

```py
def myfunc(n):
  return (lambda a : a * n)

mydoubler = myfunc(2) #here you use a

print(mydoubler(11)) #here you are using n as input
```

## Classes

This is going to be a little bit tricky if you are not used to OOP.

But dont be scared, you dont need to be a master of Object Oriented Programming before completing your first project - Actually, it is something that you will learn on the way, as you need it.

### Creating your first Class

```py
class Your_Class:
  x = 1
```

```py
p1 = Your_Class()
print(p1.x)
```

### Important: the __init__() Function

All classes have a function called *__init__()*, which is always executed when the class is being initiated.

```py
class Person:
  def __init__(self, name, age):
    #this function gets executed everytime you will create an object of the class Person
    self.name = name
    self.age = age

p1 = Person("Yosua", 31)

print(p1.name)
print(p1.age)
```

### The __str__() Function

```py
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age  

  def __str__(self):
    return f"{self.name}({self.age})"

p1 = Person("Yosua", 31)

print(p1)
```


### Methods - 'Class's Functions'

Methods are function that belong to the objects created of a certain Class.

```py
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def myfunc(self):
    print("Hello my name is " + self.name + " and I am " + str(self.age))

p1 = Person("Yosua", 31)
p1.myfunc()
```

## Document your work

You want to make sure that your work is understandable, so make sure you write proper comments in your code.

If you do this and also make sure that your code is modular enough (use UD'sF!), it is already a good start:

### Docstrings

```py
def add(num1, num2):
    """
    Add up two integer numbers.

    This function simply wraps the ``+`` operator, and does not
    do anything interesting, except for illustrating what
    the docstring of a very simple function looks like.

    Parameters
    ----------
    num1 : int
        First number to add.
    num2 : int
        Second number to add.

    Returns
    -------
    int
        The sum of ``num1`` and ``num2``.

    See Also
    --------
    subtract : Subtract one integer from another.

    Examples
    --------
    >>> add(2, 2)
    4
    >>> add(10, -10)
    0
    """
    return num1 + num2
```

---

## FAQ

<!-- ### Try me with Google Colaboratory

If you have a Google account, you can check these kind of snippets, as well as few useful UDF's to work more efficiently with spark directly with your Google Colab account and the code I made available in Github:

 [![Example image](/img/OpenInColab.svg)](https://colab.research.google.com/github/JAlcocerT/Python_is_awesome/blob/main/Z_GoodToKnow/Getting_Started_with_PYTHON.ipynb) -->

### How to Install Python Dependencies?

* There are two **main repositories for Python Packages**:
  * The Python Package Index - **PyPI**: [PyPI](https://pypi.org/ "PyPI Web {rel='nofollow'}") is the main repository for third-party Python software.
  * GitHub: a code hosting platform where developers can store and share their code. The Python organization on GitHub has several repositories that contain the official source code for the Python programming language, as well as documentation, tools, and other resources.

So we know from where we can get Python packages, but now:

*How to install them and their dependencies properly?*

These are some popular ways to **install Python dependencies** and make sure that **we can replicate the working code** in other people's computers.


{{< dropdown title="Python Dependencies with **Conda 👈**" closed="true" >}}

Conda provides a **cross-platform and language-agnostic** (not only Python, but R, Julia, C/C#...) solution **for managing software environments and dependencies**, making it especially valuable for complex projects involving multiple programming languages and libraries.

Its ability to create isolated environments with precise control over package versions ensures reproducibility and minimizes conflicts. Additionally, Conda offers a vast repository of pre-built packages, including many scientific and data analysis libraries, simplifying the installation process. 

Create a conda environment:

```sh
conda create -n yourcondaenvironment python=3.11
conda activate yourcondaenvironment
```

Check the Python we are using:

```sh
which python
```

Install inside conda env:

```sh
python -m pip install numpy
# $(which python) -m pip install numpy #to make sure it is installing it in this conda environment
```

You can find and install packages with:

* https://anaconda.org/anaconda/repo
* https://anaconda.org/conda-forge/numpy

```sh
conda search numpy 
conda install numpy
```


{{< /dropdown >}}



{{< dropdown title="Python Dependencies with **Venv's 👈**" closed="true" >}}
 

Python's built-in venv (virtual environment) module is a powerful tool for creating isolated Python environments specifically for Python projects. 

While it's primarily focused on Python, it's an excellent choice for managing Python dependencies and ensuring project-specific isolation. 

```sh
python -m venv myvirtualenv #create it

myvirtualenv\Scripts\activate #activate venv (windows)
source myvirtualenv/bin/activate #(linux)

deactivate #when you are done
```

Once active, you can just install packages as usual and that will affect only that venv:

```sh
pip install package_name
#pip install numpy
#pip install numpy==1.26.4

#pip show numpy #check the installed version
```

{{< /dropdown >}}


{{< dropdown title="Python Dependencies with **Poetry 👈**" closed="true" >}}

Poetry is a tool for dependency management and packaging in Python. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you.

* https://github.com/python-poetry/poetry - MIT Licensed ❤️

Poetry offers a lockfile to ensure repeatable installs, and can build your project for distribution.

You will need a `poetry.toml` file like:

```toml
[tool.poetry]
name = "my_project"
version = "0.1.0"
description = "A sample Python project"
authors = ["Your Name <your.email@example.com>"]

[tool.poetry.dependencies]
python = "^3.6"
requests = "^2.25.1"

[build-system]
requires = ["poetry-core>=1.0.0"]
build-backend = "poetry.core.masonry.api"
```

You will need to use this command to build everything:

```sh
poetry build
```

{{< /dropdown >}}


{{< dropdown title="Python Dependencies with **Pipenv 👈**" closed="true" >}}
Pipenv is a command-line tool that aids in Python project development.



It combines capabilities of virtualenv and pip with additional features such as dependency management and script execution. Thi

Its goal is to provide a more comprehensive and user-friendly experience for Python project development. It offers several advantages over using virtualenv and pip separately, including:

* Easy project initialization: Pipenv streamlines the process of initializing new projects by creating a default project directory structure, generating essential project files, and installing basic project dependencies. This simplifies project setup and provides a solid foundation for development.

* Dependency management and installation: Pipenv simplifies dependency management by maintaining a Pipfile that lists all project dependencies and their versions. It allows developers to easily install new dependencies, lock dependencies to specific versions, and update dependencies to latest releases.

* Script execution within the virtual environment: Pipenv enables developers to execute project scripts directly within the virtual environment without explicitly activating the environment. This ensures that the scripts utilize the appropriate dependencies and avoid conflicts with the global environment.


{{< /dropdown >}}

<!-- Other: Pyenv

https://github.com/pyenv/pyenv

```sh
pyenv install 3.8.0
pyenv install 3.9.0
```

pyenv local 3.8.0

python -m venv venv
source venv/bin/activate -->


<!-- ### Understanding statistical distributions with Python

### Poison

### Normal

### ...  -->