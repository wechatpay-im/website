---
title: 事后-风险商户处理结果同步接口
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| mch_id {data-indent=1} | string | 服务商号
| sub_mch_id {data-indent=1} | string | 商户ID
| event_code {data-indent=1} | string | 事件单号
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
| risk_type {data-indent=1} | string | 风险类型
| punish_type {data-indent=1} | string | 处罚方式
| sign_type {data-indent=1} | string | 签名类型
| security | boolean | 声明加载商户API证书<br/>固定值`true`

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->mchrisk->syncmchriskresult->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '1230000109',
    'event_code' => '123456123',
    'certificates_number' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'certificates_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_no' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_bank' => '招商银行科技园支行',
    'business_license_number' => '00110105MA00BE3C1W',
    'company_name' => 'XXXXX有限公司',
    'store_address' => '广东省深圳市南山区深南大道10000号',
    'store_longitude' => '22.5461478801',
    'store_latitude' => '113.9410519639',
    'risk_type' => 'GAMBLING,SEXYCHEATTRANSACTION_DISPUTESONE_YUAN_BUYMULTILEVEL_DISTRIBUTION_REBATEOTHERNO_ABNORMALITIES',
    'punish_type' => 'CLOSE_PAY_PERMISSIONEXTEND_SETTLEMENT_CYCLECLOSE_WITHDRAW_CASHCLEAN_UPOTHER',
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
$instance->chain('v2/mchrisk/syncmchriskresult')->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '1230000109',
    'event_code' => '123456123',
    'certificates_number' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'certificates_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_no' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_bank' => '招商银行科技园支行',
    'business_license_number' => '00110105MA00BE3C1W',
    'company_name' => 'XXXXX有限公司',
    'store_address' => '广东省深圳市南山区深南大道10000号',
    'store_longitude' => '22.5461478801',
    'store_latitude' => '113.9410519639',
    'risk_type' => 'GAMBLING,SEXYCHEATTRANSACTION_DISPUTESONE_YUAN_BUYMULTILEVEL_DISTRIBUTION_REBATEOTHERNO_ABNORMALITIES',
    'punish_type' => 'CLOSE_PAY_PERMISSIONEXTEND_SETTLEMENT_CYCLECLOSE_WITHDRAW_CASHCLEAN_UPOTHER',
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
$instance['v2/mchrisk/syncmchriskresult']->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '1230000109',
    'event_code' => '123456123',
    'certificates_number' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'certificates_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_no' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_bank' => '招商银行科技园支行',
    'business_license_number' => '00110105MA00BE3C1W',
    'company_name' => 'XXXXX有限公司',
    'store_address' => '广东省深圳市南山区深南大道10000号',
    'store_longitude' => '22.5461478801',
    'store_latitude' => '113.9410519639',
    'risk_type' => 'GAMBLING,SEXYCHEATTRANSACTION_DISPUTESONE_YUAN_BUYMULTILEVEL_DISTRIBUTION_REBATEOTHERNO_ABNORMALITIES',
    'punish_type' => 'CLOSE_PAY_PERMISSIONEXTEND_SETTLEMENT_CYCLECLOSE_WITHDRAW_CASHCLEAN_UPOTHER',
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
$response = $instance->v2->mchrisk->syncmchriskresult->post([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '1230000109',
    'event_code' => '123456123',
    'certificates_number' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'certificates_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_no' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_bank' => '招商银行科技园支行',
    'business_license_number' => '00110105MA00BE3C1W',
    'company_name' => 'XXXXX有限公司',
    'store_address' => '广东省深圳市南山区深南大道10000号',
    'store_longitude' => '22.5461478801',
    'store_latitude' => '113.9410519639',
    'risk_type' => 'GAMBLING,SEXYCHEATTRANSACTION_DISPUTESONE_YUAN_BUYMULTILEVEL_DISTRIBUTION_REBATEOTHERNO_ABNORMALITIES',
    'punish_type' => 'CLOSE_PAY_PERMISSIONEXTEND_SETTLEMENT_CYCLECLOSE_WITHDRAW_CASHCLEAN_UPOTHER',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/mchrisk/syncmchriskresult')->post([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '1230000109',
    'event_code' => '123456123',
    'certificates_number' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'certificates_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_no' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_bank' => '招商银行科技园支行',
    'business_license_number' => '00110105MA00BE3C1W',
    'company_name' => 'XXXXX有限公司',
    'store_address' => '广东省深圳市南山区深南大道10000号',
    'store_longitude' => '22.5461478801',
    'store_latitude' => '113.9410519639',
    'risk_type' => 'GAMBLING,SEXYCHEATTRANSACTION_DISPUTESONE_YUAN_BUYMULTILEVEL_DISTRIBUTION_REBATEOTHERNO_ABNORMALITIES',
    'punish_type' => 'CLOSE_PAY_PERMISSIONEXTEND_SETTLEMENT_CYCLECLOSE_WITHDRAW_CASHCLEAN_UPOTHER',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/mchrisk/syncmchriskresult']->post([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '1230000109',
    'event_code' => '123456123',
    'certificates_number' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'certificates_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_no' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_bank' => '招商银行科技园支行',
    'business_license_number' => '00110105MA00BE3C1W',
    'company_name' => 'XXXXX有限公司',
    'store_address' => '广东省深圳市南山区深南大道10000号',
    'store_longitude' => '22.5461478801',
    'store_latitude' => '113.9410519639',
    'risk_type' => 'GAMBLING,SEXYCHEATTRANSACTION_DISPUTESONE_YUAN_BUYMULTILEVEL_DISTRIBUTION_REBATEOTHERNO_ABNORMALITIES',
    'punish_type' => 'CLOSE_PAY_PERMISSIONEXTEND_SETTLEMENT_CYCLECLOSE_WITHDRAW_CASHCLEAN_UPOTHER',
    'sign_type' => 'HMAC-SHA256',
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
| result_code | string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/mch_bank.php?chapter=9_291)
