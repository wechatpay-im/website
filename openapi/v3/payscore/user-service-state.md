---
title: 查询用户授权状态
description: 用户申请使用服务时，商户可通过此接口查询用户是否“已授权”本服务。在“已授权”状态下的服务，用户才可以申请使用。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object | 声明请求的查询参数
| appid {data-indent=1} | string | 公众账号ID
| service_id {data-indent=1} | string | 服务ID
| openid {data-indent=1} | string | 用户标识

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
| appid | string | 公众账号ID
| service_id | string | 服务ID
| openid | string | 用户标识

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_8.shtml)
