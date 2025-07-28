---
title: 交易信息回传
description: 同步支付成功后可得知的信息，必须在完成交易（支付成功后）后实时调用，和同步核销信息解耦，同步核销信息中的字段更全一些。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| real_name {data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 自然人姓名
| id_card_number {data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 自然人证件号
| phone_number {data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 手机号
| appliance_id {data-indent=1} | number | 消费品类ID<br/>`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9` \| `10` \| `11` \| `12` \| `13` \| `14` \| `15` \| `16` \| `17` 枚举值之一
| out_trade_no {data-required data-indent=1} | string | 商户支付订单号
| energy_grade {data-indent=1} | string | 能效等级<br/>`FIRST_LEVEL` \| `SECOND_LEVEL` \| `ENERGY_GRADE_UNKNOWN` 枚举值之一
| receive_region_code {data-required data-indent=1} | string | 收货地区编码
| brand {data-required data-indent=1} | string | 家电品牌
| address {data-indent=1} | string | 收货地址
| qualification_region_code {data-required data-indent=1} | number | 使用的资格的地区编码
| seller_name {data-required data-indent=1} | string | 销售企业名称
| license_number {data-required data-indent=1} | string | 统一社会信息代码
| order_amount {data-required data-indent=1} | number | 订单金额
| discount_amount {data-required data-indent=1} | number | 优惠金额，单位为分，**注意:只传国补相关优惠，其他非国补的优惠不可叠加在这里**
| transaction_time {data-required data-indent=1} | string | 交易完成或商品退回时间
| mch_order_id {data-required data-indent=1} | string | 线上平台订单编号
| refund_id {data-indent=1} | string | 线上平台退款交易编号
| mch_name {data-required data-indent=1} | string | 销售主体，开票主体，商户名称
| sale_model {data-indent=1} | string | 销售方式<br/>`SALE_MODEL_ONLINE` \| `SALE_MODEL_OFFLINE` 枚举值之一
| cate_state {data-required data-indent=1} | string | 品类状态<br/>`CATE_STATE_REDEEM` \| `CATE_STATE_REFUND` 枚举值之一
| identity_document_type {data-required data-indent=1} | string | 证件类型<br/>`ID_DOC_TYPE_ID_CARD` \| `ID_DOC_TYPE_MAINLAND_TRAVEL_PERMIT_FOR_HK_MC` \| `ID_DOC_TYPE_MAINLAND_TRAVEL_PERMIT_FOR_TW` 枚举值之一
| sub_mchid {data-indent=1} | string | 子商户号
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->gov->subsidy->transactions->sync->postAsync([
  'json' => [
    'real_name'                 => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'id_card_number'            => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'phone_number'              => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'appliance_id'              => 1,
    'out_trade_no'              => 'vmall_250120131959_993_4494',
    'energy_grade'              => 'FIRST_LEVEL',
    'receive_region_code'       => '110101',
    'brand'                     => '海尔',
    'address'                   => '深圳市南山区',
    'qualification_region_code' => 310100,
    'seller_name'               => '联想（北京）信息技术有限公司',
    'license_number'            => '91110108397173806M',
    'order_amount'              => 10000,
    'discount_amount'           => 2000,
    'transaction_time'          => '2025-01-14T19:55:06+08:00',
    'mch_order_id'              => '123456789',
    'refund_id'                 => '123456789',
    'mch_name'                  => '江苏京东信息技术有限公司',
    'sale_model'                => 'SALE_MODEL_OFFLINE',
    'cate_state'                => 'CATE_STATE_REDEEM',
    'identity_document_type'    => 'ID_DOC_TYPE_ID_CARD',
    'sub_mchid'                 => '123456',
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
$instance->chain('v3/gov/subsidy/transactions/sync')->postAsync([
  'json' => [
    'real_name'                 => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'id_card_number'            => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'phone_number'              => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'appliance_id'              => 1,
    'out_trade_no'              => 'vmall_250120131959_993_4494',
    'energy_grade'              => 'FIRST_LEVEL',
    'receive_region_code'       => '110101',
    'brand'                     => '海尔',
    'address'                   => '深圳市南山区',
    'qualification_region_code' => 310100,
    'seller_name'               => '联想（北京）信息技术有限公司',
    'license_number'            => '91110108397173806M',
    'order_amount'              => 10000,
    'discount_amount'           => 2000,
    'transaction_time'          => '2025-01-14T19:55:06+08:00',
    'mch_order_id'              => '123456789',
    'refund_id'                 => '123456789',
    'mch_name'                  => '江苏京东信息技术有限公司',
    'sale_model'                => 'SALE_MODEL_OFFLINE',
    'cate_state'                => 'CATE_STATE_REDEEM',
    'identity_document_type'    => 'ID_DOC_TYPE_ID_CARD',
    'sub_mchid'                 => '123456',
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
$instance['v3/gov/subsidy/transactions/sync']->postAsync([
  'json' => [
    'real_name'                 => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'id_card_number'            => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'phone_number'              => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'appliance_id'              => 1,
    'out_trade_no'              => 'vmall_250120131959_993_4494',
    'energy_grade'              => 'FIRST_LEVEL',
    'receive_region_code'       => '110101',
    'brand'                     => '海尔',
    'address'                   => '深圳市南山区',
    'qualification_region_code' => 310100,
    'seller_name'               => '联想（北京）信息技术有限公司',
    'license_number'            => '91110108397173806M',
    'order_amount'              => 10000,
    'discount_amount'           => 2000,
    'transaction_time'          => '2025-01-14T19:55:06+08:00',
    'mch_order_id'              => '123456789',
    'refund_id'                 => '123456789',
    'mch_name'                  => '江苏京东信息技术有限公司',
    'sale_model'                => 'SALE_MODEL_OFFLINE',
    'cate_state'                => 'CATE_STATE_REDEEM',
    'identity_document_type'    => 'ID_DOC_TYPE_ID_CARD',
    'sub_mchid'                 => '123456',
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
$response = $instance->v3->gov->subsidy->transactions->sync->post([
  'json' => [
    'real_name'                 => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'id_card_number'            => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'phone_number'              => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'appliance_id'              => 1,
    'out_trade_no'              => 'vmall_250120131959_993_4494',
    'energy_grade'              => 'FIRST_LEVEL',
    'receive_region_code'       => '110101',
    'brand'                     => '海尔',
    'address'                   => '深圳市南山区',
    'qualification_region_code' => 310100,
    'seller_name'               => '联想（北京）信息技术有限公司',
    'license_number'            => '91110108397173806M',
    'order_amount'              => 10000,
    'discount_amount'           => 2000,
    'transaction_time'          => '2025-01-14T19:55:06+08:00',
    'mch_order_id'              => '123456789',
    'refund_id'                 => '123456789',
    'mch_name'                  => '江苏京东信息技术有限公司',
    'sale_model'                => 'SALE_MODEL_OFFLINE',
    'cate_state'                => 'CATE_STATE_REDEEM',
    'identity_document_type'    => 'ID_DOC_TYPE_ID_CARD',
    'sub_mchid'                 => '123456',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/gov/subsidy/transactions/sync')->post([
  'json' => [
    'real_name'                 => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'id_card_number'            => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'phone_number'              => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'appliance_id'              => 1,
    'out_trade_no'              => 'vmall_250120131959_993_4494',
    'energy_grade'              => 'FIRST_LEVEL',
    'receive_region_code'       => '110101',
    'brand'                     => '海尔',
    'address'                   => '深圳市南山区',
    'qualification_region_code' => 310100,
    'seller_name'               => '联想（北京）信息技术有限公司',
    'license_number'            => '91110108397173806M',
    'order_amount'              => 10000,
    'discount_amount'           => 2000,
    'transaction_time'          => '2025-01-14T19:55:06+08:00',
    'mch_order_id'              => '123456789',
    'refund_id'                 => '123456789',
    'mch_name'                  => '江苏京东信息技术有限公司',
    'sale_model'                => 'SALE_MODEL_OFFLINE',
    'cate_state'                => 'CATE_STATE_REDEEM',
    'identity_document_type'    => 'ID_DOC_TYPE_ID_CARD',
    'sub_mchid'                 => '123456',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/gov/subsidy/transactions/sync']->post([
  'json' => [
    'real_name'                 => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'id_card_number'            => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'phone_number'              => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'appliance_id'              => 1,
    'out_trade_no'              => 'vmall_250120131959_993_4494',
    'energy_grade'              => 'FIRST_LEVEL',
    'receive_region_code'       => '110101',
    'brand'                     => '海尔',
    'address'                   => '深圳市南山区',
    'qualification_region_code' => 310100,
    'seller_name'               => '联想（北京）信息技术有限公司',
    'license_number'            => '91110108397173806M',
    'order_amount'              => 10000,
    'discount_amount'           => 2000,
    'transaction_time'          => '2025-01-14T19:55:06+08:00',
    'mch_order_id'              => '123456789',
    'refund_id'                 => '123456789',
    'mch_name'                  => '江苏京东信息技术有限公司',
    'sale_model'                => 'SALE_MODEL_OFFLINE',
    'cate_state'                => 'CATE_STATE_REDEEM',
    'identity_document_type'    => 'ID_DOC_TYPE_ID_CARD',
    'sub_mchid'                 => '123456',
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
| code {data-required} | string | 响应码
| message {data-required} | string | 响应描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013989543)
