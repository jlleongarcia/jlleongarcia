---
title: "Interesting NLP Tools: PII, Sentiment Analysis..."
date: 2024-08-03T23:20:21+01:00
draft: false
tags: ["Dev"]
description: 'How to use SpaCy with Python as NER. Compared with LLMs and Detoxify.'
summary: 'Spacy Python Ner'
url: 'nlp-tools'
---

The first time I got the chance to **use a NLP model** was with [**detoxify**](https://pypi.org/project/detoxify/), which classifies comments with PyTorch and Transformers.

Kind of **sentiment analysis tool**.

But there are other **interesting tools**.

Btw, this is how they fit in the AI Landscape: 

{{< cards >}}
  {{< card link="https://jalcocert.github.io/JAlcocerT/machine-learning-data-analytics/" title="ML 101" icon="book-open" >}}
{{< /cards >}}

## Name Entity Recognition

### SpaCy

Soacy can be used to detect **PII information**!

* https://pypi.org/project/spacy/

```sh
python -m spacy download en_core_web_sm
```

Example:

```py
import spacy

# Load the spaCy model for English
nlp = spacy.load("en_core_web_sm")

# Define a list of strings to check
strings_to_check = [
    "John Doe",          # Person
    "john.doe@example.com",  # Email
    "123-45-6789",       # Social Security Number
    "Google",            # Organization
    "123 Main St.",      # Address
    "555-1234",          # Phone number
    "April 5, 1990",     # Date
    "Jane Smith",        # Another person
    "Credit card 4111 1111 1111 1111", # Credit card
    "Non-PII string"     # Random string
]

# Define PII entity labels that spaCy can recognize
PII_labels = ["PERSON", "ORG", "GPE", "DATE", "CARDINAL", "LOC", "MONEY"]

def check_pii(text):
    doc = nlp(text)
    entities = [(ent.text, ent.label_) for ent in doc.ents if ent.label_ in PII_labels]
    return entities if entities else "No PII found"

# Check each string in the list for PII
for string in strings_to_check:
    result = check_pii(string)
    print(f"String: '{string}' -> PII Detected: {result}")
```

## Conclusions

Nowadays you can also **use LLMs** for this kind of tasks.

But...it is always great to keep handy this kind of tools.

### Interesting Offline Tools - Translations

* https://github.com/LibreTranslate/LibreTranslate