---
id: "recurring-donations"
title: "Recurring Donations"
sidebar_label: "🔄 Recurring Donations"
notion_page_id: "22f6fb34-b1ad-4dc3-8d88-6767fee5e0b8"
slug: "/recurringdonation"
---

On Giveth you can use the power of [Superfluid](https://www.superfluid.finance/) to create recurring donations to projects. This allows you to provide continuous support over a long-period to your favourite projects. In this article we will explain the key concepts of recurring donations and how to interact with them on the Giveth Dapp.

Currently recurring donations on Giveth can only be made using **Optimism or Base network**.

### How it works

For recurring donations, a key concept to understand are “Stream Balances” which represent the amount of funds available to create recurring donations with. Stream Balances are denominated in tokens such as ETH, OP, DAI, USDC or GIV. Stream Balances are distinguished from regular tokens by adding an x suffix to the token symbol, for example: ETHx, OPx, DAIx, USDCx, GIVx.

In order to get a Stream Balance all you need to do is deposit funds in any eligible token to your “Stream Balance”. This upgrades your regular tokens into “Super Tokens” giving them the ability to be streamed. You can also withdraw your tokens, which will downgrade them back to regular tokens. Tokens are upgraded and downgraded at a 1:1 ratio, meaning that if you deposit 100 DAI you will have 100 DAIx in your Stream Balance.

When you create a recurring donation, you are streaming funds to a project by the second from the tokens in your Stream Balance, to make it more familiar we represent this as a monthly amount. The project owner can withdraw their received recurring donation at any time and the stream will continue to send funds until either the donor ends the recurring donation or the donor’s Stream Balance runs out of funds.

For each recurring donation you create using the same token you increase the “Stream Rate” which is the amount of tokens per second (represented monthly) that are being streamed. This means that if you have multiple recurring donations to the same project in the same token, your Stream Balance will decrease at a faster rate.

Consider this infographic:

![](/img/notion/recurring-donations/recurring-donations-01.png)

In this scenario the donor currently has a Stream Balance of 100 DAI (DAIx), they are donating to 3 projects for a total of 50 DAI monthly (or 0.000019026 DAI per second). Since they have a Stream Balance of 100 DAI we would expect it to run out in 2 months since 100 / 50 = 2. If the user had a separate Stream Balance, for example in GIV, it would not be affected by the recurring donations made in DAI.

When a Stream Balance runs out of funds, recurring donations made in that token will stop and the project(s) will no longer receive funds, if that happens you will need to deposit more funds to your Stream Balance and create a new recurring donation to the project(s).

Using an analogy from the default world, **think of your Stream Balances as prepaid visa cards**. Each token such as GIV, USDC, DAI is a different card with its own amount of available credit. Depositing tokens to your Stream Balance is like topping up the card with more credit; creating a recurring donation is like setting up a monthly payment from that card. When the card runs out of funds the payment stops, you’ll need to top it up and set up your payments again.

### For Donors

#### Creating a recurring donation

1. Find a [project with an Optimism or Base](https://giveth.io/projects/all?filter=AcceptFundOnOptimism&filter=AcceptFundOnBase)[ address](https://giveth.io/projects/all?filter=AcceptFundOnOptimism) that you would like to support and hit DONATE. From there you will see two tabs, “One-Time Donation” and “Recurring Donation”, click on Recurring Donation.

2. If you haven’t created a recurring donation before you will need to deposit tokens to your Stream Balance. Choose a eligible token to deposit from the drop down menu “Select a Token”.  Once you have selected a token, enter the amount you would like to deposit.

3. To choose how much tokens you want to donate monthly, you can use the slider bar to adjust by how much of your tokens that you’re depositing that you wish to donate monthly. You’ll see on the page an estimation of how many months your recurring donation will last until you need to top-up your Stream Balance.

4. You can also optionally donate a percent of your recurring donation to Giveth, this will create a separate recurring donation to the [Giveth project](https://giveth.io/project/the-giveth-community-of-makers) that supports Giveth’s running costs.

5. Click DONATE, you will get a confirmation screen that outlines how much you’re depositing and the details of your donation to the project and also the details of the donation to Giveth if you chose to donate a percent of your recurring donation. If everything looks good, click Confirm and you will be prompted to sign two transactions in your wallet. The first one is to approve the Superfluid contracts to use your tokens, the second is to deposit your tokens and create the recurring donations. Congratulations, you’re done!

#### Watch this video to see how to create a recurring donation

[Video](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff891e0b-a285-4d6e-b9f4-87bde516d521/99184fa9-2cde-4bf5-93b0-fb6fd165bd7e/createRecurringDonation.mov?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE447FY2%2F20260911%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260911T150324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWiSci%2BX4ApJLijN8wW%2FxhWz9BOOAOfggBgX%2FM3FWrdAiEAuprDYwNwyjH4QQyryCr%2FuvEofXN08aYgkHYWRNB0xSsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0wePLy%2BQjkzYy6ayrcA%2FzMmQSHgnu6n7EIRFa87%2FJwQT%2BHrYnT5fUVobolSpxw9bkbOBzCQY2Zld7SlUFofwEYm2GVXijSgi55mVWaXvJG5L%2FuEHYS6Fp974%2FW0iLASm916X24G4CQUDhChiSHRXMNhyLU8QHY1OTV03USrg0a04fc8lH0tPD7OxyfdnAPq6cpFh5MTyFrmBrgKpUfJK2g4lVVnL2BDA3WX8xp%2F4KjyzL2Z8rAToGQKUEyYKmjxXXjHtzaRqsrhBJTfkeuI5lJeT651Bd7rg9DI1L1NedF%2FsMdHs%2F06s5WQQRRzbvbfOzhExYVEm9%2BlRRMTU0gfkycTMy3vYx%2F8w%2BgCXTBXiEoEBzhRHsqblH4%2BvFKb44EcIO9e2ojnia1HIjoEmyaboMUDaWUkPyztRHAdpDRVrPj5q3a9CZ1DwHZZHMxfwREyXMD5VKmlm6ZVxYdVdD1rHDEsBhlDmMoivbUwaGotmSrjz8nLWokGvJ8pbr4VgOI7P%2FLeJ5i4ERsbYzk3CxDthOAs%2FiHd7freemz%2BTYzmIkJ5MXlZnOfWZ7RJHyK4OR7%2BEbTlxXM9oVwdmxf9ocMstIdmPRyBWLmYksRGM5iiOluL72HrZM%2FdY3jHIkcxyRVQXUut%2B2QoOHfK960MI%2B4j9UGOqUBNuvbbkfX%2BX4WMYTsRNMB26QSSO43vw2klit%2FkfiKE7MKFKtBtyTEkAExdGKVUzTgNglmCFWApur5%2Bj5%2FMpEy19hoYEBGmKxzwK1Qocj7MZUKYvjGyM5ZB3O3B3782yiNgZ11nO0YFhwl%2F8%2BsoEetkwpImCLjnHL9d97HAHrscsi9R71iXZWVO%2BwPgueEnflfhKzWYuuhJDVG4uxUiG1GsF8c7tD9&X-Amz-Signature=e705ef34f8b81f5fadcf9e55677e381c2d9aef9a64f1bf96ffad0b7dbd112a33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Donating with an existing Stream Balance

If you’re creating a recurring donation with an existing Stream Balance, you can skip the deposit step and go straight to choosing how much you want to donate monthly. The amount you can donate monthly is limited by the amount you’re donating to other projects using the same Stream Balance.

You cannot create a recurring donation that would cause your Stream Balance to have **less than one month worth of funds left**, the slider bar will turn red and you will not be able to proceed. In this case you should consider Topping up your Stream Balance, which can be done directly from the donate page. You can also reduce the amount you are donating to other projects with the same Stream Balance, allowing more to be donated to a given project. Learn more below in the [Managing Stream Balances](/recurringdonation) section.

#### Managing a recurring donation

**Modifying**

You can modify your recurring donation to a project in two ways:

- Visiting the donate page of the project and selecting the same token you’re already donating reccuringly

- Visiting the Recurring Donation tab on the “My Donations” page in the Giveth DApp

To modify from the donate page you will be able to increase or decrease the amount you’re donating monthly, the same limitations apply as with donating with an existing Stream Balance, you won’t be able to increase the amount if it would cause your Stream Balance to have less than one month worth of funds left.

![](/img/notion/recurring-donations/recurring-donations-02.png)

From the Recurring Donation tab on the “My Donations” page you can see the details of all the recurring donations you have created in a table. Clicking on the actions menu for a specific recurring donation will present you with two options: “Modify” and “End”. Modifying will give you the same options as above, increasing or decreasing the monthly amount. Ending a recurring donation will stop the stream and the project will no longer receive funds, thus reducing the rate at which your Stream balance decreases.

![](/img/notion/recurring-donations/recurring-donations-03.png)

#### Ending

Recurring donations end in two ways: manually by the donor from the Recurring Donation tab on the “My Donations” page or automatically when the Stream Balance runs out of funds.

To end a recurring donation from the Recurring Donation tab on the “My Donations” page, click on the actions menu for the recurring donation you want to end and select “End”. You’ll need to sign a transaction in your wallet to confirm the end of the recurring donation. When a recurring donation ends it will show up on the project’s donation tab as “Finalized” under the amount column. There will also be a record of the total amount donated and the USD value of the recurring donation.

From the the Recurring Donation tab on the “My Donations” page you can see all the recurring donations you have made. There’s two possible actions for an “Ended” recurring donation: Start a new recurring donation or “Archive”. Archiving a recurring donation will hide it from the “My Donations” table, you can click a toggle at the top of the table if you wish to see your archived recurring donations.

![](/img/notion/recurring-donations/recurring-donations-04.png)

Starting a new recurring donation will take you to the donate page of the project and allow you to create a new recurring donation to the same project.

#### Managing Stream Balances

Stream Balances can be managed from two different places, either on the donate page of a project or from the “My Recurring Donations” page.

To manage a Stream Balance from the donate page you can go to an eligible project’s donate page, and when you select to donate from one of your existing Stream Balances you will see a link to “Top-up Stream Balance”. Clicking this link will open a pop-up allowing you to Deposit or Withdraw from your Stream Balance.

![](/img/notion/recurring-donations/recurring-donations-05.png)

From the Recurring Donation tab on the “My Donations” page there is a table with all the Stream Balances associated with your account. You will be able to see details such as the “Stream Rate” for each Stream Balance and how many projects you are supporting with it. Clicking the Deposit/Withdraw link will show you a pop-up allowing you to Deposit or Withdraw from your Stream Balance.

![](/img/notion/recurring-donations/recurring-donations-06.png)

#### Depositing

Depositing tokens into your Stream Balance will require you hold the underlying tokens in your connected wallet. For example to deposit into your ETH Stream Balance you will need ETH in your wallet. Depositing tokens will increase the duration of any active recurring donations using that Stream Balance. To deposit you will need to sign two transactions, the first is to approve the Superfluid contracts to use your tokens, the second is to deposit your tokens. ETH however only requires 1 transaction, deposit.

:::info
When depositing ETH you should be cautious not to deposit ALL of your balance, since you require those tokens to pay the network’s gas fees. Always leave a prudent amount of the native tokens in your wallet so you don’t get stuck.
:::

#### Withdrawing

Withdrawing tokens from your Stream Balance into your wallet can be done at any time, but there are some considerations. Withdrawing tokens will decrease the duration of any active recurring donations using that Stream Balance. If you withdraw a large portion of your tokens from a Stream Balance, recurring donations using that Stream Balance may stop unexpectedly. To withdraw you will need to sign a transaction in your wallet to initiate the withdrawal.

If you’re withdrawing from your Stream Balance while it has active recurring donations you’re available balance to withdraw will be slightly less than your actual balance. This is because technically your Stream Balance is decreasing by the second making it hard to calculate the exact amount you can withdraw, a small buffer is added worth about 60 seconds of your current stream rate.

To prevent any anomalies it’s highly recommended to end any recurring donations using that Stream Balance before withdrawing all of your tokens.

#### Watch this video to see how to manage your recurring donations

[Video](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff891e0b-a285-4d6e-b9f4-87bde516d521/14cde56f-4855-414d-b7fd-e02f900fe427/manageRecurringDonation.mov?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE447FY2%2F20260911%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260911T150324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWiSci%2BX4ApJLijN8wW%2FxhWz9BOOAOfggBgX%2FM3FWrdAiEAuprDYwNwyjH4QQyryCr%2FuvEofXN08aYgkHYWRNB0xSsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0wePLy%2BQjkzYy6ayrcA%2FzMmQSHgnu6n7EIRFa87%2FJwQT%2BHrYnT5fUVobolSpxw9bkbOBzCQY2Zld7SlUFofwEYm2GVXijSgi55mVWaXvJG5L%2FuEHYS6Fp974%2FW0iLASm916X24G4CQUDhChiSHRXMNhyLU8QHY1OTV03USrg0a04fc8lH0tPD7OxyfdnAPq6cpFh5MTyFrmBrgKpUfJK2g4lVVnL2BDA3WX8xp%2F4KjyzL2Z8rAToGQKUEyYKmjxXXjHtzaRqsrhBJTfkeuI5lJeT651Bd7rg9DI1L1NedF%2FsMdHs%2F06s5WQQRRzbvbfOzhExYVEm9%2BlRRMTU0gfkycTMy3vYx%2F8w%2BgCXTBXiEoEBzhRHsqblH4%2BvFKb44EcIO9e2ojnia1HIjoEmyaboMUDaWUkPyztRHAdpDRVrPj5q3a9CZ1DwHZZHMxfwREyXMD5VKmlm6ZVxYdVdD1rHDEsBhlDmMoivbUwaGotmSrjz8nLWokGvJ8pbr4VgOI7P%2FLeJ5i4ERsbYzk3CxDthOAs%2FiHd7freemz%2BTYzmIkJ5MXlZnOfWZ7RJHyK4OR7%2BEbTlxXM9oVwdmxf9ocMstIdmPRyBWLmYksRGM5iiOluL72HrZM%2FdY3jHIkcxyRVQXUut%2B2QoOHfK960MI%2B4j9UGOqUBNuvbbkfX%2BX4WMYTsRNMB26QSSO43vw2klit%2FkfiKE7MKFKtBtyTEkAExdGKVUzTgNglmCFWApur5%2Bj5%2FMpEy19hoYEBGmKxzwK1Qocj7MZUKYvjGyM5ZB3O3B3782yiNgZ11nO0YFhwl%2F8%2BsoEetkwpImCLjnHL9d97HAHrscsi9R71iXZWVO%2BwPgueEnflfhKzWYuuhJDVG4uxUiG1GsF8c7tD9&X-Amz-Signature=57fb9a495cbf2bf61c12cbc7d297c7451f2baf6d3e3ddd68ddaddcdc3e62a6df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Project Owners

#### Making your project eligible

To allow donors to create recurring donations to your project **you will need to have added a recipient address on Optimism or Base**. After that your project will need to integrate with Allo Protocol by creating an anchor contract, this contract will receive the streamed funds from donors and allow you to withdraw them to your recipient address.

Allo Protocol is a system of smart contracts deployed and used primarily by Gitcoin, you can [find out more about it here](https://docs.allo.gitcoin.co/).

#### Deploying an anchor contract

DO NOT PANIC! This step is pretty easy and can be done in two ways:

The first way can be done by the project owner, from the create project page (or edit project page for an existing project). Scrolling down to the field for your Optimism (or Base) recipient address, below that there is a toggle to enable recurring donations. Switch this toggle to on and when you go to publish your project a transaction will be generated to deploy your anchor contract, sign the transaction and that’s it!

![](/img/notion/recurring-donations/recurring-donations-07.png)

The second way can be done by the donor, if you have already added an Optimism or Base recipient address to your project then on your first recurring donation, when a donor creates a recurring donation to your project, they will be prompted to deploy an anchor contract for your project. The donor signs a transaction, the contract is deployed for your project and that’s it!

:::info
Once you’ve deployed an anchor contract for your project you will not be able to disable receiving funds on Optimism or Base, however you can still change your recipient address at any time.
:::

#### Claiming your funds

When a donor creates a recurring donation to your project, the funds will be streamed to your anchor contract. You can claim these funds at any time by visiting the “My Projects” page in the Giveth DApp. Find the project you wish to claim your funds from and click on the “Actions” drop-down menu.

![](/img/notion/recurring-donations/recurring-donations-08.png)

Click on “Claim Recurring Donations” and you will be shown a pop-up with a list of all the available tokens you can claim. Click on the claim button next to each corresponding token and you will be prompted to sign a transaction in your wallet to claim the funds. The tokens will be sent to the recipient address on Optimism (or Base) that you have set.

If you have multiple tokens to claim you will have to do them one by one, sorry about that, we’re working on it.

### Quadratic Funding and GIVbacks Eligibility

Recurring Donations made to eligible projects during Quadratic Funding rounds will be matched! Only the value of the donations made between the start date and the end date of the round will be matched. To learn more about Quadratic Funding, [click here](/quadraticfunding). 

Additionally, Recurring Donations will also be eligible for GIVbacks, meaning when you donate in GIVbacks eligible tokens to verified projects you will be eligible to receive GIV tokens relative to the amount you donated to the project during the bi-weekly GIVbacks round. To learn more about GIVbacks, [read this article](/givbacks).
