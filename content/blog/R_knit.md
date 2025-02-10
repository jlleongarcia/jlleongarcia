---
title: "Generating Webs with R - Knit Package"
date: 2020-09-25T23:20:21+01:00
draft: false
tags: ["R","Web","Dev"]
description: 'Using the Knit package in R to build (static) websites.'
summary: 'In this post I show you how to use the Knit package in R to build a simple website.'
url: 'r-knitt-package-guide'
---

<!-- # R Knit Package -->

Lately I found [the knitr package](https://cran.r-project.org/web/packages/knitr/index.html/ "GH {rel='nofollow'}") on R bloggers and interestingly, there are people who use R directly to create updated figures on their websites, including their latest data discovieries.

You can find a great documentation here for **Knitr**:

* {{< newtab url="https://github.com/yihui/knitr" text="The Source Code" >}}
* {{< newtab url="https://www.rdocumentation.org/packages/knitr/versions/1.30" text="The Docs" >}}

> Create Dynamic Documents with R and KnitR

## Install and use KnitR

Install it with:

```r
install.packages('knitr')
```

And once your Rmd document is ready, you have to simply execute the following:

```r
#knitt the specified file on its current folder to test its view
rmarkdown::render('YourFile.Rmd',
                  output_file = paste('index', 
                                      '.html', sep=''))
```

After executing this, a new file *index.html* will be created - This is your new Static Site.

<!-- ### TO create flexdashboards



### To create simple static web pages -->