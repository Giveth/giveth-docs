---
id: troubleshooting
title: Sorun Giderme
slug: dapps/troubleshooting
---
import useBaseUrl from '@docusaurus/useBaseUrl'


Giveth DApp ile ilgili teknik sorunlar yaşıyorsanız bu sayfada bir çözüm bulabilirsiniz.

## Brave Browser
Giveth DApp'te Brave tarayıcı ile oturum açmaya çalışırsanız, Torus (cüzdan sağlayıcısı), çalışması için çerezlere ihtiyacı olduğunu size bildirir. (Torus'un OAuth hizmetleri için bu izinlere ihtiyacı vardır, bu nedenle kullanıcılarımıza bağlı kendi Ethereum cüzdanları, yani Google hesapları kolayca sağlanabilir.)

Bu sorunu hızlı bir şekilde çözmek için şunları yapabilirsiniz:

* site ayarlarına tıklayın (Brave simgesi)
* Sadece Giveth.io için çerez ayarını "tüm çerezlere izin verilir" olarak değiştirin
<img
  alt="Enable Cookies in Brave"
  src={useBaseUrl('img/content/screenshot-brave-cookies.png')}
/>
[Brave'de çerezleri kullanma hakkında daha fazla bilgi edinin.](https://support.brave.com/hc/en-us/articles/360050634931-How-Do-I-Manage-Cookies-In-Brave-)

### Giveth.io boş bir ekran gösteriyor! Lütfen Yardım!

Bazen güncellemeler Giveth.io web sitesine yansısa da ve önbelleğe alınmış dosyalarınız ve çerezleriniz sitedeki yeni güncellemelerle her zaman uyumlu olmaz. Bu nedenle önbelleğinizi temizlemeniz, çerezlerinizi silmeniz ve ardından tarayıcıyı yenilemeniz gerekir.

Brave'de önbelleğinizi ve çerezlerinizi temizlemek için şuraya gidin: `Settings -> Additional Settings -> Privacy and Securiy -> Clear Browsing Data` Bu bölüme vardığınızda, `Cookies` ve `Cached images and files` seçeneğini işaretleyin ve en üstte olduğundan emin olun. Açılır pencerede uygun zaman aralığını işaretlersiniz. Hepsini aldığınızdan emin olmak için `All Time`'ı seçebilirsiniz.

Çerezlerinizi temizlemek çoğu siteden çıkış yapmanıza neden olur. Sık kullandığınız tüm web sitelerinde tekrar oturum açma derdiyle uğraşmak istemiyorsanız, şuraya gidin: `Privacy and Security -> Cookies and othersite data -> See all site cookies and other data` Ardından bu menüden yukarıya bakın Giveth etki alanı şöyle:

<img alt="Deleting Cookies in Brave" src={useBaseUrl('img/content/givethcookies.png')} />

Ardından Giveth çerezini silmek için çöp kutusu simgesine tıklayın. Bu da tamamsa yeni bir Brave tarayıcı penceresi açın, Giveth'e geri dönün ve bağış yapmaya devam edin!