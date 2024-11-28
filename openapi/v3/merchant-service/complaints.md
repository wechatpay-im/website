---
title: 查询投诉信息
description: 商户可通过调用此接口，查询指定时间段的所有用户投诉信息，并在返回结果分页输出查询结果。对于服务商、渠道商，可通过调用此接口，查询指定子商户号对应子商户的投诉信息，若不指定，则查询所有子商户投诉信。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

::: danger :no_entry_sign: {.im-deprecated}

本接口服务已于 `2020.11.27` (北京时间)下线，文档仅做留存参考。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| limit {data-indent=1} | integer | 
| offset {data-indent=1} | integer | 
| begin_date {data-required data-indent=1} | string | 
| end_date {data-required data-indent=1} | string | 
| sub_mchid {data-indent=1} | string | 

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantService->complaints->getAsync([
  'query' => [
    'limit'      => 0,
    'offset'     => 0,
    'begin_date' => '',
    'end_date'   => '',
    'sub_mchid'  => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-service/complaints')->getAsync([
  'query' => [
    'limit'      => 0,
    'offset'     => 0,
    'begin_date' => '',
    'end_date'   => '',
    'sub_mchid'  => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-service/complaints']->getAsync([
  'query' => [
    'limit'      => 0,
    'offset'     => 0,
    'begin_date' => '',
    'end_date'   => '',
    'sub_mchid'  => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantService->complaints->get([
  'query' => [
    'limit'      => 0,
    'offset'     => 0,
    'begin_date' => '',
    'end_date'   => '',
    'sub_mchid'  => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-service/complaints')->get([
  'query' => [
    'limit'      => 0,
    'offset'     => 0,
    'begin_date' => '',
    'end_date'   => '',
    'sub_mchid'  => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant-service/complaints']->get([
  'query' => [
    'limit'      => 0,
    'offset'     => 0,
    'begin_date' => '',
    'end_date'   => '',
    'sub_mchid'  => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| offset {data-required} | integer | 
| limit {data-required} | integer | 
| total_count | integer | 
| data | object[] {data-tooltip="对应PHP的array"} | 
| out_trade_no {data-required data-indent=1} | string | 
| complaint_time {data-required data-indent=1} | string | 
| amount {data-required data-indent=1} | integer | 
| payer_phone {data-indent=1} | string | 
| complaint_detail {data-required data-indent=1} | string | 
| complaint_state {data-required data-indent=1} | string | 投诉单状态<br/>`PAYER_COMPLAINTED` \| `FROZENED` \| `FROZEN_FINISHED` \| `PAYER_CANCELED` \| `MERCHANT_REFUNDED` \| `SYSTEM_REFUNDED` \| `MANUAL_UNFROZEN` 枚举值之一
| transaction_id {data-required data-indent=1} | string | 
| frozen_end_time {data-indent=1} | string | 
| sub_mchid {data-indent=1} | string | 

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_1.shtml)
