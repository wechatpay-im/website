---
title: 同步积分兑券结果
description: 当用户触发积分兑券后，微信支付将通过用户积分兑券事件通知接口回调给商家。商家处理完成后，必须把积分兑券处理结果同步给微信支付侧。接口限频：按服务商商户号维度 5次/秒
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| record_id {data-required data-indent=1} | string | 积分兑券ID
| exchange_coupon_template_id {data-required data-indent=1} | string | 积分兑券模板ID
| brand_id {data-required data-indent=1} | string | 品牌ID
| card_id {data-required data-indent=1} | string | 会员卡模板ID
| openid {data-required data-indent=1} | string | 用户标识
| user_card_code {data-required data-indent=1} | string | 会员卡code
| state {data-required data-indent=1} | string | 积分兑券状态<br/>`POINT_EXCHANGE_COUPON_SUCCESS` \| `POINT_EXCHANGE_COUPON_FAIL` 枚举值之一
| coupon_code {data-indent=1} | string | 积分余额
| fail_reason {data-indent=1} | string | 兑券失败原因

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->partner->cardMember->userPoints->exchangeCoupon->confirm->postAsync([
  'json' => [
    'record_id'                   => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'exchange_coupon_template_id' => '0Flpo7FqTQ',
    'brand_id'                    => '1004',
    'card_id'                     => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'                      => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_code'              => '478515832665',
    'state'                       => 'POINT_EXCHANGE_COUPON_SUCCESS',
    'coupon_code'                 => '123446565767',
    'fail_reason'                 => '积分不足',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/partner/card-member/user-points/exchange-coupon/confirm')->postAsync([
  'json' => [
    'record_id'                   => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'exchange_coupon_template_id' => '0Flpo7FqTQ',
    'brand_id'                    => '1004',
    'card_id'                     => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'                      => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_code'              => '478515832665',
    'state'                       => 'POINT_EXCHANGE_COUPON_SUCCESS',
    'coupon_code'                 => '123446565767',
    'fail_reason'                 => '积分不足',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/partner/card-member/user-points/exchange-coupon/confirm']->postAsync([
  'json' => [
    'record_id'                   => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'exchange_coupon_template_id' => '0Flpo7FqTQ',
    'brand_id'                    => '1004',
    'card_id'                     => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'                      => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_code'              => '478515832665',
    'state'                       => 'POINT_EXCHANGE_COUPON_SUCCESS',
    'coupon_code'                 => '123446565767',
    'fail_reason'                 => '积分不足',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->partner->cardMember->userPoints->exchangeCoupon->confirm->post([
  'json' => [
    'record_id'                   => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'exchange_coupon_template_id' => '0Flpo7FqTQ',
    'brand_id'                    => '1004',
    'card_id'                     => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'                      => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_code'              => '478515832665',
    'state'                       => 'POINT_EXCHANGE_COUPON_SUCCESS',
    'coupon_code'                 => '123446565767',
    'fail_reason'                 => '积分不足',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/partner/card-member/user-points/exchange-coupon/confirm')->post([
  'json' => [
    'record_id'                   => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'exchange_coupon_template_id' => '0Flpo7FqTQ',
    'brand_id'                    => '1004',
    'card_id'                     => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'                      => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_code'              => '478515832665',
    'state'                       => 'POINT_EXCHANGE_COUPON_SUCCESS',
    'coupon_code'                 => '123446565767',
    'fail_reason'                 => '积分不足',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/partner/card-member/user-points/exchange-coupon/confirm']->post([
  'json' => [
    'record_id'                   => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'exchange_coupon_template_id' => '0Flpo7FqTQ',
    'brand_id'                    => '1004',
    'card_id'                     => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'                      => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_code'              => '478515832665',
    'state'                       => 'POINT_EXCHANGE_COUPON_SUCCESS',
    'coupon_code'                 => '123446565767',
    'fail_reason'                 => '积分不足',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| record_id {data-required} | string | 积分兑券ID
| exchange_coupon_template_id {data-required} | string | 积分兑券模板ID
| brand_id {data-required} | string | 品牌ID
| card_id {data-required} | string | 会员卡模板ID
| openid {data-required} | string | 用户标识
| user_card_code {data-required} | string | 会员卡code
| state {data-required} | string | 积分兑券状态<br/>`POINT_EXCHANGE_COUPON_SUCCESS` \| `POINT_EXCHANGE_COUPON_FAIL` 枚举值之一
| coupon_code | string | 积分余额
| fail_reason | string | 兑券失败原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015897280)
