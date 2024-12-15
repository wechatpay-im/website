---
title: 通过code换取accesstoken
description: 获取微信用户的授权, 需要使用微信支付提供的 OAuth2.0 服务.用授权小程序得到的授权码调用OAuth2.0接口access_token.
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

::: warning :closed_lock_with_key: {.im-privated}

本接口服务已于 `2021.11.10` (北京时间)停止开放，文档仅做留存参考。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| mch_id {data-required data-indent=1} | string | 商户号
| appid {data-required data-indent=1} | string | 应用ID
| openid {data-required data-indent=1} | string | 微信openID
| code {data-required data-indent=1} | string | 第一步返回的auth_code
| grant_type {data-required data-indent=1} | string | 固定值`authorization_code`<br/>`authorization_code` 枚举值
| scope {data-required data-indent=1} | string | 应用授权作用域<br/>`pay_identity` \| `pay_realname` 枚举值之一
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值
| sign {data-required data-indent=1} | string | 签名

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->appauth->getaccesstoken->getAsync([
  'query' => [
    'mch_id'     => '1200009811',
    'appid'      => 'wxcbda96de0b165486',
    'openid'     => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'code'       => 'wxcbda96de0b165489',
    'grant_type' => 'authorization_code',
    'scope'      => 'pay_identity',
    'sign_type'  => 'HMAC-SHA256',
    'sign'       => 'C380BEC2BFD727A4B6845133519F3AD6',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/appauth/getaccesstoken')->getAsync([
  'query' => [
    'mch_id'     => '1200009811',
    'appid'      => 'wxcbda96de0b165486',
    'openid'     => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'code'       => 'wxcbda96de0b165489',
    'grant_type' => 'authorization_code',
    'scope'      => 'pay_identity',
    'sign_type'  => 'HMAC-SHA256',
    'sign'       => 'C380BEC2BFD727A4B6845133519F3AD6',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/appauth/getaccesstoken']->getAsync([
  'query' => [
    'mch_id'     => '1200009811',
    'appid'      => 'wxcbda96de0b165486',
    'openid'     => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'code'       => 'wxcbda96de0b165489',
    'grant_type' => 'authorization_code',
    'scope'      => 'pay_identity',
    'sign_type'  => 'HMAC-SHA256',
    'sign'       => 'C380BEC2BFD727A4B6845133519F3AD6',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->appauth->getaccesstoken->get([
  'query' => [
    'mch_id'     => '1200009811',
    'appid'      => 'wxcbda96de0b165486',
    'openid'     => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'code'       => 'wxcbda96de0b165489',
    'grant_type' => 'authorization_code',
    'scope'      => 'pay_identity',
    'sign_type'  => 'HMAC-SHA256',
    'sign'       => 'C380BEC2BFD727A4B6845133519F3AD6',
  ],
]);
print_r(json_decode((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/appauth/getaccesstoken')->get([
  'query' => [
    'mch_id'     => '1200009811',
    'appid'      => 'wxcbda96de0b165486',
    'openid'     => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'code'       => 'wxcbda96de0b165489',
    'grant_type' => 'authorization_code',
    'scope'      => 'pay_identity',
    'sign_type'  => 'HMAC-SHA256',
    'sign'       => 'C380BEC2BFD727A4B6845133519F3AD6',
  ],
]);
print_r(json_decode((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/appauth/getaccesstoken']->get([
  'query' => [
    'mch_id'     => '1200009811',
    'appid'      => 'wxcbda96de0b165486',
    'openid'     => 'baf04e6bbbd06f7b1a197d18ed53b7f1',
    'code'       => 'wxcbda96de0b165489',
    'grant_type' => 'authorization_code',
    'scope'      => 'pay_identity',
    'sign_type'  => 'HMAC-SHA256',
    'sign'       => 'C380BEC2BFD727A4B6845133519F3AD6',
  ],
]);
print_r(json_decode((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| retcode {data-required} | number | 返回状态码<br/>`0` \| `-1` 枚举值之一
| retmsg {data-required} | string | 处理成功，返回ok
| access_token {data-required} | string | 接口调用凭证
| access_token_expire_in {data-required} | integer | 请求返回的access_token过期时间，以秒为单位，有效期较短
| refresh_token {data-required} | string | refresh令牌
| refresh_token_expire_in {data-required} | number | refresh_token过期时间，以秒为单位，有效期较长

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/realnameauth.php?chapter=60_2&index=3)
