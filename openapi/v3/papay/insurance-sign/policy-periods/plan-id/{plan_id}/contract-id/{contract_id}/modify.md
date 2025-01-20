---
title: 保险商户修改保险扣费周期列表
description: 商户可通过本接口修改已经签订的保险自动续费协议对应的扣费周期列表。注意：当前仅支持减小状态为“NO_SCHEDULED”和“SCHEDULED”的扣费周期的预计扣费金额，暂不支持增加预计扣费金额 或 修改扣费周内的其他信息（包括总期数、每一期的扣费周期编号、预计扣费日期等）。即除了状态为“NO_SCHEDULED”和“SCHEDULED”的扣费周期传入新的预计扣费金额以外（注意一次请求内不允许有多个新的扣费金额），其余传入的扣费周期信息均需和签约时传入的保持一致。请求本接口前，请先通过查询保险扣费周期列表API确认计划修改金额的协议下所有扣费周期的最新状态。若请求本接口未获得明确结果时，也可通过查询保险扣费周期列表API确认修改的最终结果。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| plan_id {data-required} | number | 委托代扣模板ID
| contract_id {data-required} | string | 委托代扣协议ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 应用ID
| policy_periods {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 续期的扣费周期列表
| policy_period_id {data-required data-indent=2} | number | 保险扣费周期编号
| estimated_deduct_date {data-required data-indent=2} | string | 预计扣费的日期
| estimated_deduct_amount {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 预计扣费金额
| total {data-required data-indent=3} | number | 金额
| currency {data-indent=3} | string | 货币类型
| allow_cancel_scheduled {data-indent=1} | boolean | 是否允许取消预约

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->papay->insuranceSign->policyPeriods->planId->_plan_id_->contractId->_contract_id_->modify->postAsync([
  'plan_id' => '12535',
  'contract_id' => '2015071056489715',
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'policy_periods'         => [[
      'policy_period_id'        => 1,
      'estimated_deduct_date'   => '2019-11-22',
      'estimated_deduct_amount' => [
        'total'    => 1,
        'currency' => 'CNY',
      ],
    ],],
    'allow_cancel_scheduled' => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/papay/insurance-sign/policy-periods/plan-id/{plan_id}/contract-id/{contract_id}/modify')->postAsync([
  'plan_id' => '12535',
  'contract_id' => '2015071056489715',
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'policy_periods'         => [[
      'policy_period_id'        => 1,
      'estimated_deduct_date'   => '2019-11-22',
      'estimated_deduct_amount' => [
        'total'    => 1,
        'currency' => 'CNY',
      ],
    ],],
    'allow_cancel_scheduled' => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/papay/insurance-sign/policy-periods/plan-id/{plan_id}/contract-id/{contract_id}/modify']->postAsync([
  'plan_id' => '12535',
  'contract_id' => '2015071056489715',
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'policy_periods'         => [[
      'policy_period_id'        => 1,
      'estimated_deduct_date'   => '2019-11-22',
      'estimated_deduct_amount' => [
        'total'    => 1,
        'currency' => 'CNY',
      ],
    ],],
    'allow_cancel_scheduled' => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->papay->insuranceSign->policyPeriods->planId->_plan_id_->contractId->_contract_id_->modify->post([
  'plan_id' => '12535',
  'contract_id' => '2015071056489715',
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'policy_periods'         => [[
      'policy_period_id'        => 1,
      'estimated_deduct_date'   => '2019-11-22',
      'estimated_deduct_amount' => [
        'total'    => 1,
        'currency' => 'CNY',
      ],
    ],],
    'allow_cancel_scheduled' => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/papay/insurance-sign/policy-periods/plan-id/{plan_id}/contract-id/{contract_id}/modify')->post([
  'plan_id' => '12535',
  'contract_id' => '2015071056489715',
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'policy_periods'         => [[
      'policy_period_id'        => 1,
      'estimated_deduct_date'   => '2019-11-22',
      'estimated_deduct_amount' => [
        'total'    => 1,
        'currency' => 'CNY',
      ],
    ],],
    'allow_cancel_scheduled' => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/papay/insurance-sign/policy-periods/plan-id/{plan_id}/contract-id/{contract_id}/modify']->post([
  'plan_id' => '12535',
  'contract_id' => '2015071056489715',
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'policy_periods'         => [[
      'policy_period_id'        => 1,
      'estimated_deduct_date'   => '2019-11-22',
      'estimated_deduct_amount' => [
        'total'    => 1,
        'currency' => 'CNY',
      ],
    ],],
    'allow_cancel_scheduled' => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| policy_periods | object[] {data-tooltip="对应PHP的array"} | 最新的扣费周期列表
| policy_period_id {data-required data-indent=1} | number | 保险扣费周期编号
| estimated_deduct_date {data-required data-indent=1} | string | 预计扣费的日期
| estimated_deduct_amount {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 预计扣费金额
| total {data-required data-indent=2} | number | 金额
| currency {data-indent=2} | string | 货币类型
| cancel_scheduled_policy_period_id | integer | 发生了取消预约的扣费计划项编号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012987596)
