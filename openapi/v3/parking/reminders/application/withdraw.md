---
title: 撤回停车场进件申请
description: 对商户提供撤回停车场进件申请接口
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| parking_lot_audit_no {data-required data-indent=1} | string | 停车场进件审核单号
| out_parking_lot_id {data-required data-indent=1} | string | 商户停车场ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->parking->reminders->application->withdraw->postAsync([
  'json' => [
    'parking_lot_audit_no' => 'PLA202604230001',
    'out_parking_lot_id'   => 'lot_sz_tencent_001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/parking/reminders/application/withdraw')->postAsync([
  'json' => [
    'parking_lot_audit_no' => 'PLA202604230001',
    'out_parking_lot_id'   => 'lot_sz_tencent_001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/parking/reminders/application/withdraw']->postAsync([
  'json' => [
    'parking_lot_audit_no' => 'PLA202604230001',
    'out_parking_lot_id'   => 'lot_sz_tencent_001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->parking->reminders->application->withdraw->post([
  'json' => [
    'parking_lot_audit_no' => 'PLA202604230001',
    'out_parking_lot_id'   => 'lot_sz_tencent_001',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/parking/reminders/application/withdraw')->post([
  'json' => [
    'parking_lot_audit_no' => 'PLA202604230001',
    'out_parking_lot_id'   => 'lot_sz_tencent_001',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/parking/reminders/application/withdraw']->post([
  'json' => [
    'parking_lot_audit_no' => 'PLA202604230001',
    'out_parking_lot_id'   => 'lot_sz_tencent_001',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4019557799)
