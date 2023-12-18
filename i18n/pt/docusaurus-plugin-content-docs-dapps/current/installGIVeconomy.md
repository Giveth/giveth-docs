---
id: installGIVeconomy
title: Instalando o front-end do GIVeconomy
slug: dapps/installGIVeconomy
---


Você pode encontrar o repositório do Github contendo o front-end [GIVeconomy](https://giv.giveth.io/) em https://github.com/Giveth/liquidity-mining-dapp.

Este é um projeto [Next.js](https://nextjs.org/) inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Pré-requisitos

* Yarn
* npm
* seus próprios nós [Infura](https://infura.io/) para Kovan Network e Gnosis Chain (anteriormente Rede xDai)
* seu editor de código favorito (recomendamos o VSCode)

## Começando

Primeiro você precisará obter uma cópia local em sua máquina. Clone o repositório do github no seu computador.

```
git clone git@github.com:Giveth/liquidity-mining-dapp.git
```

> ⚠️ **INFO**
> ### Variáveis Ambientais
> copie `.env.example` para `.env.local` e defina os valores para seus nós Infura, bem como sua chave de API

Em seguida, para executar o servidor de desenvolvimento localmente:

```bash=
npm run dev
# or
yarn dev
```

Abra http://localhost:3000 com seu navegador para ver o resultado. Abra seu editor de código e você está pronto para começar!

## Saiba Mais

Para saber mais sobre Next.js, dê uma olhada nos seguintes recursos:

* [Next.js Documentation](https://nextjs.org/docs) - saiba mais sobre os recursos e a API do Next.js.
* [Learn Next.js](https://nextjs.org/learn) - um tutorial interativo do Next.js.

Você pode conferir [o repositório Next.js GitHub](https://github.com/vercel/next.js/) - seus comentários e contribuições são bem-vindos!

## Implementar no Vercel

A maneira mais fácil de implementar seu aplicativo Next.js é usar a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Confira nossa [documentação de implantação do Next.js](https://nextjs.org/docs/deployment) para obter mais detalhes.