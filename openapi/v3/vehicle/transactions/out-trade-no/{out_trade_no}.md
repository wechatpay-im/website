---
title: 查询订单
description: 商户通过商户订单号，来查询订单信息
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_trade_no {data-required} | string | 商户订单号
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->vehicle->transactions->outTradeNo->_out_trade_no_->getAsync([
  'out_trade_no' => '20150806125346',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/vehicle/transactions/out-trade-no/{out_trade_no}')->getAsync([
  'out_trade_no' => '20150806125346',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/vehicle/transactions/out-trade-no/{out_trade_no}']->getAsync([
  'out_trade_no' => '20150806125346',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->vehicle->transactions->outTradeNo->_out_trade_no_->get([
  'out_trade_no' => '20150806125346',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/vehicle/transactions/out-trade-no/{out_trade_no}')->get([
  'out_trade_no' => '20150806125346',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/vehicle/transactions/out-trade-no/{out_trade_no}']->get([
  'out_trade_no' => '20150806125346',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| appid {data-required}| string | 应用ID
| sub_appid {data-required}| string | 子商户应用ID
| sp_mchid {data-required}| string | 商户号
| sub_mchid {data-required}| string | 子商户号
| description {data-required}| string | 服务描述
| create_time {data-required}| string | 订单创建时间
| out_trade_no {data-required}| string | 商户订单号
| transaction_id | string | 微信支付订单号
| trade_state {data-required}| string | 交易状态
| trade_state_description | string | 交易状态描述
| success_time | string | 支付完成时间
| bank_type | string | 付款银行
| user_repaid | string | 用户是否已还款
| attach | string | 附加数据
| trade_scene {data-required}| string | 交易场景
| parking_info | object {data-tooltip="对应PHP的array"} | 停车场景信息
| parking_id {data-required data-indent=1} | string | 停车入场id
| plate_number {data-required data-indent=1} | string | 车牌号
| plate_color {data-required data-indent=1} | string | 车牌颜色<br/>`BLUE` \| `GREEN` \| `YELLOW` \| `BLACK` \| `WHITE` \| `LIMEGREEN` 枚举值之一
| start_time {data-required data-indent=1} | string | 入场时间
| end_time {data-required data-indent=1} | string | 出场时间
| parking_name {data-required data-indent=1} | string | 停车场名称
| charging_duration {data-required data-indent=1} | integer | 计费时长
| device_id {data-required data-indent=1} | string | 停车场设备id
| payer {data-required}| object {data-tooltip="对应PHP的array"} | 支付者信息
| openid {data-required data-indent=1} | string | 用户在appid下的标识
| sub_openid {data-indent=1} | string | 用户在sub_appid下的标识
| amount {data-required}| object {data-tooltip="对应PHP的array"} | 订单金额信息
| total {data-required data-indent=1} | integer | 订单金额
| currency {data-required data-indent=1} | string | 货币类型
| payer_total {data-indent=1} | integer | 用户实际支付金额
| discount_total {data-indent=1} | integer | 折扣
| promotion_detail | object[] {data-tooltip="对应PHP的array"} | 优惠信息
| coupon_id {data-required data-indent=1} | string | 券ID
| name {data-indent=1} | string | 优惠名称
| scope {data-indent=1} | string | 优惠范围
| type {data-indent=1} | string | 优惠类型
| stock_id {data-indent=1} | string | 活动ID
| amount {data-required data-indent=1} | integer | 优惠券面额
| wechatpay_contribute {data-indent=1} | integer | 微信出资
| merchant_contribute {data-indent=1} | integer | 商户出资
| other_contribute {data-indent=1} | integer | 其他出资
| currency {data-indent=1} | string | 优惠币种

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_8_4.shtml)
