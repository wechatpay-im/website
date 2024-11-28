---
title: 申请二级商户资金账单
description: 微信支付按天提供微信支付账户的资金流水账单文件，电商平台可以通过该接口获取二级商户账单文件的下载地址。文件内包含电商平台二级商户资金操作相关的业务单号、收支金额、记账时间等信息，供电商平台进行核对。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| bill_date {data-required data-indent=1} | string | 账单日期
| account_type {data-required data-indent=1} | string | 资金账户类型
| tar_type {data-indent=1} | string | 压缩类型
| algorithm {data-required data-indent=1} | string | 加密算法<br/>`AEAD_AES_256_GCM` \| `SM4_GCM` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->bill->fundflowbill->getAsync([
  'query' => [
    'bill_date'    => '2019-06-11',
    'account_type' => 'ALL',
    'tar_type'     => 'GZIP',
    'algorithm'    => 'AEAD_AES_256_GCM',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/bill/fundflowbill')->getAsync([
  'query' => [
    'bill_date'    => '2019-06-11',
    'account_type' => 'ALL',
    'tar_type'     => 'GZIP',
    'algorithm'    => 'AEAD_AES_256_GCM',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/bill/fundflowbill']->getAsync([
  'query' => [
    'bill_date'    => '2019-06-11',
    'account_type' => 'ALL',
    'tar_type'     => 'GZIP',
    'algorithm'    => 'AEAD_AES_256_GCM',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->bill->fundflowbill->get([
  'query' => [
    'bill_date'    => '2019-06-11',
    'account_type' => 'ALL',
    'tar_type'     => 'GZIP',
    'algorithm'    => 'AEAD_AES_256_GCM',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/bill/fundflowbill')->get([
  'query' => [
    'bill_date'    => '2019-06-11',
    'account_type' => 'ALL',
    'tar_type'     => 'GZIP',
    'algorithm'    => 'AEAD_AES_256_GCM',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/bill/fundflowbill']->get([
  'query' => [
    'bill_date'    => '2019-06-11',
    'account_type' => 'ALL',
    'tar_type'     => 'GZIP',
    'algorithm'    => 'AEAD_AES_256_GCM',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| download_bill_count {data-required} | integer | 下载信息总数
| download_bill_list | object[] {data-tooltip="对应PHP的array"} | 下载信息明细
| bill_sequence {data-required data-indent=1} | integer | 账单文件序号
| hash_type {data-required data-indent=1} | string | 哈希类型
| hash_value {data-required data-indent=1} | string | 哈希值
| download_url {data-required data-indent=1} | string | 账单下载地址
| encrypt_key {data-required data-indent=1} | string | 加密密钥
| nonce {data-required data-indent=1} | string | 随机字符串

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/bill-download/sub-merchant-fund-flow-bill/get-sub-merchant-fund-flow-bill.html) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_9_5.shtml)
