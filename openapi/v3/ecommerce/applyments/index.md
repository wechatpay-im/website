---
title: 二级商户进件
description: 电商平台通过提交二级商户资料，完成二级商户入驻，入驻成为微信支付商户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_request_no {data-required data-indent=1} | string | 业务申请编号
| organization_type {data-required data-indent=1} | string | 主体类型<br/>`2401` \| `2500` \| `4` \| `2` \| `3` \| `2502` \| `1708` 枚举值之一
| finance_institution {data-indent=1} | boolean | 是否金融机构
| business_license_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 营业执照/登记证书信息
| cert_type {data-indent=2} | string | 登记证书类型<br/>`CERTIFICATE_TYPE_2388` \| `CERTIFICATE_TYPE_2389` \| `CERTIFICATE_TYPE_2390` \| `CERTIFICATE_TYPE_2391` \| `CERTIFICATE_TYPE_2392` \| `CERTIFICATE_TYPE_2393` \| `CERTIFICATE_TYPE_2394` \| `CERTIFICATE_TYPE_2395` \| `CERTIFICATE_TYPE_2396` \| `CERTIFICATE_TYPE_2399` \| `CERTIFICATE_TYPE_2400` \| `CERTIFICATE_TYPE_2520` \| `CERTIFICATE_TYPE_2521` \| `CERTIFICATE_TYPE_2522` 枚举值之一
| business_license_copy {data-indent=2} | string | 证件扫描件
| business_license_number {data-indent=2} | string | 证件注册号
| merchant_name {data-indent=2} | string | 商户名称
| legal_person {data-indent=2} | string | 经营者/法定代表人姓名
| company_address {data-indent=2} | string | 注册地址
| business_time {data-indent=2} | string | 营业期限`JSON`格式字符串
| {colspan=3 .im-table-line}
| period {data-required data-indent=3} | string[] | 岂止日期
| finance_institution_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 金融机构许可证信息
| finance_type {data-indent=2} | string | 金融机构类型<br/>`BANK_AGENT` \| `PAYMENT_AGENT` \| `INSURANCE` \| `TRADE_AND_SETTLE` \| `OTHER` 枚举值之一
| finance_license_pics {data-indent=2} | string[] | 金融机构许可证图片
| id_holder_type {data-indent=1} | string | 超级管理员类型<br/>`LEGAL` \| `SUPER` 枚举值之一
| id_doc_type {data-indent=1} | string | `IDENTIFICATION_TYPE_IDCARD` \| `IDENTIFICATION_TYPE_OVERSEA_PASSPORT` \| `IDENTIFICATION_TYPE_HONGKONG_PASSPORT` \| `IDENTIFICATION_TYPE_MACAO_PASSPORT` \| `IDENTIFICATION_TYPE_TAIWAN_PASSPORT` \| `IDENTIFICATION_TYPE_FOREIGN_RESIDENT` \| `IDENTIFICATION_TYPE_HONGKONG_MACAO_RESIDENT` \| `IDENTIFICATION_TYPE_TAIWAN_RESIDENT` 枚举值之一
| authorize_letter_copy {data-indent=1} | string | 法定代表人说明函
| id_card_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 经营者/法人身份证信息
| id_card_copy {data-indent=2} | string | 身份证人像面照片
| id_card_national {data-indent=2} | string | 身份证国徽面照片
| id_card_name {data-indent=2} | string | 身份证姓名
| id_card_number {data-indent=2} | string | 身份证号码
| id_card_valid_time_begin {data-indent=2} | string | 身份证有效期开始时间
| id_card_valid_time {data-indent=2} | string | 身份证有效期结束时间
| id_doc_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 经营者/法人其他类型证件信息
| id_doc_name {data-indent=2} | string | 证件姓名
| id_doc_number {data-indent=2} | string | 证件号码
| id_doc_copy {data-indent=2} | string | 证件正面照片
| id_doc_copy_back {data-indent=2} | string | 证件反面照片
| doc_period_begin {data-indent=2} | string | 证件有效期开始时间
| doc_period_end {data-indent=2} | string | 证件有效期结束时间
| owner {data-indent=1} | boolean | 经营者/法人是否为受益人
| ubo_info_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 最终受益人信息列表
| ubo_id_doc_type {data-required data-indent=2} | string | `IDENTIFICATION_TYPE_IDCARD` \| `IDENTIFICATION_TYPE_OVERSEA_PASSPORT` \| `IDENTIFICATION_TYPE_HONGKONG_PASSPORT` \| `IDENTIFICATION_TYPE_MACAO_PASSPORT` \| `IDENTIFICATION_TYPE_TAIWAN_PASSPORT` \| `IDENTIFICATION_TYPE_FOREIGN_RESIDENT` \| `IDENTIFICATION_TYPE_HONGKONG_MACAO_RESIDENT` \| `IDENTIFICATION_TYPE_TAIWAN_RESIDENT` 枚举值之一
| ubo_id_doc_copy {data-required data-indent=2} | string | 证件正面照片
| ubo_id_doc_copy_back {data-required data-indent=2} | string | 证件反面照片
| ubo_id_doc_name {data-required data-indent=2} | string | 受益人姓名
| ubo_id_doc_number {data-required data-indent=2} | string | 证件号码
| ubo_id_doc_address {data-required data-indent=2} | string | 证件居住地址
| ubo_period_begin {data-required data-indent=2} | string | 证件有效期开始时间
| ubo_period_end {data-required data-indent=2} | string | 证件有效期结束时间
| account_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 结算银行账户
| bank_account_type {data-indent=2} | string | 账户类型<br/>`74` \| `75` 枚举值之一
| account_bank {data-indent=2} | string | 开户银行
| account_name {data-indent=2} | string | 开户名称
| bank_address_code {data-indent=2} | string | 开户银行省市编码
| bank_branch_id {data-indent=2} | string | 开户银行联行号
| bank_name {data-indent=2} | string | 开户银行全称 （含支行]
| account_number {data-indent=2} | string | 银行帐号
| contact_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 超级管理员信息
| contact_type {data-indent=2} | string | 超级管理员类型<br/>`65` \| `66` 枚举值之一
| contact_name {data-indent=2} | string | 超级管理员姓名
| contact_id_doc_type {data-indent=2} | string | `IDENTIFICATION_TYPE_IDCARD` \| `IDENTIFICATION_TYPE_OVERSEA_PASSPORT` \| `IDENTIFICATION_TYPE_HONGKONG_PASSPORT` \| `IDENTIFICATION_TYPE_MACAO_PASSPORT` \| `IDENTIFICATION_TYPE_TAIWAN_PASSPORT` \| `IDENTIFICATION_TYPE_FOREIGN_RESIDENT` \| `IDENTIFICATION_TYPE_HONGKONG_MACAO_RESIDENT` \| `IDENTIFICATION_TYPE_TAIWAN_RESIDENT` 枚举值之一
| contact_id_card_number {data-indent=2} | string | 超级管理员身份证件号码
| contact_id_doc_copy {data-indent=2} | string | 超级管理员证件正面照片
| contact_id_doc_copy_back {data-indent=2} | string | 超级管理员证件反面照片
| contact_period_begin {data-indent=2} | string | 超级管理员证件有效期开始时间
| contact_period_end {data-indent=2} | string | 超级管理员证件有效期结束时间
| business_authorization_letter {data-indent=2} | string | 业务办理授权函
| mobile_phone {data-indent=2} | string | 超级管理员手机
| sales_scene_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 店铺信息
| store_name {data-indent=2} | string | 店铺名称
| store_url {data-indent=2} | string | 店铺链接
| store_qr_code {data-indent=2} | string | 店铺二维码
| mini_program_sub_appid {data-indent=2} | string | 小程序AppID
| settlement_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 结算规则
| settlement_id {data-indent=2} | string | 结算规则ID
| qualification_type {data-indent=2} | string | 所属行业
| merchant_shortname {data-required data-indent=1} | string | 商户简称
| qualifications {data-indent=1} | string[] | 特殊资质
| business_addition_pics {data-indent=1} | string[] | 补充材料
| business_addition_desc {data-indent=1} | string[] | 补充说明
| headers | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 平台公钥ID/平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->applyments->_empty_->postAsync([
  'json' => [
    'out_request_no'           => '',
    'organization_type'        => '2401',
    'finance_institution'      => true,
    'business_license_info'    => [
      'cert_type'               => 'CERTIFICATE_TYPE_2388',
      'business_license_copy'   => '47ZC6GC-vnrbEny__Ie_An5-tCpqxucuxi-vByf3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBDIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'business_license_number' => '123456789012345678',
      'merchant_name'           => '腾讯科技有限公司',
      'legal_person'            => '张三',
      'company_address'         => '深圳南山区科苑路',
      'business_time'           => '["2014-01-01","长期"]',
    ],
    'finance_institution_info' => [
      'finance_type'         => 'BANK_AGENT',
      'finance_license_pics' => ['MediaId'],
    ],
    'id_holder_type'           => 'LEGAL',
    'id_doc_type'              => 'IDENTIFICATION_TYPE_IDCARD',
    'authorize_letter_copy'    => '',
    'id_card_info'             => [
      'id_card_copy'             => 'xpnFuAxhBTEO_PvWkfSCJ3zVIn001D8daLC-ehEuo0BJqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'id_card_national'         => 'vByf3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBDIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'id_card_name'             => 'pVd1HJ6v/69bDnuC4EL5Kz4jBHLiCa8MRtelw/wDa4SzfeespQO/0kjiwfqdfg==',
      'id_card_number'           => 'zV+BEmytMNQCqQ8juwEc4P4TG5xzchG/5IL9DBd+Z0zZXkw==4',
      'id_card_valid_time_begin' => '',
      'id_card_valid_time'       => '',
    ],
    'id_doc_info'              => [
      'id_doc_name'      => 'jTpGmxUX3FBWVQ5NJTZvlKX_gdU4LC-ehEuo0BJqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'id_doc_number'    => 'jTpGmxUX3FBWVQ5NJTZvlKX_go0BJqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'id_doc_copy'      => 'xi-vByf3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBDIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'id_doc_copy_back' => 'xi-vByf3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBDIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'doc_period_begin' => '2020-01-02',
      'doc_period_end'   => '2020-01-02',
    ],
    'owner'                    => true,
    'ubo_info_list'            => [[
      'ubo_id_doc_type'      => 'IDENTIFICATION_TYPE_IDCARD',
      'ubo_id_doc_copy'      => '',
      'ubo_id_doc_copy_back' => '',
      'ubo_id_doc_name'      => '',
      'ubo_id_doc_number'    => '',
      'ubo_id_doc_address'   => '',
      'ubo_period_begin'     => '',
      'ubo_period_end'       => '',
    ],],
    'account_info'             => [
      'bank_account_type' => '75',
      'account_bank'      => '工商银行',
      'account_name'      => 'AOZdYGISxo4yw96uY1Pk7Rq79Jtt7+I8juwEc4P4TG5xzchG/5IL9DBd+Z0zZXkw==',
      'bank_address_code' => '110000',
      'bank_branch_id'    => '402713354941',
      'bank_name'         => '施秉县农村信用合作联社城关信用社',
      'account_number'    => 'd+xT+MQCvrLHUVDWv/8MR/dB7TkXLVfSrUxMPZy6jWWYzpRrEEaYQE8ZRGYoeorwC+w==',
    ],
    'contact_info'             => [
      'contact_type'                  => '65',
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
    'sales_scene_info'         => [
      'store_name'             => '爱烧烤',
      'store_url'              => 'http://www.qq.com',
      'store_qr_code'          => '',
      'mini_program_sub_appid' => '',
    ],
    'settlement_info'          => [
      'settlement_id'      => '',
      'qualification_type' => '',
    ],
    'merchant_shortname'       => '',
    'qualifications'           => ['MediaId'],
    'business_addition_pics'   => ['MediaId'],
    'business_addition_desc'   => ['MediaId'],
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
$instance->chain('v3/ecommerce/applyments/{empty}')->postAsync([
  'json' => [
    'out_request_no'           => '',
    'organization_type'        => '2401',
    'finance_institution'      => true,
    'business_license_info'    => [
      'cert_type'               => 'CERTIFICATE_TYPE_2388',
      'business_license_copy'   => '47ZC6GC-vnrbEny__Ie_An5-tCpqxucuxi-vByf3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBDIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'business_license_number' => '123456789012345678',
      'merchant_name'           => '腾讯科技有限公司',
      'legal_person'            => '张三',
      'company_address'         => '深圳南山区科苑路',
      'business_time'           => '["2014-01-01","长期"]',
    ],
    'finance_institution_info' => [
      'finance_type'         => 'BANK_AGENT',
      'finance_license_pics' => ['MediaId'],
    ],
    'id_holder_type'           => 'LEGAL',
    'id_doc_type'              => 'IDENTIFICATION_TYPE_IDCARD',
    'authorize_letter_copy'    => '',
    'id_card_info'             => [
      'id_card_copy'             => 'xpnFuAxhBTEO_PvWkfSCJ3zVIn001D8daLC-ehEuo0BJqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'id_card_national'         => 'vByf3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBDIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'id_card_name'             => 'pVd1HJ6v/69bDnuC4EL5Kz4jBHLiCa8MRtelw/wDa4SzfeespQO/0kjiwfqdfg==',
      'id_card_number'           => 'zV+BEmytMNQCqQ8juwEc4P4TG5xzchG/5IL9DBd+Z0zZXkw==4',
      'id_card_valid_time_begin' => '',
      'id_card_valid_time'       => '',
    ],
    'id_doc_info'              => [
      'id_doc_name'      => 'jTpGmxUX3FBWVQ5NJTZvlKX_gdU4LC-ehEuo0BJqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'id_doc_number'    => 'jTpGmxUX3FBWVQ5NJTZvlKX_go0BJqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'id_doc_copy'      => 'xi-vByf3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBDIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'id_doc_copy_back' => 'xi-vByf3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBDIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'doc_period_begin' => '2020-01-02',
      'doc_period_end'   => '2020-01-02',
    ],
    'owner'                    => true,
    'ubo_info_list'            => [[
      'ubo_id_doc_type'      => 'IDENTIFICATION_TYPE_IDCARD',
      'ubo_id_doc_copy'      => '',
      'ubo_id_doc_copy_back' => '',
      'ubo_id_doc_name'      => '',
      'ubo_id_doc_number'    => '',
      'ubo_id_doc_address'   => '',
      'ubo_period_begin'     => '',
      'ubo_period_end'       => '',
    ],],
    'account_info'             => [
      'bank_account_type' => '75',
      'account_bank'      => '工商银行',
      'account_name'      => 'AOZdYGISxo4yw96uY1Pk7Rq79Jtt7+I8juwEc4P4TG5xzchG/5IL9DBd+Z0zZXkw==',
      'bank_address_code' => '110000',
      'bank_branch_id'    => '402713354941',
      'bank_name'         => '施秉县农村信用合作联社城关信用社',
      'account_number'    => 'd+xT+MQCvrLHUVDWv/8MR/dB7TkXLVfSrUxMPZy6jWWYzpRrEEaYQE8ZRGYoeorwC+w==',
    ],
    'contact_info'             => [
      'contact_type'                  => '65',
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
    'sales_scene_info'         => [
      'store_name'             => '爱烧烤',
      'store_url'              => 'http://www.qq.com',
      'store_qr_code'          => '',
      'mini_program_sub_appid' => '',
    ],
    'settlement_info'          => [
      'settlement_id'      => '',
      'qualification_type' => '',
    ],
    'merchant_shortname'       => '',
    'qualifications'           => ['MediaId'],
    'business_addition_pics'   => ['MediaId'],
    'business_addition_desc'   => ['MediaId'],
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
$instance['v3/ecommerce/applyments/{empty}']->postAsync([
  'json' => [
    'out_request_no'           => '',
    'organization_type'        => '2401',
    'finance_institution'      => true,
    'business_license_info'    => [
      'cert_type'               => 'CERTIFICATE_TYPE_2388',
      'business_license_copy'   => '47ZC6GC-vnrbEny__Ie_An5-tCpqxucuxi-vByf3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBDIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'business_license_number' => '123456789012345678',
      'merchant_name'           => '腾讯科技有限公司',
      'legal_person'            => '张三',
      'company_address'         => '深圳南山区科苑路',
      'business_time'           => '["2014-01-01","长期"]',
    ],
    'finance_institution_info' => [
      'finance_type'         => 'BANK_AGENT',
      'finance_license_pics' => ['MediaId'],
    ],
    'id_holder_type'           => 'LEGAL',
    'id_doc_type'              => 'IDENTIFICATION_TYPE_IDCARD',
    'authorize_letter_copy'    => '',
    'id_card_info'             => [
      'id_card_copy'             => 'xpnFuAxhBTEO_PvWkfSCJ3zVIn001D8daLC-ehEuo0BJqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'id_card_national'         => 'vByf3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBDIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'id_card_name'             => 'pVd1HJ6v/69bDnuC4EL5Kz4jBHLiCa8MRtelw/wDa4SzfeespQO/0kjiwfqdfg==',
      'id_card_number'           => 'zV+BEmytMNQCqQ8juwEc4P4TG5xzchG/5IL9DBd+Z0zZXkw==4',
      'id_card_valid_time_begin' => '',
      'id_card_valid_time'       => '',
    ],
    'id_doc_info'              => [
      'id_doc_name'      => 'jTpGmxUX3FBWVQ5NJTZvlKX_gdU4LC-ehEuo0BJqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'id_doc_number'    => 'jTpGmxUX3FBWVQ5NJTZvlKX_go0BJqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'id_doc_copy'      => 'xi-vByf3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBDIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'id_doc_copy_back' => 'xi-vByf3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBDIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'doc_period_begin' => '2020-01-02',
      'doc_period_end'   => '2020-01-02',
    ],
    'owner'                    => true,
    'ubo_info_list'            => [[
      'ubo_id_doc_type'      => 'IDENTIFICATION_TYPE_IDCARD',
      'ubo_id_doc_copy'      => '',
      'ubo_id_doc_copy_back' => '',
      'ubo_id_doc_name'      => '',
      'ubo_id_doc_number'    => '',
      'ubo_id_doc_address'   => '',
      'ubo_period_begin'     => '',
      'ubo_period_end'       => '',
    ],],
    'account_info'             => [
      'bank_account_type' => '75',
      'account_bank'      => '工商银行',
      'account_name'      => 'AOZdYGISxo4yw96uY1Pk7Rq79Jtt7+I8juwEc4P4TG5xzchG/5IL9DBd+Z0zZXkw==',
      'bank_address_code' => '110000',
      'bank_branch_id'    => '402713354941',
      'bank_name'         => '施秉县农村信用合作联社城关信用社',
      'account_number'    => 'd+xT+MQCvrLHUVDWv/8MR/dB7TkXLVfSrUxMPZy6jWWYzpRrEEaYQE8ZRGYoeorwC+w==',
    ],
    'contact_info'             => [
      'contact_type'                  => '65',
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
    'sales_scene_info'         => [
      'store_name'             => '爱烧烤',
      'store_url'              => 'http://www.qq.com',
      'store_qr_code'          => '',
      'mini_program_sub_appid' => '',
    ],
    'settlement_info'          => [
      'settlement_id'      => '',
      'qualification_type' => '',
    ],
    'merchant_shortname'       => '',
    'qualifications'           => ['MediaId'],
    'business_addition_pics'   => ['MediaId'],
    'business_addition_desc'   => ['MediaId'],
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
$response = $instance->v3->ecommerce->applyments->_empty_->post([
  'json' => [
    'out_request_no'           => '',
    'organization_type'        => '2401',
    'finance_institution'      => true,
    'business_license_info'    => [
      'cert_type'               => 'CERTIFICATE_TYPE_2388',
      'business_license_copy'   => '47ZC6GC-vnrbEny__Ie_An5-tCpqxucuxi-vByf3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBDIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'business_license_number' => '123456789012345678',
      'merchant_name'           => '腾讯科技有限公司',
      'legal_person'            => '张三',
      'company_address'         => '深圳南山区科苑路',
      'business_time'           => '["2014-01-01","长期"]',
    ],
    'finance_institution_info' => [
      'finance_type'         => 'BANK_AGENT',
      'finance_license_pics' => ['MediaId'],
    ],
    'id_holder_type'           => 'LEGAL',
    'id_doc_type'              => 'IDENTIFICATION_TYPE_IDCARD',
    'authorize_letter_copy'    => '',
    'id_card_info'             => [
      'id_card_copy'             => 'xpnFuAxhBTEO_PvWkfSCJ3zVIn001D8daLC-ehEuo0BJqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'id_card_national'         => 'vByf3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBDIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'id_card_name'             => 'pVd1HJ6v/69bDnuC4EL5Kz4jBHLiCa8MRtelw/wDa4SzfeespQO/0kjiwfqdfg==',
      'id_card_number'           => 'zV+BEmytMNQCqQ8juwEc4P4TG5xzchG/5IL9DBd+Z0zZXkw==4',
      'id_card_valid_time_begin' => '',
      'id_card_valid_time'       => '',
    ],
    'id_doc_info'              => [
      'id_doc_name'      => 'jTpGmxUX3FBWVQ5NJTZvlKX_gdU4LC-ehEuo0BJqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'id_doc_number'    => 'jTpGmxUX3FBWVQ5NJTZvlKX_go0BJqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'id_doc_copy'      => 'xi-vByf3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBDIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'id_doc_copy_back' => 'xi-vByf3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBDIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'doc_period_begin' => '2020-01-02',
      'doc_period_end'   => '2020-01-02',
    ],
    'owner'                    => true,
    'ubo_info_list'            => [[
      'ubo_id_doc_type'      => 'IDENTIFICATION_TYPE_IDCARD',
      'ubo_id_doc_copy'      => '',
      'ubo_id_doc_copy_back' => '',
      'ubo_id_doc_name'      => '',
      'ubo_id_doc_number'    => '',
      'ubo_id_doc_address'   => '',
      'ubo_period_begin'     => '',
      'ubo_period_end'       => '',
    ],],
    'account_info'             => [
      'bank_account_type' => '75',
      'account_bank'      => '工商银行',
      'account_name'      => 'AOZdYGISxo4yw96uY1Pk7Rq79Jtt7+I8juwEc4P4TG5xzchG/5IL9DBd+Z0zZXkw==',
      'bank_address_code' => '110000',
      'bank_branch_id'    => '402713354941',
      'bank_name'         => '施秉县农村信用合作联社城关信用社',
      'account_number'    => 'd+xT+MQCvrLHUVDWv/8MR/dB7TkXLVfSrUxMPZy6jWWYzpRrEEaYQE8ZRGYoeorwC+w==',
    ],
    'contact_info'             => [
      'contact_type'                  => '65',
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
    'sales_scene_info'         => [
      'store_name'             => '爱烧烤',
      'store_url'              => 'http://www.qq.com',
      'store_qr_code'          => '',
      'mini_program_sub_appid' => '',
    ],
    'settlement_info'          => [
      'settlement_id'      => '',
      'qualification_type' => '',
    ],
    'merchant_shortname'       => '',
    'qualifications'           => ['MediaId'],
    'business_addition_pics'   => ['MediaId'],
    'business_addition_desc'   => ['MediaId'],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/applyments/{empty}')->post([
  'json' => [
    'out_request_no'           => '',
    'organization_type'        => '2401',
    'finance_institution'      => true,
    'business_license_info'    => [
      'cert_type'               => 'CERTIFICATE_TYPE_2388',
      'business_license_copy'   => '47ZC6GC-vnrbEny__Ie_An5-tCpqxucuxi-vByf3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBDIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'business_license_number' => '123456789012345678',
      'merchant_name'           => '腾讯科技有限公司',
      'legal_person'            => '张三',
      'company_address'         => '深圳南山区科苑路',
      'business_time'           => '["2014-01-01","长期"]',
    ],
    'finance_institution_info' => [
      'finance_type'         => 'BANK_AGENT',
      'finance_license_pics' => ['MediaId'],
    ],
    'id_holder_type'           => 'LEGAL',
    'id_doc_type'              => 'IDENTIFICATION_TYPE_IDCARD',
    'authorize_letter_copy'    => '',
    'id_card_info'             => [
      'id_card_copy'             => 'xpnFuAxhBTEO_PvWkfSCJ3zVIn001D8daLC-ehEuo0BJqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'id_card_national'         => 'vByf3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBDIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'id_card_name'             => 'pVd1HJ6v/69bDnuC4EL5Kz4jBHLiCa8MRtelw/wDa4SzfeespQO/0kjiwfqdfg==',
      'id_card_number'           => 'zV+BEmytMNQCqQ8juwEc4P4TG5xzchG/5IL9DBd+Z0zZXkw==4',
      'id_card_valid_time_begin' => '',
      'id_card_valid_time'       => '',
    ],
    'id_doc_info'              => [
      'id_doc_name'      => 'jTpGmxUX3FBWVQ5NJTZvlKX_gdU4LC-ehEuo0BJqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'id_doc_number'    => 'jTpGmxUX3FBWVQ5NJTZvlKX_go0BJqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'id_doc_copy'      => 'xi-vByf3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBDIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'id_doc_copy_back' => 'xi-vByf3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBDIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'doc_period_begin' => '2020-01-02',
      'doc_period_end'   => '2020-01-02',
    ],
    'owner'                    => true,
    'ubo_info_list'            => [[
      'ubo_id_doc_type'      => 'IDENTIFICATION_TYPE_IDCARD',
      'ubo_id_doc_copy'      => '',
      'ubo_id_doc_copy_back' => '',
      'ubo_id_doc_name'      => '',
      'ubo_id_doc_number'    => '',
      'ubo_id_doc_address'   => '',
      'ubo_period_begin'     => '',
      'ubo_period_end'       => '',
    ],],
    'account_info'             => [
      'bank_account_type' => '75',
      'account_bank'      => '工商银行',
      'account_name'      => 'AOZdYGISxo4yw96uY1Pk7Rq79Jtt7+I8juwEc4P4TG5xzchG/5IL9DBd+Z0zZXkw==',
      'bank_address_code' => '110000',
      'bank_branch_id'    => '402713354941',
      'bank_name'         => '施秉县农村信用合作联社城关信用社',
      'account_number'    => 'd+xT+MQCvrLHUVDWv/8MR/dB7TkXLVfSrUxMPZy6jWWYzpRrEEaYQE8ZRGYoeorwC+w==',
    ],
    'contact_info'             => [
      'contact_type'                  => '65',
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
    'sales_scene_info'         => [
      'store_name'             => '爱烧烤',
      'store_url'              => 'http://www.qq.com',
      'store_qr_code'          => '',
      'mini_program_sub_appid' => '',
    ],
    'settlement_info'          => [
      'settlement_id'      => '',
      'qualification_type' => '',
    ],
    'merchant_shortname'       => '',
    'qualifications'           => ['MediaId'],
    'business_addition_pics'   => ['MediaId'],
    'business_addition_desc'   => ['MediaId'],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/applyments/{empty}']->post([
  'json' => [
    'out_request_no'           => '',
    'organization_type'        => '2401',
    'finance_institution'      => true,
    'business_license_info'    => [
      'cert_type'               => 'CERTIFICATE_TYPE_2388',
      'business_license_copy'   => '47ZC6GC-vnrbEny__Ie_An5-tCpqxucuxi-vByf3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBDIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'business_license_number' => '123456789012345678',
      'merchant_name'           => '腾讯科技有限公司',
      'legal_person'            => '张三',
      'company_address'         => '深圳南山区科苑路',
      'business_time'           => '["2014-01-01","长期"]',
    ],
    'finance_institution_info' => [
      'finance_type'         => 'BANK_AGENT',
      'finance_license_pics' => ['MediaId'],
    ],
    'id_holder_type'           => 'LEGAL',
    'id_doc_type'              => 'IDENTIFICATION_TYPE_IDCARD',
    'authorize_letter_copy'    => '',
    'id_card_info'             => [
      'id_card_copy'             => 'xpnFuAxhBTEO_PvWkfSCJ3zVIn001D8daLC-ehEuo0BJqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'id_card_national'         => 'vByf3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBDIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'id_card_name'             => 'pVd1HJ6v/69bDnuC4EL5Kz4jBHLiCa8MRtelw/wDa4SzfeespQO/0kjiwfqdfg==',
      'id_card_number'           => 'zV+BEmytMNQCqQ8juwEc4P4TG5xzchG/5IL9DBd+Z0zZXkw==4',
      'id_card_valid_time_begin' => '',
      'id_card_valid_time'       => '',
    ],
    'id_doc_info'              => [
      'id_doc_name'      => 'jTpGmxUX3FBWVQ5NJTZvlKX_gdU4LC-ehEuo0BJqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'id_doc_number'    => 'jTpGmxUX3FBWVQ5NJTZvlKX_go0BJqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'id_doc_copy'      => 'xi-vByf3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBDIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'id_doc_copy_back' => 'xi-vByf3Gjm7KE53JXvGy9tqZm2XAUf-4KGprrKhpVBDIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'doc_period_begin' => '2020-01-02',
      'doc_period_end'   => '2020-01-02',
    ],
    'owner'                    => true,
    'ubo_info_list'            => [[
      'ubo_id_doc_type'      => 'IDENTIFICATION_TYPE_IDCARD',
      'ubo_id_doc_copy'      => '',
      'ubo_id_doc_copy_back' => '',
      'ubo_id_doc_name'      => '',
      'ubo_id_doc_number'    => '',
      'ubo_id_doc_address'   => '',
      'ubo_period_begin'     => '',
      'ubo_period_end'       => '',
    ],],
    'account_info'             => [
      'bank_account_type' => '75',
      'account_bank'      => '工商银行',
      'account_name'      => 'AOZdYGISxo4yw96uY1Pk7Rq79Jtt7+I8juwEc4P4TG5xzchG/5IL9DBd+Z0zZXkw==',
      'bank_address_code' => '110000',
      'bank_branch_id'    => '402713354941',
      'bank_name'         => '施秉县农村信用合作联社城关信用社',
      'account_number'    => 'd+xT+MQCvrLHUVDWv/8MR/dB7TkXLVfSrUxMPZy6jWWYzpRrEEaYQE8ZRGYoeorwC+w==',
    ],
    'contact_info'             => [
      'contact_type'                  => '65',
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
    'sales_scene_info'         => [
      'store_name'             => '爱烧烤',
      'store_url'              => 'http://www.qq.com',
      'store_qr_code'          => '',
      'mini_program_sub_appid' => '',
    ],
    'settlement_info'          => [
      'settlement_id'      => '',
      'qualification_type' => '',
    ],
    'merchant_shortname'       => '',
    'qualifications'           => ['MediaId'],
    'business_addition_pics'   => ['MediaId'],
    'business_addition_desc'   => ['MediaId'],
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
| applyment_id {data-required} | integer | 微信支付申请单号
| out_request_no {data-required} | string | 业务申请编号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_1_1.shtml) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/ecommerce-merchant-application/applyment/submit-applyment.html)
