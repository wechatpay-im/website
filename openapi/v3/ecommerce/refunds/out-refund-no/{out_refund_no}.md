---
title: 通过商户退款单号查询退款
description: 提交退款申请后，通过调用该接口查询退款状态。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_refund_no {data-required} | string | 商户退款单号
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| individual_auth_id {data-indent=1} | string | 商品单个人收款方受理授权ID
| sub_mchid {data-indent=1} | string | 二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->refunds->outRefundNo->_out_refund_no_->getAsync([
  'out_refund_no' => '1217752501201407033233368018',
  'query' => [
    'individual_auth_id' => '1900000109',
    'sub_mchid'          => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/refunds/out-refund-no/{out_refund_no}')->getAsync([
  'out_refund_no' => '1217752501201407033233368018',
  'query' => [
    'individual_auth_id' => '1900000109',
    'sub_mchid'          => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/refunds/out-refund-no/{out_refund_no}']->getAsync([
  'out_refund_no' => '1217752501201407033233368018',
  'query' => [
    'individual_auth_id' => '1900000109',
    'sub_mchid'          => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->refunds->outRefundNo->_out_refund_no_->get([
  'out_refund_no' => '1217752501201407033233368018',
  'query' => [
    'individual_auth_id' => '1900000109',
    'sub_mchid'          => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/refunds/out-refund-no/{out_refund_no}')->get([
  'out_refund_no' => '1217752501201407033233368018',
  'query' => [
    'individual_auth_id' => '1900000109',
    'sub_mchid'          => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/refunds/out-refund-no/{out_refund_no}']->get([
  'out_refund_no' => '1217752501201407033233368018',
  'query' => [
    'individual_auth_id' => '1900000109',
    'sub_mchid'          => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| refund_id {data-required} | string | 微信退款单号
| out_refund_no {data-required} | string | 商户退款单号
| transaction_id {data-required} | string | 微信订单号
| out_trade_no {data-required} | string | 商户订单号
| channel | string | 退款渠道
| user_received_account | string | 退款入账账户
| success_time | string | 退款成功时间
| create_time {data-required} | string | 退款创建时间
| status {data-required} | string | 退款状态
| amount {data-required} | object {data-tooltip="对应PHP的array"} | 退款金额信息
| refund {data-required data-indent=1} | integer | 退款金额
| from {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 退款出资账户及金额
| account {data-required data-indent=2} | string | 出资账户类型<br/>`AVAILABLE` \| `UNAVAILABLE` 枚举值之一
| amount {data-required data-indent=2} | number | 出资金额
| payer_refund {data-required data-indent=1} | integer | 用户退款金额
| discount_refund {data-indent=1} | integer | 优惠退款金额
| currency {data-indent=1} | string | 退款币种
| advance {data-indent=1} | number | 垫付金额
| promotion_detail | object[] {data-tooltip="对应PHP的array"} | 营销详情
| promotion_id {data-required data-indent=1} | string | 券ID
| scope {data-required data-indent=1} | string | 优惠范围
| type {data-required data-indent=1} | string | 优惠类型
| amount {data-required data-indent=1} | integer | 优惠券面额
| refund_amount {data-required data-indent=1} | integer | 优惠退款金额
| refund_account | string | 退款出资商户<br/>`REFUND_SOURCE_SUB_MERCHANT` \| `REFUND_SOURCE_PARTNER_ADVANCE` 枚举值之一
| funds_account | string | 资金账户<br/>`AVAILABLE` \| `UNSETTLED` \| `OPERATION` \| `BASIC` \| `ECNY_BASIC` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012650314) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012476911) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015252427)
