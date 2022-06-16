---
id: installGIVeconomy
title: GIVeconomy Front-End Kurulumu
slug: dapps/installGIVeconomy
---

[GIVeconomy](https://giveth.io/) front-end'ini içeren Github reposunu https://github.com/Giveth/liquidity-mining-dapp adresinde bulabilirsiniz.

Bu bir `create-next-app` ile yüklenen bir Next.js projesidir.

## Gereklilikler

* Yarn
* npm
* Kovan Network ve Gnosis Chain (formerly xDai Network) için gerekli kendi [Infura Node](https://infura.io/)'unuz
* favori kod editorünüz (VSCode önerimiz)

## Başlangıç

Önce lokal bir kopya almanız gerekir. Repoyu github'dan kopyalayın.

`git clone git@github.com:Giveth/liquidity-mining-dapp.git`
:::info 
 Ortam Değişkenleri
 .`env.example` dosyasını `.env.local` dosyasına kopyalayın ve değerleri API anahtarınızın yanı sıra Infura node göre ayarlayın
:::

Ardından geliştirme sunucusunu lokalde çalıştırmak için:

```
npm run dev
# or
yarn dev
```

Sonucu görmek için tarayıcınızla http://localhost:3000'i ve kod düzenleyicinizi açın. Artık hazırsınız!

## Daha fazla bilgi

Next.js hakkında daha fazla bilgi almak için aşağıdaki kaynaklara göz atın:

* [Next.js dökümanları](https://nextjs.org/docs) - Next.js özellikleri ve API hakkında bilgi edinin.
* [Next.js'yi öğrenin](https://nextjs.org/learn) - etkileşimli bir Next.js dökümanı.

Ayrıca [Next.js GitHub repomuza](https://github.com/vercel/next.js/) göz atabilirsiniz - geri bildirimlerinizi ve katkılarınızı bekliyoruz!

## Vercel'e Deploy Edin
Next.js uygulamanızı deploy etmenin en kolay yolu, Next.js'in [Vercel Platformunu](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) kullanmaktır.

Daha fazla ayrıntı için [Next.js deploy belgelerimize](https://nextjs.org/docs/deployment) göz atın.