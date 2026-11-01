# 提交及查询商户开户意愿申请单状态 {#mix}

## 提交商户开户意愿申请单 {#post}

服务商可以通过该接口向微信支付提交商户的联系人信息、主体信息以及联系人信息。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| channel_id {data-indent=1} | string | 渠道商户号
| business_code {data-required data-indent=1} | string | 业务申请编号
| contact_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 联系人信息
| contact_type {data-indent=2} | string | 超级管理员类型<br/>`LEGAL` \| `SUPER` 枚举值之一
| name {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 联系人姓名
| contact_id_doc_type {data-indent=2} | string | `IDENTIFICATION_TYPE_IDCARD` \| `IDENTIFICATION_TYPE_OVERSEA_PASSPORT` \| `IDENTIFICATION_TYPE_HONGKONG_PASSPORT` \| `IDENTIFICATION_TYPE_MACAO_PASSPORT` \| `IDENTIFICATION_TYPE_TAIWAN_PASSPORT` \| `IDENTIFICATION_TYPE_FOREIGN_RESIDENT` \| `IDENTIFICATION_TYPE_HONGKONG_MACAO_RESIDENT` \| `IDENTIFICATION_TYPE_TAIWAN_RESIDENT` 枚举值之一
| id_card_number {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 联系人身份证号码
| contact_id_doc_copy {data-indent=2} | string | 联系人证件正面照片
| contact_id_doc_copy_back {data-indent=2} | string | 联系人证件反面照片
| contact_period_begin {data-indent=2} | string | 联系人证件有效期开始时间
| contact_period_end {data-indent=2} | string | 联系人证件有效期结束时间
| mobile {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 联系人手机号
| subject_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 主体信息
| subject_type {data-required data-indent=2} | string | 主体类型<br/>`SUBJECT_TYPE_INDIVIDUAL` \| `SUBJECT_TYPE_ENTERPRISE` \| `SUBJECT_TYPE_INSTITUTIONS` \| `SUBJECT_TYPE_OTHERS` \| `SUBJECT_TYPE_MICRO` \| `SUBJECT_TYPE_GOVERNMENT` \| `SUBJECT_TYPE_INSTITUTIONS_CLONED` 枚举值之一
| is_finance_institution {data-indent=2} | boolean | 是否金融机构
| certificate_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 登记证书
| cert_type {data-required data-indent=3} | string | 登记证书类型<br/>`CERTIFICATE_TYPE_2388` \| `CERTIFICATE_TYPE_2389` \| `CERTIFICATE_TYPE_2390` \| `CERTIFICATE_TYPE_2391` \| `CERTIFICATE_TYPE_2392` \| `CERTIFICATE_TYPE_2393` \| `CERTIFICATE_TYPE_2394` \| `CERTIFICATE_TYPE_2395` \| `CERTIFICATE_TYPE_2396` \| `CERTIFICATE_TYPE_2399` \| `CERTIFICATE_TYPE_2400` \| `CERTIFICATE_TYPE_2520` \| `CERTIFICATE_TYPE_2521` \| `CERTIFICATE_TYPE_2522` 枚举值之一
| cert_number {data-required data-indent=3} | string | 证书编号
| cert_copy {data-required data-indent=3} | string | 登记证书照片
| merchant_name {data-required data-indent=3} | string | 商户名称
| legal_person {data-required data-indent=3} | string | 法人姓名
| company_address {data-required data-indent=3} | string | 注册地址
| cert_valid_date {data-required data-indent=3} | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 营业执照有效日期`JSON`格式字符串
| {colspan=3 .im-table-line}
| period {data-required data-indent=4} | string[] | 岂止日期
| company_prove_copy {data-indent=2} | string | 单位证明函照片
| assist_prove_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 辅助证明材料信息
| micro_biz_type {data-required data-indent=3} | string | 小微经营类型<br/>`MICRO_TYPE_STORE` \| `MICRO_TYPE_MOBILE` \| `MICRO_TYPE_ONLINE` 枚举值之一
| store_name {data-required data-indent=3} | string | 门店名称
| store_address_code {data-indent=3} | string | 门店省市编码
| store_address {data-required data-indent=3} | string | 门店地址
| store_header_copy {data-required data-indent=3} | string | 门店门头照片
| store_indoor_copy {data-required data-indent=3} | string | 店内环境照片
| finance_institution_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 金融机构许可证信息
| finance_type {data-indent=3} | string | 金融机构类型<br/>`BANK_AGENT` \| `PAYMENT_AGENT` \| `INSURANCE` \| `TRADE_AND_SETTLE` \| `SMALL_LOAN` \| `OTHER` 枚举值之一
| finance_license_pics {data-indent=3} | string[] | 金融机构许可证图片
| business_licence_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 营业执照信息
| licence_number {data-required data-indent=3} | string | 营业执照注册号
| licence_copy {data-required data-indent=3} | string | 营业执照照片
| merchant_name {data-required data-indent=3} | string | 商户名称
| legal_person {data-required data-indent=3} | string | 法定代表人姓名
| company_address {data-required data-indent=3} | string | 注册地址
| licence_valid_date {data-required data-indent=3} | string | 营业执照有效日期
| special_operation_list {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 经营许可证
| category_id {data-required data-indent=3} | integer | 行业类目id<br/>`44` \| `33` \| `22` \| `23` \| `41` \| `32` \| `54` \| `49` \| `50` \| `51` \| `55` \| `52` 枚举值之一
| operation_copy_list {data-indent=3} | string[] | 行业经营许可证资质照片
| identification_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 法人身份信息
| id_holder_type {data-indent=2} | string | 超级管理员类型<br/>`LEGAL` \| `SUPER` 枚举值之一
| identification_type {data-required data-indent=2} | string | `IDENTIFICATION_TYPE_IDCARD` \| `IDENTIFICATION_TYPE_OVERSEA_PASSPORT` \| `IDENTIFICATION_TYPE_HONGKONG_PASSPORT` \| `IDENTIFICATION_TYPE_MACAO_PASSPORT` \| `IDENTIFICATION_TYPE_TAIWAN_PASSPORT` \| `IDENTIFICATION_TYPE_FOREIGN_RESIDENT` \| `IDENTIFICATION_TYPE_HONGKONG_MACAO_RESIDENT` \| `IDENTIFICATION_TYPE_TAIWAN_RESIDENT` 枚举值之一
| authorize_letter_copy {data-indent=2} | string | 法定代表人说明函
| identification_name {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 证件姓名
| identification_number {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 证件号码
| identification_valid_date {data-required data-indent=2} | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 证件有效日期`JSON`格式字符串
| {colspan=3 .im-table-line}
| period {data-required data-indent=3} | string[] | 岂止日期
| identification_address {data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 证件居住地址
| identification_front_copy {data-required data-indent=2} | string | 证件正面照片
| identification_back_copy {data-indent=2} | string | 证件反面照片
| owner {data-indent=2} | boolean | 经营者/法人是否为受益人
| ubo_info_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 最终受益人信息列表
| ubo_id_doc_type {data-required data-indent=2} | string | `IDENTIFICATION_TYPE_IDCARD` \| `IDENTIFICATION_TYPE_OVERSEA_PASSPORT` \| `IDENTIFICATION_TYPE_HONGKONG_PASSPORT` \| `IDENTIFICATION_TYPE_MACAO_PASSPORT` \| `IDENTIFICATION_TYPE_TAIWAN_PASSPORT` \| `IDENTIFICATION_TYPE_FOREIGN_RESIDENT` \| `IDENTIFICATION_TYPE_HONGKONG_MACAO_RESIDENT` \| `IDENTIFICATION_TYPE_TAIWAN_RESIDENT` 枚举值之一
| ubo_id_doc_copy {data-required data-indent=2} | string | 证件正面照片
| ubo_id_doc_copy_back {data-required data-indent=2} | string | 证件反面照片
| ubo_id_doc_name {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 证件姓名
| ubo_id_doc_number {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 证件号码
| ubo_id_doc_address {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 证件居住地址
| ubo_period_begin {data-required data-indent=2} | string | 证件有效期开始时间
| ubo_period_end {data-required data-indent=2} | string | 证件有效期结束时间
| addition_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 补充材料
| confirm_mchid_list {data-indent=2} | string[] | 待确认商户号列表
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->apply4subject->applyment->postAsync([
  'json' => [
    'channel_id'          => '20001111',
    'business_code'       => '1900013511_10000',
    'contact_info'        => [
      'contact_type'             => 'LEGAL',
      'name'                     => '',
      'contact_id_doc_type'      => 'IDENTIFICATION_TYPE_IDCARD',
      'id_card_number'           => '',
      'contact_id_doc_copy'      => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'contact_id_doc_copy_back' => 'jTpGmxUX3FBWVQ5NJTZvvDujqhThn4ReFxikqJ5YW6zFQ',
      'contact_period_begin'     => '2019-06-06',
      'contact_period_end'       => '2026-06-06',
      'mobile'                   => '',
    ],
    'subject_info'        => [
      'subject_type'             => 'SUBJECT_TYPE_INDIVIDUAL',
      'is_finance_institution'   => true,
      'certificate_info'         => [
        'cert_type'       => 'CERTIFICATE_TYPE_2388',
        'cert_number'     => '111111111111',
        'cert_copy'       => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
        'merchant_name'   => 'xx公益团体',
        'legal_person'    => '李四',
        'company_address' => '广东省深圳市南山区xx路xx号',
        'cert_valid_date' => \json_encode([
          '1970-01-01',
          'forever',
        ]),
      ],
      'company_prove_copy'       => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'assist_prove_info'        => [
        'micro_biz_type'     => 'MICRO_TYPE_STORE',
        'store_name'         => '大郎烧饼',
        'store_address_code' => '440305',
        'store_address'      => '广东省深圳市南山区xx大厦x层xxxx室',
        'store_header_copy'  => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
        'store_indoor_copy'  => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      ],
      'finance_institution_info' => [
        'finance_type'         => 'BANK_AGENT',
        'finance_license_pics' => ['MediaId'],
      ],
      'business_licence_info'    => [
        'licence_number'     => '914201123033363296',
        'licence_copy'       => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
        'merchant_name'      => '李四网络有限公司',
        'legal_person'       => '李四',
        'company_address'    => '广东省深圳市南山区xx路xx号',
        'licence_valid_date' => '[\"2017-10-28\",\"2037-10-28\"]',
      ],
      'special_operation_list'   => [[
        'category_id'         => 100,
        'operation_copy_list' => ['MediaId'],
      ],],
    ],
    'identification_info' => [
      'id_holder_type'            => 'LEGAL',
      'identification_type'       => 'IDENTIFICATION_TYPE_IDCARD',
      'authorize_letter_copy'     => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'identification_name'       => '',
      'identification_number'     => '',
      'identification_valid_date' => \json_encode([
        '1970-01-01',
        'forever',
      ]),
      'identification_address'    => '',
      'identification_front_copy' => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'identification_back_copy'  => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'owner'                     => true,
    ],
    'ubo_info_list'       => [[
      'ubo_id_doc_type'      => 'IDENTIFICATION_TYPE_IDCARD',
      'ubo_id_doc_copy'      => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'ubo_id_doc_copy_back' => 'jTpGmxUX3FBWVQ5NJTZvvDujqhThn4ReFxikqJ5YW6zFQ',
      'ubo_id_doc_name'      => '',
      'ubo_id_doc_number'    => '',
      'ubo_id_doc_address'   => '',
      'ubo_period_begin'     => '2019-06-06',
      'ubo_period_end'       => '2026-06-06',
    ],],
    'addition_info'       => [
      'confirm_mchid_list' => ['string'],
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
$instance->chain('v3/apply4subject/applyment')->postAsync([
  'json' => [
    'channel_id'          => '20001111',
    'business_code'       => '1900013511_10000',
    'contact_info'        => [
      'contact_type'             => 'LEGAL',
      'name'                     => '',
      'contact_id_doc_type'      => 'IDENTIFICATION_TYPE_IDCARD',
      'id_card_number'           => '',
      'contact_id_doc_copy'      => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'contact_id_doc_copy_back' => 'jTpGmxUX3FBWVQ5NJTZvvDujqhThn4ReFxikqJ5YW6zFQ',
      'contact_period_begin'     => '2019-06-06',
      'contact_period_end'       => '2026-06-06',
      'mobile'                   => '',
    ],
    'subject_info'        => [
      'subject_type'             => 'SUBJECT_TYPE_INDIVIDUAL',
      'is_finance_institution'   => true,
      'certificate_info'         => [
        'cert_type'       => 'CERTIFICATE_TYPE_2388',
        'cert_number'     => '111111111111',
        'cert_copy'       => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
        'merchant_name'   => 'xx公益团体',
        'legal_person'    => '李四',
        'company_address' => '广东省深圳市南山区xx路xx号',
        'cert_valid_date' => \json_encode([
          '1970-01-01',
          'forever',
        ]),
      ],
      'company_prove_copy'       => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'assist_prove_info'        => [
        'micro_biz_type'     => 'MICRO_TYPE_STORE',
        'store_name'         => '大郎烧饼',
        'store_address_code' => '440305',
        'store_address'      => '广东省深圳市南山区xx大厦x层xxxx室',
        'store_header_copy'  => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
        'store_indoor_copy'  => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      ],
      'finance_institution_info' => [
        'finance_type'         => 'BANK_AGENT',
        'finance_license_pics' => ['MediaId'],
      ],
      'business_licence_info'    => [
        'licence_number'     => '914201123033363296',
        'licence_copy'       => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
        'merchant_name'      => '李四网络有限公司',
        'legal_person'       => '李四',
        'company_address'    => '广东省深圳市南山区xx路xx号',
        'licence_valid_date' => '[\"2017-10-28\",\"2037-10-28\"]',
      ],
      'special_operation_list'   => [[
        'category_id'         => 100,
        'operation_copy_list' => ['MediaId'],
      ],],
    ],
    'identification_info' => [
      'id_holder_type'            => 'LEGAL',
      'identification_type'       => 'IDENTIFICATION_TYPE_IDCARD',
      'authorize_letter_copy'     => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'identification_name'       => '',
      'identification_number'     => '',
      'identification_valid_date' => \json_encode([
        '1970-01-01',
        'forever',
      ]),
      'identification_address'    => '',
      'identification_front_copy' => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'identification_back_copy'  => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'owner'                     => true,
    ],
    'ubo_info_list'       => [[
      'ubo_id_doc_type'      => 'IDENTIFICATION_TYPE_IDCARD',
      'ubo_id_doc_copy'      => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'ubo_id_doc_copy_back' => 'jTpGmxUX3FBWVQ5NJTZvvDujqhThn4ReFxikqJ5YW6zFQ',
      'ubo_id_doc_name'      => '',
      'ubo_id_doc_number'    => '',
      'ubo_id_doc_address'   => '',
      'ubo_period_begin'     => '2019-06-06',
      'ubo_period_end'       => '2026-06-06',
    ],],
    'addition_info'       => [
      'confirm_mchid_list' => ['string'],
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
$instance['v3/apply4subject/applyment']->postAsync([
  'json' => [
    'channel_id'          => '20001111',
    'business_code'       => '1900013511_10000',
    'contact_info'        => [
      'contact_type'             => 'LEGAL',
      'name'                     => '',
      'contact_id_doc_type'      => 'IDENTIFICATION_TYPE_IDCARD',
      'id_card_number'           => '',
      'contact_id_doc_copy'      => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'contact_id_doc_copy_back' => 'jTpGmxUX3FBWVQ5NJTZvvDujqhThn4ReFxikqJ5YW6zFQ',
      'contact_period_begin'     => '2019-06-06',
      'contact_period_end'       => '2026-06-06',
      'mobile'                   => '',
    ],
    'subject_info'        => [
      'subject_type'             => 'SUBJECT_TYPE_INDIVIDUAL',
      'is_finance_institution'   => true,
      'certificate_info'         => [
        'cert_type'       => 'CERTIFICATE_TYPE_2388',
        'cert_number'     => '111111111111',
        'cert_copy'       => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
        'merchant_name'   => 'xx公益团体',
        'legal_person'    => '李四',
        'company_address' => '广东省深圳市南山区xx路xx号',
        'cert_valid_date' => \json_encode([
          '1970-01-01',
          'forever',
        ]),
      ],
      'company_prove_copy'       => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'assist_prove_info'        => [
        'micro_biz_type'     => 'MICRO_TYPE_STORE',
        'store_name'         => '大郎烧饼',
        'store_address_code' => '440305',
        'store_address'      => '广东省深圳市南山区xx大厦x层xxxx室',
        'store_header_copy'  => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
        'store_indoor_copy'  => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      ],
      'finance_institution_info' => [
        'finance_type'         => 'BANK_AGENT',
        'finance_license_pics' => ['MediaId'],
      ],
      'business_licence_info'    => [
        'licence_number'     => '914201123033363296',
        'licence_copy'       => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
        'merchant_name'      => '李四网络有限公司',
        'legal_person'       => '李四',
        'company_address'    => '广东省深圳市南山区xx路xx号',
        'licence_valid_date' => '[\"2017-10-28\",\"2037-10-28\"]',
      ],
      'special_operation_list'   => [[
        'category_id'         => 100,
        'operation_copy_list' => ['MediaId'],
      ],],
    ],
    'identification_info' => [
      'id_holder_type'            => 'LEGAL',
      'identification_type'       => 'IDENTIFICATION_TYPE_IDCARD',
      'authorize_letter_copy'     => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'identification_name'       => '',
      'identification_number'     => '',
      'identification_valid_date' => \json_encode([
        '1970-01-01',
        'forever',
      ]),
      'identification_address'    => '',
      'identification_front_copy' => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'identification_back_copy'  => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'owner'                     => true,
    ],
    'ubo_info_list'       => [[
      'ubo_id_doc_type'      => 'IDENTIFICATION_TYPE_IDCARD',
      'ubo_id_doc_copy'      => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'ubo_id_doc_copy_back' => 'jTpGmxUX3FBWVQ5NJTZvvDujqhThn4ReFxikqJ5YW6zFQ',
      'ubo_id_doc_name'      => '',
      'ubo_id_doc_number'    => '',
      'ubo_id_doc_address'   => '',
      'ubo_period_begin'     => '2019-06-06',
      'ubo_period_end'       => '2026-06-06',
    ],],
    'addition_info'       => [
      'confirm_mchid_list' => ['string'],
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
$response = $instance->v3->apply4subject->applyment->post([
  'json' => [
    'channel_id'          => '20001111',
    'business_code'       => '1900013511_10000',
    'contact_info'        => [
      'contact_type'             => 'LEGAL',
      'name'                     => '',
      'contact_id_doc_type'      => 'IDENTIFICATION_TYPE_IDCARD',
      'id_card_number'           => '',
      'contact_id_doc_copy'      => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'contact_id_doc_copy_back' => 'jTpGmxUX3FBWVQ5NJTZvvDujqhThn4ReFxikqJ5YW6zFQ',
      'contact_period_begin'     => '2019-06-06',
      'contact_period_end'       => '2026-06-06',
      'mobile'                   => '',
    ],
    'subject_info'        => [
      'subject_type'             => 'SUBJECT_TYPE_INDIVIDUAL',
      'is_finance_institution'   => true,
      'certificate_info'         => [
        'cert_type'       => 'CERTIFICATE_TYPE_2388',
        'cert_number'     => '111111111111',
        'cert_copy'       => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
        'merchant_name'   => 'xx公益团体',
        'legal_person'    => '李四',
        'company_address' => '广东省深圳市南山区xx路xx号',
        'cert_valid_date' => \json_encode([
          '1970-01-01',
          'forever',
        ]),
      ],
      'company_prove_copy'       => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'assist_prove_info'        => [
        'micro_biz_type'     => 'MICRO_TYPE_STORE',
        'store_name'         => '大郎烧饼',
        'store_address_code' => '440305',
        'store_address'      => '广东省深圳市南山区xx大厦x层xxxx室',
        'store_header_copy'  => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
        'store_indoor_copy'  => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      ],
      'finance_institution_info' => [
        'finance_type'         => 'BANK_AGENT',
        'finance_license_pics' => ['MediaId'],
      ],
      'business_licence_info'    => [
        'licence_number'     => '914201123033363296',
        'licence_copy'       => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
        'merchant_name'      => '李四网络有限公司',
        'legal_person'       => '李四',
        'company_address'    => '广东省深圳市南山区xx路xx号',
        'licence_valid_date' => '[\"2017-10-28\",\"2037-10-28\"]',
      ],
      'special_operation_list'   => [[
        'category_id'         => 100,
        'operation_copy_list' => ['MediaId'],
      ],],
    ],
    'identification_info' => [
      'id_holder_type'            => 'LEGAL',
      'identification_type'       => 'IDENTIFICATION_TYPE_IDCARD',
      'authorize_letter_copy'     => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'identification_name'       => '',
      'identification_number'     => '',
      'identification_valid_date' => \json_encode([
        '1970-01-01',
        'forever',
      ]),
      'identification_address'    => '',
      'identification_front_copy' => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'identification_back_copy'  => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'owner'                     => true,
    ],
    'ubo_info_list'       => [[
      'ubo_id_doc_type'      => 'IDENTIFICATION_TYPE_IDCARD',
      'ubo_id_doc_copy'      => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'ubo_id_doc_copy_back' => 'jTpGmxUX3FBWVQ5NJTZvvDujqhThn4ReFxikqJ5YW6zFQ',
      'ubo_id_doc_name'      => '',
      'ubo_id_doc_number'    => '',
      'ubo_id_doc_address'   => '',
      'ubo_period_begin'     => '2019-06-06',
      'ubo_period_end'       => '2026-06-06',
    ],],
    'addition_info'       => [
      'confirm_mchid_list' => ['string'],
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/apply4subject/applyment')->post([
  'json' => [
    'channel_id'          => '20001111',
    'business_code'       => '1900013511_10000',
    'contact_info'        => [
      'contact_type'             => 'LEGAL',
      'name'                     => '',
      'contact_id_doc_type'      => 'IDENTIFICATION_TYPE_IDCARD',
      'id_card_number'           => '',
      'contact_id_doc_copy'      => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'contact_id_doc_copy_back' => 'jTpGmxUX3FBWVQ5NJTZvvDujqhThn4ReFxikqJ5YW6zFQ',
      'contact_period_begin'     => '2019-06-06',
      'contact_period_end'       => '2026-06-06',
      'mobile'                   => '',
    ],
    'subject_info'        => [
      'subject_type'             => 'SUBJECT_TYPE_INDIVIDUAL',
      'is_finance_institution'   => true,
      'certificate_info'         => [
        'cert_type'       => 'CERTIFICATE_TYPE_2388',
        'cert_number'     => '111111111111',
        'cert_copy'       => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
        'merchant_name'   => 'xx公益团体',
        'legal_person'    => '李四',
        'company_address' => '广东省深圳市南山区xx路xx号',
        'cert_valid_date' => \json_encode([
          '1970-01-01',
          'forever',
        ]),
      ],
      'company_prove_copy'       => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'assist_prove_info'        => [
        'micro_biz_type'     => 'MICRO_TYPE_STORE',
        'store_name'         => '大郎烧饼',
        'store_address_code' => '440305',
        'store_address'      => '广东省深圳市南山区xx大厦x层xxxx室',
        'store_header_copy'  => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
        'store_indoor_copy'  => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      ],
      'finance_institution_info' => [
        'finance_type'         => 'BANK_AGENT',
        'finance_license_pics' => ['MediaId'],
      ],
      'business_licence_info'    => [
        'licence_number'     => '914201123033363296',
        'licence_copy'       => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
        'merchant_name'      => '李四网络有限公司',
        'legal_person'       => '李四',
        'company_address'    => '广东省深圳市南山区xx路xx号',
        'licence_valid_date' => '[\"2017-10-28\",\"2037-10-28\"]',
      ],
      'special_operation_list'   => [[
        'category_id'         => 100,
        'operation_copy_list' => ['MediaId'],
      ],],
    ],
    'identification_info' => [
      'id_holder_type'            => 'LEGAL',
      'identification_type'       => 'IDENTIFICATION_TYPE_IDCARD',
      'authorize_letter_copy'     => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'identification_name'       => '',
      'identification_number'     => '',
      'identification_valid_date' => \json_encode([
        '1970-01-01',
        'forever',
      ]),
      'identification_address'    => '',
      'identification_front_copy' => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'identification_back_copy'  => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'owner'                     => true,
    ],
    'ubo_info_list'       => [[
      'ubo_id_doc_type'      => 'IDENTIFICATION_TYPE_IDCARD',
      'ubo_id_doc_copy'      => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'ubo_id_doc_copy_back' => 'jTpGmxUX3FBWVQ5NJTZvvDujqhThn4ReFxikqJ5YW6zFQ',
      'ubo_id_doc_name'      => '',
      'ubo_id_doc_number'    => '',
      'ubo_id_doc_address'   => '',
      'ubo_period_begin'     => '2019-06-06',
      'ubo_period_end'       => '2026-06-06',
    ],],
    'addition_info'       => [
      'confirm_mchid_list' => ['string'],
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/apply4subject/applyment']->post([
  'json' => [
    'channel_id'          => '20001111',
    'business_code'       => '1900013511_10000',
    'contact_info'        => [
      'contact_type'             => 'LEGAL',
      'name'                     => '',
      'contact_id_doc_type'      => 'IDENTIFICATION_TYPE_IDCARD',
      'id_card_number'           => '',
      'contact_id_doc_copy'      => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'contact_id_doc_copy_back' => 'jTpGmxUX3FBWVQ5NJTZvvDujqhThn4ReFxikqJ5YW6zFQ',
      'contact_period_begin'     => '2019-06-06',
      'contact_period_end'       => '2026-06-06',
      'mobile'                   => '',
    ],
    'subject_info'        => [
      'subject_type'             => 'SUBJECT_TYPE_INDIVIDUAL',
      'is_finance_institution'   => true,
      'certificate_info'         => [
        'cert_type'       => 'CERTIFICATE_TYPE_2388',
        'cert_number'     => '111111111111',
        'cert_copy'       => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
        'merchant_name'   => 'xx公益团体',
        'legal_person'    => '李四',
        'company_address' => '广东省深圳市南山区xx路xx号',
        'cert_valid_date' => \json_encode([
          '1970-01-01',
          'forever',
        ]),
      ],
      'company_prove_copy'       => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'assist_prove_info'        => [
        'micro_biz_type'     => 'MICRO_TYPE_STORE',
        'store_name'         => '大郎烧饼',
        'store_address_code' => '440305',
        'store_address'      => '广东省深圳市南山区xx大厦x层xxxx室',
        'store_header_copy'  => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
        'store_indoor_copy'  => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      ],
      'finance_institution_info' => [
        'finance_type'         => 'BANK_AGENT',
        'finance_license_pics' => ['MediaId'],
      ],
      'business_licence_info'    => [
        'licence_number'     => '914201123033363296',
        'licence_copy'       => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
        'merchant_name'      => '李四网络有限公司',
        'legal_person'       => '李四',
        'company_address'    => '广东省深圳市南山区xx路xx号',
        'licence_valid_date' => '[\"2017-10-28\",\"2037-10-28\"]',
      ],
      'special_operation_list'   => [[
        'category_id'         => 100,
        'operation_copy_list' => ['MediaId'],
      ],],
    ],
    'identification_info' => [
      'id_holder_type'            => 'LEGAL',
      'identification_type'       => 'IDENTIFICATION_TYPE_IDCARD',
      'authorize_letter_copy'     => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'identification_name'       => '',
      'identification_number'     => '',
      'identification_valid_date' => \json_encode([
        '1970-01-01',
        'forever',
      ]),
      'identification_address'    => '',
      'identification_front_copy' => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'identification_back_copy'  => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'owner'                     => true,
    ],
    'ubo_info_list'       => [[
      'ubo_id_doc_type'      => 'IDENTIFICATION_TYPE_IDCARD',
      'ubo_id_doc_copy'      => 'jTpGmxUXqRTvDujqhThn4ReFxikqJ5YW6zFQ',
      'ubo_id_doc_copy_back' => 'jTpGmxUX3FBWVQ5NJTZvvDujqhThn4ReFxikqJ5YW6zFQ',
      'ubo_id_doc_name'      => '',
      'ubo_id_doc_number'    => '',
      'ubo_id_doc_address'   => '',
      'ubo_period_begin'     => '2019-06-06',
      'ubo_period_end'       => '2026-06-06',
    ],],
    'addition_info'       => [
      'confirm_mchid_list' => ['string'],
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

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_1_1.shtml)

## 查询商户开户意愿申请单审核结果 {#get}

当服务商提交申请单后，需要定期调用此接口查询申请单的审核状态。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| applyment_id {data-indent=1} | string | 申请单编号
| business_code {data-indent=1} | string | 业务申请编号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->apply4subject->applyment->getAsync([
  'query' => [
    'applyment_id'  => '20000011111',
    'business_code' => '1900013511_10000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/apply4subject/applyment')->getAsync([
  'query' => [
    'applyment_id'  => '20000011111',
    'business_code' => '1900013511_10000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/apply4subject/applyment']->getAsync([
  'query' => [
    'applyment_id'  => '20000011111',
    'business_code' => '1900013511_10000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->apply4subject->applyment->get([
  'query' => [
    'applyment_id'  => '20000011111',
    'business_code' => '1900013511_10000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/apply4subject/applyment')->get([
  'query' => [
    'applyment_id'  => '20000011111',
    'business_code' => '1900013511_10000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/apply4subject/applyment']->get([
  'query' => [
    'applyment_id'  => '20000011111',
    'business_code' => '1900013511_10000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| applyment_state {data-required} | string | 申请单状态<br/>`APPLYMENT_STATE_WAITTING_FOR_AUDIT` \| `APPLYMENT_STATE_WAITTING_FOR_CONFIRM_CONTACT` \| `APPLYMENT_STATE_WAITTING_FOR_CONFIRM_LEGALPERSON` \| `APPLYMENT_STATE_PASSED` \| `APPLYMENT_STATE_FREEZED` \| `APPLYMENT_STATE_EDITTING` \| `APPLYMENT_STATE_AUDITING` \| `APPLYMENT_STATE_REJECTED` \| `APPLYMENT_STATE_TO_BE_CONFIRMED` \| `APPLYMENT_STATE_TO_BE_SIGNED` \| `APPLYMENT_STATE_SIGNING` \| `APPLYMENT_STATE_FINISHED` \| `APPLYMENT_STATE_CANCELED` 枚举值之一
| qrcode_data | string | 小程序码图片
| reject_param | string | 驳回参数
| reject_reason | string | 驳回原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012697715)
