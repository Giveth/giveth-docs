"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[9309],{1033:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"givethioinstallation","title":"Intalando Giveth.io para desarrollo local","description":"Esta gu\xeda documentar\xe1 los pasos para configurar y ejecutar Giveth.io localmente con fines de desarrollo. El proceso de configuraci\xf3n se document\xf3 con Ubuntu 20.04 LTS.","source":"@site/i18n/es/docusaurus-plugin-content-docs-dapps/current/givethioinstallation.md","sourceDirName":".","slug":"/dapps/givethioinstallation","permalink":"/es/dapps/givethioinstallation","draft":false,"unlisted":false,"editUrl":"https://github.com/giveth/giveth-docs/edit/master/dapps/givethioinstallation.md","tags":[],"version":"current","lastUpdatedBy":"MrBearCr","lastUpdatedAt":1657816341000,"frontMatter":{"id":"givethioinstallation","title":"Intalando Giveth.io para desarrollo local","slug":"dapps/givethioinstallation"}}');var i=n(4848),r=n(8453),t=n(6025);const o={id:"givethioinstallation",title:"Intalando Giveth.io para desarrollo local",slug:"dapps/givethioinstallation"},l=void 0,d={},c=[{value:"<strong>Necesitar\xe1s un par de requisitos previos para comenzar.</strong>",id:"necesitar\xe1s-un-par-de-requisitos-previos-para-comenzar",level:4},{value:"<strong>Giveth IO aprovecha paquetes, aplicaciones y arquitecturas notables que incluyen:</strong>",id:"giveth-io-aprovecha-paquetes-aplicaciones-y-arquitecturas-notables-que-incluyen",level:4},{value:"Instale el back-end (gr\xe1fico de impacto) desde GitHub",id:"instale-el-back-end-gr\xe1fico-de-impacto-desde-github",level:3},{value:"Crear una base de datos y un usuario en Postgres usando psql",id:"crear-una-base-de-datos-y-un-usuario-en-postgres-usando-psql",level:3},{value:"Clonar e instalar la interfaz",id:"clonar-e-instalar-la-interfaz",level:3},{value:"Obtener las variables de entorno",id:"obtener-las-variables-de-entorno",level:3},{value:"Inicie el entorno y el servidor",id:"inicie-el-entorno-y-el-servidor",level:3},{value:"Uso de una base de datos provisional para desarrollar",id:"uso-de-una-base-de-datos-provisional-para-desarrollar",level:3},{value:"Ejecute las migraciones para configurar la base de datos",id:"ejecute-las-migraciones-para-configurar-la-base-de-datos",level:3},{value:"Implementar el front-end",id:"implementar-el-front-end",level:3},{value:"\xa1Iniciar la edici\xf3n!",id:"iniciar-la-edici\xf3n",level:3}];function h(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"Esta gu\xeda documentar\xe1 los pasos para configurar y ejecutar Giveth.io localmente con fines de desarrollo. El proceso de configuraci\xf3n se document\xf3 con Ubuntu 20.04 LTS."}),"\n",(0,i.jsx)(a.h4,{id:"necesitar\xe1s-un-par-de-requisitos-previos-para-comenzar",children:(0,i.jsx)(a.strong,{children:"Necesitar\xe1s un par de requisitos previos para comenzar."})}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"https://redis.io/topics/quickstart",children:"Redis"})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"https://www.postgresql.org/download",children:"Postgres"})}),"\n",(0,i.jsx)(a.li,{children:"Node 14+"}),"\n",(0,i.jsx)(a.li,{children:"yarn"}),"\n",(0,i.jsx)(a.li,{children:"npm"}),"\n",(0,i.jsx)(a.li,{children:"T\xfa editor de c\xf3digo favorito (Te recomendamos VScode)"}),"\n"]}),"\n",(0,i.jsx)(a.h4,{id:"giveth-io-aprovecha-paquetes-aplicaciones-y-arquitecturas-notables-que-incluyen",children:(0,i.jsx)(a.strong,{children:"Giveth IO aprovecha paquetes, aplicaciones y arquitecturas notables que incluyen:"})}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Ethereum"}),"\n",(0,i.jsx)(a.li,{children:"React"}),"\n",(0,i.jsx)(a.li,{children:"NextJS"}),"\n",(0,i.jsx)(a.li,{children:"Apollo GraphQL"}),"\n",(0,i.jsx)(a.li,{children:"Tor.us"}),"\n",(0,i.jsx)(a.li,{children:"theme-ui"}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"instale-el-back-end-gr\xe1fico-de-impacto-desde-github",children:"Instale el back-end (gr\xe1fico de impacto) desde GitHub"}),"\n",(0,i.jsxs)(a.p,{children:["Para desarrollar localmente, necesita clonar el servidor back-end. Estamos usando ",(0,i.jsx)(a.a,{href:"https://github.com/Giveth/impact-graph",children:"https://github.com/Giveth/impact-graph"})," para esto."]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.em,{children:"via SSH en el CLI:"})}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"    git clone git@github.com:Giveth/impact-graph.git\r\n    cd impact-graph\r\n    npm i\r\n    cp .env.example .env\n"})}),"\n",(0,i.jsx)(a.h3,{id:"crear-una-base-de-datos-y-un-usuario-en-postgres-usando-psql",children:"Crear una base de datos y un usuario en Postgres usando psql"}),"\n",(0,i.jsxs)(a.p,{children:["Siga este tutorial sobre PSQL para configurar su nombre de usuario y crear la base de datos.\r\n",(0,i.jsx)(a.a,{href:"https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e",children:"https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e"}),")"]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.strong,{children:"Creando Usuario y Base de Datos"})}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"sudo -u postgres psql\r\npostgres=# Crea la Base de datos <databaseName>;\r\npostgres=# Crea el Usuario y la contrase\xf1a <userName> Con un contrase\xf1a encriptada '<passwordHere>';\r\npostgres=# Le damos los privilegios de administrador a nuestro usuario <databaseName> to <userName>;\n"})}),"\n",(0,i.jsx)(a.h3,{id:"clonar-e-instalar-la-interfaz",children:"Clonar e instalar la interfaz"}),"\n",(0,i.jsxs)(a.p,{children:["Dir\xedgete a ",(0,i.jsx)(a.a,{href:"https://github.com/Giveth/giveth-next",children:"https://github.com/Giveth/giveth-next"})," y clona el repositorio."]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.em,{children:"via SSH en el CLI:"})}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"git clone git@github.com:Giveth/giveth-next.git\r\ncd giveth-next\r\nyarn install\n"})}),"\n",(0,i.jsx)(a.h3,{id:"obtener-las-variables-de-entorno",children:"Obtener las variables de entorno"}),"\n",(0,i.jsxs)(a.p,{children:["Para ejecutar la compilaci\xf3n local de Giveth.io, deber\xe1 solicitar las variables de entorno. Dir\xedgete a nuestro ",(0,i.jsx)(a.a,{href:"https://discord.giveth.io",children:"Discord de Colaboradores"}),", saluda y ponte en contacto con nuestro gerente de producto, @MoeNick o uno de los desarrolladores."]}),"\n",(0,i.jsx)(a.h3,{id:"inicie-el-entorno-y-el-servidor",children:"Inicie el entorno y el servidor"}),"\n",(0,i.jsxs)(a.p,{children:["Inicie el servidor backend ",(0,i.jsx)(a.code,{children:"impact-graph"})," y redis."]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["Ejecute redis usando el comando ",(0,i.jsx)(a.code,{children:"redis-server"}),"."]}),"\n",(0,i.jsxs)(a.li,{children:["Desde el repositorio del gr\xe1fico de impacto, comience con ",(0,i.jsx)(a.code,{children:"npm start"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(a.admonition,{type:"info",children:[(0,i.jsx)(a.h3,{id:"uso-de-una-base-de-datos-provisional-para-desarrollar",children:"Uso de una base de datos provisional para desarrollar"}),(0,i.jsxs)(a.p,{children:["Si no necesita configurar una base de datos local para sus fines de desarrollo, puede usar la base de datos provisional en su lugar. Establezca ",(0,i.jsx)(a.code,{children:"NEXT_PUBLIC_APOLLO_SERVER"})," en ",(0,i.jsx)(a.code,{children:"https://serve.giveth.io/graphql"})," (esto usa la misma base de datos que ve en ",(0,i.jsx)(a.a,{href:"https://next.giveth.io",children:"https://next.giveth.io"}),")."]})]}),"\n",(0,i.jsx)(a.h3,{id:"ejecute-las-migraciones-para-configurar-la-base-de-datos",children:"Ejecute las migraciones para configurar la base de datos"}),"\n",(0,i.jsxs)(a.p,{children:["En una terminal separada ",(0,i.jsx)(a.code,{children:"cd"})," dentro de ",(0,i.jsx)(a.code,{children:"impact-graph"}),"\r\nCorrer este comando en el terminal:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"npm run typeorm:cli -- migration:run\n"})}),"\n",(0,i.jsx)(a.h3,{id:"implementar-el-front-end",children:"Implementar el front-end"}),"\n",(0,i.jsxs)(a.p,{children:["Para aprovechar los ajustes preestablecidos de linting, utilice ",(0,i.jsx)(a.strong,{children:"VSCODE"}),":"]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["Seleccionamos ",(0,i.jsx)(a.em,{children:"Archivo -> Abrir WorkSpace"}),"."]}),"\n",(0,i.jsx)(a.li,{children:"Navegar al directorio giveth-next."}),"\n",(0,i.jsxs)(a.li,{children:["Abra el archivo del espacio de trabajo ",(0,i.jsx)(a.code,{children:"giveth2-full-stack.code-workspace"}),"."]}),"\n",(0,i.jsx)(a.li,{children:"Instale las extensiones recomendadas (complementos Prettier y StandardJS)."}),"\n",(0,i.jsx)(a.li,{children:"Luego encienda el front-end localmente."}),"\n"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"yarn run dev\n"})}),"\n",(0,i.jsx)(a.h3,{id:"iniciar-la-edici\xf3n",children:"\xa1Iniciar la edici\xf3n!"}),"\n",(0,i.jsx)(a.p,{children:"Abra el repositorio giveth-next en su editor de c\xf3digo."}),"\n",(0,i.jsxs)(a.p,{children:["Giveth.io ahora se ejecuta localmente en ",(0,i.jsx)(a.code,{children:"http://localhost:8000"}),"."]}),"\n",(0,i.jsx)("img",{id:"contentimg",alt:"Giveth Running Locally",src:(0,t.Ay)("img/content/givethlocalresized.png")}),"\n",(0,i.jsxs)(a.p,{children:["Tambi\xe9n puede expirar mediante una consulta sus datos a trav\xe9s de GraphQL. Lo encontrar\xe1 en este enlace aqu\xed: ",(0,i.jsx)(a.code,{children:"http://localhost:8000/___graphql"}),"\r\nObt\xe9n m\xe1s informaci\xf3n sobre el uso de esta herramienta en el ",(0,i.jsx)(a.a,{href:"https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql",children:"tutorial de Gatsby"}),"."]}),"\n",(0,i.jsx)(a.p,{children:"\xa1Guarde sus cambios y el navegador se actualizar\xe1 en tiempo real!"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.strong,{children:"Estados de compilaci\xf3n actuales"})}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.a,{href:"https://giveth.io",children:"M\xe1ster"})}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.a,{href:"https://app.netlify.com/sites/giveth2/deploys",children:(0,i.jsx)(a.img,{src:"https://api.netlify.com/api/v1/badges/f914ac7e-ce27-4909-bd3e-14d749731a52/deploy-status",alt:"Netlify Status"})})}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.a,{href:"https://next.giveth.io",children:"staging"})}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.a,{href:"https://app.netlify.com/sites/giveth-website-staging/deploys",children:(0,i.jsx)(a.img,{src:"https://api.netlify.com/api/v1/badges/2f325b5b-e159-443e-bac7-c5e15f3578c0/deploy-status",alt:"Netlify Status"})})}),"\n",(0,i.jsx)("br",{})]})}function p(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>t,x:()=>o});var s=n(6540);const i={},r=s.createContext(i);function t(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);