---
id: angelVault
title: Melek Kasası
---
import useBaseUrl from '@docusaurus/useBaseUrl'

Melek Kasası, GIV'i aşağı yönlü fiyat oynaklıklarından korumak amacıyla yapılandırılmış, stratejik olarak yönetilen bir Univ3 pozisyonudur. [4/7 çoklu izmacı Giveth çekirdek ekip üyeleri ve ICHI'den iki üye](https://gnosis-safe.io/app/eth:0x2B0ee142dCFE7C2dD150cDbd7B6832F6e9977f51/home) olan Melek Kasası çoklu imzacılarımız tarafından yönetilmektedir. Melek Kasa'lar ve nasıl çalıştıkları hakkında daha fazla bilgi edinmek için lütfen [ICHI dökümanlarına](https://docs.ichi.org/ichi-docs-v3/ichi-vaults/angel-vaults) göz atın.

## Kontratlar

- Angel Vault (ICHI) LM (Unipool): `0xA4b727DF6fD608d1835e3440288c73fB28c4eF16`
- Angel Vault (ICHI) LP: `0xc3151A58d519B94E915f66B044De3E55F77c2dd9`

## oneGIV
oneGIV, 1:1 oranında DAI kullanılarak basılabilen bir Giveth Markalı Dolardır (ICHI tarafından). Bu, [ICHI'nin web sitesi](https://app.ichi.org/vault?poolId=20009&back=vault) aracılığıyla yapılabilir. ICHI'nin markalı doları hakkında daha fazla bilgi edinmek için [lütfen ICHI dökümankarına göz atın](https://docs.ichi.org/ichi-docs-v3/branded-dollars/overview).

oneGIV, %100 DAI kullanılarak basılmıştır ve ayrıca GIV tarafından fazladan teminatlandırılmıştır. Sözleşme, DAI ile ilgili bir sorun olması durumunda ek teminat olarak GIV tutar. oneGIV'in tüm basım ve yakım işlemleri, Melek Kasası çoklu imzacılarımız tarafından yönetilen bir sözleşme aracılığıyla gerçekleşir.

Zaman içinde, Giveth DAO para basma için kullanılan %100 DAI oranını DAI ve GIV'in bir kombinasyonuyla (ör. %80 DAI, %20 GIV) değiştirmek için oy kullanabilir. Yine de, sabit fiyatı dolar üzerinde tutmak amacıyla, DAI için yakılan her oneGIV her zaman %100 DAI ile sonuçlanır.

## Likidite Sağlama ve Kaldırma
Likidite sağlayıcıları, [ICHI'nin web sitesi](https://app.ichi.org/vault?poolId=20009&back=vault) aracılığıyla oneGIV kullanarak Melek Kasası'na likidite ekleyebilir ve ardından LP tokenlerini [GIVfarm'da](https://giveth.io/givfarm) stake edebilir. oneGIV bir oneGIV / GIV Univ3 pozisyonuna eklendiğinden dolayı, likiditeyi kaldırdığınızda Melek Kasası'ndaki varlıklarla orantılı olarak oneGIV ve GIV alırsınız.

## Ödül Kazanma
Likidite sağlayıcılara sağlanan likidite oranında ödüller verilmektedir. LP tokenlerinizi stake ettiğinizde, iki kısımda ödüller kazanırsınız:
1. Melek Kasası konumunuzu otomatik olarak artıran %1 Uniswap ücreti([IRR](https://docs.ichi.org/ichi-docs-v3/resources/faqs#what-does-the-irr-metric-on-the-angel-vault-page-represent)).
2. Her zaman olduğu gibi GIV akışına göre dağıtılan GIVfarm içinden GIV teşvikleri. Talep edilebilir ödüllerinizin ne kadar olacağını anlamak için [**GIViverse İlerlemesine**](https://giveth.io/givstream)'ne göz atın.

GIVfarm'da bir GIV/GIV stake havuzunda gösterilen APR, bu iki ödül oranının toplamıdır.

<img alt="angel vault staking farm staking card" src={useBaseUrl('/img/content/giveconomy/angelVaultCard.png')} />

## GIV ödüllerinin Melek Kasası LP Stakerlerine dağıtılması
Başlangıç tarihi olan 4 Ağustos 2022'den itibaren 26 hafta boyunca Melek Kasası LP stake yapanlar için bir ödül programı yürütmek üzere toplam 6 Milyon GIV tahsis edilmiştir. Her iki haftalık dönem boyunca gönderilen ödüllerin miktarı aşağıdaki gibidir:

| Hafta    | GIV Ödülleri (2 haftalık süre içinde)   | ödüllerin %'si|
| -------  | --------------------------------------- | ------------  |
| Hafta 1  | 485,143                                 | 8.09%         |
| Hafta 3  | 569,143                                 | 9.49%         |
| Hafta 5  | 140,000                                 | 2.33%         |
| Hafta 7  | 653,143                                 | 10.89%        |
| Hafta 9  | 140,000                                 | 2.33%         |
| Hafta 11 | 737,143                                 | 12.29%        |
| Hafta 13 | 140,000                                 | 2.33%         |
| Hafta 15 | 821,143                                 | 13.69%        |
| Hafta 17 | 140,000                                 | 2.33%         |
| Hafta 19 | 905,143                                 | 15.09%        |
| Hafta 21 | 140,000                                 | 2.33%         |
| Hafta 23 | 989,143                                 | 16.49%        |
| Hafta 25 | 140,000                                 | 2.32%         |

### Teşvik Planı — Pürüzlü Merdiven
Melek Kasası başlatıldığında, likiditesinin tamamı oneGIV'de olacaktır. Bu Melek kasası, kasada yüksek oranda oneGIV olduğunda en iyi şekilde çalışacağından dolayı faydalıdır, ancak bu yüzde zaman içinde sabit kalmaz.
GIV tokeni üzerinde piyasada satış baskısı olduğunda GIV oranı yükselir.
Yeni Melek Kasası LP pozisyonları oluşturulduğunda oneGIV oranı yükselir.
GIV/oneGIV oranı, Melek Kasası LP konumları kaldırıldığında aynı kalır.
Bu nedenle, likidite sağlayıcılarını periyodik olarak likiditeyi çekmeye(GIV'in bir kısmını havuzdan çıkarmaya) ve ardından oneGIV'de yeniden likidite ekleyerek Melek Kasasındaki toplam istikrar yoğunluğunu artırmaya teşvik etmek istiyoruz. Bu, Melek Kasası satın alma duvarının gücünü desteklemeye yardımcı olacaktır.

<img alt="rewards distribution schedule for jagged staircase" src={useBaseUrl('/img/content/giveconomy/jaggedStaircase.png')} />
