---
title: 查询商户简称申请单状态-使用业务单号和商户号
description: 使用业务单号查询申请单状态
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 二级商户号
| out_request_no {data-required} | string | 业务申请编号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->mchalterapply->merchantnamealterapplyment->merchant->_sub_mchid_->outRequestNo->_out_request_no_->getAsync([
  'sub_mchid' => '1900006491',
  'out_request_no' => '1900013511_10000',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/mchalterapply/merchantnamealterapplyment/merchant/{sub_mchid}/out-request-no/{out_request_no}')->getAsync([
  'sub_mchid' => '1900006491',
  'out_request_no' => '1900013511_10000',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/mchalterapply/merchantnamealterapplyment/merchant/{sub_mchid}/out-request-no/{out_request_no}']->getAsync([
  'sub_mchid' => '1900006491',
  'out_request_no' => '1900013511_10000',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->mchalterapply->merchantnamealterapplyment->merchant->_sub_mchid_->outRequestNo->_out_request_no_->get([
  'sub_mchid' => '1900006491',
  'out_request_no' => '1900013511_10000',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/mchalterapply/merchantnamealterapplyment/merchant/{sub_mchid}/out-request-no/{out_request_no}')->get([
  'sub_mchid' => '1900006491',
  'out_request_no' => '1900013511_10000',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/mchalterapply/merchantnamealterapplyment/merchant/{sub_mchid}/out-request-no/{out_request_no}']->get([
  'sub_mchid' => '1900006491',
  'out_request_no' => '1900013511_10000',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| apply_id {data-required} | string | 申请单号
| out_request_no {data-required} | string | 业务申请编号
| sub_mchid {data-required} | string | 二级商户号
| state {data-required} | string | 申请单状态<br/>`APPLYMENT_STATE_AUDITING` \| `APPLYMENT_STATE_REJECTED` \| `APPLYMENT_STATE_MODIFING` \| `APPLYMENT_STATE_FINISHED` \| `APPLYMENT_STATE_CANCELED` 枚举值之一
| audit_reject_reason | string | 总体驳回原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016166085)
