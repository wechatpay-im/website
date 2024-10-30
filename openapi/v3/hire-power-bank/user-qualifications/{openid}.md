---
title: 查询用户保险订单领取资格
description: 商户通过该接口查询用户保险订单领取资格。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid | string | 微信用户在商户对应appid下的唯一标识。

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->hirePowerBank->userQualifications->_openid_->getAsync([
  'openid' => '2323dfsdf342342',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/hire-power-bank/user-qualifications/{openid}')->getAsync([
  'openid' => '2323dfsdf342342',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/hire-power-bank/user-qualifications/{openid}']->getAsync([
  'openid' => '2323dfsdf342342',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->hirePowerBank->userQualifications->_openid_->get([
  'openid' => '2323dfsdf342342',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/hire-power-bank/user-qualifications/{openid}')->get([
  'openid' => '2323dfsdf342342',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/hire-power-bank/user-qualifications/{openid}']->get([
  'openid' => '2323dfsdf342342',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| qualified_user | boolean | 用户是否具有保险订单领取资格

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/hire-power-bank-insurance/insurance-orders/get-qualification-by-open-id.html)
