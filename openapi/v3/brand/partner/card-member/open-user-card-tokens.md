---
title: 入会组件预授权
description: 生成用于商家小程序或 H5 拉起入会组件的品牌预授权凭证
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_id {data-required data-indent=1} | string | 品牌ID
| card_id {data-required data-indent=1} | string | 会员卡模板ID
| openid {data-required data-indent=1} | string | 用户标识
| user_card_code {data-indent=1} | string | 会员卡code

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->partner->cardMember->openUserCardTokens->postAsync([
  'json' => [
    'brand_id'       => '1004',
    'card_id'        => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'         => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_code' => '478515832665',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/partner/card-member/open-user-card-tokens')->postAsync([
  'json' => [
    'brand_id'       => '1004',
    'card_id'        => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'         => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_code' => '478515832665',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/partner/card-member/open-user-card-tokens']->postAsync([
  'json' => [
    'brand_id'       => '1004',
    'card_id'        => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'         => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_code' => '478515832665',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->partner->cardMember->openUserCardTokens->post([
  'json' => [
    'brand_id'       => '1004',
    'card_id'        => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'         => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_code' => '478515832665',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/partner/card-member/open-user-card-tokens')->post([
  'json' => [
    'brand_id'       => '1004',
    'card_id'        => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'         => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_code' => '478515832665',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/partner/card-member/open-user-card-tokens']->post([
  'json' => [
    'brand_id'       => '1004',
    'card_id'        => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'         => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_code' => '478515832665',
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015336986)
