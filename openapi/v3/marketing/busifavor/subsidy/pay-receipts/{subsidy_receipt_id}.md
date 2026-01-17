---
title: 查询营销补差付款单详情
description: 查询商家券营销补差付款单详情
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| subsidy_receipt_id {data-required} | string | 补差付款单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->subsidy->payReceipts->_subsidy_receipt_id_->getAsync([
  'subsidy_receipt_id' => '1120200119165100000000000001',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/subsidy/pay-receipts/{subsidy_receipt_id}')->getAsync([
  'subsidy_receipt_id' => '1120200119165100000000000001',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/subsidy/pay-receipts/{subsidy_receipt_id}']->getAsync([
  'subsidy_receipt_id' => '1120200119165100000000000001',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->subsidy->payReceipts->_subsidy_receipt_id_->get([
  'subsidy_receipt_id' => '1120200119165100000000000001',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/subsidy/pay-receipts/{subsidy_receipt_id}')->get([
  'subsidy_receipt_id' => '1120200119165100000000000001',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/subsidy/pay-receipts/{subsidy_receipt_id}']->get([
  'subsidy_receipt_id' => '1120200119165100000000000001',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| subsidy_receipt_id {data-required} | string | 补差付款单号
| stock_id {data-required} | string | 商家券批次号
| coupon_code {data-required} | string | 商家券Code
| transaction_id {data-required} | string | 微信支付订单号
| payer_merchant {data-required} | string | 营销补差扣款商户号
| payee_merchant {data-required} | string | 营销补差入账商户号
| amount {data-required} | integer | 补差付款金额
| description {data-required} | string | 补差付款描述
| status {data-required} | string | 补差付款单据状态
| fail_reason | string | 补差付款失败原因
| success_time | string | 补差付款完成时间
| out_subsidy_no {data-required} | string | 业务请求唯一单号
| create_time | string | 补差付款发起时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4017147336) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4017170661)
