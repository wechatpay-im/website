---
title: 获取出租车信息
description: 获取出租车信息
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| plate_number | string | 车牌号
| query | object | 声明请求的查询参数
| region_id {data-indent=1} | integer | 行政区划代码

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->taxiInvoice->taxies->_plate_number_->getAsync([
  'plate_number' => '粤B12345',
  'query' => [
    'region_id' => 510100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/taxi-invoice/taxies/{plate_number}')->getAsync([
  'plate_number' => '粤B12345',
  'query' => [
    'region_id' => 510100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/taxi-invoice/taxies/{plate_number}']->getAsync([
  'plate_number' => '粤B12345',
  'query' => [
    'region_id' => 510100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->taxiInvoice->taxies->_plate_number_->get([
  'plate_number' => '粤B12345',
  'query' => [
    'region_id' => 510100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/taxi-invoice/taxies/{plate_number}')->get([
  'plate_number' => '粤B12345',
  'query' => [
    'region_id' => 510100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/taxi-invoice/taxies/{plate_number}']->get([
  'plate_number' => '粤B12345',
  'query' => [
    'region_id' => 510100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| plate_number | string | 车牌号
| company_name | string | 公司名称
| company_mchid | string | 公司商户号
| main_license | string | 主班司机资格证号
| deputy_license | string | 副班司机资格证号
| region_id | integer | 行政区划代码
| support_invoice | boolean | 是否支持开票
| taxi_state | string | 出租车状态

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/taxi/query-taxi.html)
