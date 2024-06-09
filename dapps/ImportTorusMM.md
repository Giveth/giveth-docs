---
id: importTorusMM
title : Import Torus Private Key into Metamask
slug: dapps/importTorusMM
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../src/css/custom.css'

The purpose of this guide is to explain how to import Torus private key into a MetaMask wallet, thereby enabling broader functionality and easier access to decentralized applications (dApps).

For instructions on how to get started with a MetaMask wallet, [check out this article from the Metamask team](https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask).

## Transfer Your Funds to MetaMask
Once you are logged into your Torus wallet, navigate to the transfer page using the navigation bar at the top of the page. 

1. Copy the public key from MetaMask.
2. Paste into the ‘Transfer to’ line.
3. Enter the amount you’d like to send.

Once you are satisfied with the parameters of the transaction, click the transfer button at the bottom of the page.
If you have multiple tokens in your Torus Wallet, you will have to repeat this process for each token. 

<img alt='Download Private Key in Torus' width='75%' height='auto' class='center' src={useBaseUrl('img/content/transferTorusMM.png')} />

## Import Torus Private Key Into MetaMask

### Get your Torus Private Key
Once you’re signed in to your Torus wallet, navigate to the `Settings` page using the menu at the top of the page. Once on the `Settings` page, click `Account Details` in the `Privacy and Security` section. This will open a pop-up with two options for getting your private key.

<img alt='Download Private Key in Torus' width='75%' height='auto' class='center' src={useBaseUrl('img/content/toruspk.png')} />

Choose the option to download a JSON file with your private key or to view and copy the private key securely.

### Import Private Key
Assuming you are set up and logged in with your Metamask wallet, the next step is to import your private key into MetaMask. First, click the circular icon in the top right corner of your MetaMask wallet. This will open the accounts menu. Click the `Import Account` option in this menu. Here you can use the `Select Type` option to select which option you’d like to use to import your private key.

<img alt='Import Private Key into MetaMask' width='50%' height='auto' class='center' src={useBaseUrl('img/content/mmimportkey.png')} />

Important note : Your private key is crucial for accessing and managing your funds securely. To maintain the security of your accounts, never share your private key with anyone.


If you copied your private key from Torus, the `Private Key` option will let you paste the key into MetaMask. If you downloaded the JSON file, select `JSON File`, then use the `Choose File` button to select the private key JSON you downloaded from Torus. Enter the password you created to download the private key file from Torus, then click `Import`. Your new account should now appear in MetaMask and be ready to interact with the GIVeconomy dApps!

<img alt='Paste Private Key' height='auto' width='40%' class='leftfloat' src={useBaseUrl('img/content/mmimportkey1.png')} />
<img alt='Select Private Key File' height='auto' width='40%' src={useBaseUrl('img/content/mmimportkey2.png')} />
