---
title: 查询订单
description: 该接口仅提供微信代扣订单的查询，商户可以通过该接口主动查询微信代扣订单状态，完成下一步的业务逻辑。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 请求appid
| mch_id {data-required data-indent=1} | string | 商户号
| transaction_id {data-required data-indent=1} | string | 微信订单号
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| sub_appid {data-indent=1} | string | 子商户公众账号ID
| sub_mch_id {data-indent=1} | string | 子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->papay->partner->paporderquery->postAsync([
  'xml' => [
    'appid'          => 'wxcbda96de0b165486',
    'mch_id'         => '10000098',
    'transaction_id' => '1009660380201506130728806387',
    'out_trade_no'   => '20150806125346',
    'sub_appid'      => '',
    'sub_mch_id'     => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/papay/partner/paporderquery')->postAsync([
  'xml' => [
    'appid'          => 'wxcbda96de0b165486',
    'mch_id'         => '10000098',
    'transaction_id' => '1009660380201506130728806387',
    'out_trade_no'   => '20150806125346',
    'sub_appid'      => '',
    'sub_mch_id'     => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/papay/partner/paporderquery']->postAsync([
  'xml' => [
    'appid'          => 'wxcbda96de0b165486',
    'mch_id'         => '10000098',
    'transaction_id' => '1009660380201506130728806387',
    'out_trade_no'   => '20150806125346',
    'sub_appid'      => '',
    'sub_mch_id'     => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->papay->partner->paporderquery->post([
  'xml' => [
    'appid'          => 'wxcbda96de0b165486',
    'mch_id'         => '10000098',
    'transaction_id' => '1009660380201506130728806387',
    'out_trade_no'   => '20150806125346',
    'sub_appid'      => '',
    'sub_mch_id'     => '',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/papay/partner/paporderquery')->post([
  'xml' => [
    'appid'          => 'wxcbda96de0b165486',
    'mch_id'         => '10000098',
    'transaction_id' => '1009660380201506130728806387',
    'out_trade_no'   => '20150806125346',
    'sub_appid'      => '',
    'sub_mch_id'     => '',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/papay/partner/paporderquery']->post([
  'xml' => [
    'appid'          => 'wxcbda96de0b165486',
    'mch_id'         => '10000098',
    'transaction_id' => '1009660380201506130728806387',
    'out_trade_no'   => '20150806125346',
    'sub_appid'      => '',
    'sub_mch_id'     => '',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| appid {data-required} | string | 请求appid
| mch_id {data-required} | string | 商户号
| nonce_str {data-required} | string | 随机字符串
| sign {data-required} | string | 签名
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| device_info | string | 设备号
| openid {data-required} | string | 用户标识
| is_subscribe | string | 是否关注公众账号<br/>`Y` \| `N` 枚举值之一
| trade_type {data-required} | string | 交易类型
| trade_state {data-required} | string | 交易状态<br/>`SUCCESS` \| `REFUND` \| `NOTPAY` \| `CLOSED` \| `REVOKED` \| `USERPAYING` \| `PAYERROR` \| `ACCEPT` 枚举值之一
| bank_type {data-required} | string | 付款银行
| total_fee {data-required} | integer | 总金额
| fee_type | string | 货币种类
| cash_fee {data-required} | integer | 现金支付金额
| cash_fee_type | string | 现金支付货币类型
| coupon_fee | integer | 代金券或立减优惠金额
| coupon_count | integer | 代金券或立减优惠使用数量
| coupon_id_$n | string | 代金券或立减优惠ID
| coupon_fee_$n | integer | 单个代金券或立减优惠支付金额
| transaction_id {data-required} | string | 微信支付订单号
| out_trade_no {data-required} | string | 商户订单号
| attach | string | 附加数据
| time_end {data-required} | string | 支付完成时间
| trade_state_desc {data-required} | string | 交易状态描述
| sub_appid | string | 子商户公众账号ID
| sub_mch_id | string | 子商户号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011988379)
