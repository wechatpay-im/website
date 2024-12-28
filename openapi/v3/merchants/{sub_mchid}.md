---
title: 查询子商户（融合钱包）
description: 用于机构查询子商户创建是否成功，接口只提供单个子商户信息查询。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

::: warning :beginner: {.im-redesigned}

本接口服务已于 `2022.09.08` (北京时间)发布新版，新接口见[这里](/openapi/v3/global/merchants/{sub_mchid}#get)，此文档仅做留存参考。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri {data-required} | string | 声明接入点`https://api.mch.weixin.qq.com/hk/`(国内接入)
| sub_mchid {data-required} | string | 子商户号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sp_appid {data-required data-indent=1} | string | 机构appid
| sp_mchid {data-required data-indent=1} | string | 机构商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchants->_sub_mchid_->getAsync([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'sub_mchid' => '20000100',
  'query' => [
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchants/{sub_mchid}')->getAsync([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'sub_mchid' => '20000100',
  'query' => [
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchants/{sub_mchid}']->getAsync([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'sub_mchid' => '20000100',
  'query' => [
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchants->_sub_mchid_->get([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'sub_mchid' => '20000100',
  'query' => [
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchants/{sub_mchid}')->get([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'sub_mchid' => '20000100',
  'query' => [
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchants/{sub_mchid}']->get([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'sub_mchid' => '20000100',
  'query' => [
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 子商户号
| name {data-required} | string | 子商户全称
| shortname {data-required} | string | 子商户简称
| office_phone {data-required} | string | 公司联系方式
| merchant_country_code {data-required} | string | 册国家或区域
| business_category {data-required} | integer | 类目
| contact | object {data-tooltip="对应PHP的array"} | 联系人信息
| name {data-indent=1} | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 联系人名称
| phone {data-indent=1} | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 联系人电话
| email {data-indent=1} | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 联系人邮箱
| merchant_type | string | 商户类型<br/>`ENTERPRISE` \| `INDIVIDUAL` 枚举值之一
| registration_certificate_number | string | 公司注册文件编号
| registration_certificate_date | string | 公司注册文件过期时间
| settlement_bank_number | string | 子商户结算账户
| business | object {data-tooltip="对应PHP的array"} | 业务信息
| business_type {data-indent=1} | string | 业务类型<br/>`ONLINE` \| `OFFLINE` \| `BOTH` 枚举值之一
| app_download {data-indent=1} | string | APP下载地址
| website {data-indent=1} | string | 业务网站
| office_account {data-indent=1} | string | 公众号
| mini_program {data-indent=1} | string | 小程序
| store_address {data-indent=1} | string | 门店地址
| mcc {data-indent=1} | string | MCC码
| director | object {data-tooltip="对应PHP的array"} | 董事信息
| name {data-indent=1} | string | 董事姓名
| number {data-indent=1} | string | 董事证件号码
| principal | object {data-tooltip="对应PHP的array"} | 负责人信息
| name {data-indent=1} | string | 负责人姓名
| number {data-indent=1} | string | 负责人证件号码

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay/ch/Onborading_Sub_Merchant/chapter3_2.shtml)
