---
title: 查询订单剩余可出境余额
description: 电商收付通中，针对多次请求出境的场景，商家需要查询可出境金额之后再进行出境请求其中：订单剩余可出境金额=订单可出境金额-已累计出境金额
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| transaction_id {data-required} | string | 微信支付订单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-required data-indent=1} | string | 二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundsToOversea->transactions->_transaction_id_->available_abroad_amounts->getAsync([
  'transaction_id' => '4208450740201411110007820472',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/funds-to-oversea/transactions/{transaction_id}/available_abroad_amounts')->getAsync([
  'transaction_id' => '4208450740201411110007820472',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/funds-to-oversea/transactions/{transaction_id}/available_abroad_amounts']->getAsync([
  'transaction_id' => '4208450740201411110007820472',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundsToOversea->transactions->_transaction_id_->available_abroad_amounts->get([
  'transaction_id' => '4208450740201411110007820472',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/funds-to-oversea/transactions/{transaction_id}/available_abroad_amounts')->get([
  'transaction_id' => '4208450740201411110007820472',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/funds-to-oversea/transactions/{transaction_id}/available_abroad_amounts']->get([
  'transaction_id' => '4208450740201411110007820472',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| transaction_id {data-required}| string | 微信支付订单号
| available_abroad_amount {data-required}| integer | 订单剩余可出境金额

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_10_1.shtml)
