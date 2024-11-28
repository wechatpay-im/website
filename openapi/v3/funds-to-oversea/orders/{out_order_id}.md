---
title: 查询出境结果
description: 根据微信支付单号+商户出境单号，查询出境结果，出境失败会返回错误码
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_id {data-required} | string | 商户出境单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-required data-indent=1} | string | 二级商户号
| transaction_id {data-required data-indent=1} | string | 微信支付订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundsToOversea->orders->_out_order_id_->getAsync([
  'out_order_id' => 'merchant123123',
  'query' => [
    'sub_mchid'      => '1231231',
    'transaction_id' => '4200000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/funds-to-oversea/orders/{out_order_id}')->getAsync([
  'out_order_id' => 'merchant123123',
  'query' => [
    'sub_mchid'      => '1231231',
    'transaction_id' => '4200000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/funds-to-oversea/orders/{out_order_id}']->getAsync([
  'out_order_id' => 'merchant123123',
  'query' => [
    'sub_mchid'      => '1231231',
    'transaction_id' => '4200000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundsToOversea->orders->_out_order_id_->get([
  'out_order_id' => 'merchant123123',
  'query' => [
    'sub_mchid'      => '1231231',
    'transaction_id' => '4200000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/funds-to-oversea/orders/{out_order_id}')->get([
  'out_order_id' => 'merchant123123',
  'query' => [
    'sub_mchid'      => '1231231',
    'transaction_id' => '4200000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/funds-to-oversea/orders/{out_order_id}']->get([
  'out_order_id' => 'merchant123123',
  'query' => [
    'sub_mchid'      => '1231231',
    'transaction_id' => '4200000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_id {data-required} | string | 商户出境单号
| sub_mchid {data-required} | string | 二级商户号
| order_id {data-required} | string | 微信出境单号
| result {data-required} | string | 出境结果
| fail_reason | string | 出境失败的原因
| amount {data-required} | integer | 请求出境人民币金额
| foreign_amount | integer | 真实出境外币金额
| foreign_currency {data-required} | string | 外币币种
| rate | integer | 汇率
| exchange_rate_time | string | 购汇时间
| estimate_exchange_rate_time | string | 预计购汇时间
| departure_amount | integer | 真实出境人民币金额
| fee | integer | 手续费人民币金额
| charge_mchid | string | 手续费承担商户号
| charge_account_type | string | 手续费承担账户

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_10_3.shtml)
