---
title: 事后-风险商户处理结果同步接口
description: 商户收到微信发送的商户风险交易推送后，调用该接口回传风险商户详细信息.
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| security {data-required} | `true` | 声明加载商户API证书
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| mch_id {data-required data-indent=1} | string | 服务商号
| sub_mch_id {data-required data-indent=1} | string | 商户ID
| event_code {data-required data-indent=1} | string | 事件单号
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
| risk_type {data-required data-indent=1} | string | 风险类型
| punish_type {data-required data-indent=1} | string | 处罚方式
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->mchrisk->syncmchriskresult->postAsync([
  'security' => true,
  'xml' => [
    'mch_id'                  => '1900000109',
    'sub_mch_id'              => '1230000109',
    'event_code'              => '123456123',
    'certificates_number'     => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'certificates_name'       => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_no'      => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_name'    => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_bank'    => '招商银行科技园支行',
    'business_license_number' => '00110105MA00BE3C1W',
    'company_name'            => 'XXXXX有限公司',
    'store_address'           => '广东省深圳市南山区深南大道10000号',
    'store_longitude'         => '22.5461478801',
    'store_latitude'          => '113.9410519639',
    'risk_type'               => 'GAMBLING,SEXYCHEATTRANSACTION_DISPUTESONE_YUAN_BUYMULTILEVEL_DISTRIBUTION_REBATEOTHERNO_ABNORMALITIES',
    'punish_type'             => 'CLOSE_PAY_PERMISSIONEXTEND_SETTLEMENT_CYCLECLOSE_WITHDRAW_CASHCLEAN_UPOTHER',
    'sign_type'               => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/mchrisk/syncmchriskresult')->postAsync([
  'security' => true,
  'xml' => [
    'mch_id'                  => '1900000109',
    'sub_mch_id'              => '1230000109',
    'event_code'              => '123456123',
    'certificates_number'     => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'certificates_name'       => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_no'      => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_name'    => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_bank'    => '招商银行科技园支行',
    'business_license_number' => '00110105MA00BE3C1W',
    'company_name'            => 'XXXXX有限公司',
    'store_address'           => '广东省深圳市南山区深南大道10000号',
    'store_longitude'         => '22.5461478801',
    'store_latitude'          => '113.9410519639',
    'risk_type'               => 'GAMBLING,SEXYCHEATTRANSACTION_DISPUTESONE_YUAN_BUYMULTILEVEL_DISTRIBUTION_REBATEOTHERNO_ABNORMALITIES',
    'punish_type'             => 'CLOSE_PAY_PERMISSIONEXTEND_SETTLEMENT_CYCLECLOSE_WITHDRAW_CASHCLEAN_UPOTHER',
    'sign_type'               => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/mchrisk/syncmchriskresult']->postAsync([
  'security' => true,
  'xml' => [
    'mch_id'                  => '1900000109',
    'sub_mch_id'              => '1230000109',
    'event_code'              => '123456123',
    'certificates_number'     => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'certificates_name'       => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_no'      => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_name'    => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_bank'    => '招商银行科技园支行',
    'business_license_number' => '00110105MA00BE3C1W',
    'company_name'            => 'XXXXX有限公司',
    'store_address'           => '广东省深圳市南山区深南大道10000号',
    'store_longitude'         => '22.5461478801',
    'store_latitude'          => '113.9410519639',
    'risk_type'               => 'GAMBLING,SEXYCHEATTRANSACTION_DISPUTESONE_YUAN_BUYMULTILEVEL_DISTRIBUTION_REBATEOTHERNO_ABNORMALITIES',
    'punish_type'             => 'CLOSE_PAY_PERMISSIONEXTEND_SETTLEMENT_CYCLECLOSE_WITHDRAW_CASHCLEAN_UPOTHER',
    'sign_type'               => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->mchrisk->syncmchriskresult->post([
  'security' => true,
  'xml' => [
    'mch_id'                  => '1900000109',
    'sub_mch_id'              => '1230000109',
    'event_code'              => '123456123',
    'certificates_number'     => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'certificates_name'       => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_no'      => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_name'    => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_bank'    => '招商银行科技园支行',
    'business_license_number' => '00110105MA00BE3C1W',
    'company_name'            => 'XXXXX有限公司',
    'store_address'           => '广东省深圳市南山区深南大道10000号',
    'store_longitude'         => '22.5461478801',
    'store_latitude'          => '113.9410519639',
    'risk_type'               => 'GAMBLING,SEXYCHEATTRANSACTION_DISPUTESONE_YUAN_BUYMULTILEVEL_DISTRIBUTION_REBATEOTHERNO_ABNORMALITIES',
    'punish_type'             => 'CLOSE_PAY_PERMISSIONEXTEND_SETTLEMENT_CYCLECLOSE_WITHDRAW_CASHCLEAN_UPOTHER',
    'sign_type'               => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/mchrisk/syncmchriskresult')->post([
  'security' => true,
  'xml' => [
    'mch_id'                  => '1900000109',
    'sub_mch_id'              => '1230000109',
    'event_code'              => '123456123',
    'certificates_number'     => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'certificates_name'       => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_no'      => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_name'    => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_bank'    => '招商银行科技园支行',
    'business_license_number' => '00110105MA00BE3C1W',
    'company_name'            => 'XXXXX有限公司',
    'store_address'           => '广东省深圳市南山区深南大道10000号',
    'store_longitude'         => '22.5461478801',
    'store_latitude'          => '113.9410519639',
    'risk_type'               => 'GAMBLING,SEXYCHEATTRANSACTION_DISPUTESONE_YUAN_BUYMULTILEVEL_DISTRIBUTION_REBATEOTHERNO_ABNORMALITIES',
    'punish_type'             => 'CLOSE_PAY_PERMISSIONEXTEND_SETTLEMENT_CYCLECLOSE_WITHDRAW_CASHCLEAN_UPOTHER',
    'sign_type'               => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/mchrisk/syncmchriskresult']->post([
  'security' => true,
  'xml' => [
    'mch_id'                  => '1900000109',
    'sub_mch_id'              => '1230000109',
    'event_code'              => '123456123',
    'certificates_number'     => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'certificates_name'       => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_no'      => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_name'    => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'settlement_card_bank'    => '招商银行科技园支行',
    'business_license_number' => '00110105MA00BE3C1W',
    'company_name'            => 'XXXXX有限公司',
    'store_address'           => '广东省深圳市南山区深南大道10000号',
    'store_longitude'         => '22.5461478801',
    'store_latitude'          => '113.9410519639',
    'risk_type'               => 'GAMBLING,SEXYCHEATTRANSACTION_DISPUTESONE_YUAN_BUYMULTILEVEL_DISTRIBUTION_REBATEOTHERNO_ABNORMALITIES',
    'punish_type'             => 'CLOSE_PAY_PERMISSIONEXTEND_SETTLEMENT_CYCLECLOSE_WITHDRAW_CASHCLEAN_UPOTHER',
    'sign_type'               => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v2/institution/4011986435)
