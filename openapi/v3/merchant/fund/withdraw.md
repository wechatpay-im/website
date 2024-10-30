---
title: 电商平台提现
description: 电商平台通过该接口可将其平台的收入进行提现
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| out_request_no {data-indent=1} | string | 商户提现单号
| amount {data-indent=1} | integer | 提现金额
| remark {data-indent=1} | string | 备注
| bank_memo {data-indent=1} | string | 银行附言
| account_type {data-indent=1} | string | 资金账户类型

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchant->fund->withdraw->postAsync([
  'json' => [
    'out_request_no' => '20190611222222222200000000012122',
    'amount' => 1,
    'remark' => '交易体现',
    'bank_memo' => 'xx平台提现',
    'account_type' => 'BASIC',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant/fund/withdraw')->postAsync([
  'json' => [
    'out_request_no' => '20190611222222222200000000012122',
    'amount' => 1,
    'remark' => '交易体现',
    'bank_memo' => 'xx平台提现',
    'account_type' => 'BASIC',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant/fund/withdraw']->postAsync([
  'json' => [
    'out_request_no' => '20190611222222222200000000012122',
    'amount' => 1,
    'remark' => '交易体现',
    'bank_memo' => 'xx平台提现',
    'account_type' => 'BASIC',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchant->fund->withdraw->post([
  'json' => [
    'out_request_no' => '20190611222222222200000000012122',
    'amount' => 1,
    'remark' => '交易体现',
    'bank_memo' => 'xx平台提现',
    'account_type' => 'BASIC',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant/fund/withdraw')->post([
  'json' => [
    'out_request_no' => '20190611222222222200000000012122',
    'amount' => 1,
    'remark' => '交易体现',
    'bank_memo' => 'xx平台提现',
    'account_type' => 'BASIC',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant/fund/withdraw']->post([
  'json' => [
    'out_request_no' => '20190611222222222200000000012122',
    'amount' => 1,
    'remark' => '交易体现',
    'bank_memo' => 'xx平台提现',
    'account_type' => 'BASIC',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| withdraw_id | string | 微信支付提现单号
| out_request_no | string | 商户提现单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/fund/chapter3_5.shtml)
