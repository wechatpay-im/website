---
title: 通过微信用户标识查询用户信息
description: 该接口用于获取微信支付集星光用户信息。合作方可根据该用户信息判断该用户是否为学生身份。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| wechat_openid | string | 用户在appid下的唯一标识
| query | object | 声明请求的查询参数
| appid {data-indent=1} | string | 商户appid

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->eduStar->users->openid->_wechat_openid_->getAsync([
  'wechat_openid' => 'oUpF8uMuAJOM2pxb1Q',
  'query' => [
    'appid' => 'wx998877665544wx',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/edu-star/users/openid/{wechat_openid}')->getAsync([
  'wechat_openid' => 'oUpF8uMuAJOM2pxb1Q',
  'query' => [
    'appid' => 'wx998877665544wx',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/edu-star/users/openid/{wechat_openid}']->getAsync([
  'wechat_openid' => 'oUpF8uMuAJOM2pxb1Q',
  'query' => [
    'appid' => 'wx998877665544wx',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->eduStar->users->openid->_wechat_openid_->get([
  'wechat_openid' => 'oUpF8uMuAJOM2pxb1Q',
  'query' => [
    'appid' => 'wx998877665544wx',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/edu-star/users/openid/{wechat_openid}')->get([
  'wechat_openid' => 'oUpF8uMuAJOM2pxb1Q',
  'query' => [
    'appid' => 'wx998877665544wx',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/edu-star/users/openid/{wechat_openid}']->get([
  'wechat_openid' => 'oUpF8uMuAJOM2pxb1Q',
  'query' => [
    'appid' => 'wx998877665544wx',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| education_star_student | boolean | 是否学生
| appid | string | appid
| wechat_openid | string | 用户在appid下的唯一标识
| qq | string | 用户QQ账号
| register_time | string | 注册时间

{.im-table #response}

参阅 [官方流程图](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/assets/img/common/edu/edu-star/chapter2_3.png)
