---
title: 微信支付明细单号查询明细单
description: 服务商可以通过该接口查询单笔转账明细单。
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
$instance->v3->partnerTransfer->batches->batchId->_batch_id_->details->detailId->_detail_id_->getAsync([
  'batch_id' => '1030000071100999991182020050700019480001',
  'detail_id' => '1040000071100999991182020050700019500100',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/partner-transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}')->getAsync([
  'batch_id' => '1030000071100999991182020050700019480001',
  'detail_id' => '1040000071100999991182020050700019500100',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/partner-transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}']->getAsync([
  'batch_id' => '1030000071100999991182020050700019480001',
  'detail_id' => '1040000071100999991182020050700019500100',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->partnerTransfer->batches->batchId->_batch_id_->details->detailId->_detail_id_->get([
  'batch_id' => '1030000071100999991182020050700019480001',
  'detail_id' => '1040000071100999991182020050700019500100',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/partner-transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}')->get([
  'batch_id' => '1030000071100999991182020050700019480001',
  'detail_id' => '1040000071100999991182020050700019500100',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/partner-transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}']->get([
  'batch_id' => '1030000071100999991182020050700019480001',
  'detail_id' => '1040000071100999991182020050700019500100',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid {data-required} | string | 服务商商户号
| out_batch_no {data-required} | string | 商家批次单号
| batch_id {data-required} | string | 微信支付批次单号
| appid | string | 商户的appid
| out_detail_no {data-required} | string | 商家明细单号
| detail_id {data-required} | string | 微信支付明细单号
| detail_status {data-required} | string | 明细状态
| transfer_amount {data-required} | integer | 转账金额
| transfer_remark {data-required} | string | 转账备注
| fail_reason | string | 明细失败原因<br/>`ACCOUNT_FROZEN` \| `REAL_NAME_CHECK_FAIL` \| `NAME_NOT_CORRECT` \| `OPENID_INVALID` \| `TRANSFER_QUOTA_EXCEED` \| `DAY_RECEIVED_QUOTA_EXCEED` \| `MONTH_RECEIVED_QUOTA_EXCEED` \| `DAY_RECEIVED_COUNT_EXCEED` \| `PRODUCT_AUTH_CHECK_FAIL` \| `OVERDUE_CLOSE` \| `ID_CARD_NOT_CORRECT` \| `ACCOUNT_NOT_EXIST` \| `TRANSFER_RISK` \| `PAYROLL_CARD_ALREADY_LOGOUT` \| `PAYROLL_CARD_ALREADY_FROZEN` \| `PAYROLL_CARD_UNAUTHORIZED` \| `PAYROLL_CARD_USER_NOT_OPEN` \| `PAYROLL_CARD_NAME_CARD_NOT_MATCH` \| `PAYROLL_CARD_ID_CARD_NOT_MATCH` \| `PAYROLL_CARD_BANKCARD_UNBUNDLING` \| `BANK_CARD_COLLECTIONS_ABOVE_QUOTA` \| `BANK_CARD_ACCOUNT_ABNORMAL` \| `BANK_CARD_STATUS_ABNORMAL` \| `BANK_CARD_BANK_INFO_WRONG` \| `BANK_CARD_CARD_INFO_WRONG` \| `OTHER_FAIL_REASON_TYPE` \| `REALNAME_ACCOUNT_RECEIVED_QUOTA_EXCEED` \| `RECEIVE_ACCOUNT_NOT_PERMMIT` \| `PAYEE_ACCOUNT_ABNORMAL` \| `PAYER_ACCOUNT_ABNORMAL` \| `TRANSFER_REMARK_SET_FAIL` \| `TRANSFER_SCENE_INVALID` \| `TRANSFER_SCENE_UNAVAILABLE` \| `RECEIVE_ACCOUNT_NOT_CONFIGURE` \| `BLOCK_B2C_USERLIMITAMOUNT_BSRULE_MONTH` \| `BLOCK_B2C_USERLIMITAMOUNT_MONTH` \| `MERCHANT_REJECT` \| `MERCHANT_NOT_CONFIRM` \| `BANK_CARD_PARAM_ERROR` \| `BANK_CARD_TYPE_NOT_SUPPORTED` 枚举值之一
| openid {data-required} | string | 收款用户openid
| username {data-required} | string | 收款用户姓名
| initiate_time {data-required} | string | 转账发起时间
| update_time {data-required} | string | 明细更新时间
| account_type | string | 收款账户类型<br/>`WECHATPAY_ACCOUNT` \| `BANK_ACCOUNT` 枚举值之一
| bank_name | string | 银行名称
| bank_card_number_tail | string | 银行卡尾号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012718324) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012465781)
