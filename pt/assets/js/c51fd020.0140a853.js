"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[8505],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>u});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),l=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=l(e.components);return r.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=l(t),u=n,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return t?r.createElement(k,o(o({ref:a},d),{},{components:t})):r.createElement(k,o({ref:a},d))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var p={};for(var s in a)hasOwnProperty.call(a,s)&&(p[s]=a[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1130:(e,a,t)=>{t.d(a,{ZP:()=>o});var r=t(7462),n=(t(7294),t(3905));const i={toc:[]};function o(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Giveth TRACE foi oficialmente descontinuado. Depois de 5 anos de servi\xe7os, Giveth e suas plataformas, servi\xe7os e produtos migraram totalmente para ",(0,n.kt)("a",{parentName:"em",href:"https://giveth.io/"},"Giveth.io"),". Com a descontinua\xe7\xe3o da rede Rinkeby e a baixa frequ\xeancia de usu\xe1rios, o Giveth DAO decidiu encerrar seu dApp original no terceiro trimestre de 2022. O c\xf3digo \xe9 e sempre ser\xe1 aberto. Voc\xea pode encontr\xe1-lo nestes ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/Giveth"},"reposit\xf3rios do Github"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Toda a documenta\xe7\xe3o do Giveth TRACE vai permanecer dispon\xedvel para refer\xeancia hist\xf3rica."))),(0,n.kt)("hr",null))}o.isMDXComponent=!0},5976:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(7462),n=(t(7294),t(3905)),i=t(1130);const o={id:"traceContracts",title:"Informa\xe7\xf5es T\xe9cnicas de Contratos, Bridges e Multisigs",slug:"dapps/traceContracts"},p=void 0,s={unversionedId:"traceContracts",id:"traceContracts",title:"Informa\xe7\xf5es T\xe9cnicas de Contratos, Bridges e Multisigs",description:"Contratos:",source:"@site/i18n/pt/docusaurus-plugin-content-docs-dapps/current/traceContracts.md",sourceDirName:".",slug:"/dapps/traceContracts",permalink:"/pt/dapps/traceContracts",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/traceContracts.md",tags:[],version:"current",lastUpdatedBy:"Mitch Oz",lastUpdatedAt:1693588589,formattedLastUpdatedAt:"1 de set. de 2023",frontMatter:{id:"traceContracts",title:"Informa\xe7\xf5es T\xe9cnicas de Contratos, Bridges e Multisigs",slug:"dapps/traceContracts"},sidebar:"dapps",previous:{title:"Taxas de C\xe2mbio",permalink:"/pt/dapps/exchangeRates"},next:{title:"$nice Token (Depcrecated)",permalink:"/pt/giveconomy/niceToken"}},l={},d=[{value:"Contratos:",id:"contratos",level:2},{value:"Multisigs da rede principal:",id:"multisigs-da-rede-principal",level:4},{value:"Rinkeby Multisigs:",id:"rinkeby-multisigs",level:4},{value:"Fun\xe7\xf5es/par\xe2metros do contrato:",id:"fun\xe7\xf5espar\xe2metros-do-contrato",level:2},{value:"Mainnet",id:"mainnet",level:4},{value:"Rinkeby",id:"rinkeby",level:2}],c={toc:d};function m(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)(i.ZP,{mdxType:"TraceDeprecated"}),(0,n.kt)("h2",{id:"contratos"},"Contratos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Giveth na Mainet"),(0,n.kt)("li",{parentName:"ul"},"ForeignGivethBridge no Rinkeby"),(0,n.kt)("li",{parentName:"ul"},"Contratos LiquidPledging no Rinkeby"),(0,n.kt)("li",{parentName:"ul"},"Contratos escap\xe1veis para Mainnet para cada contrato no Rinkeby")),(0,n.kt)("h4",{id:"multisigs-da-rede-principal"},"Multisigs da rede principal:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x4D9339dd97db55e3B9bCBE65dE39fF9c04d1C2cd"},"Giveth Mainnet: 0x4D9339dd97db55e3B9bCBE65dE39fF9c04d1C2cd")," (6 de 13 multisig)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x16fda2fcc887dd7ac65c46be144473067cff8654"},"Giveth Overflow: 0x16fda2fcc887dd7ac65c46be144473067cff8654 "),"(4 de 7 multisig)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x1e9f6746147e937e8e1c29180e15af0bd5fd64bb"},"EscapeHatch Caller: 0x1e9f6746147e937e8e1c29180e15af0bd5fd64bb")," (1 de x multisig)")),(0,n.kt)("h4",{id:"rinkeby-multisigs"},"Rinkeby Multisigs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rinkeby.etherscan.io/address/0xc3b2128ca330871037d35fdc5f7b05e195aac5ce"},"EscapeHatch Caller: 0xc3b2128ca330871037d35fdc5f7b05e195aac5ce")," (1 de x multisig) "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rinkeby.etherscan.io/address/0x20fc2ec2518dec7041b4c3e82663d6071bae953f"},"Dapp God/EscapeHatch Destination: 0x20fc2ec2518dec7041b4c3e82663d6071bae953f")," (3 de 6 multisig)")),(0,n.kt)("h2",{id:"fun\xe7\xf5espar\xe2metros-do-contrato"},"Fun\xe7\xf5es/par\xe2metros do contrato:"),(0,n.kt)("h4",{id:"mainnet"},"Mainnet"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x30f938fED5dE6e06a9A7Cd2Ac3517131C317B1E7"},"GivethBridge: 0x30f938fED5dE6e06a9A7Cd2Ac3517131C317B1E7")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Possui a Bridge")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Recebe e lida com doa\xe7\xf5es.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Pode cancelar pagamentos na Bridge.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Pode pausar e retomar a ponte.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Adicione tokens \xe0 lista de permiss\xf5es.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Pode alterar o atraso m\xe1ximo do security guard")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Pode alterar o security guard")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Pode alterar o bloqueio de 2 dias na bridge.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Pode alterar o escape hatch caller.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Pode remover/alterar a propriedade.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Pode chamar o ",(0,n.kt)("inlineCode",{parentName:"p"},"escapeHatch(address _token)")," em uma emerg\xeancia para mover todo o dinheiro para fora da ponte para o token especificado.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Tem todos os poderes necess\xe1rios para descentralizar a bridge.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x16fda2fcc887dd7ac65c46be144473067cff8654"},"Giveth Overflow: 0x16fda2fcc887dd7ac65c46be144473067cff8654"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Recebe fundos excedentes/retirados da bridge")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Envia fundos de volta para a ponte quando os fundos ficam baixos usando ",(0,n.kt)("inlineCode",{parentName:"p"},"depositEscapedFunds()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x1e9f6746147e937e8e1c29180e15af0bd5fd64bb"},"EscapeHatch Caller: 0x1e9f6746147e937e8e1c29180e15af0bd5fd64bb"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Pode chamar o `escapeHatch(address _token) em uma emerg\xeancia para mover todo o dinheiro para fora da ponte para o token especificado.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Pode chamar ",(0,n.kt)("inlineCode",{parentName:"p"},"escapeFunds(address _token, uint   _amount)")," para mover parte do dinheiro para fora da bridge sendo mais cauteloso.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0xDAa172456F5815256831aeE19C8A370a83522871"},"SecurityGuard: 0xDAa172456F5815256831aeE19C8A370a83522871"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"MaxSecurityGuardDelay: 1 m\xeas"))))),(0,n.kt)("h2",{id:"rinkeby"},"Rinkeby"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://rinkeby.etherscan.io/address/0xff9cd5140e79377feb23f6dfaf1f8b558c0fe621"},"ForeignGivethBridge: 0xfF9CD5140e79377feB23f6DFaF1f8b558C0FE621")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Mints tokens em Rinkeby."),(0,n.kt)("li",{parentName:"ul"},"Pode delegar tokens para Liquidpledging."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://rinkeby.etherscan.io/address/0xc3b2128ca330871037d35fdc5f7b05e195aac5ce"},"EscapeHatch Caller: 0xc3b2128ca330871037d35fdc5f7b05e195aac5ce"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Caso haja um movimento estranho e inesperado de tokens Rinkeby (que representam nossa contabilidade na bridge), esta Multisig seria capaz de retirar os tokens para manter nossa contabilidade.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://rinkeby.etherscan.io/address/0x20fc2ec2518dec7041b4c3e82663d6071bae953f"},"Dapp God/EscapeHatch Destination: 0x20fc2ec2518dec7041b4c3e82663d6071bae953f")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Esta multisig tem um lugar especial no AragonApp it: autoriza atualiza\xe7\xf5es para qualquer contrato inteligente em nosso sistema."),(0,n.kt)("li",{parentName:"ul"},"Tamb\xe9m atua como o destino da fun\xe7\xe3o escape hatch para o LP da Vault na Rinkeby."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://rinkeby.etherscan.io/address/0xf3012a211facf4a1590086a14482aaa88397af15"},"Token Factory: 0xf3012a211fAcf4a1590086A14482Aaa88397aF15")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Contratos de Liquid Pledging (Rinkeby)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://rinkeby.etherscan.io/address/0xa2b1485bd9ad623b9e51fc41952b226313250ada"},"LPVault: 0xA2B1485Bd9ad623b9e51FC41952B226313250Ada")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Par\xe2metros Construtor: Nenhum"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://rinkeby.etherscan.io/address/0x8eb047585abed935a73ba4b9525213f126a0c979"},"LiquidPledging: 0x8eB047585ABeD935a73ba4b9525213F126A0c979")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Par\xe2metros Construtor: Nenhum")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://rinkeby.etherscan.io/address/0x71408CE2125b1F07f614b93C8Bd0340e8Fc31CFA"},"LPPCampaignFactory: 0x71408CE2125b1F07f614b93C8Bd0340e8Fc31CFA")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Par\xe2metros Construtor: 000000000000000000000000a018199569d94c9dfb6de1d8e8cb37928f20d444"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://rinkeby.etherscan.io/address/0x8e8d4840568c786e2e4c83c761ca002f256ad9c2"},"milestoneFactoryAddress: 0x8E8d4840568c786E2e4c83C761ca002F256aD9c2")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Par\xe2metros Construtor: 000000000000000000000000a018199569d94c9dfb6de1d8e8cb37928f20d444"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://rinkeby.etherscan.io/address/0x19e88e279844f0201079b39c736a94b87b32b6b6"},"LPPCappedMilestoneFactory: 0x19e88e279844f0201079b39c736a94b87b32b6b6")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Par\xe2metro Construtor: 000000000000000000000000a018199569d94c9dfb6de1d8e8cb37928f20d444")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Nota"),": Todos os escapeHatches para contratos liquidPledge (n\xe3o bridge) foram substitu\xeddos pela funcionalidade recoveryVault do AragonOS. Registraremos 1 recoveryVault (Giveth Multisig on Rinkeby) no kernel e todos os aplicativos ser\xe3o \u201cescap\xe1veis\u201d para esse cofre."))}m.isMDXComponent=!0}}]);