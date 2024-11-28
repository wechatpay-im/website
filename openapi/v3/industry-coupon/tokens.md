---
title: 出行券切卡组件预下单
description: 商户在拉起快捷切卡小程序前，需要先调用本接口预下单，下单成功后，通过返回的token拉起小程序，本接口的调用商户需要和拉起组件传入的调用商户是同一个。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| open_id {data-required data-indent=1} | string | 用户标识
| coupon_list {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 出行券列表
| stock_id {data-required data-indent=2} | integer | 批次号
| coupon_id {data-required data-indent=2} | string | 券ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->industryCoupon->tokens->postAsync([
  'json' => [
    'open_id'     => 'obLatjrR8kUDlj4-nofQsPAJAAFI',
    'coupon_list' => [[
      'stock_id'  => 16474341,
      'coupon_id' => '11004999626',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/industry-coupon/tokens')->postAsync([
  'json' => [
    'open_id'     => 'obLatjrR8kUDlj4-nofQsPAJAAFI',
    'coupon_list' => [[
      'stock_id'  => 16474341,
      'coupon_id' => '11004999626',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/industry-coupon/tokens']->postAsync([
  'json' => [
    'open_id'     => 'obLatjrR8kUDlj4-nofQsPAJAAFI',
    'coupon_list' => [[
      'stock_id'  => 16474341,
      'coupon_id' => '11004999626',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->industryCoupon->tokens->post([
  'json' => [
    'open_id'     => 'obLatjrR8kUDlj4-nofQsPAJAAFI',
    'coupon_list' => [[
      'stock_id'  => 16474341,
      'coupon_id' => '11004999626',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/industry-coupon/tokens')->post([
  'json' => [
    'open_id'     => 'obLatjrR8kUDlj4-nofQsPAJAAFI',
    'coupon_list' => [[
      'stock_id'  => 16474341,
      'coupon_id' => '11004999626',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/industry-coupon/tokens']->post([
  'json' => [
    'open_id'     => 'obLatjrR8kUDlj4-nofQsPAJAAFI',
    'coupon_list' => [[
      'stock_id'  => 16474341,
      'coupon_id' => '11004999626',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| token | string | 切卡组件token值
| expires_time | string | token过期时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_9_1.shtml)
