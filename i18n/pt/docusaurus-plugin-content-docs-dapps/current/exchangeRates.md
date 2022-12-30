---
id: exchangeRates
title: Taxas de Câmbio
slug: dapps/exchangeRates
---
import TraceDeprecated from './_traceDeprecatedPT.mdx'

<TraceDeprecated />

Quando você deixa uma Trace dentro do [Giveth TRACE](https://beta.giveth.io/), você pode inserir um valor em ether ou em moeda fiduciária. Nosso sistema calcula automaticamente a taxa de conversão com base na data da Trace.

Em nosso backend Feathers, mantemos um cache da taxa de câmbio média diária para cada data. Usamos o [Crypto Compare](https://min-api.cryptocompare.com/) e o [CoinGecko](https://www.coingecko.com/en/api) para obter essas taxas.

Quando você insere um valor de moeda em uma Trace, buscamos a taxa de conversão em cache de Feathers e calculamos o resultado na interface do usuário. Quando você salva a Trace, verificamos essa conversão novamente para garantir que tudo esteja correto.

Atualmente, suportamos pagamentos em ETH, SAI, DAI, PAN, WBTC, USDC Ethereum Mainnet Tokens. As moedas nativas permitidas para comparação de preços de pares de negociação são BTC, ETH, AUD, GBP, USD, MXN, CAD, CZK, THB, BRL, CHF.

