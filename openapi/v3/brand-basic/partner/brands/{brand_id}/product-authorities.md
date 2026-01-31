---
title: 获得品牌已授权且在生效中的产品权限信息
description: 获得品牌已授权且在生效中的产品权限信息
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| brand_id {data-required} | string | 品牌ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brandBasic->partner->brands->_brand_id_->productAuthorities->getAsync([
  'brand_id' => '123456789',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand-basic/partner/brands/{brand_id}/product-authorities')->getAsync([
  'brand_id' => '123456789',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand-basic/partner/brands/{brand_id}/product-authorities']->getAsync([
  'brand_id' => '123456789',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brandBasic->partner->brands->_brand_id_->productAuthorities->get([
  'brand_id' => '123456789',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand-basic/partner/brands/{brand_id}/product-authorities')->get([
  'brand_id' => '123456789',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand-basic/partner/brands/{brand_id}/product-authorities']->get([
  'brand_id' => '123456789',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| brand_id {data-required} | string | 品牌ID
| authorization_type {data-required} | string | 授权类型<br/>`AUTHORIZATION_TYPE_HOSTING` \| `AUTHORIZATION_TYPE_PARTLY` 枚举值之一
| authorization_product | string[] | 授权产品权限<br/>`BRAND_PRODUCT_AUTHORITY_MERCHANT_CARD` \| `BRAND_PRODUCT_AUTHORITY_CARD_LINK` \| `BRAND_PRODUCT_AUTHORITY_PRODUCT_COUPON` \| `BRAND_PRODUCT_AUTHORITY_SHAKE_COUPON` \| `BRAND_PRODUCT_AUTHORITY_BRAND_PAY_GIFT` \| `BRAND_PRODUCT_AUTHORITY_BRAND_STORE` \| `BRAND_PRODUCT_AUTHORITY_PAYMENT_MERCHANT_MANAGE` \| `BRAND_PRODUCT_AUTHORITY_APPID_MANAGE` \| `BRAND_PRODUCT_AUTHORITY_FINDER_MANAGE` \| `BRAND_PRODUCT_AUTHORITY_CATEGORY_MANAGE` 枚举值之一
| update_time {data-required} | string | 更新时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4017410365)
