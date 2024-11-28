---
title: 查询二级商户账户实时余额
description: 服务商通过此接口可以查询特约商户账户余额信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 二级商户号
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| account_type {data-indent=1} | string | 资金账户类型<br/>`BASIC` \| `OPERATION` \| `FEES` \| `DEPOSIT` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->fund->balance->_sub_mchid_->getAsync([
  'sub_mchid' => '1900000109',
  'query' => [
    'account_type' => 'BASIC',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/fund/balance/{sub_mchid}')->getAsync([
  'sub_mchid' => '1900000109',
  'query' => [
    'account_type' => 'BASIC',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/fund/balance/{sub_mchid}']->getAsync([
  'sub_mchid' => '1900000109',
  'query' => [
    'account_type' => 'BASIC',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->fund->balance->_sub_mchid_->get([
  'sub_mchid' => '1900000109',
  'query' => [
    'account_type' => 'BASIC',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/fund/balance/{sub_mchid}')->get([
  'sub_mchid' => '1900000109',
  'query' => [
    'account_type' => 'BASIC',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/fund/balance/{sub_mchid}']->get([
  'sub_mchid' => '1900000109',
  'query' => [
    'account_type' => 'BASIC',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 特约商户号
| account_type | string | 资金账户类型<br/>`BASIC` \| `OPERATION` \| `FEES` \| `DEPOSIT` 枚举值之一
| available_amount {data-required} | integer | 可用余额
| pending_amount | integer | 不可用余额

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/ecommerce-balance/accounts/query-e-commerce-balance.html) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_19.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/amount/chapter3_1.shtml)
