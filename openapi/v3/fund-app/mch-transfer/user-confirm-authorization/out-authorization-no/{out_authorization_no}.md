---
title: 商户单号查询自动收款授权
description: 根据商户单号用户自动收款授权的详细信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_authorization_no {data-required} | string | 商户侧授权单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundApp->mchTransfer->userConfirmAuthorization->outAuthorizationNo->_out_authorization_no_->getAsync([
  'out_authorization_no' => 'plfk2020042013',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/fund-app/mch-transfer/user-confirm-authorization/out-authorization-no/{out_authorization_no}')->getAsync([
  'out_authorization_no' => 'plfk2020042013',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/fund-app/mch-transfer/user-confirm-authorization/out-authorization-no/{out_authorization_no}']->getAsync([
  'out_authorization_no' => 'plfk2020042013',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundApp->mchTransfer->userConfirmAuthorization->outAuthorizationNo->_out_authorization_no_->get([
  'out_authorization_no' => 'plfk2020042013',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/fund-app/mch-transfer/user-confirm-authorization/out-authorization-no/{out_authorization_no}')->get([
  'out_authorization_no' => 'plfk2020042013',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/fund-app/mch-transfer/user-confirm-authorization/out-authorization-no/{out_authorization_no}']->get([
  'out_authorization_no' => 'plfk2020042013',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_authorization_no {data-required} | string | 商户侧授权单号
| appid {data-required} | string | 商户AppID
| openid {data-required} | string | 收款用户OpenID
| user_display_name {data-required} | string | 用户展示名称
| authorization_id {data-required} | string | 微信自动收款授权单号
| state {data-required} | string | 单据状态<br/>`TAKING_EFFECT` \| `CLOSED` 枚举值之一
| authorize_time {data-required} | string | 用户确认授权的时间
| close_info | object {data-tooltip="对应PHP的array"} | 自动收款授权的关闭信息
| close_time {data-required data-indent=1} | string | 关闭时间
| close_reason {data-required data-indent=1} | string | 自动收款授权的原因<br/>`CLOSE_VIA_MCH_API` \| `USER_CLOSE` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4014399423)
