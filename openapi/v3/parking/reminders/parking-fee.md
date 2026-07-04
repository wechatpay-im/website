---
title: 查询停车费用
description: 对商户提供查询停车费用接口
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_serial_number {data-required data-indent=1} | string | 商户停车单号
| plate_number {data-indent=1} | string | 车牌号
| out_parking_id {data-indent=1} | string | 商户停车场ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->parking->reminders->parkingFee->postAsync([
  'json' => [
    'out_serial_number' => 'PARK202407041530001',
    'plate_number'      => '粤B12345',
    'out_parking_id'    => 'lot_sz_tencent_001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/parking/reminders/parking-fee')->postAsync([
  'json' => [
    'out_serial_number' => 'PARK202407041530001',
    'plate_number'      => '粤B12345',
    'out_parking_id'    => 'lot_sz_tencent_001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/parking/reminders/parking-fee']->postAsync([
  'json' => [
    'out_serial_number' => 'PARK202407041530001',
    'plate_number'      => '粤B12345',
    'out_parking_id'    => 'lot_sz_tencent_001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->parking->reminders->parkingFee->post([
  'json' => [
    'out_serial_number' => 'PARK202407041530001',
    'plate_number'      => '粤B12345',
    'out_parking_id'    => 'lot_sz_tencent_001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/parking/reminders/parking-fee')->post([
  'json' => [
    'out_serial_number' => 'PARK202407041530001',
    'plate_number'      => '粤B12345',
    'out_parking_id'    => 'lot_sz_tencent_001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/parking/reminders/parking-fee']->post([
  'json' => [
    'out_serial_number' => 'PARK202407041530001',
    'plate_number'      => '粤B12345',
    'out_parking_id'    => 'lot_sz_tencent_001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_amount | integer | 当前总费用
| parking_timestamp | integer | 已停时长
| parking_state | string | 停车状态<br/>`PARKING_STATE_UNKNOWN` \| `PARKING_STATE_ENTERED` \| `PARKING_STATE_EXIT_GATE` \| `PARKING_STATE_EXITED` \| `PARKING_STATE_UNEXPECTED_CLOSE` 枚举值之一
| pay_state | string | 支付状态<br/>`PAY_STATUS_UNKNOWN` \| `PAY_STATUS_UNPAID` \| `PAY_STATUS_PAID` 枚举值之一
| allowed_exit_timestamp | integer | 免费待出场时间
| next_raise_price | integer | 下一次跳价价格
| next_raise_timestamp | integer | 下一次跳价时间
| payable_amount | integer | 应付金额
| paid_amount | integer | 已付金额

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4019557825)
