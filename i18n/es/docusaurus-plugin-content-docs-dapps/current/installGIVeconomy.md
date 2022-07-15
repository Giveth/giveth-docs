---
id: installGIVeconomy
title: Instalando el Front-end de GIVeconomy
slug: dapps/installGIVeconomy
---

Puedes encontrar el repositorio del front-end contiene el [GIVeconomy](https://giv.giveth.io) en GIThub https://github.com/Giveth/liquidity-mining-dapp.

Esto es [Next.js](https://nextjs.org/) un proyecto iniciado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
## Pre-Requisitos

- Yarn
- npm
- Tús propios nodos [Infura](https://infura.io/) para Kovan Network y Gnosis Chain (anteriormente xDai Network)
- Tú editor de código favorito (Recomendamos VSCode)


## Para Empezar

Primero deberás obtener una copia local en tú máquina. Clona el repositorio de github en tu computadora.

```
Consigue clonarlo aquí -> git@github.com:Giveth/liquidity-mining-dapp.git
```

:::Info
### Variables de entorno
Copia `.env.example` en `.env.local` y establezca los valores para sus nodos Infura, así como su clave API
:::


Luego, para ejecutar el servidor localmente:

```bash
npm run dev
# or
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado. ¡Abre tu editor de código y estarás listo para comenzar!

## Leer Más

Para obtener más información sobre Next.js, eche un vistazo a los siguientes recursos:

- [Documentación Next.js](https://nextjs.org/docs) - Obtenga información sobre las funciones y la API de Next.js.
- [Aprende Next.js](https://nextjs.org/learn) - Tutorial interactivo de Next.js.

Puedes darle un vistazo a [El repositorio Next.js de Github](https://github.com/vercel/next.js/) - ¡Tus comentarios y contribuciones son bienvenidas!

## Implementar en Vercel

La forma más fácil de implementar su aplicación Next.js es usar la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) De los creadores de Next.js.

Echa un vistazo a nuestro [Documentación de implementación de Next.js](https://nextjs.org/docs/deployment) para más detalles.
