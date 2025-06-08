---
title: 企业商户发起解除员工企业支付授权
description: 企业商户发起解除员工企业支付授权。该接口允许服务商解除指定出资子商户下特定员工的企业支付授权关系，解除授权后员工将无法继续使用企业支付功能，已发放的额度卡将自动失效。企业可通过此接口管理离职员工或需要取消授权的员工。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| employee_id {data-required} | string | 微信授权关系ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_mchid {data-required data-indent=1} | string | 服务商商户号
| sub_mchid {data-required data-indent=1} | string | 出资子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->webizpay->employees->_employee_id_->revoke->postAsync([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'json' => [
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
$instance->chain('v3/webizpay/employees/{employee_id}/revoke')->postAsync([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'json' => [
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
$instance['v3/webizpay/employees/{employee_id}/revoke']->postAsync([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'json' => [
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
$response = $instance->v3->webizpay->employees->_employee_id_->revoke->post([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'json' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/webizpay/employees/{employee_id}/revoke')->post([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'json' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/webizpay/employees/{employee_id}/revoke']->post([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'json' => [
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
| user_id {data-required} | string | 商户企业员工ID
| authorization_state {data-required} | string | 员工企业支付权限状态<br/>`REVOKED` \| `AUTHORIZED` 枚举值之一
| authorization_revoked_time {data-required} | string | 员工企业支付失效时间
| reason {data-required} | string | 作废原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4014507156)
