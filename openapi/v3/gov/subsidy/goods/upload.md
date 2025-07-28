---
title: 商品信息上传
description: 地方省平台维护了一个商品库，需要提前把商品信息上传进去。必须要对接，是导入商品库信息，不可以线下通过excel表格导入，只能调用接口处理。重复上传会返回"获取中央平台数据异常_数据重复"错误。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appliance_id {data-required data-indent=1} | number | 消费品类ID<br/>`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9` \| `10` \| `11` \| `12` \| `13` \| `14` \| `15` \| `16` \| `17` 枚举值之一
| product_name {data-required data-indent=1} | string | 商品名称
| energy_grade {data-indent=1} | string | 能效等级<br/>`FIRST_LEVEL` \| `SECOND_LEVEL` \| `ENERGY_GRADE_UNKNOWN` 枚举值之一
| brand {data-required data-indent=1} | string | 家电品牌
| qualification_region_code {data-required data-indent=1} | number | 使用的资格的地区编码
| seller_name {data-required data-indent=1} | string | 销售企业名称
| license_number {data-required data-indent=1} | string | 统一社会信息代码
| base_price {data-required data-indent=1} | number | 基准价格
| average_trading_price {data-required data-indent=1} | number | 近1个月平均交易价，单位：分
| product_type {data-required data-indent=1} | string | 产品类型<br/>`COMMON_PRODUCT` \| `AI_PRODUCT` 枚举值之一
| product_model {data-indent=1} | string | 商品型号
| bar_code {data-required data-indent=1} | string | 商品条码

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->gov->subsidy->goods->upload->postAsync([
  'json' => [
    'appliance_id'              => 1,
    'product_name'              => '测试商品',
    'energy_grade'              => 'FIRST_LEVEL',
    'brand'                     => '海尔',
    'qualification_region_code' => 310100,
    'seller_name'               => '联想（北京）信息技术有限公司',
    'license_number'            => '91110108397173806M',
    'base_price'                => 10000,
    'average_trading_price'     => 10000,
    'product_type'              => 'COMMON_PRODUCT',
    'product_model'             => 'XX',
    'bar_code'                  => '6901010101098',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/gov/subsidy/goods/upload')->postAsync([
  'json' => [
    'appliance_id'              => 1,
    'product_name'              => '测试商品',
    'energy_grade'              => 'FIRST_LEVEL',
    'brand'                     => '海尔',
    'qualification_region_code' => 310100,
    'seller_name'               => '联想（北京）信息技术有限公司',
    'license_number'            => '91110108397173806M',
    'base_price'                => 10000,
    'average_trading_price'     => 10000,
    'product_type'              => 'COMMON_PRODUCT',
    'product_model'             => 'XX',
    'bar_code'                  => '6901010101098',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/gov/subsidy/goods/upload']->postAsync([
  'json' => [
    'appliance_id'              => 1,
    'product_name'              => '测试商品',
    'energy_grade'              => 'FIRST_LEVEL',
    'brand'                     => '海尔',
    'qualification_region_code' => 310100,
    'seller_name'               => '联想（北京）信息技术有限公司',
    'license_number'            => '91110108397173806M',
    'base_price'                => 10000,
    'average_trading_price'     => 10000,
    'product_type'              => 'COMMON_PRODUCT',
    'product_model'             => 'XX',
    'bar_code'                  => '6901010101098',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->gov->subsidy->goods->upload->post([
  'json' => [
    'appliance_id'              => 1,
    'product_name'              => '测试商品',
    'energy_grade'              => 'FIRST_LEVEL',
    'brand'                     => '海尔',
    'qualification_region_code' => 310100,
    'seller_name'               => '联想（北京）信息技术有限公司',
    'license_number'            => '91110108397173806M',
    'base_price'                => 10000,
    'average_trading_price'     => 10000,
    'product_type'              => 'COMMON_PRODUCT',
    'product_model'             => 'XX',
    'bar_code'                  => '6901010101098',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/gov/subsidy/goods/upload')->post([
  'json' => [
    'appliance_id'              => 1,
    'product_name'              => '测试商品',
    'energy_grade'              => 'FIRST_LEVEL',
    'brand'                     => '海尔',
    'qualification_region_code' => 310100,
    'seller_name'               => '联想（北京）信息技术有限公司',
    'license_number'            => '91110108397173806M',
    'base_price'                => 10000,
    'average_trading_price'     => 10000,
    'product_type'              => 'COMMON_PRODUCT',
    'product_model'             => 'XX',
    'bar_code'                  => '6901010101098',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/gov/subsidy/goods/upload']->post([
  'json' => [
    'appliance_id'              => 1,
    'product_name'              => '测试商品',
    'energy_grade'              => 'FIRST_LEVEL',
    'brand'                     => '海尔',
    'qualification_region_code' => 310100,
    'seller_name'               => '联想（北京）信息技术有限公司',
    'license_number'            => '91110108397173806M',
    'base_price'                => 10000,
    'average_trading_price'     => 10000,
    'product_type'              => 'COMMON_PRODUCT',
    'product_model'             => 'XX',
    'bar_code'                  => '6901010101098',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| code {data-required} | string | 响应码
| message {data-required} | string | 响应描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013989543)
