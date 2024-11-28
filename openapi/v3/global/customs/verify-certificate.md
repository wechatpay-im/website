---
title: 身份信息校验
description: 该接口用于商户上传用户身份信息，微信支付会重新校验返回订购人和支付人身份信息校验结果，用于商户纠正报关订单里的信息。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 机构APPID
| mchid {data-required data-indent=1} | string | 商户号
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| transaction_id {data-required data-indent=1} | string | 微信订单号
| sub_order_no {data-indent=1} | string | 商户子订单号
| customs {data-required data-indent=1} | string | 海关
| merchant_customs_no {data-required data-indent=1} | string | 商户海关备案号
| certificate_type {data-required data-indent=1} | string | 证件类型
| certificate_id {data-required data-indent=1} | string | 证件号
| certificate_name {data-required data-indent=1} | string | 证件姓名
| headers | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 平台公钥ID/平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->customs->verifyCertificate->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid'               => 'wxd678efh567hg6787',
    'mchid'               => '1230000109',
    'out_trade_no'        => '20150806125346',
    'transaction_id'      => '1000320306201511078440737890',
    'sub_order_no'        => '20150806125346',
    'customs'             => 'SHANGHAI_ZS',
    'merchant_customs_no' => '123456',
    'certificate_type'    => 'IDCARD',
    'certificate_id'      => 'Rsa::encrypt(0101211X, WechatpayPlatformCertificateInstance, OPENSSL_PKCS1_PADDING)',
    'certificate_name'    => 'Rsa::encrypt(张三, WechatpayPlatformCertificateInstance, OPENSSL_PKCS1_PADDING)',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/customs/verify-certificate')->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid'               => 'wxd678efh567hg6787',
    'mchid'               => '1230000109',
    'out_trade_no'        => '20150806125346',
    'transaction_id'      => '1000320306201511078440737890',
    'sub_order_no'        => '20150806125346',
    'customs'             => 'SHANGHAI_ZS',
    'merchant_customs_no' => '123456',
    'certificate_type'    => 'IDCARD',
    'certificate_id'      => 'Rsa::encrypt(0101211X, WechatpayPlatformCertificateInstance, OPENSSL_PKCS1_PADDING)',
    'certificate_name'    => 'Rsa::encrypt(张三, WechatpayPlatformCertificateInstance, OPENSSL_PKCS1_PADDING)',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/customs/verify-certificate']->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid'               => 'wxd678efh567hg6787',
    'mchid'               => '1230000109',
    'out_trade_no'        => '20150806125346',
    'transaction_id'      => '1000320306201511078440737890',
    'sub_order_no'        => '20150806125346',
    'customs'             => 'SHANGHAI_ZS',
    'merchant_customs_no' => '123456',
    'certificate_type'    => 'IDCARD',
    'certificate_id'      => 'Rsa::encrypt(0101211X, WechatpayPlatformCertificateInstance, OPENSSL_PKCS1_PADDING)',
    'certificate_name'    => 'Rsa::encrypt(张三, WechatpayPlatformCertificateInstance, OPENSSL_PKCS1_PADDING)',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->customs->verifyCertificate->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid'               => 'wxd678efh567hg6787',
    'mchid'               => '1230000109',
    'out_trade_no'        => '20150806125346',
    'transaction_id'      => '1000320306201511078440737890',
    'sub_order_no'        => '20150806125346',
    'customs'             => 'SHANGHAI_ZS',
    'merchant_customs_no' => '123456',
    'certificate_type'    => 'IDCARD',
    'certificate_id'      => 'Rsa::encrypt(0101211X, WechatpayPlatformCertificateInstance, OPENSSL_PKCS1_PADDING)',
    'certificate_name'    => 'Rsa::encrypt(张三, WechatpayPlatformCertificateInstance, OPENSSL_PKCS1_PADDING)',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/customs/verify-certificate')->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid'               => 'wxd678efh567hg6787',
    'mchid'               => '1230000109',
    'out_trade_no'        => '20150806125346',
    'transaction_id'      => '1000320306201511078440737890',
    'sub_order_no'        => '20150806125346',
    'customs'             => 'SHANGHAI_ZS',
    'merchant_customs_no' => '123456',
    'certificate_type'    => 'IDCARD',
    'certificate_id'      => 'Rsa::encrypt(0101211X, WechatpayPlatformCertificateInstance, OPENSSL_PKCS1_PADDING)',
    'certificate_name'    => 'Rsa::encrypt(张三, WechatpayPlatformCertificateInstance, OPENSSL_PKCS1_PADDING)',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/customs/verify-certificate']->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid'               => 'wxd678efh567hg6787',
    'mchid'               => '1230000109',
    'out_trade_no'        => '20150806125346',
    'transaction_id'      => '1000320306201511078440737890',
    'sub_order_no'        => '20150806125346',
    'customs'             => 'SHANGHAI_ZS',
    'merchant_customs_no' => '123456',
    'certificate_type'    => 'IDCARD',
    'certificate_id'      => 'Rsa::encrypt(0101211X, WechatpayPlatformCertificateInstance, OPENSSL_PKCS1_PADDING)',
    'certificate_name'    => 'Rsa::encrypt(张三, WechatpayPlatformCertificateInstance, OPENSSL_PKCS1_PADDING)',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| appid {data-required} | string | 机构APPID
| mchid {data-required} | string | 商户号
| out_trade_no {data-required} | string | 商户订单号
| transaction_id {data-required} | string | 微信订单号
| certificate_check_result {data-required} | string | 身份核验结果

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter4_3_2.shtml)
