---
id: givpower
title: GIVpower
slug: giveconomy/givpower
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../src/css/custom.css'
import ReactPlayer from 'react-player'
 

# GIVpower

GIVpower was created to build a win-win relationship between projects & donors. GIV holders get GIVpower and earn a yield when they stake and - if they choose - lock GIV in the GIVfarm. They will eventually be able to use their GIVpower to “boost”:rocket: projects on Giveth and help improve their ranking. Top ranked projects will get benefits on the platform. Initially their donors will get more GIVbacks, and eventually, they will get matching funds and other benefits.

The 1st phase of GIVpower launched on October 4th, 2022 adds a new layer of mechanics for staking GIV on the GIVfarm.

<img alt='givpower staking card' width='30%' heigh='auto' src={useBaseUrl('img/givpowerCard.png')} />


In addition to the APR of GIV rewards and receiving [gGIV for Giveth governance](https://docs.giveth.io/giveconomy/givgarden), users also get **GIVpower**, a non-transferrable ERC-20 token. Staked GIV is matched 1:1 with GIVpower.  
_(i.e. If you stake 100 GIV you will get 100 GIVpower.)_


Users will also be able to "Lock":lock: their staked GIV on the GIVfarm to multiply their rewards APR and their GIVpower.

### Contracts

- GIVpower(POW) Token - [0xD93d3bDBa18ebcB3317a57119ea44ed2Cf41C2F2](https://gnosisscan.io/address/0xD93d3bDBa18ebcB3317a57119ea44ed2Cf41C2F2)
- GIVpower Staking - [0x24F2d06446AF8D6E89fEbC205e7936a602a87b60](https://gnosisscan.io/address/0x24F2d06446AF8D6E89fEbC205e7936a602a87b60)

## Staking & Locking

Users can increase their rewards from staking GIV by locking them up for a period of time. Locking GIV means that it cannot be unstaked for a given amount of time, you can see the date a particular batch of GIV unlocks in the “Locked GIV Details” pop-up.

:::info
GIVpower is only available on Gnosis Chain If you have GIV on Mainnet and wish to earn rewards and participate with GIVpower, you can [bridge your GIV](https://omni.gnosischain.com/bridge) from Mainnet to Gnosis Chain.
:::

GIV can be locked according to bi-weekly segments following the same schedule as GIVbacks, the minimum amount of time is 1 round (2 weeks), and the maximum is 26 rounds (1 year).

The longer you lock your GIV the greater the multiplier will be for that specific amount of GIV locked. A bigger multiplier means you will get more GIV from the GIVfarm rewards (you get a higher APR) and you will also get more GIVpower. The amount of gGIV ([GIVgarden voting](./GIVgarden.md)) you receive will not increase.

<img alt='givpower multiplier' width="80%" heigh='auto' src={useBaseUrl('img/givpowerMultiplier.png')} />

You can lock up multiple batches of GIV tokens for different lengths of time, each batch might have a different APR, depending on how long you locked up your tokens.

<img alt='givpower locked giv details' width="80%" heigh='auto' src={useBaseUrl('img/givpowerLockedDetails.png')} />


After the locking period for your GIV ends your GIV becomes unlocked, meaning it can be unstaked from the GIVfarm. Unstaking your GIV means you will lose any associated GIVpower and gGIV. You can get it back however by staking your GIV again.

### GIVfarm APR

When you lock up your GIV you will see the current estimated APR for that amount of GIV being locked up. The APR may change based on the actual total amount of GIV staked in the farm across all users, and might be different for each batch of tokens locked. You will be able to see your actual APR for each batch by navigating to the "Locked GIV Details'' pop-up on the GIVpower staking card.

<img alt="locked givpower aprs" width="80%" heigh='auto' src={useBaseUrl('img/givpowerLockedapr.png')} />

On the GIVpower staking card the APR shown is the weighted average of all batches of your locked GIV. If you have no GIV locked in GIVpower you will be shown a range of the lowest and highest possible APRs at that moment.

<img alt='givpower staking card apr' width='30%' heigh='auto' src={useBaseUrl('img/givpowerCardapr.png')} />


#### Unlocking

Unlocking only happens at the beginning of a new round, so if you lock your GIV in the middle of a round, the unlock date will be calculated from when the next round begins.


For example:

> _Mohammad locks up his staked GIV for 5 rounds (10 weeks), today is day 5 of round 25. His GIV would remain locked for all of round 25 (9 more days) until round 26 begins, PLUS 5 more rounds, meaning his GIV would finally unlock at the end of round 31._

When the duration of your locking period for each batch ends then that batch of GIV becomes unlocked, thus reducing your APR of that batch to the minimum APR for GIV staking. To increase your APR again you will need to lock up your GIV.

### The Multiplier
The basic formula for calculating the multiplier of GIV APR rewards and GIVpower is:

$$
\sqrt(1 + N)
$$
*N = number of rounds locked*

Let's look at an example to understand how this works:

> _Carlos decides to lock up 100 of his staked GIV for 10 rounds (20 weeks). His multiplier, rounded to 2 decimal places, is **3.32**._
> $$
> \sqrt(1 + 10) = 3.3166247903554
> $$
> _If at the time of locking the minimum GIV staking APR is 35% then his APR at the time of locking will be ~116%. The actual amount will be variable depending, as mentioned, on the total amount of GIV staked into the farm, but that same multiplier of 3.32 would be applied to the current staking APR for the GIV rewards that Carlos earns._
>
>_Carlos also would get a multiplier on his GIVpower. Assuming he had 500 GIV staked and chooses to lockup 100 of that 500 he would then have 732 GIVpower._
>$$
>(100 * 3.32) + 400 = 732
>$$
>
> _After the 10 rounds that Carlos locked his GIV, his GIVpower will no longer have a multiplier, becoming reduced to only 500, matching 1:1 his staked GIV and his APR will go down to the minimum staking APR._


:::success
#### Streamed Rewards
As always, all GIVeconomy rewards are distributed according to the GIVstream. Check out the [**GIViverse Expansion**](https://giveth.io/givstream) to understand how much your claimable rewards will be.
:::


<img alt='GIVpower overview' src={useBaseUrl('img/GIVpowerOverview.png')} />

## Rewards Allocation
7 Million GIV was allocated to the first 6 months of GIVpower Rewards. Near the end of the first 6 months Giveth will assess the program's performance and allocate more rewards accordingly.

## Using your GIVpower

You can use your GIVpower to “boost” verified to projects on the platform. Verified projects are ranked on the platform based on how much GIVpower was allocated to them in the previous round. Projects benefit from a higher ranking by appearing higher on the list of [Giveth projects](https://giveth.io/projects) and also yield more GIVbacks to their donors.



Top-ranked projects will also eventually benefit from matching funds from the [GIVmatching Program](https://forum.giveth.io/t/givmatching-idea-generation-on-how-to-distribute-funds/346/21)(TBD).

### How to Boost

Boosting a project with your GIVpower is very easy. To get started, find the project you want to boost and visit the project's page. Once you're there then click `boost`.

<img alt='boosting on the project page' width="80%" height="auto" src={useBaseUrl('img/content/boostProjectPage.png')} />

:::caution
**You can only boost verified projects**, up to a maximum of 20 unique projects. If a project for any reason becomes unverified (e.g. fails to provide updates, or breaks our [Terms of Service](https://giveth.io/tos)) any of your GIVpower backing that project will become “inactive” (i.e. excluded from the calculations of rank & GIVbacks).  
:::
Select the percentage of your GIVpower you would like to boost with. If it's your first time boosting you will automatically boost with 100% of your GIVpower. Subsequent GIVpower boosts will proportionally reduce your GIVpower on your other boosted projects. More details below in [Managing your GIVpower](#managing-your-givpower).

<img alt='select boosting percentage' width="80%" height="auto" src={useBaseUrl('img/content/boostingProject.png')} />

Click `Confirm' and you should see confirmation that your GIVpower boost was successful! 
<img alt='boostConfirmation' width="80%" height="auto" src={useBaseUrl('img/content/boostConfirmation.png')} />

### Managing your GIVpower

You can manage your GIVpower allocations by navigating to 'My Account' then clicking on the 'My GIVpower' tab.

<img alt='my boosted projects page' src={useBaseUrl('img/content/boostedProjectsPage.png')} />

From this page you can edit your GIVpower allocations to each project you have boosted. To begin click `MODIFY`.

You can edit your percentage of GIVpower allocated to each project, when you modify one allocation all your other allocations will adjust relatively based on what their previous allocation was. If you don't want your allocation to change for a specific project while modifying your GIVpower on other projects you can click the :lock: icon. The sum of percentages allocated to each of your projects must equal 100%, so you can lock all but two of your allocations. 

You cannot have less than 1 project boosted at any given time. If for some reason your boosted project loses its verified status and all your GIVpower becomes inactive, you must boost another verified project before removing the inactive boosting from the unverified project.

Confirm your allocation changes by clicking on `APPLY CHANGES` then `SAVE CHANGES`.

Check out this video to see what modifying your GIVpower looks like in action:

<ReactPlayer playing loop={true} controls url='/video/editingAllocationsConverted.mp4' />




#### GIVpower Balance Changes



Your total GIVpower may change over time depending on 4 typical events that may occur, let’s cover them in detail:

1.**Staking more GIV.** If you stake more GIV on the [GIVpower farm](https://giveth.io/givfarm) you will receive more GIVpower at 1:1 ratio per GIV staked.
2.**Locking staked GIV.** If you lock up more of your staked GIV this will multiply your GIVpower by a factor depending on how long you lock it for. The longer you lock, the greater your multiplier, and the greater your GIVpower.
3.**GIV becomes unlocked.** Once the duration of any of your batches of locked GIV ends, you will lose the multiplier on your GIVpower that was applied from locking up that batch of GIV. Your total GIVpower balance will decrease. 
4. **Unstaking GIV.** If you unstake your GIV from the [GIVpower farm](https://giveth.io/givfarm) you will burn your GIVpower at a 1:1 ratio per GIV unstaked.

After boosting your first project with GIVpower you will always be allocating 100% of it to a project(s). By design, no matter if your total GIVpower goes up or down you will always be using your GIVpower to maximum effect and your allocations to projects will always remain at the relative percentages in which you allocated. 

## Project Rank

All verified projects that have been boosted with GIVpower will receive a GIVpower rank. The project with the most GIVpower will be ranked #1 on the platform. The “current rank” is updated at the start  of each new GIVbacks round, and is taken from the average amount of GIVpower staked behind a project across the previous round (two weeks).


:::note
 The “projected rank” is a projection of what the current rank may be in the next GIVbacks round, based on the GIVpower that is currently on that project. The projected rank gives you an idea of the impact your recent boost might have.
:::

<img alt='project ranking page' src={useBaseUrl('img/content/projectRanking.png')} />


A project's current rank in turn affects the percentage of GIVbacks new donors will receive from donating it. The top ranked project can yield up to 80% GIVbacks matching while a verified project with no rank (i.e. no GIVpower behind it) will yield 50%. To determine the GIVbacks factor for every project between the top and bottom ranks we take the spread, or the difference between the maximum and minimum [GIVbacks factor](./givbacks.md#rank--calculation), and divide that by the number of ranked projects we have at the end of every round, from this we can find the unique GIVbacks factor for every ranked project.

Every project from the bottom to the top rank will receive incrementally more GIVbacks matching. This means that, no matter what a project’s current rank is, boosting it with GIVpower can always make a difference.

 You can read more about [GIVbacks here](./givbacks.md).

<details>
<summary><b><i>See an Example GIVbacks Distribution</i></b></summary>

The year is 2049, it is GIVbacks round 1337...


We have **25 verified projects** that have been boosted with GIVpower. The **maximum GIVbacks factor is 80%, the minimum is 50%**, and the difference between the two is 30%. This would mean the project with the least amount of GIVpower, project ranked #25, would have a GIVbacks Factor of 50% and **every subsequently higher ranked project would have a 1.25% higher GIVbacks factor**.
 
The total GIV to distribute for the round is 1,000,000 and the price of GIV is $0.53.

For demonstration purposes we record that every single ranked project got a flat 100 USD value in donations. Based on this information and some given values for GIVpower staked to a given project our example distribution would look like this:
 
 | Project | GIVpower | Rank | Givbacks Factor | USD Value of Donation | Estimated GIVbacks |
| --- | --- | --- | --- | --- | --- |
| A | 4213.3329017797105 | 1 | 80% | 100 | 150.94339622641508 |
| B | 3511.1107514830924 | 2 | 78.75% | 100 | 148.5849056603774 |
| C | 2925.9256262359104 | 3 | 77.5% | 100 | 146.22641509433964 |
| D | 2438.271355196592 | 4 | 76.25% | 100 | 143.8679245283019 |
| E | 2031.8927959971602 | 5 | 75% | 100 | 141.5094339622642 |
| F | 1693.2439966643003 | 6 | 73.75% | 100 | 139.15094339622647 |
| G | 1411.036663886917 | 7 | 72.50% | 100 | 136.79245283018872 |
| H | 1175.8638865724308 | 8 | 71.25% | 100 | 134.43396226415098 |
| I | 979.8865721436924 | 9 | 70% | 100 | 132.0754716981133 |
| J | 816.572143453077 | 10 | 68.75% | 100 | 129.71698113207555 |
| K | 680.4767862108976 | 11 | 67.5% | 100 | 127.35849056603782 |
| L | 567.0639885090814 | 12 | 66.25% | 100 | 125.0000000000001 |
| M | 472.55332375756785 | 13 | 65% | 100 | 122.64150943396237 |
| N | 393.7944364646399 | 14 | 63.75% | 100 | 120.28301886792464 |
| O | 328.16203038719993 | 15 | 62.5% | 100 | 117.92452830188691 |
| P | 273.46835865599996 | 16 | 61.25% | 100 | 115.56603773584918 |
| Q | 227.89029887999996 | 17 | 60% | 100 | 113.20754716981146 |
| R | 189.90858239999997 | 18 | 58.75% | 100 | 110.84905660377373 |
| S | 158.257152 | 19 | 57.5% | 100 | 108.490566037736 |
| T | 131.88096 | 20 | 56.25% | 100 | 106.13207547169827 |
| U | 109.90079999999999 | 21 | 55% | 100 | 103.77358490566054 |
| V | 91.58399999999999 | 22 | 53.75% | 100 | 101.41509433962283 |
| W | 76.32 | 23 | 52.5% | 100 | 99.05660377358508 |
| X | 63.599999999999994 | 24 | 51.25% | 100 | 96.69811320754737 |
| Y | 53 | 25 | 50% | 100 | 94.33962264150965 |


</details>

**Project ranking will continue to have an important role on Giveth.io and will be incorporated into future roadmap features**, such as [GIVmatching](./givethmatchingpool.md)! In the future, Giveth may also incorporate other metrics or voting tools that will impact a project’s ranking.

[Check out this document](https://github.com/Giveth/impact-graph/blob/staging/docs/powerBoosting.md) to read more technical documentation of how GIVpower is calculated inside the Giveth database.

## Delegation
Giveth plans to implement the ability for users to delegate their GIVpower, letting trusted Givers curate projects on their behalf. You can apply now to become a [GIVpower delegate](https://forum.giveth.io/t/open-call-for-givpower-delegates/779)!
