---
title: 还款单查询
description: 商户通过还款单查询订单API查询订单状态，完成下一步的业务逻辑。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| combine_out_trade_no {data-required} | string | 还款单订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->repayment->combineTransactions->partner->outTradeNo->_combine_out_trade_no_->getAsync([
  'combine_out_trade_no' => 'P20150806125346',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/repayment/combine-transactions/partner/out-trade-no/{combine_out_trade_no}')->getAsync([
  'combine_out_trade_no' => 'P20150806125346',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/repayment/combine-transactions/partner/out-trade-no/{combine_out_trade_no}']->getAsync([
  'combine_out_trade_no' => 'P20150806125346',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->repayment->combineTransactions->partner->outTradeNo->_combine_out_trade_no_->get([
  'combine_out_trade_no' => 'P20150806125346',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/repayment/combine-transactions/partner/out-trade-no/{combine_out_trade_no}')->get([
  'combine_out_trade_no' => 'P20150806125346',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/repayment/combine-transactions/partner/out-trade-no/{combine_out_trade_no}']->get([
  'combine_out_trade_no' => 'P20150806125346',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| combine_appid {data-required} | string | 还款服务商APPID
| combine_mchid {data-required} | string | 还款服务商商户号
| combine_out_trade_no {data-required} | string | 还款单订单号
| combine_transaction_id {data-required} | string | 还款单微信支付订单号
| combine_payer_info | object {data-tooltip="对应PHP的array"} | 还款支付者信息
| openid {data-required data-indent=1} | string | 用户服务商标识
| sub_orders | object[] {data-tooltip="对应PHP的array"} | 还款明细单信息列表
| mchid {data-required data-indent=1} | string | 还款单发起商户号
| sub_mchid {data-indent=1} | string | 子商户号
| out_trade_no {data-required data-indent=1} | string | 还款明细单订单号
| transaction_id {data-indent=1} | string | 还款明细单微信支付订单号
| trade_type {data-indent=1} | string | 交易类型<br/>`REPAYMENT` 枚举值
| trade_state {data-indent=1} | string | 交易状态<br/>`SUCCESS` \| `NOTPAY` \| `CLOSED` 枚举值之一
| bank_type {data-indent=1} | string | 付款银行
| attach {data-indent=1} | string | 附加数据
| success_time {data-indent=1} | string | 支付完成时间
| amount {data-indent=1} | object {data-tooltip="对应PHP的array"} | 子单金额信息
| total_amount {data-required data-indent=2} | integer | 标价金额
| currency {data-indent=2} | string | 标价币种
| payer_amount {data-required data-indent=2} | integer | 现金支付金额
| payer_currency {data-indent=2} | string | 现金支付币种

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015124483)
