---
title: 查询订单
description: 服务商查询设备下的打印订单详情
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| device_id {data-required} | string | 小票机设备号
| print_order_no {data-required} | string | 打印单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payDevices->printers->_device_id_->printOrders->_print_order_no_->getAsync([
  'device_id' => 'WINCIE*EIXHRB',
  'print_order_no' => 'wx8888888888888888',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/pay-devices/printers/{device_id}/print-orders/{print_order_no}')->getAsync([
  'device_id' => 'WINCIE*EIXHRB',
  'print_order_no' => 'wx8888888888888888',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/pay-devices/printers/{device_id}/print-orders/{print_order_no}']->getAsync([
  'device_id' => 'WINCIE*EIXHRB',
  'print_order_no' => 'wx8888888888888888',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payDevices->printers->_device_id_->printOrders->_print_order_no_->get([
  'device_id' => 'WINCIE*EIXHRB',
  'print_order_no' => 'wx8888888888888888',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/pay-devices/printers/{device_id}/print-orders/{print_order_no}')->get([
  'device_id' => 'WINCIE*EIXHRB',
  'print_order_no' => 'wx8888888888888888',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/pay-devices/printers/{device_id}/print-orders/{print_order_no}']->get([
  'device_id' => 'WINCIE*EIXHRB',
  'print_order_no' => 'wx8888888888888888',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| print_order_no | string | 打印单号
| template_id | string | 模板ID
| notify_url | string | 回调通知地址
| print_state | string | 打印状态<br/>`PRINT_STATE_WAIT` \| `PRINT_STATE_SUCCESS` \| `PRINT_STATE_FAIL` \| `PRINT_STATE_CACHED` 枚举值之一
| print_state_description | string | 打印状态描述
| variable_list | object[] {data-tooltip="对应PHP的array"} | 变量列表
| key {data-indent=1} | string | Key字段
| value {data-indent=1} | string | Value值字段
| table_list | object[] {data-tooltip="对应PHP的array"} | 表格变量列表
| key {data-indent=1} | string | Key字段
| row_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | Value值列表
| cell_list {data-indent=2} | string[] | 值列表

{.im-table #response}
