# 提交商户开户意愿申请单 {#post}

服务商可以通过该接口向微信支付提交商户的联系人信息、主体信息以及联系人信息。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| business_code {data-indent=1} | string | 业务申请编号
| contact_info {data-indent=1} | object | 联系人信息
| contact_type {data-indent=2} | string | 超级管理员类型
| name {data-indent=2} | string | 联系人姓名
| contact_id_doc_type {data-indent=2} | string | 
| id_card_number {data-indent=2} | string | 联系人身份证号码
| contact_id_doc_copy {data-indent=2} | string | 联系人证件正面照片
| contact_id_doc_copy_back {data-indent=2} | string | 联系人证件反面照片
| contact_period_begin {data-indent=2} | string | 联系人证件有效期开始时间
| contact_period_end {data-indent=2} | string | 联系人证件有效期结束时间
| business_authorization_letter {data-indent=2} | string | 业务办理授权函
| mobile {data-indent=2} | string | 联系人手机号
| subject_info {data-indent=1} | object | 主体信息
| subject_type {data-indent=2} | string | 主体类型
| is_finance_institution {data-indent=2} | boolean | 是否金融机构
| business_license_info {data-indent=2} | object | 
| licence_number {data-indent=3} | string | 营业执照注册号
| licence_copy {data-indent=3} | string | 营业执照照片
| merchant_name {data-indent=3} | string | 商户名称
| legal_person {data-indent=3} | string | 法人姓名
| company_address {data-indent=3} | string | 注册地址
| licence_valid_date {data-indent=3} | string | 营业执照有效日期
| certificate_info {data-indent=2} | object | 
| cert_type {data-indent=3} | string | 登记证书类型
| cert_number {data-indent=3} | string | 证书编号
| cert_copy {data-indent=3} | string | 登记证书照片
| merchant_name {data-indent=3} | string | 商户名称
| legal_person {data-indent=3} | string | 法人姓名
| company_address {data-indent=3} | string | 注册地址
| cert_valid_date {data-indent=3} | string | 营业执照有效日期
| company_prove_copy {data-indent=2} | string | 单位证明函照片
| assist_prove_info {data-indent=2} | object | 
| micro_biz_type {data-indent=3} | string | 小微经营类型
| store_name {data-indent=3} | string | 门店名称
| store_address_code {data-indent=3} | string | 门店省市编码
| store_address {data-indent=3} | string | 门店地址
| store_header_copy {data-indent=3} | string | 门店门头照片
| store_indoor_copy {data-indent=3} | string | 店内环境照片
| special_operation_info {data-indent=2} | object[] | 
| category_id {data-indent=3} | integer | 行业ID
| store_indoor_copy {data-indent=3} | string[] | 店内环境照片
| finance_institution_info {data-indent=2} | object | 
| finance_type {data-indent=3} | string | 金融机构类型
| finance_license_pics {data-indent=3} | string[] | 
| identification_info {data-indent=1} | object | 法人身份信息
| id_holder_type {data-indent=2} | string | 超级管理员类型
| identification_type {data-indent=2} | string | 
| authorize_letter_copy {data-indent=2} | string | 法定代表人说明函
| identification_name {data-indent=2} | string | 证件姓名
| identification_number {data-indent=2} | string | 证件号码
| identification_valid_date {data-indent=2} | string | 证件有效日期
| identification_address {data-indent=2} | string | 证件居住地址
| identification_front_copy {data-indent=2} | string | 证件正面照片
| identification_back_copy {data-indent=2} | string | 证件反面照片
| owner {data-indent=2} | boolean | 经营者/法人是否为受益人
| ubo_info_list {data-indent=1} | object[] | 
| ubo_id_doc_type {data-indent=2} | string | 
| ubo_id_doc_copy {data-indent=2} | string | 证件正面照片
| ubo_id_doc_copy_back {data-indent=2} | string | 证件反面照片
| ubo_id_doc_name {data-indent=2} | string | 证件姓名
| ubo_id_doc_number {data-indent=2} | string | 证件号码
| ubo_id_doc_address {data-indent=2} | string | 证件居住地址
| ubo_period_begin {data-indent=2} | string | 证件有效期开始时间
| ubo_period_end {data-indent=2} | string | 证件有效期结束时间
| addition_info {data-indent=1} | object | 
| confirm_mchid_list {data-indent=2} | string[] | 
| query | object | 声明请求的查询参数
| channel_id {data-indent=1} | string | 渠道商户号
| headers | object | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 微信支付平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->apply4subject->applyment->postAsync([
  'json' => [
    'business_code' => '',
    'contact_info' => [
      'contact_type' => 'LEGAL',
      'name' => '',
      'contact_id_doc_type' => 'IDENTIFICATION_TYPE_IDCARD',
      'id_card_number' => '',
      'contact_id_doc_copy' => '',
      'contact_id_doc_copy_back' => '',
      'contact_period_begin' => '',
      'contact_period_end' => '',
      'business_authorization_letter' => '',
      'mobile' => '',
    ],
    'subject_info' => [
      'subject_type' => 'SUBJECT_TYPE_INDIVIDUAL',
      'is_finance_institution' => true,
      'business_license_info' => [
        'licence_number' => '',
        'licence_copy' => '',
        'merchant_name' => '',
        'legal_person' => '',
        'company_address' => '',
        'licence_valid_date' => '["1970-01-01","forever"]',
      ],
      'certificate_info' => [
        'cert_type' => 'CERTIFICATE_TYPE_2388',
        'cert_number' => '',
        'cert_copy' => '',
        'merchant_name' => '',
        'legal_person' => '',
        'company_address' => '',
        'cert_valid_date' => '["1970-01-01","forever"]',
      ],
      'company_prove_copy' => '',
      'assist_prove_info' => [
        'micro_biz_type' => 'MICRO_TYPE_STORE',
        'store_name' => '',
        'store_address_code' => '',
        'store_address' => '',
        'store_header_copy' => '',
        'store_indoor_copy' => '',
      ],
      'special_operation_info' => [[
        'category_id' => 0,
        'store_indoor_copy' => ['MediaId'],
      ],],
      'finance_institution_info' => [
        'finance_type' => 'BANK_AGENT',
        'finance_license_pics' => ['MediaId'],
      ],
    ],
    'identification_info' => [
      'id_holder_type' => 'LEGAL',
      'identification_type' => 'IDENTIFICATION_TYPE_IDCARD',
      'authorize_letter_copy' => '',
      'identification_name' => '',
      'identification_number' => '',
      'identification_valid_date' => '["1970-01-01","forever"]',
      'identification_address' => '',
      'identification_front_copy' => '',
      'identification_back_copy' => '',
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
    'addition_info' => [
      'confirm_mchid_list' => ['string'],
    ],
  ],
  'query' => [
    'channel_id' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
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
    'business_code' => '',
    'contact_info' => [
      'contact_type' => 'LEGAL',
      'name' => '',
      'contact_id_doc_type' => 'IDENTIFICATION_TYPE_IDCARD',
      'id_card_number' => '',
      'contact_id_doc_copy' => '',
      'contact_id_doc_copy_back' => '',
      'contact_period_begin' => '',
      'contact_period_end' => '',
      'business_authorization_letter' => '',
      'mobile' => '',
    ],
    'subject_info' => [
      'subject_type' => 'SUBJECT_TYPE_INDIVIDUAL',
      'is_finance_institution' => true,
      'business_license_info' => [
        'licence_number' => '',
        'licence_copy' => '',
        'merchant_name' => '',
        'legal_person' => '',
        'company_address' => '',
        'licence_valid_date' => '["1970-01-01","forever"]',
      ],
      'certificate_info' => [
        'cert_type' => 'CERTIFICATE_TYPE_2388',
        'cert_number' => '',
        'cert_copy' => '',
        'merchant_name' => '',
        'legal_person' => '',
        'company_address' => '',
        'cert_valid_date' => '["1970-01-01","forever"]',
      ],
      'company_prove_copy' => '',
      'assist_prove_info' => [
        'micro_biz_type' => 'MICRO_TYPE_STORE',
        'store_name' => '',
        'store_address_code' => '',
        'store_address' => '',
        'store_header_copy' => '',
        'store_indoor_copy' => '',
      ],
      'special_operation_info' => [[
        'category_id' => 0,
        'store_indoor_copy' => ['MediaId'],
      ],],
      'finance_institution_info' => [
        'finance_type' => 'BANK_AGENT',
        'finance_license_pics' => ['MediaId'],
      ],
    ],
    'identification_info' => [
      'id_holder_type' => 'LEGAL',
      'identification_type' => 'IDENTIFICATION_TYPE_IDCARD',
      'authorize_letter_copy' => '',
      'identification_name' => '',
      'identification_number' => '',
      'identification_valid_date' => '["1970-01-01","forever"]',
      'identification_address' => '',
      'identification_front_copy' => '',
      'identification_back_copy' => '',
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
    'addition_info' => [
      'confirm_mchid_list' => ['string'],
    ],
  ],
  'query' => [
    'channel_id' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
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
    'business_code' => '',
    'contact_info' => [
      'contact_type' => 'LEGAL',
      'name' => '',
      'contact_id_doc_type' => 'IDENTIFICATION_TYPE_IDCARD',
      'id_card_number' => '',
      'contact_id_doc_copy' => '',
      'contact_id_doc_copy_back' => '',
      'contact_period_begin' => '',
      'contact_period_end' => '',
      'business_authorization_letter' => '',
      'mobile' => '',
    ],
    'subject_info' => [
      'subject_type' => 'SUBJECT_TYPE_INDIVIDUAL',
      'is_finance_institution' => true,
      'business_license_info' => [
        'licence_number' => '',
        'licence_copy' => '',
        'merchant_name' => '',
        'legal_person' => '',
        'company_address' => '',
        'licence_valid_date' => '["1970-01-01","forever"]',
      ],
      'certificate_info' => [
        'cert_type' => 'CERTIFICATE_TYPE_2388',
        'cert_number' => '',
        'cert_copy' => '',
        'merchant_name' => '',
        'legal_person' => '',
        'company_address' => '',
        'cert_valid_date' => '["1970-01-01","forever"]',
      ],
      'company_prove_copy' => '',
      'assist_prove_info' => [
        'micro_biz_type' => 'MICRO_TYPE_STORE',
        'store_name' => '',
        'store_address_code' => '',
        'store_address' => '',
        'store_header_copy' => '',
        'store_indoor_copy' => '',
      ],
      'special_operation_info' => [[
        'category_id' => 0,
        'store_indoor_copy' => ['MediaId'],
      ],],
      'finance_institution_info' => [
        'finance_type' => 'BANK_AGENT',
        'finance_license_pics' => ['MediaId'],
      ],
    ],
    'identification_info' => [
      'id_holder_type' => 'LEGAL',
      'identification_type' => 'IDENTIFICATION_TYPE_IDCARD',
      'authorize_letter_copy' => '',
      'identification_name' => '',
      'identification_number' => '',
      'identification_valid_date' => '["1970-01-01","forever"]',
      'identification_address' => '',
      'identification_front_copy' => '',
      'identification_back_copy' => '',
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
    'addition_info' => [
      'confirm_mchid_list' => ['string'],
    ],
  ],
  'query' => [
    'channel_id' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
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
    'business_code' => '',
    'contact_info' => [
      'contact_type' => 'LEGAL',
      'name' => '',
      'contact_id_doc_type' => 'IDENTIFICATION_TYPE_IDCARD',
      'id_card_number' => '',
      'contact_id_doc_copy' => '',
      'contact_id_doc_copy_back' => '',
      'contact_period_begin' => '',
      'contact_period_end' => '',
      'business_authorization_letter' => '',
      'mobile' => '',
    ],
    'subject_info' => [
      'subject_type' => 'SUBJECT_TYPE_INDIVIDUAL',
      'is_finance_institution' => true,
      'business_license_info' => [
        'licence_number' => '',
        'licence_copy' => '',
        'merchant_name' => '',
        'legal_person' => '',
        'company_address' => '',
        'licence_valid_date' => '["1970-01-01","forever"]',
      ],
      'certificate_info' => [
        'cert_type' => 'CERTIFICATE_TYPE_2388',
        'cert_number' => '',
        'cert_copy' => '',
        'merchant_name' => '',
        'legal_person' => '',
        'company_address' => '',
        'cert_valid_date' => '["1970-01-01","forever"]',
      ],
      'company_prove_copy' => '',
      'assist_prove_info' => [
        'micro_biz_type' => 'MICRO_TYPE_STORE',
        'store_name' => '',
        'store_address_code' => '',
        'store_address' => '',
        'store_header_copy' => '',
        'store_indoor_copy' => '',
      ],
      'special_operation_info' => [[
        'category_id' => 0,
        'store_indoor_copy' => ['MediaId'],
      ],],
      'finance_institution_info' => [
        'finance_type' => 'BANK_AGENT',
        'finance_license_pics' => ['MediaId'],
      ],
    ],
    'identification_info' => [
      'id_holder_type' => 'LEGAL',
      'identification_type' => 'IDENTIFICATION_TYPE_IDCARD',
      'authorize_letter_copy' => '',
      'identification_name' => '',
      'identification_number' => '',
      'identification_valid_date' => '["1970-01-01","forever"]',
      'identification_address' => '',
      'identification_front_copy' => '',
      'identification_back_copy' => '',
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
    'addition_info' => [
      'confirm_mchid_list' => ['string'],
    ],
  ],
  'query' => [
    'channel_id' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/apply4subject/applyment')->post([
  'json' => [
    'business_code' => '',
    'contact_info' => [
      'contact_type' => 'LEGAL',
      'name' => '',
      'contact_id_doc_type' => 'IDENTIFICATION_TYPE_IDCARD',
      'id_card_number' => '',
      'contact_id_doc_copy' => '',
      'contact_id_doc_copy_back' => '',
      'contact_period_begin' => '',
      'contact_period_end' => '',
      'business_authorization_letter' => '',
      'mobile' => '',
    ],
    'subject_info' => [
      'subject_type' => 'SUBJECT_TYPE_INDIVIDUAL',
      'is_finance_institution' => true,
      'business_license_info' => [
        'licence_number' => '',
        'licence_copy' => '',
        'merchant_name' => '',
        'legal_person' => '',
        'company_address' => '',
        'licence_valid_date' => '["1970-01-01","forever"]',
      ],
      'certificate_info' => [
        'cert_type' => 'CERTIFICATE_TYPE_2388',
        'cert_number' => '',
        'cert_copy' => '',
        'merchant_name' => '',
        'legal_person' => '',
        'company_address' => '',
        'cert_valid_date' => '["1970-01-01","forever"]',
      ],
      'company_prove_copy' => '',
      'assist_prove_info' => [
        'micro_biz_type' => 'MICRO_TYPE_STORE',
        'store_name' => '',
        'store_address_code' => '',
        'store_address' => '',
        'store_header_copy' => '',
        'store_indoor_copy' => '',
      ],
      'special_operation_info' => [[
        'category_id' => 0,
        'store_indoor_copy' => ['MediaId'],
      ],],
      'finance_institution_info' => [
        'finance_type' => 'BANK_AGENT',
        'finance_license_pics' => ['MediaId'],
      ],
    ],
    'identification_info' => [
      'id_holder_type' => 'LEGAL',
      'identification_type' => 'IDENTIFICATION_TYPE_IDCARD',
      'authorize_letter_copy' => '',
      'identification_name' => '',
      'identification_number' => '',
      'identification_valid_date' => '["1970-01-01","forever"]',
      'identification_address' => '',
      'identification_front_copy' => '',
      'identification_back_copy' => '',
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
    'addition_info' => [
      'confirm_mchid_list' => ['string'],
    ],
  ],
  'query' => [
    'channel_id' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/apply4subject/applyment']->post([
  'json' => [
    'business_code' => '',
    'contact_info' => [
      'contact_type' => 'LEGAL',
      'name' => '',
      'contact_id_doc_type' => 'IDENTIFICATION_TYPE_IDCARD',
      'id_card_number' => '',
      'contact_id_doc_copy' => '',
      'contact_id_doc_copy_back' => '',
      'contact_period_begin' => '',
      'contact_period_end' => '',
      'business_authorization_letter' => '',
      'mobile' => '',
    ],
    'subject_info' => [
      'subject_type' => 'SUBJECT_TYPE_INDIVIDUAL',
      'is_finance_institution' => true,
      'business_license_info' => [
        'licence_number' => '',
        'licence_copy' => '',
        'merchant_name' => '',
        'legal_person' => '',
        'company_address' => '',
        'licence_valid_date' => '["1970-01-01","forever"]',
      ],
      'certificate_info' => [
        'cert_type' => 'CERTIFICATE_TYPE_2388',
        'cert_number' => '',
        'cert_copy' => '',
        'merchant_name' => '',
        'legal_person' => '',
        'company_address' => '',
        'cert_valid_date' => '["1970-01-01","forever"]',
      ],
      'company_prove_copy' => '',
      'assist_prove_info' => [
        'micro_biz_type' => 'MICRO_TYPE_STORE',
        'store_name' => '',
        'store_address_code' => '',
        'store_address' => '',
        'store_header_copy' => '',
        'store_indoor_copy' => '',
      ],
      'special_operation_info' => [[
        'category_id' => 0,
        'store_indoor_copy' => ['MediaId'],
      ],],
      'finance_institution_info' => [
        'finance_type' => 'BANK_AGENT',
        'finance_license_pics' => ['MediaId'],
      ],
    ],
    'identification_info' => [
      'id_holder_type' => 'LEGAL',
      'identification_type' => 'IDENTIFICATION_TYPE_IDCARD',
      'authorize_letter_copy' => '',
      'identification_name' => '',
      'identification_number' => '',
      'identification_valid_date' => '["1970-01-01","forever"]',
      'identification_address' => '',
      'identification_front_copy' => '',
      'identification_back_copy' => '',
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
    'addition_info' => [
      'confirm_mchid_list' => ['string'],
    ],
  ],
  'query' => [
    'channel_id' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| applyment_id | number | 微信支付申请单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_1_1.shtml)

# 查询商户开户意愿申请单审核结果 {#get}

当服务商提交申请单后，需要定期调用此接口查询申请单的审核状态。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object | 声明请求的查询参数
| applyment_id {data-indent=1} | string | 申请单编号
| business_code {data-indent=1} | string | 业务申请编号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->apply4subject->applyment->getAsync([
  'query' => [
    'applyment_id' => '',
    'business_code' => '',
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
    'applyment_id' => '',
    'business_code' => '',
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
    'applyment_id' => '',
    'business_code' => '',
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
    'applyment_id' => '',
    'business_code' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/apply4subject/applyment')->get([
  'query' => [
    'applyment_id' => '',
    'business_code' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/apply4subject/applyment']->get([
  'query' => [
    'applyment_id' => '',
    'business_code' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| qrcode_data | string | 小程序码图片
| reject_param | string | 驳回参数
| reject_reason | string | 驳回原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter10_1_3.shtml)