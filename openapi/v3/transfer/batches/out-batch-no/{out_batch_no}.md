---
title: 商家批次单号查询批次单
description: 商户可以通过该接口查询转账批次单以及指定状态的转账明细单。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_batch_no {data-required} | string | 商家批次单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| need_query_detail {data-required data-indent=1} | boolean | 是否查询转账明细单
| offset {data-indent=1} | integer | 请求资源起始位置
| limit {data-indent=1} | integer | 最大资源条数
| detail_status {data-indent=1} | string | 明细状态

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->transfer->batches->outBatchNo->_out_batch_no_->getAsync([
  'out_batch_no' => 'plfk2020042013',
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
$instance->chain('v3/transfer/batches/out-batch-no/{out_batch_no}')->getAsync([
  'out_batch_no' => 'plfk2020042013',
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
$instance['v3/transfer/batches/out-batch-no/{out_batch_no}']->getAsync([
  'out_batch_no' => 'plfk2020042013',
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
$response = $instance->v3->transfer->batches->outBatchNo->_out_batch_no_->get([
  'out_batch_no' => 'plfk2020042013',
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
$response = $instance->chain('v3/transfer/batches/out-batch-no/{out_batch_no}')->get([
  'out_batch_no' => 'plfk2020042013',
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
$response = $instance['v3/transfer/batches/out-batch-no/{out_batch_no}']->get([
  'out_batch_no' => 'plfk2020042013',
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
| transfer_batch {data-required} | object {data-tooltip="对应PHP的array"} | 转账批次单
| mchid {data-required data-indent=1} | string | 商户号
| out_batch_no {data-required data-indent=1} | string | 商家批次单号
| batch_id {data-required data-indent=1} | string | 微信批次单号
| appid {data-required data-indent=1} | string | 直连商户的appid
| batch_status {data-required data-indent=1} | string | 批次状态
| batch_type {data-required data-indent=1} | string | 批次类型
| batch_name {data-required data-indent=1} | string | 批次名称
| batch_remark {data-required data-indent=1} | string | 批次备注
| close_reason {data-indent=1} | string | 批次关闭原因
| total_amount {data-required data-indent=1} | integer | 转账总金额
| total_num {data-required data-indent=1} | integer | 转账总笔数
| create_time {data-indent=1} | string | 批次创建时间
| update_time {data-indent=1} | string | 批次更新时间
| success_amount {data-indent=1} | integer | 转账成功金额
| success_num {data-indent=1} | integer | 转账成功笔数
| fail_amount {data-indent=1} | integer | 转账失败金额
| fail_num {data-indent=1} | integer | 转账失败笔数
| transfer_scene_id {data-indent=1} | string | 转账场景ID
| transfer_detail_list | object[] {data-tooltip="对应PHP的array"} | 转账明细单列表
| detail_id {data-required data-indent=1} | string | 微信明细单号
| out_detail_no {data-required data-indent=1} | string | 商家明细单号
| detail_status {data-required data-indent=1} | string | 明细状态
| offset | integer | 请求资源起始位置
| limit | integer | 最大资源条数

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer/chapter3_4.shtml)
