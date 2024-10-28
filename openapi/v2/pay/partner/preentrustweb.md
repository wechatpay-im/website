---
title: APP纯签约
description: 外部App拉起微信客户端发起签约前，需先后台调用预签约接口完成预签约，获取pre_entrustweb_id，再拉起微信客户端，完成签约，返回App。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| appid {data-indent=1} | string | 应用ID
| mch_id {data-indent=1} | string | 商户号
| sub_appid {data-indent=1} | string | 子商户应用ID
| sub_mch_id {data-indent=1} | string | 子商户号
| plan_id {data-indent=1} | string | 模板id
| contract_code {data-indent=1} | string | 签约协议号
| request_serial {data-indent=1} | integer | 请求序列号
| contract_display_account {data-indent=1} | string | 用户账户展示名称
| notify_url {data-indent=1} | string | 回调通知url
| version {data-indent=1} | string | 版本号
| sign_type {data-indent=1} | string | 签名类型
| timestamp {data-indent=1} | string | 时间戳
| return_app {data-indent=1} | string | 返回app
| nonceless | boolean | 声明请求的`XML`无随机字符串参数<br/>固定值`true`

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->pay->partner->preentrustweb->postAsync([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '1200009811',
    'sub_appid' => 'wxcbda96de0b165489',
    'sub_mch_id' => '1900000109',
    'plan_id' => '12535',
    'contract_code' => '100000',
    'request_serial' => '1000',
    'contract_display_account' => '微信代扣',
    'notify_url' => '',
    'version' => '1.0',
    'sign_type' => 'MD5',
    'timestamp' => '1414488825',
    'return_app' => 'Y',
  ],
  'nonceless' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/pay/partner/preentrustweb')->postAsync([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '1200009811',
    'sub_appid' => 'wxcbda96de0b165489',
    'sub_mch_id' => '1900000109',
    'plan_id' => '12535',
    'contract_code' => '100000',
    'request_serial' => '1000',
    'contract_display_account' => '微信代扣',
    'notify_url' => '',
    'version' => '1.0',
    'sign_type' => 'MD5',
    'timestamp' => '1414488825',
    'return_app' => 'Y',
  ],
  'nonceless' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/pay/partner/preentrustweb']->postAsync([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '1200009811',
    'sub_appid' => 'wxcbda96de0b165489',
    'sub_mch_id' => '1900000109',
    'plan_id' => '12535',
    'contract_code' => '100000',
    'request_serial' => '1000',
    'contract_display_account' => '微信代扣',
    'notify_url' => '',
    'version' => '1.0',
    'sign_type' => 'MD5',
    'timestamp' => '1414488825',
    'return_app' => 'Y',
  ],
  'nonceless' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->pay->partner->preentrustweb->post([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '1200009811',
    'sub_appid' => 'wxcbda96de0b165489',
    'sub_mch_id' => '1900000109',
    'plan_id' => '12535',
    'contract_code' => '100000',
    'request_serial' => '1000',
    'contract_display_account' => '微信代扣',
    'notify_url' => '',
    'version' => '1.0',
    'sign_type' => 'MD5',
    'timestamp' => '1414488825',
    'return_app' => 'Y',
  ],
  'nonceless' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/pay/partner/preentrustweb')->post([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '1200009811',
    'sub_appid' => 'wxcbda96de0b165489',
    'sub_mch_id' => '1900000109',
    'plan_id' => '12535',
    'contract_code' => '100000',
    'request_serial' => '1000',
    'contract_display_account' => '微信代扣',
    'notify_url' => '',
    'version' => '1.0',
    'sign_type' => 'MD5',
    'timestamp' => '1414488825',
    'return_app' => 'Y',
  ],
  'nonceless' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/pay/partner/preentrustweb']->post([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '1200009811',
    'sub_appid' => 'wxcbda96de0b165489',
    'sub_mch_id' => '1900000109',
    'plan_id' => '12535',
    'contract_code' => '100000',
    'request_serial' => '1000',
    'contract_display_account' => '微信代扣',
    'notify_url' => '',
    'version' => '1.0',
    'sign_type' => 'MD5',
    'timestamp' => '1414488825',
    'return_app' => 'Y',
  ],
  'nonceless' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code | string | 返回状态码
| return_msg | string | 返回信息

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay_v2/papay/chapter5_2.shtml)
