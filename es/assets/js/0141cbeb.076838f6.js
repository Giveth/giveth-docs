"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[8065],{9117:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"givpower","title":"GIVpower","description":"GIVpower fue creado para construir una relaci\xf3n entre proyectos y donantes en la que todos salen ganando. Los holders de GIV obtienen GIVpower y un rendimiento al hacer staking y - si lo desean - pueden bloquear el mismo GIV dentro de la GIVfarm.","source":"@site/i18n/es/docusaurus-plugin-content-docs-dapps/current/GIVpower.md","sourceDirName":".","slug":"/giveconomy/givpower","permalink":"/es/giveconomy/givpower","draft":false,"unlisted":false,"editUrl":"https://github.com/giveth/giveth-docs/edit/master/dapps/GIVpower.md","tags":[],"version":"current","lastUpdatedBy":"Franco","lastUpdatedAt":1675186019000,"frontMatter":{"id":"givpower","title":"GIVpower","slug":"giveconomy/givpower"},"sidebar":"dapps","previous":{"title":"GIVstream","permalink":"/es/giveconomy/givstream"},"next":{"title":"GIVgarden","permalink":"/es/giveconomy/givgarden"}}');var o=s(4848),a=s(8453),d=s(6025),i=s(3554);const t={id:"givpower",title:"GIVpower",slug:"giveconomy/givpower"},l="GIVpower",c={},p=[{value:"Contratos",id:"contratos",level:3},{value:"Staking y Locking",id:"staking-y-locking",level:2},{value:"APR en la GIVfarm",id:"apr-en-la-givfarm",level:3},{value:"Desbloqueo",id:"desbloqueo",level:4},{value:"El multiplicador",id:"el-multiplicador",level:3},{value:"Recompensas del GIVstream",id:"recompensas-del-givstream",level:4},{value:"Asignaci\xf3n de recompensas",id:"asignaci\xf3n-de-recompensas",level:2},{value:"Usar su GIVpower",id:"usar-su-givpower",level:2},{value:"C\xf3mo Boostear proyectos",id:"c\xf3mo-boostear-proyectos",level:3},{value:"Administrar su GIVpower",id:"administrar-su-givpower",level:3},{value:"Cambios en el balance de GIVpower",id:"cambios-en-el-balance-de-givpower",level:4},{value:"Ranking de los proyectos",id:"ranking-de-los-proyectos",level:2},{value:"Delegaci\xf3n",id:"delegaci\xf3n",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"givpower",children:"GIVpower"})}),"\n",(0,o.jsx)(n.p,{children:"GIVpower fue creado para construir una relaci\xf3n entre proyectos y donantes en la que todos salen ganando. Los holders de GIV obtienen GIVpower y un rendimiento al hacer staking y - si lo desean - pueden bloquear el mismo GIV dentro de la GIVfarm."}),"\n",(0,o.jsx)(n.p,{children:'Con el tiempo, podr\xe1n usar su GIVpower para "boostear" \ud83d\ude80 proyectos en Giveth y ayudar a mejorar su ranking. Los proyectos con mayor ranking obtendr\xe1n distintos beneficios en la plataforma. Al principio, sus donantes obtendr\xe1n m\xe1s GIVbacks y, eventualmente, obtendr\xe1n fondos complementarios (de nuestra Matching Pool) y otros beneficios.'}),"\n",(0,o.jsx)(n.p,{children:"La primera fase de GIVpower lanzada el 4 de octubre de 2022 agreg\xf3 un nuevo nivel de mec\xe1nica para hacer staking de GIV en la GIVfarm."}),"\n",(0,o.jsx)("img",{alt:"givpower staking card",width:"30%",heigh:"auto",src:(0,d.Ay)("img/givpowerCard.png")}),"\n",(0,o.jsxs)(n.p,{children:["Adem\xe1s de las ganancias del APR de GIV y de recibir ",(0,o.jsx)(n.a,{href:"https://docs.giveth.io/giveconomy/givgarden/",children:"gGIV para la gobernanza de Giveth"}),", los usuarios tambi\xe9n obtienen ",(0,o.jsx)(n.strong,{children:"GIVpower"}),", un token ERC-20 no transferible. El GIV que est\xe1 stakeado se iguala 1:1 con GIVpower."]}),"\n",(0,o.jsx)(n.p,{children:"(es decir, si tienes 100 GIV en stake, obtendr\xe1s 100 GIVpower)."}),"\n",(0,o.jsx)(n.p,{children:'Los usuarios tambi\xe9n podr\xe1n "Bloquear" \ud83d\udd12 su GIV apostado en la GIVfarm para poder multiplicar su APR y su GIVpower.'}),"\n",(0,o.jsx)(n.h3,{id:"contratos",children:"Contratos"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"GIVpower(POW) Token - 0xD93d3bDBa18ebcB3317a57119ea44ed2Cf41C2F2"}),"\n",(0,o.jsx)(n.li,{children:"GIVpower Staking - 0xD93d3bDBa18ebcB3317a57119ea44ed2Cf41C2F2"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"staking-y-locking",children:"Staking y Locking"}),"\n",(0,o.jsx)(n.p,{children:"Los usuarios pueden aumentar sus beneficios del GIV stakeado bloque\xe1ndolos por un periodo de tiempo. Bloquear (\u201cLock\u201d) GIV significa que no puede ser unstaked por un determinado periodo de tiempo, la fecha en que desbloquea un lote particular de GIV se puede ver en la ventana emergente de \u201cLocked GIV Details\u201d."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"GIVpower solo est\xe1 disponible en Gnosis Chain. Si tienes GIV en Mainnet y quieres generar recompensas y participar con GIVpower, puedes hacer un puente de tu GIV desde Mainnet a Gnosis Chain."})}),"\n",(0,o.jsx)(n.p,{children:"El GIV se puede bloquear por rondas de 2 semanas siguiendo el mismo cronograma que los GIVbacks, la cantidad m\xednima de tiempo es 1 ronda (2 semanas) y el m\xe1ximo es 26 rondas (1 a\xf1o)."}),"\n",(0,o.jsxs)(n.p,{children:["Cuanto m\xe1s tiempo bloqueas tu GIV, mayor ser\xe1 el multiplicador para esa cantidad espec\xedfica de GIV bloqueado. Un multiplicador m\xe1s grande significa que obtendr\xe1s m\xe1s GIV de las recompensas en la GIVfarm (obtienes una APR m\xe1s alta) y tambi\xe9n obtendr\xe1s m\xe1s GIVpower. La cantidad de gGIV (",(0,o.jsx)(n.a,{href:"https://docs.giveth.io/giveconomy/givgarden",children:"para votar en los GIVgardens"})," que recibas no aumentar\xe1."]}),"\n",(0,o.jsx)("img",{alt:"givpower multiplier",width:"80%",heigh:"auto",src:(0,d.Ay)("img/givpowerMultiplier.png")}),"\n",(0,o.jsx)(n.p,{children:"Puedes bloquear varios lotes de GIV tokens por diferentes per\xedodos de tiempo, cada lote tendr\xe1 una APR diferente, seg\xfan el tiempo que hayas bloqueado los tokens."}),"\n",(0,o.jsx)("img",{alt:"givpower locked giv details",width:"80%",heigh:"auto",src:(0,d.Ay)("img/givpowerLockedDetails.png")}),"\n",(0,o.jsx)(n.p,{children:"Luego de finalizar el per\xedodo de bloqueo, el GIV se desbloquea, lo que significa que puede retirarlo de la GIVfarm. Retirar (\u201cUnstake\u201d) su GIV significa que perder\xe1 cualquier GIVpower y gGIV asociado. Siempre se puede recuperar poniendo los GIV tokens en stake nuevamente."}),"\n",(0,o.jsx)(n.h3,{id:"apr-en-la-givfarm",children:"APR en la GIVfarm"}),"\n",(0,o.jsx)(n.p,{children:"Cuando bloquee su GIV, podr\xe1 ver la APR estimada actual para esa cantidad de GIV que se est\xe1 bloqueando. La APR puede variar seg\xfan la cantidad total de GIV stakeado dentro de la GIVfarm de todos los usuarios, y puede ser diferente para cada lote de tokens bloqueados."}),"\n",(0,o.jsxs)(n.p,{children:['Podr\xe1 ver su APR real para cada lote abriendo la ventana emergente "',(0,o.jsx)(n.strong,{children:"Locked GIV Details"}),'" dentro de la secci\xf3n de staking de GIVpower.']}),"\n",(0,o.jsx)("img",{alt:"locked givpower aprs",width:"80%",heigh:"auto",src:(0,d.Ay)("img/givpowerLockedapr.png")}),"\n",(0,o.jsx)(n.p,{children:"En la ventana de staking de GIVpower, la APR que se muestra es el promedio ponderado de todos los lotes de su GIV bloqueado. Si no tiene GIV bloqueado en GIVpower, se le mostrar\xe1 un rango de las APR m\xe1s bajas y m\xe1s altas posibles en ese momento."}),"\n",(0,o.jsx)("img",{alt:"givpower staking card apr",width:"30%",heigh:"auto",src:(0,d.Ay)("img/givpowerCardapr.png")}),"\n",(0,o.jsx)(n.h4,{id:"desbloqueo",children:"Desbloqueo"}),"\n",(0,o.jsx)(n.p,{children:"El desbloqueo siempre ocurre al comienzo de una nueva ronda, por lo que si bloquea su GIV en medio de una ronda, la fecha de desbloqueo se calcular\xe1 a partir del comienzo de la siguiente ronda."}),"\n",(0,o.jsx)(n.p,{children:"Por ejemplo:"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Mohammad bloquea su GIV en staking durante 5 rondas (10 semanas), hoy es el d\xeda 5 de la ronda 25. Su GIV permanecer\xe1 bloqueado durante toda la ronda 25 (9 d\xedas m\xe1s) hasta que comience la ronda 26, Y 5 rondas m\xe1s, es decir, su GIV finalmente se desbloquear\xeda al final de la ronda 31."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Cuando finaliza la duraci\xf3n de su per\xedodo de bloqueo para cada lote, ese lote de GIV se desbloquea, lo que reduce su APR de ese lote al APR m\xednimo para el staking de GIV. Para aumentar su APR nuevamente, deber\xe1 bloquear su GIV."}),"\n",(0,o.jsx)(n.h3,{id:"el-multiplicador",children:"El multiplicador"}),"\n",(0,o.jsx)(n.p,{children:"La f\xf3rmula b\xe1sica para calcular el multiplicador APR de las recompensas de GIV y GIVpower es:"}),"\n",(0,o.jsxs)(n.p,{children:["$$\n\\sqrt(1 + N)\n$$\n",(0,o.jsx)(n.em,{children:"N = n\xfamero de rondas bloqueadas"})]}),"\n",(0,o.jsx)(n.p,{children:"Veamos un ejemplo para entender c\xf3mo funciona:"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Carlos decide bloquear 100 de su staked GIV durante 10 rondas (20 semanas). Su multiplicador, redondeado a 2 decimales, es 3,32.\n$$\n\\sqrt(1 + 10)= 3.3166247903554\n$$\nSi al momento del bloqueo, la APR m\xednima de staked GIV es del 35 %, entonces su APR en el momento del bloqueo ser\xe1 ~116 %. La cantidad real ser\xe1 variable dependiendo, como se mencion\xf3, de la cantidad total de staked GIV en la GIVfarm, pero ese mismo multiplicador de 3.32 se aplicar\xeda a la APR de staking actual para las recompensas de GIV que Carlos est\xe1 generando."}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Carlos tambi\xe9n obtendr\xeda un multiplicador en su GIVpower. Suponiendo que ten\xeda 500 GIV apostados y elige bloquear 100 de esos 500, entonces tendr\xeda 732 GIVpower.\n$$\n(100 * 3.32) + 400 = 732\n$$"}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Despu\xe9s de las 10 rondas en las que Carlos bloque\xf3 su GIV, su GIVpower ya no tendr\xe1 un multiplicador, se reducir\xe1 a solo 500, igualando 1: 1 su staked GIV y su APR bajar\xe1 al APR m\xednimo de staking."}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"success",children:[(0,o.jsx)(n.h4,{id:"recompensas-del-givstream",children:"Recompensas del GIVstream"}),(0,o.jsx)(n.p,{children:"Como siempre, todas las recompensas del GIVeconomy se distribuyen a trav\xe9s del GIVstream. Consulte la Expansi\xf3n GIViverse para comprender cu\xe1nto ser\xe1n las recompensas que podr\xe1 reclamar."})]}),"\n",(0,o.jsx)("img",{alt:"GIVpower overview",src:(0,d.Ay)("img/GIVpowerOverview.png")}),"\n",(0,o.jsx)(n.h2,{id:"asignaci\xf3n-de-recompensas",children:"Asignaci\xf3n de recompensas"}),"\n",(0,o.jsx)(n.p,{children:"Se asignaron 7 millones de GIV a los primeros 6 meses de recompensas para GIVpower. Al final de los primeros 6 meses, Giveth evaluar\xe1 el desempe\xf1o del programa y asignar\xe1 m\xe1s recompensas seg\xfan corresponda."}),"\n",(0,o.jsx)(n.h2,{id:"usar-su-givpower",children:"Usar su GIVpower"}),"\n",(0,o.jsxs)(n.p,{children:['Puede usar su GIVpower para "boostear" los proyectos verificados en la plataforma. Los proyectos verificados ordenar\xe1n en la plataforma seg\xfan la cantidad de GIVpower que se les asign\xf3 en la ronda anterior. Los proyectos se benefician con un ranking m\xe1s alto al aparecer m\xe1s arriba en la ',(0,o.jsx)(n.a,{href:"https://giveth.io/projects",children:"lista de proyectos en Giveth"})," y tambi\xe9n ayudan a generar m\xe1s GIVbacks a sus donantes."]}),"\n",(0,o.jsxs)(n.p,{children:["Los proyectos con mejor ranking tambi\xe9n se beneficiar\xe1n eventualmente de los fondos de nuestra Matching Pool dentro del contexto de nuestro ",(0,o.jsx)(n.a,{href:"https://forum.giveth.io/t/givmatching-idea-generation-on-how-to-distribute-funds/346/21",children:"programa GIVmatching"}),"  (TBD)."]}),"\n",(0,o.jsx)(n.h3,{id:"c\xf3mo-boostear-proyectos",children:"C\xf3mo Boostear proyectos"}),"\n",(0,o.jsxs)(n.p,{children:["Boostear un proyecto con tu GIVpower es muy f\xe1cil. Para comenzar, busque el proyecto que desea impulsar y visite la p\xe1gina del proyecto. Una vez que est\xe9 all\xed, haga clic en ",(0,o.jsx)(n.code,{children:"boost"}),"."]}),"\n",(0,o.jsx)("img",{alt:"boosting on the project page",width:"80%",height:"auto",src:(0,d.Ay)("img/content/boostProjectPage.png")}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Solo puedes boostear proyectos verificados"}),", hasta un m\xe1ximo de 20 proyectos diferentes. Si un proyecto por alg\xfan motivo pierde su estado de verificaci\xf3n  (por ejemplo, no proporciona actualizaciones o infringe nuestros ",(0,o.jsx)(n.a,{href:"https://giveth.io/tos",children:"T\xe9rminos de servicio"}),', todo el GIVpower que tienes asignado ese proyecto quedar\xe1 "inactivo" (es decir, excluido de los c\xe1lculos de clasificaci\xf3n y GIVbacks).']})}),"\n",(0,o.jsxs)(n.p,{children:["Seleccione el porcentaje de GIVpower que le gustar\xeda asignar para boostear el proyecto. Si es la primera vez que est\xe1 boosteando, se aplicar\xe1 autom\xe1ticamente el 100% de su GIVpower. Los boosteos posteriores de GIVpower reducir\xe1n proporcionalmente su GIVpower en sus otros proyectos ya boosteados. M\xe1s detalles a continuaci\xf3n en ",(0,o.jsx)(n.a,{href:"https://docs.giveth.io/giveconomy/givpower#managing-your-givpower",children:"Administrar su GIVpower"}),"."]}),"\n",(0,o.jsx)("img",{alt:"select boosting percentage",width:"80%",height:"auto",src:(0,d.Ay)("img/content/boostingProject.png")}),"\n",(0,o.jsxs)(n.p,{children:["Haga clic en ",(0,o.jsx)(n.code,{children:"Confirmar"})," y deber\xeda ver la confirmaci\xf3n de que su boosteo de GIVpower fue exitoso!"]}),"\n",(0,o.jsx)("img",{alt:"boostConfirmation",width:"80%",height:"auto",src:(0,d.Ay)("img/content/boostConfirmation.png")}),"\n",(0,o.jsx)(n.h3,{id:"administrar-su-givpower",children:"Administrar su GIVpower"}),"\n",(0,o.jsx)(n.p,{children:"Puede administrar sus asignaciones de GIVpower navegando a 'My Account' y luego haciendo clic en la pesta\xf1a 'My GIVpower'."}),"\n",(0,o.jsx)("img",{alt:"my boosted projects page",src:(0,d.Ay)("img/content/boostedProjectsPage.png")}),"\n",(0,o.jsxs)(n.p,{children:["Desde esta p\xe1gina puedes editar tus asignaciones de GIVpower a cada proyecto que hayas boosteado. Para comenzar, haga clic en ",(0,o.jsx)(n.code,{children:"MODIFY"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Puedes editar el porcentaje de GIVpower asignado a cada proyecto, cuando modifica uno de los porcentajes, todas sus otras asignaciones se ajustar\xe1n proporcionalmente en funci\xf3n de su asignaci\xf3n anterior. Si no desea que una asignaci\xf3n cambie para un proyecto espec\xedfico mientras modifica su GIVpower en otros proyectos, puede hacer clic en el \xedcono \ud83d\udd12. La suma de los porcentajes asignados a cada uno de sus proyectos debe ser igual a 100 %, por lo que puede bloquear todas sus asignaciones excepto dos."}),"\n",(0,o.jsx)(n.p,{children:"No puede tener menos de 1 proyecto boosteado en ning\xfan momento. Si por alguna raz\xf3n su proyecto impulsado pierde su estado verificado y todo su GIVpower se vuelve inactivo, debe boostear otro proyecto verificado antes de eliminar el GIVpower inactivo del proyecto no verificado."}),"\n",(0,o.jsxs)(n.p,{children:["Confirme sus cambios de asignaci\xf3n haciendo clic en ",(0,o.jsx)(n.code,{children:"APPLY CHANGES"})," y luego ",(0,o.jsx)(n.code,{children:"SAVE CHANGES"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Mire este video para ver c\xf3mo funciona la modificaci\xf3n de su GIVpower en acci\xf3n:"}),"\n",(0,o.jsx)(i.A,{playing:!0,loop:!0,controls:!0,url:"/video/editingAllocationsConverted.mp4"}),"\n",(0,o.jsx)(n.h4,{id:"cambios-en-el-balance-de-givpower",children:"Cambios en el balance de GIVpower"}),"\n",(0,o.jsx)(n.p,{children:"El total de su GIVpower puede cambiar con el tiempo dependiendo de 4 eventos t\xedpicos que pueden ocurrir, vamos a cubrirlos en detalle:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Stakear m\xe1s GIV"}),". Si stakeas m\xe1s GIV en la ",(0,o.jsx)(n.a,{href:"https://giveth.io/givfarm",children:"GIVfarm"}),", recibir\xe1s m\xe1s GIVpower en una proporci\xf3n 1:1 por cada GIV stakeado."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Bloquear GIV stakeado. Si bloqueas m\xe1s de tu GIV stakeado, esto multiplicar\xe1 tu GIVpower por un factor dependiendo de por cu\xe1nto tiempo lo bloquees. Cuanto m\xe1s tiempo lo bloquees, mayor ser\xe1 tu multiplicador y mayor ser\xe1 tu GIVpower."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"El GIV se desbloquea. Una vez que finalice la duraci\xf3n de bloqueo de cualquiera de tus lotes de GIV, perder\xe1s el multiplicador en tu saldo de GIVpower que se aplic\xf3 al bloquear ese lote de GIV. Tu saldo total de GIVpower disminuir\xe1."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Unstakear GIV. Si haces unstake de tu GIV en la ",(0,o.jsx)(n.a,{href:"https://giveth.io/givfarm",children:"GIVfarm"}),", quemar\xe1s tu GIVpower en una proporci\xf3n 1:1 por cada GIV quitado de staking."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Despu\xe9s de boostear tu primer proyecto con GIVpower, siempre estar\xe1s asignando el 100% de \xe9l a un proyecto(s). Por dise\xf1o, no importa si tu GIVpower total aumenta o disminuye, siempre estar\xe1s utilizando tu GIVpower de manera m\xe1xima y tus asignaciones a proyectos siempre permanecer\xe1n en los porcentajes relativos en los que los asignaste."}),"\n",(0,o.jsx)(n.h2,{id:"ranking-de-los-proyectos",children:"Ranking de los proyectos"}),"\n",(0,o.jsx)(n.p,{children:'Todos los proyectos verificados que hayan sido impulsados con GIVpower recibir\xe1n un ranking de GIVpower. El proyecto con m\xe1s GIVpower ser\xe1 rankeado #1 en la plataforma. El "puesto actual" se actualiza al comienzo de cada nueva ronda de GIVbacks y se toma a partir de la cantidad promedio de GIVpower stakeado detr\xe1s de un proyecto en la ronda anterior (dos semanas).'}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:'El "puesto proyectado" es una proyecci\xf3n de lo que podr\xeda ser el puesto actual en la pr\xf3xima ronda de GIVbacks, basado en el GIVpower que actualmente tiene ese proyecto. El puesto proyectado te da una idea del impacto que podr\xeda tener tu reciente impulso.'})}),"\n",(0,o.jsx)("img",{alt:"project ranking page",src:(0,d.Ay)("img/content/projectRanking.png")}),"\n",(0,o.jsxs)(n.p,{children:["El puesto actual de un proyecto a su vez afecta el porcentaje de GIVbacks que recibir\xe1n los nuevos donantes por realizar donaciones. El proyecto con mayor ranking puede producir hasta un 80% de GIVbacks, mientras que un proyecto verificado sin ranking (es decir, sin boosteos de GIVpower) producir\xe1 un 50%. Para determinar el ",(0,o.jsx)(n.a,{href:"https://docs.giveth.io/giveconomy/givbacks#rank--calculation",children:"factor de GIVbacks"})," para cada proyecto entre los mayores y menores puestos, tomamos la diferencia entre el m\xe1ximo y el m\xednimo factor de GIVbacks, y la dividimos entre el n\xfamero de proyectos rankeados que tenemos al final de cada ronda, a partir de esto podemos encontrar el factor \xfanico de GIVbacks para cada proyecto rankeado."]}),"\n",(0,o.jsx)(n.p,{children:"Cada proyecto desde el puesto menor hasta el mayor recibir\xe1 incrementalmente m\xe1s GIVbacks. Esto significa que, independientemente del puesto actual de un proyecto, boostear con GIVpower siempre puede hacer la diferencia."}),"\n",(0,o.jsxs)(n.p,{children:["Puedes leer m\xe1s acerca de ",(0,o.jsx)(n.a,{href:"https://docs.giveth.io/giveconomy/givbacks",children:"GIVbacks aqu\xed."})]}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("b",{children:(0,o.jsx)("i",{children:"Ver un ejemplo de distribuci\xf3n de GIVbacks"})})}),(0,o.jsx)(n.p,{children:"El a\xf1o es 2049, es la ronda 1337 de GIVbacks..."}),(0,o.jsxs)(n.p,{children:["Contamos con ",(0,o.jsx)(n.strong,{children:"25 proyectos verificados"})," que han sido boosteados con GIVpower. El ",(0,o.jsx)(n.strong,{children:"factor de GIVbacks m\xe1ximo es del 80 %, el m\xednimo es del 50 %"})," y la diferencia entre ambos es del 30 %. Esto significa que el proyecto con la menor cantidad de GIVpower, el proyecto clasificado en el puesto n.\xba 25, tendr\xeda un factor de devoluci\xf3n del 50 % y ",(0,o.jsx)(n.strong,{children:"cada proyecto subsiguiente con un ranking m\xe1s alto tendr\xeda un factor de devoluci\xf3n un 1,25 % m\xe1s alto"}),"."]}),(0,o.jsx)(n.p,{children:"El GIV total a distribuir por ronda es de 1.000.000 y el precio del GIV es de 0,53 $."}),(0,o.jsx)(n.p,{children:"A fines de la demostraci\xf3n, registramos que cada proyecto en el ranking obtuvo un valor fijo de 100 USD en donaciones. Seg\xfan esta informaci\xf3n y algunos valores dados de GIVpower boostenado un proyecto determinado, nuestro ejemplo de distribuci\xf3n se ver\xeda as\xed:"}),(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Proyecto"}),(0,o.jsx)(n.th,{children:"GIVpower"}),(0,o.jsx)(n.th,{children:"Ranking"}),(0,o.jsx)(n.th,{children:"Factor Givbacks"}),(0,o.jsx)(n.th,{children:"Valor de la donaci\xf3n en"}),(0,o.jsx)(n.th,{children:"GIVbacks estimados"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"A"}),(0,o.jsx)(n.td,{children:"4213.3329017797105"}),(0,o.jsx)(n.td,{children:"1"}),(0,o.jsx)(n.td,{children:"80%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"150.94339622641508"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"B"}),(0,o.jsx)(n.td,{children:"3511.1107514830924"}),(0,o.jsx)(n.td,{children:"2"}),(0,o.jsx)(n.td,{children:"78.75%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"148.5849056603774"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"C"}),(0,o.jsx)(n.td,{children:"2925.9256262359104"}),(0,o.jsx)(n.td,{children:"3"}),(0,o.jsx)(n.td,{children:"77.5%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"146.22641509433964"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"D"}),(0,o.jsx)(n.td,{children:"2438.271355196592"}),(0,o.jsx)(n.td,{children:"4"}),(0,o.jsx)(n.td,{children:"76.25%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"143.8679245283019"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"E"}),(0,o.jsx)(n.td,{children:"2031.8927959971602"}),(0,o.jsx)(n.td,{children:"5"}),(0,o.jsx)(n.td,{children:"75%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"141.5094339622642"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"F"}),(0,o.jsx)(n.td,{children:"1693.2439966643003"}),(0,o.jsx)(n.td,{children:"6"}),(0,o.jsx)(n.td,{children:"73.75%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"139.15094339622647"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"G"}),(0,o.jsx)(n.td,{children:"1411.036663886917"}),(0,o.jsx)(n.td,{children:"7"}),(0,o.jsx)(n.td,{children:"72.50%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"136.79245283018872"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"H"}),(0,o.jsx)(n.td,{children:"1175.8638865724308"}),(0,o.jsx)(n.td,{children:"8"}),(0,o.jsx)(n.td,{children:"71.25%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"134.43396226415098"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"I"}),(0,o.jsx)(n.td,{children:"979.8865721436924"}),(0,o.jsx)(n.td,{children:"9"}),(0,o.jsx)(n.td,{children:"70%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"132.0754716981133"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"J"}),(0,o.jsx)(n.td,{children:"816.572143453077"}),(0,o.jsx)(n.td,{children:"10"}),(0,o.jsx)(n.td,{children:"68.75%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"129.71698113207555"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"K"}),(0,o.jsx)(n.td,{children:"680.4767862108976"}),(0,o.jsx)(n.td,{children:"11"}),(0,o.jsx)(n.td,{children:"67.5%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"127.35849056603782"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"L"}),(0,o.jsx)(n.td,{children:"567.0639885090814"}),(0,o.jsx)(n.td,{children:"12"}),(0,o.jsx)(n.td,{children:"66.25%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"125.0000000000001"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"M"}),(0,o.jsx)(n.td,{children:"472.55332375756785"}),(0,o.jsx)(n.td,{children:"13"}),(0,o.jsx)(n.td,{children:"65%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"122.64150943396237"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N"}),(0,o.jsx)(n.td,{children:"393.7944364646399"}),(0,o.jsx)(n.td,{children:"14"}),(0,o.jsx)(n.td,{children:"63.75%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"120.28301886792464"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"O"}),(0,o.jsx)(n.td,{children:"328.16203038719993"}),(0,o.jsx)(n.td,{children:"15"}),(0,o.jsx)(n.td,{children:"62.5%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"117.92452830188691"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"P"}),(0,o.jsx)(n.td,{children:"273.46835865599996"}),(0,o.jsx)(n.td,{children:"16"}),(0,o.jsx)(n.td,{children:"61.25%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"115.56603773584918"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Q"}),(0,o.jsx)(n.td,{children:"227.89029887999996"}),(0,o.jsx)(n.td,{children:"17"}),(0,o.jsx)(n.td,{children:"60%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"113.20754716981146"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"R"}),(0,o.jsx)(n.td,{children:"189.90858239999997"}),(0,o.jsx)(n.td,{children:"18"}),(0,o.jsx)(n.td,{children:"58.75%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"110.84905660377373"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"S"}),(0,o.jsx)(n.td,{children:"158.257152"}),(0,o.jsx)(n.td,{children:"19"}),(0,o.jsx)(n.td,{children:"57.5%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"108.490566037736"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"T"}),(0,o.jsx)(n.td,{children:"131.88096"}),(0,o.jsx)(n.td,{children:"20"}),(0,o.jsx)(n.td,{children:"56.25%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"106.13207547169827"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"U"}),(0,o.jsx)(n.td,{children:"109.90079999999999"}),(0,o.jsx)(n.td,{children:"21"}),(0,o.jsx)(n.td,{children:"55%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"103.77358490566054"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"V"}),(0,o.jsx)(n.td,{children:"91.58399999999999"}),(0,o.jsx)(n.td,{children:"22"}),(0,o.jsx)(n.td,{children:"53.75%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"101.41509433962283"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"W"}),(0,o.jsx)(n.td,{children:"76.32"}),(0,o.jsx)(n.td,{children:"23"}),(0,o.jsx)(n.td,{children:"52.5%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"99.05660377358508"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"X"}),(0,o.jsx)(n.td,{children:"63.599999999999994"}),(0,o.jsx)(n.td,{children:"24"}),(0,o.jsx)(n.td,{children:"51.25%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"96.69811320754737"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Y"}),(0,o.jsx)(n.td,{children:"53"}),(0,o.jsx)(n.td,{children:"25"}),(0,o.jsx)(n.td,{children:"50%"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"94.33962264150965"})]})]})]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["La clasificaci\xf3n de proyectos continuar\xe1 teniendo un papel importante en Giveth.io y se incorporar\xe1 a las futuras funcionalidades de nuestro mapa de ruta, como ",(0,o.jsx)(n.a,{href:"https://docs.giveth.io/givethMatchingPool",children:"GIVmatching"}),". En el futuro, Giveth tambi\xe9n podr\xeda incorporar otras m\xe9tricas o herramientas de votaci\xf3n que afectar\xe1n la clasificaci\xf3n de un proyecto."]})}),"\n",(0,o.jsx)(n.h2,{id:"delegaci\xf3n",children:"Delegaci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["Giveth planea implementar una herramienta para que los usuarios puedan delegar su GIVpower, permitiendo a los Givers m\xe1s confiables realizar una curadur\xeda de proyectos en nombre de los usuarios. \xa1Solicita ahora para convertirte en un ",(0,o.jsx)(n.a,{href:"https://forum.giveth.io/t/open-call-for-givpower-delegates/779",children:"delegado de GIVpower!"})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}}}]);