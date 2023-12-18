---
id: developmentProcess
title: Processo de Desenvolvimento
slug: dapps/developmentProcess
---
import TraceDeprecated from './_traceDeprecatedPT.mdx'

<TraceDeprecated />


**Essa seção detalha o processo de desenvolvimento da Giveth TRACE, implantações e como a mesclagem e o teste são tratados.*

## Planejamento de desenvolvimento, Sprints e onde se envolver.

Executamos um ciclo de sprint de 2 semanas com reuniões semanais de desenvolvedores para planejar sprints e avaliar o progresso. Você pode verificar quando é a próxima no nosso [Google Agenda](https://calendar.google.com/calendar/embed?src=givethdotio%40gmail.com) e também entrar em contato pelo [Giveth Discord]( https://discord.giveth.io) com o `@moenick`, o gerente do projeto Giveth TRACE. Também é possível encontrar o [repositório Giveth TRACE no Github](https://github.com/Giveth/giveth-dapp).

## Implantações e Organização de Branch

Giveth TRACE fez a transição de desenvolvimento passivo para ativo para lançamento pós-beta em breve. Existem duas implantações usadas para o processo de desenvolvimento atualmente.

Nome | Blockchain | Branch Deployed | Auto Deploy | Utilização |
-----|------------|-----------------|-------------|-----|
[beta](https://trace.giveth.io) | Mainnet/Rinkeby | master | não | Implantação em bridge; Rinkeby para interações contratuais internas, Mainnet para enviar e receber fundos reais.
[develop](https://develop.giveth.io) | Ropsten Test Network | develop | sim | Ambiente de desenvolvimento para integração e teste de novos recursos. Branches de recurso e pull requests são implantados nesse ambiente.

As duas Branchs abaixo estão sendo usadas no gitflow.

Nome | Descrição |
-----|------------|
master | A Branch master rastreia apenas o código liberado. Os commits são feitos para master no meio de cada mês para não interferir nos processos de pagamento que acontecem perto do final e do início desses meses.
develop | As implantações feitas para desenvolver são de compilações locais e incluem novos recursos e correções de bugs.

## Uso da Boards Zenhub

Atualmente, usamos a extensão Zenhub Boards para Github para acompanhar o progresso dos recursos e correções. Você pode obter a [extensão Zenhub aqui](https://www.zenhub.com/extension).

O fluxo de problemas do Github atual é o seguinte:

Nome | Utilização |
-----|------------|
Novos Problemas | Crie um novo problema para uma nova solicitação de recurso ou para relatar um bug. Marque um desenvolvedor ou `@moenick` para garantir que seja notado. Use rótulos para adicionar contexto ao seu problema.
Icebox | Recursos e ideias a serem considerados para desenvolvimento futuro, a serem avaliados pela equipe Giveth somente quando a largura de banda do desenvolvedor permitir.
Lista de pendências do produto | Questões que precisam ser tratadas ou novos recursos aprovados para desenvolvimento. Estes serão enfileirados no próximo sprint progressivamente.
Épicas |Grandes tarefas que foram divididas em questões menores.
Precisa de Esclarecimento | Problemas que exigem mais esclarecimentos do criador do problema para avançar.
Sprint Backlog | Problemas que estão sendo trabalhados no sprint atual.
Bugs & Ops | tarefas urgentes que precisam ser priorizadas. A largura de banda é reservada no cronograma do sprint para os desenvolvedores resolverem quaisquer problemas aqui.
Em Progresso | Problemas que foram selecionados por um desenvolvedor para o sprint atual.
Revisão de código| Os desenvolvedores devem revisar o código referenciado nesses problemas para garantir a qualidade e corrigir possíveis problemas antes de passar para o teste do usuário.
UAT (User Acceptance Testing) | Recursos ou correções prontas para serem testadas pelo usuário.
Done | Questões prontas para serem mescladas ao `master` de acordo com o ciclo de confirmação.

### Fazendo uma Pull Request

Antes de fazer uma nova Pull Request, certifique-se de que seu código não tenha problemas de linter e possa ser implantado. Somente PRs implantados com êxito e que não tenham conflitos de mesclagem serão mesclados. Você também pode verificar facilmente a visualização de implantação na integração de implantação automática do Github Netlify.

![Integração de implantação automática](https://d33wubrfki0l68.cloudfront.net/cfa6124f4e0bf556de850f40e97c6b4cc66231f9/d42f0/images/product-development/deploy-preview.png)
**Visualização de implantação.** Cada solicitação de pull para o repositório DApp tem uma visualização de implantação do Netlify. Você pode acessá-lo na parte inferior pelo botão ''Conversa'' depois de clicar no botão **Mostrar todas as verificações** e em **Detalhes**.


## Integração e Teste

A integração de novos recursos é feita pela **equipe de desenvolvimento** após uma reunião de desenvolvimento do DApp onde os PRs são revisados. Depois que os PRs são revisados ​​e corrigidos, eles são mesclados à ramificação de desenvolvimento. O teste dos novos recursos é feito no ambiente [`develop`](https://develop.giveth.io) para garantir que os recursos façam o que dizem e funcionem bem com o restante do DApp.

## ## Teste de garantia de qualidade

Depois que os novos recursos forem integrados e testados pelos desenvolvedores no ambiente [`develop`](https://develop.giveth.io), os desenvolvedores enviarão pings aos testadores com solicitações ou atualizações no [Giveth TRACE Dev Channel](https://discord .gg/79uUbyVCtE) no Discord. O teste não deve ser feito por desenvolvedores e está aberto a qualquer pessoa que deseje contribuir.

## Implantação de Produção

Apenas uma vez que todos os bugs recém-introduzidos são removidos na branch `develop`, ele pode ser mesclado para master e enviado para produção. Isso é feito manualmente pelo DApp devteam (construído por `@aminlatifi` e `@MohammadPCh`).

**Para implantar a versão mais recente do feathers-giveth**

```
$ ssh user@feathers.alpha.giveth.io

$ cd /home/deploy/feathers-giveth/
$ sudo -u deploy bash

$ git pull

$ yarn install --pure-lockfile
$ yarn serve
```

Em seguida, verifique o status de implantação dos feathers

```
$ pm2 logs
```

Se os logs estiverem limpos, a última etapa é implantar o commit da branch master mais recente no [Netlify](http://netlify.com/) e bloquear o deploy.

## Documentação de serviços da Web de back-end

Se você é um novo colaborador e gostaria de uma documentação técnica mais detalhada sobre todos os Webservices aproveitados desde o back-end (feathers-giveth) até o front-end (giveth-dapp), confira nossas páginas em **_Swagger_** para implantações de produção e preparação:

[feathers-giveth Production](https://feathers.beta.giveth.io/docs/?url=/docs#/)  
[feathers-giveth Staging](https://feathers.develop.giveth.io/docs)

## FAQ

**Qual é a definição de um recurso?**

 Um recurso é qualquer melhoria não trivial (menos de 10 linhas de código). A maioria dos recursos tem problemas no repositório Github correspondente.

**E as correções?**

Grandes correções não críticas são tratadas como qualquer outro recurso. Se uma correção for crítica no tempo, ela será criada como uma nova branch com o prefixo `hotfix/` como uma bifurcação da branch `master`. Esse hotfix é testado no mínimo por 2 pessoas da equipe de desenvolvimento antes de ser mesclado aos ramos `master` e `develop`.

**Onde comunicamos o que precisa ser testado?**

O teste de controle de qualidade é anunciado no canal `Giveth-1 Dev` no [Discord](https://discord.giveth.io).

**Como priorizamos quando os testes falham/correções de bugs?**

As correções de bugs são feitas ad-hoc assim que são descobertas durante o processo de teste. Os bugs podem ser resolvidos pela equipe de desenvolvimento do DApp ou pode-se pedir ajuda a contribuidores externos. A correção de bugs tem prioridade sobre o novo desenvolvimento.

**Quem faz as implantações e como elas são implantadas?**

A branch `develop` é implantada automaticamente em seu ambiente. A branch `master` é implantada pela equipe de desenvolvimento (`@aminlatifi`, `@RamRamez` e `@MohammadPCh`) uma vez que não há novos bugs conhecidos na branch `develop`. O processo é manual e existe um procedimento de implantação.

**Qual é a frequência do ciclo de lançamento?**

Há uma nova versão a cada 2 semanas, conforme descrito no [gráfico de gant do ciclo de desenvolvimento do produto](#product-development-testing-fig-release).



