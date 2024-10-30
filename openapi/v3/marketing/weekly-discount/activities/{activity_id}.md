---
title: 查询周周惠活动详情
description: 查询周周惠活动详情
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id | string | 活动ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->weeklyDiscount->activities->_activity_id_->getAsync([
  'activity_id' => '11111',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/weekly-discount/activities/{activity_id}')->getAsync([
  'activity_id' => '11111',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/weekly-discount/activities/{activity_id}']->getAsync([
  'activity_id' => '11111',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->weeklyDiscount->activities->_activity_id_->get([
  'activity_id' => '11111',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/weekly-discount/activities/{activity_id}')->get([
  'activity_id' => '11111',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/weekly-discount/activities/{activity_id}']->get([
  'activity_id' => '11111',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id | string | 活动ID
| activity_name | string | 活动名称
| activity_scene | string | 活动投放场景
| activity_area_code | string[] | 活动投放区域编码
| activity_limit_pay | string | 活动指定付款方式
| activity_transaction_minimum_amount | integer | 活动优惠门槛
| activity_coupon_amount | integer | 活动优惠金额
| activity_available_week | string[] | 活动可使用周期
| activity_max_amount | integer | 活动预算
| activity_max_amount_per_day | integer | 活动单天预算
| activity_available_begin_time | string | 活动开始时间
| activity_available_end_time | string | 活动结束时间
| activity_state | string | 活动状态
| activity_remark | string | 活动备注
| activity_logo | string | 活动logo

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_1_2.shtml)
