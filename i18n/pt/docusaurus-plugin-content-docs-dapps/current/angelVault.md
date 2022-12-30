---
id: angelVault
title: The Angel Vault
---

import useBaseUrl from '@docusaurus/useBaseUrl'

O Angel Vault é uma posição Univ3 estrategicamente gerida e estruturada para proteger o GIV da volatilidade descendente. Ele é gerenciado por nosso multisig do Angel Vault, um [multisig de 4/7 dos membros da equipe principal da Giveth e dois membros para o ICHI](https://gnosis-safe.io/app/eth:0x2B0ee142dCFE7C2dD150cDbd7B6832F6e9977f51/home). Para saber mais sobre Angel Vaults e como eles funcionam, consulte a [documentação do ICHI.](https://docs.ichi.org/ichi-docs-v3/ichi-vaults/angel-vaults).

## Contratos

- Angel Vault (ICHI) LM (Unipool): `0xA4b727DF6fD608d1835e3440288c73fB28c4eF16`
- Angel Vault (ICHI) LP: `0xc3151A58d519B94E915f66B044De3E55F77c2dd9`

## oneGIV

oneGIV é uma taxa de dólar de marca Giveth1:1 (por ICHI). Isso pode ser feito através do site da [ICHI](https://app.ichi.org/vault?poolId=20009&back=vault). Para saber mais sobre o dólar da marca ICHI, [consulte a documentação](https://docs.ichi.org/ichi-docs-v3/branded-dollars/overview).

oneGIV é cunhado usando 100% DAI e também é supercolateralizado pelo GIV. O contrato mantém o GIV como garantia adicional caso haja algum problema com a DAI. Todos os mints & burns do oneGIV acontecem através de um contrato gerenciado pelo nosso multisig Angel Vault.

Com o tempo, o Giveth DAO pode votar para alterar a taxa de cunhagem de 100% DAI para uma combinação de DAI e GIV (por exemplo, 80% DAI, 20% GIV). No entanto, para manter a paridade com o dólar, queimar um GIV para resgatar o DAI sempre resultará em 100% do DAI.

## Fornecendo e removendo liquidez

Provedores de liquidez podem adicionar liquidez ao Angel Vault usando oneGIV através do [ICHI’s website](https://app.ichi.org/vault?poolId=20009&back=vault), Ie, em seguida, apostar seus tokens LP no [GIVfarm](https://giveth.io/givfarm). Como este oneGIV é adicionado a uma posição oneGIV / GIV Univ3, quando você remove a liquidez, você recebe umGIV e GIV proporcional às participações no Angel Vault.

## Ganhando Recompensas

Recompensas são dadas aos provedores de liquidez na proporção da liquidez fornecida. Ao apostar seus tokens LP, você ganha recompensas em duas partes:

1. A taxa de 1% Uniswap aumenta automaticamente sua posição no Angel Vault ([IRR](https://docs.ichi.org/ichi-docs-v3/resources/faqs#what-does-the-irr-metric-on-the-angel-vault-page-represent)).
2. Incentivos GIV de dentro do GIVfarm, que como sempre, são distribuídos de acordo com o GIVstream. Confira a [**Expansão GIViverse**](https://giveth.io/givstream) para entender quanto serão suas recompensas resgatáveis.

A APR mostrada no staking pool GIVfarm oneGIV/GIV é a soma dessas duas taxas de recompensa.

<img alt="angel vault staking farm staking card" src={useBaseUrl('/img/content/giveconomy/angelVaultCard.png')} />

## Distribuição de recompensas GIV para os LP Stakers do Angel Vault

Um total de 6 milhões de GIV foi alocado para executar um programa de recompensas para os apostadores do Angel Vault LP por 26 semanas a partir da data de início em 4 de agosto de 2022. A quantidade de recompensas enviadas ao longo de cada período de duas semanas é a seguinte:

| Semana    | GIV recompensado (dentro do período de 2 semanas) | % de recompensas |
| --------- | ------------------------------------------------- | ---------------- |
| Semana 1  | 485,143                                           | 8.09%            |
| Semana 3  | 569,143                                           | 9.49%            |
| Semana 5  | 140,000                                           | 2.33%            |
| Semana 7  | 653,143                                           | 10.89%           |
| Semana 9  | 140,000                                           | 2.33%            |
| Semana 11 | 737,143                                           | 12.29%           |
| Semana 13 | 140,000                                           | 2.33%            |
| Semana 15 | 821,143                                           | 13.69%           |
| Semana 17 | 140,000                                           | 2.33%            |
| Semana 19 | 905,143                                           | 15.09%           |
| Semana 21 | 140,000                                           | 2.33%            |
| Semana 23 | 989,143                                           | 16.49%           |
| Semana 25 | 140,000                                           | 2.32%            |

### Plano de incentivos — A escada irregular

Quando o Angel Vault for inicializado, toda a sua liquidez estará em umGIV. Isso é benéfico, pois o Angel Vault funciona melhor quando há uma alta porcentagem de um GIV no cofre, mas essa porcentagem não permanece estável ao longo do tempo.
A proporção de GIV aumenta quando há pressão de venda no mercado sobre o token GIV.
A proporção de umGIV aumenta quando novas posições de LP do Angel Vault são criadas.
A proporção de GIV/oneGIV permanece a mesma quando as posições do Angel Vault LP são removidas.
Portanto, queremos incentivar os provedores de liquidez a retirar liquidez periodicamente —  removendo parte do GIV do pool — e, em seguida, adicionar novamente liquidez em umGIV, aumentando a concentração total de estábulos no Angel Vault. Isso ajudará a apoiar a força da parede de compra do Angel Vault.

<img alt="cronograma de distribuição de recompensas para escada irregular" src={useBaseUrl('/img/content/giveconomy/jaggedStaircase.png')} />
