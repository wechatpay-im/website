---
title: 微信支付转账批次单号查询批次单
description: 微信商家转账批次单号查单接口。商户可以通过该接口查询转账批次单以及指定状态的转账明细单。返回消息中包含微信批次单号、批次状态、批次类型、转账总金额、转账总笔数、成功金额、失败金额等信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| batch_id {data-required} | string | 商家转账批次单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-required data-indent=1} | string | 二级商户号
| need_query_detail {data-required data-indent=1} | boolean | 是否查询转账明细单
| detail_state {data-indent=1} | string | 明细状态<br/>`ALL` \| `WAIT_PAY` \| `SUCCESS` \| `FAIL` 枚举值之一
| offset {data-indent=1} | number | 请求资源起始位置
| limit {data-indent=1} | number | 最大资源条数

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->mchTransfer->batches->batchId->_batch_id_->getAsync([
  'batch_id' => '131000011085109987515042023022300246500006',
  'query' => [
    'sub_mchid'         => '1900102208',
    'need_query_detail' => true,
    'detail_state'      => 'FAIL',
    'offset'            => 0,
    'limit'             => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/platsolution/mch-transfer/batches/batch-id/{batch_id}')->getAsync([
  'batch_id' => '131000011085109987515042023022300246500006',
  'query' => [
    'sub_mchid'         => '1900102208',
    'need_query_detail' => true,
    'detail_state'      => 'FAIL',
    'offset'            => 0,
    'limit'             => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/platsolution/mch-transfer/batches/batch-id/{batch_id}']->getAsync([
  'batch_id' => '131000011085109987515042023022300246500006',
  'query' => [
    'sub_mchid'         => '1900102208',
    'need_query_detail' => true,
    'detail_state'      => 'FAIL',
    'offset'            => 0,
    'limit'             => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->platsolution->mchTransfer->batches->batchId->_batch_id_->get([
  'batch_id' => '131000011085109987515042023022300246500006',
  'query' => [
    'sub_mchid'         => '1900102208',
    'need_query_detail' => true,
    'detail_state'      => 'FAIL',
    'offset'            => 0,
    'limit'             => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/mch-transfer/batches/batch-id/{batch_id}')->get([
  'batch_id' => '131000011085109987515042023022300246500006',
  'query' => [
    'sub_mchid'         => '1900102208',
    'need_query_detail' => true,
    'detail_state'      => 'FAIL',
    'offset'            => 0,
    'limit'             => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/mch-transfer/batches/batch-id/{batch_id}']->get([
  'batch_id' => '131000011085109987515042023022300246500006',
  'query' => [
    'sub_mchid'         => '1900102208',
    'need_query_detail' => true,
    'detail_state'      => 'FAIL',
    'offset'            => 0,
    'limit'             => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| transfer_batch {data-required} | object {data-tooltip="对应PHP的array"} | 转账批次单
| out_batch_no {data-required data-indent=1} | string | 商家批次单号
| batch_id {data-required data-indent=1} | string | 商家转账批次单号
| sp_appid {data-required data-indent=1} | string | 服务商应用ID
| sub_mchid {data-required data-indent=1} | string | 二级商户号
| sub_appid {data-indent=1} | string | 二级商户应用ID
| batch_state {data-required data-indent=1} | string | 批次状态
| batch_name {data-required data-indent=1} | string | 批次名称
| batch_remark {data-required data-indent=1} | string | 批次备注
| close_reason {data-indent=1} | string | 批次关闭原因
| total_amount {data-required data-indent=1} | number | 转账总金额
| total_num {data-required data-indent=1} | number | 转账总笔数
| create_time {data-required data-indent=1} | string | 批次创建时间
| success_amount {data-required data-indent=1} | number | 转账成功金额
| success_num {data-required data-indent=1} | number | 转账成功笔数
| failed_amount {data-required data-indent=1} | number | 转账失败金额
| failed_num {data-required data-indent=1} | number | 转账失败笔数
| transfer_scene_id {data-required data-indent=1} | string | 转账场景ID
| data | object[] {data-tooltip="对应PHP的array"} | 转账明细单列表
| detail_id {data-required data-indent=1} | string | 商家转账明细单号
| out_detail_no {data-required data-indent=1} | string | 商家明细单号
| detail_state {data-required data-indent=1} | string | 明细状态
| offset | number | 请求资源起始位置
| limit | number | 最大资源条数

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/transfer-batch/transfer-batch-get-by-id.html)
