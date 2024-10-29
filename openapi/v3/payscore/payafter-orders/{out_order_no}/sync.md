---
title: 支付分订单同步
description: 由于收款商户进行的某些“线下操作”会导致微信支付侧的订单状态与实际情况不符，例如用户通过线下付款的方式已经完成了支付，而微信支付侧还没有支付成功，此时可能导致用户重复支付。因此商户需要通过订单同步接口将订单状态同步给微信支付，修改订单在微信支付系统中的状态。 **注意：** 本接口只适用于智慧零售、先享后付、免押租借、免押速住的免押订单。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no | string | 商户服务订单号
| json | object | 声明请求的`JSON`数据结构
| appid {data-indent=1} | string | 公众账号ID
| service_id {data-indent=1} | string | 服务ID
| type {data-indent=1} | string | 场景类型
| detail {data-indent=1} | object | 
| paid_time {data-indent=2} | string | 

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->payafterOrders->_out_order_no_->sync->postAsync([
  'out_order_no' => '',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'service_id' => '500001',
    'type' => 'Order_Paid',
    'detail' => [
      'paid_time' => '20091225091010',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/payafter-orders/{out_order_no}/sync')->postAsync([
  'out_order_no' => '',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'service_id' => '500001',
    'type' => 'Order_Paid',
    'detail' => [
      'paid_time' => '20091225091010',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/payafter-orders/{out_order_no}/sync']->postAsync([
  'out_order_no' => '',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'service_id' => '500001',
    'type' => 'Order_Paid',
    'detail' => [
      'paid_time' => '20091225091010',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->payafterOrders->_out_order_no_->sync->post([
  'out_order_no' => '',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'service_id' => '500001',
    'type' => 'Order_Paid',
    'detail' => [
      'paid_time' => '20091225091010',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/payafter-orders/{out_order_no}/sync')->post([
  'out_order_no' => '',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'service_id' => '500001',
    'type' => 'Order_Paid',
    'detail' => [
      'paid_time' => '20091225091010',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/payafter-orders/{out_order_no}/sync']->post([
  'out_order_no' => '',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'service_id' => '500001',
    'type' => 'Order_Paid',
    'detail' => [
      'paid_time' => '20091225091010',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| appid | string | 公众账号ID
| mchid | string | 商户号
| out_order_no | string | 商户服务订单号
| order_id | string | 微信支付服务订单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=24_1&index=1)
