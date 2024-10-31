---
title: 提交申请单
description: 普通服务商（银行、支付机构、电商平台不可用）使用该接口提交商家资料，帮助商家入驻成为微信支付的特约商户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| business_code {data-indent=1} | string | 
| contact_info {data-indent=1} | object | 
| contact_type {data-indent=2} | string | 超级管理员类型<br/>`LEGAL` \| `SUPER` 枚举值之一
| contact_name {data-indent=2} | string | 超级管理员姓名
| contact_id_doc_type {data-indent=2} | string | `IDENTIFICATION_TYPE_IDCARD` \| `IDENTIFICATION_TYPE_OVERSEA_PASSPORT` \| `IDENTIFICATION_TYPE_HONGKONG_PASSPORT` \| `IDENTIFICATION_TYPE_MACAO_PASSPORT` \| `IDENTIFICATION_TYPE_TAIWAN_PASSPORT` \| `IDENTIFICATION_TYPE_FOREIGN_RESIDENT` \| `IDENTIFICATION_TYPE_HONGKONG_MACAO_RESIDENT` \| `IDENTIFICATION_TYPE_TAIWAN_RESIDENT` 枚举值之一
| contact_id_number {data-indent=2} | string | 超级管理员身份证件号码
| contact_id_doc_copy {data-indent=2} | string | 超级管理员证件正面照片
| contact_id_doc_copy_back {data-indent=2} | string | 超级管理员证件反面照片
| contact_period_begin {data-indent=2} | string | 超级管理员证件有效期开始时间
| contact_period_end {data-indent=2} | string | 超级管理员证件有效期结束时间
| business_authorization_letter {data-indent=2} | string | 业务办理授权函
| openid {data-indent=2} | string | 超级管理员微信openid
| mobile_phone {data-indent=2} | string | 联系手机
| contact_email {data-indent=2} | string | 联系邮箱
| subject_info {data-indent=1} | object | 
| subject_type {data-indent=2} | string | 主体类型<br/>`SUBJECT_TYPE_INDIVIDUAL` \| `SUBJECT_TYPE_ENTERPRISE` \| `SUBJECT_TYPE_INSTITUTIONS` \| `SUBJECT_TYPE_OTHERS` \| `SUBJECT_TYPE_MICRO` \| `SUBJECT_TYPE_GOVERNMENT` \| `SUBJECT_TYPE_INSTITUTIONS_CLONED` 枚举值之一
| business_license_info {data-indent=2} | object | 
| license_copy {data-indent=3} | string | 营业执照照片
| license_number {data-indent=3} | string | 注册号/统一社会信用代码
| merchant_name {data-indent=3} | string | 商户名称
| legal_person {data-indent=3} | string | 个体户经营者/法人姓名
| license_address {data-indent=3} | string | 注册地址
| period_begin {data-indent=3} | string | 有效期限开始日期
| period_end {data-indent=3} | string | 有效期限结束日期
| certificate_info {data-indent=2} | object | 
| cert_copy {data-indent=3} | string | 登记证书照片
| cert_type {data-indent=3} | string | 登记证书类型<br/>`CERTIFICATE_TYPE_2388` \| `CERTIFICATE_TYPE_2389` \| `CERTIFICATE_TYPE_2390` \| `CERTIFICATE_TYPE_2391` \| `CERTIFICATE_TYPE_2392` \| `CERTIFICATE_TYPE_2393` \| `CERTIFICATE_TYPE_2394` \| `CERTIFICATE_TYPE_2395` \| `CERTIFICATE_TYPE_2396` \| `CERTIFICATE_TYPE_2399` \| `CERTIFICATE_TYPE_2400` \| `CERTIFICATE_TYPE_2520` \| `CERTIFICATE_TYPE_2521` \| `CERTIFICATE_TYPE_2522` 枚举值之一
| cert_number {data-indent=3} | string | 证书号
| merchant_name {data-indent=3} | string | 商户名称
| company_address {data-indent=3} | string | 注册地址
| legal_person {data-indent=3} | string | 法人姓名
| period_begin {data-indent=3} | string | 有效期限开始日期
| period_end {data-indent=3} | string | 有效期限结束日期
| organization_info {data-indent=2} | object | 
| organization_copy {data-indent=3} | string | 组织机构代码证照片
| organization_code {data-indent=3} | string | 组织机构代码
| org_period_begin {data-indent=3} | string | 组织机构代码证有效期开始日期
| org_period_end {data-indent=3} | string | 组织机构代码证有效期结束日期
| certificate_letter_copy {data-indent=2} | string | 单位证明函照片
| finance_institution_info {data-indent=2} | object | 
| finance_type {data-indent=3} | string | 金融机构类型<br/>`BANK_AGENT` \| `PAYMENT_AGENT` \| `INSURANCE` \| `TRADE_AND_SETTLE` \| `OTHER` 枚举值之一
| finance_license_pics {data-indent=3} | string[] | 
| identity_info {data-indent=2} | object | 
| id_holder_type {data-indent=3} | string | 超级管理员类型<br/>`LEGAL` \| `SUPER` 枚举值之一
| id_doc_type {data-indent=3} | string | `IDENTIFICATION_TYPE_IDCARD` \| `IDENTIFICATION_TYPE_OVERSEA_PASSPORT` \| `IDENTIFICATION_TYPE_HONGKONG_PASSPORT` \| `IDENTIFICATION_TYPE_MACAO_PASSPORT` \| `IDENTIFICATION_TYPE_TAIWAN_PASSPORT` \| `IDENTIFICATION_TYPE_FOREIGN_RESIDENT` \| `IDENTIFICATION_TYPE_HONGKONG_MACAO_RESIDENT` \| `IDENTIFICATION_TYPE_TAIWAN_RESIDENT` 枚举值之一
| authorize_letter_copy {data-indent=3} | string | 法定代表人说明函
| id_card_info {data-indent=3} | object | 
| id_card_copy {data-indent=4} | string | 身份证人像面照片
| id_card_national {data-indent=4} | string | 身份证国徽面照片
| id_card_name {data-indent=4} | string | 身份证姓名
| id_card_number {data-indent=4} | string | 身份证号码
| id_card_address {data-indent=4} | string | 身份证居住地址
| card_period_begin {data-indent=4} | string | 身份证有效期开始时间
| card_period_end {data-indent=4} | string | 身份证有效期结束时间
| id_doc_info {data-indent=3} | object | 
| id_doc_copy {data-indent=4} | string | 证件正面照片
| id_doc_copy_back {data-indent=4} | string | 证件反面照片
| id_doc_name {data-indent=4} | string | 证件姓名
| id_doc_number {data-indent=4} | string | 证件号码
| id_doc_address {data-indent=4} | string | 证件居住地址
| doc_period_begin {data-indent=4} | string | 证件有效期开始时间
| doc_period_end {data-indent=4} | string | 证件有效期结束时间
| owner {data-indent=3} | boolean | 经营者/法人是否为受益人
| ubo_info_list {data-indent=2} | object[] | 
| ubo_id_doc_type {data-indent=3} | string | `IDENTIFICATION_TYPE_IDCARD` \| `IDENTIFICATION_TYPE_OVERSEA_PASSPORT` \| `IDENTIFICATION_TYPE_HONGKONG_PASSPORT` \| `IDENTIFICATION_TYPE_MACAO_PASSPORT` \| `IDENTIFICATION_TYPE_TAIWAN_PASSPORT` \| `IDENTIFICATION_TYPE_FOREIGN_RESIDENT` \| `IDENTIFICATION_TYPE_HONGKONG_MACAO_RESIDENT` \| `IDENTIFICATION_TYPE_TAIWAN_RESIDENT` 枚举值之一
| ubo_id_doc_copy {data-indent=3} | string | 身份证人像面照片
| ubo_id_doc_copy_back {data-indent=3} | string | 身份证国徽面照片
| ubo_id_doc_name {data-indent=3} | string | 受益人姓名
| ubo_id_doc_number {data-indent=3} | string | 证件号码
| ubo_id_doc_address {data-indent=3} | string | 证件居住地址
| ubo_period_begin {data-indent=3} | string | 证件有效期开始时间
| ubo_period_end {data-indent=3} | string | 证件有效期结束时间
| business_info {data-indent=1} | object | 
| merchant_shortname {data-indent=2} | string | 商户简称
| service_phone {data-indent=2} | string | 客服电话
| sales_info {data-indent=2} | object | 
| sales_scenes_type {data-indent=3} | string[] | 经营场景类型<br/>`SALES_SCENES_STORE` \| `SALES_SCENES_MP` \| `SALES_SCENES_MINI_PROGRAM` \| `SALES_SCENES_WEB` \| `SALES_SCENES_APP` \| `SALES_SCENES_WEWORK` 枚举值之一
| biz_store_info {data-indent=3} | object | 
| biz_store_name {data-indent=4} | string | 
| biz_address_code {data-indent=4} | string | 
| biz_store_address {data-indent=4} | string | 
| store_entrance_pic {data-indent=4} | string[] | 
| indoor_pic {data-indent=4} | string[] | 
| biz_sub_appid {data-indent=4} | string | 
| mp_info {data-indent=3} | object | 
| mp_appid {data-indent=4} | string | 
| mp_sub_appid {data-indent=4} | string | 
| mp_pics {data-indent=4} | string[] | 
| mini_program_info {data-indent=3} | object | 
| mini_program_appid {data-indent=4} | string | 
| mini_program_sub_appid {data-indent=4} | string | 
| mini_program_pics {data-indent=4} | string[] | 
| app_info {data-indent=3} | object | 
| app_appid {data-indent=4} | string | 
| app_sub_appid {data-indent=4} | string | 
| app_pics {data-indent=4} | string[] | 
| web_info {data-indent=3} | object | 
| domain {data-indent=4} | string | 
| web_authorisation {data-indent=4} | string | 
| web_appid {data-indent=4} | string | 
| wework_info {data-indent=3} | object | 
| sub_corp_id {data-indent=4} | string | 
| wework_pics {data-indent=4} | string[] | 
| settlement_info {data-indent=1} | object | 
| settlement_id {data-indent=2} | string | 
| qualification_type {data-indent=2} | string | 
| qualifications {data-indent=2} | string[] | 
| activities_id {data-indent=2} | string | 
| activities_rate {data-indent=2} | string | 
| activities_additions {data-indent=2} | string[] | 
| bank_account_info {data-indent=1} | object | 
| bank_account_type {data-indent=2} | string | 账户类型<br/>`BANK_ACCOUNT_TYPE_CORPORATE` \| `BANK_ACCOUNT_TYPE_PERSONAL` 枚举值之一
| account_name {data-indent=2} | string | 开户名称
| account_bank {data-indent=2} | string | 开户银行
| bank_address_code {data-indent=2} | string | 开户银行省市编码
| bank_name {data-indent=2} | string | 开户银行全称（含支行）
| bank_branch_id {data-indent=2} | string | 开户银行联行号
| account_number {data-indent=2} | string | 银行账号
| addition_info {data-indent=1} | object | 
| legal_person_commitment {data-indent=2} | string | 
| legal_person_video {data-indent=2} | string | 
| business_addition_pics {data-indent=2} | string[] | 
| business_addition_msg {data-indent=2} | string | 
| headers | object | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 平台公钥ID/平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->applyment4sub->applyment->_empty_->postAsync([
  'json' => [
    'business_code' => '',
    'contact_info' => [
      'contact_type' => 'LEGAL',
      'contact_name' => '',
      'contact_id_doc_type' => 'IDENTIFICATION_TYPE_IDCARD',
      'contact_id_number' => '',
      'contact_id_doc_copy' => '',
      'contact_id_doc_copy_back' => '',
      'contact_period_begin' => '',
      'contact_period_end' => '',
      'business_authorization_letter' => '',
      'openid' => '',
      'mobile_phone' => '',
      'contact_email' => '',
    ],
    'subject_info' => [
      'subject_type' => 'SUBJECT_TYPE_INDIVIDUAL',
      'business_license_info' => [
        'license_copy' => '',
        'license_number' => '',
        'merchant_name' => '',
        'legal_person' => '',
        'license_address' => '',
        'period_begin' => '',
        'period_end' => '',
      ],
      'certificate_info' => [
        'cert_copy' => '',
        'cert_type' => 'CERTIFICATE_TYPE_2388',
        'cert_number' => '',
        'merchant_name' => '',
        'company_address' => '',
        'legal_person' => '',
        'period_begin' => '',
        'period_end' => '',
      ],
      'organization_info' => [
        'organization_copy' => '',
        'organization_code' => '',
        'org_period_begin' => '',
        'org_period_end' => '',
      ],
      'certificate_letter_copy' => '',
      'finance_institution_info' => [
        'finance_type' => 'BANK_AGENT',
        'finance_license_pics' => ['MediaId'],
      ],
      'identity_info' => [
        'id_holder_type' => 'LEGAL',
        'id_doc_type' => 'IDENTIFICATION_TYPE_IDCARD',
        'authorize_letter_copy' => '',
        'id_card_info' => [
          'id_card_copy' => '',
          'id_card_national' => '',
          'id_card_name' => '',
          'id_card_number' => '',
          'id_card_address' => '',
          'card_period_begin' => '',
          'card_period_end' => '',
        ],
        'id_doc_info' => [
          'id_doc_copy' => '',
          'id_doc_copy_back' => '',
          'id_doc_name' => '',
          'id_doc_number' => '',
          'id_doc_address' => '',
          'doc_period_begin' => '',
          'doc_period_end' => '',
        ],
        'owner' => true,
      ],
      'ubo_info_list' => [[
        'ubo_id_doc_type' => 'IDENTIFICATION_TYPE_IDCARD',
        'ubo_id_doc_copy' => '',
        'ubo_id_doc_copy_back' => '',
        'ubo_id_doc_name' => '',
        'ubo_id_doc_number' => '',
        'ubo_id_doc_address' => '',
        'ubo_period_begin' => '',
        'ubo_period_end' => '',
      ],],
    ],
    'business_info' => [
      'merchant_shortname' => '',
      'service_phone' => '',
      'sales_info' => [
        'sales_scenes_type' => ['string'],
        'biz_store_info' => [
          'biz_store_name' => '',
          'biz_address_code' => '',
          'biz_store_address' => '',
          'store_entrance_pic' => ['MediaId'],
          'indoor_pic' => ['MediaId'],
          'biz_sub_appid' => '',
        ],
        'mp_info' => [
          'mp_appid' => '',
          'mp_sub_appid' => '',
          'mp_pics' => ['MediaId'],
        ],
        'mini_program_info' => [
          'mini_program_appid' => '',
          'mini_program_sub_appid' => '',
          'mini_program_pics' => ['MediaId'],
        ],
        'app_info' => [
          'app_appid' => '',
          'app_sub_appid' => '',
          'app_pics' => ['MediaId'],
        ],
        'web_info' => [
          'domain' => '',
          'web_authorisation' => '',
          'web_appid' => '',
        ],
        'wework_info' => [
          'sub_corp_id' => '',
          'wework_pics' => ['MediaId'],
        ],
      ],
    ],
    'settlement_info' => [
      'settlement_id' => '',
      'qualification_type' => '',
      'qualifications' => ['string'],
      'activities_id' => '',
      'activities_rate' => '',
      'activities_additions' => ['string'],
    ],
    'bank_account_info' => [
      'bank_account_type' => 'BANK_ACCOUNT_TYPE_CORPORATE',
      'account_name' => '',
      'account_bank' => '工商银行',
      'bank_address_code' => '',
      'bank_name' => '施秉县农村信用合作联社城关信用社',
      'bank_branch_id' => '402713354941',
      'account_number' => 'ciphertext',
    ],
    'addition_info' => [
      'legal_person_commitment' => '',
      'legal_person_video' => '',
      'business_addition_pics' => ['MediaId'],
      'business_addition_msg' => '',
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
$instance->chain('v3/applyment4sub/applyment/{empty}')->postAsync([
  'json' => [
    'business_code' => '',
    'contact_info' => [
      'contact_type' => 'LEGAL',
      'contact_name' => '',
      'contact_id_doc_type' => 'IDENTIFICATION_TYPE_IDCARD',
      'contact_id_number' => '',
      'contact_id_doc_copy' => '',
      'contact_id_doc_copy_back' => '',
      'contact_period_begin' => '',
      'contact_period_end' => '',
      'business_authorization_letter' => '',
      'openid' => '',
      'mobile_phone' => '',
      'contact_email' => '',
    ],
    'subject_info' => [
      'subject_type' => 'SUBJECT_TYPE_INDIVIDUAL',
      'business_license_info' => [
        'license_copy' => '',
        'license_number' => '',
        'merchant_name' => '',
        'legal_person' => '',
        'license_address' => '',
        'period_begin' => '',
        'period_end' => '',
      ],
      'certificate_info' => [
        'cert_copy' => '',
        'cert_type' => 'CERTIFICATE_TYPE_2388',
        'cert_number' => '',
        'merchant_name' => '',
        'company_address' => '',
        'legal_person' => '',
        'period_begin' => '',
        'period_end' => '',
      ],
      'organization_info' => [
        'organization_copy' => '',
        'organization_code' => '',
        'org_period_begin' => '',
        'org_period_end' => '',
      ],
      'certificate_letter_copy' => '',
      'finance_institution_info' => [
        'finance_type' => 'BANK_AGENT',
        'finance_license_pics' => ['MediaId'],
      ],
      'identity_info' => [
        'id_holder_type' => 'LEGAL',
        'id_doc_type' => 'IDENTIFICATION_TYPE_IDCARD',
        'authorize_letter_copy' => '',
        'id_card_info' => [
          'id_card_copy' => '',
          'id_card_national' => '',
          'id_card_name' => '',
          'id_card_number' => '',
          'id_card_address' => '',
          'card_period_begin' => '',
          'card_period_end' => '',
        ],
        'id_doc_info' => [
          'id_doc_copy' => '',
          'id_doc_copy_back' => '',
          'id_doc_name' => '',
          'id_doc_number' => '',
          'id_doc_address' => '',
          'doc_period_begin' => '',
          'doc_period_end' => '',
        ],
        'owner' => true,
      ],
      'ubo_info_list' => [[
        'ubo_id_doc_type' => 'IDENTIFICATION_TYPE_IDCARD',
        'ubo_id_doc_copy' => '',
        'ubo_id_doc_copy_back' => '',
        'ubo_id_doc_name' => '',
        'ubo_id_doc_number' => '',
        'ubo_id_doc_address' => '',
        'ubo_period_begin' => '',
        'ubo_period_end' => '',
      ],],
    ],
    'business_info' => [
      'merchant_shortname' => '',
      'service_phone' => '',
      'sales_info' => [
        'sales_scenes_type' => ['string'],
        'biz_store_info' => [
          'biz_store_name' => '',
          'biz_address_code' => '',
          'biz_store_address' => '',
          'store_entrance_pic' => ['MediaId'],
          'indoor_pic' => ['MediaId'],
          'biz_sub_appid' => '',
        ],
        'mp_info' => [
          'mp_appid' => '',
          'mp_sub_appid' => '',
          'mp_pics' => ['MediaId'],
        ],
        'mini_program_info' => [
          'mini_program_appid' => '',
          'mini_program_sub_appid' => '',
          'mini_program_pics' => ['MediaId'],
        ],
        'app_info' => [
          'app_appid' => '',
          'app_sub_appid' => '',
          'app_pics' => ['MediaId'],
        ],
        'web_info' => [
          'domain' => '',
          'web_authorisation' => '',
          'web_appid' => '',
        ],
        'wework_info' => [
          'sub_corp_id' => '',
          'wework_pics' => ['MediaId'],
        ],
      ],
    ],
    'settlement_info' => [
      'settlement_id' => '',
      'qualification_type' => '',
      'qualifications' => ['string'],
      'activities_id' => '',
      'activities_rate' => '',
      'activities_additions' => ['string'],
    ],
    'bank_account_info' => [
      'bank_account_type' => 'BANK_ACCOUNT_TYPE_CORPORATE',
      'account_name' => '',
      'account_bank' => '工商银行',
      'bank_address_code' => '',
      'bank_name' => '施秉县农村信用合作联社城关信用社',
      'bank_branch_id' => '402713354941',
      'account_number' => 'ciphertext',
    ],
    'addition_info' => [
      'legal_person_commitment' => '',
      'legal_person_video' => '',
      'business_addition_pics' => ['MediaId'],
      'business_addition_msg' => '',
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
$instance['v3/applyment4sub/applyment/{empty}']->postAsync([
  'json' => [
    'business_code' => '',
    'contact_info' => [
      'contact_type' => 'LEGAL',
      'contact_name' => '',
      'contact_id_doc_type' => 'IDENTIFICATION_TYPE_IDCARD',
      'contact_id_number' => '',
      'contact_id_doc_copy' => '',
      'contact_id_doc_copy_back' => '',
      'contact_period_begin' => '',
      'contact_period_end' => '',
      'business_authorization_letter' => '',
      'openid' => '',
      'mobile_phone' => '',
      'contact_email' => '',
    ],
    'subject_info' => [
      'subject_type' => 'SUBJECT_TYPE_INDIVIDUAL',
      'business_license_info' => [
        'license_copy' => '',
        'license_number' => '',
        'merchant_name' => '',
        'legal_person' => '',
        'license_address' => '',
        'period_begin' => '',
        'period_end' => '',
      ],
      'certificate_info' => [
        'cert_copy' => '',
        'cert_type' => 'CERTIFICATE_TYPE_2388',
        'cert_number' => '',
        'merchant_name' => '',
        'company_address' => '',
        'legal_person' => '',
        'period_begin' => '',
        'period_end' => '',
      ],
      'organization_info' => [
        'organization_copy' => '',
        'organization_code' => '',
        'org_period_begin' => '',
        'org_period_end' => '',
      ],
      'certificate_letter_copy' => '',
      'finance_institution_info' => [
        'finance_type' => 'BANK_AGENT',
        'finance_license_pics' => ['MediaId'],
      ],
      'identity_info' => [
        'id_holder_type' => 'LEGAL',
        'id_doc_type' => 'IDENTIFICATION_TYPE_IDCARD',
        'authorize_letter_copy' => '',
        'id_card_info' => [
          'id_card_copy' => '',
          'id_card_national' => '',
          'id_card_name' => '',
          'id_card_number' => '',
          'id_card_address' => '',
          'card_period_begin' => '',
          'card_period_end' => '',
        ],
        'id_doc_info' => [
          'id_doc_copy' => '',
          'id_doc_copy_back' => '',
          'id_doc_name' => '',
          'id_doc_number' => '',
          'id_doc_address' => '',
          'doc_period_begin' => '',
          'doc_period_end' => '',
        ],
        'owner' => true,
      ],
      'ubo_info_list' => [[
        'ubo_id_doc_type' => 'IDENTIFICATION_TYPE_IDCARD',
        'ubo_id_doc_copy' => '',
        'ubo_id_doc_copy_back' => '',
        'ubo_id_doc_name' => '',
        'ubo_id_doc_number' => '',
        'ubo_id_doc_address' => '',
        'ubo_period_begin' => '',
        'ubo_period_end' => '',
      ],],
    ],
    'business_info' => [
      'merchant_shortname' => '',
      'service_phone' => '',
      'sales_info' => [
        'sales_scenes_type' => ['string'],
        'biz_store_info' => [
          'biz_store_name' => '',
          'biz_address_code' => '',
          'biz_store_address' => '',
          'store_entrance_pic' => ['MediaId'],
          'indoor_pic' => ['MediaId'],
          'biz_sub_appid' => '',
        ],
        'mp_info' => [
          'mp_appid' => '',
          'mp_sub_appid' => '',
          'mp_pics' => ['MediaId'],
        ],
        'mini_program_info' => [
          'mini_program_appid' => '',
          'mini_program_sub_appid' => '',
          'mini_program_pics' => ['MediaId'],
        ],
        'app_info' => [
          'app_appid' => '',
          'app_sub_appid' => '',
          'app_pics' => ['MediaId'],
        ],
        'web_info' => [
          'domain' => '',
          'web_authorisation' => '',
          'web_appid' => '',
        ],
        'wework_info' => [
          'sub_corp_id' => '',
          'wework_pics' => ['MediaId'],
        ],
      ],
    ],
    'settlement_info' => [
      'settlement_id' => '',
      'qualification_type' => '',
      'qualifications' => ['string'],
      'activities_id' => '',
      'activities_rate' => '',
      'activities_additions' => ['string'],
    ],
    'bank_account_info' => [
      'bank_account_type' => 'BANK_ACCOUNT_TYPE_CORPORATE',
      'account_name' => '',
      'account_bank' => '工商银行',
      'bank_address_code' => '',
      'bank_name' => '施秉县农村信用合作联社城关信用社',
      'bank_branch_id' => '402713354941',
      'account_number' => 'ciphertext',
    ],
    'addition_info' => [
      'legal_person_commitment' => '',
      'legal_person_video' => '',
      'business_addition_pics' => ['MediaId'],
      'business_addition_msg' => '',
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
$response = $instance->v3->applyment4sub->applyment->_empty_->post([
  'json' => [
    'business_code' => '',
    'contact_info' => [
      'contact_type' => 'LEGAL',
      'contact_name' => '',
      'contact_id_doc_type' => 'IDENTIFICATION_TYPE_IDCARD',
      'contact_id_number' => '',
      'contact_id_doc_copy' => '',
      'contact_id_doc_copy_back' => '',
      'contact_period_begin' => '',
      'contact_period_end' => '',
      'business_authorization_letter' => '',
      'openid' => '',
      'mobile_phone' => '',
      'contact_email' => '',
    ],
    'subject_info' => [
      'subject_type' => 'SUBJECT_TYPE_INDIVIDUAL',
      'business_license_info' => [
        'license_copy' => '',
        'license_number' => '',
        'merchant_name' => '',
        'legal_person' => '',
        'license_address' => '',
        'period_begin' => '',
        'period_end' => '',
      ],
      'certificate_info' => [
        'cert_copy' => '',
        'cert_type' => 'CERTIFICATE_TYPE_2388',
        'cert_number' => '',
        'merchant_name' => '',
        'company_address' => '',
        'legal_person' => '',
        'period_begin' => '',
        'period_end' => '',
      ],
      'organization_info' => [
        'organization_copy' => '',
        'organization_code' => '',
        'org_period_begin' => '',
        'org_period_end' => '',
      ],
      'certificate_letter_copy' => '',
      'finance_institution_info' => [
        'finance_type' => 'BANK_AGENT',
        'finance_license_pics' => ['MediaId'],
      ],
      'identity_info' => [
        'id_holder_type' => 'LEGAL',
        'id_doc_type' => 'IDENTIFICATION_TYPE_IDCARD',
        'authorize_letter_copy' => '',
        'id_card_info' => [
          'id_card_copy' => '',
          'id_card_national' => '',
          'id_card_name' => '',
          'id_card_number' => '',
          'id_card_address' => '',
          'card_period_begin' => '',
          'card_period_end' => '',
        ],
        'id_doc_info' => [
          'id_doc_copy' => '',
          'id_doc_copy_back' => '',
          'id_doc_name' => '',
          'id_doc_number' => '',
          'id_doc_address' => '',
          'doc_period_begin' => '',
          'doc_period_end' => '',
        ],
        'owner' => true,
      ],
      'ubo_info_list' => [[
        'ubo_id_doc_type' => 'IDENTIFICATION_TYPE_IDCARD',
        'ubo_id_doc_copy' => '',
        'ubo_id_doc_copy_back' => '',
        'ubo_id_doc_name' => '',
        'ubo_id_doc_number' => '',
        'ubo_id_doc_address' => '',
        'ubo_period_begin' => '',
        'ubo_period_end' => '',
      ],],
    ],
    'business_info' => [
      'merchant_shortname' => '',
      'service_phone' => '',
      'sales_info' => [
        'sales_scenes_type' => ['string'],
        'biz_store_info' => [
          'biz_store_name' => '',
          'biz_address_code' => '',
          'biz_store_address' => '',
          'store_entrance_pic' => ['MediaId'],
          'indoor_pic' => ['MediaId'],
          'biz_sub_appid' => '',
        ],
        'mp_info' => [
          'mp_appid' => '',
          'mp_sub_appid' => '',
          'mp_pics' => ['MediaId'],
        ],
        'mini_program_info' => [
          'mini_program_appid' => '',
          'mini_program_sub_appid' => '',
          'mini_program_pics' => ['MediaId'],
        ],
        'app_info' => [
          'app_appid' => '',
          'app_sub_appid' => '',
          'app_pics' => ['MediaId'],
        ],
        'web_info' => [
          'domain' => '',
          'web_authorisation' => '',
          'web_appid' => '',
        ],
        'wework_info' => [
          'sub_corp_id' => '',
          'wework_pics' => ['MediaId'],
        ],
      ],
    ],
    'settlement_info' => [
      'settlement_id' => '',
      'qualification_type' => '',
      'qualifications' => ['string'],
      'activities_id' => '',
      'activities_rate' => '',
      'activities_additions' => ['string'],
    ],
    'bank_account_info' => [
      'bank_account_type' => 'BANK_ACCOUNT_TYPE_CORPORATE',
      'account_name' => '',
      'account_bank' => '工商银行',
      'bank_address_code' => '',
      'bank_name' => '施秉县农村信用合作联社城关信用社',
      'bank_branch_id' => '402713354941',
      'account_number' => 'ciphertext',
    ],
    'addition_info' => [
      'legal_person_commitment' => '',
      'legal_person_video' => '',
      'business_addition_pics' => ['MediaId'],
      'business_addition_msg' => '',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/applyment4sub/applyment/{empty}')->post([
  'json' => [
    'business_code' => '',
    'contact_info' => [
      'contact_type' => 'LEGAL',
      'contact_name' => '',
      'contact_id_doc_type' => 'IDENTIFICATION_TYPE_IDCARD',
      'contact_id_number' => '',
      'contact_id_doc_copy' => '',
      'contact_id_doc_copy_back' => '',
      'contact_period_begin' => '',
      'contact_period_end' => '',
      'business_authorization_letter' => '',
      'openid' => '',
      'mobile_phone' => '',
      'contact_email' => '',
    ],
    'subject_info' => [
      'subject_type' => 'SUBJECT_TYPE_INDIVIDUAL',
      'business_license_info' => [
        'license_copy' => '',
        'license_number' => '',
        'merchant_name' => '',
        'legal_person' => '',
        'license_address' => '',
        'period_begin' => '',
        'period_end' => '',
      ],
      'certificate_info' => [
        'cert_copy' => '',
        'cert_type' => 'CERTIFICATE_TYPE_2388',
        'cert_number' => '',
        'merchant_name' => '',
        'company_address' => '',
        'legal_person' => '',
        'period_begin' => '',
        'period_end' => '',
      ],
      'organization_info' => [
        'organization_copy' => '',
        'organization_code' => '',
        'org_period_begin' => '',
        'org_period_end' => '',
      ],
      'certificate_letter_copy' => '',
      'finance_institution_info' => [
        'finance_type' => 'BANK_AGENT',
        'finance_license_pics' => ['MediaId'],
      ],
      'identity_info' => [
        'id_holder_type' => 'LEGAL',
        'id_doc_type' => 'IDENTIFICATION_TYPE_IDCARD',
        'authorize_letter_copy' => '',
        'id_card_info' => [
          'id_card_copy' => '',
          'id_card_national' => '',
          'id_card_name' => '',
          'id_card_number' => '',
          'id_card_address' => '',
          'card_period_begin' => '',
          'card_period_end' => '',
        ],
        'id_doc_info' => [
          'id_doc_copy' => '',
          'id_doc_copy_back' => '',
          'id_doc_name' => '',
          'id_doc_number' => '',
          'id_doc_address' => '',
          'doc_period_begin' => '',
          'doc_period_end' => '',
        ],
        'owner' => true,
      ],
      'ubo_info_list' => [[
        'ubo_id_doc_type' => 'IDENTIFICATION_TYPE_IDCARD',
        'ubo_id_doc_copy' => '',
        'ubo_id_doc_copy_back' => '',
        'ubo_id_doc_name' => '',
        'ubo_id_doc_number' => '',
        'ubo_id_doc_address' => '',
        'ubo_period_begin' => '',
        'ubo_period_end' => '',
      ],],
    ],
    'business_info' => [
      'merchant_shortname' => '',
      'service_phone' => '',
      'sales_info' => [
        'sales_scenes_type' => ['string'],
        'biz_store_info' => [
          'biz_store_name' => '',
          'biz_address_code' => '',
          'biz_store_address' => '',
          'store_entrance_pic' => ['MediaId'],
          'indoor_pic' => ['MediaId'],
          'biz_sub_appid' => '',
        ],
        'mp_info' => [
          'mp_appid' => '',
          'mp_sub_appid' => '',
          'mp_pics' => ['MediaId'],
        ],
        'mini_program_info' => [
          'mini_program_appid' => '',
          'mini_program_sub_appid' => '',
          'mini_program_pics' => ['MediaId'],
        ],
        'app_info' => [
          'app_appid' => '',
          'app_sub_appid' => '',
          'app_pics' => ['MediaId'],
        ],
        'web_info' => [
          'domain' => '',
          'web_authorisation' => '',
          'web_appid' => '',
        ],
        'wework_info' => [
          'sub_corp_id' => '',
          'wework_pics' => ['MediaId'],
        ],
      ],
    ],
    'settlement_info' => [
      'settlement_id' => '',
      'qualification_type' => '',
      'qualifications' => ['string'],
      'activities_id' => '',
      'activities_rate' => '',
      'activities_additions' => ['string'],
    ],
    'bank_account_info' => [
      'bank_account_type' => 'BANK_ACCOUNT_TYPE_CORPORATE',
      'account_name' => '',
      'account_bank' => '工商银行',
      'bank_address_code' => '',
      'bank_name' => '施秉县农村信用合作联社城关信用社',
      'bank_branch_id' => '402713354941',
      'account_number' => 'ciphertext',
    ],
    'addition_info' => [
      'legal_person_commitment' => '',
      'legal_person_video' => '',
      'business_addition_pics' => ['MediaId'],
      'business_addition_msg' => '',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/applyment4sub/applyment/{empty}']->post([
  'json' => [
    'business_code' => '',
    'contact_info' => [
      'contact_type' => 'LEGAL',
      'contact_name' => '',
      'contact_id_doc_type' => 'IDENTIFICATION_TYPE_IDCARD',
      'contact_id_number' => '',
      'contact_id_doc_copy' => '',
      'contact_id_doc_copy_back' => '',
      'contact_period_begin' => '',
      'contact_period_end' => '',
      'business_authorization_letter' => '',
      'openid' => '',
      'mobile_phone' => '',
      'contact_email' => '',
    ],
    'subject_info' => [
      'subject_type' => 'SUBJECT_TYPE_INDIVIDUAL',
      'business_license_info' => [
        'license_copy' => '',
        'license_number' => '',
        'merchant_name' => '',
        'legal_person' => '',
        'license_address' => '',
        'period_begin' => '',
        'period_end' => '',
      ],
      'certificate_info' => [
        'cert_copy' => '',
        'cert_type' => 'CERTIFICATE_TYPE_2388',
        'cert_number' => '',
        'merchant_name' => '',
        'company_address' => '',
        'legal_person' => '',
        'period_begin' => '',
        'period_end' => '',
      ],
      'organization_info' => [
        'organization_copy' => '',
        'organization_code' => '',
        'org_period_begin' => '',
        'org_period_end' => '',
      ],
      'certificate_letter_copy' => '',
      'finance_institution_info' => [
        'finance_type' => 'BANK_AGENT',
        'finance_license_pics' => ['MediaId'],
      ],
      'identity_info' => [
        'id_holder_type' => 'LEGAL',
        'id_doc_type' => 'IDENTIFICATION_TYPE_IDCARD',
        'authorize_letter_copy' => '',
        'id_card_info' => [
          'id_card_copy' => '',
          'id_card_national' => '',
          'id_card_name' => '',
          'id_card_number' => '',
          'id_card_address' => '',
          'card_period_begin' => '',
          'card_period_end' => '',
        ],
        'id_doc_info' => [
          'id_doc_copy' => '',
          'id_doc_copy_back' => '',
          'id_doc_name' => '',
          'id_doc_number' => '',
          'id_doc_address' => '',
          'doc_period_begin' => '',
          'doc_period_end' => '',
        ],
        'owner' => true,
      ],
      'ubo_info_list' => [[
        'ubo_id_doc_type' => 'IDENTIFICATION_TYPE_IDCARD',
        'ubo_id_doc_copy' => '',
        'ubo_id_doc_copy_back' => '',
        'ubo_id_doc_name' => '',
        'ubo_id_doc_number' => '',
        'ubo_id_doc_address' => '',
        'ubo_period_begin' => '',
        'ubo_period_end' => '',
      ],],
    ],
    'business_info' => [
      'merchant_shortname' => '',
      'service_phone' => '',
      'sales_info' => [
        'sales_scenes_type' => ['string'],
        'biz_store_info' => [
          'biz_store_name' => '',
          'biz_address_code' => '',
          'biz_store_address' => '',
          'store_entrance_pic' => ['MediaId'],
          'indoor_pic' => ['MediaId'],
          'biz_sub_appid' => '',
        ],
        'mp_info' => [
          'mp_appid' => '',
          'mp_sub_appid' => '',
          'mp_pics' => ['MediaId'],
        ],
        'mini_program_info' => [
          'mini_program_appid' => '',
          'mini_program_sub_appid' => '',
          'mini_program_pics' => ['MediaId'],
        ],
        'app_info' => [
          'app_appid' => '',
          'app_sub_appid' => '',
          'app_pics' => ['MediaId'],
        ],
        'web_info' => [
          'domain' => '',
          'web_authorisation' => '',
          'web_appid' => '',
        ],
        'wework_info' => [
          'sub_corp_id' => '',
          'wework_pics' => ['MediaId'],
        ],
      ],
    ],
    'settlement_info' => [
      'settlement_id' => '',
      'qualification_type' => '',
      'qualifications' => ['string'],
      'activities_id' => '',
      'activities_rate' => '',
      'activities_additions' => ['string'],
    ],
    'bank_account_info' => [
      'bank_account_type' => 'BANK_ACCOUNT_TYPE_CORPORATE',
      'account_name' => '',
      'account_bank' => '工商银行',
      'bank_address_code' => '',
      'bank_name' => '施秉县农村信用合作联社城关信用社',
      'bank_branch_id' => '402713354941',
      'account_number' => 'ciphertext',
    ],
    'addition_info' => [
      'legal_person_commitment' => '',
      'legal_person_video' => '',
      'business_addition_pics' => ['MediaId'],
      'business_addition_msg' => '',
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
| applyment_id | number | 微信支付申请单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter11_1_1.shtml)
