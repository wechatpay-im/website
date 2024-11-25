---
title: 查询订单待分账金额
description: 商户可通过调用此接口查询订单剩余待分金额。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| mch_id {data-required data-indent=1} | string | 商户号
| transaction_id {data-required data-indent=1} | string | 微信订单号
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->pay->profitsharingorderamountquery->postAsync([
  'xml' => [
    'mch_id' => '1900000100',
    'transaction_id' => '4208450740201411110007820472',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/pay/profitsharingorderamountquery')->postAsync([
  'xml' => [
    'mch_id' => '1900000100',
    'transaction_id' => '4208450740201411110007820472',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/pay/profitsharingorderamountquery']->postAsync([
  'xml' => [
    'mch_id' => '1900000100',
    'transaction_id' => '4208450740201411110007820472',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->pay->profitsharingorderamountquery->post([
  'xml' => [
    'mch_id' => '1900000100',
    'transaction_id' => '4208450740201411110007820472',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/pay/profitsharingorderamountquery')->post([
  'xml' => [
    'mch_id' => '1900000100',
    'transaction_id' => '4208450740201411110007820472',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/pay/profitsharingorderamountquery']->post([
  'xml' => [
    'mch_id' => '1900000100',
    'transaction_id' => '4208450740201411110007820472',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required}| string | 返回状态码
| return_msg | string | 返回信息
| mch_id | string | 商户号
| transaction_id {data-required}| string | 微信订单号
| unsplit_amount | integer | 订单剩余待分金额
| nonce_str | string | 随机字符串
| sign | string | 签名

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/allocation.php?chapter=27_10&index=7)
