---
title: 查询还款单
description: 商户可调用该接口来获取还款单的详细信息
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_trade_no {data-required} | string | 商户侧交易单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->creditRepayment->partner->deductOrders->_out_trade_no_->getAsync([
  'out_trade_no' => '1217752501201407033233368018',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/credit-repayment/partner/deduct-orders/{out_trade_no}')->getAsync([
  'out_trade_no' => '1217752501201407033233368018',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/credit-repayment/partner/deduct-orders/{out_trade_no}']->getAsync([
  'out_trade_no' => '1217752501201407033233368018',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->creditRepayment->partner->deductOrders->_out_trade_no_->get([
  'out_trade_no' => '1217752501201407033233368018',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/credit-repayment/partner/deduct-orders/{out_trade_no}')->get([
  'out_trade_no' => '1217752501201407033233368018',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/credit-repayment/partner/deduct-orders/{out_trade_no}']->get([
  'out_trade_no' => '1217752501201407033233368018',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_trade_no {data-required} | string | 商户侧交易单号
| out_record_id {data-required} | string | 商户侧预约还款单号
| appid {data-required} | string | 商户AppID
| sub_appid {data-required} | string | 子商户AppID
| openid {data-required} | string | 用户标识
| contract_id {data-required} | string | 还款协议ID
| order_state {data-required} | string | 还款单状态<br/>`DEDUCT_ORDER_STATE_PENDING` \| `DEDUCT_ORDER_STATE_NOT_PAY` \| `DEDUCT_ORDER_STATE_PAY_SUCCESS` \| `DEDUCT_ORDER_STATE_PAY_FAIL` 枚举值之一
| deduct_amount {data-required} | string | 还款金额
| pay_success_amount | string | 实际还款金额
| description {data-required} | string | 产品描述
| attach | string | 商户数据包
| transaction_id | string | 微信支付的支付单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016779468)
