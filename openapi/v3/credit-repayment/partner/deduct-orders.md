---
title: 发起还款
description: 商户在发起还款之前，需要先调用预约还款接口；只有成功预约还款之后才能发起还款
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| contract_id {data-required data-indent=1} | string | 还款协议ID
| out_trade_no {data-required data-indent=1} | string | 商户侧交易单号
| out_record_id {data-required data-indent=1} | string | 商户侧预约还款单号
| deduct_amount {data-required data-indent=1} | string | 还款金额
| notify_url {data-required data-indent=1} | string | 商户回调地址

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->creditRepayment->partner->deductOrders->postAsync([
  'json' => [
    'contract_id'   => '20251105000000123456789',
    'out_trade_no'  => '1217752501201407033233368018',
    'out_record_id' => '1234567abcde',
    'deduct_amount' => '10000',
    'notify_url'    => 'wxd678efh567hg6787',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/credit-repayment/partner/deduct-orders')->postAsync([
  'json' => [
    'contract_id'   => '20251105000000123456789',
    'out_trade_no'  => '1217752501201407033233368018',
    'out_record_id' => '1234567abcde',
    'deduct_amount' => '10000',
    'notify_url'    => 'wxd678efh567hg6787',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/credit-repayment/partner/deduct-orders']->postAsync([
  'json' => [
    'contract_id'   => '20251105000000123456789',
    'out_trade_no'  => '1217752501201407033233368018',
    'out_record_id' => '1234567abcde',
    'deduct_amount' => '10000',
    'notify_url'    => 'wxd678efh567hg6787',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->creditRepayment->partner->deductOrders->post([
  'json' => [
    'contract_id'   => '20251105000000123456789',
    'out_trade_no'  => '1217752501201407033233368018',
    'out_record_id' => '1234567abcde',
    'deduct_amount' => '10000',
    'notify_url'    => 'wxd678efh567hg6787',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/credit-repayment/partner/deduct-orders')->post([
  'json' => [
    'contract_id'   => '20251105000000123456789',
    'out_trade_no'  => '1217752501201407033233368018',
    'out_record_id' => '1234567abcde',
    'deduct_amount' => '10000',
    'notify_url'    => 'wxd678efh567hg6787',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/credit-repayment/partner/deduct-orders']->post([
  'json' => [
    'contract_id'   => '20251105000000123456789',
    'out_trade_no'  => '1217752501201407033233368018',
    'out_record_id' => '1234567abcde',
    'deduct_amount' => '10000',
    'notify_url'    => 'wxd678efh567hg6787',
  ],
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016779462)
