---
title: 品类凭证码上报撤销
description: 品类凭证码上报撤销
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_serial_no {data-required data-indent=1} | string | 接入方请求流水号
| cred_frozen_no {data-required data-indent=1} | string | 冻结流水号
| trans_date {data-required data-indent=1} | string | 交易日期
| trans_time {data-required data-indent=1} | string | 交易时间
| order_no {data-indent=1} | string | 商户订单号
| subsidy_amt {data-indent=1} | number | 政府补贴金额
| add_code {data-indent=1} | string | 收货地区编码
| address {data-indent=1} | string | 收货地址
| sale_models {data-indent=1} | string | 销售方式(0-线上/1-线下)<br/>`0` \| `1` 枚举值之一
| uniscid {data-indent=1} | string | 统一社会信息代码(18 位，请与营业 执照上保持一致)
| barcode {data-indent=1} | string | 商品条码(13 位或 14 位)
| auth_code {data-required data-indent=1} | string | 品类凭证码
| req_ssn {data-required data-indent=1} | string | 请求流水号
| bank_name {data-indent=1} | string | 银行机构名称
| bank_subsidy {data-indent=1} | string | 银行补贴金额(都是正数，以元为单 位)
| plat_subsidy {data-indent=1} | string | 交易平台补贴金额(都是正数，以元 为单位)
| corp_name {data-indent=1} | string | 销售企业名称
| brand {data-indent=1} | string | 家电品牌

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->gov->subsidy->zhejiang->authcode->refund->postAsync([
  'json' => [
    'sp_serial_no'   => '',
    'cred_frozen_no' => '',
    'trans_date'     => '',
    'trans_time'     => '',
    'order_no'       => '',
    'subsidy_amt'    => 0,
    'add_code'       => '',
    'address'        => '',
    'sale_models'    => '0',
    'uniscid'        => '',
    'barcode'        => '',
    'auth_code'      => '',
    'req_ssn'        => '123',
    'bank_name'      => '',
    'bank_subsidy'   => '',
    'plat_subsidy'   => '',
    'corp_name'      => '',
    'brand'          => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/gov/subsidy/zhejiang/authcode/refund')->postAsync([
  'json' => [
    'sp_serial_no'   => '',
    'cred_frozen_no' => '',
    'trans_date'     => '',
    'trans_time'     => '',
    'order_no'       => '',
    'subsidy_amt'    => 0,
    'add_code'       => '',
    'address'        => '',
    'sale_models'    => '0',
    'uniscid'        => '',
    'barcode'        => '',
    'auth_code'      => '',
    'req_ssn'        => '123',
    'bank_name'      => '',
    'bank_subsidy'   => '',
    'plat_subsidy'   => '',
    'corp_name'      => '',
    'brand'          => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/gov/subsidy/zhejiang/authcode/refund']->postAsync([
  'json' => [
    'sp_serial_no'   => '',
    'cred_frozen_no' => '',
    'trans_date'     => '',
    'trans_time'     => '',
    'order_no'       => '',
    'subsidy_amt'    => 0,
    'add_code'       => '',
    'address'        => '',
    'sale_models'    => '0',
    'uniscid'        => '',
    'barcode'        => '',
    'auth_code'      => '',
    'req_ssn'        => '123',
    'bank_name'      => '',
    'bank_subsidy'   => '',
    'plat_subsidy'   => '',
    'corp_name'      => '',
    'brand'          => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->gov->subsidy->zhejiang->authcode->refund->post([
  'json' => [
    'sp_serial_no'   => '',
    'cred_frozen_no' => '',
    'trans_date'     => '',
    'trans_time'     => '',
    'order_no'       => '',
    'subsidy_amt'    => 0,
    'add_code'       => '',
    'address'        => '',
    'sale_models'    => '0',
    'uniscid'        => '',
    'barcode'        => '',
    'auth_code'      => '',
    'req_ssn'        => '123',
    'bank_name'      => '',
    'bank_subsidy'   => '',
    'plat_subsidy'   => '',
    'corp_name'      => '',
    'brand'          => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/gov/subsidy/zhejiang/authcode/refund')->post([
  'json' => [
    'sp_serial_no'   => '',
    'cred_frozen_no' => '',
    'trans_date'     => '',
    'trans_time'     => '',
    'order_no'       => '',
    'subsidy_amt'    => 0,
    'add_code'       => '',
    'address'        => '',
    'sale_models'    => '0',
    'uniscid'        => '',
    'barcode'        => '',
    'auth_code'      => '',
    'req_ssn'        => '123',
    'bank_name'      => '',
    'bank_subsidy'   => '',
    'plat_subsidy'   => '',
    'corp_name'      => '',
    'brand'          => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/gov/subsidy/zhejiang/authcode/refund']->post([
  'json' => [
    'sp_serial_no'   => '',
    'cred_frozen_no' => '',
    'trans_date'     => '',
    'trans_time'     => '',
    'order_no'       => '',
    'subsidy_amt'    => 0,
    'add_code'       => '',
    'address'        => '',
    'sale_models'    => '0',
    'uniscid'        => '',
    'barcode'        => '',
    'auth_code'      => '',
    'req_ssn'        => '123',
    'bank_name'      => '',
    'bank_subsidy'   => '',
    'plat_subsidy'   => '',
    'corp_name'      => '',
    'brand'          => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| resp_code {data-required} | string | 响应码
| resp_desc {data-required} | string | 响应描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013989530)
