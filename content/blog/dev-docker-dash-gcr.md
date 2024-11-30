---
title: "DASH Apps with Docker and Google Cloud Run"
date: 2023-03-12T23:20:21+01:00
draft: false
tags: ["Python","Docker","DASH"]
description: 'Deploying DASH apps using Docker and Google Cloud run - GCR.'
summary: 'Guide - How to use Google Cloud Run free tier to deploy your Python DASH apps.'
url: 'dash-docker-gcr'
---

<!-- # DASH on Google Cloud Run -->

You have built an awsome app **using Python** (and maybe Dash), but now you are wondering how could it be deployed.

Let me guide you through a simple 4 steps guide to have your DASH app moved from local to be deployed on your own domain.

1. Get the [Python App](#the-app) Ready
2. Prepare the [Dockerfile](#dockerfile)
3. And the [Python Dependencies](#dependencies)
4. Code is done, now go to [Google Cloud UI](#deploying-the-app) to deploy the Python App

> Make sure that you **understand the pricing of Google Cloud** before deploying ❗

Be aware that:

| Artifacts | Open or Not |
| :-- | :-- |
| The code | Potentially Yes |
| Infrastructure | No, Operating under Google's Control ❗|

> For more control over infrastructure, you can [try SelfHosting](/tags/self-hosting/)

## The App

This is the core of the problem. You want to make sure that your app gets deployed effectively to the world, so that they can use it.

Make sure that you have your **app.py** including the following:

```py
app = dash.Dash(__name__, external_stylesheets=['https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'])

#...
#the rest of your app
#...

# Start of the application
if __name__ == '__main__':
    
    app.run_server(debug=False, host="0.0.0.0", port=8050)
```

## The Docker Container

Let's make sure that the app will **run consistently** across environments, in this case, the google computers that will power the app.

### Dockerfile

You will need this file so that Docker will know:

* Which base image to use
* Where is your app.py located
* Which libraries are to be included in the container
* Which port is the one to be exposed
* What to execute when the container will be running

```Dockerfile
# Use the official lightweight Python image.
# https://hub.docker.com/_/python
FROM python:3.8

# Copy local code to the container image.
ENV APP_HOME /app
WORKDIR $APP_HOME
COPY . ./

#COPY ./app ./ 
#source-destination

# Install production dependencies.
RUN pip install -r requirements.txt

EXPOSE 8050

CMD python ./app/app.py 
```


### Dependencies

This will vary according to the libraries that your app uses.

Basically the idea is to include here ALL the packages, so that they will get included in the docker container with the version that you specified.

A requirements.txt file looks like this:

```yml
dash==2.7.0 
plotly==5.11.0

pandas==1.2.4
numpy==1.22.4

sympy==1.7.1
scipy==1.7.1
```

## Deploying the App

Once you will have your container in DockerHub, you can deploy it to **G**oogle **C**loud **R**un in few clicks:

* Create a Service
* Provide the container's URL - For example: `docker.io/your_dockerhub_user/your_container_name:latest`
* Choose the Port - For example: `8050`
* Assign resources

This will publish your app in a Google's domain.

But what if you want to user your own?

### Mapping Domains

By following this steps, the app will use one of your domains:

1. Visit <https://console.cloud.google.com/run/domains?>
2. Add a mapping
    * Select the service to map - the GCR instance that we just created
    * Specify domain
3. Update the CNAME as GCR will indicate
    * For example: connect.domains.google.com

---

## FAQ

### CI/CD Pipeline

It would be great to have your code changes automatically deployed to DockerHub, so that GCR can read the newest image.

> This is an optional step!

You have examples of CI/CD on these projects:

* <https://github.com/JAlcocerT/Py_Trip_Planner>
* <https://github.com/JAlcocerT/Slider-Crank>