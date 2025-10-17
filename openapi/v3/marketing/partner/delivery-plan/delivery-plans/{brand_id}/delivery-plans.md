---
title: 分页查询投放计划列表
description: 分页查询投放计划列表
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| brand_id {data-required} | string | 品牌ID
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| page_size {data-indent=1} | integer | 分页大小
| offset {data-indent=1} | integer | 分页起始位置
| plan_state {data-indent=1} | string | 投放计划线上状态<br/>`PLAN_CREATING` \| `PLAN_CREATED` \| `PLAN_TERMINATING` \| `PLAN_TERMINATED` \| `PLAN_EXPIRED` \| `PLAN_DELIVERING` \| `PLAN_PAUSED` 枚举值之一
| audit_state {data-indent=1} | string | 投放计划审核状态<br/>`AUDIT_INITIAL` \| `AUDIT_PROCESSING` \| `AUDIT_PASSED` \| `AUDIT_REJECTED` 枚举值之一
| plan_id {data-indent=1} | string | 投放计划ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->partner->deliveryPlan->deliveryPlans->_brand_id_->deliveryPlans->getAsync([
  'brand_id' => '40016',
  'query' => [
    'page_size'   => 5,
    'offset'      => 10,
    'plan_state'  => 'PLAN_CREATED',
    'audit_state' => '12000',
    'plan_id'     => '12000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/partner/delivery-plan/delivery-plans/{brand_id}/delivery-plans')->getAsync([
  'brand_id' => '40016',
  'query' => [
    'page_size'   => 5,
    'offset'      => 10,
    'plan_state'  => 'PLAN_CREATED',
    'audit_state' => '12000',
    'plan_id'     => '12000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/partner/delivery-plan/delivery-plans/{brand_id}/delivery-plans']->getAsync([
  'brand_id' => '40016',
  'query' => [
    'page_size'   => 5,
    'offset'      => 10,
    'plan_state'  => 'PLAN_CREATED',
    'audit_state' => '12000',
    'plan_id'     => '12000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->partner->deliveryPlan->deliveryPlans->_brand_id_->deliveryPlans->get([
  'brand_id' => '40016',
  'query' => [
    'page_size'   => 5,
    'offset'      => 10,
    'plan_state'  => 'PLAN_CREATED',
    'audit_state' => '12000',
    'plan_id'     => '12000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/partner/delivery-plan/delivery-plans/{brand_id}/delivery-plans')->get([
  'brand_id' => '40016',
  'query' => [
    'page_size'   => 5,
    'offset'      => 10,
    'plan_state'  => 'PLAN_CREATED',
    'audit_state' => '12000',
    'plan_id'     => '12000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/partner/delivery-plan/delivery-plans/{brand_id}/delivery-plans']->get([
  'brand_id' => '40016',
  'query' => [
    'page_size'   => 5,
    'offset'      => 10,
    'plan_state'  => 'PLAN_CREATED',
    'audit_state' => '12000',
    'plan_id'     => '12000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_count | integer | 资源总条数
| plan_list | object[] {data-tooltip="对应PHP的array"} | 投放计划列表
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016184563)
