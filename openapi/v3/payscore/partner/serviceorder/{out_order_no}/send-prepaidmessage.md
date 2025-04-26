---
title: 下发服务预扣费消息
description: 商户系统请求支付分系统，下发服务预扣费消息; 一笔服务订单仅可以发送一次下发服务预扣费消息;
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no {data-required} | string | 商户服务订单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| service_id {data-required data-indent=1} | string | 服务ID
| sub_mchid {data-required data-indent=1} | string | 子商户商户号
| post_payments {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 后付费项目
| name {data-indent=2} | string | 付费名称
| amount {data-indent=2} | number | 付费金额
| description {data-indent=2} | string | 付费说明
| count {data-indent=2} | number | 付费数量
| post_discounts {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 商户优惠
| name {data-indent=2} | string | 优惠名称
| description {data-indent=2} | string | 优惠说明
| amount {data-indent=2} | number | 优惠金额
| count {data-indent=2} | number | 优惠数量
| total_amount {data-required data-indent=1} | number | 总金额
| prepaid_time {data-required data-indent=1} | string | 预计扣费时间

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->partner->serviceorder->_out_order_no_->sendPrepaidmessage->postAsync([
  'out_order_no' => '',
  'json' => [
    'service_id'     => '2002000000000558128851361561536',
    'sub_mchid'      => '1900000109',
    'post_payments'  => [[
      'name'        => '就餐费用',
      'amount'      => 40000,
      'description' => '就餐人均100元',
      'count'       => 4,
    ],],
    'post_discounts' => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'   => 50000,
    'prepaid_time'   => '20231218',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/partner/serviceorder/{out_order_no}/send-prepaidmessage')->postAsync([
  'out_order_no' => '',
  'json' => [
    'service_id'     => '2002000000000558128851361561536',
    'sub_mchid'      => '1900000109',
    'post_payments'  => [[
      'name'        => '就餐费用',
      'amount'      => 40000,
      'description' => '就餐人均100元',
      'count'       => 4,
    ],],
    'post_discounts' => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'   => 50000,
    'prepaid_time'   => '20231218',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/partner/serviceorder/{out_order_no}/send-prepaidmessage']->postAsync([
  'out_order_no' => '',
  'json' => [
    'service_id'     => '2002000000000558128851361561536',
    'sub_mchid'      => '1900000109',
    'post_payments'  => [[
      'name'        => '就餐费用',
      'amount'      => 40000,
      'description' => '就餐人均100元',
      'count'       => 4,
    ],],
    'post_discounts' => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'   => 50000,
    'prepaid_time'   => '20231218',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->partner->serviceorder->_out_order_no_->sendPrepaidmessage->post([
  'out_order_no' => '',
  'json' => [
    'service_id'     => '2002000000000558128851361561536',
    'sub_mchid'      => '1900000109',
    'post_payments'  => [[
      'name'        => '就餐费用',
      'amount'      => 40000,
      'description' => '就餐人均100元',
      'count'       => 4,
    ],],
    'post_discounts' => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'   => 50000,
    'prepaid_time'   => '20231218',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/partner/serviceorder/{out_order_no}/send-prepaidmessage')->post([
  'out_order_no' => '',
  'json' => [
    'service_id'     => '2002000000000558128851361561536',
    'sub_mchid'      => '1900000109',
    'post_payments'  => [[
      'name'        => '就餐费用',
      'amount'      => 40000,
      'description' => '就餐人均100元',
      'count'       => 4,
    ],],
    'post_discounts' => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'   => 50000,
    'prepaid_time'   => '20231218',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/payscore/partner/serviceorder/{out_order_no}/send-prepaidmessage']->post([
  'out_order_no' => '',
  'json' => [
    'service_id'     => '2002000000000558128851361561536',
    'sub_mchid'      => '1900000109',
    'post_payments'  => [[
      'name'        => '就餐费用',
      'amount'      => 40000,
      'description' => '就餐人均100元',
      'count'       => 4,
    ],],
    'post_discounts' => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'   => 50000,
    'prepaid_time'   => '20231218',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013394929)
