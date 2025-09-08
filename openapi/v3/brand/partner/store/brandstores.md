---
title: 创建品牌门店
description: 填入品牌门店资料，并创建门店。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_id {data-indent=1} | string | 品牌ID
| store_basics {data-indent=1} | object {data-tooltip="对应PHP的array"} | 门店基础信息
| store_reference_id {data-indent=2} | string | 商家门店编号
| branch_name {data-indent=2} | string | 门店名称
| store_address {data-indent=1} | object {data-tooltip="对应PHP的array"} | 门店地址信息
| address_code {data-required data-indent=2} | string | 门店省市编码
| address_detail {data-required data-indent=2} | string | 门店地址
| address_complements {data-indent=2} | string | 门店地址辅助描述
| longitude {data-indent=2} | string | 门店经度
| latitude {data-indent=2} | string | 门店纬度
| store_business {data-indent=1} | object {data-tooltip="对应PHP的array"} | 门店经营信息
| service_phone {data-indent=2} | string | 门店服务电话
| business_hours {data-indent=2} | string | 门店经营时间

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->partner->store->brandstores->postAsync([
  'json' => [
    'brand_id'       => '123456789',
    'store_basics'   => [
      'store_reference_id' => 'MDL001',
      'branch_name'        => '海岸城店',
    ],
    'store_address'  => [
      'address_code'        => '440305',
      'address_detail'      => '深南大道10000号腾讯大厦1楼',
      'address_complements' => '地铁A口右侧100米',
      'longitude'           => '112.63484',
      'latitude'            => '37.75464',
    ],
    'store_business' => [
      'service_phone'  => '0755-86013388',
      'business_hours' => '周一至周五 09:00-20:00|周六至周日 10:00-22:00',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/partner/store/brandstores')->postAsync([
  'json' => [
    'brand_id'       => '123456789',
    'store_basics'   => [
      'store_reference_id' => 'MDL001',
      'branch_name'        => '海岸城店',
    ],
    'store_address'  => [
      'address_code'        => '440305',
      'address_detail'      => '深南大道10000号腾讯大厦1楼',
      'address_complements' => '地铁A口右侧100米',
      'longitude'           => '112.63484',
      'latitude'            => '37.75464',
    ],
    'store_business' => [
      'service_phone'  => '0755-86013388',
      'business_hours' => '周一至周五 09:00-20:00|周六至周日 10:00-22:00',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/partner/store/brandstores']->postAsync([
  'json' => [
    'brand_id'       => '123456789',
    'store_basics'   => [
      'store_reference_id' => 'MDL001',
      'branch_name'        => '海岸城店',
    ],
    'store_address'  => [
      'address_code'        => '440305',
      'address_detail'      => '深南大道10000号腾讯大厦1楼',
      'address_complements' => '地铁A口右侧100米',
      'longitude'           => '112.63484',
      'latitude'            => '37.75464',
    ],
    'store_business' => [
      'service_phone'  => '0755-86013388',
      'business_hours' => '周一至周五 09:00-20:00|周六至周日 10:00-22:00',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->partner->store->brandstores->post([
  'json' => [
    'brand_id'       => '123456789',
    'store_basics'   => [
      'store_reference_id' => 'MDL001',
      'branch_name'        => '海岸城店',
    ],
    'store_address'  => [
      'address_code'        => '440305',
      'address_detail'      => '深南大道10000号腾讯大厦1楼',
      'address_complements' => '地铁A口右侧100米',
      'longitude'           => '112.63484',
      'latitude'            => '37.75464',
    ],
    'store_business' => [
      'service_phone'  => '0755-86013388',
      'business_hours' => '周一至周五 09:00-20:00|周六至周日 10:00-22:00',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/partner/store/brandstores')->post([
  'json' => [
    'brand_id'       => '123456789',
    'store_basics'   => [
      'store_reference_id' => 'MDL001',
      'branch_name'        => '海岸城店',
    ],
    'store_address'  => [
      'address_code'        => '440305',
      'address_detail'      => '深南大道10000号腾讯大厦1楼',
      'address_complements' => '地铁A口右侧100米',
      'longitude'           => '112.63484',
      'latitude'            => '37.75464',
    ],
    'store_business' => [
      'service_phone'  => '0755-86013388',
      'business_hours' => '周一至周五 09:00-20:00|周六至周日 10:00-22:00',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/partner/store/brandstores']->post([
  'json' => [
    'brand_id'       => '123456789',
    'store_basics'   => [
      'store_reference_id' => 'MDL001',
      'branch_name'        => '海岸城店',
    ],
    'store_address'  => [
      'address_code'        => '440305',
      'address_detail'      => '深南大道10000号腾讯大厦1楼',
      'address_complements' => '地铁A口右侧100米',
      'longitude'           => '112.63484',
      'latitude'            => '37.75464',
    ],
    'store_business' => [
      'service_phone'  => '0755-86013388',
      'business_hours' => '周一至周五 09:00-20:00|周六至周日 10:00-22:00',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| brand_id | string | 品牌ID
| store_id {data-required} | string | 品牌门店ID
| store_state | string | 门店状态<br/>`OPEN` \| `CREATING` \| `CLOSED` 枚举值之一
| review_reject_reason | string | 审核失败原因
| store_basics | object {data-tooltip="对应PHP的array"} | 门店基础信息
| store_reference_id {data-indent=1} | string | 商家门店编号
| branch_name {data-indent=1} | string | 门店名称
| store_address | object {data-tooltip="对应PHP的array"} | 门店地址信息
| address_code {data-required data-indent=1} | string | 门店省市编码
| address_detail {data-required data-indent=1} | string | 门店地址
| address_complements {data-indent=1} | string | 门店地址辅助描述
| longitude {data-indent=1} | string | 门店经度
| latitude {data-indent=1} | string | 门店纬度
| store_business | object {data-tooltip="对应PHP的array"} | 门店经营信息
| service_phone {data-indent=1} | string | 门店服务电话
| business_hours {data-indent=1} | string | 门店经营时间
| store_recipient | object[] {data-tooltip="对应PHP的array"} | 门店收款信息
| mchid {data-required data-indent=1} | string | 门店收款商户号
| company_name {data-indent=1} | string | 门店收款主体
| recipient_state {data-indent=1} | string | 收款绑定状态<br/>`CONFIRMED` \| `ADMIN_REJECTED` \| `CONFIRMING` \| `TIMEOUT_REJECTED` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015783183)
