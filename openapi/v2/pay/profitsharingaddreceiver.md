---
title: 添加分账接收方
description: 服务商代子商户发起添加分账接收方请求，后续可通过发起分账请求将结算后的钱分到该分账接收方。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| mch_id {data-indent=1} | string | 商户号
| sub_mch_id {data-indent=1} | string | 子商户号
| appid {data-indent=1} | string | 公众账号ID
| sub_appid {data-indent=1} | string | 子商户公众账号ID
| sign_type {data-indent=1} | string | 签名类型
| receiver {data-indent=1} | string | +分账接收方;分账接收方对象，json格式

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->pay->profitsharingaddreceiver->postAsync([
  'xml' => [
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'sign_type' => 'HMAC-SHA256',
    'receiver' => '{"type": "MERCHANT_ID","account": "190001001","name": "示例商户全称","relation_type": "STORE_OWNER"}',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/pay/profitsharingaddreceiver')->postAsync([
  'xml' => [
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'sign_type' => 'HMAC-SHA256',
    'receiver' => '{"type": "MERCHANT_ID","account": "190001001","name": "示例商户全称","relation_type": "STORE_OWNER"}',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/pay/profitsharingaddreceiver']->postAsync([
  'xml' => [
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'sign_type' => 'HMAC-SHA256',
    'receiver' => '{"type": "MERCHANT_ID","account": "190001001","name": "示例商户全称","relation_type": "STORE_OWNER"}',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->pay->profitsharingaddreceiver->post([
  'xml' => [
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'sign_type' => 'HMAC-SHA256',
    'receiver' => '{"type": "MERCHANT_ID","account": "190001001","name": "示例商户全称","relation_type": "STORE_OWNER"}',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/pay/profitsharingaddreceiver')->post([
  'xml' => [
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'sign_type' => 'HMAC-SHA256',
    'receiver' => '{"type": "MERCHANT_ID","account": "190001001","name": "示例商户全称","relation_type": "STORE_OWNER"}',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/pay/profitsharingaddreceiver']->post([
  'xml' => [
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'sign_type' => 'HMAC-SHA256',
    'receiver' => '{"type": "MERCHANT_ID","account": "190001001","name": "示例商户全称","relation_type": "STORE_OWNER"}',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_appid | string | 子商户公众账号ID
| sub_mch_id | string | 子商户号
| return_code | string | 返回状态码
| return_msg | string | 返回信息
| appid | string | 公众账号ID
| mch_id | string | 商户号
| nonce_str | string | 随机字符串
| sign | string | 签名
| result_code | string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| receiver | string | 分账接收方

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/allocation_sl.php?chapter=25_3&index=4)
