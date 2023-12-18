---
id: bridgeSecurity
title: Implementação de segurança da Giveth Bridge
slug: dapps/bridgeSecurity
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../../../../src/css/custom.css'
import TraceDeprecated from './_traceDeprecatedPT.mdx'

<TraceDeprecated />

#### Uma visão técnica geral dos recursos, funções e teoria por trás da segurança da Giveth Bridge.

*Esse documento pressupõe que o leitor tenha conhecimento básico de contratos inteligentes, contratos multisig e cadeias de rede de teste Ethereum.*

### O que é a Giveth Bridge, exatamente?

A Bridge tem 3 partes: um contrato na Ethereum Mainnet, um contrato na Rinkeby Testnet e um serviço off-chain que conecta esses dois contratos. O serviço off-chain escuta eventos desses contratos e retransmite comandos de um contrato para outro.

<img id="contentimg" alt='Giveth TRACE Bridge Flow' src={useBaseUrl('img/content/trace/givethbridge.png')} />

### Como isso funciona? 

O contrato da Giveth Bridge na rede principal é simplesmente um contrato de cofre com 1 medida de segurança extra e algumas modificações para que funcione como uma bridge. Os pagamentos são pagos apenas sob certas condições. Todo bridge-payment tem um bloqueio padrão de 48 horas antes que o pagamento possa ocorrer.

Durante esse período, o Security Guard tem a capacidade de atrasar um pagamento além do padrão de 48 horas - até 30 dias. Isso permite tempo para determinar se um pagamento precisa ou não ser cancelado. Nenhum pagamento pode ser emitido sem que o check-in do Security Guard ocorra XX minutos após o pagamento ter sido solicitado. Este check-in será diário para não atrasar os pagamentos autorizados.

Há também um `escapeHatch` que pode ser chamado por um `escapeHatchCaller` para enviar os fundos da bridge para o multisig de financiamento durante o atraso de 48 horas, ou qualquer atraso adicional gerado pelo Security Guard.

Este financiamento multisig irá por algum tempo também manter fundos para diversificar o risco entre o contrato Bridge e o contrato Consensus Multisig. Quando a bridge estiver segurando muito valor, o financiamento multisig irá `escapeFunds()` para fora da bridge e quando estiver ficado baixa, o multisig de financiamento o completará manualmente.

Doações e retiradas acontecerão diretamente da bridge. Quando uma doação é feita para a bridge, um token é criado pela TokenFactory (a 1:1 ETH) e enviado para LiquidPledge, onde são tomadas as decisões sobre os gastos. Quando um pagamento é solicitado, os tokens são enviados da Liquid Pledging e queimados pelo ForeignGivethBridge, momento em que o comando é emitido de volta pela Ghetto Bridge usando a Bridge Key para a Giveth Bridge emitir um pagamento.

Caso por algum motivo a bridge caia, o serviço listener emitirá alarmes para notificar a interrupção do serviço. O serviço listener também criará um alarme se os tokens forem criados sem uma doação correspondente ou se os tokens não forem criados no momento de uma doação.

## Funções de segurança

### Proprietário da Mainnet

Esse é o multisig da Giveth que pode emitir comandos de controle para a ponte. Eles podem cancelar qualquer pagamento e podem inicializar o Security Guard ou remover o gastador aprovado (chave de ponte).

### Financiamento da Mainnet e Destino do EscapeHatch

A multisig é usada para enviar fundos para a Mainnet Bridge (cofre) e atuar como destino para a EscapeHatch Call.

### Security Guard

Vigia todos os pagamentos solicitados, verifica todos os dias e atrasa pagamentos suspeitos.

### Mainnet EscapeHatchCaller

Esse é um multisig 1 de x que pode acionar o cofre para despejar seus fundos em uma carteira predeterminada. Temos pessoas espalhadas pelo mundo, vários pontos de contato que podem fazer isso.

### Gastos Permitidos

Esses endereços são uma lista branca que pode emitir uma solicitação de pagamento para o bridge-contract. No aplicativo, a chave da bridge é o único Gastador permitido.

### Proprietário do ForeignGivethBridge

A Bridge key 

### Rinkeby DappGod Multisig

Esse multisig controla as atualizações e tem total acesso para controlar o ForeignGivethBridge. Ele também atua como`escapeHatchDestination` para o ForeignGivethBridge e Liquid Pledge.

### Rinkeby EscapeHatchCaller

Esse é um multisig 1 de x que pode acionar os contratos ForeignGivethBridge e Liquid Pledge para despejar seus tokens em uma carteira predeterminada.

## Possíveis cenários de problemas de segurança

**A Bridge Key está comprometida:**

Um hacker pode usar a chave da bridge para criar transações enviando ETH para seu próprio endereço para forçar as transações. O Security Guard pode atrasar esses pagamentos por tempo suficiente para que o multisig do proprietário cancele o pagamento e remova a chave comprometida na Mainnet.

Eles também podem criar tokens GiveETH como o controlador de token no lado rinkeby. O serviço de listener pegaria isso e soaria o alarme sempre que os tokens GiveETH fossem gerados sem uma doação de Ether correspondente. (também soa um alarme se o serviço de chave da bridge decidir tirar uma soneca e não criar tokens GiveETH quando uma doação for recebida.)

**O proprietário multisig tem um bug e pode ser assumido (como o hack de paridade) ou 6 chaves de 11 das chaves estão comprometidas:**

Isso é altamente improvável, mas se isso acontecer, não haverá perda de fundos. Esse multisig não possui fundos, apenas controla a bridge. Tt poderia reduzir o atraso de 48 horas para 25 horas, o security guard ainda pode atrasar quaisquer pagamentos, mas ele pode ser substituído pelo proprietário. Os fundos podem ser retirados dentro de 25 horas nesse cenário.

**As chaves EscapeHatchCaller são comprometidas:**

Nesse caso, a pior coisa que pode acontecer é que o fluxo do DApp no Rinkeby possa ser interrompido. No entanto, isso pode ser reparado removendo a chave comprometida no EscapeHatch 1 de x multisig e DAppGod. Feito isso, basta enviar os tokens giveth de volta para o endereço de onde vieram, um cenário semelhante é possível na Mainnet. O EscapeHatch Caller só pode mover dinheiro para um destino de fuga e para nenhum outro lugar. Se uma chave estiver comprometida, a pior coisa que eles podem fazer é remover todos os proprietários e eles mesmos da multisig do EscapeHatch, mas o proprietário 6 de 11 multisig na rede principal ainda pode chamar o EscapeHatch e substituir o chamador do EscapeHatch e o multisig 3 de 5 no rinkeby também pode.

**O financiamento multisig tem um bug e pode ser assumido (como o hack de paridade) ou 4 chaves de 7 das chaves estão comprometidas:**


Isso é extremamente improvável, mas se isso acontecer, haverá uma perda de fundos. A perda, no entanto, não seria catastrófica, pois os fundos são divididos entre a bridge e o multisig.

**O Bridge na mainnet tem um bug que permite que outra pessoa assuma o controle:**

O atraso de 48 horas só pode ser reduzido para 25 horas. O Security Guard ainda pode  atrasar quaisquer pagamentos, mas ele pode ser substituído pelo proprietário. Os fundos podem ser escapados dentro de 25 horas nesse cenário.

**DAppGod Multisig na testnet decide assumir:**

Se isso ocorrer, o EscapeHatch da bridge evitará qualquer perda de fundos e a configuração da testnet poderá ser reimplantada manualmente.

**E se a chave do Security Guard e a Bridge Key Controller forem comprometidos (ou seus detentores conspirarem para roubar fundos)**:

O proprietário multisig pode cancelar pagamentos e estender o atraso para mais de 48 horas. Porém, eles provavelmente não precisariam porque os fundos da bridge podem ser escapados para o multisig de financiamento. Esse é o único cenário que pode ser um risco sério para os fundos no cofre da bridge. Isso pode ser evitado dentro de 48 horas após o início do evento devido ao atraso padrão. Os fundos podem ser escapados durante esse período.

**Por fim, o que acontece se o Event Listener ficar off-line imediatamente antes de qualquer um dos ataques mencionados acima que acionam alarmes no comprometimento?**

O Security Guard deve ver quaisquer transações suspeitas e ser capaz de atrasar os pagamentos até que sejam resolvidos.

