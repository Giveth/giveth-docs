---
id: donatingmetamask
title: Donating with Metamask
slug: dapps/donatingmetamask
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../src/css/custom.css'

We'll walk you through the process of making a crypto donation via Metamask here. If you do not have a metamask wallet well then you should [head on over to the Metamask website and learn how to get one!](https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask)

### How to Make a Donation

 Once you have chosen a project and set an amount to donate go ahead and click the `Donate` button. This should bring up a pop-up window from metamask to confirm the transaction details.

 <img id="contentimg" alt='Confirm Metamask transaction' src={useBaseUrl('img/content/metamaskconfirmTransaction.png')} />

 Verify that the amount on the Metamask pop-up corresponds with the amount you specified on the project page. Take note that the gas fee from the Ethereum network is added on top of the donation amount. Make sure you have enough Ethereum in your wallet to cover the gas fees.

 If it looks good hit `CONFIRM` and your donation transaction will start. You should see a pop-up that looks like this:

 <img  id="contentimg" alt='Transaction in Progress' src={useBaseUrl('img/content/metamaskTransactionprogress.png')} />

 You can check your transaction by following the link 'View on Etherscan' and you should also see the transaction pop up on your Metamask under the 'Activity' Tab. a Note that here we used the Ropsten Test Network for demonstration. You should be using 'Ethereum Mainnet' to make your donation.

 Once the transaction has been confirmed on the blockchain you'll be taken to the page next page confirming your successful donation. Nice work!

 <img id="contentimg" alt='Successful Donation' src={useBaseUrl('img/content/metamaskSuccessfulDonation.png')} />

### To Donate with xDai
If you're tired of paying outrageous gas fees on Mainnet Giveth supports donations on the Gnosis Chain (formerly xDai Network). To get Metamask [setup on the Gnosis Chain go here](https://www.xdaichain.com/for-users/wallets/metamask/metamask-setup). Log in with Gnosis Chain via MetaMask on Giveth.io. You can follow the same process for making donations on Gnosis Chain as on Mainnet.
