---
title: 获取购付汇账单文件下载链接
description: 服务商可以调用此接口获取购付汇账单文件下载链接。在有效期内请求下载链接可以下载出账日为指定日期的购付汇账单文件。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| bill_date {data-required data-indent=1} | string | 账单日期
| sub_mchid {data-indent=1} | string | 子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundsToOversea->billDownloadUrl->getAsync([
  'query' => [
    'bill_date' => '2021-01-01',
    'sub_mchid' => '19000000001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/funds-to-oversea/bill-download-url')->getAsync([
  'query' => [
    'bill_date' => '2021-01-01',
    'sub_mchid' => '19000000001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/funds-to-oversea/bill-download-url']->getAsync([
  'query' => [
    'bill_date' => '2021-01-01',
    'sub_mchid' => '19000000001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundsToOversea->billDownloadUrl->get([
  'query' => [
    'bill_date' => '2021-01-01',
    'sub_mchid' => '19000000001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/funds-to-oversea/bill-download-url')->get([
  'query' => [
    'bill_date' => '2021-01-01',
    'sub_mchid' => '19000000001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/funds-to-oversea/bill-download-url']->get([
  'query' => [
    'bill_date' => '2021-01-01',
    'sub_mchid' => '19000000001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| hash_type {data-required}| string | 哈希类型
| hash_value {data-required}| string | 哈希值
| download_url {data-required}| string | 下载地址

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_10_4.shtml)
