---
id: givethioinstallation
title: Instalando a Giveth.io para Desenvolvimento Local

---

import useBaseUrl from '@docusaurus/useBaseUrl'

Esse guia documentará as etapas para configurar e executar a Giveth.io localmente para fins de desenvolvimento. O processo de configuração foi documentado usando o Ubuntu 20.04 LTS.

**Você precisará de alguns pré-requisitos para começar**.

- [Redis](https://redis.io/topics/quickstart)
- [Postgres](https://www.postgresql.org/download)
- Bash CLI
- [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/)
- Configure NodeJS
  - [Para Linux](https://www.gatsbyjs.com/docs/how-to/local-development/gatsby-on-linux/)
  - [Para Windows](https://www.gatsbyjs.com/docs/how-to/local-development/gatsby-on-windows/)
- Seu editor de código favorito (VScode para predefinições de linting)

## Instale impact-graph pelo GitHub

Para desenvolver localmente, você também precisa clonar o servidor de back-end. Estamos usando https://github.com/Giveth/impact-graph para isso.

 - via SSH na CLI:
    ```bash
    git clone git@github.com:Giveth/impact-graph.git
    cd impact-graph
    npm i
    cp .env.example .env
    ```

### Crie um banco de dados e usuário no Postgres usando psql

Siga este tutorial sobre PSQL para configurar seu nome de usuário e criar o banco de dados.

https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e

**TL;DR**

```bash
sudo -u postgres psql
postgres=# create database <databaseName>;
postgres=# create user <userName> with encrypted password '<passwordHere>';
postgres=# grant all privileges on database <databaseName> to <userName>;
```
### Clone e Instale o frontend

Acesse https://github.com/Giveth/giveth-2 e clone o repositório.

- via CLI:
 ```bash
  git clone git@github.com:Giveth/giveth-2.git
  cd giveth-2
  npm i
  ```
  
### Obter as variáveis de ambiente

Para executar a compilação local da Giveth.io, você precisará solicitar as variáveis de ambiente. Vá até o [Discord dos nossos colaboradores](https://discord.giveth.io/), diga oi e entre em contato com um dos desenvolvedores.

### Inicie o servidor de desenvolvimento e o ambiente

Inicie o servidor back-end do `impact-graph` e redis.

- Execute o redis usando o comando `redis-server`
- No repositório do impact-graph, comece com `npm start`
- Para aproveitar as predefinições de linting, use o **VSCODE**:

- Selecione Arquivo -> Abrir Área de Trabalho
- Navegue até o diretório giveth-2
- Abra o arquivo do espaço de trabalho `giveth2-full-stack.code-workspace`
- Instale extensões recomendadas (plugins Prettier e StandardJS)

Em seguida, inicie o servidor de desenvolvimento local.

 ```bash
 gatsby develop
 ```
 
 ### Comece a Editar!

Abra o repositório giveth2 em seu editor de código.

Giveth.io agora está sendo executado localmente um `http://localhost:8000!`

![](https://docs.giveth.io/img/content/givethlocalresized.png)

Você também pode tentar consultando seus dados via GraphQL - você encontrará neste link aqui `http://localhost:8000/___graphql` Saiba mais sobre como usar essa ferramenta no [tutorial Gatsby](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

Salve suas alterações e o navegador será atualizado em tempo real!

**Status de compilação atual**

[master](https://v2.giveth.io/)

![](https://api.netlify.com/api/v1/badges/f914ac7e-ce27-4909-bd3e-14d749731a52/deploy-status)

[staging](https://staging.giveth.io/)

![](https://api.netlify.com/api/v1/badges/2f325b5b-e159-443e-bac7-c5e15f3578c0/deploy-status)














