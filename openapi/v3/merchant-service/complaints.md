---
title: 查询投诉信息
description: 商户可通过调用此接口，查询指定时间段的所有用户投诉信息，并在返回结果分页输出查询结果。对于服务商、渠道商，可通过调用此接口，查询指定子商户号对应子商户的投诉信息，若不指定，则查询所有子商户投诉信。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object | 声明请求的查询参数
| limit {data-indent=1} | integer | 
| offset {data-indent=1} | integer | 
| begin_date {data-indent=1} | string | 
| end_date {data-indent=1} | string | 
| sub_mchid {data-indent=1} | string | 

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantService->complaints->getAsync([
  'query' => [
    'limit' => 0,
    'offset' => 0,
    'begin_date' => '',
    'end_date' => '',
    'sub_mchid' => '',
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
    'limit' => 0,
    'offset' => 0,
    'begin_date' => '',
    'end_date' => '',
    'sub_mchid' => '',
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
    'limit' => 0,
    'offset' => 0,
    'begin_date' => '',
    'end_date' => '',
    'sub_mchid' => '',
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
    'limit' => 0,
    'offset' => 0,
    'begin_date' => '',
    'end_date' => '',
    'sub_mchid' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-service/complaints')->get([
  'query' => [
    'limit' => 0,
    'offset' => 0,
    'begin_date' => '',
    'end_date' => '',
    'sub_mchid' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant-service/complaints']->get([
  'query' => [
    'limit' => 0,
    'offset' => 0,
    'begin_date' => '',
    'end_date' => '',
    'sub_mchid' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| offset | integer | 
| limit | integer | 
| total_count | integer | 
| data | object[] | 
| out_trade_no {data-indent=1} | string | 
| complaint_time {data-indent=1} | string | 
| amount {data-indent=1} | integer | 
| payer_phone {data-indent=1} | string | 
| complaint_detail {data-indent=1} | string | 
| transaction_id {data-indent=1} | string | 
| frozen_end_time {data-indent=1} | string | 
| sub_mchid {data-indent=1} | string | 

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_1.shtml)
