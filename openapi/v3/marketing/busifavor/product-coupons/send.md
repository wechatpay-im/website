---
title: 向用户发放商品券
description: 商户可通过该接口向指定用户发放关联了商品信息的商家券，未关联商品信息的商家券不支持通过该接口发放；支持指定券 code 发放或系统自动分配券 code。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| openid {data-required data-indent=1} | string | 用户标识
| appid {data-required data-indent=1} | string | 公众账号ID
| stock_id {data-required data-indent=1} | string | 批次号
| out_request_no {data-required data-indent=1} | string | 发券凭证
| coupon_code {data-indent=1} | string | 券code
| coupon_type {data-required data-indent=1} | string | 券类型<br/>`NORMAL` \| `MEMBER` 枚举值之一
| member_card_id {data-indent=1} | string | 会员卡ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->productCoupons->send->postAsync([
  'json' => [
    'openid'         => 'xsd3434454567676',
    'appid'          => 'wx1234567889999',
    'stock_id'       => '12312354',
    'out_request_no' => '2335465',
    'coupon_code'    => '202007019999',
    'coupon_type'    => 'NORMAL',
    'member_card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/product-coupons/send')->postAsync([
  'json' => [
    'openid'         => 'xsd3434454567676',
    'appid'          => 'wx1234567889999',
    'stock_id'       => '12312354',
    'out_request_no' => '2335465',
    'coupon_code'    => '202007019999',
    'coupon_type'    => 'NORMAL',
    'member_card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/product-coupons/send']->postAsync([
  'json' => [
    'openid'         => 'xsd3434454567676',
    'appid'          => 'wx1234567889999',
    'stock_id'       => '12312354',
    'out_request_no' => '2335465',
    'coupon_code'    => '202007019999',
    'coupon_type'    => 'NORMAL',
    'member_card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->productCoupons->send->post([
  'json' => [
    'openid'         => 'xsd3434454567676',
    'appid'          => 'wx1234567889999',
    'stock_id'       => '12312354',
    'out_request_no' => '2335465',
    'coupon_code'    => '202007019999',
    'coupon_type'    => 'NORMAL',
    'member_card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/product-coupons/send')->post([
  'json' => [
    'openid'         => 'xsd3434454567676',
    'appid'          => 'wx1234567889999',
    'stock_id'       => '12312354',
    'out_request_no' => '2335465',
    'coupon_code'    => '202007019999',
    'coupon_type'    => 'NORMAL',
    'member_card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/product-coupons/send']->post([
  'json' => [
    'openid'         => 'xsd3434454567676',
    'appid'          => 'wx1234567889999',
    'stock_id'       => '12312354',
    'out_request_no' => '2335465',
    'coupon_code'    => '202007019999',
    'coupon_type'    => 'NORMAL',
    'member_card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_id {data-required} | string | 批次号
| coupon_code {data-required} | string | 券code
| out_request_no {data-required} | string | 发券凭证

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4015594964) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015595255)
