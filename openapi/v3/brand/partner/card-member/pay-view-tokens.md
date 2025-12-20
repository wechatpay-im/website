---
title: 品牌会员展示付款码组件预授权
description: 生成用于商家小程序拉起展示付款码组件的凭证。该凭证有效期为 10 分钟，仅限单次使用，每次拉起组件前均需重新获取。接口限频：按服务商商户号维度 5次/秒
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_id {data-required data-indent=1} | string | 品牌ID
| card_id {data-required data-indent=1} | string | 会员卡模板ID
| openid {data-required data-indent=1} | string | 用户标识

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->partner->cardMember->payViewTokens->postAsync([
  'json' => [
    'brand_id' => '1004',
    'card_id'  => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'   => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/partner/card-member/pay-view-tokens')->postAsync([
  'json' => [
    'brand_id' => '1004',
    'card_id'  => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'   => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/partner/card-member/pay-view-tokens']->postAsync([
  'json' => [
    'brand_id' => '1004',
    'card_id'  => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'   => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->partner->cardMember->payViewTokens->post([
  'json' => [
    'brand_id' => '1004',
    'card_id'  => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'   => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/partner/card-member/pay-view-tokens')->post([
  'json' => [
    'brand_id' => '1004',
    'card_id'  => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'   => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/partner/card-member/pay-view-tokens']->post([
  'json' => [
    'brand_id' => '1004',
    'card_id'  => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'   => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| token {data-required} | string | 预授权token
| expire_time {data-required} | string | token 过期时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016834476)
