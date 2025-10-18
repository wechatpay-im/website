---
title: 商户贴息-获取微信分付曝光建议
description: 获取微信分付曝光建议
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| mchid {data-required data-indent=1} | string | 直连商户号
| appid {data-required data-indent=1} | string | 应用AppID
| user_id_type {data-required data-indent=1} | string | 用户ID的类型<br/>`UNKNOWN_USER_ID_TYPE` \| `OPENID` \| `PHONE_NO` \| `SP_OPENID` \| `SUB_OPENID` 枚举值之一
| openid {data-indent=1} | string | 用户标识
| phone_number_hash {data-indent=1} | string | 用户手机号的十六进制字符串

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->pay->instal->exposure->postAsync([
  'json' => [
    'mchid'             => '1230000109',
    'appid'             => 'wxd678efh567hg6787',
    'user_id_type'      => 'OPENID',
    'openid'            => '123456789',
    'phone_number_hash' => 'EF879546FFFF',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/pay/instal/exposure')->postAsync([
  'json' => [
    'mchid'             => '1230000109',
    'appid'             => 'wxd678efh567hg6787',
    'user_id_type'      => 'OPENID',
    'openid'            => '123456789',
    'phone_number_hash' => 'EF879546FFFF',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/pay/instal/exposure']->postAsync([
  'json' => [
    'mchid'             => '1230000109',
    'appid'             => 'wxd678efh567hg6787',
    'user_id_type'      => 'OPENID',
    'openid'            => '123456789',
    'phone_number_hash' => 'EF879546FFFF',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->pay->instal->exposure->post([
  'json' => [
    'mchid'             => '1230000109',
    'appid'             => 'wxd678efh567hg6787',
    'user_id_type'      => 'OPENID',
    'openid'            => '123456789',
    'phone_number_hash' => 'EF879546FFFF',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/pay/instal/exposure')->post([
  'json' => [
    'mchid'             => '1230000109',
    'appid'             => 'wxd678efh567hg6787',
    'user_id_type'      => 'OPENID',
    'openid'            => '123456789',
    'phone_number_hash' => 'EF879546FFFF',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/pay/instal/exposure']->post([
  'json' => [
    'mchid'             => '1230000109',
    'appid'             => 'wxd678efh567hg6787',
    'user_id_type'      => 'OPENID',
    'openid'            => '123456789',
    'phone_number_hash' => 'EF879546FFFF',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| recommend_exposure {data-required} | boolean | 是否建议曝光微信分付

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4016196762)
