---
title: 完结智慧零售订单
description: 前置条件：用户确认订单成功后。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no {data-required} | string | 商户服务订单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 公众账号ID
| service_id {data-required data-indent=1} | string | 服务ID
| finish_type {data-indent=1} | integer | 标识用户订单使用情况<br/>`1` \| `2` 枚举值之一
| cancel_reason {data-indent=1} | string | 取消订单的原因
| real_service_start_time {data-indent=1} | string | 实际服务开始时间
| real_service_end_time {data-indent=1} | string | 服务结束时间
| real_service_end_location {data-indent=1} | string | 实际结束使用服务的地点
| fees {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 后付费，描述付费项目列表
| fee_name {data-indent=2} | string | 付费项目名称
| fee_count {data-indent=2} | integer | 付费项目数量
| fee_amount {data-indent=2} | integer | 付费项目总金额
| fee_desc {data-indent=2} | string | 描述计费规则
| discounts {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 商户优惠，最多包含5条商户优惠
| discount_name {data-indent=2} | string | 优惠名称
| discount_amount {data-indent=2} | integer | 商品优惠金额
| discount_desc {data-indent=2} | string | 优惠说明
| total_amount {data-indent=1} | integer | 总金额(大于等于0的数字，单位为分)
| finish_ticket {data-indent=1} | string | 完结凭证
| profit_sharing {data-indent=1} | boolean | 是否指定商户分账

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->smartretailOrders->_out_order_no_->complete->postAsync([
  'out_order_no' => '',
  'json' => [
    'appid'                     => 'wxd678efh567hg6787',
    'service_id'                => '500001',
    'finish_type'               => 0,
    'cancel_reason'             => '',
    'real_service_start_time'   => '',
    'real_service_end_time'     => '',
    'real_service_end_location' => '',
    'fees'                      => [[
      'fee_name'   => '',
      'fee_count'  => 0,
      'fee_amount' => 0,
      'fee_desc'   => '',
    ],],
    'discounts'                 => [[
      'discount_name'   => '满20减1元',
      'discount_amount' => 0,
      'discount_desc'   => '不与其他优惠叠加',
    ],],
    'total_amount'              => 0,
    'finish_ticket'             => '',
    'profit_sharing'            => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/smartretail-orders/{out_order_no}/complete')->postAsync([
  'out_order_no' => '',
  'json' => [
    'appid'                     => 'wxd678efh567hg6787',
    'service_id'                => '500001',
    'finish_type'               => 0,
    'cancel_reason'             => '',
    'real_service_start_time'   => '',
    'real_service_end_time'     => '',
    'real_service_end_location' => '',
    'fees'                      => [[
      'fee_name'   => '',
      'fee_count'  => 0,
      'fee_amount' => 0,
      'fee_desc'   => '',
    ],],
    'discounts'                 => [[
      'discount_name'   => '满20减1元',
      'discount_amount' => 0,
      'discount_desc'   => '不与其他优惠叠加',
    ],],
    'total_amount'              => 0,
    'finish_ticket'             => '',
    'profit_sharing'            => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/smartretail-orders/{out_order_no}/complete']->postAsync([
  'out_order_no' => '',
  'json' => [
    'appid'                     => 'wxd678efh567hg6787',
    'service_id'                => '500001',
    'finish_type'               => 0,
    'cancel_reason'             => '',
    'real_service_start_time'   => '',
    'real_service_end_time'     => '',
    'real_service_end_location' => '',
    'fees'                      => [[
      'fee_name'   => '',
      'fee_count'  => 0,
      'fee_amount' => 0,
      'fee_desc'   => '',
    ],],
    'discounts'                 => [[
      'discount_name'   => '满20减1元',
      'discount_amount' => 0,
      'discount_desc'   => '不与其他优惠叠加',
    ],],
    'total_amount'              => 0,
    'finish_ticket'             => '',
    'profit_sharing'            => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->smartretailOrders->_out_order_no_->complete->post([
  'out_order_no' => '',
  'json' => [
    'appid'                     => 'wxd678efh567hg6787',
    'service_id'                => '500001',
    'finish_type'               => 0,
    'cancel_reason'             => '',
    'real_service_start_time'   => '',
    'real_service_end_time'     => '',
    'real_service_end_location' => '',
    'fees'                      => [[
      'fee_name'   => '',
      'fee_count'  => 0,
      'fee_amount' => 0,
      'fee_desc'   => '',
    ],],
    'discounts'                 => [[
      'discount_name'   => '满20减1元',
      'discount_amount' => 0,
      'discount_desc'   => '不与其他优惠叠加',
    ],],
    'total_amount'              => 0,
    'finish_ticket'             => '',
    'profit_sharing'            => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/smartretail-orders/{out_order_no}/complete')->post([
  'out_order_no' => '',
  'json' => [
    'appid'                     => 'wxd678efh567hg6787',
    'service_id'                => '500001',
    'finish_type'               => 0,
    'cancel_reason'             => '',
    'real_service_start_time'   => '',
    'real_service_end_time'     => '',
    'real_service_end_location' => '',
    'fees'                      => [[
      'fee_name'   => '',
      'fee_count'  => 0,
      'fee_amount' => 0,
      'fee_desc'   => '',
    ],],
    'discounts'                 => [[
      'discount_name'   => '满20减1元',
      'discount_amount' => 0,
      'discount_desc'   => '不与其他优惠叠加',
    ],],
    'total_amount'              => 0,
    'finish_ticket'             => '',
    'profit_sharing'            => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/smartretail-orders/{out_order_no}/complete']->post([
  'out_order_no' => '',
  'json' => [
    'appid'                     => 'wxd678efh567hg6787',
    'service_id'                => '500001',
    'finish_type'               => 0,
    'cancel_reason'             => '',
    'real_service_start_time'   => '',
    'real_service_end_time'     => '',
    'real_service_end_location' => '',
    'fees'                      => [[
      'fee_name'   => '',
      'fee_count'  => 0,
      'fee_amount' => 0,
      'fee_desc'   => '',
    ],],
    'discounts'                 => [[
      'discount_name'   => '满20减1元',
      'discount_amount' => 0,
      'discount_desc'   => '不与其他优惠叠加',
    ],],
    'total_amount'              => 0,
    'finish_ticket'             => '',
    'profit_sharing'            => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| appid {data-required} | string | 公众账号ID
| mchid {data-required} | string | 商户号
| out_order_no {data-required} | string | 商户服务订单号
| service_id {data-required} | string | 服务ID
| order_id {data-required} | string | 微信支付服务订单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=14_4&index=6)
