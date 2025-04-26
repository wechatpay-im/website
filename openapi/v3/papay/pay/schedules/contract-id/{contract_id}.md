---
title: 查询扣费预约
description: 商户调用「预约扣费」接口，因系统原因未能明确预约结果时，可使用本接口查询预结果。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| contract_id {data-required} | string | 委托代扣协议ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->papay->pay->schedules->contractId->_contract_id_->getAsync([
  'contract_id' => '123124412412423431',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/papay/pay/schedules/contract-id/{contract_id}')->getAsync([
  'contract_id' => '123124412412423431',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/papay/pay/schedules/contract-id/{contract_id}']->getAsync([
  'contract_id' => '123124412412423431',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->papay->pay->schedules->contractId->_contract_id_->get([
  'contract_id' => '123124412412423431',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/papay/pay/schedules/contract-id/{contract_id}')->get([
  'contract_id' => '123124412412423431',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/papay/pay/schedules/contract-id/{contract_id}']->get([
  'contract_id' => '123124412412423431',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| schedule_state {data-required} | string | 扣费预约的状态
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012466997)
