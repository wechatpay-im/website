---
title: 创建支付分计划
description: 商户可以基于有按计划确认权限的服务，通过此接口创建支付分计划。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| service_id {data-required data-indent=1} | string | 计划所属服务
| appid {data-required data-indent=1} | string | AppID
| plan_name {data-required data-indent=1} | string | 支付分计划名称
| plan_duration {data-required data-indent=1} | number | 支付分计划有效期(单位天)
| deduction_quantity {data-required data-indent=1} | number | 支付分计划扣费次数
| total_original_price {data-required data-indent=1} | number | 支付分计划原总金额(单位分)
| total_actual_price {data-required data-indent=1} | number | 支付分计划实际扣费总金额(单位分)
| plan_detail_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 支付分计划明细列表
| original_price {data-required data-indent=2} | number | 计划明细原支付金额(单位分)
| plan_discount_description {data-indent=2} | string | 计划明细优惠说明
| actual_price {data-required data-indent=2} | number | 计划明细实际支付金额(单位分)
| plan_detail_name {data-required data-indent=2} | string | 计划明细名称
| merchant_plan_no {data-required data-indent=1} | string | 商户侧计划号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->plan->payscorePlans->postAsync([
  'json' => [
    'service_id'           => '2002000000000558128851361561536',
    'appid'                => 'wxd678efh567hg6787',
    'plan_name'            => '瑜伽课20节',
    'plan_duration'        => 300,
    'deduction_quantity'   => 10,
    'total_original_price' => 15000,
    'total_actual_price'   => 15000,
    'plan_detail_list'     => [[
      'original_price'            => 15000,
      'plan_discount_description' => '享受九折',
      'actual_price'              => 14000,
      'plan_detail_name'          => '第八节课',
    ],],
    'merchant_plan_no'     => '1234323JKHDFE1243252',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/plan/payscore-plans')->postAsync([
  'json' => [
    'service_id'           => '2002000000000558128851361561536',
    'appid'                => 'wxd678efh567hg6787',
    'plan_name'            => '瑜伽课20节',
    'plan_duration'        => 300,
    'deduction_quantity'   => 10,
    'total_original_price' => 15000,
    'total_actual_price'   => 15000,
    'plan_detail_list'     => [[
      'original_price'            => 15000,
      'plan_discount_description' => '享受九折',
      'actual_price'              => 14000,
      'plan_detail_name'          => '第八节课',
    ],],
    'merchant_plan_no'     => '1234323JKHDFE1243252',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/plan/payscore-plans']->postAsync([
  'json' => [
    'service_id'           => '2002000000000558128851361561536',
    'appid'                => 'wxd678efh567hg6787',
    'plan_name'            => '瑜伽课20节',
    'plan_duration'        => 300,
    'deduction_quantity'   => 10,
    'total_original_price' => 15000,
    'total_actual_price'   => 15000,
    'plan_detail_list'     => [[
      'original_price'            => 15000,
      'plan_discount_description' => '享受九折',
      'actual_price'              => 14000,
      'plan_detail_name'          => '第八节课',
    ],],
    'merchant_plan_no'     => '1234323JKHDFE1243252',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->plan->payscorePlans->post([
  'json' => [
    'service_id'           => '2002000000000558128851361561536',
    'appid'                => 'wxd678efh567hg6787',
    'plan_name'            => '瑜伽课20节',
    'plan_duration'        => 300,
    'deduction_quantity'   => 10,
    'total_original_price' => 15000,
    'total_actual_price'   => 15000,
    'plan_detail_list'     => [[
      'original_price'            => 15000,
      'plan_discount_description' => '享受九折',
      'actual_price'              => 14000,
      'plan_detail_name'          => '第八节课',
    ],],
    'merchant_plan_no'     => '1234323JKHDFE1243252',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/plan/payscore-plans')->post([
  'json' => [
    'service_id'           => '2002000000000558128851361561536',
    'appid'                => 'wxd678efh567hg6787',
    'plan_name'            => '瑜伽课20节',
    'plan_duration'        => 300,
    'deduction_quantity'   => 10,
    'total_original_price' => 15000,
    'total_actual_price'   => 15000,
    'plan_detail_list'     => [[
      'original_price'            => 15000,
      'plan_discount_description' => '享受九折',
      'actual_price'              => 14000,
      'plan_detail_name'          => '第八节课',
    ],],
    'merchant_plan_no'     => '1234323JKHDFE1243252',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/plan/payscore-plans']->post([
  'json' => [
    'service_id'           => '2002000000000558128851361561536',
    'appid'                => 'wxd678efh567hg6787',
    'plan_name'            => '瑜伽课20节',
    'plan_duration'        => 300,
    'deduction_quantity'   => 10,
    'total_original_price' => 15000,
    'total_actual_price'   => 15000,
    'plan_detail_list'     => [[
      'original_price'            => 15000,
      'plan_discount_description' => '享受九折',
      'actual_price'              => 14000,
      'plan_detail_name'          => '第八节课',
    ],],
    'merchant_plan_no'     => '1234323JKHDFE1243252',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| plan_id {data-required} | string | 支付分计划ID
| service_id {data-required} | string | 计划所属服务
| mchid {data-required} | string | 商户号
| appid {data-required} | string | AppID
| merchant_plan_no {data-required} | string | 商户侧计划号
| plan_name {data-required} | string | 支付分计划名称
| plan_duration {data-required} | number | 支付分计划有效期(单位天)
| plan_state {data-required} | string | 支付分计划状态
| total_original_price {data-required} | number | 支付分计划原总金额(单位分)
| deduction_quantity {data-required} | number | 支付分计划扣费次数
| total_actual_price {data-required} | number | 支付分计划实际扣费总金额(单位分)
| plan_detail_list | object[] {data-tooltip="对应PHP的array"} | 支付分计划明细列表
| plan_detail_no {data-required data-indent=1} | number | 计划明细序号
| plan_detail_name {data-required data-indent=1} | string | 计划明细名称
| original_price {data-required data-indent=1} | number | 计划明细原支付金额(单位分)
| plan_discount_description {data-indent=1} | string | 计划明细优惠说明
| actual_price {data-required data-indent=1} | number | 计划明细实际支付金额(单位分)
| stop_mchid | string | 终止方商户号
| stop_time | string | 终止时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/payscore-plan/pay-score-plan/create-pay-score-plan.html)
