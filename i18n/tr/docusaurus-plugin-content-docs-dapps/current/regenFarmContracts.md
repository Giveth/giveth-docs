---
id: regenFarmContracts
title: Regen Farm Akıllı Kontrat Rehberi
slug: dapps/regenFarmContracts
---

GIVeconomy, bazı olanaklar sunmak üzere birlikte çalışan denetimden geçmiş akıllı kontratlardan oluşan bir koleksiyon olarak değerlendirilebilir: bunlar arasında token streaming, airdrop ve çeşitli farming yöntemleribulunur. Kontratlar ve script'lere Giveth [giv-token-contracts](https://github.com/Giveth/giv-token-contracts) repository'den erişebilirsiniz.

## Kontratlar
### Streaming
Streaming kontratı, ödüllerin (airdrop, likidite madenciliği ödülleri, vb.) tamamının son kullanıcı cüzdanına derhal gönderilmesi yerine belirli bir zaman aralığında kademeli olarak serbest bırakılmasına olanak sağlar. Bunun için kullanıcılara yapılacak bütün ödül ödemeleri, gelleneksel `transfer/safeTransfer` yerine `allocate` yöntemi ile gerçekleştirilir.
**Stream** kontratları, aşağıdaki yapılandırma parametreleri ile deploy edilir:
* **Total Tokens**: Stream süresi boyunca dağıtılacak toplam token miktarı
* **Start Time**: Stream'in başlayacağı zaman damgası
* **Duration**: Stream'in toplam süres. Stream'in sonunda tokenların %100'ü serbest kalır ve alıcılar tarafından claim edilebilir.
* **Cliff Period**: Stream'in başlangıcından sonra ilk periyodun süresi. Bu periyotta strem'in yalnızca başlangıç yüzdesi claim edilebilir.
* **Initial Percentage**: *Cliff Period* sırasında ödüllerin hemen claim edilebilir kısmı (yüzdesi)

**TokenDistro**, steraming özelliğini uygulayan akıllı kontrattır. Alıcının bakiyesini stream'e eklemek için hak sahibi her türlü kontrat veya hak sahii kullanıcı **TokenDistro** üzerindeki `allocate` yöntemini çağırabilir. `allocate`'i çağırabilen kontratlar ve kullanıcıların **TokenDistro** akıllı knotratında **DISTRIBUTOR** rolüne sahip olmaları gerkeir. Bunlara **Distributor** adı verilir. Distributor'ların her biri dağıtım yapabileceği bakiyeye sahiptipr. Dolayısıyla, allocation fonksiyonu çağrıldığında, tahsis edilen gönderilecek miktar distributor'un bakiyesinden düşülür ve alıcının bakiyesine eklenir.
Tahsis edilen miktarın belirli bir yüzdesi hemen claim edilebilir ve geri kalan yüzde ise alıcının stream akış hızını artırır. Akış hızı, haftalık periyorlarda stream'den claim edilebilecek token sayısını ifade eder. Zaman içerisinde, stream'in genişlemesi arttıkça alıcının hemen claim edebileceği yüzde artar.

## Airdrop
Başlangıçta token dağıtımı, **MerkleDistro** akıllı kontratı ile gerçekleştirilebilir. Bu knotrat Merkle Tree teorisini kullanır ve hak kazanan alıcıların her birinin airdrop'u claim edebilmek için kendilerine özgü proof verisini sağlamaları gerekir. Airdrop değeri aslında **TokenDistro** üzerinde `allocate` fonksiyonu çağrılarak tahsis edilir ve kullanıcının stream bakiyesine eklenir.
MerkleDistro kontratları aşağıdaki yapılandırma parametreleri ile deploy edilir:
* **Merkle Tree Root**: Merkle tree root anahtarı
* **Token Distro Address**: Deploy edilen TokenDistro kontratının adresi.
**MerkleDistro** akıllı kontratını deploy etmek için, bir merkle tree oluşturulmalıdır. Root'un değeri, deploy edilirken akıllı knotratta kullanılacak ve tree verisinin tamamı her bir kulllanıcının kendine özgü path'inden root'u almak için gereklidir. [giv-token-contracts](https://github.com/Giveth/giv-token-contracts) repo'da, merkle tree verisini oluşturmak için kullanabileceğinir bir script bulunmaktadır.
```
ts-node scripts/generate-merkle-root.ts --input <airdrop json file path> --output <output file path>
```
Airdrop verisinin JSON formatında oluşturulması herkes için kolay bir işlem değildir; kullanımı daha kolay bir format olan CSV dosyası ile ayrı bir script aracılığıyla `airdrop json file` oluşturulabilir.
```
ts-node scripts/csv2json.ts <airdrop csv list path> <airdrop json file path>
```

## Farming
Giveth farming için, *Unipool* akıllı kontratının bir türevi olan **UnipoolTokenDistro**'yu kullanmaktadır. **UnipoolTokenDistro**'nun farkı, tokenların alıcı adresine transfer edilmesindense *TokenDistro(stream)* üzerinde allocate fonksiyonunun çağrılarak stake edenlere ödeme yapılmasıdır.
Genel anlamda, Unipool kontratı stake edenleri stake ettikleri likiditeye göre ödüllendirir. Stake edenler tarafından yatırılan, `uni` adı verilen likidite tokenı native token (örn: GIV, FOX, vb.) veya bir havuza likidite eklenerek alınan LP tokenı (örn: UniswapV2, Sushiswap, Honeyswap, vb.) olabilir.
Unipool ödül miktarı, **rewardDistribution** tarafından `notifyRewardAmount(uint256 reward)` çağrılarak ayarlanır. **rewardDistribution**, **owner** olarak ayarlanabilr ve kontratı deploy eden varsayılan olarak kendi adresini **rewardDistribution** şeklinde ayarlayabilir. Bu yöntem her çağrıldığında, Unipool stake edenlere `duration` uzunluğunda bir süre akdar ödül dağıtmaya hazır hale gelir. Dolayısıyla, ödül dağıtıcının pozitif ödül oranını tutturması ve her bir turda ödül oranının farklı bir şekilde ayarlanması için `notifyRewardAmount` yöntemini düzenli olarak çağırması gerekmektedir.
**UnipoolTokenDistro** kontratları aşağıdaki yapılandırma parametreleri ile deploy edilir:
* TokenDistro Address: Deploy edilen TokenDistro kontratının adresi.
* Uni Token Address: Likidite tokenının adresi
* Duration: Ödül programı turunun uzunluğu

## Deploy İşlemi
Airdrop ve farmlar ile stream'in deploy işlemi karmaşık olabilir ve manuel olarak yapılırken hataya yol açabilir. Dolayısıyla, [giv-token-contracts](https://github.com/Giveth/giv-token-contracts) repository içerisinde işlemi kolaylaştıracak script'ler bulunmaktadır. Bu script'lerin çoğu, GIVeconomy kullanımına uygun şekilde hazırlanmıştır.
Ancak, DAO'ların kendi stream'lerini (tokenDistro) ve farming programlarını (Unipool) deploy edebilmeleri için de bir script mevcuttur. Script'e `deployments/regenFarms/1_regenFarm.ts` üzerinden erişebilirsiniz. Bu script, deploy öncesi yapılandırmayı `deployments/regenFarms/config.ts` dosyasından okur. `config.ts` içerisindeki yapılandırma formatı aşağıdaki gibidir:
```
const config: IRegenConfig = {
    alreadyDeployedTokenDistroAddress: "",
    newTokenDistroParams: {
        startTime: <start time timestamp>
        cliffPeriod: <cliff time duration seconds>
        duration: <duration seconds>
        initialPercentage: <percentage number, like 20_00>, // two decimals of precision, 20_00 means 20%
        tokenAddress: <Reward token address>
        totalTokens: <Total number of tokens to distribute limit>, // In ether format
        cancelable: <boolean>, // whether admins can cancel an allocation
    },
    unipools: {
        <Key>: {
            uniTokenAddress: <unit token address>,
            lmDuration: <unipool reward round duration seconds>
            rewardAmount: <Unipool balance on token distro>, // Number of tokens it can allocate
        },
        ...
    },
```
Script aracılığıyla deploy etmek için, bu ortam değişkenleri (env variables) ayarlanmalıdır:
* INFURA_PROJECT_ID: Deploy edilecek ağ xDai (Gnosis Chain) yerine farklı bir ağ olduğunda
* PRIVATE_KEY: xDai (Gnosis Chain) yerine farklı bir ağ kullanıldığında deploy edecek hesabın gizli anahtarı
* PRIVATE_KEY_XDAI: xDai (Gnosis Chain) kullanıldığında, deploy edecek hesabın gizli anahtarı

Script, aşağıdaki komut ile çalıştırılabilir
```
HARDHAT_NETWORK=<network e.g. xDAI, mainnet, kovan> ts-node deployments/regenFarms/1_regenFarm.ts
```