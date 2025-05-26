---
title: 撤销订单
description: 调用支付接口后请勿立即调用撤销订单API，建议支付后至少15s后再调用撤销订单接口。
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
| transaction_id {data-indent=1} | string | 微信订单号
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| sign_type {data-indent=1} | string | 签名类型<br/>`MD5` \| `HMAC-SHA256` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->secapi->pay->reverse->postAsync([
  'security' => true,
  'xml' => [
    'appid'          => 'wx8888888888888888',
    'sub_appid'      => 'wx8888888888888888',
    'mch_id'         => '1900000109',
    'sub_mch_id'     => '1900000100',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no'   => '1217752501201407033233368018',
    'sign_type'      => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/secapi/pay/reverse')->postAsync([
  'security' => true,
  'xml' => [
    'appid'          => 'wx8888888888888888',
    'sub_appid'      => 'wx8888888888888888',
    'mch_id'         => '1900000109',
    'sub_mch_id'     => '1900000100',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no'   => '1217752501201407033233368018',
    'sign_type'      => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/secapi/pay/reverse']->postAsync([
  'security' => true,
  'xml' => [
    'appid'          => 'wx8888888888888888',
    'sub_appid'      => 'wx8888888888888888',
    'mch_id'         => '1900000109',
    'sub_mch_id'     => '1900000100',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no'   => '1217752501201407033233368018',
    'sign_type'      => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->secapi->pay->reverse->post([
  'security' => true,
  'xml' => [
    'appid'          => 'wx8888888888888888',
    'sub_appid'      => 'wx8888888888888888',
    'mch_id'         => '1900000109',
    'sub_mch_id'     => '1900000100',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no'   => '1217752501201407033233368018',
    'sign_type'      => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/secapi/pay/reverse')->post([
  'security' => true,
  'xml' => [
    'appid'          => 'wx8888888888888888',
    'sub_appid'      => 'wx8888888888888888',
    'mch_id'         => '1900000109',
    'sub_mch_id'     => '1900000100',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no'   => '1217752501201407033233368018',
    'sign_type'      => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/secapi/pay/reverse']->post([
  'security' => true,
  'xml' => [
    'appid'          => 'wx8888888888888888',
    'sub_appid'      => 'wx8888888888888888',
    'mch_id'         => '1900000109',
    'sub_mch_id'     => '1900000100',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no'   => '1217752501201407033233368018',
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
| err_code_des | string | 错误描述
| recall {data-required} | string | 是否重调<br/>`Y` \| `N` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011937361) [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4012218602) [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013634900)
