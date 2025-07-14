---
title: 作废会员卡模板
description: 商家可调用此 API 作废会员卡模板。作废后，商家将无法通过任何渠道再投放该会员卡。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id {data-required} | string | 会员卡模板ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_id {data-required data-indent=1} | string | 品牌id

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->partner->cardMember->cards->_card_id_->invalidate->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'brand_id' => '1004',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/partner/card-member/cards/{card_id}/invalidate')->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'brand_id' => '1004',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/partner/card-member/cards/{card_id}/invalidate']->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'brand_id' => '1004',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->partner->cardMember->cards->_card_id_->invalidate->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'brand_id' => '1004',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/partner/card-member/cards/{card_id}/invalidate')->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'brand_id' => '1004',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/partner/card-member/cards/{card_id}/invalidate']->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'json' => [
    'brand_id' => '1004',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_request_no {data-required} | string | 商家请求单号
| card_id {data-required} | string | 会员卡模板ID
| brand_id {data-required} | string | 品牌ID
| appid {data-required} | string | 商户AppId
| card_type {data-required} | string | 会员卡类型<br/>`PURCHASE` \| `NORMAL` \| `BALANCE` 枚举值之一
| card_title {data-required} | string | 卡名称
| card_color {data-required} | string | 卡背景颜色
| card_picture_url {data-required} | string | 卡背景图URL
| code_mode {data-required} | string | 会员卡code分配类型<br/>`SYSTEM_ALLOCATE` \| `MERCHANT_ALLOCATE` 枚举值之一
| code_type {data-required} | string | 会员码型<br/>`NONE_CODE` \| `BAR_CODE` \| `QR_CODE` \| `BAR_CODE_AND_QR_CODE` \| `JUMP_MINI_PROGRAM` 枚举值之一
| code_jump_information | object {data-tooltip="对应PHP的array"} | 会员码跳转信息
| jump_appid {data-indent=1} | string | 会员码跳转AppID
| jump_path {data-indent=1} | string | 会员码跳转路径
| benefits {data-required} | string | 会员权益
| notify_url {data-required} | string | 回调地址
| need_pinned | boolean | 是否置顶
| need_display_level | boolean | 是否展示会员等级
| init_level | string | 会员初始等级
| service_phone | string | 服务电话
| legal_agreement | string | 商家法务协议
| valid_date_information {data-required} | object {data-tooltip="对应PHP的array"} | 会员卡有效期
| type {data-required data-indent=1} | string | 有效期类型<br/>`FIX_TIME_RANGE` \| `FIX_TERM` \| `PERMANENT` 枚举值之一
| available_begin_time {data-indent=1} | string | 有效期开始时间
| available_end_time {data-indent=1} | string | 有效期结束时间
| available_day_after_receive {data-indent=1} | integer | 生效后N天内有效
| member_information {data-required} | object {data-tooltip="对应PHP的array"} | 会员中心信息
| jump_appid {data-indent=1} | string | 会员中心跳转AppID
| jump_path {data-indent=1} | string | 会员中心跳转路径
| points_information | object {data-tooltip="对应PHP的array"} | 积分信息
| jump_appid {data-indent=1} | string | 积分跳转AppID
| jump_path {data-indent=1} | string | 积分跳转路径
| balance_information | object {data-tooltip="对应PHP的array"} | 储值信息
| jump_appid {data-indent=1} | string | 储值小程序AppID
| jump_path {data-indent=1} | string | 储值小程序路径
| purchase_information | object {data-tooltip="对应PHP的array"} | 付费会员信息
| price {data-indent=1} | number | 付费会员价格
| jump_appid {data-indent=1} | string | 付费会员跳转AppID
| jump_path {data-indent=1} | string | 付费会员跳转路径
| user_information | object {data-tooltip="对应PHP的array"} | 用户开卡信息
| common_field_list {data-indent=1} | string[] | 平台提供的通用开卡信息字段<br/>`USER_FORM_FLAG_SEX` \| `USER_FORM_FLAG_NAME` \| `USER_FORM_FLAG_BIRTHDAY` \| `USER_FORM_FLAG_ADDRESS` \| `USER_FORM_FLAG_EMAIL` \| `USER_FORM_FLAG_CITY` 枚举值之一
| custom_field_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 商户自定义的开卡信息字段
| type {data-indent=2} | string | 商户自定义的开卡信息字段类型<br/>`CHECK_BOX` \| `RADIO` 枚举值之一
| name {data-indent=2} | string | 字段名称
| values {data-indent=2} | string[] | 字段值
| state {data-required} | string | 状态<br/>`CARD_EFFECTIVE` \| `CARD_INVALID` 枚举值之一
| create_time {data-required} | string | 创建时间
| update_time {data-required} | string | 更新时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015336972)
