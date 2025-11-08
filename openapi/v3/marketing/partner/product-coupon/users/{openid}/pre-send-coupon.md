---
title: 向用户预发放商品券
description: 品牌方可以通过本接口向用户预发放指定商品券批次，并使用返回的token在领券组件中完成发券，当用户已领取过时使用相同参数获取的token拉起的领券组件会返回已领取状态，能否发放受限于商品券批次的发放限额：1. 商品券批次总预算; 2. 商品券批次每日预算（如果有）; 3. 商品券批次每人限领（如果有）
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 用户OpenID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_id {data-required data-indent=1} | string | 品牌ID
| product_coupon_id {data-required data-indent=1} | string | 商品券ID
| stock_id {data-required data-indent=1} | string | 批次ID
| coupon_code {data-indent=1} | string | 用户商品券Code
| appid {data-required data-indent=1} | string | 公众账号AppID
| send_request_no {data-required data-indent=1} | string | 发券请求单号
| attach {data-indent=1} | string | 自定义附加信息

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->partner->productCoupon->users->_openid_->preSendCoupon->postAsync([
  'openid' => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
  'json' => [
    'brand_id'          => '120344',
    'product_coupon_id' => '1000000013',
    'stock_id'          => '1000000013001',
    'coupon_code'       => '123446565767',
    'appid'             => 'wx233544546545989',
    'send_request_no'   => '34657_20250101_123456',
    'attach'            => 'example_attach',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/partner/product-coupon/users/{openid}/pre-send-coupon')->postAsync([
  'openid' => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
  'json' => [
    'brand_id'          => '120344',
    'product_coupon_id' => '1000000013',
    'stock_id'          => '1000000013001',
    'coupon_code'       => '123446565767',
    'appid'             => 'wx233544546545989',
    'send_request_no'   => '34657_20250101_123456',
    'attach'            => 'example_attach',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/partner/product-coupon/users/{openid}/pre-send-coupon']->postAsync([
  'openid' => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
  'json' => [
    'brand_id'          => '120344',
    'product_coupon_id' => '1000000013',
    'stock_id'          => '1000000013001',
    'coupon_code'       => '123446565767',
    'appid'             => 'wx233544546545989',
    'send_request_no'   => '34657_20250101_123456',
    'attach'            => 'example_attach',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->partner->productCoupon->users->_openid_->preSendCoupon->post([
  'openid' => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
  'json' => [
    'brand_id'          => '120344',
    'product_coupon_id' => '1000000013',
    'stock_id'          => '1000000013001',
    'coupon_code'       => '123446565767',
    'appid'             => 'wx233544546545989',
    'send_request_no'   => '34657_20250101_123456',
    'attach'            => 'example_attach',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/partner/product-coupon/users/{openid}/pre-send-coupon')->post([
  'openid' => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
  'json' => [
    'brand_id'          => '120344',
    'product_coupon_id' => '1000000013',
    'stock_id'          => '1000000013001',
    'coupon_code'       => '123446565767',
    'appid'             => 'wx233544546545989',
    'send_request_no'   => '34657_20250101_123456',
    'attach'            => 'example_attach',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/partner/product-coupon/users/{openid}/pre-send-coupon']->post([
  'openid' => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
  'json' => [
    'brand_id'          => '120344',
    'product_coupon_id' => '1000000013',
    'stock_id'          => '1000000013001',
    'coupon_code'       => '123446565767',
    'appid'             => 'wx233544546545989',
    'send_request_no'   => '34657_20250101_123456',
    'attach'            => 'example_attach',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| token {data-required} | string | 预发券token

{.im-table #response}
