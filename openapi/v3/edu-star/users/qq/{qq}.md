---
title: 通过QQ账号查询用户信息
description: 该接口用于获取微信支付集星光用户信息。合作方可根据该用户信息判断该用户是否为学生身份。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| qq | string | 用户QQ账号
| query | object | 声明请求的查询参数
| appid {data-indent=1} | string | 商户appid

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->eduStar->users->qq->_qq_->getAsync([
  'qq' => '100000000000',
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
$instance->chain('v3/edu-star/users/qq/{qq}')->getAsync([
  'qq' => '100000000000',
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
$instance['v3/edu-star/users/qq/{qq}']->getAsync([
  'qq' => '100000000000',
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
$response = $instance->v3->eduStar->users->qq->_qq_->get([
  'qq' => '100000000000',
  'query' => [
    'appid' => 'wx998877665544wx',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/edu-star/users/qq/{qq}')->get([
  'qq' => '100000000000',
  'query' => [
    'appid' => 'wx998877665544wx',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/edu-star/users/qq/{qq}']->get([
  'qq' => '100000000000',
  'query' => [
    'appid' => 'wx998877665544wx',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| education_star_student | boolean | 学生标识
| appid | string | 商户appid
| wechat_openid | string | 用户在appid下的唯一标识
| qq | string | 用户QQ账号
| register_time | string | 注册时间

{.im-table #response}

参阅 [官方流程图](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/assets/img/common/edu/edu-star/chapter2_3.png)
