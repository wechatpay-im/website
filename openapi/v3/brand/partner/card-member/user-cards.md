---
title: 查询用户在品牌下所有会员卡
description: 查询用户在当前品牌下领取的会员卡列表
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| brand_id {data-required data-indent=1} | string | 品牌id
| openid {data-required data-indent=1} | string | 用户标识
| user_card_state {data-indent=1} | string | 用户会员卡状态<br/>`UNACTIVATED` \| `EFFECTIVE` \| `EXPIRED` \| `INVALID` 枚举值之一
| offset {data-required data-indent=1} | integer | 分页页码
| limit {data-required data-indent=1} | integer | 分页大小

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->partner->cardMember->userCards->getAsync([
  'query' => [
    'brand_id'        => '1004',
    'openid'          => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_state' => 'UNACTIVATED',
    'offset'          => 0,
    'limit'           => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/partner/card-member/user-cards')->getAsync([
  'query' => [
    'brand_id'        => '1004',
    'openid'          => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_state' => 'UNACTIVATED',
    'offset'          => 0,
    'limit'           => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/partner/card-member/user-cards']->getAsync([
  'query' => [
    'brand_id'        => '1004',
    'openid'          => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_state' => 'UNACTIVATED',
    'offset'          => 0,
    'limit'           => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->partner->cardMember->userCards->get([
  'query' => [
    'brand_id'        => '1004',
    'openid'          => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_state' => 'UNACTIVATED',
    'offset'          => 0,
    'limit'           => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/partner/card-member/user-cards')->get([
  'query' => [
    'brand_id'        => '1004',
    'openid'          => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_state' => 'UNACTIVATED',
    'offset'          => 0,
    'limit'           => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/partner/card-member/user-cards']->get([
  'query' => [
    'brand_id'        => '1004',
    'openid'          => 'obLatjnx9gnqzS4myYGmLZ7LgLBA',
    'user_card_state' => 'UNACTIVATED',
    'offset'          => 0,
    'limit'           => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_count {data-required} | integer | 总数量
| offset {data-required} | integer | 分页页码
| limit {data-required} | integer | 分页大小
| data | object[] {data-tooltip="对应PHP的array"} | 会员卡列表
| user_card_code {data-required data-indent=1} | string | 会员卡code
| card_id {data-required data-indent=1} | string | 会员卡模板ID
| openid {data-required data-indent=1} | string | 用户标识
| card_color {data-indent=1} | string | 卡背景颜色
| card_picture_url {data-indent=1} | string | 卡背景图URL
| brand_id {data-required data-indent=1} | string | 品牌ID
| card_type {data-required data-indent=1} | string | 会员卡类型<br/>`PURCHASE` \| `NORMAL` \| `BALANCE` 枚举值之一
| phone_number {data-indent=1} | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 加密的手机号
| level {data-indent=1} | string | 等级
| valid_date_information {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 会员卡有效期
| type {data-required data-indent=2} | string | 有效期类型<br/>`FIX_TIME_RANGE` \| `FIX_TERM` \| `PERMANENT` 枚举值之一
| available_begin_time {data-indent=2} | string | 有效期开始时间
| available_end_time {data-indent=2} | string | 有效期结束时间
| available_day_after_receive {data-indent=2} | integer | 生效后N天内有效
| pickup_time {data-required data-indent=1} | string | 领取时间
| user_information {data-indent=1} | object {data-tooltip="对应PHP的array"} | 用户开卡时填写的个人信息
| common_field_list {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 平台提供的通用开卡信息字段
| name {data-indent=3} | string | 平台提供的通用开卡信息字段<br/>`USER_FORM_FLAG_SEX` \| `USER_FORM_FLAG_NAME` \| `USER_FORM_FLAG_BIRTHDAY` \| `USER_FORM_FLAG_ADDRESS` \| `USER_FORM_FLAG_EMAIL` \| `USER_FORM_FLAG_CITY` 枚举值之一
| value {data-indent=3} | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 加密的用户开卡时填写的个人信息
| custom_field_list {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 商户自定义的开卡信息字段
| name {data-indent=3} | string | 字段名称
| user_chosen_values {data-indent=3} | string[] | 加密的用户选择的字段值列表
| attach {data-indent=1} | string | 商家数据包
| user_card_state {data-required data-indent=1} | string | 用户会员卡状态<br/>`UNACTIVATED` \| `EFFECTIVE` \| `EXPIRED` \| `INVALID` 枚举值之一
| invalid_reason {data-indent=1} | string | 作废原因
| invalid_time {data-indent=1} | string | 作废时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015336984)
