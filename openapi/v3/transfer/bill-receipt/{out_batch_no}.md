---
title: 查询转账电子回单
description: 查询转账电子回单接口，商户通过该接口可以查询电子回单受理进度信息，包括电子回单据信息，电子回单文件的hash值，电子回单文件的下载地址等
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_batch_no {data-required} | string | 商家批次单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->transfer->billReceipt->_out_batch_no_->getAsync([
  'out_batch_no' => 'plfk2020042013',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/transfer/bill-receipt/{out_batch_no}')->getAsync([
  'out_batch_no' => 'plfk2020042013',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/transfer/bill-receipt/{out_batch_no}']->getAsync([
  'out_batch_no' => 'plfk2020042013',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->transfer->billReceipt->_out_batch_no_->get([
  'out_batch_no' => 'plfk2020042013',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/transfer/bill-receipt/{out_batch_no}')->get([
  'out_batch_no' => 'plfk2020042013',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/transfer/bill-receipt/{out_batch_no}']->get([
  'out_batch_no' => 'plfk2020042013',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_batch_no {data-required} | string | 商家批次单号
| signature_no {data-required} | string | 电子回单申请单号
| signature_status | string | 电子回单状态
| hash_type | string | 电子回单文件的hash方法
| hash_value | string | 电子回单文件的hash值
| download_url | string | 电子回单文件的下载地址
| create_time | string | 创建时间
| update_time | string | 更新时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012458950) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012718640) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012721812)
