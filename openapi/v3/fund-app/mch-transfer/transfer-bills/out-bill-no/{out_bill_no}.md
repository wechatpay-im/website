---
title: 商户单号查询转账单
description: 商家转账用户确认模式下，根据商户单号查询转账单的详细信息
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_bill_no {data-required} | string | 商户单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundApp->mchTransfer->transferBills->outBillNo->_out_bill_no_->getAsync([
  'out_bill_no' => 'plfk2020042013',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/fund-app/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}')->getAsync([
  'out_bill_no' => 'plfk2020042013',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/fund-app/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}']->getAsync([
  'out_bill_no' => 'plfk2020042013',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundApp->mchTransfer->transferBills->outBillNo->_out_bill_no_->get([
  'out_bill_no' => 'plfk2020042013',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/fund-app/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}')->get([
  'out_bill_no' => 'plfk2020042013',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/fund-app/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}']->get([
  'out_bill_no' => 'plfk2020042013',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mch_id {data-required} | string | 商户号
| out_bill_no {data-required} | string | 商户单号
| transfer_bill_no {data-required} | string | 商家转账订单号
| appid {data-required} | string | 商户AppID
| state {data-required} | string | 单据状态
| transfer_amount {data-required} | number | 转账金额
| transfer_remark {data-required} | string | 转账备注
| fail_reason | string | 失败原因
| openid | string | 收款用户OpenID
| user_name | string | 收款用户姓名
| create_time {data-required} | string | 单据创建时间
| update_time {data-required} | string | 最后一次状态变更时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012716437)
