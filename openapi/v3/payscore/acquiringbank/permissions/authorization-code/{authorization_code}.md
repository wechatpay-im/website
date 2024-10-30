---
title: 从业机构查询与用户授权记录（授权协议号）
description: 
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| authorization_code | string | 授权协议号
| query | object | 声明请求的查询参数
| service_id {data-indent=1} | string | 服务ID
| channel_id {data-indent=1} | string | 渠道商商户号
| sub_mchid {data-indent=1} | string | 子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->acquiringbank->permissions->authorizationCode->_authorization_code_->getAsync([
  'authorization_code' => '1275342195190894594',
  'query' => [
    'service_id' => '500001',
    'channel_id' => '1230000109',
    'sub_mchid' => '1230000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/acquiringbank/permissions/authorization-code/{authorization_code}')->getAsync([
  'authorization_code' => '1275342195190894594',
  'query' => [
    'service_id' => '500001',
    'channel_id' => '1230000109',
    'sub_mchid' => '1230000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/acquiringbank/permissions/authorization-code/{authorization_code}']->getAsync([
  'authorization_code' => '1275342195190894594',
  'query' => [
    'service_id' => '500001',
    'channel_id' => '1230000109',
    'sub_mchid' => '1230000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->acquiringbank->permissions->authorizationCode->_authorization_code_->get([
  'authorization_code' => '1275342195190894594',
  'query' => [
    'service_id' => '500001',
    'channel_id' => '1230000109',
    'sub_mchid' => '1230000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/acquiringbank/permissions/authorization-code/{authorization_code}')->get([
  'authorization_code' => '1275342195190894594',
  'query' => [
    'service_id' => '500001',
    'channel_id' => '1230000109',
    'sub_mchid' => '1230000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/acquiringbank/permissions/authorization-code/{authorization_code}']->get([
  'authorization_code' => '1275342195190894594',
  'query' => [
    'service_id' => '500001',
    'channel_id' => '1230000109',
    'sub_mchid' => '1230000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| service_id | string | 服务ID
| appid | string | 服务商应用ID
| mchid | string | 商户号
| openid | string | 服务商公众号下的用户标识
| sub_openid | string | 子商户公众号下的用户标识
| authorization_code | string | 授权协议号
| authorization_state | string | 授权状态
| notify_url | string | 授权通知地址
| cancel_authorization_time | string | 最近一次解除授权时间
| authorization_success_time | string | 最近一次授权成功时间
| sub_mchid | string | 子商户号
| sub_appid | string | 子商户应用ID
| channel_id | string | 渠道商商户号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-institution-weixin-pay-score/acquiring-bank-service-auth/get-acquiring-bank-permissions-by-code.html)
