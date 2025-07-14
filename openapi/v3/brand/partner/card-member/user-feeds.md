---
title: 创建用户动态信息
description: 通过此接口同步非微信支付渠道的会员动态信息到微信支付商家名片会员
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_id {data-required data-indent=1} | string | 品牌ID
| card_id {data-required data-indent=1} | string | 会员卡模板ID
| user_card_code {data-required data-indent=1} | string | 会员卡code
| openid {data-required data-indent=1} | string | 用户标识
| out_request_no {data-required data-indent=1} | string | 商家请求单号
| cell_message {data-required data-indent=1} | string | 会员动态内容

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->partner->cardMember->userFeeds->postAsync([
  'json' => [
    'brand_id'       => '1004',
    'card_id'        => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'user_card_code' => '478515832665',
    'openid'         => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'out_request_no' => '100002322019090134234sfdf',
    'cell_message'   => '15_1200_1',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/partner/card-member/user-feeds')->postAsync([
  'json' => [
    'brand_id'       => '1004',
    'card_id'        => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'user_card_code' => '478515832665',
    'openid'         => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'out_request_no' => '100002322019090134234sfdf',
    'cell_message'   => '15_1200_1',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/partner/card-member/user-feeds']->postAsync([
  'json' => [
    'brand_id'       => '1004',
    'card_id'        => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'user_card_code' => '478515832665',
    'openid'         => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'out_request_no' => '100002322019090134234sfdf',
    'cell_message'   => '15_1200_1',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->partner->cardMember->userFeeds->post([
  'json' => [
    'brand_id'       => '1004',
    'card_id'        => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'user_card_code' => '478515832665',
    'openid'         => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'out_request_no' => '100002322019090134234sfdf',
    'cell_message'   => '15_1200_1',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/partner/card-member/user-feeds')->post([
  'json' => [
    'brand_id'       => '1004',
    'card_id'        => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'user_card_code' => '478515832665',
    'openid'         => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'out_request_no' => '100002322019090134234sfdf',
    'cell_message'   => '15_1200_1',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/partner/card-member/user-feeds']->post([
  'json' => [
    'brand_id'       => '1004',
    'card_id'        => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'user_card_code' => '478515832665',
    'openid'         => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'out_request_no' => '100002322019090134234sfdf',
    'cell_message'   => '15_1200_1',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| brand_id {data-required} | string | 品牌ID
| card_id {data-required} | string | 会员卡模板ID
| user_card_code {data-required} | string | 会员卡code
| openid {data-required} | string | 用户标识
| out_request_no {data-required} | string | 商家请求单号
| cell_message {data-required} | string | 会员动态内容

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015336987)
