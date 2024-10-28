---
title: 合单查单
description: 所有微信支付订单的查询，商户可以通过查询订单接口主动查询订单状态，完成下一步的业务逻辑。**合单查单api只能使用合单单号combine_out_trade_no来查询，如果要使用子订单号查询，请使用公众api中的查单接口。**
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| combine_appid {data-indent=1} | string | 合单appid
| combine_mch_id {data-indent=1} | string | 合单商户号
| sign_type {data-indent=1} | string | 签名类型
| combine_out_trade_no {data-indent=1} | string | 合单商户订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->pay->querycombinedorder->postAsync([
  'xml' => [
    'combine_appid' => 'wx8888888888888888',
    'combine_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'combine_out_trade_no' => '1217752501201407033233368018',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/pay/querycombinedorder')->postAsync([
  'xml' => [
    'combine_appid' => 'wx8888888888888888',
    'combine_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'combine_out_trade_no' => '1217752501201407033233368018',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/pay/querycombinedorder']->postAsync([
  'xml' => [
    'combine_appid' => 'wx8888888888888888',
    'combine_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'combine_out_trade_no' => '1217752501201407033233368018',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->pay->querycombinedorder->post([
  'xml' => [
    'combine_appid' => 'wx8888888888888888',
    'combine_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'combine_out_trade_no' => '1217752501201407033233368018',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/pay/querycombinedorder')->post([
  'xml' => [
    'combine_appid' => 'wx8888888888888888',
    'combine_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'combine_out_trade_no' => '1217752501201407033233368018',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/pay/querycombinedorder']->post([
  'xml' => [
    'combine_appid' => 'wx8888888888888888',
    'combine_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'combine_out_trade_no' => '1217752501201407033233368018',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code | string | 返回状态码
| return_msg | string | 返回信息
| combine_appid | string | 合单appid
| combine_mch_id | string | 合单商户号
| nonce_str | string | 随机字符串
| device_info | string | 设备号
| combine_openid | string | 合单用户标识
| combine_out_trade_no | string | 合单商户订单号
| sign | string | 签名
| result_code | string | 业务结果
| result_msg | string | 业务结果描述
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| sub_order_list | string | +子单信息

{.im-table #response}

参阅 [官方合单支付文档](https://pay.weixin.qq.com/wiki/doc/api/combine.php?chapter=24_3&index=4)
