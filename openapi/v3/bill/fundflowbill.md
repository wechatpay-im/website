---
title: 申请资金账单
description: 微信支付按天提供微信支付账户的资金流水账单文件，商户可以通过该接口获取账单文件的下载地址。文件内包含该账户资金操作相关的业务单号、收支金额、记账时间等信息，供商户进行核对。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object | 声明请求的查询参数
| bill_date {data-indent=1} | string | 账单日期
| sub_mchid {data-indent=1} | string | 二级商户号
| account_type {data-indent=1} | string | 资金账户类型<br/>`BASIC` \| `OPERATION` \| `FEES` 枚举值之一
| tar_type {data-indent=1} | string | 压缩类型<br/>`GZIP` 枚举值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->bill->fundflowbill->getAsync([
  'query' => [
    'bill_date' => '2019-06-11',
    'sub_mchid' => '',
    'account_type' => 'BASIC',
    'tar_type' => 'GZIP',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/bill/fundflowbill')->getAsync([
  'query' => [
    'bill_date' => '2019-06-11',
    'sub_mchid' => '',
    'account_type' => 'BASIC',
    'tar_type' => 'GZIP',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/bill/fundflowbill']->getAsync([
  'query' => [
    'bill_date' => '2019-06-11',
    'sub_mchid' => '',
    'account_type' => 'BASIC',
    'tar_type' => 'GZIP',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->bill->fundflowbill->get([
  'query' => [
    'bill_date' => '2019-06-11',
    'sub_mchid' => '',
    'account_type' => 'BASIC',
    'tar_type' => 'GZIP',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/bill/fundflowbill')->get([
  'query' => [
    'bill_date' => '2019-06-11',
    'sub_mchid' => '',
    'account_type' => 'BASIC',
    'tar_type' => 'GZIP',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/bill/fundflowbill']->get([
  'query' => [
    'bill_date' => '2019-06-11',
    'sub_mchid' => '',
    'account_type' => 'BASIC',
    'tar_type' => 'GZIP',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| hash_type | string | 哈希类型
| hash_value | string | 哈希值
| download_url | string | 账单下载地址

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/bill-download/fund-bill/get-fund-bill.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/bill-download/fund-bill/get-fund-bill.html) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_9_2.shtml)
