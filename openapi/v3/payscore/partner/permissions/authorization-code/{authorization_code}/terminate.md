---
title: 解除用户授权关系（授权协议号）
description: 通过authorization_code，商户解除用户授权关系
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| authorization_code {data-required} | string | 授权协议号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| service_id {data-required data-indent=1} | string | 服务ID
| sub_mchid {data-required data-indent=1} | string | 子商户号
| reason {data-required data-indent=1} | string | 撤销原因

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->partner->permissions->authorizationCode->_authorization_code_->terminate->postAsync([
  'authorization_code' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '500001',
    'sub_mchid'  => '1230000109',
    'reason'     => '撤销原因',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/partner/permissions/authorization-code/{authorization_code}/terminate')->postAsync([
  'authorization_code' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '500001',
    'sub_mchid'  => '1230000109',
    'reason'     => '撤销原因',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/partner/permissions/authorization-code/{authorization_code}/terminate']->postAsync([
  'authorization_code' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '500001',
    'sub_mchid'  => '1230000109',
    'reason'     => '撤销原因',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->partner->permissions->authorizationCode->_authorization_code_->terminate->post([
  'authorization_code' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '500001',
    'sub_mchid'  => '1230000109',
    'reason'     => '撤销原因',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/partner/permissions/authorization-code/{authorization_code}/terminate')->post([
  'authorization_code' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '500001',
    'sub_mchid'  => '1230000109',
    'reason'     => '撤销原因',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/payscore/partner/permissions/authorization-code/{authorization_code}/terminate']->post([
  'authorization_code' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '500001',
    'sub_mchid'  => '1230000109',
    'reason'     => '撤销原因',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_20.shtml) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-auth/terminate-partner-permissions-by-code.html)
