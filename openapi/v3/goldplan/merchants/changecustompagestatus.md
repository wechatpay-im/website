---
title: 商家小票管理
description: 用于服务商/服务商使用此接口为特约商户开通或关闭商家小票功能。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 子商户ID
| operation_type {data-indent=1} | string | 操作类型

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->goldplan->merchants->changecustompagestatus->postAsync([
  'json' => [
    'sub_mchid' => '1234567890',
    'operation_type' => 'OPEN',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/goldplan/merchants/changecustompagestatus')->postAsync([
  'json' => [
    'sub_mchid' => '1234567890',
    'operation_type' => 'OPEN',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/goldplan/merchants/changecustompagestatus']->postAsync([
  'json' => [
    'sub_mchid' => '1234567890',
    'operation_type' => 'OPEN',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->goldplan->merchants->changecustompagestatus->post([
  'json' => [
    'sub_mchid' => '1234567890',
    'operation_type' => 'OPEN',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/goldplan/merchants/changecustompagestatus')->post([
  'json' => [
    'sub_mchid' => '1234567890',
    'operation_type' => 'OPEN',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/goldplan/merchants/changecustompagestatus']->post([
  'json' => [
    'sub_mchid' => '1234567890',
    'operation_type' => 'OPEN',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 子商户ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/goldplan/chapter3_2.shtml)
