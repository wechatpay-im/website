---
title: 获取用户信息（跳转型激活）
description: 如果商家选择跳转激活的投放方式，用户点击开卡跳转至商家H5网页/小程序时，会员组件会在跳转链接activate_url后拼接若干个参数，包括：用户的openid、加密的会员code(encrypt_code)、激活ticket(activate_ticket)。对于其中的activate_ticket，商家可调用当前api，获取用户的开卡信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activate_ticket {data-required} | string | 激活ticket

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->activateInformations->_activate_ticket_->getAsync([
  'activate_ticket' => 'abcdefg',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-open/activate-informations/{activate_ticket}')->getAsync([
  'activate_ticket' => 'abcdefg',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-open/activate-informations/{activate_ticket}']->getAsync([
  'activate_ticket' => 'abcdefg',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardOpen->activateInformations->_activate_ticket_->get([
  'activate_ticket' => 'abcdefg',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/activate-informations/{activate_ticket}')->get([
  'activate_ticket' => 'abcdefg',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/activate-informations/{activate_ticket}']->get([
  'activate_ticket' => 'abcdefg',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| nickname | string | 微信昵称
| head_image_url | string | 微信头像url
| user_information | object {data-tooltip="对应PHP的array"} | 用户开卡时填写的个人信息
| common_field_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 平台提供的通用开卡信息字段
| name {data-indent=2} | string | 平台提供的通用开卡信息字段<br/>`USER_FORM_FLAG_MOBILE` \| `USER_FORM_FLAG_SEX` \| `USER_FORM_FLAG_NAME` \| `USER_FORM_FLAG_BIRTHDAY` \| `USER_FORM_FLAG_ADDRESS` \| `USER_FORM_FLAG_EMAIL` \| `USER_FORM_FLAG_CITY` 枚举值之一
| value {data-indent=2} | string | 用户开卡时填写的个人信息
| custom_field_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 商户自定义的开卡信息字段
| name {data-indent=2} | string | 字段名称
| value {data-indent=2} | string | 字段值
| value_list {data-indent=2} | string[] | 字段值

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012550779) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012727881)
