---
id: givgarden
title: GIVgarden
slug: giveconomy/givgarden
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../src/css/custom.css'


Giveth has chosen the Gardens DAO governance platform developed by [1hive](_https://forum.1hive.org/t/welcome-to-1hive/7) to allow GIV token holders to manage the DAO configurations and allocate funds to projects that are aligned with its [mission, vision and values](/whatisgiveth/). Our unique Giveth Garden has been aptly named “the GIVgarden” and is deployed on Gnosis Chain (formerly xDai Network). The main tools used for governance in the GIVgarden are Conviction Voting and Tao Voting.  

The GIVgarden uses the [Giveth Community Covenant](/whatisgiveth/covenant) as a decentralized social contract that outlines standards for on-chain and off-chain behaviour.   

You can visit the [**GIVgarden** here](https://gardens.1hive.org/#/xdai/garden/0xb25f0ee2d26461e2b5b3d3ddafe197a0da677b98).  


## Conviction Voting
[**Conviction Voting**](https://forum.giveth.io/t/conviction-voting/154) allows requests for funding from the DAO and to suggest improvements, features or unique actions to Giveth and its platforms. Gardens highlights the fundamental concept of Conviction Voting in their documentation:


> _Conviction voting is the heart of a Garden._ It allows folks to signal their preferences continuously rather than forcing them to “make a decision.” From the perspective of a community member, this is as easy as just showing up and supporting the things you care about.


The unique feature of Conviction Voting is that, instead of voting yes or no on proposals, you stake GIV behind proposals that align with your values. The more GIV you stake and the longer you stake your GIV the more “Conviction” (voting power) you accrue for that proposal.  If the collective Conviction from all proposal participants reaches a certain threshold then the proposal passes.


## Tao Voting

[**Tao Voting**](https://forum.giveth.io/t/tao-voting-explained/155) is a YES/NO decision making tool, with the option of delegation, that is used in the GIVgarden to make important, non-financial decisions for the DAO. Tao Voting is used for proposals on updating DAO parameters, fixing bugs, adding new features to the DAO and/or for emergency situations such as an attack to the DAO treasury.

Tao Voting was named inspired by [the Tao or “the way”](https://en.wikipedia.org/wiki/Tao) which can “be roughly thought of as the flow of the Universe, or as some essence or pattern behind the natural world that keeps the Universe (the Giveth DAO) balanced and ordered”. Tao Voting includes features like [Delegation and Quiet Ending](https://1hive.gitbook.io/gardens/on-chain-governance/garden-framework/decision-voting#delegation) to ensure that votes that pass can reasonably reflect the true opinion of DAO members and are not passed with a lot of contention.

When you delegate your voting power to a “delegate”, you are empowering them to vote on your behalf on decision votes in the GIVgarden with Tao Voting. Delegates have a period of time - the Delegated Voting period - to submit their votes. The Vote Duration is longer than the Delegate Voting power, and within that difference of time you have the opportunity to review and, if desired, change the way your delegate has voted for you. You can delagate your voting power to a delegate in the GIVgarden.




<img alt="delegation UI" src={useBaseUrl('img/content/giveconomy/delegation1.png')} />




<img alt='delegation UI' src={useBaseUrl('img/content/giveconomy/delegation2.png')} />


## Wrapping GIV & Earning Rewards
In order to vote on proposals in the GIVgarden you’ll have to wrap your tokens. This exchanges your GIV tokens for GIVgarden-compatible **gGIV tokens** that can be staked on proposals. You earn rewards for all wrapped GIV, regardless of whether or not you use your wrapped GIV (gGIV) to vote on proposals. You can choose to wrap your GIV and get gGIV [in the GIVgarden](https://1hive.gitbook.io/gardens/actions-for-community-members/getting-started/wrap-your-tokens), or via the GIVfarm by participating in the single-asset GIV staking pool on xDai. When you unwrap your GIV in the GIVgarden or unstake your GIV from the single-asset GIVfarm your gGIV tokens will be burned, removing your voting power, and your GIV tokens will be returned to you.

You can see the APR for wrapped GIV on our [**GIVfarm page**](https://giveth.io/givfarm). The more GIV you stake, the more rewards you get, and the higher your flowrate will be in the GIVstream. Being an active community member is rewarding in more ways than one!



## Proposals

In the GIVgarden, there are three types of proposals that can be made: **Funding, Suggestion,** and **Decision.**



* A **Funding** proposal is a request for funds from the GIVgarden common pool. The more funds being requested, the more Conviction that is required to pass the proposal. Conviction Voting is used to determine the outcome of funding proposals.
* A **Suggestion** proposal is a broad category for any platform feature, or community action you would like to make happen that does not request funds from the treasury. Conviction Voting is used to determine the outcome of Suggestion proposals.
* A **Decision** proposal is used when updating GIVgardenparameters or fundamentally changing the GIVgarden in some way is necessary. These proposals require some degree of community consensus around discrete, binary choice decisions and therefore are expected to be used much less frequently. Tao Voting is used to determine the outcome of Decision proposals.  

To learn more about how the GIVgarden works, visit the Gardens overview in the [1hive documentation](https://1hive.gitbook.io/gardens/).  


## Covenant
In order to participate in the GIVgarden you’ll first need to sign the [Giveth Covenant](/whatisgiveth/covenant). This is our decentralized social contract which outlines standards for on-chain and off-chain community behaviour. In the event that a proposal is challenged, the covenant shall be used as a baseline for what defines acceptable and not acceptable proposals within that GIVgarden.


## Disputability

In order to create or challenge a proposal, you must deposit GIV into the GIVgarden. When you make a proposal, an amount of GIV from here will be used as the [Proposal Deposit](https://1hive.gitbook.io/gardens/actions-for-community-members/proposals/creating-a-new-proposal#what-is-the-proposal-deposit) (aka “Action Deposit”) and will be held as collateral if your proposal is challenged (i.e., accused of not being in agreement with the Covenant). Similarly, if you wish to challenge a proposal, an amount of GIV from the initial deposit will be used as the [Challenge Deposit](https://1hive.gitbook.io/gardens/actions-for-community-members/proposals/challenge-a-proposal#what-is-the-challenge-deposit), i.e., collateral in order to make a challenge.   

When a proposal is challenged in the GIVgarden, the proposal creator has a set amount of time, the [Settlement Period](https://1hive.gitbook.io/gardens/actions-for-community-members/disputes/settle-a-proposal#what-is-the-settlement-period) to dispute the challenge by paying dispute fees and raising the issue to [Celeste](https://1hive.gitbook.io/celeste/), or to resolve the challenge by paying the [Settlement Offer](https://1hive.gitbook.io/gardens/actions-for-community-members/disputes/settle-a-proposal#what-is-the-settlement-offer) and taking down their proposal. If they do not take action before the end of the Settlement Period, the proposal is automatically considered “settled”, is taken down, and the proposer gets back the Proposal Deposit minus the Settlement Offer.

[**Celeste**](https://1hive.gitbook.io/celeste/), also built by 1Hive, is a decentralized court for DAOs which acts as the final backstop in the GIVgarden. Celeste allows for challenged and disputed proposals to be flagged and brought to the consideration of  a randomized group of jurors, ensuring that contentious proposals are not able to be passed without due process.  

## Proposal Lifecycle

If you feel like you have a good grasp on Giveth and [how we work](/whatisgiveth/) and have something great to propose to the community, there are some processes you should respect in order to have the best possible chance of success.



1. **Think of something awesome.** Come up with an idea that you think would be valuable for the Giveth’s Community or Platform. If your idea requires funding, consider how much and how you can justify its costs.
2. **Create a forum post.** Post your idea in the [**Giveth Forum**](https://forum.giveth.io/) in the appropriate category and outline your proposal in detail. This allows the community to review and assess the impacts of your proposal. Proposals created in the GIVgarden must include a link to a Giveth forum post explaining its details.
3. **Use Advice Process.** Following your forum post the community will give you feedback and express any concerns. [The Advice Process](/whatisgiveth/adviceProcess) will allow you to modify your proposal or address any concerns ensuring it is the best version possible and achieves maximum consensus.
4. **Sign the Giveth Covenant. Signing that you agree to the [Giveth Covenant](/whatisgiveth/covenant) in the GIVgardens will permit you to begin using the governance tools it provides.
5. **Deposit GIV to the GIVgarden**. Every proposal requires a Proposal Deposit, i.e., a specified amount of GIV that you post as collateral. This discourages spamming proposals and can also be forfeited in the case of losing or conceding to a challenged proposal.
6. **Submit your Proposal. **Draft and submit your proposal, along with the Proposal Deposit, providing the required information in the GIVgarden.
7. **Remind the Community to Vote!** Now the community will deliberate on your final proposal, choosing whether or not to stake their GIV behind it. If it receives enough support, the proposal will pass.
8. **Celebration and Delivery! **If your proposal passes on the GIVgarden, give yourself a pat on the back - that is no easy feat! Once the proposal has been finalized and executed make sure to deliver on any promised actions you have outlined.

## GIVgarden Parameters (Advanced)  

The current parameters in our GIVgarden are as follow:

### Conviction Voting (Funding Requests and Suggestions)


<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Value</strong>
   </td>
   <td><strong>Metric</strong>
   </td>
  </tr>
  <tr>
   <td>Conviction Growth
   </td>
   <td><p class="rightAlign">
30</p>

   </td>
   <td>days
   </td>
  </tr>
  <tr>
   <td>Spending Limit
   </td>
   <td><p class="rightAlign">
2.50</p>

   </td>
   <td>%
   </td>
  </tr>
  <tr>
   <td>Min Conviction
   </td>
   <td><p class="rightAlign">
5</p>

   </td>
   <td>%
   </td>
  </tr>
  <tr>
   <td>Minimum Active Stake
   </td>
   <td><p class="rightAlign">
2</p>

   </td>
   <td>%
   </td>
  </tr>
</table>


### Tao Voting (Decision Votes)


<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Value</strong>
   </td>
   <td><strong>Metric</strong>
   </td>
  </tr>
  <tr>
   <td>Support Required
   </td>
   <td><p class="rightAlign">
90</p>

   </td>
   <td>%
   </td>
  </tr>
  <tr>
   <td>Min Approval
   </td>
   <td><p class="rightAlign">
10</p>

   </td>
   <td>%
   </td>
  </tr>
  <tr>
   <td>Vote Duration
   </td>
   <td><p class="rightAlign">
1.5</p>

   </td>
   <td>days
   </td>
  </tr>
  <tr>
   <td>Execution delay
   </td>
   <td><p class="rightAlign">
0.5</p>

   </td>
   <td>days
   </td>
  </tr>
  <tr>
   <td>Quiet Ending Period
   </td>
   <td><p class="rightAlign">
0.5</p>

   </td>
   <td>days
   </td>
  </tr>
  <tr>
   <td>Quiet Ending extension
   </td>
   <td><p class="rightAlign">
2</p>

   </td>
   <td>days
   </td>
  </tr>
  <tr>
   <td>Delegated Voting Period
   </td>
   <td><p class="rightAlign">
1</p>

   </td>
   <td>days
   </td>
  </tr>
</table>


### Proposal Settings


<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Value</strong>
   </td>
   <td><strong>Metric</strong>
   </td>
  </tr>
  <tr>
   <td>Action Deposit
   </td>
   <td><p class="rightAlign">
5000</p>

   </td>
   <td>GIV
   </td>
  </tr>
  <tr>
   <td>Challenge Deposit
   </td>
   <td><p class="rightAlign">
10000</p>

   </td>
   <td>GIV
   </td>
  </tr>
  <tr>
   <td>Settlement Period
   </td>
   <td><p class="rightAlign">
7</p>

   </td>
   <td>days
   </td>
  </tr>
</table>
