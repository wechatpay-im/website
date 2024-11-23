---
title: 查询订单
description: 可通过“微信订单号”和“商户订单号”两种方式查单，两种方式查单，返回结果相同。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_trade_no {data-required} | string | 商户订单号
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 特约商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->vehicle->etc->transactions->outTradeNo->_out_trade_no_->getAsync([
  'out_trade_no' => '121775250124070332',
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
$instance->chain('v3/vehicle/etc/transactions/out-trade-no/{out_trade_no}')->getAsync([
  'out_trade_no' => '121775250124070332',
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
$instance['v3/vehicle/etc/transactions/out-trade-no/{out_trade_no}']->getAsync([
  'out_trade_no' => '121775250124070332',
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
$response = $instance->v3->vehicle->etc->transactions->outTradeNo->_out_trade_no_->get([
  'out_trade_no' => '121775250124070332',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/vehicle/etc/transactions/out-trade-no/{out_trade_no}')->get([
  'out_trade_no' => '121775250124070332',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/vehicle/etc/transactions/out-trade-no/{out_trade_no}']->get([
  'out_trade_no' => '121775250124070332',
  'query' => [
    'sub_mchid' => '1900000109',
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

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_4_8.shtml)
