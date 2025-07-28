---
title: sn码锁定
description: sn码锁定
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| create_user {data-required data-indent=1} | string | 发起方
| province {data-required data-indent=1} | string | 省份代码
| manufact_cert_code {data-indent=1} | string | 厂商统一 社会信用 代码
| sn {data-required data-indent=1} | string | 商品 SN码
| goods_bar_code {data-required data-indent=1} | string | 商品条码
| goods_type {data-required data-indent=1} | string | 商品品类
| goods_name {data-required data-indent=1} | string | 商品名称
| goods_model {data-indent=1} | string | 商品型号
| imei1 {data-indent=1} | string | IMEI_1 码
| imei2 {data-indent=1} | string | IMEI_2 码
| trans_orderid {data-required data-indent=1} | string | 交易订单号
| order_price {data-required data-indent=1} | string | 订单金额
| acquire_code {data-indent=1} | string | 收单机构
| sell_orderid {data-required data-indent=1} | string | 销售订单号
| city {data-indent=1} | string | 市级区域代码
| county {data-indent=1} | string | 区县区域代码
| is_ai_product {data-indent=1} | string | 是否 AI 产品
| sale_time {data-indent=1} | string | 销售时间
| mfr_info {data-indent=1} | string | 厂商信息
| brand {data-indent=1} | string | 具体品牌
| sale_models {data-indent=1} | string | 渠道类型
| req_ssn {data-required data-indent=1} | string | 请求流水号
| req_time {data-required data-indent=1} | string | 请求时间

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->gov->subsidy->zhejiang->sncode->lock->postAsync([
  'json' => [
    'create_user'        => '',
    'province'           => '',
    'manufact_cert_code' => '',
    'sn'                 => '',
    'goods_bar_code'     => '',
    'goods_type'         => '',
    'goods_name'         => '',
    'goods_model'        => '',
    'imei1'              => '',
    'imei2'              => '',
    'trans_orderid'      => '',
    'order_price'        => '',
    'acquire_code'       => '',
    'sell_orderid'       => '',
    'city'               => '',
    'county'             => '',
    'is_ai_product'      => '',
    'sale_time'          => '',
    'mfr_info'           => '',
    'brand'              => '',
    'sale_models'        => '',
    'req_ssn'            => '',
    'req_time'           => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/gov/subsidy/zhejiang/sncode/lock')->postAsync([
  'json' => [
    'create_user'        => '',
    'province'           => '',
    'manufact_cert_code' => '',
    'sn'                 => '',
    'goods_bar_code'     => '',
    'goods_type'         => '',
    'goods_name'         => '',
    'goods_model'        => '',
    'imei1'              => '',
    'imei2'              => '',
    'trans_orderid'      => '',
    'order_price'        => '',
    'acquire_code'       => '',
    'sell_orderid'       => '',
    'city'               => '',
    'county'             => '',
    'is_ai_product'      => '',
    'sale_time'          => '',
    'mfr_info'           => '',
    'brand'              => '',
    'sale_models'        => '',
    'req_ssn'            => '',
    'req_time'           => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/gov/subsidy/zhejiang/sncode/lock']->postAsync([
  'json' => [
    'create_user'        => '',
    'province'           => '',
    'manufact_cert_code' => '',
    'sn'                 => '',
    'goods_bar_code'     => '',
    'goods_type'         => '',
    'goods_name'         => '',
    'goods_model'        => '',
    'imei1'              => '',
    'imei2'              => '',
    'trans_orderid'      => '',
    'order_price'        => '',
    'acquire_code'       => '',
    'sell_orderid'       => '',
    'city'               => '',
    'county'             => '',
    'is_ai_product'      => '',
    'sale_time'          => '',
    'mfr_info'           => '',
    'brand'              => '',
    'sale_models'        => '',
    'req_ssn'            => '',
    'req_time'           => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->gov->subsidy->zhejiang->sncode->lock->post([
  'json' => [
    'create_user'        => '',
    'province'           => '',
    'manufact_cert_code' => '',
    'sn'                 => '',
    'goods_bar_code'     => '',
    'goods_type'         => '',
    'goods_name'         => '',
    'goods_model'        => '',
    'imei1'              => '',
    'imei2'              => '',
    'trans_orderid'      => '',
    'order_price'        => '',
    'acquire_code'       => '',
    'sell_orderid'       => '',
    'city'               => '',
    'county'             => '',
    'is_ai_product'      => '',
    'sale_time'          => '',
    'mfr_info'           => '',
    'brand'              => '',
    'sale_models'        => '',
    'req_ssn'            => '',
    'req_time'           => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/gov/subsidy/zhejiang/sncode/lock')->post([
  'json' => [
    'create_user'        => '',
    'province'           => '',
    'manufact_cert_code' => '',
    'sn'                 => '',
    'goods_bar_code'     => '',
    'goods_type'         => '',
    'goods_name'         => '',
    'goods_model'        => '',
    'imei1'              => '',
    'imei2'              => '',
    'trans_orderid'      => '',
    'order_price'        => '',
    'acquire_code'       => '',
    'sell_orderid'       => '',
    'city'               => '',
    'county'             => '',
    'is_ai_product'      => '',
    'sale_time'          => '',
    'mfr_info'           => '',
    'brand'              => '',
    'sale_models'        => '',
    'req_ssn'            => '',
    'req_time'           => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/gov/subsidy/zhejiang/sncode/lock']->post([
  'json' => [
    'create_user'        => '',
    'province'           => '',
    'manufact_cert_code' => '',
    'sn'                 => '',
    'goods_bar_code'     => '',
    'goods_type'         => '',
    'goods_name'         => '',
    'goods_model'        => '',
    'imei1'              => '',
    'imei2'              => '',
    'trans_orderid'      => '',
    'order_price'        => '',
    'acquire_code'       => '',
    'sell_orderid'       => '',
    'city'               => '',
    'county'             => '',
    'is_ai_product'      => '',
    'sale_time'          => '',
    'mfr_info'           => '',
    'brand'              => '',
    'sale_models'        => '',
    'req_ssn'            => '',
    'req_time'           => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| resp_code {data-required} | string | 响应码
| resp_desc {data-required} | string | 响应描述
| imei1 | string | IMEI_1 码
| imei2 | string | IMEI_2 码

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013989530)
