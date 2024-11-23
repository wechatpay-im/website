---
title: 同步订单信息
description: 由于收款商户进行的某些“线下操作”会导致微信支付侧的订单状态与实际情况不符。例如，用户通过线下付款的方式已经完成支付，而微信支付侧并未支付成功，此时可能导致用户重复支付。因此商户需要通过订单同步接口将订单状态同步给微信支付，修改订单在微信支付系统中的状态。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no {data-required} | string | 商户服务订单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| service_id {data-required data-indent=1} | string | 服务ID
| sub_mchid {data-required data-indent=1} | string | 子商户号
| type {data-required data-indent=1} | string | 场景类型
| detail {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 内容信息详情
| seq {data-indent=2} | integer | 收款序号
| paid_time {data-required data-indent=2} | string | 收款成功时间
| paid_amount {data-indent=2} | integer | 收款金额

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->partner->serviceorder->_out_order_no_->sync->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'sub_mchid' => '1900000109',
    'type' => 'Order_Paid',
    'detail' => [
      'seq' => 1,
      'paid_time' => '20091225091210',
      'paid_amount' => 1,
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/partner/serviceorder/{out_order_no}/sync')->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'sub_mchid' => '1900000109',
    'type' => 'Order_Paid',
    'detail' => [
      'seq' => 1,
      'paid_time' => '20091225091210',
      'paid_amount' => 1,
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/partner/serviceorder/{out_order_no}/sync']->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'sub_mchid' => '1900000109',
    'type' => 'Order_Paid',
    'detail' => [
      'seq' => 1,
      'paid_time' => '20091225091210',
      'paid_amount' => 1,
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->partner->serviceorder->_out_order_no_->sync->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'sub_mchid' => '1900000109',
    'type' => 'Order_Paid',
    'detail' => [
      'seq' => 1,
      'paid_time' => '20091225091210',
      'paid_amount' => 1,
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/partner/serviceorder/{out_order_no}/sync')->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'sub_mchid' => '1900000109',
    'type' => 'Order_Paid',
    'detail' => [
      'seq' => 1,
      'paid_time' => '20091225091210',
      'paid_amount' => 1,
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/payscore/partner/serviceorder/{out_order_no}/sync']->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'sub_mchid' => '1900000109',
    'type' => 'Order_Paid',
    'detail' => [
      'seq' => 1,
      'paid_time' => '20091225091210',
      'paid_amount' => 1,
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_7.shtml) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-order/sync-partner-service-order.html)
