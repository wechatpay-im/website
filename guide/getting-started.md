---
title: 快速开始
description: 使用composer安装wechatpay/wechatpay包之后，兼容微信支付公钥及/或平台证书模式，支持包含XML模式的数据通信协议，一个闭环示例链式调用OpenAPI接口。
head:
  - - meta
    - name: keywords
      content: PHP开发, RSA Public Key/X509 Certificate, Chainable OpenAPI client, WeChatPay Transactions samples
aside: true
---

# 快速开始

## 安装 {#install}

```bash:no-line-numbers
composer install wechatpay/wechatpay
```

## 下载微信支付公钥 {#pubkey}

> [!NOTE]
> 2024年Q3，微信支付官方开启了「微信支付公钥」平替「平台证书」方案，初始化所需的参数仅需配置上 **微信支付公钥ID** 及 **微信支付公钥** 即完全兼容支持，CLI/API下载 **平台证书** 已不是一个必要步骤，可略过。
> **微信支付公钥ID** 及 **微信支付公钥** 均可在 [微信支付商户平台](https://pay.weixin.qq.com/) -> 账户中心 -> API安全 查看及/或下载。

## 下载平台证书 {#cli}

执行如下命令：

```bash:no-line-numbers
composer exec CertificateDownloader.php -- \
-k APIv3KeyString \
-m merchantId \
-s merchantCertificateSerial \
-f /path/to/merchant/apiclient_key.pem \
-o .
```

提供正确的`APIv3密钥`、`商户号`、`商户API证书序列号`、`商户API私钥文件地址`，执行后，屏幕输出样例：

::: details debug HTTP message
```ansi:no-line-numbers
* Host api.mch.weixin.qq.com:443 was resolved.
* IPv6: (none)
* IPv4: 101.91.0.140, 101.226.137.13
*   Trying 101.91.0.140:443...
* ALPN: curl offers http/1.1
*  CAfile: /usr/local/etc/openssl@3/cert.pem
*  CApath: none
* SSL connection using TLSv1.2 / ECDHE-RSA-AES256-GCM-SHA384 / secp256r1 / rsaEncryption
* ALPN: server accepted http/1.1
* Server certificate:
*  subject: C=CN; ST=Guangdong Province; L=Shenzhen; O=Tenpay Technology Company Limited; CN=payapp.weixin.qq.com
*  start date: May 14 00:00:00 2024 GMT
*  expire date: May 13 23:59:59 2025 GMT
*  subjectAltName: host "api.mch.weixin.qq.com" matched cert's "*.mch.weixin.qq.com"
*  issuer: C=US; O=DigiCert Inc; CN=DigiCert Secure Site CN CA G3
*  SSL certificate verify ok.
*   Certificate level 0: Public key type RSA (2048/112 Bits/secBits), signed using sha256WithRSAEncryption
*   Certificate level 1: Public key type RSA (2048/112 Bits/secBits), signed using sha256WithRSAEncryption
*   Certificate level 2: Public key type RSA (2048/112 Bits/secBits), signed using sha1WithRSAEncryption
* Connected to api.mch.weixin.qq.com (101.91.0.140) port 443
* using HTTP/1.x
> GET /v3/certificates HTTP/1.1
Host: api.mch.weixin.qq.com
Accept: application/json, text/plain, application/x-gzip, application/pdf, image/png, image/*;q=0.5
Content-Type: application/json; charset=utf-8
User-Agent: wechatpay-php/1.4.10 GuzzleHttp/7 curl/8.10.1 (Darwin/19.6.0) PHP/8.3.13
Authorization: WECHATPAY2-SHA256-RSA2048 mchid="",serial_no="",timestamp="",nonce_str="",signature=""

* Request completely sent off
< HTTP/1.1 200 OK
< Server: nginx
< Date: Tue, 05 Nov 2024 01:50:19 GMT
< Content-Type: application/json; charset=utf-8
< Content-Length: 2268
< Connection: keep-alive
< Keep-Alive: timeout=8
< Cache-Control: no-cache, must-revalidate
< X-Content-Type-Options: nosniff
< Request-ID: 08DBF3A5B9061050120817028BCA901-8E0CC0EDF
< Content-Language: zh-CN
< Wechatpay-Nonce: 804c37132dbc174cd7add22556a05f46
< Wechatpay-Signature: YXBcvMtznG3RIuIXRf/w==
< Wechatpay-Timestamp: 1730771719
< Wechatpay-Serial: 7132D72A03E93CDDF8C03BBD1F37EEDF********
< Wechatpay-Signature-Type: WECHATPAY2-SHA256-RSA2048
<
* Connection #0 to host api.mch.weixin.qq.com left intact
```
:::
```ansi:no-line-numbers
Certificate #0 {
    Serial Number: [1;32m7132D72A03E93CDDF8C03BBD1F37EEDF********[0m
    Not Before: 2023-12-07T15:12:49+08:00
    Not After: 2028-12-05T15:12:49+08:00
    Saved to: [1;32m./wechatpay_7132D72A03E93CDDF8C03BBD1F37EEDF********.pem[0m
    You may confirm the above infos again even if this library already did(by Crypto\Rsa::verify):
      [1;32mopenssl x509 -in ./wechatpay_7132D72A03E93CDDF8C03BBD1F37EEDF********.pem -noout -serial -dates[0m
    Content:

-----BEGIN CERTIFICATE-----
MIIEFDCCAvygAwIBAgIUXli9kmam9wOArpjYamm9r8i5rXgwDQYJKoZIhvcNAQEL
BQAwXjELMAkGA1UEBhMCQ04xEzARBgNVBAoTClRlbnBheS5jb20xHTAbBgNVBAsT
FFRlbnBheS5jb20gQ0EgQ2VudGVyMRswGQYDVQQDExJUZW5wYXkuY29tIFJvb3Qg
Q0EwHhcNMjMxMjA3MDcxMjQ5WhcNMjgxMjA1MDcxMjQ5WjBuMRgwFgYDVQQDDA9U
ZW5wYXkuY29tIHNpZ24xEzARBgNVBAoMClRlbnBheS5jb20xHTAbBgNVBAsMFFRl
4uqHBltg+PabqLRsD0n8Yl+W/U/JqNZdy+40OWrlviwB15B/e2GlTw==
-----END CERTIFICATE-----

}
```

`./wechatpay_7132D72A03E93CDDF8C03BBD1F37EEDF********.pem` 即为 `微信支付平台证书` 文件。

> [!IMPORTANT] 重要提示
> 当下载证书后，屏显有几条证书信息，就在应用中配置**certs**几条，尤其是在[新旧平台证书交替灰度时](https://pay.weixin.qq.com/docs/merchant/development/interface-rules/wechatpay-certificates-rotation.html)，需要把新旧证书都配上，应用才不会出现事故。

## 应用代码 {#sample}

### 初始化 {#init}

```php
require_once('vendor/autoload.php');

use WeChatPay\Builder;
use WeChatPay\Crypto\Rsa;

// 商户号
$merchantId = '190000****';

// 从本地文件中加载「商户API私钥」，用于生成请求的签名
$merchantPrivateKeyFilePath = 'file:///path/to/merchant/apiclient_key.pem';
$merchantPrivateKeyInstance = Rsa::from($merchantPrivateKeyFilePath, Rsa::KEY_TYPE_PRIVATE);

// 「商户API证书」，文件路径假定为 `/path/to/merchant/apiclient_cert.pem`
$merchantCertificateFilePath = '/path/to/merchant/apiclient_cert.pem';

// 「商户API证书」的「证书序列号」
$merchantCertificateSerial = '3775B6A45ACD588826D15E583A95F5DD********';

// 从本地文件中加载「微信支付平台证书」，可由内置的CLI工具下载到，用来验证微信支付应答的签名
$platformCertificateFilePath  = 'file:///path/to/wechatpay/certificate.pem';
$onePlatformPublicKeyInstance = Rsa::from($platformCertificateFilePath, Rsa::KEY_TYPE_PUBLIC);

// 「微信支付平台证书」的「证书序列号」
// 可以从「微信支付平台证书」文件解析，也可以在 商户平台 -> 账户中心 -> API安全 查询到
$platformCertificateSerial = '7132D72A03E93CDDF8C03BBD1F37EEDF********';

// 从本地文件中加载「微信支付公钥」，用来验证微信支付应答的签名
$platformPublicKeyFilePath    = 'file:///path/to/wechatpay/publickey.pem';
$twoPlatformPublicKeyInstance = Rsa::from($platformPublicKeyFilePath, Rsa::KEY_TYPE_PUBLIC);

// 「微信支付公钥」的「微信支付公钥ID」
// 需要在 商户平台 -> 账户中心 -> API安全 查询
$platformPublicKeyId = 'PUB_KEY_ID_01142321349124100000000000********';

// 构造一个 APIv2 & APIv3 客户端实例
$instance = Builder::factory([
  'mchid'      => $merchantId,
  'serial'     => $merchantCertificateSerial,
  'privateKey' => $merchantPrivateKeyInstance,
  'certs'      => [
    $platformCertificateSerial => $onePlatformPublicKeyInstance,
    $platformPublicKeyId       => $twoPlatformPublicKeyInstance,
  ],
  // 使用APIv2(密钥32字节)时，需要至少设置 `secret`字段
  'secret'     => $apiv2Key,
  // 接口不要求「商户API证书」的场景，例如仅收款merchant对象参数可选
  'merchant'   => [
    'cert' => $merchantCertificateFilePath,
    'key'  => $merchantPrivateKeyFilePath
  ]
]);
```

### Native下单 {#v3.pay.transactions.native.post}

```php
$instance->v3->pay->transactions->native->post([
  'json' => []
]);
```

详细见[这里](/openapi/v3/pay/transactions/native)

### 查询订单 {#v3.pay.transactions.id.$transaction_id$.get}

```php
$instance->v3->pay->transactions
// _placeholder_ 语法糖会转换成 '{placeholder}' 格式
->id->_transaction_id_->get([
  'transaction_id' => $transaction_id
]);
```

详细见[这里](/openapi/v3/pay/transactions/id/{transaction_id})

### 关闭订单 {#v3/pay.transactions.outTradeNo.$out_trade_no$.close.post}

```php
$instance->v3->pay->transactions
// outTradeNo 语法糖会转换成 'out-trade-no' 格式
->outTradeNo->_out_trade_no_->close->post([
  'out_trade_no' => $out_trade_no,
  'json' => []
]);
```

详细见[这里](/openapi/v3/pay/transactions/out-trade-no/{out_trade_no}/close)

### 申请退款 {#v3.refund.domestic.refunds.post}

```js
$instance->v3->refund->domestic->refunds->post([
  'json' => []
]);
```

详细见[这里](/openapi/v3/refund/domestic/refunds)

### 查询单笔退款 {#v3.refund.domestic.refunds.$out_refund_no$.get}

```php
$instance->v3->refund->domestic->refunds
// _placeholder_ 语法糖会转换成 '{placeholder}' 格式
->_out_refund_no_->get(['out_refund_no' => $out_refund_no]);
```

详细见[这里](/openapi/v3/refund/domestic/refunds/{out_refund_no})
