---
title: "How to Setup Gitlab"
date: 2023-12-30T23:20:21+01:00
draft: false
tags: ["Dev"]
summary: 'How to use Gitlab for development'
url: 'how-to-use-gitlab'
---

Github is great, but there are other cool options, like **Gitlab**.

## Cloning a Gitlab Repository

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

Check how many branches there are:

```sh
git branch -a #list them all
git branch #and in which one you are
```

Change to another branch with:

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
git config --global user.name "Jesus Alcocer"
git config --global user.email "jesus_alcocer@something.com"
```

---

## Conclusions

A **good readme** always helps...

For Python I like to start with the pre-requisites for the project:

```sh
python -m venv openltabletstests_venv 

openltabletstests_venv\Scripts\activate #activate venv (windows)
source openltabletstests_venv/bin/activate #(linux)
```

```sh
pip install -r requirements.txt 
```

### How to use Gitlab Container Registry

There is live for contaienrs beyond Dockerhub and GHCR: try Gitlab CR

1. **Authenticate with the GitLab Container Registry**  
   You can do this using the Docker CLI or the GitLab API.

2. **Tag the local image with the GitLab Container Registry URL**  
   The GitLab Container Registry URL format:  
   `registry.gitlab.com/<group>/<project>/<image>:<tag>`

3. **Push the tagged image to the GitLab Container Registry**  
   Use either the Docker CLI or the GitLab API.

### Example: Pushing a Local Docker Image using the Docker CLI

```bash
# Authenticate with the GitLab Container Registry
docker login registry.gitlab.com

# Tag the local image with the GitLab Container Registry URL
docker tag my-image registry.gitlab.com/my-group/my-project/my-image:latest

# Push the tagged image to the GitLab Container Registry
docker push registry.gitlab.com/my-group/my-project/my-image:latest
```

Use docker push --all-tags to push all tags of an image to the registry.

Use docker push --dry-run to test the push command without actually pushing the image.

If using a self-hosted GitLab instance, configure the GitLab Container Registry to use a custom TLS certificate.