---
title: 创建用户的签约计划
description: 商户通过此接口基于商户已创建且正常进行中的支付分计划，创建用户的签约计划以供用户签约。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| service_id {data-required data-indent=1} | string | 支付分服务ID
| plan_id {data-required data-indent=1} | string | 支付分计划ID
| appid {data-required data-indent=1} | string | 服务商的AppID
| sub_mchid {data-required data-indent=1} | string | 子商户号
| sub_appid {data-indent=1} | string | 子商户的AppID
| openid {data-indent=1} | string | 待签约用户在服务商应用下的OpenID
| sub_openid {data-indent=1} | string | 待签约用户在子商户应用下的OpenID
| merchant_sign_plan_no {data-required data-indent=1} | string | 商户签约计划单号
| notify_url {data-required data-indent=1} | string | 签约成功事件通知回调地址
| sign_plan_detail {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 签约计划对应的计划详情列表的商户侧单号信息
| plan_detail_no {data-required data-indent=2} | number | 计划明细序号
| merchant_plan_detail_no {data-required data-indent=2} | string | 商户侧计划明细使用订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->signPlan->partner->userSignPlans->postAsync([
  'json' => [
    'service_id'            => '2002000000000558128851361561536',
    'plan_id'               => '01000033210000324638000000376258',
    'appid'                 => 'wxd678efh567hg6787',
    'sub_mchid'             => '1900000109',
    'sub_appid'             => 'wxd678efh567hg6999',
    'openid'                => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid'            => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'merchant_sign_plan_no' => '1234323JKHDFE1243252',
    'notify_url'            => 'https://api.test.com',
    'sign_plan_detail'      => [[
      'plan_detail_no'          => 1,
      'merchant_plan_detail_no' => '1234323JKHDFE1243252',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/sign-plan/partner/user-sign-plans')->postAsync([
  'json' => [
    'service_id'            => '2002000000000558128851361561536',
    'plan_id'               => '01000033210000324638000000376258',
    'appid'                 => 'wxd678efh567hg6787',
    'sub_mchid'             => '1900000109',
    'sub_appid'             => 'wxd678efh567hg6999',
    'openid'                => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid'            => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'merchant_sign_plan_no' => '1234323JKHDFE1243252',
    'notify_url'            => 'https://api.test.com',
    'sign_plan_detail'      => [[
      'plan_detail_no'          => 1,
      'merchant_plan_detail_no' => '1234323JKHDFE1243252',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/sign-plan/partner/user-sign-plans']->postAsync([
  'json' => [
    'service_id'            => '2002000000000558128851361561536',
    'plan_id'               => '01000033210000324638000000376258',
    'appid'                 => 'wxd678efh567hg6787',
    'sub_mchid'             => '1900000109',
    'sub_appid'             => 'wxd678efh567hg6999',
    'openid'                => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid'            => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'merchant_sign_plan_no' => '1234323JKHDFE1243252',
    'notify_url'            => 'https://api.test.com',
    'sign_plan_detail'      => [[
      'plan_detail_no'          => 1,
      'merchant_plan_detail_no' => '1234323JKHDFE1243252',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->signPlan->partner->userSignPlans->post([
  'json' => [
    'service_id'            => '2002000000000558128851361561536',
    'plan_id'               => '01000033210000324638000000376258',
    'appid'                 => 'wxd678efh567hg6787',
    'sub_mchid'             => '1900000109',
    'sub_appid'             => 'wxd678efh567hg6999',
    'openid'                => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid'            => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'merchant_sign_plan_no' => '1234323JKHDFE1243252',
    'notify_url'            => 'https://api.test.com',
    'sign_plan_detail'      => [[
      'plan_detail_no'          => 1,
      'merchant_plan_detail_no' => '1234323JKHDFE1243252',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/sign-plan/partner/user-sign-plans')->post([
  'json' => [
    'service_id'            => '2002000000000558128851361561536',
    'plan_id'               => '01000033210000324638000000376258',
    'appid'                 => 'wxd678efh567hg6787',
    'sub_mchid'             => '1900000109',
    'sub_appid'             => 'wxd678efh567hg6999',
    'openid'                => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid'            => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'merchant_sign_plan_no' => '1234323JKHDFE1243252',
    'notify_url'            => 'https://api.test.com',
    'sign_plan_detail'      => [[
      'plan_detail_no'          => 1,
      'merchant_plan_detail_no' => '1234323JKHDFE1243252',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/sign-plan/partner/user-sign-plans']->post([
  'json' => [
    'service_id'            => '2002000000000558128851361561536',
    'plan_id'               => '01000033210000324638000000376258',
    'appid'                 => 'wxd678efh567hg6787',
    'sub_mchid'             => '1900000109',
    'sub_appid'             => 'wxd678efh567hg6999',
    'openid'                => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid'            => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'merchant_sign_plan_no' => '1234323JKHDFE1243252',
    'notify_url'            => 'https://api.test.com',
    'sign_plan_detail'      => [[
      'plan_detail_no'          => 1,
      'merchant_plan_detail_no' => '1234323JKHDFE1243252',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sign_plan {data-required} | object {data-tooltip="对应PHP的array"} | 用户的签约计划
| sign_plan_id {data-required data-indent=1} | string | 计划签约ID
| openid {data-indent=1} | string | 签约计划用户服务商应用下的OpenID
| sub_openid {data-indent=1} | string | 签约计划用户子商户应用下的OpenID
| service_id {data-required data-indent=1} | string | 计划所属服务
| mchid {data-required data-indent=1} | string | 服务商商户号
| sub_mchid {data-required data-indent=1} | string | 子商户商户号
| appid {data-required data-indent=1} | string | 服务商AppID
| sub_appid {data-indent=1} | string | 子商户AppID
| merchant_sign_plan_no {data-required data-indent=1} | string | 商户侧签约计划号
| merchant_callback_url {data-required data-indent=1} | string | 商户回调地址
| plan_id {data-required data-indent=1} | string | 签约所属计划ID
| going_detail_no {data-required data-indent=1} | number | 目前用户进行到的计划详情序号
| sign_state {data-required data-indent=1} | string | 计划签约状态
| cancel_sign_time {data-indent=1} | string | 签约计划取消时间
| cancel_sign_type {data-indent=1} | string | 签约计划取消类型
| cancel_reason {data-indent=1} | string | 签约计划取消原因
| plan_name {data-required data-indent=1} | string | 签约计划的名称
| plan_over_time {data-required data-indent=1} | string | 签约计划的过期时间
| total_origin_price {data-required data-indent=1} | number | 签约计划原总金额(单位分)
| deduction_quantity {data-required data-indent=1} | number | 签约计划扣费次数
| total_actual_price {data-required data-indent=1} | number | 签约计划实际总金额（单位分）
| signed_detail_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 签约计划明细列表
| plan_detail_no {data-required data-indent=2} | number | 计划明细序号
| original_price {data-required data-indent=2} | number | 计划明细原支付金额（单位分）
| plan_discount_description {data-indent=2} | string | 计划明细优惠说明
| actual_price {data-required data-indent=2} | number | 计划明细实际支付金额（单位分）
| plan_detail_state {data-required data-indent=2} | string | 计划明细状态
| order_id {data-indent=2} | string | 计划明细对应的支付分服务单号
| merchant_plan_detail_no {data-required data-indent=2} | string | 商户侧计划明细使用订单号
| plan_detail_name {data-required data-indent=2} | string | 计划详情名称
| actual_pay_price {data-indent=2} | number | 计划明细对应订单实际支付金额（单位分）
| use_time {data-indent=2} | string | 详情使用时间
| complete_time {data-indent=2} | string | 详情完成时间
| cancel_time {data-indent=2} | string | 详情取消时间
| sign_time {data-indent=1} | string | 签约时间
| package {data-required} | string | 跳转微信侧确认签约小程序的数据

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-payscore-plan/partner-user-sign-plan/create-partner-user-sign-plan.html)
