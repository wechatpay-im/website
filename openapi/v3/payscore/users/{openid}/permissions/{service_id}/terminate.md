---
title: 商户解除用户授权关系
description: 商户通过调用该接口，可主动与用户解除此前授权关系。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 公众账号ID
| reason {data-required data-indent=1} | string | 撤销原因
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| openid {data-required data-indent=1} | string | 用户标识
| service_id {data-required data-indent=1} | string | 公众账号ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->users->_openid_->permissions->_service_id_->terminate->postAsync([
  'json' => [
    'appid'  => '',
    'reason' => '',
  ],
  'query' => [
    'openid' => '',
    'service_id' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/users/{openid}/permissions/{service_id}/terminate')->postAsync([
  'json' => [
    'appid'  => '',
    'reason' => '',
  ],
  'query' => [
    'openid' => '',
    'service_id' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/users/{openid}/permissions/{service_id}/terminate']->postAsync([
  'json' => [
    'appid'  => '',
    'reason' => '',
  ],
  'query' => [
    'openid' => '',
    'service_id' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->users->_openid_->permissions->_service_id_->terminate->post([
  'json' => [
    'appid'  => '',
    'reason' => '',
  ],
  'query' => [
    'openid' => '',
    'service_id' => '',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/users/{openid}/permissions/{service_id}/terminate')->post([
  'json' => [
    'appid'  => '',
    'reason' => '',
  ],
  'query' => [
    'openid' => '',
    'service_id' => '',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/payscore/users/{openid}/permissions/{service_id}/terminate']->post([
  'json' => [
    'appid'  => '',
    'reason' => '',
  ],
  'query' => [
    'openid' => '',
    'service_id' => '',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter9_1.shtml)
