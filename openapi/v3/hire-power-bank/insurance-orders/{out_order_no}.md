---
title: 查询保险订单详情
description: 商户通过该接口可根据商户订单号查询保险订单详情。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no {data-required} | string | 商户创建保险订单时的凭据号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->hirePowerBank->insuranceOrders->_out_order_no_->getAsync([
  'out_order_no' => '6e8369071cd942c0476613f9d1ce9ca3',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/hire-power-bank/insurance-orders/{out_order_no}')->getAsync([
  'out_order_no' => '6e8369071cd942c0476613f9d1ce9ca3',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/hire-power-bank/insurance-orders/{out_order_no}']->getAsync([
  'out_order_no' => '6e8369071cd942c0476613f9d1ce9ca3',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->hirePowerBank->insuranceOrders->_out_order_no_->get([
  'out_order_no' => '6e8369071cd942c0476613f9d1ce9ca3',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/hire-power-bank/insurance-orders/{out_order_no}')->get([
  'out_order_no' => '6e8369071cd942c0476613f9d1ce9ca3',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/hire-power-bank/insurance-orders/{out_order_no}']->get([
  'out_order_no' => '6e8369071cd942c0476613f9d1ce9ca3',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| order_id | string | 租借充电宝隔夜归还保险订单号，唯一标识一笔保险订单
| out_order_no | string | 商户创建保险订单时的凭据号
| openid | string | 微信用户在商户对应appid下的唯一标识
| max_claim_count | integer | 一笔保险订单对应的最大理赔次数
| claimed_count | integer | 一笔保险订单对应的已理赔次数
| order_receive_time | string | 保险订单领取时间，遵循rfc3339标准格式
| order_begin_time | string | 保险订单开始时间，遵循rfc3339标准格式
| order_end_time | string | 保险订单结束时间，遵循rfc3339标准格式
| order_receive_state | string | 保险订单领取状态

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/hire-power-bank-insurance/insurance-orders/get-by-out-trade-no.html)
