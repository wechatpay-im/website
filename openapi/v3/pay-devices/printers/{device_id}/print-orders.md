---
title: 小票机打印
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| device_id {data-required} | string | 小票机设备号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| print_order_no {data-indent=1} | string | 打印单号
| template_id {data-indent=1} | string | 模板ID
| notify_url {data-indent=1} | string | 回调通知地址
| variable_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 变量列表
| key {data-indent=2} | string | Key字段
| value {data-indent=2} | string | Value值字段
| table_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 表格变量列表
| key {data-indent=2} | string | Key字段
| row_list {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | Value值列表
| cell_list {data-indent=3} | string[] | 值列表

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payDevices->printers->_device_id_->printOrders->postAsync([
  'device_id' => 'WINCIE*EIXHRB',
  'json' => [
    'print_order_no' => 'wx8888888888888888',
    'template_id'    => 'pt_02583429616371386640209536',
    'notify_url'     => 'https://payapp.weixin.qq.com/callback',
    'variable_list'  => [[
      'key'   => '',
      'value' => '',
    ],],
    'table_list'     => [[
      'key'      => '',
      'row_list' => [[
        'cell_list' => ['string'],
      ],],
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/pay-devices/printers/{device_id}/print-orders')->postAsync([
  'device_id' => 'WINCIE*EIXHRB',
  'json' => [
    'print_order_no' => 'wx8888888888888888',
    'template_id'    => 'pt_02583429616371386640209536',
    'notify_url'     => 'https://payapp.weixin.qq.com/callback',
    'variable_list'  => [[
      'key'   => '',
      'value' => '',
    ],],
    'table_list'     => [[
      'key'      => '',
      'row_list' => [[
        'cell_list' => ['string'],
      ],],
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/pay-devices/printers/{device_id}/print-orders']->postAsync([
  'device_id' => 'WINCIE*EIXHRB',
  'json' => [
    'print_order_no' => 'wx8888888888888888',
    'template_id'    => 'pt_02583429616371386640209536',
    'notify_url'     => 'https://payapp.weixin.qq.com/callback',
    'variable_list'  => [[
      'key'   => '',
      'value' => '',
    ],],
    'table_list'     => [[
      'key'      => '',
      'row_list' => [[
        'cell_list' => ['string'],
      ],],
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payDevices->printers->_device_id_->printOrders->post([
  'device_id' => 'WINCIE*EIXHRB',
  'json' => [
    'print_order_no' => 'wx8888888888888888',
    'template_id'    => 'pt_02583429616371386640209536',
    'notify_url'     => 'https://payapp.weixin.qq.com/callback',
    'variable_list'  => [[
      'key'   => '',
      'value' => '',
    ],],
    'table_list'     => [[
      'key'      => '',
      'row_list' => [[
        'cell_list' => ['string'],
      ],],
    ],],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/pay-devices/printers/{device_id}/print-orders')->post([
  'device_id' => 'WINCIE*EIXHRB',
  'json' => [
    'print_order_no' => 'wx8888888888888888',
    'template_id'    => 'pt_02583429616371386640209536',
    'notify_url'     => 'https://payapp.weixin.qq.com/callback',
    'variable_list'  => [[
      'key'   => '',
      'value' => '',
    ],],
    'table_list'     => [[
      'key'      => '',
      'row_list' => [[
        'cell_list' => ['string'],
      ],],
    ],],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/pay-devices/printers/{device_id}/print-orders']->post([
  'device_id' => 'WINCIE*EIXHRB',
  'json' => [
    'print_order_no' => 'wx8888888888888888',
    'template_id'    => 'pt_02583429616371386640209536',
    'notify_url'     => 'https://payapp.weixin.qq.com/callback',
    'variable_list'  => [[
      'key'   => '',
      'value' => '',
    ],],
    'table_list'     => [[
      'key'      => '',
      'row_list' => [[
        'cell_list' => ['string'],
      ],],
    ],],
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 。
