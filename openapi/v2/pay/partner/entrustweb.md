---
title: 公众号纯签约
description: 商户可以通过请求此接口唤起微信委托代扣的页面。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object | 声明请求的查询参数
| appid {data-indent=1} | string | 应用ID
| mch_id {data-indent=1} | string | 商户号
| sub_appid {data-indent=1} | string | 子商户应用ID
| sub_mch_id {data-indent=1} | string | 子商户号
| plan_id {data-indent=1} | integer | 模板id
| contract_code {data-indent=1} | string | 签约协议号
| request_serial {data-indent=1} | integer | 请求序列号
| contract_display_account {data-indent=1} | string | 用户账户展示名称
| notify_url {data-indent=1} | string | 回调通知url
| version {data-indent=1} | string | 版本号
| sign {data-indent=1} | string | 签名
| timestamp {data-indent=1} | string | 时间戳
| return_web {data-indent=1} | integer | 返回web

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->pay->partner->entrustweb->getAsync([
  'query' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '1200009811',
    'sub_appid' => 'wxcbda96de0b165489',
    'sub_mch_id' => '1900000109',
    'plan_id' => '12535',
    'contract_code' => '100000',
    'request_serial' => '1000',
    'contract_display_account' => '微信代扣',
    'notify_url' => 'https://weixin.qq.com',
    'version' => '1.0',
    'sign' => 'C380BEC2BFD727A4B6845133519F3AD6',
    'timestamp' => '1414488825',
    'return_web' => '1',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/pay/partner/entrustweb')->getAsync([
  'query' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '1200009811',
    'sub_appid' => 'wxcbda96de0b165489',
    'sub_mch_id' => '1900000109',
    'plan_id' => '12535',
    'contract_code' => '100000',
    'request_serial' => '1000',
    'contract_display_account' => '微信代扣',
    'notify_url' => 'https://weixin.qq.com',
    'version' => '1.0',
    'sign' => 'C380BEC2BFD727A4B6845133519F3AD6',
    'timestamp' => '1414488825',
    'return_web' => '1',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/pay/partner/entrustweb']->getAsync([
  'query' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '1200009811',
    'sub_appid' => 'wxcbda96de0b165489',
    'sub_mch_id' => '1900000109',
    'plan_id' => '12535',
    'contract_code' => '100000',
    'request_serial' => '1000',
    'contract_display_account' => '微信代扣',
    'notify_url' => 'https://weixin.qq.com',
    'version' => '1.0',
    'sign' => 'C380BEC2BFD727A4B6845133519F3AD6',
    'timestamp' => '1414488825',
    'return_web' => '1',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->pay->partner->entrustweb->get([
  'query' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '1200009811',
    'sub_appid' => 'wxcbda96de0b165489',
    'sub_mch_id' => '1900000109',
    'plan_id' => '12535',
    'contract_code' => '100000',
    'request_serial' => '1000',
    'contract_display_account' => '微信代扣',
    'notify_url' => 'https://weixin.qq.com',
    'version' => '1.0',
    'sign' => 'C380BEC2BFD727A4B6845133519F3AD6',
    'timestamp' => '1414488825',
    'return_web' => '1',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/pay/partner/entrustweb')->get([
  'query' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '1200009811',
    'sub_appid' => 'wxcbda96de0b165489',
    'sub_mch_id' => '1900000109',
    'plan_id' => '12535',
    'contract_code' => '100000',
    'request_serial' => '1000',
    'contract_display_account' => '微信代扣',
    'notify_url' => 'https://weixin.qq.com',
    'version' => '1.0',
    'sign' => 'C380BEC2BFD727A4B6845133519F3AD6',
    'timestamp' => '1414488825',
    'return_web' => '1',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/pay/partner/entrustweb']->get([
  'query' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '1200009811',
    'sub_appid' => 'wxcbda96de0b165489',
    'sub_mch_id' => '1900000109',
    'plan_id' => '12535',
    'contract_code' => '100000',
    'request_serial' => '1000',
    'contract_display_account' => '微信代扣',
    'notify_url' => 'https://weixin.qq.com',
    'version' => '1.0',
    'sign' => 'C380BEC2BFD727A4B6845133519F3AD6',
    'timestamp' => '1414488825',
    'return_web' => '1',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay_v2/papay/chapter5_1.shtml)
