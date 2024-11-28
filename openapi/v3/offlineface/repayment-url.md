---
title: 获取还款链接接口
description: 建议authinfo每1小时内获取一次，否则当设备断网且恰好authinfo过期，则会导致设备不可用。
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

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/wxfacepay/develop/access-specifications.html)
