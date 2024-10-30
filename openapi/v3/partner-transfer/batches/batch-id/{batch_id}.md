---
title: 微信支付批次单号查询批次单
description: 服务商可以通过该接口查询转账批次单以及指定状态的转账明细单。
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
| detail_status {data-indent=1} | string | 明细状态

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->partnerTransfer->batches->batchId->_batch_id_->getAsync([
  'batch_id' => '1030000071100999991182020050700019480001',
  'query' => [
    'need_query_detail' => true,
    'offset' => 0,
    'limit' => 20,
    'detail_status' => 'FAIL',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/partner-transfer/batches/batch-id/{batch_id}')->getAsync([
  'batch_id' => '1030000071100999991182020050700019480001',
  'query' => [
    'need_query_detail' => true,
    'offset' => 0,
    'limit' => 20,
    'detail_status' => 'FAIL',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/partner-transfer/batches/batch-id/{batch_id}']->getAsync([
  'batch_id' => '1030000071100999991182020050700019480001',
  'query' => [
    'need_query_detail' => true,
    'offset' => 0,
    'limit' => 20,
    'detail_status' => 'FAIL',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->partnerTransfer->batches->batchId->_batch_id_->get([
  'batch_id' => '1030000071100999991182020050700019480001',
  'query' => [
    'need_query_detail' => true,
    'offset' => 0,
    'limit' => 20,
    'detail_status' => 'FAIL',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/partner-transfer/batches/batch-id/{batch_id}')->get([
  'batch_id' => '1030000071100999991182020050700019480001',
  'query' => [
    'need_query_detail' => true,
    'offset' => 0,
    'limit' => 20,
    'detail_status' => 'FAIL',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/partner-transfer/batches/batch-id/{batch_id}']->get([
  'batch_id' => '1030000071100999991182020050700019480001',
  'query' => [
    'need_query_detail' => true,
    'offset' => 0,
    'limit' => 20,
    'detail_status' => 'FAIL',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid | string | 服务商商户号
| sub_mchid | string | 特约商户号
| out_batch_no | string | 商家批次单号
| batch_id | string | 微信支付批次单号
| sub_appid | string | 特约商户appid
| batch_status | string | 批次状态
| batch_type | string | 批次类型
| authorization_type | string | 特约商户授权类型
| batch_name | string | 批次名称
| batch_remark | string | 批次备注
| close_reason | string | 批次关闭原因
| total_amount | integer | 转账总金额
| total_num | integer | 转账总笔数
| create_time | string | 批次创建时间
| update_time | string | 批次更新时间
| success_amount | integer | 转账成功金额
| success_num | integer | 转账成功笔数
| fail_amount | integer | 转账失败金额
| fail_num | integer | 转账失败笔数
| transfer_detail_list | object[] | 转账明细单列表
| detail_id {data-indent=1} | string | 微信支付明细单号
| out_detail_no {data-indent=1} | string | 商家明细单号
| detail_status {data-indent=1} | string | 明细状态
| sp_appid | string | 服务商的appid
| transfer_purpose | string | 批量转账用途
| transfer_scene | string | 转账场景

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_7.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter3_2.shtml)
