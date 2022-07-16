---
id: contributors
title: Giveth Gelişimine Katkıda Bulunma
slug: dapps/contributors
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../../../../src/css/custom.css'

Giveth şu anda fon yönetimine, eşler arası bağışlara ve daha iyi token ekonomisi için DeFi'ya odaklanan üç ürüne sahip. Bunlar sırasıyla [Giveth TRACE](https://trace.giveth.io/), [Giveth.io](https://giveth.io/) ve [GIVeconomy](https://giveth.io/)'dir.

Tüm ürünlerimiz, Giveth için herhangi bir geliştirme yapmadan önce öğrenilmesi çok önemli olan bazı ortak geliştirme standartlarını paylaşır. Bu belgede size açık kaynaklarımız ile nasıl etkileşim kuracağınızı, doğru kişilerle nasıl iletişime geçeceğinizi ve sorunları oluşturmaya ve geliştirmeye nasıl başlayacağınızı göstereceğiz.

## Github Yönetimi
Öncelikle, web tarayıcınız için sorunları yönetmek için Github'da kullandığımız çalışma alanlarını ve işlem hatlarını görmenizi sağlayacak [github için zenhub uzantısını](https://chrome.google.com/webstore/detail/zenhub-for-github/ogcgkffhplmphkaahpmffcafajaocjbd) yüklemeniz gerekir.

<img alt='All-Devs Zenhub Board' width='85%' height='auto' src={useBaseUrl('img/content/allDevsZenhub.png')} />


Üç DApp'in (ürünlerin) tümünü tek bir çalışma alanı olan `All-Devs` altında yönetmek için geçiş yaptık.

### Repositorie'ler
Giveth Github organizasyonunun birçok repo vardır. Aktif ürünlerimizle ilgili ilgili repolara genel bir bakış:



| Ürün | Repository | Açıklama |
| -------- | -------- | -------- |
| Giveth.io    | impact-graph     |  Giveth.io back-end    |
| Giveth.io    | giveth-next     | Giveth.io current version     |
| Giveth.io     | giveth-io-typescript     | yeni tasarımın Givethio typescript versiyonu.    |
| GIVEeconomy     | 	GIVeconomy     | Genellikle planlama ve sorun takibi için kullanılır     |
| GIVeconomy| 	giv-token-contracts    | akıllı kontrat yerleştirmesi     |
| GIVeconomy    | 	liquidity-mining-dapp     | GIVeconomy Frontend UI     |
| GIVeconomy    | giv-token-subgraph     | $GIV data hesaplamak için  GIVeconomy Frontend     |
| GIVeconomy    | givback-calculation     | Calculating GIVbacks     |
| TRACE     | giveth-dapp     | 	Frontend ve planlama için giveth TRACE     |
| TRACE     | feathers-giveth     | Giveth TRACE back-end arayüzücü     |
| TRACE     | dapp-mailer     |  TRACE için e-mail hatırlatıcısı   |
| TRACE     | giveth-bridge     | Giveth Rinkeby - Mainnet köprü sistemi   |
| General Services     | 	ui-design-system     | npm package for Giveth design assets     |


### `All-Devs` için Çalışma Hattı

Zenhub sekmesinde bir çalışma alanına girdiğinizde, şu anda havuzlarda bulunan sorunların durumlarını belirlemek ve yönetmek için kullanılan bitişik sütunlardan oluşan bir satır göreceksiniz. Aşağıda her birinin kısa bir açıklamasını bulabilirsiniz:

**New Issues** - Yeni hatalar ve özellikler önce buraya gelir.

**Epics** - Epic Sorunları için işlem hattı. Daha büyük görevler birkaç küçük sorundan oluşmaktadır.

**Icebox** - Arşivlenmiş Özellikler veya Öneriler. Buradaki sorunlar öncelikli değildir ve yalnızca Dev'lerin bant genişliğine sahip olması durumunda sprintlere eklenebilir.

**Backlog** - Sprint Planning'e alınmayı bekleyen Düşük Öncelikli Sorunlar.

**Sprint İş Listesi** - Bu sorunlar incelendi ve üzerinde çalışılmaya hazır. Öncelik ve Geliştirici bant genişliğine göre bir sonraki sprint'e eklenecekler.

**In Progress**- Genellikle yerel yapılarda olmak üzere Geliştiriciler tarafından alınır ve üzerinde çalışılır.

**Code Reviews** - İnceleme ve nihai olarak hazırlama sunucusunda birleşmeyi bekleyen Çekme İsteklerini açın.

:::info
Kodun çekirdek ekip üyelerinden biri tarafından gözden geçirilmesi zorunludur, genellikle mentorunuz veya projeyi size tanıtan kişi gözden geçirebilir. Lütfen herhangi bir ortama göndermeden önce gözden geçirmesini isteyin.
:::

**UAT Testi/QA** - Özellik veya hata düzeltmesi, kullanıcı testi ve Kalite Güvencesi için hazırlama sunucusuna dağıtılır.

**Done** - Hata düzeltme veya özellik tamamlandı ve canlı sunucuda dağıtılmaya hazır.

:::info
Tüm konuların Done olarak onaylanması ve bu sütunda olması için DoD (Done'un Tanımı) kriterlerini karşılaması gerekir: Başarı Kriterleri geçti (Kullanıcı Hikayesi / Görev veya ilgili sorundan bahsediliyorsa) Aşamada Dağıtıldı UAT Bir testçi veya PM tarafından test edildi, Belgelendi.
:::

**Closed** - Hata düzeltmesi veya özellik canlı olarak kopyalandı. Kapatılan tüm sorunların zenhub'daki bir sürüm numarasıyla ilişkilendirilmesi ve sürüm yayınlandıktan hemen sonra kapatılması önerilir.

### Issue (Sorun) Oluşturma
Github'da issue oluşturmak, hata düzeltmelerinin veya özelliklerin düzgün bir şekilde izlenmesini ve ilgili bilgilerin düzenlenip birleştirilebilmesini sağlamak için çok önemlidir. Yeni issue şablonu yalnızca bir kılavuzdur, kullanmadığınız herhangi bir başlığı silmekten çekinmeyin.

**Labels**, sorununuza bağlam eklemenize yardımcı olacaktır, lütfen bunları kullanın, böylece diğer geliştiriciler sorunları bir bakışta daha iyi anlayabilir ve alabilir. `All-Devs`'de yaygın olarak kullanılan bazı etiketler şunlardır:

`fast follow` - Bir ürün lansmanını veya sürüm sürümünün ardından öncelikli özellikler veya iyileştirmeler.

`documentation`  - Teknik belgelerin oluşturulmasını veya güncellenmesini talep etme.

`bugs` - Bozulan veya istendiği gibi çalışmayan bir ürünün işlevselliği veya özelliği

`feature request` - Bir ürüne yeni bir özellik veya işlevsellik eklenmesini isteme

`design needed` - Bu sorun ilgili varlıklar oluşturmak için tasarım ekibinden destek talep etme

`question` - Bu sorunun içinde, ilerlemek için yanıtlanması gereken bekleyen bir soru var

`security` - Güvenlik sorunu veya iyileştirme

`UI` - Bu sorun, belirli bir ürünün Kullanıcı Arayüzü ile ilgilidir.

`UX` - Bu sorun, belirli bir ürünün Kullanıcı Deneyimi ile ilgilidir

## Seremoniler
[Giveth Discord](https://discord.giveth.io/)'da hafta boyunca aşağıdakiler dahil birçok Geliştirici toplantısına ev sahipliği yapıyoruz:

* Salıdan Perşembeye 6:30am GMT-6'da Günlük Geliştirici Standup'ları
* All-Devs Sync, her hafta Pazartesi günleri 10:00am GMT-6'da
* GIVeconomy Sync haftalık Çarşamba günleri saat 8:00'de GMT-6

Bu toplantılar, DApp geliştirme konusunda güncel kalmak ve Geliştirme Katılımcısı olarak Giveth Ekibi ile entegre olmak için önemli yerlerdir.

## Sprint Yönetimi
Çerçeve: Çoğunlukla iki haftada bir yinelenen şekilde (sprintler olarak adlandırılır) Scrum uyguluyoruz, bazen proje durumlarına bağlı olarak KanBan'a geçiyoruz.

### Scrum nedir?
Scrumda, sprint, tüm işlerin yapıldığı belirli bir zaman dilimidir. Harekete geçmeden önce sprint'i ayarlamanız gerekir. Zamanlamanın ne kadar süreceğine, sprint hedefine ve nereden başlayacağınıza karar vermeniz gerekir. Sprint planlama oturumu, gündemi ve odağı belirleyerek sprint'i başlatır.

* **Ne** - Ürün sahibi, sprintin amacını (veya hedefini) ve bu hedefe hangi biriktirme listesi öğelerinin katkıda bulunduğunu açıklar. Scrum takımı, önümüzdeki sprintte neler yapılabileceğine ve sprint sırasında bunun gerçekleşmesi için ne yapacaklarına karar verir.

* **Nasıl** – Geliştirme ekibi, sprint hedefini gerçekleştirmek için gerekli çalışmaları planlar. Sonuçta ortaya çıkan sprint planı, geliştirme ekibi ile ürün sahibi arasında değer ve çabaya dayalı bir müzakeredir.

* **Kim** – Ürün sahibi veya geliştirme ekibi olmadan sprint planlaması yapamazsınız. Ürün sahibi, aradığı değere göre hedefi tanımlar. Geliştirme ekibinin bu hedefe nasıl ulaşıp ulaşamayacaklarını anlaması gerekir. Bu etkinlikte herhangi biri eksikse, sprinti planlamayı neredeyse imkansız hale getirir.

* **Girdiler** – Sprint planı için harika bir başlangıç ​​noktası, potansiyel olarak mevcut sprintin bir parçası olabilecek bir "malzeme" listesi sağladığı için ürün biriktirme listesidir. Ekip ayrıca yapılan mevcut işe bakmalı ve kapasiteye ilişkin bir görüşe sahip olmalıdır.

* **Çıktılar** – Sprint planlama toplantısının en önemli sonucu, ekibin sprintin hedefini ve bu hedef için nasıl çalışmaya başlayacağını tanımlayabilmesidir. Bu tanım ile sprint biriktirme listesinde görünür hale getirilir.

<img alt="sprint planning" width='75%' src={useBaseUrl('img/content/sprintInfo.png')} />

İnceleme başlamadan önce, [Giveth Resource Planning Tablosuna](https://docs.google.com/spreadsheets/d/1fJcFTLJof6o0rViKIy4C46sXuisySTud40HFsMGE1e0/edit#gid=311929329) beklenen toplam katkı saatlerinizi eklemeniz gerekebilir, bağlantı genellikle sprint toplantısından önce Discord geliştirici kanalında paylaşılır. Sprint sayfasını bulabilir ve aşağıdaki kısımlerı güncelleyebilirsiniz:

<img alt='resource planning spreadsheet' src={useBaseUrl('img/content/resourcePlanningAllDevs.png')} />


Ürün Yöneticilerinin (PM'ler) kaynakları daha iyi planlamasına ve her sprintte kilometre taşını karşılayıp karşılayamayacaklarını bilmelerine yardımcı olur. E-tabloyu doldurmak için zaman bulamadıysanız, toplantı sırasında veya bir tahminde bulunabileceğiniz her zaman, bunu PM'lere DM'den göndermeniz veya geliştirme kanalına koymanız istenebilir.

Her zamanki sprint planlaması şu şekildedir:

1. PM'ler sorunları (Tercihen Kullanıcı Hikayelerini planlama toplantısına getirir, açıklar ve ekibin uygulamaya başlaması için net olduğundan emin olur.
2. PM, olabildiğince açık hale getirmek için geliştiriciler arasındaki görüşmeleri kolaylaştırır.
3. PM, Story Points'de tahminler ister (Story Points, örneğin basit bir hata düzeltmesi gibi, en kısa sürede teslim edilebilecek bir ürün için harcanan minimum çabanın birimidir, örneğin, bir iş gününün yarısını alabilir. )
4. PM, sorunlara öncelik vererek “Sprint İş Listesi” oluşturmaya başlar ve toplam Story Point miktarının ekiplerin ve katkıda bulunanların toplam kapasitesi ile orantılı olmasını sağlar.

Herkes sprint planını kabul eder ve beklenen hedefi taahhüt eder.

## İletişime Geçebilceğiniz Anahtar Kişiler

* Development Working Group Steward - Amin
Discord Handle: `Amin#2164`
* GIVeconomy Product Manager - Lauren
Discord Handle: `karmaticacid#1218`
* Giveth TRACE, Giveth.io Product Manager - MoeNick
Discord Handle: `MoeNick#1374`
* Giveth.io Lead Developer - Mateo
Discord Handle: `mateodaza#3156`
* DevOps & Security - Kay
Discord Handle: `geleeroyale#3228`
* Lead Designer - Marko
Discord Handle: `markop#2007`

## Local Geliştirme İçin Rehberler

* [Giveth.io](/tr/dapps/givethioinstallation)
* [Giveth TRACE](/tr/dapps/TRACEinstallation)
* [GIVeconomy](/tr/dapps/installGIVeconomy)

## Test Rehberleri
* [Giveth.io](/tr/dapps/testing-guidelines)
* [GIVeconomy](/tr/dapps/testingGIVeconomy)

## Kullandığımız Araçlar

- [Segment](https://segment.com/) (Giveth TRACE, Giveth.io)
- [Sentry](https://sentry.io/welcome/) (Giveth TRACE, Giveth.io)
- [Infura](https://infura.io/) (Giveth TRACE, Giveth.io)
- [Autopilot](https://journeys.autopilotapp.com/features/email-marketing-software) (Giveth.io)
- [Amplitude](https://www.amplitude.com/) (Giveth TRACE, Giveth.io)
- [Docusaurus](https://docusaurus.io/) (Documentation)
- [The Graph](https://thegraph.com/en/) (GIVeconomy)
- [Netlify](https://www.netlify.com/) (Giveth TRACE)
- [Vercel](https://vercel.com/dashboard) (Giveth.io, GIVeconomy)
- [Cryptocompare](https://www.cryptocompare.com/) (Giveth TRACE)
- [Coingecko](https://www.coingecko.com/en/api) (All Products)
- [Github Actions](https://github.com/features/actions) (All Products)
- [MongoDB](https://www.mongodb.com/) (Giveth TRACE)
- [PostgreSQL](https://www.postgresql.org/) (Giveth.io)
- [Redis](https://redis.io/) (Giveth TRACE, Giveth.io)
- [Elastic Search](https://www.elastic.co/elasticsearch/) (Giveth TRACE)
- [Kibana](https://www.elastic.co/kibana/) (Giveth TRACE)
- [Pinata](https://www.pinata.cloud/) (Giveth.io, GIVeconomy)
- [Transak](https://transak.com/) (Giveth.io)
- [AdminBro](https://v2.adminbro.com/index.html) (Giveth.io)