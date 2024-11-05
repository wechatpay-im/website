---
title: 提交升级申请单
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| version {data-indent=1} | string | 接口版本号
| mch_id {data-indent=1} | string | 商户号
| sign_type {data-indent=1} | string | 签名类型
| cert_sn {data-indent=1} | string | 平台证书序列号
| sub_mch_id {data-indent=1} | string | 小微商户号
| organization_type {data-indent=1} | string | 主体类型
| business_license_copy {data-indent=1} | string | 营业执照扫描件
| business_license_number {data-indent=1} | string | 营业执照注册号
| merchant_name {data-indent=1} | string | 商户名称
| company_address {data-indent=1} | string | 注册地址
| legal_person {data-indent=1} | string | 经营者姓名/法定代表人
| business_time {data-indent=1} | string | 营业期限
| business_licence_type {data-indent=1} | string | 营业执照类型
| organization_copy {data-indent=1} | string | 组织机构代码证照片
| organization_number {data-indent=1} | string | 组织机构代码
| organization_time {data-indent=1} | string | 组织机构代码有效期限
| account_name {data-indent=1} | string | 开户名称
| account_bank {data-indent=1} | string | 开户银行
| bank_address_code {data-indent=1} | string | 开户银行省市编码
| bank_name {data-indent=1} | string | 开户银行全称(含支行)17家直连银行无需填写，其他银行请务必填写
| account_number {data-indent=1} | string | 银行卡号
| merchant_shortname {data-indent=1} | string | 商户简称
| business {data-indent=1} | string | 费率结算规则ID
| qualifications {data-indent=1} | string | 特殊资质
| business_scene {data-indent=1} | string | 经营场景
| business_addition_desc {data-indent=1} | string | 补充说明
| business_addition_pics {data-indent=1} | string | 补充材料
| contact_email {data-indent=1} | string | 联系邮箱
| security | boolean | 声明加载商户API证书<br/>固定值`true`

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->applyment->micro->submitupgrade->postAsync([
  'xml' => [
    'version' => '1.0',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'cert_sn' => '5663476TEREGD45FH63GDFHFG657FCHBFG',
    'sub_mch_id' => '1230000109',
    'organization_type' => '2',
    'business_license_copy' => '',
    'business_license_number' => '123456789012345',
    'merchant_name' => '深圳腾讯科技有限公司',
    'company_address' => '深圳市腾讯大厦',
    'legal_person' => '',
    'business_time' => '["1970-01-01","长期"]',
    'business_licence_type' => '1762',
    'organization_copy' => '',
    'organization_number' => '1234567-1',
    'organization_time' => '["1970-01-01","长期"]',
    'account_name' => '',
    'account_bank' => '工商银行',
    'bank_address_code' => '11000',
    'bank_name' => '深圳农村商业银行xxx支行',
    'account_number' => '',
    'merchant_shortname' => '',
    'business' => '',
    'qualifications' => '["xxx","xxx"]',
    'business_scene' => '[1721]',
    'business_addition_desc' => '',
    'business_addition_pics' => '["123","456"]',
    'contact_email' => '123@qq.com',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/applyment/micro/submitupgrade')->postAsync([
  'xml' => [
    'version' => '1.0',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'cert_sn' => '5663476TEREGD45FH63GDFHFG657FCHBFG',
    'sub_mch_id' => '1230000109',
    'organization_type' => '2',
    'business_license_copy' => '',
    'business_license_number' => '123456789012345',
    'merchant_name' => '深圳腾讯科技有限公司',
    'company_address' => '深圳市腾讯大厦',
    'legal_person' => '',
    'business_time' => '["1970-01-01","长期"]',
    'business_licence_type' => '1762',
    'organization_copy' => '',
    'organization_number' => '1234567-1',
    'organization_time' => '["1970-01-01","长期"]',
    'account_name' => '',
    'account_bank' => '工商银行',
    'bank_address_code' => '11000',
    'bank_name' => '深圳农村商业银行xxx支行',
    'account_number' => '',
    'merchant_shortname' => '',
    'business' => '',
    'qualifications' => '["xxx","xxx"]',
    'business_scene' => '[1721]',
    'business_addition_desc' => '',
    'business_addition_pics' => '["123","456"]',
    'contact_email' => '123@qq.com',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/applyment/micro/submitupgrade']->postAsync([
  'xml' => [
    'version' => '1.0',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'cert_sn' => '5663476TEREGD45FH63GDFHFG657FCHBFG',
    'sub_mch_id' => '1230000109',
    'organization_type' => '2',
    'business_license_copy' => '',
    'business_license_number' => '123456789012345',
    'merchant_name' => '深圳腾讯科技有限公司',
    'company_address' => '深圳市腾讯大厦',
    'legal_person' => '',
    'business_time' => '["1970-01-01","长期"]',
    'business_licence_type' => '1762',
    'organization_copy' => '',
    'organization_number' => '1234567-1',
    'organization_time' => '["1970-01-01","长期"]',
    'account_name' => '',
    'account_bank' => '工商银行',
    'bank_address_code' => '11000',
    'bank_name' => '深圳农村商业银行xxx支行',
    'account_number' => '',
    'merchant_shortname' => '',
    'business' => '',
    'qualifications' => '["xxx","xxx"]',
    'business_scene' => '[1721]',
    'business_addition_desc' => '',
    'business_addition_pics' => '["123","456"]',
    'contact_email' => '123@qq.com',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->applyment->micro->submitupgrade->post([
  'xml' => [
    'version' => '1.0',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'cert_sn' => '5663476TEREGD45FH63GDFHFG657FCHBFG',
    'sub_mch_id' => '1230000109',
    'organization_type' => '2',
    'business_license_copy' => '',
    'business_license_number' => '123456789012345',
    'merchant_name' => '深圳腾讯科技有限公司',
    'company_address' => '深圳市腾讯大厦',
    'legal_person' => '',
    'business_time' => '["1970-01-01","长期"]',
    'business_licence_type' => '1762',
    'organization_copy' => '',
    'organization_number' => '1234567-1',
    'organization_time' => '["1970-01-01","长期"]',
    'account_name' => '',
    'account_bank' => '工商银行',
    'bank_address_code' => '11000',
    'bank_name' => '深圳农村商业银行xxx支行',
    'account_number' => '',
    'merchant_shortname' => '',
    'business' => '',
    'qualifications' => '["xxx","xxx"]',
    'business_scene' => '[1721]',
    'business_addition_desc' => '',
    'business_addition_pics' => '["123","456"]',
    'contact_email' => '123@qq.com',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/applyment/micro/submitupgrade')->post([
  'xml' => [
    'version' => '1.0',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'cert_sn' => '5663476TEREGD45FH63GDFHFG657FCHBFG',
    'sub_mch_id' => '1230000109',
    'organization_type' => '2',
    'business_license_copy' => '',
    'business_license_number' => '123456789012345',
    'merchant_name' => '深圳腾讯科技有限公司',
    'company_address' => '深圳市腾讯大厦',
    'legal_person' => '',
    'business_time' => '["1970-01-01","长期"]',
    'business_licence_type' => '1762',
    'organization_copy' => '',
    'organization_number' => '1234567-1',
    'organization_time' => '["1970-01-01","长期"]',
    'account_name' => '',
    'account_bank' => '工商银行',
    'bank_address_code' => '11000',
    'bank_name' => '深圳农村商业银行xxx支行',
    'account_number' => '',
    'merchant_shortname' => '',
    'business' => '',
    'qualifications' => '["xxx","xxx"]',
    'business_scene' => '[1721]',
    'business_addition_desc' => '',
    'business_addition_pics' => '["123","456"]',
    'contact_email' => '123@qq.com',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/applyment/micro/submitupgrade']->post([
  'xml' => [
    'version' => '1.0',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'cert_sn' => '5663476TEREGD45FH63GDFHFG657FCHBFG',
    'sub_mch_id' => '1230000109',
    'organization_type' => '2',
    'business_license_copy' => '',
    'business_license_number' => '123456789012345',
    'merchant_name' => '深圳腾讯科技有限公司',
    'company_address' => '深圳市腾讯大厦',
    'legal_person' => '',
    'business_time' => '["1970-01-01","长期"]',
    'business_licence_type' => '1762',
    'organization_copy' => '',
    'organization_number' => '1234567-1',
    'organization_time' => '["1970-01-01","长期"]',
    'account_name' => '',
    'account_bank' => '工商银行',
    'bank_address_code' => '11000',
    'bank_name' => '深圳农村商业银行xxx支行',
    'account_number' => '',
    'merchant_shortname' => '',
    'business' => '',
    'qualifications' => '["xxx","xxx"]',
    'business_scene' => '[1721]',
    'business_addition_desc' => '',
    'business_addition_pics' => '["123","456"]',
    'contact_email' => '123@qq.com',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code | string | 返回状态码
| return_msg | string | 返回信息
| nonce_str | string | 随机字符串
| sign | string | 签名
| result_code | string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| err_param | string | 参数校验不通过的字段名

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=28_2&index=2)
