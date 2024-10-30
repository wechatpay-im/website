---
title: 查询周周惠活动列表
description: 查询周周惠活动列表
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object | 声明请求的查询参数
| limit {data-indent=1} | integer | 最大资源条数
| offset {data-indent=1} | integer | 请求资源起始位置
| applying_merchant_id {data-indent=1} | integer | 报名商户号
| store_id {data-indent=1} | integer | 报名商户门店号
| activity_area_code {data-indent=1} | integer | 活动投放区域编码
| activity_scene {data-indent=1} | string | 投放场景

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->weeklyDiscount->activities->getAsync([
  'query' => [
    'limit' => 5,
    'offset' => 10,
    'applying_merchant_id' => 10000098,
    'store_id' => 1111111,
    'activity_area_code' => 110000,
    'activity_scene' => 'SCAN_CODE_TO_ORDER',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/weekly-discount/activities')->getAsync([
  'query' => [
    'limit' => 5,
    'offset' => 10,
    'applying_merchant_id' => 10000098,
    'store_id' => 1111111,
    'activity_area_code' => 110000,
    'activity_scene' => 'SCAN_CODE_TO_ORDER',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/weekly-discount/activities']->getAsync([
  'query' => [
    'limit' => 5,
    'offset' => 10,
    'applying_merchant_id' => 10000098,
    'store_id' => 1111111,
    'activity_area_code' => 110000,
    'activity_scene' => 'SCAN_CODE_TO_ORDER',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->weeklyDiscount->activities->get([
  'query' => [
    'limit' => 5,
    'offset' => 10,
    'applying_merchant_id' => 10000098,
    'store_id' => 1111111,
    'activity_area_code' => 110000,
    'activity_scene' => 'SCAN_CODE_TO_ORDER',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/weekly-discount/activities')->get([
  'query' => [
    'limit' => 5,
    'offset' => 10,
    'applying_merchant_id' => 10000098,
    'store_id' => 1111111,
    'activity_area_code' => 110000,
    'activity_scene' => 'SCAN_CODE_TO_ORDER',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/weekly-discount/activities']->get([
  'query' => [
    'limit' => 5,
    'offset' => 10,
    'applying_merchant_id' => 10000098,
    'store_id' => 1111111,
    'activity_area_code' => 110000,
    'activity_scene' => 'SCAN_CODE_TO_ORDER',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| data | object[] | 周周惠活动详情
| activity_id {data-indent=1} | string | 活动ID
| activity_name {data-indent=1} | string | 活动名称
| activity_scene {data-indent=1} | string | 活动投放场景
| activity_area_code {data-indent=1} | string[] | 活动投放区域编码
| activity_limit_pay {data-indent=1} | string | 活动指定付款方式
| activity_transaction_minimum_amount {data-indent=1} | integer | 活动优惠门槛
| activity_coupon_amount {data-indent=1} | integer | 活动优惠金额
| activity_available_week {data-indent=1} | string[] | 活动可使用周期
| activity_max_amount {data-indent=1} | integer | 活动预算
| activity_max_amount_per_day {data-indent=1} | integer | 活动单天预算
| activity_available_begin_time {data-indent=1} | string | 活动开始时间
| activity_available_end_time {data-indent=1} | string | 活动结束时间
| activity_state {data-indent=1} | string | 活动状态
| activity_remark {data-indent=1} | string | 活动备注
| activity_logo {data-indent=1} | string | 活动logo
| offset | integer | 请求资源起始位置
| limit | integer | 最大资源条数
| total_count | integer | 资源总条数

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_1_3.shtml)
