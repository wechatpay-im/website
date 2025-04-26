---
title: 从业机构登记微信支付分扣款信息
description: 前置条件：服务订单状态为“进行中”且订单状态说明需为"商户完结(MCH_COMPLETE)"
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no {data-required} | string | 商户服务订单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| service_id {data-required data-indent=1} | string | 服务ID
| appid {data-indent=1} | string | 服务商应用ID
| sub_mchid {data-required data-indent=1} | string | 子商户号
| channel_id {data-required data-indent=1} | string | 渠道商商户号
| out_trade_no {data-indent=1} | string | 商户系统内部扣款单号。

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->acquiringbank->serviceorder->_out_order_no_->registerdeductinfo->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id'   => '2002000000000558128851361561536',
    'appid'        => 'wxd678efh567hg6787',
    'sub_mchid'    => '1900000109',
    'channel_id'   => '1230000109',
    'out_trade_no' => '1234323JKHDFE1243252',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/acquiringbank/serviceorder/{out_order_no}/registerdeductinfo')->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id'   => '2002000000000558128851361561536',
    'appid'        => 'wxd678efh567hg6787',
    'sub_mchid'    => '1900000109',
    'channel_id'   => '1230000109',
    'out_trade_no' => '1234323JKHDFE1243252',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/acquiringbank/serviceorder/{out_order_no}/registerdeductinfo']->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id'   => '2002000000000558128851361561536',
    'appid'        => 'wxd678efh567hg6787',
    'sub_mchid'    => '1900000109',
    'channel_id'   => '1230000109',
    'out_trade_no' => '1234323JKHDFE1243252',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->acquiringbank->serviceorder->_out_order_no_->registerdeductinfo->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id'   => '2002000000000558128851361561536',
    'appid'        => 'wxd678efh567hg6787',
    'sub_mchid'    => '1900000109',
    'channel_id'   => '1230000109',
    'out_trade_no' => '1234323JKHDFE1243252',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/acquiringbank/serviceorder/{out_order_no}/registerdeductinfo')->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id'   => '2002000000000558128851361561536',
    'appid'        => 'wxd678efh567hg6787',
    'sub_mchid'    => '1900000109',
    'channel_id'   => '1230000109',
    'out_trade_no' => '1234323JKHDFE1243252',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/acquiringbank/serviceorder/{out_order_no}/registerdeductinfo']->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id'   => '2002000000000558128851361561536',
    'appid'        => 'wxd678efh567hg6787',
    'sub_mchid'    => '1900000109',
    'channel_id'   => '1230000109',
    'out_trade_no' => '1234323JKHDFE1243252',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| description | string | 商品或支付单简要描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012458414) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013194100)
