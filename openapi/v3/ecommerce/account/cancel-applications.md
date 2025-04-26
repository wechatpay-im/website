---
title: 提交注销申请单
description: 电商子商户需注销商户号时，由其所属电商平台服务商调用本接口发起注销申请。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-required data-indent=1} | string | 二级商户号
| out_apply_no {data-required data-indent=1} | string | 商户注销申请单号
| application_info {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 注销申请材料
| application_type {data-indent=2} | string | 注销申请材料类型<br/>`SP_CANCEL_ACCOUNT_APPLICATION` \| `SUB_CANCEL_ACCOUNT_APPLICATION` 枚举值之一
| application_media_id {data-indent=2} | string | 图片MediaID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->account->cancelApplications->postAsync([
  'json' => [
    'sub_mchid'        => '1900000109',
    'out_apply_no'     => '2019061122222222122',
    'application_info' => [[
      'application_type'     => 'SP_CANCEL_ACCOUNT_APPLICATION',
      'application_media_id' => '',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/account/cancel-applications')->postAsync([
  'json' => [
    'sub_mchid'        => '1900000109',
    'out_apply_no'     => '2019061122222222122',
    'application_info' => [[
      'application_type'     => 'SP_CANCEL_ACCOUNT_APPLICATION',
      'application_media_id' => '',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/account/cancel-applications']->postAsync([
  'json' => [
    'sub_mchid'        => '1900000109',
    'out_apply_no'     => '2019061122222222122',
    'application_info' => [[
      'application_type'     => 'SP_CANCEL_ACCOUNT_APPLICATION',
      'application_media_id' => '',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->account->cancelApplications->post([
  'json' => [
    'sub_mchid'        => '1900000109',
    'out_apply_no'     => '2019061122222222122',
    'application_info' => [[
      'application_type'     => 'SP_CANCEL_ACCOUNT_APPLICATION',
      'application_media_id' => '',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/account/cancel-applications')->post([
  'json' => [
    'sub_mchid'        => '1900000109',
    'out_apply_no'     => '2019061122222222122',
    'application_info' => [[
      'application_type'     => 'SP_CANCEL_ACCOUNT_APPLICATION',
      'application_media_id' => '',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/account/cancel-applications']->post([
  'json' => [
    'sub_mchid'        => '1900000109',
    'out_apply_no'     => '2019061122222222122',
    'application_info' => [[
      'application_type'     => 'SP_CANCEL_ACCOUNT_APPLICATION',
      'application_media_id' => '',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_apply_no {data-required} | string | 商户注销申请单号
| sub_mchid {data-required} | string | 二级商户号
| reject_reason | string | 受理失败原因
| cancel_state | string | 注销状态<br/>`REVIEWING` \| `REJECTED` \| `CANCEL_SUCCESS` 枚举值之一
| update_time | string | 最后更新时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012476217)
