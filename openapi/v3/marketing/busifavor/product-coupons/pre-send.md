---
title: 向用户预发放商品券
description: 商户通过本接口向用户预发放指定商品券批次，并使用返回的token在「小程序发券组件」中完成发券。支持发放两种商品券：单券模式：用户只能使用一次，使用后券失效。多次优惠模式：用户可以按顺序多次使用，每次核销成功后会发放下一次优惠机会，直到用完为止。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| stock_id {data-required data-indent=1} | string | 批次ID
| coupon_code {data-indent=1} | string | 用户商品券Code
| appid {data-required data-indent=1} | string | 公众账号AppID
| openid {data-indent=1} | string | 用户OpenID
| send_request_no {data-required data-indent=1} | string | 发券请求单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->productCoupons->preSend->postAsync([
  'json' => [
    'stock_id'        => '1000000013001',
    'coupon_code'     => '123446565767',
    'appid'           => 'wx233544546545989',
    'openid'          => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
    'send_request_no' => '34657_20250101_123456',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/product-coupons/pre-send')->postAsync([
  'json' => [
    'stock_id'        => '1000000013001',
    'coupon_code'     => '123446565767',
    'appid'           => 'wx233544546545989',
    'openid'          => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
    'send_request_no' => '34657_20250101_123456',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/product-coupons/pre-send']->postAsync([
  'json' => [
    'stock_id'        => '1000000013001',
    'coupon_code'     => '123446565767',
    'appid'           => 'wx233544546545989',
    'openid'          => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
    'send_request_no' => '34657_20250101_123456',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->productCoupons->preSend->post([
  'json' => [
    'stock_id'        => '1000000013001',
    'coupon_code'     => '123446565767',
    'appid'           => 'wx233544546545989',
    'openid'          => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
    'send_request_no' => '34657_20250101_123456',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/product-coupons/pre-send')->post([
  'json' => [
    'stock_id'        => '1000000013001',
    'coupon_code'     => '123446565767',
    'appid'           => 'wx233544546545989',
    'openid'          => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
    'send_request_no' => '34657_20250101_123456',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/product-coupons/pre-send']->post([
  'json' => [
    'stock_id'        => '1000000013001',
    'coupon_code'     => '123446565767',
    'appid'           => 'wx233544546545989',
    'openid'          => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
    'send_request_no' => '34657_20250101_123456',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| token {data-required} | string | 预发券token

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/brand/4016797130)
