---
title: 商户明细单号查询明细单
description: 商户明细单号查单接口。商户可以通过该接口查询单笔转账明细单。返回消息中包含微信明细单号、明细状态、转账金额、失败原因、收款用户姓名、收款用户OpenID等信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_batch_no {data-required} | string | 商家批次单号
| out_detail_no {data-required} | string | 商家明细单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-required data-indent=1} | string | 二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->insurance->mchTransfer->batches->outBatchNo->_out_batch_no_->details->outDetailNo->_out_detail_no_->getAsync([
  'out_batch_no' => 'sjzz20230223',
  'out_detail_no' => 'x23zy545Bd5436',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/platsolution/insurance/mch-transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}')->getAsync([
  'out_batch_no' => 'sjzz20230223',
  'out_detail_no' => 'x23zy545Bd5436',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/platsolution/insurance/mch-transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}']->getAsync([
  'out_batch_no' => 'sjzz20230223',
  'out_detail_no' => 'x23zy545Bd5436',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->platsolution->insurance->mchTransfer->batches->outBatchNo->_out_batch_no_->details->outDetailNo->_out_detail_no_->get([
  'out_batch_no' => 'sjzz20230223',
  'out_detail_no' => 'x23zy545Bd5436',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/insurance/mch-transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}')->get([
  'out_batch_no' => 'sjzz20230223',
  'out_detail_no' => 'x23zy545Bd5436',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/insurance/mch-transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}']->get([
  'out_batch_no' => 'sjzz20230223',
  'out_detail_no' => 'x23zy545Bd5436',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_batch_no {data-required} | string | 商家批次单号
| batch_id {data-required} | string | 商家转账批次单号
| out_detail_no {data-required} | string | 商家明细单号
| detail_id {data-required} | string | 商家转账明细单号
| sp_appid {data-required} | string | 服务商应用ID
| sub_mchid {data-required} | string | 二级商户号
| sub_appid | string | 二级商户应用ID
| create_time {data-required} | string | 转账发起时间
| detail_state {data-required} | string | 明细状态<br/>`INIT` \| `ALL` \| `WAIT_PAY` \| `SUCCESS` \| `FAIL` \| `BANK_REFUND` 枚举值之一
| transfer_amount {data-required} | number | 转账金额
| transfer_remark {data-required} | string | 转账备注
| fail_reason | string | 明细失败原因<br/>`ACCOUNT_FROZEN` \| `REAL_NAME_CHECK_FAIL` \| `NAME_NOT_CORRECT` \| `OPENID_INVALID` \| `TRANSFER_QUOTA_EXCEED` \| `DAY_RECEIVED_QUOTA_EXCEED` \| `MONTH_RECEIVED_QUOTA_EXCEED` \| `DAY_RECEIVED_COUNT_EXCEED` \| `PRODUCT_AUTH_CHECK_FAIL` \| `OVERDUE_CLOSE` \| `ID_CARD_NOT_CORRECT` \| `ACCOUNT_NOT_EXIST` \| `TRANSFER_RISK` \| `PAYROLL_CARD_ALREADY_LOGOUT` \| `PAYROLL_CARD_ALREADY_FROZEN` \| `PAYROLL_CARD_UNAUTHORIZED` \| `PAYROLL_CARD_USER_NOT_OPEN` \| `PAYROLL_CARD_NAME_CARD_NOT_MATCH` \| `PAYROLL_CARD_ID_CARD_NOT_MATCH` \| `PAYROLL_CARD_BANKCARD_UNBUNDLING` \| `BANK_CARD_COLLECTIONS_ABOVE_QUOTA` \| `BANK_CARD_ACCOUNT_ABNORMAL` \| `BANK_CARD_STATUS_ABNORMAL` \| `BANK_CARD_BANK_INFO_WRONG` \| `BANK_CARD_CARD_INFO_WRONG` \| `OTHER_FAIL_REASON_TYPE` \| `REALNAME_ACCOUNT_RECEIVED_QUOTA_EXCEED` \| `RECEIVE_ACCOUNT_NOT_PERMMIT` \| `PAYEE_ACCOUNT_ABNORMAL` \| `PAYER_ACCOUNT_ABNORMAL` \| `TRANSFER_REMARK_SET_FAIL` \| `TRANSFER_SCENE_INVALID` \| `TRANSFER_SCENE_UNAVAILABLE` \| `RECEIVE_ACCOUNT_NOT_CONFIGURE` \| `BLOCK_B2C_USERLIMITAMOUNT_BSRULE_MONTH` \| `BLOCK_B2C_USERLIMITAMOUNT_MONTH` \| `MERCHANT_REJECT` \| `MERCHANT_NOT_CONFIRM` \| `BANK_CARD_PARAM_ERROR` \| `BANK_CARD_TYPE_NOT_SUPPORTED` \| `RESERVATION_STATE_INVALID` \| `EXCEEDED_ESTIMATED_AMOUNT` \| `RESERVATION_INFO_NOT_MATCH` \| `RESERVATION_SCENE_NOT_MATCH` 枚举值之一
| openid | string | 收款用户OpenID
| bank_type | string | 收款银行类型
| user_name | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 收款用户姓名
| transfer_finish_time | string | 转账完成时间
| bank_refund_time | string | 银行退票时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013504224)
