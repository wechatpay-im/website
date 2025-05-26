---
title: 查询退款（支持单品）
description: 注意：本接口支持查询单品优惠相关退款信息，且仅支持按微信退款单号或商户退款单号查询，
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 公众账号ID
| mch_id {data-required data-indent=1} | string | 商户号
| sub_appid {data-indent=1} | string | 子商户公众账号ID
| sub_mch_id {data-indent=1} | string | 子商户号
| sign_type {data-indent=1} | string | 签名类型<br/>`MD5` \| `HMAC-SHA256` 枚举值之一
| transaction_id {data-required data-indent=1} | string | 微信订单号
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| out_refund_no {data-required data-indent=1} | string | 商户退款单号
| refund_id {data-required data-indent=1} | string | 微信退款单号
| offset {data-indent=1} | integer | 偏移量

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->pay->refundqueryv2->postAsync([
  'xml' => [
    'appid'          => 'wx8888888888888888',
    'mch_id'         => '1900000109',
    'sub_appid'      => 'wx8888888888888888',
    'sub_mch_id'     => '1900000109',
    'sign_type'      => 'HMAC-SHA256',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no'   => '1217752501201407033233368018',
    'out_refund_no'  => '1217752501201407033233368018',
    'refund_id'      => '1217752501201407033233368018',
    'offset'         => '15',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/pay/refundqueryv2')->postAsync([
  'xml' => [
    'appid'          => 'wx8888888888888888',
    'mch_id'         => '1900000109',
    'sub_appid'      => 'wx8888888888888888',
    'sub_mch_id'     => '1900000109',
    'sign_type'      => 'HMAC-SHA256',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no'   => '1217752501201407033233368018',
    'out_refund_no'  => '1217752501201407033233368018',
    'refund_id'      => '1217752501201407033233368018',
    'offset'         => '15',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/pay/refundqueryv2']->postAsync([
  'xml' => [
    'appid'          => 'wx8888888888888888',
    'mch_id'         => '1900000109',
    'sub_appid'      => 'wx8888888888888888',
    'sub_mch_id'     => '1900000109',
    'sign_type'      => 'HMAC-SHA256',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no'   => '1217752501201407033233368018',
    'out_refund_no'  => '1217752501201407033233368018',
    'refund_id'      => '1217752501201407033233368018',
    'offset'         => '15',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->pay->refundqueryv2->post([
  'xml' => [
    'appid'          => 'wx8888888888888888',
    'mch_id'         => '1900000109',
    'sub_appid'      => 'wx8888888888888888',
    'sub_mch_id'     => '1900000109',
    'sign_type'      => 'HMAC-SHA256',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no'   => '1217752501201407033233368018',
    'out_refund_no'  => '1217752501201407033233368018',
    'refund_id'      => '1217752501201407033233368018',
    'offset'         => '15',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/pay/refundqueryv2')->post([
  'xml' => [
    'appid'          => 'wx8888888888888888',
    'mch_id'         => '1900000109',
    'sub_appid'      => 'wx8888888888888888',
    'sub_mch_id'     => '1900000109',
    'sign_type'      => 'HMAC-SHA256',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no'   => '1217752501201407033233368018',
    'out_refund_no'  => '1217752501201407033233368018',
    'refund_id'      => '1217752501201407033233368018',
    'offset'         => '15',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/pay/refundqueryv2']->post([
  'xml' => [
    'appid'          => 'wx8888888888888888',
    'mch_id'         => '1900000109',
    'sub_appid'      => 'wx8888888888888888',
    'sub_mch_id'     => '1900000109',
    'sign_type'      => 'HMAC-SHA256',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no'   => '1217752501201407033233368018',
    'out_refund_no'  => '1217752501201407033233368018',
    'refund_id'      => '1217752501201407033233368018',
    'offset'         => '15',
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
| err_code {data-required} | string | 错误码
| err_code_des {data-required} | string | 错误描述
| appid {data-required} | string | 公众账号ID
| mch_id {data-required} | string | 商户号
| sub_appid | string | 子商户公众账号ID
| sub_mch_id | string | 子商户号
| nonce_str {data-required} | string | 随机字符串
| sign {data-required} | string | 签名
| total_refund_count | integer | 订单总退款次数
| transaction_id {data-required} | string | 微信订单号
| out_trade_no {data-required} | string | 商户订单号
| total_fee {data-required} | integer | 订单金额
| settlement_total_fee | integer | 应结订单金额
| fee_type | string | 货币种类
| cash_fee {data-required} | integer | 现金支付金额
| refund_count {data-required} | integer | 退款笔数
| out_refund_no_$n {data-required} | string | 商户退款单号
| refund_id_$n {data-required} | string | 微信退款单号
| refund_channel_$n | string | 退款渠道
| refund_fee_$n {data-required} | integer | 申请退款金额
| settlement_refund_fee_$n | integer | 退款金额
| coupon_type_$n_$m | string | 代金券类型
| coupon_refund_fee_$n | integer | 总代金券退款金额
| coupon_refund_count_$n | integer | 退款代金券使用数量
| coupon_refund_id_$n_$m | string | 退款代金券ID
| coupon_refund_fee_$n_$m | integer | 单个代金券退款金额
| refund_status_$n {data-required} | string | 退款状态
| refund_account_$n | string | 退款资金来源
| refund_recv_accout_$n {data-required} | string | 退款入账账户
| refund_success_time_$n | string | 退款成功时间
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

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011984122)
