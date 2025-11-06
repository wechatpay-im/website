---
title: 查询单笔转账电子回单
description: 商户可以通过该接口查看回单申请进度。请务必对比下载的回单文件的摘要值与查询接口返回的摘要值的一致性，确保得到的回单文件的真实性和完整性。下载地址的有效期为10分钟，超过10分钟后需要重新通过该接口获取下载地址（不需要重新申请）。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_bill_no {data-required} | string | 商户转账单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-required data-indent=1} | string | 二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundApp->mchTransfer->partner->electronicReceipts->_out_bill_no_->getAsync([
  'out_bill_no' => 'plfk2020042013',
  'query' => [
    'sub_mchid' => '1900001121',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/fund-app/mch-transfer/partner/electronic-receipts/{out_bill_no}')->getAsync([
  'out_bill_no' => 'plfk2020042013',
  'query' => [
    'sub_mchid' => '1900001121',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/fund-app/mch-transfer/partner/electronic-receipts/{out_bill_no}']->getAsync([
  'out_bill_no' => 'plfk2020042013',
  'query' => [
    'sub_mchid' => '1900001121',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundApp->mchTransfer->partner->electronicReceipts->_out_bill_no_->get([
  'out_bill_no' => 'plfk2020042013',
  'query' => [
    'sub_mchid' => '1900001121',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/fund-app/mch-transfer/partner/electronic-receipts/{out_bill_no}')->get([
  'out_bill_no' => 'plfk2020042013',
  'query' => [
    'sub_mchid' => '1900001121',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/fund-app/mch-transfer/partner/electronic-receipts/{out_bill_no}']->get([
  'out_bill_no' => 'plfk2020042013',
  'query' => [
    'sub_mchid' => '1900001121',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 二级商户号
| out_bill_no {data-required} | string | 商户转账单号
| state {data-required} | string | 申请单状态<br/>`GENERATING` \| `FINISHED` 枚举值之一
| create_time {data-required} | string | 申请单创建时间
| update_time | string | 申请单更新时间
| hash_type | string | 回单文件摘要类型<br/>`SM3` 枚举值
| hash_value | string | 回单文件摘要值
| download_url | string | 回单文件下载地址

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016315544)
