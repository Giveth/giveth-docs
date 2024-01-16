---
id: quadraticfunding
title: Quadratic Funding
slug: /quadraticfunding
---
import useBaseUrl from '@docusaurus/useBaseUrl'




# Quadratic Funding

## What is Quadratic Funding?
Quadratic Funding (QF) is a funding mechanism designed to distribute a matching pool among multiple projects based on the number of unique contributors. In quadratic funding, matched amounts are calculated by using the quadratic formula, where "the amount received by the project is proportional to the square of the sum of the square roots of contributions received". [(Reference: Liberal Radicalism: A Flexible Design for Philanthropic Matching Funds)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3243656)

With Quadratic Funding, the matching rate decreases as the size of the contribution increases. The goal is to bring the most funding to projects that have the largest community supporting them, rather than supporting only projects with a few large donations from a small number of people. This helps to create a more democratic and inclusive system for funding projects.

For more information, details, and even a helpful simulator, visit [“WTF is QF?”](https://wtfisqf.com/?grant=&grant=&grant=&grant=&match=1000) or check out [this explanation by Finematics.](https://finematics.com/quadratic-funding-explained/)

## Giveth Quadratic Funding

Giveth has integrated quadratic funding into [our existing donation platform](https://giveth.io/) to help drive more donations to amazing public goods projects!

QF on Giveth operates in rounds. Only donations made during an active QF round are eligible to be matched, any donations made before or after the round dates will not be matched. Rounds can vary in length but generally will last between 1-3 weeks. Other restrictions may apply such as [project eligibility](#project-eligibility), fraud detection and the donor’s Gitcoin passport score, more on that below in this article.

Our quadratic funding rounds may allow for donations on any of our [supported chains](https://docs.giveth.io/dapps/projectdonating/#swictching-networks), or may be restricted to a specific chain or network. Projects participating in active rounds are sorted on the [QF project page](https://giveth.io/qf) by default according to [GIVpower](https://docs.giveth.io/giveconomy/givpower), and if the projects are not verified, according to amount donated or number of likes. Donations to [verified projects](https://docs.giveth.io/dapps/projectVerification) during QF rounds are also eligible for [GIVbacks](https://docs.giveth.io/giveconomy/givbacks). However, note that projects do not need to be verified in order to participate in every QF round.

Please refer to the Giveth [notion](https://giveth.notion.site/Giveth-Quadratic-Funding-3478aa27eb094a699f9ddd6a8b611027) for specific information pertaining to specific rounds.

## Fraud protection

### Gitcoin Passport

Gitcoin Passport is an identity verification application that enables anyone to collect [verifiable credentials](https://decentralized-id.com/web-standards/w3c/wg/vc/verifiable-credentials/) that prove your identity and trustworthiness without exposing personally identifying information.

Anyone can donate on Giveth, but in order for a donation to be eligible to be matched during quadratic funding rounds, the donor must verify their [Gitcoin Passport](https://passport.gitcoin.co/) **before the end of the round**. They don’t need to verify their passport right away, but they must have a Passport score above the [specified threshold](https://giveth.io/passport) before the round ends in order for any of their in-round donations to count towards the matching. 

You can learn more about Gitcoin Passport in their [documentation.](https://docs.passport.gitcoin.co/)

<img alt='passport' src={useBaseUrl('img/passport.png')} />


### Trustalabs

For post-round sybil analysis, we will be supported by our partners [Trustalabs](https://www.trustalabs.ai/) who have synthesized multiple algorithmic sybil-detection approaches into one single tool.

## Quadratic Force

Quadratic Force is the name given to the launch partners that make Giveth quadratic funding rounds possible by donating to the matching pool.

Anyone can become a member of the [Quadratic Force](https://giveth.io/QuadraticForce) by donating a set amount to [matching pool verified project](https://giveth.io/project/Giveth-Matching-Pool-0). Members of the Quadratic Force benefit from brand exposure, project nominations, GIVbacks and more! To learn more about the Quadratic Force, reach out to our fundraising team by sending a message in our [Discord support channel](https://discord.gg/gsZDyx3Mdc).

To remain sustainable Giveth will use 10% of the pool funds for the operation and management of the round, and 5% will be given to our partner [Trustalabs](https://www.trustalabs.ai/) for sybil detection.

## Disqualifying factors for Giveth QF

These actions can compromise your eligibility for a matching funds:

- **Offering quid-pro-quo for a contribution:** It is not allowed to give/offer goods or services to donors in exchange for their donation(s). This include raffles, implying that donors will get airdrops, or many other offers that attempt to “game the system”.
- **Creating a new identity to contribute:** This includes creating multiple wallets for one user, or pretending to be multiple unique donors.
- **Recirculating funds:** Only “first-touch” donations are eligible to be included in matching rounds.
- **The funds are not being used for what is expressed in the project page:** QF-eligible projects are responsible for keeping their projects up-to-date with information on how the funds are being used without misrepresentations.
- **Unscrupulous or fraudulent activity.** This can be the use of violence, breaking laws, or other behaviour that does not uphold the values of the Giveth community.
- **Attempting to falsify a contribution**

:::info
🚨 **These actions can lead to a reduction or nullification of your matching funds.**
:::

The above list is not exhaustive and should be taken as just **some** of the possible unscrupulous activities that could lead to a reduction or nullification of matching. Please use your best judgement, and if you are uncertain if something will be considered “allowed” or not, reach out in our [discord support channel.](https://discord.giveth.io/)

## Estimated matching

Estimated matching amounts are calculated by using the [quadratic funding formula](https://www.wtfisqf.com/?grant=&grant=&grant=&grant=&match=1000), to understand how this formula works, check out this infographic below:

<img id="qfinfographic" alt='infographic' width='50%' heigh='auto' src={useBaseUrl('img/qfinfographic.png')} />

##### *Source: https://blog.woodstockfund.com/2021/05/20/quadratic-funding-a-better-way-to-fund-public-goods/*


The estimated matching calculations do not consider the donors' [Passport scores](#gitcoin-passport), or post-round fraud analysis. They are rough estimations calculated by assuming that the entire matching pool would be distributed according to the donations made in the round to date. This means that the estimated matching amounts are more accurate towards the end of the round, when there is more donation data being used in the calculations. 

The maximum amount that any one project will be able to receive depends on the set matching cap for the corresponding round, and is a set % of the total matching funds.


During an active round, the estimated matching will be shown on several pages:

<img id="projectcard" alt='estimatedmatchingprojectcard' width='30%' heigh='auto' src={useBaseUrl('img/estimatedmatchingprojectcard.png')} />

- On the [Projects page](https://giveth.io/qf), the "project card" corresponding to projects in an active QF shows the amount raised during the round, the number of donors so far that round, and the estimated matching. The estimated matching on the project card is determined using the total amount of matching funds, and the total contributions to each QF project to date in that round. This calculation assumes that every unique address is a unique donor, which may lead to discrepancies in estimated matching and actual matching received by the project post-round.


<img id="matchingtable" alt='estimatedmatchingcard' width='30%' heigh='auto' src={useBaseUrl('img/estimatedmatchingcard.png')} />

- On each QF eligible project page, you will see the current estimated matching for that project. This number is the same as the estimated matching on the project card [(above)](#projectcard). 

- The project page also has a "contribution matching table" that shows an estimated matching amount from a new donation of a given amount. These values are calculated by assuming that a new donation of *x* (in the column on the left) is made to this project in the round. The estimated matching amount (on the right) is calculated by determining the total matching amount that would be allocated to that project if donation *x* were included, and then determining what amount of the total matching to that project would be associated with the new donation.


<img alt='estimatedmatchingtab' width='80%' heigh='auto' src={useBaseUrl('img/estimatedmatchingtab.png')} />

- While on the “Donations” tab on the project page, you can filter all donations to see which are associated with a particular QF round. If the particular QF round is “active”, you’ll be able to see an estimated matching amount associated with that project for the round. This is calculated using the same logic as the “project card” [(above)](#projectcard).

:::info
After a QF round ends, the fraud analysis is completed, and the real matching funds are distributed, you will see the actual matching funds corresponding to that project and that round on the "Donations" tab in place of estimated matching. 
:::

<img alt='estimatedmatchingdonate' width='70%' heigh='auto' src={useBaseUrl('img/estimatedmatchingdonate.png')} />

- When you are making a donation to a project, an estimated matching amount corresponding to your donation will be shown. This is calculated using the same logic as the “contribution matching table” [(above)](#matchingtable).


## Payout

Once the round is finished and the sybil analysis is complete, the final matching funds will be distributed from our [`donation.eth`](https://app.safe.global/home?safe=gno:0x6e8873085530406995170Da467010565968C7C62) multisig account and distributed to the project's registered addresses. The actual matching amount sent to each project post-round will be shown on the project’s "Donations" tab, under the corresponding round filter.


<img alt='roundfinal' src={useBaseUrl('img/roundfinal.png')} />
