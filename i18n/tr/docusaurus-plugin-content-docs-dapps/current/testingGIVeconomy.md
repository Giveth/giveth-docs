---
id: testingGIVeconomy
title: GIVeconomy Test Rehberi
slug: dapps/testingGIVeconomy
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '../../../../src/css/custom.css';


GIVeconomy DApp için kapsamlı kullanıcı testi senaryoları için bir kılavuz hazırladık. Testler, https://staging.giveth.io/ adresinde bulunan hazırlama sunucusunda yapılmalıdır.

## Gereksinimler
* Lütfen güncel bir tarayıcı kullanın. Bir hatayla karşılaşırsanız, lütfen aynı şeyi başka bir tarayıcı ile deneyin. Lütfen her durumda bir sorun raporu oluşturun. Sorunun tarayıcıya özel olup olmadığını bize bildirin.
* Raporlar ve geri bildirim için GitHub'daki sorunları kullanın.

## Kullanım Durumları
Aşağıdaki eylemler temel işlevler olarak tanımlanır. Bu adımlardan biri hatalıysa, bu kritik bir hatayı temsil eder.

### Genel
* "Genel Bakış" sayfasındaki butonlar responsivedir
* `GIVgarden`, `GIVfarm`, vb. sekmeleri renponsivedir
* Navbar Başlık butonları responsivedir
* Web Cüzdanıyla Navbar'da başarıyla oturum açabilir (şu anda MetaMask için optimize edilmiştir)
* Footer bağlantıları çalışıyor ve doğru şekilde bağlanıyor

### GIVGarden
GIVgarden yürütmesi, hem Kovan Network'ü hem de Gnosis Chain'i (eski adıyla xDai Network) kullanır. Bu yürütme için kullanılan token DRGIV3'tür.

:::info
DRGIV3, gDRGIV3'ü almak için DRGIV3 Garden'a wraplenebilir. Bu işlem DRGIV3'ünüzü Gnosis Chain'de GIVfarm'daki GIVgarden Staking'de stake etmekle aynı eylemdir.
:::

* GIVgarden'a bağlanan butonlar çalışıyor
* `LEARN MORE` bağlantılar çalışıyor
* DRGIV3'ü GIVgarden'a wrapleyin - Token miktarınızın Gnosis Chain'de GIVfarm'daki GIVgarden Staking'de güncellenip güncellenmediğini kontrol edin.
* DRGIV3'ü GIVgarden'da açın - Token miktarınızın Gnosis Chain'de GIVfarm'daki GIVgarden Staking'de güncellenip güncellenmediğini kontrol edin.

### GIVFarm
GIVfarm test yürütmesi, hem Gnosis Chain'ini hem de Kovan (Mainnet) Ağı'nı kullanır. Bu yürütme için kullanılan token DRGIV3'tür:

* 0x83a8eea6427985C523a0c4d9d3E62C051B6580d3 Gnosis Chain'de
* 0x29434a25abd94ae882aa883eea81585aaa5b078d Kovan'da

Gnosis Chain'de likidite sağlamak için kullanılan test tokenları aşağıdaki gibidir:

* Gnosis Chain TestHNY: 0x69F79C9eA174d4659B18c7993c7EFbBbB58cF068
* Gnosis Chain TestWETH:0x736a98655049433f79dCcF5e54b887E8890b63D1

Kovan'da, likidite sağlamak ve gas ödemek için Kovan ETH kullanılır.

**Gnosis Chain (eski adıyla xDai Network) Test Örnekleri**
* Gnosis Chaini/Ethereum Ağı geçişi çalışıyor
* ? vurgulu araç ipuçları çalışması
* Honeyswap'ta DRGIV3 & TestHoney ile Likidite ekleyin
* Sushiswap'ta DRGIV3 ve TestETH ile Likidite ekleyin
* LP tokenları ilgili GIV/HNY veya GIV/ETH çiftliklerinde stake edebilir - LP Token miktarı, kullanıcı arayüzünde Stake/Unstake güncellemesi kadardır
* DRGIV3'ü GIVgarden Staking'de stake edebilir - Token miktarları, UI üzerinde Stake/Unstake güncellemesi
* DRGIV3'ü stake ettikten sonra, DRGIV3 Garden'da wraplenmiş token miktarı (gDRGIV3) miktarı güncellemelerini kontrol edin
* APR doğru görüntüleniyor (%0 gösteriyorsa bu kötü)
* APR satırında `?` tıklandığında APR modal açılır, linkler modal olarak çalışır
* Zaman içinde talep edilebilir miktar güncellemeleri
* Akış miktarı gösterilir (2 ondalık basamağa kadar)
* Miktar çok küçükse 0.0001 gösterilir
* "GIVfarm Ödülleriniz" (sayfanın sağ üst köşesinde), tüm çiftliklerden gelen toplam bekleyen ödülleri doğru şekilde görüntüler.
* Her çiftlikten hasat - İşlemler başarılı ve ödül Talep Edilebilir, Akış ve Cüzdan miktarlarındaki GIV doğru şekilde güncelleniyor
* Tüm çiftliklerden Tokenlar Geri Alabilir - Token miktarı, UI'de Stake/Unstake güncellemesi ile görülür.
* DRGIV3'ü GIVgarden çiftliğinden kaldırdıktan sonra, DRGIV3 Garden'da wraplenmiş token miktarı (gDRGIV3) miktarı güncellemelerini kontrol edin

**Kovan (Mainnet) Ağ Test Örnekleri**
* Gnosis Chain/Ethereum Ağı geçişi çalışıyor
* ? vurgulu araç ipuçları çalışması
* Uniswap'ta DRGIV3 ve ETH ile Mint Univ3 NFT (Kovan)
* DRGIV3 ve WETH on Balancer (Kovan) ile Likidite ekleyin
* Univ3 NFT'yi GIV/ETH Uniswap çiftliğinde stake edebilir - Stake/Unstake butonlarının altındaki NFT miktarı güncellemeleri
* LP tokenlarını GIV/ETH Balancer çiftliğinde stake edebilir - LP Token miktarı, kullanıcı arayüzünde Stake/Unstake güncellemesi kadardır
* DRGIV3'ü Tek Varlık Stakinginde stake edebilir - Token miktarları, UI üzerinde Stake/Unstake güncellemesi
* APR doğru görüntüleniyor (%0 gösteriyorsa bu kötü)
* `?` tıklamak APR satırında APR modunu açar, bağlantılar modal olarak işlevseldir
* Zaman içinde talep edilebilir miktar güncellemeleri
* Akış miktarı gösterilir (2 ondalık basamağa kadar)
* GIVfarm Ödülleriniz" (sayfanın sağ üst köşesinde), tüm çiftliklerin toplam bekleyen ödüllerini doğru bir şekilde görüntüler.
* Her çiftlikten hasat - İşlemler başarılı ve ödül Talep Edilebilir, Akış ve Cüzdan miktarlarındaki GIV doğru şekilde güncelleniyor
* Tüm çiftliklerden tokenları geri alabilir - Token miktarı, UI'de Stake/Unstake güncellemesi olur

### GIVback'ler
Test GIVback dağıtımının nasıl oluşturulacağını öğrenmek için Discord'da bir Developer veya Mitch (divine_comedian#5493) ile iletişime geçerek size yardımcı olun.

GIVback'leri kendi Ethereum adresinizle test etmek için Giveth.io'daki doğrulanmış bir projeye meşru bir bağış yapmanız gerekecek.

Bir test dağıtımı gerçekleştirdikten sonra, GIVbacks sayfasının birkaç parçasını doğrulayabilirsiniz:

:::info
GIVback'ler yalnızca Gnosis Chain'de (eski adıyla xDai Network) mevcuttur.
:::

* Hesaplamaların tanımlı GIVbacks döneminiz boyunca doğrulanmış bir projeye yaptığınız bağışlarla uyumlu olduğunu kontrol ederek GIVbacks Ödül miktarınızı doğrulayın.
* GIVbacks talep edilebilir tutarınız belirli bir miktar olmalıdır (GIVfarm ödülleri gibi artmamalıdır).
* GIVbacks akış miktarınız, GIVbacks dağıtımı sırasında GIVstream geçmişi tablosunda olmalıdır.
* GIVbacks hasadı başarılı.
* `DONATE` ve `VERIFY` düğmeleri çalışır.

### GIVStream
GIVstream, hem Gnosis Chain hem de Kovan'da mevcuttur. GIVstream'i tam olarak test etmek için her iki ağda da bekleyen çiftçilik ödüllerinizin olduğundan emin olun.

-Gnosis Chain/Ethereum Ağı geçişi çalışıyor

* `PROJECTS`, `PROPOSALS`, `OPPORTUNITIES` and `LEARN MORE` butonları çalışıyor.
* GIVstream ödülleri, hem Gnosis Chain'de hem de Kovan'da sağ üst modda ödüllendirilir.
* `?` görüntüsü GIVstream ödülleri modal üzerine tıklandığında açılır pencereyi gösterir, mod içindeki bağlantılar ve düğmeler işlevseldir
* '?' vurgulu araç ipuçları çalışması
* `GIViverse Expansion` doğru görüntüleniyor (%0 ise bu kötü.)
* `Time Remaining` doğru gösteriyor (GIVstream 23 Aralık 2026'da sona eriyor)
* GIVstream akış hızı artışları geçmiş tablosunda gösterilmektedir. GIVfarm ödülleri, GIVfarm'dan talep edildikten sonra tabloda görünmelidir. GIVbacks ödülleri, GIVbacks dağıtımı sırasında tabloda görünmelidir.



---

Döngüde kalmak için Platform Katmanı'nın haftalık toplantılarına katılmayı unutmayın. Giveth Geliştirme ve Test etkinliğine düzenli olarak katkıda bulunmak için ihtiyacınız olan tüm bilgiler için [Giveth Gelişimine Katkıda Bulunma](/dapps/contributors) kılavuzumuzu okuyun.
