---
title: "How to Setup Gitlab"
date: 2023-12-30T23:20:21+01:00
draft: false
tags: ["Dev"]
summary: 'How to use Gitlab for development'
url: 'how-to-use-gitlab'
---

Github is great, but there are other cool options, like **Gitlab**, codeberg or forgejo.

{{< callout type="info" >}}
For Github 101 check [this post](https://jalcocert.github.io/JAlcocerT/github-gists)
{{< /callout >}}

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
git config --global user.email "jesus_alcocer@sthsthsth.com"
```

---

<!-- ## Gitlab Pages

Failing bc the project is not in root, but at pacamara
 -->

## Use Cloudflare Workers and Pages with Gitlab

I have tried it with a Private Gitlab repository.

{{% steps %}}

### Select a Gitlab Repository

For testing purposes, I made it with [this one](https://gitlab.com/fossengineer1/cyclingthere)

### Try the Theme

```sh
npm run dev #check
npm run build
```

> Explore the results at: `localhost:4321`

### Check the Built Files

```sh
npm install -g serve #serve with npm

#serve -s dist #http://localhost:3000
```

{{% /steps %}}

### The Workflow - Cloudflare 💖 Gitlab

{{< details title="Details - Cloudflare with Gitlab 📌" closed="true" >}}

1. Go to the [Cloudflare UI](https://dash.cloudflare.com), and...

2. Select the **overview, under Workers and Pages**.

3. **Click Create** an App, and go to the **Pages Tab**. Then, connect git - to Gitlab: 

You will need to **authenticate** and select which repo/s will **Cloudflare be able to access**.

> You can have more than one account authenticated

4. As it is an Astro site, I keep both: `npm run build` and folder `/dist`

...and then it failed, bc my project is at a subfolder, so I tweaked it to: `cd ./pacamara && npm run build` and `pacamara/dist`

{{< /details >}}

Once completed, you will see a **successful workflow**

![Cloudflare Workers - Gitlab Repo Success](/blog_img/web/Cloudflare/CloudflareWorkersnPages-Gitlab.png)

The project has the free subdomain: `cyclingthere.pages.dev`, but you can add yours as well.


{{< callout type="info" >}}
I've added this after my learnings with the real estate project, where I used [Cloudflare W&P with a Private Github Repo](https://jalcocert.github.io/JAlcocerT/astro-web-setup/)
{{< /callout >}}

---

## Conclusions

A **good readme** always helps...for any repo, including the Gitlab ones.


{{< details title="Example - Python Project 📌" closed="true" >}}


For Python I like to start with the **pre-requisites for the project:**

```sh
python -m venv openltabletstests_venv 

openltabletstests_venv\Scripts\activate #activate venv (windows)
source openltabletstests_venv/bin/activate #(linux)
```

And just install the dependencies:

```sh
pip install -r requirements.txt 
```

{{< /details >}}


### How to use Gitlab Container Registry

There is live for contaienrs beyond Dockerhub and GHCR: try **Gitlab CR**

1. **Authenticate with the GitLab Container Registry**  
   You can do this using the Docker CLI or the GitLab API.

2. **Tag the local image with the GitLab Container Registry URL**  
   The GitLab Container Registry URL format:  
   `registry.gitlab.com/<group>/<project>/<image>:<tag>`

3. **Push the tagged image to the GitLab Container Registry**  
   Use either the Docker CLI or the GitLab API.

{{< details title="Example - Pushing a Local Docker Image using the Docker CLI 📌" closed="true" >}}


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

{{< /details >}}


If using a self-hosted GitLab instance, configure the GitLab Container Registry to use a custom TLS certificate.



---

## FAQ

### Gitea - A Gitlab Alternative

You can also setup [Gitea locally with containers](https://github.com/JAlcocerT/Docker/blob/main/Dev/GIT/Gitea_Docker-compose.yaml):

![Gitea Install](/blog_img/selfh/gitea_install.png)

This is another stack with [Gitea, Gitlab and Jenkins](https://github.com/JAlcocerT/Docker/blob/main/Z_Dockge/stacks/git/compose.yaml)