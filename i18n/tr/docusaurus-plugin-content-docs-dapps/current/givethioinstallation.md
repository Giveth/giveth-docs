---
id: givethioinstallation
title: Local Geliştirme için Giveth.io Kurulumu
slug: dapps/givethioinstallation
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../../../../src/css/custom.css'

Bu kılavuz, geliştirme amacıyla Giveth.io'yu yerel olarak kurma ve çalıştırma adımlarını belgeleyecektir. Kurulum işlemi Ubuntu 20.04 LTS kullanılarak belgelenmiştir.

**Başlamak için birkaç araca ihtiyacınız olacak**

 - [Redis](https://redis.io/topics/quickstart)
 - [Postgres](https://www.postgresql.org/download)
 - Node 14+
 - yarn
 - npm
 - ve Favori Code Editor'ünüz (VScode for linting presets)

**Giveth IO, aşağıdakiler dahil çeşitli paketler, uygulamalar ve mimarilerden yararlanır:**

* Ethereum
* React
* NextJS
* Apollo GraphQL
* Tor.us
* theme-ui

## GitHub'dan back-end (impact-graph) yükleyin**
Yerel olarak geliştirmek için backend sunucusunu klonlamanız gerekir. Bunun için https://github.com/Giveth/impact-graph kullanıyoruz.

```
git clone git@github.com:Giveth/impact-graph.git
cd impact-graph
npm i
cp .env.example .env
```
    
## psql kullanarak Postgres'te bir Veritabanı ve Kullanıcı oluşturun
Kullanıcı adınızı ayarlamak ve veritabanını oluşturmak için PSQL'deki bu kılavuzu takip edin.

```
sudo -u postgres psql
postgres=# create database <databaseName>;
postgres=# create user <userName> with encrypted password '<passwordHere>';
postgres=# grant all privileges on database <databaseName> to <userName>;
```

## Front-end Klonlayın ve Yükleyin
https://github.com/Giveth/giveth-next adresine gidin ve repoyu klonlayın.

```
git clone git@github.com:Giveth/giveth-next.git
cd giveth-next
yarn install
```

## Ortam Değişkenlerini Alın
Giveth.io için yerel yapıyı çalıştırmak için ortam değişkenlerini istemeniz gerekir. [Contributors Discord'umuza](https://discord.giveth.io/) gidin, Merhaba deyin ve ürün yöneticimiz @MoeNick veya geliştiricilerden biriyle iletişime geçin.

## Geliştirme Sunucusunu ve Ortamı Başlatın
`impact-graph` backend sunucusunu başlatın ve yeniden başlatın.

* `redis-server` komutunu kullanarak redis'i çalıştırın.

* `impact-graph` reposundan npm başlangıcı ile başlayın.

:::info
> Geliştirme için Hazırlanmış Veritabanını Kullanma
> Geliştirme amaçlarınız için yerel bir veritabanı kurmanız gerekmiyorsa, bunun yerine hazırlanmış veritabanını kullanabilirsiniz. `NEXT_PUBLIC_APOLLO_SERVER` öğesini https://serve.giveth.io/graphql olarak ayarlayın (bu, https://next.giveth.io'da gördüğünüz aynı veritabanını kullanır).
:::

## Veritabanını Kurmak için Migrations Çalıştırın
`impact-graph` için ayrı bir terminal `cd`'sinde terminalde şu komutu çalıştırın:

`npm run typeorm:cli -- migration:run`

## Front End'i Deploy Edin
Linting ön ayarlarından yararlanmak için lütfen VSCODE'u kullanın:

* Dosya -> Çalışma Alanını Aç'ı seçin.

* Giveth-sonraki dizine gidin.

* `Giveth2-full-stack.code-workspace` çalışma alanı dosyasını açın.

* Önerilen uzantıları yükleyin (Prettier ve StandardJS eklentileri).

Ardından front end'i yerel olarak başlatın.

`yarn run dev`

## Düzenlemeye Başlayın!
Kod düzenleyicinizde sonraki repoyu açın.

Giveth.io artık yerel olarak burada: http://localhost:8000!

<img id="contentimg" alt='Giveth Running Locally' src={useBaseUrl('img/content/givethlocalresized.png')} />

Ayrıca verilerinizi GraphQL üzerinden sorgulayarak da sona erdirebilirsiniz. Bunu buradaki bağlantıda bulabilirsiniz: `http://localhost:8000/___graphql` [Gatsby](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql) eğitiminde bu aracı kullanma hakkında daha fazla bilgi edinebilirsiniz.

Değişikliklerinizi kaydedin, tarayıcı gerçek zamanlı olarak güncellenecektir!

**Mevcut Build Durumları**

[master](https://giveth.io)

[![Netlify Status](https://api.netlify.com/api/v1/badges/f914ac7e-ce27-4909-bd3e-14d749731a52/deploy-status)](https://app.netlify.com/sites/giveth2/deploys)

[staging](https://next.giveth.io)

[![Netlify Status](https://api.netlify.com/api/v1/badges/2f325b5b-e159-443e-bac7-c5e15f3578c0/deploy-status)](https://app.netlify.com/sites/giveth-website-staging/deploys) 