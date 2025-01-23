---
title: 请求撤销保险理赔
description: 商户可通过该接口撤销赔付，在用户确认收款之前可以通过该接口撤销赔付。该接口返回成功仅表示撤销请求已受理，系统会异步处理退款等操作，以最终查询单据返回状态为准。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_bill_no {data-required} | string | 商户单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->ecommerce->mchTransfer->insuranceClaimBills->outBillNo->_out_bill_no_->cancel->postAsync([
  'out_bill_no' => 'plfk2020042013',
  'json' => [
    'sub_mchid' => '1900001109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/platsolution/ecommerce/mch-transfer/insurance-claim-bills/out-bill-no/{out_bill_no}/cancel')->postAsync([
  'out_bill_no' => 'plfk2020042013',
  'json' => [
    'sub_mchid' => '1900001109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/platsolution/ecommerce/mch-transfer/insurance-claim-bills/out-bill-no/{out_bill_no}/cancel']->postAsync([
  'out_bill_no' => 'plfk2020042013',
  'json' => [
    'sub_mchid' => '1900001109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->platsolution->ecommerce->mchTransfer->insuranceClaimBills->outBillNo->_out_bill_no_->cancel->post([
  'out_bill_no' => 'plfk2020042013',
  'json' => [
    'sub_mchid' => '1900001109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/ecommerce/mch-transfer/insurance-claim-bills/out-bill-no/{out_bill_no}/cancel')->post([
  'out_bill_no' => 'plfk2020042013',
  'json' => [
    'sub_mchid' => '1900001109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/ecommerce/mch-transfer/insurance-claim-bills/out-bill-no/{out_bill_no}/cancel']->post([
  'out_bill_no' => 'plfk2020042013',
  'json' => [
    'sub_mchid' => '1900001109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 二级商户号
| out_bill_no {data-required} | string | 商户单号
| bill_id {data-required} | string | 微信支付转账单号
| state {data-required} | string | 赔付状态<br/>`ACCEPTED` \| `SUCCESS` \| `CLOSED` \| `WAIT_USER_CONFIRM` \| `CANCELING` \| `CANCELLED` 枚举值之一
| cancel_accept_time {data-required} | string | 撤销受理时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013504186)
