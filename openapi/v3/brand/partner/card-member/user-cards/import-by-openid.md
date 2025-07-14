---
title: 根据openid导入用户会员卡
description: 对于经营会员生意的商户来说，存量会员的注册渠道广泛，包括但不限于线下渠道、微信渠道、APP及其他线上渠道。因而，在微信生态下经营会员时常遇到两类问题：（1）存量会员的身份难统一识别；（2）在应用「开卡有礼」活动能力时，容易对存量（但未同步身份至微信侧的）老会员重复补贴。因而，针对大部分存量会员在微信内的商户，商户可通过用户在微信公众号/小程序内的openid，将存量会员通过接口导入至微信侧后台。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_id {data-required data-indent=1} | string | 品牌ID
| card_id {data-required data-indent=1} | string | 会员卡模板ID
| openid {data-required data-indent=1} | string | 用户标识
| user_card_code {data-required data-indent=1} | string | 会员卡code
| phone_number {data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 加密的手机号
| user_information {data-indent=1} | object {data-tooltip="对应PHP的array"} | 用户开卡时填写的个人信息
| common_field_list {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 平台提供的通用开卡信息字段
| name {data-indent=3} | string | 平台提供的通用开卡信息字段<br/>`USER_FORM_FLAG_SEX` \| `USER_FORM_FLAG_NAME` \| `USER_FORM_FLAG_BIRTHDAY` \| `USER_FORM_FLAG_ADDRESS` \| `USER_FORM_FLAG_EMAIL` \| `USER_FORM_FLAG_CITY` 枚举值之一
| value {data-indent=3} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 加密的用户开卡时填写的个人信息
| custom_field_list {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 商户自定义的开卡信息字段
| name {data-indent=3} | string | 字段名称
| user_chosen_values {data-indent=3} | string[] | 加密的用户选择的字段值列表
| date_information {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 会员卡有效期
| type {data-required data-indent=2} | string | 有效期类型<br/>`FIX_TIME_RANGE` \| `FIX_TERM` \| `PERMANENT` 枚举值之一
| available_begin_time {data-indent=2} | string | 有效期开始时间
| available_end_time {data-indent=2} | string | 有效期结束时间
| available_day_after_receive {data-indent=2} | integer | 生效后N天内有效
| pickup_time {data-required data-indent=1} | string | 领取时间
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->partner->cardMember->userCards->importByOpenid->postAsync([
  'json' => [
    'brand_id'         => '1004',
    'card_id'          => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'           => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_code'   => '478515832665',
    'phone_number'     => 'vvysDQeEaH3I+wRh14St0abIkvQyFgh/fbWY==',
    'user_information' => [
      'common_field_list' => [[
        'name'  => 'USER_FORM_FLAG_SEX',
        'value' => 'vvysDQeEaH3I+wRh14St0abIkvQyFgh/fbWY==',
      ],],
      'custom_field_list' => [[
        'name'               => '喜欢的运动',
        'user_chosen_values' => ['vvysDQeEaH3I+wRh14St0abIkvQyFgh/'],
      ],],
    ],
    'date_information' => [
      'type'                        => 'FIX_TIME_RANGE',
      'available_begin_time'        => '2020-05-20T13:29:35.120+08:00',
      'available_end_time'          => '2030-05-20T13:29:35.120+08:00',
      'available_day_after_receive' => 200,
    ],
    'pickup_time'      => '2020-05-20T13:29:35.120+08:00',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/partner/card-member/user-cards/import-by-openid')->postAsync([
  'json' => [
    'brand_id'         => '1004',
    'card_id'          => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'           => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_code'   => '478515832665',
    'phone_number'     => 'vvysDQeEaH3I+wRh14St0abIkvQyFgh/fbWY==',
    'user_information' => [
      'common_field_list' => [[
        'name'  => 'USER_FORM_FLAG_SEX',
        'value' => 'vvysDQeEaH3I+wRh14St0abIkvQyFgh/fbWY==',
      ],],
      'custom_field_list' => [[
        'name'               => '喜欢的运动',
        'user_chosen_values' => ['vvysDQeEaH3I+wRh14St0abIkvQyFgh/'],
      ],],
    ],
    'date_information' => [
      'type'                        => 'FIX_TIME_RANGE',
      'available_begin_time'        => '2020-05-20T13:29:35.120+08:00',
      'available_end_time'          => '2030-05-20T13:29:35.120+08:00',
      'available_day_after_receive' => 200,
    ],
    'pickup_time'      => '2020-05-20T13:29:35.120+08:00',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/partner/card-member/user-cards/import-by-openid']->postAsync([
  'json' => [
    'brand_id'         => '1004',
    'card_id'          => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'           => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_code'   => '478515832665',
    'phone_number'     => 'vvysDQeEaH3I+wRh14St0abIkvQyFgh/fbWY==',
    'user_information' => [
      'common_field_list' => [[
        'name'  => 'USER_FORM_FLAG_SEX',
        'value' => 'vvysDQeEaH3I+wRh14St0abIkvQyFgh/fbWY==',
      ],],
      'custom_field_list' => [[
        'name'               => '喜欢的运动',
        'user_chosen_values' => ['vvysDQeEaH3I+wRh14St0abIkvQyFgh/'],
      ],],
    ],
    'date_information' => [
      'type'                        => 'FIX_TIME_RANGE',
      'available_begin_time'        => '2020-05-20T13:29:35.120+08:00',
      'available_end_time'          => '2030-05-20T13:29:35.120+08:00',
      'available_day_after_receive' => 200,
    ],
    'pickup_time'      => '2020-05-20T13:29:35.120+08:00',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->partner->cardMember->userCards->importByOpenid->post([
  'json' => [
    'brand_id'         => '1004',
    'card_id'          => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'           => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_code'   => '478515832665',
    'phone_number'     => 'vvysDQeEaH3I+wRh14St0abIkvQyFgh/fbWY==',
    'user_information' => [
      'common_field_list' => [[
        'name'  => 'USER_FORM_FLAG_SEX',
        'value' => 'vvysDQeEaH3I+wRh14St0abIkvQyFgh/fbWY==',
      ],],
      'custom_field_list' => [[
        'name'               => '喜欢的运动',
        'user_chosen_values' => ['vvysDQeEaH3I+wRh14St0abIkvQyFgh/'],
      ],],
    ],
    'date_information' => [
      'type'                        => 'FIX_TIME_RANGE',
      'available_begin_time'        => '2020-05-20T13:29:35.120+08:00',
      'available_end_time'          => '2030-05-20T13:29:35.120+08:00',
      'available_day_after_receive' => 200,
    ],
    'pickup_time'      => '2020-05-20T13:29:35.120+08:00',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/partner/card-member/user-cards/import-by-openid')->post([
  'json' => [
    'brand_id'         => '1004',
    'card_id'          => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'           => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_code'   => '478515832665',
    'phone_number'     => 'vvysDQeEaH3I+wRh14St0abIkvQyFgh/fbWY==',
    'user_information' => [
      'common_field_list' => [[
        'name'  => 'USER_FORM_FLAG_SEX',
        'value' => 'vvysDQeEaH3I+wRh14St0abIkvQyFgh/fbWY==',
      ],],
      'custom_field_list' => [[
        'name'               => '喜欢的运动',
        'user_chosen_values' => ['vvysDQeEaH3I+wRh14St0abIkvQyFgh/'],
      ],],
    ],
    'date_information' => [
      'type'                        => 'FIX_TIME_RANGE',
      'available_begin_time'        => '2020-05-20T13:29:35.120+08:00',
      'available_end_time'          => '2030-05-20T13:29:35.120+08:00',
      'available_day_after_receive' => 200,
    ],
    'pickup_time'      => '2020-05-20T13:29:35.120+08:00',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/partner/card-member/user-cards/import-by-openid']->post([
  'json' => [
    'brand_id'         => '1004',
    'card_id'          => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'openid'           => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_code'   => '478515832665',
    'phone_number'     => 'vvysDQeEaH3I+wRh14St0abIkvQyFgh/fbWY==',
    'user_information' => [
      'common_field_list' => [[
        'name'  => 'USER_FORM_FLAG_SEX',
        'value' => 'vvysDQeEaH3I+wRh14St0abIkvQyFgh/fbWY==',
      ],],
      'custom_field_list' => [[
        'name'               => '喜欢的运动',
        'user_chosen_values' => ['vvysDQeEaH3I+wRh14St0abIkvQyFgh/'],
      ],],
    ],
    'date_information' => [
      'type'                        => 'FIX_TIME_RANGE',
      'available_begin_time'        => '2020-05-20T13:29:35.120+08:00',
      'available_end_time'          => '2030-05-20T13:29:35.120+08:00',
      'available_day_after_receive' => 200,
    ],
    'pickup_time'      => '2020-05-20T13:29:35.120+08:00',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015336981)
