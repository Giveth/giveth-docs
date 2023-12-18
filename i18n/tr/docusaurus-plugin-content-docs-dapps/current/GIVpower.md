---
id: givpower
title: GIVpower
slug: giveconomy/givpower
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../../../../src/css/custom.css'


# GIVpower 

GIVpower, projeler ve bağışçılar arasında kazan-kazan bir ilişkisi oluşturmak için oluşturuldu. GIV sahipleri, GIV tokenlerini GIVfarm'da stake ettiklerinde ve kilitlediklerinde(isteğe bağlı) GIVpower ve kazanç elde ederler. Nihayetinde bu GIVpower'larını Giveth'teki projeleri "desteklemek"🚀 için kullanabilecekler ve projelerin sıralamalarını yükseltmeye yardımcı olacaklar. En üst sıralarda yer alan projeler platformda avantajlar elde edecek. Başlangıçta proje bağışçıları daha fazla GIVback alacak ve sonunda proje eşleşen fonları ve diğer faydaları elde edecek..

4 Ekim 2022'de başlatılan GIVpower'ın 1. aşaması, GIVfarm'da GIV stake etmeye yeni bir mekanizma ekliyor. 

<img alt='givpower staking card' width='30%' heigh='auto' src={useBaseUrl('img/givpowerCard.png')} />


GIV ödüllerinin APR'sine ve [Giveth yönetişimi için gGIV] (https://docs.giveth.io/giveconomy/givgarden) almaya ek olarak, kullanıcılar ayrıca devredilemez bir ERC-20 tokeni olan **GIVpower'a** sahip olmaktadır. Stake edilen GIV tokenler, GIVpower ile 1:1 oranında eşleştirilir.
Yani 100 GIV stake ederseniz 100 GIVpower alırsınız.

Ayrıca, kullanıcılar ödül APR oranlarını ve GIVpower’larını arttırabilmek için GIVfarm’larda stake edilmiş GIV’lerini “Kilitleyebilecekler”.

### Kontratlar

- GIVpower(POW) Token - [0xD93d3bDBa18ebcB3317a57119ea44ed2Cf41C2F2](https://gnosisscan.io/address/0xD93d3bDBa18ebcB3317a57119ea44ed2Cf41C2F2)
- GIVpower Staking - [0x24F2d06446AF8D6E89fEbC205e7936a602a87b60](https://gnosisscan.io/address/0x24F2d06446AF8D6E89fEbC205e7936a602a87b60)

## Stake & Kilitleme

Artık kullanıcılar stake edilmiş GIV’lerini bir süreliğine kilitleyerek ödüllerini artırabilirler. GIV'i kilitlemek, belirli bir süre için stake işleminin geri alınamayacağı anlamına gelir, Belirli miktardaki GIV tokenin kilidinin açıldığı tarihi "Kilitli GIV Ayrıntıları" açılır penceresinde görebilirsiniz.

:::info
GIVpower yalnızca Gnosis Zincirinde mevcuttur. Eğer Ethereum Anaağı üzerinde GIV'niz varsa ve ödüller kazanmak ve GIVpower ile katılmak istiyorsanız, GIV'nizi Ethereum Anaağı’ndan Gnosis Zincirine [köprüleyebilirsiniz.](https://omni.gnosischain.com/bridge)
:::

GIV, GIVback'lerle aynı programı izleyerek iki haftalık bölümlere göre kilitlenebilir, minimum süre 1 tur (2 hafta) ve maksimum süre 26 turdur (1 yıl). 

GIV'nizi ne kadar uzun süre kilitlerseniz, kilitlenen o belirli GIV miktarı için getiri çarpanı o kadar yüksek olur. Daha büyük bir getiri çarpanı, GIVfarm ödüllerinden daha fazla GIV alacağınız (daha yüksek bir APR alırsınız) ve ayrıca daha fazla GIVpower elde edeceğiniz anlamına gelir. Aldığınız gGIV miktarı artmayacaktır.

<img alt='givpower multiplier' width="80%" heigh='auto' src={useBaseUrl('img/givpowerMultiplier.png')} />

Birden çok GIV token grubunu farklı süreler için kilitleyebilirsiniz, tokenlerinizi ne kadar süreyle kilitli tuttuğunuza bağlı olarak her grubun farklı bir APR'si olabilir. 

<img alt='givpower locked giv details' width="80%" heigh='auto' src={useBaseUrl('img/givpowerLockedDetails.png')} />


GIV'inizin kilitleme süresi sona erdikten sonra, GIV'inizin kilidi açılır, yani yapılan stake GIVfarm'dan  kaldırılabilir. Stakelerin kaldırılması, ilişkili tüm GIVpower ve gGIV'i kaybedeceğiniz anlamına gelir. Ancak GIV'inizi tekrar stake ederek geri alabilirsiniz.



### GIVfarm APR

GIV'nizi kilitlediğinizde, kilitlenen o GIV miktarı için tahmini bir APR göreceksiniz. Gerçek APR, tüm kullanıcılar arasında farm'da stake edilen gerçek toplam GIV miktarına göre değişecektir ve kilitlenen her token grubu için farklı olabilir. GIVpower staking kartındaki "Kilitli GIV Ayrıntıları" açılır penceresine giderek her grup için gerçek APR'nizi görebileceksiniz.

<img alt="locked givpower aprs" width="80%" heigh='auto' src={useBaseUrl('img/givpowerLockedapr.png')} />

GIVpower istifleme kartında gösterilen APR, kilitli GIV'inizin tüm gruplarının ağırlıklı ortalamasıdır. GIVpower'da kilitli bir GIV'niz yoksa, size o anda mümkün olan en düşük ve en yüksek APR'lerin bir aralığı gösterilecektir.

<img alt='givpower staking card apr' width='30%' heigh='auto' src={useBaseUrl('img/givpowerCardapr.png')} />


#### Kilit Açma

Kilit açma yalnızca yeni bir turun başında gerçekleşir, bu nedenle GIV'nizi bir turun ortasında kilitlerseniz, kilit açma tarihi bir sonraki turun başladığı andan itibaren hesaplanacaktır.


Örneğin:

> Bugün 25. turun 5. günü ve Mohammad stake ettiği GIV'lerini 5 tur (10 hafta) için kilitledi. GIV'leri 26. tur başlayana kadar 25. turun tamamı (9 gün daha) boyunca kilitli kalacak, ARTI 5 tur daha, yani GIV'lerin nihayet 31. turun sonunda kilidi açılacaktır.

Her miktar için kilitleme sürenizin süresi sona erdiğinde, o GIV miktarının kilidi açılır ve böylece o miktarın APR'si GIV stake’i için minimum APR'ye düşer. APR'nizi tekrar artırmak için GIV'nizi kilitlemeniz gerekir.

### Çarpan
GIV APR ödülleri ve GIVpower çarpanını hesaplamak için temel formül şöyledir:

$$
\sqrt(1 + N)
$$
*N = kilitli tur sayısı*

Bunun nasıl çalıştığını anlamak için bir örneğe bakalım: 

> Carlos stake ettiği GIV'in 100'ünü 10 tur (20 hafta) için kilitlemeye karar verir. 2 ondalık basamağa yuvarlanmış çarpanı **3,32**'dir.
> $$
> \sqrt(1 + 10) = 3.3166247903554 
> $$
> Kilitleme sırasında minimum GIV stake APR'si %35 ise, kilitleme anındaki APR'si ~%116 olacaktır. Gerçek miktar, bahsedildiği gibi, farm’a stake edilen toplam GIV miktarına bağlı olarak değişken olacaktır, ancak aynı çarpan olan 3,32, Carlos'un kazandığı GIV ödülleri için mevcut paylaştırma APR'sine uygulanacaktır.
> 
>Carlos ayrıca GIVpower’da bir çarpan elde edecekti. Stake ettiği 500 GIV olduğunu ve bu 500'den 100'ünü kilitlemeyi seçtiğini varsayarsak, o zaman 732 GIVpower’a sahip olur.
>$$
>(100 * 3.32) + 400 = 732
>$$

> Carlos'un GIV'lerini kilitlediği 10 turdan sonra, GIVpower artık bir çarpana sahip olmayacak ve sadece 500'e düşecek, 1:1 ile eşleşecek ve APR'si minimum stake edilen APR'ye inecek.

:::success
#### Yayınlanan Ödüller
Her zaman olduğu gibi, tüm GIVeconomy ödülleri GIVstream’a göre dağıtılır. Talep edilebilir ödüllerinizin ne kadar olacağını öğrenmek için [**GIViverse İlerlemesine**](https://giveth.io/givstream) göz atın.
:::


<img alt='GIVpower overview' src={useBaseUrl('img/GIVpowerOverview.png')} />

## Ödül Dağıtımı
GIVpower Ödüllerinin ilk 6 ayına 7 Milyon GIV tahsis edildi. İlk 6 ayın sonuna doğru Giveth, programın performansını değerlendirecek ve buna göre daha fazla ödül dağıtacak.

## Güçlendirme (Aşama 2)

Bahsedildiği gibi, kullanıcılar artık GIV'lerini GIVfarm'da stake ettikleri için GIVpower alacaklar. Aşama 1'in hemen ardından, kullanıcıların projeleri GIVpower ile güçlendirmesine olanak tanıyacak olan Aşama 2'nin piyasaya sürülmesi yakında gerçekleşecek.

Kullanıcılar, projeleri desteklemek için GIVpower’larını kullanabilecekler. Desteklenmiş projeler, üzerlerinde ne kadar GIVpower stake edildiğine göre platformda sıralanacak ve sıralamalarına göre bağışçılarına daha fazla GIVback üretecekler. 

En üst sıralarda yer alan projeler, [GIVmatching Programı](https://forum.giveth.io/t/givmatching-idea-generation-on-how-to-distribute-funds/346/21) tarafından sağlanan eşleştirme fonlarından da yararlanacaktır. 

Hem Boosting hem de GIVmatching henüz yayınlanmadı ve daha fazla ayrıntı mevcut oldukça bu belgeleri güncelleyeceğiz.

:::info
#### Delegasyon
Giveth gelecekte, kullanıcıların GIVpower devretme yeteneğini sağlayacak ve güvenilir bağışçıların projeleri onlar adına düzenlemesine izin verecek, daha fazla ayrıntı için bizi takipte kalın!
:::
