---
title: 从业机构查询微信支付分扣款信息
description: 前置条件：服务订单状态为“已完成”或者“进行中”且商户已经完成登记扣款信息
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| service_id {data-required data-indent=1} | string | 服务ID
| appid {data-required data-indent=1} | string | 从业机构申请的公众号或移动应用AppID
| sub_mchid {data-required data-indent=1} | string | 子商户号
| sub_appid {data-indent=1} | string | 子商户申请的公众号或移动应用AppID
| channel_id {data-required data-indent=1} | string | 渠道商商户号
| out_order_no {data-indent=1} | string | 商户服务订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->acquiringbank->serviceorder->deduction->getAsync([
  'query' => [
    'service_id'   => '2002000000000558128851361561536',
    'appid'        => '',
    'sub_mchid'    => '1900000109',
    'sub_appid'    => '',
    'channel_id'   => '1230000109',
    'out_order_no' => '1234323JKHDFE1243252',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/acquiringbank/serviceorder/deduction')->getAsync([
  'query' => [
    'service_id'   => '2002000000000558128851361561536',
    'appid'        => '',
    'sub_mchid'    => '1900000109',
    'sub_appid'    => '',
    'channel_id'   => '1230000109',
    'out_order_no' => '1234323JKHDFE1243252',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/acquiringbank/serviceorder/deduction']->getAsync([
  'query' => [
    'service_id'   => '2002000000000558128851361561536',
    'appid'        => '',
    'sub_mchid'    => '1900000109',
    'sub_appid'    => '',
    'channel_id'   => '1230000109',
    'out_order_no' => '1234323JKHDFE1243252',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->acquiringbank->serviceorder->deduction->get([
  'query' => [
    'service_id'   => '2002000000000558128851361561536',
    'appid'        => '',
    'sub_mchid'    => '1900000109',
    'sub_appid'    => '',
    'channel_id'   => '1230000109',
    'out_order_no' => '1234323JKHDFE1243252',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/acquiringbank/serviceorder/deduction')->get([
  'query' => [
    'service_id'   => '2002000000000558128851361561536',
    'appid'        => '',
    'sub_mchid'    => '1900000109',
    'sub_appid'    => '',
    'channel_id'   => '1230000109',
    'out_order_no' => '1234323JKHDFE1243252',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/acquiringbank/serviceorder/deduction']->get([
  'query' => [
    'service_id'   => '2002000000000558128851361561536',
    'appid'        => '',
    'sub_mchid'    => '1900000109',
    'sub_appid'    => '',
    'channel_id'   => '1230000109',
    'out_order_no' => '1234323JKHDFE1243252',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| description {data-required} | string | 商品或支付单简要描述。
| out_trade_no {data-required} | string | 商户扣款单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-institution-weixin-pay-score/acquiring-bank-service-order/get-acquiring-bank-deduct-info.html)
