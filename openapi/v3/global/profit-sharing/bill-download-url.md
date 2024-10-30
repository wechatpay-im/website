---
title: 获取分账账单文件下载地址
description: 微信支付按天提供分账账单文件，商户可以通过该接口获取账单文件的下载地址。文件内包含分账相关的金额、时间等信息，供商户核对到账等情况。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| query | object | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 子商户号
| bill_date {data-indent=1} | string | 账单日期

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->profitSharing->billDownloadUrl->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'query' => [
    'sub_mchid' => '1900000109',
    'bill_date' => '2020-01-01',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/profit-sharing/bill-download-url')->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'query' => [
    'sub_mchid' => '1900000109',
    'bill_date' => '2020-01-01',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/profit-sharing/bill-download-url']->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'query' => [
    'sub_mchid' => '1900000109',
    'bill_date' => '2020-01-01',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->profitSharing->billDownloadUrl->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'query' => [
    'sub_mchid' => '1900000109',
    'bill_date' => '2020-01-01',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/profit-sharing/bill-download-url')->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'query' => [
    'sub_mchid' => '1900000109',
    'bill_date' => '2020-01-01',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/profit-sharing/bill-download-url']->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'query' => [
    'sub_mchid' => '1900000109',
    'bill_date' => '2020-01-01',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| download_url | string | 下载地址

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter4_1_9.shtml)
