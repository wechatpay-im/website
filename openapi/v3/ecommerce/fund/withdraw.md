---
title: 账户余额提现
description: 电商平台通过余额提现API帮助二级商户发起账户余额提现申请，完成账户余额提现。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 特约商户号
| out_request_no {data-indent=1} | string | 商户提现单号
| amount {data-indent=1} | integer | 提现金额
| remark {data-indent=1} | string | 提现备注
| bank_memo {data-indent=1} | string | 银行附言
| account_type {data-indent=1} | string | 出款账户类型

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->fund->withdraw->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'out_request_no' => '20190611222222222200000000012122',
    'amount' => 100,
    'remark' => '交易提现',
    'bank_memo' => '微信支付提现',
    'account_type' => 'BASIC',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/fund/withdraw')->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'out_request_no' => '20190611222222222200000000012122',
    'amount' => 100,
    'remark' => '交易提现',
    'bank_memo' => '微信支付提现',
    'account_type' => 'BASIC',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/fund/withdraw']->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'out_request_no' => '20190611222222222200000000012122',
    'amount' => 100,
    'remark' => '交易提现',
    'bank_memo' => '微信支付提现',
    'account_type' => 'BASIC',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->fund->withdraw->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'out_request_no' => '20190611222222222200000000012122',
    'amount' => 100,
    'remark' => '交易提现',
    'bank_memo' => '微信支付提现',
    'account_type' => 'BASIC',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/fund/withdraw')->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'out_request_no' => '20190611222222222200000000012122',
    'amount' => 100,
    'remark' => '交易提现',
    'bank_memo' => '微信支付提现',
    'account_type' => 'BASIC',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/fund/withdraw']->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'out_request_no' => '20190611222222222200000000012122',
    'amount' => 100,
    'remark' => '交易提现',
    'bank_memo' => '微信支付提现',
    'account_type' => 'BASIC',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 特约商户号
| withdraw_id | string | 微信支付提现单号
| out_request_no | string | 商户提现单号
| account_type | string | 出款账户类型

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_22.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/fund/chapter3_2.shtml)
