---
title: 申请品类凭证码
description: 申请品类凭证码
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| category_id {data-required data-indent=1} | string | 品类编码
| openid {data-indent=1} | string | 用户id
| name {data-required data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 姓名
| mobile {data-required data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 手机号
| add_code {data-required data-indent=1} | string | 区县编码
| custom_info {data-indent=1} | string | 自定义域
| cert_type {data-required data-indent=1} | string | 证件类型<br/>`1` \| `2` \| `3` \| `4` \| `5` 枚举值之一
| cert_no {data-required data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 证件号码
| req_ssn {data-required data-indent=1} | string | 请求流水号
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->gov->subsidy->zhejiang->authcode->issue->postAsync([
  'json' => [
    'category_id' => 'A01',
    'openid'      => '',
    'name'        => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'mobile'      => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'add_code'    => '330000',
    'custom_info' => '',
    'cert_type'   => '1',
    'cert_no'     => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'req_ssn'     => '123',
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
$instance->chain('v3/gov/subsidy/zhejiang/authcode/issue')->postAsync([
  'json' => [
    'category_id' => 'A01',
    'openid'      => '',
    'name'        => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'mobile'      => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'add_code'    => '330000',
    'custom_info' => '',
    'cert_type'   => '1',
    'cert_no'     => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'req_ssn'     => '123',
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
$instance['v3/gov/subsidy/zhejiang/authcode/issue']->postAsync([
  'json' => [
    'category_id' => 'A01',
    'openid'      => '',
    'name'        => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'mobile'      => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'add_code'    => '330000',
    'custom_info' => '',
    'cert_type'   => '1',
    'cert_no'     => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'req_ssn'     => '123',
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
$response = $instance->v3->gov->subsidy->zhejiang->authcode->issue->post([
  'json' => [
    'category_id' => 'A01',
    'openid'      => '',
    'name'        => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'mobile'      => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'add_code'    => '330000',
    'custom_info' => '',
    'cert_type'   => '1',
    'cert_no'     => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'req_ssn'     => '123',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/gov/subsidy/zhejiang/authcode/issue')->post([
  'json' => [
    'category_id' => 'A01',
    'openid'      => '',
    'name'        => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'mobile'      => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'add_code'    => '330000',
    'custom_info' => '',
    'cert_type'   => '1',
    'cert_no'     => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'req_ssn'     => '123',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/gov/subsidy/zhejiang/authcode/issue']->post([
  'json' => [
    'category_id' => 'A01',
    'openid'      => '',
    'name'        => 'OEimkKuua8igpd+0YDgqF2Z61l=',
    'mobile'      => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/nunesXwq9ogPnSj7EDA==',
    'add_code'    => '330000',
    'custom_info' => '',
    'cert_type'   => '1',
    'cert_no'     => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj/mEoNSgJh0nvuqQJ1cdL==',
    'req_ssn'     => '123',
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
| auth_code | string | 品类凭证码

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013989530)
