---
title: 微信支付明细单号查询明细单
description: 微信支付明细单号查单接口。转账处理后延迟一段时间（异步进行转账），服务商可以通过该接口查询单笔转账明细单。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| batch_id {data-required} | string | 微信支付批次单号
| detail_id {data-required} | string | 微信明细单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->bankTransfer->batches->batchId->_batch_id_->details->detailId->_detail_id_->getAsync([
  'batch_id' => '1130000071100999991182020050700019480001',
  'detail_id' => '1140000071100999991182020050700019500100',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/bank-transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}')->getAsync([
  'batch_id' => '1130000071100999991182020050700019480001',
  'detail_id' => '1140000071100999991182020050700019500100',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/bank-transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}']->getAsync([
  'batch_id' => '1130000071100999991182020050700019480001',
  'detail_id' => '1140000071100999991182020050700019500100',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->bankTransfer->batches->batchId->_batch_id_->details->detailId->_detail_id_->get([
  'batch_id' => '1130000071100999991182020050700019480001',
  'detail_id' => '1140000071100999991182020050700019500100',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/bank-transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}')->get([
  'batch_id' => '1130000071100999991182020050700019480001',
  'detail_id' => '1140000071100999991182020050700019500100',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/bank-transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}']->get([
  'batch_id' => '1130000071100999991182020050700019480001',
  'detail_id' => '1140000071100999991182020050700019500100',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| bank_sp_mchid {data-required} | string | 银行服务商号
| platform_mchid {data-required} | string | 服务平台商户号
| specialized_payment_mchid {data-required} | string | 付款企业商户号
| sponsor_mchid {data-required} | string | 实际出资商户号
| user_authorized_mchid {data-required} | string | 用户授权商户号
| user_authorized_appid {data-required} | string | 用户授权appid
| out_batch_no {data-required} | string | 银行批次单号
| batch_id {data-required} | string | 微信支付批次单号
| transfer_scene {data-required} | string | 转账场景
| out_detail_no {data-required} | string | 银行明细单号
| detail_id {data-required} | string | 微信支付明细单号
| openid {data-required} | string | 收款用户openid
| username {data-required} | string | 收款用户姓名
| transfer_amount {data-required} | integer | 转账金额
| transfer_remark {data-required} | string | 转账备注
| detail_state {data-required} | string | 明细状态
| fail_reason | string | 明细失败原因
| initiate_time | string | 转账发起时间
| update_time {data-required} | string | 明细更新时间
| account_type {data-required} | string | 收款账户类型
| bank_name | string | 银行名称
| bank_card_number_tail | string | 银行卡尾号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_2_3.shtml)
