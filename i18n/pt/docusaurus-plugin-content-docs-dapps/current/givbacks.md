---
id: givbacks
title: GIVbacks
slug: giveconomy/givbacks
---
import useBaseUrl from '@docusaurus/useBaseUrl';

GIVbacks é um conceito revolucionário que recompensa doadores para projetos verificados com tokens GIV. Ao doar para projetos verificados durante uma rodada de GIVbacks, você se torna elegível para receber recompensas GIV após o término da rodada e o GIV estará pronto para ser coletado. Você pode acompanhar as  informações ao vivo --- incluindo cronograma de rodadas e o seu GIV disponível para ser coletado. --- na [página GIVbacks](https://giveth.io/givbacks).

## Rodadas de GIVbacks

As rodadas de GIVbacks duram duas semanas. Para cada rodada, há 1 milhão de GIV disponíveis para serem recompensados.

![](https://i.imgur.com/cBBSzJa.png)

Doadores que doam para projetos verificados em uma rodada ativa são elegíveis para receber GIVbacks. Observe que os endereços de projetos verificados não receberão GIV por doações feitas para seu próprio projeto ou outros projetos verificados.

![](https://i.imgur.com/aklPnKC.png)

## Verificação do Projeto

'Verificado' é um selo de aprovação para projetos legítimos na Giveth. Muitos projetos verificados foram pré-aprovados na API [The Giving Block](https://twitter.com/TheGivingBlock). The Giving Block é uma organização que suporta e integra 501c3s registrados dos Estados Unidos em crypto e, com nossa integração, você pode doar para seus projetos a partir da interface do usuário da Giveth.

Para projetos non-Giving Block, o processo de verificação exige que os projetos forneçam informações adicionais sobre seu projeto e o impacto pretendido na organização. Nossa incrível Equipe de Verificadores de Projetos analisa esses aplicativos, investiga as informações fornecidas e informa aos proprietários do projeto sobre o veredicto.

Para saber mais sobre o processo de verificação do projeto, confira nossa [documentação](./projectVerification.md).

## Tokens Elegíveis para GIVbacks

Um doador pode doar qualquer token ERC-20 para projetos na Giveth.io, na Gnosis Chain (antiga xDai Network) ou Ethereum Mainnet. No entanto, apenas doações para projetos verificados em determinados tokens são elegíveis para GIVbacks. Essa restrição garante que possamos obter dados precisos de preços para doações (um requisito para distribuição justa de GIVbacks) e impede que maus atores joguem no programa GIVbacks. Para ver a lista completa de tokens qualificados, visite [essa postagem do fórum](https://forum.giveth.io/t/givbacks-token-list/253).

## Obtendo GIVbacks

Durante cada rodada, todas as doações para projetos verificados no DApp são rastreadas, e esses dados são usados ​​para calcular a quantidade de GIVbacks recebidos por cada Doador naquele período.

Os doadores podem reivindicar seu GIV após o término da rodada e uma revisão de fraude ter sido realizada. Os doadores receberão um e-mail quando as recompensas estiverem prontas para serem reivindicadas na [página GIVbacks](https://giveth.io/givbacks). Uma parte do GIV será líquidada imediatamente e o restante aumentará a vazão da sua [GIVstream](https://giveth.io/givstream). Para saber mais sobre a GIVstream e como ela funciona, confira nossa [documentação](./givstream.md). Para os fins desta documentação, nos referiremos à soma do valor líquido e o valor alocado a GIVstream dos GIVbacks como `GIVbacks cumulativos`.

### Classificação e cálculo

Observe que, mesmo com o programa GIVbacks, uma doação no Giveth ainda é uma doação. O valor máximo dos "GIVbacks cumulativos" do doador pode ser de 50% a 80% do valor em dólares de sua doação, no momento da doação. A quantidade exata de GIVbacks que eles recebem dependerá do [ranking GIVpower do projeto](./GIVpower.md#project-ranking).Cada projeto verificado que foi impulsionado com [GIVpower](./GIVpower.md) terá uma classificação na plataforma. O projeto que foi impulsionado com mais GIVpower para a rodada quinzenal anterior oferecerá a maior porcentagem de correspondência de GIVbacks (80%), enquanto o projeto com classificação mais baixa e os projetos sem classificação/não impulsionados para a rodada anterior receberão a menor porcentagem de correspondência de GIVbacks (50%). Cada projeto de baixo para cima terá uma porcentagem de correspondência de GIVbacks incrementalmente maior, você pode saber mais na [documentação do GIVpower](./GIVpower.md#project-ranking).

Se, no final de uma rodada, o valor estimado de GIVbacks para distribuir exceder o limite de 1 milhão de GIV por rodada, os doadores receberão proporcionalmente menos correspondência em relação à classificação do projeto (ou falta dela) para o qual doaram, para cada doação. Isso é calculado da seguinte forma:

$$
n = N \frac{g}{G}
$$

Onde:

- n = Quantidade total acumulada de tokens GIV ganhos pelo doador para uma doação específica.
- N = Número total de tokens GIV alocados para distribuição na rodada (1 milhão de GIVs).
- g = O valor total estimado de GIVbacks que o doador poderia receber.
- G = Valor total estimado de GIVbacks para todos os doadores durante a rodada.

Os tokens GIV obtidos por meio do programa GIVbacks podem ser usados em toda a GIVeconomy: para governança dentro do [GIVgarden](https://giveth.io/givgarden), para dar suporte ao token fornecendo liquidez (e ganhando recompensas!) no [GIVfarm ](https://giveth.io/givfarm), bloqueando GIV e impulsionando projetos com [GIVpower](https://giveth.io/givpower) ou para doar para projetos em [Giveth](https://giveth.io/).
## Colhendo GIVbacks

Os GIVbacks estão disponíveis para serem coletados após o término da rodada, os dados foram revisados ​​e o GIV é distribuído para endereços de doadores elegíveis. Os doadores receberão um e-mail quando as recompensas em GIVbacks estiverem prontas para serem reivindicadas - esse GIV pode ser colhido [aqui](https://giveth.io/givbacks). Observe que, quando você coleta recompensas GIV de qualquer parte da GIVeconomy, nosso contrato de distribuição de token envia todos os GIV líquidos alocados para seu endereço nessa rede. Por exemplo, quando você colhe recompensas GIV ganhadas ao apostar fichas LP no GIVfarm na Gnosis Chain (antiga xDai Network), você também colhe recompensas alocadas a você em GIVbacks (se houver) e o valor líquido da sua GIVstream. Isso é detalhado no pop-up de colheita que você encontra ao reivindicar:

![](https://i.imgur.com/GVpn68a.png)


---
## Fatores Desqualificantes para o Programa GIVbacks

Quando uma rodada de GIVbacks termina, há um período de tempo concedido à nossa equipe para revisar projetos e doações sinalizadas para os seguintes fatores desqualificadores antes que o GIV seja distribuído aos doadores. Um projeto pode ter seu status Verificado revogado se algum desses fatores forem encontrados. Os doadores de projetos que forem encontrados com qualquer uma das atividades a seguir também podem ter seus GIVbacks negados para essa rodada.

1. **Dar/oferecer bens ou serviços a doadores em troca de sua doação.**
Um proprietário de projeto não pode oferecer bens como um patrocínio para uma conferência, compras de biscoitos ou ingressos para um show, mesmo que os lucros sejam destinados à caridade. Os proprietários do projeto não podem fornecer serviços como atuar numa troca de cryptomoedas com seus doadores. Eles podem explicar como fazer uma troca, mas não podem converter o dinheiro para seus doadores.
2. **Circulando doações arrecadadas por outros meios.**
Apenas doações de “primeiro toque” contam para GIVbacks. Se um projeto receber financiamento de um doador e estiver circulando essas doações na plataforma Giveth para receber GIVbacks, ele será desqualificado. Por exemplo, um projeto não deve enviar doações fiduciárias recebidas em outro lugar para seus doadores e pedir que doem na Giveth com criptomoedas.
3. **Os fundos não estão sendo usados para o que está relatado na página do projeto ou na solicitação de verificação enviada.**
Projetos verificados são responsáveis por manter seus projetos atualizados com informações sobre como os fundos estão sendo usados. Se o projeto declarar explicitamente que está, por exemplo, usando os fundos para desenvolver programas de educação, mas é descoberto que os fundos estão sendo usados para empregar desenvolvedores, eles podem ser desqualificados do programa GIVbacks.
4. **Atividade sem escrúpulos ou fraudulenta.**
Isso pode ser o uso de violência, violação de leis ou outro comportamento que não respeite os [valores da comunidade Giveth](/whatisgiveth/). Os projetos que violarem nossos [Termos e Condições](https://giveth.io/tos) não apenas perderão o status de verificado, como também serão cancelados.

A equipe de Verificadores de Projetos da Giveth é responsável por monitorar as atividades de GIVbacks e o sistema de Verificação de Projeto e, em última análise, usará seu critério para determinar se as ações de um projeto são inescrupulosas e/ou desqualificantes.

## Sanções para Doações Sinalizadas

Projetos verificados e doações sinalizadas por qualquer um dos fatores desqualificadores acima serão analisados ​​e discriminados de acordo com as sanções descritas aqui:

- Um doador cujos GIVbacks foram revogados porque foram encontrados fundos de recirculação ou doados para um projeto que foi desqualificado para aquela rodada receberá um e-mail com um link para a postagem do fórum discutindo doações elegíveis para aquela rodada. As doações não podem ser reembolsadas e os GIVbacks não podem ser “revogados” se o projeto for desqualificado da rodada.

Doações são doações e vão diretamente para o projeto. O programa GIVbacks foi criado para capacitar adicionalmente nossos doadores com GIV e, portanto, direitos de governança, mas você não deve fazer uma doação puramente com a expectativa de receber GIV. Agradecemos a sua compreensão.

---
**O programa GIVbacks é a nossa forma de retribuir nossos doares. É a nossa saída para a comunidade - capacitando doadores reais com poder de governança sobre o futuro da Giveth e, portanto, o futuro da doação. Para receber GIVbacks, [comece a doar para projetos verificados hoje](https://giveth.io/projects)!**
