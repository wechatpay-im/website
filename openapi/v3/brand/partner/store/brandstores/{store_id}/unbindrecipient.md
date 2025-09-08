---
title: 解绑收款商户号
description: 解绑品牌门店的收款商户号。解绑成功后，商户号不能再为门店收款。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| store_id {data-required} | string | 品牌门店ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_id {data-required data-indent=1} | string | 品牌ID
| mchid {data-required data-indent=1} | string | 门店收款商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->partner->store->brandstores->_store_id_->unbindrecipient->postAsync([
  'store_id' => '20488000',
  'json' => [
    'brand_id' => '123456789',
    'mchid'    => '1230000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/partner/store/brandstores/{store_id}/unbindrecipient')->postAsync([
  'store_id' => '20488000',
  'json' => [
    'brand_id' => '123456789',
    'mchid'    => '1230000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/partner/store/brandstores/{store_id}/unbindrecipient']->postAsync([
  'store_id' => '20488000',
  'json' => [
    'brand_id' => '123456789',
    'mchid'    => '1230000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->partner->store->brandstores->_store_id_->unbindrecipient->post([
  'store_id' => '20488000',
  'json' => [
    'brand_id' => '123456789',
    'mchid'    => '1230000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/partner/store/brandstores/{store_id}/unbindrecipient')->post([
  'store_id' => '20488000',
  'json' => [
    'brand_id' => '123456789',
    'mchid'    => '1230000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/partner/store/brandstores/{store_id}/unbindrecipient']->post([
  'store_id' => '20488000',
  'json' => [
    'brand_id' => '123456789',
    'mchid'    => '1230000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| failed_reason | string | 解绑失败原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015783188)
