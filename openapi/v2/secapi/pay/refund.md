---
title: 申请退款
description: 一笔退款失败后重新提交，请不要更换退款单号，请使用原商户退款单号
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
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
| security {data-required} | `true` | 声明加载商户API证书

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->secapi->pay->refund->postAsync([
  'xml' => [
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no' => '1217752501201407033233368018',
    'out_refund_no' => '1217752501201407033233368018',
    'total_fee' => '100',
    'refund_fee' => '100',
    'refund_fee_type' => 'CNY',
    'refund_desc' => '商品已售完',
    'refund_account' => 'REFUND_SOURCE_RECHARGE_FUNDS',
    'notify_url' => 'https://weixin.qq.com/notify/',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/secapi/pay/refund')->postAsync([
  'xml' => [
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no' => '1217752501201407033233368018',
    'out_refund_no' => '1217752501201407033233368018',
    'total_fee' => '100',
    'refund_fee' => '100',
    'refund_fee_type' => 'CNY',
    'refund_desc' => '商品已售完',
    'refund_account' => 'REFUND_SOURCE_RECHARGE_FUNDS',
    'notify_url' => 'https://weixin.qq.com/notify/',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/secapi/pay/refund']->postAsync([
  'xml' => [
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no' => '1217752501201407033233368018',
    'out_refund_no' => '1217752501201407033233368018',
    'total_fee' => '100',
    'refund_fee' => '100',
    'refund_fee_type' => 'CNY',
    'refund_desc' => '商品已售完',
    'refund_account' => 'REFUND_SOURCE_RECHARGE_FUNDS',
    'notify_url' => 'https://weixin.qq.com/notify/',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->secapi->pay->refund->post([
  'xml' => [
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no' => '1217752501201407033233368018',
    'out_refund_no' => '1217752501201407033233368018',
    'total_fee' => '100',
    'refund_fee' => '100',
    'refund_fee_type' => 'CNY',
    'refund_desc' => '商品已售完',
    'refund_account' => 'REFUND_SOURCE_RECHARGE_FUNDS',
    'notify_url' => 'https://weixin.qq.com/notify/',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/secapi/pay/refund')->post([
  'xml' => [
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no' => '1217752501201407033233368018',
    'out_refund_no' => '1217752501201407033233368018',
    'total_fee' => '100',
    'refund_fee' => '100',
    'refund_fee_type' => 'CNY',
    'refund_desc' => '商品已售完',
    'refund_account' => 'REFUND_SOURCE_RECHARGE_FUNDS',
    'notify_url' => 'https://weixin.qq.com/notify/',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/secapi/pay/refund']->post([
  'xml' => [
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no' => '1217752501201407033233368018',
    'out_refund_no' => '1217752501201407033233368018',
    'total_fee' => '100',
    'refund_fee' => '100',
    'refund_fee_type' => 'CNY',
    'refund_desc' => '商品已售完',
    'refund_account' => 'REFUND_SOURCE_RECHARGE_FUNDS',
    'notify_url' => 'https://weixin.qq.com/notify/',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required}| string | 返回状态码
| return_msg {data-required}| string | 返回信息
| result_code {data-required}| string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| appid {data-required}| string | 公众账号ID
| mch_id {data-required}| string | 商户号
| sub_appid | string | 子商户公众账号ID
| sub_mch_id | string | 子商户号
| nonce_str {data-required}| string | 随机字符串
| sign {data-required}| string | 签名
| transaction_id {data-required}| string | 微信订单号
| out_trade_no {data-required}| string | 商户订单号
| out_refund_no {data-required}| string | 商户退款单号
| refund_id {data-required}| string | 微信退款单号
| refund_fee {data-required}| integer | 退款金额
| settlement_refund_fee | integer | 应结退款金额
| total_fee {data-required}| integer | 标价金额
| settlement_total_fee | integer | 应结订单金额
| fee_type | string | 标价币种
| cash_fee {data-required}| integer | 现金支付金额
| cash_fee_type | string | 现金支付币种
| cash_refund_fee | integer | 现金退款金额
| coupon_type_$n | string | 代金券类型
| coupon_refund_fee | integer | 代金券退款总金额
| coupon_refund_fee_$n | integer | 单个代金券退款金额
| coupon_refund_count | integer | 退款代金券使用数量
| coupon_refund_id_$n | string | 退款代金券ID

{.im-table #response}

参阅 [官方付款码文档](https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=9_4) [官方JSAPI文档](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_4) [官方NATIVE文档](https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_4) [官方APP文档](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_4&index=6) [官方H5文档](https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_4&index=4) [官方小程序支付文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_4) [官方刷脸支付文档](https://share.weiyun.com/5dxUgCw)
