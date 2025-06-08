---
title: 企业商户发起员工开通企业支付授权
description: 企业商户发起员工开通企业支付授权。该接口允许服务商为指定出资子商户下的员工发起企业支付授权申请，系统将生成一个授权链接，员工可通过该链接完成授权操作。授权成功后，企业可为该员工下发企业支付额度卡，员工可使用额度卡进行支付。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| user_id {data-required} | string | 企业员工ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_mchid {data-required data-indent=1} | string | 服务商商户号
| sub_mchid {data-required data-indent=1} | string | 出资子商户号
| application_type {data-required data-indent=1} | string | 发起授权应用类型<br/>`H5` \| `MINIPROGRAM` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->webizpay->users->_user_id_->authorizationUrl->postAsync([
  'user_id' => '123456',
  'json' => [
    'sp_mchid'         => '12341234',
    'sub_mchid'        => '43214321',
    'application_type' => 'H5',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/webizpay/users/{user_id}/authorization-url')->postAsync([
  'user_id' => '123456',
  'json' => [
    'sp_mchid'         => '12341234',
    'sub_mchid'        => '43214321',
    'application_type' => 'H5',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/webizpay/users/{user_id}/authorization-url']->postAsync([
  'user_id' => '123456',
  'json' => [
    'sp_mchid'         => '12341234',
    'sub_mchid'        => '43214321',
    'application_type' => 'H5',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->webizpay->users->_user_id_->authorizationUrl->post([
  'user_id' => '123456',
  'json' => [
    'sp_mchid'         => '12341234',
    'sub_mchid'        => '43214321',
    'application_type' => 'H5',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/webizpay/users/{user_id}/authorization-url')->post([
  'user_id' => '123456',
  'json' => [
    'sp_mchid'         => '12341234',
    'sub_mchid'        => '43214321',
    'application_type' => 'H5',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/webizpay/users/{user_id}/authorization-url']->post([
  'user_id' => '123456',
  'json' => [
    'sp_mchid'         => '12341234',
    'sub_mchid'        => '43214321',
    'application_type' => 'H5',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid {data-required} | string | 服务商商户号
| sub_mchid {data-required} | string | 出资子商户号
| user_id {data-required} | string | 企业员工ID
| authorization_url | string | 跳转链接
| expire_time | string | 链接失效时间
| application_type {data-required} | string | 发起授权应用类型<br/>`H5` \| `MINIPROGRAM` 枚举值之一
| mp_query | string | 小程序查询参数
| mp_business_type | string | 小程序业务类型

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4014507153)
