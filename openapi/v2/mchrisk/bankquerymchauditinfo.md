---
title: 间联模式查询商户审核状态开放接口
description: 为了提升特约商户录入质量，发现并及时中止特约商户风险交易行为，现面向银行服务商开放风险商户数据，支持银行在录入商户前提前核查商户风险、了解风险交易、并且将风险处理结果同步微信支付.用于服务商/银行准入商户时，根据身份证，银行卡号，营业执照等信息查询商户是否有风险。说明：该接口需要提供以下信息至少一种，提供的信息越多，查询结果越准确。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| mch_id {data-required data-indent=1} | string | 服务商号
| sub_mch_id {data-required data-indent=1} | string | 子商户号
| channel_id {data-required data-indent=1} | string | 渠道号
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->mchrisk->bankquerymchauditinfo->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '999990016',
    'channel_id' => '999990017',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/mchrisk/bankquerymchauditinfo')->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '999990016',
    'channel_id' => '999990017',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/mchrisk/bankquerymchauditinfo']->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '999990016',
    'channel_id' => '999990017',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->mchrisk->bankquerymchauditinfo->post([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '999990016',
    'channel_id' => '999990017',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/mchrisk/bankquerymchauditinfo')->post([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '999990016',
    'channel_id' => '999990017',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/mchrisk/bankquerymchauditinfo']->post([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '999990016',
    'channel_id' => '999990017',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required}| string | 返回状态码
| return_msg {data-required}| string | 返回结果
| result_code {data-required}| string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误描述
| mch_id {data-required}| string | 服务商号
| sub_mch_id {data-required}| string | 子商户号
| channel_id {data-required}| string | 渠道号
| audit_status {data-required}| string | 审核状态
| audit_comment {data-required}| string | 审核备注
| nonce_str {data-required}| string | 随机字符串
| sign {data-required}| string | 签名
| sign_type | string | 签名类型<br/>`HMAC-SHA256` 枚举值

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/mch_bank.php?chapter=9_295)
