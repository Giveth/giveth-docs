---
id: testingGIVeconomy
title: GIVeconomy Testing Guidelines
slug: dapps/testingGIVeconomy
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '../src/css/custom.css';


This is a guide for thorough user testing scenarios for the GIVeconomy DApp. Testing should be done on the staging server which can be found at https://staging.giv.giveth.io/.


## Requirements

* Please use a modern browser. If you encounter a bug, please try the same thing with another browser. Please make an issue in any case, but tell us if the issue might be browser specific
* Use issues in [GitHub](https://github.com/Giveth/GIVeconomy/issues) for reports and feedback.

## Use Cases

The following actions are defined as core functionality. If one of these steps is buggy, that represents a critical error.

### General

- Buttons on "Overview" page are responsive
- Tabs `GIVgarden`, `GIVfarm`, etc.. are responsive
- Navbar Header buttons are responsive
- Can successfully sign in on Navbar with Web Wallet (currently optimized for MetaMask)
- Footer links are working and link correctly


### GIVgarden
The GIVgarden staging deployment uses both Kovan Network and Gnosis Chain (formerly xDai Network). The token used for this deployment is *DRGIV3*.

:::info
DRGIV3 can be wrapped in the [DRGIV3 Garden](https://gardens-staging.1hive.org/#/xdai/garden/0x16388d99199a74810fc572049b3d4d657e7d5deb) to receive gDRGIV3. This is the same action as staking your DRGIV3 in the GIVgarden Staking in the GIVfarm on Gnosis Chain.
:::  

- Buttons linking to GIVgarden are working
- `LEARN MORE` links are working
- Wrap DRGIV3 on the GIVgarden - Check that your Token amount updates on the GIVgarden Staking in the GIVfarm on Gnosis Chain.
- Unwrap DRGIV3 on the GIVgarden - Check that your Token amount updates on the GIVgarden Staking in the GIVfarm on Gnosis Chain.


### GIVfarm
The GIVfarm staging deployment uses both Gnosis Chain and Kovan (Mainnet) Network. The token used for this deployment is *DRGIV3*:
- `0x83a8eea6427985C523a0c4d9d3E62C051B6580d3` on Gnosis Chain
- `0x29434a25abd94ae882aa883eea81585aaa5b078d` on Kovan

Test tokens used for providing liquidity on Gnosis Chain are as follow:
- Gnosis Chain TestHNY: `0x69F79C9eA174d4659B18c7993c7EFbBbB58cF068`
- Gnosis Chain TestWETH:`0x736a98655049433f79dCcF5e54b887E8890b63D1`  

On Kovan, regular Kovan ETH is used for providing liquidity and paying gas.
<Tabs className='tabs'>
  <TabItem value='gnosis' label='Gnosis Chain' default>
<h3>Gnosis Chain (formerly xDai Network) Test Cases</h3>
<ul>
<li>Gnosis Chain/Ethereum Network toggle works</li>
<li><code>?</code> hover tooltips work</li>
<li>Provide Liquidity with DRGIV3 & TestHoney on Honeyswap</li>
<li>Provide Liquidity with DRGIV3 and TestETH on Sushiswap</li>
<li>Can stake LP tokens in respective GIV/HNY or GIV/ETH farms - LP Token amounts to Stake/Unstake update on UI</li>
<li>Can stake DRGIV3 in GIVgarden Staking - Token amounts to Stake/Unstake update on UI</li>
<li>After staking DRGIV3, check wrapped token amount (gDRGIV3) amount updates on the <a href='https://gardens-staging.1hive.org/#/xdai/garden/0x16388d99199a74810fc572049b3d4d657e7d5deb' target='_blank' alt='DRGIV3 Garden'>DRGIV3 Garden</a></li>
<li>APR is displaying correctly (if it shows 0% that's bad)</li>
<li>Clicking `?` on APR row opens APR modal, links are functional in modal</li>
<li>Claimable amount updates over time</li>
<li>Streaming amount is shown (up to 2 decimal places)</li>
<li>If the amount is very small  <code>0.0001</code> is shown</li>
<li>"Your GIVfarm Rewards" (top right of page) displays correctly total pending rewards from all farms combined.</li>
<li>Harvesting from each farm - Transactions are successful and Claimable, Streaming, and GIV in wallet amounts update correctly</li>
<li>Can Unstake Tokens from all farms - Token amounts to Stake/Unstake update on UI</li>
<li>After unstaking DRGIV3 from the GIVgarden farm, check wrapped token amount (gDRGIV3) amount updates on the <a href='https://gardens-staging.1hive.org/#/xdai/garden/0x16388d99199a74810fc572049b3d4d657e7d5deb' target='_blank' alt='DRGIV3 Garden'>DRGIV3 Garden</a></li>
</ul>
  </TabItem>
  <TabItem value='kovan' label='Kovan Testnet' default>
<h3>Kovan (mainnet) Network Test Cases</h3>
<ul>
<li>Gnosis Chain/Ethereum Network toggle works</li>
<li><code>?</code> hover tooltips work</li>
<li>Mint Univ3 NFT with DRGIV3 & ETH on Uniswap (Kovan)</li>
<li>Provide Liquidity with DRGIV3 and WETH on Balancer (Kovan)</li>
<li>Can stake Univ3 NFT in GIV/ETH Uniswap farm - NFT amount updates below Stake/Unstake buttons</li>
<li>Can stake LP tokens in GIV/ETH Balancer farm - LP Token amounts to Stake/Unstake update on UI</li>
<li>Can stake DRGIV3 in Single Asset Staking - Token amounts to Stake/Unstake update on UI</li>
<li>APR is displaying correctly (if it shows 0% that's bad)</li>
<li>Clicking <code>?</code> on APR row opens APR modal, links are functional in modal</li>
<li>Claimable amount updates over time</li>
<li>Streaming amount is shown (up to 2 decimal places)</li>
<li>Your GIVfarm Rewards" (top right of page) displays correctly total pending rewards from all farms combined.</li>
<li>Harvesting from each farm - Transactions are successful and Claimable, Streaming, and GIV in wallet amounts update correctly</li>
<li>Can Unstake Tokens from all farms - Token amounts to Stake/Unstake update on UI</li>
</ul>
  </TabItem>
</Tabs>

## GIVbacks

To learn how to create a test GIVback distribution, contact a Developer or mitch (divine_comedian#5493) on Discord to help you.

You'll have to make a legitimate donation to a verified project on Giveth.io in order to test GIVbacks with your own Ethereum Address.

 Once you have executed a test distribution you can verify a few pieces of the `GIVbacks` page:

:::info
GIVbacks are only available on Gnosis Chain (formerly xDai Network).
:::

- Verify your GIVbacks Reward amount, checking that the calculations align with the donations you made to a verified project during your defined GIVbacks period.
- Your GIVbacks claimable amount should be a set amount (not increasing like GIVfarm rewards).
- Your GIVbacks streaming amount should be in the GIVstream history table at the time of GIVbacks distribution.
- Harvest GIVbacks is successful.
- `DONATE` and `VERIFY` buttons work.

## GIVstream
The GIVstream is available on both Gnosis Chain and Kovan. Make sure you have pending farming rewards on both networks to fully test the GIVstream.

-Gnosis Chain/Ethereum Network toggle works
- Buttons for `PROJECTS`, `PROPOSALS`, `OPPORTUNITIES` and `LEARN MORE` work.
- Can Harvest GIVstream rewards in the top right modal on both Gnosis Chain and Kovan.
- `?` image on GIVstream rewards modal shows pop-up when clicked, links and button within modal are functional
- '?' hover tooltips work
- `GIViverse Expansion` displays correctly (if it's 0% that's bad.)
- `Time remaining` shows correctly (GIVstream ends on December 23, 2026)
- GIVstream flowrate increases are shown in the history table. GIVfarm rewards should appear in the table after claiming from the GIVfarm. GIVbacks rewards should appear in the table at the moment of GIVbacks distribution.


---

Don’t forget to participate in the Platform Circle’s weekly meetings to stay in the loop. Read up on our [Development Contributor’s guide](./contributors) for all the information you need to become a regular contributor to Giveth Development & Testing.
