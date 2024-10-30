---
title: 微信支付批次单号查询批次单
description: 微信支付批次单号查单接口。转账处理后延迟一段时间（异步进行转账），服务商可以通过该接口查询转账批次单以及指定状态的转账明细单。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| batch_id | string | 微信支付批次单号
| query | object | 声明请求的查询参数
| need_query_detail {data-indent=1} | boolean | 是否查询转账明细单
| offset {data-indent=1} | integer | 请求资源起始位置
| limit {data-indent=1} | integer | 最大资源条数
| detail_state {data-indent=1} | string | 明细状态

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->bankTransfer->batches->batchId->_batch_id_->getAsync([
  'batch_id' => '1130000071100999991182020050700019480001',
  'query' => [
    'need_query_detail' => true,
    'offset' => 0,
    'limit' => 20,
    'detail_state' => 'FAIL',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/bank-transfer/batches/batch-id/{batch_id}')->getAsync([
  'batch_id' => '1130000071100999991182020050700019480001',
  'query' => [
    'need_query_detail' => true,
    'offset' => 0,
    'limit' => 20,
    'detail_state' => 'FAIL',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/bank-transfer/batches/batch-id/{batch_id}']->getAsync([
  'batch_id' => '1130000071100999991182020050700019480001',
  'query' => [
    'need_query_detail' => true,
    'offset' => 0,
    'limit' => 20,
    'detail_state' => 'FAIL',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->bankTransfer->batches->batchId->_batch_id_->get([
  'batch_id' => '1130000071100999991182020050700019480001',
  'query' => [
    'need_query_detail' => true,
    'offset' => 0,
    'limit' => 20,
    'detail_state' => 'FAIL',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/bank-transfer/batches/batch-id/{batch_id}')->get([
  'batch_id' => '1130000071100999991182020050700019480001',
  'query' => [
    'need_query_detail' => true,
    'offset' => 0,
    'limit' => 20,
    'detail_state' => 'FAIL',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/bank-transfer/batches/batch-id/{batch_id}']->get([
  'batch_id' => '1130000071100999991182020050700019480001',
  'query' => [
    'need_query_detail' => true,
    'offset' => 0,
    'limit' => 20,
    'detail_state' => 'FAIL',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| bank_sp_mchid | string | 银行服务商号
| platform_mchid | string | 服务平台商户号
| specialized_payment_mchid | string | 付款企业商户号
| sponsor_mchid | string | 实际出资商户号
| user_authorized_mchid | string | 用户授权商户号
| user_authorized_appid | string | 用户授权appid
| out_batch_no | string | 银行批次单号
| batch_id | string | 微信支付批次单号
| transfer_scene | string | 转账场景
| batch_name | string | 批次名称
| batch_remark | string | 批次备注
| attach_remark | string | 附加信息
| transfer_purpose | string | 批量转账用途
| batch_state | string | 批次状态
| close_reason | string | 批次关闭原因
| total_amount | integer | 转账总金额
| total_count | integer | 转账总笔数
| create_time | string | 批次创建时间
| update_time | string | 批次更新时间
| success_amount | integer | 转账成功金额
| success_count | integer | 转账成功笔数
| fail_amount | integer | 转账失败金额
| fail_count | integer | 转账失败笔数
| transfer_detail_list | object[] | 转账明细单列表
| detail_id {data-indent=1} | string | 微信支付明细单号
| out_detail_no {data-indent=1} | string | 银行明细单号
| detail_state {data-indent=1} | string | 明细状态
| fail_reason {data-indent=1} | string | 明细失败原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_2_2.shtml)
