---
title: 解除用户授权关系（openid）
description: 通过openid，服务商帮子商户解除用户授权关系
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| openid {data-indent=1} | string | 服务商公众号下的用户标识
| sub_openid {data-indent=1} | string | 子商户公众号下openid
| service_id {data-required data-indent=1} | string | 服务ID
| appid {data-required data-indent=1} | string | 服务商应用ID
| sub_appid {data-indent=1} | string | 子商户应用ID
| sub_mchid {data-required data-indent=1} | string | 子商户号
| reason {data-required data-indent=1} | string | 撤销原因

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->partner->permissions->terminate->postAsync([
  'json' => [
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid' => '',
    'service_id' => '500001',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1230000109',
    'reason' => 'reason',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/partner/permissions/terminate')->postAsync([
  'json' => [
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid' => '',
    'service_id' => '500001',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1230000109',
    'reason' => 'reason',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/partner/permissions/terminate']->postAsync([
  'json' => [
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid' => '',
    'service_id' => '500001',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1230000109',
    'reason' => 'reason',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->partner->permissions->terminate->post([
  'json' => [
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid' => '',
    'service_id' => '500001',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1230000109',
    'reason' => 'reason',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/partner/permissions/terminate')->post([
  'json' => [
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid' => '',
    'service_id' => '500001',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1230000109',
    'reason' => 'reason',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/payscore/partner/permissions/terminate']->post([
  'json' => [
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid' => '',
    'service_id' => '500001',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1230000109',
    'reason' => 'reason',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_22.shtml) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-auth/terminate-partner-permissions-by-open-id.html)
