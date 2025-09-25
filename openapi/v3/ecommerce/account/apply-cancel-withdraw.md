---
title: 提交注销提现申请
description: 本接口用于商户号注销、商户号注销及提现。当平台二级商户需要注销商户号，或需要注销商户号并提现商户号可用余额的商户，由其所属的平台商户调用此接口发起申请。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-required data-indent=1} | string | 二级商户号
| out_request_no {data-required data-indent=1} | string | 商户注销申请单号
| withdraw {data-indent=1} | string | 是否提取资金<br/>`APPLY_WITHDRAW` \| `NOT_APPLY_WITHDRAW` 枚举值之一
| payee_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 收款账号信息
| account_type {data-required data-indent=2} | string | 账户类型<br/>`ACCOUNT_TYPE_CORPORATE` \| `ACCOUNT_TYPE_PERSONAL` 枚举值之一
| bank_account_info {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 银行账户
| account_name {data-required data-indent=3} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 开户名称
| account_bank {data-required data-indent=3} | string | 开户银行
| bank_branch_id {data-indent=3} | string | 开户银行联行号
| bank_name {data-indent=3} | string | 开户银行全称（含支行）
| account_number {data-required data-indent=3} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 银行账号
| identity_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 收款人账号对应的证件信息
| id_doc_type {data-indent=3} | string | 证件类型<br/>`IDENTIFICATION_TYPE_IDCARD` \| `IDENTIFICATION_TYPE_OVERSEA_PASSPORT` \| `IDENTIFICATION_TYPE_HONGKONG_PASSPORT` \| `IDENTIFICATION_TYPE_MACAO_PASSPORT` \| `IDENTIFICATION_TYPE_TAIWAN_PASSPORT` \| `IDENTIFICATION_TYPE_FOREIGN_RESIDENT` \| `IDENTIFICATION_TYPE_HONGKONG_MACAO_RESIDENT` \| `IDENTIFICATION_TYPE_TAIWAN_RESIDENT` 枚举值之一
| identification_name {data-required data-indent=3} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 证件姓名
| identification_no {data-required data-indent=3} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 证件号码
| proof_medias {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 付款申请材料
| proof_media_type {data-required data-indent=2} | string | 申请证明材料类型<br/>`WITHDRAWAL_APPLICATION` 枚举值
| proof_media {data-required data-indent=2} | string | 证明材料照片
| additional_materials {data-indent=1} | string[] | 其他补充材料
| remark {data-indent=1} | string | 备注
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->account->applyCancelWithdraw->postAsync([
  'json' => [
    'sub_mchid'            => '1900000109',
    'out_request_no'       => 'P202410241010125346',
    'withdraw'             => 'APPLY_WITHDRAW',
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
    'proof_medias'         => [[
      'proof_media_type' => 'WITHDRAWAL_APPLICATION',
      'proof_media'      => 'jTpGmxUX3FBWVQ5NJTZvlKXQ',
    ],],
    'additional_materials' => ['jTpGmxUX3FBWVQ5NFQ'],
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
$instance->chain('v3/ecommerce/account/apply-cancel-withdraw')->postAsync([
  'json' => [
    'sub_mchid'            => '1900000109',
    'out_request_no'       => 'P202410241010125346',
    'withdraw'             => 'APPLY_WITHDRAW',
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
    'proof_medias'         => [[
      'proof_media_type' => 'WITHDRAWAL_APPLICATION',
      'proof_media'      => 'jTpGmxUX3FBWVQ5NJTZvlKXQ',
    ],],
    'additional_materials' => ['jTpGmxUX3FBWVQ5NFQ'],
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
$instance['v3/ecommerce/account/apply-cancel-withdraw']->postAsync([
  'json' => [
    'sub_mchid'            => '1900000109',
    'out_request_no'       => 'P202410241010125346',
    'withdraw'             => 'APPLY_WITHDRAW',
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
    'proof_medias'         => [[
      'proof_media_type' => 'WITHDRAWAL_APPLICATION',
      'proof_media'      => 'jTpGmxUX3FBWVQ5NJTZvlKXQ',
    ],],
    'additional_materials' => ['jTpGmxUX3FBWVQ5NFQ'],
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
$response = $instance->v3->ecommerce->account->applyCancelWithdraw->post([
  'json' => [
    'sub_mchid'            => '1900000109',
    'out_request_no'       => 'P202410241010125346',
    'withdraw'             => 'APPLY_WITHDRAW',
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
    'proof_medias'         => [[
      'proof_media_type' => 'WITHDRAWAL_APPLICATION',
      'proof_media'      => 'jTpGmxUX3FBWVQ5NJTZvlKXQ',
    ],],
    'additional_materials' => ['jTpGmxUX3FBWVQ5NFQ'],
    'remark'               => '特殊理由',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/account/apply-cancel-withdraw')->post([
  'json' => [
    'sub_mchid'            => '1900000109',
    'out_request_no'       => 'P202410241010125346',
    'withdraw'             => 'APPLY_WITHDRAW',
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
    'proof_medias'         => [[
      'proof_media_type' => 'WITHDRAWAL_APPLICATION',
      'proof_media'      => 'jTpGmxUX3FBWVQ5NJTZvlKXQ',
    ],],
    'additional_materials' => ['jTpGmxUX3FBWVQ5NFQ'],
    'remark'               => '特殊理由',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/account/apply-cancel-withdraw']->post([
  'json' => [
    'sub_mchid'            => '1900000109',
    'out_request_no'       => 'P202410241010125346',
    'withdraw'             => 'APPLY_WITHDRAW',
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
    'proof_medias'         => [[
      'proof_media_type' => 'WITHDRAWAL_APPLICATION',
      'proof_media'      => 'jTpGmxUX3FBWVQ5NJTZvlKXQ',
    ],],
    'additional_materials' => ['jTpGmxUX3FBWVQ5NFQ'],
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
| applyment_id | string | 微信支付注销提现申请单号
| out_request_no | string | 商户注销提现申请单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013892756)
