---
title: 查询补贴资格
description: 根据品类id+实名信息查询用资格状态。可以是进入国补专区展示时查询，线下场景可以不查询，直接看用户在小程序上领没领券，领券了就直接付款。这个接口不会查省平台。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| real_name {data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 自然人姓名
| id_card_number {data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 自然人证件号
| phone_number {data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 手机号
| appliance_id {data-required data-indent=1} | number | 消费品类ID<br/>`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9` \| `10` \| `11` \| `12` \| `13` \| `14` \| `15` \| `16` \| `17` 枚举值之一
| openid {data-indent=1} | string | OPENID
| appid {data-indent=1} | string | APPID
| qualification_region_code {data-required data-indent=1} | number | 使用的资格的地区编码
| identity_document_type {data-indent=1} | string | 证件类型<br/>`ID_DOC_TYPE_ID_CARD` \| `ID_DOC_TYPE_MAINLAND_TRAVEL_PERMIT_FOR_HK_MC` \| `ID_DOC_TYPE_MAINLAND_TRAVEL_PERMIT_FOR_TW` 枚举值之一
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->gov->subsidy->qualification->getAsync([
  'query' => [
    'real_name'                 => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'id_card_number'            => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'phone_number'              => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'appliance_id'              => 1,
    'openid'                    => 'oCuiA7RW33Tc3jtz_5CNLegC9kN0',
    'appid'                     => 'wx5cb0427850cd8c49',
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
$instance->chain('v3/gov/subsidy/qualification')->getAsync([
  'query' => [
    'real_name'                 => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'id_card_number'            => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'phone_number'              => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'appliance_id'              => 1,
    'openid'                    => 'oCuiA7RW33Tc3jtz_5CNLegC9kN0',
    'appid'                     => 'wx5cb0427850cd8c49',
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
$instance['v3/gov/subsidy/qualification']->getAsync([
  'query' => [
    'real_name'                 => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'id_card_number'            => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'phone_number'              => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'appliance_id'              => 1,
    'openid'                    => 'oCuiA7RW33Tc3jtz_5CNLegC9kN0',
    'appid'                     => 'wx5cb0427850cd8c49',
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
$response = $instance->v3->gov->subsidy->qualification->get([
  'query' => [
    'real_name'                 => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'id_card_number'            => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'phone_number'              => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'appliance_id'              => 1,
    'openid'                    => 'oCuiA7RW33Tc3jtz_5CNLegC9kN0',
    'appid'                     => 'wx5cb0427850cd8c49',
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
$response = $instance->chain('v3/gov/subsidy/qualification')->get([
  'query' => [
    'real_name'                 => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'id_card_number'            => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'phone_number'              => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'appliance_id'              => 1,
    'openid'                    => 'oCuiA7RW33Tc3jtz_5CNLegC9kN0',
    'appid'                     => 'wx5cb0427850cd8c49',
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
$response = $instance['v3/gov/subsidy/qualification']->get([
  'query' => [
    'real_name'                 => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'id_card_number'            => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'phone_number'              => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'appliance_id'              => 1,
    'openid'                    => 'oCuiA7RW33Tc3jtz_5CNLegC9kN0',
    'appid'                     => 'wx5cb0427850cd8c49',
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
| state {data-required} | string | 资格的状态<br/>`UNCLAIMED` \| `UNREDEEMED` \| `REDEEMED` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013989543)
