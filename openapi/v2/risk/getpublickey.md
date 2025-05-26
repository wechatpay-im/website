---
title: 获取RSA加密公钥
description: 调用获取RSA公钥API获取RSA公钥，用于加密付款到银行业务接口中的用户敏感信息。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri {data-required} | string | 声明接入点<br/>固定值`https://fraud.mch.weixin.qq.com/`
| security {data-required} | `true` | 声明加载商户API证书
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| mch_id {data-required data-indent=1} | string | 商户号
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`MD5` \| `HMAC-SHA256` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->risk->getpublickey->postAsync([
  'base_uri' => 'https://fraud.mch.weixin.qq.com/', // 接入点
  'security' => true,
  'xml' => [
    'mch_id'    => '1900000109',
    'sign_type' => 'MD5',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/risk/getpublickey')->postAsync([
  'base_uri' => 'https://fraud.mch.weixin.qq.com/', // 接入点
  'security' => true,
  'xml' => [
    'mch_id'    => '1900000109',
    'sign_type' => 'MD5',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/risk/getpublickey']->postAsync([
  'base_uri' => 'https://fraud.mch.weixin.qq.com/', // 接入点
  'security' => true,
  'xml' => [
    'mch_id'    => '1900000109',
    'sign_type' => 'MD5',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->risk->getpublickey->post([
  'base_uri' => 'https://fraud.mch.weixin.qq.com/', // 接入点
  'security' => true,
  'xml' => [
    'mch_id'    => '1900000109',
    'sign_type' => 'MD5',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/risk/getpublickey')->post([
  'base_uri' => 'https://fraud.mch.weixin.qq.com/', // 接入点
  'security' => true,
  'xml' => [
    'mch_id'    => '1900000109',
    'sign_type' => 'MD5',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/risk/getpublickey']->post([
  'base_uri' => 'https://fraud.mch.weixin.qq.com/', // 接入点
  'security' => true,
  'xml' => [
    'mch_id'    => '1900000109',
    'sign_type' => 'MD5',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 错误码描述
| error_code | string | 错误码
| error_code_des | string | 错误代码描述
| result_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| mch_id | string | 商户号
| pub_key | string | RSA公钥

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011941097)
