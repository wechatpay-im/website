---
title: 预签约
description: 商户调用该接口可获取预签约码（presign_token），预签约码对应用户一次的签约信息，之后用户可以从商户小程序跳转到微信签约小程序时使用该预签约码进行签约。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| appid {data-indent=1} | string | 商户appid
| openid {data-indent=1} | string | 商户appid下的用户标识
| plan_id {data-indent=1} | string | 签约模板号
| user_id {data-indent=1} | string | 用户账号
| school_id {data-indent=1} | string | 学校编号
| out_contract_code {data-indent=1} | string | 外部签约号
| contract_mode {data-indent=1} | string | 签约模式
| downgrade_default_contract {data-indent=1} | boolean | 允许降级为普通签约模式
| identity {data-indent=1} | object | 实名信息
| real_name {data-indent=2} | string | 姓名
| credential_type {data-indent=2} | string | 证件类型
| id_card_number {data-indent=2} | string | 身份证号
| bank_card {data-indent=1} | object | 签约银行卡
| bank_card_no {data-indent=2} | string | 签约银行卡号
| valid_thru {data-indent=2} | string | 银行卡有效期
| phone {data-indent=2} | string | 银行卡开卡预留手机号
| bank_type {data-indent=2} | string | 银行类型
| headers | object | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 微信支付平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->eduschoolpay->contracts->presign->postAsync([
  'json' => [
    'appid' => 'wx8888888888888888',
    'openid' => 'oUpF8uMuAJOM2pxb1Q',
    'plan_id' => '101164396123311331',
    'user_id' => '20200330tony',
    'school_id' => '18260256813396',
    'out_contract_code' => '20190806125346',
    'contract_mode' => 'LIMIT_BANK_CARD',
    'downgrade_default_contract' => true,
    'identity' => [
      'real_name' => '6TqLAZvNZ4AXLNHLMbjA1yKq2k5krHM09m3tCuR',
      'credential_type' => 'IDENTITY_CARD',
      'id_card_number' => '6TqLAZvNZ4AXLNHLMbjA1yKq2k5krHM09m3tCuR',
    ],
    'bank_card' => [
      'bank_card_no' => '6TqLAZvNZ4AXLNHLMbjA1yKq2k5krHM09m3tCuR',
      'valid_thru' => '08/21',
      'phone' => 'j6PlFRRJ4nvGSbtDZzXbXScACvDSnIny67zk3BgT5uIbK4VfGmcjPBEk2mt5ASZ6UUHB4Gy0IZpbuanF9',
      'bank_type' => 'CMC',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/eduschoolpay/contracts/presign')->postAsync([
  'json' => [
    'appid' => 'wx8888888888888888',
    'openid' => 'oUpF8uMuAJOM2pxb1Q',
    'plan_id' => '101164396123311331',
    'user_id' => '20200330tony',
    'school_id' => '18260256813396',
    'out_contract_code' => '20190806125346',
    'contract_mode' => 'LIMIT_BANK_CARD',
    'downgrade_default_contract' => true,
    'identity' => [
      'real_name' => '6TqLAZvNZ4AXLNHLMbjA1yKq2k5krHM09m3tCuR',
      'credential_type' => 'IDENTITY_CARD',
      'id_card_number' => '6TqLAZvNZ4AXLNHLMbjA1yKq2k5krHM09m3tCuR',
    ],
    'bank_card' => [
      'bank_card_no' => '6TqLAZvNZ4AXLNHLMbjA1yKq2k5krHM09m3tCuR',
      'valid_thru' => '08/21',
      'phone' => 'j6PlFRRJ4nvGSbtDZzXbXScACvDSnIny67zk3BgT5uIbK4VfGmcjPBEk2mt5ASZ6UUHB4Gy0IZpbuanF9',
      'bank_type' => 'CMC',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/eduschoolpay/contracts/presign']->postAsync([
  'json' => [
    'appid' => 'wx8888888888888888',
    'openid' => 'oUpF8uMuAJOM2pxb1Q',
    'plan_id' => '101164396123311331',
    'user_id' => '20200330tony',
    'school_id' => '18260256813396',
    'out_contract_code' => '20190806125346',
    'contract_mode' => 'LIMIT_BANK_CARD',
    'downgrade_default_contract' => true,
    'identity' => [
      'real_name' => '6TqLAZvNZ4AXLNHLMbjA1yKq2k5krHM09m3tCuR',
      'credential_type' => 'IDENTITY_CARD',
      'id_card_number' => '6TqLAZvNZ4AXLNHLMbjA1yKq2k5krHM09m3tCuR',
    ],
    'bank_card' => [
      'bank_card_no' => '6TqLAZvNZ4AXLNHLMbjA1yKq2k5krHM09m3tCuR',
      'valid_thru' => '08/21',
      'phone' => 'j6PlFRRJ4nvGSbtDZzXbXScACvDSnIny67zk3BgT5uIbK4VfGmcjPBEk2mt5ASZ6UUHB4Gy0IZpbuanF9',
      'bank_type' => 'CMC',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->eduschoolpay->contracts->presign->post([
  'json' => [
    'appid' => 'wx8888888888888888',
    'openid' => 'oUpF8uMuAJOM2pxb1Q',
    'plan_id' => '101164396123311331',
    'user_id' => '20200330tony',
    'school_id' => '18260256813396',
    'out_contract_code' => '20190806125346',
    'contract_mode' => 'LIMIT_BANK_CARD',
    'downgrade_default_contract' => true,
    'identity' => [
      'real_name' => '6TqLAZvNZ4AXLNHLMbjA1yKq2k5krHM09m3tCuR',
      'credential_type' => 'IDENTITY_CARD',
      'id_card_number' => '6TqLAZvNZ4AXLNHLMbjA1yKq2k5krHM09m3tCuR',
    ],
    'bank_card' => [
      'bank_card_no' => '6TqLAZvNZ4AXLNHLMbjA1yKq2k5krHM09m3tCuR',
      'valid_thru' => '08/21',
      'phone' => 'j6PlFRRJ4nvGSbtDZzXbXScACvDSnIny67zk3BgT5uIbK4VfGmcjPBEk2mt5ASZ6UUHB4Gy0IZpbuanF9',
      'bank_type' => 'CMC',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/eduschoolpay/contracts/presign')->post([
  'json' => [
    'appid' => 'wx8888888888888888',
    'openid' => 'oUpF8uMuAJOM2pxb1Q',
    'plan_id' => '101164396123311331',
    'user_id' => '20200330tony',
    'school_id' => '18260256813396',
    'out_contract_code' => '20190806125346',
    'contract_mode' => 'LIMIT_BANK_CARD',
    'downgrade_default_contract' => true,
    'identity' => [
      'real_name' => '6TqLAZvNZ4AXLNHLMbjA1yKq2k5krHM09m3tCuR',
      'credential_type' => 'IDENTITY_CARD',
      'id_card_number' => '6TqLAZvNZ4AXLNHLMbjA1yKq2k5krHM09m3tCuR',
    ],
    'bank_card' => [
      'bank_card_no' => '6TqLAZvNZ4AXLNHLMbjA1yKq2k5krHM09m3tCuR',
      'valid_thru' => '08/21',
      'phone' => 'j6PlFRRJ4nvGSbtDZzXbXScACvDSnIny67zk3BgT5uIbK4VfGmcjPBEk2mt5ASZ6UUHB4Gy0IZpbuanF9',
      'bank_type' => 'CMC',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/eduschoolpay/contracts/presign']->post([
  'json' => [
    'appid' => 'wx8888888888888888',
    'openid' => 'oUpF8uMuAJOM2pxb1Q',
    'plan_id' => '101164396123311331',
    'user_id' => '20200330tony',
    'school_id' => '18260256813396',
    'out_contract_code' => '20190806125346',
    'contract_mode' => 'LIMIT_BANK_CARD',
    'downgrade_default_contract' => true,
    'identity' => [
      'real_name' => '6TqLAZvNZ4AXLNHLMbjA1yKq2k5krHM09m3tCuR',
      'credential_type' => 'IDENTITY_CARD',
      'id_card_number' => '6TqLAZvNZ4AXLNHLMbjA1yKq2k5krHM09m3tCuR',
    ],
    'bank_card' => [
      'bank_card_no' => '6TqLAZvNZ4AXLNHLMbjA1yKq2k5krHM09m3tCuR',
      'valid_thru' => '08/21',
      'phone' => 'j6PlFRRJ4nvGSbtDZzXbXScACvDSnIny67zk3BgT5uIbK4VfGmcjPBEk2mt5ASZ6UUHB4Gy0IZpbuanF9',
      'bank_type' => 'CMC',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| presign_token | string | 预签约码

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/edu/eduschoolpay/chapter3_1.shtml)
