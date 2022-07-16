---
id: testing-guidelines
title: Diretrizes de teste da Giveth.io
slug: dapps/testing-guidelines
---


Este guia fornece uma estrutura para testar o DApp Giveth.io.

Cada caso de uso tem um problema correspondente (linkado nos títulos abaixo) em nosso GitHub. Esses problemas serão encerrados após o teste de cada sprint e reabertos para o seguinte. Se você deseja testar um caso de uso, atribua-se ao problema para esse sprint.

## Requisitos

* O teste do usuário deve ser feito em https://next.giveth.io - **Nosso ambiente de teste é implantado em Ropsten (Mainnet) e Gnosis Chain** (anteriormente Rede xDai).
* Por favor, use um navegador moderno. Se você encontrar um bug, tente a mesma coisa com outro navegador. Por favor, reporte um problema em qualquer caso, mas diga-nos se o problema pode ser específico do navegador.
* Use problemas no [GitHub](https://github.com/Giveth/giveth-next/issues) para relatórios e comentários.

## Casos de Uso

As ações a seguir são definidas como funcionalidade principal. Se uma dessas etapas estiver com erros, isso representa um erro crítico.

### [Em geral](https://github.com/Giveth/giveth-2/issues/800)

Este caso de uso será parcialmente automatizado, mas requer testes de usuário, especialmente para garantir que todos os links externos funcionem corretamente.

### **Pagina inicial**

* Veja a página inicial, passe o mouse sobre os cartões do projeto para ver carregar mais e o botão doar
* Verifique todos os links na página inicial
* Verifique todos os links de rodapé, incluindo links sociais
* Projetos "Gostando" - atualizações bem-sucedidas e "contagem de corações"
* Os botões da barra de navegação do cabeçalho (`Início`, `Projetos`, `GIVeconomy`, etc.) são funcionais
* "GIV atualmente na carteira" (na barra de navegação) mostra corretamente (endereço do token: `0x4f4F9b8D5B4d0Dc10506e5551B0513B61fD59e75`)
* Emblemas do projeto, como `Verificado`, `Rastreável`, `Novo`, são exibidos corretamente

![](https://i.imgur.com/U7BXUXu.png)

* Inscrição para newsletter
* Assinar e-mails - validação de e-mail, assinatura com sucesso
* O menu suspenso da minha carteira está funcional
* O nome/endereço da conta é exibido corretamente na barra de navegação quando conectado
* Reportar um erro
* Entrar/sair
* Verifique se os projetos aparecem na página do projeto (formato correto, número correto)
* Links dentro de https://giveth.io/join são funcionais
* O conteúdo dentro de https://giveth.io/about é exibido corretamente, incluindo as guias `Missão e Visão`, `Histórico` e `Equipe`

### **Página de perfil público**

Visualizar página de perfil público - quando você clica no proprietário do projeto

![](https://i.imgur.com/ynwDYpI.png)

* Navegue em todas as guias e verifique se todos os dados deste perfil estão corretos
* Por exemplo: o número de doações, o valor recebido e doado e também o número de projetos devem ser precisos
* Na aba de doação, teste o link tx, classificando por valor, valor em USD e data
* Verifique se o valor em USD está correto
* Teste o endereço de cópia do usuário e também teste o link externo

![](https://i.imgur.com/VhXRVc2.png)

### **Página de projetos**

Visualize a lista de projetos clicando nos links de projetos no cabeçalho

* Certifique-se de que os crachás de verificação e rastreamento estejam funcionando corretamente
* Se assinado, veja corações vermelhos - remova os corações. Se você não estiver conectado: você deve ser solicitado a entrar antes de continuar

**Classificação de teste por /filtro/pesquisa**

* Filtre por categoria e verifique se a filtragem funciona bem
* Classificar por Valor arrecadado, mais novo, mais antigo, corações
* Na ordenação por campo, temos alguns itens que devem atuar como os itens filtrados: Aceitar token GIV (todos os projetos excluindo projetos Giving Block) - Trace - Verificado. Todos eles devem filtrar os resultados
* Na pesquisa, você pode encontrar facilmente resultados por título, descrição, local de impacto (o proprietário do projeto não pode ser pesquisado agora, mas está implementando)
* Se nenhum resultado for encontrado, a formatação da página de nenhum resultado deve parecer normal
* Voltar - na caixa de pesquisa deve limpar a entrada e mostrar todos os projetos
* De volta ao sem resultado também deve fazer o acima

### **Visualização pública do projeto**

Visão pública significa a visão que todos podem ver. Se você for o proprietário deste projeto e estiver conectado, poderá ter outra visualização, chamada visualização Proprietário do Projeto, que pode ser vista no documento a seguir.

* Visualização pública de página única do projeto - ao clicar em saiba mais, você pode visualizar os detalhes do projeto
* A guia Sobre deve mostrar a descrição do projeto
* Barra lateral: botão doar, passe o mouse sobre o botão para ver a mudança de cor
* O compartilhamento deve funcionar corretamente
* Como os projetos - se não estiver conectado, você deve ser solicitado a entrar, se estiver conectado, deve ficar vermelho depois de dar o coração
* Tags: categorias e selos de verificado devem funcionar corretamente
* O link da mensagem do brinde GIVback `SAIBA MAIS` deve ir para a documentação
* O link do problema de relatório deve funcionar corretamente
* As atualizações devem ser exibidas corretamente (para testar melhor como proprietário, você pode postar uma atualização, sair e ver como visualização pública se está atualizada ou não)
* Tabela de doações: Certifique-se de que o financiamento recebido em todos os tempos está correto. Contagem de teste, classificação por data, quantia e valor em dólares, também pesquisa em doação

### **Entrar**

* Assinar com Ethereum: selecione meta-mask, torus e walletConnect
* Login: você é solicitado a conectar sua carteira e é solicitado a assinar novamente para realizar algumas ações específicas, por exemplo: curtir (“coração”), visualizar sua conta, visualizar o projeto na visualização do proprietário ou criar um projeto
* Os links sociais no login devem carregar o torus:

![](https://i.imgur.com/Rm4LBZj.png)

* Faça isso com um endereço registrado e não registrado
* Para ações específicas, pode ser necessário fazer login com sua carteira

### **Integração**

* Se você não tiver um perfil completo, você será solicitado a preencher seu perfil em um assistente
* Verifique os campos obrigatórios
* Se você não estiver conectado, deverá ser solicitado a fazê-lo antes de enviar os dados
* Verifique a verificação de e-mails e URLs
* Carregue fotos, faça isso com fotos muito grandes e pequenas
* Envie seus dados e o cabeçalho deve ser carregado logo após você ter essas informações

### **Minha conta**

* Teste-o com um endereço recém-registrado: você deve ser solicitado a completar seu perfil com um banner amarelo lá em cima e o banner roxo “Não seja um estranho” abaixo da visão geral
* Ao clicar nesses banners amarelos ou roxos, você deve ser redirecionado para a página de integração
* Teste se você completar seu perfil que você pode editar seu perfil
* Por favor, teste todos os campos e teste a verificação do e-mail correto. URL e campo obrigatório
* Excluir sua foto de perfil
* Edite sua foto de perfil
* A guia Visão Geral verifica a precisão dos números
* Aba Projetos - classificação de teste, links, todos os dados fornecidos, incluindo projetos verificados e listados (você pode alterar o valor fornecido no admin bro e verificá-lo aqui novamente para garantir que reflita as alterações mais recentes)
* Aba Doações (como perfil público)
* Aba Projetos curtidos (como perfil público)

### Páginas de propósitos gerais

* Controle de qualidade sobre nós
* Histórico de controle de qualidade
* Equipe de controle de qualidade
* Termos de uso de controle de qualidade
* Parceiros de controle de qualidade

### Verifique a visualização móvel e a capacidade de resposta

* Redimensione seu navegador
* Use diferentes dispositivos: telefones, tablets
* Mergulhe no cabeçalho, menus, todas as páginas estáticas


### [Criador do projeto](https://github.com/Giveth/giveth-2/issues/798)

Este caso de uso é parcialmente automatizado para garantir a funcionalidade antes que as alterações sejam feitas. No entanto, o teste do usuário ainda é necessário.

#### Criar projeto

* Verificação: os campos obrigatórios devem ser preenchidos e não enviados vazios
* Adicione detalhes do projeto
* Use formatos ricos de texto (negrito, itálico, aspas, cabeçalhos etc.) e verifique se eles são renderizados corretamente
* Na descrição, teste emojis e relate toda formatação e UX ruim
* Na descrição, toda a formatação deve salvar e funcionar corretamente
* Na descrição, incorpore imagens, teste “atualizar imagens”, redimensione-as e verifique se renderizam corretamente
* Faça upload da foto da capa, exclua, faça o upload novamente com fotos grandes e pequenas
* Use fotos predefinidas e altere-as para ver qualquer comportamento anormal
* Incorpore vídeos e garantir que eles sejam renderizados corretamente
* No endereço, deve evitar endereços ETH reutilizados, deve ser um endereço ETH válido e não um endereço de contrato
* Para impacto, pesquise locais, cidades, áreas, bem como países ou continentes e verifique se está funcionando corretamente
* Seleção de categoria
* Seleção do Google maps
* Visualizar (salvar como rascunho) significa que você pode entrar em contato com os projetos posteriormente em sua conta, mas ainda não está ativo
* Publicar. E você precisa ver a página de sucesso e todas as informações e links na página pública devem funcionar corretamente
* Publique diretamente e publique um projeto de visualização para garantir que não haja diferenças.
* Verifique se todos os projetos estão listados em "meus projetos"
* Verifique se os projetos aparecem na página inicial*
* Desativar/reativar projeto

> ⚠️ **INFO**
> *Os projetos criados no DApp têm um status automático "não listado", o que significa que eles não serão exibidos até que seu status seja alterado para "listado". Entre em contato com alguém com o cargo de `Equipe de Verificação` no [Discord da Giveth](https://discord.giveth.io/) que possa mostrar como listar seu projeto na preparação para continuar testando.

#### Editar Projeto

* Mudar foto
* Use formatos ricos de texto (negrito, itálico, aspas, cabeçalhos etc.) e verifique se eles são renderizados corretamente
* Incorporar vídeos ou imagens e garantir que eles sejam renderizados corretamente
* Alterar campos de texto
* Atualizar endereço de doação
* Verifique se as atualizações são aplicadas

#### Atualizar Projeto

* Adicionar uma atualização ao seu projeto
* Use formatos ricos de texto (negrito, itálico, aspas, cabeçalhos etc.) e verifique se eles são renderizados corretamente
* Incorporar vídeos ou imagens e garantir que eles sejam renderizados corretamente
* A atualização é salva e exibida corretamente na página do projeto

### [Doador](https://github.com/Giveth/giveth-2/issues/799)

Este caso de uso não inclui nenhum teste automatizado e deve ser totalmente testado pelo usuário.

* Doe com diferentes tokens: tokens ETH e ERC-20 em Ropsten (Mainnet) e xDAI, tokens ERC-20 em Gnosis Chain (anteriormente Rede xDai)
* Doe com carteiras alternativas (além de fazer login)
* Verifique se os fundos saem da carteira
* Verifique se os fundos são recebidos/rastreados por projeto
* Ver doações feitas (valor correto em $, tipo de moeda correto)

### Página de doação

* Antes de entrar, você deve ver o botão conectar carteira
* Doe e confira o visual dos modais
* Verifique os links e o conteúdo da página para ter certeza de que está funcionando
* Altere a carteira e altere a rede para verificar se está funcionando com sua carteira
* Repita a doação nas redes ETH (Ropsten) e gnosis Chain
* Faça isso com um número de token insuficiente
* Faça isso com quantidades muito pequenas
* Verifique a visualização do cartão do projeto ao lado do token de doação
* Barra de pesquisa de tokens para doar - os tokens aparecem adequadamente durante a pesquisa
* Bloco de doação - doações do GIV devem carregar um modal do Twitter sobre Gemini
* A página de sucesso com token elegível e com token não elegível deve ser diferente - na doação de token elegível para GIVback, você pode ver um banner dizendo que é elegível para GIVbacks
* Doações anônimas não devem ser exibidas na visualização de perfil público

Para diretrizes de teste GIVeconomy, [clique aqui](https://docs.giveth.io/dapps/testingGIVeconomy/).