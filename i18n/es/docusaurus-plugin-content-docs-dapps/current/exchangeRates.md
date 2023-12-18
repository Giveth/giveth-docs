---
id: exchangeRates
title: Los tipos de cambio
slug: dapps/exchangeRates
---
import TraceDeprecated from './_traceDeprecatedES.mdx'

<TraceDeprecated />

Cuando dejas un trace dentro de [Giveth TRACE](https://beta.giveth.io), puedes ingresar una cantidad en éter o en fiat. Luego, nuestro sistema calcula automáticamente la tasa de conversión en función de la fecha del trace.

En nuestro backend de Feathers, mantenemos un caché del tipo de cambio promedio diario para cada fecha. Usamos [Crypto Compare](https://min-api.cryptocompare.com/) y [CoinGecko](https://www.coingecko.com/en/api) para obtener estas tarifas.

Cuando ingresa un monto de moneda en un trace, obtenemos la tasa de conversión almacenada en caché de Feathers y calculamos el resultado en la interfaz de usuario. Cuando guarda el trace, verificamos esa conversión nuevamente para asegurarnos de que todo sea correcto.

Actualmente admitimos el manejo de pagos en ETH, SAI, DAI, PAN, WBTC, USDC Ethereum Mainnet Tokens. Las monedas nativas incluidas en la lista blanca para las comparaciones de precios de pares comerciales son BTC, ETH, AUD, GBP, USD, MXN, CAD, CZK, THB, BRL, CHF.