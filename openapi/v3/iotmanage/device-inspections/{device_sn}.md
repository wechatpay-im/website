---
title: 获取出厂检查结果
description: 
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| device_sn {data-required} | string | 设备序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->iotmanage->deviceInspections->_device_sn_->getAsync([
  'device_sn' => 'AAAAA123456789012345678',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/iotmanage/device-inspections/{device_sn}')->getAsync([
  'device_sn' => 'AAAAA123456789012345678',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/iotmanage/device-inspections/{device_sn}']->getAsync([
  'device_sn' => 'AAAAA123456789012345678',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->iotmanage->deviceInspections->_device_sn_->get([
  'device_sn' => 'AAAAA123456789012345678',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/iotmanage/device-inspections/{device_sn}')->get([
  'device_sn' => 'AAAAA123456789012345678',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/iotmanage/device-inspections/{device_sn}']->get([
  'device_sn' => 'AAAAA123456789012345678',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| device_sn {data-required} | string | 设备序列号
| wired_mac {data-required} | string | 有线网卡MAC地址
| wireless_mac {data-required} | string | 无线网卡MAC地址
| bluetooth_mac {data-required} | string | 蓝牙MAC地址
| app_version {data-required} | string | 刷脸应用版本号
| camera_sn {data-required} | string | 摄像头序列号
| imei {data-required} | string | 国际移动设备识别码
| result {data-required} | string | 查询结果<br/>`SUCCESS` \| `WARN` \| `FAIL` 枚举值之一
| errors | string[] | 错误信息
| warnings | string[] | 告警信息
| inspect_time {data-required} | string | 查询时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/wxfacepay/tool/factory-check-data-api.html)
