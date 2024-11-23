---
title: 申请分账账单
description: 微信支付按天提供分账账单文件，商户可以通过该接口获取账单文件的下载地址。文件内包含分账相关的金额、时间等信息，供商户核对到账等情况。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 二级商户号
| bill_date {data-required data-indent=1} | string | 账单日期
| tar_type {data-indent=1} | string | 压缩类型<br/>`GZIP` 枚举值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->profitsharing->bills->getAsync([
  'query' => [
    'sub_mchid' => '',
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
$instance->chain('v3/profitsharing/bills')->getAsync([
  'query' => [
    'sub_mchid' => '',
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
$instance['v3/profitsharing/bills']->getAsync([
  'query' => [
    'sub_mchid' => '',
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
$response = $instance->v3->profitsharing->bills->get([
  'query' => [
    'sub_mchid' => '',
    'bill_date' => '2019-06-11',
    'tar_type' => 'GZIP',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/profitsharing/bills')->get([
  'query' => [
    'sub_mchid' => '',
    'bill_date' => '2019-06-11',
    'tar_type' => 'GZIP',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/profitsharing/bills']->get([
  'query' => [
    'sub_mchid' => '',
    'bill_date' => '2019-06-11',
    'tar_type' => 'GZIP',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| download_url {data-required}| string | 下载地址
| hash_type {data-required}| string | 哈希类型
| hash_value {data-required}| string | 哈希值

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_11.shtml)
