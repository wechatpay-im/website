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
| sub_mchid {data-required data-indent=1} | string | 子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->partner->permissions->authorizationCode->_authorization_code_->getAsync([
  'authorization_code' => '1234323JKHDFE1243252',
  'query' => [
    'service_id' => '500001',
    'sub_mchid'  => '1230000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/partner/permissions/authorization-code/{authorization_code}')->getAsync([
  'authorization_code' => '1234323JKHDFE1243252',
  'query' => [
    'service_id' => '500001',
    'sub_mchid'  => '1230000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/partner/permissions/authorization-code/{authorization_code}']->getAsync([
  'authorization_code' => '1234323JKHDFE1243252',
  'query' => [
    'service_id' => '500001',
    'sub_mchid'  => '1230000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->partner->permissions->authorizationCode->_authorization_code_->get([
  'authorization_code' => '1234323JKHDFE1243252',
  'query' => [
    'service_id' => '500001',
    'sub_mchid'  => '1230000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/partner/permissions/authorization-code/{authorization_code}')->get([
  'authorization_code' => '1234323JKHDFE1243252',
  'query' => [
    'service_id' => '500001',
    'sub_mchid'  => '1230000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/partner/permissions/authorization-code/{authorization_code}']->get([
  'authorization_code' => '1234323JKHDFE1243252',
  'query' => [
    'service_id' => '500001',
    'sub_mchid'  => '1230000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| service_id {data-required} | string | 服务ID
| appid {data-required} | string | 服务商应用ID
| mchid {data-required} | string | 商户号
| openid | string | 服务商公众号下的用户标识
| authorization_code {data-required} | string | 授权协议号
| authorization_state {data-required} | string | 授权状态
| notify_url | string | 授权通知地址
| cancel_authorization_time | string | 最近一次解除授权时间
| authorization_success_time | string | 最近一次授权成功时间
| sub_mchid {data-required} | string | 子商户号
| sub_appid | string | 子商户应用ID
| sub_openid | string | 子商户公众号下的用户标识
| user_risk_level | number | 用户分层
| risk_level_version | number | 分层版本

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_19.shtml) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-auth/get-partner-permissions-by-code.html)
