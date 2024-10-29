---
title: 解除用户授权关系（openid）
description: 通过openid， 商户解除用户授权关系
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid | string | 用户标识
| json | object | 声明请求的`JSON`数据结构
| service_id {data-indent=1} | string | 服务ID
| appid {data-indent=1} | string | 公众号id
| reason {data-indent=1} | string | 撤销原因

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->permissions->openid->_openid_->terminate->postAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'appid' => 'wxd678efh567hg6787',
    'reason' => 'reason',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/permissions/openid/{openid}/terminate')->postAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'appid' => 'wxd678efh567hg6787',
    'reason' => 'reason',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/permissions/openid/{openid}/terminate']->postAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'appid' => 'wxd678efh567hg6787',
    'reason' => 'reason',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->permissions->openid->_openid_->terminate->post([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'appid' => 'wxd678efh567hg6787',
    'reason' => 'reason',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/permissions/openid/{openid}/terminate')->post([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'appid' => 'wxd678efh567hg6787',
    'reason' => 'reason',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/payscore/permissions/openid/{openid}/terminate']->post([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'appid' => 'wxd678efh567hg6787',
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

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter9_6.shtml) [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-auth/terminate-permissions-by-open-id.html)
