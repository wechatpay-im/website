---
title: 查询订单
description: 可通过“商户订单号”和“微信订单号”两种方式查单。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| transaction_id | string | 微信支付订单号
| query | object | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 特约商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ebike->charge->transactions->id->_transaction_id_->getAsync([
  'transaction_id' => '25012014070332333018',
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
$instance->chain('v3/ebike/charge/transactions/id/{transaction_id}')->getAsync([
  'transaction_id' => '25012014070332333018',
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
$instance['v3/ebike/charge/transactions/id/{transaction_id}']->getAsync([
  'transaction_id' => '25012014070332333018',
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
$response = $instance->v3->ebike->charge->transactions->id->_transaction_id_->get([
  'transaction_id' => '25012014070332333018',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ebike/charge/transactions/id/{transaction_id}')->get([
  'transaction_id' => '25012014070332333018',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ebike/charge/transactions/id/{transaction_id}']->get([
  'transaction_id' => '25012014070332333018',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mchid | string | 商户号
| sub_mchid | string | 特约商户号
| appid | string | 服务商公众号ID
| sub_appid | string | 特约商户公众号ID
| out_trade_no | string | 商户订单号
| transaction_id | string | 微信订单号
| attach | string | 商户数据
| trade_type | string | 交易类型
| bank_type | string | 银行类型
| success_time | string | 成功时间
| trade_state | string | 交易状态
| trade_state_des | string | 交易状态描述
| contract_id | string | 充电授权扣费协议号
| payer | object | 支付者信息
| openid {data-indent=1} | string | 用户在服务商的标识
| sub_openid {data-indent=1} | string | 用户在特约商户的标识
| amount | object | 订单金额信息
| total {data-indent=1} | integer | 订单金额
| currency {data-indent=1} | string | 货币类型
| payer_total {data-indent=1} | integer | 用户实际支付金额
| discount_total {data-indent=1} | integer | 折扣
| device_info | object | 设备信息
| device_id {data-indent=1} | string | 充电位设备号
| device_ip {data-indent=1} | string | 商户端设备ip
| promotion_detail | object[] | 优惠信息
| promotion_id {data-indent=1} | string | 券ID
| name {data-indent=1} | string | 优惠名称
| scope {data-indent=1} | string | 优惠范围
| type {data-indent=1} | string | 优惠类型
| activity_id {data-indent=1} | string | 活动ID
| amount {data-indent=1} | integer | 优惠券面额
| wxpay_contribute {data-indent=1} | integer | 微信出资
| merchant_contribute {data-indent=1} | integer | 商户出资
| other_contribute {data-indent=1} | integer | 其他出资

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/vehicle/ebike/chapter3_6.shtml)
