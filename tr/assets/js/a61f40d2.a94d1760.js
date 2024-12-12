"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[3633],{4087:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"givethioinstallation","title":"Installing Giveth.io for Local development","description":"This guide will document the steps to set up and run Giveth.io locally for the purposes of development.The setup process was documented using Ubuntu 20.04 LTS.","source":"@site/docs/givethioinstallation.md","sourceDirName":".","slug":"/givethioinstallation","permalink":"/tr/docs/givethioinstallation","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"givethioinstallation","title":"Installing Giveth.io for Local development"},"sidebar":"defaultSidebar"}');var i=t(4848),r=t(8453),a=t(6025);const l={id:"givethioinstallation",title:"Installing Giveth.io for Local development"},o=void 0,d={},h=[{value:"Install impact-graph from GitHub",id:"install-impact-graph-from-github",level:3},{value:"Create a Database and User in Postgres using psql",id:"create-a-database-and-user-in-postgres-using-psql",level:3},{value:"Clone and Install the Frontend",id:"clone-and-install-the-frontend",level:3},{value:"Get the Environment Variables",id:"get-the-environment-variables",level:3},{value:"Launch the Development Server and Environment",id:"launch-the-development-server-and-environment",level:3},{value:"Start Editing!",id:"start-editing",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This guide will document the steps to set up and run Giveth.io locally for the purposes of development.The setup process was documented using Ubuntu 20.04 LTS."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"You'll need a couple prerequisites to get started."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://redis.io/topics/quickstart",children:"Redis"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.postgresql.org/download",children:"Postgres"})}),"\n",(0,i.jsx)(n.li,{children:"Bash CLI"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.gatsbyjs.com/docs/reference/gatsby-cli/",children:"Gatsby CLI"})}),"\n",(0,i.jsxs)(n.li,{children:["Configure NodeJS","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.gatsbyjs.com/docs/how-to/local-development/gatsby-on-linux/",children:"For Linux"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.gatsbyjs.com/docs/how-to/local-development/gatsby-on-windows/",children:"For Windows"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Your Favourite Code Editor (VScode for linting presets)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"install-impact-graph-from-github",children:"Install impact-graph from GitHub"}),"\n",(0,i.jsxs)(n.p,{children:["In order to develop locally you need to clone the backend server as well. We are using ",(0,i.jsx)(n.a,{href:"https://github.com/Giveth/impact-graph",children:"https://github.com/Giveth/impact-graph"})," for this."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["via SSH on the CLI:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:Giveth/impact-graph.git\ncd impact-graph\nnpm i\ncp .env.example .env\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"create-a-database-and-user-in-postgres-using-psql",children:"Create a Database and User in Postgres using psql"}),"\n",(0,i.jsxs)(n.p,{children:["Follow this tutorial on PSQL to setup your username and create the database.\n",(0,i.jsx)(n.a,{href:"https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e",children:"https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e"}),")"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"TL;DR"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo -u postgres psql\npostgres=# create database <databaseName>;\npostgres=# create user <userName> with encrypted password '<passwordHere>';\npostgres=# grant all privileges on database <databaseName> to <userName>;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"clone-and-install-the-frontend",children:"Clone and Install the Frontend"}),"\n",(0,i.jsxs)(n.p,{children:["Head on over to ",(0,i.jsx)(n.a,{href:"https://github.com/Giveth/giveth-2",children:"https://github.com/Giveth/giveth-2"})," and clone the repo."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"via the CLI:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:Giveth/giveth-2.git\ncd giveth-2\nnpm i\n"})}),"\n",(0,i.jsx)(n.h3,{id:"get-the-environment-variables",children:"Get the Environment Variables"}),"\n",(0,i.jsxs)(n.p,{children:["In order to run the local build for Giveth.io you'll need to ask for the environment variables. Head on over to our ",(0,i.jsx)(n.a,{href:"https://discord.giveth.io",children:"Contributors Discord"})," say Hi and get in touch with one of the developers."]}),"\n",(0,i.jsx)(n.h3,{id:"launch-the-development-server-and-environment",children:"Launch the Development Server and Environment"}),"\n",(0,i.jsxs)(n.p,{children:["Start up the ",(0,i.jsx)(n.code,{children:"impact-graph"})," backend server and redis."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Run redis by using the command ",(0,i.jsx)(n.code,{children:"redis-server"})]}),"\n",(0,i.jsxs)(n.li,{children:["From the impact-graph repo start with ",(0,i.jsx)(n.code,{children:"npm start"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To take advantage of linting presets, please use ",(0,i.jsx)(n.strong,{children:"VSCODE"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.em,{children:"File -> Open Workspace"})]}),"\n",(0,i.jsx)(n.li,{children:"Navigate into the giveth-2 directory"}),"\n",(0,i.jsxs)(n.li,{children:["Open the workspace file ",(0,i.jsx)(n.code,{children:"giveth2-full-stack.code-workspace"})]}),"\n",(0,i.jsx)(n.li,{children:"Install recommended extensions (Prettier and StandardJS plugins)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Then fire up the local development server."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"gatsby develop\n"})}),"\n",(0,i.jsx)(n.h3,{id:"start-editing",children:"Start Editing!"}),"\n",(0,i.jsx)(n.p,{children:"Open up the giveth2 repo on your code editor."}),"\n",(0,i.jsxs)(n.p,{children:["Giveth.io is now running locally at ",(0,i.jsx)(n.code,{children:"http://localhost:8000"}),"!"]}),"\n",(0,i.jsx)("img",{alt:"Giveth Running Locally",src:(0,a.Ay)("img/content/givethlocalresized.png")}),"\n",(0,i.jsxs)(n.p,{children:["You can also expiremnt with querying your data via GraphQL - you'll find it at this link here - ",(0,i.jsx)(n.code,{children:"http://localhost:8000/___graphql"}),"\nLearn more about using this tool in the ",(0,i.jsx)(n.a,{href:"https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql",children:"Gatsby tutorial"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Save your changes and the browser will update in real time!"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Current Build Statuses"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://v2.giveth.io",children:"master"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://app.netlify.com/sites/giveth2/deploys",children:(0,i.jsx)(n.img,{src:"https://api.netlify.com/api/v1/badges/f914ac7e-ce27-4909-bd3e-14d749731a52/deploy-status",alt:"Netlify Status"})})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://staging.giveth.io",children:"staging"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://app.netlify.com/sites/giveth-website-staging/deploys",children:(0,i.jsx)(n.img,{src:"https://api.netlify.com/api/v1/badges/2f325b5b-e159-443e-bac7-c5e15f3578c0/deploy-status",alt:"Netlify Status"})})}),"\n",(0,i.jsx)("br",{})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(6540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);