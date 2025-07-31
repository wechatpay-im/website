---
title: 撤销转账
description: 商户通过转账接口发起付款后，在用户确认收款之前可以通过该接口撤销付款。该接口返回成功仅表示撤销请求已受理，系统会异步处理退款等操作，以最终查询单据返回状态为准。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_bill_no {data-required} | string | 商户单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-required data-indent=1} | string | 二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundApp->mchTransfer->partner->transferBills->outBillNo->_out_bill_no_->cancel->postAsync([
  'out_bill_no' => 'plfk2020042013',
  'json' => [
    'sub_mchid' => '1900001121',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/fund-app/mch-transfer/partner/transfer-bills/out-bill-no/{out_bill_no}/cancel')->postAsync([
  'out_bill_no' => 'plfk2020042013',
  'json' => [
    'sub_mchid' => '1900001121',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/fund-app/mch-transfer/partner/transfer-bills/out-bill-no/{out_bill_no}/cancel']->postAsync([
  'out_bill_no' => 'plfk2020042013',
  'json' => [
    'sub_mchid' => '1900001121',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundApp->mchTransfer->partner->transferBills->outBillNo->_out_bill_no_->cancel->post([
  'out_bill_no' => 'plfk2020042013',
  'json' => [
    'sub_mchid' => '1900001121',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/fund-app/mch-transfer/partner/transfer-bills/out-bill-no/{out_bill_no}/cancel')->post([
  'out_bill_no' => 'plfk2020042013',
  'json' => [
    'sub_mchid' => '1900001121',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/fund-app/mch-transfer/partner/transfer-bills/out-bill-no/{out_bill_no}/cancel']->post([
  'out_bill_no' => 'plfk2020042013',
  'json' => [
    'sub_mchid' => '1900001121',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 二级商户号
| out_bill_no {data-required} | string | 商户单号
| transfer_bill_no {data-required} | string | 微信转账单号
| state {data-required} | string | 单据状态<br/>`ACCEPTED` \| `PROCESSING` \| `WAIT_USER_CONFIRM` \| `TRANSFERING` \| `SUCCESS` \| `FAIL` \| `CANCELING` \| `CANCELLED` 枚举值之一
| transfer_amount | number | 转账金额
| transfer_remark | string | 转账备注
| fail_reason | string | 失败原因
| openid | string | 收款用户OpenID
| user_name | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 收款用户姓名
| create_time | string | 单据创建时间
| update_time {data-required} | string | 最后一次单据状态变更时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015469118)
