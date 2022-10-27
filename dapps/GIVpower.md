---
id: givpower
title: GIVpower
slug: giveconomy/givpower
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../src/css/custom.css'
import ReactPlayer from 'react-player'


# GIVpower 

GIVpower was created to build a win-win relationship between projects & donors. GIV holders get GIVpower and earn a yield when they stake and - if they choose - lock GIV in the GIVfarm. They will eventually be able to use their GIVpower to “boost” projects on Giveth and help improve their ranking. Top ranked projects will get benefits on the platform. Initially their donors will get more GIVbacks, and eventually, they will get matching funds and other benefits.

The 1st phase of GIVpower, formerly known as GIVcuration, launched on October 4th, 2022 and adds a new layer of mechanics for staking GIV on the GIVfarm. 

<img alt='givpower staking card' width='30%' heigh='auto' src={useBaseUrl('img/givpowerCard.png')} />


In addition to the APR of GIV rewards and receiving [gGIV for Giveth governance](https://docs.giveth.io/giveconomy/givgarden), users will now also get **GIVpower**, a non-transferrable ERC-20 token. Staked GIV is matched 1:1 with GIVpower. 
i.e. If you stake 100 GIV you will get 100 GIVpower. 


Users will also be able to "Lock" their staked GIV on the GIVfarm to multiply their rewards APR and their GIVpower.

### Contracts

- GIVpower(POW) Token - 0xD93d3bDBa18ebcB3317a57119ea44ed2Cf41C2F2 
- GIVpower Staking - 0xD93d3bDBa18ebcB3317a57119ea44ed2Cf41C2F2 

## Staking & Locking

Users can now increase their rewards from staking GIV by locking them up for a period of time. Locking GIV means that it cannot be unstaked for a given amount of time, you can see the date a particular batch of GIV unlocks in the “Locked GIV Details” pop-up.

:::info
GIVpower is only available on Gnosis Chain and **GIV staking on Mainnet has ended**. You'll need to harvest, unstake and [bridge your GIV](https://omni.gnosischain.com/bridge) from Mainnet to Gnosis Chain to continue staking GIV and earning rewards.  
:::

GIV can be locked according to bi-weekly segments following the same schedule as GIVbacks, the minimum amount of time is 1 round (2 weeks), up to 26 rounds (1 year). 

The longer you lock your GIV the greater the multiplier will be for that specific amount of GIV locked. A bigger multiplier means you will get more GIV from the GIVfarm rewards (you get a higher APR) and you will also get more GIVpower.The amount of gGIV ([GIVgarden voting](./GIVgarden.md)) you receive will not increase.

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


<img alt='GIVpower overview' src={useBaseUrl('img/GIVpowerOverview.png')} />

## Rewards Allocation
7 Million GIV was allocated to the first 6 months of GIVpower Rewards. Near the end of the first 6 months Giveth will assess the program's performance and allocate more rewards accordingly..

## Using your GIVpower

You can "Boost" verified projects by staking your GIVpower behind them. Boosted projects will be ranked on the platform based on how much GIVpower has been staked on them and based on their ranking they will generate more GIVbacks to their donors. 

Top-ranked projects will also eventually benefit from matching funds from the [GIVmatching Program](https://forum.giveth.io/t/givmatching-idea-generation-on-how-to-distribute-funds/346/21)(TBD). 

### How to Boost

Boosting a project with your GIVpower is very easy. To get started find the project you want to boost and visit the project's page, once you're there then click `Boost`.

<img alt='boosting on the project page' width="80%" height="auto" src={useBaseUrl('img/content/boostProjectPage.png')} />

:::caution
You can only Boost verified projects, up to a maximum of 20 unique projects. If a project for any reason becomes unverified (e.g. Fails to provide updates, breaks Terms of Service) any of your GIVpower staked on that the project will be removed and propotionally added to your other boosted projects. If you only boosted 1 project and it becomes unverified then your GIVpower becomes inactive, you will need to re-allocate to another project.
:::
Select the percentage of your GIVpower you would like to boost with. If it's your first time boosting you will automatically boost with 100% of your GIVpower. Subsequent GIVpower boosts after your first will dynamically reduce your GIVpower on your other boosted projects. More details below in 'Managing your GIVpower'.

<img alt='select boosting percentage' width="80%" height="auto" src={useBaseUrl('img/content/boostingProject.png')} />

Click `Confirm' and you should see confirmation that your GIVpower boost was successful! Please be aware it can take up to 5 minutes for your GIVpower boost to show up on the project page.

<img alt='boostConfirmation' width="80%" height="auto" src={useBaseUrl('img/content/boostConfirmation.png')} />

### Managing your GIVpower

You can manage your GIVpower allocations by navigating to 'My Account' then clicking on the 'Boosted Projects' tab.

<img alt='my boosted projects page' src={useBaseUrl('img/content/boostedProjectsPage.png')} />

From this page you can edit your GIVpower allocations to each project you have boosted. To begin click `EDIT BOOSTING`.

You can edit your percentage of GIVpower allocationed to each project, when you modify one allocation all your other allocations will adjust relatively based on how great their previous allocation was. If you don't want your allocation to change for a specific project while modifying your GIVpower on other projects you can click the :lock: icon.

Confirm your allocation changes by clicking on `APPLY CHANGES` then `SAVE CHANGES`. 

Check out this video to see what modifying your GIVpower looks like in action:

<ReactPlayer playing loop={true} controls url='/video/editingAllocationsConverted.mp4' />

#### GIVpower Loss
Your total GIVpower may change over time depending on if you locked up any GIV in the [GIVpower farm](https://giveth.io/givfarm). When your round lockup duration expires then the multiplier bonus to your GIVpower is removed, this will cause a decrease to your total GIVpower and thus a proportional decrease to your GIVpower allocations. The percentages will not change, but the actual GIVpower amount will. These changes, if any, will only happen at the end of each bi-weekly GIVbacks round.

You can increase your GIVpower by locking up your GIV again or [staking more GIV into the farm](https://giveth.io/givfarm).

## Project Ranking

All projects that have been boosted with GIVpower will receive a GIVpower ranking. The project with the most GIVpower will be ranked #1 on the platform. Ranking is calculated at the end of each GIVbacks round and is taken from the average amount of GIVpower staked on a project across the previous two weeks.

A project's rank in turn will affect the percentage of GIVbacks donors will receive from donating to that project. The top ranked project can yield up to 80% GIVbacks matching while the bottom ranked project will yield 50%. To determine the GIVbacks factor for every project between the top and bottom ranks we take the spread, or the difference between the maximum and minimum GIVbacks factor, and divide that by the number of ranked projects we have at the end of every round, from this we can find the unique GIVbacks factor for every ranked project. Every project from the bottom up to the top rank will receive incrementally more GIVbacks matching.

 You can read more about [GIVbacks here](./givbacks.md).

<details>
<summary><b><i>See an Example GIVbacks Distribution</i></b></summary>

The year is 2049, it is GIVbacks round 1337...


 We have **25 total projects** on the platform that have been boosted with GIVpower. The **maximum GIVbacks factor is 80%, the minimum is 50**%**, The difference between the two is 30%. This would mean the project with the least amount of GIVpower, project ranked #25, would have a GIVbacks Factor of 50% and **every subsequently higher ranked project would receive 1.25% more matching**.
 
The total GIV to distribute for the round is 1,000,000 and the price of GIV is $0.53. 

 Based on this information and some given values for GIVpower staked and the donations made to a given project our example distribution would look like this:
 
 | Project | GIVpower | Rank | Givbacks Factor | USD Value of Donation | Estimated GIVbacks |
| --- | --- | --- | --- | --- | --- |
| A | 3736.351 | 1 | 80% | 906 | 1367.5471698113208 |
| B | 3113.62 | 2 | 78.75% | 997 | 1481.3915094339623 |
| C | 2594.68 | 3 | 77.50% | 951 | 1390.6132075471698 |
| D | 2162.240 | 4 | 76.25% | 1401 | 2015.5896226415098 |
| E | 1801.8671 | 5 | 75.00% | 1450 | 2051.8867924528304 |
| F | 1501.5559 | 6 | 73.75% | 2241 | 3118.372641509435 |
| G | 1251.296 | 7 | 72.50% | 0 | 0 |
| H | 1042.747 | 8 | 71.25% | 1213 | 1630.6839622641517 |
| I | 868.9560 | 9 | 70.00% | 2363 | 3120.943396226417 |
| J | 724.130 | 10 | 68.75% | 1009 | 1308.8443396226423 |
| K | 603.44 | 11 | 67.50% | 1795 | 2286.084905660379 |
| L | 502.86 | 12 | 66.25% | 2069 | 2586.250000000002 |
| M | 419.05 | 13 | 65.00% | 1990 | 2440.5660377358513 |
| N | 349.21 | 14 | 63.75% | 529 | 636.2971698113214 |
| O | 291.011 | 15 | 62.50% | 747 | 880.8962264150953 |
| P | 242.509 | 16 | 61.25% | 0 | 0 |
| Q | 202.091 | 17 | 60.00% | 599 | 678.1132075471706 |
| R | 168.409 | 18 | 58.75% | 2289 | 2537.3349056603806 |
| S | 140.341 | 19 | 57.50% | 1880 | 2039.6226415094368 |
| T | 116.951 | 20 | 56.25% | 1827 | 1939.0330188679275 |
| U | 97.4592 | 21 | 55% | 0 | 0 |
| V | 81.216 | 22 | 53.75% | 1646 | 1669.2924528301917 |
| W | 67.679 | 23 | 52.50% | 560 | 554.7169811320765 |
| X | 56.4 | 24 | 51.25% | 1976 | 1910.754716981136 |
| Y | 47 | 25 | 50% | 658 | 620.7547169811335 |

</details>

Project ranking will continue to have an important role on Giveth.io and will be incorporated into future roadmap features, such as [GIVmatching](./givethmatchingpool.md)! 

## Delegation
Giveth in the future will also be implementing the ability for users to delegate their GIVpower, letting trusted Givers curate projects on their behalf. You can apply now to become a [GIVpower delegate](https://forum.giveth.io/t/open-call-for-givpower-delegates/779)!


