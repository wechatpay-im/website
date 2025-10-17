---
title: 终止投放计划
description: 终止投放计划
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| plan_id {data-required} | string | 投放计划ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->partner->deliveryPlan->deliveryPlans->_plan_id_->terminate->postAsync([
  'plan_id' => '12000',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/partner/delivery-plan/delivery-plans/{plan_id}/terminate')->postAsync([
  'plan_id' => '12000',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/partner/delivery-plan/delivery-plans/{plan_id}/terminate']->postAsync([
  'plan_id' => '12000',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->partner->deliveryPlan->deliveryPlans->_plan_id_->terminate->post([
  'plan_id' => '12000',
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/partner/delivery-plan/delivery-plans/{plan_id}/terminate')->post([
  'plan_id' => '12000',
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/marketing/partner/delivery-plan/delivery-plans/{plan_id}/terminate']->post([
  'plan_id' => '12000',
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016184572)
