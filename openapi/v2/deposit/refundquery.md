---
title: 查询退款（押金）
description: 提交退款申请后，通过调用该接口查询退款状态。退款有一定延时，用零钱支付的退款20分钟内到账，银行卡支付的退款3个工作日后重新查询退款状态;
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| appid {data-indent=1} | string | 公众账号ID
| mch_id {data-indent=1} | string | 商户号
| sub_appid {data-indent=1} | string | 子商户公众账号ID
| sub_mch_id {data-indent=1} | string | 子商户号
| sign_type {data-indent=1} | string | 签名类型
| transaction_id {data-indent=1} | string | 微信订单号
| out_trade_no {data-indent=1} | string | 商户订单号
| out_refund_no {data-indent=1} | string | 商户退款单号
| refund_id {data-indent=1} | string | 微信退款单号
| offset {data-indent=1} | integer | 偏移量

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->deposit->refundquery->postAsync([
  'xml' => [
    'appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
    'sub_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no' => '1217752501201407033233368018',
    'out_refund_no' => '1217752501201407033233368018',
    'refund_id' => '1217752501201407033233368018',
    'offset' => '15',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/deposit/refundquery')->postAsync([
  'xml' => [
    'appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
    'sub_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no' => '1217752501201407033233368018',
    'out_refund_no' => '1217752501201407033233368018',
    'refund_id' => '1217752501201407033233368018',
    'offset' => '15',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/deposit/refundquery']->postAsync([
  'xml' => [
    'appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
    'sub_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no' => '1217752501201407033233368018',
    'out_refund_no' => '1217752501201407033233368018',
    'refund_id' => '1217752501201407033233368018',
    'offset' => '15',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->deposit->refundquery->post([
  'xml' => [
    'appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
    'sub_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no' => '1217752501201407033233368018',
    'out_refund_no' => '1217752501201407033233368018',
    'refund_id' => '1217752501201407033233368018',
    'offset' => '15',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/deposit/refundquery')->post([
  'xml' => [
    'appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
    'sub_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no' => '1217752501201407033233368018',
    'out_refund_no' => '1217752501201407033233368018',
    'refund_id' => '1217752501201407033233368018',
    'offset' => '15',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/deposit/refundquery']->post([
  'xml' => [
    'appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
    'sub_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no' => '1217752501201407033233368018',
    'out_refund_no' => '1217752501201407033233368018',
    'refund_id' => '1217752501201407033233368018',
    'offset' => '15',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code | string | 返回状态码
| return_msg | string | 返回信息
| result_code | string | 业务结果
| err_code | string | 错误码
| err_code_des | string | 错误描述
| appid | string | 公众账号ID
| mch_id | string | 商户号
| sub_appid | string | 子商户公众账号ID
| sub_mch_id | string | 子商户号
| nonce_str | string | 随机字符串
| sign | string | 签名
| total_refund_count | integer | 订单总退款次数
| transaction_id | string | 微信订单号
| out_trade_no | string | 商户订单号
| total_fee | integer | 订单金额
| settlement_total_fee | integer | 应结订单金额
| fee_type | string | 货币种类
| cash_fee | integer | 现金支付金额
| refund_count | integer | 退款笔数
| out_refund_no_$n | string | 商户退款单号
| refund_id_$n | string | 微信退款单号
| refund_channel_$n | string | 退款渠道
| refund_fee_$n | integer | 申请退款金额
| settlement_refund_fee_$n | integer | 退款金额
| coupon_type_$n_$m | string | 代金券类型
| coupon_refund_fee_$n | integer | 总代金券退款金额
| coupon_refund_count_$n | integer | 退款代金券使用数量
| coupon_refund_id_$n_$m | string | 退款代金券ID
| coupon_refund_fee_$n_$m | integer | 单个代金券退款金额
| refund_status_$n | string | 退款状态
| refund_account_$n | string | 退款资金来源
| refund_recv_accout_$n | string | 退款入账账户
| refund_success_time_$n | string | 退款成功时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/deposit_sl.php?chapter=27_6&index=7)
