---
title: "How to add an image to a gist"
date: 2021-10-15T23:20:21+01:00
draft: false
tags: ["Dev"]
url: 'github-gists'
summary: 'How to use gist as free image hosting'
---


Initialize git:

```sh
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```

## Git 101

How to add an image to a gist
Create a gist if you haven't already.

## How to add an image to a Gist

Clone your gist:

```sh
# make sure to replace `<hash>` with your gist's hash
git clone https://gist.github.com/<hash>.git # with https 
#git clone https://gist.github.com/c043e6645a8786f55640e5fbccbaea00.git
git clone git@gist.github.com:<hash>.git     # or with ssh
#Add your image to your gist's repository:

git add your-image.jpg
#Commit the image:

git commit -m "Add image"
#Update gist:

git push origin master
```