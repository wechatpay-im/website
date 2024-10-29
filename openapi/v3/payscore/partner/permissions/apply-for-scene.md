---
title: 服务商场景中预授权
description: 服务商场景中预授权
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| service_id {data-indent=1} | string | 服务ID
| appid {data-indent=1} | string | 服务商的公众号ID
| sub_appid {data-indent=1} | string | 子商户的公众号ID
| sub_mchid {data-indent=1} | string | 子商户的商户号
| authorization_code {data-indent=1} | string | 授权协议号
| notify_url {data-indent=1} | string | 通知地址
| scene {data-indent=1} | string | 授权场景
| transaction_scene_info {data-indent=1} | object | 微信支付交易中授权附带的参数
| mchid {data-indent=2} | string | 支付下单的商户号
| sub_mchid {data-indent=2} | string | 支付下单的子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->partner->permissions->applyForScene->postAsync([
  'json' => [
    'service_id' => '500001',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1230000109',
    'authorization_code' => '实例1234323JKHDFE1243252',
    'notify_url' => 'http://www.qq.com',
    'scene' => 'TRANSACTION',
    'transaction_scene_info' => [
      'mchid' => '1230000109',
      'sub_mchid' => '1230000109',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/partner/permissions/apply-for-scene')->postAsync([
  'json' => [
    'service_id' => '500001',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1230000109',
    'authorization_code' => '实例1234323JKHDFE1243252',
    'notify_url' => 'http://www.qq.com',
    'scene' => 'TRANSACTION',
    'transaction_scene_info' => [
      'mchid' => '1230000109',
      'sub_mchid' => '1230000109',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/partner/permissions/apply-for-scene']->postAsync([
  'json' => [
    'service_id' => '500001',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1230000109',
    'authorization_code' => '实例1234323JKHDFE1243252',
    'notify_url' => 'http://www.qq.com',
    'scene' => 'TRANSACTION',
    'transaction_scene_info' => [
      'mchid' => '1230000109',
      'sub_mchid' => '1230000109',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->partner->permissions->applyForScene->post([
  'json' => [
    'service_id' => '500001',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1230000109',
    'authorization_code' => '实例1234323JKHDFE1243252',
    'notify_url' => 'http://www.qq.com',
    'scene' => 'TRANSACTION',
    'transaction_scene_info' => [
      'mchid' => '1230000109',
      'sub_mchid' => '1230000109',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/partner/permissions/apply-for-scene')->post([
  'json' => [
    'service_id' => '500001',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1230000109',
    'authorization_code' => '实例1234323JKHDFE1243252',
    'notify_url' => 'http://www.qq.com',
    'scene' => 'TRANSACTION',
    'transaction_scene_info' => [
      'mchid' => '1230000109',
      'sub_mchid' => '1230000109',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/partner/permissions/apply-for-scene']->post([
  'json' => [
    'service_id' => '500001',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1230000109',
    'authorization_code' => '实例1234323JKHDFE1243252',
    'notify_url' => 'http://www.qq.com',
    'scene' => 'TRANSACTION',
    'transaction_scene_info' => [
      'mchid' => '1230000109',
      'sub_mchid' => '1230000109',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| scene | string | 授权场景, 与输入中一致
| transaction_permissions_token | string | 微信支付交易中授权token

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-auth/scene-apply-partner-permissions.html)
