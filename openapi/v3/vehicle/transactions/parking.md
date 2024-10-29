---
title: 扣费受理
description: 商户请求扣费受理接口，会完成订单受理。微信支付进行异步扣款，支付完成后，会将订单支付结果发送给商户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| appid {data-indent=1} | string | 应用ID
| sub_appid {data-indent=1} | string | 子商户应用ID
| sub_mchid {data-indent=1} | string | 子商户号
| description {data-indent=1} | string | 服务描述
| attach {data-indent=1} | string | 附加数据
| out_trade_no {data-indent=1} | string | 商户订单号
| trade_scene {data-indent=1} | string | 交易场景
| goods_tag {data-indent=1} | string | 订单优惠标记
| notify_url {data-indent=1} | string | 回调通知url
| profit_sharing {data-indent=1} | string | 分账标识
| amount {data-indent=1} | object | 订单金额
| total {data-indent=2} | integer | 订单金额
| currency {data-indent=2} | string | 货币类型
| parking_info {data-indent=1} | object | 停车场景信息
| parking_id {data-indent=2} | string | 停车入场id
| plate_number {data-indent=2} | string | 车牌号
| plate_color {data-indent=2} | string | 车牌颜色
| start_time {data-indent=2} | string | 入场时间
| end_time {data-indent=2} | string | 出场时间
| parking_name {data-indent=2} | string | 停车场名称
| charging_duration {data-indent=2} | integer | 计费时长
| device_id {data-indent=2} | string | 停车场设备id

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->vehicle->transactions->parking->postAsync([
  'json' => [
    'appid' => 'wxcbda96de0b165486',
    'sub_appid' => 'wxcbda96de0b165486',
    'sub_mchid' => '1900000109',
    'description' => '停车场扣费',
    'attach' => '深圳分店',
    'out_trade_no' => '20150806125346',
    'trade_scene' => 'PARKING',
    'goods_tag' => 'WXG',
    'notify_url' => 'https://yoursite.com/wxpay.html',
    'profit_sharing' => 'Y',
    'amount' => [
      'total' => 888,
      'currency' => 'CNY',
    ],
    'parking_info' => [
      'parking_id' => '5K8264ILTKCH16CQ250',
      'plate_number' => '粤B888888',
      'plate_color' => 'BLUE',
      'start_time' => '2017-08-26T10:43:39+08:00',
      'end_time' => '2017-08-26T10:43:39+08:00',
      'parking_name' => '欢乐海岸停车场',
      'charging_duration' => 3600,
      'device_id' => '12313',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/vehicle/transactions/parking')->postAsync([
  'json' => [
    'appid' => 'wxcbda96de0b165486',
    'sub_appid' => 'wxcbda96de0b165486',
    'sub_mchid' => '1900000109',
    'description' => '停车场扣费',
    'attach' => '深圳分店',
    'out_trade_no' => '20150806125346',
    'trade_scene' => 'PARKING',
    'goods_tag' => 'WXG',
    'notify_url' => 'https://yoursite.com/wxpay.html',
    'profit_sharing' => 'Y',
    'amount' => [
      'total' => 888,
      'currency' => 'CNY',
    ],
    'parking_info' => [
      'parking_id' => '5K8264ILTKCH16CQ250',
      'plate_number' => '粤B888888',
      'plate_color' => 'BLUE',
      'start_time' => '2017-08-26T10:43:39+08:00',
      'end_time' => '2017-08-26T10:43:39+08:00',
      'parking_name' => '欢乐海岸停车场',
      'charging_duration' => 3600,
      'device_id' => '12313',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/vehicle/transactions/parking']->postAsync([
  'json' => [
    'appid' => 'wxcbda96de0b165486',
    'sub_appid' => 'wxcbda96de0b165486',
    'sub_mchid' => '1900000109',
    'description' => '停车场扣费',
    'attach' => '深圳分店',
    'out_trade_no' => '20150806125346',
    'trade_scene' => 'PARKING',
    'goods_tag' => 'WXG',
    'notify_url' => 'https://yoursite.com/wxpay.html',
    'profit_sharing' => 'Y',
    'amount' => [
      'total' => 888,
      'currency' => 'CNY',
    ],
    'parking_info' => [
      'parking_id' => '5K8264ILTKCH16CQ250',
      'plate_number' => '粤B888888',
      'plate_color' => 'BLUE',
      'start_time' => '2017-08-26T10:43:39+08:00',
      'end_time' => '2017-08-26T10:43:39+08:00',
      'parking_name' => '欢乐海岸停车场',
      'charging_duration' => 3600,
      'device_id' => '12313',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->vehicle->transactions->parking->post([
  'json' => [
    'appid' => 'wxcbda96de0b165486',
    'sub_appid' => 'wxcbda96de0b165486',
    'sub_mchid' => '1900000109',
    'description' => '停车场扣费',
    'attach' => '深圳分店',
    'out_trade_no' => '20150806125346',
    'trade_scene' => 'PARKING',
    'goods_tag' => 'WXG',
    'notify_url' => 'https://yoursite.com/wxpay.html',
    'profit_sharing' => 'Y',
    'amount' => [
      'total' => 888,
      'currency' => 'CNY',
    ],
    'parking_info' => [
      'parking_id' => '5K8264ILTKCH16CQ250',
      'plate_number' => '粤B888888',
      'plate_color' => 'BLUE',
      'start_time' => '2017-08-26T10:43:39+08:00',
      'end_time' => '2017-08-26T10:43:39+08:00',
      'parking_name' => '欢乐海岸停车场',
      'charging_duration' => 3600,
      'device_id' => '12313',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/vehicle/transactions/parking')->post([
  'json' => [
    'appid' => 'wxcbda96de0b165486',
    'sub_appid' => 'wxcbda96de0b165486',
    'sub_mchid' => '1900000109',
    'description' => '停车场扣费',
    'attach' => '深圳分店',
    'out_trade_no' => '20150806125346',
    'trade_scene' => 'PARKING',
    'goods_tag' => 'WXG',
    'notify_url' => 'https://yoursite.com/wxpay.html',
    'profit_sharing' => 'Y',
    'amount' => [
      'total' => 888,
      'currency' => 'CNY',
    ],
    'parking_info' => [
      'parking_id' => '5K8264ILTKCH16CQ250',
      'plate_number' => '粤B888888',
      'plate_color' => 'BLUE',
      'start_time' => '2017-08-26T10:43:39+08:00',
      'end_time' => '2017-08-26T10:43:39+08:00',
      'parking_name' => '欢乐海岸停车场',
      'charging_duration' => 3600,
      'device_id' => '12313',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/vehicle/transactions/parking']->post([
  'json' => [
    'appid' => 'wxcbda96de0b165486',
    'sub_appid' => 'wxcbda96de0b165486',
    'sub_mchid' => '1900000109',
    'description' => '停车场扣费',
    'attach' => '深圳分店',
    'out_trade_no' => '20150806125346',
    'trade_scene' => 'PARKING',
    'goods_tag' => 'WXG',
    'notify_url' => 'https://yoursite.com/wxpay.html',
    'profit_sharing' => 'Y',
    'amount' => [
      'total' => 888,
      'currency' => 'CNY',
    ],
    'parking_info' => [
      'parking_id' => '5K8264ILTKCH16CQ250',
      'plate_number' => '粤B888888',
      'plate_color' => 'BLUE',
      'start_time' => '2017-08-26T10:43:39+08:00',
      'end_time' => '2017-08-26T10:43:39+08:00',
      'parking_name' => '欢乐海岸停车场',
      'charging_duration' => 3600,
      'device_id' => '12313',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| appid | string | 应用ID
| sub_appid | string | 子商户应用ID
| sp_mchid | string | 商户号
| sub_mchid | string | 子商户号
| description | string | 服务描述
| create_time | string | 订单创建时间
| out_trade_no | string | 商户订单号
| transaction_id | string | 微信支付订单号
| trade_state | string | 交易状态
| trade_state_description | string | 交易状态描述
| success_time | string | 支付完成时间
| bank_type | string | 付款银行
| user_repaid | string | 用户是否已还款
| attach | string | 附加数据
| trade_scene | string | 交易场景
| parking_info | object | 停车场景信息
| parking_id {data-indent=1} | string | 停车入场id
| plate_number {data-indent=1} | string | 车牌号
| start_time {data-indent=1} | string | 入场时间
| end_time {data-indent=1} | string | 出场时间
| parking_name {data-indent=1} | string | 停车场名称
| charging_duration {data-indent=1} | integer | 计费时长
| device_id {data-indent=1} | string | 停车场设备id
| payer | object | 支付者信息
| openid {data-indent=1} | string | 用户在appid下的标识
| sub_openid {data-indent=1} | string | 用户在sub_appid下的标识
| amount | object | 订单金额信息
| total {data-indent=1} | integer | 订单金额
| currency {data-indent=1} | string | 货币类型
| payer_total {data-indent=1} | integer | 用户实际支付金额
| discount_total {data-indent=1} | integer | 折扣
| promotion_detail | object[] | 优惠信息
| coupon_id {data-indent=1} | string | 券ID
| name {data-indent=1} | string | 优惠名称
| scope {data-indent=1} | string | 优惠范围
| type {data-indent=1} | string | 优惠类型
| stock_id {data-indent=1} | string | 活动ID
| amount {data-indent=1} | integer | 优惠券面额
| wechatpay_contribute {data-indent=1} | integer | 微信出资
| merchant_contribute {data-indent=1} | integer | 商户出资
| other_contribute {data-indent=1} | integer | 其他出资
| currency {data-indent=1} | string | 优惠币种

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_8_3.shtml)
