---
title: 停止支付分计划
description: 商户通过此接口停止正在生效中的支付分计划，商户只能停止自己创建的支付分计划。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| merchant_plan_no | string | 商户支付分计划对应的计划号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->plan->payscorePlans->merchantPlanNo->_merchant_plan_no_->stop->postAsync([
  'merchant_plan_no' => '1234323JKHDFE1243252',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/plan/payscore-plans/merchant-plan-no/{merchant_plan_no}/stop')->postAsync([
  'merchant_plan_no' => '1234323JKHDFE1243252',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/plan/payscore-plans/merchant-plan-no/{merchant_plan_no}/stop']->postAsync([
  'merchant_plan_no' => '1234323JKHDFE1243252',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->plan->payscorePlans->merchantPlanNo->_merchant_plan_no_->stop->post([
  'merchant_plan_no' => '1234323JKHDFE1243252',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/plan/payscore-plans/merchant-plan-no/{merchant_plan_no}/stop')->post([
  'merchant_plan_no' => '1234323JKHDFE1243252',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/plan/payscore-plans/merchant-plan-no/{merchant_plan_no}/stop']->post([
  'merchant_plan_no' => '1234323JKHDFE1243252',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| plan_id | string | 支付分计划ID
| service_id | string | 计划所属服务
| mchid | string | 商户号
| appid | string | AppID
| merchant_plan_no | string | 商户侧计划号
| plan_name | string | 支付分计划名称
| plan_duration | number | 支付分计划有效期(单位天)
| plan_state | string | 支付分计划状态
| total_original_price | number | 支付分计划原总金额(单位分)
| deduction_quantity | number | 支付分计划扣费次数
| total_actual_price | number | 支付分计划实际扣费总金额(单位分)
| plan_detail_list | object[] | 支付分计划明细列表
| plan_detail_no {data-indent=1} | number | 计划明细序号
| plan_detail_name {data-indent=1} | string | 计划明细名称
| original_price {data-indent=1} | number | 计划明细原支付金额(单位分)
| plan_discount_description {data-indent=1} | string | 计划明细优惠说明
| actual_price {data-indent=1} | number | 计划明细实际支付金额(单位分)
| stop_mchid | string | 终止方商户号
| stop_time | string | 终止时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/payscore-plan/pay-score-plan/stop-pay-score-plan.html)
