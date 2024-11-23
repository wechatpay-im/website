---
title: 预签约接口
description: 一键绑卡不是支持所有银行卡，上线前请先测试是否支持该银行卡。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| business_name {data-required data-indent=1} | string | 业务类型
| facepay_user {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 刷脸用户信息
| out_user_id {data-required data-indent=2} | string | 商户用户ID
| identification_name {data-indent=2} | string | 刷脸用户名
| organization_id {data-required data-indent=2} | string | 机构ID
| identification {data-indent=2} | object {data-tooltip="对应PHP的array"} | 证件信息
| identification_type {data-required data-indent=3} | string | 证件类型<br/>`IDCARD` 枚举值
| identification_number {data-required data-indent=3} | string | 证件ID
| phone {data-indent=2} | string | 手机号码
| limit_bank_card {data-indent=1} | object {data-tooltip="对应PHP的array"} | 签约指定银行卡
| bank_card_number {data-indent=2} | string | 银行卡号
| identification_name {data-indent=2} | string | 开卡人姓名
| identification {data-indent=2} | object {data-tooltip="对应PHP的array"} | 开卡人证件
| identification_type {data-required data-indent=3} | string | 证件类型<br/>`IDCARD` 枚举值
| identification_number {data-required data-indent=3} | string | 证件ID
| valid_thru {data-indent=2} | string | 银行卡有效期
| bank_type {data-indent=2} | string | 银行类型
| phone {data-indent=2} | string | 开卡预留手机号
| contract_mode {data-indent=1} | string | 签约模式<br/>`LIMIT_BANK_CARD` \| `PRIORITY_BANK_CARD` \| `LIMIT_NONE` 枚举值之一
| headers | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 平台公钥ID/平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->offlineface->contracts->presign->postAsync([
  'json' => [
    'business_name' => '',
    'facepay_user' => [
      'out_user_id' => '',
      'identification_name' => '',
      'organization_id' => '',
      'identification' => [
        'identification_type' => 'IDCARD',
        'identification_number' => '',
      ],
      'phone' => '',
    ],
    'limit_bank_card' => [
      'bank_card_number' => '',
      'identification_name' => '',
      'identification' => [
        'identification_type' => 'IDCARD',
        'identification_number' => '',
      ],
      'valid_thru' => '',
      'bank_type' => '',
      'phone' => '',
    ],
    'contract_mode' => 'LIMIT_BANK_CARD',
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
$instance->chain('v3/offlineface/contracts/presign')->postAsync([
  'json' => [
    'business_name' => '',
    'facepay_user' => [
      'out_user_id' => '',
      'identification_name' => '',
      'organization_id' => '',
      'identification' => [
        'identification_type' => 'IDCARD',
        'identification_number' => '',
      ],
      'phone' => '',
    ],
    'limit_bank_card' => [
      'bank_card_number' => '',
      'identification_name' => '',
      'identification' => [
        'identification_type' => 'IDCARD',
        'identification_number' => '',
      ],
      'valid_thru' => '',
      'bank_type' => '',
      'phone' => '',
    ],
    'contract_mode' => 'LIMIT_BANK_CARD',
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
$instance['v3/offlineface/contracts/presign']->postAsync([
  'json' => [
    'business_name' => '',
    'facepay_user' => [
      'out_user_id' => '',
      'identification_name' => '',
      'organization_id' => '',
      'identification' => [
        'identification_type' => 'IDCARD',
        'identification_number' => '',
      ],
      'phone' => '',
    ],
    'limit_bank_card' => [
      'bank_card_number' => '',
      'identification_name' => '',
      'identification' => [
        'identification_type' => 'IDCARD',
        'identification_number' => '',
      ],
      'valid_thru' => '',
      'bank_type' => '',
      'phone' => '',
    ],
    'contract_mode' => 'LIMIT_BANK_CARD',
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
$response = $instance->v3->offlineface->contracts->presign->post([
  'json' => [
    'business_name' => '',
    'facepay_user' => [
      'out_user_id' => '',
      'identification_name' => '',
      'organization_id' => '',
      'identification' => [
        'identification_type' => 'IDCARD',
        'identification_number' => '',
      ],
      'phone' => '',
    ],
    'limit_bank_card' => [
      'bank_card_number' => '',
      'identification_name' => '',
      'identification' => [
        'identification_type' => 'IDCARD',
        'identification_number' => '',
      ],
      'valid_thru' => '',
      'bank_type' => '',
      'phone' => '',
    ],
    'contract_mode' => 'LIMIT_BANK_CARD',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/offlineface/contracts/presign')->post([
  'json' => [
    'business_name' => '',
    'facepay_user' => [
      'out_user_id' => '',
      'identification_name' => '',
      'organization_id' => '',
      'identification' => [
        'identification_type' => 'IDCARD',
        'identification_number' => '',
      ],
      'phone' => '',
    ],
    'limit_bank_card' => [
      'bank_card_number' => '',
      'identification_name' => '',
      'identification' => [
        'identification_type' => 'IDCARD',
        'identification_number' => '',
      ],
      'valid_thru' => '',
      'bank_type' => '',
      'phone' => '',
    ],
    'contract_mode' => 'LIMIT_BANK_CARD',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/offlineface/contracts/presign']->post([
  'json' => [
    'business_name' => '',
    'facepay_user' => [
      'out_user_id' => '',
      'identification_name' => '',
      'organization_id' => '',
      'identification' => [
        'identification_type' => 'IDCARD',
        'identification_number' => '',
      ],
      'phone' => '',
    ],
    'limit_bank_card' => [
      'bank_card_number' => '',
      'identification_name' => '',
      'identification' => [
        'identification_type' => 'IDCARD',
        'identification_number' => '',
      ],
      'valid_thru' => '',
      'bank_type' => '',
      'phone' => '',
    ],
    'contract_mode' => 'LIMIT_BANK_CARD',
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
| presign_token {data-required}| string | 会话ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/wxfacepay/develop/access-specifications.html)
