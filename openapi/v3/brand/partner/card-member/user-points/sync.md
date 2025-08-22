---
title: 同步积分余额
description: 通过此接口可同步指定用户的会员卡积分余额。接口限频：按服务商商户号维度 5次/秒
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_request_no {data-required data-indent=1} | string | 商家请求单号
| brand_id {data-required data-indent=1} | string | 品牌ID
| card_id {data-required data-indent=1} | string | 会员卡模板ID
| openid {data-required data-indent=1} | string | 用户标识
| user_card_code {data-required data-indent=1} | string | 会员卡code
| point_balance {data-required data-indent=1} | integer | 积分余额

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->partner->cardMember->userPoints->sync->postAsync([
  'json' => [
    'out_request_no' => '100002322019090134234sfdf',
    'brand_id'       => '1004',
    'card_id'        => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'         => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_code' => '478515832665',
    'point_balance'  => 1000,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/partner/card-member/user-points/sync')->postAsync([
  'json' => [
    'out_request_no' => '100002322019090134234sfdf',
    'brand_id'       => '1004',
    'card_id'        => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'         => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_code' => '478515832665',
    'point_balance'  => 1000,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/partner/card-member/user-points/sync']->postAsync([
  'json' => [
    'out_request_no' => '100002322019090134234sfdf',
    'brand_id'       => '1004',
    'card_id'        => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'         => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_code' => '478515832665',
    'point_balance'  => 1000,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->partner->cardMember->userPoints->sync->post([
  'json' => [
    'out_request_no' => '100002322019090134234sfdf',
    'brand_id'       => '1004',
    'card_id'        => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'         => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_code' => '478515832665',
    'point_balance'  => 1000,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/partner/card-member/user-points/sync')->post([
  'json' => [
    'out_request_no' => '100002322019090134234sfdf',
    'brand_id'       => '1004',
    'card_id'        => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'         => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_code' => '478515832665',
    'point_balance'  => 1000,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/partner/card-member/user-points/sync']->post([
  'json' => [
    'out_request_no' => '100002322019090134234sfdf',
    'brand_id'       => '1004',
    'card_id'        => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'         => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_code' => '478515832665',
    'point_balance'  => 1000,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_request_no {data-required} | string | 商家请求单号
| brand_id {data-required} | string | 品牌ID
| card_id {data-required} | string | 会员卡模板ID
| openid {data-required} | string | 用户标识
| user_card_code {data-required} | string | 会员卡code
| point_balance {data-required} | integer | 积分余额

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015897280)
