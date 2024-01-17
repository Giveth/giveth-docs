---
id: multisigs
title: MultiSig Wallets on Giveth
slug: dapps/multisigs
---

import useBaseUrl from '@docusaurus/useBaseUrl'


It is possible to use Giveth with your Safe Multisig Wallet. However there are a few steps to get setup and a few things to keep in mind. If you don't know what a multisig wallet is or how to make one, check out the Safe documentation for [Getting Started with Multisig Wallets](https://help.safe.global/en/collections/9801-getting-started).

## Logging into Giveth with a Multisig Wallet

### Add and Open the Giveth App on the Safe website
1. Go to the page on the [Safe website](https://app.safe.global/welcome) of your Multisig Wallet that you wish to login with.
2. Click on the `Apps` tab, and find the Giveth app in the list of official Safe Apps and skip to the next section of this guide. If it doesn't show up in the list, no problem then click `My Custom Apps` from the window menu and follow steps #3 & #4.
<img alt='safe Ui custom app' src={useBaseUrl('img/multisigGuide/step1.png')} />
3. Enter the Giveth URL `https://giveth.io`, click `Add` then click on the Giveth App card that will appear in the list of Custom Apps. (Native Giveth Safe app coming soon!)
<img alt='enter giveth url in custom app page' src={useBaseUrl('img/multisigGuide/step2.png')} />
4. Check off the trust warnings (you trust us, right?) and proceed to open the Giveth dApp.

### Creating your Multisig Session
Once you have Giveth dApp open from the Safe website you should notice a few things:
- Your Safe address (or profile name if your Safe already has one) is displayed in the top right corner of the app.
- You cannot switch networks inside the Giveth App. You must switch the Safe Multisig/Network on the Safe website and then open the Giveth app again from the corresponding page.

**To proceed logging in:**
1. Click on `Create Project` or `My Account` from the drop down menu shown when you hover over your Safe Address in the top right corner.
<img alt='click create project' src={useBaseUrl('img/multisigGuide/step4.png')} />
2. Click `Sign In` from the following modal. Then choose your wallet provider, such as MetaMask (NOT SAFE), click to proceed.
<img alt='click sign in' src={useBaseUrl('img/multisigGuide/step5.png')} />
3. Choose how long you want to keep your Multisig session open for. This is the length of time your sessions remains open for before you need to complete this sign in process again. Choose a duration then click `Let's Go`.
<img alt='choose session duration' src={useBaseUrl('img/multisigGuide/step6.png')} />
4. You will be prompted to sign a message with your wallet. Click `Sign-in` or `Confirm` to sign the message.
<img alt='sign message' src={useBaseUrl('img/multisigGuide/step7.png')} />
5. You will be redirected to a message signing page on your Safe Multisig, this message must be signed by the minimum threshold of signers on this Multisig within **one week**. Click `Sign` to sign the message. Once you've signed the message contact the other signers to sign the message as well.
<img alt='sign message' src={useBaseUrl('img/multisigGuide/step8.png')} />

:::info 
While waiting for other signers to sign the message, you can safely close the modal by clicking the **X** in the top right corner (**contrary to the warning message(s)**). You can also ignore and close the pop-up window from step 3 if it appears, this is a [Known Issue](#known-issues) that can happen. From here you can continue browsing Giveth, but you will not be able to create a project, update your profile/projects or donate until the message has been signed by the minimum threshold of signers.

:::

6. Once the message has been signed by the minimum threshold of signers, return to the Giveth App through the Safe website. If you already had the page open while waiting for the message to be signed, you will need to refresh the page.

To find where the pending message is to be signed, from the Safe UI go to `Transactions` then click `Messages` from the tabs available.
<img alt='find message to sign' src={useBaseUrl('img/multisigGuide/step9.png')} />

7. You should now be logged in and able to create projects, update your profile/projects and boost projects with GIVpower! 

## Creating Transactions with your Multisig Wallet on Giveth

While signed in with your Multisig Wallet you can initiate donations to projects using the funds in your Multisig Wallet. However, you and the other signers will need to sign the transaction with your Multisig Wallet before it can be executed. Any blockchain transaction needs to be signed individually by the minimum threshold Multisig signers before it can be executed, this is the nature of how Multisigs work. This can include: 

- Donating to a Project
- Staking GIV tokens in the GIVfarm
- Locking Tokens in the GIVpower farm
- Claiming GIVbacks
- Claiming your GIVstream
- Harvesting your GIVfarm rewards
- Unstaking your GIV tokens from the GIVfarm


## Project Management for your Multisig Signers
While a session for your multisig is active on the Giveth dApp all other signers on your multisig will be able to access its Giveth profile by signing a message from their wallet. This means they too can manage the profile, projects and GIVpower allocations owned by the Multisig. 

If you would liked to have multiple people be able to manage a set of projects then setting a Multisig as the owner of the project is a great way to do this. If you have an existing project on Giveth and would like to enable this, reach out to us on [Discord](https://discord.giveth.io)

## Known Issues

### 'Infinite' Sign In Loop
If you get to step 4 in [Creating Your MultiSig Session](#creating-your-multisig-session) and then go back to the Giveth page you may be prompted by the same modal in step 3 again. This is because the Giveth dApp is not detecting that you already have a pending message to sign. 

This is usually due to some lag in the network and the communication between the Safe website and the Giveth app. Wait a few minutes, refresh the page and it should be resolved. However you will not be able to proceed making projects etc. until the pending message is fully signed.

### Rejected Donation Transactions
If a transaction to create a donation is rejected by the Multisig signers it can show as `pending` for a very long time on the project page in the Giveth app.
