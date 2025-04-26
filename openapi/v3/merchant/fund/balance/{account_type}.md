---
title: 查询账户实时余额
description: 商户通过此接口可以查询本商户号的账号余额情况。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| account_type {data-required} | string | 资金账户类型<br/>`BASIC` \| `OPERATION` \| `FEES` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchant->fund->balance->_account_type_->getAsync([
  'account_type' => 'BASIC',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant/fund/balance/{account_type}')->getAsync([
  'account_type' => 'BASIC',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant/fund/balance/{account_type}']->getAsync([
  'account_type' => 'BASIC',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchant->fund->balance->_account_type_->get([
  'account_type' => 'BASIC',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant/fund/balance/{account_type}')->get([
  'account_type' => 'BASIC',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant/fund/balance/{account_type}']->get([
  'account_type' => 'BASIC',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| available_amount {data-required} | integer | 可用余额
| pending_amount | integer | 不可用余额

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012476700) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012720926) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012721477)
