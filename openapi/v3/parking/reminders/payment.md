---
title: 同步支付结果通知
description: 对商户提供同步支付结果通知接口
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_serial_number {data-required data-indent=1} | string | 商户停车单号
| plate_number {data-required data-indent=1} | string | 车牌号
| parking_id {data-required data-indent=1} | string | 微信停车场ID
| parking_state {data-required data-indent=1} | string | 停车状态<br/>`PARKING_STATUS_UNKNOWN` \| `PARKING_STATUS_PARKING` \| `PARKING_STATUS_NOT_PARKING` 枚举值之一
| pay_type {data-required data-indent=1} | string | 支付类型<br/>`PAY_TYPE_UNKNOWN` \| `PAY_TYPE_WXPAY` \| `PAY_TYPE_OTHERS` 枚举值之一
| openid {data-indent=1} | string | 付款用户OpenID
| sub_mchid {data-indent=1} | string | 特约商户号
| total_amount {data-required data-indent=1} | integer | 总费用
| paid_amount {data-required data-indent=1} | integer | 已支付费用
| out_trade_no {data-indent=1} | string | 商户支付订单号
| pay_channel {data-indent=1} | string | 支付渠道<br/>`PAY_CHANNEL_UNKNOWN` \| `PAY_CHANNEL_WECHAT_PAY_NOTIF` \| `PAY_CHANNEL_SCAN_QRCODE` \| `PAY_CHANNEL_OFFICIAL_ACCOUNT` \| `PAY_CHANNEL_MCH_MINI_PROG` \| `PAY_CHANNEL_OTHERS` 枚举值之一
| pay_time {data-indent=1} | integer | 支付时间
| token {data-indent=1} | string | 消息支付防伪凭证
| wx_trade_no {data-indent=1} | string | 微信支付订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->parking->reminders->payment->postAsync([
  'json' => [
    'out_serial_number' => 'PARK202407041530001',
    'plate_number'      => '粤B12345',
    'parking_id'        => 'WXPARK001',
    'parking_state'     => 'PARKING_STATUS_PARKING',
    'pay_type'          => 'PAY_TYPE_WXPAY',
    'openid'            => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_mchid'         => '1900000109',
    'total_amount'      => 1500,
    'paid_amount'       => 1500,
    'out_trade_no'      => 'TRADE202407041530001',
    'pay_channel'       => 'PAY_CHANNEL_WECHAT_PAY_NOTIF',
    'pay_time'          => 1720081800,
    'token'             => 'token1234567890',
    'wx_trade_no'       => '4200001999202407041234567890',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/parking/reminders/payment')->postAsync([
  'json' => [
    'out_serial_number' => 'PARK202407041530001',
    'plate_number'      => '粤B12345',
    'parking_id'        => 'WXPARK001',
    'parking_state'     => 'PARKING_STATUS_PARKING',
    'pay_type'          => 'PAY_TYPE_WXPAY',
    'openid'            => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_mchid'         => '1900000109',
    'total_amount'      => 1500,
    'paid_amount'       => 1500,
    'out_trade_no'      => 'TRADE202407041530001',
    'pay_channel'       => 'PAY_CHANNEL_WECHAT_PAY_NOTIF',
    'pay_time'          => 1720081800,
    'token'             => 'token1234567890',
    'wx_trade_no'       => '4200001999202407041234567890',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/parking/reminders/payment']->postAsync([
  'json' => [
    'out_serial_number' => 'PARK202407041530001',
    'plate_number'      => '粤B12345',
    'parking_id'        => 'WXPARK001',
    'parking_state'     => 'PARKING_STATUS_PARKING',
    'pay_type'          => 'PAY_TYPE_WXPAY',
    'openid'            => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_mchid'         => '1900000109',
    'total_amount'      => 1500,
    'paid_amount'       => 1500,
    'out_trade_no'      => 'TRADE202407041530001',
    'pay_channel'       => 'PAY_CHANNEL_WECHAT_PAY_NOTIF',
    'pay_time'          => 1720081800,
    'token'             => 'token1234567890',
    'wx_trade_no'       => '4200001999202407041234567890',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->parking->reminders->payment->post([
  'json' => [
    'out_serial_number' => 'PARK202407041530001',
    'plate_number'      => '粤B12345',
    'parking_id'        => 'WXPARK001',
    'parking_state'     => 'PARKING_STATUS_PARKING',
    'pay_type'          => 'PAY_TYPE_WXPAY',
    'openid'            => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_mchid'         => '1900000109',
    'total_amount'      => 1500,
    'paid_amount'       => 1500,
    'out_trade_no'      => 'TRADE202407041530001',
    'pay_channel'       => 'PAY_CHANNEL_WECHAT_PAY_NOTIF',
    'pay_time'          => 1720081800,
    'token'             => 'token1234567890',
    'wx_trade_no'       => '4200001999202407041234567890',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/parking/reminders/payment')->post([
  'json' => [
    'out_serial_number' => 'PARK202407041530001',
    'plate_number'      => '粤B12345',
    'parking_id'        => 'WXPARK001',
    'parking_state'     => 'PARKING_STATUS_PARKING',
    'pay_type'          => 'PAY_TYPE_WXPAY',
    'openid'            => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_mchid'         => '1900000109',
    'total_amount'      => 1500,
    'paid_amount'       => 1500,
    'out_trade_no'      => 'TRADE202407041530001',
    'pay_channel'       => 'PAY_CHANNEL_WECHAT_PAY_NOTIF',
    'pay_time'          => 1720081800,
    'token'             => 'token1234567890',
    'wx_trade_no'       => '4200001999202407041234567890',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/parking/reminders/payment']->post([
  'json' => [
    'out_serial_number' => 'PARK202407041530001',
    'plate_number'      => '粤B12345',
    'parking_id'        => 'WXPARK001',
    'parking_state'     => 'PARKING_STATUS_PARKING',
    'pay_type'          => 'PAY_TYPE_WXPAY',
    'openid'            => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_mchid'         => '1900000109',
    'total_amount'      => 1500,
    'paid_amount'       => 1500,
    'out_trade_no'      => 'TRADE202407041530001',
    'pay_channel'       => 'PAY_CHANNEL_WECHAT_PAY_NOTIF',
    'pay_time'          => 1720081800,
    'token'             => 'token1234567890',
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4019557765)
