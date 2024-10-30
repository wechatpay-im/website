---
title: 查询子商户（融合钱包）
description: 用于机构查询子商户创建是否成功，接口只提供单个子商户信息查询。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://api.mch.weixin.qq.com/hk/`(国内接入)
| sub_mchid | string | 子商户号
| query | object | 声明请求的查询参数
| sp_appid {data-indent=1} | string | 机构appid
| sp_mchid {data-indent=1} | string | 机构商户号

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
| sub_mchid | string | 子商户号
| name | string | 子商户全称
| shortname | string | 子商户简称
| office_phone | string | 公司联系方式
| merchant_country_code | string | 册国家或区域
| business_category | integer | 类目
| contact | object | 联系人信息
| name {data-indent=1} | string | 联系人名称
| phone {data-indent=1} | string | 联系人电话
| email {data-indent=1} | string | 联系人邮箱
| merchant_type | string | 商户类型
| registration_certificate_number | string | 公司注册文件编号
| registration_certificate_date | string | 公司注册文件过期时间
| settlement_bank_number | string | 子商户结算账户
| business | object | 业务信息
| business_type {data-indent=1} | string | 业务类型
| app_download {data-indent=1} | string | APP下载地址
| website {data-indent=1} | string | 业务网站
| office_account {data-indent=1} | string | 公众号
| mini_program {data-indent=1} | string | 小程序
| store_address {data-indent=1} | string | 门店地址
| mcc {data-indent=1} | string | MCC码
| director | object | 董事信息
| name {data-indent=1} | string | 董事姓名
| number {data-indent=1} | string | 董事证件号码
| principal | object | 负责人信息
| name {data-indent=1} | string | 负责人姓名
| number {data-indent=1} | string | 负责人证件号码

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay/ch/Onborading_Sub_Merchant/chapter3_2.shtml)
