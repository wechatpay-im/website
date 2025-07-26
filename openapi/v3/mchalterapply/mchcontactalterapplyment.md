---
title: 提交超管变更申请单
description: 服务商使用该接口提交商家超级管理员变更申请，帮助商家修改超级管理员资料。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| merchant_code {data-required data-indent=1} | string | 商户号
| out_request_no {data-required data-indent=1} | string | 业务申请编号
| contact_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 超级管理员信息
| contact_name {data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 超级管理员姓名
| contact_id_doc_type {data-indent=2} | string | 超级管理员证件类型<br/>`IDENTIFICATION_TYPE_IDCARD` \| `IDENTIFICATION_TYPE_OVERSEA_PASSPORT` \| `IDENTIFICATION_TYPE_HONGKONG_PASSPORT` \| `IDENTIFICATION_TYPE_MACAO_PASSPORT` \| `IDENTIFICATION_TYPE_TAIWAN_PASSPORT` \| `IDENTIFICATION_TYPE_FOREIGN_RESIDENT` \| `IDENTIFICATION_TYPE_HONGKONG_MACAO_RESIDENT` \| `IDENTIFICATION_TYPE_TAIWAN_RESIDENT` 枚举值之一
| contact_id_card_number {data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 超级管理员身份证件号码
| contact_id_doc_copy {data-indent=2} | string | 超级管理员证件正面照片
| contact_id_doc_copy_back {data-indent=2} | string | 超级管理员证件反面照片
| contact_period_begin {data-indent=2} | string | 超级管理员证件有效期开始时间
| contact_period_end {data-indent=2} | string | 超级管理员证件有效期结束时间
| business_authorization_letter {data-indent=2} | string | 业务办理授权函
| mobile_phone {data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 超级管理员手机
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->mchalterapply->mchcontactalterapplyment->postAsync([
  'json' => [
    'merchant_code'  => '2492185251',
    'out_request_no' => '1900013511_10000',
    'contact_info'   => [
      'contact_name'                  => 'pVd1HJ6zyvPedzGaV+X3IdGdbDnuC4Eelw/wDa4SzfeespQO/0kjiwfqdfg==',
      'contact_id_doc_type'           => 'IDENTIFICATION_TYPE_IDCARD',
      'contact_id_card_number'        => 'pVd1HJ6zmty7/mYNxLMpRSvMRtelw/wDa4SzfeespQO/0kjiwfqdfg==',
      'contact_id_doc_copy'           => '',
      'contact_id_doc_copy_back'      => '',
      'contact_period_begin'          => '',
      'contact_period_end'            => '',
      'business_authorization_letter' => '',
      'mobile_phone'                  => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPROvwia4ibL+F6mfjbzQIzfb3HHLEjZ4YiNWWNeespQO/0kjiwfqdfg==',
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
$instance->chain('v3/mchalterapply/mchcontactalterapplyment')->postAsync([
  'json' => [
    'merchant_code'  => '2492185251',
    'out_request_no' => '1900013511_10000',
    'contact_info'   => [
      'contact_name'                  => 'pVd1HJ6zyvPedzGaV+X3IdGdbDnuC4Eelw/wDa4SzfeespQO/0kjiwfqdfg==',
      'contact_id_doc_type'           => 'IDENTIFICATION_TYPE_IDCARD',
      'contact_id_card_number'        => 'pVd1HJ6zmty7/mYNxLMpRSvMRtelw/wDa4SzfeespQO/0kjiwfqdfg==',
      'contact_id_doc_copy'           => '',
      'contact_id_doc_copy_back'      => '',
      'contact_period_begin'          => '',
      'contact_period_end'            => '',
      'business_authorization_letter' => '',
      'mobile_phone'                  => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPROvwia4ibL+F6mfjbzQIzfb3HHLEjZ4YiNWWNeespQO/0kjiwfqdfg==',
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
$instance['v3/mchalterapply/mchcontactalterapplyment']->postAsync([
  'json' => [
    'merchant_code'  => '2492185251',
    'out_request_no' => '1900013511_10000',
    'contact_info'   => [
      'contact_name'                  => 'pVd1HJ6zyvPedzGaV+X3IdGdbDnuC4Eelw/wDa4SzfeespQO/0kjiwfqdfg==',
      'contact_id_doc_type'           => 'IDENTIFICATION_TYPE_IDCARD',
      'contact_id_card_number'        => 'pVd1HJ6zmty7/mYNxLMpRSvMRtelw/wDa4SzfeespQO/0kjiwfqdfg==',
      'contact_id_doc_copy'           => '',
      'contact_id_doc_copy_back'      => '',
      'contact_period_begin'          => '',
      'contact_period_end'            => '',
      'business_authorization_letter' => '',
      'mobile_phone'                  => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPROvwia4ibL+F6mfjbzQIzfb3HHLEjZ4YiNWWNeespQO/0kjiwfqdfg==',
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
$response = $instance->v3->mchalterapply->mchcontactalterapplyment->post([
  'json' => [
    'merchant_code'  => '2492185251',
    'out_request_no' => '1900013511_10000',
    'contact_info'   => [
      'contact_name'                  => 'pVd1HJ6zyvPedzGaV+X3IdGdbDnuC4Eelw/wDa4SzfeespQO/0kjiwfqdfg==',
      'contact_id_doc_type'           => 'IDENTIFICATION_TYPE_IDCARD',
      'contact_id_card_number'        => 'pVd1HJ6zmty7/mYNxLMpRSvMRtelw/wDa4SzfeespQO/0kjiwfqdfg==',
      'contact_id_doc_copy'           => '',
      'contact_id_doc_copy_back'      => '',
      'contact_period_begin'          => '',
      'contact_period_end'            => '',
      'business_authorization_letter' => '',
      'mobile_phone'                  => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPROvwia4ibL+F6mfjbzQIzfb3HHLEjZ4YiNWWNeespQO/0kjiwfqdfg==',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/mchalterapply/mchcontactalterapplyment')->post([
  'json' => [
    'merchant_code'  => '2492185251',
    'out_request_no' => '1900013511_10000',
    'contact_info'   => [
      'contact_name'                  => 'pVd1HJ6zyvPedzGaV+X3IdGdbDnuC4Eelw/wDa4SzfeespQO/0kjiwfqdfg==',
      'contact_id_doc_type'           => 'IDENTIFICATION_TYPE_IDCARD',
      'contact_id_card_number'        => 'pVd1HJ6zmty7/mYNxLMpRSvMRtelw/wDa4SzfeespQO/0kjiwfqdfg==',
      'contact_id_doc_copy'           => '',
      'contact_id_doc_copy_back'      => '',
      'contact_period_begin'          => '',
      'contact_period_end'            => '',
      'business_authorization_letter' => '',
      'mobile_phone'                  => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPROvwia4ibL+F6mfjbzQIzfb3HHLEjZ4YiNWWNeespQO/0kjiwfqdfg==',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/mchalterapply/mchcontactalterapplyment']->post([
  'json' => [
    'merchant_code'  => '2492185251',
    'out_request_no' => '1900013511_10000',
    'contact_info'   => [
      'contact_name'                  => 'pVd1HJ6zyvPedzGaV+X3IdGdbDnuC4Eelw/wDa4SzfeespQO/0kjiwfqdfg==',
      'contact_id_doc_type'           => 'IDENTIFICATION_TYPE_IDCARD',
      'contact_id_card_number'        => 'pVd1HJ6zmty7/mYNxLMpRSvMRtelw/wDa4SzfeespQO/0kjiwfqdfg==',
      'contact_id_doc_copy'           => '',
      'contact_id_doc_copy_back'      => '',
      'contact_period_begin'          => '',
      'contact_period_end'            => '',
      'business_authorization_letter' => '',
      'mobile_phone'                  => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPROvwia4ibL+F6mfjbzQIzfb3HHLEjZ4YiNWWNeespQO/0kjiwfqdfg==',
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
| apply_id | string | 申请单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015617906)
