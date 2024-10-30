---
title: 保险商户受理续期自动续费协议
description: 商户可通过本接口续期保险自动续费协议。前置条件：用户签约成功，当协议到期后且预签约中参数是否自动续保（can_auto_insure）或是否自动重新投保（can_auto_reinsure）为true。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| plan_id | number | 委托代扣模板ID
| contract_id | string | 委托代扣协议ID
| json | object | 声明请求的`JSON`数据结构
| appid {data-indent=1} | string | 应用ID
| policy_periods {data-indent=1} | object[] | 续期的扣费周期列表
| policy_period_id {data-indent=2} | number | 保险扣费周期编号
| estimated_deduct_date {data-indent=2} | string | 预计扣费的日期
| estimated_deduct_amount {data-indent=2} | object | 预计扣费金额
| total {data-indent=3} | number | 金额
| currency {data-indent=3} | string | 货币类型

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->papay->insuranceSign->contracts->planId->_plan_id_->contractId->_contract_id_->renew->postAsync([
  'plan_id' => '',
  'contract_id' => '',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'policy_periods' => [[
      'policy_period_id' => 1,
      'estimated_deduct_date' => '2019-11-22',
      'estimated_deduct_amount' => [
        'total' => 1,
        'currency' => 'CNY',
      ],
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/papay/insurance-sign/contracts/plan-id/{plan_id}/contract-id/{contract_id}/renew')->postAsync([
  'plan_id' => '',
  'contract_id' => '',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'policy_periods' => [[
      'policy_period_id' => 1,
      'estimated_deduct_date' => '2019-11-22',
      'estimated_deduct_amount' => [
        'total' => 1,
        'currency' => 'CNY',
      ],
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/papay/insurance-sign/contracts/plan-id/{plan_id}/contract-id/{contract_id}/renew']->postAsync([
  'plan_id' => '',
  'contract_id' => '',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'policy_periods' => [[
      'policy_period_id' => 1,
      'estimated_deduct_date' => '2019-11-22',
      'estimated_deduct_amount' => [
        'total' => 1,
        'currency' => 'CNY',
      ],
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->papay->insuranceSign->contracts->planId->_plan_id_->contractId->_contract_id_->renew->post([
  'plan_id' => '',
  'contract_id' => '',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'policy_periods' => [[
      'policy_period_id' => 1,
      'estimated_deduct_date' => '2019-11-22',
      'estimated_deduct_amount' => [
        'total' => 1,
        'currency' => 'CNY',
      ],
    ],],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/papay/insurance-sign/contracts/plan-id/{plan_id}/contract-id/{contract_id}/renew')->post([
  'plan_id' => '',
  'contract_id' => '',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'policy_periods' => [[
      'policy_period_id' => 1,
      'estimated_deduct_date' => '2019-11-22',
      'estimated_deduct_amount' => [
        'total' => 1,
        'currency' => 'CNY',
      ],
    ],],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/papay/insurance-sign/contracts/plan-id/{plan_id}/contract-id/{contract_id}/renew']->post([
  'plan_id' => '',
  'contract_id' => '',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'policy_periods' => [[
      'policy_period_id' => 1,
      'estimated_deduct_date' => '2019-11-22',
      'estimated_deduct_amount' => [
        'total' => 1,
        'currency' => 'CNY',
      ],
    ],],
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/insurance/apply-renew-contract.html)
