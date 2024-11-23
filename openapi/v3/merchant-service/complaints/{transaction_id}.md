---
title: 查询投诉详情
description: 商户可通过调用此接口，查询指定投诉的用户投诉详情，包含投诉内容、投诉订单、投诉人联系方式等信息，方便商户获取投诉详情处理投诉。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

::: danger :no_entry_sign: {.im-deprecated}

本接口服务已于 `2020.11.27` (北京时间)下线，文档仅做留存参考。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| transaction_id {data-required} | string | 微信支付订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantService->complaints->_transaction_id_->getAsync([
  'transaction_id' => '4200000404201909069117582536',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-service/complaints/{transaction_id}')->getAsync([
  'transaction_id' => '4200000404201909069117582536',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-service/complaints/{transaction_id}']->getAsync([
  'transaction_id' => '4200000404201909069117582536',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantService->complaints->_transaction_id_->get([
  'transaction_id' => '4200000404201909069117582536',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-service/complaints/{transaction_id}')->get([
  'transaction_id' => '4200000404201909069117582536',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant-service/complaints/{transaction_id}']->get([
  'transaction_id' => '4200000404201909069117582536',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_trade_no {data-required}| string | 商户订单号
| complaint_time {data-required}| string | 投诉时间
| amount {data-required}| integer | 投诉金额
| payer_phone | string | 投诉人联系方式
| complaint_detail {data-required}| string | 投诉描述
| complaint_state | string | 投诉单状态
| transaction_id {data-required}| string | 微信支付订单号
| frozen_end_time | string | 冻结结束时间
| sub_mchid | string | 特约商户号
| complaint_handle_state {data-required}| string | 投诉单处理进展状态

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/merchant-service/chapter3_8.shtml)
