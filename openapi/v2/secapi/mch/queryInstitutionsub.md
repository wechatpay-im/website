---
title: 查询子商户
description: 用于机构查询子商户创建是否成功，接口只提供单个子商户信息查询。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| queryinstitutionsub {data-required} | string | 固定值`queryInstitutionsub`
| security {data-required} | `true` | 声明加载商户API证书
| nonceless {data-required} | `true` | 声明请求的`XML`无随机字符串参数
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| app_id {data-required data-indent=1} | string | 机构appid
| mch_id {data-required data-indent=1} | string | 机构商户号
| sub_mch_id {data-required data-indent=1} | string | 子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->secapi->mch->_queryinstitutionsub_->postAsync([
  'queryinstitutionsub' => 'queryInstitutionsub', // 固定参数(URI上有大写字符)
  'security' => true,
  'nonceless' => true,
  'xml' => [
    'app_id'     => 'wx8888888888888888',
    'mch_id'     => '3200000001',
    'sub_mch_id' => '20000100',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/secapi/mch/{queryinstitutionsub}')->postAsync([
  'queryinstitutionsub' => 'queryInstitutionsub', // 固定参数(URI上有大写字符)
  'security' => true,
  'nonceless' => true,
  'xml' => [
    'app_id'     => 'wx8888888888888888',
    'mch_id'     => '3200000001',
    'sub_mch_id' => '20000100',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/secapi/mch/{queryinstitutionsub}']->postAsync([
  'queryinstitutionsub' => 'queryInstitutionsub', // 固定参数(URI上有大写字符)
  'security' => true,
  'nonceless' => true,
  'xml' => [
    'app_id'     => 'wx8888888888888888',
    'mch_id'     => '3200000001',
    'sub_mch_id' => '20000100',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->secapi->mch->_queryinstitutionsub_->post([
  'queryinstitutionsub' => 'queryInstitutionsub', // 固定参数(URI上有大写字符)
  'security' => true,
  'nonceless' => true,
  'xml' => [
    'app_id'     => 'wx8888888888888888',
    'mch_id'     => '3200000001',
    'sub_mch_id' => '20000100',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/secapi/mch/{queryinstitutionsub}')->post([
  'queryinstitutionsub' => 'queryInstitutionsub', // 固定参数(URI上有大写字符)
  'security' => true,
  'nonceless' => true,
  'xml' => [
    'app_id'     => 'wx8888888888888888',
    'mch_id'     => '3200000001',
    'sub_mch_id' => '20000100',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/secapi/mch/{queryinstitutionsub}']->post([
  'queryinstitutionsub' => 'queryInstitutionsub', // 固定参数(URI上有大写字符)
  'security' => true,
  'nonceless' => true,
  'xml' => [
    'app_id'     => 'wx8888888888888888',
    'mch_id'     => '3200000001',
    'sub_mch_id' => '20000100',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| result_code {data-required} | string | 业务返回码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误编码
| err_code_des | string | 错误描述
| sign {data-required} | string | 签名
| sub_mch_id {data-required} | string | 子商户号
| merchant_name {data-required} | string | 子商户名称
| merchant_shortname {data-required} | string | 子商户简称
| merchant_country_code | string | 注册国家或区域
| business_category {data-required} | string | 业务类目
| mcc | string | MCC
| office_phone {data-required} | string | 公司联系电话
| contact_name | string | 联系人姓名
| contact_phone | string | 联系人手机
| contact_email | string | 联系人邮箱
| merchant_remark {data-required} | string | 子商户唯一标识
| business_type | string | 业务类型<br/>`ONLINE` \| `OFFLINE` \| `BOTH` 枚举值之一
| merchant_type | string | 商户类型<br/>`ENTERPRISE` \| `INDIVIDUAL` 枚举值之一
| registration_certificate_number | string | 公司注册文件编号
| registration_certificate_date | string | 公司注册文件过期时间
| app_download | string | APP下载链接
| business_website | string | 业务网站
| office_account | string | 公众号
| mini_program | string | 小程序
| store_address | string | 门店地址
| director_name | string | 董事姓名
| director_id_number | string | 董事证件编号
| principal_name | string | 负责人姓名
| principal_id_number | string | 负责人证件编号
| settlement_bank_number | string | 子商户结算银行账户
| channel_id | string | 渠道编号
| h5_authorization_state | string | H5支付权限状态<br/>`APPROVED` \| `UNAUTHORIZED` \| `UNDER_REVIEW` \| `REJECTED` \| `UNDER_PUNISHMENT` \| `APPLICATION_FAILED` 枚举值之一
| h5_audit_reject_detail | string | H5驳回详情
| sub_mch_status | string | 子商户状态<br/>`OPERATING` \| `PENDING` \| `DEACTIVATED` \| `CLOSED` \| `INCOMPLETE_APPLICATION` 枚举值之一
| application_status | string | 子商户入驻状态<br/>`UNDER_REVIEW` \| `REJECTED` 枚举值之一
| application_reject_detail | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 子商户入驻驳回详情
| {colspan=3 .im-table-line}
| reason {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 驳回原因列表
| field {data-indent=2} | string | 字段
| reason {data-indent=2} | string | 原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay/ch/sub_merchant_entry/chapter3_2.shtml)
