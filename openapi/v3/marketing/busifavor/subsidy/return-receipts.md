---
title: 营销补差回退
description: 商户通过该接口可回退补差款
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| stock_id {data-indent=1} | string | 商家券批次号
| coupon_code {data-indent=1} | string | 商家券Code
| transaction_id {data-indent=1} | string | 微信支付订单号
| refund_id {data-indent=1} | string | 微信支付退款单号
| payer_merchant {data-indent=1} | string | 原营销补差扣款商户号
| payee_merchant {data-indent=1} | string | 原营销补差入账商户号
| amount {data-indent=1} | integer | 补差回退金额
| description {data-indent=1} | string | 补差回退描述
| out_subsidy_return_no {data-indent=1} | string | 业务请求唯一单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->subsidy->returnReceipts->postAsync([
  'json' => [
    'stock_id' => '128888000000001',
    'coupon_code' => 'ABCD12345678',
    'transaction_id' => '4200000913202101152566792388',
    'refund_id' => '50100506732021010105138718375',
    'payer_merchant' => '1900000001',
    'payee_merchant' => '1900000002',
    'amount' => 100,
    'description' => '20210115DESCRIPTION',
    'out_subsidy_return_no' => 'subsidy-abcd-12345678',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/subsidy/return-receipts')->postAsync([
  'json' => [
    'stock_id' => '128888000000001',
    'coupon_code' => 'ABCD12345678',
    'transaction_id' => '4200000913202101152566792388',
    'refund_id' => '50100506732021010105138718375',
    'payer_merchant' => '1900000001',
    'payee_merchant' => '1900000002',
    'amount' => 100,
    'description' => '20210115DESCRIPTION',
    'out_subsidy_return_no' => 'subsidy-abcd-12345678',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/subsidy/return-receipts']->postAsync([
  'json' => [
    'stock_id' => '128888000000001',
    'coupon_code' => 'ABCD12345678',
    'transaction_id' => '4200000913202101152566792388',
    'refund_id' => '50100506732021010105138718375',
    'payer_merchant' => '1900000001',
    'payee_merchant' => '1900000002',
    'amount' => 100,
    'description' => '20210115DESCRIPTION',
    'out_subsidy_return_no' => 'subsidy-abcd-12345678',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->subsidy->returnReceipts->post([
  'json' => [
    'stock_id' => '128888000000001',
    'coupon_code' => 'ABCD12345678',
    'transaction_id' => '4200000913202101152566792388',
    'refund_id' => '50100506732021010105138718375',
    'payer_merchant' => '1900000001',
    'payee_merchant' => '1900000002',
    'amount' => 100,
    'description' => '20210115DESCRIPTION',
    'out_subsidy_return_no' => 'subsidy-abcd-12345678',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/subsidy/return-receipts')->post([
  'json' => [
    'stock_id' => '128888000000001',
    'coupon_code' => 'ABCD12345678',
    'transaction_id' => '4200000913202101152566792388',
    'refund_id' => '50100506732021010105138718375',
    'payer_merchant' => '1900000001',
    'payee_merchant' => '1900000002',
    'amount' => 100,
    'description' => '20210115DESCRIPTION',
    'out_subsidy_return_no' => 'subsidy-abcd-12345678',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/subsidy/return-receipts']->post([
  'json' => [
    'stock_id' => '128888000000001',
    'coupon_code' => 'ABCD12345678',
    'transaction_id' => '4200000913202101152566792388',
    'refund_id' => '50100506732021010105138718375',
    'payer_merchant' => '1900000001',
    'payee_merchant' => '1900000002',
    'amount' => 100,
    'description' => '20210115DESCRIPTION',
    'out_subsidy_return_no' => 'subsidy-abcd-12345678',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| subsidy_return_receipt_id | string | 补差回退单号
| stock_id | string | 商家券批次号
| coupon_code | string | 商家券Code
| transaction_id | string | 微信支付订单号
| refund_id | string | 微信支付退款单号
| payer_merchant | string | 原营销补差扣款商户号
| payee_merchant | string | 原营销补差入账商户号
| amount | integer | 补差回退金额
| description | string | 补差回退描述
| status | string | 补差回退单据状态
| fail_reason | string | 补差回退失败原因
| return_done_time | string | 补差回退完成时间
| subsidy_receipt_id | string | 补差付款单号
| out_subsidy_return_no | string | 业务请求唯一单号
| return_create_time | string | 补差回退发起时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_17.shtml)
