---
title: 渠道商查询商户审核信息
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| mch_id {data-indent=1} | string | 渠道商号
| sub_mch_id {data-indent=1} | string | 子商户号
| acquiring_bank_id {data-indent=1} | string | 服务商号
| sign_type {data-indent=1} | string | 签名类型

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->mchrisk->channelquerymchauditinfo->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '999990016',
    'acquiring_bank_id' => '999990017',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/mchrisk/channelquerymchauditinfo')->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '999990016',
    'acquiring_bank_id' => '999990017',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/mchrisk/channelquerymchauditinfo']->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '999990016',
    'acquiring_bank_id' => '999990017',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->mchrisk->channelquerymchauditinfo->post([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '999990016',
    'acquiring_bank_id' => '999990017',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/mchrisk/channelquerymchauditinfo')->post([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '999990016',
    'acquiring_bank_id' => '999990017',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/mchrisk/channelquerymchauditinfo']->post([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '999990016',
    'acquiring_bank_id' => '999990017',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code | string | 返回状态码
| return_msg | string | 返回结果
| result_code | string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误描述
| mch_id | string | 服务商号
| sub_mch_id | string | 子商户号
| channel_id | string | 渠道号
| audit_status | string | 审核状态
| audit_comment | string | 审核备注
| nonce_str | string | 随机字符串
| sign | string | 签名
| sign_type | string | 签名类型

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/mch_bank.php?chapter=9_296)
