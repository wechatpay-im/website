---
title: 查询剩余待分金额
description: 可调用此接口查询订单剩余待分金额
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| transaction_id {data-required} | string | 微信订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->profitsharing->transactions->_transaction_id_->amounts->getAsync([
  'transaction_id' => '4208450740201411110007820472',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/profitsharing/transactions/{transaction_id}/amounts')->getAsync([
  'transaction_id' => '4208450740201411110007820472',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/profitsharing/transactions/{transaction_id}/amounts']->getAsync([
  'transaction_id' => '4208450740201411110007820472',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->profitsharing->transactions->_transaction_id_->amounts->get([
  'transaction_id' => '4208450740201411110007820472',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/profitsharing/transactions/{transaction_id}/amounts')->get([
  'transaction_id' => '4208450740201411110007820472',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/profitsharing/transactions/{transaction_id}/amounts']->get([
  'transaction_id' => '4208450740201411110007820472',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| transaction_id {data-required} | string | 微信订单号
| unsplit_amount {data-required} | integer | 订单剩余待分金额

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_6.shtml)
