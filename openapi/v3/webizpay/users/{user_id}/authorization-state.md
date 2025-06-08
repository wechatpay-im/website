---
title: 企业商户查询企业员工开通授权状态
description: 企业商户查询企业员工开通授权状态。该接口允许服务商查询指定出资子商户下特定员工的企业支付授权状态，包括授权状态、授权时间和解除授权时间等信息。服务商可通过此接口确认员工是否已开通企业支付功能，是后续发放额度卡的前提条件。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| user_id {data-required} | string | 企业员工ID
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sp_mchid {data-required data-indent=1} | string | 服务商商户号
| sub_mchid {data-required data-indent=1} | string | 出资子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->webizpay->users->_user_id_->authorizationState->getAsync([
  'user_id' => '123456',
  'query' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/webizpay/users/{user_id}/authorization-state')->getAsync([
  'user_id' => '123456',
  'query' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/webizpay/users/{user_id}/authorization-state']->getAsync([
  'user_id' => '123456',
  'query' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->webizpay->users->_user_id_->authorizationState->get([
  'user_id' => '123456',
  'query' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/webizpay/users/{user_id}/authorization-state')->get([
  'user_id' => '123456',
  'query' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/webizpay/users/{user_id}/authorization-state']->get([
  'user_id' => '123456',
  'query' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
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
| employee_list | object[] {data-tooltip="对应PHP的array"} | 微信授权关系列表
| employee_id {data-required data-indent=1} | string | 微信授权关系ID
| authorization_state {data-required data-indent=1} | string | 授权状态<br/>`AUTHORIZED` \| `REVOKED` 枚举值之一
| authorization_time {data-required data-indent=1} | string | 授权时间
| authorization_revoked_time {data-required data-indent=1} | string | 解除授权时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4014507163)
