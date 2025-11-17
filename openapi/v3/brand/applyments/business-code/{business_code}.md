---
title: 根据业务申请编号查询申请状态
description: 接口适用场景：当服务商提交申请单后，需要定期调用此接口查询申请单的审核状态。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| business_code {data-required} | string | 业务申请编号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->applyments->businessCode->_business_code_->getAsync([
  'business_code' => '190001351110000',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/applyments/business-code/{business_code}')->getAsync([
  'business_code' => '190001351110000',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/applyments/business-code/{business_code}']->getAsync([
  'business_code' => '190001351110000',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->applyments->businessCode->_business_code_->get([
  'business_code' => '190001351110000',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/applyments/business-code/{business_code}')->get([
  'business_code' => '190001351110000',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/applyments/business-code/{business_code}']->get([
  'business_code' => '190001351110000',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| applyment_id {data-required} | string | 微信支付申请单号
| business_code {data-required} | string | 业务申请编号
| applyment_state {data-required} | string | 申请状态<br/>`APPLYMENT_STATE_UNKNOWN` \| `APPLYMENT_STATE_UNSUBMITTED` \| `APPLYMENT_STATE_WAITING_VALIDATE` \| `APPLYMENT_STATE_WAITING_AUDIT` \| `APPLYMENT_STATE_WAITING_AUTH` \| `APPLYMENT_STATE_OPEN_ACCOUNT` \| `APPLYMENT_STATE_FINISH` \| `APPLYMENT_STATE_AUDIT_REJECTED` \| `APPLYMENT_STATE_CANCELED` 枚举值之一
| applyment_state_desc {data-required} | string | 申请状态说明
| authorization_confirmation_qr_code | string | 授权确认二维码链接
| reject_reason | string | 驳回原因
| brand_id | string | 品牌ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016257694)
