---
title: 充电自行车代扣受理扣款
description: 通过调用该接口，为用户当次充电完成后发起代扣扣款，并同步返回受理结果。支付结果以回调通知为准，若返回超时，则主动查单。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 特约商户号
| appid {data-required data-indent=1} | string | 服务商公众号ID
| sub_appid {data-indent=1} | string | 特约商户公众号ID
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| attach {data-indent=1} | string | 附加字段
| goods_tag {data-indent=1} | string | 营销信息
| notify_url {data-required data-indent=1} | string | 通知url
| description {data-required data-indent=1} | string | 商品描述
| charging_token {data-required data-indent=1} | string | 用户充电代扣凭证
| amount {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 订单金额信息
| total {data-required data-indent=2} | integer | 订单总金额
| currency {data-indent=2} | string | 货币类型
| charge_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 充电自行车场景信息
| start_time {data-required data-indent=2} | string | 开始时间
| end_time {data-required data-indent=2} | string | 结束时间
| charging_station_name {data-required data-indent=2} | string | 充电站名称
| charging_gun_number {data-required data-indent=2} | string | 充电枪编号
| charged_capacity {data-required data-indent=2} | integer | 已充电量
| park_duration {data-indent=2} | integer | 车位延时占用时长
| park_fee {data-indent=2} | integer | 车位延时占用产生的费用
| device_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 设备信息
| device_id {data-required data-indent=2} | string | 充电位设备号
| device_ip {data-required data-indent=2} | string | 商户端设备ip

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ebike->charge->transactions->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wxd678efh567hg678',
    'sub_appid' => 'wxd678efh567hg6999',
    'out_trade_no' => '121775250124070332',
    'attach' => '自定义数据',
    'goods_tag' => 'test',
    'notify_url' => 'http://1111:111/metro-spt-api/callback',
    'description' => '商品信息',
    'charging_token' => 'sdjf23kdsHJfdk',
    'amount' => [
      'total' => 888,
      'currency' => 'CNY',
    ],
    'charge_info' => [
      'start_time' => '2017-08-26T09:43:39+08:00',
      'end_time' => '2017-08-26T09:43:39+08:00',
      'charging_station_name' => 'xxx充电站',
      'charging_gun_number' => '6555',
      'charged_capacity' => 10,
      'park_duration' => 60,
      'park_fee' => 100,
    ],
    'device_info' => [
      'device_id' => '12343232',
      'device_ip' => '123.12.12.123',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ebike/charge/transactions')->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wxd678efh567hg678',
    'sub_appid' => 'wxd678efh567hg6999',
    'out_trade_no' => '121775250124070332',
    'attach' => '自定义数据',
    'goods_tag' => 'test',
    'notify_url' => 'http://1111:111/metro-spt-api/callback',
    'description' => '商品信息',
    'charging_token' => 'sdjf23kdsHJfdk',
    'amount' => [
      'total' => 888,
      'currency' => 'CNY',
    ],
    'charge_info' => [
      'start_time' => '2017-08-26T09:43:39+08:00',
      'end_time' => '2017-08-26T09:43:39+08:00',
      'charging_station_name' => 'xxx充电站',
      'charging_gun_number' => '6555',
      'charged_capacity' => 10,
      'park_duration' => 60,
      'park_fee' => 100,
    ],
    'device_info' => [
      'device_id' => '12343232',
      'device_ip' => '123.12.12.123',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ebike/charge/transactions']->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wxd678efh567hg678',
    'sub_appid' => 'wxd678efh567hg6999',
    'out_trade_no' => '121775250124070332',
    'attach' => '自定义数据',
    'goods_tag' => 'test',
    'notify_url' => 'http://1111:111/metro-spt-api/callback',
    'description' => '商品信息',
    'charging_token' => 'sdjf23kdsHJfdk',
    'amount' => [
      'total' => 888,
      'currency' => 'CNY',
    ],
    'charge_info' => [
      'start_time' => '2017-08-26T09:43:39+08:00',
      'end_time' => '2017-08-26T09:43:39+08:00',
      'charging_station_name' => 'xxx充电站',
      'charging_gun_number' => '6555',
      'charged_capacity' => 10,
      'park_duration' => 60,
      'park_fee' => 100,
    ],
    'device_info' => [
      'device_id' => '12343232',
      'device_ip' => '123.12.12.123',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ebike->charge->transactions->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wxd678efh567hg678',
    'sub_appid' => 'wxd678efh567hg6999',
    'out_trade_no' => '121775250124070332',
    'attach' => '自定义数据',
    'goods_tag' => 'test',
    'notify_url' => 'http://1111:111/metro-spt-api/callback',
    'description' => '商品信息',
    'charging_token' => 'sdjf23kdsHJfdk',
    'amount' => [
      'total' => 888,
      'currency' => 'CNY',
    ],
    'charge_info' => [
      'start_time' => '2017-08-26T09:43:39+08:00',
      'end_time' => '2017-08-26T09:43:39+08:00',
      'charging_station_name' => 'xxx充电站',
      'charging_gun_number' => '6555',
      'charged_capacity' => 10,
      'park_duration' => 60,
      'park_fee' => 100,
    ],
    'device_info' => [
      'device_id' => '12343232',
      'device_ip' => '123.12.12.123',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ebike/charge/transactions')->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wxd678efh567hg678',
    'sub_appid' => 'wxd678efh567hg6999',
    'out_trade_no' => '121775250124070332',
    'attach' => '自定义数据',
    'goods_tag' => 'test',
    'notify_url' => 'http://1111:111/metro-spt-api/callback',
    'description' => '商品信息',
    'charging_token' => 'sdjf23kdsHJfdk',
    'amount' => [
      'total' => 888,
      'currency' => 'CNY',
    ],
    'charge_info' => [
      'start_time' => '2017-08-26T09:43:39+08:00',
      'end_time' => '2017-08-26T09:43:39+08:00',
      'charging_station_name' => 'xxx充电站',
      'charging_gun_number' => '6555',
      'charged_capacity' => 10,
      'park_duration' => 60,
      'park_fee' => 100,
    ],
    'device_info' => [
      'device_id' => '12343232',
      'device_ip' => '123.12.12.123',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ebike/charge/transactions']->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wxd678efh567hg678',
    'sub_appid' => 'wxd678efh567hg6999',
    'out_trade_no' => '121775250124070332',
    'attach' => '自定义数据',
    'goods_tag' => 'test',
    'notify_url' => 'http://1111:111/metro-spt-api/callback',
    'description' => '商品信息',
    'charging_token' => 'sdjf23kdsHJfdk',
    'amount' => [
      'total' => 888,
      'currency' => 'CNY',
    ],
    'charge_info' => [
      'start_time' => '2017-08-26T09:43:39+08:00',
      'end_time' => '2017-08-26T09:43:39+08:00',
      'charging_station_name' => 'xxx充电站',
      'charging_gun_number' => '6555',
      'charged_capacity' => 10,
      'park_duration' => 60,
      'park_fee' => 100,
    ],
    'device_info' => [
      'device_id' => '12343232',
      'device_ip' => '123.12.12.123',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| accept_state {data-required}| string | 受理状态
| create_time | string | 订单创建时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/vehicle/ebike/chapter3_5.shtml)
