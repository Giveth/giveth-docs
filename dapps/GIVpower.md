---
id: givpower
title: GIVpower
slug: giveconomy/givpower
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../src/css/custom.css'


# GIVpower 

GIVpower was created to build a win-win relationship between projects & donors. GIV holders get GIVpower and earn a yield when they stake and - if they choose - lock GIV in the GIVfarm. They will eventually be able to use their GIVpower to “boost” projects on Giveth and help improve their ranking. Top ranked projects will get benefits on the platform. Initially their donors will get more GIVbacks, and eventually, they will get matching funds and other benefits.

The 1st phase of GIVpower, formerly known as GIVcuration, launched on (LAUNCH DATE) and adds a new layer of mechanics for staking GIV on the GIVfarm. 

<img alt='givpower staking card' width='30%' heigh='auto' src={useBaseUrl('img/givpowerCard.png')} />


In addition to the APR of GIV rewards and receiving [gGIV for Giveth governance](https://docs.giveth.io/giveconomy/givgarden), users will now also get **GIVpower**, a non-transferrable ERC-20 token. Staked GIV is matched 1:1 with GIVpower. 
i.e. If you stake 100 GIV you will get 100 GIVpower. 


Users will also be able to "Lock" their staked GIV on the GIVfarm to multiply their rewards APR and their GIVpower.



### Contracts

GIVpower - ADD CONTRACT  
Staking - ADD CONTRACT  
ANY OTHER CONTRACTS TO ADD?

## Staking & Locking

Users can now increase their rewards from staking GIV by locking them up for a period of time. Locking GIV means that it cannot be unstaked for a given amount of time, you can see the date a particular batch of GIV unlocks in the “Locked GIV Details” pop-up.

:::info
GIVpower is only available on Gnosis Chain and **GIV staking on Mainnet has ended**. You'll need to harvest, unstake and [bridge your GIV](https://omni.gnosischain.com/bridge) from Mainnet to Gnosis Chain to continue staking GIV and earning rewards.  
:::

GIV can be locked according to bi-weekly segments following the same schedule as GIVbacks, the minimum amount of time is 1 round (2 weeks), up to 26 rounds (1 year). 

The longer you lock your GIV the greater the multiplier will be for that specific amount of GIV locked. A bigger multiplier means you will get more GIV from the GIVfarm rewards (you get a higher APR) and you will also get more GIVpower.The amount of gGIV you receive will not increase.

<img alt='givpower multiplier' width="80%" heigh='auto' src={useBaseUrl('img/givpowerMultiplier.png')} />

You can lock up multiple batches of GIV tokens for different lengths of time, each batch might have a different APR, depending on how long you locked up your tokens. 

<img alt='givpower locked giv details' width="80%" heigh='auto' src={useBaseUrl('img/givpowerLockedDetails.png')} />


After the locking period for your GIV ends your GIV becomes unlocked, meaning it can be unstaked from the GIVfarm. Unstaking your GIV means you will lose any associated GIVpower and gGIV. You can get it back however by staking your GIV again.



### GIVfarm APR

When you lock up your GIV you will see an estimated APR for that amount of GIV being locked up. The actual APR will change based on the actual total amount of GIV staked in the farm across all users, and might be different for each batch of tokens locked. You will be able to see your actual APR for each batch by navigating to the "Locked GIV Details'' pop-up on the GIVpower staking card.

<img alt="locked givpower aprs" width="80%" heigh='auto' src={useBaseUrl('img/givpowerLockedapr.png')} />

On the GIVpower staking card the APR shown is the weighted average of all batches of your locked GIV. If you have no GIV locked in GIVpower you will be shown a range of the lowest and highest possible APRs at that moment.

<img alt='givpower staking card apr' width='30%' heigh='auto' src={useBaseUrl('img/givpowerCardapr.png')} />


#### Unlocking

Unlocking only happens at the beginning of a new round, so if you lock your GIV in the middle of a round, the unlock date will be calculated from when the next round begins.


For example:

> Mohammad locks up his staked GIV for 5 rounds (10 weeks), today is day 5 of round 25. His GIV would remain locked for all of round 25 (9 more days) until round 26 begins, PLUS 5 more rounds, meaning his GIV would finally unlock at the end of round 31.

When the duration of your locking period for each batch ends then that batch of GIV becomes unlocked, thus reducing your APR of that batch to the minimum APR for GIV staking. To increase your APR again you will need to lock up your GIV.

### The Multiplier
The basic formula for calculating the multiplier of GIV APR rewards and GIVpower is:

$$
\sqrt(1 + N)
$$
*N = number of rounds locked*

Let's look at an example to understand how this works: 

> Carlos decides to lock up 100 of his staked GIV for 10 rounds (20 weeks). His multiplier, rounded to 2 decimal places, is **3.32**.
> $$
> \sqrt(1 + 10) = 3.3166247903554 
> $$
> If at the time of locking the minimum GIV staking APR is 35% then his APR at the time of locking will be ~116%. The actual amount will be variable depending, as mentioned, on the total amount of GIV staked into the farm, but that same multiplier of 3.32 would be applied to the current staking APR for the GIV rewards that Carlos earns.
> 
>Carlos also would get a multiplier on his GIVpower. Assuming he had 500 GIV staked and chooses to lockup 100 of that 500 he would then have 732 GIVpower.
>$$
>(100 * 3.32) + 400 = 732
>$$

> After the 10 rounds that Carlos locked his GIV, his GIVpower will no longer have a multiplier, becoming reduced to only 500, matching 1:1 his staked GIV and his APR will go down to the minimum staking APR.

:::success
#### Streamed Rewards
As always, all GIVeconomy rewards are distributed according to the GIVstream. Check out the [**GIViverse Expansion**](https://giveth.io/givstream) to understand how much your claimable rewards will be.
:::

## Rewards Allocation
7 Million GIV was allocated to the first 6 months of GIVpower Rewards. Near the end of the first 6 months Giveth will assess the program's performance and allocate more rewards accordingly..

## Boosting (Phase 2)

As mentioned, users will now get GIVpower for staking their GIV in the GIVfarm. Coming closely on the heels of phase 1 will be the release of phase 2 which will allow users to boost projects with GIVpower.

Users will be able to stake their GIVpower on projects to boost them. Boosted projects will be ranked on the platform based on how much GIVpower has been staked on them and based on their ranking they will generate more GIVbacks to their donors. 

Top-ranked projects will also benefit from matching funds from the [GIVmatching Program](https://forum.giveth.io/t/givmatching-idea-generation-on-how-to-distribute-funds/346/21). 

Both Boosting and GIVmatching are yet to be released and we will update this documentation as more details become available.

:::info
#### Delegation
Giveth in the future will also be implementing the ability for users to delegate their GIVpower, letting trusted Givers curate projects on their behalf, stay tuned for more details!
:::
