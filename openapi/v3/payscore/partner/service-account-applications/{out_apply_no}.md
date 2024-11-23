---
title: 查询收付通子商户服务绑定结果
description: 收付通服务商查询子商户的支付分服务绑定结果
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_apply_no {data-required} | string | 商户申请绑定单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->partner->serviceAccountApplications->_out_apply_no_->getAsync([
  'out_apply_no' => '1234323JKHDFE1243252',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/partner/service-account-applications/{out_apply_no}')->getAsync([
  'out_apply_no' => '1234323JKHDFE1243252',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/partner/service-account-applications/{out_apply_no}']->getAsync([
  'out_apply_no' => '1234323JKHDFE1243252',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->partner->serviceAccountApplications->_out_apply_no_->get([
  'out_apply_no' => '1234323JKHDFE1243252',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/partner/service-account-applications/{out_apply_no}')->get([
  'out_apply_no' => '1234323JKHDFE1243252',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/partner/service-account-applications/{out_apply_no}']->get([
  'out_apply_no' => '1234323JKHDFE1243252',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| service_id {data-required}| string | 服务ID
| mchid {data-required}| string | 服务商商户号
| appid {data-required}| string | 服务商应用ID
| sub_mchid {data-required}| string | 子商户商户号
| sub_appid | string | 子商户应用ID
| out_apply_no {data-required}| string | 申请单号
| result_notify_url | string | 绑定结果回调通知地址
| apply_state {data-required}| string | 受理状态
| reject_reason | string | 拒绝原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_14.shtml) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-account/get-service-account-application.html)
