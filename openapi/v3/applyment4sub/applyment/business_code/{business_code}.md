---
title: 通过业务申请编号查询申请状态
description: 通过业务申请编号查询申请状态
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| business_code {data-required} | string | 业务申请编号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->applyment4sub->applyment->business_code->_business_code_->getAsync([
  'business_code' => '',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/applyment4sub/applyment/business_code/{business_code}')->getAsync([
  'business_code' => '',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/applyment4sub/applyment/business_code/{business_code}']->getAsync([
  'business_code' => '',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->applyment4sub->applyment->business_code->_business_code_->get([
  'business_code' => '',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/applyment4sub/applyment/business_code/{business_code}')->get([
  'business_code' => '',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/applyment4sub/applyment/business_code/{business_code}']->get([
  'business_code' => '',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| business_code | string | 业务申请编号
| applyment_id | number | 微信支付申请单号
| sub_mchid | string | 特约商户号
| sign_url | string | 超级管理员签约链接
| applyment_state {data-required} | string | 申请单状态<br/>`APPLYMENT_STATE_WAITTING_FOR_AUDIT` \| `APPLYMENT_STATE_WAITTING_FOR_CONFIRM_CONTACT` \| `APPLYMENT_STATE_WAITTING_FOR_CONFIRM_LEGALPERSON` \| `APPLYMENT_STATE_PASSED` \| `APPLYMENT_STATE_FREEZED` \| `APPLYMENT_STATE_EDITTING` \| `APPLYMENT_STATE_AUDITING` \| `APPLYMENT_STATE_REJECTED` \| `APPLYMENT_STATE_TO_BE_CONFIRMED` \| `APPLYMENT_STATE_TO_BE_SIGNED` \| `APPLYMENT_STATE_SIGNING` \| `APPLYMENT_STATE_FINISHED` \| `APPLYMENT_STATE_CANCELED` 枚举值之一
| applyment_state_msg | string | 申请状态描述
| audit_detail | object[] {data-tooltip="对应PHP的array"} | 驳回原因详情
| field {data-indent=1} | string | 字段名
| field_name {data-indent=1} | string | 字段名称
| reject_reason {data-indent=1} | string | 驳回原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/applyment4sub/chapter3_2.shtml)
