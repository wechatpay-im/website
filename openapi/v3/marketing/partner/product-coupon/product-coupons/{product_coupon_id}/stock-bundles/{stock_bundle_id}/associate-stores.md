---
title: 批次组批量关联门店
description: 服务商可以通过该接口将品牌的门店列表批量与商品券批次组内所有批次关联
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| product_coupon_id {data-required} | string | 商品券ID
| stock_bundle_id {data-required} | string | 批次组ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_id {data-required data-indent=1} | string | 品牌ID
| store_list {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 门店列表
| store_id {data-required data-indent=2} | string | 门店ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->partner->productCoupon->productCoupons->_product_coupon_id_->stockBundles->_stock_bundle_id_->associateStores->postAsync([
  'product_coupon_id' => '1000000013',
  'stock_bundle_id' => '1000000013001',
  'json' => [
    'brand_id'   => '120344',
    'store_list' => [[
      'store_id' => '100000001',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stock-bundles/{stock_bundle_id}/associate-stores')->postAsync([
  'product_coupon_id' => '1000000013',
  'stock_bundle_id' => '1000000013001',
  'json' => [
    'brand_id'   => '120344',
    'store_list' => [[
      'store_id' => '100000001',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stock-bundles/{stock_bundle_id}/associate-stores']->postAsync([
  'product_coupon_id' => '1000000013',
  'stock_bundle_id' => '1000000013001',
  'json' => [
    'brand_id'   => '120344',
    'store_list' => [[
      'store_id' => '100000001',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->partner->productCoupon->productCoupons->_product_coupon_id_->stockBundles->_stock_bundle_id_->associateStores->post([
  'product_coupon_id' => '1000000013',
  'stock_bundle_id' => '1000000013001',
  'json' => [
    'brand_id'   => '120344',
    'store_list' => [[
      'store_id' => '100000001',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stock-bundles/{stock_bundle_id}/associate-stores')->post([
  'product_coupon_id' => '1000000013',
  'stock_bundle_id' => '1000000013001',
  'json' => [
    'brand_id'   => '120344',
    'store_list' => [[
      'store_id' => '100000001',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stock-bundles/{stock_bundle_id}/associate-stores']->post([
  'product_coupon_id' => '1000000013',
  'stock_bundle_id' => '1000000013001',
  'json' => [
    'brand_id'   => '120344',
    'store_list' => [[
      'store_id' => '100000001',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_count {data-required} | integer | 去重后门店总数
| success_store_list | object[] {data-tooltip="对应PHP的array"} | 关联成功的门店列表
| store_id {data-required data-indent=1} | string | 门店ID
| failed_store_list | object[] {data-tooltip="对应PHP的array"} | 关联失败的门店列表
| store_id {data-required data-indent=1} | string | 门店ID
| code {data-required data-indent=1} | string | 失败错误码
| message {data-required data-indent=1} | string | 失败错误信息

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016280620)
