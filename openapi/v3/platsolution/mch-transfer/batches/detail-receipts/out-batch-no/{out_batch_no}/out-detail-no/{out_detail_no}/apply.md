---
title: 申请商家转账明细电子回单
description: 商家转账明细电子回单申请受理接口，商户通过该接口可以申请受理商家转账明细电子回单。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_batch_no {data-required} | string | 商家批次单号
| out_detail_no {data-required} | string | 商家明细单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-required data-indent=1} | string | 二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->mchTransfer->batches->detailReceipts->outBatchNo->_out_batch_no_->outDetailNo->_out_detail_no_->apply->postAsync([
  'out_batch_no' => 'sjzz20230223',
  'out_detail_no' => 'x23zy545Bd5436',
  'json' => [
    'sub_mchid' => '1900102208',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/platsolution/mch-transfer/batches/detail-receipts/out-batch-no/{out_batch_no}/out-detail-no/{out_detail_no}/apply')->postAsync([
  'out_batch_no' => 'sjzz20230223',
  'out_detail_no' => 'x23zy545Bd5436',
  'json' => [
    'sub_mchid' => '1900102208',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/platsolution/mch-transfer/batches/detail-receipts/out-batch-no/{out_batch_no}/out-detail-no/{out_detail_no}/apply']->postAsync([
  'out_batch_no' => 'sjzz20230223',
  'out_detail_no' => 'x23zy545Bd5436',
  'json' => [
    'sub_mchid' => '1900102208',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->platsolution->mchTransfer->batches->detailReceipts->outBatchNo->_out_batch_no_->outDetailNo->_out_detail_no_->apply->post([
  'out_batch_no' => 'sjzz20230223',
  'out_detail_no' => 'x23zy545Bd5436',
  'json' => [
    'sub_mchid' => '1900102208',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/mch-transfer/batches/detail-receipts/out-batch-no/{out_batch_no}/out-detail-no/{out_detail_no}/apply')->post([
  'out_batch_no' => 'sjzz20230223',
  'out_detail_no' => 'x23zy545Bd5436',
  'json' => [
    'sub_mchid' => '1900102208',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/mch-transfer/batches/detail-receipts/out-batch-no/{out_batch_no}/out-detail-no/{out_detail_no}/apply']->post([
  'out_batch_no' => 'sjzz20230223',
  'out_detail_no' => 'x23zy545Bd5436',
  'json' => [
    'sub_mchid' => '1900102208',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required}| string | 二级商户号
| out_batch_no {data-required}| string | 商家批次单号
| out_detail_no {data-required}| string | 商家明细单号
| receipt_state {data-required}| string | 电子回单状态

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-transfer/receipts/receipt-apply-by-detail-out-no.html)
