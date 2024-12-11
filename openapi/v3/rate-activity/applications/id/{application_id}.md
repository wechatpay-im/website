# 从业机构查询及修改优惠费率活动申请单 {#mix}

## 根据申请单ID查询申请单结果 {#get}

从业机构可调用该接口查询优惠费率活动的报名结果。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| application_id {data-required} | string | 申请单编号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->rateActivity->applications->id->_application_id_->getAsync([
  'application_id' => '20000011111',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/rate-activity/applications/id/{application_id}')->getAsync([
  'application_id' => '20000011111',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/rate-activity/applications/id/{application_id}']->getAsync([
  'application_id' => '20000011111',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->rateActivity->applications->id->_application_id_->get([
  'application_id' => '20000011111',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/rate-activity/applications/id/{application_id}')->get([
  'application_id' => '20000011111',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/rate-activity/applications/id/{application_id}']->get([
  'application_id' => '20000011111',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| application_state {data-required} | string | 申请单状态
| sub_mchid {data-required} | string | 从业机构特约商户号
| reject_parameter | string | 驳回参数
| reject_reason | string | 驳回原因
| pass_time | string | 活动审核通过时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/rateactivity/chapter3_2.shtml)

## 修改单据信息 {#patch}

该接口只适用于修改已经审核失败的单据。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| application_id {data-required} | string | 申请单编号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| activity_detail_modification {data-indent=1} | object {data-tooltip="对应PHP的array"} | 活动报名修改信息
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
$instance->v3->rateActivity->applications->id->_application_id_->patchAsync([
  'application_id' => '20000011111',
  'json' => [
    'activity_detail_modification' => [
      'activity_rate'              => '0.6',
      'activity_apply_information' => [[
        'apply_material_id'          => 'SCHOOL_QUALIFICATION_PROOF',
        'apply_material_information' => ['MediaId'],
      ],],
    ],
    'additional_information'       => [
      'additional_message'  => '特殊情况，说明原因',
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
$instance->chain('v3/rate-activity/applications/id/{application_id}')->patchAsync([
  'application_id' => '20000011111',
  'json' => [
    'activity_detail_modification' => [
      'activity_rate'              => '0.6',
      'activity_apply_information' => [[
        'apply_material_id'          => 'SCHOOL_QUALIFICATION_PROOF',
        'apply_material_information' => ['MediaId'],
      ],],
    ],
    'additional_information'       => [
      'additional_message'  => '特殊情况，说明原因',
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
$instance['v3/rate-activity/applications/id/{application_id}']->patchAsync([
  'application_id' => '20000011111',
  'json' => [
    'activity_detail_modification' => [
      'activity_rate'              => '0.6',
      'activity_apply_information' => [[
        'apply_material_id'          => 'SCHOOL_QUALIFICATION_PROOF',
        'apply_material_information' => ['MediaId'],
      ],],
    ],
    'additional_information'       => [
      'additional_message'  => '特殊情况，说明原因',
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
$response = $instance->v3->rateActivity->applications->id->_application_id_->patch([
  'application_id' => '20000011111',
  'json' => [
    'activity_detail_modification' => [
      'activity_rate'              => '0.6',
      'activity_apply_information' => [[
        'apply_material_id'          => 'SCHOOL_QUALIFICATION_PROOF',
        'apply_material_information' => ['MediaId'],
      ],],
    ],
    'additional_information'       => [
      'additional_message'  => '特殊情况，说明原因',
      'additional_material' => ['MediaId'],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/rate-activity/applications/id/{application_id}')->patch([
  'application_id' => '20000011111',
  'json' => [
    'activity_detail_modification' => [
      'activity_rate'              => '0.6',
      'activity_apply_information' => [[
        'apply_material_id'          => 'SCHOOL_QUALIFICATION_PROOF',
        'apply_material_information' => ['MediaId'],
      ],],
    ],
    'additional_information'       => [
      'additional_message'  => '特殊情况，说明原因',
      'additional_material' => ['MediaId'],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/rate-activity/applications/id/{application_id}']->patch([
  'application_id' => '20000011111',
  'json' => [
    'activity_detail_modification' => [
      'activity_rate'              => '0.6',
      'activity_apply_information' => [[
        'apply_material_id'          => 'SCHOOL_QUALIFICATION_PROOF',
        'apply_material_information' => ['MediaId'],
      ],],
    ],
    'additional_information'       => [
      'additional_message'  => '特殊情况，说明原因',
      'additional_material' => ['MediaId'],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| application_id {data-required} | string | 申请单编号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/rateactivity/chapter3_3.shtml)
