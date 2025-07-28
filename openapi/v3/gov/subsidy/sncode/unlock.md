---
title: sn码解锁
description: 将锁定的sn解锁，就可以再次锁定给不同的订单号，但是要控制好不会一个sn多次售卖。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appliance_id {data-required data-indent=1} | number | 消费品类ID<br/>`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9` \| `10` \| `11` \| `12` \| `13` \| `14` \| `15` \| `16` \| `17` 枚举值之一
| out_trade_no {data-required data-indent=1} | string | 商户支付订单号
| qualification_region_code {data-required data-indent=1} | number | 使用的资格的地区编码
| sn_code {data-required data-indent=1} | string | S/N码
| barcode {data-required data-indent=1} | string | 商品条码
| product_type {data-required data-indent=1} | string | 产品类型<br/>`COMMON_PRODUCT` \| `AI_PRODUCT` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->gov->subsidy->sncode->unlock->postAsync([
  'json' => [
    'appliance_id'              => 1,
    'out_trade_no'              => 'vmall_250120131959_993_4494',
    'qualification_region_code' => 310100,
    'sn_code'                   => 'fallervuh',
    'barcode'                   => '6901010101098',
    'product_type'              => 'COMMON_PRODUCT',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/gov/subsidy/sncode/unlock')->postAsync([
  'json' => [
    'appliance_id'              => 1,
    'out_trade_no'              => 'vmall_250120131959_993_4494',
    'qualification_region_code' => 310100,
    'sn_code'                   => 'fallervuh',
    'barcode'                   => '6901010101098',
    'product_type'              => 'COMMON_PRODUCT',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/gov/subsidy/sncode/unlock']->postAsync([
  'json' => [
    'appliance_id'              => 1,
    'out_trade_no'              => 'vmall_250120131959_993_4494',
    'qualification_region_code' => 310100,
    'sn_code'                   => 'fallervuh',
    'barcode'                   => '6901010101098',
    'product_type'              => 'COMMON_PRODUCT',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->gov->subsidy->sncode->unlock->post([
  'json' => [
    'appliance_id'              => 1,
    'out_trade_no'              => 'vmall_250120131959_993_4494',
    'qualification_region_code' => 310100,
    'sn_code'                   => 'fallervuh',
    'barcode'                   => '6901010101098',
    'product_type'              => 'COMMON_PRODUCT',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/gov/subsidy/sncode/unlock')->post([
  'json' => [
    'appliance_id'              => 1,
    'out_trade_no'              => 'vmall_250120131959_993_4494',
    'qualification_region_code' => 310100,
    'sn_code'                   => 'fallervuh',
    'barcode'                   => '6901010101098',
    'product_type'              => 'COMMON_PRODUCT',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/gov/subsidy/sncode/unlock']->post([
  'json' => [
    'appliance_id'              => 1,
    'out_trade_no'              => 'vmall_250120131959_993_4494',
    'qualification_region_code' => 310100,
    'sn_code'                   => 'fallervuh',
    'barcode'                   => '6901010101098',
    'product_type'              => 'COMMON_PRODUCT',
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
