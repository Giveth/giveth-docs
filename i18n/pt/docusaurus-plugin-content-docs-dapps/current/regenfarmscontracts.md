---
id: regenFarmContracts
title: Guia de Contrato Inteligente do Regen Farm
slug: dapps/regenFarmContracts
---

GIVeconomy é uma coleção de Smart Contracts auditados que trabalham juntos para fornecer recursos, incluindo: token streaming, airdrop e vários tipos de farming. Contratos e scripts podem ser encontrados no repositório **Giveth**: [giv-token-contracts](https://github.com/Giveth/giv-token-contracts).

## Contratos
### Streaming

Streaming permite que quaisquer recompensas (ex: airdrop, recompensa por mineração de liquidez, ...) sejam liberadas gradualmente ao longo de um determinado período de tempo, em vez de toda a soma se mover imediatamente para a carteira do usuário final. Para conseguir isso, cada pagamento de recompensa aos usuários será uma `alocação` na stream em vez de uma tradicional `transferência/transferência segura`.

Cada instância de uma **Stream** é implantada com estes parâmetros de configuração:

* **Total de Tokens:** quantidade total de tokens que serão distribuídos durante o período de stream.
* **Hora de Início:** o carimbo de hora em que a stream começa.
* **Duração:** duração total da transmissão. No final do fluxo, 100% dos tokens são liberados e podem ser reivindicados pelos destinatários.
* **Período de Cliff:** a duração de um período inicial após o início da transmissão. Durante este período, apenas a porcentagem inicial da stream pode ser reivindicada e só.
* **Porcentagem Inicial:** a porcentagem de recompensas imediatamente resgatáveis durante o *Período Cliff*

O **TokenDistro** é o smart contract que implementou o recurso de streaming. Qualquer smart contract ou usuário elegível pode chamar o método `allocate` no **TokenDistro** para adicionar ao saldo da stream do destinatário. Os contratos ou usuários qualificados que podem chamar `allocate` devem ter a função **DISTRIBUIDOR** para o smart contract **TokenDistro**. Eles são chamados de **Distribuidores**. Cada Distribuidor tem um saldo que pode distribuir. Portanto, em cada alocação, o valor alocado enviado é reduzido do saldo da distribuidora e adicionado ao saldo do destinatário.

Uma porcentagem do valor alocado é exigível imediatamente, e a porcentagem restante vai para o aumento no flowrate da stream do destinatário. Flowrate (taxa de fluxo) é uma expressão de quantos tokens se tornam resgatáveis da sua stream durante um período semanal. Com o tempo, uma porcentagem maior do saldo do destinatário poderá ser reivindicada imediatamente após a expansão contínua da stream.

### AirDrop

A distribuição inicial do token pode ser feita pelo smart contract **MerkleDistro**. Ele utiliza a teoria da *Merkle Tree* e cada destinatário elegível deve fornecer seus próprios dados de prova exclusivos para reivindicar seu airdrop. O valor do airdrop será alocado chamando `allocate` no **TokenDistro** e será adicionado ao saldo da stream do usuário.

Cada instância do **MerkleDistro** é implantada com estes parâmetros de configuração:

* **Merkle Tree Root:** A chave da Merkly Tree Root.
* **Endereço do TokenDistro:** O endereço da instância do TokenDistro implantado.

 Para implantar o smart contract **MerkleDistro**, o implantador deve gerar uma Merkly Tree. O valor de root será usado no smart contract no momento da implantação, e todos os dados da Tree são necessários para obter o caminho exclusivo de cada usuário para o root. No repositório [giv-token-contracts](https://github.com/Giveth/giv-token-contracts), existe um script para gerar dados da merkle tree.
 
```
ts-node scripts/generate-merkle-root.ts --input <airdrop json file path> --output <output file path>
```

Um formato JSON dos dados do airdrop não é fácil de gerar para todos, um `arquivo json do airdrop` pode ser gerado por um script separado de um arquivo CSV, que é um formato mais conveniente.

```
ts-node scripts/csv2json.ts <airdrop csv list path> <airdrop json file path>
```

### Farming

A Giveth usa o **UnipoolTokenDistro**, um derivado do smart contract *Unipool*, para farming.

A diferença é que o **UnipoolTokenDistro** paga as recompensas dos apostadores chamando o método `allocate` no *TokenDistro(stream)* em vez de transferir tokens reais para o endereço do destinatário.

Geralmente, o contrato Unipool recompensa os stakers com base na liquidez que eles deram em stake. O token de liquidez é denominado `uni` depositado pelos stakers e pode ser qualquer token, como token nativo (por exemplo, GIV, FOX, ...) ou um token LP obtido por fazer staking em uma pool (por exemplo, UniswapV2, SushiSwap, HoneySwap, . ..).

O valor da recompensa Unipool é definido chamando o método `notifyRewardAmount(uint256 reward)` pelo **rewardDistribution**. **rewardDistribution** pode ser definido pela função **owner** e, no script de implantação, o implantador define seu próprio endereço como **rewardDistribution** por padrão. Cada vez que este método é chamado, a Unipool irá definir para distribuir recompensas no período de `duração` para os stakers.

Portanto, o distribuidor de recompensas precisa ligar regularmente para `notifyRewardAmount` para manter uma taxa de recompensa positiva e ajustar a taxa de recompensa, pois ela pode ser diferente em cada rodada. Cada instância do **UnipoolTokenDistro** é implantada com esses parâmetros de configuração:

* **Endereço do TokenDistro:** O endereço da instância do TokenDistro implantada.
* **Endereço do token Uni:** O endereço do token de liquidez
* **Duração:** A duração da rodada de cada programa recompensador

## Implantação

A implantação de um fluxo com farms e airdrops são complicadas e seriam suscetíveis a erros caso seja feita manualmente. Portanto, a [giv-token-contracts](https://github.com/Giveth/giv-token-contracts) possui scripts para facilitar. A maioria desses scripts são adaptadas para casos de uso GIVeconomy.

No entanto, um script está preparado para as DAOs implantarem suas próprias streams (tokenDistro) e programas de farming (Unipools). O script pode ser encontrado no caminho `deployments/regenFarms/1_regenFarm.ts`. O script lê a configuração de implantação do arquivo `deployments/regenFarms/config.ts`. O formato de configuração em `config.ts` é o seguinte:

```
const config: IRegenConfig = {
    alreadyDeployedTokenDistroAddress: "",
    newTokenDistroParams: {
        startTime: <start time timestamp>
        cliffPeriod: <cliff time duration seconds>
        duration: <duration seconds>
        initialPercentage: <percentage number, like 20_00>, // two decimals of precision, 20_00 means 20%
        tokenAddress: <Reward token address>
        totalTokens: <Total number of tokens to distribute limit>, // In ether format
        cancelable: <boolean>, // whether admins can cancel an allocation
    },
    unipools: {
        <Key>: {
            uniTokenAddress: <unit token address>,
            lmDuration: <unipool reward round duration seconds>
            rewardAmount: <Unipool balance on token distro>, // Number of tokens it can allocate
        },
        ...
    },
};
```

Para implantar via script essas variáveis de ambientes devem ser definidas:

* **INFURA_PROJECT_ID:** Quando a rede não é xDai (Gnosis-Chain)
* **PRIVATE_KEY:** A chave privada da conta do implantador, usada quando a rede não é xDAI (Gnosis-Chain)
* **PRIVATE_KEY_XDAI:** a chave privada da conta do implantador, usada quando a rede é xDAI (Gnosis-Chain)

O script pode ser executado por esse comando:
```
HARDHAT_NETWORK=<network e.g. xDAI, mainnet, kovan> ts-node deployments/regenFarms/1_regenFarm.ts
```