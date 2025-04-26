---
title: 获取平台证书列表
description: 获取商户当前可用的平台证书列表。微信支付提供该接口，帮助商户后台系统实现平台证书的平滑更换。
next:
  text: 回调通知
  link: /webhook/
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| -- | -- | --
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数(可选)
| algorithm_type {data-indent=1} | string |平台证书算法类型<br/>`SM2`\|`RSA`\|`ALL`枚举值之一<br/>默认为`RSA`

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->certificates->getAsync([
  'query' => [
    'algorithm_type' => 'RSA',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string)$response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/certificates')->getAsync([
  'query' => [
    'algorithm_type' => 'RSA',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string)$response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/certificates']->getAsync([
  'query' => [
    'algorithm_type' => 'RSA',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string)$response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->certificates->get([
  'query' => [
    'algorithm_type' => 'RSA',
  ],
]);
print_r(json_decode((string)$response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/certificates')->get([
  'query' => [
    'algorithm_type' => 'RSA',
  ],
]);
print_r(json_decode((string)$response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/certificates']->get([
  'query' => [
    'algorithm_type' => 'RSA',
  ],
]);
print_r(json_decode((string)$response->getBody(), true));
```
:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| -- | -- | --
| data {data-required} | object[] {data-tooltip="对应PHP的array"} | 平台证书列表
| serial_no {data-required data-indent=1} | string | 证书序列号
| effective_time {data-required data-indent=1} | string | 证书启用时间
| expire_time {data-required data-indent=1} | string | 证书弃用时间
| encrypt_certificate {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 证书信息
| algorithm {data-required data-indent=2} | string | 加密证书的算法
| nonce {data-required data-indent=2} | string | 加密证书的随机串
| associated_data {data-required data-indent=2} | string | 加密证书的附加数据<br/>固定为`certificate`
| ciphertext {data-required data-indent=2} | string | 加密后的证书内容

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012551764) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012715700)
