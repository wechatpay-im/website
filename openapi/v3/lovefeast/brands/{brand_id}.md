---
title: 查询爱心餐品牌信息
description: 商户根据品牌ID查询爱心餐品牌的捐赠与供餐信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| brand_id {data-required} | string | 品牌ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->lovefeast->brands->_brand_id_->getAsync([
  'brand_id' => '2250',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/lovefeast/brands/{brand_id}')->getAsync([
  'brand_id' => '2250',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/lovefeast/brands/{brand_id}']->getAsync([
  'brand_id' => '2250',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->lovefeast->brands->_brand_id_->get([
  'brand_id' => '2250',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/lovefeast/brands/{brand_id}')->get([
  'brand_id' => '2250',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/lovefeast/brands/{brand_id}']->get([
  'brand_id' => '2250',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| donate_count {data-required} | number | 捐赠数量
| consume_count {data-required} | number | 供餐数量

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012472863) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012466619)
