---
title: 修改结算帐号
description: 修改结算帐号API
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 特约商户号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| modify_mode {data-indent=1} | string | 修改模式<br/>`MODIFY_MODE_ASYNC` 枚举值
| account_type {data-required data-indent=1} | string | 账户类型<br/>`ACCOUNT_TYPE_BUSINESS` \| `ACCOUNT_TYPE_PRIVATE` 枚举值之一
| account_bank {data-required data-indent=1} | string | 开户银行
| bank_address_code {data-required data-indent=1} | string | 开户银行省市编码
| bank_name {data-indent=1} | string | 开户银行全称（含支行）
| bank_branch_id {data-indent=1} | string | 开户银行联行号
| account_number {data-required data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 银行账号
| account_name {data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 开户名称
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->apply4sub->sub_merchants->_sub_mchid_->modifySettlement->postAsync([
  'sub_mchid' => '1900006491',
  'json' => [
    'modify_mode'       => 'MODIFY_MODE_ASYNC',
    'account_type'      => 'ACCOUNT_TYPE_BUSINESS',
    'account_bank'      => '工商银行',
    'bank_address_code' => '110000',
    'bank_name'         => '中国工商银行股份有限公司北京市分行营业部',
    'bank_branch_id'    => '402713354941',
    'account_number'    => 'ciphertext',
    'account_name'      => 'ciphertext',
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
$instance->chain('v3/apply4sub/sub_merchants/{sub_mchid}/modify-settlement')->postAsync([
  'sub_mchid' => '1900006491',
  'json' => [
    'modify_mode'       => 'MODIFY_MODE_ASYNC',
    'account_type'      => 'ACCOUNT_TYPE_BUSINESS',
    'account_bank'      => '工商银行',
    'bank_address_code' => '110000',
    'bank_name'         => '中国工商银行股份有限公司北京市分行营业部',
    'bank_branch_id'    => '402713354941',
    'account_number'    => 'ciphertext',
    'account_name'      => 'ciphertext',
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
$instance['v3/apply4sub/sub_merchants/{sub_mchid}/modify-settlement']->postAsync([
  'sub_mchid' => '1900006491',
  'json' => [
    'modify_mode'       => 'MODIFY_MODE_ASYNC',
    'account_type'      => 'ACCOUNT_TYPE_BUSINESS',
    'account_bank'      => '工商银行',
    'bank_address_code' => '110000',
    'bank_name'         => '中国工商银行股份有限公司北京市分行营业部',
    'bank_branch_id'    => '402713354941',
    'account_number'    => 'ciphertext',
    'account_name'      => 'ciphertext',
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
$response = $instance->v3->apply4sub->sub_merchants->_sub_mchid_->modifySettlement->post([
  'sub_mchid' => '1900006491',
  'json' => [
    'modify_mode'       => 'MODIFY_MODE_ASYNC',
    'account_type'      => 'ACCOUNT_TYPE_BUSINESS',
    'account_bank'      => '工商银行',
    'bank_address_code' => '110000',
    'bank_name'         => '中国工商银行股份有限公司北京市分行营业部',
    'bank_branch_id'    => '402713354941',
    'account_number'    => 'ciphertext',
    'account_name'      => 'ciphertext',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/apply4sub/sub_merchants/{sub_mchid}/modify-settlement')->post([
  'sub_mchid' => '1900006491',
  'json' => [
    'modify_mode'       => 'MODIFY_MODE_ASYNC',
    'account_type'      => 'ACCOUNT_TYPE_BUSINESS',
    'account_bank'      => '工商银行',
    'bank_address_code' => '110000',
    'bank_name'         => '中国工商银行股份有限公司北京市分行营业部',
    'bank_branch_id'    => '402713354941',
    'account_number'    => 'ciphertext',
    'account_name'      => 'ciphertext',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/apply4sub/sub_merchants/{sub_mchid}/modify-settlement']->post([
  'sub_mchid' => '1900006491',
  'json' => [
    'modify_mode'       => 'MODIFY_MODE_ASYNC',
    'account_type'      => 'ACCOUNT_TYPE_BUSINESS',
    'account_bank'      => '工商银行',
    'bank_address_code' => '110000',
    'bank_name'         => '中国工商银行股份有限公司北京市分行营业部',
    'bank_branch_id'    => '402713354941',
    'account_number'    => 'ciphertext',
    'account_name'      => 'ciphertext',
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
| application_no {data-required} | string | 修改结算账户申请单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012761138) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012761102) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012721277) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012760618)
