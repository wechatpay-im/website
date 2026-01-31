---
title: 解除自动还款协议
description: 服务商可通过本接口使用服务商签约协议号来解除已经签订的自动还款协议
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_contract_code {data-required data-indent=1} | string | 服务商签约协议号
| contract_termination_remark {data-required data-indent=1} | string | 协议解约备注

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->creditRepayment->partner->contracts->terminate->postAsync([
  'json' => [
    'out_contract_code'           => '100001256',
    'contract_termination_remark' => 'example_contract_termination_remark',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/credit-repayment/partner/contracts/terminate')->postAsync([
  'json' => [
    'out_contract_code'           => '100001256',
    'contract_termination_remark' => 'example_contract_termination_remark',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/credit-repayment/partner/contracts/terminate']->postAsync([
  'json' => [
    'out_contract_code'           => '100001256',
    'contract_termination_remark' => 'example_contract_termination_remark',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->creditRepayment->partner->contracts->terminate->post([
  'json' => [
    'out_contract_code'           => '100001256',
    'contract_termination_remark' => 'example_contract_termination_remark',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/credit-repayment/partner/contracts/terminate')->post([
  'json' => [
    'out_contract_code'           => '100001256',
    'contract_termination_remark' => 'example_contract_termination_remark',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/credit-repayment/partner/contracts/terminate']->post([
  'json' => [
    'out_contract_code'           => '100001256',
    'contract_termination_remark' => 'example_contract_termination_remark',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| contract_info | object {data-tooltip="对应PHP的array"} | 协议信息
| contract_id {data-required data-indent=1} | string | 协议ID
| plan_id {data-required data-indent=1} | string | 模板ID
| out_contract_code {data-required data-indent=1} | string | 服务商签约协议号
| display_name {data-required data-indent=1} | string | 用户展示名称
| contract_state {data-required data-indent=1} | string | 协议状态<br/>`CONTRACT_STATE_INVALID` \| `CONTRACT_STATE_EFFECTIVE` \| `CONTRACT_STATE_TERMINATED` 枚举值之一
| contract_signed_time {data-indent=1} | string | 协议签署时间
| contract_terminated_time {data-indent=1} | string | 协议解约时间
| contract_terminated_mode {data-indent=1} | string | 协议解约方式<br/>`TERMINATION_MODE_INVALID` \| `TERMINATION_MODE_BY_USER` \| `TERMINATION_MODE_BY_MERCHANT` \| `TERMINATION_MODE_BY_CUSTOMER_SERVICE` 枚举值之一
| contract_termination_remark {data-indent=1} | string | 协议解约备注
| repayment_day {data-indent=1} | integer | 还款日
| openid {data-indent=1} | string | 用户服务商标识
| appid {data-indent=1} | string | 服务商AppID
| repayment_amount_limit {data-required data-indent=1} | integer | 还款金额上限

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016125830)
