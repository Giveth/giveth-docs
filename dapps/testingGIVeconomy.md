---
id: testing GIVeconomy
title: GIVeconomy Testing Guidelines
slug: dapps/testingGIVeconomy
---

This is a guide for thorough user testing scenarios for the GIVeconomy DApp. Testing should de done on the staging server which can be found at https://liquidity-mining-dapp.vercel.app/.


## Requirements

* Please use a modern browser. If you encounter a bug, please try the same thing with another browser. Please make an issue in any case, but tell us if the issue might be browser specific
* Use issues in [GitHub](https://github.com/Giveth/GIVeconomy/issues) for reports and feedback.

## Use Cases

The following actions are defined as core functionality. If one of these steps is buggy, that represents a critical error.

### General

- Buttons on "Overview" page are responsive
- Tabs `GIVgarden`, `GIVfarm`, etc.. are responsive
- Navbar Header buttons are responsive
- Can successfully sign in on Navbar with Web Wallet
- Footer links are working and link correctly


### GIVgarden

:::info
DRGIV3 can be wrapped in the [DRGIV3 Garden](https://gardens-staging.1hive.org/#/xdai/garden/0x16388d99199a74810fc572049b3d4d657e7d5deb) to receive gDRGIV3. This is the same action as staking your DRGIV3 in the GIVgarden Staking in the GIVfarm on xDai.
:::  

- Buttons linking to GIVgarden are working
- `LEARN MORE` links are working
- Wrap DRGIV3 on the GIVgarden - Check that your Token amount updates on the GIVgarden Staking in the GIVfarm on xDai.
- Unwrap DRGIV3 on the GIVgarden - Check that your Token amount updates on the GIVgarden Staking in the GIVfarm on xDai.


### GIVfarm
The GIVfarm staging deployment uses both xDai and Kovan (mainnet) Networks. The token used for this deployment is *DRGIV3*
- `0x83a8eea6427985C523a0c4d9d3E62C051B6580d3` on xDai
- `0x29434a25abd94ae882aa883eea81585aaa5b078d` on Kovan

**xDai Network Test Cases**
-xDai/Ethereum Network toggle works
- '?' hover tooltips work
- Provide Liquidity with DRGIV3 & TestHoney on Honeyswap
- Provide Liquidity with DRGIV3 and TestETH on Sushiswap
- Can stake LP tokens in respective GIV/HNY or GIV/ETH farms - LP Token amounts to Stake/Unstake update on UI
- Can stake DRGIV3 in GIVgarden Staking - Token amounts to Stake/Unstake update on UI
- After staking DRGIV3, check wrapped token amount (gDRGIV3) amount updates on the [DRGIV3 Garden](https://gardens-staging.1hive.org/#/xdai/garden/0x16388d99199a74810fc572049b3d4d657e7d5deb)
- APR is displaying correctly (if it shows 0% that's bad)
- Clicking `?` on APR row opens APR modal, links are functional in modal
- Claimable amount updates over time
- Streaming amount is shown (up to 2 decimal places)
- "Your GIVfarm Rewards" (top right of page) displays correctly total pending rewards from all farms combined.
- Harvesting from each farm - Transactions are successful and Claimable, Streaming, and GIV in wallet amounts update correctly
- Can Unstake Tokens from all farms - Token amounts to Stake/Unstake update on UI
- After unstaking DRGIV3 from the GIVgarden farm, check wrapped token amount (gDRGIV3) amount updates on the [DRGIV3 Garden](https://gardens-staging.1hive.org/#/xdai/garden/0x16388d99199a74810fc572049b3d4d657e7d5deb)

**Kovan (mainnet) Network Test Cases**
- xDai/Ethereum Network toggle works
- '?' hover tooltips work
- Mint Univ3 NFT with DRGIV3 & ETH on Uniswap (Kovan)
- Provide Liquidity with DRGIV3 and WETH on Balancer (Kovan)
- Can stake Univ3 NFT in GIV/ETH Uniswap farm - NFT amount updates below Stake/Unstake buttons
- Can stake LP tokens in GIV/ETH Balancer farm - LP Token amounts to Stake/Unstake update on UI
- Can stake DRGIV3 in Single Asset Staking - Token amounts to Stake/Unstake update on UI
- APR is displaying correctly (if it shows 0% that's bad)
- Clicking `?` on APR row opens APR modal, links are functional in modal
- Claimable amount updates over time
- Streaming amount is shown (up to 2 decimal places)
- "Your GIVfarm Rewards" (top right of page) displays correctly total pending rewards from all farms combined.
- Harvesting from each farm - Transactions are successful and Claimable, Streaming, and GIV in wallet amounts update correctly
- Can Unstake Tokens from all farms - Token amounts to Stake/Unstake update on UI


## GIVbacks

To learn how to create a test GIVback distribution, refer to this guide **(WIP)**. Contact a Developer or mitch(divine_comedian#5493) on Discord to help you set up a test GIVbacks distribution.

You'll have to make a legitimate donation to a verified project on Giveth.io in order to test GIVbacks with your own Ethereum Address.

 Once you have executed a test distribution you can verify a few pieces of the `GIVbacks` tab:

:::info
GIVbacks are only available on xDai Network
:::

- Verify your GIVbacks Reward amount, checking that the calculations align with the donations you made to a verified project during your defined GIVbacks period.
- Harvest GIVbacks is successful
- `DONATE` and `VERIFY` buttons work

## GIVstream
The GIVstream is avilable on both xDai and Kovan. Make sure you have pending farming rewards on both networks to fully test the GIVstream.

- xDai/Ethereum Network toggle works
- Buttons for `PROJECTS`, `PROPOSALS`, `OPPORTUNITIES` and `LEARN MORE` work.
- Can Harvest GIVstream rewards in the top right modal on both xDai and Kovan.
- `?` image on GIVstream rewards modal shows pop-up when clicked, links and button within modal are functional
- '?' hover tooltips work
- `GIViverse Expansion` displays correctly (if it's 0% that's bad.)
- `Time remaining` shows correctly (GIVstream ends on December 23, 2026)
