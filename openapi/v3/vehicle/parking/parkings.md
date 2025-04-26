---
title: 创建停车入场
description: 车辆入场以后，商户调用该接口，创建停车入场信息。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-required data-indent=1} | string | 子商户号
| out_parking_no {data-required data-indent=1} | string | 商户入场id
| plate_number {data-required data-indent=1} | string | 车牌号
| plate_color {data-required data-indent=1} | string | 车牌颜色<br/>`BLUE` \| `GREEN` \| `YELLOW` \| `BLACK` \| `WHITE` \| `LIMEGREEN` 枚举值之一
| notify_url {data-required data-indent=1} | string | 回调通知url
| start_time {data-required data-indent=1} | string | 入场时间
| parking_name {data-required data-indent=1} | string | 停车场名称
| free_duration {data-required data-indent=1} | integer | 免费时长

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->vehicle->parking->parkings->postAsync([
  'json' => [
    'sub_mchid'      => '1900000109',
    'out_parking_no' => '1231243',
    'plate_number'   => '粤B888888',
    'plate_color'    => 'BLUE',
    'notify_url'     => 'https://yoursite.com/wxpay.html',
    'start_time'     => '2017-08-26T10:43:39+08:00',
    'parking_name'   => '欢乐海岸停车场',
    'free_duration'  => 3600,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/vehicle/parking/parkings')->postAsync([
  'json' => [
    'sub_mchid'      => '1900000109',
    'out_parking_no' => '1231243',
    'plate_number'   => '粤B888888',
    'plate_color'    => 'BLUE',
    'notify_url'     => 'https://yoursite.com/wxpay.html',
    'start_time'     => '2017-08-26T10:43:39+08:00',
    'parking_name'   => '欢乐海岸停车场',
    'free_duration'  => 3600,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/vehicle/parking/parkings']->postAsync([
  'json' => [
    'sub_mchid'      => '1900000109',
    'out_parking_no' => '1231243',
    'plate_number'   => '粤B888888',
    'plate_color'    => 'BLUE',
    'notify_url'     => 'https://yoursite.com/wxpay.html',
    'start_time'     => '2017-08-26T10:43:39+08:00',
    'parking_name'   => '欢乐海岸停车场',
    'free_duration'  => 3600,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->vehicle->parking->parkings->post([
  'json' => [
    'sub_mchid'      => '1900000109',
    'out_parking_no' => '1231243',
    'plate_number'   => '粤B888888',
    'plate_color'    => 'BLUE',
    'notify_url'     => 'https://yoursite.com/wxpay.html',
    'start_time'     => '2017-08-26T10:43:39+08:00',
    'parking_name'   => '欢乐海岸停车场',
    'free_duration'  => 3600,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/vehicle/parking/parkings')->post([
  'json' => [
    'sub_mchid'      => '1900000109',
    'out_parking_no' => '1231243',
    'plate_number'   => '粤B888888',
    'plate_color'    => 'BLUE',
    'notify_url'     => 'https://yoursite.com/wxpay.html',
    'start_time'     => '2017-08-26T10:43:39+08:00',
    'parking_name'   => '欢乐海岸停车场',
    'free_duration'  => 3600,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/vehicle/parking/parkings']->post([
  'json' => [
    'sub_mchid'      => '1900000109',
    'out_parking_no' => '1231243',
    'plate_number'   => '粤B888888',
    'plate_color'    => 'BLUE',
    'notify_url'     => 'https://yoursite.com/wxpay.html',
    'start_time'     => '2017-08-26T10:43:39+08:00',
    'parking_name'   => '欢乐海岸停车场',
    'free_duration'  => 3600,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| id {data-required} | string | 停车入场id
| out_parking_no {data-required} | string | 商户入场id
| plate_number {data-required} | string | 车牌号
| plate_color {data-required} | string | 车牌颜色<br/>`BLUE` \| `GREEN` \| `YELLOW` \| `BLACK` \| `WHITE` \| `LIMEGREEN` 枚举值之一
| start_time {data-required} | string | 入场时间
| parking_name {data-required} | string | 停车场名称
| free_duration {data-required} | integer | 免费时长
| state {data-required} | string | 停车入场状态<br/>`NORMAL` \| `BLOCKED` 枚举值之一
| block_reason | string | 不可用状态描述<br/>`PAUSE` \| `OVERDUE` \| `OUT_SERVICE` \| `EVALUATION_FAILED` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012533937) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012533994)
