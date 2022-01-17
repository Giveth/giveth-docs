---
id: givethioinstallation
title: Installing Giveth.io for Local Development
slug: dapps/givethioinstallation
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../src/css/custom.css'

This guide will document the steps to set up and run Giveth.io locally for the purposes of development.The setup process was documented using Ubuntu 20.04 LTS.

#### **You'll need a couple prerequisites to get started.**

 - [Redis](https://redis.io/topics/quickstart)
 - [Postgres](https://www.postgresql.org/download)
 - Node 14+
 - yarn
 - npm
 - Your favourite Code Editor (VScode for linting presets)

#### **Giveth IO leverages notable packages, applications and architectures including:**  
 - Ethereum
 - React
 - NextJS
 - Apollo GraphQL
 - Tor.us
 - theme-ui

### Install the back-end (impact-graph) from GitHub
In order to develop locally you need to clone the back-end server. We are using https://github.com/Giveth/impact-graph for this.

*via SSH on the CLI:*
```bash
    git clone git@github.com:Giveth/impact-graph.git
    cd impact-graph
    npm i
    cp .env.example .env
```


### Create a Database and User in Postgres using psql
Follow this tutorial on PSQL to setup your username and create the database.
https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e)

**TL;DR**
```bash
sudo -u postgres psql
postgres=# create database <databaseName>;
postgres=# create user <userName> with encrypted password '<passwordHere>';
postgres=# grant all privileges on database <databaseName> to <userName>;
```
### Clone and Install the Frontend
  Head on over to https://github.com/Giveth/giveth-next and clone the repo.  

  *via SSH on the CLI:*
  ```bash
  git clone git@github.com:Giveth/giveth-next.git
  cd giveth-next
  yarn install
  ```

### Get the Environment Variables
 In order to run the local build for Giveth.io you'll need to ask for the environment variables. Head on over to our [Contributors Discord](https://discord.giveth.io) say Hi and get in touch with our product manager, @MoeNick or one of the developers.


### Launch the Development Server and Environment
 Start up the `impact-graph` backend server and redis.
  - Run redis by using the command `redis-server`
  - From the impact-graph repo start with `npm start`

  :::info
  ### Using the Staging Database for Development
  If you don't need to setup a local database for your development purposes you can use the staging database instead. Set `NEXT_PUBLIC_APOLLO_SERVER` to `https://serve.giveth.io/graphql` (this uses the same database you see on https://next.giveth.io)
  :::


### Run the Migrations to Setup the Database
In a separate terminal `cd` into the `impact-graph`
run this command in the terminal
```bash
npm run typeorm:cli -- migration:run
```

### Deploy the Front-end
 To take advantage of linting presets, please use **VSCODE**:
 * Select *File -> Open Workspace*
 * Navigate into the giveth-next directory
 * Open the workspace file `giveth2-full-stack.code-workspace`
 * Install recommended extensions (Prettier and StandardJS plugins)

 Then fire up the front-end locally.

 ```bash
 yarn run dev
 ```

### Start Editing!

Open up the giveth-next repo on your code editor.

Giveth.io is now running locally at `http://localhost:8000`!

<img id="contentimg" alt='Giveth Running Locally' src={useBaseUrl('img/content/givethlocalresized.png')} />

You can also expiremnt with querying your data via GraphQL - you'll find it at this link here - `http://localhost:8000/___graphql`
Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

  Save your changes and the browser will update in real time!

**Current Build Statuses**

[master](https://giveth.io)

[![Netlify Status](https://api.netlify.com/api/v1/badges/f914ac7e-ce27-4909-bd3e-14d749731a52/deploy-status)](https://app.netlify.com/sites/giveth2/deploys)

[staging](https://next.giveth.io)

[![Netlify Status](https://api.netlify.com/api/v1/badges/2f325b5b-e159-443e-bac7-c5e15f3578c0/deploy-status)](https://app.netlify.com/sites/giveth-website-staging/deploys)
<br />
