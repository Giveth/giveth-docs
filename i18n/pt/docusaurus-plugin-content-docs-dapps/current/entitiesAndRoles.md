---
id: entitiesAndRoles
title: Giveth Entidades e Funções
slug: dapps/entitiesAndRoles
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../../../../src/css/custom.css'
import TraceDeprecated from './_traceDeprecatedPT.mdx'

<TraceDeprecated />


*O conteúdo e as ideias foram modificados a partir desse excelente artigo “[Uma visão geral do aplicativo de doações”](https://medium.com/giveth/what-is-the-future-of-giving-d50446b0a0e4), de autoria de Kris Decoodt em 2017. Muitas coisas foram revisadas e modificadas desde 2017. Aqui detalhamos o como está o DApp em 2022*.

Esse documento explica como diferentes interações dentro do Giveth DApp podem ser feitas. O objetivo é fornecer um esboço claro das entidades e funções dentro da Giveth TRACE DApp. Este documento foi adaptado para vários públicos e casos de uso da seguinte forma:

- **Desenvolvedores:** podem usar esse documento como parte dos Requisitos do Sistema.
- **Testadores:** podem usar esse documento para entender como o DApp deve funcionar para determinar qual comportamento está errado e deve ser relatado como um bug. Este documento não é um Caso de Teste formal em SDLC (Ciclo de Vida de Desenvolvimento de Software), mas ainda pode ser usado para orientação.
- **Equipe de Suporte:** pode usar esse documento como referência para ajudar novos usuários que tenham dificuldades com o DApp.

- **Usuário Final** pode usar este documento para obter maior compreensão de como o DApp funciona. No entanto, o conhecimento básico de Blockchain, Ethereum e Giveth é recomendado.

## Funções

Nós temos 8 funções na Giveth TRACE. Neste artigo, explicaremos detalhadamente como obter uma posição, sua importância e o poder de cada função. 

1. <a href="#giver"><strong>Giver</strong></a>
2. <a href="#communityManager"><strong>Community Manager</strong></a>
3. <a href="#campaignManager"><strong>Campaign Manager</strong></a>
4. <a href="#campaignReviewer"><strong>Campaign Reviewer</strong></a>
5. <a href="#traceManager"><strong>Trace Manager</strong></a>
6. <a href="#traceReviewer"><strong>Trace Reviewer</strong></a>
7. <a href="#recipient"><strong>Recipient</strong></a>
8. <a href="#websiteUser"><strong>Website User</strong></a>


### Website User (Usuário do Site)

Isso se refere a qualquer pessoa que visite nosso site. Sem se registrar como usuário no Rinkeby, eles não podem interagir com nenhuma entidade Giveth nem fazer doações no Giveth TRACE.

### Como se tornar um Usuário do Site

- Qualquer pessoa com o endereço do site Giveth TRACE pode se tornar um usuário.

### Poder de um Usuário do Site

- Navegar pelas Comunidades, Campanhas e Rastreio
- Criar um perfil
- Editar seu  perfil
- Ver o perfil de outras pessoas.
- Inscrever-se em uma comunidade, Campanha ou Rastreio.


***Nota**: A maioria das ações do site requer autenticação por meio de uma carteira Web compatível com a Ethereum; atualmente Giveth TRACE suporta apenas a MetaMask.*

### <a name="giver">Giver (Doador)</a> 

O termo Giver descreve qualquer pessoa que use nossa plataforma para fazer doações para uma Comunidade, Campanha ou Rastreamento. Os doadores podem interagir com todas as 3 entidades, mas não fazem parte explicitamente de nenhuma, a menos que escolham participar de uma comunidade ou assumir outra função também.

#### Como se tornar um Giver**

- Qualquer pessoa com uma carteira Ethereum pode doar para uma comunidade, campanha ou uma Trace no DApp e se tornar um doador.

#### Poderes de um Giver**

- Aceitar ou rejeitar uma delegação atrasada de uma comunidade ou campanha.


**Nota**: Os doadores podem vetar ou "rejeitar" uma delegação proposta dentro de 3 dias da proposta da delegação. Isso é chamado de "atraso" de delegação. Após 3 dias, a delegação atrasada será aceita automaticamente pelo DApp.*


### <a name="communityManager">Community Manager (Gerente de Comunidade)</a> 


Um Gerente de Comunidade é o usuário registrado que possui uma comunidade. Eles podem delegar os fundos doados às suas Comunidades. Uma delegação é um processo, onde a doação prometida a uma Comunidade é transferida para uma Campanha ou uma Trace. Uma vez delegada, o Doador tem 3 dias para rejeitar (ou aprovar) a delegação. Após esse período, o dinheiro é aprovado automaticamente e bloqueado na Campanha ou na Trace para qual o dinheiro foi delegado.

#### Como se tornar um Gerente de Comunidade?

- Um usuário pode criar uma comunidade e se tornar o gerente da comunidade após ser incluído na lista de permissões por um administrador do DApp.

#### Vantagens de um Gerente de Comunidade

- Edite o nome, a descrição, a imagem e o link da sua Comunidade.
- Dê fundos comunitários (por meio de delegação atrasada) para campanhas e traces.

***Note:** Para iniciar uma delegação atrasada, o Gerente da Comunidade deve acessar a página Traces ou Campanha e clicar no botão ``Delegar Fundos``..

### <a name="campaignManager">Campaign Manager (Gerente de Campanhas)</a> 


Gerentes de Campanhas são usuários da Giveth.io que optaram por tornar seu projeto rastreável e passaram no processo de verificação do projeto. O papel de um Gerente de Campanha é criar Traces através dos quais eles podem financiar o trabalho das pessoas e o custo dos recursos por trás do projeto.

#### Como se tornar um Gerente de Campanha

Verifique seu projeto Giveth.io e solicite para se tornar rastreável, atualizando para uma campanha no TRACE e tornando-se o gerente dessa campanha.

#### Vantagens de um Gerente de Campanhas

- Editar suas campanhas
- Enviar fundos de campanha (via delegação) para Traces dentro de sua campanha.
- Rejeitar ou aceite Traces propostos para sua Campanha.
- Criar ou editar Traces em sua própria campanha.

***Nota:** uma Trace precisa pertencer a pelo menos uma campanha e ser aprovada pelo gerente de campanha.*

### <a name="campaignReviewer">Campaign Reviewer (Revisor de Campanhas)</a> 

Como as doações para uma campanha estão bloqueadas, a função de revisor de campanha é fundamental para revisar e acompanhar o progresso da campanha. Os Revisores de Campanhas possuem a responsabilidade de verificar a legitimidade de uma Campanha e suas Traces, sendo bem influentes com um poder considerável dentro da campanha.

#### Como se tornar um Revisor de Campanha

- Um Gerente de Campanha pode designar um usuário para se tornar um Revisor de Campanha.

#### Poderes de um Revisor de Campanha

- Rejeitar ou aprovar Traces Concluídos.
- Cancelar Traces em sua campanha.
- Cancelar uma Campanha.

### <a name="traceManager">Trace Manager (Gerente de Rastreamento)</a>  

Os Tracers são a base do sistema Giveth. Qualquer usuário cadastrado pode propor um Tracer para uma Campanha. No entanto, um Gerente ou um Revisor devem aprovar a Trace proposta para sua campanha, para que ela se torne válida. Traces podem representar vários tipos de solicitações de financiamento. Saiba mais sobre os <a href="#traceTypes" >Tipos de Traces</a>

#### Como se tornar um Gerente do Trace

- Um usuário pode propor uma Trace para campanha e se tornar o Gerente da Trace. 

#### Poderes de um Trace Manager
- Editar seu Trace.
- No caso de criar uma Bounty(recompensas) ou um Milestone (marcos), um Gerente do Trace pode definir um Revisor para o Trace.
- Marcar uma Trace como concluída. 

***Nota**: um Trace não poderá ser editada depois de receber uma delegação ou doação.*

## Beneficiário (Recipiente)

Um Beneficiário é um usuário registrado que receberá o pagamento da sua Trace concluída com êxito. Na maioria dos casos, o Beneficiário também é o Gerente do Trace, pois é ele quem está trabalhando nele. No entanto, em alguns casos, o Beneficiário é separado, como para pagamentos a um fornecedor ou um marco para uma campanha.

**Como se tornar um Beneficiário** 

- Um Beneficiário pode ser designado por um Gerente do Trace. O cargo pode ser ocupado por ele mesmo ou qualquer outro usuário.

**Poderes de um Beneficiário**

- Marcar uma Trace como concluída.
- Solicitar o pagamento dos fundos da Trace.

**Note**: Caso a Trace tenha um Revisor, a coleta de fundos precisa ser aprovada por ele.

**Latência**

Algumas ações precisam ser registradas na rede Blockchain da Ethereum. A adição de transações a blockchain não acontece imediatamente, por isso observamos uma latência em algumas ações. Essa latência depende das condições da rede, por exemplo, o tráfego da rede.


**Localidade das Funções**

Todas as funções têm um escopo limitado e uma vez que uma entidade deixa de existir, o mesmo acontece com as funções conectadas. Cada Comunidade contém exatamente um Gerente de Comunidade. Cada campanha tem um Gerente de Campanha e um Revisor de Campanha. Cada Trace possui um Gerente, um Beneficiário e um Revisor. O Doador não está explicitamente associado a nenhuma entidade, mas pode interagir com todas elas.

![](https://docs.giveth.io/img/content/trace/role-locality.svg)


**Fluxo do Dinheiro**

Giveth TRACE em nível técnico é um sistema para gerenciamento de capital. Os termos referentes à movimentação de fundos dentro do sistema Giveth são definidos da seguinte forma:

**Doação:** Quando um Doador envia fundos de sua carteira para um Trace, Campanha ou Comunidade.

**Coleta** Quando o Recipiente envia ou "coleta" fundos de um Trace para sua carteira.

**Desembolso**: Quando um Gerente do Trace envia fundos de uma conta Trace para a carteira do Recipiente.

**Delegação**: Quando um Gerente de Campanha ou Gerente de Comunidade envia dinheiro da conta da campanha ou da comunidade para a conta da Trace em nome do doador original. Um Doador pode rejeitar a Delegação dentro de 72 horas, após isso a transferência do dinheiro se torna irreversível.

**Reembolso**: Um Doador que tenha contribuído para uma Comunidade pode retirar seus fundos desde que ainda não esteja comprometido com uma Campanha ou um Trace. O Doador que contribui para uma Campanha pode retirar seus fundos desde que ainda não esteja comprometido com um Trace. 

![](https://docs.giveth.io/img/content/trace/currencyFlow.svg)


**Fluxo do Dinheiro na Giveth Trace** 

## Entidades

O Giveth TRACE, a nível técnico, é um sistema de gestão de capital. As entidades do DApp são contas nas quais as pessoas podem depositar, transferir ou sacar dinheiro. Temos três entidades no Giveth TRACE: Comunidades, Campanhas e Traces. A relação entre elas está definida no gráfico abaixo. Cada entidade corresponde a um ou mais contratos inteligentes.


**Nota**: no primeiro trimestre de 2021, a equipe da Giveth renomeou as entidades **DACs** (Decentralized Altruistic Communities) para simplesmente **Comunidades**, e **Milestones** para **Traces.**.

![](https://docs.giveth.io/img/content/trace/relations.svg)

**Relacionamento entre as Entidades do DApp**

## Comunidades

Comunidades, **anteriormente conhecido como DACS**, são as entidades mais importantes no Sistema da Giveth. O propósito de uma Comunidade é unir Doadores em torno de uma causa e fornecer a eles a possibilidade de doar dinheiro para uma causa sem ter que fazer a pesquisa necessária para encontrar a Campanha exata para a qual contribuir. Qualquer dinheiro doado para uma Comunidade pode ser recuperado pelo Doador, no entanto, desencorajamos os Doadores a fazer isso. Os fundos permanecem na Comunidade até serem delegados a uma Campanha/Trace, ou retirados pelo Doador. Gerentes de Comunidades  podem oferecer suporte a qualquer campanha/trace enviando moedas para a conta do destinatário.

![](https://docs.giveth.io/img/content/trace/dac-campaign-donation-statediagram.svg)

**Diagrama de transição de estados para Comunidade -> Fluxo de delegação de campanha, mostrando como as doações feitas a DAC são delegadas a uma campanha.**

![](https://docs.giveth.io/img/content/trace/dac-milestone-donation-statediagram.svg)

**Diagrama de transição de estados para Comunidade -> Fluxo de delegação do Trace, mostrando como as doações feitas a uma Comunidade são delegadas diretamente a um Trace.**

## Campanhas

As campanhas estão no centro do sistema de doação da Giveth. Elas são ferramentas cruciais para direcionar o dinheiro para as menores entidades, as Traces. Uma Campanha pode ser apoiada por mais de uma Comunidade ou por nenhuma Comunidade. Os coproprietários da campanha só podem aceitar ou rejeitar Traces propostos. Os Revisores da Campanha podem cancelá-la se for ruim ou não estiver mais ativa.

As doações feitas para uma campanha são bloqueadas e, a menos que seja cancelada, o doador não tem mais controle sobre a doação. A razão pela qual bloqueamos as doações é dar às pessoas por trás da Campanha algum nível de certeza de que podem contar com as doações prometidas e comprometê-las a um de seus Traces.


![](https://docs.giveth.io/img/content/trace/campaign-donation-statediagram.svg)

**Diagrama de transição de estados para doações feitas para Campanha.**

## Traces (Rastreamentos)

Os principais blocos do DApp são as Traces, **anteriormente conhecidos como Milestones (Marcos)**. As Traces são a única maneira pela qual os fundos podem sair do sistema Giveth, e elas devem ser criadas dentro de uma campanha. Em comparação com uma comunidade ou campanha, os Traces são mais complexos porque mais funções podem interagir com elas.

### <a name="traceTypes">Traces Entities (Entidades)</a>

Para adequar a Trace às necessidades específicas das Comunidades e Campanhas, existem certas regras que podem ser aplicadas.

- **Trace Limitado:** A quantidade máxima de capital que pode ser dada a uma Trace é definida. Esse máximo é chamado de CAP.
- **Trace com um Revisor:** Os fundos não podem ser coletados ou desembolsados dessa Trace sem a confirmação de um Revisor designado.
- **Especifique a Moeda Recebida:** O Criador da Trace pode especificar em qual das criptomoedas da lista de permissões eles gostariam de receber seus fundos.

Com base nessas regras, podemos ter quatro tipos de Traces com propriedades distintas: **Milestones(Marcos), Bounties (Recompensas), Expenses (Despesas) e Payment(Pagamentos)**.

## **Milestones (Marcos)**

**Objetivos ou eventos importantes para uma campanha. Quaisquer fundos coletados em Milestones vão para a Campanha da qual ele faz parte.**

*O ciclo de vida dos Milestones no DApp é o seguinte:*

![](https://docs.giveth.io/img/content/trace/milestone.png)

## **Bounties (Recompensas)**

**Se uma Campanha ou Comunidade precisar terceirizar o trabalho a ser feito, eles podem usar uma Bounty para compensar os contribuidores pela conclusão de tarefas específicas.**

<img alt="Lifecycle of Bounties" src={useBaseUrl('img/content/trace/Bounty.png')} />

## **Expenses (Despesas)**

**Caso existam despesas recorrentes ou singulares que foram pagas por uma Campanha ou por um Membro da Comunidade, elas poderão ser rastreadas e reembolsadas por essa Trace.**

*O Ciclo de Vida das Despesas é o seguinte:*

<img alt="Lifecycle of Expenses" src={useBaseUrl('img/content/trace/Expense.png')} />

## **Payments (Pagamentos)**

**Os pagamentos são compensações aos membros da Campanha pelo trabalho que fizeram. Os pagamentos podem ser ilimitados ou limitados para o financiamento que podem receber.**

*Como o ciclo de vida para pagamentos sem limites funciona:*

<img alt="Lifecycle of Payments without Cap" src={useBaseUrl('img/content/trace/paymentNoCap.png')} />

*Como o ciclo de vida para pagamentos com limite funciona:*

 <img alt="Lifecycle of Payments with Cap" src={useBaseUrl('img/content/trace/paymentWithCap.png')} />

A divisão de suas funções pode ser resumida na tabela abaixo:

| Tipos de Trace | Financiamento Limitado | Especificar Moeda Recebida | Pode Atribuir Revisor | Destino da Moeda| 
| -------- | -------- | -------- |-------- |-------- |
| Marcos    | Não     | Não  | Sim | Campanha 
| Recompensas  | Não  | Não | Sim | Qualquer Endereço 
| Despesa    | Sim   | Sim  | Não | Qualquer Endereço 
| Pagamento SEM limite| Sim | Sim | Não | Qualquer Endereço |
Pagamento com limite | Sim | Sim | Não | Qualquer Endereço 

**Notas:**

- Na codificação ''Entidades'' são chamadas de ``projects``
- Quando o dinheiro vai de uma comunidade para uma Trace ou campanha, a Giveth conecta a comunidade com essa campanha ou rastreamento. Isso significa que você verá essa campanha ou a Trace representada na página da comunidade.
- Se uma Trace/Campanha/Comunidade for cancelado, os fundos serão devolvidos ao contribuinte de origem automaticamente.
- O dinheiro que vai para uma Comunidade é um compromisso incerto: a qualquer momento ou até o momento em que os fundos são bloqueados em uma Campanha/Marco, o Doador pode decidir retirá-los (reembolsá-los).
- O dinheiro que foi para uma Campanha/Trace está totalmente comprometido, porque os Gerentes de Trace e os Gerentes de Campanha realizam ações com base nesses fundos.
















































