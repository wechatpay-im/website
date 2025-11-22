---
title: 预上传券Code
description: 品牌方可以通过该接口为商品券批次预上传券Code 前置条件：已创建商品券批次，商品券批次的 coupon_code_mode 配置为 UPLOAD
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| product_coupon_id {data-required} | string | 商品券ID
| stock_id {data-required} | string | 批次ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_id {data-required data-indent=1} | string | 品牌ID
| out_request_no {data-required data-indent=1} | string | 请求单号
| code_list {data-required data-indent=1} | string[] | 券Code列表

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->partner->productCoupon->productCoupons->_product_coupon_id_->stocks->_stock_id_->uploadCouponCodes->postAsync([
  'product_coupon_id' => '1000000013',
  'stock_id' => '1000000013001',
  'json' => [
    'brand_id'       => '120344',
    'out_request_no' => '34657_20250101_123456',
    'code_list'      => ['vCode_1234567890'],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}/upload-coupon-codes')->postAsync([
  'product_coupon_id' => '1000000013',
  'stock_id' => '1000000013001',
  'json' => [
    'brand_id'       => '120344',
    'out_request_no' => '34657_20250101_123456',
    'code_list'      => ['vCode_1234567890'],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}/upload-coupon-codes']->postAsync([
  'product_coupon_id' => '1000000013',
  'stock_id' => '1000000013001',
  'json' => [
    'brand_id'       => '120344',
    'out_request_no' => '34657_20250101_123456',
    'code_list'      => ['vCode_1234567890'],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->partner->productCoupon->productCoupons->_product_coupon_id_->stocks->_stock_id_->uploadCouponCodes->post([
  'product_coupon_id' => '1000000013',
  'stock_id' => '1000000013001',
  'json' => [
    'brand_id'       => '120344',
    'out_request_no' => '34657_20250101_123456',
    'code_list'      => ['vCode_1234567890'],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}/upload-coupon-codes')->post([
  'product_coupon_id' => '1000000013',
  'stock_id' => '1000000013001',
  'json' => [
    'brand_id'       => '120344',
    'out_request_no' => '34657_20250101_123456',
    'code_list'      => ['vCode_1234567890'],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}/upload-coupon-codes']->post([
  'product_coupon_id' => '1000000013',
  'stock_id' => '1000000013001',
  'json' => [
    'brand_id'       => '120344',
    'out_request_no' => '34657_20250101_123456',
    'code_list'      => ['vCode_1234567890'],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_count {data-required} | integer | 去重后券Code总数
| success_code_list | string[] | 上传成功的券Code列表
| failed_code_list | string[] | 上传失败的券Code列表
| already_exist_code_list | string[] | 已经存在的券Code列表
| duplicate_code_list | string[] | 重复的券Code列表

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015781572) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016434668)
