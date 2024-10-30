---
title: 查询申请单状态-使用业务单号
description: 使用业务单号查询申请单状态
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_request_no | string | 业务申请编号
| json | object | 声明请求的`JSON`数据结构
| merchant_code {data-indent=1} | string | 微信支付商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->mchalterapply->mchsubjectalterapplyment->merchant->_merchant_code_->outRequestNo->_out_request_no_->getAsync([
  'out_request_no' => '1900013511_10000',
  'json' => [
    'merchant_code' => '1900006491',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/mchalterapply/mchsubjectalterapplyment/merchant/{merchant_code}/out-request-no/{out_request_no}')->getAsync([
  'out_request_no' => '1900013511_10000',
  'json' => [
    'merchant_code' => '1900006491',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/mchalterapply/mchsubjectalterapplyment/merchant/{merchant_code}/out-request-no/{out_request_no}']->getAsync([
  'out_request_no' => '1900013511_10000',
  'json' => [
    'merchant_code' => '1900006491',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->mchalterapply->mchsubjectalterapplyment->merchant->_merchant_code_->outRequestNo->_out_request_no_->get([
  'out_request_no' => '1900013511_10000',
  'json' => [
    'merchant_code' => '1900006491',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/mchalterapply/mchsubjectalterapplyment/merchant/{merchant_code}/out-request-no/{out_request_no}')->get([
  'out_request_no' => '1900013511_10000',
  'json' => [
    'merchant_code' => '1900006491',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/mchalterapply/mchsubjectalterapplyment/merchant/{merchant_code}/out-request-no/{out_request_no}']->get([
  'out_request_no' => '1900013511_10000',
  'json' => [
    'merchant_code' => '1900006491',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| merchant_code | string | 微信支付商户号
| apply_id | string | 申请单号
| out_request_no | string | 业务申请编号
| state | string | 申请单状态
| audit_reject_reason | string | 总体驳回原因
| audit_reject_detail | object[] | 驳回原因详情
| param_name {data-indent=1} | string | 参数名称
| reject_reason {data-indent=1} | string | 驳回原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_3_3.shtml)
