---
title: 修改订单金额
description: 完结订单总金额与实际金额不符时，且当服务订单收款状态处于“待支付（USER_PAYING）”时，商户可通过该接口修改订单金额。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no {data-required} | string | 商户服务订单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| service_id {data-indent=1} | string | 服务ID
| sub_mchid {data-required data-indent=1} | string | 子商户号
| post_payments {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 后付费项目
| name {data-required data-indent=2} | string | 付费名称
| description {data-indent=2} | string | 付费说明
| amount {data-indent=2} | integer | 付费金额
| count {data-indent=2} | integer | 付费数量
| post_discounts {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 后付费商户优惠
| name {data-required data-indent=2} | string | 优惠名称
| description {data-indent=2} | string | 优惠说明
| amount {data-required data-indent=2} | integer | 优惠金额
| count {data-indent=2} | integer | 优惠数量
| total_amount {data-required data-indent=1} | integer | 总金额
| reason {data-required data-indent=1} | string | 修改原因
| device {data-indent=1} | object {data-tooltip="对应PHP的array"} | 设备信息
| start_device_id {data-indent=2} | string | 服务开始的设备ID
| end_device_id {data-indent=2} | string | 服务结束的设备ID
| materiel_no {data-indent=2} | string | 物料编码

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->partner->serviceorder->_out_order_no_->modify->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id'     => '2002000000000558128851361561536',
    'sub_mchid'      => '1900000109',
    'post_payments'  => [[
      'name'        => '就餐费用',
      'description' => '就餐人均100元',
      'amount'      => 40000,
      'count'       => 4,
    ],],
    'post_discounts' => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'   => 50000,
    'reason'         => '用户投诉',
    'device'         => [
      'start_device_id' => 'HG123456',
      'end_device_id'   => 'HG123456',
      'materiel_no'     => 'example_materiel_no',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/partner/serviceorder/{out_order_no}/modify')->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id'     => '2002000000000558128851361561536',
    'sub_mchid'      => '1900000109',
    'post_payments'  => [[
      'name'        => '就餐费用',
      'description' => '就餐人均100元',
      'amount'      => 40000,
      'count'       => 4,
    ],],
    'post_discounts' => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'   => 50000,
    'reason'         => '用户投诉',
    'device'         => [
      'start_device_id' => 'HG123456',
      'end_device_id'   => 'HG123456',
      'materiel_no'     => 'example_materiel_no',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/partner/serviceorder/{out_order_no}/modify']->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id'     => '2002000000000558128851361561536',
    'sub_mchid'      => '1900000109',
    'post_payments'  => [[
      'name'        => '就餐费用',
      'description' => '就餐人均100元',
      'amount'      => 40000,
      'count'       => 4,
    ],],
    'post_discounts' => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'   => 50000,
    'reason'         => '用户投诉',
    'device'         => [
      'start_device_id' => 'HG123456',
      'end_device_id'   => 'HG123456',
      'materiel_no'     => 'example_materiel_no',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->partner->serviceorder->_out_order_no_->modify->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id'     => '2002000000000558128851361561536',
    'sub_mchid'      => '1900000109',
    'post_payments'  => [[
      'name'        => '就餐费用',
      'description' => '就餐人均100元',
      'amount'      => 40000,
      'count'       => 4,
    ],],
    'post_discounts' => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'   => 50000,
    'reason'         => '用户投诉',
    'device'         => [
      'start_device_id' => 'HG123456',
      'end_device_id'   => 'HG123456',
      'materiel_no'     => 'example_materiel_no',
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/partner/serviceorder/{out_order_no}/modify')->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id'     => '2002000000000558128851361561536',
    'sub_mchid'      => '1900000109',
    'post_payments'  => [[
      'name'        => '就餐费用',
      'description' => '就餐人均100元',
      'amount'      => 40000,
      'count'       => 4,
    ],],
    'post_discounts' => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'   => 50000,
    'reason'         => '用户投诉',
    'device'         => [
      'start_device_id' => 'HG123456',
      'end_device_id'   => 'HG123456',
      'materiel_no'     => 'example_materiel_no',
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/payscore/partner/serviceorder/{out_order_no}/modify']->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id'     => '2002000000000558128851361561536',
    'sub_mchid'      => '1900000109',
    'post_payments'  => [[
      'name'        => '就餐费用',
      'description' => '就餐人均100元',
      'amount'      => 40000,
      'count'       => 4,
    ],],
    'post_discounts' => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'   => 50000,
    'reason'         => '用户投诉',
    'device'         => [
      'start_device_id' => 'HG123456',
      'end_device_id'   => 'HG123456',
      'materiel_no'     => 'example_materiel_no',
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012692360) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013138819) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_4.shtml) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-order/modify-partner-service-order.html)
