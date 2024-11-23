---
title: 查询最大分账比例
description: 可调用此接口查询品牌商户设置的允许服务商分账的最大比例
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| brand_mchid {data-required} | string | 品牌主商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->profitsharing->brandConfigs->_brand_mchid_->getAsync([
  'brand_mchid' => '1900000109',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/profitsharing/brand-configs/{brand_mchid}')->getAsync([
  'brand_mchid' => '1900000109',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/profitsharing/brand-configs/{brand_mchid}']->getAsync([
  'brand_mchid' => '1900000109',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->profitsharing->brandConfigs->_brand_mchid_->get([
  'brand_mchid' => '1900000109',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/profitsharing/brand-configs/{brand_mchid}')->get([
  'brand_mchid' => '1900000109',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/profitsharing/brand-configs/{brand_mchid}']->get([
  'brand_mchid' => '1900000109',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| brand_mchid {data-required}| string | 品牌主商户号
| max_ratio {data-required}| integer | 最大分账比例

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_7_10.shtml)
