---
title: "QATrack+ Installation & Customization"
date: 2025-03-03
draft: false # set True to not renderize
tags: ["Dev"] # no implication, can be deleted
description: 'Combining Python, Django and HTML to create your QA database.'
url: 'qatrack-installation-proxy'
---

There is already a [guide to install QATrack+](https://docs.qatrackplus.com/en/stable/install/win.html), aimed to both install and customize QATrack+ on Windows. This guide pretends to help you in case you have a proxy server at your institution and go deeper through customizing your QATrack+ server.

## Let's install prerequisite stuff

First of all, you will need SQL Server 2016-2019. SQL Express is also a valid option, so in my case I downloaded and installed [SQL2019 Express](https://www.google.com/?hl=es), along with [SQL Server Management Studio 20.2](https://learn.microsoft.com/en-us/ssms/download-sql-server-management-studio-ssms) and [ODBC Controller for SQL Server](https://learn.microsoft.com/es-es/sql/connect/odbc/download-odbc-driver-for-sql-server?view=sql-server-ver16).

Then, install [Google Chrome](https://www.google.com/chrome/index.html) if you don't have it already. Next, download and install [Intenert Information Services](https://www.microsoft.com/es-es/download/details.aspx?id=48264), [URL Rewrite Module](https://www.iis.net/downloads/microsoft/url-rewrite) and [Application Request Routing](https://www.iis.net/downloads/microsoft/application-request-routing).

Finally, you will need any [Python 3.9.X](https://www.python.org/downloads/release/python-3913/) version, [VS Code](https://code.visualstudio.com/) and either [Github Desktop](https://desktop.github.com/download/) or [Git](https://git-scm.com/downloads), but I prefer the former due to its more friendly interface.

When installing Python, check *“Install launcher for all users”* and *“Add Python 3.9 to PATH”*, then click on *“Customize Installation”* and, on the following window, leave all defaults choices and click *"Next"*. On the third window, make sure to check *"Install for all users"* before clicking *"Install"*.


## Configure GitHub to work with a proxy server

{{< callout type="info" >}}
  It is highly recommended to fork the [QATrack+ repository](https://github.com/qatrackplus/qatrackplus), thus you may make any changes you want and have your own version both in your PC and in your GitHub.
{{< /callout >}}

If you have a proxy server at your institution, you need to tell Git/Github desktop how to reach your repositories; run the following command in a powershell:

```powershell
git config --global http.proxy <your-proxy-server>:<port-number>
git config --global https.proxy <your-proxy-server>:<port-number>
```

If you want to undo this changes just copy and paste the following command:

```powershell
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## Clone repository and install all dependencies

Open a Windows PowerShell terminal and create the following directory:

```powershell
mkdir C:\deploy
cd C:\deploy
```

{{< callout type="warning" >}}
  It is crucial to create the directory *"C:\deploy"* since there is a file that looks for such directory.
{{< /callout >}}

Now, it's time to clone your repository. You may do it directly from the PowerShell terminal by copying the following command:

```powershell
git clone https://github.com/qatrackplus/qatrackplus.git
```

Once cloned, setup the Python environment and install all dependencies:

```powershell
mkdir venvs
python -m pip install --upgrade pip
python -m venv venvs\qatrack31
.\venvs\qatrack31\Scripts\Activate.ps1
python -m pip install --upgrade pip
cd qatrackplus
git checkout v3.1.1.4
pip install -r requirements\win.txt
```

## Create your SQL database


{{< callout type="info" >}}
I'm testing **HUGO** after this [setup with Github Pages](https://jalcocert.github.io/JAlcocerT/web-for-phd-researcher/)
{{< /callout >}}

* https://imfing.github.io/hextra/docs/