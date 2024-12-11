---
id: recurringDonation
title: Recurring Donations
slug: dapps/recurringDonation
---

import styles from '../src/css/custom.css'
import ReactPlayer from 'react-player'
import useBaseUrl from '@docusaurus/useBaseUrl'

# Recurring Donations 

On Giveth you can use the power of [Superfluid](https://www.superfluid.finance/) to create recurring donations to projects. This allows you to provide continuous support over a long-period to your favourite projects. In this article we will explain the key concepts of recurring donations and how to interact with them on the Giveth Dapp.

Currently recurring donations on Giveth can only be made using the **Optimism network**.

## How it works
For recurring donations, a key concept to understand are "Stream Balances" which represent the amount of funds available to create recurring donations with. Stream Balances are denominated in tokens such as ETH, OP, DAI, USDC or GIV. Stream Balances are distinguished from regular tokens by adding an x suffix to the token symbol, for example: ETHx, OPx, DAIx, USDCx, GIVx.

In order to get a Stream Balance all you need to do is deposit funds in any eligible token to your "Stream Balance". This upgrades your regular tokens into "Super Tokens" giving them the ability to be streamed. You can also withdraw your tokens, which will downgrade them back to regular tokens. Tokens are upgraded and downgraded at a 1:1 ratio, meaning that if you deposit 100 DAI you will have 100 DAIx in your Stream Balance.

When you create a recurring donation, you are streaming funds to a project by the second from the tokens in your Stream Balance, to make it more familiar we represent this as a monthly amount. The project owner can withdraw their received recurring donation at any time and the stream will continue to send funds until either the donor ends the recurring donation or the donor's Stream Balance runs out of funds.

For each recurring donation you create using the same token you increase the "Stream Rate" which is the amount of tokens per second (represented monthly) that are being streamed. This means that if you have multiple recurring donations to the same project in the same token, your Stream Balance will decrease at a faster rate.

Consider this infographic:

<center>
<img alt='recurring donation infographic' src={useBaseUrl('img/recurringDonations/recurringDonationInfoGraphic.svg')} />
</center>

In this scenario the donor currently has a Stream Balance of 100 DAI (DAIx), they are donating to 3 projects for a total of 50 DAI monthly (or 0.000019026 DAI per second). Since they have a Stream Balance of 100 DAI we would expect it to run out in 2 months since 100 / 50 = 2. If the user had a separate Stream Balance, for example in GIV, it would not be affected by the recurring donations made in DAI.

When a Stream Balance runs out of funds, recurring donations made in that token will stop and the project(s) will no longer receive funds, if that happens you will need to deposit more funds to your Stream Balance and create a new recurring donation to the project(s).

Using an analogy from the default world, **think of your Stream Balances as prepaid visa cards**. Each token such as GIV, USDC, DAI is a different card with its own amount of available credit. Depositing tokens to your Stream Balance is like topping up the card with more credit; creating a recurring donation is like setting up a monthly payment from that card. When the card runs out of funds the payment stops, you'll need to top it up and set up your payments again.

## For Donors

### Creating a recurring donation
1. Find a [project with an Optimism address](https://giveth.io/projects/all?filter=AcceptFundOnOptimism) that you would like to support and hit DONATE. From there you will see two tabs, "One-Time Donation" and "Recurring Donation", click on Recurring Donation.

2. If you haven't created a recurring donation before you will need to deposit tokens to your Stream Balance. Choose a token to deposit from the drop down menu "Select a Token". Eligible tokens to deposit currently are: DAI, USDC, ETH, GIV, OP. Once you have selected a token, enter the amount you would like to deposit.

3. To choose how much tokens you want to donate monthly, you can use the slider bar to adjust by how much of your tokens that you're depositing that you wish to donate monthly. You'll see on the page an estimation of how many months your recurring donation will last until you need to top-up your Stream Balance.

4. You can also optionally donate a percent of your recurring donation to Giveth, this will create a separate recurring donation to the [Giveth project](https://giveth.io/project/the-giveth-community-of-makers) that supports Giveth's running costs.

5. Click DONATE, you will get a confirmation screen that outlines how much you're depositing and the details of your donation to the project and also the details of the donation to Giveth if you chose to donate a percent of your recurring donation. If everything looks good, click Confirm and you will be prompted to sign two transactions in your wallet. The first one is to approve the Superfluid contracts to use your tokens, the second is to deposit your tokens and create the recurring donations. Congratulations, you're done!


#### Watch this video to see how to create a recurring donation
<div class='react-player'class='center'>
    <ReactPlayer 
        class='center'
        playing 
        light='/video/createRecurringDonation_thumbnail.png'  
        controls 
        url='/video/createRecurringDonation.mov' 
        width='756px'
        height="455px"
    />
</div>

#### Donating with an existing Stream Balance
If you're creating a recurring donation with an existing Stream Balance, you can skip the deposit step and go straight to choosing how much you want to donate monthly. The amount you can donate monthly is limited by the amount you're donating to other projects using the same Stream Balance.

 You cannot create a recurring donation that would cause your Stream Balance to have **less than one month worth of funds left**, the slider bar will turn red and you will not be able to proceed. In this case you should consider Topping up your Stream Balance, which can be done directly from the donate page. You can also reduce the amount you are donating to other projects with the same Stream Balance, allowing more to be donated to a given project. Learn more below in the [Managing Stream Balances](#managing-stream-balances) section.

### Managing a recurring donation

#### Modifying
You can modify your recurring donation to a project in two ways:
- Visting the donate page of the project and selecting the same token you're already donating reccuringly
- Visiting the Recurring Donation tab on the "My Donations" page in the Giveth DApp

To modify from the donate page you will be able to increase or decrease the amount you're donating monthly, the same limitations apply as with donating with an existing Stream Balance, you won't be able to increase the amount if it would cause your Stream Balance to have less than one month worth of funds left.

<center>
<img alt='recurring donation infographic' src={useBaseUrl('img/recurringDonations/modifyDonatePage.png')} />
</center>

From the Recurring Donation tab on the "My Donations" page you can see the details of all the recurring donations you have created in a table. Clicking on the actions menu for a specific recurring donation will present you with two options: "Modify" and "End". Modifying will give you the same options as above, increasing or decreasing the monthly amount. Ending a recurring donation will stop the stream and the project will no longer receive funds, thus reducing the rate at which your Stream balance decreases.

<center>
<img alt='modify button in recurring donation table' src={useBaseUrl('img/recurringDonations/modifyButton.png')} />
</center>

#### Ending
Recurring donations end in two ways: manually by the donor from the Recurring Donation tab on the "My Donations" page or automatically when the Stream Balance runs out of funds.

To end a recurring donation from the Recurring Donation tab on the "My Donations" page, click on the actions menu for the recurring donation you want to end and select "End". You'll need to sign a transaction in your wallet to confirm the end of the recurring donation. When a recurring donation ends it will show up on the project's donation tab as "Finalized" under the amount column. There will also be a record of the total amount donated and the USD value of the recurring donation.

From the the Recurring Donation tab on the "My Donations" page you can see all the recurring donations you have made. There's two possible actions for an "Ended" recurring donation: Start a new recurring donation or "Archive". Archiving a recurring donation will hide it from the "My Donations" table, you can click a toggle at the top of the table if you wish to see your archived recurring donations.

<center>
<img alt='ending a recurring donation' src={useBaseUrl('img/recurringDonations/endedDonationButton.png')} />
</center>

Starting a new recurring donation will take you to the donate page of the project and allow you to create a new recurring donation to the same project.

### Managing Stream Balances

Stream Balances can be managed from two different places, either on the donate page of a project or from  the "My Recurring Donations" page.

To manage a Stream Balance from the donate page you can go to an eligible project's donate page, and when you select to donate from one of your existing Stream Balances you will see a link to "Top-up Stream Balance". Clicking this link will open a pop-up allowing you to Deposit or Withdraw from your Stream Balance.

<center>
<img alt='recurring donation top up button' src={useBaseUrl('img/recurringDonations/topUpButton.png')} />
</center>

From the Recurring Donation tab on the "My Donations" page there is a table with all the Stream Balances associated with your account. You will be able to see details such as the "Stream Rate" for each Stream Balance and how many projects you are supporting with it. Clicking the Deposit/Withdraw link will show you a pop-up allowing you to Deposit or Withdraw from your Stream Balance.

<center>
<img alt='action buttons on streamable token table' src={useBaseUrl('img/recurringDonations/streamActionButton.png')} />
</center>

#### Depositing
Depositing tokens into your Stream Balance will require you hold the underlying tokens in your connected wallet. For example to deposit into your ETH Stream Balance you will need ETH in your wallet. Depositing tokens will increase the duration of any active recurring donations using that Stream Balance. To deposit you will need to sign two transactions, the first is to approve the Superfluid contracts to use your tokens, the second is to deposit your tokens. ETH however only requires 1 transaction, deposit.

:::info
When depositing ETH you should be cautious not to deposit ALL of your balance, since you require those tokens to pay the network's gas fees. Always leave a prudent amount of the native tokens in your wallet so you don't get stuck.
:::

#### Withdrawing
Withdrawing tokens from your Stream Balance into your wallet can be done at any time, but there are some considerations. Withdrawing tokens will decrease the duration of any active recurring donations using that Stream Balance. If you withdraw a large portion of your tokens from a Stream Balance, recurring donations using that Stream Balance may stop unexpectedly. To withdraw you will need to sign a transaction in your wallet to initiate the withdrawal.

If you're withdrawing from your Stream Balance while it has active recurring donations you're available balance to withdraw will be slightly less than your actual balance. This is because technically your Stream Balance is decreasing by the second making it hard to calculate the exact amount you can withdraw, a small buffer is added worth about 60 seconds of your current stream rate.

To prevent any anomalies it's highly recommended to end any recurring donations using that Stream Balance before withdrawing all of your tokens.

#### Watch this video to see how to manage your recurring donations
<div class='react-player' class='center'>
    <ReactPlayer
        class="center"
        playing 
        light='/video/manageRecurringDonation_thumbnail.png'  
        controls 
        url='/video/manageRecurringDonation.mov'
        width='756px'
        height="455px"
    />
</div>

## Project Owners

### Making your project eligible

To allow donors to create recurring donations to your project **you will need to have added a recipient address on the Optimism network**. After that your project will need to integrate with Allo Protocol by creating an anchor contract, this contract will receive the streamed funds from donors and allow you to withdraw them to your recipient address.

Allo Protocol is a system of smart contracts deployed and used primarily by Gitcoin, you can [find out more about it here](https://docs.allo.gitcoin.co/). 

#### Deploying an anchor contract
DO NOT PANIC! This step is pretty easy and can be done in two ways: 

The first way can be done by the project owner, from the create project page (or edit project page for an existing project). Scrolling down to the field for your Optimism recipeint address, below that there is a toggle to enable recurring donations. Switch this toggle to on and when you go to publish your project a transaction will be generated to deploy your anchor contract, sign the transaction and that's it! 

<center>
<img alt='toggle creation of anchor contract' src={useBaseUrl('img/recurringDonations/alloButton.png')} />
</center>

The second way can be done by the donor, if you have already added an Optimism recipient address to your project then on your first recurring donation, when a donor creates a recurring donation to your project, they will be prompted to deploy an anchor contract for your project. The donor signs a transaction, the contract is deployed for your project and that's it!

:::info
Once you've deployed an anchor contract for your project you will not be able to disable receiving funds on Optimism, however you can still change your recipient address at any time.
:::

### Claiming your funds
When a donor creates a recurring donation to your project, the funds will be streamed to your anchor contract. You can claim these funds at any time by visiting the "My Projects" page in the Giveth DApp. Find the project you wish to claim your funds from and click on the "Actions" drop-down menu. 

<center>
<img alt='claim recurring donations button' src={useBaseUrl('img/recurringDonations/claimButton.png')} />
</center>

Click on "Claim Recurring Donations" and you will be shown a pop-up with a list of all the available tokens you can claim. Click on the claim button next to each corresponding token and you will be prompted to sign a transaction in your wallet to claim the funds. The tokens will be sent to the recipient address on Optimism that you have set.

If you have multiple tokens to claim you will have to do them one by one, sorry about that, we're working on it.


## Quadratic Funding and GIVbacks Eligiblity

Recurring Donations made to eligible projects during Quadratic Funding rounds will be matched! Only the value of the donations made between the start date and the end date of the round will be matched. To learn more about Quadratic Funding, [read this article](./quadraticfunding.md).

Additionally, Recurring Donations will also be eligible for GIVbacks, meaning when you donate in GIVbacks eligible tokens to verified projects you will be eligible to receive GIV tokens relative to the amount you donated to the project during the bi-weekly GIVbacks round. To learn more about GIVbacks, [read this article](/giveconomy/givbacks).