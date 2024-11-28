---
title: 商户预授权
description: 商户预授权
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| service_id {data-required data-indent=1} | string | 服务ID
| appid {data-required data-indent=1} | string | 服务商应用ID
| sub_appid {data-indent=1} | string | 子商户应用ID
| sub_mchid {data-required data-indent=1} | string | 子商户号
| authorization_code {data-required data-indent=1} | string | 授权协议号
| notify_url {data-indent=1} | string | 商户回调地址

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->partner->permissions->postAsync([
  'json' => [
    'service_id'         => 'service_id',
    'appid'              => 'wxd678efh567hg6787',
    'sub_appid'          => 'wxd678efh567hg6787',
    'sub_mchid'          => '1230000109',
    'authorization_code' => '1234323JKHDFE1243252',
    'notify_url'         => 'http://www.qq.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/partner/permissions')->postAsync([
  'json' => [
    'service_id'         => 'service_id',
    'appid'              => 'wxd678efh567hg6787',
    'sub_appid'          => 'wxd678efh567hg6787',
    'sub_mchid'          => '1230000109',
    'authorization_code' => '1234323JKHDFE1243252',
    'notify_url'         => 'http://www.qq.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/partner/permissions']->postAsync([
  'json' => [
    'service_id'         => 'service_id',
    'appid'              => 'wxd678efh567hg6787',
    'sub_appid'          => 'wxd678efh567hg6787',
    'sub_mchid'          => '1230000109',
    'authorization_code' => '1234323JKHDFE1243252',
    'notify_url'         => 'http://www.qq.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->partner->permissions->post([
  'json' => [
    'service_id'         => 'service_id',
    'appid'              => 'wxd678efh567hg6787',
    'sub_appid'          => 'wxd678efh567hg6787',
    'sub_mchid'          => '1230000109',
    'authorization_code' => '1234323JKHDFE1243252',
    'notify_url'         => 'http://www.qq.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/partner/permissions')->post([
  'json' => [
    'service_id'         => 'service_id',
    'appid'              => 'wxd678efh567hg6787',
    'sub_appid'          => 'wxd678efh567hg6787',
    'sub_mchid'          => '1230000109',
    'authorization_code' => '1234323JKHDFE1243252',
    'notify_url'         => 'http://www.qq.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/partner/permissions']->post([
  'json' => [
    'service_id'         => 'service_id',
    'appid'              => 'wxd678efh567hg6787',
    'sub_appid'          => 'wxd678efh567hg6787',
    'sub_mchid'          => '1230000109',
    'authorization_code' => '1234323JKHDFE1243252',
    'notify_url'         => 'http://www.qq.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| apply_permissions_token {data-required} | string | 预授权token

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_18.shtml) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-auth/apply-partner-permissions.html)
