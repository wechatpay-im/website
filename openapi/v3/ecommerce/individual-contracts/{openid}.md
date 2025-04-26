---
title: 查询个人收款方授权结果
description: 查询个人收款方授权结果，以下情况需要调用：1. 个人卖家开通授权收款；2. 交易下单前，需要individual_auth_id
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 个人收款方在平台appid下的唯一标识
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| appid {data-required data-indent=1} | string | 签约和付款的微信小程序AppID
| permission_type {data-required data-indent=1} | string | 权限类型<br/>`INDIVIDUAL_PAYEE` 枚举值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->individualContracts->_openid_->getAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'query' => [
    'appid'           => 'wxd678efh567h23787',
    'permission_type' => 'INDIVIDUAL_PAYEE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/individual-contracts/{openid}')->getAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'query' => [
    'appid'           => 'wxd678efh567h23787',
    'permission_type' => 'INDIVIDUAL_PAYEE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/individual-contracts/{openid}']->getAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'query' => [
    'appid'           => 'wxd678efh567h23787',
    'permission_type' => 'INDIVIDUAL_PAYEE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->individualContracts->_openid_->get([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'query' => [
    'appid'           => 'wxd678efh567h23787',
    'permission_type' => 'INDIVIDUAL_PAYEE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/individual-contracts/{openid}')->get([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'query' => [
    'appid'           => 'wxd678efh567h23787',
    'permission_type' => 'INDIVIDUAL_PAYEE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/individual-contracts/{openid}']->get([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'query' => [
    'appid'           => 'wxd678efh567h23787',
    'permission_type' => 'INDIVIDUAL_PAYEE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| individual_auth_id {data-required} | string | 授权ID
| operation_time {data-required} | string | 操作时间
| auth_state {data-required} | string | 授权状态<br/>`AUTHORIZED` \| `UNAUTHORIZED` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012739528)
