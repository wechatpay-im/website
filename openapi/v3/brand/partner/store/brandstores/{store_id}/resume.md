---
title: 恢复门店营业
description: 将门店状态从“停业中”变更为“营业中”，门店信息将重新对用户展示。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| store_id {data-required} | string | 品牌门店ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_id {data-required data-indent=1} | string | 品牌ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->partner->store->brandstores->_store_id_->resume->postAsync([
  'store_id' => '20488000',
  'json' => [
    'brand_id' => '123456789',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/partner/store/brandstores/{store_id}/resume')->postAsync([
  'store_id' => '20488000',
  'json' => [
    'brand_id' => '123456789',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/partner/store/brandstores/{store_id}/resume']->postAsync([
  'store_id' => '20488000',
  'json' => [
    'brand_id' => '123456789',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->partner->store->brandstores->_store_id_->resume->post([
  'store_id' => '20488000',
  'json' => [
    'brand_id' => '123456789',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/partner/store/brandstores/{store_id}/resume')->post([
  'store_id' => '20488000',
  'json' => [
    'brand_id' => '123456789',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/partner/store/brandstores/{store_id}/resume']->post([
  'store_id' => '20488000',
  'json' => [
    'brand_id' => '123456789',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| brand_id {data-required} | string | 品牌ID
| store_id | string | 品牌门店ID
| store_state | string | 门店状态<br/>`OPEN` \| `CREATING` \| `CLOSED` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016756672)
