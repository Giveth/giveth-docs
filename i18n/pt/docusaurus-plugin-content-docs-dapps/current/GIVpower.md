---
id: givpower
title: GIVpower
slug: giveconomy/givpower
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../../../../src/css/custom.css'
import ReactPlayer from 'react-player'

# GIVpower

GIVpower foi criado para construir uma relação ganha-ganha entre projetos e doadores. Os detentores de GIV obtêm GIVpower e ganham um rendimento quando apostam e - se escolherem - bloqueiam o GIV no GIVfarm. Eventualmente, eles poderão usar seu GIVpower para “impulsionar” projetos na Giveth e ajudar a melhorar sua classificação. Os projetos mais bem classificados receberão benefícios na plataforma. Inicialmente, seus doadores receberão mais GIVbacks e, eventualmente, receberão fundos correspondentes e outros benefícios.


A 1ª fase do GIVpower, anteriormente conhecida como GIVcuration, foi lançada em 4 de outubro de 2022 e adiciona uma nova camada de mecânica para staking de GIV no GIVfarm.

<img alt='givpower staking card' width='30%' heigh='auto' src={useBaseUrl('img/givpowerCard.png')} />

Além do APR de recompensas GIV e de receber [gGIV para governança Giveth](https://docs.giveth.io/giveconomy/givgarden), os usuários agora também receberão GIVpower, um token ERC-20 intransferível. GIV apostado é combinado 1:1 com GIVpower. Ou seja, se você apostar 100 GIV você receberá 100 GIVpower.

Os usuários também poderão "Bloquear" seu GIV apostado no GIVfarm para multiplicar suas recompensas APR e seu GIVpower.

### Contratos

- GIVpower(POW) Token - [0xD93d3bDBa18ebcB3317a57119ea44ed2Cf41C2F2](https://gnosisscan.io/address/0xD93d3bDBa18ebcB3317a57119ea44ed2Cf41C2F2)
- GIVpower Staking - [0x24F2d06446AF8D6E89fEbC205e7936a602a87b60](https://gnosisscan.io/address/0x24F2d06446AF8D6E89fEbC205e7936a602a87b60)

## Staking & Locking

Os usuários agora podem aumentar suas recompensas de staking GIV bloqueando-os por um período de tempo. Bloquear GIV significa que ele não pode ser desbloqueado por um determinado período de tempo, você pode ver a data em que um determinado lote de GIV é desbloqueado no pop-up "Detalhes do GIV bloqueado".

:::info
GIVpower está disponível apenas em Gnosis Chain e o **GIV staking na Mainnet terminou**. Você precisará coletar, desmarcar e passar seu GIV pela [bridge](https://omni.gnosischain.com/bridge) da Mainnet para Gnosise Chain para continuar apostando GIV e ganhando recompensas.

:::

O GIV pode ser bloqueado de acordo com segmentos quinzenais seguindo o mesmo cronograma dos GIVbacks, o tempo mínimo é de 1 rodada (2 semanas), até 26 rodadas (1 ano).

Quanto mais tempo você bloquear seu GIV, maior será o multiplicador para aquela quantidade específica de GIV bloqueado. Um multiplicador maior significa que você receberá mais GIV das recompensas do GIVfarm (você recebe uma TAEG mais alta) e também mais GIVpower. A quantidade de gGIV ([GIVgarden vote](./GIVgarden.md)) que você recebe não aumentará .

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

## Usando seu GIVpower

Você pode "Impulsionar" projetos verificados apostando seu GIVpower por trás deles. Os projetos impulsionados serão classificados na plataforma com base em quanto GIVpower foi apostado neles e, com base em sua classificação, eles gerarão mais GIVbacks para seus doadores.

Os projetos mais bem classificados também acabarão se beneficiando dos fundos correspondentes do [GIVmatching Program](https://forum.giveth.io/t/givmatching-idea-generation-on-how-to-distribute-funds/346/21) (TBD).

### Como impulsionar

Impulsionar um projeto com seu GIVpower é muito fácil. Para começar, encontre o projeto que você deseja impulsionar e visite a página do projeto, quando estiver lá, clique em `Boost`.

<img alt='boosting on the project page' width="80%" height="auto" src={useBaseUrl('img/content/boostProjectPage.png')} />

:::caution
Você só pode impulsionar projetos verificados, até um máximo de 20 projetos únicos. Se um projeto por qualquer motivo não for verificado (por exemplo, não fornecer atualizações, quebrar os Termos de Serviço), qualquer um dos seus GIVpower apostados no projeto será removido e adicionado proporcionalmente aos seus outros projetos impulsionados. Se você reforçou apenas 1 projeto e ele não for verificado, seu GIVpower ficará inativo, você precisará realocar para outro projeto.
:::
Selecione a porcentagem do seu GIVpower com o qual você gostaria de aumentar. Se for a primeira vez que você aumenta, você aumentará automaticamente com 100% do seu GIVpower. Os aumentos de GIVpower subsequentes após o primeiro reduzirão dinamicamente seu GIVpower em seus outros projetos aprimorados. Mais detalhes abaixo em 'Gerenciando seu GIVpower'.

<img alt='select boosting percentage' width="80%" height="auto" src={useBaseUrl('img/content/boostingProject.png')} />

Clique em `Confirmar` e você verá a confirmação de que seu aumento de GIVpower foi bem-sucedido! Esteja ciente de que pode levar até 5 minutos para que seu aumento de GIVpower apareça na página do projeto.

<img alt='boostConfirmation' width="80%" height="auto" src={useBaseUrl('img/content/boostConfirmation.png')} />

### Gerenciando seu GIVpower

Você pode gerenciar suas alocações de GIVpower navegando até 'Minha conta' e clicando na guia 'Projetos impulsionados'.

<img alt='my boosted projects page' src={useBaseUrl('img/content/boostedProjectsPage.png')} />

Nesta página, você pode editar suas alocações de GIVpower para cada projeto que você impulsionou. Para começar, clique em `EDIT BOOSTING`.

Você pode editar sua porcentagem de GIVpower alocada para cada projeto, quando você modifica uma alocação, todas as outras alocações serão ajustadas relativamente com base em quão grande foi a alocação anterior. Se você não quiser que sua alocação mude para um projeto específico enquanto modifica seu GIVpower em outros projetos, você pode clicar no ícone :lock:.

Confirme suas alterações de alocação clicando em `APPLY CHANGES` e depois em `SAVE CHANGES`.

Confira este vídeo para ver como é a modificação do seu GIVpower em ação:
<ReactPlayer playing loop={true} controls url='/video/editingAllocationsConverted.mp4' />

#### Perda de potência GIV

Seu GIVpower total pode mudar ao longo do tempo, dependendo se você bloqueou algum GIV no [GIVpower farm](https://giveth.io/givfarm). Quando a duração do bloqueio de rodada expirar, o bônus multiplicador do seu GIVpower será removido, isso causará uma diminuição no seu GIVpower total e, portanto, uma diminuição proporcional nas suas alocações de GIVpower. As porcentagens não serão alteradas, mas a quantidade real de GIVpower sim. Essas mudanças, se houver, só acontecerão ao final de cada rodada quinzenal de GIVbacks.
Você pode aumentar seu GIVpower bloqueando seu GIV novamente ou [colocando mais GIV no farm](https://giveth.io/givfarm).
## Classificação do projeto

Todos os projetos que foram impulsionados com GIVpower receberão uma classificação GIVpower. O projeto com mais GIVpower será classificado em primeiro lugar na plataforma. A classificação é calculada no final de cada rodada de GIVbacks e é tirada da quantidade média de GIVpower apostada em um projeto nas duas semanas anteriores.
A classificação de um projeto, por sua vez, afetará a porcentagem de GIVbacks que os doadores receberão ao doar para esse projeto. O projeto com melhor classificação pode render até 80% de GIVbacks correspondentes, enquanto o projeto com classificação mais baixa renderá 50%. Para determinar o fator GIVbacks para cada projeto entre os rankings superior e inferior, pegamos o spread, ou a diferença entre o fator GIVbacks máximo e mínimo, e dividimos isso pelo número de projetos classificados que temos no final de cada rodada, a partir deste podemos encontrar o fator GIVbacks exclusivo para cada projeto classificado. Cada projeto de baixo para cima receberá cada vez mais correspondência de GIVbacks.

 Você pode ler mais sobre [GIVbacks aqui](./givbacks.md).

 <details>
<summary><b><i>Veja um Exemplo de Distribuição de GIVbacks</i></b></summary>

O ano é 2049, é GIVbacks rodada 1337...
 
Temos **25 projetos no total** na plataforma que foram impulsionados com GIVpower. O **fator GIVbacks máximo é 80%, o mínimo é 50**%**, A diferença entre os dois é 30%. Isso significaria que o projeto com a menor quantidade de GIVpower, projeto classificado #25, teria um GIVbacks Factor de 50% e **todo projeto subsequentemente com classificação mais alta receberia 1,25% mais correspondência**.
 
O GIV total a ser distribuído para a rodada é de 1.000.000 e o preço do GIV é de $ 0,53.
 Com base nesta informação e alguns valores dados para GIVpower apostado e as doações feitas para um determinado projeto, nossa distribuição de exemplo ficaria assim:
 
 | Projeto | GIVpower | Classificação | Fator de Devoluções | Valor da Doação em USD | GIVbacks estimados |
| --- | --- | --- | --- | --- | --- |
| A | 3736.351 | 1 | 80% | 906 | 1367.5471698113208 |
| B | 3113,62 | 2 | 78,75% | 997 | 1481.3915094339623 |
| C | 2594,68 | 3 | 77,50% | 951 | 1390.6132075471698 |
| D | 2162.240 | 4 | 76,25% | 1401 | 2015.5896226415098 |
| E | 1801.8671 | 5 | 75,00% | 1450 | 2051.8867924528304 |
| F | 1501.5559 | 6 | 73,75% | 2241 | 3118.372641509435 |
| G | 1251.296 | 7 | 72,50% | 0 | 0 |
| H | 1042.747 | 8 | 71,25% | 1213 | 1630.6839622641517 |
| eu | 868.9560 | 9 | 70,00% | 2363 | 3120.943396226417 |
| J | 724.130 | 10 | 68,75% | 1009 | 1308.8443396226423 |
| K | 603,44 | 11 | 67,50% | 1795 | 2286.084905660379 |
| L | 502,86 | 12 | 66,25% | 2069 | 2586.250000000002 |
| M | 419,05 | 13 | 65,00% | 1990 | 2440.5660377358513 |
| N | 349,21 | 14 | 63,75% | 529 | 636.2971698113214 |
| O | 291.011 | 15 | 62,50% | 747 | 880.8962264150953 |
| P | 242.509 | 16 | 61,25% | 0 | 0 |
| P | 202.091 | 17 | 60,00% | 599 | 678.1132075471706 |
| R | 168.409 | 18 | 58,75% | 2289 | 2537.3349056603806 |
| S | 140.341 | 19 | 57,50% | 1880 | 2039.6226415094368 |
| T | 116.951 | 20 | 56,25% | 1827 | 1939.0330188679275 |
| U | 97.4592 | 21 | 55% | 0 | 0 |
| V | 81.216 | 22 | 53,75% | 1646 | 1669.2924528301917 |
| W | 67.679 | 23 | 52,50% | 560 | 554.7169811320765 |
| X | 56,4 | 24 | 51,25% | 1976 | 1910.754716981136 |
| S | 47 | 25 | 50% | 658 | 620.7547169811335 |
</details>

A classificação do projeto continuará a ter um papel importante no Giveth.io e será incorporada em futuros recursos do roteiro, como [GIVmatching](./givethmatchingpool.md)!

## Delegação

A Giveth no futuro também implementará a capacidade de os usuários delegarem seu GIVpower, permitindo que Doadores confiáveis façam a curadoria de projetos em seu nome. Você pode se inscrever agora para se tornar um [delegado do GIVpower](https://forum.giveth.io/t/open-call-for-givpower-delegates/779)!