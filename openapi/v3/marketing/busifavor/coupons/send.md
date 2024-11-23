---
title: 向用户发券
description: 
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

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->coupons->send->postAsync([
  'json' => [
    'openid' => 'xsd3434454567676',
    'appid' => 'wx1234567889999',
    'stock_id' => '100088',
    'out_request_no' => '1002600620019090123143254435',
    'coupon_code' => 'sxxe34343434',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/coupons/send')->postAsync([
  'json' => [
    'openid' => 'xsd3434454567676',
    'appid' => 'wx1234567889999',
    'stock_id' => '100088',
    'out_request_no' => '1002600620019090123143254435',
    'coupon_code' => 'sxxe34343434',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/coupons/send']->postAsync([
  'json' => [
    'openid' => 'xsd3434454567676',
    'appid' => 'wx1234567889999',
    'stock_id' => '100088',
    'out_request_no' => '1002600620019090123143254435',
    'coupon_code' => 'sxxe34343434',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->coupons->send->post([
  'json' => [
    'openid' => 'xsd3434454567676',
    'appid' => 'wx1234567889999',
    'stock_id' => '100088',
    'out_request_no' => '1002600620019090123143254435',
    'coupon_code' => 'sxxe34343434',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/coupons/send')->post([
  'json' => [
    'openid' => 'xsd3434454567676',
    'appid' => 'wx1234567889999',
    'stock_id' => '100088',
    'out_request_no' => '1002600620019090123143254435',
    'coupon_code' => 'sxxe34343434',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/coupons/send']->post([
  'json' => [
    'openid' => 'xsd3434454567676',
    'appid' => 'wx1234567889999',
    'stock_id' => '100088',
    'out_request_no' => '1002600620019090123143254435',
    'coupon_code' => 'sxxe34343434',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_id {data-required}| string | 批次号
| coupon_code | string | 券code
| out_request_no | string | 发券凭证

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/products/merchant-exclusive-coupon/introduction.html)
