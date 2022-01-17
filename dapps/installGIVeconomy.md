---
id: installGIVeconomy
title: Installing the GIVeconomy Front-End
slug: dapps/installGIVeconomy
---

You can find the Github repository containing the [GIVeconomy](https://giv.giveth.io) front-end at https://github.com/Giveth/liquidity-mining-dapp

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
## Prerequisites

- Yarn
- npm
- your own [Infura](https://infura.io/) nodes for Kovan and xDai Networks
- your favourite code editor (We recommend VSCode)


## Getting Started

First you'll need to get a local copy on your machine. Clone the repository from github on your computer

```
git clone git@github.com:Giveth/liquidity-mining-dapp.git
```

:::info
### Environment Variables
copy `.env.example` to `.env.local` and set the values to your Infura nodes as well as your API key
:::


Then to run the development server locally:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Open up your code editor and you're ready to start!

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
