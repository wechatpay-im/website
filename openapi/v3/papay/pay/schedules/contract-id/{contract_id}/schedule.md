---
title: 预约扣费
description: 商户在进行委托代扣费前，需要提前在微信支付系统中预约扣费，预约成功后方可在约定时间内扣费。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| contract_id {data-required} | string | 委托代扣协议ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 应用ID
| schedule_amount {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 预约的金额信息
| total {data-required data-indent=2} | number | 金额
| currency {data-indent=2} | string | 货币类型

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->papay->pay->schedules->contractId->_contract_id_->schedule->postAsync([
  'contract_id' => '123124412412423431',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'schedule_amount' => [
      'total' => 1,
      'currency' => 'CNY',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/papay/pay/schedules/contract-id/{contract_id}/schedule')->postAsync([
  'contract_id' => '123124412412423431',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'schedule_amount' => [
      'total' => 1,
      'currency' => 'CNY',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/papay/pay/schedules/contract-id/{contract_id}/schedule']->postAsync([
  'contract_id' => '123124412412423431',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'schedule_amount' => [
      'total' => 1,
      'currency' => 'CNY',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->papay->pay->schedules->contractId->_contract_id_->schedule->post([
  'contract_id' => '123124412412423431',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'schedule_amount' => [
      'total' => 1,
      'currency' => 'CNY',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/papay/pay/schedules/contract-id/{contract_id}/schedule')->post([
  'contract_id' => '123124412412423431',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'schedule_amount' => [
      'total' => 1,
      'currency' => 'CNY',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/papay/pay/schedules/contract-id/{contract_id}/schedule']->post([
  'contract_id' => '123124412412423431',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'schedule_amount' => [
      'total' => 1,
      'currency' => 'CNY',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| schedule_state {data-required}| string | 扣费预约的状态
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

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/entrusted-payment/normal/normal-schedule-deduction.html)
