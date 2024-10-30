---
title: 保险商户查询保险自动续费协议
description: 商户可通过本接口查询已经签订的保险自动续费协议。 前置条件：用户签约成功，商户已经成功获取过保险保险自动续费协议。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_contract_code | string | 商户签约协议号
| plan_id | number | 委托代扣模板ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->papay->insuranceSign->contracts->planId->_plan_id_->outContractCode->_out_contract_code_->getAsync([
  'out_contract_code' => 'wxwtdk20200910100000',
  'plan_id' => '12535',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/papay/insurance-sign/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}')->getAsync([
  'out_contract_code' => 'wxwtdk20200910100000',
  'plan_id' => '12535',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/papay/insurance-sign/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}']->getAsync([
  'out_contract_code' => 'wxwtdk20200910100000',
  'plan_id' => '12535',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->papay->insuranceSign->contracts->planId->_plan_id_->outContractCode->_out_contract_code_->get([
  'out_contract_code' => 'wxwtdk20200910100000',
  'plan_id' => '12535',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/papay/insurance-sign/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}')->get([
  'out_contract_code' => 'wxwtdk20200910100000',
  'plan_id' => '12535',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/papay/insurance-sign/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}']->get([
  'out_contract_code' => 'wxwtdk20200910100000',
  'plan_id' => '12535',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mchid | string | 商户号
| contract_id | string | 委托代扣协议ID
| appid | string | 商户AppID
| plan_id | number | 委托代扣模板ID
| out_contract_code | string | 商户签约协议号
| insured_display_name | string | 被保人姓名
| contract_state | string | 委托代扣协议状态
| contract_signed_time | string | 协议签署时间
| contract_expired_time | string | 协议到期时间
| contract_terminate_info | object | 协议解约信息
| contract_termination_mode {data-indent=1} | string | 协议解约方式
| contract_terminated_time {data-indent=1} | string | 协议解约时间
| contract_termination_remark {data-indent=1} | string | 解约备注
| openid | string | 用户OpenID
| out_user_code | string | 商户侧用户标识

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/operate-contract/get-contract-by-code.html)
