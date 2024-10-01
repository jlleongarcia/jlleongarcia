---
title: "How to Setup Gitlab"
date: 2023-12-27T23:20:21+01:00
draft: false
tags: ["Dev"]
summary: 'How to use Gitlab'
url: 'how-to-use-gitlab'
---


You will see a message like `you cant pull repositories ussing SSH until you add an SSH key to your profile`

Then lets add it:

1. Go to user setting -> SSH Keys Section

2. Create a ssh key:

```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com" #place something that will make it easy to find
```

3. You will see something generated like

```yml
+---[RSA 4096]----+
|     .+ooo       |
|     .+.  .      |
and some more rows...
```

4. Go to the location folder of `.ssh` and **look for the id_rsa.pub** file generated (copy its content)
5. Paste it in the Gitlab UI (it will start by ssh-rsa and many more chars will follow)

Now, you can select the Code button in the Gitlab Repository, and **select open in your IDE (with SSH)**.

Check how many branches there are

```sh
git branch -a #list them all
git branch #and in which one you are
```

Change to another one with:

```sh
git checkout other_branch_name #git checkout tests
```

Make your changes, commit and push to the specified branch with:

```sh
git add <file-name>
git commit -m "Your commit message" #git commit -m "Adding the script that creates testing scenarios from random combinations of the initial provided table"
git push origin other_branch_name #tests
```

Dont forget to set:


```sh
git config --global user.name "Jesus Alcocer Tagua"
git config --global user.email "jesus_alcocer@something.com"
```

---

A good readme always helps...


```sh
python -m venv openltabletstests_venv 

openltabletstests_venv\Scripts\activate #activate venv (windows)
source openltabletstests_venv/bin/activate #(linux)
```

```sh
pip install -r requirements.txt 
```