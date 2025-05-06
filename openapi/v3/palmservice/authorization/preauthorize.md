---
title: 服务关联预授权
description: 模式一：在刷掌原生小程序完成开通刷掌服务后，继续授权商家刷掌服务，跳转到商家侧，触发商家调用预授权；模式二：商家主动发起授权，先调用预授权接口，再跳转刷掌小程序
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

::: warning :beginner: {.im-need-accessment}

微信刷掌服务目前正在逐步推广中，暂不支持开放接入。如有合作意愿，请联系行业的运营经理沟通。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| openid {data-required data-indent=1} | string | OpenID
| preauthorize_session_id {data-indent=1} | string | 预授权会话ID
| organization_id {data-indent=1} | string | 机构ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->palmservice->authorization->preauthorize->postAsync([
  'json' => [
    'openid'                  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'preauthorize_session_id' => '181167098309019291163',
    'organization_id'         => '1004',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/palmservice/authorization/preauthorize')->postAsync([
  'json' => [
    'openid'                  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'preauthorize_session_id' => '181167098309019291163',
    'organization_id'         => '1004',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/palmservice/authorization/preauthorize']->postAsync([
  'json' => [
    'openid'                  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'preauthorize_session_id' => '181167098309019291163',
    'organization_id'         => '1004',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->palmservice->authorization->preauthorize->post([
  'json' => [
    'openid'                  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'preauthorize_session_id' => '181167098309019291163',
    'organization_id'         => '1004',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/palmservice/authorization/preauthorize')->post([
  'json' => [
    'openid'                  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'preauthorize_session_id' => '181167098309019291163',
    'organization_id'         => '1004',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/palmservice/authorization/preauthorize']->post([
  'json' => [
    'openid'                  => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'preauthorize_session_id' => '181167098309019291163',
    'organization_id'         => '1004',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| permission_token {data-required} | string | 预授权token

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4014481990)
