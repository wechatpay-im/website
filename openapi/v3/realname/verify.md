---
title: 实名信息校验
description: 电商订单实名校验。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| credential_type {data-required data-indent=1} | number | 下单用户账户的证件类型<br/>`1` \| `2` \| `5` \| `9` \| `12` \| `17` \| `19` 枚举值之一
| encrypted_credential_id {data-required data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 加密后的下单用户证件号
| encrypted_name {data-required data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 加密后的下单用户姓名
| wxp_trade_no {data-required data-indent=1} | string | 微信支付交易单号
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->realname->verify->getAsync([
  'query' => [
    'credential_type'         => 1,
    'encrypted_credential_id' => 'InhziTSUwVqxfKp9M5nGCSjF395VL',
    'encrypted_name'          => 'InhziTSUwVqxfKp9M5nGCSjF395VL',
    'wxp_trade_no'            => '442100010320250122523549415021',
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
$instance->chain('v3/realname/verify')->getAsync([
  'query' => [
    'credential_type'         => 1,
    'encrypted_credential_id' => 'InhziTSUwVqxfKp9M5nGCSjF395VL',
    'encrypted_name'          => 'InhziTSUwVqxfKp9M5nGCSjF395VL',
    'wxp_trade_no'            => '442100010320250122523549415021',
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
$instance['v3/realname/verify']->getAsync([
  'query' => [
    'credential_type'         => 1,
    'encrypted_credential_id' => 'InhziTSUwVqxfKp9M5nGCSjF395VL',
    'encrypted_name'          => 'InhziTSUwVqxfKp9M5nGCSjF395VL',
    'wxp_trade_no'            => '442100010320250122523549415021',
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
$response = $instance->v3->realname->verify->get([
  'query' => [
    'credential_type'         => 1,
    'encrypted_credential_id' => 'InhziTSUwVqxfKp9M5nGCSjF395VL',
    'encrypted_name'          => 'InhziTSUwVqxfKp9M5nGCSjF395VL',
    'wxp_trade_no'            => '442100010320250122523549415021',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/realname/verify')->get([
  'query' => [
    'credential_type'         => 1,
    'encrypted_credential_id' => 'InhziTSUwVqxfKp9M5nGCSjF395VL',
    'encrypted_name'          => 'InhziTSUwVqxfKp9M5nGCSjF395VL',
    'wxp_trade_no'            => '442100010320250122523549415021',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/realname/verify']->get([
  'query' => [
    'credential_type'         => 1,
    'encrypted_credential_id' => 'InhziTSUwVqxfKp9M5nGCSjF395VL',
    'encrypted_name'          => 'InhziTSUwVqxfKp9M5nGCSjF395VL',
    'wxp_trade_no'            => '442100010320250122523549415021',
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
| verify_result {data-required} | number | 实名比对结果<br/>`0` \| `1` 枚举值之一
| err_message | string | 错误信息

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013735179)
