---
id: torusUserGuide
title: Torus Cüzdan Kullanımı
slug: dapps/torusUserGuide
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../../../../src/css/custom.css'

Torus cüzdanı, kriptoya yeni başlayanlar için harika bir cüzdan seçeneğidir. Web3 teknolojisini kullanarak, seçtiğiniz sosyal medya platformu aracılığıyla kimliğinize bağlı bir Ethereum cüzdanı oluşturmanıza olanak tanır. Torus cüzdanı ile kripto para gönderip alabilir ve Torus "cüzdan yükleme" seçeneğini kullanarak fiat para birimi ile kripto satın alabilirsiniz.

## Giriş

Giveth.io Uygulamasını kullanarak başlamak çok kolaydır. Ana sayfada `sign-in`'e tıklayın ve kimliğinizi doğrulamak için hangi platformu kullanmak istediğinizi (örneğin, Gmail, Twitter, Discord, Facebook, vb.) seçin. Platformunuzu seçtikten sonra, "Permission" açılır penceresini onaylayın, işte bu kadar! Torus, Giveth.io ana sayfasının sağ üst köşesindeki açılır menüden `My Wallet` seçeneğini seçerek görüntüleyebileceğiniz, sizin için otomatik olarak bir Ethereum cüzdan adresi oluşturur.

<img alt="Finding your Torus Wallet" src={useBaseUrl('img/content/givethio/myWalletTorus.png')} />

Torus cüzdanınıza, Giveth.io'da kullandığınız aynı sosyal medya hesabını kullanarak [Torus web sitesinden](https://app.tor.us/) doğrudan erişebilirsiniz. Torus sayfasından cüzdan bakiyeniz, Ethereum adresiniz ve diğer faydalı ayarlarınız dahil birçok önemli bilgiyi göreceksiniz.

*Bir Ethereum cüzdanının veya Ethereum adresinin ne olduğundan emin değilseniz, 10 dakikanızı ayırıp Ethereum ve genel olarak kripto para birimiyle ilgili bazı temel bilgileri öğrenmek için iyi bir zamandır. Özellikle [cüzdanlar](https://ethereum.org/en/wallets/) ve [Ethereum Nedir](https://ethereum.org/en/what-is-ethereum/) hakkında bazı harika ethereum.org belgelerini okumanızı öneririz.*

## Cüzdanınızı Yönetme
[Torus sayfasından](https://app.tor.us/), çok çeşitli farklı Ethereum ağlarında cüzdan bakiyenizi kontrol edebilirsiniz. Ayrıca genel adresinizi görebilir ve sayfanın sağ üst kısmındaki panonuza kopyalayabilirsiniz.

<img alt="Torus Account Homepage" src={useBaseUrl('img/content/givethio/torusAccountpage.png')} />

Şu anda, Giveth projeleri Gnosis Chain (eski adıyla xDai Network) veya Mainnet üzerinden bağış alabilir. Varsayılan olarak, Torus size Mainnet cüzdan bakiyenizi gösterecektir. Gnosis Zincirinde bağış aldıysanız, `Settings`'e gidip `Network` menüsünden `Gnosis Chain`'i seçerek bakiyenizi kontrol edebilirsiniz. Ana Sayfaya geri dönerseniz, xDai cüzdan bakiyenizi görmelisiniz.

### Tokenlarınızı Bulma
Projenize bir bağış aldıysanız ve bu bağış Torus cüzdanınızda görünmüyorsa muhtemelen Torus'un hangi tokenı araması gerektiğini belirtmeniz gerekir. Bu, token adresi eklenerek yapılır. Hangi token(lar)da bağış aldığınızı görmek için projenizin Giveth.io'daki bağışlar sayfasına bakın.

<img alt="Checking your Project Donations" src={useBaseUrl('img/content/givethio/projectDonations.png')} />

Tokenınızı birkaç farklı kripto analiz sitesinde arayabilirsiniz, [CoinGecko](https://www.coingecko.com/en) veya [CoinMarketCap](https://coinmarketcap.com/) saygın sitelerdir. Tokenınızın adına veya sembolüne göre arayın, ardından tokenın bilgi sayfasından "Sözleşme Adresi"ni kopyalayın. İşte UNI için bir örnek:

<img alt="CoinGecko Contract Address" src={useBaseUrl('img/content/givethio/tokenAddresscoingecko.png')} />

Torus hesabınızdan `Add Token` açılır penceresine yapıştırın. `Next`'e tıklayın. Bilgilerin geri kalanını otomatik olarak doldurmalıdır. Token simgeniz şimdi görünmelidir ve tıpkı Ethereum gibi cüzdanınızdan görüntüleyebilir ve yönetebilirsiniz.

<img alt="Adding Tokens in Torus" height="500"  width="auto" class='center' src={useBaseUrl('img/content/givethio/addTokenTorus.png')} />

### Diğer Fonksiyonlar
İtibari para birimini kullanarak kripto satın almak istiyorsanız, bunu "Top Up" seçeneğini kullanarak yapabilirsiniz. [Bu süreçte](/dapps/torusonramp) size yardımcı olacak küçük bir kılavuz yazdık.

Sahip olduğunuz kriptoyu başka bir cüzdana göndermek için `Transfer`'i kullanın. İşleminiz için gerekli olan "gas ödeyebilmek" için cüzdanınızda Ethereum'a (ETH) ihtiyacınız olacak. Gas hakkında daha fazla bilgi için [tıklayın](https://ethereum.org/en/developers/docs/gas/).

### GIVeconomy ile Etkileşime Girme

Torus cüzdanını kullanarak [GIVeconomy](https://giveth.io/) ve diğer dApp'lerle etkileşim kurmak için cüzdanınızı bağlamanız gerekir. Bağlanmak için sitenin sağ üst köşesindeki `Connect Wallet` simgesine tıklayın, ardından Torus'u seçin ve doğrulayın. Torus cüzdanı, kullanıcıların birçok farklı web hizmetinden hesaplarla oturum açmasına olanak tanır, bu nedenle cüzdanı kurmak için kullandığınız hesapla oturum açtığınızdan emin olun.

<img alt="Signing in with Torus on the GIVeconomy" width="75%" height="auto" class='center' src={useBaseUrl('img/content/giveconomyTorusConnect.png')} />

Brave tarayıcısını kullanıyorsanız, Brave's Shield özelliğini kapatmanız gerekecektir. Bunu yapmak için arama çubuğunun sağındaki Brave logosuna tıklayın, ardından Shield kapalı konuma getirin.

<img alt="Turning shields off with Brave" class='center'  width="50%" height="auto" src={useBaseUrl("img/content/giveconomyShieldsDown.png")} />

### Diğer Cüzdanlar
Belirtildiği gibi, Torus cüzdanı yeni başlayanlar için harikadır. Kimliğinizi yönetmek için tanıdık sosyal medya platformlarını kullanmak, sürece başlamak için bir diğer harika yoldur. Bununla birlikte, kripto konusunda ciddi olmaya karar verirseniz, orada çok sayıda başka cüzdan var. Bazı cüzdanların diğer zincirlerle entegrasyonu daha kolaydır, daha fazla gizlilik sunar veya daha gelişmiş etkileşimlere izin verir. Bazı cüzdanlar Torus gibi web3 uzantıları olarak bulunur, diğerleri ise kriptonuza erişmek ve yönetmek için bilgisayarınıza bağlamanız gereken bir donanım cüzdanı gibi fiziksel bir cihazdır. Cüzdan alışverişine gitmeye karar verirseniz, en popüler olanların bir listesini [burada](https://ethereum.org/en/wallets/find-wallet/) bulabilirsiniz.
