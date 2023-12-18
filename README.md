# docs.giveth.io
[![Action Status](https://github.com/giveth/giveth-docs/workflows/deploy-docs/badge.svg)](https://github.com/giveth/giveth-docs/actions)

Visit the [Giveth Docs](https://docs.giveth.io/)

*This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.*

---


## Installation

```console
yarn
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Translations

When you are up and running and want to work on translations please see the documentation regarding i18n from docusaurus.io, use the appropriate folders for the language you are contributing too and note that it is very important to run the application specifically in your language as every translation generates its own Single page app.

`yarn start --locale es` (this is an example for running the spanish version locally)

## Build

```console
yarn run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
