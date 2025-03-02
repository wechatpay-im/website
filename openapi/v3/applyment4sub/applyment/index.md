---
title: 提交申请单
description: 普通服务商（银行、支付机构、电商平台不可用）使用该接口提交商家资料，帮助商家入驻成为微信支付的特约商户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| business_code {data-required data-indent=1} | string | 业务申请编号
| contact_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 超级管理员信息
| contact_type {data-required data-indent=2} | string | 超级管理员类型<br/>`LEGAL` \| `SUPER` 枚举值之一
| contact_name {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 超级管理员姓名
| contact_id_doc_type {data-indent=2} | string | `IDENTIFICATION_TYPE_IDCARD` \| `IDENTIFICATION_TYPE_OVERSEA_PASSPORT` \| `IDENTIFICATION_TYPE_HONGKONG_PASSPORT` \| `IDENTIFICATION_TYPE_MACAO_PASSPORT` \| `IDENTIFICATION_TYPE_TAIWAN_PASSPORT` \| `IDENTIFICATION_TYPE_FOREIGN_RESIDENT` \| `IDENTIFICATION_TYPE_HONGKONG_MACAO_RESIDENT` \| `IDENTIFICATION_TYPE_TAIWAN_RESIDENT` 枚举值之一
| contact_id_number {data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 超级管理员身份证件号码
| contact_id_doc_copy {data-indent=2} | string | 超级管理员证件正面照片
| contact_id_doc_copy_back {data-indent=2} | string | 超级管理员证件反面照片
| contact_period_begin {data-indent=2} | string | 超级管理员证件有效期开始时间
| contact_period_end {data-indent=2} | string | 超级管理员证件有效期结束时间
| business_authorization_letter {data-indent=2} | string | 业务办理授权函
| openid {data-indent=2} | string | 超级管理员微信openid
| mobile_phone {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 联系手机
| contact_email {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 联系邮箱
| subject_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 主体资料
| subject_type {data-required data-indent=2} | string | 主体类型<br/>`SUBJECT_TYPE_INDIVIDUAL` \| `SUBJECT_TYPE_ENTERPRISE` \| `SUBJECT_TYPE_INSTITUTIONS` \| `SUBJECT_TYPE_OTHERS` \| `SUBJECT_TYPE_MICRO` \| `SUBJECT_TYPE_GOVERNMENT` \| `SUBJECT_TYPE_INSTITUTIONS_CLONED` 枚举值之一
| finance_institution {data-indent=2} | boolean | 是否是金融机构
| micro_biz_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 小微辅助证明材料
| micro_biz_type {data-required data-indent=3} | string | 小微经营类型<br/>`MICRO_TYPE_STORE` \| `MICRO_TYPE_MOBILE` \| `MICRO_TYPE_ONLINE` 枚举值之一
| micro_store_info {data-indent=3} | object {data-tooltip="对应PHP的array"} | 门店场所
| micro_name {data-required data-indent=4} | string | 门店名称
| micro_address_code {data-required data-indent=4} | string | 门店省市编码
| micro_address {data-required data-indent=4} | string | 门店地址
| store_entrance_pic {data-required data-indent=4} | string | 门店门头照片
| micro_indoor_copy {data-required data-indent=4} | string | 店内环境照片
| store_longitude {data-indent=4} | string | 门店经度
| store_latitude {data-indent=4} | string | 门店纬度
| micro_mobile_info {data-indent=3} | object {data-tooltip="对应PHP的array"} | 流动经营/便民服务
| micro_mobile_name {data-required data-indent=4} | string | 经营/服务名称
| micro_mobile_city {data-required data-indent=4} | string | 经营/服务所在地省市
| micro_mobile_address {data-required data-indent=4} | string | 经营/服务所在地（不含省市）
| micro_mobile_pics {data-required data-indent=4} | string[] | 经营/服务现场照片
| micro_online_info {data-indent=3} | object {data-tooltip="对应PHP的array"} | 线上商品/服务交易
| micro_online_store {data-required data-indent=4} | string | 线上店铺名称
| micro_ec_name {data-required data-indent=4} | string | 电商平台名称
| micro_qrcode {data-indent=4} | string | 店铺二维码
| micro_link {data-indent=4} | string | 店铺链接
| business_license_info {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 营业执照
| license_copy {data-required data-indent=3} | string | 营业执照照片
| license_number {data-required data-indent=3} | string | 注册号/统一社会信用代码
| merchant_name {data-required data-indent=3} | string | 商户名称
| legal_person {data-required data-indent=3} | string | 个体户经营者/法人姓名
| license_address {data-indent=3} | string | 注册地址
| period_begin {data-indent=3} | string | 有效期限开始日期
| period_end {data-indent=3} | string | 有效期限结束日期
| certificate_info {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 登记证书
| cert_copy {data-required data-indent=3} | string | 登记证书照片
| cert_type {data-required data-indent=3} | string | 登记证书类型<br/>`CERTIFICATE_TYPE_2388` \| `CERTIFICATE_TYPE_2389` \| `CERTIFICATE_TYPE_2390` \| `CERTIFICATE_TYPE_2391` \| `CERTIFICATE_TYPE_2392` \| `CERTIFICATE_TYPE_2393` \| `CERTIFICATE_TYPE_2394` \| `CERTIFICATE_TYPE_2395` \| `CERTIFICATE_TYPE_2396` \| `CERTIFICATE_TYPE_2399` \| `CERTIFICATE_TYPE_2400` \| `CERTIFICATE_TYPE_2520` \| `CERTIFICATE_TYPE_2521` \| `CERTIFICATE_TYPE_2522` 枚举值之一
| cert_number {data-required data-indent=3} | string | 证书号
| merchant_name {data-required data-indent=3} | string | 商户名称
| company_address {data-required data-indent=3} | string | 注册地址
| legal_person {data-required data-indent=3} | string | 法人姓名
| period_begin {data-required data-indent=3} | string | 有效期限开始日期
| period_end {data-required data-indent=3} | string | 有效期限结束日期
| organization_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 组织机构代码证信息
| organization_copy {data-required data-indent=3} | string | 组织机构代码证照片
| organization_code {data-required data-indent=3} | string | 组织机构代码
| org_period_begin {data-required data-indent=3} | string | 组织机构代码证有效期开始日期
| org_period_end {data-required data-indent=3} | string | 组织机构代码证有效期结束日期
| certificate_letter_copy {data-indent=2} | string | 单位证明函照片
| finance_institution_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 金融机构许可证信息
| finance_type {data-indent=3} | string | 金融机构类型<br/>`BANK_AGENT` \| `PAYMENT_AGENT` \| `INSURANCE` \| `TRADE_AND_SETTLE` \| `OTHER` 枚举值之一
| finance_license_pics {data-indent=3} | string[] | 金融机构许可证图片
| identity_info {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 经营者/法人身份证件
| id_holder_type {data-indent=3} | string | 超级管理员类型<br/>`LEGAL` \| `SUPER` 枚举值之一
| id_doc_type {data-required data-indent=3} | string | `IDENTIFICATION_TYPE_IDCARD` \| `IDENTIFICATION_TYPE_OVERSEA_PASSPORT` \| `IDENTIFICATION_TYPE_HONGKONG_PASSPORT` \| `IDENTIFICATION_TYPE_MACAO_PASSPORT` \| `IDENTIFICATION_TYPE_TAIWAN_PASSPORT` \| `IDENTIFICATION_TYPE_FOREIGN_RESIDENT` \| `IDENTIFICATION_TYPE_HONGKONG_MACAO_RESIDENT` \| `IDENTIFICATION_TYPE_TAIWAN_RESIDENT` 枚举值之一
| authorize_letter_copy {data-indent=3} | string | 法定代表人说明函
| id_card_info {data-indent=3} | object {data-tooltip="对应PHP的array"} | 经营者/法人身份证信息
| id_card_copy {data-required data-indent=4} | string | 身份证人像面照片
| id_card_national {data-required data-indent=4} | string | 身份证国徽面照片
| id_card_name {data-required data-indent=4} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 身份证姓名
| id_card_number {data-required data-indent=4} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 身份证号码
| id_card_address {data-indent=4} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 身份证居住地址
| card_period_begin {data-required data-indent=4} | string | 身份证有效期开始时间
| card_period_end {data-required data-indent=4} | string | 身份证有效期结束时间
| id_doc_info {data-indent=3} | object {data-tooltip="对应PHP的array"} | 经营者/法人其他类型证件信息
| id_doc_copy {data-required data-indent=4} | string | 证件正面照片
| id_doc_copy_back {data-indent=4} | string | 证件反面照片
| id_doc_name {data-required data-indent=4} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 证件姓名
| id_doc_number {data-required data-indent=4} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 证件号码
| id_doc_address {data-indent=4} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 证件居住地址
| doc_period_begin {data-required data-indent=4} | string | 证件有效期开始时间
| doc_period_end {data-required data-indent=4} | string | 证件有效期结束时间
| owner {data-indent=3} | boolean | 经营者/法人是否为受益人
| ubo_info_list {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 最终受益人信息列表
| ubo_id_doc_type {data-required data-indent=3} | string | `IDENTIFICATION_TYPE_IDCARD` \| `IDENTIFICATION_TYPE_OVERSEA_PASSPORT` \| `IDENTIFICATION_TYPE_HONGKONG_PASSPORT` \| `IDENTIFICATION_TYPE_MACAO_PASSPORT` \| `IDENTIFICATION_TYPE_TAIWAN_PASSPORT` \| `IDENTIFICATION_TYPE_FOREIGN_RESIDENT` \| `IDENTIFICATION_TYPE_HONGKONG_MACAO_RESIDENT` \| `IDENTIFICATION_TYPE_TAIWAN_RESIDENT` 枚举值之一
| ubo_id_doc_copy {data-required data-indent=3} | string | 身份证人像面照片
| ubo_id_doc_copy_back {data-required data-indent=3} | string | 身份证国徽面照片
| ubo_id_doc_name {data-required data-indent=3} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 受益人姓名
| ubo_id_doc_number {data-required data-indent=3} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 证件号码
| ubo_id_doc_address {data-required data-indent=3} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 证件居住地址
| ubo_period_begin {data-required data-indent=3} | string | 证件有效期开始时间
| ubo_period_end {data-required data-indent=3} | string | 证件有效期结束时间
| business_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 经营资料
| merchant_shortname {data-required data-indent=2} | string | 商户简称
| service_phone {data-required data-indent=2} | string | 客服电话
| sales_info {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 经营场景
| sales_scenes_type {data-required data-indent=3} | string[] | 经营场景类型<br/>`SALES_SCENES_STORE` \| `SALES_SCENES_MP` \| `SALES_SCENES_MINI_PROGRAM` \| `SALES_SCENES_WEB` \| `SALES_SCENES_APP` \| `SALES_SCENES_WEWORK` 枚举值之一
| biz_store_info {data-indent=3} | object {data-tooltip="对应PHP的array"} | 线下场所场景
| biz_store_name {data-required data-indent=4} | string | 线下场所名称
| biz_address_code {data-required data-indent=4} | string | 线下场所省市编码
| biz_store_address {data-required data-indent=4} | string | 线下场所地址
| store_entrance_pic {data-required data-indent=4} | string[] | 线下场所门头照片
| indoor_pic {data-required data-indent=4} | string[] | 线下场所内部照片
| biz_sub_appid {data-indent=4} | string | 线下场所对应的商家AppID
| mp_info {data-indent=3} | object {data-tooltip="对应PHP的array"} | 公众号场景
| mp_appid {data-indent=4} | string | 服务商公众号AppID
| mp_sub_appid {data-indent=4} | string | 商家公众号AppID
| mp_pics {data-indent=4} | string[] | 公众号页面截图
| mini_program_info {data-indent=3} | object {data-tooltip="对应PHP的array"} | 小程序场景
| mini_program_appid {data-indent=4} | string | 服务商小程序APPID
| mini_program_sub_appid {data-indent=4} | string | 商家小程序APPID
| mini_program_pics {data-indent=4} | string[] | 图片MediaID
| app_info {data-indent=3} | object {data-tooltip="对应PHP的array"} | App场景
| app_appid {data-indent=4} | string | 服务商应用APPID
| app_sub_appid {data-indent=4} | string | 商家应用APPID
| app_pics {data-indent=4} | string[] | 图片MediaID
| web_info {data-indent=3} | object {data-tooltip="对应PHP的array"} | 互联网网站场景
| domain {data-indent=4} | string | 互联网网站域名
| web_authorisation {data-indent=4} | string | 网站授权函
| web_appid {data-indent=4} | string | 互联网网站对应的商家APPID
| wework_info {data-indent=3} | object {data-tooltip="对应PHP的array"} | 企业微信场景
| sub_corp_id {data-indent=4} | string | 商家企业微信CorpID
| wework_pics {data-indent=4} | string[] | 图片MediaID
| settlement_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 结算规则
| settlement_id {data-indent=2} | string | 入驻结算规则ID
| qualification_type {data-indent=2} | string | 所属行业
| qualifications {data-indent=2} | string[] | 特殊资质图片
| activities_id {data-indent=2} | string | 优惠费率活动ID
| activities_rate {data-indent=2} | string | 优惠费率活动值
| debit_activities_rate {data-indent=2} | string | 非信用卡活动费率值
| credit_activities_rate {data-indent=2} | string | 信用卡活动费率值
| activities_additions {data-indent=2} | string[] | 优惠费率活动补充材料
| bank_account_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 结算银行账户
| bank_account_type {data-required data-indent=2} | string | 账户类型<br/>`BANK_ACCOUNT_TYPE_CORPORATE` \| `BANK_ACCOUNT_TYPE_PERSONAL` 枚举值之一
| account_name {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 开户名称
| account_bank {data-required data-indent=2} | string | 开户银行
| bank_address_code {data-required data-indent=2} | string | 开户银行省市编码
| bank_name {data-indent=2} | string | 开户银行全称（含支行）
| bank_branch_id {data-indent=2} | string | 开户银行联行号
| account_number {data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 银行账号
| addition_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 补充材料
| legal_person_commitment {data-indent=2} | string | 法人开户承诺函
| legal_person_video {data-indent=2} | string | 法人开户意愿视频
| business_addition_pics {data-indent=2} | string[] | 补充材料
| business_addition_msg {data-indent=2} | string | 补充说明
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->applyment4sub->applyment->_empty_->postAsync([
  'json' => [
    'business_code'     => '',
    'contact_info'      => [
      'contact_type'                  => 'LEGAL',
      'contact_name'                  => '',
      'contact_id_doc_type'           => 'IDENTIFICATION_TYPE_IDCARD',
      'contact_id_number'             => '',
      'contact_id_doc_copy'           => '',
      'contact_id_doc_copy_back'      => '',
      'contact_period_begin'          => '',
      'contact_period_end'            => '',
      'business_authorization_letter' => '',
      'openid'                        => '',
      'mobile_phone'                  => '',
      'contact_email'                 => '',
    ],
    'subject_info'      => [
      'subject_type'             => 'SUBJECT_TYPE_INDIVIDUAL',
      'finance_institution'      => true,
      'micro_biz_info'           => [
        'micro_biz_type'    => 'MICRO_TYPE_STORE',
        'micro_store_info'  => [
          'micro_name'         => '',
          'micro_address_code' => '',
          'micro_address'      => '',
          'store_entrance_pic' => '',
          'micro_indoor_copy'  => '',
          'store_longitude'    => '',
          'store_latitude'     => '',
        ],
        'micro_mobile_info' => [
          'micro_mobile_name'    => '',
          'micro_mobile_city'    => '',
          'micro_mobile_address' => '',
          'micro_mobile_pics'    => ['MediaId'],
        ],
        'micro_online_info' => [
          'micro_online_store' => '',
          'micro_ec_name'      => '',
          'micro_qrcode'       => '',
          'micro_link'         => '',
        ],
      ],
      'business_license_info'    => [
        'license_copy'    => '',
        'license_number'  => '',
        'merchant_name'   => '',
        'legal_person'    => '',
        'license_address' => '',
        'period_begin'    => '',
        'period_end'      => '',
      ],
      'certificate_info'         => [
        'cert_copy'       => '',
        'cert_type'       => 'CERTIFICATE_TYPE_2388',
        'cert_number'     => '',
        'merchant_name'   => '',
        'company_address' => '',
        'legal_person'    => '',
        'period_begin'    => '',
        'period_end'      => '',
      ],
      'organization_info'        => [
        'organization_copy' => '',
        'organization_code' => '',
        'org_period_begin'  => '',
        'org_period_end'    => '',
      ],
      'certificate_letter_copy'  => '',
      'finance_institution_info' => [
        'finance_type'         => 'BANK_AGENT',
        'finance_license_pics' => ['MediaId'],
      ],
      'identity_info'            => [
        'id_holder_type'        => 'LEGAL',
        'id_doc_type'           => 'IDENTIFICATION_TYPE_IDCARD',
        'authorize_letter_copy' => '',
        'id_card_info'          => [
          'id_card_copy'      => '',
          'id_card_national'  => '',
          'id_card_name'      => '',
          'id_card_number'    => '',
          'id_card_address'   => '',
          'card_period_begin' => '',
          'card_period_end'   => '',
        ],
        'id_doc_info'           => [
          'id_doc_copy'      => '',
          'id_doc_copy_back' => '',
          'id_doc_name'      => '',
          'id_doc_number'    => '',
          'id_doc_address'   => '',
          'doc_period_begin' => '',
          'doc_period_end'   => '',
        ],
        'owner'                 => true,
      ],
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
    ],
    'business_info'     => [
      'merchant_shortname' => '',
      'service_phone'      => '',
      'sales_info'         => [
        'sales_scenes_type' => ['SALES_SCENES_STORE'],
        'biz_store_info'    => [
          'biz_store_name'     => '',
          'biz_address_code'   => '',
          'biz_store_address'  => '',
          'store_entrance_pic' => ['MediaId'],
          'indoor_pic'         => ['MediaId'],
          'biz_sub_appid'      => '',
        ],
        'mp_info'           => [
          'mp_appid'     => '',
          'mp_sub_appid' => '',
          'mp_pics'      => ['MediaId'],
        ],
        'mini_program_info' => [
          'mini_program_appid'     => '',
          'mini_program_sub_appid' => '',
          'mini_program_pics'      => ['MediaId'],
        ],
        'app_info'          => [
          'app_appid'     => '',
          'app_sub_appid' => '',
          'app_pics'      => ['MediaId'],
        ],
        'web_info'          => [
          'domain'            => '',
          'web_authorisation' => '',
          'web_appid'         => '',
        ],
        'wework_info'       => [
          'sub_corp_id' => '',
          'wework_pics' => ['MediaId'],
        ],
      ],
    ],
    'settlement_info'   => [
      'settlement_id'          => '',
      'qualification_type'     => '',
      'qualifications'         => ['MediaId'],
      'activities_id'          => '',
      'activities_rate'        => '',
      'debit_activities_rate'  => '',
      'credit_activities_rate' => '',
      'activities_additions'   => ['MediaId'],
    ],
    'bank_account_info' => [
      'bank_account_type' => 'BANK_ACCOUNT_TYPE_CORPORATE',
      'account_name'      => '',
      'account_bank'      => '工商银行',
      'bank_address_code' => '',
      'bank_name'         => '施秉县农村信用合作联社城关信用社',
      'bank_branch_id'    => '402713354941',
      'account_number'    => 'ciphertext',
    ],
    'addition_info'     => [
      'legal_person_commitment' => '',
      'legal_person_video'      => '',
      'business_addition_pics'  => ['MediaId'],
      'business_addition_msg'   => '',
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
    'business_code'     => '',
    'contact_info'      => [
      'contact_type'                  => 'LEGAL',
      'contact_name'                  => '',
      'contact_id_doc_type'           => 'IDENTIFICATION_TYPE_IDCARD',
      'contact_id_number'             => '',
      'contact_id_doc_copy'           => '',
      'contact_id_doc_copy_back'      => '',
      'contact_period_begin'          => '',
      'contact_period_end'            => '',
      'business_authorization_letter' => '',
      'openid'                        => '',
      'mobile_phone'                  => '',
      'contact_email'                 => '',
    ],
    'subject_info'      => [
      'subject_type'             => 'SUBJECT_TYPE_INDIVIDUAL',
      'finance_institution'      => true,
      'micro_biz_info'           => [
        'micro_biz_type'    => 'MICRO_TYPE_STORE',
        'micro_store_info'  => [
          'micro_name'         => '',
          'micro_address_code' => '',
          'micro_address'      => '',
          'store_entrance_pic' => '',
          'micro_indoor_copy'  => '',
          'store_longitude'    => '',
          'store_latitude'     => '',
        ],
        'micro_mobile_info' => [
          'micro_mobile_name'    => '',
          'micro_mobile_city'    => '',
          'micro_mobile_address' => '',
          'micro_mobile_pics'    => ['MediaId'],
        ],
        'micro_online_info' => [
          'micro_online_store' => '',
          'micro_ec_name'      => '',
          'micro_qrcode'       => '',
          'micro_link'         => '',
        ],
      ],
      'business_license_info'    => [
        'license_copy'    => '',
        'license_number'  => '',
        'merchant_name'   => '',
        'legal_person'    => '',
        'license_address' => '',
        'period_begin'    => '',
        'period_end'      => '',
      ],
      'certificate_info'         => [
        'cert_copy'       => '',
        'cert_type'       => 'CERTIFICATE_TYPE_2388',
        'cert_number'     => '',
        'merchant_name'   => '',
        'company_address' => '',
        'legal_person'    => '',
        'period_begin'    => '',
        'period_end'      => '',
      ],
      'organization_info'        => [
        'organization_copy' => '',
        'organization_code' => '',
        'org_period_begin'  => '',
        'org_period_end'    => '',
      ],
      'certificate_letter_copy'  => '',
      'finance_institution_info' => [
        'finance_type'         => 'BANK_AGENT',
        'finance_license_pics' => ['MediaId'],
      ],
      'identity_info'            => [
        'id_holder_type'        => 'LEGAL',
        'id_doc_type'           => 'IDENTIFICATION_TYPE_IDCARD',
        'authorize_letter_copy' => '',
        'id_card_info'          => [
          'id_card_copy'      => '',
          'id_card_national'  => '',
          'id_card_name'      => '',
          'id_card_number'    => '',
          'id_card_address'   => '',
          'card_period_begin' => '',
          'card_period_end'   => '',
        ],
        'id_doc_info'           => [
          'id_doc_copy'      => '',
          'id_doc_copy_back' => '',
          'id_doc_name'      => '',
          'id_doc_number'    => '',
          'id_doc_address'   => '',
          'doc_period_begin' => '',
          'doc_period_end'   => '',
        ],
        'owner'                 => true,
      ],
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
    ],
    'business_info'     => [
      'merchant_shortname' => '',
      'service_phone'      => '',
      'sales_info'         => [
        'sales_scenes_type' => ['SALES_SCENES_STORE'],
        'biz_store_info'    => [
          'biz_store_name'     => '',
          'biz_address_code'   => '',
          'biz_store_address'  => '',
          'store_entrance_pic' => ['MediaId'],
          'indoor_pic'         => ['MediaId'],
          'biz_sub_appid'      => '',
        ],
        'mp_info'           => [
          'mp_appid'     => '',
          'mp_sub_appid' => '',
          'mp_pics'      => ['MediaId'],
        ],
        'mini_program_info' => [
          'mini_program_appid'     => '',
          'mini_program_sub_appid' => '',
          'mini_program_pics'      => ['MediaId'],
        ],
        'app_info'          => [
          'app_appid'     => '',
          'app_sub_appid' => '',
          'app_pics'      => ['MediaId'],
        ],
        'web_info'          => [
          'domain'            => '',
          'web_authorisation' => '',
          'web_appid'         => '',
        ],
        'wework_info'       => [
          'sub_corp_id' => '',
          'wework_pics' => ['MediaId'],
        ],
      ],
    ],
    'settlement_info'   => [
      'settlement_id'          => '',
      'qualification_type'     => '',
      'qualifications'         => ['MediaId'],
      'activities_id'          => '',
      'activities_rate'        => '',
      'debit_activities_rate'  => '',
      'credit_activities_rate' => '',
      'activities_additions'   => ['MediaId'],
    ],
    'bank_account_info' => [
      'bank_account_type' => 'BANK_ACCOUNT_TYPE_CORPORATE',
      'account_name'      => '',
      'account_bank'      => '工商银行',
      'bank_address_code' => '',
      'bank_name'         => '施秉县农村信用合作联社城关信用社',
      'bank_branch_id'    => '402713354941',
      'account_number'    => 'ciphertext',
    ],
    'addition_info'     => [
      'legal_person_commitment' => '',
      'legal_person_video'      => '',
      'business_addition_pics'  => ['MediaId'],
      'business_addition_msg'   => '',
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
    'business_code'     => '',
    'contact_info'      => [
      'contact_type'                  => 'LEGAL',
      'contact_name'                  => '',
      'contact_id_doc_type'           => 'IDENTIFICATION_TYPE_IDCARD',
      'contact_id_number'             => '',
      'contact_id_doc_copy'           => '',
      'contact_id_doc_copy_back'      => '',
      'contact_period_begin'          => '',
      'contact_period_end'            => '',
      'business_authorization_letter' => '',
      'openid'                        => '',
      'mobile_phone'                  => '',
      'contact_email'                 => '',
    ],
    'subject_info'      => [
      'subject_type'             => 'SUBJECT_TYPE_INDIVIDUAL',
      'finance_institution'      => true,
      'micro_biz_info'           => [
        'micro_biz_type'    => 'MICRO_TYPE_STORE',
        'micro_store_info'  => [
          'micro_name'         => '',
          'micro_address_code' => '',
          'micro_address'      => '',
          'store_entrance_pic' => '',
          'micro_indoor_copy'  => '',
          'store_longitude'    => '',
          'store_latitude'     => '',
        ],
        'micro_mobile_info' => [
          'micro_mobile_name'    => '',
          'micro_mobile_city'    => '',
          'micro_mobile_address' => '',
          'micro_mobile_pics'    => ['MediaId'],
        ],
        'micro_online_info' => [
          'micro_online_store' => '',
          'micro_ec_name'      => '',
          'micro_qrcode'       => '',
          'micro_link'         => '',
        ],
      ],
      'business_license_info'    => [
        'license_copy'    => '',
        'license_number'  => '',
        'merchant_name'   => '',
        'legal_person'    => '',
        'license_address' => '',
        'period_begin'    => '',
        'period_end'      => '',
      ],
      'certificate_info'         => [
        'cert_copy'       => '',
        'cert_type'       => 'CERTIFICATE_TYPE_2388',
        'cert_number'     => '',
        'merchant_name'   => '',
        'company_address' => '',
        'legal_person'    => '',
        'period_begin'    => '',
        'period_end'      => '',
      ],
      'organization_info'        => [
        'organization_copy' => '',
        'organization_code' => '',
        'org_period_begin'  => '',
        'org_period_end'    => '',
      ],
      'certificate_letter_copy'  => '',
      'finance_institution_info' => [
        'finance_type'         => 'BANK_AGENT',
        'finance_license_pics' => ['MediaId'],
      ],
      'identity_info'            => [
        'id_holder_type'        => 'LEGAL',
        'id_doc_type'           => 'IDENTIFICATION_TYPE_IDCARD',
        'authorize_letter_copy' => '',
        'id_card_info'          => [
          'id_card_copy'      => '',
          'id_card_national'  => '',
          'id_card_name'      => '',
          'id_card_number'    => '',
          'id_card_address'   => '',
          'card_period_begin' => '',
          'card_period_end'   => '',
        ],
        'id_doc_info'           => [
          'id_doc_copy'      => '',
          'id_doc_copy_back' => '',
          'id_doc_name'      => '',
          'id_doc_number'    => '',
          'id_doc_address'   => '',
          'doc_period_begin' => '',
          'doc_period_end'   => '',
        ],
        'owner'                 => true,
      ],
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
    ],
    'business_info'     => [
      'merchant_shortname' => '',
      'service_phone'      => '',
      'sales_info'         => [
        'sales_scenes_type' => ['SALES_SCENES_STORE'],
        'biz_store_info'    => [
          'biz_store_name'     => '',
          'biz_address_code'   => '',
          'biz_store_address'  => '',
          'store_entrance_pic' => ['MediaId'],
          'indoor_pic'         => ['MediaId'],
          'biz_sub_appid'      => '',
        ],
        'mp_info'           => [
          'mp_appid'     => '',
          'mp_sub_appid' => '',
          'mp_pics'      => ['MediaId'],
        ],
        'mini_program_info' => [
          'mini_program_appid'     => '',
          'mini_program_sub_appid' => '',
          'mini_program_pics'      => ['MediaId'],
        ],
        'app_info'          => [
          'app_appid'     => '',
          'app_sub_appid' => '',
          'app_pics'      => ['MediaId'],
        ],
        'web_info'          => [
          'domain'            => '',
          'web_authorisation' => '',
          'web_appid'         => '',
        ],
        'wework_info'       => [
          'sub_corp_id' => '',
          'wework_pics' => ['MediaId'],
        ],
      ],
    ],
    'settlement_info'   => [
      'settlement_id'          => '',
      'qualification_type'     => '',
      'qualifications'         => ['MediaId'],
      'activities_id'          => '',
      'activities_rate'        => '',
      'debit_activities_rate'  => '',
      'credit_activities_rate' => '',
      'activities_additions'   => ['MediaId'],
    ],
    'bank_account_info' => [
      'bank_account_type' => 'BANK_ACCOUNT_TYPE_CORPORATE',
      'account_name'      => '',
      'account_bank'      => '工商银行',
      'bank_address_code' => '',
      'bank_name'         => '施秉县农村信用合作联社城关信用社',
      'bank_branch_id'    => '402713354941',
      'account_number'    => 'ciphertext',
    ],
    'addition_info'     => [
      'legal_person_commitment' => '',
      'legal_person_video'      => '',
      'business_addition_pics'  => ['MediaId'],
      'business_addition_msg'   => '',
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
    'business_code'     => '',
    'contact_info'      => [
      'contact_type'                  => 'LEGAL',
      'contact_name'                  => '',
      'contact_id_doc_type'           => 'IDENTIFICATION_TYPE_IDCARD',
      'contact_id_number'             => '',
      'contact_id_doc_copy'           => '',
      'contact_id_doc_copy_back'      => '',
      'contact_period_begin'          => '',
      'contact_period_end'            => '',
      'business_authorization_letter' => '',
      'openid'                        => '',
      'mobile_phone'                  => '',
      'contact_email'                 => '',
    ],
    'subject_info'      => [
      'subject_type'             => 'SUBJECT_TYPE_INDIVIDUAL',
      'finance_institution'      => true,
      'micro_biz_info'           => [
        'micro_biz_type'    => 'MICRO_TYPE_STORE',
        'micro_store_info'  => [
          'micro_name'         => '',
          'micro_address_code' => '',
          'micro_address'      => '',
          'store_entrance_pic' => '',
          'micro_indoor_copy'  => '',
          'store_longitude'    => '',
          'store_latitude'     => '',
        ],
        'micro_mobile_info' => [
          'micro_mobile_name'    => '',
          'micro_mobile_city'    => '',
          'micro_mobile_address' => '',
          'micro_mobile_pics'    => ['MediaId'],
        ],
        'micro_online_info' => [
          'micro_online_store' => '',
          'micro_ec_name'      => '',
          'micro_qrcode'       => '',
          'micro_link'         => '',
        ],
      ],
      'business_license_info'    => [
        'license_copy'    => '',
        'license_number'  => '',
        'merchant_name'   => '',
        'legal_person'    => '',
        'license_address' => '',
        'period_begin'    => '',
        'period_end'      => '',
      ],
      'certificate_info'         => [
        'cert_copy'       => '',
        'cert_type'       => 'CERTIFICATE_TYPE_2388',
        'cert_number'     => '',
        'merchant_name'   => '',
        'company_address' => '',
        'legal_person'    => '',
        'period_begin'    => '',
        'period_end'      => '',
      ],
      'organization_info'        => [
        'organization_copy' => '',
        'organization_code' => '',
        'org_period_begin'  => '',
        'org_period_end'    => '',
      ],
      'certificate_letter_copy'  => '',
      'finance_institution_info' => [
        'finance_type'         => 'BANK_AGENT',
        'finance_license_pics' => ['MediaId'],
      ],
      'identity_info'            => [
        'id_holder_type'        => 'LEGAL',
        'id_doc_type'           => 'IDENTIFICATION_TYPE_IDCARD',
        'authorize_letter_copy' => '',
        'id_card_info'          => [
          'id_card_copy'      => '',
          'id_card_national'  => '',
          'id_card_name'      => '',
          'id_card_number'    => '',
          'id_card_address'   => '',
          'card_period_begin' => '',
          'card_period_end'   => '',
        ],
        'id_doc_info'           => [
          'id_doc_copy'      => '',
          'id_doc_copy_back' => '',
          'id_doc_name'      => '',
          'id_doc_number'    => '',
          'id_doc_address'   => '',
          'doc_period_begin' => '',
          'doc_period_end'   => '',
        ],
        'owner'                 => true,
      ],
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
    ],
    'business_info'     => [
      'merchant_shortname' => '',
      'service_phone'      => '',
      'sales_info'         => [
        'sales_scenes_type' => ['SALES_SCENES_STORE'],
        'biz_store_info'    => [
          'biz_store_name'     => '',
          'biz_address_code'   => '',
          'biz_store_address'  => '',
          'store_entrance_pic' => ['MediaId'],
          'indoor_pic'         => ['MediaId'],
          'biz_sub_appid'      => '',
        ],
        'mp_info'           => [
          'mp_appid'     => '',
          'mp_sub_appid' => '',
          'mp_pics'      => ['MediaId'],
        ],
        'mini_program_info' => [
          'mini_program_appid'     => '',
          'mini_program_sub_appid' => '',
          'mini_program_pics'      => ['MediaId'],
        ],
        'app_info'          => [
          'app_appid'     => '',
          'app_sub_appid' => '',
          'app_pics'      => ['MediaId'],
        ],
        'web_info'          => [
          'domain'            => '',
          'web_authorisation' => '',
          'web_appid'         => '',
        ],
        'wework_info'       => [
          'sub_corp_id' => '',
          'wework_pics' => ['MediaId'],
        ],
      ],
    ],
    'settlement_info'   => [
      'settlement_id'          => '',
      'qualification_type'     => '',
      'qualifications'         => ['MediaId'],
      'activities_id'          => '',
      'activities_rate'        => '',
      'debit_activities_rate'  => '',
      'credit_activities_rate' => '',
      'activities_additions'   => ['MediaId'],
    ],
    'bank_account_info' => [
      'bank_account_type' => 'BANK_ACCOUNT_TYPE_CORPORATE',
      'account_name'      => '',
      'account_bank'      => '工商银行',
      'bank_address_code' => '',
      'bank_name'         => '施秉县农村信用合作联社城关信用社',
      'bank_branch_id'    => '402713354941',
      'account_number'    => 'ciphertext',
    ],
    'addition_info'     => [
      'legal_person_commitment' => '',
      'legal_person_video'      => '',
      'business_addition_pics'  => ['MediaId'],
      'business_addition_msg'   => '',
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
    'business_code'     => '',
    'contact_info'      => [
      'contact_type'                  => 'LEGAL',
      'contact_name'                  => '',
      'contact_id_doc_type'           => 'IDENTIFICATION_TYPE_IDCARD',
      'contact_id_number'             => '',
      'contact_id_doc_copy'           => '',
      'contact_id_doc_copy_back'      => '',
      'contact_period_begin'          => '',
      'contact_period_end'            => '',
      'business_authorization_letter' => '',
      'openid'                        => '',
      'mobile_phone'                  => '',
      'contact_email'                 => '',
    ],
    'subject_info'      => [
      'subject_type'             => 'SUBJECT_TYPE_INDIVIDUAL',
      'finance_institution'      => true,
      'micro_biz_info'           => [
        'micro_biz_type'    => 'MICRO_TYPE_STORE',
        'micro_store_info'  => [
          'micro_name'         => '',
          'micro_address_code' => '',
          'micro_address'      => '',
          'store_entrance_pic' => '',
          'micro_indoor_copy'  => '',
          'store_longitude'    => '',
          'store_latitude'     => '',
        ],
        'micro_mobile_info' => [
          'micro_mobile_name'    => '',
          'micro_mobile_city'    => '',
          'micro_mobile_address' => '',
          'micro_mobile_pics'    => ['MediaId'],
        ],
        'micro_online_info' => [
          'micro_online_store' => '',
          'micro_ec_name'      => '',
          'micro_qrcode'       => '',
          'micro_link'         => '',
        ],
      ],
      'business_license_info'    => [
        'license_copy'    => '',
        'license_number'  => '',
        'merchant_name'   => '',
        'legal_person'    => '',
        'license_address' => '',
        'period_begin'    => '',
        'period_end'      => '',
      ],
      'certificate_info'         => [
        'cert_copy'       => '',
        'cert_type'       => 'CERTIFICATE_TYPE_2388',
        'cert_number'     => '',
        'merchant_name'   => '',
        'company_address' => '',
        'legal_person'    => '',
        'period_begin'    => '',
        'period_end'      => '',
      ],
      'organization_info'        => [
        'organization_copy' => '',
        'organization_code' => '',
        'org_period_begin'  => '',
        'org_period_end'    => '',
      ],
      'certificate_letter_copy'  => '',
      'finance_institution_info' => [
        'finance_type'         => 'BANK_AGENT',
        'finance_license_pics' => ['MediaId'],
      ],
      'identity_info'            => [
        'id_holder_type'        => 'LEGAL',
        'id_doc_type'           => 'IDENTIFICATION_TYPE_IDCARD',
        'authorize_letter_copy' => '',
        'id_card_info'          => [
          'id_card_copy'      => '',
          'id_card_national'  => '',
          'id_card_name'      => '',
          'id_card_number'    => '',
          'id_card_address'   => '',
          'card_period_begin' => '',
          'card_period_end'   => '',
        ],
        'id_doc_info'           => [
          'id_doc_copy'      => '',
          'id_doc_copy_back' => '',
          'id_doc_name'      => '',
          'id_doc_number'    => '',
          'id_doc_address'   => '',
          'doc_period_begin' => '',
          'doc_period_end'   => '',
        ],
        'owner'                 => true,
      ],
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
    ],
    'business_info'     => [
      'merchant_shortname' => '',
      'service_phone'      => '',
      'sales_info'         => [
        'sales_scenes_type' => ['SALES_SCENES_STORE'],
        'biz_store_info'    => [
          'biz_store_name'     => '',
          'biz_address_code'   => '',
          'biz_store_address'  => '',
          'store_entrance_pic' => ['MediaId'],
          'indoor_pic'         => ['MediaId'],
          'biz_sub_appid'      => '',
        ],
        'mp_info'           => [
          'mp_appid'     => '',
          'mp_sub_appid' => '',
          'mp_pics'      => ['MediaId'],
        ],
        'mini_program_info' => [
          'mini_program_appid'     => '',
          'mini_program_sub_appid' => '',
          'mini_program_pics'      => ['MediaId'],
        ],
        'app_info'          => [
          'app_appid'     => '',
          'app_sub_appid' => '',
          'app_pics'      => ['MediaId'],
        ],
        'web_info'          => [
          'domain'            => '',
          'web_authorisation' => '',
          'web_appid'         => '',
        ],
        'wework_info'       => [
          'sub_corp_id' => '',
          'wework_pics' => ['MediaId'],
        ],
      ],
    ],
    'settlement_info'   => [
      'settlement_id'          => '',
      'qualification_type'     => '',
      'qualifications'         => ['MediaId'],
      'activities_id'          => '',
      'activities_rate'        => '',
      'debit_activities_rate'  => '',
      'credit_activities_rate' => '',
      'activities_additions'   => ['MediaId'],
    ],
    'bank_account_info' => [
      'bank_account_type' => 'BANK_ACCOUNT_TYPE_CORPORATE',
      'account_name'      => '',
      'account_bank'      => '工商银行',
      'bank_address_code' => '',
      'bank_name'         => '施秉县农村信用合作联社城关信用社',
      'bank_branch_id'    => '402713354941',
      'account_number'    => 'ciphertext',
    ],
    'addition_info'     => [
      'legal_person_commitment' => '',
      'legal_person_video'      => '',
      'business_addition_pics'  => ['MediaId'],
      'business_addition_msg'   => '',
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
    'business_code'     => '',
    'contact_info'      => [
      'contact_type'                  => 'LEGAL',
      'contact_name'                  => '',
      'contact_id_doc_type'           => 'IDENTIFICATION_TYPE_IDCARD',
      'contact_id_number'             => '',
      'contact_id_doc_copy'           => '',
      'contact_id_doc_copy_back'      => '',
      'contact_period_begin'          => '',
      'contact_period_end'            => '',
      'business_authorization_letter' => '',
      'openid'                        => '',
      'mobile_phone'                  => '',
      'contact_email'                 => '',
    ],
    'subject_info'      => [
      'subject_type'             => 'SUBJECT_TYPE_INDIVIDUAL',
      'finance_institution'      => true,
      'micro_biz_info'           => [
        'micro_biz_type'    => 'MICRO_TYPE_STORE',
        'micro_store_info'  => [
          'micro_name'         => '',
          'micro_address_code' => '',
          'micro_address'      => '',
          'store_entrance_pic' => '',
          'micro_indoor_copy'  => '',
          'store_longitude'    => '',
          'store_latitude'     => '',
        ],
        'micro_mobile_info' => [
          'micro_mobile_name'    => '',
          'micro_mobile_city'    => '',
          'micro_mobile_address' => '',
          'micro_mobile_pics'    => ['MediaId'],
        ],
        'micro_online_info' => [
          'micro_online_store' => '',
          'micro_ec_name'      => '',
          'micro_qrcode'       => '',
          'micro_link'         => '',
        ],
      ],
      'business_license_info'    => [
        'license_copy'    => '',
        'license_number'  => '',
        'merchant_name'   => '',
        'legal_person'    => '',
        'license_address' => '',
        'period_begin'    => '',
        'period_end'      => '',
      ],
      'certificate_info'         => [
        'cert_copy'       => '',
        'cert_type'       => 'CERTIFICATE_TYPE_2388',
        'cert_number'     => '',
        'merchant_name'   => '',
        'company_address' => '',
        'legal_person'    => '',
        'period_begin'    => '',
        'period_end'      => '',
      ],
      'organization_info'        => [
        'organization_copy' => '',
        'organization_code' => '',
        'org_period_begin'  => '',
        'org_period_end'    => '',
      ],
      'certificate_letter_copy'  => '',
      'finance_institution_info' => [
        'finance_type'         => 'BANK_AGENT',
        'finance_license_pics' => ['MediaId'],
      ],
      'identity_info'            => [
        'id_holder_type'        => 'LEGAL',
        'id_doc_type'           => 'IDENTIFICATION_TYPE_IDCARD',
        'authorize_letter_copy' => '',
        'id_card_info'          => [
          'id_card_copy'      => '',
          'id_card_national'  => '',
          'id_card_name'      => '',
          'id_card_number'    => '',
          'id_card_address'   => '',
          'card_period_begin' => '',
          'card_period_end'   => '',
        ],
        'id_doc_info'           => [
          'id_doc_copy'      => '',
          'id_doc_copy_back' => '',
          'id_doc_name'      => '',
          'id_doc_number'    => '',
          'id_doc_address'   => '',
          'doc_period_begin' => '',
          'doc_period_end'   => '',
        ],
        'owner'                 => true,
      ],
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
    ],
    'business_info'     => [
      'merchant_shortname' => '',
      'service_phone'      => '',
      'sales_info'         => [
        'sales_scenes_type' => ['SALES_SCENES_STORE'],
        'biz_store_info'    => [
          'biz_store_name'     => '',
          'biz_address_code'   => '',
          'biz_store_address'  => '',
          'store_entrance_pic' => ['MediaId'],
          'indoor_pic'         => ['MediaId'],
          'biz_sub_appid'      => '',
        ],
        'mp_info'           => [
          'mp_appid'     => '',
          'mp_sub_appid' => '',
          'mp_pics'      => ['MediaId'],
        ],
        'mini_program_info' => [
          'mini_program_appid'     => '',
          'mini_program_sub_appid' => '',
          'mini_program_pics'      => ['MediaId'],
        ],
        'app_info'          => [
          'app_appid'     => '',
          'app_sub_appid' => '',
          'app_pics'      => ['MediaId'],
        ],
        'web_info'          => [
          'domain'            => '',
          'web_authorisation' => '',
          'web_appid'         => '',
        ],
        'wework_info'       => [
          'sub_corp_id' => '',
          'wework_pics' => ['MediaId'],
        ],
      ],
    ],
    'settlement_info'   => [
      'settlement_id'          => '',
      'qualification_type'     => '',
      'qualifications'         => ['MediaId'],
      'activities_id'          => '',
      'activities_rate'        => '',
      'debit_activities_rate'  => '',
      'credit_activities_rate' => '',
      'activities_additions'   => ['MediaId'],
    ],
    'bank_account_info' => [
      'bank_account_type' => 'BANK_ACCOUNT_TYPE_CORPORATE',
      'account_name'      => '',
      'account_bank'      => '工商银行',
      'bank_address_code' => '',
      'bank_name'         => '施秉县农村信用合作联社城关信用社',
      'bank_branch_id'    => '402713354941',
      'account_number'    => 'ciphertext',
    ],
    'addition_info'     => [
      'legal_person_commitment' => '',
      'legal_person_video'      => '',
      'business_addition_pics'  => ['MediaId'],
      'business_addition_msg'   => '',
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
| applyment_id {data-required} | number | 微信支付申请单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter11_1_1.shtml)
