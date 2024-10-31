---
title: 创建停车入场
description: 车辆入场以后，商户调用该接口，创建停车入场信息。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 子商户号
| out_parking_no {data-indent=1} | string | 商户入场id
| plate_number {data-indent=1} | string | 车牌号
| plate_color {data-indent=1} | string | 车牌颜色<br/>`BLUE` \| `GREEN` \| `YELLOW` \| `BLACK` \| `WHITE` \| `LIMEGREEN` 枚举值之一
| notify_url {data-indent=1} | string | 回调通知url
| start_time {data-indent=1} | string | 入场时间
| parking_name {data-indent=1} | string | 停车场名称
| free_duration {data-indent=1} | integer | 免费时长
| headers | object | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 平台公钥ID/平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->vehicle->parking->parkings->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'out_parking_no' => '1231243',
    'plate_number' => '粤B888888',
    'plate_color' => 'BLUE',
    'notify_url' => 'https://yoursite.com/wxpay.html',
    'start_time' => '2017-08-26T10:43:39+08:00',
    'parking_name' => '欢乐海岸停车场',
    'free_duration' => 3600,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
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
    'sub_mchid' => '1900000109',
    'out_parking_no' => '1231243',
    'plate_number' => '粤B888888',
    'plate_color' => 'BLUE',
    'notify_url' => 'https://yoursite.com/wxpay.html',
    'start_time' => '2017-08-26T10:43:39+08:00',
    'parking_name' => '欢乐海岸停车场',
    'free_duration' => 3600,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
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
    'sub_mchid' => '1900000109',
    'out_parking_no' => '1231243',
    'plate_number' => '粤B888888',
    'plate_color' => 'BLUE',
    'notify_url' => 'https://yoursite.com/wxpay.html',
    'start_time' => '2017-08-26T10:43:39+08:00',
    'parking_name' => '欢乐海岸停车场',
    'free_duration' => 3600,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
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
    'sub_mchid' => '1900000109',
    'out_parking_no' => '1231243',
    'plate_number' => '粤B888888',
    'plate_color' => 'BLUE',
    'notify_url' => 'https://yoursite.com/wxpay.html',
    'start_time' => '2017-08-26T10:43:39+08:00',
    'parking_name' => '欢乐海岸停车场',
    'free_duration' => 3600,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/vehicle/parking/parkings')->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'out_parking_no' => '1231243',
    'plate_number' => '粤B888888',
    'plate_color' => 'BLUE',
    'notify_url' => 'https://yoursite.com/wxpay.html',
    'start_time' => '2017-08-26T10:43:39+08:00',
    'parking_name' => '欢乐海岸停车场',
    'free_duration' => 3600,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/vehicle/parking/parkings']->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'out_parking_no' => '1231243',
    'plate_number' => '粤B888888',
    'plate_color' => 'BLUE',
    'notify_url' => 'https://yoursite.com/wxpay.html',
    'start_time' => '2017-08-26T10:43:39+08:00',
    'parking_name' => '欢乐海岸停车场',
    'free_duration' => 3600,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| id | string | 停车入场id
| out_parking_no | string | 商户入场id
| plate_number | string | 车牌号
| start_time | string | 入场时间
| parking_name | string | 停车场名称
| free_duration | integer | 免费时长
| state | string | 停车入场状态
| block_reason | string | 不可用状态描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_8_2.shtml)
