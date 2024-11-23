---
title: 收付通子商户申请绑定支付分服务
description: 已接入收付通的商户，在已完成支付分权限开通及服务入驻后，可通过该能力为关联的子商户完成与支付分服务的绑定
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| service_id {data-required data-indent=1} | string | 服务ID
| appid {data-required data-indent=1} | string | 服务商应用ID
| sub_mchid {data-required data-indent=1} | string | 子商户商户号
| sub_appid {data-indent=1} | string | 子商户应用ID
| out_apply_no {data-required data-indent=1} | string | 商户申请绑定单号
| result_notify_url {data-indent=1} | string | 绑定结果回调通知地址

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->partner->serviceAccountApplications->postAsync([
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wxd678efh567hg6787',
    'out_apply_no' => '1234323JKHDFE1243252',
    'result_notify_url' => 'https://api.test.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/partner/service-account-applications')->postAsync([
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wxd678efh567hg6787',
    'out_apply_no' => '1234323JKHDFE1243252',
    'result_notify_url' => 'https://api.test.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/partner/service-account-applications']->postAsync([
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wxd678efh567hg6787',
    'out_apply_no' => '1234323JKHDFE1243252',
    'result_notify_url' => 'https://api.test.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->partner->serviceAccountApplications->post([
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wxd678efh567hg6787',
    'out_apply_no' => '1234323JKHDFE1243252',
    'result_notify_url' => 'https://api.test.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/partner/service-account-applications')->post([
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wxd678efh567hg6787',
    'out_apply_no' => '1234323JKHDFE1243252',
    'result_notify_url' => 'https://api.test.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/partner/service-account-applications']->post([
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '1900000109',
    'sub_appid' => 'wxd678efh567hg6787',
    'out_apply_no' => '1234323JKHDFE1243252',
    'result_notify_url' => 'https://api.test.com',
  ],
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

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_2_13.shtml) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/partner-service-account/create-service-account-application.html)
