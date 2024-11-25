---
title: 创建用户当次充电代扣凭证
description: 商户通过该接口，得到用户当次充电的代扣凭证，使用该凭证进行扣款校验操作，该接口也会触发对用户发送的确认开始充电的通知。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

::: danger :no_entry_sign: {.im-deprecated}

本接口服务已于 `2019.12.16` (北京时间)下线，文档仅做留存参考。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| contract_id {data-required} | string | 充电授权扣费协议号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 特约商户号
| appid {data-required data-indent=1} | string | 服务商公众号ID
| sub_appid {data-indent=1} | string | 特约商户公众号ID
| charge_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 充电场景信息
| start_time {data-required data-indent=2} | string | 开始时间
| charging_station_name {data-required data-indent=2} | string | 充电站名称
| charging_gun_number {data-required data-indent=2} | string | 充电枪编号
| device_id {data-required data-indent=2} | string | 充电位设备号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ebike->charge->contracts->_contract_id_->confirm->postAsync([
  'contract_id' => 'aAfixCs13LsdKPpfZfDkk2189ssXjfx',
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx47c677487ce3ac47',
    'sub_appid' => 'wxcc603d9f0d54eaf0',
    'charge_info' => [
      'start_time' => '2017-08-26T09:43:39+08:00',
      'charging_station_name' => 'xxx充电站',
      'charging_gun_number' => '6555',
      'device_id' => '12343232',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ebike/charge/contracts/{contract_id}/confirm')->postAsync([
  'contract_id' => 'aAfixCs13LsdKPpfZfDkk2189ssXjfx',
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx47c677487ce3ac47',
    'sub_appid' => 'wxcc603d9f0d54eaf0',
    'charge_info' => [
      'start_time' => '2017-08-26T09:43:39+08:00',
      'charging_station_name' => 'xxx充电站',
      'charging_gun_number' => '6555',
      'device_id' => '12343232',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ebike/charge/contracts/{contract_id}/confirm']->postAsync([
  'contract_id' => 'aAfixCs13LsdKPpfZfDkk2189ssXjfx',
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx47c677487ce3ac47',
    'sub_appid' => 'wxcc603d9f0d54eaf0',
    'charge_info' => [
      'start_time' => '2017-08-26T09:43:39+08:00',
      'charging_station_name' => 'xxx充电站',
      'charging_gun_number' => '6555',
      'device_id' => '12343232',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ebike->charge->contracts->_contract_id_->confirm->post([
  'contract_id' => 'aAfixCs13LsdKPpfZfDkk2189ssXjfx',
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx47c677487ce3ac47',
    'sub_appid' => 'wxcc603d9f0d54eaf0',
    'charge_info' => [
      'start_time' => '2017-08-26T09:43:39+08:00',
      'charging_station_name' => 'xxx充电站',
      'charging_gun_number' => '6555',
      'device_id' => '12343232',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ebike/charge/contracts/{contract_id}/confirm')->post([
  'contract_id' => 'aAfixCs13LsdKPpfZfDkk2189ssXjfx',
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx47c677487ce3ac47',
    'sub_appid' => 'wxcc603d9f0d54eaf0',
    'charge_info' => [
      'start_time' => '2017-08-26T09:43:39+08:00',
      'charging_station_name' => 'xxx充电站',
      'charging_gun_number' => '6555',
      'device_id' => '12343232',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ebike/charge/contracts/{contract_id}/confirm']->post([
  'contract_id' => 'aAfixCs13LsdKPpfZfDkk2189ssXjfx',
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx47c677487ce3ac47',
    'sub_appid' => 'wxcc603d9f0d54eaf0',
    'charge_info' => [
      'start_time' => '2017-08-26T09:43:39+08:00',
      'charging_station_name' => 'xxx充电站',
      'charging_gun_number' => '6555',
      'device_id' => '12343232',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| charging_token {data-required}| string | 用户充电代扣凭证

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/vehicle/ebike/chapter3_4.shtml)
