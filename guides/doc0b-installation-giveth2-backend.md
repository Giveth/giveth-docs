---
id: run-giveth2-backend
title: Run backend for Giveth2
---

In order to develop locally you need to clone the backend server as well. We are using https://github.com/topiahq/impact-graph for this. Under the hood it is running Apollo.

Please follow the readme of `impact-graph` to install it. 
	
Here are more detailed instructions specific to giveth2:

## Impact graph for Giveth2
These instructions were executed on Ubuntu 18.04 but should stay the same regardless of operating system (ymmv).

### Install Prerequisites
- install [Redis](https://redis.io/topics/quickstart)
- install [Postgres](https://www.postgresql.org/download)

### Install impact-graph from GitHub
```bash
git clone git@github.com:topiahq/impact-graph.git
cd impact-graph
npm i
cp .env.example .env
```

### Create a database and user in postgres using psql
i.e. follow this tutorial
https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e)

to do something like this:
```bash
sudo -u postgres psql
postgres=# create database mydb;
postgres=# create user myuser with encrypted password 'mypass';
postgres=# grant all privileges on database mydb to myuser;
```

### Get environment variables
For more information about a local development environment please ask in the giveth2 dev channel - i.e. in telegram, discord or (https://riot.im/app/#/room/!zFyfjCfKHawjZJcueK:matrix.org?via=matrix.org)[Riot.im].