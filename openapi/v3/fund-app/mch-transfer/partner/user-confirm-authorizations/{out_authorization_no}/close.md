---
title: 解除免确认收款授权
description: 根据商户单号解除免确认收款授权。注：单个商户的接口频率限制为50次/s
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_authorization_no {data-required} | string | 商户侧授权单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundApp->mchTransfer->partner->userConfirmAuthorizations->_out_authorization_no_->close->postAsync([
  'out_authorization_no' => 'plfk2020042013',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/fund-app/mch-transfer/partner/user-confirm-authorizations/{out_authorization_no}/close')->postAsync([
  'out_authorization_no' => 'plfk2020042013',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/fund-app/mch-transfer/partner/user-confirm-authorizations/{out_authorization_no}/close']->postAsync([
  'out_authorization_no' => 'plfk2020042013',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundApp->mchTransfer->partner->userConfirmAuthorizations->_out_authorization_no_->close->post([
  'out_authorization_no' => 'plfk2020042013',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/fund-app/mch-transfer/partner/user-confirm-authorizations/{out_authorization_no}/close')->post([
  'out_authorization_no' => 'plfk2020042013',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/fund-app/mch-transfer/partner/user-confirm-authorizations/{out_authorization_no}/close']->post([
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
| state {data-required} | string | 单据状态<br/>`CLOSED` 枚举值
| authorize_time {data-required} | string | 用户确认授权的时间
| close_info | object {data-tooltip="对应PHP的array"} | 自动收款授权的关闭信息
| close_time {data-required data-indent=1} | string | 关闭时间
| close_reason {data-required data-indent=1} | string | 自动收款授权的原因<br/>`CLOSE_VIA_MCH_API` 枚举值
| transfer_scene_id | string | 转账场景ID<br/>`1000` \| `1002` \| `1004` \| `1005` \| `1009` \| `1010` \| `1011` \| `1013` 枚举值之一
| user_recv_perception | string | 用户收款感知
| create_time | string | 单据创建时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016809851)
