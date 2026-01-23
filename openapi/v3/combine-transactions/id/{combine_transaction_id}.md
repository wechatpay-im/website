---
title: 个人收款交易通过微信支付订单号查单
description: 平台通过查询订单API查询订单状态，完成下一步的业务逻辑。需要调用查询接口的情况： - 当商户后台、网络、服务器等出现异常，商户系统最终未接收到支付通知。 - 调用支付接口后，返回系统错误或未知交易状态情况。 - 调用刷卡支付API，返回USERPAYING的状态。 - 调用关单或撤销接口API之前，需确认支付状态。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| combine_transaction_id {data-required} | string | 交易单微信支付订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->combineTransactions->id->_combine_transaction_id_->getAsync([
  'combine_transaction_id' => '1217752501201407033233368018',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/combine-transactions/id/{combine_transaction_id}')->getAsync([
  'combine_transaction_id' => '1217752501201407033233368018',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/combine-transactions/id/{combine_transaction_id}']->getAsync([
  'combine_transaction_id' => '1217752501201407033233368018',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->combineTransactions->id->_combine_transaction_id_->get([
  'combine_transaction_id' => '1217752501201407033233368018',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/combine-transactions/id/{combine_transaction_id}')->get([
  'combine_transaction_id' => '1217752501201407033233368018',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/combine-transactions/id/{combine_transaction_id}']->get([
  'combine_transaction_id' => '1217752501201407033233368018',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| combine_appid {data-required} | string | 平台商户应用ID
| combine_mchid {data-required} | string | 平台商户号
| combine_out_trade_no {data-required} | string | 交易单订单号
| combine_transaction_id {data-required} | string | 交易单微信支付订单号
| combine_payer_info | object {data-tooltip="对应PHP的array"} | 支付者
| openid {data-indent=1} | string | 用户标识
| scene_info | object {data-tooltip="对应PHP的array"} | 场景信息
| device_id {data-indent=1} | string | 商户端设备号
| sub_orders | object[] {data-tooltip="对应PHP的array"} | 商品单信息
| mchid {data-required data-indent=1} | string | 商品单发起商户号
| individual_auth_id {data-required data-indent=1} | string | 商品单个人收款方受理授权ID
| individual_name {data-indent=1} | string | 商品单个人收款方平台昵称
| out_trade_no {data-required data-indent=1} | string | 商品单商户订单号
| transaction_id {data-indent=1} | string | 微信支付订单号
| trade_type {data-indent=1} | string | 交易类型
| trade_state {data-required data-indent=1} | string | 交易状态
| bank_type {data-indent=1} | string | 付款银行
| attach {data-indent=1} | string | 附加数据
| success_time {data-indent=1} | string | 支付完成时间
| amount {data-indent=1} | object {data-tooltip="对应PHP的array"} | 订单金额
| total_amount {data-required data-indent=2} | number | 标价金额
| payer_amount {data-required data-indent=2} | number | 现金支付金额
| currency {data-required data-indent=2} | string | 标价币种
| payer_currency {data-required data-indent=2} | string | 现金支付币种
| settlement_rate {data-indent=2} | number | 结算汇率
| trade_scenario | string | 交易场景<br/>`RECOMMERCE` 枚举值

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012602242)
