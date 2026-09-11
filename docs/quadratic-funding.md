---
id: "quadratic-funding"
title: "Quadratic Funding"
sidebar_label: "🗳️ Quadratic Funding"
notion_page_id: "4e339fb1-4d73-4893-a104-5a0bf77558ff"
slug: "/quadraticfunding"
---

## What is Quadratic Funding?

Quadratic Funding (QF) is a funding mechanism designed to “democratically” distribute a matching pool among multiple projects. Matched amounts are calculated by using the quadratic formula, where [“the amount received by the project is proportional to the square of the sum of the square roots of contributions received”](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3243656), meaning that the amount of funds each project gets depends both on the overall amount raised, and _the number of unique contributors_. 

For more information, details, and even a helpful simulator, visit [“WTF is QF?”](https://wtfisqf.com/?grant=&grant=&grant=&grant=&match=1000) or check out [this explanation by Finematics.](https://finematics.com/quadratic-funding-explained/)

## Giveth Quadratic Funding

Giveth has integrated quadratic funding into [our existing donation platform](https://giveth.io/qf) to drive more funding to amazing projects!

### Project Information

Each QF round on Giveth has its own unique eligibility requirements for projects. Specific eligibility requirements for each round can be found on the Giveth QF round [notion](https://giveth.notion.site/Giveth-Quadratic-Funding-3478aa27eb094a699f9ddd6a8b611027) page. Projects participating in active rounds are sorted on the [QF project page](https://giveth.io/qf) by default according to [GIVpower](/givpower), or by donation amount if they are not verified. 

### **Donation Eligibility**

In order for a donation to be eligible for matching in a given QF round, it must meet the following criteria:

- Donation must be made to an eligible project

- Donation must be made during an active QF round

- Donation size must be above the specified equivalent minimum (in USD) for the round

- Donation must be made on a blockchain or network eligible for QF matching

- Donors need to verify their “qf-eligibility” (through our integration with [Passport](https://docs.passport.xyz/)) anytime before the round ends

Specific thresholds and requirements for each round can be found in the corresponding guide on the Giveth QF [notion](https://giveth.notion.site/Giveth-Quadratic-Funding-3478aa27eb094a699f9ddd6a8b611027) page.

Individual donations or projects may be disqualified from matching if they are found to be demonstrating any of the “[disqualifying factors](/quadraticfunding)” below.

Note: Donations to projects during QF rounds qualify for [GIVbacks](/givbacks) if both the project and the token donated are GIVbacks Eligible. 

### Estimated Matching

During Giveth QF rounds, estimations on the amount of matching funds for each donation are shown. Estimated matching amounts:

- Are calculated using the [quadratic funding formula](https://www.wtfisqf.com/?grant=&grant=&grant=&grant=&match=1000):

![Source: Quadratic Funding — A Better Way to Fund Public Goods](/img/notion/quadratic-funding/quadratic-funding-01.png)

- Take into account the “max matching” per project per round - each project is only able to receive a set percentage of the matching pool (which varies per round)

- Are determined based on the donations made thus far to projects in the round

- Do not take into account donors’ “qf-eligibility”

- Do not consider possible post-round disqualifying factors

The estimated matching amounts are approximations meant to give donors and projects a general idea of a project’s performance, and the impact of a new donation. Real matching numbers can only be determined after the round has ended.

### Cluster Match QF

Giveth uses Connection Oriented Cluster Match (COCM) to calculate the quadratic matching distribution to projects. COCM identifies clusters of entities within a network based on their similarities or connections, and is used to mitigate potential sybil attacks and allocate matching funds in a way that rewards unique cooperation. 

For more information, check out this [announcement post](https://forum.giveth.io/t/cluster-match-qf-announcement/1419) on the Giveth Forum or visit '[**WTF IS COCM**](https://wtfiscocm.streamlit.app/)**"**.

### Disqualifying Factors for Giveth QF

**These actions can compromise a project’s eligibility to receive matching funds, or a donor’s eligibility to affect matching distribution:**

- **Quid-Pro-Quos:** Offering goods/services in exchange for donations (raffles, airdrops, or similar incentives that attempt to “game the system”).

- **Multiple identities: **This includes creating multiple wallets for one user, or pretending to be multiple unique donors.

- **Recirculating funds:** Only “first-touch” donations counts toward matching.

- **The funds are not being used for what is expressed in the project page:** QF-eligible projects are responsible for keeping their projects up-to-date with information on how the funds are being used without misrepresentations.

- **Unscrupulous or fraudulent activity.** This can be the use of violence, breaking laws, or other behaviour that does not uphold the values of the Giveth community.

- **Attempting to falsify a contribution**

The above list is not exhaustive and should be taken as just **some** of the possible unscrupulous activities that could lead to a reduction or nullification of matching. Please use your best judgement, and if you are uncertain if something will be considered “allowed” or not, reach out in our [discord support channel.](https://discord.giveth.io/)

## Payout

After a QF round ends, there will be a 2-3 week period wherein the Giveth team performs data and fraud analysis and calculates the matching funds distribution. The distribution of matching funds corresponding to each round will be posted on the [Giveth forum](https://forum.giveth.io/tag/quadratic-funding) before matching funds are sent to the projects’ recipient addresses.

:::info ℹ️
**INFO**
After a QF round ends and the real matching funds are distributed, you will see the actual matching funds corresponding to that project and that round on the “Donations” tab in place of estimated matching.

:::

![](/img/notion/quadratic-funding/quadratic-funding-02.png)

## Quadratic Force

The Quadratic Force is Giveth’s community of sponsors who fund QF matching pools.

Anyone can become a member of the [Quadratic Force](https://giveth.io/QuadraticForce) by making a donation to the Giveth [matching pool project](https://giveth.io/project/Giveth-Matching-Pool-0). Members of the Quadratic Force who make sponsor-level donations (varies per round) benefit from brand exposure, project nominations, GIVbacks and more!

By supporting QF matching pool, sponsors not only amplify their impact but also gain premium brand exposure. Explore exciting partnership opportunities in our [Co-Marketing Slides](https://giveth.io/assets/Giveth-Co-Marketing-Slides.pdf). Some of the past sponsors include Public Nouns, Octant, Arbitrum, ENS, among others, who have contributed to supporting impactful projects.

To learn more about the sponsorship tiers for our Quadratic Force, reach out tin the Giveth [Discord](https://discord.gg/gsZDyx3Mdc) or [Telegram](https://t.me/givethio).

_A minimum of 15% of each matching pool is used to fund the Giveth team’s operations and management of QF rounds._
