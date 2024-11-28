---
title: 更新出租车信息
description: 商户可通过调用该接口新增、更新出租车信息，出租车所在的公司必须已经成为服务商的特约商户，否则新增失败
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| plate_number {data-required data-indent=1} | string | 车牌号
| company_name {data-required data-indent=1} | string | 公司名称
| mchid {data-indent=1} | string | 商户号
| main_license {data-required data-indent=1} | string | 主班司机资格证号
| deputy_license {data-indent=1} | string | 副班司机资格证号
| region_id {data-required data-indent=1} | integer | 行政区划ID
| invoice_flag {data-indent=1} | string | 开票标记

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->taxiInvoice->taxi->updateTaxi->postAsync([
  'json' => [
    'plate_number'   => '粤B12345',
    'company_name'   => '深圳市未来有限公司',
    'mchid'          => '1900000109',
    'main_license'   => '6298416',
    'deputy_license' => '6298416',
    'region_id'      => 510100,
    'invoice_flag'   => 'INVOICE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/taxi-invoice/taxi/update-taxi')->postAsync([
  'json' => [
    'plate_number'   => '粤B12345',
    'company_name'   => '深圳市未来有限公司',
    'mchid'          => '1900000109',
    'main_license'   => '6298416',
    'deputy_license' => '6298416',
    'region_id'      => 510100,
    'invoice_flag'   => 'INVOICE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/taxi-invoice/taxi/update-taxi']->postAsync([
  'json' => [
    'plate_number'   => '粤B12345',
    'company_name'   => '深圳市未来有限公司',
    'mchid'          => '1900000109',
    'main_license'   => '6298416',
    'deputy_license' => '6298416',
    'region_id'      => 510100,
    'invoice_flag'   => 'INVOICE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->taxiInvoice->taxi->updateTaxi->post([
  'json' => [
    'plate_number'   => '粤B12345',
    'company_name'   => '深圳市未来有限公司',
    'mchid'          => '1900000109',
    'main_license'   => '6298416',
    'deputy_license' => '6298416',
    'region_id'      => 510100,
    'invoice_flag'   => 'INVOICE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/taxi-invoice/taxi/update-taxi')->post([
  'json' => [
    'plate_number'   => '粤B12345',
    'company_name'   => '深圳市未来有限公司',
    'mchid'          => '1900000109',
    'main_license'   => '6298416',
    'deputy_license' => '6298416',
    'region_id'      => 510100,
    'invoice_flag'   => 'INVOICE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/taxi-invoice/taxi/update-taxi']->post([
  'json' => [
    'plate_number'   => '粤B12345',
    'company_name'   => '深圳市未来有限公司',
    'mchid'          => '1900000109',
    'main_license'   => '6298416',
    'deputy_license' => '6298416',
    'region_id'      => 510100,
    'invoice_flag'   => 'INVOICE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| plate_number {data-required} | string | 车牌号
| company_name {data-required} | string | 公司名称
| mchid | string | 商户号
| main_license {data-required} | string | 主班司机资格证号
| deputy_license | string | 副班司机资格证号
| region_id {data-required} | integer | 行政区划ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/taxi/update-taxi.html)
