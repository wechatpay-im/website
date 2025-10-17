---
title: 更新投放计划
description: 更新投放计划
---

# {{ $frontmatter.title }} {#patch}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| plan_id {data-required} | string | 投放计划ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| modify_content {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 修改内容
| plan_name {data-indent=2} | string | 投放计划名称
| delivery_end_time {data-indent=2} | string | 结束可用时间
| total_count {data-indent=2} | integer | 总库存
| user_limit {data-indent=2} | integer | 单用户限领
| daily_limit {data-indent=2} | integer | 单日限领
| recommend_word {data-indent=2} | string | 营销标签

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->partner->deliveryPlan->deliveryPlans->_plan_id_->patchAsync([
  'plan_id' => '12000',
  'json' => [
    'modify_content' => [
      'plan_name'         => '冬季饮料投放',
      'delivery_end_time' => '2025-01-01T00:00:00+08:00',
      'total_count'       => 1,
      'user_limit'        => 1,
      'daily_limit'       => 1,
      'recommend_word'    => '天天有惊喜',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/partner/delivery-plan/delivery-plans/{plan_id}')->patchAsync([
  'plan_id' => '12000',
  'json' => [
    'modify_content' => [
      'plan_name'         => '冬季饮料投放',
      'delivery_end_time' => '2025-01-01T00:00:00+08:00',
      'total_count'       => 1,
      'user_limit'        => 1,
      'daily_limit'       => 1,
      'recommend_word'    => '天天有惊喜',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/partner/delivery-plan/delivery-plans/{plan_id}']->patchAsync([
  'plan_id' => '12000',
  'json' => [
    'modify_content' => [
      'plan_name'         => '冬季饮料投放',
      'delivery_end_time' => '2025-01-01T00:00:00+08:00',
      'total_count'       => 1,
      'user_limit'        => 1,
      'daily_limit'       => 1,
      'recommend_word'    => '天天有惊喜',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->partner->deliveryPlan->deliveryPlans->_plan_id_->patch([
  'plan_id' => '12000',
  'json' => [
    'modify_content' => [
      'plan_name'         => '冬季饮料投放',
      'delivery_end_time' => '2025-01-01T00:00:00+08:00',
      'total_count'       => 1,
      'user_limit'        => 1,
      'daily_limit'       => 1,
      'recommend_word'    => '天天有惊喜',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/partner/delivery-plan/delivery-plans/{plan_id}')->patch([
  'plan_id' => '12000',
  'json' => [
    'modify_content' => [
      'plan_name'         => '冬季饮料投放',
      'delivery_end_time' => '2025-01-01T00:00:00+08:00',
      'total_count'       => 1,
      'user_limit'        => 1,
      'daily_limit'       => 1,
      'recommend_word'    => '天天有惊喜',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/partner/delivery-plan/delivery-plans/{plan_id}']->patch([
  'plan_id' => '12000',
  'json' => [
    'modify_content' => [
      'plan_name'         => '冬季饮料投放',
      'delivery_end_time' => '2025-01-01T00:00:00+08:00',
      'total_count'       => 1,
      'user_limit'        => 1,
      'daily_limit'       => 1,
      'recommend_word'    => '天天有惊喜',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| plan {data-required} | object {data-tooltip="对应PHP的array"} | 投放计划详情
| plan_id {data-required data-indent=1} | string | 投放计划ID
| plan_name {data-required data-indent=1} | string | 投放计划名称
| plan_state {data-required data-indent=1} | string | 投放计划状态<br/>`PLAN_CREATING` \| `PLAN_CREATED` \| `PLAN_TERMINATING` \| `PLAN_TERMINATED` \| `PLAN_EXPIRED` \| `PLAN_DELIVERING` \| `PLAN_PAUSED` 枚举值之一
| delivery_start_time {data-indent=1} | string | 开始可用时间
| delivery_end_time {data-indent=1} | string | 结束可用时间
| stock_id {data-required data-indent=1} | string | 批次ID
| product_coupon_id {data-required data-indent=1} | string | 商品券ID
| recommend_word {data-indent=1} | string | 营销标签
| brand_id {data-required data-indent=1} | string | 品牌ID
| total_count {data-indent=1} | integer | 总库存
| user_limit {data-indent=1} | integer | 单用户限领
| daily_limit {data-indent=1} | integer | 单日限领

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016184594)
