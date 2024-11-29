---
title: 获取还款链接接口
description: 服务商后台获取垫资的还款链接、线下向用户核实后，人工转发给还款的微信号；然后通过后台接口进行解约，让用户使用其他微信号重新签约。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_user_id {data-required data-indent=1} | string | 商户用户ID
| organization_id {data-required data-indent=1} | string | 机构id

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->offlineface->repaymentUrl->postAsync([
  'json' => [
    'out_user_id'     => '',
    'organization_id' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/offlineface/repayment-url')->postAsync([
  'json' => [
    'out_user_id'     => '',
    'organization_id' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/offlineface/repayment-url']->postAsync([
  'json' => [
    'out_user_id'     => '',
    'organization_id' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->offlineface->repaymentUrl->post([
  'json' => [
    'out_user_id'     => '',
    'organization_id' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/offlineface/repayment-url')->post([
  'json' => [
    'out_user_id'     => '',
    'organization_id' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/offlineface/repayment-url']->post([
  'json' => [
    'out_user_id'     => '',
    'organization_id' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| repayment_url {data-required} | string | 还款链接
| expire_at {data-required} | string | 链接过期时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/wxfacepay/develop/k12-development-guidelines.html#_1-3-%E8%A7%A3%E7%BA%A6)
