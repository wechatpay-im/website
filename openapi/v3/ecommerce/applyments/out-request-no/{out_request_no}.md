---
title: 通过业务申请编号查询申请状态
description: 电商平台通过查询申请状态API查询二级商户入驻申请结果。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_request_no {data-required} | string | 业务申请编号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->applyments->outRequestNo->_out_request_no_->getAsync([
  'out_request_no' => 'APPLYMENT_00000000001',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/applyments/out-request-no/{out_request_no}')->getAsync([
  'out_request_no' => 'APPLYMENT_00000000001',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/applyments/out-request-no/{out_request_no}']->getAsync([
  'out_request_no' => 'APPLYMENT_00000000001',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->applyments->outRequestNo->_out_request_no_->get([
  'out_request_no' => 'APPLYMENT_00000000001',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/applyments/out-request-no/{out_request_no}')->get([
  'out_request_no' => 'APPLYMENT_00000000001',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/applyments/out-request-no/{out_request_no}']->get([
  'out_request_no' => 'APPLYMENT_00000000001',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| applyment_state {data-required}| string | 申请状态
| applyment_state_desc {data-required}| string | 申请状态描述
| sign_url | string | 签约链接
| sub_mchid | string | 电商平台二级商户号
| account_validation | object {data-tooltip="对应PHP的array"} | 汇款账户验证信息
| account_name {data-indent=1} | string | 付款户名
| account_no {data-indent=1} | string | 付款卡号
| pay_amount {data-indent=1} | number | 汇款金额
| destination_account_number {data-indent=1} | string | 收款卡号
| destination_account_name {data-indent=1} | string | 收款户名
| destination_account_bank {data-indent=1} | string | 开户银行
| city {data-indent=1} | string | 省市信息
| remark {data-indent=1} | string | 备注信息
| deadline {data-indent=1} | string | 汇款截止时间
| audit_detail | object[] {data-tooltip="对应PHP的array"} | 驳回原因详情
| param_name {data-required data-indent=1} | string | 参数名称
| reject_reason {data-required data-indent=1} | string | 驳回原因
| legal_validation_url | string | 法人验证链接
| out_request_no {data-required}| string | 业务申请编号
| applyment_id {data-required}| number | 微信支付申请单号
| sign_state | string | 签约状态<br/>`UNSIGNED` \| `SIGNED` \| `NOT_SIGNABLE` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/applyments/chapter3_2.shtml) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/ecommerce-merchant-application/applyment/get-state-by-out-request-no.html)
