---
title: 查询音箱绑定信息
description: 通过该接口查询设备和收款码链接、收款商户号的绑定关系
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| device_sn {data-required} | string | 设备sn

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payDevices->openScenarioSpeaker->_device_sn_->getAsync([
  'device_sn' => 'ABCDEF',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/pay-devices/open-scenario-speaker/{device_sn}')->getAsync([
  'device_sn' => 'ABCDEF',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/pay-devices/open-scenario-speaker/{device_sn}']->getAsync([
  'device_sn' => 'ABCDEF',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payDevices->openScenarioSpeaker->_device_sn_->get([
  'device_sn' => 'ABCDEF',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/pay-devices/open-scenario-speaker/{device_sn}')->get([
  'device_sn' => 'ABCDEF',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/pay-devices/open-scenario-speaker/{device_sn}']->get([
  'device_sn' => 'ABCDEF',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 子商户
| device_sn {data-required} | string | 设备sn
| bind_state {data-required} | string | 绑定状态<br/>`OPEN_SCENARIO_SPEAKER_BIND_STATE_UNBOND` \| `OPEN_SCENARIO_SPEAKER_BIND_STATE_BINDED` 枚举值之一
| code_url {data-required} | string | 收款链接url

{.im-table #response}

参阅 [官方文档](https://docs.qq.com/doc/p/104fa2cfd02a4ae89e79e0402b12f738e933c698?nlc=1)
