---
id: testingGIVeconomy
title: Diretrizes de Teste GIVeconomy
slug: dapps/testingGIVeconomy
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '../../../../src/css/custom.css';


Este é um guia para cenários completos de teste de usuário para o GIVeconomy DApp. O teste deve ser feito no servidor de teste que pode ser encontrado em https://staging.giv.giveth.io/.

## Requisitos

* Por favor, use um navegador moderno. Se você encontrar um bug, tente a mesma coisa com outro navegador. Por favor, reporte o problema em qualquer caso, mas diga-nos se o problema pode ser específico do navegador
* Use "problemas" no [GitHub](https://github.com/Giveth/GIVeconomy/issues) para relatórios e comentários.

## Casos de uso

As ações a seguir são definidas como funcionalidade principal. Se uma dessas etapas estiver com erros, isso representa um erro crítico.

### Geral

* Os botões na página "Visão geral" são responsivos
* As abas `GIVgarden`, `GIVfarm`, etc.. são responsivas
* Os botões do cabeçalho da barra de navegação são responsivos
* Pode entrar com sucesso na barra de navegação com carteiras web (atualmente otimizado para MetaMask)
        
### GIVgarden

A implantação de teste do GIVgarden usa Kovan Network e Gnosis Chain (anteriormente xDai Network). O token usado para esta implantação é DRGIV3.

> ⚠️ **INFO**
> DRGIV3 pode ser encapsulado no [DRGIV3 Garden](https://gardens-staging.1hive.org/#/xdai/garden/0x16388d99199a74810fc572049b3d4d657e7d5deb) para receber gDRGIV3. Esta é a mesma ação que staking seu DRGIV3 no GIVgarden Staking do GIVfarm na Gnosis Chain.

* Os botões que ligam ao GIVgarden estão funcionando
* `SAIBA MAIS` links estão funcionando
* Embrulhe o DRGIV3 no GIVgarden - Verifique se a quantidade de Tokens é atualizada no GIVgarden Staking do GIVfarm na Gnosis Chain.
* Abra o DRGIV3 no GIVgarden - Verifique se o valor do seu Token é atualizado no GIVgarden Staking no GIVfarm na Gnosis Chain.

### GIVfarm

A implantação de teste do GIVfarm usa a rede Gnosis Chain e a rede Kovan (Mainnet). O token usado para esta implantação é DRGIV3:

* `0x83a8eea6427985C523a0c4d9d3E62C051B6580d3` na Gnosis Chain
* `0x29434a25abd94ae882aa883eea81585aaa5b078d` na Kovan

Os tokens de teste usados para fornecer liquidez na Gnosis Chain são os seguintes:

* Gnosis Chain TestHNY: `0x69F79C9eA174d4659B18c7993c7EFbBbB58cF068`
* Gnosis Chain TestWETH: `0x736a98655049433f79dCcF5e54b887E8890b63D1`

Em Kovan, o Kovan ETH regular é usado para fornecer liquidez e pagar taxas.

#### Casos de teste da Gnosis Chain (anteriormente Rede xDai)

* A alternância Gnosis Chain / Ethereum Network funciona
* `?` dicas de ferramentas de passar o mouse funcionam
* Forneça Liquidez com DRGIV3 e TestHoney no Honeyswap
* Forneça Liquidez com DRGIV3 e TestETH no Sushiswap
* Pode investir tokens LP nos respectivos farms GIV/HNY ou GIV/ETH - o Token LP equivale a atualização de Investimento/Remoção na interface do usuário
* Pode investir DRGIV3 em GIVgarden Staking - Token equivale a atualização de Investimento/Remoção na interface do usuário
* Após investir em DRGIV3, verifique as atualizações do valor do token envolvido (gDRGIV3) no [DRGIV3 Garden](https://gardens-staging.1hive.org/#/xdai/garden/0x16388d99199a74810fc572049b3d4d657e7d5deb)
* APR está sendo exibido corretamente (se mostrar 0%, isso é ruim)
* Clicando `?` na linha APR abre o modal APR, os links são funcionais no modal
* Atualizações de valor exigível ao longo do tempo
* A quantidade de streaming é mostrada (até 2 casas decimais)
* Se a quantidade for muito pequena, `0,0001` é mostrado
* "Suas recompensas GIVfarm" (canto superior direito da página) exibe corretamente o total de recompensas pendentes de todas as farms combinadas.
* Colheita de cada farm - As transações são bem-sucedidas e os valores Reclamáveis, Transmitidos e os GIV na carteira são atualizados corretamente
* Pode Remover Tokens de todos os farms - O token equivale à atualização de Investimento/Remoção na interface do usuário
* Após retirar o DRGIV3 do farm GIVgarden, verifique as atualizações do valor do token encapsulado (gDRGIV3) no [DRGIV3 Garden](https://gardens-staging.1hive.org/#/xdai/garden/0x16388d99199a74810fc572049b3d4d657e7d5deb)

#### Casos de teste de rede Kovan (rede principal)

* A alternância Gnosis Chain / Ethereum Network funciona
* `?` dicas de ferramentas de passar o mouse funcionam
* Mint Univ3 NFT com DRGIV3 e ETH em Uniswap (Kovan)
* Fornecer Liquidez com DRGIV3 e WETH no Balanceador (Kovan)
* Pode investir Univ3 NFT em GIV/ETH Uniswap farm - atualizações de valor de NFT abaixo dos botões Stake/Unstake
* Pode investir tokens LP no farm do balanceador GIV/ETH - LP Token equivale a atualização de Investimento/Remoção na interface do usuário
* Pode investir DRGIV3 em Investimento de Ativo Único - Token equivale a atualização de Investimento/Remoção na interface do usuário
* APR está sendo exibido corretamente (se mostrar 0%, isso é ruim)
* Clicando `?` na linha APR abre o modal APR, os links são funcionais no modal
* Atualizações de valor exigível ao longo do tempo
* A quantidade de streaming é mostrada (até 2 casas decimais)
* "Suas recompensas GIVfarm" (canto superior direito da página) exibe corretamente o total de recompensas pendentes de todas as farms combinadas.
* Colheita de cada farm - As transações são bem-sucedidas e os valores Reclamáveis, Transmitidos e os GIV na carteira são atualizados corretamente
* Pode Remover Tokens de todos os farms - O token equivale à atualização de Investimento/Remoção na interface do usuário

## GIVbacks

Para saber como criar uma distribuição GIVback de teste, entre em contato com um desenvolvedor ou mitch (divine_comedian#5493) no Discord para ajudá-lo.

Você terá que fazer uma doação legítima para um projeto verificado no Giveth.io para testar GIVbacks com seu próprio endereço Ethereum.

Depois de executar uma distribuição de teste, você pode verificar algumas partes da página `GIVbacks`:

> ⚠️ **INFO**
> GIVbacks estão disponíveis apenas na Gnosis Chain (anteriormente Rede xDai).

* Verifique o valor do seu GIVbacks Reward, verificando se os cálculos estão alinhados com as doações que você fez para um projeto verificado durante o período de GIVbacks definido.
* O valor resgatável do seu GIVbacks deve ser um valor definido (não aumentando como recompensas do GIVfarm).
* A quantidade de streaming de GIVbacks deve estar na tabela de histórico de GIVstream no momento da distribuição de GIVbacks.
* A colheita de GIVbacks é bem sucedida.
* Os botões `DOAR` e `VERIFICAR` funcionam.

## GIVstream

O GIVstream está disponível em Gnosis Chain e Kovan. Certifique-se de ter recompensas de farm pendentes em ambas as redes para testar completamente o GIVstream.

-A alternância Gnosis Chain/Ethereum Network funciona

* Botões para `PROJETOS`, `PROPOSTAS`, `OPORTUNIDADES` e `SAIBA MAIS` funcionam.
* Pode colher recompensas do GIVstream no modal superior direito em Gnosis Chain e Kovan.
* `?` imagem no modal de recompensas GIVstream mostra pop-up quando clicado, links e botão dentro do modal são funcionais.
* `?` dicas de ferramentas de passar o mouse funcionam.
* `Expansão GIViverse` é exibida corretamente (se for 0%, isso é ruim).
* `Tempo restante` é exibido corretamente (o GIVstream termina em 23 de dezembro de 2026).
* Os aumentos do fluxo de GIVstream são mostrados na tabela de histórico. As recompensas do GIVfarm devem aparecer na tabela após reivindicar do GIVfarm. As recompensas dos GIVbacks devem aparecer na tabela no momento da distribuição dos GIVbacks.


---

Não se esqueça de participar das reuniões semanais do Platform Circle para ficar por dentro. Leia nosso [guia do colaborador de desenvolvimento](https://docs.giveth.io/dapps/contributors) para obter todas as informações de que você precisa para se tornar um colaborador regular do Giveth Development & Testing.