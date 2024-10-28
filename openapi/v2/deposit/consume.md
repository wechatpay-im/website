---
title: 消费押金
description: 微信支付根据商户指令，将用户消费金额扣除手续费后结算给指定商户，剩余金额原路退还给用户，并生成押金退款交易记录，给用户下发押金退还发起通知，并更改押金支付的交易记录。用户押金退还到账后，下发押金退还到账通知。若全部消费，则下发押金全部消费通知;
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| appid {data-indent=1} | string | 公众账号ID
| sub_appid {data-indent=1} | string | 子商户公众账号ID
| mch_id {data-indent=1} | string | 商户号
| sub_mch_id {data-indent=1} | string | 子商户号
| transaction_id {data-indent=1} | string | 微信订单号
| out_trade_no {data-indent=1} | string | 商户订单号
| total_fee {data-indent=1} | integer | 押金总金额
| consume_fee {data-indent=1} | integer | 消费金额
| fee_type {data-indent=1} | string | 货币类型
| sign_type {data-indent=1} | string | 签名类型
| security | boolean | 声明加载商户API证书<br/>固定值`true`

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->deposit->consume->postAsync([
  'xml' => [
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000100',
    'transaction_id' => '013467007045764',
    'out_trade_no' => '1217752501201407033233368018',
    'total_fee' => '888',
    'consume_fee' => '888',
    'fee_type' => 'CNY',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/deposit/consume')->postAsync([
  'xml' => [
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000100',
    'transaction_id' => '013467007045764',
    'out_trade_no' => '1217752501201407033233368018',
    'total_fee' => '888',
    'consume_fee' => '888',
    'fee_type' => 'CNY',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/deposit/consume']->postAsync([
  'xml' => [
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000100',
    'transaction_id' => '013467007045764',
    'out_trade_no' => '1217752501201407033233368018',
    'total_fee' => '888',
    'consume_fee' => '888',
    'fee_type' => 'CNY',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->deposit->consume->post([
  'xml' => [
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000100',
    'transaction_id' => '013467007045764',
    'out_trade_no' => '1217752501201407033233368018',
    'total_fee' => '888',
    'consume_fee' => '888',
    'fee_type' => 'CNY',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/deposit/consume')->post([
  'xml' => [
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000100',
    'transaction_id' => '013467007045764',
    'out_trade_no' => '1217752501201407033233368018',
    'total_fee' => '888',
    'consume_fee' => '888',
    'fee_type' => 'CNY',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/deposit/consume']->post([
  'xml' => [
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000100',
    'transaction_id' => '013467007045764',
    'out_trade_no' => '1217752501201407033233368018',
    'total_fee' => '888',
    'consume_fee' => '888',
    'fee_type' => 'CNY',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code | string | 返回状态码
| return_msg | string | 返回信息
| appid | string | 公众账号ID
| sub_appid | string | 子商户公众账号ID
| mch_id | string | 商户号
| sub_mch_id | string | 子商户号
| nonce_str | string | 随机字符串
| sign | string | 签名
| result_code | string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| transaction_id | string | 微信订单号
| out_trade_no | string | 商户订单号
| total_fee | integer | 押金总金额
| consume_fee | integer | 消费金额
| fee_type | string | 货币类型

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/deposit_sl.php?chapter=27_4&index=5)
