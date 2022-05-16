---
slug: futureOfGiving2017
title: Qual é o futuro da doação?
author: Kris
author_image_url: /img/krisAuthor.jpeg
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../src/css/custom.css'


Uma visão geral do aplicativo de doação Giveth
==============================================

_Edit: para o status atual do desenvolvimento, atualizações mais recentes_ [_aqui_](https://medium.com/giveth/tagged/dappening)

Se você já conversou com um Giveth [Unicorn](https://medium.com/giveth/giveth-introduces-decentralized-altruistic-communities-dacs-d1155a79bdc4), as chances são altas, não deixamos você ir antes de entender o que é Giveth - somos um grupo apaixonado. Se você ainda não conheceu pessoas como [Griff Green](https://medium.com/@thegrifft), [Jordi Baylina](https://github.com/jbaylina), [Grace Torrellas](https://twitter.com/GraceTorrellas), [Vojtech Simetka](https://github.com/vojtechsimetka) e [muitos outros grandes rostos](https://wiki.giveth.io/dac/team-organisation/) que contribuem para a Plataforma Giveth, você pode se perguntar **o que exatamente estamos construindo e por quê.**

Para ser claro e simples: queremos tornar o **processo de doação para causas em que você acredita eficaz e transparente**, e estamos usando a tecnologia blockchain para isso. Em [outubro de 2016](https://medium.com/giveth/the-minime-token-open-sourced-by-giveth-2710c0210787) a equipe começou a desenvolver o DApp (Aplicativo de Doação) e agora [está se aproximando](https://wiki.giveth.io/dapp) do lançamento de seu Produto Mínimo Viável (MVP). Na preparação para isso, gostaríamos de dedicar um momento para explicar por que estamos criando a plataforma e dar uma prévia do fluxo de usuários.

**Espere, mas por quê?**

Se você já doou para organizações sem fins lucrativos ou de caridade, as chances são altas, sua experiência foi semelhante a esta: no caminho para o metrô, você foi parado por um jovem convincente que conseguiu seu nome, endereço e assinatura para uma doação mensal fixa a uma causa específica. Desde aquele momento, algumas vezes por ano – se você tiver sorte – você recebe um boletim da velha escola que você joga fora sem ler. **Você fica totalmente no escuro sobre para onde foi sua doação**, e a organização sem fins lucrativos recebe um valor mensal até que você decida cancelar.

Giveth muda tudo isso. Como todas as doações são registradas no blockchain Ethereum, você pode acompanhar, em tempo real, quem recebe suas doações e por que em um nível muito granular.

A plataforma Giveth tem uma estrutura simples de incentivos baseada em resultados: quando os fundos são coletados, eles são armazenados em nosso [Cofre](https://medium.com/giveth/the-vault-contract-open-sourced-by-giveth-fe2261f7b91b) e somente após a conclusão dos Marcos, os fundos podem ser retirados. Os fundos do Doador estão sob seu controle até que suas doações sejam bloqueadas para um propósito específico.

Essa estrutura básica dá a eles uma visão clara das diversas pessoas envolvidas no processo e a possibilidade de contatar todos diretamente. E se eles não gostarem do uso de seus fundos, eles terão tempo para bloquear seu uso.

Estamos construindo o **Futuro da Doação eliminando a burocracia** para que os fundos possam ser gastos com mais eficiência e todos possam colaborar para tornar o mundo um lugar melhor.

**Falar por falar**

Estamos reformulando a forma como as doações são feitas e, com isso, tivemos que reinventar a [linguagem](http://wiki.giveth.io/dapp/product-definition) para falar sobre isso. Os três principais blocos de construção do sistema Giveth são Comunidades (DACs), Campanhas e Marcos. Um **DAC** – abreviação de Comunidade Altruísta Descentralizada – é o grupo de pessoas unidas em torno de uma causa que desejam apoiar. Este DAC financiará e orientará várias **Campanhas**, que por sua vez também podem ser apoiadas por mais de um DAC. Uma Campanha traduz os sonhos de um DAC em uma agenda mais específica à qual os pontos de ação estão vinculados: nós os chamamos de **Marcos**. Os Marcos são a menor entidade dentro do sistema Giveth e são a última etapa do nosso fluxo de doações. Uma vez concluídos, os fundos são liberados na natureza para reembolsar e recompensar pessoas boas por seu bom trabalho.

<img alt="Building Blocks of Giveth" src={useBaseUrl('img/blog/buildingBlocksGiveth.png')} />

##### Os 3 principais blocos de construção da Giveth são Comunidades (DACs), Campanhas e Marcos.

Nós nos concentramos na tecnologia para que as pessoas possam se concentrar inteiramente em se unir em torno de causas. Para isso, precisamos definir **alguns dos papéis básicos** em nosso sistema.

Um **Doador** pode doar diretamente para uma Campanha em que acredita ou pode decidir doar fundos para um DAC que alocará esses fundos para Campanhas apropriadas em nome do Doador - chamamos esse processo de [Doação líquida](https://medium.com/giveth/liquid-democracy-what-that-bd3c63e8df52). Ao doar, o Doador automaticamente se torna parte do DAC e está conectado com o restante da comunidade.

Os **Delegados** são membros registrados do DAC que assumem a tarefa de alocar os fundos enviados ao seu DAC para uma ou mais Campanhas.

Os **Criadores** são todas as pessoas dentro dessas campanhas que fazem a mudança que os DACs querem ver no mundo. Existem alguns papéis específicos que os Criadores precisam cumprir.

* Os **Gerentes de Campanha** são os Criadores que criam Campanhas, atribuem fundos a Marcos específicos e garantem que sua Campanha específica seja um sucesso.
* Os **Gerentes de Marcos** são os Criadores responsáveis por Marcos específicos e precisam garantir que essas ações muito específicas sejam alcançadas conforme descrito.
* Os **Destinatários** são os Criadores que recebem os fundos quando um Marco é concluído com sucesso.

<img alt="Giveth Roles" src={useBaseUrl('img/blog/givingBlogRoles1.png')} />

##### Principais funções dentro da plataforma Giveth: Doador, Delegado, Gerente de Campanha, Gerente de Marcos, Destinatário.

Duas funções adicionais foram criadas para **garantir o uso correto dos fundos.**

* O **Revisor de Campanha** pode rejeitar a conclusão de qualquer Marco e pode, como forte medida de segurança, até mesmo cancelar uma Campanha inteira se parecer fraudulenta.
* A função do **Revisor de Marcos** é confirmar que o Gerente de Marcos realmente atingiu a meta ou ação proposta descrita no Marco.

Isso nos leva ao **verdadeiro poder** da plataforma Giveth: a todo momento o Doador sabe exatamente o que está acontecendo com os fundos doados, como eles estão sendo gastos e tem total controle por meio de uma **rede transparente de responsabilidades**. Se um Milestone for cancelado, os fundos serão devolvidos à Campanha. Se uma Campanha for cancelada, os fundos são automaticamente devolvidos aos Delegados que a apoiaram. Se um Delegado sair, os fundos são devolvidos ao Doador. Além disso, um dos aspectos mais revolucionários desse sistema é que, a qualquer momento, até o momento em que os fundos são bloqueados em uma Campanha, o Doador pode decidir retirá-los.

<img alt="Giveth Additonal Roles" src={useBaseUrl('img/blog/givingBlogRoles2.png')} />

##### Duas funções extras garantem o uso correto dos fundos: Revisor de Campanha e Revisor de Marco.

Você pode descobrir mais sobre essas funções e responsabilidades lendo a [definição do produto](https://wiki.giveth.io/dapp/product-definition/) em nosso wiki.

**Andar a pé**

O Giveth Donation Application está [agora em fase beta na testnet](https://wiki.giveth.io/dapp), com todas as funções descritas acima integradas e atualmente sendo testada com uma equipe selecionada de voluntários.

<iframe width="560" height="315" src="https://www.youtube.com/embed/gPXoEzuNQzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

##### O cofundador da Giveth, Griff Green, explica o que é o aplicativo de doação da Giveth.

Sempre temos oportunidades para desenvolvedores qualificados contribuirem com nosso projeto, e você pode [doar](https://wiki.giveth.io/dac/finances/) para 'revolution.eth' para recompensar e incentivar os desenvolvedores que estão tornando a plataforma Giveth uma realidade. Participe do nosso [Slack](http://slack.giveth.io/) e descubra como você pode contribuir.

Enquanto isso, continuaremos construindo a plataforma e compartilharemos nas próximas semanas e meses como os diferentes componentes funcionam. Fique atento para mais!

Atenciosamente,

[Giveth](https://giveth.io/)

* Conheça nosso [Site](http://giveth.io/) e [Wiki](https://wiki.giveth.io/)
* Fork nosso código no [Github](http://github.com/Giveth/)
* Siga-nos no [Medium](http://medium.com/giveth/), [Facebook](https://www.facebook.com/givethio), [Twitter](http://twitter.com/givethio) e [Reddit](https://www.reddit.com/r/giveth/)

Ajude-nos a construir o futuro da doação: 🤲🏼 [Doe diretamente](http://donate.giveth.io/) 🤲🏼 ou compre uma Ledger com nosso [link de afiliado](https://www.ledgerwallet.com/products/ledger-nano-s?utm_source=&utm_medium=affiliate&utm_campaign=d663). ⏎