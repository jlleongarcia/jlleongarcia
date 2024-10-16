---
title: "How to add an image to a gist"
date: 2021-10-15T23:20:21+01:00
draft: false
tags: ["Dev"]
url: 'github-gists'
summary: 'How to use gist as free image hosting'
---

In VSCode, the **source control graph** can guide you on whats going on.

## Git 101

Initialize git:

```sh
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```
<!-- 
1. go to the repo folder 
2. right click on the .git folder and choose the last option - properties
3. on the general tab uncheck hidden checkbox if checked
4. hit apply and then ok -->

Create a new git repository and push it:

```sh
git init
touch README.md
git add README.md
git commit -m "Initial commit"
git remote add origin <remote_repository_url>
git push -u origin master
```


```sh
git reset HEAD~3 #remove the last 3 commits in case you pass some secret (but keep the changes in files)
```

### Branch Management 

Check how many branches there are:

```sh
git branch -a #list them all
git branch #and in which one you are
#git branch -D some_branch_name #delete a local branch
```

Change to another (new local) branch with:

```sh
git checkout other_branch_name #git checkout tests
```

And if the branch **already exists in the repo**, change to it with:

```sh
git checkout -b other_branch_name origin/other_branch_name #will pull and swap you to it
```

See the latest commit:

```sh
git log --oneline #exit with q
```

Make your changes, commit and push to the specified branch with:

```sh
git add <file-name>
git commit -m "Your commit message" #git commit -m "Adding the script that creates testing scenarios from random combinations of the initial provided table"
git push origin other_branch_name #tests
```

### How to add an image to a Gist

How to add an image to a gist

Create a gist if you haven't already. And then...

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

---

## FAQ

### How to use Github CLI

* https://cli.github.com/
    * https://cli.github.com/manual


After installtion, just do:

```sh
gh --version
gh auth login


gh repo clone cli/cli #https://cli.github.com/manual/gh_repo_clone
gh repo clone jalcocert #gh repo clone ScrewFastMoises
#cd into the folder

gh repo sync #updates from online to offline
git status #check what was changed
git add . #add all the changes
git commit -m "Your commit message here"
git push
```