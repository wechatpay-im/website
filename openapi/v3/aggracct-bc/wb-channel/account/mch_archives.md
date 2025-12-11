---
title: 查询商户资料
description: 查询最新商户资料 接口限频：单商户号10次/分钟
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| mchid {data-required data-indent=1} | string | 微信支付商户号
| bal_account_no {data-required data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 额度台账号
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->aggracctBc->wbChannel->account->mch_archives->getAsync([
  'query' => [
    'mchid'          => '1900016681',
    'bal_account_no' => '8609cb22e1774a50a930e414cc71eca06121bc',
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
$instance->chain('v3/aggracct-bc/wb-channel/account/mch_archives')->getAsync([
  'query' => [
    'mchid'          => '1900016681',
    'bal_account_no' => '8609cb22e1774a50a930e414cc71eca06121bc',
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
$instance['v3/aggracct-bc/wb-channel/account/mch_archives']->getAsync([
  'query' => [
    'mchid'          => '1900016681',
    'bal_account_no' => '8609cb22e1774a50a930e414cc71eca06121bc',
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
$response = $instance->v3->aggracctBc->wbChannel->account->mch_archives->get([
  'query' => [
    'mchid'          => '1900016681',
    'bal_account_no' => '8609cb22e1774a50a930e414cc71eca06121bc',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/aggracct-bc/wb-channel/account/mch_archives')->get([
  'query' => [
    'mchid'          => '1900016681',
    'bal_account_no' => '8609cb22e1774a50a930e414cc71eca06121bc',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/aggracct-bc/wb-channel/account/mch_archives']->get([
  'query' => [
    'mchid'          => '1900016681',
    'bal_account_no' => '8609cb22e1774a50a930e414cc71eca06121bc',
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
| mchid | string | 微信支付商户号
| bal_account_no | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 额度台账号
| merchant_type | string | 主体类型<br/>`1` \| `2` 枚举值之一
| merchant_id_type | string | 主体证件类型<br/>`12` 枚举值
| merchant_name | string | 主体证件登记名称
| merchant_id_no | string | 主体证件号码
| effective_date | string | 主体证件有效期起始日
| expire_date | string | 主体证件有效期结束日
| merchant_img_front_id | string | 主体证件正面影像ID
| register_address | string | 主体注册地址
| business_scope | string | 主体经营范围
| legal_representative | object {data-tooltip="对应PHP的array"} | 法定代表人信息
| legal_representative_id_type {data-required data-indent=1} | string | 法定代表人证件类型<br/>`01` 枚举值
| legal_representative_name {data-required data-indent=1} | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 法定代表人姓名
| legal_representative_id_no {data-required data-indent=1} | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 法定代表人证件号码
| legal_representative_effective_date {data-required data-indent=1} | string | 法定代表人证件有效期起始日
| legal_representative_expire_date {data-required data-indent=1} | string | 法定代表人证件有效期结束日
| legal_representative_img_front_id {data-required data-indent=1} | string | 法定代表人证件正面影像ID
| legal_representative_img_back_id {data-required data-indent=1} | string | 法定代表人证件反面影像ID
| legal_representative_address {data-required data-indent=1} | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 法定代表人居住地址
| beneficial_owner | object[] {data-tooltip="对应PHP的array"} | 受益所有人信息列表
| beneficial_owner_no {data-required data-indent=1} | string | 受益所有人编号
| beneficial_owner_id_type {data-required data-indent=1} | string | 受益所有人证件类型<br/>`01` 枚举值
| beneficial_owner_name {data-required data-indent=1} | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 受益所有人姓名
| beneficial_owner_id_no {data-required data-indent=1} | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 受益所有人证件号码
| beneficial_owner_effective_date {data-required data-indent=1} | string | 受益所有人证件有效期起始日
| beneficial_owner_expire_date {data-required data-indent=1} | string | 受益所有人证件有效期结束日
| beneficial_owner_img_front_id {data-required data-indent=1} | string | 受益所有人证件正面影像ID
| beneficial_owner_img_back_id {data-required data-indent=1} | string | 受益所有人证件反面影像ID
| beneficial_owner_address {data-required data-indent=1} | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 受益所有人居住地址

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4016642632)
