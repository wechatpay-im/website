---
title: 通过商户协议号查询委托代扣签约协议
description: 直连商户可通过本接口查询已经签订的委托代扣签约协议。前置条件：用户签约成功，商户已经成功获取过委托代扣签约协议。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_contract_code {data-required} | string | 商户签约协议号
| plan_id {data-required} | number | 委托代扣模板ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->papay->sign->contracts->harmonyPlanId->_plan_id_->outContractCode->_out_contract_code_->getAsync([
  'out_contract_code' => 'wxwtdk20200910100000',
  'plan_id' => '12535',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/papay/sign/contracts/harmony-plan-id/{plan_id}/out-contract-code/{out_contract_code}')->getAsync([
  'out_contract_code' => 'wxwtdk20200910100000',
  'plan_id' => '12535',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/papay/sign/contracts/harmony-plan-id/{plan_id}/out-contract-code/{out_contract_code}']->getAsync([
  'out_contract_code' => 'wxwtdk20200910100000',
  'plan_id' => '12535',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->papay->sign->contracts->harmonyPlanId->_plan_id_->outContractCode->_out_contract_code_->get([
  'out_contract_code' => 'wxwtdk20200910100000',
  'plan_id' => '12535',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/papay/sign/contracts/harmony-plan-id/{plan_id}/out-contract-code/{out_contract_code}')->get([
  'out_contract_code' => 'wxwtdk20200910100000',
  'plan_id' => '12535',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/papay/sign/contracts/harmony-plan-id/{plan_id}/out-contract-code/{out_contract_code}']->get([
  'out_contract_code' => 'wxwtdk20200910100000',
  'plan_id' => '12535',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mchid {data-required} | string | 商户号
| contract_id {data-required} | string | 委托代扣协议ID
| appid {data-required} | string | 商户AppID
| plan_id {data-required} | number | 委托代扣模板ID
| out_contract_code {data-required} | string | 商户签约协议号
| contract_display_account {data-required} | string | 用户账户展示名称
| contract_state {data-required} | string | 委托代扣协议状态<br/>`SIGNED` \| `TERMINATED` \| `SIGN_FAILED` \| `TO_BE_RENEWED` 枚举值之一
| contract_signed_time | string | 协议签署时间
| contract_expired_time | string | 协议到期时间
| openid {data-required} | string | 用户OpenID
| contract_terminate_info | object {data-tooltip="对应PHP的array"} | 协议解约信息
| contract_termination_mode {data-required data-indent=1} | string | 协议解约方式<br/>`USER_TERMINATE` \| `MCH_API_TERMINATE` \| `WEPAY_WEB_TERMINATE` \| `CUSTOMER_SERVICE_TERMINATE` \| `SYSTEM_TERMINATE` 枚举值之一
| contract_terminated_time {data-required data-indent=1} | string | 协议解约时间
| contract_termination_remark {data-indent=1} | string | 解约备注
| out_user_code | string | 商户侧用户标识
| mask_wxid | string | 鸿蒙代扣场景的用户微信号掩码

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013844122)
