---
title: 查询订单
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| version {data-indent=1} | string | 接口版本号
| appid {data-required data-indent=1} | string | 公众账号ID
| sub_appid {data-indent=1} | string | 子商户公众账号ID
| mch_id {data-required data-indent=1} | string | 商户号
| sub_mch_id {data-indent=1} | string | 子商户号
| transaction_id {data-required data-indent=1} | string | 微信订单号
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| sign_type {data-indent=1} | string | 签名类型

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->pay->facepayquery->postAsync([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1230000109',
    'sub_mch_id' => '1900000100',
    'transaction_id' => '1009660380201506130728806387',
    'out_trade_no' => '20150806125346',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/pay/facepayquery')->postAsync([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1230000109',
    'sub_mch_id' => '1900000100',
    'transaction_id' => '1009660380201506130728806387',
    'out_trade_no' => '20150806125346',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/pay/facepayquery']->postAsync([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1230000109',
    'sub_mch_id' => '1900000100',
    'transaction_id' => '1009660380201506130728806387',
    'out_trade_no' => '20150806125346',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->pay->facepayquery->post([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1230000109',
    'sub_mch_id' => '1900000100',
    'transaction_id' => '1009660380201506130728806387',
    'out_trade_no' => '20150806125346',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/pay/facepayquery')->post([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1230000109',
    'sub_mch_id' => '1900000100',
    'transaction_id' => '1009660380201506130728806387',
    'out_trade_no' => '20150806125346',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/pay/facepayquery']->post([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1230000109',
    'sub_mch_id' => '1900000100',
    'transaction_id' => '1009660380201506130728806387',
    'out_trade_no' => '20150806125346',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required}| string | 返回状态码
| return_msg {data-required}| string | 返回信息
| appid {data-required}| string | 公众账号ID
| sub_appid | string | 子商户公众账号ID
| mch_id {data-required}| string | 商户号
| sub_mch_id | string | 子商户号
| nonce_str {data-required}| string | 随机字符串
| sign {data-required}| string | 签名
| result_code {data-required}| string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| device_info | string | 设备号
| openid {data-required}| string | 用户标识
| is_subscribe {data-required}| string | 是否关注公众账号
| sub_openid | string | 用户子标识
| sub_is_subscribe | string | 是否关注子公众账号
| trade_type {data-required}| string | 交易类型
| trade_state {data-required}| string | 交易状态
| bank_type {data-required}| string | 付款银行
| total_fee {data-required}| integer | 标价金额
| settlement_total_fee | integer | 应结订单金额
| fee_type | string | 标价币种
| cash_fee {data-required}| integer | 现金支付金额
| cash_fee_type | string | 现金支付币种
| coupon_fee | integer | 代金券金额
| coupon_count | integer | 代金券使用数量
| coupon_type_$n | string | 代金券类型
| coupon_id_$n | string | 代金券ID
| coupon_fee_$n | integer | 单个代金券支付金额
| transaction_id {data-required}| string | 微信支付订单号
| out_trade_no {data-required}| string | 商户订单号
| attach | string | 附加数据
| time_end {data-required}| string | 支付完成时间
| trade_state_desc {data-required}| string | 交易状态描述
| promotion_detail | string | 营销详情列表，使返回值为Json格式
| consume_fee | integer | 押金消费金额

{.im-table #response}

参阅 [官方人脸支付文档](https://share.weiyun.com/5dxUgCw)
