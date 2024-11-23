---
title: 商户预授权
description: 商户预授权
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| service_id {data-required data-indent=1} | string | 服务id
| appid {data-required data-indent=1} | string | 公众号id
| authorization_code {data-required data-indent=1} | string | 授权协议号
| notify_url {data-indent=1} | string | 通知地址

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->permissions->postAsync([
  'json' => [
    'service_id' => '500001',
    'appid' => 'wxd678efh567hg6787',
    'authorization_code' => '1234323JKHDFE1243252',
    'notify_url' => 'http://www.qq.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/permissions')->postAsync([
  'json' => [
    'service_id' => '500001',
    'appid' => 'wxd678efh567hg6787',
    'authorization_code' => '1234323JKHDFE1243252',
    'notify_url' => 'http://www.qq.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/permissions']->postAsync([
  'json' => [
    'service_id' => '500001',
    'appid' => 'wxd678efh567hg6787',
    'authorization_code' => '1234323JKHDFE1243252',
    'notify_url' => 'http://www.qq.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->permissions->post([
  'json' => [
    'service_id' => '500001',
    'appid' => 'wxd678efh567hg6787',
    'authorization_code' => '1234323JKHDFE1243252',
    'notify_url' => 'http://www.qq.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/permissions')->post([
  'json' => [
    'service_id' => '500001',
    'appid' => 'wxd678efh567hg6787',
    'authorization_code' => '1234323JKHDFE1243252',
    'notify_url' => 'http://www.qq.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/permissions']->post([
  'json' => [
    'service_id' => '500001',
    'appid' => 'wxd678efh567hg6787',
    'authorization_code' => '1234323JKHDFE1243252',
    'notify_url' => 'http://www.qq.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| apply_permissions_token {data-required}| string | 预授权token

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter9_2.shtml) [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-auth/apply-permissions.html)
