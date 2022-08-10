---
id: angelVault
title: El Angel Vault
---
import useBaseUrl from '@docusaurus/useBaseUrl'

El Angel Vault es una posición Univ3 estratégicamente gestionada y estructurada para proteger el GIV de la volatilidad a la baja. Esto gestionado por nuestra Angel Vault multisig, una [multisig 4/7 de miembros del equipo central de Giveth y dos miembros para ICHI](https://gnosis-safe.io/app/eth:0x2B0ee142dCFE7C2dD150cDbd7B6832F6e9977f51/home). Para obtener más información sobre El Angel Vault y cómo funciona, consulte [La Docmunetación de ICHI](https://docs.ichi.org/ichi-docs-v3/ichi-vaults/angel-vaults).
## Contratos
- Angel Vault (ICHI) LM (Unipool): `0xA4b727DF6fD608d1835e3440288c73fB28c4eF16`
- Angel Vault (ICHI) LP: `0xc3151A58d519B94E915f66B044De3E55F77c2dd9`

## oneGIV
oneGIV es un dólar de marca Giveth (por ICHI) que se puede mintear usando DAI en una escala de 1:1. Esto se puede hacer a través del [Sitio Web de ICHI](https://app.ichi.org/vault?poolId=20009&back=vault). Para más información sobre el dolar de marca ICHI, [Click aquí para ver su documentación](https://docs.ichi.org/ichi-docs-v3/branded-dollars/overview).

oneGIV es minteado usando 100% DAI, y también está sobre-colateralizado por GIV. El contrato tiene GIV como garantía adicional en caso de que haya algún problema con DAI. Todos los mints y burns de oneGIV ocurren a través de un contrato administrado por nuestro Angel Vault multisig.

Con el tiempo, la DAO de Giveth puede votar para cambiar la proporción en que se mintea el 100% del DAI, y se convierte en una combinación de DAI y GIV (por ejemplo, 80 % DAI, 20 % GIV). Sin embargo, para mantener la paridad con el dólar, quemar oneGIV para canjear DAI siempre dará como resultado un 100 % de DAI.

## Proporcionando y quitando liquidez
Los proveedores de liquidez pueden agregar liquidez a Angel Vault usando oneGIV a través del [Sitio Web de ICHI](https://app.ichi.org/vault?poolId=20009&back=vault), Y luego stackear sus tokens en [GIVfarm](https://giveth.io/givfarm). Debido a que este GIV se agrega a una posición GIV/GIV Uni V3, cuando eliminas la liquidez obtendrás oneGIV & GIV proporcional a las tenencias en el Angel Vault.

## Consigue Recompensas
Las recompensas se otorgan a los proveedores de liquidez en proporción a la liquidez proporcionada. Cuando stakeas tus tokens LP, obtienes recompensas en dos partes:
1. La tarifa de Uniswap del 1% que aumenta automáticamente tu posición en El Angel Vault ([IRR](https://docs.ichi.org/ichi-docs-v3/resources/faqs#what-does-the-irr-metric-on-the-angel-vault-page-represent)).
2. Incentivos GIV desde dentro de GIVfarm, que como siempre, se distribuyen de acuerdo con GIVstream. Échale un Vistazo [**GIViverse Expansion**](https://giveth.io/givstream) para saber cuánto serán las recompensas.

La APR que se muestra en el pool de stacks de GIVfarm oneGIV/GIV es la suma de estas dos tasas de recompensa.

<img alt="angel vault staking farm staking card" src={useBaseUrl('/img/content/giveconomy/angelVaultCard.png')} />

## Distribución de recompensas GIV a los LP Stackers de Angel Vault
Se ha asignado un total de 6 millones de GIV para ejecutar un programa de recompensas para los que participen Stackeando LP de Angel Vault durante 26 semanas a partir de la fecha de inicio que será el 4 de agosto de 2022. Las recompensas que se enviarán en un período de dos semanas es la siguiente:

|Semana     | GIV ganado (dentro del período de 2 semanas)| % de recompensas |
| -------   | ------------------------------------------- | ---------------- |
| Semana 1  | 485,143                                     | 8.09%            |
| Semana 3  | 569,143                                     | 9.49%            |
| Semana 5  | 140,000                                     | 2.33%            |
| Semana 7  | 653,143                                     | 10.89%           |
| Semana 9  | 140,000                                     | 2.33%            |
| Semana 11 | 737,143                                     | 12.29%           |
| Semana 13 | 140,000                                     | 2.33%            |
| Semana 15 | 821,143                                     | 13.69%           |
| Semana 17 | 140,000                                     | 2.33%            |
| Semana 19 | 905,143                                     | 15.09%           |
| Semana 21 | 140,000                                     | 2.33%            |
| Semana 23 | 989,143                                     | 16.49%           |
| Semana 25 | 140,000                                     | 2.32%            |

### Plan de incentivos — La escalera dentada
Cuando se inicialice Angel Vault, la totalidad de su liquidez estará en oneGIV. Esto es beneficioso ya que Angel Vault funciona mejor cuando hay un alto porcentaje de oneGIV en la bóveda, pero este porcentaje no se mantiene estable con el tiempo.
La proporción de GIV aumenta cuando hay presión de venta en el mercado sobre el token GIV.
La proporción de un GIV aumenta cuando se crean nuevas posiciones de Angel Vault LP.
La proporción de GIV/oneGIV permanecerá igual cuando se eliminan las posiciones de Angel Vault LP.
Por lo tanto, queremos alentar a los proveedores de liquidez a retirar periódicamente liquidez, eliminando un porcentaje de GIV del grupo, y luego volver a agregar liquidez en oneGIV para así aumentar la concentración total estable en Angel Vault. Todo esto ayudará a respaldar la fuerza de compra del Angel Vault.

<img alt="rewards distribution schedule for jagged staircase" src={useBaseUrl('/img/content/giveconomy/jaggedStaircase.png')} />
