---
id: givpower
title: GIVpower
slug: giveconomy/givpower
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../../../../src/css/custom.css'
import ReactPlayer from 'react-player'

# GIVpower 

GIVpower fue creado para construir una relación entre proyectos y donantes en la que todos salen ganando. Los holders de GIV obtienen GIVpower y un rendimiento al hacer staking y - si lo desean - pueden bloquear el mismo GIV dentro de la GIVfarm. 

Con el tiempo, podrán usar su GIVpower para "boostear" 🚀 proyectos en Giveth y ayudar a mejorar su ranking. Los proyectos con mayor ranking obtendrán distintos beneficios en la plataforma. Al principio, sus donantes obtendrán más GIVbacks y, eventualmente, obtendrán fondos complementarios (de nuestra Matching Pool) y otros beneficios.

La primera fase de GIVpower lanzada el 4 de octubre de 2022 agregó un nuevo nivel de mecánica para hacer staking de GIV en la GIVfarm. 

<img alt='givpower staking card' width='30%' heigh='auto' src={useBaseUrl('img/givpowerCard.png')} />


Además de las ganancias del APR de GIV y de recibir [gGIV para la gobernanza de Giveth](https://docs.giveth.io/giveconomy/givgarden/), los usuarios también obtienen **GIVpower**, un token ERC-20 no transferible. El GIV que está stakeado se iguala 1:1 con GIVpower.


(es decir, si tienes 100 GIV en stake, obtendrás 100 GIVpower).


Los usuarios también podrán "Bloquear" 🔒 su GIV apostado en la GIVfarm para poder multiplicar su APR y su GIVpower.

### Contratos

- GIVpower(POW) Token - 0xD93d3bDBa18ebcB3317a57119ea44ed2Cf41C2F2 
- GIVpower Staking - 0xD93d3bDBa18ebcB3317a57119ea44ed2Cf41C2F2 

## Staking y Locking

Los usuarios pueden aumentar sus beneficios del GIV stakeado bloqueándolos por un periodo de tiempo. Bloquear (“Lock”) GIV significa que no puede ser unstaked por un determinado periodo de tiempo, la fecha en que desbloquea un lote particular de GIV se puede ver en la ventana emergente de “Locked GIV Details”.

:::info
GIVpower solo está disponible en Gnosis Chain. Si tienes GIV en Mainnet y quieres generar recompensas y participar con GIVpower, puedes hacer un puente de tu GIV desde Mainnet a Gnosis Chain.
:::

El GIV se puede bloquear por rondas de 2 semanas siguiendo el mismo cronograma que los GIVbacks, la cantidad mínima de tiempo es 1 ronda (2 semanas) y el máximo es 26 rondas (1 año).

Cuanto más tiempo bloqueas tu GIV, mayor será el multiplicador para esa cantidad específica de GIV bloqueado. Un multiplicador más grande significa que obtendrás más GIV de las recompensas en la GIVfarm (obtienes una APR más alta) y también obtendrás más GIVpower. La cantidad de gGIV ([para votar en los GIVgardens](https://docs.giveth.io/giveconomy/givgarden) que recibas no aumentará.

<img alt='givpower multiplier' width="80%" heigh='auto' src={useBaseUrl('img/givpowerMultiplier.png')} />

Puedes bloquear varios lotes de GIV tokens por diferentes períodos de tiempo, cada lote tendrá una APR diferente, según el tiempo que hayas bloqueado los tokens.

<img alt='givpower locked giv details' width="80%" heigh='auto' src={useBaseUrl('img/givpowerLockedDetails.png')} />


Luego de finalizar el período de bloqueo, el GIV se desbloquea, lo que significa que puede retirarlo de la GIVfarm. Retirar (“Unstake”) su GIV significa que perderá cualquier GIVpower y gGIV asociado. Siempre se puede recuperar poniendo los GIV tokens en stake nuevamente.



### APR en la GIVfarm

Cuando bloquee su GIV, podrá ver la APR estimada actual para esa cantidad de GIV que se está bloqueando. La APR puede variar según la cantidad total de GIV stakeado dentro de la GIVfarm de todos los usuarios, y puede ser diferente para cada lote de tokens bloqueados. 

Podrá ver su APR real para cada lote abriendo la ventana emergente "**Locked GIV Details**" dentro de la sección de staking de GIVpower.

<img alt="locked givpower aprs" width="80%" heigh='auto' src={useBaseUrl('img/givpowerLockedapr.png')} />

En la ventana de staking de GIVpower, la APR que se muestra es el promedio ponderado de todos los lotes de su GIV bloqueado. Si no tiene GIV bloqueado en GIVpower, se le mostrará un rango de las APR más bajas y más altas posibles en ese momento.

<img alt='givpower staking card apr' width='30%' heigh='auto' src={useBaseUrl('img/givpowerCardapr.png')} />


#### Desbloqueo

El desbloqueo siempre ocurre al comienzo de una nueva ronda, por lo que si bloquea su GIV en medio de una ronda, la fecha de desbloqueo se calculará a partir del comienzo de la siguiente ronda.

Por ejemplo:

>Mohammad bloquea su GIV en staking durante 5 rondas (10 semanas), hoy es el día 5 de la ronda 25. Su GIV permanecerá bloqueado durante toda la ronda 25 (9 días más) hasta que comience la ronda 26, Y 5 rondas más, es decir, su GIV finalmente se desbloquearía al final de la ronda 31.

Cuando finaliza la duración de su período de bloqueo para cada lote, ese lote de GIV se desbloquea, lo que reduce su APR de ese lote al APR mínimo para el staking de GIV. Para aumentar su APR nuevamente, deberá bloquear su GIV.

### El multiplicador
La fórmula básica para calcular el multiplicador APR de las recompensas de GIV y GIVpower es:

$$
\sqrt(1 + N)
$$
*N = número de rondas bloqueadas*

Veamos un ejemplo para entender cómo funciona:

>Carlos decide bloquear 100 de su staked GIV durante 10 rondas (20 semanas). Su multiplicador, redondeado a 2 decimales, es 3,32.
$$
\sqrt(1 + 10)= 3.3166247903554
$$
Si al momento del bloqueo, la APR mínima de staked GIV es del 35 %, entonces su APR en el momento del bloqueo será ~116 %. La cantidad real será variable dependiendo, como se mencionó, de la cantidad total de staked GIV en la GIVfarm, pero ese mismo multiplicador de 3.32 se aplicaría a la APR de staking actual para las recompensas de GIV que Carlos está generando.

>Carlos también obtendría un multiplicador en su GIVpower. Suponiendo que tenía 500 GIV apostados y elige bloquear 100 de esos 500, entonces tendría 732 GIVpower.
$$
(100 * 3.32) + 400 = 732
$$

>Después de las 10 rondas en las que Carlos bloqueó su GIV, su GIVpower ya no tendrá un multiplicador, se reducirá a solo 500, igualando 1: 1 su staked GIV y su APR bajará al APR mínimo de staking.

:::success
#### Recompensas del GIVstream
Como siempre, todas las recompensas del GIVeconomy se distribuyen a través del GIVstream. Consulte la Expansión GIViverse para comprender cuánto serán las recompensas que podrá reclamar.
:::


<img alt='GIVpower overview' src={useBaseUrl('img/GIVpowerOverview.png')} />

## Asignación de recompensas

Se asignaron 7 millones de GIV a los primeros 6 meses de recompensas para GIVpower. Al final de los primeros 6 meses, Giveth evaluará el desempeño del programa y asignará más recompensas según corresponda.

## Usar su GIVpower

Puede usar su GIVpower para "boostear" los proyectos verificados en la plataforma. Los proyectos verificados ordenarán en la plataforma según la cantidad de GIVpower que se les asignó en la ronda anterior. Los proyectos se benefician con un ranking más alto al aparecer más arriba en la [lista de proyectos en Giveth](https://giveth.io/projects) y también ayudan a generar más GIVbacks a sus donantes.

Los proyectos con mejor ranking también se beneficiarán eventualmente de los fondos de nuestra Matching Pool dentro del contexto de nuestro [programa GIVmatching](https://forum.giveth.io/t/givmatching-idea-generation-on-how-to-distribute-funds/346/21)  (TBD).

### Cómo Boostear proyectos

Boostear un proyecto con tu GIVpower es muy fácil. Para comenzar, busque el proyecto que desea impulsar y visite la página del proyecto. Una vez que esté allí, haga clic en `boost`.
<img alt='boosting on the project page' width="80%" height="auto" src={useBaseUrl('img/content/boostProjectPage.png')} />

:::caution
**Solo puedes boostear proyectos verificados**, hasta un máximo de 20 proyectos diferentes. Si un proyecto por algún motivo pierde su estado de verificación  (por ejemplo, no proporciona actualizaciones o infringe nuestros [Términos de servicio](https://giveth.io/tos), todo el GIVpower que tienes asignado ese proyecto quedará "inactivo" (es decir, excluido de los cálculos de clasificación y GIVbacks).
:::

Seleccione el porcentaje de GIVpower que le gustaría asignar para boostear el proyecto. Si es la primera vez que está boosteando, se aplicará automáticamente el 100% de su GIVpower. Los boosteos posteriores de GIVpower reducirán proporcionalmente su GIVpower en sus otros proyectos ya boosteados. Más detalles a continuación en [Administrar su GIVpower](https://docs.giveth.io/giveconomy/givpower#managing-your-givpower).
<img alt='select boosting percentage' width="80%" height="auto" src={useBaseUrl('img/content/boostingProject.png')} />

Haga clic en `Confirmar` y debería ver la confirmación de que su boosteo de GIVpower fue exitoso!
<img alt='boostConfirmation' width="80%" height="auto" src={useBaseUrl('img/content/boostConfirmation.png')} />

### Administrar su GIVpower

Puede administrar sus asignaciones de GIVpower navegando a 'My Account' y luego haciendo clic en la pestaña 'My GIVpower'.
<img alt='my boosted projects page' src={useBaseUrl('img/content/boostedProjectsPage.png')} />

Desde esta página puedes editar tus asignaciones de GIVpower a cada proyecto que hayas boosteado. Para comenzar, haga clic en `MODIFY`.

Puedes editar el porcentaje de GIVpower asignado a cada proyecto, cuando modifica uno de los porcentajes, todas sus otras asignaciones se ajustarán proporcionalmente en función de su asignación anterior. Si no desea que una asignación cambie para un proyecto específico mientras modifica su GIVpower en otros proyectos, puede hacer clic en el ícono 🔒. La suma de los porcentajes asignados a cada uno de sus proyectos debe ser igual a 100 %, por lo que puede bloquear todas sus asignaciones excepto dos.

No puede tener menos de 1 proyecto boosteado en ningún momento. Si por alguna razón su proyecto impulsado pierde su estado verificado y todo su GIVpower se vuelve inactivo, debe boostear otro proyecto verificado antes de eliminar el GIVpower inactivo del proyecto no verificado.

Confirme sus cambios de asignación haciendo clic en `APPLY CHANGES` y luego `SAVE CHANGES`.

Mire este video para ver cómo funciona la modificación de su GIVpower en acción:

<ReactPlayer playing loop={true} controls url='/video/editingAllocationsConverted.mp4' />


#### Cambios en el balance de GIVpower

El total de su GIVpower puede cambiar con el tiempo dependiendo de 4 eventos típicos que pueden ocurrir, vamos a cubrirlos en detalle:

1. **Stakear más GIV**. Si stakeas más GIV en la [GIVfarm](https://giveth.io/givfarm), recibirás más GIVpower en una proporción 1:1 por cada GIV stakeado. 
2. Bloquear GIV stakeado. Si bloqueas más de tu GIV stakeado, esto multiplicará tu GIVpower por un factor dependiendo de por cuánto tiempo lo bloquees. Cuanto más tiempo lo bloquees, mayor será tu multiplicador y mayor será tu GIVpower. 

3. El GIV se desbloquea. Una vez que finalice la duración de bloqueo de cualquiera de tus lotes de GIV, perderás el multiplicador en tu saldo de GIVpower que se aplicó al bloquear ese lote de GIV. Tu saldo total de GIVpower disminuirá. 

4. Unstakear GIV. Si haces unstake de tu GIV en la [GIVfarm](https://giveth.io/givfarm), quemarás tu GIVpower en una proporción 1:1 por cada GIV quitado de staking.

Después de boostear tu primer proyecto con GIVpower, siempre estarás asignando el 100% de él a un proyecto(s). Por diseño, no importa si tu GIVpower total aumenta o disminuye, siempre estarás utilizando tu GIVpower de manera máxima y tus asignaciones a proyectos siempre permanecerán en los porcentajes relativos en los que los asignaste.

## Ranking de los proyectos

Todos los proyectos verificados que hayan sido impulsados con GIVpower recibirán un ranking de GIVpower. El proyecto con más GIVpower será rankeado #1 en la plataforma. El "puesto actual" se actualiza al comienzo de cada nueva ronda de GIVbacks y se toma a partir de la cantidad promedio de GIVpower stakeado detrás de un proyecto en la ronda anterior (dos semanas).

:::note
El "puesto proyectado" es una proyección de lo que podría ser el puesto actual en la próxima ronda de GIVbacks, basado en el GIVpower que actualmente tiene ese proyecto. El puesto proyectado te da una idea del impacto que podría tener tu reciente impulso.
:::

<img alt='project ranking page' src={useBaseUrl('img/content/projectRanking.png')} />

El puesto actual de un proyecto a su vez afecta el porcentaje de GIVbacks que recibirán los nuevos donantes por realizar donaciones. El proyecto con mayor ranking puede producir hasta un 80% de GIVbacks, mientras que un proyecto verificado sin ranking (es decir, sin boosteos de GIVpower) producirá un 50%. Para determinar el [factor de GIVbacks](https://docs.giveth.io/giveconomy/givbacks#rank--calculation) para cada proyecto entre los mayores y menores puestos, tomamos la diferencia entre el máximo y el mínimo factor de GIVbacks, y la dividimos entre el número de proyectos rankeados que tenemos al final de cada ronda, a partir de esto podemos encontrar el factor único de GIVbacks para cada proyecto rankeado.

Cada proyecto desde el puesto menor hasta el mayor recibirá incrementalmente más GIVbacks. Esto significa que, independientemente del puesto actual de un proyecto, boostear con GIVpower siempre puede hacer la diferencia.

Puedes leer más acerca de [GIVbacks aquí.](https://docs.giveth.io/giveconomy/givbacks)

<details>
<summary><b><i>Ver un ejemplo de distribución de GIVbacks</i></b></summary>

El año es 2049, es la ronda 1337 de GIVbacks...


Contamos con **25 proyectos verificados** que han sido boosteados con GIVpower. El **factor de GIVbacks máximo es del 80 %, el mínimo es del 50 %** y la diferencia entre ambos es del 30 %. Esto significa que el proyecto con la menor cantidad de GIVpower, el proyecto clasificado en el puesto n.º 25, tendría un factor de devolución del 50 % y **cada proyecto subsiguiente con un ranking más alto tendría un factor de devolución un 1,25 % más alto**.
 
El GIV total a distribuir por ronda es de 1.000.000 y el precio del GIV es de 0,53 $.

A fines de la demostración, registramos que cada proyecto en el ranking obtuvo un valor fijo de 100 USD en donaciones. Según esta información y algunos valores dados de GIVpower boostenado un proyecto determinado, nuestro ejemplo de distribución se vería así:
 
 | Proyecto | GIVpower | Ranking | Factor Givbacks | Valor de la donación en  | GIVbacks estimados |
| --- | --- | --- | --- | --- | --- |
| A | 4213.3329017797105 | 1 | 80% | 100 | 150.94339622641508 |
| B | 3511.1107514830924 | 2 | 78.75% | 100 | 148.5849056603774 |
| C | 2925.9256262359104 | 3 | 77.5% | 100 | 146.22641509433964 |
| D | 2438.271355196592 | 4 | 76.25% | 100 | 143.8679245283019 |
| E | 2031.8927959971602 | 5 | 75% | 100 | 141.5094339622642 |
| F | 1693.2439966643003 | 6 | 73.75% | 100 | 139.15094339622647 |
| G | 1411.036663886917 | 7 | 72.50% | 100 | 136.79245283018872 |
| H | 1175.8638865724308 | 8 | 71.25% | 100 | 134.43396226415098 |
| I | 979.8865721436924 | 9 | 70% | 100 | 132.0754716981133 |
| J | 816.572143453077 | 10 | 68.75% | 100 | 129.71698113207555 |
| K | 680.4767862108976 | 11 | 67.5% | 100 | 127.35849056603782 |
| L | 567.0639885090814 | 12 | 66.25% | 100 | 125.0000000000001 |
| M | 472.55332375756785 | 13 | 65% | 100 | 122.64150943396237 |
| N | 393.7944364646399 | 14 | 63.75% | 100 | 120.28301886792464 |
| O | 328.16203038719993 | 15 | 62.5% | 100 | 117.92452830188691 |
| P | 273.46835865599996 | 16 | 61.25% | 100 | 115.56603773584918 |
| Q | 227.89029887999996 | 17 | 60% | 100 | 113.20754716981146 |
| R | 189.90858239999997 | 18 | 58.75% | 100 | 110.84905660377373 |
| S | 158.257152 | 19 | 57.5% | 100 | 108.490566037736 |
| T | 131.88096 | 20 | 56.25% | 100 | 106.13207547169827 |
| U | 109.90079999999999 | 21 | 55% | 100 | 103.77358490566054 |
| V | 91.58399999999999 | 22 | 53.75% | 100 | 101.41509433962283 |
| W | 76.32 | 23 | 52.5% | 100 | 99.05660377358508 |
| X | 63.599999999999994 | 24 | 51.25% | 100 | 96.69811320754737 |
| Y | 53 | 25 | 50% | 100 | 94.33962264150965 |


</details>

**La clasificación de proyectos continuará teniendo un papel importante en Giveth.io y se incorporará a las futuras funcionalidades de nuestro mapa de ruta, como [GIVmatching](https://docs.giveth.io/givethMatchingPool). En el futuro, Giveth también podría incorporar otras métricas o herramientas de votación que afectarán la clasificación de un proyecto.**

## Delegación

Giveth planea implementar una herramienta para que los usuarios puedan delegar su GIVpower, permitiendo a los Givers más confiables realizar una curaduría de proyectos en nombre de los usuarios. ¡Solicita ahora para convertirte en un [delegado de GIVpower!](https://forum.giveth.io/t/open-call-for-givpower-delegates/779)