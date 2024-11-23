---
title: 报名费率优惠活动
description: 从业机构可调用该接口帮助已完成开户意愿确认的特约商户报名微信支付优惠费率活动。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| acquiring_bank_id {data-required data-indent=1} | string | 从业机构号
| channel_id {data-required data-indent=1} | string | 渠道商户号
| sub_mchid {data-required data-indent=1} | string | 从业机构特约商户号
| activity_detail {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 活动报名信息
| activity_id {data-required data-indent=2} | string | 活动ID
| activity_rate {data-indent=2} | string | 活动费率
| activity_apply_information {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 活动报名材料
| apply_material_id {data-indent=3} | string | 材料ID
| apply_material_information {data-indent=3} | string[] | 材料内容
| additional_information {data-indent=1} | object {data-tooltip="对应PHP的array"} | 补充信息
| additional_message {data-indent=2} | string | 补充说明
| additional_material {data-indent=2} | string[] | 补充材料

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->rateActivity->applications->postAsync([
  'json' => [
    'acquiring_bank_id' => '1356485',
    'channel_id' => '20001111',
    'sub_mchid' => '1346578',
    'activity_detail' => [
      'activity_id' => 'schoolcanteen_001',
      'activity_rate' => '0.6',
      'activity_apply_information' => [[
        'apply_material_id' => 'SCHOOL_QUALIFICATION_PROVEMENT',
        'apply_material_information' => ['MediaId'],
      ],],
    ],
    'additional_information' => [
      'additional_message' => '特殊情况，说明原因',
      'additional_material' => ['MediaId'],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/rate-activity/applications')->postAsync([
  'json' => [
    'acquiring_bank_id' => '1356485',
    'channel_id' => '20001111',
    'sub_mchid' => '1346578',
    'activity_detail' => [
      'activity_id' => 'schoolcanteen_001',
      'activity_rate' => '0.6',
      'activity_apply_information' => [[
        'apply_material_id' => 'SCHOOL_QUALIFICATION_PROVEMENT',
        'apply_material_information' => ['MediaId'],
      ],],
    ],
    'additional_information' => [
      'additional_message' => '特殊情况，说明原因',
      'additional_material' => ['MediaId'],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/rate-activity/applications']->postAsync([
  'json' => [
    'acquiring_bank_id' => '1356485',
    'channel_id' => '20001111',
    'sub_mchid' => '1346578',
    'activity_detail' => [
      'activity_id' => 'schoolcanteen_001',
      'activity_rate' => '0.6',
      'activity_apply_information' => [[
        'apply_material_id' => 'SCHOOL_QUALIFICATION_PROVEMENT',
        'apply_material_information' => ['MediaId'],
      ],],
    ],
    'additional_information' => [
      'additional_message' => '特殊情况，说明原因',
      'additional_material' => ['MediaId'],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->rateActivity->applications->post([
  'json' => [
    'acquiring_bank_id' => '1356485',
    'channel_id' => '20001111',
    'sub_mchid' => '1346578',
    'activity_detail' => [
      'activity_id' => 'schoolcanteen_001',
      'activity_rate' => '0.6',
      'activity_apply_information' => [[
        'apply_material_id' => 'SCHOOL_QUALIFICATION_PROVEMENT',
        'apply_material_information' => ['MediaId'],
      ],],
    ],
    'additional_information' => [
      'additional_message' => '特殊情况，说明原因',
      'additional_material' => ['MediaId'],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/rate-activity/applications')->post([
  'json' => [
    'acquiring_bank_id' => '1356485',
    'channel_id' => '20001111',
    'sub_mchid' => '1346578',
    'activity_detail' => [
      'activity_id' => 'schoolcanteen_001',
      'activity_rate' => '0.6',
      'activity_apply_information' => [[
        'apply_material_id' => 'SCHOOL_QUALIFICATION_PROVEMENT',
        'apply_material_information' => ['MediaId'],
      ],],
    ],
    'additional_information' => [
      'additional_message' => '特殊情况，说明原因',
      'additional_material' => ['MediaId'],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/rate-activity/applications']->post([
  'json' => [
    'acquiring_bank_id' => '1356485',
    'channel_id' => '20001111',
    'sub_mchid' => '1346578',
    'activity_detail' => [
      'activity_id' => 'schoolcanteen_001',
      'activity_rate' => '0.6',
      'activity_apply_information' => [[
        'apply_material_id' => 'SCHOOL_QUALIFICATION_PROVEMENT',
        'apply_material_information' => ['MediaId'],
      ],],
    ],
    'additional_information' => [
      'additional_message' => '特殊情况，说明原因',
      'additional_material' => ['MediaId'],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| application_id {data-required}| string | 申请单编号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/rateactivity/chapter3_1.shtml)
