---
title: 查询订单
description: 
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| device_id | string | 小票机设备号
| print_order_no | string | 打印单号

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
| print_state | string | 打印状态
| print_state_description | string | 打印状态描述
| variable_list | object[] | 变量列表
| key {data-indent=1} | string | 
| value {data-indent=1} | string | 
| table_list | object[] | 表格变量列表
| key {data-indent=1} | string | 
| row_list {data-indent=1} | object[] | 
| cell_list {data-indent=2} | string[] | 

{.im-table #response}

参阅 情
