---
title: 查询控制单
description: 根据外部单号查询管控单、解管单。管控单：未解管时支持长期查询，解管后支持1年查询。解管单：支持1年查询。限频：200/分钟
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_request_no {data-required} | string | 微众管控/解管单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| control_type {data-required data-indent=1} | string | 控制单类型<br/>`PUNISH` \| `RECOVER` 枚举值之一
| mchid {data-required data-indent=1} | string | 微信支付商户号
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->aggracctBc->wbChannel->controlOrders->_out_request_no_->getAsync([
  'out_request_no' => 'out_request_no_example',
  'query' => [
    'control_type' => 'PUNISH',
    'mchid'        => '1900016681',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/aggracct-bc/wb-channel/control-orders/{out_request_no}')->getAsync([
  'out_request_no' => 'out_request_no_example',
  'query' => [
    'control_type' => 'PUNISH',
    'mchid'        => '1900016681',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/aggracct-bc/wb-channel/control-orders/{out_request_no}']->getAsync([
  'out_request_no' => 'out_request_no_example',
  'query' => [
    'control_type' => 'PUNISH',
    'mchid'        => '1900016681',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->aggracctBc->wbChannel->controlOrders->_out_request_no_->get([
  'out_request_no' => 'out_request_no_example',
  'query' => [
    'control_type' => 'PUNISH',
    'mchid'        => '1900016681',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/aggracct-bc/wb-channel/control-orders/{out_request_no}')->get([
  'out_request_no' => 'out_request_no_example',
  'query' => [
    'control_type' => 'PUNISH',
    'mchid'        => '1900016681',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/aggracct-bc/wb-channel/control-orders/{out_request_no}']->get([
  'out_request_no' => 'out_request_no_example',
  'query' => [
    'control_type' => 'PUNISH',
    'mchid'        => '1900016681',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| control_scene {data-required} | string | 控制场景<br/>`PUNISH` \| `RECOVER` 枚举值之一
| punish_order | object {data-tooltip="对应PHP的array"} | 管控单
| wxpay_punish_no {data-required data-indent=1} | string | 微信管控单号
| out_request_no {data-required data-indent=1} | string | 微众管控单号
| mchid {data-required data-indent=1} | string | 目标下管商户号
| punish_scene {data-required data-indent=1} | integer | 管控场景
| punish_rule_version {data-required data-indent=1} | integer | 管控场景规则版本号
| punish_reason {data-indent=1} | string | 管控原因
| punish_start_time {data-indent=1} | string | 管控开始时间
| punish_end_time {data-indent=1} | string | 管控结束时间
| punish_accept_time {data-required data-indent=1} | string | 管控受理时间
| punish_finish_time {data-indent=1} | string | 管控执行完成时间
| punish_state {data-required data-indent=1} | string | 管控状态<br/>`EXECUTING` \| `SUCCESS` \| `FAILED` 枚举值之一
| effect_state {data-indent=1} | string | 生效状态<br/>`ACTIVE` \| `RECOVERED` 枚举值之一
| control_action {data-indent=1} | string[] | 管控方案<br/>`DISABLE_RECEIVE` \| `DISABLE_WITHDRAWAL` \| `DISABLE_PAY` \| `DISABLE_REFUND` \| `DISABLE_CLOSE_MERCHANT` 枚举值之一
| error_message {data-indent=1} | string | 执行失败错误信息
| error_code {data-indent=1} | string | 执行失败错误码
| recover_order | object {data-tooltip="对应PHP的array"} | 解管单
| wxpay_recover_no {data-required data-indent=1} | string | 微信支付解管单号
| out_request_no {data-required data-indent=1} | string | 微众解管单号
| related_wxpay_punish_no {data-required data-indent=1} | string | 关联微信支付管控单号
| mchid {data-required data-indent=1} | string | 目标解管商户号
| punish_scene {data-required data-indent=1} | string | 管控场景
| punish_rule_version {data-required data-indent=1} | string | 管控场景规则版本号
| recover_accept_time {data-required data-indent=1} | string | 解管受理时间
| recover_finish_time {data-required data-indent=1} | string | 解管执行完成时间
| recover_state {data-required data-indent=1} | string | 解管状态<br/>`EXECUTING` \| `SUCCESS` \| `FAILED` 枚举值之一
| recover_reason {data-required data-indent=1} | string | 解管原因描述
| error_message {data-indent=1} | string | 执行失败错误信息
| error_code {data-indent=1} | string | 执行失败错误码

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4016025274)
