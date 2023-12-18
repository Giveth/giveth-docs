---
id: givethioinstallation
title: Intalando Giveth.io para desarrollo local 
slug: dapps/givethioinstallation
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../../../../src/css/custom.css'

Esta guía documentará los pasos para configurar y ejecutar Giveth.io localmente con fines de desarrollo. El proceso de configuración se documentó con Ubuntu 20.04 LTS.

#### **Necesitarás un par de requisitos previos para comenzar.**

 - [Redis](https://redis.io/topics/quickstart)
 - [Postgres](https://www.postgresql.org/download)
 - Node 14+
 - yarn
 - npm
 - Tú editor de código favorito (Te recomendamos VScode)

#### **Giveth IO aprovecha paquetes, aplicaciones y arquitecturas notables que incluyen:** 
 - Ethereum
 - React
 - NextJS
 - Apollo GraphQL
 - Tor.us
 - theme-ui

### Instale el back-end (gráfico de impacto) desde GitHub
Para desarrollar localmente, necesita clonar el servidor back-end. Estamos usando https://github.com/Giveth/impact-graph para esto.

*via SSH en el CLI:*
```bash
    git clone git@github.com:Giveth/impact-graph.git
    cd impact-graph
    npm i
    cp .env.example .env
```


### Crear una base de datos y un usuario en Postgres usando psql
Siga este tutorial sobre PSQL para configurar su nombre de usuario y crear la base de datos.
https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e)

**Creando Usuario y Base de Datos**
```bash
sudo -u postgres psql
postgres=# Crea la Base de datos <databaseName>;
postgres=# Crea el Usuario y la contraseña <userName> Con un contraseña encriptada '<passwordHere>';
postgres=# Le damos los privilegios de administrador a nuestro usuario <databaseName> to <userName>;
```
### Clonar e instalar la interfaz
  Dirígete a https://github.com/Giveth/giveth-next y clona el repositorio.

  *via SSH en el CLI:*
  ```bash
  git clone git@github.com:Giveth/giveth-next.git
  cd giveth-next
  yarn install
  ```

### Obtener las variables de entorno
 Para ejecutar la compilación local de Giveth.io, deberá solicitar las variables de entorno. Dirígete a nuestro [Discord de Colaboradores](https://discord.giveth.io), saluda y ponte en contacto con nuestro gerente de producto, @MoeNick o uno de los desarrolladores.

### Inicie el entorno y el servidor
  Inicie el servidor backend `impact-graph` y redis.
  - Ejecute redis usando el comando `redis-server`.
  - Desde el repositorio del gráfico de impacto, comience con `npm start`.

  :::info
   ### Uso de una base de datos provisional para desarrollar
   Si no necesita configurar una base de datos local para sus fines de desarrollo, puede usar la base de datos provisional en su lugar. Establezca `NEXT_PUBLIC_APOLLO_SERVER` en `https://serve.giveth.io/graphql` (esto usa la misma base de datos que ve en https://next.giveth.io).
   :::


### Ejecute las migraciones para configurar la base de datos
En una terminal separada `cd` dentro de `impact-graph`
Correr este comando en el terminal:
```bash
npm run typeorm:cli -- migration:run
```

### Implementar el front-end
 Para aprovechar los ajustes preestablecidos de linting, utilice **VSCODE**:
 * Seleccionamos *Archivo -> Abrir WorkSpace*.
 * Navegar al directorio giveth-next.
 * Abra el archivo del espacio de trabajo `giveth2-full-stack.code-workspace`.
 * Instale las extensiones recomendadas (complementos Prettier y StandardJS).
 * Luego encienda el front-end localmente.

 ```bash
 yarn run dev
 ```

### ¡Iniciar la edición!

Abra el repositorio giveth-next en su editor de código.

Giveth.io ahora se ejecuta localmente en `http://localhost:8000`.

<img id="contentimg" alt='Giveth Running Locally' src={useBaseUrl('img/content/givethlocalresized.png')} />

También puede expirar mediante una consulta sus datos a través de GraphQL. Lo encontrará en este enlace aquí: `http://localhost:8000/___graphql`
Obtén más información sobre el uso de esta herramienta en el [tutorial de Gatsby](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

   ¡Guarde sus cambios y el navegador se actualizará en tiempo real!

**Estados de compilación actuales**

[Máster](https://giveth.io)

[![Netlify Status](https://api.netlify.com/api/v1/badges/f914ac7e-ce27-4909-bd3e-14d749731a52/deploy-status)](https://app.netlify.com/sites/giveth2/deploys)

[staging](https://next.giveth.io)

[![Netlify Status](https://api.netlify.com/api/v1/badges/2f325b5b-e159-443e-bac7-c5e15f3578c0/deploy-status)](https://app.netlify.com/sites/giveth-website-staging/deploys)
<br />
