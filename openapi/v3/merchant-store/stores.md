---
title: 创建门店
description: 连锁品牌方案，是微信支付为「连锁经营品牌商家」定制的行业解决方案。方案基于“品牌-门店”的商业关系，向连锁经营品牌商家提供进件、交易场景配置、流量开放、资金管理、数据管理、营销管理等场景的专项解决方案。服务商/品牌方在门店在创建时，需要经过门店方授权确认，确认后方可建立“品牌-门店”关系。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-required data-indent=1} | string | 子商户号
| store_basics {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 门店基础信息
| store_reference_id {data-indent=2} | string | 商家门店编号
| brand_name {data-required data-indent=2} | string | 品牌名称
| store_name {data-required data-indent=2} | string | 门店名称
| branch_name {data-indent=2} | string | 分店名称
| store_address {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 门店地址信息
| address_code {data-indent=2} | string | 门店省市编码
| address_detail {data-required data-indent=2} | string | 门店地址
| address_complements {data-indent=2} | string | 门店地址辅助描述
| longitude {data-indent=2} | string | 门店经度
| latitude {data-indent=2} | string | 门店纬度
| store_business {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 门店经营信息
| service_phone {data-indent=2} | string | 门店服务电话
| business_hours {data-indent=2} | string | 门店经营时间
| store_recipient {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 门店收款信息
| mchid {data-required data-indent=2} | string | 门店收款商户号
| company_name {data-indent=2} | string | 门店收款主体

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantStore->stores->postAsync([
  'json' => [
    'sub_mchid'       => '1900000109',
    'store_basics'    => [
      'store_reference_id' => '',
      'brand_name'         => '',
      'store_name'         => '',
      'branch_name'        => '',
    ],
    'store_address'   => [
      'address_code'        => '440305',
      'address_detail'      => '',
      'address_complements' => '',
      'longitude'           => '',
      'latitude'            => '',
    ],
    'store_business'  => [
      'service_phone'  => '0755-86013388',
      'business_hours' => '周一至周五 09:00-20:00|周六至周日 10:00-22:00',
    ],
    'store_recipient' => [[
      'mchid'        => '',
      'company_name' => '',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-store/stores')->postAsync([
  'json' => [
    'sub_mchid'       => '1900000109',
    'store_basics'    => [
      'store_reference_id' => '',
      'brand_name'         => '',
      'store_name'         => '',
      'branch_name'        => '',
    ],
    'store_address'   => [
      'address_code'        => '440305',
      'address_detail'      => '',
      'address_complements' => '',
      'longitude'           => '',
      'latitude'            => '',
    ],
    'store_business'  => [
      'service_phone'  => '0755-86013388',
      'business_hours' => '周一至周五 09:00-20:00|周六至周日 10:00-22:00',
    ],
    'store_recipient' => [[
      'mchid'        => '',
      'company_name' => '',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-store/stores']->postAsync([
  'json' => [
    'sub_mchid'       => '1900000109',
    'store_basics'    => [
      'store_reference_id' => '',
      'brand_name'         => '',
      'store_name'         => '',
      'branch_name'        => '',
    ],
    'store_address'   => [
      'address_code'        => '440305',
      'address_detail'      => '',
      'address_complements' => '',
      'longitude'           => '',
      'latitude'            => '',
    ],
    'store_business'  => [
      'service_phone'  => '0755-86013388',
      'business_hours' => '周一至周五 09:00-20:00|周六至周日 10:00-22:00',
    ],
    'store_recipient' => [[
      'mchid'        => '',
      'company_name' => '',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantStore->stores->post([
  'json' => [
    'sub_mchid'       => '1900000109',
    'store_basics'    => [
      'store_reference_id' => '',
      'brand_name'         => '',
      'store_name'         => '',
      'branch_name'        => '',
    ],
    'store_address'   => [
      'address_code'        => '440305',
      'address_detail'      => '',
      'address_complements' => '',
      'longitude'           => '',
      'latitude'            => '',
    ],
    'store_business'  => [
      'service_phone'  => '0755-86013388',
      'business_hours' => '周一至周五 09:00-20:00|周六至周日 10:00-22:00',
    ],
    'store_recipient' => [[
      'mchid'        => '',
      'company_name' => '',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-store/stores')->post([
  'json' => [
    'sub_mchid'       => '1900000109',
    'store_basics'    => [
      'store_reference_id' => '',
      'brand_name'         => '',
      'store_name'         => '',
      'branch_name'        => '',
    ],
    'store_address'   => [
      'address_code'        => '440305',
      'address_detail'      => '',
      'address_complements' => '',
      'longitude'           => '',
      'latitude'            => '',
    ],
    'store_business'  => [
      'service_phone'  => '0755-86013388',
      'business_hours' => '周一至周五 09:00-20:00|周六至周日 10:00-22:00',
    ],
    'store_recipient' => [[
      'mchid'        => '',
      'company_name' => '',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant-store/stores']->post([
  'json' => [
    'sub_mchid'       => '1900000109',
    'store_basics'    => [
      'store_reference_id' => '',
      'brand_name'         => '',
      'store_name'         => '',
      'branch_name'        => '',
    ],
    'store_address'   => [
      'address_code'        => '440305',
      'address_detail'      => '',
      'address_complements' => '',
      'longitude'           => '',
      'latitude'            => '',
    ],
    'store_business'  => [
      'service_phone'  => '0755-86013388',
      'business_hours' => '周一至周五 09:00-20:00|周六至周日 10:00-22:00',
    ],
    'store_recipient' => [[
      'mchid'        => '',
      'company_name' => '',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| store_id {data-required} | integer | 微信支付商户门店ID

{.im-table #response}

参阅 [官方文档](https://kf.qq.com/faq/2009096ZF7Jf200909UVbY73.html)
