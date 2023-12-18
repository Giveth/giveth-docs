---
id: introTrace
title: Intro to Giveth TRACE
slug: dapps/introTrace
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../src/css/custom.css'
import TraceDeprecated from './_traceDeprecated.mdx'

<TraceDeprecated />


Giveth is re-engineering charitable giving, by creating entirely free, open-source platforms, built on the Ethereum Blockchain. Giveth TRACE cuts out bureaucracy and enables makers to create a high level of transparency and accountability for Givers. The basic donation hierarchy of Communities, Campaigns and Traces allows for users to specify the scope of their donation. There are multiple reviewer roles and security check points that allow Givers and Makers to use our DApp with confidence. You can read more about the basic components and the **logic behind our DApp (Donation Application) in this [post.](https://medium.com/giveth/what-is-the-future-of-giving-d50446b0a0e4)**

<img alt="Giveth TRACE home page" src={useBaseUrl('img/content/trace/tracefrontpage.png')} />

## Current Status
The [Giveth TRACE DApp](https://trace.giveth.io) is on the Ethereum mainnet, bridged to Rinkeby testnet. We are in active development on the DApp and aiming for a post-beta release in the coming months. The best way to reach out to our team is via [Discord](https://discord.gg/GMQFKmdSGy), feel free to drop in and say hello!


New Projects are currently being added onto Giveth TRACE by a case-by-case vetting process. If you have a simple project looking for funding try out [Giveth.io](https://giveth.io). If you have a community, cause or project that is more complex, and perhaps requiring greater transparency and traceability, then get in touch with us on [Discord](https://discord.gg/qf7XZ48gCU).

Check out the amazing projects onboarded onto our [DApp](https://beta.giveth.io), and register as a user by completing a profile. You can support the development of our Dapp by giving to a Community or Campaign, or funding specific Traces directly and see exactly how your donation creates positive change in the world.

### A Tale of Two Networks
It's been a quest getting to mainnet efficiency, challenged by **scalability issues** that were too prohibitive for real use. In 2017, we found a smooth solution with a bridge between Ethereum mainnet and Rinkeby testnet.

<img alt="Selecting the Rinkeby Network" src={useBaseUrl('img/content/trace/rinkebyselect.png')} class="leftfloat" />

In order to interface with the Giveth application you'll have to [download and install MetaMask](https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask) on your favourite web browser. The Ethereum address used for your MetaMask sign-in will be how we identify your personal profile on the DApp.

This ground-breaking innovation (of its time) allows Giveth and the user to perform smart contract interactions for free, spending only gas on Rinkeby testnet, while still tracking everything on a blockchain. For most tasks on Giveth TRACE you'll want to make sure you're connected to the **Rinkeby** test network.

When you're sending real funds to any entity on Giveth TRACE, you do it with the Ethereum mainnet. Conversely, when you claim funds that have been delegated to a completed Trace you are the recipient of, **Giveth pays the gas** to bridge your transaction to the mainnet and send the funds to you.



To learn more about the Giveth bridge, head over to the documentation [here](https://docs.giveth.io/dapps/bridgeSecurity). There is also a [wonderful Medium article](https://medium.com/giveth/tackling-ethereum-scalability-issues-29bd700b5060) from 2017, that identifies the major scalability issues of that era in crypto and how we found a solution.

### Development
You can follow the development on [Github](https://github.com/Giveth/giveth-dapp), read more in this documentation (add internal link) or join our contributors channel in [Discord](https://discord.gg/qf7XZ48gCU). Our meetings are on the [Giveth calendar](https://calendar.google.com/calendar/embed?src=givethdotio@gmail.com&pli=1), and you are welcome to join!
