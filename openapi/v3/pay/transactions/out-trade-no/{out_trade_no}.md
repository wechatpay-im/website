---
title: 商户订单号查询
description: 商户可以通过查询订单接口主动查询订单状态，完成下一步的业务逻辑。查询订单状态可通过微信支付订单号或商户订单号两种方式查询
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_trade_no {data-required} | string | 商户订单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| mchid {data-required data-indent=1} | string | 直连商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->pay->transactions->outTradeNo->_out_trade_no_->getAsync([
  'out_trade_no' => '1217752501201407033233368018',
  'query' => [
    'mchid' => '1230000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/pay/transactions/out-trade-no/{out_trade_no}')->getAsync([
  'out_trade_no' => '1217752501201407033233368018',
  'query' => [
    'mchid' => '1230000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/pay/transactions/out-trade-no/{out_trade_no}']->getAsync([
  'out_trade_no' => '1217752501201407033233368018',
  'query' => [
    'mchid' => '1230000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->pay->transactions->outTradeNo->_out_trade_no_->get([
  'out_trade_no' => '1217752501201407033233368018',
  'query' => [
    'mchid' => '1230000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/pay/transactions/out-trade-no/{out_trade_no}')->get([
  'out_trade_no' => '1217752501201407033233368018',
  'query' => [
    'mchid' => '1230000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/pay/transactions/out-trade-no/{out_trade_no}']->get([
  'out_trade_no' => '1217752501201407033233368018',
  'query' => [
    'mchid' => '1230000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| transaction_id | string | 微信支付订单号
| trade_type | string | 交易类型<br/>`JSAPI` \| `NATIVE` \| `APP` \| `MICROPAY` \| `MWEB` \| `FACEPAY` 枚举值之一
| trade_state | string | 交易状态<br/>`SUCCESS` \| `REFUND` \| `NOTPAY` \| `CLOSED` \| `REVOKED` \| `USERPAYING` \| `PAYERROR` 枚举值之一
| trade_state_desc | string | 交易状态描述
| bank_type | string | 付款银行
| success_time | string | 支付完成时间
| appid {data-required} | string | 公众号ID
| mchid {data-required} | string | 直连商户号
| attach | string | 附加数据
| out_trade_no {data-required} | string | 商户订单号
| amount {data-required} | object {data-tooltip="对应PHP的array"} | 用户支付金额
| payer_total {data-required data-indent=1} | integer | 用户支付金额
| payer_currency {data-indent=1} | string | 用户支付币种
| total {data-indent=1} | integer | 总金额
| currency {data-indent=1} | string | 货币类型
| scene_info | object {data-tooltip="对应PHP的array"} | 场景信息
| device_id {data-indent=1} | string | 商户端设备号
| payer | object {data-tooltip="对应PHP的array"} | 支付者
| openid {data-required data-indent=1} | string | 用户标识
| promotion_detail | object[] {data-tooltip="对应PHP的array"} | 优惠功能
| coupon_id {data-required data-indent=1} | string | 券ID
| name {data-required data-indent=1} | string | 优惠名称
| scope {data-indent=1} | string | 优惠范围
| type {data-indent=1} | string | 优惠类型
| amount {data-required data-indent=1} | integer | 优惠券面额
| stock_id {data-indent=1} | string | 活动ID
| wechatpay_contribute {data-indent=1} | integer | 微信出资
| merchant_contribute {data-indent=1} | integer | 商户出资
| other_contribute {data-indent=1} | integer | 其他出资
| currency {data-indent=1} | string | 优惠币种
| goods_detail {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 单品列表
| goods_id {data-required data-indent=2} | string | 商品编码
| quantity {data-required data-indent=2} | integer | 商品数量
| unit_price {data-required data-indent=2} | integer | 商品单价
| discount_amount {data-required data-indent=2} | integer | 商品优惠金额
| goods_remark {data-indent=2} | string | 商品备注

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012791859) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013070356) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012791838) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012791880) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012791900) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012526919)
