---
id: technicalWhitePaper
title: White Paper técnico
slug: technicalWhitePaper
---
import TraceDeprecated from './_traceDeprecatedES.mdx'

<TraceDeprecated />


El propósito de nuestra tecnología es brindar a los usuarios de criptomonedas la capacidad de donar sin esfuerzo a campañas enfocadas en hacer del mundo un lugar mejor. Pueden usar la plataforma Giveth para encontrar esas Campañas y donar directamente, o pueden comprometer su criptografía a una causa y hacer que un Delegado elija una Campaña o Seguimiento apropiado para ellos. Como alternativa a los sistemas de donación tradicionales, nuestro contrato de ***Promesa líquida*** permite a los Donantes retirar su promesa si no están de acuerdo con la forma en que se asignaron sus donaciones. Esto solo puede ocurrir antes de que se haya bloqueado en una Campaña para un propósito específico.

#### Para hacer posible esta nueva forma de dar, tenemos que superar algunos desafíos:

**1.** Cómo ofrecer un medio para que los Donantes donen sin perder la propiedad de sus fondos.
**2.** Cómo permitir que terceros distribuyan estas donaciones criptográficas a personas que puedan usarlas de manera efectiva.
**3.** Cómo transferir de forma segura la propiedad a las personas que están haciendo del mundo un lugar mejor.
**4.** Cómo determinar si la propiedad de los tokens Ethereum distribuidos debe transferirse o no. En otras palabras: cómo asegurarse de que un destinatario merece la criptografía donada antes de que la transfiramos.

#### Desafío n.º 1: donar sin perder la propiedad
Esto es manejado por nuestro contrato [vault](https://github.com/Giveth/vaultcontract). Este es un contrato inteligente de solidez que puede almacenar criptografía de forma segura en nombre del propietario de la criptomoneda. Así es como y por qué un Donante puede controlar o retirar sus donaciones. Cuando un donante dona criptomonedas a través de Giveth, las monedas se almacenan en una bóveda con el donante como propietario.

Una vez almacenada en la bóveda, la criptomoneda se mantiene en su lugar y no se puede mover más sin el permiso del propietario.

#### Desafío #2 - Distribuir los fondos recaudados
 Nuestro contrato [Minime](https://github.com/Giveth/minime) maneja en parte este desafío. Este es un contrato inteligente de solidez que puede representar Ether y ERC-20 con tokens de réplica.

En lugar de transferir tokens reales de Ethereum a individuos por sus esfuerzos para hacer el bien, podemos distribuir tokens Minime con la seguridad de que las criptomonedas reales se almacenan en la bóveda. Los tokens Minime son utilizados por varios proyectos conocidos en el espacio Ethereum.

Nuestro Giveth TRACE utiliza otra estrategia para transferencias flexibles. [***Liquid Pledging***](https://github.com/Giveth/liquidpledging) es un contrato inteligente de solidez que nos permite redistribuir Ether en una miríada de permutaciones en red (también conocido como un gráfico). Es un poco como democracia líquida, pero no hay votación (a menos que lo agregues como complemento).

En su esencia, Liquid Pledging mantiene una lista de propietarios y transferencias de tokens de Ethereum. Estas dos listas sirven como estructura de datos para el gráfico. La API del contrato proporciona los medios para donar, delegar y transferir tokens de Ethereum almacenados en la bóveda.

#### Desafío n.º 3: transferir la propiedad
Una vez más, esto se resuelve mediante nuestro contrato [vault](https://github.com/Giveth/vaultcontract). Los tokens de Ethereum solo se envían a direcciones incluidas en la lista blanca con el permiso del donante original. Para cumplir completamente con los requisitos del desafío n.º 3, debemos establecer algún tipo de proceso de aprobación.

#### Desafío n.° 4: determinar si se debe realizar la transferencia
Las reglas sobre cómo se aprueban las transferencias se manejan mediante complementos de compromiso líquido (lpp). Estos complementos son contratos separados a los que se hace referencia en el contrato de Liquid Pledge (*ver desafío #2*).

Por ejemplo, podría usar nuestro complemento [lpp-milestone](https://github.com/Giveth/lpp-milestone) para solicitar la aprobación del revisor como condición para liberar Ether de su donante original. En este caso, el revisor es otra dirección de Ethereum. Si se llama a 'acceptMilestone' desde esta dirección de revisor aprobado, entonces la propiedad de Ether donado puede transferirse a la dirección del destinatario de Trace (anteriormente Milestone).

No tiene que usar nuestro complemento lpp-milestone. Puedes hacer el tuyo con lo que quieras. Use un contrato que ordene las reglas que necesita para su comunidad.

Esto concluye el White Paper técnico de Giveth TRACE por ahora. Comuníquese con nosotros en [Discord](https://discord.gg/qf7XZ48gCU) si desea hacer algo con las ideas enumeradas. Somos un proyecto de código abierto y nuestra misión es ayudar a las comunidades.