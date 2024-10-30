---
title: 获取平台证书列表
description: 获取商户当前可用的平台证书列表。微信支付提供该接口，帮助商户后台系统实现平台证书的平滑更换。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->certificates->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/certificates')->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/certificates']->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->certificates->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/certificates')->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/certificates']->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| data | object[] | 平台证书列表
| serial_no {data-indent=1} | string | 证书序列号
| effective_time {data-indent=1} | string | 证书启用时间
| expire_time {data-indent=1} | string | 证书弃用时间
| encrypt_certificate {data-indent=1} | object | 证书信息
| algorithm {data-indent=2} | string | 加密证书的算法
| nonce {data-indent=2} | string | 加密证书的随机串
| associated_data {data-indent=2} | string | 加密证书的附加数据
| ciphertext {data-indent=2} | string | 加密后的证书内容

{.im-table #response}

参阅 [官方开发文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter3_1_8.shtml)
