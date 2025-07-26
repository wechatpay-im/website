---
title: 平台代理签约核身
description: 接口适用场景：账号托管类平台商户进件申请流程中，在申请单中声明“走平台代理签约和代理核身入驻模式”时，可使用该接口传入代理签约和代理核身的信息。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_request_no {data-required data-indent=1} | string | 业务申请编号
| applyment_id {data-indent=1} | integer | 微信支付申请单号
| pre_sign_time {data-indent=1} | string | 预签署微信支付协议时间
| proxy_verify_identity_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 平台代理核身信息
| verify_identity_type {data-required data-indent=2} | string | 核身方式<br/>`VERIFY_IDENTITY_TYPE_FACE_TO_FACE` \| `VERIFY_IDENTITY_TYPE_REMOTE` 枚举值之一
| verify_identity_result {data-required data-indent=2} | boolean | 核身结果

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->applyments->submitSignVerifyInfo->postAsync([
  'json' => [
    'out_request_no'             => '1900013511_10000',
    'applyment_id'               => 2000002124775691,
    'pre_sign_time'              => '2018-06-08T10:34:56+08:00',
    'proxy_verify_identity_info' => [
      'verify_identity_type'   => 'VERIFY_IDENTITY_TYPE_FACE_TO_FACE',
      'verify_identity_result' => true,
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/applyments/submit-sign-verify-info')->postAsync([
  'json' => [
    'out_request_no'             => '1900013511_10000',
    'applyment_id'               => 2000002124775691,
    'pre_sign_time'              => '2018-06-08T10:34:56+08:00',
    'proxy_verify_identity_info' => [
      'verify_identity_type'   => 'VERIFY_IDENTITY_TYPE_FACE_TO_FACE',
      'verify_identity_result' => true,
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/applyments/submit-sign-verify-info']->postAsync([
  'json' => [
    'out_request_no'             => '1900013511_10000',
    'applyment_id'               => 2000002124775691,
    'pre_sign_time'              => '2018-06-08T10:34:56+08:00',
    'proxy_verify_identity_info' => [
      'verify_identity_type'   => 'VERIFY_IDENTITY_TYPE_FACE_TO_FACE',
      'verify_identity_result' => true,
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->applyments->submitSignVerifyInfo->post([
  'json' => [
    'out_request_no'             => '1900013511_10000',
    'applyment_id'               => 2000002124775691,
    'pre_sign_time'              => '2018-06-08T10:34:56+08:00',
    'proxy_verify_identity_info' => [
      'verify_identity_type'   => 'VERIFY_IDENTITY_TYPE_FACE_TO_FACE',
      'verify_identity_result' => true,
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/applyments/submit-sign-verify-info')->post([
  'json' => [
    'out_request_no'             => '1900013511_10000',
    'applyment_id'               => 2000002124775691,
    'pre_sign_time'              => '2018-06-08T10:34:56+08:00',
    'proxy_verify_identity_info' => [
      'verify_identity_type'   => 'VERIFY_IDENTITY_TYPE_FACE_TO_FACE',
      'verify_identity_result' => true,
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/applyments/submit-sign-verify-info']->post([
  'json' => [
    'out_request_no'             => '1900013511_10000',
    'applyment_id'               => 2000002124775691,
    'pre_sign_time'              => '2018-06-08T10:34:56+08:00',
    'proxy_verify_identity_info' => [
      'verify_identity_type'   => 'VERIFY_IDENTITY_TYPE_FACE_TO_FACE',
      'verify_identity_result' => true,
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| applyment_id {data-required} | integer | 微信支付申请单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015616722)
