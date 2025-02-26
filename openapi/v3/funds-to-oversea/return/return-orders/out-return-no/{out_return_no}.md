---
title: 查询出境退回结果（通过商户出境退回单号）
description: 通过商户出境退回单号查询出境退回处理结果。默认接口限频300/s
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_return_no {data-required} | string | 商户出境单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-required data-indent=1} | string | 二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundsToOversea->return->returnOrders->outReturnNo->_out_return_no_->getAsync([
  'out_return_no' => 'merchant123123',
  'query' => [
    'sub_mchid' => '1231231',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/funds-to-oversea/return/return-orders/out-return-no/{out_return_no}')->getAsync([
  'out_return_no' => 'merchant123123',
  'query' => [
    'sub_mchid' => '1231231',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/funds-to-oversea/return/return-orders/out-return-no/{out_return_no}']->getAsync([
  'out_return_no' => 'merchant123123',
  'query' => [
    'sub_mchid' => '1231231',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundsToOversea->return->returnOrders->outReturnNo->_out_return_no_->get([
  'out_return_no' => 'merchant123123',
  'query' => [
    'sub_mchid' => '1231231',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/funds-to-oversea/return/return-orders/out-return-no/{out_return_no}')->get([
  'out_return_no' => 'merchant123123',
  'query' => [
    'sub_mchid' => '1231231',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/funds-to-oversea/return/return-orders/out-return-no/{out_return_no}']->get([
  'out_return_no' => 'merchant123123',
  'query' => [
    'sub_mchid' => '1231231',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_return_no {data-required} | string | 商户出境退回单号
| sub_mchid {data-required} | string | 二级商户号
| return_id {data-required} | string | 微信出境退回单号
| out_order_id {data-required} | string | 商户出境单号
| transaction_id {data-required} | string | 微信订单号
| refund_id {data-required} | string | 微信退款单号
| amount {data-required} | integer | 退回金额
| state {data-required} | string | 出境退回状态<br/>`PROCESSING` \| `SUCCESS` \| `FAILED` 枚举值之一
| create_time {data-required} | string | 创建时间
| success_time | string | 成功时间
| fail_reason | string | 失败原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013735052)
