---
title: 保险商户查询保险自动续费预约
description: 商户调用「预约保险自动续费」接口，因系统原因未能明确预约结果时，可使用本接口查询预结果。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| contract_id {data-required} | string | 委托代扣协议ID
| policy_period_id {data-required} | number | 保单的扣费周期编号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->papay->insurancePay->policyPeriods->contractId->_contract_id_->policyPeriodId->_policy_period_id_->getAsync([
  'contract_id' => '',
  'policy_period_id' => '1',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/papay/insurance-pay/policy-periods/contract-id/{contract_id}/policy-period-id/{policy_period_id}')->getAsync([
  'contract_id' => '',
  'policy_period_id' => '1',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/papay/insurance-pay/policy-periods/contract-id/{contract_id}/policy-period-id/{policy_period_id}']->getAsync([
  'contract_id' => '',
  'policy_period_id' => '1',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->papay->insurancePay->policyPeriods->contractId->_contract_id_->policyPeriodId->_policy_period_id_->get([
  'contract_id' => '',
  'policy_period_id' => '1',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/papay/insurance-pay/policy-periods/contract-id/{contract_id}/policy-period-id/{policy_period_id}')->get([
  'contract_id' => '',
  'policy_period_id' => '1',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/papay/insurance-pay/policy-periods/contract-id/{contract_id}/policy-period-id/{policy_period_id}']->get([
  'contract_id' => '',
  'policy_period_id' => '1',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| policy_period_id {data-required} | number | 保单的扣费周期编号
| policy_period_state {data-required} | string | 当前扣费周期的状态
| deduct_start_date | string | 可扣费开始日期
| deduct_end_date | string | 可扣费结束日期
| scheduled_amount | object {data-tooltip="对应PHP的array"} | 已预约的扣费金额信息
| total {data-required data-indent=1} | number | 金额
| currency {data-indent=1} | string | 货币类型
| deduct_amount | object {data-tooltip="对应PHP的array"} | 实际扣费金额
| total {data-required data-indent=1} | number | 金额
| currency {data-indent=1} | string | 货币类型
| deduct_date | string | 实际扣费的日期

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/schedule/query-policy-period.html)
