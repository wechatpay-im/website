---
title: 提交已注销商户号可用余额提现申请单
description: 针对被微信支付平台不收不付管控的电商子商户，如子商户账户内还有可用余额，且无法解脱（例如.营业执照注销吊销），则服务商可为子商户申请走注销提现的流程，将可用余额进行提现操作。在商户号注销后，电商平台可发起提现申请, 审批通过后, 将会按照指定的收款方式返回给商户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-required data-indent=1} | string | 二级商户号
| out_account_type {data-required data-indent=1} | string | 二级商户号的出款子账户类型<br/>`BASIC_ACCOUNT` \| `OPERATE_ACCOUNT` \| `MARGIN_ACCOUNT` 枚举值之一
| amount {data-required data-indent=1} | integer | 提现金额
| out_request_no {data-required data-indent=1} | string | 商户提现申请单号
| payee_type {data-required data-indent=1} | string | 收款对象类型<br/>`CONTRIBUTION_MERCHANT` \| `SERVICE_PROVIDER_MERCHANT` \| `OTHER_MERCHANT` \| `INDIVIDUAL` 枚举值之一
| payee_mchid {data-indent=1} | string | 收款对象对应的商户号
| payee_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 收款账号信息
| account_type {data-required data-indent=2} | string | 账户类型<br/>`ACCOUNT_TYPE_CORPORATE` \| `ACCOUNT_TYPE_PERSONAL` 枚举值之一
| bank_account_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 银行账户
| account_name {data-required data-indent=3} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 开户名称
| account_bank {data-required data-indent=3} | string | 开户银行
| bank_branch_id {data-indent=3} | string | 开户银行联行号
| bank_name {data-indent=3} | string | 开户银行全称（含支行）
| account_number {data-required data-indent=3} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 银行账号
| identity_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 收款人账号对应的证件信息
| id_doc_type {data-indent=3} | string | 证件类型<br/>`IDENTIFICATION_TYPE_IDCARD` \| `IDENTIFICATION_TYPE_OVERSEA_PASSPORT` \| `IDENTIFICATION_TYPE_HONGKONG_PASSPORT` \| `IDENTIFICATION_TYPE_MACAO_PASSPORT` \| `IDENTIFICATION_TYPE_TAIWAN_PASSPORT` \| `IDENTIFICATION_TYPE_FOREIGN_RESIDENT` \| `IDENTIFICATION_TYPE_HONGKONG_MACAO_RESIDENT` \| `IDENTIFICATION_TYPE_TAIWAN_RESIDENT` 枚举值之一
| identification_name {data-required data-indent=3} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 证件姓名
| identification_no {data-required data-indent=3} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 证件号码
| proof_media_list {data-indent=1} | object {data-tooltip="对应PHP的array"} | 付款申请证明材料
| proof_payee_media {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 申请证明材料
| proof_media_type {data-required data-indent=3} | string | 申请证明材料类型<br/>`BASIC_TRANSACTION_INFORMATION` \| `LEGAL_ID_CARD` \| `ID_CARD` \| `BUSINESS_LICENSE_PHOTO` \| `PAYEE_ID_CARD` \| `WECHAT_PAY_WITHDRAWAL_APPLICATION_TYPE_6` \| `WECHAT_PAY_WITHDRAWAL_APPLICATION_TYPE_7` \| `WECHAT_PAY_WITHDRAWAL_APPLICATION_TYPE_8` 枚举值之一
| proof_media {data-required data-indent=3} | string | 证明材料照片
| additional_materials {data-indent=1} | object {data-tooltip="对应PHP的array"} | 补充材料
| additional_media {data-indent=2} | string[] | 补充材料照片列表，最多10张
| remark {data-indent=1} | string | 备注
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->mch_operate->risk->withdrawlApply->postAsync([
  'json' => [
    'sub_mchid'            => '1900000109',
    'out_account_type'     => 'BASIC_ACCOUNT',
    'amount'               => 101,
    'out_request_no'       => '2019061122222222122',
    'payee_type'           => 'OTHER_MERCHANT',
    'payee_mchid'          => '1900000109',
    'payee_info'           => [
      'account_type'      => 'ACCOUNT_TYPE_CORPORATE',
      'bank_account_info' => [
        'account_name'   => 'AOZdYGISxo4y44/UgZ69b0zZXkw==',
        'account_bank'   => '工商银行',
        'bank_branch_id' => '402713354941',
        'bank_name'      => '402713354941',
        'account_number' => 'd+xT+MQCvrLHeorwC+w==',
      ],
      'identity_info'     => [
        'id_doc_type'         => 'IDENTIFICATION_TYPE_IDCARD',
        'identification_name' => 'pVd1HJ6zyvPedzfg==',
        'identification_no'   => 'AOZdYGISxo4y44/UgZ69bkw==',
      ],
    ],
    'proof_media_list'     => [
      'proof_payee_media' => [[
        'proof_media_type' => 'BASIC_TRANSACTION_INFORMATION',
        'proof_media'      => 'jTpGmxUX3FBWVQ5NJTZvlKXQ',
      ],],
    ],
    'additional_materials' => [
      'additional_media' => ['jTpGmxUX3FBWVQ5NFQ'],
    ],
    'remark'               => '特殊理由',
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
$instance->chain('v3/mch_operate/risk/withdrawl-apply')->postAsync([
  'json' => [
    'sub_mchid'            => '1900000109',
    'out_account_type'     => 'BASIC_ACCOUNT',
    'amount'               => 101,
    'out_request_no'       => '2019061122222222122',
    'payee_type'           => 'OTHER_MERCHANT',
    'payee_mchid'          => '1900000109',
    'payee_info'           => [
      'account_type'      => 'ACCOUNT_TYPE_CORPORATE',
      'bank_account_info' => [
        'account_name'   => 'AOZdYGISxo4y44/UgZ69b0zZXkw==',
        'account_bank'   => '工商银行',
        'bank_branch_id' => '402713354941',
        'bank_name'      => '402713354941',
        'account_number' => 'd+xT+MQCvrLHeorwC+w==',
      ],
      'identity_info'     => [
        'id_doc_type'         => 'IDENTIFICATION_TYPE_IDCARD',
        'identification_name' => 'pVd1HJ6zyvPedzfg==',
        'identification_no'   => 'AOZdYGISxo4y44/UgZ69bkw==',
      ],
    ],
    'proof_media_list'     => [
      'proof_payee_media' => [[
        'proof_media_type' => 'BASIC_TRANSACTION_INFORMATION',
        'proof_media'      => 'jTpGmxUX3FBWVQ5NJTZvlKXQ',
      ],],
    ],
    'additional_materials' => [
      'additional_media' => ['jTpGmxUX3FBWVQ5NFQ'],
    ],
    'remark'               => '特殊理由',
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
$instance['v3/mch_operate/risk/withdrawl-apply']->postAsync([
  'json' => [
    'sub_mchid'            => '1900000109',
    'out_account_type'     => 'BASIC_ACCOUNT',
    'amount'               => 101,
    'out_request_no'       => '2019061122222222122',
    'payee_type'           => 'OTHER_MERCHANT',
    'payee_mchid'          => '1900000109',
    'payee_info'           => [
      'account_type'      => 'ACCOUNT_TYPE_CORPORATE',
      'bank_account_info' => [
        'account_name'   => 'AOZdYGISxo4y44/UgZ69b0zZXkw==',
        'account_bank'   => '工商银行',
        'bank_branch_id' => '402713354941',
        'bank_name'      => '402713354941',
        'account_number' => 'd+xT+MQCvrLHeorwC+w==',
      ],
      'identity_info'     => [
        'id_doc_type'         => 'IDENTIFICATION_TYPE_IDCARD',
        'identification_name' => 'pVd1HJ6zyvPedzfg==',
        'identification_no'   => 'AOZdYGISxo4y44/UgZ69bkw==',
      ],
    ],
    'proof_media_list'     => [
      'proof_payee_media' => [[
        'proof_media_type' => 'BASIC_TRANSACTION_INFORMATION',
        'proof_media'      => 'jTpGmxUX3FBWVQ5NJTZvlKXQ',
      ],],
    ],
    'additional_materials' => [
      'additional_media' => ['jTpGmxUX3FBWVQ5NFQ'],
    ],
    'remark'               => '特殊理由',
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
$response = $instance->v3->mch_operate->risk->withdrawlApply->post([
  'json' => [
    'sub_mchid'            => '1900000109',
    'out_account_type'     => 'BASIC_ACCOUNT',
    'amount'               => 101,
    'out_request_no'       => '2019061122222222122',
    'payee_type'           => 'OTHER_MERCHANT',
    'payee_mchid'          => '1900000109',
    'payee_info'           => [
      'account_type'      => 'ACCOUNT_TYPE_CORPORATE',
      'bank_account_info' => [
        'account_name'   => 'AOZdYGISxo4y44/UgZ69b0zZXkw==',
        'account_bank'   => '工商银行',
        'bank_branch_id' => '402713354941',
        'bank_name'      => '402713354941',
        'account_number' => 'd+xT+MQCvrLHeorwC+w==',
      ],
      'identity_info'     => [
        'id_doc_type'         => 'IDENTIFICATION_TYPE_IDCARD',
        'identification_name' => 'pVd1HJ6zyvPedzfg==',
        'identification_no'   => 'AOZdYGISxo4y44/UgZ69bkw==',
      ],
    ],
    'proof_media_list'     => [
      'proof_payee_media' => [[
        'proof_media_type' => 'BASIC_TRANSACTION_INFORMATION',
        'proof_media'      => 'jTpGmxUX3FBWVQ5NJTZvlKXQ',
      ],],
    ],
    'additional_materials' => [
      'additional_media' => ['jTpGmxUX3FBWVQ5NFQ'],
    ],
    'remark'               => '特殊理由',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/mch_operate/risk/withdrawl-apply')->post([
  'json' => [
    'sub_mchid'            => '1900000109',
    'out_account_type'     => 'BASIC_ACCOUNT',
    'amount'               => 101,
    'out_request_no'       => '2019061122222222122',
    'payee_type'           => 'OTHER_MERCHANT',
    'payee_mchid'          => '1900000109',
    'payee_info'           => [
      'account_type'      => 'ACCOUNT_TYPE_CORPORATE',
      'bank_account_info' => [
        'account_name'   => 'AOZdYGISxo4y44/UgZ69b0zZXkw==',
        'account_bank'   => '工商银行',
        'bank_branch_id' => '402713354941',
        'bank_name'      => '402713354941',
        'account_number' => 'd+xT+MQCvrLHeorwC+w==',
      ],
      'identity_info'     => [
        'id_doc_type'         => 'IDENTIFICATION_TYPE_IDCARD',
        'identification_name' => 'pVd1HJ6zyvPedzfg==',
        'identification_no'   => 'AOZdYGISxo4y44/UgZ69bkw==',
      ],
    ],
    'proof_media_list'     => [
      'proof_payee_media' => [[
        'proof_media_type' => 'BASIC_TRANSACTION_INFORMATION',
        'proof_media'      => 'jTpGmxUX3FBWVQ5NJTZvlKXQ',
      ],],
    ],
    'additional_materials' => [
      'additional_media' => ['jTpGmxUX3FBWVQ5NFQ'],
    ],
    'remark'               => '特殊理由',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/mch_operate/risk/withdrawl-apply']->post([
  'json' => [
    'sub_mchid'            => '1900000109',
    'out_account_type'     => 'BASIC_ACCOUNT',
    'amount'               => 101,
    'out_request_no'       => '2019061122222222122',
    'payee_type'           => 'OTHER_MERCHANT',
    'payee_mchid'          => '1900000109',
    'payee_info'           => [
      'account_type'      => 'ACCOUNT_TYPE_CORPORATE',
      'bank_account_info' => [
        'account_name'   => 'AOZdYGISxo4y44/UgZ69b0zZXkw==',
        'account_bank'   => '工商银行',
        'bank_branch_id' => '402713354941',
        'bank_name'      => '402713354941',
        'account_number' => 'd+xT+MQCvrLHeorwC+w==',
      ],
      'identity_info'     => [
        'id_doc_type'         => 'IDENTIFICATION_TYPE_IDCARD',
        'identification_name' => 'pVd1HJ6zyvPedzfg==',
        'identification_no'   => 'AOZdYGISxo4y44/UgZ69bkw==',
      ],
    ],
    'proof_media_list'     => [
      'proof_payee_media' => [[
        'proof_media_type' => 'BASIC_TRANSACTION_INFORMATION',
        'proof_media'      => 'jTpGmxUX3FBWVQ5NJTZvlKXQ',
      ],],
    ],
    'additional_materials' => [
      'additional_media' => ['jTpGmxUX3FBWVQ5NFQ'],
    ],
    'remark'               => '特殊理由',
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
| applyment_id | string | 微信支付提现申请单号
| out_request_no | string | 商户提现申请单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/withdrawal-apply/withdrawal-apply/submit-apply.html) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_8_9.shtml)
