---
title: 交易保障
description: 商户在调用微信支付提供的相关接口时，会得到微信支付返回的相关信息以及获得整个接口的响应时间。为提高整体的服务水平，协助商户一起提高服务质量，微信支付提供了相关接口调用耗时和返回信息的主动上报接口，微信支付可以根据商户侧上报的数据进一步优化网络部署，完善服务监控，和商户更好的协作为用户提供更好的业务体验。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 公众账号ID
| mch_id {data-required data-indent=1} | string | 商户号
| device_info {data-indent=1} | string | 设备号
| interface_url {data-required data-indent=1} | string | 接口URL
| user_ip {data-required data-indent=1} | string | 访问接口IP
| trades {data-required data-indent=1} | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 上报数据包`JSON`格式字符串
| {colspan=3 .im-table-line}
| transaction {data-required data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 交易数据
| out_trade_no {data-required data-indent=3} | string | 商户订单号
| begin_time {data-required data-indent=3} | string | 交易开始时间（扫码时间）
| end_time {data-required data-indent=3} | string | 交易完成时间
| state {data-required data-indent=3} | string | 交易结果<br/>`OK` \| `FAIL` \| `CANCLE` 枚举值之一
| err_msg {data-indent=3} | string | 自定义的错误描述信息

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->payitil->report->postAsync([
  'xml' => [
    'appid'         => 'wx8888888888888888',
    'mch_id'        => '1900000109',
    'device_info'   => '013467007045764',
    'interface_url' => 'https://api.mch.weixin.qq.com/pay/batchreport/micropay/total',
    'user_ip'       => '8.8.8.8',
    'trades'        => \json_encode([[
      'out_trade_no' => 'out_trade_no_test_1',
      'begin_time'   => '20160602203256',
      'end_time'     => '20160602203257',
      'state'        => 'OK',
      'err_msg'      => '',
    ],]),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/payitil/report')->postAsync([
  'xml' => [
    'appid'         => 'wx8888888888888888',
    'mch_id'        => '1900000109',
    'device_info'   => '013467007045764',
    'interface_url' => 'https://api.mch.weixin.qq.com/pay/batchreport/micropay/total',
    'user_ip'       => '8.8.8.8',
    'trades'        => \json_encode([[
      'out_trade_no' => 'out_trade_no_test_1',
      'begin_time'   => '20160602203256',
      'end_time'     => '20160602203257',
      'state'        => 'OK',
      'err_msg'      => '',
    ],]),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/payitil/report']->postAsync([
  'xml' => [
    'appid'         => 'wx8888888888888888',
    'mch_id'        => '1900000109',
    'device_info'   => '013467007045764',
    'interface_url' => 'https://api.mch.weixin.qq.com/pay/batchreport/micropay/total',
    'user_ip'       => '8.8.8.8',
    'trades'        => \json_encode([[
      'out_trade_no' => 'out_trade_no_test_1',
      'begin_time'   => '20160602203256',
      'end_time'     => '20160602203257',
      'state'        => 'OK',
      'err_msg'      => '',
    ],]),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->payitil->report->post([
  'xml' => [
    'appid'         => 'wx8888888888888888',
    'mch_id'        => '1900000109',
    'device_info'   => '013467007045764',
    'interface_url' => 'https://api.mch.weixin.qq.com/pay/batchreport/micropay/total',
    'user_ip'       => '8.8.8.8',
    'trades'        => \json_encode([[
      'out_trade_no' => 'out_trade_no_test_1',
      'begin_time'   => '20160602203256',
      'end_time'     => '20160602203257',
      'state'        => 'OK',
      'err_msg'      => '',
    ],]),
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/payitil/report')->post([
  'xml' => [
    'appid'         => 'wx8888888888888888',
    'mch_id'        => '1900000109',
    'device_info'   => '013467007045764',
    'interface_url' => 'https://api.mch.weixin.qq.com/pay/batchreport/micropay/total',
    'user_ip'       => '8.8.8.8',
    'trades'        => \json_encode([[
      'out_trade_no' => 'out_trade_no_test_1',
      'begin_time'   => '20160602203256',
      'end_time'     => '20160602203257',
      'state'        => 'OK',
      'err_msg'      => '',
    ],]),
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/payitil/report']->post([
  'xml' => [
    'appid'         => 'wx8888888888888888',
    'mch_id'        => '1900000109',
    'device_info'   => '013467007045764',
    'interface_url' => 'https://api.mch.weixin.qq.com/pay/batchreport/micropay/total',
    'user_ip'       => '8.8.8.8',
    'trades'        => \json_encode([[
      'out_trade_no' => 'out_trade_no_test_1',
      'begin_time'   => '20160602203256',
      'end_time'     => '20160602203257',
      'state'        => 'OK',
      'err_msg'      => '',
    ],]),
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg {data-required} | string | 返回信息
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/401193996) [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/401193522) [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/401193718) [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/401193993) [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/401193942) [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/401194165) [官方文档](https://pay.weixin.qq.com/doc/v2/partner/401194168) [官方文档](https://pay.weixin.qq.com/doc/v2/partner/401193665) [官方文档](https://pay.weixin.qq.com/doc/v2/partner/401198926) [官方文档](https://pay.weixin.qq.com/doc/v2/partner/401198411) [官方文档](https://pay.weixin.qq.com/doc/v2/partner/401194135) [官方文档](https://pay.weixin.qq.com/doc/v2/partner/401198440) [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013634924) [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013634972) [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013635003) [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013635266) [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013636502) [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013636622)
