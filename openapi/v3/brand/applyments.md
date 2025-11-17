---
title: 提交入驻申请
description: 服务商（银行、支付机构、电商平台不可用）使用该接口提交商家资料，帮助商家入驻成为微信支付的品牌商家。注意：本接口不支持进件境外个人小微商户
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| business_code {data-required data-indent=1} | string | 业务申请编号
| admin_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 管理员信息
| admin_name {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 管理员姓名
| id_doc_type {data-required data-indent=2} | string | 管理员证件类型<br/>`IDENTIFICATION_TYPE_MAINLAND_ID_CARD` \| `IDENTIFICATION_TYPE_HONGKONG` \| `IDENTIFICATION_TYPE_MACAO` \| `IDENTIFICATION_TYPE_TAIWAN` \| `IDENTIFICATION_TYPE_HONGKONG_MACAO_RESIDENT` \| `IDENTIFICATION_TYPE_TAIWAN_RESIDENT` 枚举值之一
| id_card_number {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 管理员证件号
| subject_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 主体资料
| subject_type {data-required data-indent=2} | string | 主体类型<br/>`SUBJECT_TYPE_ENTERPRISE` \| `SUBJECT_TYPE_INDIVIDUAL` 枚举值之一
| subject_name {data-required data-indent=2} | string | 主体名称
| unified_social_credit_code {data-required data-indent=2} | string | 统一社会信用代码
| brand_basic_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 品牌基础信息
| brand_name {data-required data-indent=2} | string | 品牌名称
| brand_logo {data-required data-indent=2} | string | 品牌Logo
| trademark {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 品牌商标资料
| trademark_exists {data-required data-indent=2} | string | 有无商标<br/>`TRADEMARK_EXISTS` \| `TRADEMARK_NONE` 枚举值之一
| trademark_registration_certificate {data-indent=2} | object {data-tooltip="对应PHP的array"} | 商标注册证
| certificate {data-required data-indent=3} | string | 商标注册证
| name {data-required data-indent=3} | string | 商标名称
| number {data-required data-indent=3} | string | 商标注册号
| valid_begin_time {data-required data-indent=3} | string | 商标有效期开始时间
| valid_end_time {data-required data-indent=3} | string | 商标有效期结束时间
| international_class {data-required data-indent=3} | string | 商标国际分类
| holder {data-required data-indent=3} | string | 商标注册人
| license {data-indent=3} | string | 商标许可使用授权书
| authorization_begin_time {data-indent=3} | string | 商标授权有效期开始时间
| authorization_end_time {data-indent=3} | string | 商标授权有效期结束时间
| logo_trademark_registration_certificate {data-indent=2} | object {data-tooltip="对应PHP的array"} | Logo商标注册证
| certificate {data-required data-indent=3} | string | Logo商标注册证
| name {data-required data-indent=3} | string | Logo商标名称
| number {data-required data-indent=3} | string | Logo商标注册号
| valid_begin_time {data-required data-indent=3} | string | Logo商标有效期开始时间
| valid_end_time {data-required data-indent=3} | string | Logo商标有效期结束时间
| international_class {data-required data-indent=3} | string | Logo商标国际分类
| holder {data-required data-indent=3} | string | Logo商标注册人
| license {data-indent=3} | string | Logo商标许可使用授权书
| authorization_begin_time {data-indent=3} | string | Logo商标授权有效期开始时间
| authorization_end_time {data-indent=3} | string | Logo商标授权有效期结束时间
| no_trademark_addition_prove {data-indent=2} | string | 无商标额外证明材料
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->applyments->postAsync([
  'json' => [
    'business_code'    => '190001351110000',
    'admin_info'       => [
      'admin_name'     => 'U2FsdGVkX1+3vZQv5+9JhTq3Xy6LdKjP0o9iYx5W7vRtNqY',
      'id_doc_type'    => 'IDENTIFICATION_TYPE_MAINLAND_ID_CARD',
      'id_card_number' => 'AOZdYGISxo4y44/UgZ69bdu9X+tfMUJ9dl+LetjM45',
    ],
    'subject_info'     => [
      'subject_type'               => 'SUBJECT_TYPE_ENTERPRISE',
      'subject_name'               => 'xx有限公司',
      'unified_social_credit_code' => '91310101MA1FPX1234',
    ],
    'brand_basic_info' => [
      'brand_name' => '爱马哥',
      'brand_logo' => 'U2FsdGVkX1+8n2qLk9jP4vRtY6Wx',
    ],
    'trademark'        => [
      'trademark_exists'                        => 'TRADEMARK_NONE',
      'trademark_registration_certificate'      => [
        'certificate'              => 'jTpGmxUX3FBWVQ5NJTZvvDujqhThn4ReFxikqJ5YW6zFQ',
        'name'                     => '爱马哥',
        'number'                   => '12345678',
        'valid_begin_time'         => '2025-09-08',
        'valid_end_time'           => '2035-09-08',
        'international_class'      => '25',
        'holder'                   => '腾讯科技有限公司',
        'license'                  => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
        'authorization_begin_time' => '2025-09-08',
        'authorization_end_time'   => '2035-09-08',
      ],
      'logo_trademark_registration_certificate' => [
        'certificate'              => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
        'name'                     => '爱马哥',
        'number'                   => '21312344',
        'valid_begin_time'         => '2025-09-08',
        'valid_end_time'           => '2035-09-08',
        'international_class'      => '25',
        'holder'                   => '腾讯科技有限公司',
        'license'                  => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
        'authorization_begin_time' => '2025-09-08',
        'authorization_end_time'   => '2035-09-08',
      ],
      'no_trademark_addition_prove'             => 'jTpGmxUX3FBWVQ5NJTZvvDujqhThn4ReFxikqJ5YW6zFQ',
    ],
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
$instance->chain('v3/brand/applyments')->postAsync([
  'json' => [
    'business_code'    => '190001351110000',
    'admin_info'       => [
      'admin_name'     => 'U2FsdGVkX1+3vZQv5+9JhTq3Xy6LdKjP0o9iYx5W7vRtNqY',
      'id_doc_type'    => 'IDENTIFICATION_TYPE_MAINLAND_ID_CARD',
      'id_card_number' => 'AOZdYGISxo4y44/UgZ69bdu9X+tfMUJ9dl+LetjM45',
    ],
    'subject_info'     => [
      'subject_type'               => 'SUBJECT_TYPE_ENTERPRISE',
      'subject_name'               => 'xx有限公司',
      'unified_social_credit_code' => '91310101MA1FPX1234',
    ],
    'brand_basic_info' => [
      'brand_name' => '爱马哥',
      'brand_logo' => 'U2FsdGVkX1+8n2qLk9jP4vRtY6Wx',
    ],
    'trademark'        => [
      'trademark_exists'                        => 'TRADEMARK_NONE',
      'trademark_registration_certificate'      => [
        'certificate'              => 'jTpGmxUX3FBWVQ5NJTZvvDujqhThn4ReFxikqJ5YW6zFQ',
        'name'                     => '爱马哥',
        'number'                   => '12345678',
        'valid_begin_time'         => '2025-09-08',
        'valid_end_time'           => '2035-09-08',
        'international_class'      => '25',
        'holder'                   => '腾讯科技有限公司',
        'license'                  => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
        'authorization_begin_time' => '2025-09-08',
        'authorization_end_time'   => '2035-09-08',
      ],
      'logo_trademark_registration_certificate' => [
        'certificate'              => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
        'name'                     => '爱马哥',
        'number'                   => '21312344',
        'valid_begin_time'         => '2025-09-08',
        'valid_end_time'           => '2035-09-08',
        'international_class'      => '25',
        'holder'                   => '腾讯科技有限公司',
        'license'                  => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
        'authorization_begin_time' => '2025-09-08',
        'authorization_end_time'   => '2035-09-08',
      ],
      'no_trademark_addition_prove'             => 'jTpGmxUX3FBWVQ5NJTZvvDujqhThn4ReFxikqJ5YW6zFQ',
    ],
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
$instance['v3/brand/applyments']->postAsync([
  'json' => [
    'business_code'    => '190001351110000',
    'admin_info'       => [
      'admin_name'     => 'U2FsdGVkX1+3vZQv5+9JhTq3Xy6LdKjP0o9iYx5W7vRtNqY',
      'id_doc_type'    => 'IDENTIFICATION_TYPE_MAINLAND_ID_CARD',
      'id_card_number' => 'AOZdYGISxo4y44/UgZ69bdu9X+tfMUJ9dl+LetjM45',
    ],
    'subject_info'     => [
      'subject_type'               => 'SUBJECT_TYPE_ENTERPRISE',
      'subject_name'               => 'xx有限公司',
      'unified_social_credit_code' => '91310101MA1FPX1234',
    ],
    'brand_basic_info' => [
      'brand_name' => '爱马哥',
      'brand_logo' => 'U2FsdGVkX1+8n2qLk9jP4vRtY6Wx',
    ],
    'trademark'        => [
      'trademark_exists'                        => 'TRADEMARK_NONE',
      'trademark_registration_certificate'      => [
        'certificate'              => 'jTpGmxUX3FBWVQ5NJTZvvDujqhThn4ReFxikqJ5YW6zFQ',
        'name'                     => '爱马哥',
        'number'                   => '12345678',
        'valid_begin_time'         => '2025-09-08',
        'valid_end_time'           => '2035-09-08',
        'international_class'      => '25',
        'holder'                   => '腾讯科技有限公司',
        'license'                  => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
        'authorization_begin_time' => '2025-09-08',
        'authorization_end_time'   => '2035-09-08',
      ],
      'logo_trademark_registration_certificate' => [
        'certificate'              => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
        'name'                     => '爱马哥',
        'number'                   => '21312344',
        'valid_begin_time'         => '2025-09-08',
        'valid_end_time'           => '2035-09-08',
        'international_class'      => '25',
        'holder'                   => '腾讯科技有限公司',
        'license'                  => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
        'authorization_begin_time' => '2025-09-08',
        'authorization_end_time'   => '2035-09-08',
      ],
      'no_trademark_addition_prove'             => 'jTpGmxUX3FBWVQ5NJTZvvDujqhThn4ReFxikqJ5YW6zFQ',
    ],
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
$response = $instance->v3->brand->applyments->post([
  'json' => [
    'business_code'    => '190001351110000',
    'admin_info'       => [
      'admin_name'     => 'U2FsdGVkX1+3vZQv5+9JhTq3Xy6LdKjP0o9iYx5W7vRtNqY',
      'id_doc_type'    => 'IDENTIFICATION_TYPE_MAINLAND_ID_CARD',
      'id_card_number' => 'AOZdYGISxo4y44/UgZ69bdu9X+tfMUJ9dl+LetjM45',
    ],
    'subject_info'     => [
      'subject_type'               => 'SUBJECT_TYPE_ENTERPRISE',
      'subject_name'               => 'xx有限公司',
      'unified_social_credit_code' => '91310101MA1FPX1234',
    ],
    'brand_basic_info' => [
      'brand_name' => '爱马哥',
      'brand_logo' => 'U2FsdGVkX1+8n2qLk9jP4vRtY6Wx',
    ],
    'trademark'        => [
      'trademark_exists'                        => 'TRADEMARK_NONE',
      'trademark_registration_certificate'      => [
        'certificate'              => 'jTpGmxUX3FBWVQ5NJTZvvDujqhThn4ReFxikqJ5YW6zFQ',
        'name'                     => '爱马哥',
        'number'                   => '12345678',
        'valid_begin_time'         => '2025-09-08',
        'valid_end_time'           => '2035-09-08',
        'international_class'      => '25',
        'holder'                   => '腾讯科技有限公司',
        'license'                  => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
        'authorization_begin_time' => '2025-09-08',
        'authorization_end_time'   => '2035-09-08',
      ],
      'logo_trademark_registration_certificate' => [
        'certificate'              => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
        'name'                     => '爱马哥',
        'number'                   => '21312344',
        'valid_begin_time'         => '2025-09-08',
        'valid_end_time'           => '2035-09-08',
        'international_class'      => '25',
        'holder'                   => '腾讯科技有限公司',
        'license'                  => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
        'authorization_begin_time' => '2025-09-08',
        'authorization_end_time'   => '2035-09-08',
      ],
      'no_trademark_addition_prove'             => 'jTpGmxUX3FBWVQ5NJTZvvDujqhThn4ReFxikqJ5YW6zFQ',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/applyments')->post([
  'json' => [
    'business_code'    => '190001351110000',
    'admin_info'       => [
      'admin_name'     => 'U2FsdGVkX1+3vZQv5+9JhTq3Xy6LdKjP0o9iYx5W7vRtNqY',
      'id_doc_type'    => 'IDENTIFICATION_TYPE_MAINLAND_ID_CARD',
      'id_card_number' => 'AOZdYGISxo4y44/UgZ69bdu9X+tfMUJ9dl+LetjM45',
    ],
    'subject_info'     => [
      'subject_type'               => 'SUBJECT_TYPE_ENTERPRISE',
      'subject_name'               => 'xx有限公司',
      'unified_social_credit_code' => '91310101MA1FPX1234',
    ],
    'brand_basic_info' => [
      'brand_name' => '爱马哥',
      'brand_logo' => 'U2FsdGVkX1+8n2qLk9jP4vRtY6Wx',
    ],
    'trademark'        => [
      'trademark_exists'                        => 'TRADEMARK_NONE',
      'trademark_registration_certificate'      => [
        'certificate'              => 'jTpGmxUX3FBWVQ5NJTZvvDujqhThn4ReFxikqJ5YW6zFQ',
        'name'                     => '爱马哥',
        'number'                   => '12345678',
        'valid_begin_time'         => '2025-09-08',
        'valid_end_time'           => '2035-09-08',
        'international_class'      => '25',
        'holder'                   => '腾讯科技有限公司',
        'license'                  => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
        'authorization_begin_time' => '2025-09-08',
        'authorization_end_time'   => '2035-09-08',
      ],
      'logo_trademark_registration_certificate' => [
        'certificate'              => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
        'name'                     => '爱马哥',
        'number'                   => '21312344',
        'valid_begin_time'         => '2025-09-08',
        'valid_end_time'           => '2035-09-08',
        'international_class'      => '25',
        'holder'                   => '腾讯科技有限公司',
        'license'                  => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
        'authorization_begin_time' => '2025-09-08',
        'authorization_end_time'   => '2035-09-08',
      ],
      'no_trademark_addition_prove'             => 'jTpGmxUX3FBWVQ5NJTZvvDujqhThn4ReFxikqJ5YW6zFQ',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/applyments']->post([
  'json' => [
    'business_code'    => '190001351110000',
    'admin_info'       => [
      'admin_name'     => 'U2FsdGVkX1+3vZQv5+9JhTq3Xy6LdKjP0o9iYx5W7vRtNqY',
      'id_doc_type'    => 'IDENTIFICATION_TYPE_MAINLAND_ID_CARD',
      'id_card_number' => 'AOZdYGISxo4y44/UgZ69bdu9X+tfMUJ9dl+LetjM45',
    ],
    'subject_info'     => [
      'subject_type'               => 'SUBJECT_TYPE_ENTERPRISE',
      'subject_name'               => 'xx有限公司',
      'unified_social_credit_code' => '91310101MA1FPX1234',
    ],
    'brand_basic_info' => [
      'brand_name' => '爱马哥',
      'brand_logo' => 'U2FsdGVkX1+8n2qLk9jP4vRtY6Wx',
    ],
    'trademark'        => [
      'trademark_exists'                        => 'TRADEMARK_NONE',
      'trademark_registration_certificate'      => [
        'certificate'              => 'jTpGmxUX3FBWVQ5NJTZvvDujqhThn4ReFxikqJ5YW6zFQ',
        'name'                     => '爱马哥',
        'number'                   => '12345678',
        'valid_begin_time'         => '2025-09-08',
        'valid_end_time'           => '2035-09-08',
        'international_class'      => '25',
        'holder'                   => '腾讯科技有限公司',
        'license'                  => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
        'authorization_begin_time' => '2025-09-08',
        'authorization_end_time'   => '2035-09-08',
      ],
      'logo_trademark_registration_certificate' => [
        'certificate'              => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
        'name'                     => '爱马哥',
        'number'                   => '21312344',
        'valid_begin_time'         => '2025-09-08',
        'valid_end_time'           => '2035-09-08',
        'international_class'      => '25',
        'holder'                   => '腾讯科技有限公司',
        'license'                  => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
        'authorization_begin_time' => '2025-09-08',
        'authorization_end_time'   => '2035-09-08',
      ],
      'no_trademark_addition_prove'             => 'jTpGmxUX3FBWVQ5NJTZvvDujqhThn4ReFxikqJ5YW6zFQ',
    ],
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
| applyment_id {data-required} | string | 微信支付申请单号
| business_code {data-required} | string | 业务申请编号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016249989)
