---
title: 检查子商户开票功能状态
description: 服务商检查子商户的电子发票功能状态是否正常，若商户已经开通API开票功能并已对服务商授权，则返回成功。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->newTaxControlFapiao->merchant->_sub_mchid_->checkStatus->getAsync([
  'sub_mchid' => '1900000109',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/new-tax-control-fapiao/merchant/{sub_mchid}/check-status')->getAsync([
  'sub_mchid' => '1900000109',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/new-tax-control-fapiao/merchant/{sub_mchid}/check-status']->getAsync([
  'sub_mchid' => '1900000109',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->newTaxControlFapiao->merchant->_sub_mchid_->checkStatus->get([
  'sub_mchid' => '1900000109',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/new-tax-control-fapiao/merchant/{sub_mchid}/check-status')->get([
  'sub_mchid' => '1900000109',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/new-tax-control-fapiao/merchant/{sub_mchid}/check-status']->get([
  'sub_mchid' => '1900000109',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 子商户号
| third_mode | object {data-tooltip="对应PHP的array"} | 第三方开票模式
| status {data-required data-indent=1} | string | 第三方/自建发票能力接入状态<br/>`DISABLED` \| `ENABLED` 枚举值之一
| digital_tax_mode | object {data-tooltip="对应PHP的array"} | 数电发票模式
| status {data-required data-indent=1} | string | 接入状态<br/>`APPROVAL_PENDING` \| `ACCESS_CONFIRMED_PENDING` \| `ABILITY_CONFIRMED_PENDING` \| `BILLING_PERSON_REGISTER_PENDING` \| `BILLING_PERSON_CONFIRMED_PENDING` \| `SECURITY_SETTING_PENDING` \| `APPLY_FAILED` \| `DISABLED` \| `ENABLED` \| `RESOURCE_EXPIRED` 枚举值之一
| billing_person_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 开票人信息
| id {data-indent=2} | string | 开票人ID
| name {data-indent=2} | string | 开票人姓名
| access_time {data-indent=1} | string | 接入时间
| expired_time {data-indent=1} | string | 过期时间
| access_fail_reason {data-indent=1} | string | 接入失败原因
| ability_info {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 能力信息
| type {data-required data-indent=2} | string | 能力类型<br/>`BASE_ABILITY` \| `REAL_ESTATE_ABILITY` 枚举值之一
| status {data-required data-indent=2} | string | 能力授权状态<br/>`AUTHORIZED` \| `AUTHORIZE_PENDING` \| `DEAUTHORIZED` \| `AUTHORIZE_FAILED` 枚举值之一
| authorize_fail_reason {data-indent=2} | string | 能力授权失败原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015792561)
