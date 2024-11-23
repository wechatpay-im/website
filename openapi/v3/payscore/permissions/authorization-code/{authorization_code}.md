---
title: 查询与用户授权记录（授权协议号）
description: 通过authorization_code，商户查询与用户授权关系
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| authorization_code {data-required} | string | 授权协议号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| service_id {data-required data-indent=1} | string | 服务ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->permissions->authorizationCode->_authorization_code_->getAsync([
  'authorization_code' => '1234323JKHDFE1243252',
  'query' => [
    'service_id' => '500001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/permissions/authorization-code/{authorization_code}')->getAsync([
  'authorization_code' => '1234323JKHDFE1243252',
  'query' => [
    'service_id' => '500001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/permissions/authorization-code/{authorization_code}']->getAsync([
  'authorization_code' => '1234323JKHDFE1243252',
  'query' => [
    'service_id' => '500001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->permissions->authorizationCode->_authorization_code_->get([
  'authorization_code' => '1234323JKHDFE1243252',
  'query' => [
    'service_id' => '500001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/permissions/authorization-code/{authorization_code}')->get([
  'authorization_code' => '1234323JKHDFE1243252',
  'query' => [
    'service_id' => '500001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/permissions/authorization-code/{authorization_code}']->get([
  'authorization_code' => '1234323JKHDFE1243252',
  'query' => [
    'service_id' => '500001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| service_id {data-required}| string | 服务id
| appid {data-required}| string | 公众号id
| mchid {data-required}| string | 商户号
| openid | string | 用户标识
| authorization_code {data-required}| string | 授权协议号
| authorization_state {data-required}| string | 授权状态<br/>`UNAVAILABLE` \| `AVAILABLE` \| `UNBINDUSER` 枚举值之一
| notify_url | string | 授权通知地址
| cancel_authorization_time | string | 最近一次解除授权时间
| authorization_success_time | string | 最近一次授权成功时间
| user_risk_level | number | 用户分层
| risk_level_version | number | 分层版本

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter9_3.shtml) [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-auth/get-permissions-by-authorization-code.html)
