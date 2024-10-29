---
title: 建立合作关系
description: 该接口主要为商户提供营销资源的授权能力，可授权给其他商户或小程序，方便商户间的互利合作。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| partner {data-indent=1} | object | 
| type {data-indent=2} | string | 
| appid {data-indent=2} | string | 
| merchant_id {data-indent=2} | string | 
| authorized_data {data-indent=1} | object | 
| business_type {data-indent=2} | string | 
| stock_id {data-indent=2} | string | 
| headers | object | 声明请求的头参数
| Idempotency-Key {data-indent=1} | string | 业务请求幂等值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->partnerships->build->postAsync([
  'json' => [
    'partner' => [
      'type' => '',
      'appid' => '',
      'merchant_id' => '',
    ],
    'authorized_data' => [
      'business_type' => '',
      'stock_id' => '',
    ],
  ],
  'headers' => [
    'Idempotency-Key' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/partnerships/build')->postAsync([
  'json' => [
    'partner' => [
      'type' => '',
      'appid' => '',
      'merchant_id' => '',
    ],
    'authorized_data' => [
      'business_type' => '',
      'stock_id' => '',
    ],
  ],
  'headers' => [
    'Idempotency-Key' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/partnerships/build']->postAsync([
  'json' => [
    'partner' => [
      'type' => '',
      'appid' => '',
      'merchant_id' => '',
    ],
    'authorized_data' => [
      'business_type' => '',
      'stock_id' => '',
    ],
  ],
  'headers' => [
    'Idempotency-Key' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->partnerships->build->post([
  'json' => [
    'partner' => [
      'type' => '',
      'appid' => '',
      'merchant_id' => '',
    ],
    'authorized_data' => [
      'business_type' => '',
      'stock_id' => '',
    ],
  ],
  'headers' => [
    'Idempotency-Key' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/partnerships/build')->post([
  'json' => [
    'partner' => [
      'type' => '',
      'appid' => '',
      'merchant_id' => '',
    ],
    'authorized_data' => [
      'business_type' => '',
      'stock_id' => '',
    ],
  ],
  'headers' => [
    'Idempotency-Key' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/partnerships/build']->post([
  'json' => [
    'partner' => [
      'type' => '',
      'appid' => '',
      'merchant_id' => '',
    ],
    'authorized_data' => [
      'business_type' => '',
      'stock_id' => '',
    ],
  ],
  'headers' => [
    'Idempotency-Key' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| partner | object | 
| type {data-indent=1} | string | 
| appid {data-indent=1} | string | 
| merchant_id {data-indent=1} | string | 
| authorized_data | object | 
| business_type {data-indent=1} | string | 
| stock_id {data-indent=1} | string | 
| build_time | string | 
| create_time | string | 
| update_time | string | 

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/partnerships/chapter3_1.shtml)
