"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[8812],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>c});var o=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),d=function(e){var a=o.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=d(e.components);return o.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},u=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(t),c=n,v=u["".concat(l,".").concat(c)]||u[c]||m[c]||r;return t?o.createElement(v,s(s({ref:a},p),{},{components:t})):o.createElement(v,s({ref:a},p))}));function c(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,s=new Array(r);s[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var d=2;d<r;d++)s[d]=t[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1130:(e,a,t)=>{t.d(a,{ZP:()=>s});var o=t(7462),n=(t(7294),t(3905));const r={toc:[]};function s(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},r,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Giveth TRACE foi oficialmente descontinuado. Depois de 5 anos de servi\xe7os, Giveth e suas plataformas, servi\xe7os e produtos migraram totalmente para ",(0,n.kt)("a",{parentName:"em",href:"https://giveth.io/"},"Giveth.io"),". Com a descontinua\xe7\xe3o da rede Rinkeby e a baixa frequ\xeancia de usu\xe1rios, o Giveth DAO decidiu encerrar seu dApp original no terceiro trimestre de 2022. O c\xf3digo \xe9 e sempre ser\xe1 aberto. Voc\xea pode encontr\xe1-lo nestes ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/Giveth"},"reposit\xf3rios do Github"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Toda a documenta\xe7\xe3o do Giveth TRACE vai permanecer dispon\xedvel para refer\xeancia hist\xf3rica."))),(0,n.kt)("hr",null))}s.isMDXComponent=!0},3982:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var o=t(7462),n=(t(7294),t(3905)),r=t(1130);const s={id:"developmentProcess",title:"Processo de Desenvolvimento",slug:"dapps/developmentProcess"},i=void 0,l={unversionedId:"developmentProcess",id:"developmentProcess",title:"Processo de Desenvolvimento",description:"Essa se\xe7\xe3o detalha o processo de desenvolvimento da Giveth TRACE, implanta\xe7\xf5es e como a mesclagem e o teste s\xe3o tratados.*",source:"@site/i18n/pt/docusaurus-plugin-content-docs-dapps/current/developmentProcess.md",sourceDirName:".",slug:"/dapps/developmentProcess",permalink:"/pt/dapps/developmentProcess",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/developmentProcess.md",tags:[],version:"current",lastUpdatedBy:"Mitch Oz",lastUpdatedAt:1667574492,formattedLastUpdatedAt:"4 de nov. de 2022",frontMatter:{id:"developmentProcess",title:"Processo de Desenvolvimento",slug:"dapps/developmentProcess"},sidebar:"dapps",previous:{title:"Implementa\xe7\xe3o de seguran\xe7a da Giveth Bridge",permalink:"/pt/dapps/bridgeSecurity"},next:{title:"Instalando o front-end do GIVeconomy",permalink:"/pt/dapps/installGIVeconomy"}},d={},p=[{value:"Planejamento de desenvolvimento, Sprints e onde se envolver.",id:"planejamento-de-desenvolvimento-sprints-e-onde-se-envolver",level:2},{value:"Implanta\xe7\xf5es e Organiza\xe7\xe3o de Branch",id:"implanta\xe7\xf5es-e-organiza\xe7\xe3o-de-branch",level:2},{value:"Uso da Boards Zenhub",id:"uso-da-boards-zenhub",level:2},{value:"Fazendo uma Pull Request",id:"fazendo-uma-pull-request",level:3},{value:"Integra\xe7\xe3o e Teste",id:"integra\xe7\xe3o-e-teste",level:2},{value:"## Teste de garantia de qualidade",id:"-teste-de-garantia-de-qualidade",level:2},{value:"Implanta\xe7\xe3o de Produ\xe7\xe3o",id:"implanta\xe7\xe3o-de-produ\xe7\xe3o",level:2},{value:"Documenta\xe7\xe3o de servi\xe7os da Web de back-end",id:"documenta\xe7\xe3o-de-servi\xe7os-da-web-de-back-end",level:2},{value:"FAQ",id:"faq",level:2}],m={toc:p};function u(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)(r.ZP,{mdxType:"TraceDeprecated"}),(0,n.kt)("p",null,"*",(0,n.kt)("em",{parentName:"p"},"Essa se\xe7\xe3o detalha o processo de desenvolvimento da Giveth TRACE, implanta\xe7\xf5es e como a mesclagem e o teste s\xe3o tratados.")),(0,n.kt)("h2",{id:"planejamento-de-desenvolvimento-sprints-e-onde-se-envolver"},"Planejamento de desenvolvimento, Sprints e onde se envolver."),(0,n.kt)("p",null,"Executamos um ciclo de sprint de 2 semanas com reuni\xf5es semanais de desenvolvedores para planejar sprints e avaliar o progresso. Voc\xea pode verificar quando \xe9 a pr\xf3xima no nosso ",(0,n.kt)("a",{parentName:"p",href:"https://calendar.google.com/calendar/embed?src=givethdotio%40gmail.com"},"Google Agenda")," e tamb\xe9m entrar em contato pelo ",(0,n.kt)("a",{parentName:"p",href:"https://discord.giveth.io"},"Giveth Discord")," com o ",(0,n.kt)("inlineCode",{parentName:"p"},"@moenick"),", o gerente do projeto Giveth TRACE. Tamb\xe9m \xe9 poss\xedvel encontrar o ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Giveth/giveth-dapp"},"reposit\xf3rio Giveth TRACE no Github"),"."),(0,n.kt)("h2",{id:"implanta\xe7\xf5es-e-organiza\xe7\xe3o-de-branch"},"Implanta\xe7\xf5es e Organiza\xe7\xe3o de Branch"),(0,n.kt)("p",null,"Giveth TRACE fez a transi\xe7\xe3o de desenvolvimento passivo para ativo para lan\xe7amento p\xf3s-beta em breve. Existem duas implanta\xe7\xf5es usadas para o processo de desenvolvimento atualmente."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Nome"),(0,n.kt)("th",{parentName:"tr",align:null},"Blockchain"),(0,n.kt)("th",{parentName:"tr",align:null},"Branch Deployed"),(0,n.kt)("th",{parentName:"tr",align:null},"Auto Deploy"),(0,n.kt)("th",{parentName:"tr",align:null},"Utiliza\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://trace.giveth.io"},"beta")),(0,n.kt)("td",{parentName:"tr",align:null},"Mainnet/Rinkeby"),(0,n.kt)("td",{parentName:"tr",align:null},"master"),(0,n.kt)("td",{parentName:"tr",align:null},"n\xe3o"),(0,n.kt)("td",{parentName:"tr",align:null},"Implanta\xe7\xe3o em bridge; Rinkeby para intera\xe7\xf5es contratuais internas, Mainnet para enviar e receber fundos reais.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://develop.giveth.io"},"develop")),(0,n.kt)("td",{parentName:"tr",align:null},"Ropsten Test Network"),(0,n.kt)("td",{parentName:"tr",align:null},"develop"),(0,n.kt)("td",{parentName:"tr",align:null},"sim"),(0,n.kt)("td",{parentName:"tr",align:null},"Ambiente de desenvolvimento para integra\xe7\xe3o e teste de novos recursos. Branches de recurso e pull requests s\xe3o implantados nesse ambiente.")))),(0,n.kt)("p",null,"As duas Branchs abaixo est\xe3o sendo usadas no gitflow."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Nome"),(0,n.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"master"),(0,n.kt)("td",{parentName:"tr",align:null},"A Branch master rastreia apenas o c\xf3digo liberado. Os commits s\xe3o feitos para master no meio de cada m\xeas para n\xe3o interferir nos processos de pagamento que acontecem perto do final e do in\xedcio desses meses.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"develop"),(0,n.kt)("td",{parentName:"tr",align:null},"As implanta\xe7\xf5es feitas para desenvolver s\xe3o de compila\xe7\xf5es locais e incluem novos recursos e corre\xe7\xf5es de bugs.")))),(0,n.kt)("h2",{id:"uso-da-boards-zenhub"},"Uso da Boards Zenhub"),(0,n.kt)("p",null,"Atualmente, usamos a extens\xe3o Zenhub Boards para Github para acompanhar o progresso dos recursos e corre\xe7\xf5es. Voc\xea pode obter a ",(0,n.kt)("a",{parentName:"p",href:"https://www.zenhub.com/extension"},"extens\xe3o Zenhub aqui"),"."),(0,n.kt)("p",null,"O fluxo de problemas do Github atual \xe9 o seguinte:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Nome"),(0,n.kt)("th",{parentName:"tr",align:null},"Utiliza\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Novos Problemas"),(0,n.kt)("td",{parentName:"tr",align:null},"Crie um novo problema para uma nova solicita\xe7\xe3o de recurso ou para relatar um bug. Marque um desenvolvedor ou ",(0,n.kt)("inlineCode",{parentName:"td"},"@moenick")," para garantir que seja notado. Use r\xf3tulos para adicionar contexto ao seu problema.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Icebox"),(0,n.kt)("td",{parentName:"tr",align:null},"Recursos e ideias a serem considerados para desenvolvimento futuro, a serem avaliados pela equipe Giveth somente quando a largura de banda do desenvolvedor permitir.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Lista de pend\xeancias do produto"),(0,n.kt)("td",{parentName:"tr",align:null},"Quest\xf5es que precisam ser tratadas ou novos recursos aprovados para desenvolvimento. Estes ser\xe3o enfileirados no pr\xf3ximo sprint progressivamente.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\xc9picas"),(0,n.kt)("td",{parentName:"tr",align:null},"Grandes tarefas que foram divididas em quest\xf5es menores.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Precisa de Esclarecimento"),(0,n.kt)("td",{parentName:"tr",align:null},"Problemas que exigem mais esclarecimentos do criador do problema para avan\xe7ar.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Sprint Backlog"),(0,n.kt)("td",{parentName:"tr",align:null},"Problemas que est\xe3o sendo trabalhados no sprint atual.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bugs & Ops"),(0,n.kt)("td",{parentName:"tr",align:null},"tarefas urgentes que precisam ser priorizadas. A largura de banda \xe9 reservada no cronograma do sprint para os desenvolvedores resolverem quaisquer problemas aqui.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Em Progresso"),(0,n.kt)("td",{parentName:"tr",align:null},"Problemas que foram selecionados por um desenvolvedor para o sprint atual.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Revis\xe3o de c\xf3digo"),(0,n.kt)("td",{parentName:"tr",align:null},"Os desenvolvedores devem revisar o c\xf3digo referenciado nesses problemas para garantir a qualidade e corrigir poss\xedveis problemas antes de passar para o teste do usu\xe1rio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"UAT (User Acceptance Testing)"),(0,n.kt)("td",{parentName:"tr",align:null},"Recursos ou corre\xe7\xf5es prontas para serem testadas pelo usu\xe1rio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Done"),(0,n.kt)("td",{parentName:"tr",align:null},"Quest\xf5es prontas para serem mescladas ao ",(0,n.kt)("inlineCode",{parentName:"td"},"master")," de acordo com o ciclo de confirma\xe7\xe3o.")))),(0,n.kt)("h3",{id:"fazendo-uma-pull-request"},"Fazendo uma Pull Request"),(0,n.kt)("p",null,"Antes de fazer uma nova Pull Request, certifique-se de que seu c\xf3digo n\xe3o tenha problemas de linter e possa ser implantado. Somente PRs implantados com \xeaxito e que n\xe3o tenham conflitos de mesclagem ser\xe3o mesclados. Voc\xea tamb\xe9m pode verificar facilmente a visualiza\xe7\xe3o de implanta\xe7\xe3o na integra\xe7\xe3o de implanta\xe7\xe3o autom\xe1tica do Github Netlify."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://d33wubrfki0l68.cloudfront.net/cfa6124f4e0bf556de850f40e97c6b4cc66231f9/d42f0/images/product-development/deploy-preview.png",alt:"Integra\xe7\xe3o de implanta\xe7\xe3o autom\xe1tica"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Visualiza\xe7\xe3o de implanta\xe7\xe3o.")," Cada solicita\xe7\xe3o de pull para o reposit\xf3rio DApp tem uma visualiza\xe7\xe3o de implanta\xe7\xe3o do Netlify. Voc\xea pode acess\xe1-lo na parte inferior pelo bot\xe3o ''Conversa'' depois de clicar no bot\xe3o ",(0,n.kt)("strong",{parentName:"p"},"Mostrar todas as verifica\xe7\xf5es")," e em ",(0,n.kt)("strong",{parentName:"p"},"Detalhes"),"."),(0,n.kt)("h2",{id:"integra\xe7\xe3o-e-teste"},"Integra\xe7\xe3o e Teste"),(0,n.kt)("p",null,"A integra\xe7\xe3o de novos recursos \xe9 feita pela ",(0,n.kt)("strong",{parentName:"p"},"equipe de desenvolvimento")," ap\xf3s uma reuni\xe3o de desenvolvimento do DApp onde os PRs s\xe3o revisados. Depois que os PRs s\xe3o revisados \u200b\u200be corrigidos, eles s\xe3o mesclados \xe0 ramifica\xe7\xe3o de desenvolvimento. O teste dos novos recursos \xe9 feito no ambiente ",(0,n.kt)("a",{parentName:"p",href:"https://develop.giveth.io"},(0,n.kt)("inlineCode",{parentName:"a"},"develop"))," para garantir que os recursos fa\xe7am o que dizem e funcionem bem com o restante do DApp."),(0,n.kt)("h2",{id:"-teste-de-garantia-de-qualidade"},"## Teste de garantia de qualidade"),(0,n.kt)("p",null,"Depois que os novos recursos forem integrados e testados pelos desenvolvedores no ambiente ",(0,n.kt)("a",{parentName:"p",href:"https://develop.giveth.io"},(0,n.kt)("inlineCode",{parentName:"a"},"develop")),", os desenvolvedores enviar\xe3o pings aos testadores com solicita\xe7\xf5es ou atualiza\xe7\xf5es no ","[Giveth TRACE Dev Channel]","(https://discord .gg/79uUbyVCtE) no Discord. O teste n\xe3o deve ser feito por desenvolvedores e est\xe1 aberto a qualquer pessoa que deseje contribuir."),(0,n.kt)("h2",{id:"implanta\xe7\xe3o-de-produ\xe7\xe3o"},"Implanta\xe7\xe3o de Produ\xe7\xe3o"),(0,n.kt)("p",null,"Apenas uma vez que todos os bugs rec\xe9m-introduzidos s\xe3o removidos na branch ",(0,n.kt)("inlineCode",{parentName:"p"},"develop"),", ele pode ser mesclado para master e enviado para produ\xe7\xe3o. Isso \xe9 feito manualmente pelo DApp devteam (constru\xeddo por ",(0,n.kt)("inlineCode",{parentName:"p"},"@aminlatifi")," e ",(0,n.kt)("inlineCode",{parentName:"p"},"@MohammadPCh"),")."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Para implantar a vers\xe3o mais recente do feathers-giveth")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ ssh user@feathers.alpha.giveth.io\n\n$ cd /home/deploy/feathers-giveth/\n$ sudo -u deploy bash\n\n$ git pull\n\n$ yarn install --pure-lockfile\n$ yarn serve\n")),(0,n.kt)("p",null,"Em seguida, verifique o status de implanta\xe7\xe3o dos feathers"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ pm2 logs\n")),(0,n.kt)("p",null,"Se os logs estiverem limpos, a \xfaltima etapa \xe9 implantar o commit da branch master mais recente no ",(0,n.kt)("a",{parentName:"p",href:"http://netlify.com/"},"Netlify")," e bloquear o deploy."),(0,n.kt)("h2",{id:"documenta\xe7\xe3o-de-servi\xe7os-da-web-de-back-end"},"Documenta\xe7\xe3o de servi\xe7os da Web de back-end"),(0,n.kt)("p",null,"Se voc\xea \xe9 um novo colaborador e gostaria de uma documenta\xe7\xe3o t\xe9cnica mais detalhada sobre todos os Webservices aproveitados desde o back-end (feathers-giveth) at\xe9 o front-end (giveth-dapp), confira nossas p\xe1ginas em ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Swagger"))," para implanta\xe7\xf5es de produ\xe7\xe3o e prepara\xe7\xe3o:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://feathers.beta.giveth.io/docs/?url=/docs#/"},"feathers-giveth Production"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://feathers.develop.giveth.io/docs"},"feathers-giveth Staging")),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Qual \xe9 a defini\xe7\xe3o de um recurso?")),(0,n.kt)("p",null," Um recurso \xe9 qualquer melhoria n\xe3o trivial (menos de 10 linhas de c\xf3digo). A maioria dos recursos tem problemas no reposit\xf3rio Github correspondente."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"E as corre\xe7\xf5es?")),(0,n.kt)("p",null,"Grandes corre\xe7\xf5es n\xe3o cr\xedticas s\xe3o tratadas como qualquer outro recurso. Se uma corre\xe7\xe3o for cr\xedtica no tempo, ela ser\xe1 criada como uma nova branch com o prefixo ",(0,n.kt)("inlineCode",{parentName:"p"},"hotfix/")," como uma bifurca\xe7\xe3o da branch ",(0,n.kt)("inlineCode",{parentName:"p"},"master"),". Esse hotfix \xe9 testado no m\xednimo por 2 pessoas da equipe de desenvolvimento antes de ser mesclado aos ramos ",(0,n.kt)("inlineCode",{parentName:"p"},"master")," e ",(0,n.kt)("inlineCode",{parentName:"p"},"develop"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Onde comunicamos o que precisa ser testado?")),(0,n.kt)("p",null,"O teste de controle de qualidade \xe9 anunciado no canal ",(0,n.kt)("inlineCode",{parentName:"p"},"Giveth-1 Dev")," no ",(0,n.kt)("a",{parentName:"p",href:"https://discord.giveth.io"},"Discord"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Como priorizamos quando os testes falham/corre\xe7\xf5es de bugs?")),(0,n.kt)("p",null,"As corre\xe7\xf5es de bugs s\xe3o feitas ad-hoc assim que s\xe3o descobertas durante o processo de teste. Os bugs podem ser resolvidos pela equipe de desenvolvimento do DApp ou pode-se pedir ajuda a contribuidores externos. A corre\xe7\xe3o de bugs tem prioridade sobre o novo desenvolvimento."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Quem faz as implanta\xe7\xf5es e como elas s\xe3o implantadas?")),(0,n.kt)("p",null,"A branch ",(0,n.kt)("inlineCode",{parentName:"p"},"develop")," \xe9 implantada automaticamente em seu ambiente. A branch ",(0,n.kt)("inlineCode",{parentName:"p"},"master")," \xe9 implantada pela equipe de desenvolvimento (",(0,n.kt)("inlineCode",{parentName:"p"},"@aminlatifi"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"@RamRamez")," e ",(0,n.kt)("inlineCode",{parentName:"p"},"@MohammadPCh"),") uma vez que n\xe3o h\xe1 novos bugs conhecidos na branch ",(0,n.kt)("inlineCode",{parentName:"p"},"develop"),". O processo \xe9 manual e existe um procedimento de implanta\xe7\xe3o."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Qual \xe9 a frequ\xeancia do ciclo de lan\xe7amento?")),(0,n.kt)("p",null,"H\xe1 uma nova vers\xe3o a cada 2 semanas, conforme descrito no ",(0,n.kt)("a",{parentName:"p",href:"#product-development-testing-fig-release"},"gr\xe1fico de gant do ciclo de desenvolvimento do produto"),"."))}u.isMDXComponent=!0}}]);