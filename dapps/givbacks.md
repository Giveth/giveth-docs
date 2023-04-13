---
id: givbacks
title: GIVbacks
slug: giveconomy/givbacks
---
import useBaseUrl from '@docusaurus/useBaseUrl';

GIVbacks is a revolutionary concept that rewards donors to verified projects with GIV. When you give to verified projects during a GIVbacks round, you become eligible to receive GIV rewards after the round ends and the GIV is ready to claim. You can see live information --- including round schedule & your claimable GIV --- on the [GIVbacks page](https://giveth.io/givbacks).

## GIVbacks Rounds
GIVbacks rounds last two weeks. For each round, there is 1 million GIV available to be rewarded.

![](https://i.imgur.com/cBBSzJa.png)

Givers who donate to verified projects within an active round are eligible to receive GIVbacks. Note that addresses of verified projects will not receive GIV for donations made to their own project or other verified projects.

![](https://i.imgur.com/aklPnKC.png)


## Project Verification
'Verified' is a seal of approval for legitimate projects on Giveth. Many Verified projects came pre-vetted from [The Giving Block](https://twitter.com/TheGivingBlock) API. The Giving Block is an organization that supports and onboards registered 501c3s from the United States into crypto, and with our integration, you can donate to their projects from the Giveth UI.

For non-Giving Block projects, the verification process requires projects to provide additional information about their project and the intended impact of the organization. Our amazing Project Verification Team then reviews these applications, investigates the information provided and informs the project owners about the verdict.


To learn more about the project verification process check out our [documentation](./projectVerification.md).


## Tokens Eligible for GIVbacks

A donor can donate any ERC-20 token to projects on Giveth.io on Gnosis Chain (formerly xDai Network) or Ethereum Mainnet. However, only donations to verified projects in certain tokens are eligible for GIVbacks. This restriction ensures that we are able to get accurate price data for donations (a requirement for fair distribution of GIVbacks), and prevents bad actors from gaming the GIVbacks program. To see the full list of eligible tokens, visit [this forum post](https://forum.giveth.io/t/givbacks-token-list/253).

## Getting GIVbacks
During each round, all donations to verified projects on the DApp are tracked, and this data is used to calculate the amount of GIVbacks received by each Giver for that period.

Givers are able to claim their GIV after the round ends and a fraud review has been conducted. Donors will receive an email when the rewards are ready to be claimed on the [GIVbacks page](https://giveth.io/givbacks). A portion of the GIV will be liquid immediately, and the rest will increase the flowrate of their [GIVstream](https://giveth.io/givstream). To learn more about the GIVstream and how it works, check out our [documentation](https://docs.giveth.io/giveconomy/givstream/). For the purposes of this documentation, we will refer to the sum of the liquid amount and the amount allocated to the GIVstream from GIVbacks as `cumulative GIVbacks`.

### Rank & Calculation

Note that, even with the GIVbacks program, a donation on Giveth is still a donation. The maximum value of the donor's `cumulative GIVbacks` could be **anywhere from 50% up to 80% of the USD value of their donation**, at the time of donation. The exact amount of GIVbacks they receive will depend on the [project's current GIVpower rank](./GIVpower.md#project-rank). Each verified project that has been boosted with [GIVpower](./GIVpower.md) will have a rank on the platform. The project that has been boosted with the most GIVpower for the previous bi-weekly round will offer the highest GIVbacks factor percentage (80%), while the lowest ranked project and unranked/unboosted projects for the previous round will receive the lowest GIVbacks factor percentage (50%). Each project from the bottom to the top ranked will have an incrementally higher GIVbacks factor percentage, you can learn more in the [GIVpower documentation](./GIVpower.md#project-ranking).

:::info 
GIVbacks sent to donors of verified projects before December 27, 2022 (when project ranking took effect) were calculated using a maximum GIVbacks factor of 75%.
:::

If, at the end of a round, the estimated amount of GIVbacks to distribute exceeds the limit of 1 million GIV per round then donors will receive proportionally less matching relative to the rank of the project they donated to, for each donation. This is calculated as follows:

$$
n = N \frac{g}{G}
$$

where:

- n = Total cumulative amount of GIV tokens earned by the donor for a particular donation
- N = Total number of GIV tokens allocated for distribution in the round (1 million GIV)
- g = The estimated full amount of GIVbacks the donor could receive.
- G = Total estimated amount of GIVbacks for all donors during the given round.

GIV tokens earned through the GIVbacks program can be used throughout the GIVeconomy: for governance within the [GIVgarden](https://giveth.io/givgarden), locking GIV & boosting projects with [GIVpower](https://giveth.io/givpower) or for donating to projects on [Giveth](https://giveth.io/).

:::note
**Referral Program**

Since the launch of the Giveth Referral Program, when making a donation on Giveth using a referral link, part of the GIVbacks generated from that donation will be shared with the person who referred you. As a result, the GIVbacks amount you receive will be lower than if you had made the donation directly without a referral link. Please check our [referral program documentation](./referralprogram.md) for more information about how GIVbacks are calculated for referrals.
:::

## Harvesting GIVbacks

GIVbacks are available to be harvested after the round ends, data has been reviewed and GIV is distributed to eligible donor addresses. Donors will receive an email when GIVbacks rewards are ready to claim - this GIV can be harvested [here](https://giveth.io/givbacks). Please note that when you harvest GIV rewards from any part of the GIVeconomy, our token distro contract sends you all liquid GIV allocated to your address on that network. For example, when you harvest GIV rewards earned from staking LP tokens in the GIVfarm on Gnosis Chain (formerly xDai Network), you also harvest rewards allocated to you from GIVbacks (if any) and the liquid amount from your GIVstream. This is broken down in the harvest popup that you encounter upon claim:

![](https://i.imgur.com/GVpn68a.png)


---
## Disqualifying Factors for the GIVbacks Program

Once a GIVbacks round ends, there is a period of time granted to our team to review flagged projects and donations for the following disqualifying factors before GIV is distributed to donors. A project could have their ‘Verified’ status revoked if any of these factors are found. Donors to projects who are found with any of the following activity may also be denied GIVbacks for that round.

1. **Giving/offering goods or services to donors in exchange for their donation.** A project owner cannot offer goods such as a sponsorship for a conference, Girl Scout cookie purchases or tickets for a dinner, even if the proceeds go to charity. Project owners cannot provide services like acting as a crypto exchange for their donors. They can explain how to use an exchange, but they cannot convert the money for their donors.
2. **Circulating donations raised by other means.** Only “first touch” donations count for GIVbacks. If a project receives funding from a donor and is found to be circulating these donations within the Giveth platform to receive GIVbacks, they will be disqualified. For example, a project should not be sending fiat donations received elsewhere back to their donors and asking them to donate on Giveth with crypto.
3. **The funds are not being used for what is expressed in the project page or submitted verification application.** Verified projects are responsible for keeping their projects up-to-date with information on how the funds are being used. If the project states explicitly that they are, for example, using the funds to develop education programs but are found to be using the funds to employ developers, they may be disqualified from the GIVbacks program.
4. **Unscrupulous or fraudulent activity.** This can be the use of violence, breaking laws, or other behaviour that does not uphold the [values of the Giveth community](https://docs.giveth.io/whatisgiveth/). Projects found to be violating our [Terms and Conditions](https://giveth.io/tos) will not only lose their verification status, but also will be canceled.

The Giveth Project Verification team is responsible for monitoring GIVbacks activity and the Project Verification system, and will ultimately use their discretion to determine whether a project’s actions are unscrupulous and/or disqualifying.

## Sanctions for flagged donations

Verified projects and donations that are flagged for any of the disqualifying factors above will be analyzed and discerned according to the sanctions outlined here:

- A donor whose GIVbacks were revoked because they were found to be recirculating funds or donated to a project that was disqualified for that round will receive an email with a link to the forum post discussing eligible donations for that round. Donations cannot be refunded and GIVbacks cannot be “unrevoked” if the project was disqualified from the round.

Donations are donations and they go directly to the project. The GIVbacks program was created to additionally empower our donors with GIV & therefore governance rights, but you should not make a donation purely out of the expectation of receiving GIV. We appreciate your understanding.

---

**The GIVbacks program is our way of giving back to those who give. It’s our exit to the community - empowering real donors with governance power over the future of Giveth and hence, the Future of Giving. To get GIVbacks, [start donating to verified projects today](https://giveth.io/projects)!**
