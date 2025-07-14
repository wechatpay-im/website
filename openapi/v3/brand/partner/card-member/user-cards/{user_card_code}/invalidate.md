---
title: 作废用户会员卡
description: 将用户的会员卡设置为失效状态。注意：1.设置卡券作废的操作不可逆，即无法将设置为作废的卡调回有效状态，商家须慎重调用该接口。2.商家调用作废接口前须与顾客事先告知并取得同意，否则因此带来的顾客投诉，微信将会按照《微信运营处罚规则》
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| user_card_code {data-required} | string | 会员卡code
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| openid {data-required data-indent=1} | string | 用户标识
| invalid_reason {data-indent=1} | string | 作废原因
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| brand_id {data-required data-indent=1} | string | 品牌id
| card_id {data-required data-indent=1} | string | 会员卡模版ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->partner->cardMember->userCards->_user_card_code_->invalidate->postAsync([
  'user_card_code' => '478515832665',
  'json' => [
    'openid'         => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'invalid_reason' => '传入的自定义作废原因',
  ],
  'query' => [
    'brand_id' => '1004',
    'card_id'  => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/partner/card-member/user-cards/{user_card_code}/invalidate')->postAsync([
  'user_card_code' => '478515832665',
  'json' => [
    'openid'         => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'invalid_reason' => '传入的自定义作废原因',
  ],
  'query' => [
    'brand_id' => '1004',
    'card_id'  => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/partner/card-member/user-cards/{user_card_code}/invalidate']->postAsync([
  'user_card_code' => '478515832665',
  'json' => [
    'openid'         => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'invalid_reason' => '传入的自定义作废原因',
  ],
  'query' => [
    'brand_id' => '1004',
    'card_id'  => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->partner->cardMember->userCards->_user_card_code_->invalidate->post([
  'user_card_code' => '478515832665',
  'json' => [
    'openid'         => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'invalid_reason' => '传入的自定义作废原因',
  ],
  'query' => [
    'brand_id' => '1004',
    'card_id'  => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/partner/card-member/user-cards/{user_card_code}/invalidate')->post([
  'user_card_code' => '478515832665',
  'json' => [
    'openid'         => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'invalid_reason' => '传入的自定义作废原因',
  ],
  'query' => [
    'brand_id' => '1004',
    'card_id'  => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/partner/card-member/user-cards/{user_card_code}/invalidate']->post([
  'user_card_code' => '478515832665',
  'json' => [
    'openid'         => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'invalid_reason' => '传入的自定义作废原因',
  ],
  'query' => [
    'brand_id' => '1004',
    'card_id'  => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| user_card_code {data-required} | string | 会员卡code
| card_id {data-required} | string | 会员卡模板ID
| openid {data-required} | string | 用户标识
| card_color | string | 卡背景颜色
| card_picture_url | string | 卡背景图URL
| brand_id {data-required} | string | 品牌ID
| card_type {data-required} | string | 会员卡类型<br/>`PURCHASE` \| `NORMAL` \| `BALANCE` 枚举值之一
| phone_number | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 加密的手机号
| level | string | 等级
| valid_date_information {data-required} | object {data-tooltip="对应PHP的array"} | 会员卡有效期
| type {data-required data-indent=1} | string | 有效期类型<br/>`FIX_TIME_RANGE` \| `FIX_TERM` \| `PERMANENT` 枚举值之一
| available_begin_time {data-indent=1} | string | 有效期开始时间
| available_end_time {data-indent=1} | string | 有效期结束时间
| available_day_after_receive {data-indent=1} | integer | 生效后N天内有效
| pickup_time {data-required} | string | 领取时间
| user_information | object {data-tooltip="对应PHP的array"} | 用户开卡时填写的个人信息
| common_field_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 平台提供的通用开卡信息字段
| name {data-indent=2} | string | 平台提供的通用开卡信息字段<br/>`USER_FORM_FLAG_SEX` \| `USER_FORM_FLAG_NAME` \| `USER_FORM_FLAG_BIRTHDAY` \| `USER_FORM_FLAG_ADDRESS` \| `USER_FORM_FLAG_EMAIL` \| `USER_FORM_FLAG_CITY` 枚举值之一
| value {data-indent=2} | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 加密的用户开卡时填写的个人信息
| custom_field_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 商户自定义的开卡信息字段
| name {data-indent=2} | string | 字段名称
| user_chosen_values {data-indent=2} | string[] | 加密的用户选择的字段值列表
| attach | string | 商家数据包
| user_card_state {data-required} | string | 用户会员卡状态<br/>`UNACTIVATED` \| `EFFECTIVE` \| `EXPIRED` \| `INVALID` 枚举值之一
| invalid_reason | string | 作废原因
| invalid_time | string | 作废时间

{.im-table #response}
