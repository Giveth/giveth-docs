---
id: TRACEinstallation
title: Instalación de Giveth TRACE para el desarrollo local
slug: dapps/TRACEinstallation
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import TraceDeprecated from './_traceDeprecatedES.mdx'

<TraceDeprecated />

Esta es una guía completa que guiará a los nuevos colaboradores sobre cómo ejecutar Giveth TRACE localmente. Nos ocuparemos de 2 repositorios que se encuentran en Giveth Github: el [**`giveth-dapp`**](https://github.com/Giveth/giveth-dapp) para el front-end y [** `feathers-giveth`**](https://github.com/Giveth/feathers-giveth) para la interfaz de contratos inteligentes y la base de datos de back-end.

## Instalación de feathers
<img alt='Encabezado de instalación de feathers' src={useBaseUrl('img/content/trace/feathers-header.png')} />

#### Paquetes y aplicaciones necesarios:
- yarn 
- NodeJS v10.24.0
- MongoDB
- Redis
- MetaMask


#### linux
  Si su sistema operativo es una distribución de Linux, puede usar los scripts de instalación todo en uno, un agradecimiento especial al colaborador de Dapp Jurek Brisbane, disponible [aquí](https://github.com/Giveth/giveth-dapp/files/3674808/givethBuildStartScripts_2019-09-29.zip) junto con un [video](https://www.youtube.com/watch?v=rzLhxxAz73k&feature=youtu.be) de Youtube .


#### Cualquier sistema operativo
  1. Haga clic en la **Estrella** de este repositorio cerca de la esquina superior derecha de esta página web (si lo desea).
  2. Únase a nuestro [Discord de colaboradores](https://discord.giveth.io) si aún no lo ha hecho.
  3. Haga un forl este repositorio haciendo clic en el botón **Fork** en la esquina superior derecha de esta página web. Continúe siguiendo los pasos de instrucciones de su propio repositorio de feathers-giveth.
  5. El resto de estos pasos deben realizarse desde la línea de comandos de su máquina. Clone su propio repositorio "feathers-giveth". Copie el enlace del botón "Clonar o descargar" cerca de la parte superior derecha de la página de inicio de este repositorio.
      ```bash
      clon de git git@github.com:Giveth/feathers-giveth.git
      ```
  6. Cambie los directorios a Feathers-Giveth:
      ```bash
      cd feathers-giveth/
      ```
  5. Asegúrese de tener [NodeJS](https://nodejs.org/) (v10.24.0), [yarn](https://www.yarnpkg.com/) (v0.27.5 o superior) y npm (5.4.1 o superior) instalado.
  6. Instale las dependencias desde el directorio Feathers-Giveth:
      ```bash
      yarn install
      ```
  7. Instale Mongo (recomendamos instalar a través de [Brew](https://treehouse.github.io/installation-guides/mac/mongo-mac.html)).
  8. Ejecute Mongo en una ventana de terminal `mongod` o en segundo plano `mongod --fork --syslog`.
  9. Instale Redis (recomendamos instalar a través de Brew `brew install redis`).
  10. Ejecute Redis en la ventana de terminal `redis-server` o en segundo plano `redis-server --daemonize yes`.
  11. (opcionalmente) Instale [IPFS](https://ipfs.io/docs/install/) (recomendamos instalar a través de [Brew](https://brew.sh/)).
     **Si no instala ipfs, la carga de imágenes se verá afectada. Puede actualizar el valor de configuración `ipfsGateway` para usar una puerta de enlace ipfs pública, por ejemplo. [https://ipfs.io/ipfs/](https://ipfs.io/ipfs/), sin embargo, sus cargas se eliminarán en algún momento.*

### Ejecutar servidor
El servidor Feathers deberá conectarse a un nodo Ethereum a través de WebSocket. Por lo general, será una instancia TestRPC local.
El parámetro de configuración `blockchain.nodeUrl` se usa para establecer una conexión. El nodoUrl predeterminado es `ws://localhost:8545`

1. Necesitamos desplegar cualquier contrato al que pretendemos llamar. *NOTA:* El siguiente cmd borrará el directorio `data`, comenzando así en un estado limpio.

   ```bash
  yarn deploy-local
   ```

   Después de la implementación local, asegúrese de copiar y pegar la dirección de MiniMeToken en default.json.

2. Proporcionamos una manera fácil de iniciar el puente y 2 instancias de ganache-cli. *MUY IMPORTANTE:* este comando habilita las redes Home Ganache y Foreign Ganache; si está utilizando MetaMask, deberá ** agregar un RPC personalizado ** a la configuración de su red; `http://localhost:8546` será Foreign Ganache, y Home Ganache normalmente se agrega de forma predeterminada, que es `http://localhost:8545` si es necesario.

    ```bash
    yarn start:networks
    ```
3. Dado que bridge & ganache-cli ahora se está ejecutando, abra una nueva ventana de terminal y navegue hasta el mismo directorio de feathers-giveth.

4. Opcionalmente, abra una nueva ventana de terminal e inicie el ipfs daemon.

   ```bash
  ipfs daemon
   ```
5. Ejecute los archivos de migración de la base de datos (si es la primera vez que desea iniciar la aplicación, no es necesario para ejecutar las migraciones).
   ```bash
    ./node_modules/.bin/migrate-mongo up
   ```
5. Inicie su aplicación.

    ```bash
     yarn start
    ```

### Mata a Ganache
Si se encuentra con errores como que el saldo de la billetera no se carga, es muy probable que Ganache esté atascado.
`netstat-vanp tcp | grep 8545`
Encuentre el proceso que está escuchando en `*.8545` y `127.0.0.1.8545`, y elimínelo con `kill -9 PID` (que está en la última columna).

### Soporte IPFS
Si `ipfsApi` es un nodo ipfs válido al que podemos conectarnos, fijaremos cada hash ipfs que esté almacenado en plumas. Actualmente no eliminamos ningún hash ipfs huérfano (hashes sin referencias en plumas). En el futuro, proporcionaremos un script que puede ejecutar como un cronjob para desanclar cualquier hash huérfano.

### Recorrido en vídeo
Tutorial de video tutorial aquí: https://tinyurl.com/y9lx6jrl

### Scripts

El directorio `feathers-giveth/scripts` contiene algunos scripts para ayudar al desarrollo.

* `deploy.js`: implementa una nueva bóveda y un contrato de LiquidPledging

* `getState.js`: imprime el estado actual de la bóveda implementada y los contratos de liquidPledging

* `confirm.js` - confirma cualquier pago que esté pendiente en la bóveda

* `makeUserAdmin.js` - hacer que un usuario sea administrador

### Pruebas

Simplemente ejecuta `yarn test` y se ejecutarán todas tus pruebas en el directorio `/src`.
Se incluyen algunas pruebas de integración, por lo que para ejecutar las pruebas, debe ejecutar mongodb en su sistema local (en el puerto 27017).

### Depuración

Puede controlar el nivel de registro con la variable de entorno `LOG_LEVEL`. Los niveles disponibles se pueden encontrar en: https://github.com/winstonjs/winston/tree/2.x#logging-levels

Para habilitar el registro de depuración, simplemente inicie el servidor con `LOG_LEVEL=debug yarn start`.

## Producción

Usamos docker-compose para orquestar nuestros contenedores docker en nuestros servidores de producción.
* asegúrese de tener un archivo llamado `production.json` en la carpeta de configuración.
* Instale docker y docker-compose en su servidor.
* ejecute este comando: `docker-compose -f docker-compose-production.yml up -d`.

PD: Es bueno ver la configuración de Github Actions (`./.github/workflows/CI-CD.yml`) para comprender mejor la estructura de implementación.

## RSK

1. Deberá descargar el [nodo rsk](https://github.com/rsksmart/rskj/wiki/Install-RskJ-and-join-the-RSK-Orchid-Mainnet-Beta). Después de la instalación, ejecutará el nodo con la red `regtest` para el desarrollo local.

  ```
  java -jar rskj-core-0.5.2-ORCHID-all.jar co.rsk.Start --regtest
  ```
  o
  ```
  java -Drsk.conf.file=rsk.conf -jar rskj-core-0.5.2-ORCHID-all.jar co.rsk.Start
  ```

2. Necesitamos implementar cualquier contrato que tengamos la intención de llamar. *NOTA:* También deberá asegurarse de que su nodo rsk esté en un estado limpio (restablecido) para que las direcciones configuradas sean correctas.

   ```
   npm run deploy-local:rsk
   ```

3. Opcionalmente, abra una nueva ventana de terminal e inicie el ipfs daemon.

   ```
   ipfs daemon
   ```

4. Inicie su aplicación.

    ```
    yarn start: rsk
    ```

## Registro de auditoría
El sistema de registro de auditoría registra cada creación, actualización, parche y
Eliminar en **Campañas**, **Traces**, **Eventos**, **Usuarios**,
**PledgeAdmins**, **Comunidades**, **Donaciones**.
Para habilitar el registro de auditoría localmente, debe cambiar `enableAuditLog`
en config a `true`, entonces
* cd elk
* docker-compose up

Puede ver los registros después de iniciar sesión en `localhost: 5601` con usuario: `elastic`, contraseña: `changeme`.

### Uso

Cada uno de estos servicios está disponible a través de rRest o WebSocket:

```
campañas
comunidades
donaciones
donationsHistory
traces
uploads
usuarios
correos electrónicos
homePaymentsTransactions
suscripciones
```
Si el servidor utiliza configuraciones predeterminadas, puede ver los datos de cualquiera de estos servicios a través de su navegador web en `http://localhost:3030/SERVICE_NAME`

PD: para acceder a todas las funciones, como crear "comunidades" y "campañas", se recomienda
haga que el campo `isAdmin` sea verdadero, para su usuario en su MongoDb local.

## Instalación de Giveth DApp (Giveth TRACE front-end)
<img alt='Encabezado de instalación de Giveth-DApp' src={useBaseUrl('img/content/trace/giveth-dapp-header.png')} />

### Empezando
En las siguientes secciones, aprenderá todo lo que necesita saber para ejecutar la DApp localmente y comenzar a contribuir. Todos los pasos también se describen en este increíble [Tutorial en video](https://tinyurl.com/y9lx6jrl) de Oz.

#### Requisitos previos
- NodeJS v10 LTS.
- yarn (v1.22.10 o superior)
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Instalar
1. Haga clic en **Estrella** en el repositorio [`giveth-dapp`](https://github.com/Giveth/giveth-dapp) cerca de la esquina superior derecha de esta página web (si lo desea).
2. Únase a nosotros en [Element](http://join.giveth.io) o [Discord](https://discord.gg/Uq2TaXP9bC) si aún no lo ha hecho.
3. Haga un fork de este repositorio haciendo clic en el botón **Fork** en la esquina superior derecha de esta página web. Continúe siguiendo los pasos de instrucciones de su propio repositorio giveth-dapp.
4. Clone su propio repositorio "giveth-dapp". Copie el enlace del botón "Clonar o descargar" cerca de la parte superior derecha de la página de inicio de este repositorio.
5. El resto de estos pasos deben realizarse desde la línea de comandos de su máquina. Consulte la sección [OSX y Linux](#for-osx-and-linux) o [Windows](#for-windows) para continuar.

#### <a id='para-osx-y-linux'>OSX y Linux</a>
Si su sistema operativo es cualquier distribución de Linux, puede usar los scripts de instalación todo en uno, un agradecimiento especial al colaborador de Dapp Jurek Brisbane, disponible [aquí](https://github.com/Giveth/giveth-dapp/files/3674808/givethBuildStartScripts_2019-09-29.zip) junto con un [video](https://www.youtube.com/watch?v=rzLhxxAz73k&feature=youtu.be) de Youtube , de lo contrario, intente lo siguiente:

1. Desde el directorio deseado en el que desea copiar la carpeta "giveth-dapp" con los archivos de origen.
    ```bash
    git clone git@github.com:Giveth/giveth-dapp.git
    ```
   NOTA: utilice la rama `develop` para contribuir.
    ```bash
    git clone -b develop git@github.com:Giveth/giveth-dapp.git
    ```
2. Cambiar directorios a giveth-dapp:
    ```bash
    cd giveth-dapp
    ```
3. Asegúrese de tener [NodeJS](https://nodejs.org/) (v10) y [yarn](https://yarnpkg.com/) (v1.22.10 o superior) instalados.
4. Instale las dependencias desde el directorio giveth-dapp:
    ```bash
    yarn install
    ```
5. Eso es todo: ¡ahora está listo para ejecutar giveth-dapp! Dirígete a la sección [Ejecutar DApp](#run) para obtener más instrucciones.

#### <a id='para-windows'>Windows</a>
1. Instale la última versión de Python desde este [Enlace](https://www.python.org/downloads/). (Asegúrese de que Python esté agregado a $PATH).
2. Instale Microsoft Visual Studio 2017 (compruebe dos veces la versión) desde este [enlace](https://download.visualstudio.microsoft.com/download/pr/3e542575-929e-4297-b6c6-bef34d0ee648/639c868e1219c651793aff537a1d3b77/vs_buildtools.exe). Giveth-Dapp necesita el módulo node-gyp, y node-gyp necesita que se instalen las herramientas de compilación VS C++ 2017.
3. Después de la descarga, instale los paquetes marcados en esta [imagen](https://cdn.discordapp.com/attachments/849682448102457374/850480734291623946/unknown.png).
4. Luego ejecute el comando a continuación en el símbolo del sistema
   ```bash
   npm config set msvs_version 2017
   ```
5. Después de instalar lo anterior, debe instalar NodeJS versión 10 [LTS](https://nodejs.org/dist/latest-v10.x/) (es mejor que sea v10.24.1 LTS).
6. Descargue y ejecute el instalador node-v10.24.1-x64.msi, luego continúe con la instalación normalmente. Asegúrese de tener habilitada la opción "Enable in PATH" antes de instalar.
7. Abra la línea de comandos en modo administrador haciendo clic derecho en la aplicación cmd.exe y seleccionando "Ejecutar como administrador"
8. En el símbolo del sistema del administrador, cambie al directorio donde desea almacenar este repositorio.
   ```bash
   cd C:\algún\directorio\para\repositorios
   ```
9. Verifique dos veces la versión del nodo con el comando CMD:
   ```bash
   node -v
   ```
10. Después de eso, instala la última versión de Yarn. Tenga cuidado de no instalar paquetes con NPM. Si ya probó "npm install", primero debe eliminar la carpeta "módulos de nodo".
    ```bash
    yarn install
    ```
11. Eso es todo: ¡ahora está listo para ejecutar giveth-dapp!

### <a id='ejecutar'>Ejecutar</a>
1. La dapp de Giveth deberá conectarse a un servidor [feathers-giveth](https://github.com/Giveth/feathers-giveth). Siga las instrucciones de readme de Feathers-Giveth para instalar y ejecutar el servidor antes de continuar. Alternativamente, puede cambiar la configuración para conectarse al entorno `develop`, consulte la sección [Configuración](#configuración).
2. Inicie la dapp.
    ```bash
    yarn start
    ```
3. Una vez que la dapp esté activa en su navegador, haga clic en "Iniciar sesión" en el menú principal.
4. Para probar localmente, elija cualquiera de los archivos de billetera que se encuentran en la carpeta `giveth-dapp/keystores/` usando la contraseña de la billetera: `password`. **NO USE ESTOS EN NINGÚN EVM DE LA MAINNET.**

5. Usando el token de prueba
   Para usar el token de prueba, debe importar el keystore.json que usa para su cuenta a MetaMask.
   Después de importar, haga clic en 'Agregar token' > 'Token personalizado' e ingrese la dirección del token MiniMe que se puede encontrar al implementar los contratos
   (debería ser `0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab` por defecto, pero asegúrese de comprobarlo).
   El saldo del token debería aparecer automáticamente y el símbolo del token es MMT.
   Sin embargo, en la DApp, el símbolo del token se denomina ANT, porque la DApp debe poder obtener una tasa de conversión.

NOTA:
Al restablecer feathers o volver a implementar los contratos, debe eliminar el almacén de claves de Metamask y seguir este procedimiento nuevamente.

### Construir
```bash
yarn run build
```

NOTA: debido a algunas bibliotecas web3 que no se transpilan desde es6, tenemos que usar nuestros [giveth-react-scripts](https://github.com/Giveth/create-react-app/tree/master/packages/react-scripts) fork de react-scripts.

### <a id='configuración'>Configuración</a>
La DApp tiene varias variables de entorno de node que se pueden usar para modificar el comportamiento de la DApp sin cambiar el código. Puede configurarlos a través de los archivos `.env` o `.env.local` en la carpeta DApp.

Nombre de la variable | Valor predeterminado | Descripción |
---|---|---|
PUERTO | 3010 | Puerto en el que se ejecuta la DApp |
REACT_APP_ENVIRONMENT | 'localhost' | A qué entorno de feathers debe conectarse la DApp. Por defecto se conecta a las feathers localhost. Los valores permitidos son: `localhost`, `develop`, `release`, `alpha`, `mainnet`. Consulte [Entornos de implementación](#deploy-environments). |
REACT_APP_DECIMALS | 8 | Cuántos decimales se deben mostrar para los valores de criptomonedas. Tenga en cuenta que los cálculos todavía se hacen con 18 decimales. |
REACT_APP_FEATHERJS_CONNECTION_URL | Difiere por REACT_APP_ENVIRONMENT | Sobrescribe la URL de conexión de las feathers inyectadas en el entorno. |
REACT_APP_NODE_CONNECTION_URL | Difiere por REACT_APP_ENVIRONMENT | Sobrescribe la URL de conexión del nodo EVM para realizar transacciones EVM. |
REACT_APP_LIQUIDPLEDGING_ADDRESS | Difiere por REACT_APP_ENVIRONMENT | Sobrescribe la dirección del contrato de Liquid Pledge. |
REACT_APP_DAC_FACTORY_ADDRESS | Difiere por REACT_APP_ENVIRONMENT | Sobrescribe la dirección del contrato de Comunidades. |
REACT_APP_CAMPAIGN_FACTORY_ADDRESS | Difiere por REACT_APP_ENVIRONMENT | Sobrescribe la dirección del contrato de Campaign Factory. |
REACT_APP_MILESTONE_FACTORY_ADDRESS | Difiere por REACT_APP_ENVIRONMENT | Sobrescribe la dirección del contrato de MilestoneFactory. |
REACT_APP_TOKEN_ADDRESSES | Difiere por REACT_APP_ENVIRONMENT | Sobrescribe las direcciones de token puenteadas. Esta es una cadena de objeto JSON con nombre de token: dirección de token. |
REACT_APP_BLOCKEXPLORER | Difiere por REACT_APP_ENVIRONMENT | Sobrescribe la URL base del explorador de bloques. La DApp asume que dicha API de blockexplorer es `\<BLOCKEXPLORER\>/tx/\<TRANSACTION_HASH\>` |
REACT_APP_DEFAULT_GASPRICE | 10 | Sobrescribe el precio de gas predeterminado que se usa si el servicio de ethgasstation está inactivo. El valor está en gwei. |
REACT_APP_ANALYTICS_KEY | "" | Sobrescribe la clave de análisis `Segment`.

Ejemplo de archivo `.env.local` que hace que la DApp se ejecute en el puerto 8080, se conecta al entorno de **desarrollo** y usa el explorador de bloques personalizado:

```bash
PUERTO=8080
REACT_APP_ENVIRONMENT='develop'
REACT_APP_BLOCKEXPLORER='www.awesomeopensourceexplorer.io'
```

El resto de la configuración se puede encontrar en `configuration.js`

### Análisis
Segment Analytics se puede habilitar configurando REACT_APP_ANALYTICS_KEY.

### Cadenas de consulta
¡La vista de creación/propuesta de hitos ahora admite argumentos de cadena de consulta!
Los siguientes argumentos están disponibles:

| Argumento | Valores esperados | Tipo |
|------------------------|------------------------------ ------------------------------|--------|
| title | El título del hito | string |
| description | La descripción del hito | string |
| recipientAddress | La dirección del destinatario | string |
| reviewerAddress | La dirección del revisor | string |
| selectedFiatType | Un tipo de fiat válido (es decir, USD) | string |
| date | Un string de fecha de hito válida | string |
| token | Un símbolo de token válido (es decir, DAI) | string |
| tokenAddress | Una dirección de token válida | string |
| maxAmount | Una cantidad máxima válida de ETH o token | número |
| fiatAmount | Una cantidad máxima válida de dinero fiduciario (según el tipo de fiat seleccionado) | número |
| isCapped | Determina si el hito debe tener un tope | 0 o 1 (booleano) |
| requireReviewer | Determina si el hito debe requerir un revisor | 0 o 1 (booleano) |

### Desarrollo local
Al principio, le gustaría ejecutar la DApp localmente. Cuando ejecuta `testrpc` localmente en modo `determinista`, puede usar cualquiera de los almacenes de claves en `giveth-dapp/keystores` como su billetera.
Esto le proporcionará acceso a las cuentas de testrpc para el desarrollo local. Cada almacén de claves utiliza la misma contraseña: `password`. **NO USE ESTOS EN NINGÚN EVM DE LA MAINNET**

Los almacenes de claves están sembrados con 10.000 tokens ANT para probar las donaciones. Para empezar a probar las donaciones,
asegúrese de agregar el almacén de claves de su cuenta a MetaMask y cambie MetaMask a Ganache. El modo de donación debe muestrar el saldo apropiado al donar en tokens ANT.

**NOTA**: si obtiene un error de nonce en MetaMask o si la DApp no ​​se carga con su MetaMask desbloqueada, podría deberse a que MetaMask está confundido. Debe ir a "configuración" -> "Restablecer cuenta" en MetaMask para restablecer los datos de la cuenta nonce y en caché.

### Pruebas de desarrollo y relaciones públicas
1. Giveth Dapp se implementa automáticamente desde la branch develop y está disponible en Rinkeby [develop.giveth.io](https://develop.giveth.io). Todas las solicitudes de Pull request(PR) se implementan automáticamente y la vista previa de relaciones públicas se generará al enviarlas. Para obtener información sobre cómo acceder a las vistas previas de relaciones públicas, consulte [Proceso de desarrollo y control de calidad](https://wiki.giveth.io/documentation/DApp/product-development-testing/) en nuestro wiki.
2. Para usar la DApp, deberá crear una cuenta. Si esta es su primera vez, haga clic en "registrarse" para crear una cuenta. Si ya tiene un archivo de llavero válido, utilícelo para iniciar sesión.
3. Necesitará probar ether en la red Rinkeby. Vaya a la página de "billetera" para ver su nueva dirección (0x..). Copie esa dirección y use Faucet para obtener algo: https://faucet.rinkeby.io/.
### <a id='deploy-environments'>Deployment Environments</a>
At Giveth, we are using the [gitflow](http://nvie.com/posts/a-successful-git-branching-model/) branching model to deploy to 4 different environments.

Nombre | Blokchain | Branch desplegada | Implementación automática | Uso |
-----|------------|-----------------|------------- |-----|
[Mainnet](https://mainnet.giveth.io) | Red principal de Ethereum | master | no | Despliegue de la Mainnet por ahora abandonado debido a los altos costos de transacción hasta que se encuentre una solución sostenible.
[alpha](https://alfa.giveth.io) | 	Rinkeby Test Network | master | no | Entorno utilizado como versión de producción hasta que se resuelva la escalabilidad.
[release](https://release.giveth.io) | 	Rinkeby Test Network | release | si | Entorno para pruebas de control de calidad de candidatos de lanzamiento por parte de no-desarrolladores.
[develop](https://develop.giveth.io) | 	Rinkeby Test Network | develop | si | Entorno de desarrollo para la integración de nuevas funcionalidades. Las ramas de funciones y solicitudes de incorporación de cambios también se implementan automáticamente en este entorno.

Puede cambiar el entorno al que se conecta la DApp a través de las variables de entorno del nodo. Consulte la sección [Configuración](#Configuración) para obtener más detalles.