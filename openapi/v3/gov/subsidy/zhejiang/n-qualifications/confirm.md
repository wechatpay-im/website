---
title: n品类核销
description: n品类核销
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| data {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 品类集合
| cate_code {data-required data-indent=2} | string | 品类编码
| cert_no {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 证件号码（身份证中字母需 大写，不要有空格
| grade {data-indent=2} | string | 能耗等级（一级/二级），品类编码 A开头必填，其他非必填
| name {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 姓名
| operation_time {data-required data-indent=2} | string | 交易完成或商品退回时间戳（调用 System.currentTimeMillis 方法）
| bank_name {data-indent=2} | string | 银行机构名称
| bank_subsidy {data-indent=2} | string | 银行补贴金额（都是正数，以元为单位）
| plat_subsidy {data-indent=2} | string | 交易平台补贴金额（都是正数，以元为单位）
| sales {data-required data-indent=2} | string | 销售金额（都是正数，以元为单位）
| status {data-required data-indent=2} | string | 品类状态（0-已核销/1-已退回）
| subsidy {data-required data-indent=2} | string | 政府补贴金额（都是正数，以元为单位）
| tel {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 手机号
| add_code {data-required data-indent=2} | string | 收货地区编码（例如：110 101）6 位数字
| address {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 收货地址（例如：xx 街道 xx 小区）
| sale_models {data-required data-indent=2} | string | 销售方式（0-线上/1-线下）
| brand {data-required data-indent=2} | string | 家电品牌
| activity_add_code {data-required data-indent=2} | string | 活动资金地区编码（例如：110 101）6 位数字
| uniscid {data-required data-indent=2} | string | 统一社会信息代码（18 位，请与营业执照上保持一致）
| corp_name {data-required data-indent=2} | string | 销售企业名称（不超过 100 位，请与营业执照上保持一致）
| serial_num {data-required data-indent=2} | string | 数据流水号，保证平台唯一
| req_ssn {data-required data-indent=1} | string | 请求流水号
| req_time {data-indent=1} | string | 请求时间
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->gov->subsidy->zhejiang->nQualifications->confirm->postAsync([
  'json' => [
    'data'     => [[
      'cate_code'         => '',
      'cert_no'           => '',
      'grade'             => '',
      'name'              => '',
      'operation_time'    => '',
      'bank_name'         => '',
      'bank_subsidy'      => '',
      'plat_subsidy'      => '',
      'sales'             => '',
      'status'            => '',
      'subsidy'           => '',
      'tel'               => '',
      'add_code'          => '',
      'address'           => '',
      'sale_models'       => '',
      'brand'             => '',
      'activity_add_code' => '',
      'uniscid'           => '',
      'corp_name'         => '',
      'serial_num'        => '',
    ],],
    'req_ssn'  => '123',
    'req_time' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/gov/subsidy/zhejiang/n-qualifications/confirm')->postAsync([
  'json' => [
    'data'     => [[
      'cate_code'         => '',
      'cert_no'           => '',
      'grade'             => '',
      'name'              => '',
      'operation_time'    => '',
      'bank_name'         => '',
      'bank_subsidy'      => '',
      'plat_subsidy'      => '',
      'sales'             => '',
      'status'            => '',
      'subsidy'           => '',
      'tel'               => '',
      'add_code'          => '',
      'address'           => '',
      'sale_models'       => '',
      'brand'             => '',
      'activity_add_code' => '',
      'uniscid'           => '',
      'corp_name'         => '',
      'serial_num'        => '',
    ],],
    'req_ssn'  => '123',
    'req_time' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/gov/subsidy/zhejiang/n-qualifications/confirm']->postAsync([
  'json' => [
    'data'     => [[
      'cate_code'         => '',
      'cert_no'           => '',
      'grade'             => '',
      'name'              => '',
      'operation_time'    => '',
      'bank_name'         => '',
      'bank_subsidy'      => '',
      'plat_subsidy'      => '',
      'sales'             => '',
      'status'            => '',
      'subsidy'           => '',
      'tel'               => '',
      'add_code'          => '',
      'address'           => '',
      'sale_models'       => '',
      'brand'             => '',
      'activity_add_code' => '',
      'uniscid'           => '',
      'corp_name'         => '',
      'serial_num'        => '',
    ],],
    'req_ssn'  => '123',
    'req_time' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->gov->subsidy->zhejiang->nQualifications->confirm->post([
  'json' => [
    'data'     => [[
      'cate_code'         => '',
      'cert_no'           => '',
      'grade'             => '',
      'name'              => '',
      'operation_time'    => '',
      'bank_name'         => '',
      'bank_subsidy'      => '',
      'plat_subsidy'      => '',
      'sales'             => '',
      'status'            => '',
      'subsidy'           => '',
      'tel'               => '',
      'add_code'          => '',
      'address'           => '',
      'sale_models'       => '',
      'brand'             => '',
      'activity_add_code' => '',
      'uniscid'           => '',
      'corp_name'         => '',
      'serial_num'        => '',
    ],],
    'req_ssn'  => '123',
    'req_time' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/gov/subsidy/zhejiang/n-qualifications/confirm')->post([
  'json' => [
    'data'     => [[
      'cate_code'         => '',
      'cert_no'           => '',
      'grade'             => '',
      'name'              => '',
      'operation_time'    => '',
      'bank_name'         => '',
      'bank_subsidy'      => '',
      'plat_subsidy'      => '',
      'sales'             => '',
      'status'            => '',
      'subsidy'           => '',
      'tel'               => '',
      'add_code'          => '',
      'address'           => '',
      'sale_models'       => '',
      'brand'             => '',
      'activity_add_code' => '',
      'uniscid'           => '',
      'corp_name'         => '',
      'serial_num'        => '',
    ],],
    'req_ssn'  => '123',
    'req_time' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/gov/subsidy/zhejiang/n-qualifications/confirm']->post([
  'json' => [
    'data'     => [[
      'cate_code'         => '',
      'cert_no'           => '',
      'grade'             => '',
      'name'              => '',
      'operation_time'    => '',
      'bank_name'         => '',
      'bank_subsidy'      => '',
      'plat_subsidy'      => '',
      'sales'             => '',
      'status'            => '',
      'subsidy'           => '',
      'tel'               => '',
      'add_code'          => '',
      'address'           => '',
      'sale_models'       => '',
      'brand'             => '',
      'activity_add_code' => '',
      'uniscid'           => '',
      'corp_name'         => '',
      'serial_num'        => '',
    ],],
    'req_ssn'  => '123',
    'req_time' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
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
