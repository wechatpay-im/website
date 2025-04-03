---
title: 指南
description: 此开发包承载了三部分内容，1、CLI：用符合官方开发规范的方式，获取微信支付平台证书，支持以命令行的方式，与服务端接口交互；2、CLIENT：通过链接相对路径(pathname)，用HTTP METHOD作为驱动执行函数，发起HTTP请求；3、SERVER：提供简单易用的方法，支持应用级快速集成。
head:
  - - meta
    - name: keywords
      content: 微信支付, PHP SDK指南, WeChatPay CertificateDownloader, Chainable OpenAPI client, Atomic Webhook functions
aside: true
prev:
  text: 软件开发包
  link: /devkit/
---

# 使用指南

{{ $frontmatter.description }}

## CLI 模式 {#cli}

在试用微信支付`APIv3`初始阶段，获取微信支付平台证书一直是件即简单又麻烦的过程，`PHP`环境也鲜有一键获取的解决方案。本包在[1.0](https://github.com/wechatpay-apiv3/wechatpay-php/releases/tag/v1.0.0)版本的时候即提供了与Java版参数语义一致的下载方案(并且原生支持应答验签功能)，使用`composer`命令，像安装依赖包一样下载平台证书文件。

::: details composer exec CertificateDownloader.php -- --help
```ansi:no-line-numbers
Usage: 微信支付平台证书下载工具 [-hV]
                    -f=<privateKeyFilePath> -k=<apiv3Key> -m=<merchantId>
                    -s=<serialNo> -o=[outputFilePath] -u=[baseUri]
Options:
  -m, --mchid=<merchantId>   商户号
  -s, --serialno=<serialNo>  商户证书的序列号
  -f, --privatekey=<privateKeyFilePath>
                             商户的私钥文件
  -k, --key=<apiv3Key>       APIv3密钥
  -o, --output=[outputFilePath]
                             下载成功后保存证书的路径，可选，默认为临时文件目录夹
  -u, --baseuri=[baseUri]    接入点，可选，默认为 https://api.mch.weixin.qq.com/
  -V, --version              Print version information and exit.
  -h, --help                 Show this help message and exit.
```
:::

[快速开始](/guide/getting-started)的起始部分，即使用此模式先行下载微信支付`APIv3`平台证书。

## CLIENT 模式 {#client}

大体上来说，一个[URL](https://developer.mozilla.org/docs/Web/API/URL)可分为如下三部分：

```ansi:no-line-numbers
[1;32mhttps://api.mch.weixin.qq.com/[0m[1;94mv3/certificates[0m?[1;31malgorithm_type=RSA[0m
[1;32m└──────────────┬─────────────┴[0m[1;94m───────┬──────┘[0m [1;31m└────────┬───────┘[0m
           [1;32mendpoint[0m               [1;94mpathname[0m        [1;31mquerystring[0m
```

- 接入点(**endpoint**): `https://api.mch.weixin.qq.com/`
- 相对路径(**pathname**): `v3/certificates`
- 查询参数(**querystring**): `algorithm_type=RSA`

微信支付当前已知的OpenAPI接入点(**endpoint**)有:

- `https://api.mch.weixin.qq.com/` 默认
- `https://api2.mch.weixin.qq.com/`
- `https://fraud.mch.weixin.qq.com/`
- `https://payapp.mch.weixin.qq.com/`
- `https://apihk.mch.weixin.qq.com/`
- `https://pay.wechatpay.cn/`

本开发包在初始化阶段，内置了默认的接入点(**endpoint**)，在特殊接口，如[付款到银行卡获取加密敏感信息的RSA公钥](/openapi/v2/risk/getpublickey)，就需要显式声明所对应的接入点(**endpoint**)；
在构造请求链时，把 相对路径(**pathname**) 以`/`做切分，取出 `segments` 映射成实例对象属性，接口支持的**HTTP METHOD**即作为末尾驱动执行函数，按需代入 查询参数(**querystring**)，发起HTTP请求。

编码书写方式有如下约定：

1. 请求 `segments` 按照顺序作为级联对象，例如 `v3/pay/transactions/native` 即链接成 `v3->pay->transactions->native`;

2. 每个 `segments` 所支持的 `HTTP METHOD`，即作为 请求对象的末尾执行方法，例如: `v3->pay->transactions->native->post([])`;

3. 每个 `segments` 级联对象末尾的`HTTP METHOD`方法，同时支持`getAsync|postAsync|putAsync|patchAsync|deleteAsync`方法链，即以`异步`方式请求远端接口;

4. 每个 `segments` 有中线(dash)分隔符的，可以使用驼峰`camelCase`风格书写，例如: `merchant-service`可写成 `merchantService`，或者字面量属性，如 `v3['merchant-service']`;

5. 每个 `segments` 中，若有动态参数，例如 `business_code/{business_code}` 可写成 `business_code->_business_code_` 或者字面量属性风格，如 `business_code['{business_code}']`;

6. 以 `v2` 开头的`segment`，其特殊标识为`APIv2`级联对象开始位，之后串接其他`segments`，如源 `pay/micropay` 即串接成 `v2->pay->micropay` 即以`XML`形式请求远端接口；

[开放接口](/openapi/)包含了大量的使用示例代码，请按需参阅使用。

## SERVER 模式 {#server}

[回调通知](/webhook/) 章节，当应用工作在服务端模式时，需要接收 微信支付 的后台数据(消息)通知时，按照开发规范，需要对数据：1. 验签、2. 解密、3. 应答。微信支付后台数据目前有两大类数据结构，APIv2基于XML规范，APIv3基于JSON规范。

### APIv2 XML规范 {#server.apiv2}

此类通知数据，首先需要对数据`XML`文本做转换，得到 **集合 $collection**，本开发包提供了方法即：

```php:no-line-numbers
$collection = \WeChatPay\Transformer::toArray($xml);
```

然后基于 [对称密钥算法的通用步骤](/guide/digital-signature#symmetric) 计算出签名值，然后对值比对。

#### 验签 {#server.apiv2.verify}

历史上，随官方业务的推进，在具体实现上，部分接口`signType`默认签名方法是`MD5`，部分接口是`HMAC-SHA256`，还有部分接口`无`签名(原因无从考证)，存在即合理，应用端需要以微信支付官方公布的开发文档为准。

```php:no-line-numbers
use \WeChatPay\Crypto\Hash;

// 对 集合 $collection 做本地运算
Hash::sign(Hash::ALGO_MD5, $something, $apiv2Key);
// 拿运算结果与通知签名值做安全比对
Hash::equals($localCaculated, $remoteProvided);
```

#### 解密 {#server.apiv2.decrypt}

**密文**是通过`AES-ECB`加密的，**密钥**是对**APIv2密钥**做`MD5`运算后取值小写的：

```php:no-line-numbers
//对APIv2密钥做标准MD5取值
$cipherkey = \WeChatPay\Crypto\Hash::md5($apiv2Key);
//对密文做解密
\WeChatPay\Crypto\AesEcb::decrypt($ciphertext, $cipherkey);
```

#### 应答 {#server.apiv2.response}

纯粹的数据格式转换，使用如下方法即：

```php:no-line-numbers
\WeChatPay\Transformer::toXml([
  'return_code' => 'SUCCESS',
  'return_message' => 'OK'
]);
```

### APIv3 JSON规范 {#apiv3}

此类通知数据，是基于 [非对称密钥算法](/guide/digital-signature#asymmetric) 对请求的`载荷`整体做验签，签名值在请求头(`headers`)的`Wechatpay-Signature`字段里。

#### 验签 {#server.apiv3.verify}

```php:no-line-numbers
//对请求报文做算法格式化
$data = \WeChatPay\Formatter::joinedByLineFeed($body, $timestamp, $nonce);
//格式化后的内容做公钥验签
\WeChatPay\Crypto\Rsa::verify($data, $signature, $publicKeyInstance);
```

#### 解密 {#server.apiv3.decrypt}

```php:no-line-numbers
//对请求载荷做转换
['resource' => [
 'ciphertext'      => $ciphertext,
 'nonce'           => $nonce,
 'associated_data' => $aad
]] = \json_decode($something);
//对`$.resource.ciphertext`做解密
\WeChatPay\Crypto\AesGcm::decrypt($ciphertext, $apiv3Key, $nonce, $aad);
```

#### 应答 {#server.apiv3.response}

纯粹的数据格式转换，使用内置的`json_encode`字符串化即：

```php:no-line-numbers
\json_encode(['code' => 'SUCCESS']);
```
