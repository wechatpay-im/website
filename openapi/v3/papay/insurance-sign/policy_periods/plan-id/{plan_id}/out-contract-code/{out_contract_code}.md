---
title: 保险商户查询保险扣费周期列表
description: 商户可通过本接口查询已经签订的保险自动续费协议对应的扣费周期列表。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_contract_code {data-required} | string | 商户签约协议号
| plan_id {data-required} | number | 委托代扣模板ID
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| limit {data-indent=1} | number | 分页大小
| offset {data-indent=1} | number | 分页开始位置

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->papay->insuranceSign->policy_periods->planId->_plan_id_->outContractCode->_out_contract_code_->getAsync([
  'out_contract_code' => 'wxwtdk20200910100000',
  'plan_id' => '12535',
  'query' => [
    'limit'  => 20,
    'offset' => 50,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/papay/insurance-sign/policy_periods/plan-id/{plan_id}/out-contract-code/{out_contract_code}')->getAsync([
  'out_contract_code' => 'wxwtdk20200910100000',
  'plan_id' => '12535',
  'query' => [
    'limit'  => 20,
    'offset' => 50,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/papay/insurance-sign/policy_periods/plan-id/{plan_id}/out-contract-code/{out_contract_code}']->getAsync([
  'out_contract_code' => 'wxwtdk20200910100000',
  'plan_id' => '12535',
  'query' => [
    'limit'  => 20,
    'offset' => 50,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->papay->insuranceSign->policy_periods->planId->_plan_id_->outContractCode->_out_contract_code_->get([
  'out_contract_code' => 'wxwtdk20200910100000',
  'plan_id' => '12535',
  'query' => [
    'limit'  => 20,
    'offset' => 50,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/papay/insurance-sign/policy_periods/plan-id/{plan_id}/out-contract-code/{out_contract_code}')->get([
  'out_contract_code' => 'wxwtdk20200910100000',
  'plan_id' => '12535',
  'query' => [
    'limit'  => 20,
    'offset' => 50,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/papay/insurance-sign/policy_periods/plan-id/{plan_id}/out-contract-code/{out_contract_code}']->get([
  'out_contract_code' => 'wxwtdk20200910100000',
  'plan_id' => '12535',
  'query' => [
    'limit'  => 20,
    'offset' => 50,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| data | object[] {data-tooltip="对应PHP的array"} | 扣费周期列表，包括每个扣费周期项详情。
| policy_period_id {data-required data-indent=1} | number | 保单的扣费周期编号
| estimated_deduct_date {data-required data-indent=1} | string | 扣费周期预计的扣费的日期
| estimated_deduct_amount {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 扣费周期预计的扣费金额
| total {data-required data-indent=2} | number | 金额
| currency {data-indent=2} | string | 货币类型
| policy_period_state {data-required data-indent=1} | string | 扣费周期预约状态
| scheduled_amount {data-indent=1} | object {data-tooltip="对应PHP的array"} | 已预约的扣费金额信息
| total {data-required data-indent=2} | number | 金额
| currency {data-indent=2} | string | 货币类型
| deduct_amount {data-indent=1} | object {data-tooltip="对应PHP的array"} | 实际扣费金额
| total {data-required data-indent=2} | number | 金额
| currency {data-indent=2} | string | 货币类型
| deduct_date {data-indent=1} | string | 实际扣费的日期
| limit {data-required} | number | 分页大小
| offset {data-required} | number | 分页开始位置
| total_count | number | 扣费周期总条数

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/insurance/query-policy-periods-by-code.html)
