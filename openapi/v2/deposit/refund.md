---
title: 申请退款（押金）
description: 在押金已消费的情况下，部分金额已结算给商户的资金退还给用户，并为用户下发“退款发起提醒通知“；退款到账后，下发“押金退还到账通知”。可调用多次，允许部分退款;
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| security {data-required} | `true` | 声明加载商户API证书
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 公众账号ID
| sub_appid {data-indent=1} | string | 子商户公众账号ID
| mch_id {data-required data-indent=1} | string | 商户号
| sub_mch_id {data-indent=1} | string | 子商户号
| sign_type {data-indent=1} | string | 签名类型<br/>`MD5` \| `HMAC-SHA256` 枚举值之一
| transaction_id {data-required data-indent=1} | string | 微信订单号
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| out_refund_no {data-required data-indent=1} | string | 商户退款单号
| total_fee {data-required data-indent=1} | integer | 订单金额
| refund_fee {data-required data-indent=1} | integer | 退款金额
| refund_fee_type {data-indent=1} | string | 退款货币种类
| refund_desc {data-indent=1} | string | 退款原因
| refund_account {data-indent=1} | string | 退款资金来源
| notify_url {data-indent=1} | string | 退款结果通知url

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->deposit->refund->postAsync([
  'security' => true,
  'xml' => [
    'appid'           => 'wx8888888888888888',
    'sub_appid'       => 'wx8888888888888888',
    'mch_id'          => '1900000109',
    'sub_mch_id'      => '1900000109',
    'sign_type'       => 'HMAC-SHA256',
    'transaction_id'  => '1217752501201407033233368018',
    'out_trade_no'    => '1217752501201407033233368018',
    'out_refund_no'   => '1217752501201407033233368018',
    'total_fee'       => '100',
    'refund_fee'      => '100',
    'refund_fee_type' => 'CNY',
    'refund_desc'     => '商品已售完',
    'refund_account'  => 'REFUND_SOURCE_RECHARGE_FUNDS',
    'notify_url'      => 'https://weixin.qq.com/notify/',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/deposit/refund')->postAsync([
  'security' => true,
  'xml' => [
    'appid'           => 'wx8888888888888888',
    'sub_appid'       => 'wx8888888888888888',
    'mch_id'          => '1900000109',
    'sub_mch_id'      => '1900000109',
    'sign_type'       => 'HMAC-SHA256',
    'transaction_id'  => '1217752501201407033233368018',
    'out_trade_no'    => '1217752501201407033233368018',
    'out_refund_no'   => '1217752501201407033233368018',
    'total_fee'       => '100',
    'refund_fee'      => '100',
    'refund_fee_type' => 'CNY',
    'refund_desc'     => '商品已售完',
    'refund_account'  => 'REFUND_SOURCE_RECHARGE_FUNDS',
    'notify_url'      => 'https://weixin.qq.com/notify/',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/deposit/refund']->postAsync([
  'security' => true,
  'xml' => [
    'appid'           => 'wx8888888888888888',
    'sub_appid'       => 'wx8888888888888888',
    'mch_id'          => '1900000109',
    'sub_mch_id'      => '1900000109',
    'sign_type'       => 'HMAC-SHA256',
    'transaction_id'  => '1217752501201407033233368018',
    'out_trade_no'    => '1217752501201407033233368018',
    'out_refund_no'   => '1217752501201407033233368018',
    'total_fee'       => '100',
    'refund_fee'      => '100',
    'refund_fee_type' => 'CNY',
    'refund_desc'     => '商品已售完',
    'refund_account'  => 'REFUND_SOURCE_RECHARGE_FUNDS',
    'notify_url'      => 'https://weixin.qq.com/notify/',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->deposit->refund->post([
  'security' => true,
  'xml' => [
    'appid'           => 'wx8888888888888888',
    'sub_appid'       => 'wx8888888888888888',
    'mch_id'          => '1900000109',
    'sub_mch_id'      => '1900000109',
    'sign_type'       => 'HMAC-SHA256',
    'transaction_id'  => '1217752501201407033233368018',
    'out_trade_no'    => '1217752501201407033233368018',
    'out_refund_no'   => '1217752501201407033233368018',
    'total_fee'       => '100',
    'refund_fee'      => '100',
    'refund_fee_type' => 'CNY',
    'refund_desc'     => '商品已售完',
    'refund_account'  => 'REFUND_SOURCE_RECHARGE_FUNDS',
    'notify_url'      => 'https://weixin.qq.com/notify/',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/deposit/refund')->post([
  'security' => true,
  'xml' => [
    'appid'           => 'wx8888888888888888',
    'sub_appid'       => 'wx8888888888888888',
    'mch_id'          => '1900000109',
    'sub_mch_id'      => '1900000109',
    'sign_type'       => 'HMAC-SHA256',
    'transaction_id'  => '1217752501201407033233368018',
    'out_trade_no'    => '1217752501201407033233368018',
    'out_refund_no'   => '1217752501201407033233368018',
    'total_fee'       => '100',
    'refund_fee'      => '100',
    'refund_fee_type' => 'CNY',
    'refund_desc'     => '商品已售完',
    'refund_account'  => 'REFUND_SOURCE_RECHARGE_FUNDS',
    'notify_url'      => 'https://weixin.qq.com/notify/',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/deposit/refund']->post([
  'security' => true,
  'xml' => [
    'appid'           => 'wx8888888888888888',
    'sub_appid'       => 'wx8888888888888888',
    'mch_id'          => '1900000109',
    'sub_mch_id'      => '1900000109',
    'sign_type'       => 'HMAC-SHA256',
    'transaction_id'  => '1217752501201407033233368018',
    'out_trade_no'    => '1217752501201407033233368018',
    'out_refund_no'   => '1217752501201407033233368018',
    'total_fee'       => '100',
    'refund_fee'      => '100',
    'refund_fee_type' => 'CNY',
    'refund_desc'     => '商品已售完',
    'refund_account'  => 'REFUND_SOURCE_RECHARGE_FUNDS',
    'notify_url'      => 'https://weixin.qq.com/notify/',
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
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| appid {data-required} | string | 公众账号ID
| mch_id {data-required} | string | 商户号
| sub_appid | string | 子商户公众账号ID
| sub_mch_id | string | 子商户号
| nonce_str {data-required} | string | 随机字符串
| sign {data-required} | string | 签名
| transaction_id {data-required} | string | 微信订单号
| out_trade_no {data-required} | string | 商户订单号
| out_refund_no {data-required} | string | 商户退款单号
| refund_id {data-required} | string | 微信退款单号
| refund_fee {data-required} | integer | 退款金额
| settlement_refund_fee | integer | 应结退款金额
| total_fee {data-required} | integer | 标价金额
| settlement_total_fee | integer | 应结订单金额
| fee_type | string | 标价币种
| cash_fee {data-required} | integer | 现金支付金额
| cash_fee_type | string | 现金支付币种
| cash_refund_fee | integer | 现金退款金额
| coupon_type_$n | string | 代金券类型
| coupon_refund_fee | integer | 代金券退款总金额
| coupon_refund_fee_$n | integer | 单个代金券退款金额
| coupon_refund_count | integer | 退款代金券使用数量
| coupon_refund_id_$n | string | 退款代金券ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/deposit_sl.php?chapter=27_5&index=6)
