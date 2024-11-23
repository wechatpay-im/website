---
title: 查询账户日终余额
description: 通过此接口可以查询本商户号指定日期当天24点的账户余额。**注意：**• 可查询90天内的日终余额。• 当日日终余额在次日生成，建议商户在上午 10 点以后查询。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| account_type {data-required} | string | 资金账户类型<br/>`BASIC` \| `OPERATION` \| `FEES` 枚举值之一
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| bill_date {data-required data-indent=1} | string | 日期

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchant->fund->dayendbalance->_account_type_->getAsync([
  'account_type' => 'BASIC',
  'query' => [
    'bill_date' => '2019-06-11',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant/fund/dayendbalance/{account_type}')->getAsync([
  'account_type' => 'BASIC',
  'query' => [
    'bill_date' => '2019-06-11',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant/fund/dayendbalance/{account_type}']->getAsync([
  'account_type' => 'BASIC',
  'query' => [
    'bill_date' => '2019-06-11',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchant->fund->dayendbalance->_account_type_->get([
  'account_type' => 'BASIC',
  'query' => [
    'bill_date' => '2019-06-11',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant/fund/dayendbalance/{account_type}')->get([
  'account_type' => 'BASIC',
  'query' => [
    'bill_date' => '2019-06-11',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant/fund/dayendbalance/{account_type}']->get([
  'account_type' => 'BASIC',
  'query' => [
    'bill_date' => '2019-06-11',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| available_amount {data-required}| integer | 可用余额
| pending_amount | integer | 不可用余额

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/amount/chapter3_4.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_21.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/amount/chapter3_4.shtml) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/ecommerce-balance/accounts/query-day-end-balance.html)
