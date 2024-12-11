# 通过先享卡订单号更新及查询先享卡订单 {#mix}

## 更新先享卡订单 {#patch}

当用户在商户侧消费时，用户完成微信先享卡的目标或者领取奖励时，商户需要将信息同步至微信先享卡平台，用于在微信先享卡小程序展示及先享卡到期后的用户结算。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no {data-required} | string | 先享卡订单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| objectives {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 目标达成明细列表
| objective_serial_no {data-required data-indent=2} | string | 目标流水号
| objective_id {data-required data-indent=2} | integer | 先享卡目标ID
| performance_description {data-required data-indent=2} | string | 履约描述
| performance_type {data-required data-indent=2} | string | 履约类型
| count {data-required data-indent=2} | integer | 目标数量
| performance_time {data-required data-indent=2} | string | 履约时间
| remark {data-indent=2} | string | 备注说明
| rewards {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 奖励明细列表
| reward_serial_no {data-required data-indent=2} | string | 奖励流水号
| reward_id {data-required data-indent=2} | integer | 先享卡奖励ID
| description {data-required data-indent=2} | string | 奖励描述
| reward_type {data-required data-indent=2} | string | 奖励类型
| count {data-required data-indent=2} | integer | 奖励数量
| amount {data-required data-indent=2} | integer | 奖励金额
| reward_time {data-required data-indent=2} | string | 奖励时间
| remark {data-indent=2} | string | 备注说明

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->discountCard->orders->_out_order_no_->patchAsync([
  'out_order_no' => '233bcbf407e87789b8e471f251774f95',
  'json' => [
    'objectives' => [[
      'objective_serial_no'     => '578354545',
      'objective_id'            => 123456,
      'performance_description' => '购买商品',
      'performance_type'        => 'INCREASE',
      'count'                   => 1,
      'performance_time'        => '2015-05-20T13:29:35.120+08:00',
      'remark'                  => '特价商品',
    ],],
    'rewards'    => [[
      'reward_serial_no' => '578354',
      'reward_id'        => 123456,
      'description'      => '购买商品',
      'reward_type'      => 'INCREASE',
      'count'            => 1,
      'amount'           => 100,
      'reward_time'      => '2015-05-20T13:29:35.120+08:00',
      'remark'           => '特价商品',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/discount-card/orders/{out_order_no}')->patchAsync([
  'out_order_no' => '233bcbf407e87789b8e471f251774f95',
  'json' => [
    'objectives' => [[
      'objective_serial_no'     => '578354545',
      'objective_id'            => 123456,
      'performance_description' => '购买商品',
      'performance_type'        => 'INCREASE',
      'count'                   => 1,
      'performance_time'        => '2015-05-20T13:29:35.120+08:00',
      'remark'                  => '特价商品',
    ],],
    'rewards'    => [[
      'reward_serial_no' => '578354',
      'reward_id'        => 123456,
      'description'      => '购买商品',
      'reward_type'      => 'INCREASE',
      'count'            => 1,
      'amount'           => 100,
      'reward_time'      => '2015-05-20T13:29:35.120+08:00',
      'remark'           => '特价商品',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/discount-card/orders/{out_order_no}']->patchAsync([
  'out_order_no' => '233bcbf407e87789b8e471f251774f95',
  'json' => [
    'objectives' => [[
      'objective_serial_no'     => '578354545',
      'objective_id'            => 123456,
      'performance_description' => '购买商品',
      'performance_type'        => 'INCREASE',
      'count'                   => 1,
      'performance_time'        => '2015-05-20T13:29:35.120+08:00',
      'remark'                  => '特价商品',
    ],],
    'rewards'    => [[
      'reward_serial_no' => '578354',
      'reward_id'        => 123456,
      'description'      => '购买商品',
      'reward_type'      => 'INCREASE',
      'count'            => 1,
      'amount'           => 100,
      'reward_time'      => '2015-05-20T13:29:35.120+08:00',
      'remark'           => '特价商品',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->discountCard->orders->_out_order_no_->patch([
  'out_order_no' => '233bcbf407e87789b8e471f251774f95',
  'json' => [
    'objectives' => [[
      'objective_serial_no'     => '578354545',
      'objective_id'            => 123456,
      'performance_description' => '购买商品',
      'performance_type'        => 'INCREASE',
      'count'                   => 1,
      'performance_time'        => '2015-05-20T13:29:35.120+08:00',
      'remark'                  => '特价商品',
    ],],
    'rewards'    => [[
      'reward_serial_no' => '578354',
      'reward_id'        => 123456,
      'description'      => '购买商品',
      'reward_type'      => 'INCREASE',
      'count'            => 1,
      'amount'           => 100,
      'reward_time'      => '2015-05-20T13:29:35.120+08:00',
      'remark'           => '特价商品',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/discount-card/orders/{out_order_no}')->patch([
  'out_order_no' => '233bcbf407e87789b8e471f251774f95',
  'json' => [
    'objectives' => [[
      'objective_serial_no'     => '578354545',
      'objective_id'            => 123456,
      'performance_description' => '购买商品',
      'performance_type'        => 'INCREASE',
      'count'                   => 1,
      'performance_time'        => '2015-05-20T13:29:35.120+08:00',
      'remark'                  => '特价商品',
    ],],
    'rewards'    => [[
      'reward_serial_no' => '578354',
      'reward_id'        => 123456,
      'description'      => '购买商品',
      'reward_type'      => 'INCREASE',
      'count'            => 1,
      'amount'           => 100,
      'reward_time'      => '2015-05-20T13:29:35.120+08:00',
      'remark'           => '特价商品',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/discount-card/orders/{out_order_no}']->patch([
  'out_order_no' => '233bcbf407e87789b8e471f251774f95',
  'json' => [
    'objectives' => [[
      'objective_serial_no'     => '578354545',
      'objective_id'            => 123456,
      'performance_description' => '购买商品',
      'performance_type'        => 'INCREASE',
      'count'                   => 1,
      'performance_time'        => '2015-05-20T13:29:35.120+08:00',
      'remark'                  => '特价商品',
    ],],
    'rewards'    => [[
      'reward_serial_no' => '578354',
      'reward_id'        => 123456,
      'description'      => '购买商品',
      'reward_type'      => 'INCREASE',
      'count'            => 1,
      'amount'           => 100,
      'reward_time'      => '2015-05-20T13:29:35.120+08:00',
      'remark'           => '特价商品',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no {data-required} | string | 先享卡订单号
| order_id {data-required} | string | 微信支付服务订单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/discount-card/chapter3_2.shtml)

## 通过先享卡订单号查询订单 {#get}

商户可以通过先享卡订单号或商户订单号查询用户目前的先享卡使用情况、订单状态，可用于对账或者界面展示。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no {data-required} | string | 先享卡订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->discountCard->orders->_out_order_no_->getAsync([
  'out_order_no' => '233bcbf407e87789b8e471f251774f95',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/discount-card/orders/{out_order_no}')->getAsync([
  'out_order_no' => '233bcbf407e87789b8e471f251774f95',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/discount-card/orders/{out_order_no}']->getAsync([
  'out_order_no' => '233bcbf407e87789b8e471f251774f95',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->discountCard->orders->_out_order_no_->get([
  'out_order_no' => '233bcbf407e87789b8e471f251774f95',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/discount-card/orders/{out_order_no}')->get([
  'out_order_no' => '233bcbf407e87789b8e471f251774f95',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/discount-card/orders/{out_order_no}']->get([
  'out_order_no' => '233bcbf407e87789b8e471f251774f95',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no {data-required} | string | 先享卡订单号
| discount_card_id {data-required} | string | 先享卡ID
| out_trade_no {data-required} | string | 商户订单号
| appid {data-required} | string | 公众账号ID
| service_id {data-required} | string | 服务ID
| order_id {data-required} | string | 微信支付服务订单号
| transaction_id | string | 微信支付交易单号
| openid {data-required} | string | 用户标识
| card_begin_time {data-required} | string | 先享卡开始时间
| card_end_time {data-required} | string | 先享卡结束时间
| card_name {data-required} | string | 先享卡名称
| objective_description {data-required} | string | 目标描述
| reward_description {data-required} | string | 奖励描述
| estimated_reward_amount {data-required} | integer | 预估奖励金额
| online_instructions | string | 线上使用说明
| offline_instructions | string | 线下使用说明
| state {data-required} | string | 订单状态
| total_amount | integer | 总金额
| deduction_amount | integer | 扣除金额
| settlement_amount | integer | 结算金额
| create_time {data-required} | string | 创建时间
| pay_time | string | 支付时间
| objectives | object[] {data-tooltip="对应PHP的array"} | 目标达成明细列表
| objective_serial_no {data-required data-indent=1} | string | 目标流水号
| objective_id {data-required data-indent=1} | integer | 先享卡目标ID
| name {data-indent=1} | string | 目标名称
| unit {data-indent=1} | string | 目标单位
| performance_description {data-required data-indent=1} | string | 履约描述
| performance_type {data-required data-indent=1} | string | 履约类型
| count {data-required data-indent=1} | integer | 目标数量
| performance_time {data-required data-indent=1} | string | 履约时间
| remark {data-indent=1} | string | 备注说明
| rewards | object[] {data-tooltip="对应PHP的array"} | 奖励明细列表
| reward_serial_no {data-required data-indent=1} | string | 奖励流水号
| reward_id {data-required data-indent=1} | integer | 先享卡奖励ID
| name {data-indent=1} | string | 奖励名称
| unit {data-indent=1} | string | 奖励单位
| description {data-required data-indent=1} | string | 奖励描述
| reward_type {data-required data-indent=1} | string | 奖励类型
| count {data-required data-indent=1} | integer | 奖励数量
| amount {data-required data-indent=1} | integer | 奖励金额
| reward_time {data-required data-indent=1} | string | 奖励时间
| remark {data-indent=1} | string | 备注说明

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/discount-card/chapter3_1.shtml)
