---
title: 查询注销单状态
description: 电商平台服务商发起注销申请后，通过本接口查询注销状态、进展。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_apply_no {data-required} | string | 商户注销申请单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->account->cancelApplications->outApplyNo->_out_apply_no_->getAsync([
  'out_apply_no' => '2019061122222222122',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/account/cancel-applications/out-apply-no/{out_apply_no}')->getAsync([
  'out_apply_no' => '2019061122222222122',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/account/cancel-applications/out-apply-no/{out_apply_no}']->getAsync([
  'out_apply_no' => '2019061122222222122',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->account->cancelApplications->outApplyNo->_out_apply_no_->get([
  'out_apply_no' => '2019061122222222122',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/account/cancel-applications/out-apply-no/{out_apply_no}')->get([
  'out_apply_no' => '2019061122222222122',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/account/cancel-applications/out-apply-no/{out_apply_no}']->get([
  'out_apply_no' => '2019061122222222122',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_apply_no {data-required}| string | 商户注销申请单号
| sub_mchid {data-required}| string | 二级商户号
| reject_reason | string | 受理失败原因
| cancel_state | string | 注销状态<br/>`REVIEWING` \| `REJECTED` \| `CANCEL_SUCCESS` 枚举值之一
| update_time | string | 最后更新时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/ecommerce-cancel/cancel-applications/get-cancel-application.html)
