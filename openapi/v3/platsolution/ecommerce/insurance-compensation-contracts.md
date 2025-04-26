---
title: 开通保险理赔功能
description: 平台服务商可通过该接口为保险公司开通保险理赔功能。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_apply_no {data-required data-indent=1} | string | 商户申请单号
| sub_mchid {data-required data-indent=1} | string | 二级商户号
| agreement_list {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 签约协议列表
| agreement_code {data-required data-indent=2} | string | 协议编号
| agreement_version {data-required data-indent=2} | string | 协议版本号
| sign_organization {data-required data-indent=2} | string | 签约主体
| sign_time {data-required data-indent=2} | string | 签约时间

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->ecommerce->insuranceCompensationContracts->postAsync([
  'json' => [
    'out_apply_no'   => 'No123456',
    'sub_mchid'      => '1900000109',
    'agreement_list' => [[
      'agreement_code'    => '微信支付运营功能服务协议（平台二级商户）',
      'agreement_version' => '20240815',
      'sign_organization' => '温州名优贸易',
      'sign_time'         => '2024-08-08T10:34:56+08:00',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/platsolution/ecommerce/insurance-compensation-contracts')->postAsync([
  'json' => [
    'out_apply_no'   => 'No123456',
    'sub_mchid'      => '1900000109',
    'agreement_list' => [[
      'agreement_code'    => '微信支付运营功能服务协议（平台二级商户）',
      'agreement_version' => '20240815',
      'sign_organization' => '温州名优贸易',
      'sign_time'         => '2024-08-08T10:34:56+08:00',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/platsolution/ecommerce/insurance-compensation-contracts']->postAsync([
  'json' => [
    'out_apply_no'   => 'No123456',
    'sub_mchid'      => '1900000109',
    'agreement_list' => [[
      'agreement_code'    => '微信支付运营功能服务协议（平台二级商户）',
      'agreement_version' => '20240815',
      'sign_organization' => '温州名优贸易',
      'sign_time'         => '2024-08-08T10:34:56+08:00',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->platsolution->ecommerce->insuranceCompensationContracts->post([
  'json' => [
    'out_apply_no'   => 'No123456',
    'sub_mchid'      => '1900000109',
    'agreement_list' => [[
      'agreement_code'    => '微信支付运营功能服务协议（平台二级商户）',
      'agreement_version' => '20240815',
      'sign_organization' => '温州名优贸易',
      'sign_time'         => '2024-08-08T10:34:56+08:00',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/ecommerce/insurance-compensation-contracts')->post([
  'json' => [
    'out_apply_no'   => 'No123456',
    'sub_mchid'      => '1900000109',
    'agreement_list' => [[
      'agreement_code'    => '微信支付运营功能服务协议（平台二级商户）',
      'agreement_version' => '20240815',
      'sign_organization' => '温州名优贸易',
      'sign_time'         => '2024-08-08T10:34:56+08:00',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/ecommerce/insurance-compensation-contracts']->post([
  'json' => [
    'out_apply_no'   => 'No123456',
    'sub_mchid'      => '1900000109',
    'agreement_list' => [[
      'agreement_code'    => '微信支付运营功能服务协议（平台二级商户）',
      'agreement_version' => '20240815',
      'sign_organization' => '温州名优贸易',
      'sign_time'         => '2024-08-08T10:34:56+08:00',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 二级商户号
| opened {data-required} | boolean | 是否开通成功
| success_time | string | 成功时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012781476)
