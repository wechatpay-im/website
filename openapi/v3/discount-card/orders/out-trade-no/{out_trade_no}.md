---
title: 通过先享卡订单号查询订单
description: 商户可以通过先享卡订单号或商户订单号查询用户目前的先享卡使用情况、订单状态，可用于对账或者界面展示。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

::: danger :no_entry_sign: {.im-deprecated}

本接口服务已于 `2020.03.26` (北京时间)下线，文档仅做留存参考。
:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_trade_no | string | 商户订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->discountCard->orders->outTradeNo->_out_trade_no_->getAsync([
  'out_trade_no' => '6e8369071cd942c0476613f9d1ce9ca3',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/discount-card/orders/out-trade-no/{out_trade_no}')->getAsync([
  'out_trade_no' => '6e8369071cd942c0476613f9d1ce9ca3',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/discount-card/orders/out-trade-no/{out_trade_no}']->getAsync([
  'out_trade_no' => '6e8369071cd942c0476613f9d1ce9ca3',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->discountCard->orders->outTradeNo->_out_trade_no_->get([
  'out_trade_no' => '6e8369071cd942c0476613f9d1ce9ca3',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/discount-card/orders/out-trade-no/{out_trade_no}')->get([
  'out_trade_no' => '6e8369071cd942c0476613f9d1ce9ca3',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/discount-card/orders/out-trade-no/{out_trade_no}']->get([
  'out_trade_no' => '6e8369071cd942c0476613f9d1ce9ca3',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no | string | 先享卡订单号
| discount_card_id | string | 先享卡ID
| out_trade_no | string | 商户订单号
| appid | string | 公众账号ID
| service_id | string | 服务ID
| order_id | string | 微信支付服务订单号
| transaction_id | string | 微信支付交易单号
| openid | string | 用户标识
| card_begin_time | string | 先享卡开始时间
| card_end_time | string | 先享卡结束时间
| card_name | string | 先享卡名称
| objective_description | string | 目标描述
| reward_description | string | 奖励描述
| estimated_reward_amount | integer | 预估奖励金额
| online_instructions | string | 线上使用说明
| offline_instructions | string | 线下使用说明
| state | string | 订单状态
| total_amount | integer | 总金额
| deduction_amount | integer | 扣除金额
| settlement_amount | integer | 结算金额
| create_time | string | 创建时间
| pay_time | string | 支付时间
| objectives | object[] | 目标达成明细列表
| objective_serial_no {data-indent=1} | string | 目标流水号
| objective_id {data-indent=1} | integer | 先享卡目标ID
| name {data-indent=1} | string | 目标名称
| unit {data-indent=1} | string | 目标单位
| performance_description {data-indent=1} | string | 履约描述
| performance_type {data-indent=1} | string | 履约类型
| count {data-indent=1} | integer | 目标数量
| performance_time {data-indent=1} | string | 履约时间
| remark {data-indent=1} | string | 备注说明
| rewards | object[] | 奖励明细列表
| reward_serial_no {data-indent=1} | string | 奖励流水号
| reward_id {data-indent=1} | integer | 先享卡奖励ID
| name {data-indent=1} | string | 奖励名称
| unit {data-indent=1} | string | 奖励单位
| description {data-indent=1} | string | 奖励描述
| reward_type {data-indent=1} | string | 奖励类型
| count {data-indent=1} | integer | 奖励数量
| amount {data-indent=1} | integer | 奖励金额
| reward_time {data-indent=1} | string | 奖励时间
| remark {data-indent=1} | string | 备注说明

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/discount-card/chapter3_1.shtml)
