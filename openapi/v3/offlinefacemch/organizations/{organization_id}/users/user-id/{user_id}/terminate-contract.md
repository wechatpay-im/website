---
title: 解除刷脸用户签约关系接口
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| organization_id {data-required} | string | 机构ID
| use_id {data-required} | string | 刷脸用户ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->offlinefacemch->organizations->_organization_id_->users->userId->_user_id_->terminateContract->postAsync([
  'organization_id' => '',
  'use_id' => '',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/offlinefacemch/organizations/{organization_id}/users/user-id/{user_id}/terminate-contract')->postAsync([
  'organization_id' => '',
  'use_id' => '',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/offlinefacemch/organizations/{organization_id}/users/user-id/{user_id}/terminate-contract']->postAsync([
  'organization_id' => '',
  'use_id' => '',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->offlinefacemch->organizations->_organization_id_->users->userId->_user_id_->terminateContract->post([
  'organization_id' => '',
  'use_id' => '',
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/offlinefacemch/organizations/{organization_id}/users/user-id/{user_id}/terminate-contract')->post([
  'organization_id' => '',
  'use_id' => '',
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/offlinefacemch/organizations/{organization_id}/users/user-id/{user_id}/terminate-contract']->post([
  'organization_id' => '',
  'use_id' => '',
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/wxfacepay/develop/access-specifications.html)
