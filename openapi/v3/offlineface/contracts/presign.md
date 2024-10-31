---
title: 预签约接口
description: 一键绑卡不是支持所有银行卡，上线前请先测试是否支持该银行卡。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| business_name {data-indent=1} | string | 
| facepay_user {data-indent=1} | object | 
| out_user_id {data-indent=2} | string | 
| identification_name {data-indent=2} | string | 
| organization_id {data-indent=2} | string | 
| identification {data-indent=2} | object | 
| identification_type {data-indent=3} | string | `IDCARD` 枚举值
| identification_number {data-indent=3} | string | 
| phone {data-indent=2} | string | 
| limit_bank_card {data-indent=1} | object | 
| bank_card_number {data-indent=2} | string | 
| identification_name {data-indent=2} | string | 
| identification {data-indent=2} | object | 
| identification_type {data-indent=3} | string | `IDCARD` 枚举值
| identification_number {data-indent=3} | string | 
| valid_thru {data-indent=2} | string | 
| bank_type {data-indent=2} | string | 
| phone {data-indent=2} | string | 
| contract_mode {data-indent=1} | string | `LIMIT_BANK_CARD` \| `PRIORITY_BANK_CARD` \| `LIMIT_NONE` 枚举值之一

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
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| presign_token | string | 

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/wxfacepay/develop/access-specifications.html)
