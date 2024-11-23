---
title: 查询用户的签约计划
description: 用于商户查询用户的签约计划，必须是该签约计划的创建方商户才能查询。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| merchant_sign_plan_no {data-required} | string | 商户签约计划号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->signPlan->userSignPlans->merchantSignPlanNo->_merchant_sign_plan_no_->getAsync([
  'merchant_sign_plan_no' => '1234323JKHDFE1243252',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/sign-plan/user-sign-plans/merchant-sign-plan-no/{merchant_sign_plan_no}')->getAsync([
  'merchant_sign_plan_no' => '1234323JKHDFE1243252',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/sign-plan/user-sign-plans/merchant-sign-plan-no/{merchant_sign_plan_no}']->getAsync([
  'merchant_sign_plan_no' => '1234323JKHDFE1243252',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->signPlan->userSignPlans->merchantSignPlanNo->_merchant_sign_plan_no_->get([
  'merchant_sign_plan_no' => '1234323JKHDFE1243252',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/sign-plan/user-sign-plans/merchant-sign-plan-no/{merchant_sign_plan_no}')->get([
  'merchant_sign_plan_no' => '1234323JKHDFE1243252',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/sign-plan/user-sign-plans/merchant-sign-plan-no/{merchant_sign_plan_no}']->get([
  'merchant_sign_plan_no' => '1234323JKHDFE1243252',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sign_plan_id {data-required}| string | 计划签约ID
| openid | string | 签约计划用户应用下的OpenID
| service_id {data-required}| string | 计划所属服务
| mchid {data-required}| string | 商户号
| appid {data-required}| string | AppID
| merchant_sign_plan_no {data-required}| string | 商户侧签约计划号
| merchant_callback_url {data-required}| string | 商户回调地址
| plan_id {data-required}| string | 签约所属计划ID
| going_detail_no {data-required}| number | 目前用户进行到的计划详情序号
| sign_state {data-required}| string | 计划签约状态
| cancel_sign_time | string | 签约计划取消时间
| cancel_sign_type | string | 签约计划取消类型
| cancel_reason | string | 签约计划取消原因
| plan_name {data-required}| string | 签约计划的名称
| plan_over_time {data-required}| string | 签约计划的过期时间
| total_origin_price {data-required}| number | 签约计划原总金额(单位分)
| deduction_quantity {data-required}| number | 签约计划扣费次数
| total_actual_price {data-required}| number | 签约计划实际总金额（单位分）
| signed_detail_list | object[] {data-tooltip="对应PHP的array"} | 签约计划明细列表
| plan_detail_no {data-required data-indent=1} | number | 计划明细序号
| original_price {data-required data-indent=1} | number | 计划明细原支付金额（单位分）
| plan_discount_description {data-indent=1} | string | 计划明细优惠说明
| actual_price {data-required data-indent=1} | number | 计划明细实际支付金额（单位分）
| plan_detail_state {data-required data-indent=1} | string | 计划明细状态
| order_id {data-indent=1} | string | 计划明细对应的支付分服务单号
| merchant_plan_detail_no {data-required data-indent=1} | string | 商户侧计划明细使用订单号
| plan_detail_name {data-required data-indent=1} | string | 计划详情名称
| actual_pay_price {data-indent=1} | number | 计划明细对应订单实际支付金额（单位分）
| use_time {data-indent=1} | string | 详情使用时间
| complete_time {data-indent=1} | string | 详情完成时间
| cancel_time {data-indent=1} | string | 详情取消时间
| sign_time | string | 签约时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/payscore-plan/user-sign-plan/query-user-sign-plan.html)
