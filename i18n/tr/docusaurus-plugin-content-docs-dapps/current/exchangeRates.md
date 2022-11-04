---
id: exchangeRates
title: Exchange Rates
slug: dapps/exchangeRates
---
import NotTranslatedMessage from '../../_notTranslatedTR.mdx'
import TraceDeprecated from './_traceDeprecatedTR.mdx'

<TraceDeprecated />
<NotTranslatedMessage />


When you leave a Trace within [Giveth TRACE](https://beta.giveth.io), you can enter an amount in ether or in fiat. Our system then automatically calculates the conversion rate based on the date of the Trace.

In our Feathers backend we keep a cache of the daily average exchange rate for each date. We use [Crypto Compare](https://min-api.cryptocompare.com/) and [CoinGecko](https://www.coingecko.com/en/api) to fetch these rates.

When you enter a currency amount in a Trace, we fetch the cached conversion rate from Feathers and calculate the result in the UI. When you save the Trace we check that conversion again to make sure all is correct.

Currently we support handling payments in ETH, SAI, DAI, PAN, WBTC, USDC Ethereum Mainnet Tokens. Native currencies whitelisted for trading pair price comparsions are BTC, ETH, AUD, GBP, USD, MXN, CAD, CZK, THB, BRL, CHF.
