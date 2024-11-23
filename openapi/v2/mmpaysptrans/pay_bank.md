---
title: 企业付款到银行卡
description: 企业付款业务是基于微信支付商户平台的资金管理能力，为了协助商户方便地实现企业向银行卡付款，针对部分有开发能力的商户，提供通过API完成企业付款到银行卡的功能。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| mch_id {data-required data-indent=1} | string | 商户号
| partner_trade_no {data-required data-indent=1} | string | 商户企业付款单号
| enc_bank_no {data-required data-indent=1} | string | 收款方银行卡号
| enc_true_name {data-required data-indent=1} | string | 收款方用户名
| bank_code {data-required data-indent=1} | string | 收款方开户行
| amount {data-required data-indent=1} | integer | 付款金额
| desc {data-indent=1} | string | 付款说明
| security {data-required} | `true` | 声明加载商户API证书

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->mmpaysptrans->pay_bank->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'partner_trade_no' => '1212121221227',
    'enc_bank_no' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'enc_true_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'bank_code' => '1001',
    'amount' => '100000',
    'desc' => '理财',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/mmpaysptrans/pay_bank')->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'partner_trade_no' => '1212121221227',
    'enc_bank_no' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'enc_true_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'bank_code' => '1001',
    'amount' => '100000',
    'desc' => '理财',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/mmpaysptrans/pay_bank']->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'partner_trade_no' => '1212121221227',
    'enc_bank_no' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'enc_true_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'bank_code' => '1001',
    'amount' => '100000',
    'desc' => '理财',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->mmpaysptrans->pay_bank->post([
  'xml' => [
    'mch_id' => '1900000109',
    'partner_trade_no' => '1212121221227',
    'enc_bank_no' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'enc_true_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'bank_code' => '1001',
    'amount' => '100000',
    'desc' => '理财',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/mmpaysptrans/pay_bank')->post([
  'xml' => [
    'mch_id' => '1900000109',
    'partner_trade_no' => '1212121221227',
    'enc_bank_no' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'enc_true_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'bank_code' => '1001',
    'amount' => '100000',
    'desc' => '理财',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/mmpaysptrans/pay_bank']->post([
  'xml' => [
    'mch_id' => '1900000109',
    'partner_trade_no' => '1212121221227',
    'enc_bank_no' => '8609cb22e1774a50a930e414cc71eca06121bcd266335cda230d24a7886a8d9f',
    'enc_true_name' => 'ca775af5f841bdf424b2e6eb86a6e21e',
    'bank_code' => '1001',
    'amount' => '100000',
    'desc' => '理财',
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
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| mch_id {data-required}| string | 商户号
| partner_trade_no {data-required}| string | 商户企业付款单号
| amount {data-required}| integer | 代付金额
| nonce_str {data-required}| string | 随机字符串
| sign {data-required}| string | 签名
| payment_no {data-required}| string | 微信企业付款单号
| cmms_amt {data-required}| integer | 手续费金额

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay.php?chapter=24_2)
