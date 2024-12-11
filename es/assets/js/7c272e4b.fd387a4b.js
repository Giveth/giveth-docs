"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[202],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),s=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,g=c["".concat(d,".").concat(m)]||c[m]||p[m]||l;return t?n.createElement(g,o(o({ref:a},u),{},{components:t})):n.createElement(g,o({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=c;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},933:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var n=t(7462),r=(t(7294),t(3905)),l=t(4996);const o={id:"angelVault",title:"El Angel Vault"},i=void 0,d={unversionedId:"angelVault",id:"angelVault",title:"El Angel Vault",description:"",source:"@site/i18n/es/docusaurus-plugin-content-docs-dapps/current/angelVault.md",sourceDirName:".",slug:"/angelVault",permalink:"/es/angelVault",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/angelVault.md",tags:[],version:"current",lastUpdatedBy:"MrBearCr",lastUpdatedAt:1660092826,formattedLastUpdatedAt:"10 ago 2022",frontMatter:{id:"angelVault",title:"El Angel Vault"},sidebar:"dapps",previous:{title:"$nice Token (Depcrecated)",permalink:"/es/giveconomy/niceToken"}},s={},u=[{value:"Contratos",id:"contratos",level:2},{value:"oneGIV",id:"onegiv",level:2},{value:"Proporcionando y quitando liquidez",id:"proporcionando-y-quitando-liquidez",level:2},{value:"Consigue Recompensas",id:"consigue-recompensas",level:2},{value:"Distribuci\xf3n de recompensas GIV a los LP Stackers de Angel Vault",id:"distribuci\xf3n-de-recompensas-giv-a-los-lp-stackers-de-angel-vault",level:2},{value:"Plan de incentivos\u200a\u2014\u200aLa escalera dentada",id:"plan-de-incentivosla-escalera-dentada",level:3}],p={toc:u};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"El Angel Vault es una posici\xf3n Univ3 estrat\xe9gicamente gestionada y estructurada para proteger el GIV de la volatilidad a la baja. Esto gestionado por nuestra Angel Vault multisig, una ",(0,r.kt)("a",{parentName:"p",href:"https://gnosis-safe.io/app/eth:0x2B0ee142dCFE7C2dD150cDbd7B6832F6e9977f51/home"},"multisig 4/7 de miembros del equipo central de Giveth y dos miembros para ICHI"),". Para obtener m\xe1s informaci\xf3n sobre El Angel Vault y c\xf3mo funciona, consulte ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ichi.org/ichi-docs-v3/ichi-vaults/angel-vaults"},"La Docmunetaci\xf3n de ICHI"),"."),(0,r.kt)("h2",{id:"contratos"},"Contratos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Angel Vault (ICHI) LM (Unipool): ",(0,r.kt)("inlineCode",{parentName:"li"},"0xA4b727DF6fD608d1835e3440288c73fB28c4eF16")),(0,r.kt)("li",{parentName:"ul"},"Angel Vault (ICHI) LP: ",(0,r.kt)("inlineCode",{parentName:"li"},"0xc3151A58d519B94E915f66B044De3E55F77c2dd9"))),(0,r.kt)("h2",{id:"onegiv"},"oneGIV"),(0,r.kt)("p",null,"oneGIV es un d\xf3lar de marca Giveth (por ICHI) que se puede mintear usando DAI en una escala de 1:1. Esto se puede hacer a trav\xe9s del ",(0,r.kt)("a",{parentName:"p",href:"https://app.ichi.org/vault?poolId=20009&back=vault"},"Sitio Web de ICHI"),". Para m\xe1s informaci\xf3n sobre el dolar de marca ICHI, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ichi.org/ichi-docs-v3/branded-dollars/overview"},"Click aqu\xed para ver su documentaci\xf3n"),"."),(0,r.kt)("p",null,"oneGIV es minteado usando 100% DAI, y tambi\xe9n est\xe1 sobre-colateralizado por GIV. El contrato tiene GIV como garant\xeda adicional en caso de que haya alg\xfan problema con DAI. Todos los mints y burns de oneGIV ocurren a trav\xe9s de un contrato administrado por nuestro Angel Vault multisig."),(0,r.kt)("p",null,"Con el tiempo, la DAO de Giveth puede votar para cambiar la proporci\xf3n en que se mintea el 100% del DAI, y se convierte en una combinaci\xf3n de DAI y GIV (por ejemplo, 80 % DAI, 20 % GIV). Sin embargo, para mantener la paridad con el d\xf3lar, quemar oneGIV para canjear DAI siempre dar\xe1 como resultado un 100 % de DAI."),(0,r.kt)("h2",{id:"proporcionando-y-quitando-liquidez"},"Proporcionando y quitando liquidez"),(0,r.kt)("p",null,"Los proveedores de liquidez pueden agregar liquidez a Angel Vault usando oneGIV a trav\xe9s del ",(0,r.kt)("a",{parentName:"p",href:"https://app.ichi.org/vault?poolId=20009&back=vault"},"Sitio Web de ICHI"),", Y luego stackear sus tokens en ",(0,r.kt)("a",{parentName:"p",href:"https://giveth.io/givfarm"},"GIVfarm"),". Debido a que este GIV se agrega a una posici\xf3n GIV/GIV Uni V3, cuando eliminas la liquidez obtendr\xe1s oneGIV & GIV proporcional a las tenencias en el Angel Vault."),(0,r.kt)("h2",{id:"consigue-recompensas"},"Consigue Recompensas"),(0,r.kt)("p",null,"Las recompensas se otorgan a los proveedores de liquidez en proporci\xf3n a la liquidez proporcionada. Cuando stakeas tus tokens LP, obtienes recompensas en dos partes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"La tarifa de Uniswap del 1% que aumenta autom\xe1ticamente tu posici\xf3n en El Angel Vault (",(0,r.kt)("a",{parentName:"li",href:"https://docs.ichi.org/ichi-docs-v3/resources/faqs#what-does-the-irr-metric-on-the-angel-vault-page-represent"},"IRR"),")."),(0,r.kt)("li",{parentName:"ol"},"Incentivos GIV desde dentro de GIVfarm, que como siempre, se distribuyen de acuerdo con GIVstream. \xc9chale un Vistazo ",(0,r.kt)("a",{parentName:"li",href:"https://giveth.io/givstream"},(0,r.kt)("strong",{parentName:"a"},"GIViverse Expansion"))," para saber cu\xe1nto ser\xe1n las recompensas.")),(0,r.kt)("p",null,"La APR que se muestra en el pool de stacks de GIVfarm oneGIV/GIV es la suma de estas dos tasas de recompensa."),(0,r.kt)("img",{alt:"angel vault staking farm staking card",src:(0,l.Z)("/img/content/giveconomy/angelVaultCard.png")}),(0,r.kt)("h2",{id:"distribuci\xf3n-de-recompensas-giv-a-los-lp-stackers-de-angel-vault"},"Distribuci\xf3n de recompensas GIV a los LP Stackers de Angel Vault"),(0,r.kt)("p",null,"Se ha asignado un total de 6 millones de GIV para ejecutar un programa de recompensas para los que participen Stackeando LP de Angel Vault durante 26 semanas a partir de la fecha de inicio que ser\xe1 el 4 de agosto de 2022. Las recompensas que se enviar\xe1n en un per\xedodo de dos semanas es la siguiente:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Semana"),(0,r.kt)("th",{parentName:"tr",align:null},"GIV ganado (dentro del per\xedodo de 2 semanas)"),(0,r.kt)("th",{parentName:"tr",align:null},"% de recompensas"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Semana 1"),(0,r.kt)("td",{parentName:"tr",align:null},"485,143"),(0,r.kt)("td",{parentName:"tr",align:null},"8.09%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Semana 3"),(0,r.kt)("td",{parentName:"tr",align:null},"569,143"),(0,r.kt)("td",{parentName:"tr",align:null},"9.49%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Semana 5"),(0,r.kt)("td",{parentName:"tr",align:null},"140,000"),(0,r.kt)("td",{parentName:"tr",align:null},"2.33%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Semana 7"),(0,r.kt)("td",{parentName:"tr",align:null},"653,143"),(0,r.kt)("td",{parentName:"tr",align:null},"10.89%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Semana 9"),(0,r.kt)("td",{parentName:"tr",align:null},"140,000"),(0,r.kt)("td",{parentName:"tr",align:null},"2.33%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Semana 11"),(0,r.kt)("td",{parentName:"tr",align:null},"737,143"),(0,r.kt)("td",{parentName:"tr",align:null},"12.29%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Semana 13"),(0,r.kt)("td",{parentName:"tr",align:null},"140,000"),(0,r.kt)("td",{parentName:"tr",align:null},"2.33%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Semana 15"),(0,r.kt)("td",{parentName:"tr",align:null},"821,143"),(0,r.kt)("td",{parentName:"tr",align:null},"13.69%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Semana 17"),(0,r.kt)("td",{parentName:"tr",align:null},"140,000"),(0,r.kt)("td",{parentName:"tr",align:null},"2.33%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Semana 19"),(0,r.kt)("td",{parentName:"tr",align:null},"905,143"),(0,r.kt)("td",{parentName:"tr",align:null},"15.09%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Semana 21"),(0,r.kt)("td",{parentName:"tr",align:null},"140,000"),(0,r.kt)("td",{parentName:"tr",align:null},"2.33%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Semana 23"),(0,r.kt)("td",{parentName:"tr",align:null},"989,143"),(0,r.kt)("td",{parentName:"tr",align:null},"16.49%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Semana 25"),(0,r.kt)("td",{parentName:"tr",align:null},"140,000"),(0,r.kt)("td",{parentName:"tr",align:null},"2.32%")))),(0,r.kt)("h3",{id:"plan-de-incentivosla-escalera-dentada"},"Plan de incentivos\u200a\u2014\u200aLa escalera dentada"),(0,r.kt)("p",null,"Cuando se inicialice Angel Vault, la totalidad de su liquidez estar\xe1 en oneGIV. Esto es beneficioso ya que Angel Vault funciona mejor cuando hay un alto porcentaje de oneGIV en la b\xf3veda, pero este porcentaje no se mantiene estable con el tiempo.\nLa proporci\xf3n de GIV aumenta cuando hay presi\xf3n de venta en el mercado sobre el token GIV.\nLa proporci\xf3n de un GIV aumenta cuando se crean nuevas posiciones de Angel Vault LP.\nLa proporci\xf3n de GIV/oneGIV permanecer\xe1 igual cuando se eliminan las posiciones de Angel Vault LP.\nPor lo tanto, queremos alentar a los proveedores de liquidez a retirar peri\xf3dicamente liquidez,\u200aeliminando un porcentaje de GIV del grupo,\u200ay luego volver a agregar liquidez en oneGIV para as\xed aumentar la concentraci\xf3n total estable en Angel Vault. Todo esto ayudar\xe1 a respaldar la fuerza de compra del Angel Vault."),(0,r.kt)("img",{alt:"rewards distribution schedule for jagged staircase",src:(0,l.Z)("/img/content/giveconomy/jaggedStaircase.png")}))}c.isMDXComponent=!0}}]);