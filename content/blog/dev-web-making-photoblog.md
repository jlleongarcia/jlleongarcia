---
title: "Creating a Photo Centered Blog"
date: 2024-09-29T23:50:59+01:00
draft: false
tags: ["dev"]
summary: 'How I used HUGO to create a Photo Gallery / Blog, for a Digital Creator'
url: 'creating-photo-centric-blog-with-hugo'
---

For this **client**, I had to make something **special**.

She's a traveler, **Photo Adict**, content creator and Artist.

* https://nicokaiser.github.io/hugo-theme-gallery/animals/cats/


{{< details title="Themes I love for Galleries 📌" closed="true" >}}

| **Description**                        | **Link**                                   |
|----------------------------------------|--------------------------------------------|
| PHP          | [NovaGallery](https://github.com/novafacile/novagallery)    |
| Ghost                | [Compose Overview](https://docs.docker.com/compose/) |

Ghost Themes: Handlebars, HTML, CSS, JavaScript, JSON.
WordPress Themes: PHP, HTML, CSS, JavaScript, WordPress-specific template tags, and hooks.

{{< /details >}}


## HUGO Photo Gallery

We are going to use **HUGO as SSG**, together with the great **[Hugo-Theme-Gallery](https://github.com/nicokaiser/hugo-theme-gallery)**


###

### Testing the Theme

{{< details title="How to create a Photo Gallery with Hugo 📌" closed="true" >}}

```sh
git clone https://github.com/nicokaiser/hugo-theme-gallery
cd ./hugo-theme-gallery/exampleSite
hugo server
```

And the theme requires at least hugo 0.121.2, and Im having `hugo v0.117.0-....`

You can see that requirements at the `theme.toml` file.

So time for an **upgrade for [go and HUGO](https://fossengineer.com/changing-hugo-theme/)**:

```sh
wget https://go.dev/dl/go1.23.2.linux-arm64.tar.gz
sudo tar -C /usr/local -xzf go1.23.2.linux-arm64.tar.gz
nano ~/.bashrc
#write this in the end of the file
export PATH=$PATH:/usr/local/go/bin
#save
source ~/.bashrc

go version #Go is updated!
```

And now, HUGO:
```sh
#CGO_ENABLED=1 go install -tags extended github.com/gohugoio/hugo@latest #The latest
#wget https://github.com/gohugoio/hugo/releases/download/v0.127.0/hugo_0.127.0_linux-arm64.deb
wget https://github.com/gohugoio/hugo/releases/download/v0.121.2/hugo_0.121.2_linux-arm64.deb
sudo dpkg -i hugo_*.deb

hugo version #HUGO is ready and >=0.121.2!
```

As per the sampleSite readme, we need to do:

```sh
hugo mod get # Install Hugo module

./pull-images.sh #Pull example images from Unsplash
```

And just **enjoy**:

```sh
#hugo server
#hugo server --bind="0.0.0.0" --baseURL="http://192.168.0.117" 
hugo server --bind="0.0.0.0" --baseURL="http://192.168.0.117" --port=1319
```

> And you will have the **amazing HUGO sample theme** at `http://192.168.0.117:1319`

{{< /details >}}


{{< callout type="info" >}}
You can dia it via [SSH with VSCode](https://jalcocert.github.io/JAlcocerT/blog/dev-in-docker/) thanks to **[Nicokaiser](https://github.com/nicokaiser/hugo-theme-gallery/) MIT Project**
{{< /callout >}}




{{< details title="A container for HUGO - Dockerfile/Compose 📌" closed="true" >}}

```sh
#docker-compose up --build
docker build -t hugo_gallery .
```

You need both `dockerfile` and `docker-compose.yml`:

```dockerfile
# Use the official Golang image which is based on Debian Bullseye
FROM golang:1.23.2-bullseye 
#https://hub.docker.com/_/golang/tags

# Set working directory
WORKDIR /usr/src/app

# Install Hugo
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://github.com/gohugoio/hugo/releases/download/v0.121.2/hugo_0.121.2_linux-arm64.deb && \
    dpkg -i hugo_0.121.2_linux-arm64.deb && \
    rm hugo_0.121.2_linux-arm64.deb && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Clone the Hugo theme repository
RUN git clone https://github.com/nicokaiser/hugo-theme-gallery /hugo-theme-gallery

# Set the working directory to the exampleSite within the cloned theme
WORKDIR /hugo-theme-gallery/exampleSite

# Expose port 1319 for Hugo server
EXPOSE 1319

# Start Hugo server
CMD ["hugo", "server", "--bind=0.0.0.0", "--baseURL=http://192.168.0.117", "--port=1319"]

#docker build -t hugo_gallery .
#docker run -d -p 1319:1319 --name hugo_gallery_instance --restart unless-stopped hugo_gallery tail -f /dev/null
#docker exec -it hugo_gallery_instance /bin/bash
#go version
#hugo version
```

```yml
version: '3.8'
services:
  hugo_gallery:
    image: hugo_gallery  # Ensure this matches the image name you have built
    container_name: hugo_gallery_instance
    ports:
      - "1319:1319"
    restart: unless-stopped
    command: tail -f /dev/null


# version: '3.8'
# services:
#   hugo:
#     build: .
#     ports:
#       - "1319:1319"
#     # volumes:
#     #   - ./hugo-theme-gallery/exampleSite:/usr/src/app
#     environment:
#       - HUGO_BASE_URL=http://192.168.0.117

############

# #docker build -t hugo_gallery .
# #docker-compose up --build
```

{{< /details >}}

### Tweaking HUGO Theme Gallery

{{< details title="Tweaking Hugo Theme Gallery 📌" closed="true" >}}

* The content for the **main page** is it `_index.md`
* Every folder has photos and a `index.md`
    * In those files you can choose the **featured_image** and..
    * If you want to add some description to the imgs...

```md
resources:
  - src: alexander-london-mJaD10XeD7w-unsplash.jpg
    title: Brown tabby cat on white stairs by Alexander London
```

* It supports several langauges with **i18n**, the file is `en.yaml`
* It also support **image zoom and download** (in full quality)
    * Thanks to PhotoSwipe and a lightbox gallery 
* **OpenGraph/OG picture** seems to workout of the box - So your photo will be there when sharing to WhatsApp...

> After I was happy with the changes, I moved the content of the sampleSite, to the main project folder:

```sh
rsync -av ./exampleSite/ .
hugo server --bind="0.0.0.0" --baseURL="http://192.168.0.117" --port=1319
```

{{< /details >}}

After editing, I copied the files to my PC, to use Gitlab+Cloudflare.

```sh
scp -r username@192.168.0.117:/home/path1/path2/hugo-theme-gallery .

#https://go.dev/dl/
#https://github.com/gohugoio/hugo/releases/tag/v0.121.2
./hugo server --bind="0.0.0.0" --baseURL="http://192.168.0.171" --port=1319
```

{{< details title="Deploying HUGO with Google Firebase 📌" closed="true" >}}

Using **Firebase Free Tier Hosting**

```sh
firebase login
firebase init
hugo
firebase deploy
```

![Firebase Free Tier Limits](/blog_img/web/success5-aga/FirebaseHosting-FreeTier-Limits.png)

And to have the my domain linked...

Went to [firebase UI](https://console.firebase.google.com/) -> Compilation -> hosting.

Add a custom domain.

Select my subdomain, and added a **CName + TXT record to the DNS**.

![Firebase Custom Domain](/blog_img/web/success5-aga/firebase-own-domain.png)


For that domain, Im using cloudflare - so made sure that its **DNS only and not proxied records**

{{< /details >}}

### Hugo and Photo Gallery - Steps

Now that we are clear that we want to move forward with this HUGO theme.

We need to provide clear structure for the **user to modify the content later on**:

{{< filetree/container >}}
  {{< filetree/folder name="content" >}}
    {{< filetree/file name="_index.md" >}}
    {{< filetree/folder name="docs" state="closed" >}}
      {{< filetree/file name="_index.md" >}}
      {{< filetree/file name="introduction.md" >}}
      {{< filetree/file name="introduction.fr.md" >}}
    {{< /filetree/folder >}}
  {{< /filetree/folder >}}
  {{< filetree/file name="hugo.toml" >}}
{{< /filetree/container >}}

{{< details title="Go + HUGO + HugoThemeGallery 📌" closed="true" >}}

We need [Go](https://go.dev/dl/) + **[HUGO extended](https://github.com/gohugoio/hugo/releases) version**:

```sh
#GO
wget https://go.dev/dl/go1.23.2.linux-arm64.tar.gz
sudo tar -C /usr/local -xzf go1.23.2.linux-arm64.tar.gz
nano ~/.bashrc
#write this in the end of the file
export PATH=$PATH:/usr/local/go/bin
#save
source ~/.bashrc
#go version #Go is updated!

#HUGO
wget https://github.com/gohugoio/hugo/releases/download/v0.121.2/hugo_extended_0.121.2_linux-arm64.deb
sudo dpkg -i hugo_extended_0.121.2_linux-arm64.deb
#hugo version
```


```sh
hugo new site agutekportfolio
cd ./agutekportfolio

git init
git submodule add https://github.com/IoTechCrafts/hugo-theme-gallery-ssg.git themes/hugo-theme-gallery-ssg

#cd ~/dirty_repositories/my-hugo-site/themes/hugo-theme-gallery-ssg
#rm -rf .git


#cd themes/hugo-theme-gallery-ssg/exampleSite/ #test the sample site one more time
# Install Hugo module
#hugo mod get

## TRY THE exampleSite THEME!
# Pull example images from Unsplash
#./pull-images.sh
#hugo server --bind="0.0.0.0" --baseURL="http://192.168.0.117" --port=1319
```

If the sample works, we can **download the photos from GDrive** like so:

```sh
sudo apt install python3 python3-pip python3-venv -y
python3 -m venv myenv
source myenv/bin/activate
pip install gdown


gdown --folder https://drive.google.com/drive/folders/1-abcd-234 #gdriveFolder with link read permissions
```

They will be downloaded on its folder, in this case `Agutek` and provide a `_index.md`, like:

```md
---
description: My Memories from Azores
featured_image: janis-ringli-UC1pzyJFyvs-unsplash.jpg
keywords: [Animals, Photos, Cats, Dogs]
title: Animals
weight: 1
menus: "main"
# list pages require at least one image to be displayed.
---
```

Which needs to be placed into `content`

When you are **done adapting it**. Copy the content:

```sh
cp -r themes/hugo-theme-gallery-ssg/exampleSite/* . #copy the sample one to the main folder
```

Just need to do now:

1. Edit the go.mod file from the main HUGO project folder from:

```
module github.com/nicokaiser/hugo-gallery-starter

go 1.20

require github.com/nicokaiser/hugo-theme-gallery/v4 v4.0.0 // indirect

replace github.com/nicokaiser/hugo-theme-gallery/v4 => ../

```

To

```
module github.com/nicokaiser/hugo-gallery-starter

go 1.20

require github.com/nicokaiser/hugo-theme-gallery/v4 v4.0.0 // indirect
```

And then:
```sh
hugo mod get # Install Hugo module
```

Finally, **enjoy**:

```sh
#hugo server
hugo server --bind="0.0.0.0" --baseURL="http://192.168.0.117" --port=1319
```

> And you will have the **amazing HUGO sample theme** at `http://192.168.0.117:1319`

{{< /details >}}


See that everything builds with

```sh
hugo
cd ./public
python3 -m http.server 8081
```

{{< details title="Deploying HUGO with Gitlab + Cloudflare - Git Setup 📌" closed="true" >}}

So we have our git init command done. But havent used it so much.

Lets create and push this project to a Github Repository

```sh
git add .
git commit -m "Initial commit of Hugo project"

git remote add origin https://github.com/JAlcocerT/agutek-portfolioweb.git
git push -u origin master #and this will push it!
```

For the **OG to work**, dont forget to update the URL at `hugo/toml` -> baseURL.

You can choose the OG Image in this theme at `./content/_index.md` - featured_image.

{{< /details >}}

```sh
curl -s https://enjoylittlethings.org/sitemap.xml -o /dev/null -w "%{http_code}\n" #Hugo theme gallery sitemap OK
```

Place the `robots.txt` file to `/static` as well:

```txt
User-agent: *
Disallow: /private/
Sitemap: https://enjoylittlethings.org/sitemap.xml
```

And now you have **robots.txt and sitemap.xml** ready:

```sh
curl -s https://enjoylittlethings.org/robots.txt #it has robots, but without sitemap, we can add it
curl -s https://enjoylittlethings.org/robots.txt | grep -i sitemap #look for sitemap direction

curl -s https://fossengineer.com/robots.txt #it has robots, but without sitemap, we can add it
#curl -s https://fossengineer.com/robots.txt | head -n 10 #see the first 10 lines

#curl -s https://while.cyclingthere.com/sitemap.xml -o /dev/null -w "%{http_code}\n"
```

Plus, a Theme that it is not only cool, but **eco friendly**:

![HUGO Theme Gallery Carbon](/blog_img/web/success5-aga/cloudflareWnP-Github-Hugo.png)

{{< callout type="info" >}}
Using the [forked Hugo Theme Gallery](https://github.com/IoTechCrafts/hugo-theme-gallery-ssg), to create [this **Artist Portfolio**](https://github.com/JAlcocerT/agutek-portfolioweb) and [this other](https://gitlab.com/fossengineer1/whilecyclingthere)
{{< /callout >}}

## Results

{{< callout type="info" >}}
As always, check the [performance of the site](https://jalcocert.github.io/JAlcocerT/create-your-website/#is-my-website-performing-well)
{{< /callout >}}

![HUGO Theme Gallery Carbon](/blog_img/web/success5-aga/photogallery-hugo-whilecyclingthere-carbon.png)

But...they are using an **incompatible HUGO 0.118**, so...I went with the [**manual** Cloudflare CLI Pages](https://jalcocert.github.io/JAlcocerT/understanding-astro-ssg-components/#faq) way.


![Cloudflare Wrangler CLI](/blog_img/web/success5-aga/cloudflare-cli-version.png)

Probably sth to have a look with the `wrangler.toml` to see if the version can be specified. TBD.

```sh
#sudo npm install -g wrangler
npx wrangler pages project create #this will install wrangler CLI the first time + Ask you to authenticate via Web Link

#wrangler init
#https://github.com/gohugoio/hugo/releases/tag/v0.121.2
hugo #---> ./public

npx wrangler pages deploy public #<BUILD_OUTPUT_DIRECTORY> and this time is HUGO!

#Use **Wrangler** to obtain a list of all available projects for Direct Upload:
#npx wrangler pages project list #this are the ones you uploaded already
#npx wrangler pages deployment list
```

![Cloudflare Wrangler CLI with HUGO](/blog_img/web/success5-aga/cloudflare-hugo-deploy.png)

See the **Demo at: <https://agutek.pages.dev>** or <https://enjoylittlethings.org/>

<!--
https://github.com/JAlcocerT/agutek-portfolioweb 
https://gitlab.com/fossengineer1/whilecyclingthere -->

---

## New Web Workflow

These days I have improved my **Web creation/edition Workflow**.

Im now using **Github+Cloudflare** and Gitlab+Cloudflare for deployments.

Time to say bye to my old friend Firebase.

At least for now.

And to make the **dev workflow smoother** when Im switching devices...

* I develop via [SSH with VSCode](https://jalcocert.github.io/JAlcocerT/blog/dev-in-docker/) with the Opi5 as server
* All repos gets synced thanks to [this script](https://github.com/JAlcocerT/JAlcocerT/tree/main/Z_Clone_Repos) to the Opi5


{{< details title="Testing Astro with Gitlab at Opi 📌" closed="true" >}}

```sh
git clone https://gitlab.com/fossengineer1/cyclingthere
cd ./cyclingthere/pacamara
```

With a regular SSH, I can just use **nano to develop**
```sh
time npm install #~30s
#npm audit fix --force

npm run dev
npm run build
```

But its possible to use VSCode with SSH and **see all the dev environment files**

```sh

```

{{< /details >}}



{{< details title="Automatic Sync Scrypt 📌" closed="true" >}}




{{< /details >}}