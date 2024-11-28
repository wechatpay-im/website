---
title: 查询单笔退款
description: 提交退款申请后，通过调用该接口查询退款状态。退款有一定延时，建议在提交退款申请后1分钟发起查询退款状态，一般来说零钱支付的退款5分钟内到账，银行卡支付的退款1-3个工作日到账。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_refund_no {data-required} | string | 商户退款单号
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->refund->domestic->refunds->_out_refund_no_->getAsync([
  'out_refund_no' => 'sdk12345678920210326144648',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/refund/domestic/refunds/{out_refund_no}')->getAsync([
  'out_refund_no' => 'sdk12345678920210326144648',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/refund/domestic/refunds/{out_refund_no}']->getAsync([
  'out_refund_no' => 'sdk12345678920210326144648',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->refund->domestic->refunds->_out_refund_no_->get([
  'out_refund_no' => 'sdk12345678920210326144648',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/refund/domestic/refunds/{out_refund_no}')->get([
  'out_refund_no' => 'sdk12345678920210326144648',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/refund/domestic/refunds/{out_refund_no}']->get([
  'out_refund_no' => 'sdk12345678920210326144648',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| refund_id {data-required} | string | 微信支付退款号
| out_refund_no {data-required} | string | 商户退款单号
| transaction_id {data-required} | string | 微信支付订单号
| out_trade_no {data-required} | string | 商户订单号
| channel {data-required} | string | 退款渠道
| user_received_account {data-required} | string | 退款入账账户
| success_time | string | 退款成功时间
| create_time {data-required} | string | 退款创建时间
| status {data-required} | string | 退款状态
| funds_account | string | 资金账户
| amount {data-required} | object {data-tooltip="对应PHP的array"} | 金额信息
| total {data-required data-indent=1} | integer | 订单金额
| refund {data-required data-indent=1} | integer | 退款金额
| from {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 退款出资账户及金额
| account {data-required data-indent=2} | string | 出资账户类型
| amount {data-required data-indent=2} | integer | 出资金额
| payer_total {data-required data-indent=1} | integer | 用户支付金额
| payer_refund {data-required data-indent=1} | integer | 用户退款金额
| settlement_refund {data-required data-indent=1} | integer | 应结退款金额
| settlement_total {data-required data-indent=1} | integer | 应结订单金额
| discount_refund {data-required data-indent=1} | integer | 优惠退款金额
| currency {data-required data-indent=1} | string | 退款币种
| refund_fee {data-indent=1} | number | 手续费退款金额
| promotion_detail | object[] {data-tooltip="对应PHP的array"} | 优惠退款信息
| promotion_id {data-required data-indent=1} | string | 券ID
| scope {data-required data-indent=1} | string | 优惠范围
| type {data-required data-indent=1} | string | 优惠类型
| amount {data-required data-indent=1} | integer | 优惠券面额
| refund_amount {data-required data-indent=1} | integer | 优惠退款金额
| goods_detail {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 商品列表
| merchant_goods_id {data-required data-indent=2} | string | 商户侧商品编码
| wechatpay_goods_id {data-indent=2} | string | 微信侧商品编码
| goods_name {data-indent=2} | string | 商品名称
| unit_price {data-required data-indent=2} | integer | 商品单价
| refund_amount {data-required data-indent=2} | integer | 商品退款金额
| refund_quantity {data-required data-indent=2} | integer | 商品退货数量

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_5_10.shtml) [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/refund/refunds/query-by-out-refund-no.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/refund/refunds/query-by-out-refund-no.html) [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/refunds/query-by-out-refund-no.html)
