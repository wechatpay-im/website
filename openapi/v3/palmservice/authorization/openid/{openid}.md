---
title: 查询刷掌授权
description: 商户通过该接口查询用户授权状态
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

::: warning :beginner: {.im-need-accessment}

微信刷掌服务目前正在逐步推广中，暂不支持开放接入。如有合作意愿，请联系行业的运营经理沟通。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | OpenID
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| organization_id {data-required data-indent=1} | string | 机构ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->palmservice->authorization->openid->_openid_->getAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'query' => [
    'organization_id' => '1004',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/palmservice/authorization/openid/{openid}')->getAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'query' => [
    'organization_id' => '1004',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/palmservice/authorization/openid/{openid}']->getAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'query' => [
    'organization_id' => '1004',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->palmservice->authorization->openid->_openid_->get([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'query' => [
    'organization_id' => '1004',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/palmservice/authorization/openid/{openid}')->get([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'query' => [
    'organization_id' => '1004',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/palmservice/authorization/openid/{openid}']->get([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'query' => [
    'organization_id' => '1004',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid | string | OpenID
| organization_id | string | 机构ID
| state | string | 授权状态<br/>`AUTHORIZATION_STATE_NONE` \| `AUTHORIZATION_STATE_ON` \| `AUTHORIZATION_STATE_OFF` 枚举值之一
| authorize_time | string | 授权时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4014482017)
