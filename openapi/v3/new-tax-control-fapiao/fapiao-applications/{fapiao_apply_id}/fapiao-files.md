---
title: 获取发票下载信息
description: 商户在开具发票成功后，调用本接口获取电子发票的下载地址。仅在微信支付侧开具的电子发票才允许下载发票文件。 注意：开票状态为ISSUED的发票才能获取到发票文件下载链接。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| fapiao_apply_id | string | 发票申请单号
| query | object | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 子商户号
| fapiao_id {data-indent=1} | string | 商户发票单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->newTaxControlFapiao->fapiaoApplications->_fapiao_apply_id_->fapiaoFiles->getAsync([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'query' => [
    'sub_mchid' => '1900000109',
    'fapiao_id' => '20200701123456',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}/fapiao-files')->getAsync([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'query' => [
    'sub_mchid' => '1900000109',
    'fapiao_id' => '20200701123456',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}/fapiao-files']->getAsync([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'query' => [
    'sub_mchid' => '1900000109',
    'fapiao_id' => '20200701123456',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->newTaxControlFapiao->fapiaoApplications->_fapiao_apply_id_->fapiaoFiles->get([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'query' => [
    'sub_mchid' => '1900000109',
    'fapiao_id' => '20200701123456',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}/fapiao-files')->get([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'query' => [
    'sub_mchid' => '1900000109',
    'fapiao_id' => '20200701123456',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}/fapiao-files']->get([
  'fapiao_apply_id' => '4200000444201910177461284488',
  'query' => [
    'sub_mchid' => '1900000109',
    'fapiao_id' => '20200701123456',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| fapiao_download_info_list | object[] | 发票列表
| fapiao_id {data-indent=1} | string | 商户发票单号
| download_url {data-indent=1} | string | 发票文件下载地址
| status {data-indent=1} | string | 发票状态

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/fapiao/fapiao-applications/get-fapiao-file-download-info.html)
