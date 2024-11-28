---
title: 申请单个子商户资金账单
description: 微信支付按天提供微信支付账户的资金流水账单文件，服务商可以通过该接口获取子商户账单文件的下载地址。文件内包含子商户资金操作相关的业务单号、收支金额、记账时间等信息，供商户进行核对。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-required data-indent=1} | string | 子商户号
| bill_date {data-required data-indent=1} | string | 账单日期
| tar_type {data-indent=1} | string | 压缩类型<br/>`GZIP` 枚举值
| algorithm {data-required data-indent=1} | string | 加密算法<br/>`AEAD_AES_256_GCM` \| `SM4_GCM` 枚举值之一
| account_type {data-required data-indent=1} | string | 资金账户类型<br/>`BASIC` \| `OPERATION` \| `FEES` \| `DEPOSIT` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->bill->subMerchantFundflowbill->getAsync([
  'query' => [
    'sub_mchid'    => '19000000001',
    'bill_date'    => '2019-06-11',
    'tar_type'     => 'GZIP',
    'algorithm'    => 'AEAD_AES_256_GCM',
    'account_type' => 'BASIC',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/bill/sub-merchant-fundflowbill')->getAsync([
  'query' => [
    'sub_mchid'    => '19000000001',
    'bill_date'    => '2019-06-11',
    'tar_type'     => 'GZIP',
    'algorithm'    => 'AEAD_AES_256_GCM',
    'account_type' => 'BASIC',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/bill/sub-merchant-fundflowbill']->getAsync([
  'query' => [
    'sub_mchid'    => '19000000001',
    'bill_date'    => '2019-06-11',
    'tar_type'     => 'GZIP',
    'algorithm'    => 'AEAD_AES_256_GCM',
    'account_type' => 'BASIC',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->bill->subMerchantFundflowbill->get([
  'query' => [
    'sub_mchid'    => '19000000001',
    'bill_date'    => '2019-06-11',
    'tar_type'     => 'GZIP',
    'algorithm'    => 'AEAD_AES_256_GCM',
    'account_type' => 'BASIC',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/bill/sub-merchant-fundflowbill')->get([
  'query' => [
    'sub_mchid'    => '19000000001',
    'bill_date'    => '2019-06-11',
    'tar_type'     => 'GZIP',
    'algorithm'    => 'AEAD_AES_256_GCM',
    'account_type' => 'BASIC',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/bill/sub-merchant-fundflowbill']->get([
  'query' => [
    'sub_mchid'    => '19000000001',
    'bill_date'    => '2019-06-11',
    'tar_type'     => 'GZIP',
    'algorithm'    => 'AEAD_AES_256_GCM',
    'account_type' => 'BASIC',
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
| download_url {data-required data-indent=1} | string | 下载地址
| encrypt_key {data-required data-indent=1} | string | 加密密钥
| hash_type {data-required data-indent=1} | string | 哈希类型
| hash_value {data-required data-indent=1} | string | 哈希值
| nonce {data-required data-indent=1} | string | 随机字符串

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/bill-download/sub-mch-fund-flow-bill/get-sub-mch-fund-flow-bill.html) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_25.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter4_1_12.shtml)
