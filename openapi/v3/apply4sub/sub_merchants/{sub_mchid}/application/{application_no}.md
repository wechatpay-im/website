---
title: 查询结算账户修改申请状态
description: 服务商/电商平台（不包括支付机构、银行），可使用本接口，查询其进件且已签约特约商户/二级商户的结算账户的修改申请单信息和审核结果。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 特约商户/二级商户号
| application_no {data-required} | string | 修改结算账户申请单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->apply4sub->sub_merchants->_sub_mchid_->application->_application_no_->getAsync([
  'sub_mchid' => '1511101111',
  'application_no' => '102329389XXXX',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/apply4sub/sub_merchants/{sub_mchid}/application/{application_no}')->getAsync([
  'sub_mchid' => '1511101111',
  'application_no' => '102329389XXXX',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/apply4sub/sub_merchants/{sub_mchid}/application/{application_no}']->getAsync([
  'sub_mchid' => '1511101111',
  'application_no' => '102329389XXXX',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->apply4sub->sub_merchants->_sub_mchid_->application->_application_no_->get([
  'sub_mchid' => '1511101111',
  'application_no' => '102329389XXXX',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/apply4sub/sub_merchants/{sub_mchid}/application/{application_no}')->get([
  'sub_mchid' => '1511101111',
  'application_no' => '102329389XXXX',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/apply4sub/sub_merchants/{sub_mchid}/application/{application_no}']->get([
  'sub_mchid' => '1511101111',
  'application_no' => '102329389XXXX',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| account_name {data-required} | string | 开户名称
| account_type {data-required} | string | 账户类型<br/>`ACCOUNT_TYPE_BUSINESS` \| `ACCOUNT_TYPE_PRIVATE` 枚举值之一
| account_bank {data-required} | string | 开户银行
| bank_name | string | 开户银行全称（含支行）
| bank_branch_id | string | 开户银行联行号
| account_number {data-required} | string | 银行账号
| verify_result {data-required} | string | 审核状态<br/>`AUDIT_SUCCESS` \| `AUDITING` \| `AUDIT_FAIL` 枚举值之一
| verify_fail_reason | string | 审核驳回原因
| verify_finish_time | string | 审核结果更新时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012761169) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012761120) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012721475) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012760660)
