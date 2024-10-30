---
title: 商户查询用户欠款状态
description: 商户通过调用该接口可主动查询微信用户的欠款状态。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid | string | 商户appid下的用户标识

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->eduschoolpay->users->_openid_->debtState->getAsync([
  'openid' => 'oUpF8uMuAJOM2pxb1Q',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/eduschoolpay/users/{openid}/debt-state')->getAsync([
  'openid' => 'oUpF8uMuAJOM2pxb1Q',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/eduschoolpay/users/{openid}/debt-state']->getAsync([
  'openid' => 'oUpF8uMuAJOM2pxb1Q',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->eduschoolpay->users->_openid_->debtState->get([
  'openid' => 'oUpF8uMuAJOM2pxb1Q',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/eduschoolpay/users/{openid}/debt-state')->get([
  'openid' => 'oUpF8uMuAJOM2pxb1Q',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/eduschoolpay/users/{openid}/debt-state']->get([
  'openid' => 'oUpF8uMuAJOM2pxb1Q',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| appid | string | 商户appid
| openid | string | 商户appid下的用户标识
| state | string | 用户状态
| debt_count | integer | 当前用户欠款笔数
| update_time | string | 用户欠款状态更新时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/edu/eduschoolpay/chapter4_4.shtml)
