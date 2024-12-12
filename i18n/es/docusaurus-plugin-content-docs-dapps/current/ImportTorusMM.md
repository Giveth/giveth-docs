---
id: importTorusMM
title : Importar clave privada de Torus a Metamask
slug: dapps/importTorusMM
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../../../../src/css/custom.css'


Los usuarios de Giveth tienen la oportunidad de ganar [GIV](/giveconomy/) al interactuar con [GIVeconomy](https://giveth.io/giveconomy). Los usuarios de Torus pueden reclamar [GIVbacks](https://giveth.io/givbacks), participar en [GIVfarm](https://giveth.io/givfarm), reclamar su [GIVstream](https:/ /giveth.io/givstream) y [reclamar su GIVdrop](https://giveth.io/claim) ([si es elegible](/giveconomy/givdrop)), pero los usuarios de MetaMask se benefician de una mayor experiencia de usuario optimizada.  Además, actualmente [GIVgarden](https://gardens.1hive.org/#/xdai/garden/0xb25f0ee2d26461e2b5b3d3ddafe197a0da677b98) no incluye la integración de la billetera Torus.
Queremos empoderar a los recién llegados a las criptomonedas con los medios para integrarse completamente en la comunidad web3. MetaMask es una billetera de criptomonedas segura y una puerta de entrada altamente optimizada a las aplicaciones de cadena de bloques. El propósito de esta guía es explicar cómo importar la clave privada de Torus en MetaMask, lo que permite una funcionalidad más amplia. Para obtener instrucciones sobre cómo comenzar con una billetera MetaMask, [echa un vistazo a este artículo del equipo de Metamask](https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask).

## ¿Qué es una clave privada?

Tú [Clave Privada](https://www.coinbase.com/learn/crypto-basics/what-is-a-private-key) es una cadena de números y letras que te permite acceder y administrar tus fondos. <span class='importantText'>Nunca debe compartirse con nadie (ni moderadores de la comunidad, ni colaboradores principales de Giveth, ni administradores <i>¡ninguno!</i> )!</span>. Cualquiera que tenga acceso a tú clave privada tiene acceso a tus criptomonedas. Importar tú clave privada de Torus a MetaMask te permite acceder y controlar tus fondos desde ambas billeteras. Esto significa que puedes disfrutar de la funcionalidad completa de Giveth y otras dApps usando MetaMask, pero aún puedes acceder a tus fondos usando el inicio de sesión habitual de Torus si lo desea.
## Obtenga la clave privada de Torus
Una vez que haya iniciado sesión en tu billetera Torus, navega hacia la página `Configuraciones` Una vez en la página `Configuración`, haga clic en `Detalles de la cuenta` en la sección `Privacidad y seguridad`. Esto abrirá una ventana emergente con dos opciones para obtener su clave privada.

<img alt='Download Private Key in Torus' width='80%' height='auto' class='center' src={useBaseUrl('img/content/toruspk.png')} />

La primera opción es descargar una copia electrónica de su clave privada como un archivo JSON. Cuando seleccione esta opción, se le pedirá que cree una contraseña que luego se usará para importar el archivo a MetaMask. Cree su contraseña, luego descargue el archivo.
La segunda opción es mostrar la clave privada y copiarla. Este método es menos seguro ya que muestra la clave privada y la copia en el portapapeles de su sistema operativo. Una vez copiada, su clave privada se puede pegar en MetaMask para importarla. Si usa esta opción, no guarde una copia de su clave privada. Si su sistema alguna vez se ve comprometido, su clave privada también lo estará.
## Importar Clave Privada
Suponiendo que esté configurado e iniciado sesión con su billetera Metamask, el siguiente paso es importar su clave privada a MetaMask. Primero, haga click en el ícono circular en la esquina superior derecha de su billetera MetaMask. Esto abrirá el menú de cuentas. Haga click en la opción `Importar cuenta`. Aquí puede usar la opción `Seleccionar tipo` para seleccionar qué opción le gustaría usar para importar su clave privada.

<img alt='Import Private Key into MetaMask' height='525px' width='auto' class='center' src={useBaseUrl('img/content/mmimportkey.png')} />


Si copió su clave privada de Torus, la opción `Clave Privada` le permitirá pegar la clave en MetaMask. Si descargó el archivo JSON, seleccione `Archivo JSON`, luego use el botón `Elegir archivo` para seleccionar la clave privada JSON que descargó de Torus. Luego ingrese la contraseña que creó para descargar el archivo desde Torus, luego haga click en `Importar` y listo. ¡Su nueva cuenta ahora debería aparecer en MetaMask y estar lista para interactuar con las dApps de GIVeconomy!


<img alt='Paste Private Key' height='475px' width='auto' class='leftfloat' src={useBaseUrl('img/content/mmimportkey1.png')} />
<img alt='Select Private Key File' height='475px' width='auto' src={useBaseUrl('img/content/mmimportkey2.png')} />
