---
id: archivedStakingPools
title: Archived Staking Pools - Recover Your Tokens & Rewards
slug: giveconomy/archived-staking-pools
---

The new Giveth app no longer ships a user interface for the old [GIVfarm](./GIVfarm.md) and [GIVgarden](./GIVgarden.md) staking pools. **Your funds are not lost** — the staking contracts are still live on-chain, and you can interact with them directly through a block explorer to harvest your remaining rewards and withdraw your staked tokens.

This guide lists every archived staking pool across all networks with its contract address, and walks you through recovering your tokens manually.

:::caution
On October 29, 2022, [the GIVfarm was exploited on ETH Mainnet](https://twitter.com/Givethio/status/1591431388271677440). The pools marked **⚠️ exploited** below were affected. Funds in those Mainnet farming contracts were drained, and the community voted not to restart them. They are listed here for completeness — if you had funds in an exploited pool, please contact the Giveth team in [Discord](https://discord.giveth.io/) before interacting with the contract.
:::

## Before you start — how Giveth staking works

Three contract types are involved. You will usually touch two of them:

| Contract | What it is | What you do with it |
| --- | --- | --- |
| **Staking contract** (`LM_ADDRESS`) | The "Unipool" reward distributor you staked into | `withdraw` your stake, `getReward` to harvest |
| **LP token** (`POOL_ADDRESS`) | The liquidity-pool token a farm was based on | After unstaking, remove liquidity on the original DEX |
| **TokenDistro** | Holds your GIV reward stream (rewards vest over time) | `claim` your vested GIV |

:::info
### GIV rewards vest — they are not paid instantly
When you call `getReward()` on a staking contract, your earned GIV is **allocated to the TokenDistro contract as part of your [GIVstream](./givstream.md)**, not sent straight to your wallet. To actually receive GIV you then call `claim()` on the TokenDistro for that network. Partner-token rewards (CULT, FOX) have their own TokenDistro — see each table below.
:::

The full flow is usually:

1. **Harvest** — `getReward()` on the staking contract → adds GIV to your GIVstream on the TokenDistro.
2. **Claim** — `claim()` on the TokenDistro → sends the vested portion to your wallet.
3. **Unstake** — `withdraw(amount)` or `exit()` on the staking contract → returns your staked LP / GIV.
4. **Remove liquidity** (LP farms only) — on the original DEX (Uniswap / Honeyswap / Sushiswap / Balancer) to get your underlying tokens back.

## How to call a contract on a block explorer

1. Open the contract address on the relevant explorer (links in each section below).
2. Go to the **Contract** tab → **Read Contract** and check your balances first:
   - `balanceOf(<your address>)` → how much you still have staked.
   - `earned(<your address>)` → how much reward you can still harvest.
3. Go to **Write Contract** — on some contracts you must use **"Write as Proxy"**, since these are upgradeable proxy contracts.
4. Click **Connect to Web3** and connect the wallet that staked the tokens.
5. Call the method you need. Amounts are in **wei** — multiply token amounts by 10<sup>18</sup>.

:::tip
Use `exit()` when available — it withdraws your entire stake **and** harvests rewards in a single transaction.
:::

**Common staking-contract methods (Unipool):**

| Method | Type | Effect |
| --- | --- | --- |
| `balanceOf(account)` | read | Your staked balance |
| `earned(account)` | read | Reward you can still harvest |
| `getReward()` | write | Harvest rewards → allocates GIV to the TokenDistro |
| `withdraw(amount)` | write | Unstake `amount` of LP / GIV back to your wallet |
| `exit()` | write | `withdraw` everything **+** `getReward` in one transaction |

**TokenDistro methods (to receive vested GIV):**

| Method | Type | Effect |
| --- | --- | --- |
| `claimableNow(recipient)` | read | GIV available to claim right now |
| `claim()` | write | Sends your currently-vested GIV to your wallet |

## Archived pool inventory by network

### Ethereum Mainnet — chainId 1

Explorer: [etherscan.io](https://etherscan.io) (alternative: [eth.blockscout.com](https://eth.blockscout.com))

- **GIV token:** `0x900db999074d9277c5da2a43f252d74366230da0`
- **TokenDistro (GIV rewards):** `0x87dE995F6744B75bBe0255A973081142aDb61f4d`

| Pool | Staking contract — call here | LP token | Notes |
| --- | --- | --- | --- |
| GIV / DAI (Uniswap V2) | `0xa4523D703F663615Bd41606B46B58dEb2F926D98` | `0xbeba1666c62c65e58770376de332891b09461eeb` | |
| oneGIV / GIV — [Angel Vault](./angelVault.md) (ICHI) | `0xA4b727DF6fD608d1835e3440288c73fB28c4eF16` | `0xc3151A58d519B94E915f66B044De3E55F77c2dd9` | ⚠️ exploited |
| GIV / ETH (Balancer) | `0xc0dbDcA66a0636236fAbe1B3C16B1bD4C84bB1E1` | `0x7819f1532c49388106f7762328c51ee70edd134c` | ⚠️ exploited · Balancer Vault `0xBA12222222228d8Ba445958a75a0704d566BF2C8`, poolId `0x7819…0109` |
| CULT / ETH (Uniswap V2) | `0xa479103c2618aD514653B53F064Bc6c9dC35a30b` | `0x5281E311734869C64ca60eF047fd87759397EFe6` | ⚠️ exploited · reward = CULT |
| CULT / ETH — V2 (Uniswap V2) | `0xcA128517053e8c459E12E3aCB615bb421d768219` | `0x5281E311734869C64ca60eF047fd87759397EFe6` | reward = CULT |

- **CULT reward TokenDistro:** `0x73f2D115C2cBAa3b5F477A78F7A7CD348D8b70a2` · CULT token `0xf0f9D895aCa5c8678f706FB8216fa22957685A13`
- **Single-asset GIV staking** (stakes the GIV token directly): `0x4B9EfAE862a1755F7CEcb021856D467E86976755` — a legacy farm (ended September 2022) flagged as affected by the 2022 GIVfarm exploit. It is still deployed on-chain; check `balanceOf`/`earned` and use the standard `getReward` → `claim` and `withdraw`/`exit` flow, and contact the Giveth team before interacting if a call reverts or you are unsure. *(Some older Giveth documentation lists `0x3115e5aAa3D6f742d09fbB649150dfE285a9c2A3` for "GIV staking" — that address is actually the Uniswap V3 reward token (GUR), not a staking contract.)*

### Gnosis Chain (formerly xDai) — chainId 100

Explorer: [gnosisscan.io](https://gnosisscan.io) (alternative: [gnosis.blockscout.com](https://gnosis.blockscout.com))

- **GIV token:** `0x4f4F9b8D5B4d0Dc10506e5551B0513B61fD59e75`
- **TokenDistro (GIV rewards):** `0xc0dbDcA66a0636236fAbe1B3C16B1bD4C84bB1E1`

**GIVgarden — single-asset GIV staking ([GIVpower](./GIVpower.md))**

- Reward / harvest contract (`getReward`): `0xD93d3bDBa18ebcB3317a57119ea44ed2Cf41C2F2`
- Gardens contract (stake / unstake by wrap / unwrap): `0x24f2d06446af8d6e89febc205e7936a602a87b60`
- gGIV token: `0xfFBAbEb49be77E5254333d5fdfF72920B989425f`

:::caution
GIVgarden uses 1Hive Gardens. Harvest rewards with `getReward()` on the reward contract above. Withdrawing the staked GIV is done by unwrapping on the Gardens contract; **GIV locked for GIVpower can only be unstaked after its lock period has expired.** If you are unsure, contact the Giveth team.

Note: on the GIVgarden reward contract, `earned()` reports the portion of rewards already released by your GIVstream, not the full amount `getReward()` allocates — don't be alarmed if the GIV that lands on the TokenDistro is larger than `earned()` showed.
:::

**GIVfarm LP pools**

| Pool | Staking contract | LP token | Notes |
| --- | --- | --- | --- |
| GIV / HNY (Honeyswap) | `0x4B9EfAE862a1755F7CEcb021856D467E86976755` | `0x08ea9f608656A4a775EF73f5B187a2F1AE2ae10e` | |
| GIV / ETH (Sushiswap) | `0xfB429010C1e9D08B7347F968a7d88f0207807EF0` | `0x55FF0cef43F0DF88226E9D87D09fA036017F5586` | |
| GIV / xDAI (Honeyswap) | `0x24A6067fEd46dc8663794c4d39Ec91b074cf85D4` | `0xB7189A7Ea38FA31210A79fe282AEC5736Ad5fA57` | |
| FOX / HNY (Honeyswap) | `0x502EC7a040F486EE6Cb7d634D94764874B29dE68` | `0x8a0bee989c591142414ad67fb604539d917889df` | reward = FOX |
| FOX / xDAI (Honeyswap) | `0x9A333AD00868472c0314F76DB8dA305B83890129` | `0xc22313fd39f7d4d73a89558f9e8e444c86464bac` | reward = FOX |

- **FOX reward TokenDistro:** `0xA9a37a14E562D0E1d335B4714E3455483ede7A9a` · FOX token `0x21a42669643f45bc0e086b8fc2ed70c23d67509d`

### Optimism — chainId 10

Explorer: [optimistic.etherscan.io](https://optimistic.etherscan.io) (alternative: [optimism.blockscout.com](https://optimism.blockscout.com))

- **GIV token:** `0x528CDc92eAB044E1E39FE43B9514bfdAB4412B98`
- **TokenDistro (GIV rewards):** `0xe3ac7b3e6b4065f4765d76fdc215606483bf3bd1`

| Pool | Staking contract | Notes |
| --- | --- | --- |
| GIV — single-asset staking ([GIVpower](./GIVpower.md)) | `0x301C739CF6bfb6B47A74878BdEB13f92F13Ae5E7` | Harvest `getReward()`, unstake `withdraw()`; locked GIV unstakable after lock expiry |

### Polygon zkEVM — chainId 1101

Explorer: [zkevm.polygonscan.com](https://zkevm.polygonscan.com) (alternative: [zkevm.blockscout.com](https://zkevm.blockscout.com))

- **GIV token:** `0xddAFB91475bBf6210a151FA911AC8fdA7dE46Ec2`
- **TokenDistro (GIV rewards):** `0x4fB9B10ECDe1b048DBC79aBEAB3793edc93a0d54`

| Pool | Staking contract | Notes |
| --- | --- | --- |
| GIV — single-asset staking ([GIVpower](./GIVpower.md)) | `0xc790f82bf6f8709aa4a56dc11afad7af7c2a9867` | Harvest `getReward()`, unstake `withdraw()`; locked GIV unstakable after lock expiry |

## Worked example — unstaking from a GIVfarm LP pool

Recovering a stake from **GIV / HNY on Gnosis Chain**:

1. Open the staking contract `0x4B9EfAE862a1755F7CEcb021856D467E86976755` on [gnosisscan.io](https://gnosisscan.io).
2. **Read Contract** → `balanceOf(yourAddress)` to confirm your staked LP balance, and `earned(yourAddress)` to see harvestable GIV.
3. **Write Contract** → connect your wallet → `exit()` (unstakes all LP + harvests GIV rewards).
4. Go to the **TokenDistro** `0xc0dbDcA66a0636236fAbe1B3C16B1bD4C84bB1E1` → `claim()` to receive your vested GIV.
5. You now hold the **LP token** `0x08ea9f608656A4a775EF73f5B187a2F1AE2ae10e`. Go to Honeyswap → **Remove Liquidity** to convert it back into GIV and HNY.

## Need help?

If you are unsure which pool you staked in, or a transaction reverts, reach out in the [Giveth Discord](https://discord.giveth.io/) before attempting anything further. Never send tokens directly to a contract address — always use the contract methods described above.
