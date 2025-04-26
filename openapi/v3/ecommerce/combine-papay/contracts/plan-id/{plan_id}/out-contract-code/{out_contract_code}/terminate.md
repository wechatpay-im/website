---
title: 商户协议号解约协议
description: 电商服务商可以通过该接口发起签约协议的解约。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| plan_id {data-required} | integer | 委托代扣协议模板Id
| out_contract_code {data-required} | string | 商户签约协议号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| contract_termination_remark {data-required data-indent=1} | string | 解约备注

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->combinePapay->contracts->planId->_plan_id_->outContractCode->_out_contract_code_->terminate->postAsync([
  'plan_id' => '12535',
  'out_contract_code' => 'wxwtdk20200910100000',
  'json' => [
    'contract_termination_remark' => '用户解约',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/combine-papay/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}/terminate')->postAsync([
  'plan_id' => '12535',
  'out_contract_code' => 'wxwtdk20200910100000',
  'json' => [
    'contract_termination_remark' => '用户解约',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/combine-papay/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}/terminate']->postAsync([
  'plan_id' => '12535',
  'out_contract_code' => 'wxwtdk20200910100000',
  'json' => [
    'contract_termination_remark' => '用户解约',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->combinePapay->contracts->planId->_plan_id_->outContractCode->_out_contract_code_->terminate->post([
  'plan_id' => '12535',
  'out_contract_code' => 'wxwtdk20200910100000',
  'json' => [
    'contract_termination_remark' => '用户解约',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/combine-papay/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}/terminate')->post([
  'plan_id' => '12535',
  'out_contract_code' => 'wxwtdk20200910100000',
  'json' => [
    'contract_termination_remark' => '用户解约',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/combine-papay/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}/terminate']->post([
  'plan_id' => '12535',
  'out_contract_code' => 'wxwtdk20200910100000',
  'json' => [
    'contract_termination_remark' => '用户解约',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mchid {data-required} | string | 商户号
| plan_id {data-required} | integer | 委托代扣协议模板Id
| out_contract_code {data-required} | string | 商户签约协议号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012884072)
