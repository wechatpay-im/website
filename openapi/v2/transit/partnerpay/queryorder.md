---
title: 查询订单
description: 该接口仅提供微信代扣订单的查询，商户可以通过该接口主动查询微信代扣订单状态，完成下一步的业务逻辑。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| appid {data-indent=1} | string | 请求appid
| sub_appid {data-indent=1} | string | 子商户公众账号id
| mch_id {data-indent=1} | string | 商户号
| sub_mch_id {data-indent=1} | string | 子商户号
| transaction_id {data-indent=1} | string | 微信订单号
| sign_type {data-indent=1} | string | 签名类型

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->transit->partnerpay->queryorder->postAsync([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'sub_appid' => 'wxcbda96de0b165489',
    'mch_id' => '10000098',
    'sub_mch_id' => '1900000109',
    'transaction_id' => '1009660380201506130728806387',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/transit/partnerpay/queryorder')->postAsync([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'sub_appid' => 'wxcbda96de0b165489',
    'mch_id' => '10000098',
    'sub_mch_id' => '1900000109',
    'transaction_id' => '1009660380201506130728806387',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/transit/partnerpay/queryorder']->postAsync([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'sub_appid' => 'wxcbda96de0b165489',
    'mch_id' => '10000098',
    'sub_mch_id' => '1900000109',
    'transaction_id' => '1009660380201506130728806387',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->transit->partnerpay->queryorder->post([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'sub_appid' => 'wxcbda96de0b165489',
    'mch_id' => '10000098',
    'sub_mch_id' => '1900000109',
    'transaction_id' => '1009660380201506130728806387',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/transit/partnerpay/queryorder')->post([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'sub_appid' => 'wxcbda96de0b165489',
    'mch_id' => '10000098',
    'sub_mch_id' => '1900000109',
    'transaction_id' => '1009660380201506130728806387',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/transit/partnerpay/queryorder']->post([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'sub_appid' => 'wxcbda96de0b165489',
    'mch_id' => '10000098',
    'sub_mch_id' => '1900000109',
    'transaction_id' => '1009660380201506130728806387',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code | string | 返回状态码
| return_msg | string | 返回信息
| appid | string | 请求appid
| sub_appid | string | 子商户公众账号id
| mch_id | string | 商户号
| sub_mch_id | string | 子商户号
| nonce_str | string | 随机字符串
| sign | string | 签名
| result_code | string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| device_info | string | 设备号
| openid | string | 用户标识
| sub_openid | string | 用户子标识
| is_subscribe | string | 是否关注公众账号
| trade_type | string | 交易类型
| trade_state | string | 交易状态
| bank_type | string | 付款银行
| total_fee | integer | 总金额
| fee_type | string | 货币种类
| cash_fee | integer | 现金支付金额
| cash_fee_type | string | 现金支付货币类型
| settlement_total_fee | integer | 应结订单金额
| coupon_fee | integer | 代金券或立减优惠金额
| coupon_count | integer | 代金券或立减优惠使用数量
| coupon_type_$n | string | 代金券类型
| coupon_id_$n | string | 代金券或立减优惠ID
| coupon_fee_$n | integer | 单个代金券或立减优惠支付金额
| transaction_id | string | 微信支付订单号
| out_trade_no | string | 商户订单号
| attach | string | 附加数据
| time_end | string | 支付完成时间
| trade_state_desc | string | 交易状态描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/vehicle_v2_sl.php?chapter=20_96&index=7&p=202)
