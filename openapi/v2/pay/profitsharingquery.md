---
title: 查询分账结果
description: 发起分账请求后，可调用此接口查询分账结果；发起分账完结请求后，可调用此接口查询分账完结的执行结果。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| mch_id {data-required data-indent=1} | string | 商户号
| sub_mch_id {data-required data-indent=1} | string | 子商户号
| transaction_id {data-required data-indent=1} | string | 微信订单号
| out_order_no {data-required data-indent=1} | string | 商户分账单号
| sign_type {data-indent=1} | string | 签名类型

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->pay->profitsharingquery->postAsync([
  'xml' => [
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/pay/profitsharingquery')->postAsync([
  'xml' => [
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/pay/profitsharingquery']->postAsync([
  'xml' => [
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->pay->profitsharingquery->post([
  'xml' => [
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/pay/profitsharingquery')->post([
  'xml' => [
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/pay/profitsharingquery']->post([
  'xml' => [
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_appid | string | 子商户公众账号ID
| sub_mch_id | string | 子商户号
| return_code {data-required}| string | 返回状态码
| return_msg | string | 返回信息
| appid {data-required}| string | 公众账号ID
| mch_id {data-required}| string | 商户号
| nonce_str {data-required}| string | 随机字符串
| sign {data-required}| string | 签名
| result_code {data-required}| string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| transaction_id {data-required}| string | 微信订单号
| out_order_no {data-required}| string | 商户分账单号
| order_id {data-required}| string | 微信分账单号
| status {data-required}| string | 分账单状态
| close_reason | string | 关单原因
| receivers {data-required}| string | +分账接收方列表;分账接收方列表，json对象详细说明见下文，仅当查询分账请求结果时，存在本字段
| amount {data-required}| integer | 分账金额
| description {data-required}| string | 分账描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/allocation_sl.php?chapter=25_2&index=3)
