---
title: 银行批次单号查询批次单
description: 批次单号查单接口。转账处理后延迟一段时间（异步进行转账），服务商可以通过该接口查询转账批次单以及指定状态的转账明细单。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| out_batch_no {data-required data-indent=1} | string | 银行批次单号
| need_query_detail {data-required data-indent=1} | boolean | 是否查询转账明细单
| offset {data-indent=1} | integer | 请求资源起始位置
| limit {data-indent=1} | integer | 最大资源条数
| detail_state {data-indent=1} | string | 明细状态<br/>`ALL` \| `SUCCESS` \| `FAIL` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->bankTransfer->batches->outBatchNo->_out_batch_no_->getAsync([
  'query' => [
    'out_batch_no'      => 'plfk2020042013',
    'need_query_detail' => true,
    'offset'            => 0,
    'limit'             => 20,
    'detail_state'      => 'FAIL',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/bank-transfer/batches/out-batch-no/{out_batch_no}')->getAsync([
  'query' => [
    'out_batch_no'      => 'plfk2020042013',
    'need_query_detail' => true,
    'offset'            => 0,
    'limit'             => 20,
    'detail_state'      => 'FAIL',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/bank-transfer/batches/out-batch-no/{out_batch_no}']->getAsync([
  'query' => [
    'out_batch_no'      => 'plfk2020042013',
    'need_query_detail' => true,
    'offset'            => 0,
    'limit'             => 20,
    'detail_state'      => 'FAIL',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->bankTransfer->batches->outBatchNo->_out_batch_no_->get([
  'query' => [
    'out_batch_no'      => 'plfk2020042013',
    'need_query_detail' => true,
    'offset'            => 0,
    'limit'             => 20,
    'detail_state'      => 'FAIL',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/bank-transfer/batches/out-batch-no/{out_batch_no}')->get([
  'query' => [
    'out_batch_no'      => 'plfk2020042013',
    'need_query_detail' => true,
    'offset'            => 0,
    'limit'             => 20,
    'detail_state'      => 'FAIL',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/bank-transfer/batches/out-batch-no/{out_batch_no}']->get([
  'query' => [
    'out_batch_no'      => 'plfk2020042013',
    'need_query_detail' => true,
    'offset'            => 0,
    'limit'             => 20,
    'detail_state'      => 'FAIL',
  ],
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
| transfer_scene {data-required} | string | 转账场景<br/>`ORDINARY_TRANSFER` \| `PAYROLL_CARD_TRANSFER` 枚举值之一
| batch_name {data-required} | string | 批次名称
| batch_remark {data-required} | string | 批次备注
| attach_remark | string | 附加信息
| transfer_purpose {data-required} | string | 批量转账用途<br/>`GOODSPAYMENT` \| `COMMISSION` \| `REFUND` \| `REIMBURSEMENT` \| `FREIGHT` \| `OTHERS` 枚举值之一
| batch_state {data-required} | string | 批次状态<br/>`ACCEPTED` \| `PROCESSING` \| `FINISHED` \| `CLOSED` 枚举值之一
| close_reason | string | 批次关闭原因<br/>`MERCHANT_REVOCATION` \| `OVERDUE_CLOSE` 枚举值之一
| total_amount {data-required} | integer | 转账总金额
| total_count {data-required} | integer | 转账总笔数
| create_time | string | 批次创建时间
| update_time | string | 批次更新时间
| success_amount | integer | 转账成功金额
| success_count | integer | 转账成功笔数
| fail_amount | integer | 转账失败金额
| fail_count | integer | 转账失败笔数
| transfer_detail_list {data-required} | object[] {data-tooltip="对应PHP的array"} | 转账明细单列表
| detail_id {data-required data-indent=1} | string | 微信支付明细单号
| out_detail_no {data-required data-indent=1} | string | 银行明细单号
| detail_state {data-required data-indent=1} | string | 明细状态<br/>`PROCESSING` \| `SUCCESS` \| `REFUND` 枚举值之一
| fail_reason {data-indent=1} | string | 明细失败原因<br/>`ACCOUNT_FROZEN` \| `REAL_NAME_CHECK_FAIL` \| `NAME_NOT_CORRECT` \| `OPENID_INVALID` \| `TRANSFER_QUOTA_EXCEED` \| `DAY_RECEIVED_QUOTA_EXCEED` \| `MONTH_RECEIVED_QUOTA_EXCEED` \| `DAY_RECEIVED_COUNT_EXCEED` \| `PRODUCT_AUTH_CHECK_FAIL` \| `OVERDUE_CLOSE` \| `ID_CARD_NOT_CORRECT` \| `ACCOUNT_NOT_EXIST` \| `TRANSFER_RISK` \| `PAYROLL_CARD_ALREADY_LOGOUT` \| `PAYROLL_CARD_ALREADY_FROZEN` \| `PAYROLL_CARD_UNAUTHORIZED` \| `PAYROLL_CARD_USER_NOT_OPEN` \| `PAYROLL_CARD_NAME_CARD_NOT_MATCH` \| `PAYROLL_CARD_ID_CARD_NOT_MATCH` \| `PAYROLL_CARD_BANKCARD_UNBUNDLING` \| `BANK_CARD_COLLECTIONS_ABOVE_QUOTA` \| `BANK_CARD_ACCOUNT_ABNORMAL` \| `BANK_CARD_STATUS_ABNORMAL` \| `BANK_CARD_BANK_INFO_WRONG` \| `BANK_CARD_CARD_INFO_WRONG` \| `OTHER_FAIL_REASON_TYPE` \| `REALNAME_ACCOUNT_RECEIVED_QUOTA_EXCEED` \| `TRANSFER_REMARK_SET_FAIL` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_2_4.shtml)
