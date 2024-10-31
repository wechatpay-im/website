---
title: 获取平台证书
description: 调用获取平台证书V2接口之前，请前往微信支付商户平台升级API证书，升级后才可成功调用本接口。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| mch_id {data-indent=1} | string | 商户号
| sign_type {data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->risk->getcertficates->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/risk/getcertficates')->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/risk/getcertficates']->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->risk->getcertficates->post([
  'xml' => [
    'mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/risk/getcertficates')->post([
  'xml' => [
    'mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/risk/getcertficates']->post([
  'xml' => [
    'mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code | string | 返回状态码
| return_msg | string | 错误码描述
| nonce_str | string | 随机字符串
| sign | string | 签名
| error_code | string | 错误码
| error_code_des | string | 错误代码描述
| result_code | string | 返回状态码
| mch_id | string | 商户号
| certificates | string | 平台证书信息

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=19_11)
