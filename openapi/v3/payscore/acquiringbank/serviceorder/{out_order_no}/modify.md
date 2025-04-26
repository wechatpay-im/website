---
title: 从业机构修改微信支付分订单金额
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
| post_payments {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 后付费项目
| name {data-required data-indent=2} | string | 付费名称
| description {data-indent=2} | string | 付费说明
| amount {data-indent=2} | integer | 付费金额
| count {data-indent=2} | integer | 付费数量
| post_discounts {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 后付费商户优惠
| name {data-required data-indent=2} | string | 优惠名称
| description {data-required data-indent=2} | string | 优惠说明
| amount {data-required data-indent=2} | integer | 优惠金额
| count {data-indent=2} | integer | 优惠数量
| total_amount {data-required data-indent=1} | integer | 总金额
| reason {data-required data-indent=1} | string | 修改原因

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->acquiringbank->serviceorder->_out_order_no_->modify->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id'     => '2002000000000558128851361561536',
    'sub_mchid'      => '1900000109',
    'channel_id'     => '1230000109',
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
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/acquiringbank/serviceorder/{out_order_no}/modify')->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id'     => '2002000000000558128851361561536',
    'sub_mchid'      => '1900000109',
    'channel_id'     => '1230000109',
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
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/acquiringbank/serviceorder/{out_order_no}/modify']->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id'     => '2002000000000558128851361561536',
    'sub_mchid'      => '1900000109',
    'channel_id'     => '1230000109',
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
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->acquiringbank->serviceorder->_out_order_no_->modify->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id'     => '2002000000000558128851361561536',
    'sub_mchid'      => '1900000109',
    'channel_id'     => '1230000109',
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
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/acquiringbank/serviceorder/{out_order_no}/modify')->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id'     => '2002000000000558128851361561536',
    'sub_mchid'      => '1900000109',
    'channel_id'     => '1230000109',
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
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/payscore/acquiringbank/serviceorder/{out_order_no}/modify']->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id'     => '2002000000000558128851361561536',
    'sub_mchid'      => '1900000109',
    'channel_id'     => '1230000109',
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
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012691363) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013194282)
