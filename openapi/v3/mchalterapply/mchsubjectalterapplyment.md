---
title: 提交资料变更申请单
description: 服务商使用该接口提交商家主体资料变更申请，帮助商家修改主体资料。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| merchant_code {data-required data-indent=1} | string | 商户号
| out_request_no {data-required data-indent=1} | string | 业务申请编号
| organization_type {data-required data-indent=1} | string | 主体类型
| finance_institution {data-required data-indent=1} | boolean | 是否金融机构
| business_license_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 营业执照信息
| license_number {data-required data-indent=2} | string | 营业执照注册号
| license_copy {data-required data-indent=2} | string | 营业执照照片
| merchant_name {data-required data-indent=2} | string | 商户名称
| legal_person {data-required data-indent=2} | string | 法人姓名
| company_address {data-indent=2} | string | 注册地址
| license_period_begin {data-indent=2} | string | 有效期开始时间
| license_period_end {data-indent=2} | string | 有效期结束时间
| certificate_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 登记证书信息
| cert_type {data-required data-indent=2} | string | 证书类型
| cert_number {data-required data-indent=2} | string | 证书编号
| cert_copy {data-required data-indent=2} | string | 证书照片
| merchant_name {data-required data-indent=2} | string | 商户名称
| legal_person {data-required data-indent=2} | string | 法人姓名
| company_address {data-required data-indent=2} | string | 注册地址
| cert_period_begin {data-required data-indent=2} | string | 有效期开始时间
| cert_period_end {data-required data-indent=2} | string | 有效期结束时间
| finance_institution_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 金融机构许可证
| finance_type {data-required data-indent=2} | string | 金融机构类型
| finance_license_pics {data-required data-indent=2} | string[] | 金融机构许可证图片
| legal_person_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 法人身份信息
| id_holder_type {data-required data-indent=2} | string | 证件持有人类型
| id_doc_type {data-indent=2} | string | 证件类型
| authorize_letter_copy {data-indent=2} | string | 法定代表人说明函
| card_front {data-indent=2} | string | 证件正面照片
| card_back {data-indent=2} | string | 证件反面照片
| card_name {data-indent=2} | string | 证件姓名
| card_number {data-indent=2} | string | 证件号码
| card_address {data-indent=2} | string | 证件居住地址
| card_period_begin {data-indent=2} | string | 证件有效期开始时间
| card_period_end {data-indent=2} | string | 证件有效期结束时间
| as_ubo {data-indent=2} | boolean | 经营者/法人是否为受益人
| ubo_info_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 最终受益人信息列表
| id_doc_type {data-required data-indent=2} | string | 证件类型
| card_front {data-required data-indent=2} | string | 证件正面照片
| card_back {data-indent=2} | string | 证件反面照片
| card_name {data-required data-indent=2} | string | 证件姓名
| card_number {data-required data-indent=2} | string | 证件号码
| card_address {data-required data-indent=2} | string | 证件居住地址
| card_period_begin {data-required data-indent=2} | string | 证件有效期开始时间
| card_period_end {data-required data-indent=2} | string | 证件有效期结束时间
| addition {data-indent=1} | object {data-tooltip="对应PHP的array"} | 补充材料列表
| bank_openaccount_license {data-indent=2} | string[] | 银行开户许可证
| openaccount_approval {data-indent=2} | string[] | 开户核准通知书
| legal_other_prove {data-indent=2} | string[] | 法人身份辅助证明
| agency_prove {data-indent=2} | string[] | 发证机关证明

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->mchalterapply->mchsubjectalterapplyment->postAsync([
  'json' => [
    'merchant_code'            => '2492185251',
    'out_request_no'           => '1900013511_10000',
    'organization_type'        => 'SUBJECT_TYPE_ENTERPRISE',
    'finance_institution'      => true,
    'business_license_info'    => [
      'license_number'       => '123456789012345678',
      'license_copy'         => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'merchant_name'        => '李四网络有限公司',
      'legal_person'         => '李四',
      'company_address'      => '广东省深圳市南山区xx路xx号',
      'license_period_begin' => '2019-06-06',
      'license_period_end'   => '2026-06-06',
    ],
    'certificate_info'         => [
      'cert_type'         => 'CERTIFICATE_TYPE_2388',
      'cert_number'       => '111111111111',
      'cert_copy'         => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'merchant_name'     => 'xx公益团体',
      'legal_person'      => '李四',
      'company_address'   => '广东省深圳市南山区xx路xx号',
      'cert_period_begin' => '2019-06-06',
      'cert_period_end'   => '2026-06-06',
    ],
    'finance_institution_info' => [
      'finance_type'         => 'FINANCE_TYPE_BANK_AGENT',
      'finance_license_pics' => ['MediaId'],
    ],
    'legal_person_info'        => [
      'id_holder_type'        => 'LEGAL',
      'id_doc_type'           => 'IDENTIFICATION_TYPE_IDCARD',
      'authorize_letter_copy' => '47ZC6GC-vnrbEny_Ie_An5-tCpqxucuxi-vByf3Gjm7KEIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'card_front'            => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'card_back'             => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'card_name'             => 'MZnwEx6zotwIz6ctW2/iQL5z94odwP9sKiF74RPCPztcJOScaXsaGs82HJNU3K+46ndk7pMrENiPDw==',
      'card_number'           => 'MZnwEx6zotwIz6ctW2/iQL5z94odwP9sKiF74RPCPztcJOScaXsaGs82HJNU3K+46ndk7pMrENiPDw==',
      'card_address'          => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPROvwia4ibL+F6mfjbzQIzfb3HHLEjZ4YiR/cJiCrZxnAqi+pjeKIEdkwzXRAI7FUhrfPK3SNjaBTEu9GmsugMIA9r3x887Q+ODuC8HH2nzAn7NGpE/e3yiHgWhk0ps5k5DP/2qIdGdONoDzZelrxCl/NWWNUyB93K9F+jC1JX2IMttdY+aQ6zBlw0xnOiNW6Hzy7UtC+xriudjD5APomty7/mYNxLMpRSvWKIjOv/69bDnuC4EL5Kz4jBHLiCyOb+tI0m2qhZ9evAM+Jv1z0NVa8MRtelw/wDa4SzfeespQO/0kjiwfqdfg==',
      'card_period_begin'     => '2019-06-06',
      'card_period_end'       => '2026-06-06',
      'as_ubo'                => true,
    ],
    'ubo_info_list'            => [[
      'id_doc_type'       => 'IDENTIFICATION_TYPE_IDCARD',
      'card_front'        => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'card_back'         => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'card_name'         => 'MZnwEx6zotwIz6ctW2/iQL5z94odwP9sKiF74RPCPztcJOScaXsaGs82HJNU3K+46ndk7pMrENiPDw==',
      'card_number'       => 'MZnwEx6zotwIz6ctW2/iQL5z94odwP9sKiF74RPCPztcJOScaXsaGs82HJNU3K+46ndk7pMrENiPDw==',
      'card_address'      => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPROvwia4ibL+F6mfjbzQIzfb3HHLEjZ4YiR/cJiCrZxnAqi+==',
      'card_period_begin' => '2019-06-06',
      'card_period_end'   => '2026-06-06',
    ],],
    'addition'                 => [
      'bank_openaccount_license' => ['MediaId'],
      'openaccount_approval'     => ['MediaId'],
      'legal_other_prove'        => ['MediaId'],
      'agency_prove'             => ['MediaId'],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/mchalterapply/mchsubjectalterapplyment')->postAsync([
  'json' => [
    'merchant_code'            => '2492185251',
    'out_request_no'           => '1900013511_10000',
    'organization_type'        => 'SUBJECT_TYPE_ENTERPRISE',
    'finance_institution'      => true,
    'business_license_info'    => [
      'license_number'       => '123456789012345678',
      'license_copy'         => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'merchant_name'        => '李四网络有限公司',
      'legal_person'         => '李四',
      'company_address'      => '广东省深圳市南山区xx路xx号',
      'license_period_begin' => '2019-06-06',
      'license_period_end'   => '2026-06-06',
    ],
    'certificate_info'         => [
      'cert_type'         => 'CERTIFICATE_TYPE_2388',
      'cert_number'       => '111111111111',
      'cert_copy'         => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'merchant_name'     => 'xx公益团体',
      'legal_person'      => '李四',
      'company_address'   => '广东省深圳市南山区xx路xx号',
      'cert_period_begin' => '2019-06-06',
      'cert_period_end'   => '2026-06-06',
    ],
    'finance_institution_info' => [
      'finance_type'         => 'FINANCE_TYPE_BANK_AGENT',
      'finance_license_pics' => ['MediaId'],
    ],
    'legal_person_info'        => [
      'id_holder_type'        => 'LEGAL',
      'id_doc_type'           => 'IDENTIFICATION_TYPE_IDCARD',
      'authorize_letter_copy' => '47ZC6GC-vnrbEny_Ie_An5-tCpqxucuxi-vByf3Gjm7KEIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'card_front'            => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'card_back'             => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'card_name'             => 'MZnwEx6zotwIz6ctW2/iQL5z94odwP9sKiF74RPCPztcJOScaXsaGs82HJNU3K+46ndk7pMrENiPDw==',
      'card_number'           => 'MZnwEx6zotwIz6ctW2/iQL5z94odwP9sKiF74RPCPztcJOScaXsaGs82HJNU3K+46ndk7pMrENiPDw==',
      'card_address'          => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPROvwia4ibL+F6mfjbzQIzfb3HHLEjZ4YiR/cJiCrZxnAqi+pjeKIEdkwzXRAI7FUhrfPK3SNjaBTEu9GmsugMIA9r3x887Q+ODuC8HH2nzAn7NGpE/e3yiHgWhk0ps5k5DP/2qIdGdONoDzZelrxCl/NWWNUyB93K9F+jC1JX2IMttdY+aQ6zBlw0xnOiNW6Hzy7UtC+xriudjD5APomty7/mYNxLMpRSvWKIjOv/69bDnuC4EL5Kz4jBHLiCyOb+tI0m2qhZ9evAM+Jv1z0NVa8MRtelw/wDa4SzfeespQO/0kjiwfqdfg==',
      'card_period_begin'     => '2019-06-06',
      'card_period_end'       => '2026-06-06',
      'as_ubo'                => true,
    ],
    'ubo_info_list'            => [[
      'id_doc_type'       => 'IDENTIFICATION_TYPE_IDCARD',
      'card_front'        => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'card_back'         => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'card_name'         => 'MZnwEx6zotwIz6ctW2/iQL5z94odwP9sKiF74RPCPztcJOScaXsaGs82HJNU3K+46ndk7pMrENiPDw==',
      'card_number'       => 'MZnwEx6zotwIz6ctW2/iQL5z94odwP9sKiF74RPCPztcJOScaXsaGs82HJNU3K+46ndk7pMrENiPDw==',
      'card_address'      => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPROvwia4ibL+F6mfjbzQIzfb3HHLEjZ4YiR/cJiCrZxnAqi+==',
      'card_period_begin' => '2019-06-06',
      'card_period_end'   => '2026-06-06',
    ],],
    'addition'                 => [
      'bank_openaccount_license' => ['MediaId'],
      'openaccount_approval'     => ['MediaId'],
      'legal_other_prove'        => ['MediaId'],
      'agency_prove'             => ['MediaId'],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/mchalterapply/mchsubjectalterapplyment']->postAsync([
  'json' => [
    'merchant_code'            => '2492185251',
    'out_request_no'           => '1900013511_10000',
    'organization_type'        => 'SUBJECT_TYPE_ENTERPRISE',
    'finance_institution'      => true,
    'business_license_info'    => [
      'license_number'       => '123456789012345678',
      'license_copy'         => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'merchant_name'        => '李四网络有限公司',
      'legal_person'         => '李四',
      'company_address'      => '广东省深圳市南山区xx路xx号',
      'license_period_begin' => '2019-06-06',
      'license_period_end'   => '2026-06-06',
    ],
    'certificate_info'         => [
      'cert_type'         => 'CERTIFICATE_TYPE_2388',
      'cert_number'       => '111111111111',
      'cert_copy'         => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'merchant_name'     => 'xx公益团体',
      'legal_person'      => '李四',
      'company_address'   => '广东省深圳市南山区xx路xx号',
      'cert_period_begin' => '2019-06-06',
      'cert_period_end'   => '2026-06-06',
    ],
    'finance_institution_info' => [
      'finance_type'         => 'FINANCE_TYPE_BANK_AGENT',
      'finance_license_pics' => ['MediaId'],
    ],
    'legal_person_info'        => [
      'id_holder_type'        => 'LEGAL',
      'id_doc_type'           => 'IDENTIFICATION_TYPE_IDCARD',
      'authorize_letter_copy' => '47ZC6GC-vnrbEny_Ie_An5-tCpqxucuxi-vByf3Gjm7KEIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'card_front'            => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'card_back'             => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'card_name'             => 'MZnwEx6zotwIz6ctW2/iQL5z94odwP9sKiF74RPCPztcJOScaXsaGs82HJNU3K+46ndk7pMrENiPDw==',
      'card_number'           => 'MZnwEx6zotwIz6ctW2/iQL5z94odwP9sKiF74RPCPztcJOScaXsaGs82HJNU3K+46ndk7pMrENiPDw==',
      'card_address'          => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPROvwia4ibL+F6mfjbzQIzfb3HHLEjZ4YiR/cJiCrZxnAqi+pjeKIEdkwzXRAI7FUhrfPK3SNjaBTEu9GmsugMIA9r3x887Q+ODuC8HH2nzAn7NGpE/e3yiHgWhk0ps5k5DP/2qIdGdONoDzZelrxCl/NWWNUyB93K9F+jC1JX2IMttdY+aQ6zBlw0xnOiNW6Hzy7UtC+xriudjD5APomty7/mYNxLMpRSvWKIjOv/69bDnuC4EL5Kz4jBHLiCyOb+tI0m2qhZ9evAM+Jv1z0NVa8MRtelw/wDa4SzfeespQO/0kjiwfqdfg==',
      'card_period_begin'     => '2019-06-06',
      'card_period_end'       => '2026-06-06',
      'as_ubo'                => true,
    ],
    'ubo_info_list'            => [[
      'id_doc_type'       => 'IDENTIFICATION_TYPE_IDCARD',
      'card_front'        => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'card_back'         => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'card_name'         => 'MZnwEx6zotwIz6ctW2/iQL5z94odwP9sKiF74RPCPztcJOScaXsaGs82HJNU3K+46ndk7pMrENiPDw==',
      'card_number'       => 'MZnwEx6zotwIz6ctW2/iQL5z94odwP9sKiF74RPCPztcJOScaXsaGs82HJNU3K+46ndk7pMrENiPDw==',
      'card_address'      => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPROvwia4ibL+F6mfjbzQIzfb3HHLEjZ4YiR/cJiCrZxnAqi+==',
      'card_period_begin' => '2019-06-06',
      'card_period_end'   => '2026-06-06',
    ],],
    'addition'                 => [
      'bank_openaccount_license' => ['MediaId'],
      'openaccount_approval'     => ['MediaId'],
      'legal_other_prove'        => ['MediaId'],
      'agency_prove'             => ['MediaId'],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->mchalterapply->mchsubjectalterapplyment->post([
  'json' => [
    'merchant_code'            => '2492185251',
    'out_request_no'           => '1900013511_10000',
    'organization_type'        => 'SUBJECT_TYPE_ENTERPRISE',
    'finance_institution'      => true,
    'business_license_info'    => [
      'license_number'       => '123456789012345678',
      'license_copy'         => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'merchant_name'        => '李四网络有限公司',
      'legal_person'         => '李四',
      'company_address'      => '广东省深圳市南山区xx路xx号',
      'license_period_begin' => '2019-06-06',
      'license_period_end'   => '2026-06-06',
    ],
    'certificate_info'         => [
      'cert_type'         => 'CERTIFICATE_TYPE_2388',
      'cert_number'       => '111111111111',
      'cert_copy'         => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'merchant_name'     => 'xx公益团体',
      'legal_person'      => '李四',
      'company_address'   => '广东省深圳市南山区xx路xx号',
      'cert_period_begin' => '2019-06-06',
      'cert_period_end'   => '2026-06-06',
    ],
    'finance_institution_info' => [
      'finance_type'         => 'FINANCE_TYPE_BANK_AGENT',
      'finance_license_pics' => ['MediaId'],
    ],
    'legal_person_info'        => [
      'id_holder_type'        => 'LEGAL',
      'id_doc_type'           => 'IDENTIFICATION_TYPE_IDCARD',
      'authorize_letter_copy' => '47ZC6GC-vnrbEny_Ie_An5-tCpqxucuxi-vByf3Gjm7KEIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'card_front'            => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'card_back'             => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'card_name'             => 'MZnwEx6zotwIz6ctW2/iQL5z94odwP9sKiF74RPCPztcJOScaXsaGs82HJNU3K+46ndk7pMrENiPDw==',
      'card_number'           => 'MZnwEx6zotwIz6ctW2/iQL5z94odwP9sKiF74RPCPztcJOScaXsaGs82HJNU3K+46ndk7pMrENiPDw==',
      'card_address'          => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPROvwia4ibL+F6mfjbzQIzfb3HHLEjZ4YiR/cJiCrZxnAqi+pjeKIEdkwzXRAI7FUhrfPK3SNjaBTEu9GmsugMIA9r3x887Q+ODuC8HH2nzAn7NGpE/e3yiHgWhk0ps5k5DP/2qIdGdONoDzZelrxCl/NWWNUyB93K9F+jC1JX2IMttdY+aQ6zBlw0xnOiNW6Hzy7UtC+xriudjD5APomty7/mYNxLMpRSvWKIjOv/69bDnuC4EL5Kz4jBHLiCyOb+tI0m2qhZ9evAM+Jv1z0NVa8MRtelw/wDa4SzfeespQO/0kjiwfqdfg==',
      'card_period_begin'     => '2019-06-06',
      'card_period_end'       => '2026-06-06',
      'as_ubo'                => true,
    ],
    'ubo_info_list'            => [[
      'id_doc_type'       => 'IDENTIFICATION_TYPE_IDCARD',
      'card_front'        => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'card_back'         => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'card_name'         => 'MZnwEx6zotwIz6ctW2/iQL5z94odwP9sKiF74RPCPztcJOScaXsaGs82HJNU3K+46ndk7pMrENiPDw==',
      'card_number'       => 'MZnwEx6zotwIz6ctW2/iQL5z94odwP9sKiF74RPCPztcJOScaXsaGs82HJNU3K+46ndk7pMrENiPDw==',
      'card_address'      => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPROvwia4ibL+F6mfjbzQIzfb3HHLEjZ4YiR/cJiCrZxnAqi+==',
      'card_period_begin' => '2019-06-06',
      'card_period_end'   => '2026-06-06',
    ],],
    'addition'                 => [
      'bank_openaccount_license' => ['MediaId'],
      'openaccount_approval'     => ['MediaId'],
      'legal_other_prove'        => ['MediaId'],
      'agency_prove'             => ['MediaId'],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/mchalterapply/mchsubjectalterapplyment')->post([
  'json' => [
    'merchant_code'            => '2492185251',
    'out_request_no'           => '1900013511_10000',
    'organization_type'        => 'SUBJECT_TYPE_ENTERPRISE',
    'finance_institution'      => true,
    'business_license_info'    => [
      'license_number'       => '123456789012345678',
      'license_copy'         => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'merchant_name'        => '李四网络有限公司',
      'legal_person'         => '李四',
      'company_address'      => '广东省深圳市南山区xx路xx号',
      'license_period_begin' => '2019-06-06',
      'license_period_end'   => '2026-06-06',
    ],
    'certificate_info'         => [
      'cert_type'         => 'CERTIFICATE_TYPE_2388',
      'cert_number'       => '111111111111',
      'cert_copy'         => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'merchant_name'     => 'xx公益团体',
      'legal_person'      => '李四',
      'company_address'   => '广东省深圳市南山区xx路xx号',
      'cert_period_begin' => '2019-06-06',
      'cert_period_end'   => '2026-06-06',
    ],
    'finance_institution_info' => [
      'finance_type'         => 'FINANCE_TYPE_BANK_AGENT',
      'finance_license_pics' => ['MediaId'],
    ],
    'legal_person_info'        => [
      'id_holder_type'        => 'LEGAL',
      'id_doc_type'           => 'IDENTIFICATION_TYPE_IDCARD',
      'authorize_letter_copy' => '47ZC6GC-vnrbEny_Ie_An5-tCpqxucuxi-vByf3Gjm7KEIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'card_front'            => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'card_back'             => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'card_name'             => 'MZnwEx6zotwIz6ctW2/iQL5z94odwP9sKiF74RPCPztcJOScaXsaGs82HJNU3K+46ndk7pMrENiPDw==',
      'card_number'           => 'MZnwEx6zotwIz6ctW2/iQL5z94odwP9sKiF74RPCPztcJOScaXsaGs82HJNU3K+46ndk7pMrENiPDw==',
      'card_address'          => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPROvwia4ibL+F6mfjbzQIzfb3HHLEjZ4YiR/cJiCrZxnAqi+pjeKIEdkwzXRAI7FUhrfPK3SNjaBTEu9GmsugMIA9r3x887Q+ODuC8HH2nzAn7NGpE/e3yiHgWhk0ps5k5DP/2qIdGdONoDzZelrxCl/NWWNUyB93K9F+jC1JX2IMttdY+aQ6zBlw0xnOiNW6Hzy7UtC+xriudjD5APomty7/mYNxLMpRSvWKIjOv/69bDnuC4EL5Kz4jBHLiCyOb+tI0m2qhZ9evAM+Jv1z0NVa8MRtelw/wDa4SzfeespQO/0kjiwfqdfg==',
      'card_period_begin'     => '2019-06-06',
      'card_period_end'       => '2026-06-06',
      'as_ubo'                => true,
    ],
    'ubo_info_list'            => [[
      'id_doc_type'       => 'IDENTIFICATION_TYPE_IDCARD',
      'card_front'        => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'card_back'         => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'card_name'         => 'MZnwEx6zotwIz6ctW2/iQL5z94odwP9sKiF74RPCPztcJOScaXsaGs82HJNU3K+46ndk7pMrENiPDw==',
      'card_number'       => 'MZnwEx6zotwIz6ctW2/iQL5z94odwP9sKiF74RPCPztcJOScaXsaGs82HJNU3K+46ndk7pMrENiPDw==',
      'card_address'      => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPROvwia4ibL+F6mfjbzQIzfb3HHLEjZ4YiR/cJiCrZxnAqi+==',
      'card_period_begin' => '2019-06-06',
      'card_period_end'   => '2026-06-06',
    ],],
    'addition'                 => [
      'bank_openaccount_license' => ['MediaId'],
      'openaccount_approval'     => ['MediaId'],
      'legal_other_prove'        => ['MediaId'],
      'agency_prove'             => ['MediaId'],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/mchalterapply/mchsubjectalterapplyment']->post([
  'json' => [
    'merchant_code'            => '2492185251',
    'out_request_no'           => '1900013511_10000',
    'organization_type'        => 'SUBJECT_TYPE_ENTERPRISE',
    'finance_institution'      => true,
    'business_license_info'    => [
      'license_number'       => '123456789012345678',
      'license_copy'         => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'merchant_name'        => '李四网络有限公司',
      'legal_person'         => '李四',
      'company_address'      => '广东省深圳市南山区xx路xx号',
      'license_period_begin' => '2019-06-06',
      'license_period_end'   => '2026-06-06',
    ],
    'certificate_info'         => [
      'cert_type'         => 'CERTIFICATE_TYPE_2388',
      'cert_number'       => '111111111111',
      'cert_copy'         => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'merchant_name'     => 'xx公益团体',
      'legal_person'      => '李四',
      'company_address'   => '广东省深圳市南山区xx路xx号',
      'cert_period_begin' => '2019-06-06',
      'cert_period_end'   => '2026-06-06',
    ],
    'finance_institution_info' => [
      'finance_type'         => 'FINANCE_TYPE_BANK_AGENT',
      'finance_license_pics' => ['MediaId'],
    ],
    'legal_person_info'        => [
      'id_holder_type'        => 'LEGAL',
      'id_doc_type'           => 'IDENTIFICATION_TYPE_IDCARD',
      'authorize_letter_copy' => '47ZC6GC-vnrbEny_Ie_An5-tCpqxucuxi-vByf3Gjm7KEIUv0OF4wFNIO4kqg05InE4d2I6_H7I4',
      'card_front'            => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'card_back'             => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'card_name'             => 'MZnwEx6zotwIz6ctW2/iQL5z94odwP9sKiF74RPCPztcJOScaXsaGs82HJNU3K+46ndk7pMrENiPDw==',
      'card_number'           => 'MZnwEx6zotwIz6ctW2/iQL5z94odwP9sKiF74RPCPztcJOScaXsaGs82HJNU3K+46ndk7pMrENiPDw==',
      'card_address'          => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPROvwia4ibL+F6mfjbzQIzfb3HHLEjZ4YiR/cJiCrZxnAqi+pjeKIEdkwzXRAI7FUhrfPK3SNjaBTEu9GmsugMIA9r3x887Q+ODuC8HH2nzAn7NGpE/e3yiHgWhk0ps5k5DP/2qIdGdONoDzZelrxCl/NWWNUyB93K9F+jC1JX2IMttdY+aQ6zBlw0xnOiNW6Hzy7UtC+xriudjD5APomty7/mYNxLMpRSvWKIjOv/69bDnuC4EL5Kz4jBHLiCyOb+tI0m2qhZ9evAM+Jv1z0NVa8MRtelw/wDa4SzfeespQO/0kjiwfqdfg==',
      'card_period_begin'     => '2019-06-06',
      'card_period_end'       => '2026-06-06',
      'as_ubo'                => true,
    ],
    'ubo_info_list'            => [[
      'id_doc_type'       => 'IDENTIFICATION_TYPE_IDCARD',
      'card_front'        => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'card_back'         => '0P3ng6KTIW4-Q_l2FjKLZuhHjBWoMAjmVtCz7ScmhEIThCaV-4BBgVwtNkCHO_XXqK5dE5YdOmFJBZR9FwczhJehHhAZN6BKXQPcs-VvdSo',
      'card_name'         => 'MZnwEx6zotwIz6ctW2/iQL5z94odwP9sKiF74RPCPztcJOScaXsaGs82HJNU3K+46ndk7pMrENiPDw==',
      'card_number'       => 'MZnwEx6zotwIz6ctW2/iQL5z94odwP9sKiF74RPCPztcJOScaXsaGs82HJNU3K+46ndk7pMrENiPDw==',
      'card_address'      => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tPROvwia4ibL+F6mfjbzQIzfb3HHLEjZ4YiR/cJiCrZxnAqi+==',
      'card_period_begin' => '2019-06-06',
      'card_period_end'   => '2026-06-06',
    ],],
    'addition'                 => [
      'bank_openaccount_license' => ['MediaId'],
      'openaccount_approval'     => ['MediaId'],
      'legal_other_prove'        => ['MediaId'],
      'agency_prove'             => ['MediaId'],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| apply_id | string | 申请单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_3_1.shtml)
