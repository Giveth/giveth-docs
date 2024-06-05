---
id: importTorusMM
title : Import Torus Private Key into Metamask
slug: dapps/importTorusMM
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../src/css/custom.css'

MITCH IS THE BEST PM EVER!!!!!
let's add some new stuff here


While the Torus wallet is a great option for newcomers to crypto, it can be more difficult to use when interacting with decentralized applications (dApps). Giveth users have the opportunity to earn [GIV](https://docs.giveth.io/giveconomy/) by interacting with the [GIVeconomy](https://giveth.io/). Torus users can claim [GIVbacks](https://giveth.io/givbacks), stake in the [GIVfarm](https://giveth.io/givfarm), and claim their [GIVstream](https://giveth.io/givstream), but MetaMask users benefit from a more streamlined user experience.

We want to empower new-comers to crypto with the means to get fully integrated into the web3 community. MetaMask is a secure crypto wallet and a highly optimized gateway to blockchain apps. The purpose of this guide is to explain how to get funds into a MetaMask wallet, thereby enabling broader functionality and security. Users can do this by either transferring funds to a brand new MetaMask wallet or by importing private keys from an existing wallet like Torus. We recommend transferring the funds to a new wallet. Transferring funds removes the risk of someone accessing the wallet using the username and account used to set up the Torus wallet. For instructions on how to get started with a MetaMask wallet, [check out this article from the Metamask team](https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask).

## Transfer Your Funds to MetaMask
Once you are logged into your Torus wallet, navigate to the transfer page using the navigation bar at the top of the page. 

1. Copy the public key from MetaMask.
2. Paste into the ‘Transfer to’ line.
3. Enter the amount you’d like to send.

Once you are satisfied with the parameters of the transaction, click the transfer button at the bottom of the page.
If you have multiple tokens in your Torus Wallet, you will have to repeat this process for each token. 

<img alt='Download Private Key in Torus' width='75%' height='auto' class='center' src={useBaseUrl('img/content/transferTorusMM.png')} />

## Import Torus Private Key Into MetaMask
### What is a Private Key

Your [private key](https://www.coinbase.com/learn/crypto-basics/what-is-a-private-key) is a string of numbers and letters that allows you to access and manage your funds. <span class='importantText'>It should never be shared with anyone (no community moderators, no Giveth core contributors, no admins, <i>no one!</i> )!</span>. Anyone who has access to your private key has access to your crypto. Importing your Torus private key into MetaMask allows you to access and control your funds from both wallets. This means that you can enjoy full functionality of Giveth and other dApps by using MetaMask, but can still access your funds using your regular Torus login if you wish.
### Get your Torus Private Key
Once you’re signed in to your Torus wallet, navigate to the `Settings` page using the menu at the top of the page. Once on the `Settings` page, click `Account Details` in the `Privacy and Security` section. This will open a pop-up with two options for getting your private key.

<img alt='Download Private Key in Torus' width='75%' height='auto' class='center' src={useBaseUrl('img/content/toruspk.png')} />

The first option is to download a soft copy of your private key as a JSON file. When you select this option you will be prompted to create a password that will later be used to import the file into MetaMask. Create your password, then download the file.
The second option is to show the private key and copy it. This method is less secure since it both shows the private key and copies it to your operating system clipboard. Once copied, your private key can be pasted into MetaMask to import the private key. If you use this option, do not save a copy of your private key. If your system is ever compromised, your private key will be as well.
### Import Private Key
Assuming you are set up and logged in with your Metamask wallet, the next step is to import your private key into MetaMask. First, click the circular icon in the top right corner of your MetaMask wallet. This will open the accounts menu. Click the `Import Account` option in this menu. Here you can use the `Select Type` option to select which option you’d like to use to import your private key.

<img alt='Import Private Key into MetaMask' width='50%' height='auto' class='center' src={useBaseUrl('img/content/mmimportkey.png')} />


If you copied your private key from Torus, the `Private Key` option will let you paste the key into MetaMask. If you downloaded the JSON file, select `JSON File`, then use the `Choose File` button to select the private key JSON you downloaded from Torus. Enter the password you created to download the private key file from Torus, then click `Import`. Your new account should now appear in MetaMask and be ready to interact with the GIVeconomy dApps!

<img alt='Paste Private Key' height='auto' width='40%' class='leftfloat' src={useBaseUrl('img/content/mmimportkey1.png')} />
<img alt='Select Private Key File' height='auto' width='40%' src={useBaseUrl('img/content/mmimportkey2.png')} />
