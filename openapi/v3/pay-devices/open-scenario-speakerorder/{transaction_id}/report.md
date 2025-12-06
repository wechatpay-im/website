---
title: 码牌支付结果上报
description: 上报信息：商户订单号、设备sn、收款商户号
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| transaction_id {data-required} | string | 微信支付订单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-required data-indent=1} | string | 子商户
| code_url {data-required data-indent=1} | string | 收款链接url
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| device_sn {data-required data-indent=1} | string | 设备sn

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payDevices->openScenarioSpeakerorder->_transaction_id_->report->postAsync([
  'transaction_id' => '20190611222222222200000000012122',
  'json' => [
    'sub_mchid'    => '1900000001',
    'code_url'     => 'URl:weixin://wxpay/s/An4baqw',
    'out_trade_no' => 'example_out_trade_no',
    'device_sn'    => 'example_device_sn',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/pay-devices/open-scenario-speakerorder/{transaction_id}/report')->postAsync([
  'transaction_id' => '20190611222222222200000000012122',
  'json' => [
    'sub_mchid'    => '1900000001',
    'code_url'     => 'URl:weixin://wxpay/s/An4baqw',
    'out_trade_no' => 'example_out_trade_no',
    'device_sn'    => 'example_device_sn',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/pay-devices/open-scenario-speakerorder/{transaction_id}/report']->postAsync([
  'transaction_id' => '20190611222222222200000000012122',
  'json' => [
    'sub_mchid'    => '1900000001',
    'code_url'     => 'URl:weixin://wxpay/s/An4baqw',
    'out_trade_no' => 'example_out_trade_no',
    'device_sn'    => 'example_device_sn',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payDevices->openScenarioSpeakerorder->_transaction_id_->report->post([
  'transaction_id' => '20190611222222222200000000012122',
  'json' => [
    'sub_mchid'    => '1900000001',
    'code_url'     => 'URl:weixin://wxpay/s/An4baqw',
    'out_trade_no' => 'example_out_trade_no',
    'device_sn'    => 'example_device_sn',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/pay-devices/open-scenario-speakerorder/{transaction_id}/report')->post([
  'transaction_id' => '20190611222222222200000000012122',
  'json' => [
    'sub_mchid'    => '1900000001',
    'code_url'     => 'URl:weixin://wxpay/s/An4baqw',
    'out_trade_no' => 'example_out_trade_no',
    'device_sn'    => 'example_device_sn',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/pay-devices/open-scenario-speakerorder/{transaction_id}/report']->post([
  'transaction_id' => '20190611222222222200000000012122',
  'json' => [
    'sub_mchid'    => '1900000001',
    'code_url'     => 'URl:weixin://wxpay/s/An4baqw',
    'out_trade_no' => 'example_out_trade_no',
    'device_sn'    => 'example_device_sn',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 子商户
| code_url {data-required} | string | 收款链接url
| out_trade_no {data-required} | string | 商户订单号
| device_sn {data-required} | string | 设备sn
| transaction_id {data-required} | string | 微信支付订单号

{.im-table #response}

参阅 [官方文档](https://docs.qq.com/doc/p/104fa2cfd02a4ae89e79e0402b12f738e933c698?nlc=1)
