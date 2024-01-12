---
id: angelVault
title: The Angel Vault (Deprecated)
---
import useBaseUrl from '@docusaurus/useBaseUrl'

### _Then Angel Vault has been deprecated. This documentation will remain purely for historical reference._
The Angel Vault is a strategically managed Univ3 position structured to protect GIV from downward volatility. It is managed by our Angel Vault multisig, a [4/7 multisig of Giveth core team members and two members for ICHI](https://gnosis-safe.io/app/eth:0x2B0ee142dCFE7C2dD150cDbd7B6832F6e9977f51/home). To learn more about Angel Vaults and how they work, please refer to [ICHI’s documentation](https://docs.ichi.org/ichi-docs-v3/ichi-vaults/angel-vaults).
## Contracts
- Angel Vault (ICHI) LM (Unipool): `0xA4b727DF6fD608d1835e3440288c73fB28c4eF16`
- Angel Vault (ICHI) LP: `0xc3151A58d519B94E915f66B044De3E55F77c2dd9`

## oneGIV
oneGIV is a Giveth Branded Dollar (by ICHI) that can be minted using DAI at a 1:1 ratio. This can be done via [ICHI’s website](https://app.ichi.org/vault?poolId=20009&back=vault). To learn more about ICHI’s branded dollar, [please refer to their documentation](https://docs.ichi.org/ichi-docs-v3/branded-dollars/overview).

oneGIV is minted using 100% DAI, and is also over-collateralized by GIV. The contract holds GIV as additional collateral in case there is some issue with the DAI. All mints & burns of oneGIV happen via a contract managed by our Angel Vault multisig.

Over time, the Giveth DAO may vote to change the minting ratio from 100% DAI to a combination of DAI and GIV (e.g. 80% DAI, 20% GIV). However, to keep the peg to the dollar, burning oneGIV to redeem DAI will always result in 100% DAI.

## Providing & Removing Liquidity
Liquidity providers can add liquidity to the Angel Vault using oneGIV via [ICHI’s website](https://app.ichi.org/vault?poolId=20009&back=vault), and then stake their LP tokens in the [GIVfarm](https://giveth.io/givfarm). Because this oneGIV is added to a oneGIV / GIV Univ3 position, when you remove liquidity you will get oneGIV & GIV proportional to the holdings in the Angel Vault.

## Earning Rewards
Rewards are given to liquidity providers in proportion to the liquidity provided. When you stake your LP tokens, you earn rewards in two parts:
1. The 1% Uniswap fee which automatically increase your Angel Vault position ([IRR](https://docs.ichi.org/ichi-docs-v3/resources/faqs#what-does-the-irr-metric-on-the-angel-vault-page-represent)).
2. GIV incentives from within the GIVfarm, which as always, are distributed according to the GIVstream. Check out the [**GIViverse Expansion**](https://giveth.io/givstream) to understand how much your claimable rewards will be.

The APR shown in the GIVfarm oneGIV/GIV staking pool is the sum of these two reward rates.

<img alt="angel vault staking farm staking card" src={useBaseUrl('/img/content/giveconomy/angelVaultCard.png')} />

## Distribution of GIV rewards to Angel Vault LP Stakers
A total of 6 Million GIV has been allocated to run a rewards program for Angel Vault LP stakers for 26 weeks from the start date August 4, 2022. The amount of rewards being sent out throughout each two week period is as follows:

| Week    | GIV Rewarded (within the 2 week period) | % of rewards |
| ------- | --------------------------------------- | ------------ |
| Week 1  | 485,143                                 | 8.09%        |
| Week 3  | 569,143                                 | 9.49%        |
| Week 5  | 140,000                                 | 2.33%        |
| Week 7  | 653,143                                 | 10.89%       |
| Week 9  | 140,000                                 | 2.33%        |
| Week 11 | 737,143                                 | 12.29%       |
| Week 13 | 140,000                                 | 2.33%        |
| Week 15 | 821,143                                 | 13.69%       |
| Week 17 | 140,000                                 | 2.33%        |
| Week 19 | 905,143                                 | 15.09%       |
| Week 21 | 140,000                                 | 2.33%        |
| Week 23 | 989,143                                 | 16.49%       |
| Week 25 | 140,000                                 | 2.32%        |

### Incentives Plan — The Jagged Staircase
When the Angel Vault is initialized, the entirety of its liquidity will be in oneGIV. This is beneficial as the Angel Vault works best when there is a high percentage of oneGIV in the vault, but this percentage does not stay stable over time.
The ratio of GIV goes up when there is sell pressure in the market on the GIV token.
The ratio of oneGIV goes up when new Angel Vault LP positions are created.
The ratio of GIV/oneGIV stays the same when Angel Vault LP positions are removed.
We therefore want to encourage liquidity providers to periodically withdraw liquidity —  removing some % of GIV from the pool — and then re-add liquidity in oneGIV, increasing the total concentration of stables in the Angel Vault. This will help to support the strength of the Angel Vault buy-wall.

<img alt="rewards distribution schedule for jagged staircase" src={useBaseUrl('/img/content/giveconomy/jaggedStaircase.png')} />
