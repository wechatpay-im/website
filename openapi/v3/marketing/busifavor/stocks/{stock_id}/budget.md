---
title: 修改批次预算
description: 商户可以通过该接口修改批次单天发放上限数量或者批次最大发放数量
---

# {{ $frontmatter.title }} {#patch}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_id {data-required} | string | 批次号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| target_max_coupons {data-indent=1} | integer | 目标批次最大发放个数
| target_max_coupons_by_day {data-indent=1} | integer | 目标单天发放上限个数
| current_max_coupons {data-indent=1} | integer | 当前批次最大发放个数
| current_max_coupons_by_day {data-indent=1} | integer | 当前单天发放上限个数
| modify_budget_request_no {data-required data-indent=1} | string | 修改预算请求单据号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->stocks->_stock_id_->budget->patchAsync([
  'stock_id' => '98065001',
  'json' => [
    'target_max_coupons' => 3000,
    'target_max_coupons_by_day' => 0,
    'current_max_coupons' => 500,
    'current_max_coupons_by_day' => 300,
    'modify_budget_request_no' => '1002600620019090123143254436',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/stocks/{stock_id}/budget')->patchAsync([
  'stock_id' => '98065001',
  'json' => [
    'target_max_coupons' => 3000,
    'target_max_coupons_by_day' => 0,
    'current_max_coupons' => 500,
    'current_max_coupons_by_day' => 300,
    'modify_budget_request_no' => '1002600620019090123143254436',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/stocks/{stock_id}/budget']->patchAsync([
  'stock_id' => '98065001',
  'json' => [
    'target_max_coupons' => 3000,
    'target_max_coupons_by_day' => 0,
    'current_max_coupons' => 500,
    'current_max_coupons_by_day' => 300,
    'modify_budget_request_no' => '1002600620019090123143254436',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->stocks->_stock_id_->budget->patch([
  'stock_id' => '98065001',
  'json' => [
    'target_max_coupons' => 3000,
    'target_max_coupons_by_day' => 0,
    'current_max_coupons' => 500,
    'current_max_coupons_by_day' => 300,
    'modify_budget_request_no' => '1002600620019090123143254436',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/stocks/{stock_id}/budget')->patch([
  'stock_id' => '98065001',
  'json' => [
    'target_max_coupons' => 3000,
    'target_max_coupons_by_day' => 0,
    'current_max_coupons' => 500,
    'current_max_coupons_by_day' => 300,
    'modify_budget_request_no' => '1002600620019090123143254436',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/stocks/{stock_id}/budget']->patch([
  'stock_id' => '98065001',
  'json' => [
    'target_max_coupons' => 3000,
    'target_max_coupons_by_day' => 0,
    'current_max_coupons' => 500,
    'current_max_coupons_by_day' => 300,
    'modify_budget_request_no' => '1002600620019090123143254436',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| max_coupons {data-required}| integer | 批次当前最大发放个数
| max_coupons_by_day | integer | 当前单天发放上限个数

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_11.shtml)
