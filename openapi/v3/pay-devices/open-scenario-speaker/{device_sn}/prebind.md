---
title: 出厂预绑定音箱和码牌
description: 通过该接口登记以下信息：设备sn、码牌上的url链接
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| device_sn {data-required} | string | 设备sn
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| code_url {data-required data-indent=1} | string | 收款链接url

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payDevices->openScenarioSpeaker->_device_sn_->prebind->postAsync([
  'device_sn' => 'ABCDEF',
  'json' => [
    'code_url' => 'URl:weixin://wxpay/s/An4baqw',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/pay-devices/open-scenario-speaker/{device_sn}/prebind')->postAsync([
  'device_sn' => 'ABCDEF',
  'json' => [
    'code_url' => 'URl:weixin://wxpay/s/An4baqw',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/pay-devices/open-scenario-speaker/{device_sn}/prebind']->postAsync([
  'device_sn' => 'ABCDEF',
  'json' => [
    'code_url' => 'URl:weixin://wxpay/s/An4baqw',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payDevices->openScenarioSpeaker->_device_sn_->prebind->post([
  'device_sn' => 'ABCDEF',
  'json' => [
    'code_url' => 'URl:weixin://wxpay/s/An4baqw',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/pay-devices/open-scenario-speaker/{device_sn}/prebind')->post([
  'device_sn' => 'ABCDEF',
  'json' => [
    'code_url' => 'URl:weixin://wxpay/s/An4baqw',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/pay-devices/open-scenario-speaker/{device_sn}/prebind']->post([
  'device_sn' => 'ABCDEF',
  'json' => [
    'code_url' => 'URl:weixin://wxpay/s/An4baqw',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| device_sn {data-required} | string | 设备sn
| bind_state {data-required} | string | 绑定状态<br/>`OPEN_SCENARIO_SPEAKER_BIND_STATE_UNBOND` \| `OPEN_SCENARIO_SPEAKER_BIND_STATE_BINDED` 枚举值之一
| code_url {data-required} | string | 收款链接url

{.im-table #response}

参阅 [官方文档](https://docs.qq.com/doc/p/104fa2cfd02a4ae89e79e0402b12f738e933c698?nlc=1)
