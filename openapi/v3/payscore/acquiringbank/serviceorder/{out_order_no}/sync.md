---
title: 从业机构同步微信支付分订单信息
description: 前置条件：服务订单状态为“进行中”且订单状态说明需为"商户完结(MCH_COMPLETE)"
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no {data-required} | string | 商户服务订单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| service_id {data-required data-indent=1} | string | 服务ID
| sub_mchid {data-required data-indent=1} | string | 子商户号
| channel_id {data-indent=1} | string | 渠道商商户号
| type {data-required data-indent=1} | string | 场景类型
| detail {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 内容信息详情
| paid_time {data-required data-indent=2} | string | 收款成功时间

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->acquiringbank->serviceorder->_out_order_no_->sync->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'sub_mchid'  => '1900000109',
    'channel_id' => '1230000109',
    'type'       => 'Order_Paid',
    'detail'     => [
      'paid_time' => '20091225091210',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/acquiringbank/serviceorder/{out_order_no}/sync')->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'sub_mchid'  => '1900000109',
    'channel_id' => '1230000109',
    'type'       => 'Order_Paid',
    'detail'     => [
      'paid_time' => '20091225091210',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/acquiringbank/serviceorder/{out_order_no}/sync']->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'sub_mchid'  => '1900000109',
    'channel_id' => '1230000109',
    'type'       => 'Order_Paid',
    'detail'     => [
      'paid_time' => '20091225091210',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->acquiringbank->serviceorder->_out_order_no_->sync->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'sub_mchid'  => '1900000109',
    'channel_id' => '1230000109',
    'type'       => 'Order_Paid',
    'detail'     => [
      'paid_time' => '20091225091210',
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/acquiringbank/serviceorder/{out_order_no}/sync')->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'sub_mchid'  => '1900000109',
    'channel_id' => '1230000109',
    'type'       => 'Order_Paid',
    'detail'     => [
      'paid_time' => '20091225091210',
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/payscore/acquiringbank/serviceorder/{out_order_no}/sync']->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'sub_mchid'  => '1900000109',
    'channel_id' => '1230000109',
    'type'       => 'Order_Paid',
    'detail'     => [
      'paid_time' => '20091225091210',
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012691378) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013194292)
