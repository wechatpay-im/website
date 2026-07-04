---
title: 同步非临停扩展支付
description: 对商户提供非临停扩展支付数据同步接口（仅落库，不参与临停停车单）。适用对象与普通服务商一致，支持普通商户、普通服务商、平台商户（电商模式），与既有停车提醒 API 相同。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_trade_no {data-required data-indent=1} | string | 商户支付订单号
| fee_items {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 费用明细列表
| fee_type {data-required data-indent=2} | string | 费用类型<br/>`EXT_PARKING_PAYMENT_FEE_TYPE_UNKNOWN` \| `EXT_PARKING_PAYMENT_FEE_TYPE_MONTHLY` \| `EXT_PARKING_PAYMENT_FEE_TYPE_QUARTERLY` \| `EXT_PARKING_PAYMENT_FEE_TYPE_MEMBER` 枚举值之一
| amount {data-required data-indent=2} | integer | 金额（单位为分）
| pay_time {data-required data-indent=1} | integer | 支付时间（秒级时间戳）
| wx_parking_lot_id {data-indent=1} | string | 微信停车场ID
| wx_trade_no {data-indent=1} | string | 微信支付订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->parking->reminders->extPayment->postAsync([
  'json' => [
    'out_trade_no'      => 'TRADE202407041530001',
    'fee_items'         => [[
      'fee_type' => 'EXT_PARKING_PAYMENT_FEE_TYPE_MONTHLY',
      'amount'   => 5000,
    ],],
    'pay_time'          => 1719128975,
    'wx_parking_lot_id' => '21232735744117624001123604298240',
    'wx_trade_no'       => '4200001999202407041234567890',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/parking/reminders/ext-payment')->postAsync([
  'json' => [
    'out_trade_no'      => 'TRADE202407041530001',
    'fee_items'         => [[
      'fee_type' => 'EXT_PARKING_PAYMENT_FEE_TYPE_MONTHLY',
      'amount'   => 5000,
    ],],
    'pay_time'          => 1719128975,
    'wx_parking_lot_id' => '21232735744117624001123604298240',
    'wx_trade_no'       => '4200001999202407041234567890',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/parking/reminders/ext-payment']->postAsync([
  'json' => [
    'out_trade_no'      => 'TRADE202407041530001',
    'fee_items'         => [[
      'fee_type' => 'EXT_PARKING_PAYMENT_FEE_TYPE_MONTHLY',
      'amount'   => 5000,
    ],],
    'pay_time'          => 1719128975,
    'wx_parking_lot_id' => '21232735744117624001123604298240',
    'wx_trade_no'       => '4200001999202407041234567890',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->parking->reminders->extPayment->post([
  'json' => [
    'out_trade_no'      => 'TRADE202407041530001',
    'fee_items'         => [[
      'fee_type' => 'EXT_PARKING_PAYMENT_FEE_TYPE_MONTHLY',
      'amount'   => 5000,
    ],],
    'pay_time'          => 1719128975,
    'wx_parking_lot_id' => '21232735744117624001123604298240',
    'wx_trade_no'       => '4200001999202407041234567890',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/parking/reminders/ext-payment')->post([
  'json' => [
    'out_trade_no'      => 'TRADE202407041530001',
    'fee_items'         => [[
      'fee_type' => 'EXT_PARKING_PAYMENT_FEE_TYPE_MONTHLY',
      'amount'   => 5000,
    ],],
    'pay_time'          => 1719128975,
    'wx_parking_lot_id' => '21232735744117624001123604298240',
    'wx_trade_no'       => '4200001999202407041234567890',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/parking/reminders/ext-payment']->post([
  'json' => [
    'out_trade_no'      => 'TRADE202407041530001',
    'fee_items'         => [[
      'fee_type' => 'EXT_PARKING_PAYMENT_FEE_TYPE_MONTHLY',
      'amount'   => 5000,
    ],],
    'pay_time'          => 1719128975,
    'wx_parking_lot_id' => '21232735744117624001123604298240',
    'wx_trade_no'       => '4200001999202407041234567890',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4020338487)
