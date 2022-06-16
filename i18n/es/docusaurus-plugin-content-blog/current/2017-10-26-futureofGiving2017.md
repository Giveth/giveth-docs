---
slug: futureOfGiving2017
title: ¿Cuál es el futuro de dar?
author: Kris
author_image_url: /img/krisAuthor.jpeg
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../../../../src/css/custom.css'


Una descripción general de la solicitud de donación de Giveth
==============================================

_Editar: para el estado actual del desarrollo, actualizaciones más recientes_ [_aquí_](https://medium.com/giveth/tagged/dappening)

Si alguna vez hablaste con un [Unicornio](https://medium.com/giveth/giveth-introduces-decentralized-altruistic-communities-dacs-d1155a79bdc4) de Giveth es muy probable que no te dejáramos ir antes de que entendieras qué es Giveth y todo sobre giveth : somos un grupo apasionado. Si no has conocido a gente como [Griff Green](https://medium.com/@thegrifft), [Jordi Baylina](https://github.com/jbaylina), [Grace Torrellas](https://twitter.com/GraceTorrellas), [Vojtech Simetka](https://github.com/vojtechsimetka) y los [muchos otros grandes rostros](https://wiki.giveth.io/dac/team-organisation/) que contribuyen a la plataforma Giveth, es posible que se pregunte **qué es exactamente lo que estamos construyendo y por qué.**

En pocas palabras: queremos que el **proceso de donación a las causas en las que cree sea efectivo y transparente**, y estamos utilizando la tecnología blockchain para hacerlo. En [octubre de 2016](https://medium.com/giveth/the-minime-token-open-sourced-by-giveth-2710c0210787), el equipo comenzó a desarrollar la DApp (aplicación de donación) y ahora [se está acercando](https://wiki.giveth.io/dapp) al lanzamiento de su Producto Mínimo Viable (MVP). En preparación para esto, nos gustaría tomarnos un momento para explicar por qué estamos creando la plataforma y brindarle un adelanto del flujo de usuarios.

**¿Espera pero por qué?**

Si alguna vez ha donado a organizaciones benéficas o sin fines de lucro, es muy probable que su experiencia haya sido similar a esta: en su camino al metro lo detuvo un joven convincente que obtuvo su nombre, dirección postal y firma para una donación mensual fija a una causa específica. Desde ese momento, algunas veces al año, si tienes suerte, recibes un boletín de la vieja escuela que tiras sin leer. **No sabes adónde fue tu donación** y la organización sin fines de lucro recibe un monto mensual hasta que decidas cancelar.


Da cambios a todo esto. Como todas las donaciones se registran en la cadena de bloques de Ethereum, puede seguir, en tiempo real, quién recibe sus donaciones y por qué a un nivel muy granular.

La plataforma Giveth tiene una estructura de incentivos simple basada en resultados: cuando se recolectan los fondos, se almacenan en nuestra [Vault](https://medium.com/giveth/the-vault-contract-open-sourced-by-giveth-fe2261f7b91b ) y solo después de completar los hitos, se pueden retirar los fondos. Los fondos del Donante están bajo su control hasta que sus donaciones estén bloqueadas para un propósito específico.

Esta estructura básica les da una visión clara de las distintas personas involucradas en el proceso y la posibilidad de contactar a todos directamente. Y si no les gusta para qué se destinan sus fondos, tienen tiempo para bloquear su uso.

Estamos construyendo el **Futuro de las donaciones eliminando la burocracia** para que los fondos se puedan gastar de manera más eficiente y todos puedan colaborar para hacer del mundo un lugar mejor.

**Predicar con el ejemplo**

Estamos rediseñando cómo se hacen las donaciones y, con ello, tuvimos que reinventar el [lenguaje](http://wiki.giveth.io/dapp/product-definition) para hablar de ello. Los 3 bloques de construcción clave del sistema Giveth son Comunidades (DAC), Campañas e Hitos. Un **DAC**, abreviatura de Comunidad Altruista Descentralizada, es el grupo de personas unidas en torno a una causa que quieren apoyar. Este DAC financiará y dirigirá múltiples **campañas**, que a su vez también pueden ser respaldadas por más de un DAC. Una Campaña traduce los sueños de un DAC en una agenda más específica a la que se vinculan los puntos de acción: los llamamos **Hitos**. Los hitos son la entidad más pequeña dentro del sistema Giveth y son el último paso en nuestro flujo de donaciones. Una vez completados, los fondos se liberan para reembolsar y recompensar a las buenas personas por su buen trabajo.

<img alt="Bloques de construcción de Giveth" src={useBaseUrl('img/blog/buildingBlocksGiveth.png')} />

##### Los 3 pilares fundamentales de Giveth son las comunidades (DAC), las campañas y los hitos.

Nos enfocamos en la tecnología para que las personas puedan concentrarse por completo en unirse en torno a causas. Para hacerlo, necesitamos definir **algunos de los roles básicos** en nuestro sistema.

Un **Donante** puede donar directamente a una Campaña en la que cree, o puede decidir comprometer fondos a un DAC que asignará estos fondos a Campañas apropiadas en nombre del Donante; llamamos a este proceso [Liquid pledge](https://medium.com/giveth/liquid-democracy-what-that-bd3c63e8df52). Al donar, el Donante se convierte automáticamente en parte del DAC y se conecta con el resto de la comunidad.

Los **Delegados** son miembros registrados del DAC que asumen la tarea de asignar los fondos enviados a su DAC a una o más Campañas.

Los **Creadores** son todas las personas dentro de estas campañas que hacen el cambio que los DAC quieren ver en el mundo. Hay algunos roles específicos que los Makers deben cumplir.

* Los **Administradores de campañas** son los creadores que crean campañas, asignan fondos a hitos específicos y se aseguran de que su campaña específica sea un éxito.
* Los **Administradores de hitos** son los creadores a cargo de hitos específicos y necesitan asegurarse de que estas acciones específicas se logren como se describe.
* Los **Destinatarios** son los Creadores que reciben los fondos cuando se completa con éxito un Hito.

<img alt="Otorgar roles" src={useBaseUrl('img/blog/givingBlogRoles1.png')} />

##### Roles principales dentro de la Plataforma Giveth: Donante, Delegado, Gerente de Campaña, Gerente de Hitos, Destinatario.

Se han creado dos roles adicionales para **garantizar el uso correcto de los fondos**.

* El **Revisor de campañas** puede rechazar la finalización de cualquier Hito y puede, como medida de seguridad sólida, incluso cancelar una Campaña completa si parece ser fraudulenta.
* El rol del **Milestone Review** es confirmar que el Milestone Manager realmente logró la meta o acción propuesta descrita en el Milestone.

Esto nos lleva al **verdadero poder** de la plataforma Giveth: en todo momento el Donante sabe exactamente qué está pasando con los fondos donados, cómo se gastan y tiene el control total a través de una **transparente red de responsabilidades* *. Si se cancela un hito, los fondos se devuelven a la campaña. Si se cancela una Campaña, los fondos se devuelven automáticamente a los Delegados que la apoyaron. Si un Delegado renuncia, los fondos se devuelven al Donante. Además de esto, uno de los aspectos más revolucionarios de este sistema es que en cualquier momento hasta el momento en que los fondos se bloquean en una Campaña, el Donante puede decidir retirarlos.

<img alt="Otorgar roles adicionales" src={useBaseUrl('img/blog/givingBlogRoles2.png')} />

##### Dos funciones adicionales garantizan el uso correcto de los fondos: Revisor de campañas y Revisor de hitos.

Puede descubrir más sobre estos roles y responsabilidades leyendo [la definición del producto](https://wiki.giveth.io/dapp/product-definition/) en nuestro wiki.

**Recorrer el camino**

La aplicación de donación de Giveth está [ahora en etapa beta en testnet](https://wiki.giveth.io/dapp), con todas las funciones descritas anteriormente integradas y actualmente se está probando con un equipo selecto de voluntarios.

<iframe width="560" height="315" src="https://www.youtube.com/embed/gPXoEzuNQzc" title="Reproductor de video de YouTube" frameborder="0" allow="acelerómetro; reproducción automática; portapapeles- escribir; medios cifrados; giroscopio; imagen en imagen" allowfullscreen></iframe>

##### El cofundador de Giveth, Griff Green, explica de qué se trata la solicitud de donación de Giveth.

Siempre tenemos oportunidades para que los desarrolladores expertos contribuyan a nuestro proyecto, y usted puede [donar](https://wiki.giveth.io/dac/finances/) a \`revolution.eth\` para recompensar e incentivar a los desarrolladores que están haciendo realidad la plataforma Giveth. Únase a nuestro [Slack](http://slack.giveth.io) y descubra cómo puede contribuir.

Mientras tanto, seguiremos construyendo la plataforma y compartiremos en las próximas semanas y meses cómo funcionan los diferentes componentes. ¡Mantente sintonizado para más!

Un cordial saludo,

[Giveth](https://giveth.io/)

* Descubra nuestro [Sitio](http://giveth.io/) y [Wiki](https://wiki.giveth.io/)
* Bifurca nuestro código en [Github](http://github.com/Giveth/)
* Síguenos en [Medium](http://medium.com/giveth/), [Facebook](https://www.facebook.com/givethio), [Twitter](http://twitter.com/givethio ) y [Reddit](https://www.reddit.com/r/giveth/)

Ayúdanos a construir el futuro de las donaciones: 🤲🏼 [Dona directamente](http://donate.giveth.io/) 🤲🏼 o compra un Ledger con nuestro [enlace de afiliado](https://www.ledgerwallet.com/products /ledger-nano-s?utm_source=&utm_medium=afiliado&utm_campaign=d663). ⏎
