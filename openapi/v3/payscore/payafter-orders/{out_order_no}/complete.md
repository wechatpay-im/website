---
title: 完结先享后付订单
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no {data-required} | string | 商户服务订单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 公众账号ID
| service_id {data-required data-indent=1} | string | 服务ID
| finish_type {data-indent=1} | integer | 
| cancel_reason {data-indent=1} | string | 
| real_service_start_time {data-indent=1} | string | 
| real_service_end_time {data-indent=1} | string | 
| real_service_end_location {data-indent=1} | string | 
| fees {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 
| fee_name {data-indent=2} | string | 
| fee_count {data-indent=2} | integer | 
| fee_amount {data-indent=2} | integer | 
| fee_desc {data-indent=2} | string | 
| discounts {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 
| discount_name {data-indent=2} | string | 优惠名称
| discount_amount {data-indent=2} | integer | 
| discount_desc {data-indent=2} | string | 优惠说明
| total_amount {data-indent=1} | integer | 
| finish_ticket {data-indent=1} | string | 
| profit_sharing {data-indent=1} | boolean | 

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->payafterOrders->_out_order_no_->complete->postAsync([
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
$instance->chain('v3/payscore/payafter-orders/{out_order_no}/complete')->postAsync([
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
$instance['v3/payscore/payafter-orders/{out_order_no}/complete']->postAsync([
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
$response = $instance->v3->payscore->payafterOrders->_out_order_no_->complete->post([
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
$response = $instance->chain('v3/payscore/payafter-orders/{out_order_no}/complete')->post([
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
$response = $instance['v3/payscore/payafter-orders/{out_order_no}/complete']->post([
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

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=17_4&index=6)
