# Como contribuir com a documentação

1 de Março, 2021 - 2 min de leitura

![](https://i.imgur.com/0vgnkpB.png) [geleeroyale](https://github.com/geleeroyale) 

Olá caro colaborador!

É muito fácil contribuir para o nosso novo site de documentação da Giveth. Usamos o [docusaurus v2](https://v2.docusaurus.io/), então você também pode consultar a documentação deles, especialmente para alterações avançadas.

No entanto - aqui estão as maneiras simples de contribuir:

## Altere algo em uma página

![](https://docs.giveth.io/img/content/screenshot-edit-page.png)

`Clique` no link _Editar_ página na parte inferior de qualquer entrada.

## Adicione uma Imagem

Se o seu conteúdo precisar de uma imagem, você deve colocá-lo nesta pasta: `static/img/content`

Para links relativos, você também deve importar o gancho `useBaseUrl` de @docusaurus/useBaseUrl - coloque-o imediatamente após o assunto principal.

```js
import useBaseUrl from '@docusaurus/useBaseUrl'
```

Então você pode importar a imagem - ou seja, a imagem que usei acima para demonstrar a aparência do link de edição:

```js
<img
  alt="Editing a page"
  src={useBaseUrl('img/content/screenshot-edit-page.png')}
/>;
```

## Crie uma nova página

Para que isso funcione bem, faça um fork e um clone do nosso repositório principal no github e faça um pull request depois de fazer suas alterações.

O Docusaurus criará automaticamente novas páginas a partir de qualquer arquivo markdown `(.md)` adicionado com o frontmatter correto (veja as páginas atuais para obter um exemplo).

Portanto, para criar uma nova página, você deve criar um novo documento de remarcação, dependendo do tipo de conteúdo.

- Os guias do usuário devem ser criados na pasta de `guias`
- A documentação do desenvolvedor deve ser criada na pasta `docs`

- Atualizações, conteúdo que não se encaixa facilmente em outras categorias, bem como entradas mais longas devem ir para a pasta do `blog`

Se você quiser que a entrada apareça na respectiva barra lateral, você precisará adicionar o título à matriz existente:

- `sidebars.js` para a seção de documentos
- `sidebarsGuides.js ` para a seção de guias Sem nova linha no final do arquivo