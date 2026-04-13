---
title: 商户签名验签／加解密测试
description: 为商户提供签名、验签、加密、解密的测试能力。商户可以选择用平台证书签名，加密，也可以选择微信支付公钥签名，加密。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| notify_url {data-indent=1} | string | 商户回调地址
| echo_message {data-required data-indent=1} | string | 回显信息
| encrypted_echo_message {data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 平台证书或微信支付公钥加密测试字段
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->security->echo->postAsync([
  'json' => [
    'notify_url'             => 'https://www.weixin.qq.com/v3/test',
    'echo_message'           => 'hello',
    'encrypted_echo_message' => 'Fx9mh7K5sjqHxxQcgDVhnJ9QdS4nKfcUbuAOj',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/security/echo')->postAsync([
  'json' => [
    'notify_url'             => 'https://www.weixin.qq.com/v3/test',
    'echo_message'           => 'hello',
    'encrypted_echo_message' => 'Fx9mh7K5sjqHxxQcgDVhnJ9QdS4nKfcUbuAOj',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/security/echo']->postAsync([
  'json' => [
    'notify_url'             => 'https://www.weixin.qq.com/v3/test',
    'echo_message'           => 'hello',
    'encrypted_echo_message' => 'Fx9mh7K5sjqHxxQcgDVhnJ9QdS4nKfcUbuAOj',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->security->echo->post([
  'json' => [
    'notify_url'             => 'https://www.weixin.qq.com/v3/test',
    'echo_message'           => 'hello',
    'encrypted_echo_message' => 'Fx9mh7K5sjqHxxQcgDVhnJ9QdS4nKfcUbuAOj',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/security/echo')->post([
  'json' => [
    'notify_url'             => 'https://www.weixin.qq.com/v3/test',
    'echo_message'           => 'hello',
    'encrypted_echo_message' => 'Fx9mh7K5sjqHxxQcgDVhnJ9QdS4nKfcUbuAOj',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/security/echo']->post([
  'json' => [
    'notify_url'             => 'https://www.weixin.qq.com/v3/test',
    'echo_message'           => 'hello',
    'encrypted_echo_message' => 'Fx9mh7K5sjqHxxQcgDVhnJ9QdS4nKfcUbuAOj',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| echo_message {data-required} | string | 回显信息
| encrypted_echo_message | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 平台证书或微信支付公钥加密测试字段

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4014551946) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015139289)
