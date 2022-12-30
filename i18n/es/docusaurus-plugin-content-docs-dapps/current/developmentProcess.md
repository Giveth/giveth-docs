---
id: developmentProcess
title: Proceso de Desarrollo
slug: dapps/developmentProcess
---
import TraceDeprecated from './_traceDeprecatedES.mdx'

<TraceDeprecated />

*Esta sección detalla el proceso de desarrollo de Giveth TRACE, las implementaciones y cómo se manejan las fusiones y las pruebas.*

## Planificación del desarrollo, Sprints y dónde involucrarse.
Ejecutamos un ciclo de sprint de 2 semanas con reuniones semanales de desarrolladores para planificar sprints y evaluar el progreso. Puede pagar cuando el próximo esté en nuestro [Google Calendar](https://calendar.google.com/calendar/embed?src=givethdotio%40gmail.com) y también puede comunicarse con [Giveth Discord]( https://discord.gg/XhN7eGmcCK) a `@moenick` el gerente del proyecto Giveth TRACE. Puede encontrar el [repositorio Giveth TRACE actual en Github](https://github.com/Giveth/giveth-dapp).

## Implementacíon y Organización de Branchs
Giveth TRACE ha pasado del desarrollo pasivo al activo para el lanzamiento posterior a la beta próximamente. Actualmente se utilizan dos implementaciones para el proceso de desarrollo.

Nombre | Blockchain | Branch desplegada | Implementación automática | Uso |
-----|------------|-----------------|------------- |-----|
[beta](https://trace.giveth.io) | Mainnter/Rinkeby | master | no | Implementación en puente; Rinkeby para interacciones de contratos internos, Mainnet para enviar y recibir fondos reales.
[develop](https://develop.giveth.io) | Ropsten Test Network | develop | si | Entorno de desarrollo para integrar y probar nuevas funcionalidades. Las ramificaciones de funciones y solicitudes de incorporación de cambios se implementan en este entorno.

Las dos ramas siguientes se utilizan en el gitflow.

Nombre | Descripción |
-----|------------|
master | La rama maestra solo rastrea el código liberado. Los compromisos se realizan para dominar a mediados de cada mes para no interferir con los procesos de pago que ocurren cerca del final y el comienzo de estos meses.
develop | Las implementaciones realizadas para desarrollar provienen de compilaciones locales e incluyen nuevas funciones y correcciones de errores.

## Uso de tableros Zenhub
Actualmente, usamos la extensión Zenhub Boards para Github para realizar un seguimiento del progreso de las funciones y las correcciones. Puede obtener la [extensión de Zenhub aquí](https://www.zenhub.com/extension).

El flujo de problemas de Github actual es el siguiente:

Nombre | Uso |
-----|------------|
New Issues | Cree un nuevo problema para una nueva solicitud de función o para informar un error. Etiqueta a un desarrollador o `@moenick` para asegurarte de que se note. Use etiquetas para agregar contexto a su problema.
icebox | Características e ideas a considerar para el desarrollo futuro, que el equipo de Giveth evaluará solo cuando el ancho de banda del desarrollador lo permita.
Product Backlog| Cuestiones que necesitan ser tratadas o aprobadas nuevas funcionalidades para su desarrollo. Estos se pondrán en cola en el siguiente sprint progresivamente.
Epics | Grandes tareas que se han dividido en problemas más pequeños.
 Needs Clarification | Problemas que requieren más aclaraciones por parte del creador del problema para poder avanzar.
Sprint Backlog | Problemas en los que se está trabajando en el sprint actual.
Bugs & Ops | Tareas urgentes que necesitan ser priorizadas. El ancho de banda se reserva en el cronograma de sprint para que los desarrolladores aborden cualquier problema aquí.
In Progress | Problemas que ha detectado un desarrollador para el sprint actual.
Code Review | Los desarrolladores deben revisar el código al que se hace referencia en estos problemas para garantizar la calidad y solucionar posibles problemas antes de pasar a las pruebas de usuario.
UAT (Pruebas de Aceptación del Usuario) | Funciones o correcciones listas para ser probadas por el usuario.
Ready | Incidencias listas para fusionarse con `master` de acuerdo con el ciclo de confirmación. |


### Hacer un Pull request (PR)
Antes de realizar un nuevo Pull request, asegúrese de que su código no tenga problemas de linter y se pueda implementar. Solo se fusionarán los PR que se implementen correctamente y no tengan ningún conflicto de fusión. También puede verificar fácilmente la vista previa de implementación en la integración de implementación automática de Github Netlify.
![Integración de Autodeploy](https://d33wubrfki0l68.cloudfront.net/cfa6124f4e0bf556de850f40e97c6b4cc66231f9/d42f0/images/product-development/deploy-preview.png)
**Vista previa de implementación.** Cada solicitud de **PR** al repositorio de DApp tiene una vista previa de implementación de Netlify. Puede acceder a ella en la parte inferior de la pestaña Conversación después de hacer clic en el botón **Mostrar todas las comprobaciones** y **Detalles**.

## Pruebas de integración
El **equipo de desarrollo** realiza la integración de nuevas funciones después de una reunión de desarrollo de DApp donde se revisan las relaciones públicas. Una vez que se revisan y corrigen los PR, se fusionan con la rama de desarrollo. Las pruebas de las nuevas funciones se realizan en el entorno [`develop`](https://develop.giveth.io) para garantizar que las funciones hagan lo que dicen y funcionen bien con el resto de la DApp.

## Pruebas de control de calidad
Después de que las nuevas funciones se integren y se prueben en el entorno [`develop`](https://develop.giveth.io), los desarrolladores harán ping a los evaluadores con solicitudes o actualizaciones en el [Canal de desarrollo de Giveth TRACE](https://discord .gg/79uUbyVCtE) en Discord. Las pruebas no deben ser realizadas por desarrolladores y están abiertas a cualquiera que desee contribuir.

## Implementación de producción
Solo una vez que se eliminan todos los errores recién introducidos en la rama "desarrollar", se pueden fusionar para dominar y pasar a producción. Lo hace manualmente el equipo de desarrollo de DApp (por `@aminlatifi` y `@MohammadPCh`).

**Para implementar la versión más reciente de Feathers-Giveth**
```
$ ssh usuario@feathers.alpha.giveth.io

$ cd /home/deploy/feathers-giveth/
$ sudo -u deploy bash

$ git pull

$ yarn install --pure-lockfile
$ yarn serve
```

A continuación, compruebe el estado de despliegue de las feathers.
```
$ pm2 logs
```

Si los registros están limpios, el último paso es implementar la última confirmación de rama maestra en [Netlify](http://netlify.com/) y bloquear la implementación.

## Documentación de servicios web back-end
Si es un colaborador nuevo y desea documentación técnica más detallada sobre todos los servicios web aprovechados desde el back-end (feathers-giveth) hasta el front-end (giveth-dapp), consulte nuestras páginas en **Swagger* * para implementaciones de producción y ensayo:

[Producción de feathers-giveth](https://feathers.beta.giveth.io/docs/?url=/docs#/)
[feathers-giveth Staging](https://feathers.develop.giveth.io/docs)


## PREGUNTAS MÁS FRECUENTES

 **¿Cuál es la definición de una función?**

Una función es cualquier mejora no trivial (menos de 10 líneas de código). La mayoría de las funciones tienen problemas en el repositorio de Github correspondiente.

 **¿Qué pasa con las correcciones?**

 Las grandes correcciones no críticas se tratan como cualquier otra función. Si una corrección es crítica en el tiempo, se crea como una nueva rama con el prefijo `hotfix/` como un fork de la rama `master`. Dicha revisión se prueba como mínimo por 2 personas del equipo de desarrollo antes de fusionarse con las ramas "master" y "develop".

 **¿Dónde comunicamos lo que necesita pruebas?**

La prueba de control de calidad se anuncia en el canal `Giveth-1 Dev` en [Discord](https://discord.gg/79uUbyVCtE).

**¿Cómo priorizamos cuando fallan las pruebas/correcciones de errores?**

Las correcciones de errores se realizan ad-hoc tan pronto como se descubren durante el proceso de prueba. Los errores pueden ser abordados por el equipo de desarrollo de DApp o se puede pedir ayuda a colaboradores externos. La corrección de errores tiene prioridad sobre el nuevo desarrollo.

**¿Quién realiza las implementaciones y cómo se implementan?**

La rama `develop` se implementa automáticamente en su entorno. La rama `master` es implementada por el equipo de desarrollo (`@aminlatifi`, `@RamRamez` y `@MohammadPCh`) una vez que no hay nuevos errores conocidos en la rama `develop`. El proceso es manual y existe un procedimiento de despliegue.

**¿Cuál es la frecuencia del ciclo de lanzamiento?**

 Hay un nuevo lanzamiento cada 2 semanas, como se muestra en el [product development cycle gant chart.](#product-development-cycle-gant-chart.).