---
id: donatingmetamask
title: Donando con Metamask
slug: dapps/donatingmetamask
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../../../../src/css/custom.css'

Lo guiaremos a través del proceso de hacer una donación criptográfica a través de Metamask aquí. Si no tiene una billetera Metamask, entonces debería [diríjase al sitio web de Metamask y aprenda cómo obtener una](https://metamask.zendesk.com/hc/en-us/articles/360015489531-PrimerospasosconMetaMask)

### Como hacer una donacion

  Una vez que haya elegido un proyecto y establecido una cantidad para donar, continúe y haga clic en el botón `Donar`. Esto debería abrir una ventana emergente de Metamask para confirmar los detalles de la transacción.

 <img id="contentimg" alt='Confirm Metamask transaction' src={useBaseUrl('img/content/metamaskconfirmTransaction.png')} />

 Verifique que la cantidad en la ventana emergente de Metamask se corresponda con la cantidad que especificó en la página del proyecto. Tenga en cuenta que la tarifa de gas de la red Ethereum se agrega al monto de la donación. Asegúrese de tener suficiente Ethereum en su billetera para cubrir las tarifas del gas.

  Si se ve bien, presione `CONFIRMAR` y comenzará su transacción de donación. Debería ver una ventana emergente similar a esta:

 <img  id="contentimg" alt='Transaction in Progress' src={useBaseUrl('img/content/metamaskTransactionprogress.png')} />

 Puede verificar su transacción siguiendo el enlace 'Ver en Etherscan', y también debería ver la transacción emergente en su Metamask en la pestaña 'Actividad'. Tenga en cuenta que aquí usamos la red de prueba de Ropsten para la demostración. Debería usar 'Ethereum Mainnet' para hacer su donación.

  Una vez que la transacción haya sido confirmada en la cadena de bloques, se le llevará a la página siguiente para confirmar su donación exitosa. ¡Buen trabajo!

 <img id="contentimg" alt='Successful Donation' src={useBaseUrl('img/content/metamaskSuccessfulDonation.png')} />

### Para donar con xDai

Si está cansado de pagar tarifas de gas escandalosas en Mainnet, Giveth apoya las donaciones en Gnosis Chain (anteriormente xDai Network). Para obtener Metamask [configuración en Gnosis Chain, vaya aquí](https://www.xdaichain.com/for-users/wallets/metamask/metamask-setup). Inicie sesión con Gnosis Chain a través de MetaMask en Giveth.io. Puede seguir el mismo proceso para hacer donaciones en Gnosis Chain que en Mainnet.
