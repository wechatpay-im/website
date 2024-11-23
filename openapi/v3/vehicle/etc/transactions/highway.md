---
title: 高速场景商户扣款
description: ETC高速场景订单扣款下单
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| sub_mchid {data-indent=1} | string | 特约商户号
| appid {data-required data-indent=1} | string | 商户appid
| sub_appid {data-indent=1} | string | 特约商户appid
| contract_id {data-required data-indent=1} | string | ETC扣费授权协议号
| description {data-required data-indent=1} | string | 商品信息
| attach {data-indent=1} | string | 附加信息
| goods_tag {data-indent=1} | string | 营销信息
| highway_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 高速场景信息
| plate_number {data-required data-indent=2} | string | 车牌号
| start_time {data-required data-indent=2} | string | 入站时间
| end_time {data-required data-indent=2} | string | 出站时间
| channel_type {data-required data-indent=2} | string | 通道类型
| car_type {data-indent=2} | string | 车辆类型
| entrance {data-required data-indent=2} | string | 入口名称
| exit {data-indent=2} | string | 出口名称
| carrying_capacity {data-indent=2} | integer | 承载人数
| carrying_range {data-indent=2} | string | 荷载范围
| amount {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 订单金额
| total {data-indent=2} | integer | 订单金额
| currency {data-indent=2} | string | 货币类型
| device_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 设备信息
| device_id {data-indent=2} | string | 商户端设备号
| device_ip {data-required data-indent=2} | string | 商户端设备IP

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->vehicle->etc->transactions->highway->postAsync([
  'json' => [
    'out_trade_no' => '121775250124070332',
    'sub_mchid' => '1900000109',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6999',
    'contract_id' => 'wxd678ef4Fwxd678ef4Fwxd678ef4F21',
    'description' => '商品信息',
    'attach' => '自定义数据',
    'goods_tag' => 'test',
    'highway_info' => [
      'plate_number' => '粤B888888',
      'start_time' => '2017-08-26T09:43:39+08:00',
      'end_time' => '2017-08-26T09:43:39+08:00',
      'channel_type' => 'ETC',
      'car_type' => 'CAR',
      'entrance' => '沿江深圳-大铲湾',
      'exit' => '广珠东线-珠海站',
      'carrying_capacity' => 3,
      'carrying_range' => '6-12',
    ],
    'amount' => [
      'total' => 888,
      'currency' => 'CNY',
    ],
    'device_info' => [
      'device_id' => 'POS1:1',
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
$instance->chain('v3/vehicle/etc/transactions/highway')->postAsync([
  'json' => [
    'out_trade_no' => '121775250124070332',
    'sub_mchid' => '1900000109',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6999',
    'contract_id' => 'wxd678ef4Fwxd678ef4Fwxd678ef4F21',
    'description' => '商品信息',
    'attach' => '自定义数据',
    'goods_tag' => 'test',
    'highway_info' => [
      'plate_number' => '粤B888888',
      'start_time' => '2017-08-26T09:43:39+08:00',
      'end_time' => '2017-08-26T09:43:39+08:00',
      'channel_type' => 'ETC',
      'car_type' => 'CAR',
      'entrance' => '沿江深圳-大铲湾',
      'exit' => '广珠东线-珠海站',
      'carrying_capacity' => 3,
      'carrying_range' => '6-12',
    ],
    'amount' => [
      'total' => 888,
      'currency' => 'CNY',
    ],
    'device_info' => [
      'device_id' => 'POS1:1',
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
$instance['v3/vehicle/etc/transactions/highway']->postAsync([
  'json' => [
    'out_trade_no' => '121775250124070332',
    'sub_mchid' => '1900000109',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6999',
    'contract_id' => 'wxd678ef4Fwxd678ef4Fwxd678ef4F21',
    'description' => '商品信息',
    'attach' => '自定义数据',
    'goods_tag' => 'test',
    'highway_info' => [
      'plate_number' => '粤B888888',
      'start_time' => '2017-08-26T09:43:39+08:00',
      'end_time' => '2017-08-26T09:43:39+08:00',
      'channel_type' => 'ETC',
      'car_type' => 'CAR',
      'entrance' => '沿江深圳-大铲湾',
      'exit' => '广珠东线-珠海站',
      'carrying_capacity' => 3,
      'carrying_range' => '6-12',
    ],
    'amount' => [
      'total' => 888,
      'currency' => 'CNY',
    ],
    'device_info' => [
      'device_id' => 'POS1:1',
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
$response = $instance->v3->vehicle->etc->transactions->highway->post([
  'json' => [
    'out_trade_no' => '121775250124070332',
    'sub_mchid' => '1900000109',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6999',
    'contract_id' => 'wxd678ef4Fwxd678ef4Fwxd678ef4F21',
    'description' => '商品信息',
    'attach' => '自定义数据',
    'goods_tag' => 'test',
    'highway_info' => [
      'plate_number' => '粤B888888',
      'start_time' => '2017-08-26T09:43:39+08:00',
      'end_time' => '2017-08-26T09:43:39+08:00',
      'channel_type' => 'ETC',
      'car_type' => 'CAR',
      'entrance' => '沿江深圳-大铲湾',
      'exit' => '广珠东线-珠海站',
      'carrying_capacity' => 3,
      'carrying_range' => '6-12',
    ],
    'amount' => [
      'total' => 888,
      'currency' => 'CNY',
    ],
    'device_info' => [
      'device_id' => 'POS1:1',
      'device_ip' => '123.12.12.123',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/vehicle/etc/transactions/highway')->post([
  'json' => [
    'out_trade_no' => '121775250124070332',
    'sub_mchid' => '1900000109',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6999',
    'contract_id' => 'wxd678ef4Fwxd678ef4Fwxd678ef4F21',
    'description' => '商品信息',
    'attach' => '自定义数据',
    'goods_tag' => 'test',
    'highway_info' => [
      'plate_number' => '粤B888888',
      'start_time' => '2017-08-26T09:43:39+08:00',
      'end_time' => '2017-08-26T09:43:39+08:00',
      'channel_type' => 'ETC',
      'car_type' => 'CAR',
      'entrance' => '沿江深圳-大铲湾',
      'exit' => '广珠东线-珠海站',
      'carrying_capacity' => 3,
      'carrying_range' => '6-12',
    ],
    'amount' => [
      'total' => 888,
      'currency' => 'CNY',
    ],
    'device_info' => [
      'device_id' => 'POS1:1',
      'device_ip' => '123.12.12.123',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/vehicle/etc/transactions/highway']->post([
  'json' => [
    'out_trade_no' => '121775250124070332',
    'sub_mchid' => '1900000109',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6999',
    'contract_id' => 'wxd678ef4Fwxd678ef4Fwxd678ef4F21',
    'description' => '商品信息',
    'attach' => '自定义数据',
    'goods_tag' => 'test',
    'highway_info' => [
      'plate_number' => '粤B888888',
      'start_time' => '2017-08-26T09:43:39+08:00',
      'end_time' => '2017-08-26T09:43:39+08:00',
      'channel_type' => 'ETC',
      'car_type' => 'CAR',
      'entrance' => '沿江深圳-大铲湾',
      'exit' => '广珠东线-珠海站',
      'carrying_capacity' => 3,
      'carrying_range' => '6-12',
    ],
    'amount' => [
      'total' => 888,
      'currency' => 'CNY',
    ],
    'device_info' => [
      'device_id' => 'POS1:1',
      'device_ip' => '123.12.12.123',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mchid {data-required}| string | 商户号
| sub_mchid | string | 特约商户号
| appid {data-required}| string | 商户appid
| sub_appid | string | 特约商户appid
| out_trade_no {data-required}| string | 商户订单号
| transaction_id {data-required}| string | 微信支付订单号
| attach | string | 商户数据
| trade_type {data-required}| string | 交易类型
| bank_type | string | 付款银行
| success_time | string | 支付完成时间
| trade_state {data-required}| string | 交易状态
| trade_state_desc | string | 交易状态描述
| payer | object {data-tooltip="对应PHP的array"} | 支付者
| sp_openid {data-indent=1} | string | 用户在服务商APP的标识
| sub_openid {data-indent=1} | string | 用户在特约商户APP的标识
| amount {data-required}| object {data-tooltip="对应PHP的array"} | 订单金额
| total {data-required data-indent=1} | integer | 订单金额
| currency {data-indent=1} | string | 货币类型
| payer_total {data-indent=1} | integer | 用户实际支付金额
| discount_total {data-indent=1} | integer | 折扣
| device_info | object {data-tooltip="对应PHP的array"} | 设备信息
| device_id {data-indent=1} | string | 商户端设备号
| device_ip {data-indent=1} | string | 商户端设备IP
| promotion_detail | object[] {data-tooltip="对应PHP的array"} | 优惠详情
| promotion_id {data-required data-indent=1} | string | 券ID
| name {data-indent=1} | string | 优惠名称
| scope {data-indent=1} | string | 优惠范围
| type {data-indent=1} | string | 优惠类型
| activity_id {data-indent=1} | string | 活动ID
| amount {data-required data-indent=1} | integer | 优惠券面额
| wxpay_contribute {data-indent=1} | integer | 微信出资
| merchant_contribute {data-indent=1} | integer | 商户出资
| other_contribute {data-indent=1} | integer | 其他出资

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_4_3.shtml)
