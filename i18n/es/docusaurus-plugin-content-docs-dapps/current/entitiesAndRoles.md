---
id: entitiesAndRoles
title: Entidades y roles de Giveth
slug: dapps/entitiesAndRoles
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../../../../src/css/custom.css'
import TraceDeprecated from './_traceDeprecatedES.mdx'

<TraceDeprecated />

*El contenido y las ideas se modificaron a partir de este excelente artículo [“Una descripción general de la solicitud de donación de Giveth”](https://medium.com/giveth/what-is-the-future-of-giving-d50446b0a0e4) escrito por Kris Decoodt en 2017. Se han revisado y modificado muchas cosas desde 2017. Aquí desglosamos la DApp tal como está en 2022.*

Este documento explica cómo se pueden realizar diferentes interacciones dentro de Giveth DApp. El objetivo es proporcionar un esquema claro de las entidades y roles dentro de Giveth TRACE DApp. Este documento ha sido diseñado para varias audiencias y casos de uso de la siguiente manera:
* **Los desarrolladores:** pueden usar este documento como parte de los requisitos del sistema.
* **Los Testers:** pueden usar este documento para comprender cómo debería funcionar la DApp para determinar qué comportamiento es incorrecto y se debe informar como un error. Este documento no es un caso de prueba formal en SDLC (oftware Development Life Cycle), pero aún puede usarse como guía.
* **El equipo de soporte:** puede usar este documento como referencia para ayudar a los nuevos usuarios que experimentan dificultades con la DApp.
* **El usuario final:** puede usar este documento para comprender mejor cómo funciona la DApp. Sin embargo, se recomienda un conocimiento básico de Blockchain, Ethereum y Giveth.

## Funciones
Tenemos ocho roles en Giveth TRACE. En esta sección explicamos en profundidad cada rol, su función, cómo convertirse en uno y el poder que tiene cada rol.
1. <a href="#giver"><strong>Giver</strong></a>
2. <a href="#communityManager"><strong>Administrador de la comunidad</strong></a>
3. <a href="#campaignManager"><strong>Administrador de campañas</strong></a>
4. <a href="#campaignReviewer"><strong>Revisor de campañas</strong></a>
5. <a href="#traceManager"><strong>Administrador de trace</strong></a>
6. <a href="#traceReviewer"><strong>Revisor de trace</strong></a>
7. <a href="#recipient"><strong>Destinatario</strong></a>
8. <a href="#websiteUser"><strong>Usuario del sitio web</strong></a>

### Usuario del sitio web
Esto se refiere a cualquier persona que visite nuestro sitio web. Sin registrarse como usuario en Rinkeby, no pueden interactuar con ninguna entidad de Giveth ni hacer donaciones en Giveth TRACE.
#### Cómo convertirse en un usuario del sitio web
* Cualquier persona con la dirección del sitio web de Giveth TRACE puede convertirse en Usuario.
#### Poder de un usuario del sitio web
* Navegar a través de Comunidades, Campañas y traces.
* Registrar un perfil.
* Editar su perfil.
* Ver el perfil de otra persona.
* Suscríbete a una Comunidad, Campaña o trace.

***Nota:** La mayoría de las acciones del sitio requieren autenticación a través de una billetera web Ethereum; Actualmente, Giveth TRACE solo es compatible con MetaMask.*

### <a name="Giver">Giver</a>
El término giver describe a cualquiera que use nuestra plataforma para hacer donaciones a una Comunidad, Campaña o trace. Los givers pueden interactuar con las 3 entidades, pero no son explícitamente parte de ninguna a menos que elijan unirse a una comunidad o asumir otro rol también.
#### Cómo convertirse en un Giver
* Cualquier persona con una billetera Ethereum puede donar a una Comunidad, Campaña o trace en la DApp y convertirse en giver.
#### El poder de un Giver
* Aceptar o rechazar una delegación retrasada de una Comunidad o Campaña.

***Nota:** Los givers pueden vetar o "rechazar" una Delegación propuesta dentro de los 3 días posteriores a la propuesta de delegación. Esto se denomina "retraso" de la delegación. Después de 3 días, la DApp aceptará automáticamente la delegación retrasada.*

### <a name="communityManager">Administrador de la comunidad (anteriormente Delegado)</a> 
Un Administrador de la Comunidad es el usuario registrado que posee una Comunidad. Pueden delegar los fondos donados a sus Comunidades. Una delegación es un proceso, donde la donación comprometida a una Comunidad se transfiere a una Campaña o Trace. Una vez delegada, el giver tiene 3 días para rechazar (o aprobar) la delegación. Después de ese tiempo, el dinero se aprueba automáticamente y se bloquea en la Campaña o Trace a la que se delegó el dinero.
#### Cómo convertirse en un administrador de la comunidad
* Un usuario puede crear una comunidad y convertirse en el administrador de la comunidad después de que un administrador de DApp lo incluya en la lista blanca.
#### Poder de un Administrador de comunidad 
* Editar el nombre, la descripción, la imagen y el enlace de su Comunidad.
* Entregar fondos comunitarios (a través de delegación diferida) a Campañas y Traces.

***Nota:** Para iniciar una delegación retrasada, el administrador de la comunidad debe ir a la página Rastreos o Campaña y hacer clic en el botón "Delegar fondos".*

### <a name="campaignManager">Administrador de campañas</a>
Los administradores de campaña son usuarios de Giveth.io que han optado por hacer que su proyecto sea rastreable y han pasado el proceso de verificación del proyecto. El rol del administrador de campaña es crear Traces a través de los cuales puedan financiar el trabajo de las personas y el costo de los recursos detrás del proyecto.

#### Cómo convertirse en un administrador de campaña
* Verificar su proyecto Giveth.io y solicitar ser rastreable, actualizar a una Campaña en TRACE y convertirse en el Gerente de Campaña de dicha Campaña.
#### El poder de un administrador de campañas
* Editar su Campaña.
* Enviar fondos de campaña (a través de delegación) a Traces dentro de su campaña.
* Rechazar o aceptar Traces propuestos para su Campaña.
* Crear o editar Traces en su propia Campaña.
***Nota:** Un Trace debe pertenecer a al menos una campaña y debe ser aprobado por el administrador de la campaña.*

### <a name="campaignReviewer">Revisor de campañas</a>
Debido a que las donaciones a una campaña están bloqueadas, la función de revisor de campaña es fundamental para revisar y realizar un seguimiento del progreso de la campaña. Los revisores de campaña tienen la responsabilidad de verificar la legitimidad de una campaña y sus traces. También tienen un poder considerable dentro de una Campaña.
#### Cómo convertirse en revisor de campañas
* Un administrador de campaña puede asignar a un usuario para que se convierta en revisor de campaña.
#### El poder de un revisor de campañas
* Rechazar o aprobar traces Completados.
* Cancelar traces dentro de su Campaña.
* Cancelar una Campaña.

### <a name="traceManager">Administrador de trace (anteriormente Administrador de hitos)</a> 
Los traces son la base del sistema Giveth. Cualquier usuario registrado puede proponer un Trace a una Campaña. Sin embargo, un Gerente de Campaña o Revisor de Campaña debe aprobar el trace propuesto a su Campaña para que sea válido. Los traces pueden representar varios tipos de solicitudes de financiación. Más información sobre <a href="#traceTypes">tipos de Traces</a> se detalla más adelante en este documento.
#### Cómo convertirse en administrador de traces
* Un usuario puede proponer un Trace a la campaña y convertirse en el Administrador de Trace.
#### El poder de un administrador de trace
* Editar su trace.
* En el caso de crear una recompensa o un Hito, un Administrador de trace puede establecer un Revisor de trace.
* Marcar un Trace como completo.

***Nota**: Un trace ya no se puede editar una vez que ha recibido una delegación o donación.*
### <a name="traceReviewer">Revisor de trace</a>
* Un revisor de trace puede ser asignado por un administrador de trace.
#### El poder de un revisor de trace
* Rechazar o aprobar un Trace completado.
* Cancelar un trace.

***Nota:** En el caso de que se cancele un Trace, la moneda vuelve a la fuente, es decir, al giver para una donación o a la Comunidad/Campaña para una delegación.*

### <a name="recipient">Destinatario</a>
Un Destinatario es un usuario registrado que recibirá el pago de su trace completado con éxito. En la mayoría de los casos, el Destinatario también es el Administrador de trace, ya que es el que trabaja en el trace. Sin embargo, en algunos casos, el destinatario está separado, como en el caso de pagos a un proveedor o un hito para una campaña.
#### Cómo convertirse en un Destinatario
* Un Destinatario puede ser designado por un Administrador de trace; puede ser el administrador de trace u otro usuario.
#### Poder de un Destinatario
* Marcar un Trace como completo.
* Solicitar el pago de los fondos de Trace.

***Nota:** En el caso de que Trace tenga un Revisor, la recaudación de fondos necesita la aprobación del Revisor.*
#### Latencia
Algunas acciones deben registrarse en la red blockchain de Ethereum. Agregar transacciones a la cadena de bloques no ocurre de inmediato, por lo que observamos una latencia en algunas acciones. Esta latencia depende de las condiciones de la red, por ejemplo, el tráfico en la red.
#### Localidad de roles
Todos los roles tienen un alcance limitado y una vez que una entidad deja de existir, también lo hacen los roles conectados. Cada Comunidad contiene exactamente un Administrador. Cada campaña tiene un administrador de campaña y un revisor de campaña. Cada trace tiene un administrador de trace, un destinatario y, potencialmente, un revisor. El giver no está asociado explícitamente con ninguna entidad, pero puede interactuar con todas ellas.

<img alt="Relations between Communities, Campaigns and Traces" src={useBaseUrl('img/content/trace/role-locality.svg')} />

### Flujo de divisas
Giveth TRACE a nivel técnico es un sistema de gestión de divisas. Los términos que se refieren al movimiento de fondos dentro del sistema Giveth se definen a continuación:

* **Donación:** Cuando un giver envía fondos de su billetera a un trace, Campaña o Comunidad.
* **Recaudación:** Cuando el Destinatario envía o "recauda" fondos de un Trace a su billetera.
* **Desembolso:** Cuando un administrador de Trace envía fondos desde una cuenta de Trace a la billetera del Destinatario.
* **Delegación:** Cuando un administrador de campaña o un administrador de la comunidad envía dinero desde la cuenta de la campaña o comunidad a la cuenta de trace en nombre del giver original. Un giver puede rechazar la Delegación dentro de las 72 horas, después de lo cual la transferencia de Divisas se vuelve irreversible.
* **Reembolso:** Un giver que haya contribuido a una Comunidad puede retirar sus fondos siempre que no esté comprometido con una Campaña o trace. Un giver que contribuya a una campaña puede retirar sus fondos siempre que no esté comprometido con un trace.

<img alt="Currency Flow on Giveth TRACE" src={useBaseUrl('img/content/trace/currencyFlow.svg')} />

###### Flujo de divisas en Giveth TRACE

## Entidades
Giveth TRACE, a nivel técnico, es un sistema de gestión de divisas. Las entidades de la DApp son cuentas en las que las personas pueden depositar, transferir o retirar divisas. Tenemos tres entidades en Giveth TRACE, <a href="#communities">**Comunidades**</a>, <a href="#campaigns">**Campañas**</a> y <a href= "#traces">**Traces**</a>. La relación entre ellos se define en el siguiente cuadro. Cada entidad corresponde a uno o más contratos inteligentes.

***Nota:** En el primer trimestre de 2021, el equipo de Giveth cambió el nombre de las entidades **DAC** (Comunidades altruistas descentralizadas) a simplemente **Comunidades**, y **Hitos** a **Rastros**.*

<img alt="Relationship between The DApp's Entities" src={useBaseUrl('img/content/trace/relations.svg')} />

 ##### Relación entre las Entidades de la DApp

### <a name="Communities">Comunidades</a>

Las comunidades, **anteriormente conocidas como DAC**, son la entidad más general en el Sistema Giveth. El propósito de una Comunidad es unir givers en torno a una causa y brindarles la posibilidad de donar dinero a una causa sin tener que hacer la investigación necesaria para encontrar la Campaña exacta a la que contribuir. El giver puede recuperar cualquier dinero donado a una comunidad, sin embargo, desaconsejamos encarecidamente a los giver que lo hagan. Los fondos permanecen en la Comunidad hasta que son delegados a una Campaña o un Trace, o retirados por el giver. **Los Adminitradores de comunidad** pueden respaldar cualquier Campaña o trace enviando dinero a la cuenta del destinatario.

<img alt="Community to Campaign delegation state diagram" src={useBaseUrl('img/content/trace/dac-campaign-donation-statediagram.svg')} />

##### **Diagrama de estado para Comunidad -> Flujo de delegación de campaña**, que muestra cómo las donaciones realizadas a un DAC se delegan a una Campaña.

<img alt="Community to Trace delegation state diagram" src={useBaseUrl('img/content/trace/dac-milestone-donation-statediagram.svg')} />

##### **Diagrama de estado para Comunidad -> Flujo de delegación de trace**, que muestra cómo las donaciones realizadas a una Comunidad se delegan directamente a un trace.

### <a name="Campaigns">Campañas</a>
Las campañas están en el centro del sistema de donaciones de Giveth. Son herramientas efectivas para dirigir el dinero hacia las entidades más pequeñas, Traces. Una Campaña puede ser apoyada por más de una Comunidad o por ninguna Comunidad. Los copropietarios de la campaña solo pueden aceptar o rechazar los traces propuestos. **Los revisores de campaña** pueden cancelar la campaña si es mala o ya no está activa.

Las donaciones realizadas a una campaña están bloqueadas y, a menos que se cancele la campaña, el giver ya no tiene control sobre la donación. La razón por la que bloqueamos las donaciones es para darles a las personas detrás de la Campaña cierto nivel de certeza de que pueden contar con recibir las donaciones prometidas y comprometerlas con uno de sus Traces.

<img alt="Campaign Donation state diagram" src={useBaseUrl('img/content/trace/campaign-donation-statediagram.svg')} />

##### **Diagrama de estado de las donaciones realizadas a Campaign.**


### <a name="traces">Traces</a>
Los principales componentes básicos de DApp son Traces, **anteriormente conocidos como Milestones**. Un Trace es la única forma en que los fondos pueden salir del sistema Giveth. Los traces deben crearse dentro de una campaña. En comparación con una comunidad o una campaña, los traces son más complejos porque pueden interactuar más roles con ellos.

### <a name="traceTypes">Entidades de Traces</a>
Para adaptar Traces para satisfacer las necesidades específicas de las comunidades y las campañas, se pueden aplicar ciertas reglas.

 * **Traces limitadas:** Se establece la moneda máxima que se le puede dar a la Traza. Este máximo se llama límite máximo.
* **Traces con revisor:** Los fondos no se pueden cobrar ni desembolsar de este Trace sin la confirmación de un revisor de trace asignado.
* **Especifique la moneda recibida:** El creador del trace puede especificar en cuál de las criptomonedas incluidas en la lista blanca le gustaría recibir sus fondos.

Según estas reglas, podemos tener *cuatro* tipos de Traces con sus propias propiedades distintas: **Hitos, Recompensas, Gastos** y **Pagos**.


### **Hitos**
**Objetivos o eventos importantes para una Campaña. Todos los fondos recaudados en Hitos se destinan a la Campaña de la que forma parte.**

*El ciclo de vida de los hitos en la DApp es el siguiente:*

<img alt="Lifecycle of Milestones" src={useBaseUrl('img/content/trace/milestone.png')} />

### **Recompensas**
**Si una Campaña o Comunidad necesita subcontratar trabajo para realizar, pueden usar una Recompensa para compensar a los contribuyentes por completar tareas específicas.**

*El ciclo de vida de las recompensas es el siguiente:*

<img alt="Lifecycle of Bounties" src={useBaseUrl('img/content/trace/Bounty.png')} />


### **Gastos**
**Si hay gastos recurrentes o singulares que fueron pagados por una campaña o un miembro de la comunidad, este Trace puede rastrearlos y reembolsarlos.**

*El ciclo de vida de los gastos es el siguiente:*

<img alt="Lifecycle of Expenses" src={useBaseUrl('img/content/trace/Expense.png')} />

### **Pagos**
**Los pagos son una compensación a los miembros de la Campaña por el trabajo que han realizado. Los pagos pueden ser ilimitados o limitados por la financiación que pueden recibir.**

 *El ciclo de vida de los pagos SIN límite es el siguiente:*

 <img alt="Lifecycle of Payments without Cap" src={useBaseUrl('img/content/trace/paymentNoCap.png')} />


El desglose de sus funciones se puede resumir en el siguiente cuadro:


| Tipo de trace | La financiación está limitada | Especifique la moneda recibida | puede asignar revisor | Moneda Destino |
| --------------- | ------ | --- | ------------- | -------------------- |
| Hito | No | No | Sí | Campaña |
| Recompensa | No | No | Sí | Cualquier dirección |
| Gasto | Sí | Sí | No | Cualquier dirección |
| Pago SIN tope | No | Sí | No | Cualquier dirección |
| Pago con Cap | Sí | Sí | No | Cualquier dirección |

### Notas:
* *En codificación, las Entidades se denominan `proyectos`.*
* *Cuando el dinero pasa de una Comunidad a un trace o Campaña, Giveth conecta a la Comunidad con esa Campaña o trace. Esto significa que verá esa campaña o trace representado en la página de la comunidad.*
* *Si se cancela un trace/Campaña/Comunidad, los fondos se devuelven al contribuyente de origen automáticamente.*
* *La moneda que va a una comunidad es un compromiso flexible: en cualquier momento hasta el momento en que los fondos se bloquean en una campaña/hito, el giver puede decidir retirarlos (reembolsarlos).*
* *La moneda que se destinó a una campaña/trace está totalmente comprometida, porque los administradores del trace y el administrador de campañas toman medidas en función de estos fondos.*