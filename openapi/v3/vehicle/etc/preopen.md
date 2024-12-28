---
title: 预开通用户ETC指定卡扣费
description: 该接口用于在开通ETC自动扣费前上传一些必要的信息。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_appid {data-required data-indent=1} | string | 服务商appid
| sub_appid {data-indent=1} | string | 子商户appid
| sub_mchid {data-indent=1} | string | 特约商户号
| openid {data-required data-indent=1} | string | 用户标识
| plan_id {data-required data-indent=1} | string | ETC授权扣费模板ID
| etc_device_id {data-indent=1} | string | ETC设备号
| plate_number {data-required data-indent=1} | string | 车牌号
| identify {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 实名信息
| encrypted_real_name {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 姓名
| encrypted_credential_id {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 证件号码
| credential_type {data-required data-indent=2} | string | 证件类型
| bank_card_no {data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 用户开通ETC时绑定的银行卡
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->vehicle->etc->preopen->postAsync([
  'json' => [
    'sp_appid'      => '10000098',
    'sub_appid'     => 'wxcbda96de0b165489',
    'sub_mchid'     => '1510770601',
    'openid'        => 'ot35_4gNgXsUuh2sQY0lT9N08AU0',
    'plan_id'       => '97619',
    'etc_device_id' => 'xxxxxxx',
    'plate_number'  => '藏ZZZZZZ',
    'identify'      => [
      'encrypted_real_name'     => 'LOX6jBeRlK/TErW6DqEM8JFHX4iL3Rlj2vqaEqktvw1KVjgmQ==',
      'encrypted_credential_id' => 't85SAX3GxVYqGQm2Q8cfeFd1dWy40j4s7XpIds8Glw83HG3vN9Q==',
      'credential_type'         => 'ID_CARD',
    ],
    'bank_card_no'  => 'K/TErW6DqEM8JFHX4iL3Rlj2vqaEqktvw1KVjgmQ==',
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
$instance->chain('v3/vehicle/etc/preopen')->postAsync([
  'json' => [
    'sp_appid'      => '10000098',
    'sub_appid'     => 'wxcbda96de0b165489',
    'sub_mchid'     => '1510770601',
    'openid'        => 'ot35_4gNgXsUuh2sQY0lT9N08AU0',
    'plan_id'       => '97619',
    'etc_device_id' => 'xxxxxxx',
    'plate_number'  => '藏ZZZZZZ',
    'identify'      => [
      'encrypted_real_name'     => 'LOX6jBeRlK/TErW6DqEM8JFHX4iL3Rlj2vqaEqktvw1KVjgmQ==',
      'encrypted_credential_id' => 't85SAX3GxVYqGQm2Q8cfeFd1dWy40j4s7XpIds8Glw83HG3vN9Q==',
      'credential_type'         => 'ID_CARD',
    ],
    'bank_card_no'  => 'K/TErW6DqEM8JFHX4iL3Rlj2vqaEqktvw1KVjgmQ==',
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
$instance['v3/vehicle/etc/preopen']->postAsync([
  'json' => [
    'sp_appid'      => '10000098',
    'sub_appid'     => 'wxcbda96de0b165489',
    'sub_mchid'     => '1510770601',
    'openid'        => 'ot35_4gNgXsUuh2sQY0lT9N08AU0',
    'plan_id'       => '97619',
    'etc_device_id' => 'xxxxxxx',
    'plate_number'  => '藏ZZZZZZ',
    'identify'      => [
      'encrypted_real_name'     => 'LOX6jBeRlK/TErW6DqEM8JFHX4iL3Rlj2vqaEqktvw1KVjgmQ==',
      'encrypted_credential_id' => 't85SAX3GxVYqGQm2Q8cfeFd1dWy40j4s7XpIds8Glw83HG3vN9Q==',
      'credential_type'         => 'ID_CARD',
    ],
    'bank_card_no'  => 'K/TErW6DqEM8JFHX4iL3Rlj2vqaEqktvw1KVjgmQ==',
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
$response = $instance->v3->vehicle->etc->preopen->post([
  'json' => [
    'sp_appid'      => '10000098',
    'sub_appid'     => 'wxcbda96de0b165489',
    'sub_mchid'     => '1510770601',
    'openid'        => 'ot35_4gNgXsUuh2sQY0lT9N08AU0',
    'plan_id'       => '97619',
    'etc_device_id' => 'xxxxxxx',
    'plate_number'  => '藏ZZZZZZ',
    'identify'      => [
      'encrypted_real_name'     => 'LOX6jBeRlK/TErW6DqEM8JFHX4iL3Rlj2vqaEqktvw1KVjgmQ==',
      'encrypted_credential_id' => 't85SAX3GxVYqGQm2Q8cfeFd1dWy40j4s7XpIds8Glw83HG3vN9Q==',
      'credential_type'         => 'ID_CARD',
    ],
    'bank_card_no'  => 'K/TErW6DqEM8JFHX4iL3Rlj2vqaEqktvw1KVjgmQ==',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/vehicle/etc/preopen')->post([
  'json' => [
    'sp_appid'      => '10000098',
    'sub_appid'     => 'wxcbda96de0b165489',
    'sub_mchid'     => '1510770601',
    'openid'        => 'ot35_4gNgXsUuh2sQY0lT9N08AU0',
    'plan_id'       => '97619',
    'etc_device_id' => 'xxxxxxx',
    'plate_number'  => '藏ZZZZZZ',
    'identify'      => [
      'encrypted_real_name'     => 'LOX6jBeRlK/TErW6DqEM8JFHX4iL3Rlj2vqaEqktvw1KVjgmQ==',
      'encrypted_credential_id' => 't85SAX3GxVYqGQm2Q8cfeFd1dWy40j4s7XpIds8Glw83HG3vN9Q==',
      'credential_type'         => 'ID_CARD',
    ],
    'bank_card_no'  => 'K/TErW6DqEM8JFHX4iL3Rlj2vqaEqktvw1KVjgmQ==',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/vehicle/etc/preopen']->post([
  'json' => [
    'sp_appid'      => '10000098',
    'sub_appid'     => 'wxcbda96de0b165489',
    'sub_mchid'     => '1510770601',
    'openid'        => 'ot35_4gNgXsUuh2sQY0lT9N08AU0',
    'plan_id'       => '97619',
    'etc_device_id' => 'xxxxxxx',
    'plate_number'  => '藏ZZZZZZ',
    'identify'      => [
      'encrypted_real_name'     => 'LOX6jBeRlK/TErW6DqEM8JFHX4iL3Rlj2vqaEqktvw1KVjgmQ==',
      'encrypted_credential_id' => 't85SAX3GxVYqGQm2Q8cfeFd1dWy40j4s7XpIds8Glw83HG3vN9Q==',
      'credential_type'         => 'ID_CARD',
    ],
    'bank_card_no'  => 'K/TErW6DqEM8JFHX4iL3Rlj2vqaEqktvw1KVjgmQ==',
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
| preopen_id {data-required} | string | 预开通ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_4_1.shtml)
