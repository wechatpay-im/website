---
title: 领取资格(透传模式)
description: 领取资格
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| real_name {data-required data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 自然人姓名
| id_card_number {data-required data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 自然人证件号
| phone_number {data-required data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 手机号
| appliance_id {data-indent=1} | number | 消费品类ID<br/>`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9` \| `10` \| `11` \| `12` \| `13` \| `14` \| `15` \| `16` \| `17` 枚举值之一
| qualification_region_code {data-required data-indent=1} | number | 使用的资格的地区编码
| identity_document_type {data-required data-indent=1} | string | 证件类型<br/>`ID_DOC_TYPE_ID_CARD` \| `ID_DOC_TYPE_MAINLAND_TRAVEL_PERMIT_FOR_HK_MC` \| `ID_DOC_TYPE_MAINLAND_TRAVEL_PERMIT_FOR_TW` 枚举值之一
| longitude {data-required data-indent=1} | string | 经度
| latitude {data-required data-indent=1} | string | 纬度
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->gov->subsidy->qualifications->passthrough->claim->postAsync([
  'json' => [
    'real_name'                 => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'id_card_number'            => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'phone_number'              => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'appliance_id'              => 1,
    'qualification_region_code' => 310100,
    'identity_document_type'    => 'ID_DOC_TYPE_ID_CARD',
    'longitude'                 => '',
    'latitude'                  => '',
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
$instance->chain('v3/gov/subsidy/qualifications/passthrough/claim')->postAsync([
  'json' => [
    'real_name'                 => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'id_card_number'            => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'phone_number'              => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'appliance_id'              => 1,
    'qualification_region_code' => 310100,
    'identity_document_type'    => 'ID_DOC_TYPE_ID_CARD',
    'longitude'                 => '',
    'latitude'                  => '',
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
$instance['v3/gov/subsidy/qualifications/passthrough/claim']->postAsync([
  'json' => [
    'real_name'                 => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'id_card_number'            => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'phone_number'              => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'appliance_id'              => 1,
    'qualification_region_code' => 310100,
    'identity_document_type'    => 'ID_DOC_TYPE_ID_CARD',
    'longitude'                 => '',
    'latitude'                  => '',
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
$response = $instance->v3->gov->subsidy->qualifications->passthrough->claim->post([
  'json' => [
    'real_name'                 => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'id_card_number'            => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'phone_number'              => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'appliance_id'              => 1,
    'qualification_region_code' => 310100,
    'identity_document_type'    => 'ID_DOC_TYPE_ID_CARD',
    'longitude'                 => '',
    'latitude'                  => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/gov/subsidy/qualifications/passthrough/claim')->post([
  'json' => [
    'real_name'                 => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'id_card_number'            => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'phone_number'              => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'appliance_id'              => 1,
    'qualification_region_code' => 310100,
    'identity_document_type'    => 'ID_DOC_TYPE_ID_CARD',
    'longitude'                 => '',
    'latitude'                  => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/gov/subsidy/qualifications/passthrough/claim']->post([
  'json' => [
    'real_name'                 => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'id_card_number'            => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'phone_number'              => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'appliance_id'              => 1,
    'qualification_region_code' => 310100,
    'identity_document_type'    => 'ID_DOC_TYPE_ID_CARD',
    'longitude'                 => '',
    'latitude'                  => '',
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
