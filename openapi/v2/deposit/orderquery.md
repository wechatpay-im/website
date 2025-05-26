---
title: 查询订单
description: 该接口提供所有微信支付订单的查询，商户可以通过该接口主动查询订单状态，完成下一步的业务逻辑。押金消费时，押金金额解冻，部分金额退还给用户，部分金额结算给商户。通过该接口可以查询押金消费的目前的具体押金消费单状态：包含退款和结算状态信息。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| version {data-indent=1} | string | 接口版本号<br/>`1.0` 枚举值
| appid {data-required data-indent=1} | string | 公众账号ID
| sub_appid {data-indent=1} | string | 子商户公众账号ID
| mch_id {data-required data-indent=1} | string | 商户号
| sub_mch_id {data-indent=1} | string | 子商户号
| transaction_id {data-required data-indent=1} | string | 微信订单号
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| sign_type {data-indent=1} | string | 签名类型<br/>`MD5` \| `HMAC-SHA256` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->deposit->orderquery->postAsync([
  'xml' => [
    'version'        => '1.0',
    'appid'          => 'wxd678efh567hg6787',
    'sub_appid'      => 'wx8888888888888888',
    'mch_id'         => '1230000109',
    'sub_mch_id'     => '1900000100',
    'transaction_id' => '1009660380201506130728806387',
    'out_trade_no'   => '20150806125346',
    'sign_type'      => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/deposit/orderquery')->postAsync([
  'xml' => [
    'version'        => '1.0',
    'appid'          => 'wxd678efh567hg6787',
    'sub_appid'      => 'wx8888888888888888',
    'mch_id'         => '1230000109',
    'sub_mch_id'     => '1900000100',
    'transaction_id' => '1009660380201506130728806387',
    'out_trade_no'   => '20150806125346',
    'sign_type'      => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/deposit/orderquery']->postAsync([
  'xml' => [
    'version'        => '1.0',
    'appid'          => 'wxd678efh567hg6787',
    'sub_appid'      => 'wx8888888888888888',
    'mch_id'         => '1230000109',
    'sub_mch_id'     => '1900000100',
    'transaction_id' => '1009660380201506130728806387',
    'out_trade_no'   => '20150806125346',
    'sign_type'      => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->deposit->orderquery->post([
  'xml' => [
    'version'        => '1.0',
    'appid'          => 'wxd678efh567hg6787',
    'sub_appid'      => 'wx8888888888888888',
    'mch_id'         => '1230000109',
    'sub_mch_id'     => '1900000100',
    'transaction_id' => '1009660380201506130728806387',
    'out_trade_no'   => '20150806125346',
    'sign_type'      => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/deposit/orderquery')->post([
  'xml' => [
    'version'        => '1.0',
    'appid'          => 'wxd678efh567hg6787',
    'sub_appid'      => 'wx8888888888888888',
    'mch_id'         => '1230000109',
    'sub_mch_id'     => '1900000100',
    'transaction_id' => '1009660380201506130728806387',
    'out_trade_no'   => '20150806125346',
    'sign_type'      => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/deposit/orderquery']->post([
  'xml' => [
    'version'        => '1.0',
    'appid'          => 'wxd678efh567hg6787',
    'sub_appid'      => 'wx8888888888888888',
    'mch_id'         => '1230000109',
    'sub_mch_id'     => '1900000100',
    'transaction_id' => '1009660380201506130728806387',
    'out_trade_no'   => '20150806125346',
    'sign_type'      => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg {data-required} | string | 返回信息
| appid {data-required} | string | 公众账号ID
| sub_appid | string | 子商户公众账号ID
| mch_id {data-required} | string | 商户号
| sub_mch_id | string | 子商户号
| nonce_str {data-required} | string | 随机字符串
| sign {data-required} | string | 签名
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| device_info | string | 设备号
| openid {data-required} | string | 用户标识
| is_subscribe {data-required} | string | 是否关注公众账号<br/>`Y` \| `N` 枚举值之一
| sub_openid | string | 用户子标识
| sub_is_subscribe | string | 是否关注子公众账号<br/>`Y` \| `N` 枚举值之一
| trade_type {data-required} | string | 交易类型
| trade_state {data-required} | string | 交易状态<br/>`SUCCESS` \| `REFUND` \| `NOTPAY` \| `CLOSED` \| `REVOKED` \| `USERPAYING` \| `PAYERROR` \| `ACCEPT` 枚举值之一
| bank_type {data-required} | string | 付款银行
| total_fee {data-required} | integer | 标价金额
| settlement_total_fee | integer | 应结订单金额
| fee_type | string | 标价币种
| cash_fee {data-required} | integer | 现金支付金额
| cash_fee_type | string | 现金支付币种
| coupon_fee | integer | 代金券金额
| coupon_count | integer | 代金券使用数量
| coupon_type_$n | string | 代金券类型
| coupon_id_$n | string | 代金券ID
| coupon_fee_$n | integer | 单个代金券支付金额
| transaction_id {data-required} | string | 微信支付订单号
| out_trade_no {data-required} | string | 商户订单号
| attach | string | 附加数据
| time_end {data-required} | string | 支付完成时间
| trade_state_desc {data-required} | string | 交易状态描述
| promotion_detail | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 营销详情`JSON`格式字符串
| {colspan=3 .im-table-line}
| promotion_id {data-required data-indent=1} | string | 券ID
| name {data-indent=1} | string | 优惠名称
| scope {data-indent=1} | string | 优惠范围<br/>`GLOBAL` \| `SINGLE` 枚举值之一
| type {data-indent=1} | string | 优惠类型<br/>`COUPON` \| `DISCOUNT` 枚举值之一
| amount {data-required data-indent=1} | string | 优惠券面额
| activity_id {data-required data-indent=1} | string | 活动ID
| wxpay_contribute {data-indent=1} | string | 微信出资
| merchant_contribute {data-indent=1} | string | 商户出资
| other_contribute {data-indent=1} | string | 其他出资
| goods_detail {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 单品列表
| goods_id {data-indent=2} | string | 商品编码
| wxpay_goods_id {data-indent=2} | string | 微信支付商品编码
| goods_name {data-indent=2} | string | 商品名称
| quantity {data-required data-indent=2} | number | 商品数量
| price {data-required data-indent=2} | number | 商品单价
| consume_fee | integer | 押金消费金额

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011986679)
