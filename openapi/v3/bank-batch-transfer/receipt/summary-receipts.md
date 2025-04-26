# 受理及查询汇总电子回单结果 {#mix}

## 受理汇总电子回单 {#post}

银行付款模式转账汇总电子回单申请受理接口，商户通过该接口可以申请受理电子回单服务。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_batch_no {data-required data-indent=1} | string | 银行转账批次单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->bankBatchTransfer->receipt->summaryReceipts->postAsync([
  'json' => [
    'out_batch_no' => 'GD2021011610162610BBdkkIwcu3',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/bank-batch-transfer/receipt/summary-receipts')->postAsync([
  'json' => [
    'out_batch_no' => 'GD2021011610162610BBdkkIwcu3',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/bank-batch-transfer/receipt/summary-receipts']->postAsync([
  'json' => [
    'out_batch_no' => 'GD2021011610162610BBdkkIwcu3',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->bankBatchTransfer->receipt->summaryReceipts->post([
  'json' => [
    'out_batch_no' => 'GD2021011610162610BBdkkIwcu3',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/bank-batch-transfer/receipt/summary-receipts')->post([
  'json' => [
    'out_batch_no' => 'GD2021011610162610BBdkkIwcu3',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/bank-batch-transfer/receipt/summary-receipts']->post([
  'json' => [
    'out_batch_no' => 'GD2021011610162610BBdkkIwcu3',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_batch_no {data-required} | string | 银行转账批次单号
| receipt_no {data-required} | string | 电子回单申请单号
| receipt_state | string | 电子回单状态
| hash_type | string | 电子回单文件的hash方法
| hash_value | string | 电子回单文件的hash值
| download_url | string | 电子回单文件的下载地址
| create_time | string | 创建时间
| update_time | string | 更新时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012470746)

## 查询汇总电子回单受理结果 {#get}

查询银行付款模式转账汇总电子回单接口，商户通过该接口可以查询电子回单受理进度信息，包括电子回单据信息，电子回单文件的hash值，电子回单文件的下载地址等

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| out_batch_no {data-required data-indent=1} | string | 银行转账批次单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->bankBatchTransfer->receipt->summaryReceipts->getAsync([
  'query' => [
    'out_batch_no' => 'GD2021011610162610BBdkkIwcu3',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/bank-batch-transfer/receipt/summary-receipts')->getAsync([
  'query' => [
    'out_batch_no' => 'GD2021011610162610BBdkkIwcu3',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/bank-batch-transfer/receipt/summary-receipts']->getAsync([
  'query' => [
    'out_batch_no' => 'GD2021011610162610BBdkkIwcu3',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->bankBatchTransfer->receipt->summaryReceipts->get([
  'query' => [
    'out_batch_no' => 'GD2021011610162610BBdkkIwcu3',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/bank-batch-transfer/receipt/summary-receipts')->get([
  'query' => [
    'out_batch_no' => 'GD2021011610162610BBdkkIwcu3',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/bank-batch-transfer/receipt/summary-receipts']->get([
  'query' => [
    'out_batch_no' => 'GD2021011610162610BBdkkIwcu3',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_batch_no {data-required} | string | 银行转账批次单号
| receipt_no {data-required} | string | 电子回单申请单号
| receipt_state | string | 电子回单状态
| hash_type | string | 电子回单文件的hash方法
| hash_value | string | 电子回单文件的hash值
| download_url | string | 电子回单文件的下载地址
| create_time | string | 创建时间
| update_time | string | 更新时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012470761)
