---
title: 商户贴息-获取微信分付曝光建议
description: 获取微信分付曝光建议
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_mchid {data-required data-indent=1} | string | 服务商户号
| sp_appid {data-required data-indent=1} | string | 服务商应用ID
| sub_appid {data-required data-indent=1} | string | 子商户/二级商户应用ID
| sub_mchid {data-indent=1} | string | 子商户号/二级商户号
| user_id {data-indent=1} | object {data-tooltip="对应PHP的array"} | 用户ID
| user_id_type {data-indent=2} | string | 用户ID的类型<br/>`UNKNOWN_USER_ID_TYPE` \| `OPENID` \| `PHONE_NO` \| `SP_OPENID` \| `SUB_OPENID` 枚举值之一
| sp_openid {data-indent=2} | string | 用户服务标识
| sub_openid {data-indent=2} | string | 用户子标识
| phone_number_hash {data-indent=2} | string | 用户手机号的哈希值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->pay->instal->partner->exposure->postAsync([
  'json' => [
    'sp_mchid'  => '1230000109',
    'sp_appid'  => 'wx8888888888888888',
    'sub_appid' => 'wxd678efh567hg6999',
    'sub_mchid' => '1900000109',
    'user_id'   => [
      'user_id_type'      => 'OPENID',
      'sp_openid'         => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid'        => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'phone_number_hash' => 'ABDEF3445546456B',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/pay/instal/partner/exposure')->postAsync([
  'json' => [
    'sp_mchid'  => '1230000109',
    'sp_appid'  => 'wx8888888888888888',
    'sub_appid' => 'wxd678efh567hg6999',
    'sub_mchid' => '1900000109',
    'user_id'   => [
      'user_id_type'      => 'OPENID',
      'sp_openid'         => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid'        => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'phone_number_hash' => 'ABDEF3445546456B',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/pay/instal/partner/exposure']->postAsync([
  'json' => [
    'sp_mchid'  => '1230000109',
    'sp_appid'  => 'wx8888888888888888',
    'sub_appid' => 'wxd678efh567hg6999',
    'sub_mchid' => '1900000109',
    'user_id'   => [
      'user_id_type'      => 'OPENID',
      'sp_openid'         => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid'        => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'phone_number_hash' => 'ABDEF3445546456B',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->pay->instal->partner->exposure->post([
  'json' => [
    'sp_mchid'  => '1230000109',
    'sp_appid'  => 'wx8888888888888888',
    'sub_appid' => 'wxd678efh567hg6999',
    'sub_mchid' => '1900000109',
    'user_id'   => [
      'user_id_type'      => 'OPENID',
      'sp_openid'         => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid'        => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'phone_number_hash' => 'ABDEF3445546456B',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/pay/instal/partner/exposure')->post([
  'json' => [
    'sp_mchid'  => '1230000109',
    'sp_appid'  => 'wx8888888888888888',
    'sub_appid' => 'wxd678efh567hg6999',
    'sub_mchid' => '1900000109',
    'user_id'   => [
      'user_id_type'      => 'OPENID',
      'sp_openid'         => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid'        => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'phone_number_hash' => 'ABDEF3445546456B',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/pay/instal/partner/exposure']->post([
  'json' => [
    'sp_mchid'  => '1230000109',
    'sp_appid'  => 'wx8888888888888888',
    'sub_appid' => 'wxd678efh567hg6999',
    'sub_mchid' => '1900000109',
    'user_id'   => [
      'user_id_type'      => 'OPENID',
      'sp_openid'         => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'sub_openid'        => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
      'phone_number_hash' => 'ABDEF3445546456B',
    ],
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
