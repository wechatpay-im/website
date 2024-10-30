---
title: 电商合单委托代扣查询订单
description: 商户可以通过该接口发起免密的合单查询
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| combine_out_trade_no | string | 合单商户订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->combinePapay->transactions->_combine_out_trade_no_->getAsync([
  'combine_out_trade_no' => 'P20150806125346',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/combine-papay/transactions/{combine_out_trade_no}')->getAsync([
  'combine_out_trade_no' => 'P20150806125346',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/combine-papay/transactions/{combine_out_trade_no}']->getAsync([
  'combine_out_trade_no' => 'P20150806125346',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->combinePapay->transactions->_combine_out_trade_no_->get([
  'combine_out_trade_no' => 'P20150806125346',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/combine-papay/transactions/{combine_out_trade_no}')->get([
  'combine_out_trade_no' => 'P20150806125346',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/combine-papay/transactions/{combine_out_trade_no}']->get([
  'combine_out_trade_no' => 'P20150806125346',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| combine_appid | string | 合单商户APPID
| combine_mchid | string | 合单商户号
| combine_out_trade_no | string | 合单商户订单号
| sub_orders | object[] | 子单信息
| mchid {data-indent=1} | string | 子单商户号
| trade_type {data-indent=1} | string | 交易类型
| trade_state {data-indent=1} | string | 交易状态
| bank_type {data-indent=1} | string | 付款银行
| attach {data-indent=1} | string | 附加数据
| success_time {data-indent=1} | string | 支付完成时间
| transaction_id {data-indent=1} | string | 子单微信订单号
| out_trade_no {data-indent=1} | string | 子单商户订单号
| sub_mchid {data-indent=1} | string | 二级商户号
| sub_appid {data-indent=1} | string | 二级商户appid
| amount {data-indent=1} | object | 订单金额
| total_amount {data-indent=2} | integer | 标价金额
| currency {data-indent=2} | string | 标价币种
| payer_amount {data-indent=2} | integer | 现金支付金额
| payer_currency {data-indent=2} | string | 现金支付币种
| combine_payer_info | object | 支付者
| openid {data-indent=1} | string | 用户标识

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter5_5_6.shtml)
