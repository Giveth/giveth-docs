---
id: givethioinstallation
title: Installing Giveth.io for Local development
---

import useBaseUrl from '@docusaurus/useBaseUrl'

Esta guía documentará los pasos para configurar y ejecutar Giveth.io localmente con fines de desarrollo. El proceso de configuración se documentó con Ubuntu 20.04 LTS.

**Necesitará un par de requisitos previos para comenzar.**

 - [Redis](https://redis.io/topics/quickstart)
 - [Postgres](https://www.postgresql.org/download)
 -Bash CLI
 - [CLI de Gatsby](https://www.gatsbyjs.com/docs/reference/gatsby-cli/)
 - Configurar NodeJS
      * [Para Linux](https://www.gatsbyjs.com/docs/how-to/local-development/gatsby-on-linux/)
     * [Para Windows](https://www.gatsbyjs.com/docs/how-to/local-development/gatsby-on-windows/)
 - Tu editor de código favorito (VScode para ajustes preestablecidos de pelusa)

### Instalar gráfico de impacto desde GitHub
Para desarrollar localmente, también necesita clonar el servidor backend. Estamos usando https://github.com/Giveth/impact-graph para esto.

- a través de SSH en la CLI:
    ```bash
    git clone git@github.com:Giveth/impact-graph.git
    gráfico de impacto de cd
    npm yo
    cp .env.ejemplo .env
    ```


### Crear una base de datos y un usuario en Postgres usando psql
Siga este tutorial sobre PSQL para configurar su nombre de usuario y crear la base de datos.
https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e)

**TL;DR**
```bash
sudo -u postgres psql
postgres=# crear base de datos <databaseName>;
postgres=# crear usuario <nombre de usuario> con contraseña cifrada '<contraseñaAquí>';
postgres=# otorgar todos los privilegios en la base de datos <nombre de la base de datos> a <nombre de usuario>;
```
### Clonar e instalar la interfaz
  Dirígete a https://github.com/Giveth/giveth-2 y clona el repositorio.
  - a través de la CLI:
  ```bash
  git clone git@github.com:Dar/dar-2.git
  cd giveth-2
  npm yo
  ```

### Obtener las variables de entorno
 Para ejecutar la compilación local de Giveth.io, deberá solicitar las variables de entorno. Dirígete a nuestro [Discord de Colaboradores] (https://discord.giveth.io) saluda y ponte en contacto con uno de los desarrolladores.

### Inicie el entorno y el servidor de desarrollo
 Inicie el servidor backend `impact-graph` y redis.
  - Ejecute redis usando el comando `redis-server`
  - Desde el repositorio del gráfico de impacto, comience con `npm start`

 Para aprovechar los ajustes preestablecidos de linting, utilice **VSCODE**:
 * Seleccione *Archivo -> Abrir espacio de trabajo*
 * Navegar al directorio giveth-2
 * Abra el archivo del espacio de trabajo `giveth2-full-stack.code-workspace`
 * Instale las extensiones recomendadas (complementos Prettier y StandardJS)

 Luego inicie el servidor de desarrollo local.

 ```bash
 gatsby desarrollar
 ```

### ¡Iniciar la edición!

Abra el repositorio giveth2 en su editor de código.

Giveth.io ahora se ejecuta localmente en `http://localhost:8000`.

<img alt='Giveth ejecutándose localmente' src={useBaseUrl('img/content/givethlocalresized.png')} />

También puede expirar consultando sus datos a través de GraphQL; lo encontrará en este enlace aquí: `http://localhost:8000/___graphql`
Obtén más información sobre el uso de esta herramienta en el [tutorial de Gatsby](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

  ¡Guarde sus cambios y el navegador se actualizará en tiempo real!

**Estados de compilación actuales**

[maestro](https://v2.giveth.io)

[![Estado de Netlify](https://api.netlify.com/api/v1/badges/f914ac7e-ce27-4909-bd3e-14d749731a52/deploy-status)](https://app.netlify.com/sites /dar2/despliega)

[puesta en escena](https://staging.giveth.io)

[![Estado de Netlify](https://api.netlify.com/api/v1/badges/2f325b5b-e159-443e-bac7-c5e15f3578c0/deploy-status)](https://app.netlify.com/sites /giveth-website-staging/deploys)
<br />
