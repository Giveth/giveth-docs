---
id: TRACEinstallation
title: Instalando Giveth TRACE para Desenvolvimento Local
slug: dapps/TRACEinstallation
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import TraceDeprecated from './_traceDeprecatedPT.mdx'

<TraceDeprecated />


Esse é um guia abrangente que mostrará aos novos colaboradores sobre como executar o Giveth TRACE localmente. Estaremos lidando com 2 repositórios encontrados no Github Giveth: o [**`giveth-dapp`**](https://github.com/Giveth/giveth-dapp) para o front-end, [**`feathers-giveth`**](https://github.com/Giveth/feathers-giveth) para a interface de contrato inteligente e banco de dados de back-end.

## Instalação dos Feathers

![](https://docs.giveth.io/img/content/trace/feathers-header.png)

#### Pacotes e aplicativos necessários:

- yarn
- NodeJS v10.24.0
- MongoDB
- Redis
- MetaMask

#### Linux

Se o seu sistema operacional for qualquer distribuição do Linux, você pode usar os scripts de instalação todos em um.

Agradecimentos especiais ao colaborador do Dapp Jurek Brisbane, disponível [aqui](https://github.com/Giveth/giveth-dapp/files/3674808/givethBuildStartScripts_2019-09-29.zip) junto com um [vídeo](https://www.youtube.com/watch?v=rzLhxxAz73k&feature=youtu.be) do Youtube.

#### Qualquer OS

1. Clique em **Star** nesse repositório próximo ao canto superior direito dessa página (se quiser).
  2. Junte-se ao nosso [Discord](https://discord.giveth.io) se ainda não for um membro.
  3. Faça um Fork desse repositório clicando no botão **Fork** no canto superior direito dessa página. Continue seguindo as instruções de seu próprio repositório de Feathers.
  4. Os próximos devem ser feitos a partir da linha de comando do seu computador. Clone seu próprio repositório "feathers-giveth". Copie o link do botão "Clone or download" próximo ao canto superior direito da página inicial desse repositório.
 
 ``` bash
      git clone git@github.com:Giveth/feathers-giveth.git
 ```
      

5. Altere os diretórios para feathers-giveth:

```bash
      cd feathers-giveth/
```

6. Verifique se você tem [NodeJS](https://nodejs.org/) (v10.24.0), [yarn](https://www.yarnpkg.com/) (v0.27.5 ou superior) e npm (5.4.1 ou superior) instalados.

7. Instale as dependências do diretório feathers-giveth:

```bash
      yarn install
```

8. Instale o Mongo (recomendamos instalar via [Brew](https://treehouse.github.io/installation-guides/mac/mongo-mac.html)).

8. Execute o Mongo em seu terminal `mongod` ou em segundo plano `mongod --fork --syslog`.

9. Instale o Redis (recomendamos instalar via Brew `brew install redis`)

10. Execute o Redis na janela do terminal `redis-server` ou em segundo plano `redis-server --daemonize yes`.

11. (opcionalmente) Instale o [IPFS](https://ipfs.io/docs/install/) (recomendamos instalar via [Brew](https://brew.sh/)).

**Se você não instalar o ipfs, o upload da imagem será afetado. Você pode atualizar o valor de configuração `ipfsGateway` para usar um gateway ipfs público ex. [https://ipfs.io/ipfs/](https://ipfs.io/ipfs/), mas seus uploads serão removidos em algum momento.*

## Execute o Servidor 

O servidor Feathers precisará se conectar a um node Ethereum via WebSocket. Normalmente, essa será uma instância TestRPC local.

O parâmetro de configuração `blockchain.nodeUrl` é usado para estabelecer uma conexão. O nodeUrl padrão é `ws://localhost:8545`

1. Precisamos implantar qualquer contrato para o qual pretendemos chamar. *NOTA:* O próximo cmd limpará o diretório `data`, iniciando assim em um estado limpo.

 ```bash
   yarn deploy-local
 ```

Após a implantação local, certifique-se de copiar e colar o endereço MiniMeToken em default.json.

2. Fornecemos uma maneira fácil de iniciar a bridge & 2 instâncias de ganache-cli. *MUITO IMPORTANTE:* esse comando habilita as redes Home Ganache e Foreign Ganache; se você estiver usando a MetaMask, você precisará **adicionar um RPC personalizado** à sua configuração de rede; `http://localhost:8546` será Foreign Ganache, e Home Ganache é normalmente adicionado por padrão, que é `http://localhost:8545` se necessário.


 ```bash
    yarn start:networks
 ```

3. Como a bridge & ganache-cli agora está em execução, abra uma nova janela de terminal e navegue até o mesmo diretório feathers-giveth.

4. Opcionalmente, abra uma nova janela terminal e inicie o daemon ipfs.

```bash
   ipfs daemon
```

5. Execute os arquivos de migração de banco de dados (se for a primeira vez que você deseja iniciar o aplicativo, não será necessário executar as migrações).

  ```bash
    ./node_modules/.bin/migrate-mongo up
  ```
  
6. Inicie seu aplicativo.

```bash
    yarn start
```

### Kill Ganache

Se você encontrar erros como o saldo da carteira não carregando, é muito provável que o Ganache esteja travado.

`netstat -vanp tcp | grep 8545`

Encontre o processo que está sendo executado em `*.8545` e `127.0.0.1.8545`, e mate-o com `kill -9 PID` (localizado na última coluna).

### IPFS Support
 
 Se o `ipfsApi` for um node ipfs válido ao qual podemos nos conectar, iremos fixar cada hash ipfs armazenado em feathers. Atualmente, não removemos nenhum hash ipfs órfão (hashes sem referências em feathers). No futuro, forneceremos um script que você pode executar como um cronjob para desafixar quaisquer hashes órfãos.

### Vídeo Passo a Passo

Vídeo tutorial: https://tinyurl.com/y9lx6jrl

### Scripts

O diretório `feathers-giveth/scripts` contém alguns scripts para ajudar no desenvolvimento.

* `deploy.js` - implanta um novo contrato de vault e liquidPledge

* `getState.js` - imprime o estado atual dos contratos de vault e liquidPledgeing implantados

* `confirm.js` - confirma todos os pagamentos pendentes na vault

* `makeUserAdmin.js` - torna um usuário administrador

### Testando

Simplesmente execute `yarn test`, e todos os seus testes no diretório `/src` serão executados.

Estão incluído alguns testes de integração, portanto, para executar testes, você precisa executar um mongodb em seu sistema local (na porta 27017).

### Debugging

Você pode controlar o nível de log com a variável env `LOG_LEVEL`. Os níveis disponíveis podem ser encontrados em: https://github.com/winstonjs/winston/tree/2.x#logging-levels

Para habilitar o registro de depuração, basta iniciar o servidor com `LOG_LEVEL=debug yarn start`.

### Produção

Usamos o docker-compose para orquestrar nossos docker containers em nossos servidores de produção.

* certifique-se de ter um arquivo chamado `production.json` na pasta config.

* Instale o docker e o docker-compose em seu servidor.

* execute esse comando: `docker-compose -f docker-compose-production.yml up -d`.


PS: É bom ver Github Actions config(`./.github/workflows/CI-CD.yml`) para entender melhor a estrutura de implantação.

## RSK

1. Você precisará baixar o [rsk node](https://github.com/rsksmart/rskj/wiki/Install-RskJ-and-join-the-RSK-Orchid-Mainnet-Beta). Após a instalação, você executará o node com a rede `regtest` para desenvolvimento local.

```
  java -jar rskj-core-0.5.2-ORCHID-all.jar co.rsk.Start --regtest
```

ou

```
  java -Drsk.conf.file=rsk.conf -jar rskj-core-0.5.2-ORCHID-all.jar co.rsk.Start
```

2. Precisamos implantar todos os contratos que pretendemos chamar. *NOTA:* Você também precisará garantir que seu node rsk esteja em um estado limpo (redefinido) para que os endereços configurados estejam corretos.

```
   npm run deploy-local:rsk
```

3. Opcionalmente, abra uma nova janela de terminal e inicie o daemon ipfs.

```
   ipfs daemon
```

4. Inicie seu aplicativo.

```
    yarn start:rsk
```

## Audit Log

O sistema de log de auditoria registra cada criação, atualização, patch e
Remover em **Campanhas**, **Traces**, **Eventos**, **Usuários**,
**PledgeAdmins**, **Comunidades**, **Doações**.
Para habilitar o log de auditoria localmente, você deve alterar o `enableAuditLog`
na configuração para `true`, então
* cd alce
* docker-compose up

Você pode ver os logs após logar em `localhost:5601` com usuário:`elastic`, senha: `changeme`.

### Uso

Cada um desses serviços está disponível via rRest ou WebSocket:

```
campaigns
communities
donations
donationsHistory
traces
uploads
users
emails
homePaymentsTransactions
subscriptions
```

Se o servidor estiver usando as configurações padrão, você poderá ver os dados de qualquer um desses serviços por meio do navegador da Web em `http://localhost:3030/SERVICE_NAME`

PS: Para acessar todos os recursos, como criar `comunidades` e `campanhas`, sugere-se tornar o campo `isAdmin` verdadeiro, para seu usuário em seu MongoDb local.

## Giveth DApp (Giveth TRACE front-end) Instalação

![](https://docs.giveth.io/img/content/trace/giveth-dapp-header.png)

### Começando

Nas seções a seguir, você aprenderá tudo o que precisa saber para executar o DApp localmente e começar a contribuir. Todas as etapas também são descritas nesse incrível [Video Tutorial Walkthrough](https://tinyurl.com/y9lx6jrl) de Oz.

#### Pré-requisitos

- NodeJS v10 LTS.
- yarn (v1.22.10 or higher)
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

1. Clique em **Star** no repositório [`giveth-dapp`](https://github.com/Giveth/giveth-dapp) próximo ao canto superior direito desta página da web (se desejar).

2. Junte-se a nós no [Element](http://join.giveth.io) ou [Discord](https://discord.gg/Uq2TaXP9bC)

3. Fork esse repositório clicando no botão **Fork** no canto superior direito desta página da web. Continue seguindo as instruções do seu próprio repositório giveth-dapp.

4. Clone seu próprio repositório "giveth-dapp". Copie o link do botão "Clone or download" próximo ao canto superior direito da página inicial deste repositório.

5. O restante dessas etapas deve ser feito a partir da linha de comando de sua máquina. Consulte a seção [OSX e Linux](#for-osx-and-linux) ou [Windows](#for-windows) para continuar.

#### <a id='for-osx-and-linux'>OSX and Linux</a>

Se o seu sistema operacional for qualquer distribuição do Linux, você pode usar os scripts de instalação todos em um. Agradecimentos especiais ao colaborador do Dapp Jurek Brisbane, disponível [aqui](https://github.com/Giveth/giveth-dapp/files/3674808/givethBuildStartScripts_2019-09-29.zip) junto com um [vídeo no Youtube](https://www.youtube.com/watch?v=rzLhxxAz73k&feature=youtu.be), caso contrário, tente o seguinte:

1. Do diretório desejado que você deseja copiar a pasta "giveth-dapp" com os arquivos de origem.

```bash
    git clone git@github.com:Giveth/giveth-dapp.git
```

NOTA: Por favor, use o branch `develop` para contribuir.

 ```bash
    git clone -b develop git@github.com:Giveth/giveth-dapp.git
```

2. Altere os diretórios para giveth-dapp:

```bash
    cd giveth-dapp
```

3. Certifique-se de ter [NodeJS](https://nodejs.org/) (v10) e [yarn](https://yarnpkg.com/) (v1.22.10 ou superior) instalados.

4. Instale as dependências do diretório giveth-dapp:

```bash
    yarn install
```

5. É isso - agora você está pronto para executar o giveth-dapp! Vá para a seção [Run DApp](#run) para obter mais instruções.

###  <a id='for-windows'>Windows</a>

1. Instale a versão mais recente do Python a partir desse [Link](https://www.python.org/downloads/). (Certifique-se de que o Python seja adicionado ao $PATH.)

2. Instale o Microsoft Visual Studio 2017 (verifique a versão) desse [link](https://download.visualstudio.microsoft.com/download/pr/3e542575-929e-4297-b6c6-bef34d0ee648/639c868e1219c651793aff537a1d3b77/vs_buildtools.exe). Giveth-Dapp precisa do módulo node-gyp e node-gyp precisa do VS C++ 2017 Build Tools para ser instalado.

3. Após o download, instale os pacotes marcados nessa [imagem](https://cdn.discordapp.com/attachments/849682448102457374/850480734291623946/unknown.png).

4. Em seguida, execute o comando abaixo no prompt de comando

```bash
   npm config set msvs_version 2017
```

5. Após isso, você deve instalar o NodeJS versão 10 [LTS](https://nodejs.org/dist/latest-v10.x/) (é melhor ser v10.24.1 LTS).

6. Baixe e execute o instalador node-v10.24.1-x64.msi e continue com a instalação normalmente. Certifique-se de ter a opção "Enable in PATH" habilitada antes de instalar.

7. Abra a linha de comando no modo de administrador clicando com o botão direito do mouse no aplicativo cmd.exe e selecionando "Executar como administrador"

8. No prompt de comando do administrador, mude para o diretório no qual deseja armazenar este repositório.

```bash
   cd C:\some\directory\for\repositories
```

9. Verifique novamente a versão do node com o comando CMD:

```bash
   node -v
```

10. Depois disso, instale a versão mais recente do Yarn. Tenha cuidado para não instalar pacotes com NPM. Se você já tentou "npm install", exclua a pasta "node modules" primeiro.

```bash
    yarn install
```

11. É isso - agora você está pronto para executar o giveth-dapp!

### <a id='run'>Execute</a>

1. O Dapp Giveth precisará se conectar a um servidor [feathers-giveth](https://github.com/Giveth/feathers-giveth). Siga as instruções readme feathers-giveth para instalar e executar o servidor antes de prosseguir. Alternativamente, você pode alterar a configuração para se conectar ao ambiente `develop`, veja a seção [Configuration](#configuration).

2. Inicie o Dapp.
```bash
    yarn start
```

3. Assim que o dapp estiver no seu navegador, clique em "Entrar" no menu principal.

4. Para testar localmente, escolha qualquer um dos arquivos da carteira encontrados na pasta `giveth-dapp/keystores/` usando a senha da carteira: `password`. **NÃO OS USE EM NENHUM EVM DA MAINNET.**

5. Usando o token de teste

Para usar o token de teste, você precisa importar o keystore.json usado em sua conta para a MetaMask.
   Após a importação, clique em 'Adicionar token' > 'Token personalizado' e insira o endereço do MiniMe Token que pode ser encontrado ao implantar os contratos
   (deve ser `0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab` por padrão, mas certifique-se de verificar).
   O saldo do token deve aparecer automaticamente e o símbolo do token é MMT.
   No entanto, no DApp o símbolo do token é referido como ANT, b/c o DApp precisa ser capaz de buscar uma taxa de conversão.
   
NOTA:
Ao redefinir os feathers ou reimplantar os contratos, você precisa remover o keystore da Metamask e seguir este procedimento novamente.

### Build
```bash
yarn run build
```

NOTA: devido a algumas bibliotecas web3 que não são transpiladas do es6, temos que usar nossos [giveth-react-scripts](https://github.com/Giveth/create-react-app/tree/master/packages/react-scripts) fork de scripts de reação.

### <a id='configuration'>Configuração</a>

O DApp possui muitas variáveis de ambiente de nodes que podem ser usadas para alterar o comportamento do DApp sem alterar o código. Você pode configurá-los através de arquivos `.env` ou `.env.local` na pasta DApp.

Nome Variável | Valor Padrão | Descrição|
---|---|---|
PORT | 3010 | Porta na qual o DApp é executado |
REACT_APP_ENVIRONMENT | 'localhost' | Local de feathers que o DApp deve se conectar. Por padrão, ele se conecta ao localhost feathers. Os valores permitidos são: `localhost`, `develop`, `release`, `alpha`, `mainnet`. Consulte [Ambientes de implantação](#deploy-environments). |
REACT_APP_DECIMALS | 8 | Quantos decimais devem ser mostrados para valores de criptomoeda. Observe que os cálculos ainda são feitos com 18 casas decimais. |
REACT_APP_FEATHERJS_CONNECTION_URL | Difere por REACT_APP_ENVIRONMENT | Substitui a URL de conexão de Feathers injetadas no ambiente. |
REACT_APP_NODE_CONNECTION_URL | Difere por REACT_APP_ENVIRONMENT | Substitui a URL de conexão do node EVM para fazer transações EVM.|
REACT_APP_LIQUIDPLEDGING_ADDRESS | Difere por REACT_APP_ENVIRONMENT | Substitui o endereço do contrato Liquid Pledge.|
REACT_APP_DAC_FACTORY_ADDRESS | Difere por REACT_APP_ENVIRONMENT | Substitui o endereço do contrato das Comunidades. |
REACT_APP_CAMPAIGN_FACTORY_ADDRESS | Difere por REACT_APP_ENVIRONMENT | Substitui o endereço do contrato do Campaign Factory. |
REACT_APP_MILESTONE_FACTORY_ADDRESS | Difere por REACT_APP_ENVIRONMENT | Substitui o endereço do contrato MilestoneFactory. |
REACT_APP_TOKEN_ADDRESSES | Difere por REACT_APP_ENVIRONMENT | Substitui os endereços de token em bridge. Esta é uma string de objeto JSON com nome do token: endereço do token. |
REACT_APP_BLOCKEXPLORER | Difere por REACT_APP_ENVIRONMENT | Substitui a URL base do explorador de blocos. O DApp assume que a API do blockexplorer é `\<BLOCKEXPLORER\>/tx/\<TRANSACTION_HASH\>` |
REACT_APP_DEFAULT_GASPRICE | 10 | Substitui o gasPrice padrão usado se o serviço ethgasstation estiver inativo. O valor está em gwei |
REACT_APP_ANALYTICS_KEY | "" |Substitui a chave de análise `Segment`.


Exemplo de arquivo `.env.local` que faz o DApp rodar na porta 8080, conecta-se ao ambiente **develop** e usa o blockexplorer customizado:

```bash
PORT=8080
REACT_APP_ENVIRONMENT='develop'
REACT_APP_BLOCKEXPLORER='www.awesomeopensourceexplorer.io'
```

O resto da configuração pode ser encontrada em `configuration.js`

### Análise

O Segment Analytics pode ser ativado definindo como REACT_APP_ANALYTICS_KEY.

### Strings de Consulta

A visualização de criação/proposta de milestones agora suporta argumentos de string de consulta!
Os seguintes argumentos estão disponíveis:

| Argumento | Valores Esperados | Tipos |
|------------------|------------------------------------------------------------|--------|
| título | Título do milestone | string |
| description | A descrição do milestone | string |
| recipientAddress | O endereço do Recipiente | string |
| reviewerAddress | O endereço do reviewer | string |
| selectedFiatType |Um tipo de fiat válido (i.e. USD) | string |
| date | Uma string de data de milestone válida | string |
| token | Um símbolo de token válido(i.e. DAI) | string |
| tokenAddress | Um endereço de token válido | string |
| maxAmount | Uma quantidade máxima de ETH ou token válidos| número |
| fiatAmount | Uma quantidade máxima válida de fiat (dependente do selectedFiatType) | número |
| isCapped | Determina se o milestone deve ser limitado | 0 or 1 (boolean) |
| requireReviewer | Determina se o milestone deve exigir um revisor | 0 or 1 (boolean) |

### Desenvolvimento Local

A princípio, você gostaria de executar o DApp localmente. Ao executar o `testrpc` localmente no modo `determinístico`, você pode usar qualquer um dos keystores no `giveth-dapp/keystores` como sua carteira.

Isso fornecerá acesso às contas testrpc para desenvolvimento local. Cada keystore usa a mesma senha: `password`. **NÃO OS USE EM NENHUM EVM DA MAINNET**

Os keystores são semeados com 10.000 tokens ANT para testar doações. Antes de começar a testar doações,
certifique-se de adicionar o keystore da sua conta ao MetaMask e mude a MetaMask para Ganache. O modal de doação deve
em seguida, mostre o saldo apropriado ao doar em tokens ANT

**NOTA**: Se você receber um erro nonce na MetaMask ou se o DApp não carregar com a sua MetaMask desbloqueada, pode ser que a MetaMask esteja confusa. Para resolver isso, vá em "configurações" -> "Redefinir conta" na MetaMask para redefinir os dados da conta nonce & cache.

### Desenvolvimento e testes de relações públicas

1. O Giveth Dapp é implantado automaticamente a partir da branch de desenvolvimento e está disponível no Rinkeby [develop.giveth.io](https://develop.giveth.io). Todas as pull requests são implantadas automaticamente e a visualização de PR será gerada após o envio. Para saber como acessar as visualizações de relações públicas, consulte [Processo de desenvolvimento e garantia de qualidade](https://wiki.giveth.io/documentation/DApp/product-development-testing/) em nosso wiki.

2. Para usar o DApp você precisará criar uma conta. Se essa é sua primeira vez, clique em "inscrever-se" e faça seu registro. Se você já tiver uma keychain válida, use-a para fazer login.

3. Você precisará do ether de teste na rede Rinkeby. Visite a sua "carteira" para ver seu novo endereço (0x..). Copie esse endereço e use o Faucet para obter alguns: https://faucet.rinkeby.io/.

### <a id='deploy-environments'>Ambientes de Implantação</a>

Na Giveth, estamos usando o modelo de branch [gitflow](http://nvie.com/posts/a-successful-git-branching-model/) para implantar em 4 ambientes diferentes.

Nome | Blockchain | Branch Deployed | Auto Deploy | Uso |
-----|------------|-----------------|-------------|-----|
[mainnet](https://mainnet.giveth.io) | Ethereum Main Network | master | não | A implantação da mainnet por enquanto está abandonada devido aos altos custos de transação até que uma solução sustentável seja encontrada.
[alpha](https://alpha.giveth.io)  | Rinkeby Test Network | master | não | Ambiente usado como versão de produção até que a escalabilidade seja resolvida.
[release](https://release.giveth.io) | Rinkeby Test Network | release | sim | Ambiente para teste de controle de qualidade de release candidate por não desenvolvedores.
[develop](https://develop.giveth.io) | Rinkeby Test Network | develop | sim | Ambiente de desenvolvimento para integração de novos recursos. As ramificações de recurso e pull request também são implantadas automaticamente nesse ambiente.


Você pode alterar o ambiente ao qual o DApp se conecta por meio das variáveis de ambiente do node. Consulte a seção [Configuração](#Configuration) para obter mais detalhes.
