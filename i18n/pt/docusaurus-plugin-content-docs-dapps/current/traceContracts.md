---
id: traceContracts
title: Informações Técnicas de Contratos, Bridges e Multisigs
slug: dapps/traceContracts
---
import TraceDeprecated from './_traceDeprecatedPT.mdx'

<TraceDeprecated />

## Contratos:
- Giveth na Mainet
- ForeignGivethBridge no Rinkeby
- Contratos LiquidPledging no Rinkeby
- Contratos escapáveis para Mainnet para cada contrato no Rinkeby

#### Multisigs da rede principal:
 - [Giveth Mainnet: 0x8f951903c9360345b4e1b536c7f5ae8f88a64e79](https://etherscan.io/address/0x8f951903c9360345b4e1b536c7f5ae8f88a64e79) (6 de 13 multisig)
- [Giveth Overflow: 0x16fda2fcc887dd7ac65c46be144473067cff8654 ](https://etherscan.io/address/0x16fda2fcc887dd7ac65c46be144473067cff8654)(4 de 7 multisig)
- [EscapeHatch Caller: 0x1e9f6746147e937e8e1c29180e15af0bd5fd64bb](https://etherscan.io/address/0x1e9f6746147e937e8e1c29180e15af0bd5fd64bb) (1 de x multisig)

#### Rinkeby Multisigs:

- [EscapeHatch Caller: 0xc3b2128ca330871037d35fdc5f7b05e195aac5ce](https://rinkeby.etherscan.io/address/0xc3b2128ca330871037d35fdc5f7b05e195aac5ce) (1 de x multisig) 
- [Dapp God/EscapeHatch Destination: 0x20fc2ec2518dec7041b4c3e82663d6071bae953f](https://rinkeby.etherscan.io/address/0x20fc2ec2518dec7041b4c3e82663d6071bae953f) (3 de 6 multisig)

## Funções/parâmetros do contrato:

#### Mainnet

- [GivethBridge: 0x30f938fED5dE6e06a9A7Cd2Ac3517131C317B1E7](https://etherscan.io/address/0x30f938fED5dE6e06a9A7Cd2Ac3517131C317B1E7)
  - Possui a Bridge
  - Recebe e lida com doações.
  - Pode cancelar pagamentos na Bridge.
  - Pode pausar e retomar a ponte.
  - Adicione tokens à lista de permissões.
  - Pode alterar o atraso máximo do security guard
  - Pode alterar o security guard
  - Pode alterar o bloqueio de 2 dias na bridge.
  - Pode alterar o escape hatch caller.
  - Pode remover/alterar a propriedade.
  - Pode chamar o `escapeHatch(address _token)` em uma emergência para mover todo o dinheiro para fora da ponte para o token especificado.
  - Tem todos os poderes necessários para descentralizar a bridge.
  - [Giveth Overflow: 0x16fda2fcc887dd7ac65c46be144473067cff8654](https://etherscan.io/address/0x16fda2fcc887dd7ac65c46be144473067cff8654)
  - Recebe fundos excedentes/retirados da bridge
  - Envia fundos de volta para a ponte quando os fundos ficam baixos usando `depositEscapedFunds()`
  - [EscapeHatch Caller: 0x1e9f6746147e937e8e1c29180e15af0bd5fd64bb](https://etherscan.io/address/0x1e9f6746147e937e8e1c29180e15af0bd5fd64bb)

  - Pode chamar o `escapeHatch(address _token) em uma emergência para mover todo o dinheiro para fora da ponte para o token especificado.
  - Pode chamar `escapeFunds(address _token, uint   _amount)` para mover parte do dinheiro para fora da bridge sendo mais cauteloso.

  - [SecurityGuard: 0xDAa172456F5815256831aeE19C8A370a83522871](https://etherscan.io/address/0xDAa172456F5815256831aeE19C8A370a83522871)
  - MaxSecurityGuardDelay: 1 mês

## Rinkeby

- [ForeignGivethBridge: 0xfF9CD5140e79377feB23f6DFaF1f8b558C0FE621](https://rinkeby.etherscan.io/address/0xff9cd5140e79377feb23f6dfaf1f8b558c0fe621)
  - Mints tokens em Rinkeby.
  - Pode delegar tokens para Liquidpledging.

- [EscapeHatch Caller: 0xc3b2128ca330871037d35fdc5f7b05e195aac5ce](https://rinkeby.etherscan.io/address/0xc3b2128ca330871037d35fdc5f7b05e195aac5ce)

- Caso haja um movimento estranho e inesperado de tokens Rinkeby (que representam nossa contabilidade na bridge), esta Multisig seria capaz de retirar os tokens para manter nossa contabilidade.

- [Dapp God/EscapeHatch Destination: 0x20fc2ec2518dec7041b4c3e82663d6071bae953f](https://rinkeby.etherscan.io/address/0x20fc2ec2518dec7041b4c3e82663d6071bae953f)

  - Esta multisig tem um lugar especial no AragonApp it: autoriza atualizações para qualquer contrato inteligente em nosso sistema.
  - Também atua como o destino da função escape hatch para o LP da Vault na Rinkeby.

- [Token Factory: 0xf3012a211fAcf4a1590086A14482Aaa88397aF15](https://rinkeby.etherscan.io/address/0xf3012a211facf4a1590086a14482aaa88397af15)

**Contratos de Liquid Pledging (Rinkeby)**

- [LPVault: 0xA2B1485Bd9ad623b9e51FC41952B226313250Ada](https://rinkeby.etherscan.io/address/0xa2b1485bd9ad623b9e51fc41952b226313250ada)

  - Parâmetros Construtor: Nenhum

- [LiquidPledging: 0x8eB047585ABeD935a73ba4b9525213F126A0c979](https://rinkeby.etherscan.io/address/0x8eb047585abed935a73ba4b9525213f126a0c979)
  - Parâmetros Construtor: Nenhum


- [LPPCampaignFactory: 0x71408CE2125b1F07f614b93C8Bd0340e8Fc31CFA](https://rinkeby.etherscan.io/address/0x71408CE2125b1F07f614b93C8Bd0340e8Fc31CFA)

  - Parâmetros Construtor: 000000000000000000000000a018199569d94c9dfb6de1d8e8cb37928f20d444

- [milestoneFactoryAddress: 0x8E8d4840568c786E2e4c83C761ca002F256aD9c2](https://rinkeby.etherscan.io/address/0x8e8d4840568c786e2e4c83c761ca002f256ad9c2)

  - Parâmetros Construtor: 000000000000000000000000a018199569d94c9dfb6de1d8e8cb37928f20d444
- [LPPCappedMilestoneFactory: 0x19e88e279844f0201079b39c736a94b87b32b6b6](https://rinkeby.etherscan.io/address/0x19e88e279844f0201079b39c736a94b87b32b6b6)

  - Parâmetro Construtor: 000000000000000000000000a018199569d94c9dfb6de1d8e8cb37928f20d444

**Nota**: Todos os escapeHatches para contratos liquidPledge (não bridge) foram substituídos pela funcionalidade recoveryVault do AragonOS. Registraremos 1 recoveryVault (Giveth Multisig on Rinkeby) no kernel e todos os aplicativos serão “escapáveis” para esse cofre.




