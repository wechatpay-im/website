---
title: 设置风险通知回调链接
description: 设置通知回调链接，当支付风险能力平台有事件通知时，通过该链接通知银行或者渠道服务商。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| mch_id {data-indent=1} | string | 服务商号
| callback_url {data-indent=1} | string | 回调链接
| sign_type {data-indent=1} | string | 签名类型

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->mchrisk->setmchriskcallback->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'callback_url' => 'https://pay.weixin.qq.com/wxpay/risk.action',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/mchrisk/setmchriskcallback')->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'callback_url' => 'https://pay.weixin.qq.com/wxpay/risk.action',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/mchrisk/setmchriskcallback']->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'callback_url' => 'https://pay.weixin.qq.com/wxpay/risk.action',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->mchrisk->setmchriskcallback->post([
  'xml' => [
    'mch_id' => '1900000109',
    'callback_url' => 'https://pay.weixin.qq.com/wxpay/risk.action',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/mchrisk/setmchriskcallback')->post([
  'xml' => [
    'mch_id' => '1900000109',
    'callback_url' => 'https://pay.weixin.qq.com/wxpay/risk.action',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/mchrisk/setmchriskcallback']->post([
  'xml' => [
    'mch_id' => '1900000109',
    'callback_url' => 'https://pay.weixin.qq.com/wxpay/risk.action',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code | string | 返回状态码
| return_msg | string | 返回信息
| mch_id | string | 服务商号
| result_code | string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/mch_bank.php?chapter=9_294)
