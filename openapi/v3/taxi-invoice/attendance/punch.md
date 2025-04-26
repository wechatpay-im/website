---
title: 签到签退
description: 签到签退数据主要用于控制微信支付凭证是否包含开发票入口、是否创建用户行程单
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| plate_number {data-required data-indent=1} | string | 车牌号
| driver_license {data-required data-indent=1} | string | 营运资格证号
| event_time {data-required data-indent=1} | string | 事件发生时间
| event_type {data-required data-indent=1} | string | 事件类型
| region_id {data-required data-indent=1} | integer | 行政区划ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->taxiInvoice->attendance->punch->postAsync([
  'json' => [
    'plate_number'   => '粤B12345',
    'driver_license' => '6298416',
    'event_time'     => '2019-12-01T12:00:00.000+08:00',
    'event_type'     => 'SIGN_IN',
    'region_id'      => 510100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/taxi-invoice/attendance/punch')->postAsync([
  'json' => [
    'plate_number'   => '粤B12345',
    'driver_license' => '6298416',
    'event_time'     => '2019-12-01T12:00:00.000+08:00',
    'event_type'     => 'SIGN_IN',
    'region_id'      => 510100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/taxi-invoice/attendance/punch']->postAsync([
  'json' => [
    'plate_number'   => '粤B12345',
    'driver_license' => '6298416',
    'event_time'     => '2019-12-01T12:00:00.000+08:00',
    'event_type'     => 'SIGN_IN',
    'region_id'      => 510100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->taxiInvoice->attendance->punch->post([
  'json' => [
    'plate_number'   => '粤B12345',
    'driver_license' => '6298416',
    'event_time'     => '2019-12-01T12:00:00.000+08:00',
    'event_type'     => 'SIGN_IN',
    'region_id'      => 510100,
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/taxi-invoice/attendance/punch')->post([
  'json' => [
    'plate_number'   => '粤B12345',
    'driver_license' => '6298416',
    'event_time'     => '2019-12-01T12:00:00.000+08:00',
    'event_type'     => 'SIGN_IN',
    'region_id'      => 510100,
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/taxi-invoice/attendance/punch']->post([
  'json' => [
    'plate_number'   => '粤B12345',
    'driver_license' => '6298416',
    'event_time'     => '2019-12-01T12:00:00.000+08:00',
    'event_type'     => 'SIGN_IN',
    'region_id'      => 510100,
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012461368)
