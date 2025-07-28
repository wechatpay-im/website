---
title: 核销资格
description: 核销资格
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| req_ssn {data-indent=1} | string | 请求流水号
| data {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 资格集合
| auth_code {data-required data-indent=2} | string | 品类凭证码
| cate_code {data-required data-indent=2} | string | 品类编码
| cert_no {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 证件号码
| grade {data-indent=2} | string | 能耗等级<br/>`一级` \| `二级` 枚举值之一
| name {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 姓名
| operation_time {data-required data-indent=2} | string | 交易完成或商品退回时间戳
| bank_name {data-indent=2} | string | 银行机构名称
| bank_subsidy {data-indent=2} | string | 银行补贴金额(都是正数，以元为单 位)
| plat_subsidy {data-indent=2} | string | 交易平台补贴金额(都是正数，以元 为单位)
| sales {data-required data-indent=2} | string | 销售金额(单位元)
| status {data-required data-indent=2} | string | 品类状态<br/>`0` \| `1` 枚举值之一
| subsidy {data-required data-indent=2} | string | 政府补贴金额(都是正数，以元为单 位)
| tel {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 手机号
| add_code {data-required data-indent=2} | string | 区县编码
| address {data-required data-indent=2} | string | 收货地址
| sale_models {data-required data-indent=2} | string | 销售方式(0-线上/1-线下)<br/>`0` \| `1` 枚举值之一
| sn_code {data-required data-indent=2} | string | S/N码
| uniscid {data-required data-indent=2} | string | 统一社会信息代码(18 位，请与营业 执照上保持一致)
| corp_name {data-required data-indent=2} | string | 销售企业名称
| barcode {data-required data-indent=2} | string | 商品条码(13 位或 14 位)
| item_name {data-required data-indent=2} | string | 商品名称
| spec_model {data-required data-indent=2} | string | 规格型号
| brand {data-required data-indent=2} | string | 家电品牌
| logistics_no {data-indent=2} | string | 物流单号(不超过 100 位)
| delivery_time {data-indent=2} | string | 签收时间
| invoice_no {data-indent=2} | string | 发票号(不超过 100 位)
| is_ai_product {data-required data-indent=2} | string | 是否属于 AI 产品(0-是/1-否)
| pc_type {data-indent=2} | string | 类型(台式、笔记本)，当品类为电 脑时必填
| order_no {data-required data-indent=2} | string | 商户订单号(不超过 50 位)
| origin_order_no {data-indent=2} | string | 原始订单号，退货必传
| activity_add_code {data-required data-indent=2} | string | 活动地区编码(例如:110101)6位数字
| imei1 {data-indent=2} | string | IMEI1，通讯类设备必传
| imei2 {data-indent=2} | string | IMEI2
| ccc_sn_order_no {data-indent=2} | string | 3C SN 锁定解锁订单号
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->gov->subsidy->zhejiang->qualifications->sync->postAsync([
  'json' => [
    'req_ssn' => '123',
    'data'    => [[
      'auth_code'         => '0be5f8c9071ad939651948480316da8a2d610833bb63bf67c78fdee5edd5aea1',
      'cate_code'         => 'A01',
      'cert_no'           => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
      'grade'             => '一级',
      'name'              => 'OEimkKuua8igpd+0YDgqF2Z61l=',
      'operation_time'    => '',
      'bank_name'         => '',
      'bank_subsidy'      => '',
      'plat_subsidy'      => '',
      'sales'             => '',
      'status'            => '0',
      'subsidy'           => '',
      'tel'               => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
      'add_code'          => '330000',
      'address'           => '',
      'sale_models'       => '0',
      'sn_code'           => '',
      'uniscid'           => '',
      'corp_name'         => '',
      'barcode'           => '',
      'item_name'         => '',
      'spec_model'        => '',
      'brand'             => '',
      'logistics_no'      => '',
      'delivery_time'     => '',
      'invoice_no'        => '',
      'is_ai_product'     => '',
      'pc_type'           => '',
      'order_no'          => '',
      'origin_order_no'   => '',
      'activity_add_code' => '',
      'imei1'             => '',
      'imei2'             => '',
      'ccc_sn_order_no'   => '',
    ],],
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
$instance->chain('v3/gov/subsidy/zhejiang/qualifications/sync')->postAsync([
  'json' => [
    'req_ssn' => '123',
    'data'    => [[
      'auth_code'         => '0be5f8c9071ad939651948480316da8a2d610833bb63bf67c78fdee5edd5aea1',
      'cate_code'         => 'A01',
      'cert_no'           => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
      'grade'             => '一级',
      'name'              => 'OEimkKuua8igpd+0YDgqF2Z61l=',
      'operation_time'    => '',
      'bank_name'         => '',
      'bank_subsidy'      => '',
      'plat_subsidy'      => '',
      'sales'             => '',
      'status'            => '0',
      'subsidy'           => '',
      'tel'               => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
      'add_code'          => '330000',
      'address'           => '',
      'sale_models'       => '0',
      'sn_code'           => '',
      'uniscid'           => '',
      'corp_name'         => '',
      'barcode'           => '',
      'item_name'         => '',
      'spec_model'        => '',
      'brand'             => '',
      'logistics_no'      => '',
      'delivery_time'     => '',
      'invoice_no'        => '',
      'is_ai_product'     => '',
      'pc_type'           => '',
      'order_no'          => '',
      'origin_order_no'   => '',
      'activity_add_code' => '',
      'imei1'             => '',
      'imei2'             => '',
      'ccc_sn_order_no'   => '',
    ],],
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
$instance['v3/gov/subsidy/zhejiang/qualifications/sync']->postAsync([
  'json' => [
    'req_ssn' => '123',
    'data'    => [[
      'auth_code'         => '0be5f8c9071ad939651948480316da8a2d610833bb63bf67c78fdee5edd5aea1',
      'cate_code'         => 'A01',
      'cert_no'           => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
      'grade'             => '一级',
      'name'              => 'OEimkKuua8igpd+0YDgqF2Z61l=',
      'operation_time'    => '',
      'bank_name'         => '',
      'bank_subsidy'      => '',
      'plat_subsidy'      => '',
      'sales'             => '',
      'status'            => '0',
      'subsidy'           => '',
      'tel'               => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
      'add_code'          => '330000',
      'address'           => '',
      'sale_models'       => '0',
      'sn_code'           => '',
      'uniscid'           => '',
      'corp_name'         => '',
      'barcode'           => '',
      'item_name'         => '',
      'spec_model'        => '',
      'brand'             => '',
      'logistics_no'      => '',
      'delivery_time'     => '',
      'invoice_no'        => '',
      'is_ai_product'     => '',
      'pc_type'           => '',
      'order_no'          => '',
      'origin_order_no'   => '',
      'activity_add_code' => '',
      'imei1'             => '',
      'imei2'             => '',
      'ccc_sn_order_no'   => '',
    ],],
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
$response = $instance->v3->gov->subsidy->zhejiang->qualifications->sync->post([
  'json' => [
    'req_ssn' => '123',
    'data'    => [[
      'auth_code'         => '0be5f8c9071ad939651948480316da8a2d610833bb63bf67c78fdee5edd5aea1',
      'cate_code'         => 'A01',
      'cert_no'           => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
      'grade'             => '一级',
      'name'              => 'OEimkKuua8igpd+0YDgqF2Z61l=',
      'operation_time'    => '',
      'bank_name'         => '',
      'bank_subsidy'      => '',
      'plat_subsidy'      => '',
      'sales'             => '',
      'status'            => '0',
      'subsidy'           => '',
      'tel'               => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
      'add_code'          => '330000',
      'address'           => '',
      'sale_models'       => '0',
      'sn_code'           => '',
      'uniscid'           => '',
      'corp_name'         => '',
      'barcode'           => '',
      'item_name'         => '',
      'spec_model'        => '',
      'brand'             => '',
      'logistics_no'      => '',
      'delivery_time'     => '',
      'invoice_no'        => '',
      'is_ai_product'     => '',
      'pc_type'           => '',
      'order_no'          => '',
      'origin_order_no'   => '',
      'activity_add_code' => '',
      'imei1'             => '',
      'imei2'             => '',
      'ccc_sn_order_no'   => '',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/gov/subsidy/zhejiang/qualifications/sync')->post([
  'json' => [
    'req_ssn' => '123',
    'data'    => [[
      'auth_code'         => '0be5f8c9071ad939651948480316da8a2d610833bb63bf67c78fdee5edd5aea1',
      'cate_code'         => 'A01',
      'cert_no'           => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
      'grade'             => '一级',
      'name'              => 'OEimkKuua8igpd+0YDgqF2Z61l=',
      'operation_time'    => '',
      'bank_name'         => '',
      'bank_subsidy'      => '',
      'plat_subsidy'      => '',
      'sales'             => '',
      'status'            => '0',
      'subsidy'           => '',
      'tel'               => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
      'add_code'          => '330000',
      'address'           => '',
      'sale_models'       => '0',
      'sn_code'           => '',
      'uniscid'           => '',
      'corp_name'         => '',
      'barcode'           => '',
      'item_name'         => '',
      'spec_model'        => '',
      'brand'             => '',
      'logistics_no'      => '',
      'delivery_time'     => '',
      'invoice_no'        => '',
      'is_ai_product'     => '',
      'pc_type'           => '',
      'order_no'          => '',
      'origin_order_no'   => '',
      'activity_add_code' => '',
      'imei1'             => '',
      'imei2'             => '',
      'ccc_sn_order_no'   => '',
    ],],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/gov/subsidy/zhejiang/qualifications/sync']->post([
  'json' => [
    'req_ssn' => '123',
    'data'    => [[
      'auth_code'         => '0be5f8c9071ad939651948480316da8a2d610833bb63bf67c78fdee5edd5aea1',
      'cate_code'         => 'A01',
      'cert_no'           => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
      'grade'             => '一级',
      'name'              => 'OEimkKuua8igpd+0YDgqF2Z61l=',
      'operation_time'    => '',
      'bank_name'         => '',
      'bank_subsidy'      => '',
      'plat_subsidy'      => '',
      'sales'             => '',
      'status'            => '0',
      'subsidy'           => '',
      'tel'               => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
      'add_code'          => '330000',
      'address'           => '',
      'sale_models'       => '0',
      'sn_code'           => '',
      'uniscid'           => '',
      'corp_name'         => '',
      'barcode'           => '',
      'item_name'         => '',
      'spec_model'        => '',
      'brand'             => '',
      'logistics_no'      => '',
      'delivery_time'     => '',
      'invoice_no'        => '',
      'is_ai_product'     => '',
      'pc_type'           => '',
      'order_no'          => '',
      'origin_order_no'   => '',
      'activity_add_code' => '',
      'imei1'             => '',
      'imei2'             => '',
      'ccc_sn_order_no'   => '',
    ],],
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
| error_data | string[] | 异常数据说明列表

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013989530)
