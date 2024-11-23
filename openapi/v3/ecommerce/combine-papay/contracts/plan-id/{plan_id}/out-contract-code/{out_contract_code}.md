---
title: 通过商户协议号查询协议
description: 电商服务商可以通过该接口发起签约协议的查询。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| plan_id {data-required} | integer | 委托代扣协议模板Id
| out_contract_code {data-required} | string | 商户签约协议号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->combinePapay->contracts->planId->_plan_id_->outContractCode->_out_contract_code_->getAsync([
  'plan_id' => '12535',
  'out_contract_code' => 'wxwtdk20200910100000',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/combine-papay/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}')->getAsync([
  'plan_id' => '12535',
  'out_contract_code' => 'wxwtdk20200910100000',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/combine-papay/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}']->getAsync([
  'plan_id' => '12535',
  'out_contract_code' => 'wxwtdk20200910100000',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->combinePapay->contracts->planId->_plan_id_->outContractCode->_out_contract_code_->get([
  'plan_id' => '12535',
  'out_contract_code' => 'wxwtdk20200910100000',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/combine-papay/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}')->get([
  'plan_id' => '12535',
  'out_contract_code' => 'wxwtdk20200910100000',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/combine-papay/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}']->get([
  'plan_id' => '12535',
  'out_contract_code' => 'wxwtdk20200910100000',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mchid {data-required}| string | 商户号
| contract_id {data-required}| string | 委托代扣协议Id
| appid {data-required}| string | 商户APPID
| plan_id {data-required}| integer | 委托代扣协议模板Id
| out_contract_code {data-required}| string | 商户签约协议号
| contract_display_account {data-required}| string | 用户账户展示名称
| contract_state {data-required}| string | 委托代扣协议状态
| contract_signed_time {data-required}| string | 协议签署时间
| contract_expired_time {data-required}| string | 协议到期时间
| contract_terminate_info | object {data-tooltip="对应PHP的array"} | 协议解约信息
| contract_termination_mode {data-required data-indent=1} | string | 协议解约方式
| contract_terminated_time {data-required data-indent=1} | string | 协议解约时间
| contract_termination_remark {data-required data-indent=1} | string | 解约备注
| openid {data-required}| string | 用户openid

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter5_5_2.shtml)
