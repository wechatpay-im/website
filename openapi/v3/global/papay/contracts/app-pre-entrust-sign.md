---
title: APP签约
description: 用户在商户的APP中发起签约，跳转到微信客户端签约小程序完成签约，签约完成后重新打开商户APP。 移动应用（APP）接入开放平台SDK后，用户即可以在 APP 中跳转至微信某一小程序的指定页面，完成服务后再跳回至商户APP 。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-indent=1} | string | 机构APPID
| sub_mchid {data-indent=1} | string | 子商户号
| sp_appid {data-indent=1} | string | 机构appid
| sp_mchid {data-indent=1} | string | 机构商户号
| sub_appid {data-indent=1} | string | 子商户应用ID
| plan_id {data-indent=1} | integer | 模板ID
| out_contract_code {data-indent=1} | string | 商户侧签约协议号
| user_display_name {data-indent=1} | string | 用户账户展示名称
| success_notify_url {data-indent=1} | string | 签约成功通知url
| openid {data-indent=1} | string | 商户appid下的用户标识
| user_client_ip {data-indent=1} | string | 用户客户端IP
| expired_time {data-indent=1} | string | 过期时间

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->papay->contracts->appPreEntrustSign->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid'              => 'wxd678efh567hg6787',
    'sub_mchid'          => '1230000109',
    'sp_appid'           => 'wx8888888888888888',
    'sp_mchid'           => '3200000001',
    'sub_appid'          => 'wxcbda96de0b165484',
    'plan_id'            => 123,
    'out_contract_code'  => '100001256',
    'user_display_name'  => '张三',
    'success_notify_url' => 'https://pay.weixin.qq.com',
    'openid'             => 'ouFhd5X9s9WteC3eWRjXV3lea123',
    'user_client_ip'     => '119.145.83.6',
    'expired_time'       => '2021-11-20T13:29:35+08:00',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/papay/contracts/app-pre-entrust-sign')->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid'              => 'wxd678efh567hg6787',
    'sub_mchid'          => '1230000109',
    'sp_appid'           => 'wx8888888888888888',
    'sp_mchid'           => '3200000001',
    'sub_appid'          => 'wxcbda96de0b165484',
    'plan_id'            => 123,
    'out_contract_code'  => '100001256',
    'user_display_name'  => '张三',
    'success_notify_url' => 'https://pay.weixin.qq.com',
    'openid'             => 'ouFhd5X9s9WteC3eWRjXV3lea123',
    'user_client_ip'     => '119.145.83.6',
    'expired_time'       => '2021-11-20T13:29:35+08:00',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/papay/contracts/app-pre-entrust-sign']->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid'              => 'wxd678efh567hg6787',
    'sub_mchid'          => '1230000109',
    'sp_appid'           => 'wx8888888888888888',
    'sp_mchid'           => '3200000001',
    'sub_appid'          => 'wxcbda96de0b165484',
    'plan_id'            => 123,
    'out_contract_code'  => '100001256',
    'user_display_name'  => '张三',
    'success_notify_url' => 'https://pay.weixin.qq.com',
    'openid'             => 'ouFhd5X9s9WteC3eWRjXV3lea123',
    'user_client_ip'     => '119.145.83.6',
    'expired_time'       => '2021-11-20T13:29:35+08:00',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->papay->contracts->appPreEntrustSign->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid'              => 'wxd678efh567hg6787',
    'sub_mchid'          => '1230000109',
    'sp_appid'           => 'wx8888888888888888',
    'sp_mchid'           => '3200000001',
    'sub_appid'          => 'wxcbda96de0b165484',
    'plan_id'            => 123,
    'out_contract_code'  => '100001256',
    'user_display_name'  => '张三',
    'success_notify_url' => 'https://pay.weixin.qq.com',
    'openid'             => 'ouFhd5X9s9WteC3eWRjXV3lea123',
    'user_client_ip'     => '119.145.83.6',
    'expired_time'       => '2021-11-20T13:29:35+08:00',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/papay/contracts/app-pre-entrust-sign')->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid'              => 'wxd678efh567hg6787',
    'sub_mchid'          => '1230000109',
    'sp_appid'           => 'wx8888888888888888',
    'sp_mchid'           => '3200000001',
    'sub_appid'          => 'wxcbda96de0b165484',
    'plan_id'            => 123,
    'out_contract_code'  => '100001256',
    'user_display_name'  => '张三',
    'success_notify_url' => 'https://pay.weixin.qq.com',
    'openid'             => 'ouFhd5X9s9WteC3eWRjXV3lea123',
    'user_client_ip'     => '119.145.83.6',
    'expired_time'       => '2021-11-20T13:29:35+08:00',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/papay/contracts/app-pre-entrust-sign']->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid'              => 'wxd678efh567hg6787',
    'sub_mchid'          => '1230000109',
    'sp_appid'           => 'wx8888888888888888',
    'sp_mchid'           => '3200000001',
    'sub_appid'          => 'wxcbda96de0b165484',
    'plan_id'            => 123,
    'out_contract_code'  => '100001256',
    'user_display_name'  => '张三',
    'success_notify_url' => 'https://pay.weixin.qq.com',
    'openid'             => 'ouFhd5X9s9WteC3eWRjXV3lea123',
    'user_client_ip'     => '119.145.83.6',
    'expired_time'       => '2021-11-20T13:29:35+08:00',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| session_id {data-required} | string | 委托代扣签约会话id

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/global/v3/zh/4013015467)
