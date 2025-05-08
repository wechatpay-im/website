---
title: 查询商家转账批次电子回单
description: 查询商家转账批次汇总电子回单接口，商户通过该接口可以查询商家转账批次汇总电子回单受理进度信息，当电子回单文件生成结束后，将返回电子回单文件的hash值、电子回单文件的下载地址等。前置条件：只支持查询最近2年内的转账批次单
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_batch_no {data-required} | string | 商家批次单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-required data-indent=1} | string | 二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->insurance->mchTransfer->batches->summaryReceipts->outBatchNo->_out_batch_no_->getAsync([
  'out_batch_no' => 'sjzz20230223',
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
$instance->chain('v3/platsolution/insurance/mch-transfer/batches/summary-receipts/out-batch-no/{out_batch_no}')->getAsync([
  'out_batch_no' => 'sjzz20230223',
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
$instance['v3/platsolution/insurance/mch-transfer/batches/summary-receipts/out-batch-no/{out_batch_no}']->getAsync([
  'out_batch_no' => 'sjzz20230223',
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
$response = $instance->v3->platsolution->insurance->mchTransfer->batches->summaryReceipts->outBatchNo->_out_batch_no_->get([
  'out_batch_no' => 'sjzz20230223',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/insurance/mch-transfer/batches/summary-receipts/out-batch-no/{out_batch_no}')->get([
  'out_batch_no' => 'sjzz20230223',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/insurance/mch-transfer/batches/summary-receipts/out-batch-no/{out_batch_no}']->get([
  'out_batch_no' => 'sjzz20230223',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| batch_id {data-required} | string | 商家转账批次单号
| out_batch_no {data-required} | string | 商家批次单号
| sub_mchid {data-required} | string | 二级商户号
| receipt_state {data-required} | string | 电子回单状态<br/>`ACCEPTED` \| `FINISHED` 枚举值之一
| hash_type | string | 电子回单文件的hash方法
| hash_value | string | 电子回单文件的hash值
| download_url | string | 电子回单文件的下载地址

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013504227)
