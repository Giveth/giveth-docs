---
id: givbacks
title: GIVbacks
slug: giveconomy/givbacks
---
import useBaseUrl from '@docusaurus/useBaseUrl';

GIVbacks es un concepto revolucionario que recompensa a los donantes de proyectos verificados con tokens GIV. Cuando dona a proyectos verificados durante una ronda de GIVbacks, se vuelve elegible para recibir recompensas GIV después de que finaliza la ronda y el GIV está listo para reclamar. Puede ver información en vivo, incluido el cronograma de rondas y su GIV reclamable, en la [página de GIVbacks](https://giveth.io/givbacks).

## Rondas de devolución
Las rondas de GIVback duran dos semanas. Por cada ronda, hay 1 millón de GIV disponibles para ser recompensados.

![](https://i.imgur.com/cBBSzJa.png)

Los donantes que donan a proyectos verificados dentro de una ronda activa son elegibles para recibir GIVbacks. Tenga en cuenta que las direcciones de los proyectos verificados no recibirán GIV por las donaciones realizadas a su propio proyecto u otros proyectos verificados.

![](https://i.imgur.com/aklPnKC.png)


## Verificación del proyecto
'Verificado' es un sello de aprobación para proyectos legítimos en Giveth. Muchos proyectos verificados vinieron previamente examinados de [The Giving Block](https://twitter.com/TheGivingBlock) API. The Giving Block es una organización que apoya e incorpora 501c3 registrados de los Estados Unidos en criptomonedas, y con nuestra integración, puede donar a sus proyectos desde la interfaz de usuario de Giveth.

Para los proyectos que no son de Giving Block, el proceso de verificación requiere que los proyectos proporcionen información adicional sobre su proyecto y el impacto previsto de la organización. Nuestro increíble equipo de verificación de proyectos luego revisa estas solicitudes, investiga la información proporcionada e informa a los propietarios del proyecto sobre el veredicto.

Para obtener más información sobre el proceso de verificación de proyectos, consulta nuestra **documentación**.

## Tokens elegibles para devoluciones

Un donante puede donar cualquier token ERC-20 a proyectos en Giveth.io en Gnosis Chain (anteriormente xDai Network) o Ethereum Mainnet. Sin embargo, solo las donaciones a Proyectos Verificados en ciertos tokens son elegibles para GIVbacks. Esta restricción garantiza que podamos obtener datos de precios precisos para las donaciones (un requisito para la distribución justa de GIVbacks) y evita que los malos actores jueguen con el programa GIVbacks. Para ver la lista completa de tokens elegibles, visite [esta publicación del foro](https://forum.giveth.io/t/givbacks-token-list/253).

## Obtener devoluciones
Durante cada ronda, se realiza un seguimiento de todas las donaciones a proyectos verificados en la DApp, y estos datos se utilizan para calcular la cantidad de GIVbacks recibidos por cada donante durante ese período.

Los donantes pueden reclamar su GIV después de que finaliza la ronda y se realiza una revisión de fraude. Los donantes recibirán un correo electrónico cuando las recompensas estén listas para reclamar en la [página de GIVbacks](https://giveth.io/givbacks). Una parte del GIV será líquido inmediatamente y el resto aumentará el caudal de su [GIVstream](https://giveth.io/givstream). Para saber más sobre GIVstream y su funcionamiento, consulta nuestra [documentación](/es/giveconomy/givstream/). A los efectos de esta documentación, nos referiremos a la suma del monto líquido y el monto asignado al GIVstream de GIVbacks como "GIVbacks acumulativos".

Tenga en cuenta que, incluso con el programa GIVbacks, una donación en Giveth sigue siendo una donación. El valor máximo de los 'GIVbacks' acumulados del donante es igual al 75% del valor de su donación, en el momento de la donación. Si el valor de "1 millón GIV" asignado a la ronda de GIVbacks es superior al 75 % del valor total de todas las donaciones (en el momento de cada donación) durante la duración de la ronda, todos los donantes elegibles obtendrán su respectivo máximo acumulativo. devoluciones.

Si el valor total de las donaciones (en el momento de cada donación) supera el 75 % del "1 millón de GIV" asignado a la ronda, los "GIVbacks acumulados" para cada donante son proporcionalmente menores y se calculan de la siguiente manera:

$$
n = N \frac{v}{V}
$$
 
donde:

- n = Cantidad acumulada total de tokens GIV ganados por el donante para una donación en particular
- N = Número total de tokens GIV asignados para distribución en la ronda (1 millón GIV)
- v = Valor (en USD) de la donación al momento
- V = Valor total (en USD) de todas las donaciones a proyectos elegibles durante la ronda

Los tokens GIV obtenidos a través del programa GIVbacks se pueden usar en toda la economía GIV: para la gobernanza dentro de [GIVgarden](https://giveth.io/givgarden), para respaldar el token proporcionando liquidez (¡y ganando recompensas!) en el [GIVfarm](https://giveth.io/givfarm), o por donar a proyectos en [Giveth](https://giveth.io/).

## Cosecha de devoluciones

Los GIVbacks están disponibles para ser recolectados después de que finaliza la ronda, los datos han sido revisados ​​y GIV se distribuye a las direcciones de donantes elegibles. Los donantes recibirán un correo electrónico cuando las recompensas de GIVbacks estén listas para reclamar; este GIV se puede recolectar [aquí](https://giveth.io/givbacks). Tenga en cuenta que cuando obtiene recompensas GIV de cualquier parte de la economía GIV, nuestro contrato de distribución de tokens le envía todo el GIV líquido asignado a su dirección en esa red. Por ejemplo, cuando recolecta recompensas GIV obtenidas al apostar tokens LP en GIVfarm en Gnosis Chain (anteriormente xDai Network), también recolecta recompensas asignadas a usted de GIVbacks (si corresponde) y la cantidad líquida de su GIVstream. Esto se desglosa en la ventana emergente de recolección que encuentra al reclamar:

![](https://i.imgur.com/GVpn68a.png)


---
## Factores de descalificación para el programa GIVbacks

Una vez que finaliza una ronda de GIVbacks, se otorga un período de tiempo a nuestro equipo para revisar los proyectos y donaciones marcados en busca de los siguientes factores de descalificación antes de que GIV se distribuya a los donantes. Un proyecto podría ver revocado su estado Verificado si se encuentra alguno de estos factores. A los donantes de proyectos que se encuentren con cualquiera de las siguientes actividades también se les puede negar GIVbacks para esa ronda.

1. **Dar/ofrecer bienes o servicios a los donantes a cambio de su donación.** El propietario de un proyecto no puede ofrecer bienes como patrocinio para una conferencia, compras de galletas de Girl Scouts o boletos para una cena, incluso si las ganancias se destinan a caridad. Los propietarios de proyectos no pueden proporcionar servicios como actuar como un intercambio criptográfico para sus donantes. Pueden explicar cómo usar un intercambio, pero no pueden convertir el dinero para sus donantes.
2. **Donaciones circulantes recaudadas por otros medios.** Solo las donaciones de "primer toque" cuentan para las devoluciones. Si un proyecto recibe fondos de un donante y se descubre que está circulando estas donaciones dentro de la plataforma Giveth para recibir GIVbacks, será descalificado. Por ejemplo, un proyecto no debería enviar donaciones fiduciarias recibidas en otros lugares a sus donantes y pedirles que donen en Giveth con criptografía.
3. **Los fondos no se están utilizando para lo que se expresa en la página del proyecto o en la solicitud de verificación enviada.** Los proyectos verificados son responsables de mantener sus proyectos actualizados con información sobre cómo se están utilizando los fondos. Si el proyecto establece explícitamente que, por ejemplo, están usando los fondos para desarrollar programas educativos pero se descubre que están usando los fondos para emplear a desarrolladores, pueden ser descalificados del programa GIVbacks.
4. **Actividad sin escrúpulos o fraudulenta.** Puede ser el uso de la violencia, infringir las leyes u otro comportamiento que no respete los [valores de la comunidad Giveth](/es/whatisgiveth/). Los proyectos que violen nuestros [Términos y condiciones](https://giveth.io/tos) no solo perderán su estado de verificación, sino que también serán cancelados.

El equipo de verificación de proyectos de Giveth es responsable de monitorear la actividad de GIVbacks y el sistema de verificación de proyectos y, en última instancia, usará su discreción para determinar si las acciones de un proyecto son inescrupulosas o descalificantes.

## Sanciones por donaciones marcadas

Los proyectos verificados y las donaciones que estén marcados por cualquiera de los factores descalificadores anteriores serán analizados y discernidos de acuerdo con las sanciones descritas aquí:

- Un donante cuyos GIVbacks fueron revocados porque se descubrió que estaban recirculando fondos o donados a un proyecto que fue descalificado para esa ronda recibirá un correo electrónico con un enlace a la publicación del foro que analiza las donaciones elegibles para esa ronda. Las donaciones no se pueden reembolsar y los GIVbacks no se pueden "no revocar" si el proyecto fue descalificado de la ronda.

Las donaciones son donaciones y van directamente al proyecto. El programa GIVbacks se creó para empoderar adicionalmente a nuestros donantes con GIV y, por lo tanto, derechos de gobierno, pero no debe hacer una donación simplemente con la expectativa de recibir GIV. apreciamos su comprensión.

---

**El programa GIVbacks es nuestra forma de retribuir a quienes dan. Es nuestra salida a la comunidad: empoderar a los donantes reales con poder de gobierno sobre el futuro de Giveth y, por lo tanto, el futuro de la generosidad. Para obtener GIVbacks, [comienza a donar a proyectos verificados hoy](https://giveth.io/projects)!**
