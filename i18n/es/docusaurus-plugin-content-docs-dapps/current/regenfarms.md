---
id: regenFarmContracts
title: Regen Farm Smart Contract Guide
slug: dapps/regenFarmContracts
---


GIVeconomy es una colección de contratos inteligentes auditados que trabajan juntos para brindar capacidades, que incluyen: transmisión de tokens, Airdrops y varios tipos de Farming. Los contratos y scripts se pueden encontrar en el repositorio de **Giveth** [giv-token-contracts](https://github.com/Giveth/giv-token-contracts).

## Contratos
### Streaming
El Streaming permite que cualquier recompensa (por ejemplo, airdrops, recompensa de minería de liquidez, ...) se libere gradualmente a lo largo de un período de tiempo determinado en lugar de que la suma total se transfiera inmediatamente a la billetera del usuario final. Para lograrlo, cada pago de recompensa a los usuarios será un `Allocate` en el flujo en lugar de una ` transfer/safeTransfer`  tradicional.

Cada instancia de **Stream** se implementa con estos parámetros de configuración:

* **Total Tokens:** Cantidad total de tokens que se distribuirán durante el período de transmisión
* **Start Time:** La marca de tiempo en que comienza la transmisión
* **Duration:** duración total del stream. Al final del stream , se libera el 100% de los tokens y los destinatarios pueden reclamarlos.
* **Cliff Period:** TLa duración de un período inicial después del inicio del Stream. Durante este período, solo se puede reclamar el porcentaje inicial del Stream y no más.
* **Initial Percentage:** El porcentaje de recompensas inmediatamente reclamables durante el *Cliff Period*

**TokenDistro** es el contrato inteligente que ha implementado la función de Streaming. Cualquier contrato inteligente elegible o usuario elegible puede llamar al método `allocate` en **TokenDistro** para agregar al saldo del destinatario de su stream.
 Los contratos elegibles o los usuarios que pueden llamar a `allocate` deben tener el rol de **DISTRIBUTOR** para el contrato inteligente de **TokenDistro**. Se llaman **Distributors**. Cada DISTRIBUTOR tiene un saldo que puede distribuir. Por lo tanto, en cada asignación, la cantidad asignada enviada se reduce del saldo de los  Distributors y se agrega al saldo del destinatario.

Un porcentaje de la cantidad asignada se puede reclamar de inmediato, y el porcentaje restante se destina a aumentar el caudal de la corriente del destinatario. La tasa de flujo es una expresión de cuántos tokens se pueden reclamar de su flujo durante un período semanal. Con el tiempo, se podrá reclamar un mayor porcentaje del saldo del destinatario inmediatamente después de la expansión continua de la transmisión.

### Air Drop

La distribución inicial del token se puede realizar mediante el contrato inteligente **MerkleDistro**. Utiliza la teoría *Merkle Tree* y cada destinatario elegible debe proporcionar sus propios datos de prueba únicos para reclamar su Airdrop El valor del Airdrop en realidad se asignará llamando a `allocate` en **TokenDistro** y se agregará al saldo de stream del usuario.

Cada instancia de **MerkleDistro** se implementa con estos parámetros de configuración:

* **Merkle Tree Root:** La llave de Merkle Tree root.
* **Token Distro Address:** La dirección de la instancia de TokenDistro implementada.

Para implementar el contrato inteligente **MerkleDistro**, el implementador debe generar un merkletree. El valor de root se utilizará en el contrato inteligente en el momento de la implementación, y se necesitan todos los datos del tree para obtener la ruta única de cada usuario a root. En el repositorio [giv-token-contracts](https://github.com/Giveth/giv-token-contracts), hay un script para generar datos de merkle tree.
```
ts-node scripts/generate-merkle-root.ts --input <airdrop json file path> --output <output file path>
```

Un formato JSON de los datos de airdrop no es fácil de generar para todos, un `airdrop json file` puede generarse mediante un script separado de un archivo CSV, que es un formato más conveniente.
```
ts-node scripts/csv2json.ts <airdrop csv list path> <airdrop json file path>
```

### Farming

Giveth usa **UnipoolTokenDistro**, un derivado del contrato inteligente *Unipool*, con fines de Farming. La diferencia es que **UnipoolTokenDistro** paga las recompensas de los interesados llamando al método `allocate` en *TokenDistro(stream)* en lugar de transferir tokens reales a la dirección del destinatario.

En general, el contrato de Unipool recompensa a los interesados en función de la liquidez que hayan apostado. El token de liquidez se denomina "uni" depositado por los participantes y puede ser cualquier token, como un token nativo (p. ej., GIV, FOX, ...) o un token LP obtenido mediante participación en un grupo (p. ej., UniswapV2, SushiSwap, HoneySwap, ...).

El monto de la recompensa de Unipool se establece llamando al método `notifyRewardAmount(uint256 reward)` mediante **rewardDistribution**. 

**rewardDistribution** puede configurarse mediante el rol de **owner** y en el script de implementación, el implementador establece su propia dirección como **rewardDistribution** de forma predeterminada. Cada vez que se llama a este método, Unipool se configurará para distribuir las recompensas en el período de duración de `duration` a los stakers. Por lo tanto, el distribuidor de recompensas debe llamar regularmente a `notifyRewardAmount` para mantener una tasa de recompensa positiva y ajustar la tasa de recompensa, ya que puede ser diferente en cada ronda.

Cada instancia de **UnipoolTokenDistro** se implementa con estos parámetros de configuración:

* **TokenDistro Address:** La dirección de la instancia TokenDistro implementada.
* **Uni Token Address:** La dirección del token de liquidez
* **Duration:** Cada duración de la ronda del programa enriquecedor


## Implementacíon

La implementación de un stream con farms y un airdrop es complicada y sería propenso a errores si se hiciera manualmente. Por lo tanto, [giv-token-contracts](https://github.com/Giveth/giv-token-contracts) tiene scripts para hacerlo más fácil. La mayoría de estos scripts están diseñados para casos de uso de GIVeconomy.

Sin embargo, un script está listo para que los DAO implementen su propio stream(tokenDistro) y programas de farming(Unipools). El script se puede encontrar en la ruta `deployments/regenFarms/1_regenFarm.ts`. El script lee la configuración de implementación del archivo `deployments/regenFarms/config.ts`. El formato de configuración en `config.ts` es el siguiente:
```
const config: IRegenConfig = {
    alreadyDeployedTokenDistroAddress: "",
    newTokenDistroParams: {
        startTime: <start time timestamp>
        cliffPeriod: <cliff time duration seconds>
        duration: <duration seconds>
        initialPercentage: <percentage number, like 20_00>, // two decimals of precision, 20_00 means 20%
        tokenAddress: <Reward token address>
        totalTokens: <Total number of tokens to distribute limit>, // In ether format
        cancelable: <boolean>, // whether admins can cancel an allocation
    },
    unipools: {
        <Key>: {
            uniTokenAddress: <unit token address>,
            lmDuration: <unipool reward round duration seconds>
            rewardAmount: <Unipool balance on token distro>, // Number of tokens it can allocate
        },
        ...
    },
};
```

Para implementar a través de un script, se deben configurar estas variables de entorno:
* **INFURA_PROJECT_ID:** Cuando la red no es xDai (Gnosis-Chain)
* **PRIVATE_KEY:** La clave privada de la cuenta del implementador, utilizada cuando la red no es xDAI (Gnosis-Chain)
* **PRIVATE_KEY_XDAI:** La clave privada de la cuenta del implementador, utilizada cuando la red es xDAI (Gnosis-Chain)


El script se puede ejecutar con este comando.
```
HARDHAT_NETWORK=<network e.g. xDAI, mainnet, kovan> ts-node deployments/regenFarms/1_regenFarm.ts
```
