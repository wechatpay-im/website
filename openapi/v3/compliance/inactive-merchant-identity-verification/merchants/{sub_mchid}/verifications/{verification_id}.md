---
title: 查询不活跃商户身份核实结果
description: 在代特约商户发起不活跃商户身份核实后，服务商可以通过该接口，查询特定特约商户下单笔核实单的核实结果。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 特约商户号
| verification_id | string | 核实单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->compliance->inactiveMerchantIdentityVerification->merchants->_sub_mchid_->verifications->_verification_id_->getAsync([
  'sub_mchid' => '1900009231',
  'verification_id' => '28011678863778000000123124312',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/compliance/inactive-merchant-identity-verification/merchants/{sub_mchid}/verifications/{verification_id}')->getAsync([
  'sub_mchid' => '1900009231',
  'verification_id' => '28011678863778000000123124312',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/compliance/inactive-merchant-identity-verification/merchants/{sub_mchid}/verifications/{verification_id}']->getAsync([
  'sub_mchid' => '1900009231',
  'verification_id' => '28011678863778000000123124312',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->compliance->inactiveMerchantIdentityVerification->merchants->_sub_mchid_->verifications->_verification_id_->get([
  'sub_mchid' => '1900009231',
  'verification_id' => '28011678863778000000123124312',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/compliance/inactive-merchant-identity-verification/merchants/{sub_mchid}/verifications/{verification_id}')->get([
  'sub_mchid' => '1900009231',
  'verification_id' => '28011678863778000000123124312',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/compliance/inactive-merchant-identity-verification/merchants/{sub_mchid}/verifications/{verification_id}']->get([
  'sub_mchid' => '1900009231',
  'verification_id' => '28011678863778000000123124312',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 特约商户号
| verification_id | string | 核实单号
| state | string | 核实单状态<br/>`PROCESSING` \| `SUCCESS` \| `FAIL` 枚举值之一
| fail_reason | string | 失败原因<br/>`MATERIALS_ABNORMAL` \| `PROCESS_TIMEOUT` 枚举值之一
| create_time | string | 创建时间
| finish_time | string | 完成时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/inactive-merchant-identity-verification/inactive-mch-identity-verification/query-inactive-merchant-identity-verification.html)
