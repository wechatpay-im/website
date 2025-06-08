---
title: 发起门店主体匹配
description: 发起门店主体匹配。该接口允许服务商批量查询门店主体是否已在微信支付开通相关支付产品，匹配结果可用于后续企业支付业务的开展。企业可通过此接口确认合作门店的支付能力，提前了解是否可以使用企业支付功能进行消费。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_mchid {data-required data-indent=1} | string | 服务商商户号
| out_batch_id {data-required data-indent=1} | string | 商户主体匹配批次单号
| match_details {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 主体匹配明细列表
| organization_code {data-required data-indent=2} | string | 门店统一社会信用代码
| store_name {data-required data-indent=2} | string | 门店名称
| product_type {data-required data-indent=2} | string | 需要查询的支付产品<br/>`CODE_PAY` \| `NONE` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->webizpay->stores->entityMatches->postAsync([
  'json' => [
    'sp_mchid'      => '12341234',
    'out_batch_id'  => 'batch12345678',
    'match_details' => [[
      'organization_code' => '91110000710926094P',
      'store_name'        => '微信小店',
      'product_type'      => 'CODE_PAY',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/webizpay/stores/entity-matches')->postAsync([
  'json' => [
    'sp_mchid'      => '12341234',
    'out_batch_id'  => 'batch12345678',
    'match_details' => [[
      'organization_code' => '91110000710926094P',
      'store_name'        => '微信小店',
      'product_type'      => 'CODE_PAY',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/webizpay/stores/entity-matches']->postAsync([
  'json' => [
    'sp_mchid'      => '12341234',
    'out_batch_id'  => 'batch12345678',
    'match_details' => [[
      'organization_code' => '91110000710926094P',
      'store_name'        => '微信小店',
      'product_type'      => 'CODE_PAY',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->webizpay->stores->entityMatches->post([
  'json' => [
    'sp_mchid'      => '12341234',
    'out_batch_id'  => 'batch12345678',
    'match_details' => [[
      'organization_code' => '91110000710926094P',
      'store_name'        => '微信小店',
      'product_type'      => 'CODE_PAY',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/webizpay/stores/entity-matches')->post([
  'json' => [
    'sp_mchid'      => '12341234',
    'out_batch_id'  => 'batch12345678',
    'match_details' => [[
      'organization_code' => '91110000710926094P',
      'store_name'        => '微信小店',
      'product_type'      => 'CODE_PAY',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/webizpay/stores/entity-matches']->post([
  'json' => [
    'sp_mchid'      => '12341234',
    'out_batch_id'  => 'batch12345678',
    'match_details' => [[
      'organization_code' => '91110000710926094P',
      'store_name'        => '微信小店',
      'product_type'      => 'CODE_PAY',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid {data-required} | string | 服务商商户号
| out_batch_id {data-required} | string | 商户主体匹配批次单号
| batch_id {data-required} | string | 微信支付主体匹配批次单号
| time {data-required} | string | 批次创建时间
| state {data-required} | string | 批次状态<br/>`ACCEPTED` \| `IN_PROGRESS` \| `COMPLETED` \| `CLOSED` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4014507136)
