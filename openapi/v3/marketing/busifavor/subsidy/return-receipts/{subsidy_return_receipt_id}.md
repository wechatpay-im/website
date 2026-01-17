---
title: 查询商家券营销补差回退单详情
description: 商户查询商家券营销补差回退单详情
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| subsidy_return_receipt_id {data-required} | string | 补差回退单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->subsidy->returnReceipts->_subsidy_return_receipt_id_->getAsync([
  'subsidy_return_receipt_id' => '2120200119165100000000000001',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/subsidy/return-receipts/{subsidy_return_receipt_id}')->getAsync([
  'subsidy_return_receipt_id' => '2120200119165100000000000001',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/subsidy/return-receipts/{subsidy_return_receipt_id}']->getAsync([
  'subsidy_return_receipt_id' => '2120200119165100000000000001',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->subsidy->returnReceipts->_subsidy_return_receipt_id_->get([
  'subsidy_return_receipt_id' => '2120200119165100000000000001',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/subsidy/return-receipts/{subsidy_return_receipt_id}')->get([
  'subsidy_return_receipt_id' => '2120200119165100000000000001',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/subsidy/return-receipts/{subsidy_return_receipt_id}']->get([
  'subsidy_return_receipt_id' => '2120200119165100000000000001',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| subsidy_return_receipt_id | string | 补差回退单号
| stock_id {data-required} | string | 商家券批次号
| coupon_code {data-required} | string | 商家券Code
| transaction_id {data-required} | string | 微信支付订单号
| refund_id {data-required} | string | 微信支付退款单号
| payer_merchant {data-required} | string | 原营销补差扣款商户号
| payee_merchant {data-required} | string | 原营销补差入账商户号
| amount {data-required} | integer | 补差回退金额
| description {data-required} | string | 补差回退描述
| status {data-required} | string | 补差回退单据状态
| fail_reason | string | 补差回退失败原因
| return_done_time | string | 补差回退完成时间
| subsidy_receipt_id {data-required} | string | 补差付款单号
| out_subsidy_return_no {data-required} | string | 业务请求唯一单号
| return_create_time | string | 补差回退发起时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4017147344) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4017171779)
