---
title: 终止品牌会员发券活动
description: 终止指定的品牌会员发券活动，将不再在品牌会员组件中曝光，品牌会员组件不受影响，在正常调用的情况下仍会向用户展示。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id {data-required} | string | 活动ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_id {data-required data-indent=1} | string | 品牌ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->partner->cardMember->membershipActivities->_activity_id_->terminate->postAsync([
  'activity_id' => '371067',
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
$instance->chain('v3/brand/partner/card-member/membership-activities/{activity_id}/terminate')->postAsync([
  'activity_id' => '371067',
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
$instance['v3/brand/partner/card-member/membership-activities/{activity_id}/terminate']->postAsync([
  'activity_id' => '371067',
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
$response = $instance->v3->brand->partner->cardMember->membershipActivities->_activity_id_->terminate->post([
  'activity_id' => '371067',
  'json' => [
    'brand_id' => '1004',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/partner/card-member/membership-activities/{activity_id}/terminate')->post([
  'activity_id' => '371067',
  'json' => [
    'brand_id' => '1004',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/partner/card-member/membership-activities/{activity_id}/terminate']->post([
  'activity_id' => '371067',
  'json' => [
    'brand_id' => '1004',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_request_no {data-required} | string | 商户请求单号
| brand_id {data-required} | string | 品牌ID
| card_id {data-required} | string | 会员卡ID
| activity_channel {data-required} | string | 活动渠道<br/>`MECHANT_APP_COMPONENT` 枚举值
| title {data-required} | string | 活动主标题
| sub_title {data-required} | string | 活动主标题
| begin_time {data-required} | string | 活动开始时间
| end_time {data-required} | string | 活动结束时间
| apply_total {data-required} | integer | 活动总库存
| apply_available {data-required} | integer | 活动剩余库存
| product_coupon_stock_list {data-required} | object[] {data-tooltip="对应PHP的array"} | 商品券批次列表
| product_coupon_id {data-required data-indent=1} | string | 商品券ID
| stock_id {data-required data-indent=1} | string | 批次ID
| activity_id {data-required} | string | 活动ID
| activity_state {data-required} | string | 活动状态<br/>`MEMBERSHIP_ACTIVITY_CREATED` \| `MEMBERSHIP_ACTIVITY_EFFECTIVE` \| `MEMBERSHIP_ACTIVITY_TERMINATED` \| `MEMBERSHIP_ACTIVITY_EXPIRED` 枚举值之一
| create_time {data-required} | string | 创建时间
| modify_time {data-required} | string | 更新时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016588028)
