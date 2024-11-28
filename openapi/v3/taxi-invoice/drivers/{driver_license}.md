---
title: 获取司机信息
description: 获取司机信息
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| driver_license {data-required} | string | 营运资格证号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| region_id {data-required data-indent=1} | integer | 行政区划代码

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->taxiInvoice->drivers->_driver_license_->getAsync([
  'driver_license' => '6298416',
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
$instance->chain('v3/taxi-invoice/drivers/{driver_license}')->getAsync([
  'driver_license' => '6298416',
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
$instance['v3/taxi-invoice/drivers/{driver_license}']->getAsync([
  'driver_license' => '6298416',
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
$response = $instance->v3->taxiInvoice->drivers->_driver_license_->get([
  'driver_license' => '6298416',
  'query' => [
    'region_id' => 510100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/taxi-invoice/drivers/{driver_license}')->get([
  'driver_license' => '6298416',
  'query' => [
    'region_id' => 510100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/taxi-invoice/drivers/{driver_license}']->get([
  'driver_license' => '6298416',
  'query' => [
    'region_id' => 510100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| driver_name {data-required} | string | 司机姓名
| company_name {data-required} | string | 公司名称
| company_mchid {data-required} | string | 商户号
| driver_license {data-required} | string | 营运资格证号
| driver_category {data-required} | string | 司机类别
| driver_photo | object {data-tooltip="对应PHP的array"} | 司机照片
| photo_type {data-indent=1} | string | 照片类型
| photo_digest {data-indent=1} | object {data-tooltip="对应PHP的array"} | 司机照片摘要
| hash_type {data-indent=2} | string | 哈希类型
| hash_value {data-indent=2} | string | 哈希值
| photo_url {data-indent=1} | string | 头像url
| photo_data {data-indent=1} | string | 头像icon
| region_id {data-required} | integer | 行政区划代码
| driver_state {data-required} | string | 司机状态

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/driver/query-driver.html)
