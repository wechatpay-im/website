---
title: 按日下载提现异常文件
description: 电商服务商按日查询并下载提现状态为异常的提现单，提现异常包括提现失败和银行退票。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| bill_type {data-indent=1} | string | 账单类型
| bill_date {data-required data-indent=1} | string | 账单日期
| tar_type {data-indent=1} | string | 压缩类型<br/>`GZIP` 枚举值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchant->fund->withdraw->billType->_bill_type_->getAsync([
  'query' => [
    'bill_type' => 'NO_SUCC',
    'bill_date' => '2019-06-11',
    'tar_type' => 'GZIP',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant/fund/withdraw/bill-type/{bill_type}')->getAsync([
  'query' => [
    'bill_type' => 'NO_SUCC',
    'bill_date' => '2019-06-11',
    'tar_type' => 'GZIP',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant/fund/withdraw/bill-type/{bill_type}']->getAsync([
  'query' => [
    'bill_type' => 'NO_SUCC',
    'bill_date' => '2019-06-11',
    'tar_type' => 'GZIP',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchant->fund->withdraw->billType->_bill_type_->get([
  'query' => [
    'bill_type' => 'NO_SUCC',
    'bill_date' => '2019-06-11',
    'tar_type' => 'GZIP',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant/fund/withdraw/bill-type/{bill_type}')->get([
  'query' => [
    'bill_type' => 'NO_SUCC',
    'bill_date' => '2019-06-11',
    'tar_type' => 'GZIP',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant/fund/withdraw/bill-type/{bill_type}']->get([
  'query' => [
    'bill_type' => 'NO_SUCC',
    'bill_date' => '2019-06-11',
    'tar_type' => 'GZIP',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| hash_type {data-required}| string | 哈希类型
| hash_value {data-required}| string | 哈希值
| download_url {data-required}| string | 账单下载地址

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_24.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/fund/chapter3_4.shtml)
