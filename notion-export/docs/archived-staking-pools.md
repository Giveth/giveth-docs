---
id: "archived-staking-pools"
title: "Archived Staking Pools "
sidebar_label: "📓 Archived Staking Pools "
notion_page_id: "38b3ab28-d48c-8029-a9f8-c1056cf02a36"
---

The new Giveth app no longer displays archived GIVfarm staking pools or mainnet single-asset GIV staking. Those staking contracts are still live on-chain, so you can still unstake your tokens and claim any rewards yourself. This guide lists every archived pool and walks you through it.

> **Still using GIVpower?** Single-asset GIVpower staking on Optimism, Gnosis, and Polygon zkEVM is still supported in the Giveth app. Manage it under [**My Account → Staking**](https://qf.giveth.io/account?tab=staking)**.** This page only covers the older pools the app no longer shows.

### How it works

- **Staking contract**: the contract you staked into. You call `getReward()` to harvest your rewards and `withdraw()` / `exit()` to unstake. You do this on a block explorer.

- **Your rewards**: harvested rewards (GIV, and CULT or FOX) stream over time. You can claim them in the Giveth app, no contract call needed.

- **LP tokens** (liquidity-pool farms only): unstaking returns your LP tokens to your wallet, which represent your share of that pool.

Recovering your funds is usually two steps:

1. **Harvest and unstake on a block explorer**: `getReward()` to harvest, and `withdraw(amount)` or `exit()` to unstake. `exit()` does both in one transaction.

2. **Claim your rewards in the app**: Go to [Giveth, sign in and go to My Account’s Staking tab. ](https://qf.giveth.io/account?tab=staking)Select the network, and claim. The app claims your streamed/vested rewards (GIV, CULT, or FOX) for you.

### How to call a contract on a block explorer

1. Open the staking contract address on the explorer for its network (links in each section below).

2. Go to the **Contract** tab → **Read Contract** and check your balances:
  - `balanceOf(yourAddress)`: how much you have staked.
  - `earned(yourAddress)`: rewards available to harvest.

3. Go to **Write Contract**, click **Connect to Web3**, and connect the wallet you staked with. Some of these are upgradeable contracts, so you may see a **Write as Proxy** tab; use that one.

4. Call the method you need. Amounts are entered in **wei**, so multiply token amounts by 10¹⁸.

> **Tip:** if the staking contract has an `exit()` method, it unstakes everything and harvests your rewards in a single transaction.

**Staking contract methods**

| Method | Type | What it does |
| --- | --- | --- |
| `balanceOf(account)` | read | Your staked balance |
| `earned(account)` | read | Rewards you can harvest |
| `getReward()` | write | Harvest your rewards |
| `withdraw(amount)` | write | Unstake `amount` back to your wallet |
| `exit()` | write | Unstake everything and harvest, in one transaction |

Once you've harvested, claim your rewards in the app as described above.

### Archived pools by network

#### Ethereum Mainnet (chainId 1)

Explorer: [etherscan.io](https://etherscan.io/) (alternative: [eth.blockscout.com](https://eth.blockscout.com/))

| Pool | Staking contract (call here) | LP token | Reward |
| --- | --- | --- | --- |
| GIV / DAI (Uniswap V2) | `0xa4523D703F663615Bd41606B46B58dEb2F926D98` | `0xbeba1666c62c65e58770376de332891b09461eeb` | GIV |
| oneGIV / GIV Angel Vault (ICHI) | `0xA4b727DF6fD608d1835e3440288c73fB28c4eF16` | `0xc3151A58d519B94E915f66B044De3E55F77c2dd9` | GIV |
| GIV / ETH (Balancer) | `0xc0dbDcA66a0636236fAbe1B3C16B1bD4C84bB1E1` | `0x7819f1532c49388106f7762328c51ee70edd134c` | GIV |
| CULT / ETH (Uniswap V2) | `0xa479103c2618aD514653B53F064Bc6c9dC35a30b` | `0x5281E311734869C64ca60eF047fd87759397EFe6` | CULT |
| CULT / ETH V2 (Uniswap V2) | `0xcA128517053e8c459E12E3aCB615bb421d768219` | `0x5281E311734869C64ca60eF047fd87759397EFe6` | CULT |
| Single-asset GIV staking | `0x4B9EfAE862a1755F7CEcb021856D467E86976755` | n/a (stakes GIV directly) | GIV |

#### Gnosis Chain (chainId 100)

Explorer: [gnosisscan.io](https://gnosisscan.io/) (alternative: [gnosis.blockscout.com](https://gnosis.blockscout.com/))

| Pool | Staking contract (call here) | LP token | Reward |
| --- | --- | --- | --- |
| GIV / HNY (Honeyswap) | `0x4B9EfAE862a1755F7CEcb021856D467E86976755` | `0x08ea9f608656A4a775EF73f5B187a2F1AE2ae10e` | GIV |
| GIV / ETH (Sushiswap) | `0xfB429010C1e9D08B7347F968a7d88f0207807EF0` | `0x55FF0cef43F0DF88226E9D87D09fA036017F5586` | GIV |
| GIV / xDAI (Honeyswap) | `0x24A6067fEd46dc8663794c4d39Ec91b074cf85D4` | `0xB7189A7Ea38FA31210A79fe282AEC5736Ad5fA57` | GIV |
| FOX / HNY (Honeyswap) | `0x502EC7a040F486EE6Cb7d634D94764874B29dE68` | `0x8a0bee989c591142414ad67fb604539d917889df` | FOX |
| FOX / xDAI (Honeyswap) | `0x9A333AD00868472c0314F76DB8dA305B83890129` | `0xc22313fd39f7d4d73a89558f9e8e444c86464bac` | FOX |

### Example: unstaking GIV / HNY on Gnosis Chain

1. Open the staking contract `0x4B9EfAE862a1755F7CEcb021856D467E86976755` on [gnosisscan.io](https://gnosisscan.io/).

2. **Read Contract** → `balanceOf(yourAddress)` to see your staked LP, and `earned(yourAddress)` to see harvestable GIV.

3. **Write Contract** → connect your wallet → `exit()` to unstake all your LP and harvest your GIV in one transaction.

4. Claim your GIV in the app: open [qf.giveth.io](https://qf.giveth.io/account?tab=staking) → **My Account**, select **Gnosis**, and claim.

5. You now hold your **LP token** `0x08ea9f608656A4a775EF73f5B187a2F1AE2ae10e`, which represents your share of the GIV/HNY pool.

### Need help?

If you're not sure which pool you staked in, or something doesn't look right, reach out in the [Giveth Discord](https://discord.giveth.io/) and we'll help you find your contract and walk through it.
