---
title: 发起不活跃商户身份核实
description: 服务商可以通过该接口，代特约商户发起不活跃商户身份核实，并得到核实单单号。 此接口采用异步处理模式，即在接收到服务商请求后，优先受理请求再异步处理，最终的核实结果可以通过“查询不活跃商户身份核实结果”接口获取。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-required data-indent=1} | string | 特约商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->compliance->inactiveMerchantIdentityVerification->merchants->postAsync([
  'json' => [
    'sub_mchid' => '1900009231',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/compliance/inactive-merchant-identity-verification/merchants')->postAsync([
  'json' => [
    'sub_mchid' => '1900009231',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/compliance/inactive-merchant-identity-verification/merchants']->postAsync([
  'json' => [
    'sub_mchid' => '1900009231',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->compliance->inactiveMerchantIdentityVerification->merchants->post([
  'json' => [
    'sub_mchid' => '1900009231',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/compliance/inactive-merchant-identity-verification/merchants')->post([
  'json' => [
    'sub_mchid' => '1900009231',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/compliance/inactive-merchant-identity-verification/merchants']->post([
  'json' => [
    'sub_mchid' => '1900009231',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| verification_id {data-required} | string | 核实单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012471357)
