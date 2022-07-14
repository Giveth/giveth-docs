---
id: torusUserGuide
title: Using the Torus Wallet
slug: dapps/torusUserGuide
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../../../../src/css/custom.css'

La billetera Torus es una gran opción para los que están empezando en las crypto. Usando tecnología web3 que te permite crearte una billetera Ethereum que está vinculada a tú identidad por alguna de tus redes sociales. con la billetera Torus, tú puedes enviar, recibir y comprar criptomonedas con moneda fiat usando la opción "Recargar" en la billetera Torus.

## Sign-In
Usando la aplicación Giveth.io es muy fácil comenzar. En la página de inicio haces click en `Registrarse` y tendrás la opción de registrarte por medio de alguna de tus redes sociales (Ej., Gmail, Twitter, Discord, Facebook, etc.). Despues de seleccionar tu plataforma debes aprovar los permisos que salen en la ventana emergente y listo! Torus automaticamente genera una dirección de billetera Ethereum para ti, que la puedes ver haciendo click en la opción `Mi Billetera`  en la parte superior derecha del menú desplegable de la página de inicio Giveth.io.

<img alt="Finding your Torus Wallet" src={useBaseUrl('img/content/givethio/myWalletTorus.png')} />


Tú puedes tener acceso a tu propia billetera Torus [Torus website](https://app.tor.us/) iniciando sesión con la misma cuenta de tu red social que usaste en Giveth.io. Desde la página de Torus, podrás ver mucha información importante, incluido el saldo de tú billetera, tú dirección de Ethereum y otras configuraciones útiles.


*Si no estás seguro de lo que es una billetera Ethereum o una dirección Ethereum, es un buen momento para que tomes 10 minutos y  **aprender algunos conceptos básicos relacionados con Ethereum** y las criptomonedas en general. Recomendamos leer parte de la excelente documentación de Ethereum.org, particularmente en [Billeteras](https://ethereum.org/en/wallets/) y [Qué es Ethereum](https://ethereum.org/en/what-is-ethereum/).*

## Administrar tu Billetera

Desde la [Página de Torus](https://app.tor.us/) puedes verificar el saldo de tú billetera en una amplia gama de diferentes redes Ethereum. También puede ver tú dirección pública y copiarla en el portapapeles ubicado en el área superior derecha de la página.

<img alt="Torus Account Homepage" src={useBaseUrl('img/content/givethio/torusAccountpage.png')} />

Actualmente, los proyectos Giveth pueden recibir donaciones en Gnosis Chain (anteriormente xDai Network) o Mainnet. Por defecto Torus te mostrará el saldo de tú billetera Mainnet. Si recibió donaciones en Gnosis Chain, puedes verificar tú saldo yendo a 'Configuración' y seleccionando 'Gnosis Chain' en el menú desplegable 'Red'. Si vuelves a "Inicio", deberías ver el saldo de tú monedero xDai.

### Encontrar tus Tokens
Si recibiste una donación para tú proyecto pero no aparece en la billetera Torus, es probable que debas especificar qué token deba buscar Torus. Esto se hace agregando la dirección del token. Consulte la página de donaciones de tú proyecto en Giveth.io para ver en qué fichas ha recibido donaciones.

<img alt="Checking your Project Donations" src={useBaseUrl('img/content/givethio/projectDonations.png')} />

Puedes mirar el token en varios sitios de análisis criptográfico, [CoinGecko](https://www.coingecko.com/en) or [CoinMarketCap](https://coinmarketcap.com/) son sitios de confianza. Puedes buscar el token de preferencia por su nombre o símbolo de cotización, luego copie la dirección del contrato desde la página de información, aquí un ejemplo para UNI.


<img alt="CoinGecko Contract Address" src={useBaseUrl('img/content/givethio/tokenAddresscoingecko.png')} />



Copie la cadena de caracteres dentro de la ventana emergente `Añadir Token` desde su cuenta de Torus. Al hacer clic en `Siguiente` debería completarse automáticamente el resto de la información. Su token ahora debería aparecer, poder verlo y administrarlo desde su billetera, al igual que Ethereum.


<img alt="Adding Tokens in Torus" height="500"  width="auto" class='center' src={useBaseUrl('img/content/givethio/addTokenTorus.png')} />

### Más Funciones
Si desea comprar criptomonedas con moneda fiat, puede hacerlo mediante la opción "Recargar". Hemos escrito una pequeña guía para ayudarlo con el [proceso de aceleración](./torusonramp.md).

Para enviar criptomonedas de tú propiedad a otra billetera, usa `Transferir`. Necesitarás Ethereum (ETH) en la billetera para poder "pagar el gas" necesario para su transacción. Más sobre gas[Aquí](https://ethereum.org/en/developers/docs/gas/).



### Interactuando con GIVeconomy

Para interactuar con [GIVeconomy](https://giv.giveth.io/) y otras dApps usando la billetera Torus , deberás conectar tú billetera. Para conectarla, haz click en `Conectar Billetera` este ícono está ubicado en la parte superior derecha del sitio, luego selecciona Torus y verifica. La billetera Torus permite a los usuarios iniciar sesión con cuentas de muchos servicios web diferentes, así que asegúrese de iniciar sesión con la misma cuenta que utilizó para configurar la billetera.

<img alt="Signing in with Torus on the GIVeconomy" width="75%" height="auto" class='center' src={useBaseUrl('img/content/giveconomyTorusConnect.png')} />

Si estás utilizando el navegador Brave, deberás desactivar la función Brave's Shield. Para hacer esto, haz clic en el logotipo de Brave a la derecha de la barra de búsqueda, luego desactiva el escudo.

<img alt="Turning shields off with Brave" class='center'  width="50%" height="auto" src={useBaseUrl("img/content/giveconomyShieldsDown.png")} />


### Otras Billeteras
Como se mencionó, la billetera Torus es ideal para principiantes. El uso de plataformas de redes sociales familiares para administrar su identidad es una excelente manera de comenzar. Sin embargo, si decides tomarte en serio las criptomonedas, existe una gran variedad de otros monederos. Algunas billeteras son más fáciles de integrar con otras cadenas, ofrecen más privacidad o permiten interacciones más avanzadas. Algunas billeteras existen como extensiones web3 como Torus, otras son un dispositivo físico, como una billetera de hardware que necesita conectar a su computadora para acceder y administrar el cryto. En fin, si decides ir a por una billetera, puedes encontrar una lista de las más populares [Aquí](https://ethereum.org/en/wallets/find-wallet/).
