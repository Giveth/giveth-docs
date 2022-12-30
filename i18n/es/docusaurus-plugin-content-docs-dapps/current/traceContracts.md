---
id: traceContracts
title: Información tecnica  de Contratos, Puentes y Multisig
slug: dapps/traceContracts
---
import TraceDeprecated from './_traceDeprecatedES.mdx'

<TraceDeprecated />

## Contratos:
* GivethBridge en Mainnet
* ForeignGivethBridge en Rinkeby
* Contratos LiquidPledging en Rinkeby
* Contratos escapables a Mainnet por cada contrato en Rinkeby


#### Mainnet multisigs:
* [Giveth Mainnet: 0x8f951903c9360345b4e1b536c7f5ae8f88a64e79](https://etherscan.io/address/0x8f951903c9360345b4e1b536c7f5ae8f88a64e79) (6 de 13 multisig)
* [Giveth Overflow: 0x16fda2fcc887dd7ac65c46be144473067cff8654](https://etherscan.io/address/0x16fda2fcc887dd7ac65c46be144473067cff8654) (4 de 7 multisig)
* [Llamador de EscapeHatch: 0x1e9f6746147e937e8e1c29180e15af0bd5fd64bb](https://etherscan.io/address/0x1e9f6746147e937e8e1c29180e15af0bd5fd64bb) (1 de x multisig)

#### Multifirmas de Rinkeby:
* [Llamador de EscapeHatch: 0xc3b2128ca330871037d35fdc5f7b05e195aac5ce](https://rinkeby.etherscan.io/address/0xc3b2128ca330871037d35fdc5f7b05e195aac5ce) (1 de x multisig)
* [Dapp God/EscapeHatch Destination: 0x20fc2ec2518dec7041b4c3e82663d6071bae953f](https://rinkeby.etherscan.io/address/0x20fc2ec2518dec7041b4c3e82663d6071bae953f) (3 de 6 multisig)


 ## Roles/parámetros del contrato:
### red principal
 - [**GivethBridge**: 0x30f938fED5dE6e06a9A7Cd2Ac3517131C317B1E7](https://etherscan.io/address/0x30f938fED5dE6e06a9A7Cd2Ac3517131C317B1E7)
     - Es dueño del puente.
     - Recibe y tramita las donaciones.
     - Puede cancelar pagos en el puente.
     - Puede pausar y reanudar el puente.
     - Agregar tokens a la lista blanca.
     - Puede cambiar el retraso máximo del guardia de seguridad.
     - Puede cambiar el guardia de seguridad.
     - Puede cambiar el bloqueo de tiempo de 2 días en el puente.
     - Puede cambiar la llamada de `escape hatch`.
     - Puede eliminar/cambiar la propiedad.
     - Puede llamar a `escapeHatch(address _token)` en caso de emergencia para sacar todo el dinero del puente para el token especificado.
     - Puede llamar a `escapeFunds(address _token, uint _amount) ` para sacar parte del dinero del puente para ser más cauteloso.
     - Tiene todos los poderes necesarios para descentralizar el puente.
 - [**Dar desbordamiento**: 0x16fda2fcc887dd7ac65c46be144473067cff8654](https://etherscan.io/address/0x16fda2fcc887dd7ac65c46be144473067cff8654)
     - Recibe fondos desbordados/fugados del puente.
     - Envía fondos de regreso al puente cuando los fondos se agotan usando `depositEscapedFunds()`.
 - [**Llamador de EscapeHatch**: 0x1e9f6746147e937e8e1c29180e15af0bd5fd64bb](https://etherscan.io/address/0x1e9f6746147e937e8e1c29180e15af0bd5fd64bb)
     - Puede llamar a `escapeHatch(address _token)` en caso de emergencia para sacar todo el dinero del puente para el token especificado.
     - Puede llamar a `escapeFunds(address _token, uint _amount) ` para sacar parte del dinero del puente para ser más cauteloso.
 - [**SecurityGuard**: 0xDAa172456F5815256831aeE19C8A370a83522871](https://etherscan.io/address/0xDAa172456F5815256831aeE19C8A370a83522871)
     - MaxSecurityGuardDelay: 1 mes

### Rinkeby
 - [**ForeignGivethBridge**: 0xfF9CD5140e79377feB23f6DFaF1f8b558C0FE621](https://rinkeby.etherscan.io/address/0xff9cd5140e79377feb23f6dfaf1f8b558c0fe621)
      - Fichas de menta en Rinkeby.
      - Puede delegar tokens a Liquidpledge.
 - [**Llamador de EscapeHatch**: 0xc3b2128ca330871037d35fdc5f7b05e195aac5ce](https://rinkeby.etherscan.io/address/0xc3b2128ca330871037d35fdc5f7b05e195aac5ce)
     - En caso de que haya un movimiento extraño inesperado de tokens Rinkeby (que representan nuestra contabilidad en el puente), este Multisig podría sacar los tokens para mantener nuestra contabilidad.
 - [**Dapp Dios/Destino EscapeHatch**: 0x20fc2ec2518dec7041b4c3e82663d6071bae953f](https://rinkeby.etherscan.io/address/0x20fc2ec2518dec7041b4c3e82663d6071bae953f)
     - Este multisig tiene un lugar especial en AragonApp it: autoriza actualizaciones a cualquier contrato inteligente en nuestro sistema.
     - También actúa como el destino de la escotilla de escape para Rinkeby LP Vault.
- [**Fábrica de fichas:** 0xf3012a211fAcf4a1590086A14482Aaa88397aF15](https://rinkeby.etherscan.io/address/0xf3012a211facf4a1590086a14482aaa88397af15)
    - Mints Minime tokens para ser enviados a Liquid Pledge.
#### Contratos de Liquid Pledging (Rinkeby)
 - [LPVault: 0xA2B1485Bd9ad623b9e51FC41952B226313250Ada](https://rinkeby.etherscan.io/address/0xa2b1485bd9ad623b9e51fc41952b226313250ada)
    - Parámetros del constructor: Ninguno
 - [Promesa líquida: 0x8eB047585ABeD935a73ba4b9525213F126A0c979](https://rinkeby.etherscan.io/address/0x8eb047585abed935a73ba4b9525213f126a0c979)
    - Parámetros del constructor: Ninguno
 - [LPPCampaignFactory: 0x71408CE2125b1F07f614b93C8Bd0340e8Fc31CFA](https://rinkeby.etherscan.io/address/0x71408CE2125b1F07f614b93C8Bd0340e8Fc31CFA)
    - Parámetros del constructor: 0000000000000000000000000a018199569d94c9dfb6de1d8e8cb37928f20d444
 - [dirección de fábrica de hitos: 0x8E8d4840568c786E2e4c83C761ca002F256aD9c2] (https://rinkeby.etherscan.io/address/0x8e8d4840568c786e2e4c83c761ca002f256ad9c2)
    - Parámetros del constructor: 0000000000000000000000000a018199569d94c9dfb6de1d8e8cb37928f20d444
 - [LPPCappedMilestoneFactory: 0x19e88e279844f0201079b39c736a94b87b32b6b6](https://rinkeby.etherscan.io/address/0x19e88e279844f0201079b39c736a94b87b32b6b6)
    - Parámetros del constructor: 0000000000000000000000000a018199569d94c9dfb6de1d8e8cb37928f20d444

**NOTA:** Todos los escapeHatches para contratos liquidPlidging (no puente) se han reemplazado con la funcionalidad recoveryVault de AragonOS. Registraremos 1 recoveryVault (Giveth Multisig en Rinkeby) en el kernel y todas las aplicaciones serán "escapables" a esa bóveda.

**Cuenta de fondos de billetera:** 0xf94230D278b36a29fD1363Bd57D12AEb8b8D426B