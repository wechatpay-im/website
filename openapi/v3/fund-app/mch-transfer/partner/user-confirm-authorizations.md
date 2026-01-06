---
title: 申请免确认收款授权
description: 商户调用该接口申请免确认收款授权，用户需在24小时内完成授权，过期未完成需更换单号重新操作。注：单个商户的接口频率限制为50次/s
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_authorization_no {data-required data-indent=1} | string | 商户侧授权单号
| appid {data-required data-indent=1} | string | 商户AppID
| openid {data-required data-indent=1} | string | 收款用户OpenID
| transfer_scene_id {data-required data-indent=1} | string | 转账场景ID<br/>`1000` \| `1002` \| `1004` \| `1005` \| `1009` \| `1010` \| `1011` \| `1013` 枚举值之一
| user_display_name {data-required data-indent=1} | string | 用户展示名称
| user_recv_perception {data-indent=1} | string | 用户收款感知
| authorization_notify_url {data-required data-indent=1} | string | 授权结果通知地址

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundApp->mchTransfer->partner->userConfirmAuthorizations->postAsync([
  'json' => [
    'out_authorization_no'     => 'plfk2020042013',
    'appid'                    => '102022609',
    'openid'                   => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'transfer_scene_id'        => '1000',
    'user_display_name'        => 'wx_123456',
    'user_recv_perception'     => '现金奖励',
    'authorization_notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/fund-app/mch-transfer/partner/user-confirm-authorizations')->postAsync([
  'json' => [
    'out_authorization_no'     => 'plfk2020042013',
    'appid'                    => '102022609',
    'openid'                   => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'transfer_scene_id'        => '1000',
    'user_display_name'        => 'wx_123456',
    'user_recv_perception'     => '现金奖励',
    'authorization_notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/fund-app/mch-transfer/partner/user-confirm-authorizations']->postAsync([
  'json' => [
    'out_authorization_no'     => 'plfk2020042013',
    'appid'                    => '102022609',
    'openid'                   => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'transfer_scene_id'        => '1000',
    'user_display_name'        => 'wx_123456',
    'user_recv_perception'     => '现金奖励',
    'authorization_notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundApp->mchTransfer->partner->userConfirmAuthorizations->post([
  'json' => [
    'out_authorization_no'     => 'plfk2020042013',
    'appid'                    => '102022609',
    'openid'                   => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'transfer_scene_id'        => '1000',
    'user_display_name'        => 'wx_123456',
    'user_recv_perception'     => '现金奖励',
    'authorization_notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/fund-app/mch-transfer/partner/user-confirm-authorizations')->post([
  'json' => [
    'out_authorization_no'     => 'plfk2020042013',
    'appid'                    => '102022609',
    'openid'                   => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'transfer_scene_id'        => '1000',
    'user_display_name'        => 'wx_123456',
    'user_recv_perception'     => '现金奖励',
    'authorization_notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/fund-app/mch-transfer/partner/user-confirm-authorizations']->post([
  'json' => [
    'out_authorization_no'     => 'plfk2020042013',
    'appid'                    => '102022609',
    'openid'                   => 'o-MYE42l80oelYMDE34nYD456Xoy',
    'transfer_scene_id'        => '1000',
    'user_display_name'        => 'wx_123456',
    'user_recv_perception'     => '现金奖励',
    'authorization_notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_authorization_no {data-required} | string | 商户侧授权单号
| state {data-required} | string | 单据状态<br/>`WAIT_USER_CONFIRM` 枚举值
| create_time {data-required} | string | 单据创建时间
| package_info {data-required} | string | 跳转领取页面的package信息

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016809861)
