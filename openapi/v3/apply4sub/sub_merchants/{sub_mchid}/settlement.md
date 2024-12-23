---
title: 查询结算账户
description: 普通服务商（支付机构、银行不可用），可使用本接口查询其进件、已签约的特约商户-结算账户信息（敏感信息掩码）。 该接口可用于核实是否成功修改结算账户信息、及查询系统汇款验证结果。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 特约商户/二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->apply4sub->sub_merchants->_sub_mchid_->settlement->getAsync([
  'sub_mchid' => '1900006491',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/apply4sub/sub_merchants/{sub_mchid}/settlement')->getAsync([
  'sub_mchid' => '1900006491',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/apply4sub/sub_merchants/{sub_mchid}/settlement']->getAsync([
  'sub_mchid' => '1900006491',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->apply4sub->sub_merchants->_sub_mchid_->settlement->get([
  'sub_mchid' => '1900006491',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/apply4sub/sub_merchants/{sub_mchid}/settlement')->get([
  'sub_mchid' => '1900006491',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/apply4sub/sub_merchants/{sub_mchid}/settlement']->get([
  'sub_mchid' => '1900006491',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| account_type {data-required} | string | 账户类型<br/>`ACCOUNT_TYPE_BUSINESS` \| `ACCOUNT_TYPE_PRIVATE` 枚举值之一
| account_bank {data-required} | string | 开户银行
| bank_name | string | 开户银行全称（含支行）
| bank_branch_id | string | 开户银行联行号
| account_number {data-required} | string | 银行账号
| verify_result {data-required} | string | 验证结果<br/>`VERIFY_SUCCESS` \| `VERIFY_FAIL` \| `VERIFYING` 枚举值之一
| verify_fail_reason | string | 验证失败原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/applyment4sub/chapter3_4.shtml) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/ecommerce-merchant-application/get-settlement.html)
