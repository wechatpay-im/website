---
title: 商家明细单号查询明细单
description: 商户明细单号查单接口。转账处理后延迟一段时间（异步进行转账），服务商可以通过该接口查询单笔转账明细单。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_batch_no {data-required} | string | 商家批次单号
| out_detail_no {data-required} | string | 商家明细单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->partnerTransfer->batches->outBatchNo->_out_batch_no_->details->outDetailNo->_out_detail_no_->getAsync([
  'out_batch_no' => 'plfk2020042013',
  'out_detail_no' => 'x23zy545Bd5436',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/partner-transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}')->getAsync([
  'out_batch_no' => 'plfk2020042013',
  'out_detail_no' => 'x23zy545Bd5436',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/partner-transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}']->getAsync([
  'out_batch_no' => 'plfk2020042013',
  'out_detail_no' => 'x23zy545Bd5436',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->partnerTransfer->batches->outBatchNo->_out_batch_no_->details->outDetailNo->_out_detail_no_->get([
  'out_batch_no' => 'plfk2020042013',
  'out_detail_no' => 'x23zy545Bd5436',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/partner-transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}')->get([
  'out_batch_no' => 'plfk2020042013',
  'out_detail_no' => 'x23zy545Bd5436',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/partner-transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}']->get([
  'out_batch_no' => 'plfk2020042013',
  'out_detail_no' => 'x23zy545Bd5436',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid {data-required}| string | 服务商商户号
| out_batch_no {data-required}| string | 商家批次单号
| batch_id {data-required}| string | 微信支付批次单号
| appid | string | 商户的appid
| out_detail_no {data-required}| string | 商家明细单号
| detail_id {data-required}| string | 微信支付明细单号
| detail_status {data-required}| string | 明细状态
| transfer_amount {data-required}| integer | 转账金额
| transfer_remark {data-required}| string | 转账备注
| fail_reason | string | 明细失败原因
| openid {data-required}| string | 收款用户openid
| username {data-required}| string | 收款用户姓名
| initiate_time {data-required}| string | 转账发起时间
| update_time {data-required}| string | 明细更新时间
| account_type | string | 收款账户类型
| bank_name | string | 银行名称
| bank_card_number_tail | string | 银行卡尾号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_10.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter3_5.shtml)
