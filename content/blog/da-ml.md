---
title: "Machine Learning for Data Analytics"
date: 2020-11-25T23:20:21+01:00
draft: false
tags: ["Python","Dev"]
description: 'The starting point for anyone interested in learning AI/ML from the basics.'
summary: 'I wanted to summarize the most important ML concepts to work as a data analyst.Even if you will not be performing Data Science tasks, this knowledge will be of great help when collaborating with them. Understand their language.'
url: 'machine-learning-data-analytics'
---

<!-- # The ML Guide -->
<!-- 
https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=4,2&seed=0.18371&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false -->


## The Bias-Variance Trade-Off

Imagine you're tuning a musical instrument, like a guitar.

**Bias** is like having the strings too tight or too loose—your instrument produces the wrong note consistently, no matter what you play. 

This is similar to bias in machine learning, where your model consistently predicts something wrong because **it's stuck in a certain perspective**.

Now, **variance** is like having the strings of your guitar at different tensions.

Each string produces a slightly different sound, and the overall result is chaotic and inconsistent. 

This relates to variance in machine learning, where your model is too sensitive to small changes in the data and gives unpredictable results.

{{< dropdown title="Balancing bias and variance is like tuning your guitar perfectly 🎸👇" closed="true" >}}

You adjust the strings just right so that each note is accurate and consistent across different parts of the instrument. Similarly, in machine learning, you aim to find the sweet spot where your model neither underfits (bias) nor overfits (variance), resulting in reliable and accurate predictions. 

Just as a well-tuned guitar produces beautiful music, a well-balanced model produces meaningful insights.
{{< /dropdown >}}


You can think about very complex models as the ones that will experience a lot of variance in their outputs/solutions.

> An idiot admires complexity, **a genius admires simplicity**." -Terry A. Davis

But very simple models, tend to be biased, that means to provide very simplistic 'replies' that might not capture all the insights of the domain that its trying to make predictions about.

## Supervised Learning

A computer is educated to carry out a task **by being provided samples** of desired input and output in the **supervised learning** method of machine learning.

The examples are then used by the computer to deduce how to carry out the work by itself. 

For this, you should get familiar with these concepts:

* Features - Your independent variable, the X, your model input.
* Labels - Your model's prediction, the dependent variable (on the model), the Y.

**Predictive models** that can make precise forecasts based on new data (not seen before by the algorithm) are created using supervised learning techniques.

This is particularly helpful in programs like:

* Regression:
* Classification:
    * Image recognition, where the computer can recognize items in pictures
    * Sentiment Analysis

**Supervised Models require training**, for that we need a dataset that includes historical features, characteristics of the entity for which you want to make a prediction, and known label values. 

**The train/test split** - Normally we train the model using a subset of the data, while holding back some data with which to test the trained model. This enables you to compare the labels that the model predicts with the actual known labels in the original dataset.    

**Steps required for Supervised ML models:** Prepare data (Pre-process, or clean and transform), train model (train/test split), evaluate performance, deploy the model.

### Regression

Regression in machine learning is a technique used to investigate the relationship between independent variables (or features) and a dependent variable (or outcome). 

It can be used to **predict a continuous outcome** (such as salary or weight) based on the input data.

<!-- * **Try me with Google Colaboratory:** If you have a Google account, you can check how a regression algorithm works with this notebook that I published on my Github account. [![OpenInColab](/img/OpenInColab.svg)](https://colab.research.google.com/github/JAlcocerT/Python_is_awesome/blob/main/ML%20-%20EDA/Linear_Regression.ipynb) -->


<!-- 
#### Evaluating Regression Models -->


### Classification

Classification is a supervised machine learning method where the model attempts to **predict the correct label** of a given input data.

It involves categorizing a given set of input data into classes based on one or more variables. Classification algorithms use a set of *labeled data points to learn* how to assign labels to unseen data points.

Common classification algorithms include: Support Vector Machines (SVM), Logistic Regression, Decision Trees, Random Forests, and Naive Bayes.

#### Evaluating Classification Models

**The confusion matrix** is a tool used to assess the quality of a classification model's predictions. 

It compares predicted labels against actual labels.

{{< dropdown title="The Matrix with: Binary vs MultiClass Models 👇" closed="true" >}}

* In a *binary classification* model where you're predicting one of two possible values, the confusion matrix is a 2x2 grid showing the predicted and actual value counts for classes 1 and 0. It categorizes the model's results into four types of outcomes. 

* For a *multi-class classification* model (where there are more than two possible classes), the same approach is used to tabulate each possible combination of actual and predicted value counts - so a model with three possible classes would result in a 3x3 matrix with a diagonal line of cells where the predicted and actual labels match.
{{< /dropdown >}}

There are several metrics for measuring the performance of a classification model

{{< dropdown title="Check Them Out 👇" closed="true" >}}

* **Accuracy**: The number of correct predictions (true positives + true negatives) divided by the total number of predictions. 
	
* **Precision**: The number of the cases classified as positive that are actually positive: the number of true positives divided by (the number of true positives plus false positives).
	
* **Recall**: The fraction of positive cases correctly identified: the number of true positives divided by (the number of true positives plus false negatives). {Another term for recall is True positive rate}
	
* **F1 Score**: An overall metric that essentially combines precision and recall. *The harmonic mean of precision and recall.*
{{< /dropdown >}}

They can be obtained from the **confussion matrix**.

One important concept for Classification algorithms is **the threshold** in the case of a binary classification model, the predicted probability is a value between 0 and 1.

By default, a predicted probability including or above 0.5 results in a class prediction of 1, while a prediction below this threshold means that there's a greater probability of a negative prediction (remember that the probabilities for all classes add up to 1), so the predicted class would be 0. 

* Other ways for evaluating classification models:
    * Log loss - the negative logarithmic of the likelihood ratio
    * Confussion Matrix - visualize the model predictions vs the ground truth labels
    * **R**eceiver **O**perating **C**haracteristic curve - You will use it to visualize how different thresholds affect the predictions performance of your model. The x axis is the FPR (false possitive rate) and the y axis is the TPR (true possitive rate = precission)
    * AUC - Area under the ROC curve - It will be between 1 (perfect model) and 0 (always wrong model). AUC of 0.5 is as good as guessing could be.

<!-- 
* **Try me with Google Colaboratory:** If you have a Google account, you can check how a regression algorithm works with this notebook that I published on my Github account. [![OpenInColab](/img/OpenInColab.svg)](https://colab.research.google.com/github/JAlcocerT/Python_is_awesome/blob/main/ML%20-%20EDA/Linear_Regression.ipynb) -->

## Unsupervised Learning

Unsupervised learning is a type of machine learning algorithm that looks for patterns in a dataset **without pre-existing labels**. 

The goal is to identify relationships between data points and group them into clusters or assign them to categories. 

Unlike supervised learning, which uses labeled data to train a model, **unsupervised learning does not require any labels or outcomes to be known beforehand**. Rather, the algorithm itself must discover the patterns in the data, without any guidance. 

It can be used for a variety of tasks, such as:
* Clustering data points - to group similar entities based on their features
* Anomaly detection
* Dimensionality reduction

### Clustering

Clustering is a Machine Learning technique that involves the grouping of data points. Given a set of data points, we can use a clustering algorithm to identify and group similar points into clusters.

Clustering is an unsupervised learning technique, meaning that the algorithm is not explicitly provided with labels for how the data points should be grouped. Instead, it is left to the algorithm to identify similarities between the data points and group them accordingly.

Popular clustering algorithms include k-means clustering, hierarchical clustering, and density-based clustering. Clustering can be used in a variety of applications, such as customer segmentation, image segmentation, and anomaly detection.

#### K-Means

The K-Means Clustering algorithm groups items into the number of clusters, or centroids, you specify - a value referred to as K.

{{< dropdown title="This is how KMeans works 👇" closed="true" >}}

* Initializing K coordinates as randomly selected points called centroids in n-dimensional space (where n is the number of dimensions in the feature vectors).
* Plotting the feature vectors as points in the same space, and assigning each point to its closest centroid.
* Moving the centroids to the middle of the points allocated to it (based on the mean distance).
* Reassigning the points to their closest centroid after the move.
Repeating steps 3 and 4 until the cluster allocations stabilize or the specified number of iterations has completed.
{{< /dropdown >}}

<!-- 
* **Try me with Google Colaboratory:** If you have a Google account, you can check how a regression algorithm works with this notebook that I published on my Github account. [![OpenInColab](/img/OpenInColab.svg)](https://colab.research.google.com/github/JAlcocerT/Python_is_awesome/blob/main/ML%20-%20EDA/Linear_Regression.ipynb) -->

---

## FAQ 

* https://aman.ai/primers/ai/ml-comp/
* https://roadmap.sh/
    * https://roadmap.sh/ai-data-scientist

### Key Concepts

Neural Networks (NN): Remember that not all ML models use NN.

> I could not finish this topic without mentioning it.

* {{< dropdown title="These are very famous NN architectures 👇" closed="true" >}}
* FNN - Feedforward Neuronal Networks
    * Used for supervised learning tasks, such as classification and regression
* CNN - Convolutional Neuronal Networks
    * Used for image and video recognition tasks
* RNN - Recurrent Neuronal Networks
    * Used for sequence-based tasks, such as language modeling and speech recognition. They use a technique called recurrent connections to remember data from previous inputs, allowing them to produce an output based on the context of the previous data
* GANN - Generative Adversarial NN
    * Used for unsupervised learning tasks
{{< /dropdown >}}

* Deep Neural Network (DNN) - a NN with 3+ hidden layers
* Backpropagation - adjust weights - this is how NN learn
* Loss Function - compares the ground truth to the prediction to get the error rate (rates how well/bad the NN performed)
* Activation Functions - algorithm applied to a hidden layer node that affects connected outputs, e.g ReLu
* Dense Layer - next layer increase amount of nodes
* Sparse Layer - next layer decrease amount of nodes


How are NN trained?

Have a look to this awsome **gradient descent** explanation:

<!-- https://www.youtube.com/watch?v=IHZwWFHWa-w -->
{{< youtube "IHZwWFHWa-w" >}}


### Software for DSc

* Knime
* Alteryx
* AMZ (AWS) Sagemaker - Propietary

### Python for DSc

Let's break down these Python libraries and what they're used for:


{{< details title="What you need to know about ULM's 📌" closed="true" >}}


**1. Native (Python's Standard Library):**

*   This isn't a single library you install. It's the collection of modules that are included with Python itself.  Think of it as Python's built-in toolkit.
*   **Purpose:** Provides fundamental tools for working with data types (lists, dictionaries, strings, numbers), file I/O, basic networking, operating system interaction, and much more.  It's the foundation upon which other libraries are built.
*   **Examples:** The `os` module (for interacting with the operating system), the `math` module (for mathematical functions), the `random` module (for generating random numbers), and the `csv` module (for working with CSV files) are all part of the standard library.  You use these constantly without even thinking about it.

**2. Pandas:**

*   **Purpose:**  Provides high-performance, easy-to-use data structures and data analysis tools.  It's *the* go-to library for working with tabular data (like spreadsheets or databases).
*   **Key Features:**
    *   **DataFrames:**  The core data structure, a labeled two-dimensional table (rows and columns).  Think of it like a supercharged spreadsheet.
    *   **Series:**  A single column of a DataFrame.
    *   **Data manipulation:**  Powerful tools for cleaning, transforming, filtering, sorting, grouping, and merging data.
    *   **Reading and writing data:**  Easily import and export data from various file formats (CSV, Excel, SQL databases, etc.).
*   **Use Cases:** Data analysis, data cleaning, data preprocessing for machine learning, statistical analysis, time series analysis.

**3. Scikit-learn (sklearn):**

*   **Purpose:**  A comprehensive library for machine learning in Python.  It provides implementations of a wide range of machine learning algorithms.
*   **Key Features:**
    *   **Algorithms:**  Includes classification (e.g., logistic regression, support vector machines, random forests), regression (e.g., linear regression, decision trees), clustering (e.g., k-means), dimensionality reduction (e.g., PCA), and more.
    *   **Model selection:** Tools for evaluating and comparing different models (e.g., cross-validation, grid search).
    *   **Preprocessing:** Functions for data scaling, normalization, and other preprocessing steps.
*   **Use Cases:**  Building and training machine learning models for various tasks (classification, regression, clustering, etc.).

**4. TensorFlow and PyTorch:**

*   **Purpose:**  These are *deep learning* libraries.  They provide the tools for building and training neural networks.  They are more focused on complex models than Scikit-learn (which can also do some neural networks, but usually simpler ones).
*   **Key Features:**
    *   **Automatic differentiation:**  Crucial for training neural networks efficiently.  They calculate gradients automatically.
    *   **GPU acceleration:**  Leverage GPUs for faster training of complex models.
    *   **Model building:** Tools for defining the architecture of neural networks (layers, connections, activation functions).
*   **TensorFlow:** Developed by Google.  Known for its production readiness and scalability.
*   **PyTorch:** Developed by Facebook.  Often favored for its ease of use and research-friendly nature.
*   **Use Cases:**  Image recognition, natural language processing, speech recognition, time series analysis, and other complex machine learning tasks.

**5. Statsmodels (PyStats):**

*   **Purpose:**  Focuses on statistical modeling and inference.  It provides tools for building and analyzing statistical models.
*   **Key Features:**
    *   **Statistical models:**  Includes linear models, generalized linear models, time series models, and more.
    *   **Hypothesis testing:**  Tools for performing statistical tests.
    *   **Model diagnostics:**  Functions for evaluating the goodness of fit and assumptions of statistical models.
*   **Use Cases:** Statistical analysis, hypothesis testing, building econometric models, time series analysis, and other statistical modeling tasks.  It is more statistically focused than Scikit-learn, which is more machine learning focused.

{{< /details >}}

**In Summary:**

*   **Native:** Python's built-in tools.
*   **Pandas:** Data manipulation and analysis.
*   **Scikit-learn:** General machine learning (including some neural networks).
*   **TensorFlow/PyTorch:** Deep learning (complex neural networks).
*   **Statsmodels:** Statistical modeling and inference.


{{< details title="TF vs PyTorch 📌" closed="true" >}}


**1. Ease of Use and Abstraction:**

*   In this sense, **PyTorch is often considered more high-level**. It has a more Pythonic feel, meaning it integrates very smoothly with the Python language and its syntax. This makes it generally easier to learn and use, especially for those coming from a Python background.
*   TensorFlow, while very powerful, can have a steeper learning curve due to its more complex structure and sometimes less intuitive syntax. However, TensorFlow has been improving in this area, especially with the integration of Keras as a high-level API.

**2. Control and Flexibility:**

*   Here, it could be argued that **TensorFlow offers a higher level of control**. Its static graph approach, while more complex, allows for optimizations and deployment capabilities that PyTorch, with its dynamic graph, might not match as easily. This is particularly important for production-level applications where performance and scalability are critical.

{{< /details >}}

**So, which is "higher-level"?**

It depends on what you prioritize:

*   **For ease of use and rapid prototyping:** PyTorch often wins.
*   **For production readiness, scalability, and fine-grained control:** TensorFlow might be the better choice.



### Other Resources for ML

* Interesting Github Repository with Resources - https://github.com/ashishpatel26/500-AI-Machine-learning-Deep-learning-Computer-vision-NLP-Projects-with-code
* https://github.com/NirantK/awesome-project-ideas
* You can check the [latest trends at Gartner](https://www.gartner.com/reviews/market/multipersona-data-science-and-machine-learning-platforms "Book {rel='nofollow'}")
<!-- * My repository to learn [ML with Python](https://github.com/JAlcocerT/Python_is_awesome/tree/main/ML%20-%20EDA) -->


<!-- 
Basic understanding of Supervised, Unsupervised and Reinforcement ML.
Basic understanding of Location, Spread, Assymetry, Concentration, Dependence measures.
Basic understanding of Hypothesis testing (confidence interval, Type 1 and Type 2 errors, Null hypothesis, significance level and p-value). 
Basic understanding of Classification, Regression and Clustering tasks in ML. -->
<!-- 
Ability to list use cases for Hypothesis testing.
Ability to list use cases for Classification, Clustering, Regression, their benefits, pros and cons.
Ability to list use cases for Supervised and Unsupervised ML methods, compare them. -->

<!-- 
<https://youtu.be/OwZHNH8EfSU?t=14314> -->


<!-- 
http://jakevdp.github.io/blog/2015/07/06/model-complexity-myth/ -->