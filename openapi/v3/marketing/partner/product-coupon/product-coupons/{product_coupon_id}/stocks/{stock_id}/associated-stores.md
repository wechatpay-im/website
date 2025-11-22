---
title: 查询批次关联门店列表
description: 品牌方可以通过该接口分页查询商品券批次所关联的门店列表 前置条件：已创建商品券批次且批次的 store_scope 为 SPECIFIC
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| product_coupon_id {data-required} | string | 商品券ID
| stock_id {data-required} | string | 批次ID
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| page_size {data-indent=1} | integer | 分页大小
| page_token {data-indent=1} | string | 分页Token
| brand_id {data-required data-indent=1} | string | 品牌ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->partner->productCoupon->productCoupons->_product_coupon_id_->stocks->_stock_id_->associatedStores->getAsync([
  'product_coupon_id' => '1000000013',
  'stock_id' => '1000000013001',
  'query' => [
    'page_size'  => 20,
    'page_token' => 'MTIzMjUK',
    'brand_id'   => '120344',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}/associated-stores')->getAsync([
  'product_coupon_id' => '1000000013',
  'stock_id' => '1000000013001',
  'query' => [
    'page_size'  => 20,
    'page_token' => 'MTIzMjUK',
    'brand_id'   => '120344',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}/associated-stores']->getAsync([
  'product_coupon_id' => '1000000013',
  'stock_id' => '1000000013001',
  'query' => [
    'page_size'  => 20,
    'page_token' => 'MTIzMjUK',
    'brand_id'   => '120344',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->partner->productCoupon->productCoupons->_product_coupon_id_->stocks->_stock_id_->associatedStores->get([
  'product_coupon_id' => '1000000013',
  'stock_id' => '1000000013001',
  'query' => [
    'page_size'  => 20,
    'page_token' => 'MTIzMjUK',
    'brand_id'   => '120344',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}/associated-stores')->get([
  'product_coupon_id' => '1000000013',
  'stock_id' => '1000000013001',
  'query' => [
    'page_size'  => 20,
    'page_token' => 'MTIzMjUK',
    'brand_id'   => '120344',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}/associated-stores']->get([
  'product_coupon_id' => '1000000013',
  'stock_id' => '1000000013001',
  'query' => [
    'page_size'  => 20,
    'page_token' => 'MTIzMjUK',
    'brand_id'   => '120344',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_count {data-required} | integer | 总个数
| next_page_token | string | 下一页Token
| store_list | object[] {data-tooltip="对应PHP的array"} | 门店列表
| store_id {data-required data-indent=1} | string | 门店ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015781546) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016434665)
