---
title: sn码销售状态查询
description: sn码销售状态查询
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sn {data-required data-indent=1} | string | 商品SN码
| province {data-required data-indent=1} | string | 省份代码
| manufact_cert_code {data-indent=1} | string | 厂商统一社会信 用代码
| goods_type {data-required data-indent=1} | string | 商品品类
| goods_bar_code {data-required data-indent=1} | string | 商品条码
| imei1 {data-indent=1} | string | IMEI_1 码
| imei2 {data-indent=1} | string | IMEI_2 码
| sales_models {data-indent=1} | string | 渠道类型
| req_ssn {data-required data-indent=1} | string | 请求流水号
| req_time {data-required data-indent=1} | string | 请求时间

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->gov->subsidy->zhejiang->sncode->query->postAsync([
  'json' => [
    'sn'                 => '',
    'province'           => '',
    'manufact_cert_code' => '',
    'goods_type'         => '',
    'goods_bar_code'     => '',
    'imei1'              => '',
    'imei2'              => '',
    'sales_models'       => '',
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
$instance->chain('v3/gov/subsidy/zhejiang/sncode/query')->postAsync([
  'json' => [
    'sn'                 => '',
    'province'           => '',
    'manufact_cert_code' => '',
    'goods_type'         => '',
    'goods_bar_code'     => '',
    'imei1'              => '',
    'imei2'              => '',
    'sales_models'       => '',
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
$instance['v3/gov/subsidy/zhejiang/sncode/query']->postAsync([
  'json' => [
    'sn'                 => '',
    'province'           => '',
    'manufact_cert_code' => '',
    'goods_type'         => '',
    'goods_bar_code'     => '',
    'imei1'              => '',
    'imei2'              => '',
    'sales_models'       => '',
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
$response = $instance->v3->gov->subsidy->zhejiang->sncode->query->post([
  'json' => [
    'sn'                 => '',
    'province'           => '',
    'manufact_cert_code' => '',
    'goods_type'         => '',
    'goods_bar_code'     => '',
    'imei1'              => '',
    'imei2'              => '',
    'sales_models'       => '',
    'req_ssn'            => '',
    'req_time'           => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/gov/subsidy/zhejiang/sncode/query')->post([
  'json' => [
    'sn'                 => '',
    'province'           => '',
    'manufact_cert_code' => '',
    'goods_type'         => '',
    'goods_bar_code'     => '',
    'imei1'              => '',
    'imei2'              => '',
    'sales_models'       => '',
    'req_ssn'            => '',
    'req_time'           => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/gov/subsidy/zhejiang/sncode/query']->post([
  'json' => [
    'sn'                 => '',
    'province'           => '',
    'manufact_cert_code' => '',
    'goods_type'         => '',
    'goods_bar_code'     => '',
    'imei1'              => '',
    'imei2'              => '',
    'sales_models'       => '',
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
| sn | string | 商品SN码
| province | string | 省份代码
| sell_state | string | 售卖状态<br/>`U0022` \| `U0023` \| `U0024` \| `U9999` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013989530)
