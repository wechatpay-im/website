---
title: 同步车辆入场通知
description: 对商户提供同步车辆入场通知接口
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_serial_number {data-required data-indent=1} | string | 商户停车单号
| parking_id {data-required data-indent=1} | string | 微信停车场ID
| plate_number {data-required data-indent=1} | string | 车牌号
| enter_timestamp {data-required data-indent=1} | integer | 车辆入场时间
| plate_color {data-required data-indent=1} | string | 车牌颜色<br/>`PLATE_COLOR_UNKNOWN` \| `PLATE_COLOR_BLUE` \| `PLATE_COLOR_YELLOW` \| `PLATE_COLOR_BLACK` \| `PLATE_COLOR_WHITE` \| `PLATE_COLOR_GREEN` \| `PLATE_COLOR_YELLOW_GREEN` \| `PLATE_COLOR_AGRICULTURAL_YELLOW` \| `PLATE_COLOR_OTHER` 枚举值之一
| car_type {data-required data-indent=1} | string | 车辆性质<br/>`PLATE_TYPE_UNKNOWN` \| `PLATE_TYPE_TEMPORARY` \| `PLATE_TYPE_MONTHLY` \| `PLATE_TYPE_FREE` \| `PLATE_TYPE_PREPAID` \| `PLATE_TYPE_OTHERS` 枚举值之一
| vehicle_type {data-required data-indent=1} | string | 车辆类型<br/>`VEHICLE_TYPE_UNKNOWN` \| `VEHICLE_TYPE_SMALL` \| `VEHICLE_TYPE_LARGE` \| `VEHICLE_TYPE_EXTRA_LARGE` \| `VEHICLE_TYPE_ALL_TYPE` 枚举值之一
| entrance_number {data-indent=1} | string | 停车场入口编号
| entrance_name {data-indent=1} | string | 停车场入口名称
| discount_template_id {data-indent=1} | integer[] | 优惠信息模板ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->parking->reminders->entry->postAsync([
  'json' => [
    'out_serial_number'    => 'PARK202407041530001',
    'parking_id'           => 'WXPARK001',
    'plate_number'         => '粤B12345',
    'enter_timestamp'      => 1720078200,
    'plate_color'          => 'PLATE_COLOR_BLUE',
    'car_type'             => 'PLATE_TYPE_TEMPORARY',
    'vehicle_type'         => 'VEHICLE_TYPE_SMALL',
    'entrance_number'      => 'A01',
    'entrance_name'        => '南门入口',
    'discount_template_id' => [1001],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/parking/reminders/entry')->postAsync([
  'json' => [
    'out_serial_number'    => 'PARK202407041530001',
    'parking_id'           => 'WXPARK001',
    'plate_number'         => '粤B12345',
    'enter_timestamp'      => 1720078200,
    'plate_color'          => 'PLATE_COLOR_BLUE',
    'car_type'             => 'PLATE_TYPE_TEMPORARY',
    'vehicle_type'         => 'VEHICLE_TYPE_SMALL',
    'entrance_number'      => 'A01',
    'entrance_name'        => '南门入口',
    'discount_template_id' => [1001],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/parking/reminders/entry']->postAsync([
  'json' => [
    'out_serial_number'    => 'PARK202407041530001',
    'parking_id'           => 'WXPARK001',
    'plate_number'         => '粤B12345',
    'enter_timestamp'      => 1720078200,
    'plate_color'          => 'PLATE_COLOR_BLUE',
    'car_type'             => 'PLATE_TYPE_TEMPORARY',
    'vehicle_type'         => 'VEHICLE_TYPE_SMALL',
    'entrance_number'      => 'A01',
    'entrance_name'        => '南门入口',
    'discount_template_id' => [1001],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->parking->reminders->entry->post([
  'json' => [
    'out_serial_number'    => 'PARK202407041530001',
    'parking_id'           => 'WXPARK001',
    'plate_number'         => '粤B12345',
    'enter_timestamp'      => 1720078200,
    'plate_color'          => 'PLATE_COLOR_BLUE',
    'car_type'             => 'PLATE_TYPE_TEMPORARY',
    'vehicle_type'         => 'VEHICLE_TYPE_SMALL',
    'entrance_number'      => 'A01',
    'entrance_name'        => '南门入口',
    'discount_template_id' => [1001],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/parking/reminders/entry')->post([
  'json' => [
    'out_serial_number'    => 'PARK202407041530001',
    'parking_id'           => 'WXPARK001',
    'plate_number'         => '粤B12345',
    'enter_timestamp'      => 1720078200,
    'plate_color'          => 'PLATE_COLOR_BLUE',
    'car_type'             => 'PLATE_TYPE_TEMPORARY',
    'vehicle_type'         => 'VEHICLE_TYPE_SMALL',
    'entrance_number'      => 'A01',
    'entrance_name'        => '南门入口',
    'discount_template_id' => [1001],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/parking/reminders/entry']->post([
  'json' => [
    'out_serial_number'    => 'PARK202407041530001',
    'parking_id'           => 'WXPARK001',
    'plate_number'         => '粤B12345',
    'enter_timestamp'      => 1720078200,
    'plate_color'          => 'PLATE_COLOR_BLUE',
    'car_type'             => 'PLATE_TYPE_TEMPORARY',
    'vehicle_type'         => 'VEHICLE_TYPE_SMALL',
    'entrance_number'      => 'A01',
    'entrance_name'        => '南门入口',
    'discount_template_id' => [1001],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| serial_number | string | 微信停车单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4019557757)
