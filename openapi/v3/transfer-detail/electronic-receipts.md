# 转账明细电子回单受理 {#post}

受理转账明细电子回单接口，商户通过该接口可以申请受理转账明细单电子回单服务。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| accept_type {data-required data-indent=1} | string | 受理类型<br/>`BATCH_TRANSFER` \| `TRANSFER_TO_POCKET` \| `TRANSFER_TO_BANK` 枚举值之一
| out_batch_no {data-indent=1} | string | 商家转账批次单号
| out_detail_no {data-required data-indent=1} | string | 商家转账明细单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->transferDetail->electronicReceipts->postAsync([
  'json' => [
    'accept_type'   => 'BATCH_TRANSFER',
    'out_batch_no'  => 'GD2021011610162610BBdkkIwcu3',
    'out_detail_no' => 'mx0911231610162610v4CNkO4HAf',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/transfer-detail/electronic-receipts')->postAsync([
  'json' => [
    'accept_type'   => 'BATCH_TRANSFER',
    'out_batch_no'  => 'GD2021011610162610BBdkkIwcu3',
    'out_detail_no' => 'mx0911231610162610v4CNkO4HAf',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/transfer-detail/electronic-receipts']->postAsync([
  'json' => [
    'accept_type'   => 'BATCH_TRANSFER',
    'out_batch_no'  => 'GD2021011610162610BBdkkIwcu3',
    'out_detail_no' => 'mx0911231610162610v4CNkO4HAf',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->transferDetail->electronicReceipts->post([
  'json' => [
    'accept_type'   => 'BATCH_TRANSFER',
    'out_batch_no'  => 'GD2021011610162610BBdkkIwcu3',
    'out_detail_no' => 'mx0911231610162610v4CNkO4HAf',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/transfer-detail/electronic-receipts')->post([
  'json' => [
    'accept_type'   => 'BATCH_TRANSFER',
    'out_batch_no'  => 'GD2021011610162610BBdkkIwcu3',
    'out_detail_no' => 'mx0911231610162610v4CNkO4HAf',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/transfer-detail/electronic-receipts']->post([
  'json' => [
    'accept_type'   => 'BATCH_TRANSFER',
    'out_batch_no'  => 'GD2021011610162610BBdkkIwcu3',
    'out_detail_no' => 'mx0911231610162610v4CNkO4HAf',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| accept_type {data-required} | string | 受理类型
| out_batch_no | string | 商家转账批次单号
| out_detail_no {data-required} | string | 商家转账明细单号
| signature_no {data-required} | string | 电子回单受理单号
| signature_status | string | 电子回单状态
| hash_type | string | 电子回单文件的hash方法
| hash_value | string | 电子回单文件的hash值
| download_url | string | 电子回单文件的下载地址

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_13.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter4_4.shtml)

# 查询转账明细电子回单受理结果 {#get}

查询转账明细电子回单受理结果接口，商户通过该接口可以查询电子回单受理进度信息，包括电子回单据信息，电子回单文件的hash值，电子回单文件的下载地址等。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| accept_type {data-required data-indent=1} | string | 受理类型<br/>`BATCH_TRANSFER` \| `TRANSFER_TO_POCKET` \| `TRANSFER_TO_BANK` 枚举值之一
| out_batch_no {data-indent=1} | string | 商家转账批次单号
| out_detail_no {data-required data-indent=1} | string | 商家转账明细单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->transferDetail->electronicReceipts->getAsync([
  'query' => [
    'accept_type'   => 'BATCH_TRANSFER',
    'out_batch_no'  => 'GD2021011610162610BBdkkIwcu3',
    'out_detail_no' => 'mx0911231610162610v4CNkO4HAf',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/transfer-detail/electronic-receipts')->getAsync([
  'query' => [
    'accept_type'   => 'BATCH_TRANSFER',
    'out_batch_no'  => 'GD2021011610162610BBdkkIwcu3',
    'out_detail_no' => 'mx0911231610162610v4CNkO4HAf',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/transfer-detail/electronic-receipts']->getAsync([
  'query' => [
    'accept_type'   => 'BATCH_TRANSFER',
    'out_batch_no'  => 'GD2021011610162610BBdkkIwcu3',
    'out_detail_no' => 'mx0911231610162610v4CNkO4HAf',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->transferDetail->electronicReceipts->get([
  'query' => [
    'accept_type'   => 'BATCH_TRANSFER',
    'out_batch_no'  => 'GD2021011610162610BBdkkIwcu3',
    'out_detail_no' => 'mx0911231610162610v4CNkO4HAf',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/transfer-detail/electronic-receipts')->get([
  'query' => [
    'accept_type'   => 'BATCH_TRANSFER',
    'out_batch_no'  => 'GD2021011610162610BBdkkIwcu3',
    'out_detail_no' => 'mx0911231610162610v4CNkO4HAf',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/transfer-detail/electronic-receipts']->get([
  'query' => [
    'accept_type'   => 'BATCH_TRANSFER',
    'out_batch_no'  => 'GD2021011610162610BBdkkIwcu3',
    'out_detail_no' => 'mx0911231610162610v4CNkO4HAf',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| accept_type {data-required} | string | 受理类型
| out_batch_no | string | 商家转账批次单号
| out_detail_no {data-required} | string | 商家转账明细单号
| signature_no {data-required} | string | 电子回单受理单号
| signature_status | string | 电子回单状态
| hash_type | string | 电子回单文件的hash方法
| hash_value | string | 电子回单文件的hash值
| download_url | string | 电子回单文件的下载地址

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_14.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transfer_partner/chapter4_5.shtml)
