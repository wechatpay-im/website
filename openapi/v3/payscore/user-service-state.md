---
title: 查询用户授权状态
description: 用户申请使用服务时，商户可通过此接口查询用户是否“已授权”本服务。在“已授权”状态下的服务，用户才可以申请使用。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| appid {data-required data-indent=1} | string | 公众账号ID
| service_id {data-required data-indent=1} | string | 服务ID
| openid {data-required data-indent=1} | string | 用户标识

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->userServiceState->getAsync([
  'query' => [
    'appid' => '',
    'service_id' => '',
    'openid' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/user-service-state')->getAsync([
  'query' => [
    'appid' => '',
    'service_id' => '',
    'openid' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/user-service-state']->getAsync([
  'query' => [
    'appid' => '',
    'service_id' => '',
    'openid' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->userServiceState->get([
  'query' => [
    'appid' => '',
    'service_id' => '',
    'openid' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/user-service-state')->get([
  'query' => [
    'appid' => '',
    'service_id' => '',
    'openid' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/user-service-state']->get([
  'query' => [
    'appid' => '',
    'service_id' => '',
    'openid' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| appid {data-required} | string | 公众账号ID
| service_id {data-required} | string | 服务ID
| openid | string | 用户标识
| use_service_state {data-required} | string | 用户授权服务情况<br/>`UNAVAILABLE` \| `AVAILABLE` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_8.shtml)
