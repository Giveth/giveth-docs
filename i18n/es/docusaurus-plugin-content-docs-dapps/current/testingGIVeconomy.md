---
id: testingGIVeconomy
title: Guía de prueba de GIVeconomy
slug: dapps/testingGIVeconomy
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '../../../../src/css/custom.css';


Esta es una guía de prueba para usuarios exhaustiva de DApp GIVeconomy. Las pruebas se pueden realizar en el servidor de prueba, que lo puedes encontrar en -> https://staging.giv.giveth.io/.


## Requisitos

* Utilice un navegador moderno. Si encuentras un error, prueba con otro. Notifícanos del error, y si dicho problema es de un navegador en específico.
* Contáctanos aquí -> [GitHub](https://github.com/Giveth/GIVeconomy/issues) para informes y comentarios.

## Casos de Uso

Las siguientes acciones son parte de las funciones principales. Si alguno de estos pasos tiene errores, representa un problema importante.

### General

- Los botones de la página general son funcionales
- Las pestañas `GIVgarden`, `GIVfarm`, etc.. son funcionales
- Los botones ubicados en la barra de navegación superior funcionan
- Puedes iniciar sesión correctamente en la barra de navegación con tu billetera web (Optimizado para MetaMask)
- Los enlaces de pie de página funcionan correctamente


### GIVgarden
El GIVgarden implementa provisionalmente tanto Kovan Network como Gnosis Chain (anteriormente xDai Network). El Token utilizado para esta implementación es el *DRGIV3*.

:::info
DRGIV3 puede ser "Wrappeada" en [DRGIV3 Garden](https://gardens-staging.1hive.org/#/xdai/garden/0x16388d99199a74810fc572049b3d4d657e7d5deb) para recibir gDRGIV3. Esta misma acción puedes hacerla con DRGIV3 en el GIVgarden Staking o en el GIVfarm con Gnosis Chain.
:::  

- Los botones de enlace a GIVgarden funcionan correctamente
- Los vínculos de `Leer Mas` están activos
- Wrap DRGIV3 en GIVgarden - Verifique que la cantidad de su token se actualice en GIVgarden Staking en GIVfarm de Gnosis Chain
- Unwrap DRGIV3 en GIVgarden - Verifique que la cantidad de su token se actualice en GIVgarden Staking en GIVfarm de Gnosis Chain


### GIVfarm
El GIVfarm implementa unas pruebas utilizando Gnosis Chain y Kovan (Mainnet) Network. El Token utilizado para esta implementación es el *DRGIV3*:
- `0x83a8eea6427985C523a0c4d9d3E62C051B6580d3` en Gnosis Chain
- `0x29434a25abd94ae882aa883eea81585aaa5b078d` en Kovan

Los Tokens de prueba utilizados proporcionar liquidez son los siguientes:
- Gnosis Chain TestHNY: `0x69F79C9eA174d4659B18c7993c7EFbBbB58cF068`
- Gnosis Chain TestWETH:`0x736a98655049433f79dCcF5e54b887E8890b63D1`  

En Kovan, regularmente el Kovan ETH es usado para proporcionar liquidez y "pagar el gas".
<Tabs className='tabs'>
  <TabItem value='gnosis' label='Gnosis Chain' default>
<h3>Gnosis Chain (anteriormente xDai Network) Pruebas de Testeo</h3>
<ul>
<li>Gnosis Chain/Ethereum Network funcionan</li>
<li><code>?</code> La información flotante sobre las herramientas funciona</li>
<li>Proporciona liquidez con DRGIV3 y TestHoney en Honeyswap</li>
<li>Proporciona liquidez con DRGIV3 y TestETH en Sushiswap</li>
<li>Puedes Stakear  y Farmear LP Tokens respectivamente en GIV/HNY y en GIV/ETH - El Token LP y sus valores de stake/unstake se muestran en la interfaz del usuario</li>
<li>Puedes stakear DRGIV3 en GIVgarden Staking - El token equivale a la actualización Stake/Unstake en la interfaz de usuario</li>
<li>Después de staking del DRGIV3, puedes Verificar los montos de las actualizaciones del Wrapped Token (gDRGIV3) en <a href='https://gardens-staging.1hive.org/#/xdai/garden/0x16388d99199a74810fc572049b3d4d657e7d5deb' target='_blank' alt='DRGIV3 Garden'>DRGIV3 Garden</a></li>
<li>APR se muestra correctamente (si se muestra en 0%, eso está mal)</li>
<li>Si haces click en el ícono `?` en la fila APR abre un APR modal, los enlaces son funcionales en el modal</li>
<li>Recibes actualizaciones de la cantidad que puedes reclamar todo el tiempo</li>
<li>Se muestra la cantidad de transmisión (hasta 2 decimales)</li>
<li>Si la cantidad es muy pequeña<code>0.0001</code> se muestra</li>
<li>"Tus recompensas GIVfarms" (Arriba a la derecha de la página) muestra correctamente el total de recompensas pendientes de todas las farms combinadas</li>
<li>Las recompensas de cada farm, las transacciones son exitosas y los montos reclamables, la transmisión y los montos en la billetera GIV se actualizan correctamente</li>
<li>Puedes hacer unstake de los Tokens que tengas en tus farms - los montos del Stake/Unstake se actualizan en la interfaz del usuario</li>
<li>Despues de hacer un Unstake del Token DRGIV3 desde la GIVgarden farm, verifica la cantidad del Token Wrapped (gDRGIV3) los montos se actualizan en <a href='https://gardens-staging.1hive.org/#/xdai/garden/0x16388d99199a74810fc572049b3d4d657e7d5deb' target='_blank' alt='DRGIV3 Garden'>DRGIV3 Garden</a></li>
</ul>
  </TabItem>
  <TabItem value='kovan' label='Kovan Testnet' default>
<h3>Kovan (mainnet) Network Pruebas de Testeo</h3>
<ul>
<li>Gnosis Chain/Ethereum Network funcionan</li>
<li><code>?</code> La información flotante sobre las herramientas funciona</li>
<li>Puedes Mintear Univ3 NFT con DRGIV3 y ETH en Uniswap (Kovan)</li>
<li>Proporciona liquidez con DRGIV3 y WETH en Balancer (Kovan)</li>
<li>Puede hacer stak de Univ3 NFT en GIV/ETH Uniswap farm - Actualizaciones de la cantidad de NFT debajo de los botones Stake/Unstake</li>
<li>Puede Stackear LP Tokens en GIV/ETH Balancer farm - Los montos del Stake/Unstake se actualizan en la interfaz del usuario</li>
<li>Puede hacer stake DRGIV3 en un staking de un solo activo - Los montos del Token y los valores del Stake/Unstake se actualizan en la interfaz del usuario</li>
<li>APR se muestra correctamente (si se muestra en 0%, eso está mal)</li>
<li>Si haces click en el ícono `?` en la fila APR abre un APR modal, los enlaces son funcionales en el modal</li>
<li>Recibes actualizaciones de la cantidad que puedes reclamar todo el tiempo</li>
<li>Se muestra la cantidad de transmisión (hasta 2 decimales)</li>
<li>"Tus recompensas GIVfarms" (Arriba a la derecha de la página) muestra correctamente el total de recompensas pendientes de todas las farms combinadas</li>
<li>Las recompensas de cada farm, las transacciones son exitosas y los montos reclamables, la transmisión y los montos en la billetera GIV se actualizan correctamente</li>
<li>Puedes hacer unstake de los Tokens que tengas en tus farms - los montos del Stake/Unstake se actualizan en la interfaz del usuario</li>
</ul>
  </TabItem>
</Tabs>

## GIVbacks

Para saber como crear un test de distribución GIVback, comuníquese con un desarrollador o Mitch (divine_comedian#5493) en discord para ayudarte.

Tendrás que hacer una donación legítima a un proyecto verificado en Giveth.io para probar los GIVbacks con tu propia dirección de Ethereum.

 Una vez hayas ejecutado el test de distribución puedes verificar algunas partes en la página `GIVbacks`.

:::info
GIVbacks solo está disponible en Gnosis Chain (anteriormente xDai Network).
:::

- Verifica el monto de recompensa de tus GIVbacks, verifica que los cálculos se alineen con las donaciones que realizaste a un proyecto verificado durante un período definido de GIVbacks.
- La cantidad reclamable de tus GIVbacks debe ser una cantidad fija (no creciente como las recompensas de GIVfarm)..
- Tu cantidad GIVbacks transmitidos debe estar en la tabla del historial de GIVstream al momento de la distribución de GIVbacks.
- Es un proceso exitoso recolectar GIVbacks.
- Los botones `DONAR` y `VERIFICAR` funcionan conrrectamente.

## GIVstream
El GIVstream está disponible tanto en Gnosis Chain como en Kovan. Asegúrate de tener recompensas para reclamar en ambas redes y así probar completamente el GIVstream.

- Gnosis Chain/Ethereum Network funcionan alternandolos.
- Los botones `PROYECTOS`, `PROPUESTAS`, `OPORTUNIDADES` y `LEER MAS` funcionan.
- Puedes recolectar las recompensas de GIVstream en la parte superior derecha del modal, tanto para Gnosis Chain como en Kovan.
- `?` la imagen en el modal de recompensas GIVstream muestra una ventana emergente cuando se hace click en ella, los links y el botón dentro del modal están funcionando correctamente.
- '?' la información flotante sobre las herramientas funciona correctamente.
- `GIViverse Expansion` se muestra correctamente (si es 0%, está mal).
- `Tiempo restante` se muestra correctamente (GIVstream termina el 23 de diciembre del 2026).
- Los aumentos del caudal de GIVstream se muestran en la tabla del historial. Las recompensas de GIVfarm deberían aparecer en la tabla después de reclamarlas. Las recompensas de GIVbacks deben aparecer en la tabla al momento de la distribución de GIVbacks.


---

No olvides participar en las reuniones semanales de Platform Circle´s para mantenerte informado. Lee nuestra [Guía para colaboradores](./contributors) y obtener toda la información que necesitas para convertirte en un colaborador habitual de Giveth Development & Testing.
