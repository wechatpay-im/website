---
title: 查询二级商户账户日终余额
description: 电商服务商通过该接口可以查询二级商户指定日期当天24点的账户余额。 **注意：**• 可查询90天内的日终余额。• 当日日终余额在次日生成，建议商户在上午 10 点以后查询。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 电商特约商户商户号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| date {data-required data-indent=1} | string | 日期
| account_type {data-indent=1} | string | 账户类型<br/>`BASIC` \| `DEPOSIT` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->fund->enddaybalance->_sub_mchid_->getAsync([
  'sub_mchid' => '1222212222',
  'query' => [
    'date'         => '2019-08-17',
    'account_type' => 'BASIC',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/fund/enddaybalance/{sub_mchid}')->getAsync([
  'sub_mchid' => '1222212222',
  'query' => [
    'date'         => '2019-08-17',
    'account_type' => 'BASIC',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/fund/enddaybalance/{sub_mchid}']->getAsync([
  'sub_mchid' => '1222212222',
  'query' => [
    'date'         => '2019-08-17',
    'account_type' => 'BASIC',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->fund->enddaybalance->_sub_mchid_->get([
  'sub_mchid' => '1222212222',
  'query' => [
    'date'         => '2019-08-17',
    'account_type' => 'BASIC',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/fund/enddaybalance/{sub_mchid}')->get([
  'sub_mchid' => '1222212222',
  'query' => [
    'date'         => '2019-08-17',
    'account_type' => 'BASIC',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/fund/enddaybalance/{sub_mchid}']->get([
  'sub_mchid' => '1222212222',
  'query' => [
    'date'         => '2019-08-17',
    'account_type' => 'BASIC',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 二级商户号
| available_amount {data-required} | integer | 可用余额
| pending_amount | integer | 不可用余额
| account_type | string | 账户类型<br/>`BASIC` \| `DEPOSIT` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/amount/chapter3_2.shtml) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/ecommerce-balance/accounts/query-e-commerce-day-end-balance.html)
