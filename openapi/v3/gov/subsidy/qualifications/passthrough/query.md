---
title: 批量查询用户资格(透传模式)
description: 批量查询用户领取的所有品类的资格，同时兼容接口透传模式和小程序模式的资格。此接口可查询透传模式的资格领取情况，但对接方务必自己存储资格状态。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| real_name {data-required data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 自然人姓名
| id_card_number {data-required data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 自然人证件号
| phone_number {data-required data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 手机号
| qualification_region_code {data-required data-indent=1} | number | 使用的资格的地区编码
| identity_document_type {data-required data-indent=1} | string | 证件类型<br/>`ID_DOC_TYPE_ID_CARD` \| `ID_DOC_TYPE_MAINLAND_TRAVEL_PERMIT_FOR_HK_MC` \| `ID_DOC_TYPE_MAINLAND_TRAVEL_PERMIT_FOR_TW` 枚举值之一
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->gov->subsidy->qualifications->passthrough->query->postAsync([
  'json' => [
    'real_name'                 => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'id_card_number'            => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'phone_number'              => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'qualification_region_code' => 310100,
    'identity_document_type'    => 'ID_DOC_TYPE_ID_CARD',
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
$instance->chain('v3/gov/subsidy/qualifications/passthrough/query')->postAsync([
  'json' => [
    'real_name'                 => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'id_card_number'            => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'phone_number'              => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'qualification_region_code' => 310100,
    'identity_document_type'    => 'ID_DOC_TYPE_ID_CARD',
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
$instance['v3/gov/subsidy/qualifications/passthrough/query']->postAsync([
  'json' => [
    'real_name'                 => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'id_card_number'            => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'phone_number'              => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'qualification_region_code' => 310100,
    'identity_document_type'    => 'ID_DOC_TYPE_ID_CARD',
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
$response = $instance->v3->gov->subsidy->qualifications->passthrough->query->post([
  'json' => [
    'real_name'                 => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'id_card_number'            => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'phone_number'              => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'qualification_region_code' => 310100,
    'identity_document_type'    => 'ID_DOC_TYPE_ID_CARD',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/gov/subsidy/qualifications/passthrough/query')->post([
  'json' => [
    'real_name'                 => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'id_card_number'            => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'phone_number'              => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'qualification_region_code' => 310100,
    'identity_document_type'    => 'ID_DOC_TYPE_ID_CARD',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/gov/subsidy/qualifications/passthrough/query']->post([
  'json' => [
    'real_name'                 => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'id_card_number'            => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'phone_number'              => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'qualification_region_code' => 310100,
    'identity_document_type'    => 'ID_DOC_TYPE_ID_CARD',
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
| qualification_list {data-required} | object[] {data-tooltip="对应PHP的array"} | 资格状态数组
| appliance_id {data-required data-indent=1} | number | 消费品类ID<br/>`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9` \| `10` \| `11` \| `12` \| `13` \| `14` \| `15` \| `16` \| `17` 枚举值之一
| state {data-required data-indent=1} | string | 状态<br/>`UNCLAIMED` \| `UNREDEEMED` \| `REDEEMED` 枚举值之一
| unclaimed_reason {data-indent=1} | string | 区分未领取的原因<br/>`REASON_CLAIMED_BY_OTHER_REGION` \| `REASON_CLAIMED_BY_OTHER_PLATFORM_OR_REGION` \| `REASON_UNCLAIMED` \| `REASON_CLAIMED_BY_OTHER_MODE` 枚举值之一
| claim_mode {data-indent=1} | string | 区分对接模式<br/>`CLAIM_MODE_MINI_PROGRAM` \| `CLAIM_MODE_INTERFACE_PASS_THROUGH` 枚举值之一
| claimed_platform_name {data-indent=1} | string | 领取的平台名称
| claimed_region_name {data-indent=1} | string | 领取的地区名称

{.im-table #response}
