---
id: contributors
title: Contribuyendo al desarrollo de Giveth
slug: dapps/contributors
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../../../../src/css/custom.css'

Giveth actualmente mantiene tres productos que se centran en la gestión de fondos, las donaciones entre pares y la economía de tokens de DeFi para siempre. Estos son [Giveth TRACE](https://trace.giveth.io), [Giveth.io](https://giveth.io) y [GIVeconomy](https://giveth.io) respectivamente

Todos nuestros productos comparten algunos estándares de desarrollo comunes que es primordial aprender antes de participar en cualquier desarrollo para Giveth. En este documento, le mostraremos cómo interactuar con nuestros repositorios de código abierto, ponerse en contacto con las personas adecuadas y cómo comenzar a crear y seleccionar problemas.


## Gestión de Github
Lo primero es lo primero, deberá instalar la [extensión zenhub para github](https://chrome.google.com/webstore/detail/zenhub-for-github/ogcgkffhplmphkaahpmffcafajaocjbd) para su navegador web que le permitirá ver los espacios de trabajo y las canalizaciones que usamos en Github para gestionar problemas.

<img alt='All-Devs Zenhub Board' width='85%' height='auto' src={useBaseUrl('img/content/allDevsZenhub.png')} />

Hemos hecho la transición para administrar las tres DApps (productos) en un solo espacio de trabajo, **`All-Devs`**.

### Repositorios
La [organización Giveth Github](https://github.com/Giveth) tiene muchos, muchos repositorios. Aquí hay una descripción general de los repositorios relevantes que se relacionan con nuestros productos activos:

<table>
  <tr>
   <td><h3>Productos</h3>
   </td>
   <td><h3>Repositorios</h3>
   </td>
   <td><h3>Descripción</h3>
   </td>
  </tr>
  <tr>
   <td>Giveth.io
   </td>
   <td>gráfico de impacto
   </td>
   <td>Backend de Giveth.io
   </td>
  </tr>
  <tr>
   <td>Giveth.io
   </td>
   <td>giveth-next
   </td>
   <td>Giveth.io version actual
   </td>
  </tr>
  <tr>
   <td>Giveth.io
   </td>
   <td>giveth-io-typescript
   </td>
   <td>Givethio typescript version con nuevo diseño
   </td>
  </tr>
  <tr>
   <td>GIVEeconomy
   </td>
   <td>GIVeconomy
   </td>
   <td>Por lo general, se utiliza para la planificación y el seguimiento de problemas.
   </td>
  </tr>
  <tr>
   <td>GIVeconomy
   </td>
   <td>giv-token-contratos
   </td>
   <td>Implementaciones de contratos inteligentes
   </td>
  </tr>
  <tr>
   <td>GIVeconomy
   </td>
   <td>liquidez-minería-dapp
   </td>
   <td>GIVeconomy Frontend UI
   </td>
  </tr>
  <tr>
   <td>GIVeconomy
   </td>
   <td>giv-token-subgraph
   </td>
   <td>Calculating $GIV data para GIVeconomy Frontend
   </td>
  </tr>
  <tr>
   <td>GIVeconomy
   </td>
   <td>givback-calculation
   </td>
   <td>Calculating GIVbacks
   </td>
  </tr>
  <tr>
   <td>TRACE
   </td>
   <td>giveth-dapp
   </td>
   <td>Frontend y planificación de la giveth TRACE
   </td>
  </tr>
  <tr>
   <td>TRACE
   </td>
   <td>feathers-giveth
   </td>
   <td>Backend de la Giveth TRACE
   </td>
  </tr>
  <tr>
   <td>TRACE
   </td>
   <td>dapp-mailer
   </td>
   <td>Sistema de notificación de correo para TRACE
   </td>
  </tr>
  <tr>
   <td>TRACE
   </td>
   <td>giveth-bridge
   </td>
   <td>Giveth Rinkeby - Mainnet Bridge system
   </td>
  </tr>
  <tr>
   <td>Servicios Generales
   </td>
   <td>Sistema de Diseño de IU
   </td>
   <td>npm package for Giveth design assets
   </td>
  </tr>
</table>

### Pipelines en el espacio de trabajo `All-Devs`
Cuando ingresa a un espacio de trabajo en la pestaña Zenhub, verá una línea de columnas adyacentes que se utilizan para identificar y administrar los estados de los problemas que se encuentran actualmente en los repositorios. Puede encontrar una breve descripción de cada uno a continuación:

**Nuevos problemas**: los nuevos errores y características van aquí primero.

**Epics** - Pipeline para problemas épicos. Tareas más grandes compuestas de varios problemas más pequeños.

**Icebox**: funciones o sugerencias que se han archivado. Los problemas aquí no son prioritarios y pueden agregarse a los sprints solo si los desarrolladores tienen el ancho de banda.

**Atraso**: problemas de menor prioridad que esperan ser incluidos en Sprint Planning.

**Sprint Backlog**: estos problemas se examinaron y están listos para trabajar en ellos. Se agregarán al próximo sprint según la prioridad y el ancho de banda del desarrollador.

**En curso**: los desarrolladores lo han recogido y están trabajando en él, normalmente en compilaciones locales.

**Revisiones de código**: solicitudes de incorporación de cambios abiertas en espera de revisión y eventual fusión en el servidor de ensayo.
:::info
Es obligatorio que uno de los miembros del equipo central revise el código, generalmente su mentor o el que le presenta el proyecto puede revisarlo, solicite una revisión antes de enviarlo a cualquier entorno.
:::

**Pruebas/control de calidad de UAT**: la función o corrección de errores se implementa en el servidor de prueba para pruebas de usuario y control de calidad.

**Terminado**: la función o corrección de errores se completó y está lista para implementarse en el servidor en vivo.
:::info
Todos los problemas deben cumplir con los criterios del Departamento de Defensa (Definición de Terminado) para ser aprobados como Terminados y estar en esta columna:
Criterios de éxito aprobados (si se mencionan en Historia de usuario/Tarea o problema relacionado)
Implementado en ensayo
UAT Probado por un probador o PM
documentado
:::

**Cerrado**: la función o corrección de errores se ha copiado en vivo. Se recomienda que todos los problemas cerrados se relacionen con un número de versión en el zenhub y se cierren inmediatamente después de que la versión se publique.

### Creación de problemas
La creación de problemas de Github es esencial para garantizar que las correcciones de errores o las características se rastreen correctamente y que la información relevante se pueda organizar y consolidar. La nueva plantilla de publicación es solo una guía, siéntete libre de eliminar cualquier título que no uses.

**Las etiquetas** ayudarán a agregar contexto a su problema, utilícelas para que otros desarrolladores puedan comprender mejor los problemas de un vistazo y recogerlos. Algunas etiquetas de uso común en `All-Devs` son:

**`seguimiento rápido`**: características o mejoras prioritarias luego del lanzamiento de un producto o lanzamiento de una versión.

**`documentación`** - Solicitud de creación o actualización de documentación técnica.

**`bugs`** - Funcionalidad o característica de un producto que está roto o no funciona según lo previsto

**`solicitud de función`** - Solicitar que se agregue una nueva característica o funcionalidad a un producto

**`diseño necesario`** - Solicitud de apoyo del equipo de diseño para crear activos relevantes para este problema

**`pregunta`** - Hay una pregunta pendiente dentro de este problema que necesita una respuesta para seguir adelante

**`security`** - Problema o mejora de seguridad

**`UI`**: este problema se relaciona con la interfaz de usuario de un producto determinado

**`UX`**: este problema se relaciona con la experiencia del usuario de un producto determinado

## Ceremonias

Organizamos en [Giveth Discord](https://discord.giveth.io) muchas reuniones de desarrolladores a lo largo de la semana, que incluyen:
- Standups diarios de desarrollo de martes a jueves a las 6:30 am GMT-6
- All-Devs Sync semanalmente los lunes a las 10:00 am GMT-6
- GIVeconomy Sync semanalmente los miércoles a las 8:00 am GMT-6

Estas reuniones son lugares importantes para mantenerse al día con el desarrollo de DApp y para integrarse con el equipo de Giveth como colaborador de desarrollo.

## Gestión de Sprint

Marco: Estamos practicando principalmente Scrum, en iteraciones quincenales (llamadas sprints), a veces en base a situaciones de proyectos que pasamos a KanBan.

### ¿Qué es Scrum?
En scrum, el sprint es un período de tiempo determinado en el que se realiza todo el trabajo. Sin embargo, antes de que pueda pasar a la acción, debe configurar el sprint. Debe decidir cuánto durará el cuadro de tiempo, el objetivo del sprint y dónde comenzará. La sesión de planificación del sprint inicia el sprint estableciendo la agenda y el enfoque.

- **El qué**: el propietario del producto describe el objetivo (o meta) del sprint y qué elementos del backlog contribuyen a ese objetivo. El equipo de scrum decide qué se puede hacer en el próximo sprint y qué harán durante el sprint para que eso suceda.

- **El cómo**: el equipo de desarrollo planifica el trabajo necesario para lograr el objetivo del sprint. En última instancia, el plan de sprint resultante es una negociación entre el equipo de desarrollo y el propietario del producto basada en el valor y el esfuerzo.

- **The Who**: no puedes planificar el sprint sin el propietario del producto o el equipo de desarrollo. El propietario del producto define el objetivo en función del valor que busca. El equipo de desarrollo necesita comprender cómo pueden o no lograr ese objetivo. Si alguno falta en este evento, hace que la planificación del sprint sea casi imposible.

- **Las entradas**: un excelente punto de partida para el plan de sprint es la acumulación de productos, ya que proporciona una lista de "cosas" que podrían ser parte del sprint actual. El equipo también debe observar el trabajo existente realizado en el incremento y tener en cuenta la capacidad.

- **Los resultados**: el resultado más importante de la reunión de planificación del sprint es que el equipo pueda describir el objetivo del sprint y cómo comenzará a trabajar hacia ese objetivo. Esto se hace visible en el Sprint Backlog.

<img alt="sprint planning" width='75%' src={useBaseUrl('img/content/sprintInfo.png')} />

Antes de que comience la iteración, es posible que deba tener las horas de contribución totales esperadas en [Hoja de cálculo de planificación de recursos de Giveth](https://docs.google.com/spreadsheets/d/1fJcFTLJof6o0rViKIy4C46sXuisySTud40HFsMGE1e0/edit#gid=311929329), el enlace generalmente está compartido en el canal de desarrolladores de Discord antes de la reunión de sprint. Puede encontrar la hoja de sprint y actualizar las siguientes celdas:

<img alt='resource planning spreadsheet' src={useBaseUrl('img/content/resourcePlanningAllDevs.png')} />

Ayuda a los Directores de Producto (PM) a planificar mejor los recursos y saber si pueden alcanzar el hito en cada sprint o no. Si no pudo encontrar tiempo para completar la hoja de cálculo, es posible que se le pida que lo haga durante la reunión o cada vez que pueda tener un presupuesto, simplemente envíelo por mensaje privado a los mensajes privados o colóquelo en el canal de desarrollo.

La planificación de sprint habitual es así:

1. Los PM traen los problemas (preferiblemente Historias de usuarios) a la reunión de planificación, descríben el problema y asegúrese de que esté claro para que el equipo comience a implementarlo.
2. PM facilita las conversaciones entre desarrolladores para dejarlo lo más claro posible.
3. PM solicita estimaciones en Story Points (Story Points son la unidad de esfuerzo mínimo gastado en un producto que se puede entregar lo antes posible, como una simple corrección de errores, por ejemplo, podría tomar la mitad de un día laboral).
4. PM comienza a construir "Sprint Backlog" priorizando los problemas y se asegura de que la cantidad total de Story Points sea proporcional a la capacidad total de los equipos y colaboradores.
5. Todos están de acuerdo con el plan de sprint y se comprometen con la meta esperada.


## Contactos Importantes

- Administrador del grupo de desarrolladores - Amin
    - Discord de Contacto: `Amin#2164`
- Director de producción de GIVeconomy - Lauren
    - Discord de Contacto: `karmaticacid#1218`
- Director de Producción de Giveth TRACE, Giveth.io - MoeNick
    - Discord de Contacto: `MoeNick#1374`
- Desarrollador Principal Giveth.io - Mateo
    - Discord de Contacto: `mateodaza#3156`
- DevOps & Security - Kay
    - Discord de Contacto: `geleeroyale#3228`
- Diseñador Principal - Marko
    - Discord de Contacto: `markop#2007`

## Guías de Instalación para el Desarrollo Local

- [Giveth.io](./givethioinstallation)
- [Giveth TRACE](./TRACEinstallation)
- [GIVeconomy](./installGIVeconomy)

## Directrices de prueba

- [Giveth.io](./testing-guidelines)
- [GIVeconomy](./testingGIVeconomy)

## Herramientas que usamos

- [Segment](https://segment.com/) (Giveth TRACE, Giveth.io)
- [Sentry](https://sentry.io/welcome/) (Giveth TRACE, Giveth.io)
- [Infura](https://infura.io/) (Giveth TRACE, Giveth.io)
- [Autopilot](https://journeys.autopilotapp.com/features/email-marketing-software) (Giveth.io)
- [Amplitude](https://www.amplitude.com/) (Giveth TRACE, Giveth.io)
- [Docusaurus](https://docusaurus.io/) (Documentation)
- [The Graph](https://thegraph.com/en/) (GIVeconomy)
- [Netlify](https://www.netlify.com/) (Giveth TRACE)
- [Vercel](https://vercel.com/dashboard) (Giveth.io, GIVeconomy)
- [Cryptocompare](https://www.cryptocompare.com/) (Giveth TRACE)
- [Coingecko](https://www.coingecko.com/en/api) (All Products)
- [Github Actions](https://github.com/features/actions) (All Products)
- [MongoDB](https://www.mongodb.com/) (Giveth TRACE)
- [PostgreSQL](https://www.postgresql.org/) (Giveth.io)
- [Redis](https://redis.io/) (Giveth TRACE, Giveth.io)
- [Elastic Search](https://www.elastic.co/elasticsearch/) (Giveth TRACE)
- [Kibana](https://www.elastic.co/kibana/) (Giveth TRACE)
- [Pinata](https://www.pinata.cloud/) (Giveth.io, GIVeconomy)
- [Transak](https://transak.com/) (Giveth.io)
- [AdminBro](https://v2.adminbro.com/index.html) (Giveth.io)
