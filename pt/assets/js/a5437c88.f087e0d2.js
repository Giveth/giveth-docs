"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[8347],{3905:(e,o,a)=>{a.d(o,{Zo:()=>u,kt:()=>m});var r=a(7294);function t(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function n(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?n(Object(a),!0).forEach((function(o){t(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function s(e,o){if(null==e)return{};var a,r,t=function(e,o){if(null==e)return{};var a,r,t={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],o.indexOf(a)>=0||(t[a]=e[a]);return t}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=r.createContext({}),c=function(e){var o=r.useContext(p),a=o;return e&&(a="function"==typeof e?e(o):i(i({},o),e)),a},u=function(e){var o=c(e.components);return r.createElement(p.Provider,{value:o},e.children)},l={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},d=r.forwardRef((function(e,o){var a=e.components,t=e.mdxType,n=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=t,v=d["".concat(p,".").concat(m)]||d[m]||l[m]||n;return a?r.createElement(v,i(i({ref:o},u),{},{components:a})):r.createElement(v,i({ref:o},u))}));function m(e,o){var a=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var n=a.length,i=new Array(n);i[0]=d;var s={};for(var p in o)hasOwnProperty.call(o,p)&&(s[p]=o[p]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9278:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=a(7462),t=(a(7294),a(3905)),n=a(4996);const i={id:"troubleshooting",title:"Solu\xe7\xe3o de problemas",slug:"dapps/troubleshooting"},s=void 0,p={unversionedId:"troubleshooting",id:"troubleshooting",title:"Solu\xe7\xe3o de problemas",description:"Se voc\xea est\xe1 tendo problemas t\xe9cnicos com o Giveth DApp, voc\xea pode encontrar uma solu\xe7\xe3o nesta p\xe1gina.",source:"@site/i18n/pt/docusaurus-plugin-content-docs-dapps/current/guide3-troubleshooting.md",sourceDirName:".",slug:"/dapps/troubleshooting",permalink:"/pt/dapps/troubleshooting",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/guide3-troubleshooting.md",tags:[],version:"current",lastUpdatedBy:"mrbear",lastUpdatedAt:1651518279,formattedLastUpdatedAt:"2 de mai. de 2022",frontMatter:{id:"troubleshooting",title:"Solu\xe7\xe3o de problemas",slug:"dapps/troubleshooting"},sidebar:"dapps",previous:{title:"Responsible Disclosure",permalink:"/pt/security/responsible-disclosure"},next:{title:"Introdu\xe7\xe3o ao Giveth TRACE",permalink:"/pt/dapps/introTrace"}},c={},u=[{value:"Navegador Brave",id:"navegador-brave",level:2},{value:"Giveth.io mostra uma tela em branco! Ajuda!",id:"givethio-mostra-uma-tela-em-branco-ajuda",level:3}],l={toc:u};function d(e){let{components:o,...a}=e;return(0,t.kt)("wrapper",(0,r.Z)({},l,a,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Se voc\xea est\xe1 tendo problemas t\xe9cnicos com o Giveth DApp, voc\xea pode encontrar uma solu\xe7\xe3o nesta p\xe1gina."),(0,t.kt)("h2",{id:"navegador-brave"},"Navegador Brave"),(0,t.kt)("p",null,"Se voc\xea tentar entrar no Giveth DApp com o navegador Brave, o Torus (o provedor da carteira) notificar\xe1 que precisa de cookies para operar. (A Torus precisa dessas permiss\xf5es para seus servi\xe7os OAuth, para que nossos usu\xe1rios possam receber facilmente sua pr\xf3pria carteira Ethereum vinculada, ou seja, sua conta do Google.)"),(0,t.kt)("p",null,"Para resolver esse problema rapidamente, voc\xea pode:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"clique nas configura\xe7\xf5es do site (\xedcone Brave)"),(0,t.kt)("li",{parentName:"ul"},'altere a configura\xe7\xe3o de cookies apenas para Giveth.io para "todos os cookies permitidos"')),(0,t.kt)("img",{alt:"Enable Cookies in Brave",src:(0,n.Z)("img/content/screenshot-brave-cookies.png")}),"[Leia mais sobre como lidar com cookies no Brave.](https://support.brave.com/hc/en-us/articles/360050634931-How-Do-I-Manage-Cookies-In-Brave-)",(0,t.kt)("h3",{id:"givethio-mostra-uma-tela-em-branco-ajuda"},"Giveth.io mostra uma tela em branco! Ajuda!"),(0,t.kt)("p",null,"\xc0s vezes, as atualiza\xe7\xf5es s\xe3o enviadas para o site Giveth.io, e seus arquivos e cookies em cache nem sempre se d\xe3o bem com as novas atualiza\xe7\xf5es no site, ent\xe3o voc\xea precisar\xe1 limpar seu cache, excluir seus cookies e atualizar o navegador."),(0,t.kt)("p",null,"Para limpar seu cache e cookies no Brave, navegue at\xe9: ",(0,t.kt)("inlineCode",{parentName:"p"},"Configura\xe7\xf5es -> Configura\xe7\xf5es adicionais -> Privacidade e seguran\xe7a -> Limpar dados de navega\xe7\xe3o")," Quando chegar l\xe1, marque ",(0,t.kt)("inlineCode",{parentName:"p"},"Cookies")," e ",(0,t.kt)("inlineCode",{parentName:"p"},"imagens e arquivos em cache"),", e certifique-se de que na parte superior da janela pop-up voc\xea marque o intervalo de tempo apropriado. Voc\xea pode selecionar ",(0,t.kt)("inlineCode",{parentName:"p"},"Todo o Tempo")," apenas para ter certeza de que recebeu todos."),(0,t.kt)("p",null,"Limpar seus cookies far\xe1 com que voc\xea saia da maioria dos sites. Se voc\xea n\xe3o quiser passar pelo inc\xf4modo de fazer login novamente em todos os sites que frequenta, v\xe1 para: ",(0,t.kt)("inlineCode",{parentName:"p"},"Privacidade e Seguran\xe7a -> Cookies e outros dados do site -> Ver todos os cookies do site e outros dados")," Depois, a partir deste menu, procure o dom\xednio Giveth desta forma:"),(0,t.kt)("img",{alt:"Deleting Cookies in Brave",src:(0,n.Z)("img/content/givethcookies.png")}),(0,t.kt)("p",null,"Em seguida, clique no \xedcone da lixeira para excluir o cookie da Giveth. Se isso terminar, abra uma nova janela do navegador Brave, volte para Giveth e volte a doar!"))}d.isMDXComponent=!0}}]);