---
title: 增加用户记录
description: 当用户在商户侧消费时，用户完成了微信先享卡的目标或者获取使用优惠时，商户需要把这个信息同步给微信先享卡平台，用于在微信先享卡小程序展示及先享卡到期后的用户结算。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_card_code {data-required} | string | 商户领卡号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| card_template_id {data-required data-indent=1} | string | 卡模板ID
| objective_completion_records {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 目标完成记录
| objective_completion_serial_no {data-required data-indent=2} | string | 目标完成流水号
| objective_id {data-required data-indent=2} | string | 目标ID
| completion_time {data-required data-indent=2} | string | 目标完成时间
| completion_type {data-required data-indent=2} | string | 目标完成类型
| description {data-required data-indent=2} | string | 目标完成描述
| completion_count {data-required data-indent=2} | integer | 目标完成数量
| remark {data-indent=2} | string | 备注说明
| reward_usage_records {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 优惠使用记录
| reward_usage_serial_no {data-required data-indent=2} | string | 优惠使用记录流水号
| reward_id {data-required data-indent=2} | string | 优惠ID
| usage_time {data-required data-indent=2} | string | 优惠使用时间
| usage_type {data-required data-indent=2} | string | 优惠使用类型
| description {data-required data-indent=2} | string | 优惠使用描述
| usage_count {data-required data-indent=2} | integer | 数量
| amount {data-required data-indent=2} | integer | 金额
| remark {data-indent=2} | string | 备注说明

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->discountCard->cards->_out_card_code_->addUserRecords->postAsync([
  'out_card_code' => '6e8369071cd942c0476613f9d1ce9ca3',
  'json' => [
    'card_template_id' => '87789b2f25177433bcbf407e8e471f95',
    'objective_completion_records' => [[
      'objective_completion_serial_no' => '578354545',
      'objective_id' => '123456',
      'completion_time' => '2015-05-20T13:29:35.120+08:00',
      'completion_type' => 'INCREASE',
      'description' => '购买商品',
      'completion_count' => 1,
      'remark' => '特价商品',
    ],],
    'reward_usage_records' => [[
      'reward_usage_serial_no' => '578354',
      'reward_id' => '123456',
      'usage_time' => '2015-05-20T13:29:35.120+08:00',
      'usage_type' => 'INCREASE',
      'description' => '购买商品',
      'usage_count' => 1,
      'amount' => 100,
      'remark' => '特价商品',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/discount-card/cards/{out_card_code}/add-user-records')->postAsync([
  'out_card_code' => '6e8369071cd942c0476613f9d1ce9ca3',
  'json' => [
    'card_template_id' => '87789b2f25177433bcbf407e8e471f95',
    'objective_completion_records' => [[
      'objective_completion_serial_no' => '578354545',
      'objective_id' => '123456',
      'completion_time' => '2015-05-20T13:29:35.120+08:00',
      'completion_type' => 'INCREASE',
      'description' => '购买商品',
      'completion_count' => 1,
      'remark' => '特价商品',
    ],],
    'reward_usage_records' => [[
      'reward_usage_serial_no' => '578354',
      'reward_id' => '123456',
      'usage_time' => '2015-05-20T13:29:35.120+08:00',
      'usage_type' => 'INCREASE',
      'description' => '购买商品',
      'usage_count' => 1,
      'amount' => 100,
      'remark' => '特价商品',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/discount-card/cards/{out_card_code}/add-user-records']->postAsync([
  'out_card_code' => '6e8369071cd942c0476613f9d1ce9ca3',
  'json' => [
    'card_template_id' => '87789b2f25177433bcbf407e8e471f95',
    'objective_completion_records' => [[
      'objective_completion_serial_no' => '578354545',
      'objective_id' => '123456',
      'completion_time' => '2015-05-20T13:29:35.120+08:00',
      'completion_type' => 'INCREASE',
      'description' => '购买商品',
      'completion_count' => 1,
      'remark' => '特价商品',
    ],],
    'reward_usage_records' => [[
      'reward_usage_serial_no' => '578354',
      'reward_id' => '123456',
      'usage_time' => '2015-05-20T13:29:35.120+08:00',
      'usage_type' => 'INCREASE',
      'description' => '购买商品',
      'usage_count' => 1,
      'amount' => 100,
      'remark' => '特价商品',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->discountCard->cards->_out_card_code_->addUserRecords->post([
  'out_card_code' => '6e8369071cd942c0476613f9d1ce9ca3',
  'json' => [
    'card_template_id' => '87789b2f25177433bcbf407e8e471f95',
    'objective_completion_records' => [[
      'objective_completion_serial_no' => '578354545',
      'objective_id' => '123456',
      'completion_time' => '2015-05-20T13:29:35.120+08:00',
      'completion_type' => 'INCREASE',
      'description' => '购买商品',
      'completion_count' => 1,
      'remark' => '特价商品',
    ],],
    'reward_usage_records' => [[
      'reward_usage_serial_no' => '578354',
      'reward_id' => '123456',
      'usage_time' => '2015-05-20T13:29:35.120+08:00',
      'usage_type' => 'INCREASE',
      'description' => '购买商品',
      'usage_count' => 1,
      'amount' => 100,
      'remark' => '特价商品',
    ],],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/discount-card/cards/{out_card_code}/add-user-records')->post([
  'out_card_code' => '6e8369071cd942c0476613f9d1ce9ca3',
  'json' => [
    'card_template_id' => '87789b2f25177433bcbf407e8e471f95',
    'objective_completion_records' => [[
      'objective_completion_serial_no' => '578354545',
      'objective_id' => '123456',
      'completion_time' => '2015-05-20T13:29:35.120+08:00',
      'completion_type' => 'INCREASE',
      'description' => '购买商品',
      'completion_count' => 1,
      'remark' => '特价商品',
    ],],
    'reward_usage_records' => [[
      'reward_usage_serial_no' => '578354',
      'reward_id' => '123456',
      'usage_time' => '2015-05-20T13:29:35.120+08:00',
      'usage_type' => 'INCREASE',
      'description' => '购买商品',
      'usage_count' => 1,
      'amount' => 100,
      'remark' => '特价商品',
    ],],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/discount-card/cards/{out_card_code}/add-user-records']->post([
  'out_card_code' => '6e8369071cd942c0476613f9d1ce9ca3',
  'json' => [
    'card_template_id' => '87789b2f25177433bcbf407e8e471f95',
    'objective_completion_records' => [[
      'objective_completion_serial_no' => '578354545',
      'objective_id' => '123456',
      'completion_time' => '2015-05-20T13:29:35.120+08:00',
      'completion_type' => 'INCREASE',
      'description' => '购买商品',
      'completion_count' => 1,
      'remark' => '特价商品',
    ],],
    'reward_usage_records' => [[
      'reward_usage_serial_no' => '578354',
      'reward_id' => '123456',
      'usage_time' => '2015-05-20T13:29:35.120+08:00',
      'usage_type' => 'INCREASE',
      'description' => '购买商品',
      'usage_count' => 1,
      'amount' => 100,
      'remark' => '特价商品',
    ],],
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/discount-card/chapter3_2.shtml)
