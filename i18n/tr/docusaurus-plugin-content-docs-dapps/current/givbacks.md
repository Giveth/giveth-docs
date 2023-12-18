---
id: givbacks
title: GIVbacks
slug: giveconomy/givbacks
---
import useBaseUrl from '@docusaurus/useBaseUrl';

GIVbacks, bağışçıları GIV tokenları ile doğrulanmış projelere ödüllendiren devrim niteliğinde bir kavramdır. Bir GIVbacks turu sırasında doğrulanmış projelere verdiğinizde, tur sona erdikten ve GIV talep etmeye hazır olduktan sonra GIV ödüllerini almaya hak kazanırsınız. Güncel bilgileri, programı ve talep edilebilir GIV'nizi [GIVbacks](https://giveth.io/givbacks) sayfasında görebilirsiniz.

## GIVbacks Turları
GIVbacks turları her ayın son iki haftasındadır. Her tur için ödüllendirilebilecek 1 milyon GIV vardır.

![](https://i.imgur.com/aqqydX7.png)

Aktif bir turda doğrulanmış projelere bağışta bulunan bağışçılar, GIVback almaya hak kazanırlar. Doğrulanmış projelerin adreslerine, kendi projelerine veya diğer doğrulanmış projelere yapılan bağışlar için GIV verilmeyeceğini unutmayın.

![](https://i.imgur.com/Dhk3TV7.png)


## Proje Doğrulama
'Doğrulandı', Giveth'teki meşru projeler için bir onay mührüdür. Birçok Doğrulanmış proje, The Giving Block API'sinden önceden incelenmiş olarak gelmiştir. Giving Block, Amerika Birleşik Devletleri'nden kriptoya kayıtlı 501c3'leri destekleyen ve entegre eden bir kuruluştur ve entegrasyonumuzla, Giveth UI'dan projelerine bağışta bulunabilirsiniz.

Giving Block olmayan projeler için doğrulama süreci, projelerin projeleri ve kuruluşun amaçlanan etkisi hakkında ek bilgi sağlamasını gerektirir. Proje Doğrulama Ekibimiz daha sonra bu başvuruları inceler, verilen bilgileri inceler ve proje sahiplerini karar hakkında bilgilendirir.

Proje doğrulama süreci hakkında daha fazla bilgi edinmek için [belgelerimize](./projectVerification.md) göz atın.

## GIVback'e Hak Kazanan Tokenlar

Bir bağışçı, Gnosis Chain (eski adıyla xDai Network) veya Ethereum Mainnet'teki Giveth.io'daki projelere herhangi bir ERC-20 tokenı bağışlayabilir. Ancak, yalnızca belirli tokenlardaki Doğrulanmış Projelere yapılan bağışlar GIVback için uygundur. Bu kısıtlama, bağışlar için doğru fiyat verilerini alabilmemizi sağlar (GIVback'lerin adil dağılımı için bir gereklilik) ve kötü aktörlerin GIVbacks programını oynamasını önler. Uygun tokenların tam listesini görmek için [bu forum gönderisini](https://forum.giveth.io/t/givbacks-token-list/253) ziyaret edin.

## GIVbacks Alma
Her turda, DApp'teki doğrulanmış projelere yapılan tüm bağışlar izlenir ve bu veriler, o dönem için her bir Bağışçı tarafından alınan GIVbacks miktarını hesaplamak için kullanılır.

Bağışçılar, tur sona erdikten ve bir dolandırıcılık incelemesi yapıldıktan sonra GIV'lerini talep edebilirler. Bağışçılar, ödüller [GIVbacks sayfasında](https://giveth.io/givbacks) talep edilmeye hazır olduğunda bir e-posta alacaktır. GIV'nin bir kısmı hemen likit olacak ve geri kalanı [GIVstream](https://giveth.io/givstream) akışına artıracaktır. GIVstream'in nasıl çalıştığı hakkında daha fazla bilgi edinmek için [belgelerimize](https://giveth.io/givbacks) göz atın. Bu dokümantasyonun amaçları doğrultusunda, GIVback'lerden GIVstream'e tahsis edilen likit miktar ve miktarın toplamına `kümülatif GIVback'ler` olarak atıfta bulunacağız.

### Sıralama ve Hesaplama

GIVbacks programında bile, Giveth'te yapılan bir bağışın yine de bir bağış olduğunu unutmayın. Bağışçının `kümülatif GIVback'lerinin` maksimum değeri, bağış sırasında **bağışlarının ABD Doları değerinin %50'sinden %80'ine kadar herhangi bir yerde** olabilir. Aldıkları GIVback'lerin tam miktarı, [projenin mevcut GIVpower sıralamasına](./GIVpower.md#project-rank) bağlıdır. [GIVpower](./GIVpower.md) ile güçlendirilmiş her doğrulanmış projenin platformda bir sıralaması olacaktır. Bir önceki iki haftalık turda en fazla GIVpower ile güçlendirilen proje en yüksek GIVbacks faktörü yüzdesini (%80) sunarken, bir önceki tur için en düşük dereceli proje ve derecelendirilmemiş/güçlendirilmemiş projeler en düşük GIVbacks faktörü yüzdesini (%50) alacaktır. En alttan en üst sıralara kadar her proje kademeli olarak daha yüksek bir GIVbacks faktörü yüzdesine sahip olacak, [GIVpower belgelerinde](./GIVpower.md#project-ranking) daha fazla bilgi edinebilirsiniz.

:::info
27 Aralık 2022'den (proje sıralaması yürürlüğe girdiğinde) önce doğrulanmış projelerin bağışçılarına gönderilen GIVback'ler, maksimum %75'lik GIVbacks faktörü kullanılarak hesaplandı.
:::

Bir turun sonunda, dağıtılacak tahmini GIVback miktarı tur başına 1 milyon GIV sınırını aşarsa, bağışçılar her bağış için bağışta bulundukları projenin sıralamasına göre orantılı olarak daha az eşleştirme alacaklardır. Bu, aşağıdaki şekilde hesaplanır:

$$
n = N \frac{g}{G}
$$

Formül açıklaması:

* n = Belirli bir bağış için bağışçı tarafından kazanılan GIV tokenlarının toplam kümülatif miktarı
* N = Turda dağıtım için tahsis edilen toplam GIV token sayısı (1 milyon GIV)
* v = Bağış anındaki bağışın değeri (USD cinsinden)
* V = Tur boyunca uygun projelere yapılan tüm bağışların toplam değeri (ABD Doları cinsinden)

GIVbacks programı aracılığıyla kazanılan GIV tokenları GIVeconomy boyunca kullanılabilir: [GIVgarden](https://giveth.io/givgarden) içindeki yönetim için, [GIVfarm](https://giveth.io/givfarm)'da likidite sağlayarak (ve elbette ödüller kazanarak!) tokenı desteklemek veya [Giveth](https://giveth.io/)'teki projelere bağış yapmak için kullanılır.

## GIVback'leri Toplama

GIVback'ler, tur sona erdikten, veriler gözden geçirildikten ve GIV uygun bağışçı adreslerine dağıtıldıktan sonra toplanmaya hazırdır. GIVbacks ödülleri talep etmeye hazır olduğunda bağışçılar bir e-posta alacaklardır, böylece GIV'ler toplanılabilir. GIVeconomy'nin herhangi bir bölümünden GIV ödüllerini topladığınızda, token dağıtım sözleşmemizin size o ağdaki adresinize tahsis edilen tüm likit GIV'leri gönderdiğini unutmayın. Örneğin, Gnosis Zincirinde (eski adıyla xDai Ağı) GIVfarm'da LP token stake ederek kazanılan GIV ödüllerini hasat ettiğinizde, GIVback'lerden (varsa) size tahsis edilen ödülleri ve GIVstream'inizdeki likit miktarı da toplayabilirsiniz. Bu, talep üzerine karşılaştığınız hasat açılır penceresinden ayrılmıştır:

![](https://i.imgur.com/SjSs7M5.png)


---
## GIVbacks Programı için Diskalifiye Faktörleri

GIVbacks turu sona erdiğinde, GIV bağışçılara dağıtılmadan önce ekibimize, aşağıdaki diskalifiye edici faktörler için işaretlenen projeleri ve bağışları gözden geçirmesi için bir süre verilir. Bu faktörlerden herhangi biri bulunursa, bir projenin Doğrulanmış durumu iptal edilebilir. Aşağıdaki faaliyetlerden herhangi biriyle bulunan projelere bağış yapanlar, o tur için GIVback'leri reddedilebilir.

1. **Bağışçılara bağışları karşılığında mal veya hizmet vermek/sunmak.** Bir proje sahibi, geliri hayır kurumuna gitse bile, bir konferans sponsorluğu, Kız İzci birliği kurabiye alımı veya bir akşam yemeği için bilet gibi mallar sunamaz. Proje sahipleri, bağışçıları için kripto borsası gibi hizmet veremezler. Bir borsanın nasıl kullanılacağını açıklayabilirler, ancak bağışçıları için parayı çeviremezler.
2. **Başka yollarla toplanan bağışları sirküle etmek.** GIVback'ler için yalnızca "ilk kez" yapılan bağışlar geçerlidir. Bir proje bir bağışçıdan fon alırsa ve bu bağışları GIVback almak için Giveth platformunda dolaştırdığı tespit edilirse, diskalifiye edilecektir. Örneğin, bir proje başka bir yerden alınan itibari para bağışlarını bağışçılarına geri göndermemeli ve onlardan kripto ile Giveth'te bağış yapmalarını istememelidir.
3. **Fonlar, proje sayfasında veya gönderilen doğrulama başvurusunda belirtilenler için kullanılmamaktadır.** Doğrulanmış projeler, fonların nasıl kullanıldığına ilişkin bilgilerle projelerini güncel tutmaktan sorumludur. Proje, örneğin fonları eğitim programları geliştirmek için kullandıklarını açıkça belirtirse, ancak fonları geliştiricileri istihdam etmek için kullandıkları tespit edilirse, GIVbacks programından diskalifiye edilebilirler.
4. **Ahlaksız veya hileli faaliyet.** Bu şiddet kullanımı, yasaları çiğneme veya [Giveth topluluğunun değerlerini](/whatisgiveth) desteklemeyen diğer davranışlar olabilir. [Hükümler ve Koşullarımızı](https://giveth.io/tos) ihlal ettiği tespit edilen projeler, yalnızca doğrulama durumlarını kaybetmekle kalmayacak, aynı zamanda iptal edilecektir.

Giveth Proje Doğrulama ekibi, GIVbacks etkinliğini ve Proje Doğrulama sistemini izlemekten sorumludur ve bir projenin eylemlerinin vicdansız ve/veya diskalifiye edici olup olmadığını belirlemek için nihai olarak kendi takdirlerini kullanır.

## Raporlanan Bağışlar için Yaptırımlar

Yukarıdaki diskalifiye edici faktörlerden herhangi biri için işaretlenen doğrulanmış projeler ve bağışlar, burada özetlenen yaptırımlara göre analiz edilecek ve ayırt edilecektir:

- Geri dönüş fonları olduğu veya o tur için diskalifiye edilen bir projeye bağışlandığı tespit edildiğinden GIVback'leri iptal edilen bir bağışçı, o tur için uygun bağışları tartışan forum gönderisine bir bağlantı içeren bir e-posta alacaktır. Proje turdan diskalifiye edilmişse, bağışlar iade edilemez ve GIVback'ler “iptal edilemez”.

Bağışlar her zaman birer bağıştır ve doğrudan projeye giderler. GIVbacks programı, bağışçılarımızı GIV ve dolayısıyla yönetim haklarıyla ek olarak güçlendirmek için oluşturulmuştur, ancak yalnızca GIV alma beklentisiyle bağış yapmamalısınız. Anlayışınız için minnettarız.

---

**GIVbacks programı, bağışçılara bir çeşit geri verme yöntemimizdir. Bu bizim topluluk ile kurduğumuz ilişkidir. Gerçek bağışçıları Giveth'in geleceği ve dolayısıyla Giveth'in Geleceği üzerinde yönetişim gücüyle güçlendirmeyi amaçlıyoruz. GIVbacks almak için bugün [doğrulanmış projelere bağış yapmaya başlayın!](https://giveth.io/projects)**
