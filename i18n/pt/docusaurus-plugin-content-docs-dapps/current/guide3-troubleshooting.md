---
id: troubleshooting
title: Solução de problemas
slug: dapps/troubleshooting
---
import useBaseUrl from '@docusaurus/useBaseUrl'


Se você está tendo problemas técnicos com o Giveth DApp, você pode encontrar uma solução nesta página.

## Navegador Brave

Se você tentar entrar no Giveth DApp com o navegador Brave, o Torus (o provedor da carteira) notificará que precisa de cookies para operar. (A Torus precisa dessas permissões para seus serviços OAuth, para que nossos usuários possam receber facilmente sua própria carteira Ethereum vinculada, ou seja, sua conta do Google.)

Para resolver esse problema rapidamente, você pode:

* clique nas configurações do site (ícone Brave)
* altere a configuração de cookies apenas para Giveth.io para "todos os cookies permitidos"

<img
  alt="Enable Cookies in Brave"
  src={useBaseUrl('img/content/screenshot-brave-cookies.png')}
/>[Leia mais sobre como lidar com cookies no Brave.](https://support.brave.com/hc/en-us/articles/360050634931-How-Do-I-Manage-Cookies-In-Brave-)

### Giveth.io mostra uma tela em branco! Ajuda!

Às vezes, as atualizações são enviadas para o site Giveth.io, e seus arquivos e cookies em cache nem sempre se dão bem com as novas atualizações no site, então você precisará limpar seu cache, excluir seus cookies e atualizar o navegador.

Para limpar seu cache e cookies no Brave, navegue até: ``Configurações -> Configurações adicionais -> Privacidade e segurança -> Limpar dados de navegação`` Quando chegar lá, marque `Cookies` e `imagens e arquivos em cache`, e certifique-se de que na parte superior da janela pop-up você marque o intervalo de tempo apropriado. Você pode selecionar `Todo o Tempo` apenas para ter certeza de que recebeu todos.

Limpar seus cookies fará com que você saia da maioria dos sites. Se você não quiser passar pelo incômodo de fazer login novamente em todos os sites que frequenta, vá para: ``Privacidade e Segurança -> Cookies e outros dados do site -> Ver todos os cookies do site e outros dados`` Depois, a partir deste menu, procure o domínio Giveth desta forma:

<img alt="Deleting Cookies in Brave" src={useBaseUrl('img/content/givethcookies.png')} />

Em seguida, clique no ícone da lixeira para excluir o cookie da Giveth. Se isso terminar, abra uma nova janela do navegador Brave, volte para Giveth e volte a doar!