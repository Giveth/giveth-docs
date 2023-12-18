---
id: technicalWhitePaper
title: Documento Técnico
slug: technicalWhitePaper
---
import TraceDeprecated from './_traceDeprecatedPT.mdx'

<TraceDeprecated />

O objetivo da nossa tecnologia é dar aos usuários de criptomoedas a capacidade de doar sem esforço para Campanhas focadas em tornar o mundo um lugar melhor. Eles podem usar a plataforma Giveth para encontrar essas Campanhas e doar diretamente, ou podem doar suas criptomoedas para uma causa e fazer com que um Delegado escolha uma Campanha ou Rastreamento apropriado para eles. Como alternativa aos sistemas tradicionais de doação, nosso contrato **_Liquid_** **_Pledge_** permite que os Doadores recuperem sua promessa se discordarem de como suas doações foram alocadas. Isso só pode ocorrer antes de ser bloqueado em uma campanha para uma finalidade específica.

**Para tornar possível essa nova forma de doação, temos que superar alguns desafios:**

1. Como oferecer um meio para os Doadores doarem sem perder a propriedade de seus fundos. **2**. Como permitir que terceiros distribuam essas doações de criptomoedas para indivíduos que possam usá-las de forma eficaz. **3**. Como transferir a propriedade com segurança para os indivíduos que estão tornando o mundo um lugar melhor. **4**. Como determinar se a propriedade de tokens Ethereum distribuídos deve ser transferida ou não. Em outras palavras: como ter certeza de que um destinatário merece a criptomoeda doada antes de transferi-la.

**Desafio #1 - Doe sem perder a propriedade**

Isso é tratado pelo contrato de nosso [cofre](https://github.com/Giveth/vaultcontract). Esse é um contrato inteligente desenvolvido em Solidit, que pode armazenar criptomoedas com segurança em nome do proprietário da criptomoeda. É esta a justificativa para um Doador poder controlar ou retirar suas doações. Quando um doador doa criptomoedas por meio da Giveth, as moedas são realmente armazenadas em um cofre com o doador como proprietário.

Uma vez armazenada no cofre, a criptomoeda é mantida no lugar e não pode ser movida sem a permissão do proprietário.


**Desafio #2 - Distribuir os fundos arrecadados**

Nosso contrato [Minime](https://github.com/Giveth/minime) lida parcialmente com esse desafio. Este é um contrato inteligente feito em Solidity que pode representar Ether e ERC-20 com tokens de réplica.

Em vez de transferir tokens Ethereum reais para indivíduos por seus esforços para fazer o bem, podemos distribuir tokens Minime com a garantia de que a as critomoedas "de verdade" estão armazenadas no cofre. Os tokens Minime são usados por vários projetos conhecidos no universo da Ethereum.

Nosso Giveth TRACE usa outra estratégia para transferências flexíveis. [Liquid Pledging](https://github.com/Giveth/liquidpledging) é um contrato inteligente baseada em Solidity que nos permite redistribuir o Ether em uma infinidade de permutações na rede (também conhecidas como graph). É um pouco como a democracia da líquidez, mas não há votação (a menos que você adicione isso como um plugin).

Em sua essência, Liquid Pledging mantém uma lista de transferências e proprietários de tokens Ethereum. Essas duas listas servem como estrutura de dados para o graph. A API do contrato fornece os meios para doar, delegar e transferir tokens Ethereum armazenados no cofre.

**Desafio #3 - Transferir propriedade**

Mais uma vez, isso é resolvido pelo nosso contrato de [cofre](https://github.com/Giveth/vaultcontract). Os tokens Ethereum só são liberados para endereços na lista de permissões com a permissão do doador original. Para atender plenamente aos requisitos do desafio nº 3, devemos definir algum tipo de processo de aprovação.

**Desafio #4 - Determine se a transferência deve ocorrer**

As regras de como as transferências são aprovadas e tratadas por plugins de liquid-pledging (lpp). Estes plugins são contratos separados referenciados pelo contrato Liquid Pledging (*consulte o desafio #2*).

Por exemplo, você pode usar nosso plug-in [lpp-milestone](https://github.com/Giveth/lpp-milestone) para exigir a aprovação do revisor como condição para liberar o Ether de seu doador original. Nesse caso, o revisor é outro endereço Ethereum. Se 'acceptMilestone' for chamado a partir deste endereço de revisor aprovado, a propriedade do Ether doado poderá ser liberada para o endereço do destinatário do Trace (anteriormente Milestone).

Você não precisa usar nosso plugin lpp-milestone. Você pode fazer o seu com o que quiser. Use um contrato que determine as regras que você precisa para sua comunidade.

Isso conclui o White Paper Técnico da Giveth TRACE por enquanto. Entre em contato conosco no [Discord](https://discord.gg/qf7XZ48gCU) se você tiver algo que queira fazer com as ideias listadas. Somos um projeto de código aberto e é nossa missão ajudar as comunidades.





















