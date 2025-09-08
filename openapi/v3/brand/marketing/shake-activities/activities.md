---
title: 查询摇优惠活动列表
description: 通过此接口可查询指定某品牌的所有摇优惠活动列表
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| brand_id {data-required data-indent=1} | string | 品牌ID
| limit {data-required data-indent=1} | integer | 分页大小
| offset {data-required data-indent=1} | integer | 分页页码
| activity_state {data-indent=1} | string | 活动状态<br/>`CREATED` \| `DELIVERING` \| `EXPIRED` \| `PAUSED` \| `TERMINATED` 枚举值之一
| audit_state {data-indent=1} | string | `PENDING` \| `APPROVED` \| `REJECTED` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->marketing->shakeActivities->activities->getAsync([
  'query' => [
    'brand_id'       => '120344',
    'limit'          => 5,
    'offset'         => 10,
    'activity_state' => 'CREATED',
    'audit_state'    => 'PENDING',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/marketing/shake-activities/activities')->getAsync([
  'query' => [
    'brand_id'       => '120344',
    'limit'          => 5,
    'offset'         => 10,
    'activity_state' => 'CREATED',
    'audit_state'    => 'PENDING',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/marketing/shake-activities/activities']->getAsync([
  'query' => [
    'brand_id'       => '120344',
    'limit'          => 5,
    'offset'         => 10,
    'activity_state' => 'CREATED',
    'audit_state'    => 'PENDING',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->marketing->shakeActivities->activities->get([
  'query' => [
    'brand_id'       => '120344',
    'limit'          => 5,
    'offset'         => 10,
    'activity_state' => 'CREATED',
    'audit_state'    => 'PENDING',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/marketing/shake-activities/activities')->get([
  'query' => [
    'brand_id'       => '120344',
    'limit'          => 5,
    'offset'         => 10,
    'activity_state' => 'CREATED',
    'audit_state'    => 'PENDING',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/marketing/shake-activities/activities']->get([
  'query' => [
    'brand_id'       => '120344',
    'limit'          => 5,
    'offset'         => 10,
    'activity_state' => 'CREATED',
    'audit_state'    => 'PENDING',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| offset {data-required} | integer | 分页页码
| limit {data-required} | integer | 分页大小
| total_count {data-required} | integer | 总数
| data | object[] {data-tooltip="对应PHP的array"} | 摇一摇有优惠活动列表
| id {data-required data-indent=1} | string | 活动id
| name {data-required data-indent=1} | string | 活动名称
| activity_state {data-required data-indent=1} | string | 活动状态<br/>`CREATED` \| `DELIVERING` \| `EXPIRED` \| `PAUSED` \| `TERMINATED` 枚举值之一
| audit_state {data-required data-indent=1} | string | `PENDING` \| `APPROVED` \| `REJECTED` 枚举值之一
| available_quota {data-required data-indent=1} | integer | 可用库存
| total_quota {data-required data-indent=1} | integer | 总库存
| delivery_mode {data-required data-indent=1} | string | 投放模式<br/>`SMART` \| `TARGETED` 枚举值之一
| time_range {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 投放时间范围
| start_time {data-required data-indent=2} | string | 开始时间
| end_time {data-required data-indent=2} | string | 结束时间
| product_coupon {data-indent=1} | object {data-tooltip="对应PHP的array"} | 商品券
| product_coupon_id {data-required data-indent=2} | string | 商品券ID
| stock_list {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 商品券批次列表
| stock_id {data-required data-indent=3} | string | 批次ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015783259)
