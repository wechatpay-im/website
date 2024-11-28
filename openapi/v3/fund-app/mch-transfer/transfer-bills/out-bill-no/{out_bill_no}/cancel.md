---
title: 撤销转账
description: 商户通过转账接口发起付款后，在用户确认收款之前可以通过该接口撤销付款。该接口返回成功仅表示撤销请求已受理，系统会异步处理退款等操作，以最终查询单据返回状态为准。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_bill_no {data-required} | string | 商户单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundApp->mchTransfer->transferBills->outBillNo->_out_bill_no_->cancel->postAsync([
  'out_bill_no' => 'plfk2020042013',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/fund-app/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}/cancel')->postAsync([
  'out_bill_no' => 'plfk2020042013',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/fund-app/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}/cancel']->postAsync([
  'out_bill_no' => 'plfk2020042013',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundApp->mchTransfer->transferBills->outBillNo->_out_bill_no_->cancel->post([
  'out_bill_no' => 'plfk2020042013',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/fund-app/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}/cancel')->post([
  'out_bill_no' => 'plfk2020042013',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/fund-app/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}/cancel']->post([
  'out_bill_no' => 'plfk2020042013',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_bill_no {data-required} | string | 商户单号
| transfer_bill_no {data-required} | string | 微信转账单号
| state {data-required} | string | 单据状态
| update_time {data-required} | string | 最后一次单据状态变更时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/mch-trans/transfer-bill/cancel-transfer.html)
