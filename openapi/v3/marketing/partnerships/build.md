---
title: 建立合作关系
description: 该接口主要为商户提供营销资源的授权能力，可授权给其他商户或小程序，方便商户间的互利合作。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| partner {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 合作方信息
| type {data-required data-indent=2} | string | 合作方类别<br/>`APPID` \| `MERCHANT` 枚举值之一
| appid {data-indent=2} | string | 合作方APPID
| merchant_id {data-indent=2} | string | 合作方商户ID
| authorized_data {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 被授权数据
| business_type {data-required data-indent=2} | string | 授权业务类别<br/>`FAVOR_STOCK` \| `BUSIFAVOR_STOCK` 枚举值之一
| stock_id {data-indent=2} | string | 授权批次ID
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Idempotency-Key {data-required data-indent=1} | string | 业务请求幂等值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->partnerships->build->postAsync([
  'json' => [
    'partner'         => [
      'type'        => 'APPID',
      'appid'       => '',
      'merchant_id' => '',
    ],
    'authorized_data' => [
      'business_type' => 'FAVOR_STOCK',
      'stock_id'      => '',
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
    'partner'         => [
      'type'        => 'APPID',
      'appid'       => '',
      'merchant_id' => '',
    ],
    'authorized_data' => [
      'business_type' => 'FAVOR_STOCK',
      'stock_id'      => '',
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
    'partner'         => [
      'type'        => 'APPID',
      'appid'       => '',
      'merchant_id' => '',
    ],
    'authorized_data' => [
      'business_type' => 'FAVOR_STOCK',
      'stock_id'      => '',
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
    'partner'         => [
      'type'        => 'APPID',
      'appid'       => '',
      'merchant_id' => '',
    ],
    'authorized_data' => [
      'business_type' => 'FAVOR_STOCK',
      'stock_id'      => '',
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
    'partner'         => [
      'type'        => 'APPID',
      'appid'       => '',
      'merchant_id' => '',
    ],
    'authorized_data' => [
      'business_type' => 'FAVOR_STOCK',
      'stock_id'      => '',
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
    'partner'         => [
      'type'        => 'APPID',
      'appid'       => '',
      'merchant_id' => '',
    ],
    'authorized_data' => [
      'business_type' => 'FAVOR_STOCK',
      'stock_id'      => '',
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
| partner {data-required} | object {data-tooltip="对应PHP的array"} | 合作方信息
| type {data-required data-indent=1} | string | 合作方类别<br/>`APPID` \| `MERCHANT` 枚举值之一
| appid {data-indent=1} | string | 合作方APPID
| merchant_id {data-indent=1} | string | 合作方商户ID
| authorized_data {data-required} | object {data-tooltip="对应PHP的array"} | 被授权数据
| business_type {data-required data-indent=1} | string | 授权业务类别<br/>`FAVOR_STOCK` \| `BUSIFAVOR_STOCK` 枚举值之一
| stock_id {data-indent=1} | string | 授权批次ID
| state {data-required} | string | 合作状态<br/>`ESTABLISHED` \| `TERMINATED` 枚举值之一
| build_time {data-required} | string | 建立合作关系时间
| create_time {data-required} | string | 创建时间
| update_time {data-required} | string | 更新时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012380498) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012381469)
