---
id: torusonramp
title: Donating with Fiat via the Torus on-ramp
slug: dapps/torusonramp
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../src/css/custom.css'

This guide will take you through the steps of donating your fiat currency using Torus. To do so, you'll use a third party payment provider to send your fiat to Torus, which will 'top-up' your Torus wallet with your chosen cryptocurrency. That cryptocurrency that was converted from fiat will then be donated to the project you've selected. There are fees associated with this conversion from Torus as well as the third party provider that you choose. We'll walk you through the steps, but depending on your native currency, the payment provider you use and the crypto you're converting to, things might look a bit different.

Once you’re logged in with your Torus wallet, click “Donate” on the project you’ve selected.

<img id="contentimg" alt='Donating to the Project' src={useBaseUrl('img/content/projectselect.png')} />

A transaction pop-up window will then say, 'Insufficient Funds'. OK, let's fix that.
<img alt='Top up Torus Wallet' src={useBaseUrl('img/content/nofunds.png')} />

Open up your wallet in the Torus app. If you’re asked to log in, make sure to use the same social media account that you used to log in on Giveth.io. From your Torus wallet, click on the `Top up` tab in the top menu.
<img alt='Top up Torus Wallet' src={useBaseUrl('img/content/topup.png')} />

From there you'll get a list of third party payment providers; look through the fees and currencies they support, and choose the best match for you.

<img id="contentimg" alt='Select Payment Provider' src={useBaseUrl('img/content/selectprovider.png')} />

On the following screen, enter the amount of fiat you would like to donate. Note that the estimate of fees will be reflected here and will be dependent upon the payment provider you selected.

<img id="contentimg" alt='Enter fiat amount to donate' src={useBaseUrl('img/content/torusramp.png')} />

Next you'll be redirected to the website of your selected payment provider. Follow the prompts, which will be different depending on which provider you choose.

An example from the Ramp Network:
<img id="contentimg" alt='Ramp Network Example' src={useBaseUrl('img/content/paymentmethod.png')} />

Once you've completed that, you'll be taken back to the Torus top-up window. You should see your funds there.

Now that you have the funds in your wallet, you can go back to your selected project and proceed to donate!

You can follow up to watch the transaction being confirmed on the block explorer by clicking `View transaction details`. From this point your donation should be done! Thank you and well done!
