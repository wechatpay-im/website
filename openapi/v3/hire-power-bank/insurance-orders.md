---
title: 创建保险订单
description: 商户可通过该接口创建保险订单。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_order_no {data-indent=1} | string | 商户创建保险订单时的凭据号
| openid {data-indent=1} | string | 微信用户在商户对应appid下的唯一标识
| notify_url {data-indent=1} | string | 用于接收保险订单状态变化通知
| service_id {data-indent=1} | string | 商户在支付分服务下对应的服务ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->hirePowerBank->insuranceOrders->postAsync([
  'json' => [
    'out_order_no' => '6e8369071cd942c0476613f9d1ce9ca3',
    'openid'       => '2323dfsdf342342',
    'notify_url'   => 'https://api.test.com',
    'service_id'   => '实例值',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/hire-power-bank/insurance-orders')->postAsync([
  'json' => [
    'out_order_no' => '6e8369071cd942c0476613f9d1ce9ca3',
    'openid'       => '2323dfsdf342342',
    'notify_url'   => 'https://api.test.com',
    'service_id'   => '实例值',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/hire-power-bank/insurance-orders']->postAsync([
  'json' => [
    'out_order_no' => '6e8369071cd942c0476613f9d1ce9ca3',
    'openid'       => '2323dfsdf342342',
    'notify_url'   => 'https://api.test.com',
    'service_id'   => '实例值',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->hirePowerBank->insuranceOrders->post([
  'json' => [
    'out_order_no' => '6e8369071cd942c0476613f9d1ce9ca3',
    'openid'       => '2323dfsdf342342',
    'notify_url'   => 'https://api.test.com',
    'service_id'   => '实例值',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/hire-power-bank/insurance-orders')->post([
  'json' => [
    'out_order_no' => '6e8369071cd942c0476613f9d1ce9ca3',
    'openid'       => '2323dfsdf342342',
    'notify_url'   => 'https://api.test.com',
    'service_id'   => '实例值',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/hire-power-bank/insurance-orders']->post([
  'json' => [
    'out_order_no' => '6e8369071cd942c0476613f9d1ce9ca3',
    'openid'       => '2323dfsdf342342',
    'notify_url'   => 'https://api.test.com',
    'service_id'   => '实例值',
  ],
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

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/hire-power-bank-insurance/insurance-orders/create-insurance-order.html)
