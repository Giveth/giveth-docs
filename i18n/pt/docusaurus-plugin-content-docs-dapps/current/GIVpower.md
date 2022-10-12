---
id: givpower
title: GIVpower
slug: giveconomy/givpower
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../../../../src/css/custom.css'
import NotTranslated from '../../\_notTranslatedPT.mdx'

<NotTranslated />

# GIVpower

GIVpower foi criado para construir uma relação ganha-ganha entre projetos e doadores. Os detentores de GIV obtêm GIVpower e ganham um rendimento quando apostam e - se escolherem - bloqueiam o GIV no GIVfarm. Eventualmente, eles poderão usar seu GIVpower para “impulsionar” projetos na Giveth e ajudar a melhorar sua classificação. Os projetos mais bem classificados receberão benefícios na plataforma. Inicialmente, seus doadores receberão mais GIVbacks e, eventualmente, receberão fundos correspondentes e outros benefícios.


A 1ª fase do GIVpower, anteriormente conhecida como GIVcuration, foi lançada em 4 de outubro de 2022 e adiciona uma nova camada de mecânica para staking de GIV no GIVfarm.

<img alt='givpower staking card' width='30%' heigh='auto' src={useBaseUrl('img/givpowerCard.png')} />

Além do APR de recompensas GIV e de receber [gGIV para governança Giveth](https://docs.giveth.io/giveconomy/givgarden), os usuários agora também receberão GIVpower, um token ERC-20 intransferível. GIV apostado é combinado 1:1 com GIVpower. Ou seja, se você apostar 100 GIV você receberá 100 GIVpower.

Os usuários também poderão "Bloquear" seu GIV apostado no GIVfarm para multiplicar suas recompensas APR e seu GIVpower.

### Contratos

- GIVpower(POW) Token - 0xD93d3bDBa18ebcB3317a57119ea44ed2Cf41C2F2
- GIVpower Staking - 0xD93d3bDBa18ebcB3317a57119ea44ed2Cf41C2F2

## Staking & Locking

Os usuários agora podem aumentar suas recompensas de staking GIV bloqueando-os por um período de tempo. Bloquear GIV significa que ele não pode ser desbloqueado por um determinado período de tempo, você pode ver a data em que um determinado lote de GIV é desbloqueado no pop-up "Detalhes do GIV bloqueado".

:::info
GIVpower está disponível apenas em Gnosis Chain e o **GIV staking na Mainnet terminou**. Você precisará coletar, desmarcar e passar seu GIV pela [bridge](https://omni.gnosischain.com/bridge) da Mainnet para Gnosise Chain para continuar apostando GIV e ganhando recompensas.

:::

O GIV pode ser bloqueado de acordo com segmentos quinzenais seguindo o mesmo cronograma dos GIVbacks, o tempo mínimo é de 1 rodada (2 semanas), até 26 rodadas (1 ano).

Quanto mais tempo você bloquear seu GIV, maior será o multiplicador para aquela quantidade específica de GIV bloqueado. Um multiplicador maior significa que você receberá mais GIV das recompensas do GIVfarm (você recebe uma TAEG mais alta) e também obterá mais GIVpower. A quantidade de gGIV que você recebe não aumentará.

<img alt='givpower multiplier' width="80%" heigh='auto' src={useBaseUrl('img/givpowerMultiplier.png')} />

Você pode bloquear vários lotes de tokens GIV por diferentes períodos de tempo, cada lote pode ter uma APR diferente, dependendo de quanto tempo você bloqueou seus tokens.

<img alt='givpower locked giv details' width="80%" heigh='auto' src={useBaseUrl('img/givpowerLockedDetails.png')} />

Após o término do período de bloqueio do seu GIV, seu GIV será desbloqueado, o que significa que pode ser desbloqueado do GIVfarm. A retirada do seu GIV significa que você perderá qualquer GIVpower e gGIV associados. Você pode recuperá-lo, no entanto, apostando seu GIV novamente.

### GIVfarm APR

Quando você trancar seu GIV, verá uma APR estimada para essa quantidade de GIV sendo trancada. A APR real será alterada com base na quantidade total real de GIV apostada no farm em todos os usuários e pode ser diferente para cada lote de tokens bloqueados. Você poderá ver sua APR real para cada lote navegando até o pop-up "Detalhes do GIV Bloqueado" no cartão de staking GIVpower.

<img alt="locked givpower aprs" width="80%" heigh='auto' src={useBaseUrl('img/givpowerLockedapr.png')} />

No cartão de staking GIVpower, o APR mostrado é a média ponderada de todos os lotes de seu GIV bloqueado . Se você não tiver nenhum GIV bloqueado no GIVpower, será mostrado um intervalo dos APRs mais baixos e mais altos possíveis naquele momento.

<img alt='givpower staking card apr' width='30%' heigh='auto' src={useBaseUrl('img/givpowerCardapr.png')} />

#### Desbloqueio

​O desbloqueio só acontece no início de uma nova rodada, então se você bloquear seu GIV no meio de rodada, a data de desbloqueio será calculada a partir de quando a próxima rodada começar.


Por exemplo:

> Mohammad bloqueia seu GIV apostado por 5 rodadas (10 semanas), hoje é o dia 5 da rodada 25. Seu GIV permaneceria bloqueado por toda a rodada 25 (mais 9 dias) até o início da rodada 26, MAIS 5 rodadas, o que significa que o GIV dele finalmente será desbloqueado no final da rodada 31.

Quando a duração do período de bloqueio para cada lote terminar, esse lote de GIV será desbloqueado, reduzindo assim seu APR desse lote para a APR mínima para staking de GIV. Para aumentar seu AP R novamente, você precisará travar seu GIV.


### O Multiplicador

fórmula básica para calcular o multiplicador de recompensas GIV APR e GIVpower é::

$$
\sqrt(1 + N)
$$

_N = número de rodadas bloqueadas_

Vejamos um exemplo para entender como isso funciona:

> Carlos decide para bloquear 100 de seu GIV apostado por 10 rodadas (20 semanas). Seu multiplicador, arredondado para 2 casas decimais, é **3.32**.
>
> $$
> \sqrt(1 + 10) = 3.3166247903554
> $$
>
> Se no momento do bloqueio a APR mínima de staking de GIV for de 35%, então sua APR no momento do bloqueio será de ~116%. O valor real será variável dependendo, como mencionado, do valor total de GIV apostado na fazenda, mas esse mesmo multiplicador de 3,32 seria aplicado à APR de aposta atual para as recompensas GIV que Carlos ganha.
>
> Carlos também ganharia um multiplicador em seu GIVpower. Supondo que ele tenha 500 GIV apostados e opte por travar 100 desses 500, ele teria 732 GIVpower.
>
> $$
> (100 * 3.32) + 400 = 732
> $$

> Após as 10 rodadas que Carlos bloqueou seu GIV, seu GIVpower não terá mais um multiplicador, ficando reduzido para apenas 500, igualando 1:1 seu GIV apostado e sua TAEG cairá para a TAEG mínima de staking.

:::success

#### Streamed Rewards

sempre, todas as recompensas do GIVeconomy são distribuídas de acordo com o GIVstream. Confira a [**Expansão GIViverse**](https://giveth.io/givstream) para entender quanto serão suas recompensas resgatáveis.
:::

<img alt='GIVpower overview' src={useBaseUrl('img/GIVpowerOverview.png')} />

## Alocação de Recompensas

7 milhões de GIV foram alocados para os primeiros 6 meses do GIVpower Rewards. Perto do final dos primeiros 6 meses, a Giveth avaliará o desempenho do programa e alocará mais recompensas de acordo.

## Boosting (Phase 2)

Como mencionado, os usuários agora receberão GIVpower por apostarem seu GIV no GIVfarm. Logo após a fase 1 será o lançamento da fase 2, que permitirá aos usuários impulsionar projetos com GIVpower.

Os usuários poderão apostar seu GIVpower em projetos para impulsioná-los. Os projetos impulsionados serão classificados na plataforma com base em quanto GIVpower foi apostado neles e, com base em sua classificação, eles gerarão mais GIVbacks para seus doadores.

Os projetos mais bem classificados também se beneficiarão dos fundos do [Programa GIVmatching](https://forum.giveth.io/t/givmatching-idea-generation-on-how-to-distribute-funds/346/21).

Tanto o Boosting quanto o GIVmatching ainda não foram lançados e atualizaremos esta documentação à medida que mais detalhes estiverem disponíveis.

:::info

#### Delegation

Giveth também implementará a capacidade de os usuários delegarem seu GIVpower, permitindo que Doadores confiáveis ​​façam a curadoria de projetos em seu nome, fique atento para mais detalhes!
:::
