---
id: torusUserGuide
title: Using the Torus Wallet
slug: dapps/torusUserGuide
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../src/css/custom.css'

The Torus wallet is a great option for newcomers to crypto. Using web3 technology it allows you to create an Ethereum wallet that's linked to your identity via your chosen social media platform. With the Torus wallet, you can send and receive cryptocurrencies and buy crypto with fiat currency using the Torus "wallet top-up" option.


## Sign-In
Using the Giveth.io Application, it's very easy to get started. On the homepage click `sign-in`, and you will be given a choice of which platform you want to use to confirm your identity (e.g., Gmail, Twitter, Discord, Facebook, etc.). After choosing your platform, approve the "Permission" pop-up, and that's it! Torus automatically generates an Ethereum wallet address for you that you can view on the drop down menu in the top right of the Giveth.io homepage.

<img alt="Finding your Torus Wallet" src={useBaseUrl('img/content/givethio/myWalletTorus.png')} />


You can access your Torus wallet direcly from the [Torus website](https://app.tor.us/) by signing in using the same social media account that you used on Giveth.io. From the Torus page, you'll see lots of important information, including your wallet balance, your Ethereum address and other useful settings.

*If you aren't sure what an Ethereum wallet or Ethereum address is, this is a good time to take 10 minutes and **learn about some basic fundamentals relating to Ethereum** and cryptocurrency in general. We recommend reading some of the great ethereum.org documentation, particularily on [wallets](https://ethereum.org/en/wallets/) and [what Ethereum is](https://ethereum.org/en/what-is-ethereum/).*

## Managing Your Wallet

From the [Torus page](https://app.tor.us/) you can check your wallet balance across a wide range of different different networks. You can also see your public address, and copy it to your clipboard in the top right area of the page.

<img alt="Torus Account Homepage" src={useBaseUrl('img/content/givethio/torusAccountpage.png')} />

Presently, Giveth projects can receive donations either on Gnosis Chain (formerly xDai Network) or Mainnet. By default, Torus will show you your Mainnet wallet balance. If you received donations on Gnosis Chain, you can check your balance by changing the network on the network drop down menu to Gnosis Chain.

### Finding your Tokens
If you received a donation to your project but it doesn't show up in your Torus wallet, you likely have to specify which token Torus should look for. This is done by adding the token address. Check your project's donations page on Giveth.io to see in which token(s) you've received donations.

<img alt="Checking your Project Donations" src={useBaseUrl('img/content/givethio/projectDonations.png')} />

You can look up the token on several different crypto analytics sites. [CoinGecko](https://www.coingecko.com/en) or [CoinMarketCap](https://coinmarketcap.com/) are reputable sites. Search for your token by its name or ticker symbol, then copy the "Contract Address" from the token's information page. Here is an example for UNI:


<img alt="CoinGecko Contract Address" src={useBaseUrl('img/content/givethio/tokenAddresscoingecko.png')} />



Paste the string of characters into the `Add Token` pop-up window from your Torus account. Clicking `Next` should auto-fill the rest of the information. Your token should now show up, and you can view and manage it from you wallet.

<img alt="Adding Tokens in Torus" height="500"  width="auto" class='center' src={useBaseUrl('img/content/givethio/addTokenTorus.png')} />

### More Functions
If you want to buy crypto using fiat currency, you can do so using the "Top Up" option. We have written a small guide to help you out with the fiat [on-ramping process](./torusonramp.md).

To send crypto you own to another wallet use `Transfer`. You will need Ethereum (ETH) in your wallet to be able to "pay the gas" necessary for your transaction. More on gas [here](https://ethereum.org/en/developers/docs/gas/).



### Interacting with the GIVeconomy

To interact with the [GIVeconomy](https://giveth.io/) and other dApps using the Torus wallet, you will have to connect your wallet. To connect, click the `Connect Wallet` icon in the upper right corner of the site, then select Torus and verify. The Torus wallet allows users to sign in with accounts from many different web services, so be sure to sign in with the same account you used to set up the wallet.

<img alt="Signing in with Torus on the GIVeconomy" width="75%" height="auto" class='center' src={useBaseUrl('img/content/giveconomyTorusConnect.png')} />

If you are using the Brave browser, you will need to turn off Brave’s Shield feature. To do this, click the Brave logo to the right of the search bar, then toggle the Shield to off.

<img alt="Turning shields off with Brave" class='center'  width="50%" height="auto" src={useBaseUrl("img/content/giveconomyShieldsDown.png")} />


### Other Wallets
As mentioned, the Torus wallet is great for beginners. Using familiar social media platforms for managing your identity is a great way to get started. However, if you decide to get serious about crypto, there is a vast array of other wallets out there. Some wallets are easier to integrate with other chains, offer more privacy or allow for more advanced interactions. Some wallets exist as web3 extensions like Torus, others are a physical device, like a hardware wallet that you need to connect to your computer to access and manage your crypto. If you decide to go wallet shopping, you can find a list of the most popular ones [here](https://ethereum.org/en/wallets/find-wallet/).
