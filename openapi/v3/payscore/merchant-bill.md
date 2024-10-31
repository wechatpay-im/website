---
title: 商户申请获取对账单
description: 商户可以调用此接口获取对账单文件的下载链接，并在有效期内请求下载链接可以下载对账单文件。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object | 声明请求的查询参数
| bill_date {data-indent=1} | string | 账单日期
| tar_type {data-indent=1} | string | 压缩类型<br/>`GZIP` 枚举值
| encryption_algorithm {data-indent=1} | string | 加密算法
| service_id {data-indent=1} | string | 服务ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->merchantBill->getAsync([
  'query' => [
    'bill_date' => '2019-06-11',
    'tar_type' => 'GZIP',
    'encryption_algorithm' => 'AEAD_AES_256_GCM',
    'service_id' => '2002000000000558128851361561536',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/merchant-bill')->getAsync([
  'query' => [
    'bill_date' => '2019-06-11',
    'tar_type' => 'GZIP',
    'encryption_algorithm' => 'AEAD_AES_256_GCM',
    'service_id' => '2002000000000558128851361561536',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/merchant-bill']->getAsync([
  'query' => [
    'bill_date' => '2019-06-11',
    'tar_type' => 'GZIP',
    'encryption_algorithm' => 'AEAD_AES_256_GCM',
    'service_id' => '2002000000000558128851361561536',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->merchantBill->get([
  'query' => [
    'bill_date' => '2019-06-11',
    'tar_type' => 'GZIP',
    'encryption_algorithm' => 'AEAD_AES_256_GCM',
    'service_id' => '2002000000000558128851361561536',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/merchant-bill')->get([
  'query' => [
    'bill_date' => '2019-06-11',
    'tar_type' => 'GZIP',
    'encryption_algorithm' => 'AEAD_AES_256_GCM',
    'service_id' => '2002000000000558128851361561536',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/merchant-bill']->get([
  'query' => [
    'bill_date' => '2019-06-11',
    'tar_type' => 'GZIP',
    'encryption_algorithm' => 'AEAD_AES_256_GCM',
    'service_id' => '2002000000000558128851361561536',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| download_bill_count | integer | 下载信息总数
| download_bill_list | object[] | 下载信息明细
| bill_sequence {data-indent=1} | integer | 账单文件序号
| hash_type {data-indent=1} | string | 哈希类型
| hash_value {data-indent=1} | string | 哈希值
| download_url {data-indent=1} | string | 下载地址
| encrypt_key {data-indent=1} | string | 加密密钥
| nonce {data-indent=1} | string | 随机字符串

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter6_1_29.shtml)
