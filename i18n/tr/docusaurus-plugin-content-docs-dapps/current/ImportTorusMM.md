---
id: importTorusMM
title : Torus Özel Anahtarını Metamask'a Aktarma
slug: dapps/importTorusMM
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../../../../src/css/custom.css'


Torus cüzdanı, kriptoya yeni başlayanlar için harika bir seçenek olsa da merkeziyetsiz uygulamalarla (dApp'ler) etkileşim kurarken kullanımı daha zor olabilir. Giveth kullanıcıları, [GIVeconomy](https://giveth.io/) ile etkileşime girerek [GIV](/tr/giveconomy/) kazanma fırsatına sahiptir. Torus kullanıcıları [GIVback](https://giveth.io/givbacks) talep edebilir, [GIVfarm](https://giveth.io/givfarm)'da tokenlarını stake edebilir, [GIVstream](https://giveth.io/givstream)'lerini talep edebilir ve [GIVdroplarını talep edebilir](https://giveth.io/claim) ([eğer uygunsa](/tr/giveconomy/givdrop)), ancak MetaMask kullanıcıları daha akıcı bir kullanıcı deneyiminden faydalanır. Ek olarak, şu anda [GIVgarden](https://gardens.1hive.org/#/xdai/garden/0xb25f0ee2d26461e2b5b3d3ddafe197a0da677b98), Torus cüzdan entegrasyonunu içermemektedir. Web3 topluluğuna tam olarak entegre olma araçlarıyla yeni gelen kullanıcıları kriptoya adapte etmek istiyoruz. MetaMask, güvenli bir kripto cüzdanı ve blok zinciri uygulamalarına yüksek düzeyde optimize edilmiş bir ağ geçididir. Bu kılavuzun amacı, Torus özel anahtarının MetaMask'a nasıl aktarılacağını açıklamak ve böylece daha geniş işlevsellik sağlamaktır. MetaMask cüzdanına nasıl başlayacağınızla ilgili talimatlar için [Metamask ekibinin bu makalesine](https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask) göz atın.

## Özel Anahtar nedir?

[Özel anahtarınız](https://www.coinbase.com/learn/crypto-basics/what-is-a-private-key), fonlarınıza erişmenize ve bunları yönetmenize olanak tanıyan bir sayı ve harf dizisidir. **Asla kimseyle paylaşılmamalıdır (topluluk moderatörleri, Giveth çekirdek ekibi ve projeye katkıda bulunanlar, yöneticiler dahil kimseye paylaşmayn!)!**. Özel anahtarınıza erişimi olan herkesin kriptonuza erişimi vardır. Torus özel anahtarınızı MetaMask'a aktarmak, her iki cüzdandan da fonlarınıza erişmenize ve bunları kontrol etmenize olanak tanır. Böylece, MetaMask'i kullanarak Giveth'in ve diğer dApp'lerin tüm işlevlerinin keyfini çıkarabileceğiniz, ancak isterseniz normal Torus girişinizi kullanarak yine de fonlarınıza erişebileceğiniz anlamına gelir.

## Torus Özel Anahtarına Ulaşma

Torus cüzdanınızda oturum açtıktan sonra, sayfanın üst kısmındaki menüyü kullanarak `Settings` sayfasına gidin.`Settings`sayfasındayken, `Privacy and Security` bölümünde `Account Details`'a tıklayın. Özel anahtarınızı almak için iki seçenek içeren bir açılır pencere açacaktır.

<img alt='Download Private Key in Torus' width='75%' height='auto' class='center' src={useBaseUrl('img/content/transferTorusMM.png')} />

İlk seçenek, özel anahtarınızın elektronik bir kopyasını JSON dosyası olarak indirmektir. Bu seçeneği seçtiğinizde, dosyayı MetaMask'e aktarmak için kullanılacak bir parola oluşturmanız istenecektir. Parolanızı oluşturun, ardından dosyayı indirin. İkinci seçenek, özel anahtarı göstermek ve kopyalamaktır. Bu yöntem, hem özel anahtarı gösterdiği hem de işletim sistemi panonuza kopyaladığı için daha az güvenlidir. Kopyalandıktan sonra özel anahtarınız, özel anahtarı içe aktarmak için MetaMask'a yapıştırılabilir. Bu seçeneği kullanırsanız, özel anahtarınızın bir kopyasını kaydetmeyin. Sisteminizin güvenliği ihlal edilirse, özel anahtarınız da tehlikeye girer.

## Özel Anahtarı İçe Aktarma

Metamask cüzdanınızla ayarlandığınızı ve oturum açtığınızı varsayarsak, bir sonraki adım özel anahtarınızı MetaMask'a aktarmaktır. Öncelikle MetaMask cüzdanınızın sağ üst köşesindeki dairesel simgeye tıklayarak A menüsünü açın. Bu menüde `Import Account` seçeneğine tıklayın. Burada, özel anahtarınızı içe aktarmak için kullanmak istediğiniz seçeneği seçmek için `Select Type` seçeneğini kullanabilirsiniz.

<img alt='Import Private Key into MetaMask' width='50%' height='auto' class='center' src={useBaseUrl('img/content/mmimportkey.png')} />

Özel anahtarınızı Torus'tan kopyaladıysanız, `Private Key` seçeneği anahtarı MetaMask'a yapıştırmanıza izin verir. JSON dosyasını indirdiyseniz, `JSON File` seçin, ardından Torus'tan indirdiğiniz JSON özel anahtarını seçmek için `Choose File` seçeneğini kullanın. Torus'tan özel anahtar dosyasını indirmek için oluşturduğunuz parolayı girin, ardından `Import`'a tıklayın. Yeni hesabınız artık MetaMask'te görünmeli ve GIVeconomy dApp'leri ile etkileşime hazır olmalıdır!

<img alt='Paste Private Key' height='auto' width='40%' class='leftfloat' src={useBaseUrl('img/content/mmimportkey1.png')} />
<img alt='Select Private Key File' height='auto' width='40%' src={useBaseUrl('img/content/mmimportkey2.png')} />
