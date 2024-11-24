---
title: 事前-风险商户核查接口
description: 为了提升特约商户录入质量，发现并及时中止特约商户风险交易行为，现面向银行服务商开放风险商户数据，支持银行在录入商户前提前核查商户风险、了解风险交易、并且将风险处理结果同步微信支付。用于服务商/银行准入商户时，根据身份证，银行卡号，营业执照等信息查询商户是否有风险。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| mch_id {data-required data-indent=1} | string | 服务商号
| cert_serial_number {data-indent=1} | string | 平台证书序列号
| certificates_number {data-indent=1} | string | 身份证号（需加密）
| certificates_name {data-indent=1} | string | 身份证所有人姓名（需加密）
| settlement_card_no {data-indent=1} | string | 结算账号（需加密）
| settlement_card_name {data-indent=1} | string | 结算户名（需加密）
| settlement_card_bank {data-indent=1} | string | 结算银行
| business_license_number {data-indent=1} | string | 营业执照编号（需加密）
| company_name {data-indent=1} | string | 公司名称
| store_address {data-indent=1} | string | 门店地址
| store_longitude {data-indent=1} | string | 门店经度
| store_latitude {data-indent=1} | string | 门店纬度
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值
| security {data-required} | `true` | 声明加载商户API证书

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->mchrisk->querymchrisk->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'cert_serial_number' => 'XXXXX',
    'certificates_number' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'certificates_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_no' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'settlement_card_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_bank' => '招商银行科技园支行',
    'business_license_number' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'company_name' => 'XXXXX有限公司',
    'store_address' => '广东省深圳市南山区深南大道10000号',
    'store_longitude' => '22.5461478801',
    'store_latitude' => '113.9410519639',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/mchrisk/querymchrisk')->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'cert_serial_number' => 'XXXXX',
    'certificates_number' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'certificates_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_no' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'settlement_card_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_bank' => '招商银行科技园支行',
    'business_license_number' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'company_name' => 'XXXXX有限公司',
    'store_address' => '广东省深圳市南山区深南大道10000号',
    'store_longitude' => '22.5461478801',
    'store_latitude' => '113.9410519639',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/mchrisk/querymchrisk']->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'cert_serial_number' => 'XXXXX',
    'certificates_number' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'certificates_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_no' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'settlement_card_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_bank' => '招商银行科技园支行',
    'business_license_number' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'company_name' => 'XXXXX有限公司',
    'store_address' => '广东省深圳市南山区深南大道10000号',
    'store_longitude' => '22.5461478801',
    'store_latitude' => '113.9410519639',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->mchrisk->querymchrisk->post([
  'xml' => [
    'mch_id' => '1900000109',
    'cert_serial_number' => 'XXXXX',
    'certificates_number' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'certificates_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_no' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'settlement_card_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_bank' => '招商银行科技园支行',
    'business_license_number' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'company_name' => 'XXXXX有限公司',
    'store_address' => '广东省深圳市南山区深南大道10000号',
    'store_longitude' => '22.5461478801',
    'store_latitude' => '113.9410519639',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/mchrisk/querymchrisk')->post([
  'xml' => [
    'mch_id' => '1900000109',
    'cert_serial_number' => 'XXXXX',
    'certificates_number' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'certificates_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_no' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'settlement_card_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_bank' => '招商银行科技园支行',
    'business_license_number' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'company_name' => 'XXXXX有限公司',
    'store_address' => '广东省深圳市南山区深南大道10000号',
    'store_longitude' => '22.5461478801',
    'store_latitude' => '113.9410519639',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/mchrisk/querymchrisk']->post([
  'xml' => [
    'mch_id' => '1900000109',
    'cert_serial_number' => 'XXXXX',
    'certificates_number' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'certificates_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_no' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'settlement_card_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_bank' => '招商银行科技园支行',
    'business_license_number' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'company_name' => 'XXXXX有限公司',
    'store_address' => '广东省深圳市南山区深南大道10000号',
    'store_longitude' => '22.5461478801',
    'store_latitude' => '113.9410519639',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required}| string | 返回状态码
| return_msg | string | 返回信息
| result_code {data-required}| string | 业务结果
| mch_id {data-required}| string | 服务商号
| risk_level {data-required}| string | 风险级别
| risk_level_desc {data-required}| string | 风险描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/mch_bank.php?chapter=9_291)
