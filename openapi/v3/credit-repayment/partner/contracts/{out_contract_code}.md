---
title: 查询自动还款协议
description: 使用服务商签约协议号查询自动还款协议详情
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_contract_code {data-required} | string | 服务商签约协议号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->creditRepayment->partner->contracts->_out_contract_code_->getAsync([
  'out_contract_code' => '100005698',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/credit-repayment/partner/contracts/{out_contract_code}')->getAsync([
  'out_contract_code' => '100005698',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/credit-repayment/partner/contracts/{out_contract_code}']->getAsync([
  'out_contract_code' => '100005698',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->creditRepayment->partner->contracts->_out_contract_code_->get([
  'out_contract_code' => '100005698',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/credit-repayment/partner/contracts/{out_contract_code}')->get([
  'out_contract_code' => '100005698',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/credit-repayment/partner/contracts/{out_contract_code}']->get([
  'out_contract_code' => '100005698',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| contract_id {data-required} | string | 协议ID
| plan_id {data-required} | string | 模板ID
| out_contract_code {data-required} | string | 服务商签约协议号
| display_name {data-required} | string | 用户展示名称
| contract_state {data-required} | string | 协议状态<br/>`CONTRACT_STATE_INVALID` \| `CONTRACT_STATE_EFFECTIVE` \| `CONTRACT_STATE_TERMINATED` 枚举值之一
| contract_signed_time | string | 协议签署时间
| contract_terminated_time | string | 协议解约时间
| contract_termination_mode | string | 协议解约方式<br/>`TERMINATION_MODE_INVALID` \| `TERMINATION_MODE_BY_USER` \| `TERMINATION_MODE_BY_MERCHANT` \| `TERMINATION_MODE_BY_CUSTOMER_SERVICE` 枚举值之一
| contract_termination_remark | string | 协议解约备注
| repayment_day | integer | 还款日

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016125810)
