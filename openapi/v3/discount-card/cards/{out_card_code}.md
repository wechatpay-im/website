---
title: 查询先享卡订单
description: 商户可以通过商户领卡号查询指定的先享卡，可用于对账或者界面展示。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_card_code | string | 商户领卡号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->discountCard->cards->_out_card_code_->getAsync([
  'out_card_code' => '6e8369071cd942c0476613f9d1ce9ca3',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/discount-card/cards/{out_card_code}')->getAsync([
  'out_card_code' => '6e8369071cd942c0476613f9d1ce9ca3',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/discount-card/cards/{out_card_code}']->getAsync([
  'out_card_code' => '6e8369071cd942c0476613f9d1ce9ca3',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->discountCard->cards->_out_card_code_->get([
  'out_card_code' => '6e8369071cd942c0476613f9d1ce9ca3',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/discount-card/cards/{out_card_code}')->get([
  'out_card_code' => '6e8369071cd942c0476613f9d1ce9ca3',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/discount-card/cards/{out_card_code}']->get([
  'out_card_code' => '6e8369071cd942c0476613f9d1ce9ca3',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id | string | 先享卡ID
| card_template_id | string | 先享卡模板ID
| out_card_code | string | 商户领卡号
| appid | string | 公众账号ID
| mchid | string | 商户号
| time_range | object | 约定时间期限
| begin_time {data-indent=1} | string | 约定开始时间
| end_time {data-indent=1} | string | 约定结束时间
| state | string | 状态
| unfinished_reason | string | 未完成约定原因
| total_amount | integer | 享受优惠总金额
| pay_information | object | 用户退回优惠的付款信息
| pay_amount {data-indent=1} | integer | 付款金额
| pay_state {data-indent=1} | string | 付款状态
| transaction_id {data-indent=1} | string | 微信支付订单号
| pay_time {data-indent=1} | string | 支付时间
| create_time | string | 创卡时间
| objectives | object[] | 目标列表
| objective_id {data-indent=1} | string | 目标ID
| name {data-indent=1} | string | 目标名称
| count {data-indent=1} | integer | 目标数量
| unit {data-indent=1} | string | 目标单位
| description {data-indent=1} | string | 目标描述
| objective_completion_records {data-indent=1} | object[] | 目标完成记录
| objective_completion_serial_no {data-indent=2} | string | 目标完成流水号
| objective_id {data-indent=2} | string | 目标ID
| completion_time {data-indent=2} | string | 目标完成时间
| completion_type {data-indent=2} | string | 目标完成类型
| description {data-indent=2} | string | 目标完成描述
| completion_count {data-indent=2} | integer | 目标完成数量
| remark {data-indent=2} | string | 备注说明
| rewards | object[] | 优惠列表
| reward_id {data-indent=1} | string | 优惠ID
| name {data-indent=1} | string | 优惠名称
| count_type {data-indent=1} | string | 优惠数量类型
| count {data-indent=1} | integer | 优惠数量
| unit {data-indent=1} | string | 优惠单位
| amount {data-indent=1} | integer | 优惠金额
| description {data-indent=1} | string | 优惠描述
| reward_usage_records {data-indent=1} | object[] | 优惠使用记录列
| reward_usage_serial_no {data-indent=2} | string | 优惠使用记录流水号
| reward_id {data-indent=2} | string | 优惠ID
| usage_time {data-indent=2} | string | 优惠使用时间
| usage_type {data-indent=2} | string | 优惠使用类型
| description {data-indent=2} | string | 优惠使用描述
| usage_count {data-indent=2} | integer | 优惠使用数量
| amount {data-indent=2} | integer | 优惠金额
| remark {data-indent=2} | string | 备注说明
| sharer_openid | string | 邀请者用户标识

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/discount-card/chapter3_3.shtml)
