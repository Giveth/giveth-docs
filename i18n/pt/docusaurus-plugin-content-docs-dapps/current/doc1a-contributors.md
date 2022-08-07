---
id: contributors
title: Contribuindo para o Desenvolvimento da Giveth
slug: dapps/contributors
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../../../../src/css/custom.css'

A Giveth atualmente mantém três produtos que se concentram em gerenciamento de financiamento, doações P2P e economias em tokens DeFi For-Good. Essas são as [Giveth TRACE](https://trace.giveth.io), [Giveth.io](https://giveth.io) e [GIVeconomy](https://giv.giveth.io), respectivamente.

Todos os nossos produtos compartilham alguns padrões de desenvolvimento comuns que são fundamentais para aprender antes de se envolver em qualquer desenvolvimento para a Giveth. Neste documento, mostraremos como interagir com nossos repositórios de código aberto, entrando em contato com as pessoas certas e como começar a criar e identificar problemas.

## Gerenciamento do Github

Antes de mais nada, você precisará instalar a [extensão Zenhub para o Github](https://chrome.google.com/webstore/detail/zenhub-for-github/ogcgkffhplmphkaahpmffcafajaocjbd) em seu navegador que permitirá que você veja os Workspaces e Pipelines que usamos no Github para gerenciar problemas.

<img alt='All-Devs Zenhub Board' width='85%' height='auto' src={useBaseUrl('img/content/allDevsZenhub.png')} />

Fizemos a transição para gerenciar todos os três DApps (produtos) em um workspace, **`All-Devs`**.

### Repositórios

A [organização da Giveth no Github](https://github.com/Giveth) possui diversos repositórios. Aqui está uma visão geral dos repositórios relevantes relacionados aos nossos produtos ativos:

<table>
  <tr>
   <td><h3>Produtos</h3>
   </td>
   <td><h3>Repositórios</h3>
   </td>
   <td><h3>Descrições</h3>
   </td>
  </tr>
  <tr>
   <td>Giveth.io
   </td>
   <td>impact-graph
   </td>
   <td>Backend da Giveth.io
   </td>
  </tr>
  <tr>
   <td>Giveth.io
   </td>
   <td>giveth-next
   </td>
   <td>Giveth.io Versão Atual
   </td>
  </tr>
  <tr>
   <td>Giveth.io
   </td>
   <td>giveth-io-typescript
   </td>
   <td>Givethio typescript versão com um novo design.
   </td>
  </tr>
  <tr>
   <td>GIVEeconomy
   </td>
   <td>GIVeconomy
   </td>
   <td>Geralmente usado para planejamento e rastreamento de problemas
   </td>
  </tr>
  <tr>
   <td>GIVeconomy
   </td>
   <td>giv-token-contracts
   </td>
   <td>Implementações de Smart Contracts
   </td>
  </tr>
  <tr>
   <td>GIVeconomy
   </td>
   <td>liquidity-mining-dapp
   </td>
   <td>GIVeconomy Frontend UI (Interface do Usuário)
   </td>
  </tr>
  <tr>
   <td>GIVeconomy
   </td>
   <td>giv-token-subgraph
   </td>
   <td>Calculador de dados de $GIV para GIVeconomy Frontend
   </td>
  </tr>
  <tr>
   <td>GIVeconomy
   </td>
   <td>givback-calculation
   </td>
   <td>Calculador de GIVbacks
   </td>
  </tr>
  <tr>
   <td>TRACE
   </td>
   <td>giveth-dapp
   </td>
   <td>Frontend e planejamento da Giveth TRACE
   </td>
  </tr>
  <tr>
   <td>TRACE
   </td>
   <td>feathers-giveth
   </td>
   <td>Backend da Giveth TRACE
   </td>
  </tr>
  <tr>
   <td>TRACE
   </td>
   <td>dapp-mailer
   </td>
   <td>Sistema de notificação por e-mail para TRACE
   </td>
  </tr>
  <tr>
   <td>TRACE
   </td>
   <td>giveth-bridge
   </td>
   <td>Giveth Rinkeby - Sistema de Ponte (Bridge) da Mainnet
   </td>
  </tr>
  <tr>
   <td>Serviços Gerais
   </td>
   <td>ui-design-system
   </td>
   <td>Pacote npm para ativos de design da Giveth
   </td>
  </tr>
</table>

## Pipelines no Workspace "All-Devs"
Ao entrar em um workspace na guia Zenhub, você verá uma linha de colunas adjacentes que são usadas para identificar e gerenciar os status dos problemas atualmente nos repositórios. Você pode encontrar uma breve descrição de cada um abaixo:

**New Issues** - Novos bugs e recursos são apresentados aqui primeiro.

**Epics** - Pipeline para problemas épicos. Tarefas maiores compostas por vários problemas menores.

**Icebox** - Recursos ou sugestões que foram arquivados. Os problemas aqui não são prioritários e podem ser adicionados aos sprints somente se os desenvolvedores tiverem largura de banda.

**Backlog** - Problemas de baixa prioridade esperando para serem incluídos no planejamento do Sprint.

**Sprint Backlog** - Essas questões foram examinadas e estão prontas para serem trabalhadas. Elas serão adicionados no próximo sprint de acordo com a prioridade e a largura de banda do desenvolvedor.

**In Progress** - Apanhado e sendo trabalhado pelos Desenvolvedores, geralmente em compilações locais.

**Code Reviews** - Solicitações de Pull abertas aguardando revisão e eventual mesclagem no servidor de teste.

:::info
É obrigatório ter o código revisado por um dos membros da equipe principal, geralmente seu mentor ou aquele que apresenta o projeto a você pode revisá-lo, e por favor, peça revisão antes de enviá-lo para qualquer ambiente.
:::

**UAT Testing/QA** - O recurso ou correção de bug é implantado no servidor de teste para testes do usuário e garantia de qualidade.

**Done** -  A correção de bug ou recurso foram concluídos e estão prontos para serem implantados no servidor ativo.

:::info
Todas as questões devem atender aos critérios do DoD (Definition of Done) para serem aprovadas como concluídas e estarem nessa coluna:
Critérios de sucesso aprovados (se for mencionado na história do usuário/tarefa ou problema relacionado)
Implantado no Preparo
UAT Testado por um testador ou PM (Product Manager)
Documentado
:::

**Closed** - A correção de bug ou recurso foi copiado ao vivo. É recomendável que todos os problemas fechados sejam relacionados a um número de lançamento no zenhub e sejam fechados logo após a versão ser lançada.

### Criando Problemas

A criação de problemas no Github é essencial para garantir que as correções de bugs ou recursos sejam rastreados adequadamente e as informações relevantes possam ser organizadas e consolidadas. O novo modelo de problema é apenas um guia, sinta-se à vontade para excluir qualquer título que você não use.

**Labels** - ajudarão a adicionar contexto ao seu problema, use-os para que outros desenvolvedores possam entender melhor os problemas e encontrá-los rapidamente. Alguns rótulos comumente usados ​​em `All-Devs` são:

**`fast follow`** - Recursos ou melhorias prioritárias após o lançamento de um produto ou de uma versão.

**`documentation`** - Solicitação de criação ou atualização de documentação técnica.

**`bugs`** - Funcionalidade ou recurso de um produto que está quebrado ou não está funcionando conforme o esperado.

**`feature request`** - Solicitação para que um novo recurso ou funcionalidade seja adicionado a um produto.

**`design needed`** - Solicitação do suporte da equipe de design para criar ativos relevantes para este problema.

**`question`** - Há uma questão pendente dentro deste problema que precisa de uma resposta para avançar.

**`security`** - Problema ou melhoria de segurança.

**`UI`** - Este problema está relacionado à interface do usuário de um determinado produto.

**`UX`** - Este problema está relacionado à experiência do usuário de um determinado produto

## Cerimônias

Costumamos organizar muitas reuniões de desenvolvedores ao longo da semana no [servidor da Giveth no Discord](https://discord.giveth.io), incluindo:

- Reuniões diárias de desenvolvimento de terça a quinta-feira às 6h30am GMT-6
- All-Devs Sync semanalmente às segundas-feiras às 10:00 GMT-6
- GIVeconomy Sync semanalmente às quartas-feiras às 8h GMT-6

Essas reuniões são importantes para manter-se atualizado com o desenvolvimento de DApps e integrar-se à equipe da Giveth como colaborador de desenvolvimento.

## Gerenciamento de Sprint

Framework: Estamos praticando principalmente o Scrum, em iterações quinzenais (chamadas sprints), às vezes com base em situações de projeto que mudamos para KanBan.

### O que é Scrum?

No scrum, o sprint é um período de tempo definido em que todo o trabalho é feito. No entanto, antes de entrar em ação, você precisa configurá-lo. Você precisa decidir quanto tempo durará a time box, o objetivo do sprint e por onde você vai começar. A sessão de planejamento inicia o sprint definindo a agenda e o foco.

- **The What** – O proprietário do produto descreve o objetivo (ou meta) do sprint e quais itens do backlog contribuem para esse objetivo. A equipe scrum decide o que pode ser feito no próximo sprint e o que eles farão durante o sprint para que isso aconteça.

- **The How** – A equipe de desenvolvimento planeja o trabalho necessário para entregar a meta do sprint. Em última análise, o plano de sprint resultante é uma negociação entre a equipe de desenvolvimento e o proprietário do produto com base no valor e no esforço.

- **The Who** – Você não pode fazer o planejamento do sprint sem o proprietário do produto ou a equipe de desenvolvimento. O proprietário do produto define a meta com base no valor que eles buscam. A equipe de desenvolvimento precisa entender como eles podem ou não entregar esse objetivo. Se estiver faltando algum deles neste evento, o planejamento do sprint será quase impossível.

- **The Inputs** – Um ótimo ponto de partida para o plano de sprint é o backlog do produto, pois fornece uma lista de “coisas” que podem fazer parte do sprint atual. A equipe também deve olhar para o trabalho existente feito no incremento e ter uma visão da capacidade.

- **The Outputs** – O resultado mais importante para a reunião de planejamento do sprint é que a equipe possa descrever o objetivo do sprint e como começará a trabalhar em direção a esse objetivo. Isso fica visível no backlog do sprint.

<img alt="sprint planning" width='75%' src={useBaseUrl('img/content/sprintInfo.png')} />

Antes do início da iteração, talvez seja necessário ter o total esperado de horas de contribuição na [Giveth Resource Planning Spreadsheet](https://docs.google.com/spreadsheets/d/1fJcFTLJof6o0rViKIy4C46sXuisySTud40HFsMGE1e0/edit#gid=311929329). O link geralmente fica compartilhado no canal de desenvolvimento do Discord antes da reunião de sprint. Você pode encontrar a planilha de sprint e atualizar as seguintes células:

<img alt='resource planning spreadsheet' src={useBaseUrl('img/content/resourcePlanningAllDevs.png')} />

Ele ajuda os Gerentes de Produtos (Product Managers - PMs) a planejar melhor os recursos e saber se eles são capazes de cumprir o marco em cada sprint ou não. Se você não conseguiu encontrar tempo para preencher a planilha, pode ser solicitado a fazê-la durante a reunião ou sempre que puder ter uma estimativa, basta enviar um DM para os gerentes de produtos ou colocá-los no canal dev.

O planejamento de sprint usual é assim:

1. Os Gerentes de Produtos apresentam os problemas, preferencialmente User Stories para a reunião de planejamento, descrevendo-os e certificando-se de que está claro para a equipe começar a implementar.
2. O Gerente de Produto facilita as conversas entre os desenvolvedores para deixar tudo o mais claro possível.
3. O Gerente de Produto pede estimativas em Story Points (Story Points são as unidades de esforços mínimos gastos em um produto que pode ser entregue o mais rápido possível, como uma simples correção de bug, por exemplo, pode levar metade de um dia útil.)
4. O Gerente de Produto começa a construir o “Sprint Backlog” priorizando os problemas e garantindo que a quantidade total de Story Points seja proporcional à capacidade total das equipes e colaboradores.
5. Todos concordam com o plano de sprint e se comprometem com a meta esperada.

## Principais Contatos

- Administrador do Grupo de Trabalho de Desenvolvimento - Amin
    - Discord: `Amin#2164`

- GIVeconomy Gerente de Produto - Lauren
    - Discord: `karmaticacid#1218`

- Giveth TRACE, Giveth.io Gerente de Produto - MoeNick
    - Discord: `MoeNick#1374`
- Giveth.io Líder de Desenvolvemento - Mateo
    - Discord: `mateodaza#3156`
- DevOps & Segurança - Kay
    - Discord: `geleeroyale#3228`
- Líder de Design - Marko
    - Discord: `markop#2007`


## Guias de Instalação para Desenvolvimento Local

- [Giveth.io](./givethioinstallation)
- [Giveth TRACE](./TRACEinstallation)
- [GIVeconomy](./installGIVeconomy)

## Diretrizes de Testes

- [Giveth.io](./testing-guidelines)
- [GIVeconomy](./testingGIVeconomy)

## Ferramentas que Usamos

- [Segment](https://segment.com/) (Giveth TRACE, Giveth.io)
- [Sentry](https://sentry.io/welcome/) (Giveth TRACE, Giveth.io)
- [Infura](https://infura.io/) (Giveth TRACE, Giveth.io)
- [Autopilot](https://journeys.autopilotapp.com/features/email-marketing-software) (Giveth.io)
- [Amplitude](https://www.amplitude.com/) (Giveth TRACE, Giveth.io)
- [Docusaurus](https://docusaurus.io/) (Documentação)
- [The Graph](https://thegraph.com/en/) (GIVeconomy)
- [Netlify](https://www.netlify.com/) (Giveth TRACE)
- [Vercel](https://vercel.com/dashboard) (Giveth.io, GIVeconomy)
- [Cryptocompare](https://www.cryptocompare.com/) (Giveth TRACE)
- [Coingecko](https://www.coingecko.com/en/api) (All Products)
- [Github Actions](https://github.com/features/actions) (All Products)
- [MongoDB](https://www.mongodb.com/) (Giveth TRACE)
- [PostgreSQL](https://www.postgresql.org/) (Giveth.io)
- [Redis](https://redis.io/) (Giveth TRACE, Giveth.io)
- [Elastic Search](https://www.elastic.co/elasticsearch/) (Giveth TRACE)
- [Kibana](https://www.elastic.co/kibana/) (Giveth TRACE)
- [Pinata](https://www.pinata.cloud/) (Giveth.io, GIVeconomy)
- [Transak](https://transak.com/) (Giveth.io)
- [AdminBro](https://v2.adminbro.com/index.html) (Giveth.io)
