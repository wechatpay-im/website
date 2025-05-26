---
title: 拉取订单评价数据
description: 商户可以通过该接口拉取用户在微信支付交易记录中针对你的支付记录进行的评价内容。商户可结合商户系统逻辑对该内容数据进行存储、分析、展示、客服回访以及其他使用。如商户业务对评价内容有依赖，可主动引导用户进入微信支付交易记录进行评价。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| security {data-required} | `true` | 声明加载商户API证书
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 公众账号ID
| mch_id {data-required data-indent=1} | string | 商户号
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值
| begin_time {data-required data-indent=1} | string | 开始时间
| end_time {data-required data-indent=1} | string | 结束时间
| offset {data-required data-indent=1} | number | 位移
| limit {data-indent=1} | number | 条数

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->billcommentsp->batchquerycomment->postAsync([
  'security' => true,
  'xml' => [
    'appid'      => 'wx8888888888888888',
    'mch_id'     => '1900000109',
    'sign_type'  => 'HMAC-SHA256',
    'begin_time' => '20170724000000',
    'end_time'   => '20170725000000',
    'offset'     => '0',
    'limit'      => '100',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/billcommentsp/batchquerycomment')->postAsync([
  'security' => true,
  'xml' => [
    'appid'      => 'wx8888888888888888',
    'mch_id'     => '1900000109',
    'sign_type'  => 'HMAC-SHA256',
    'begin_time' => '20170724000000',
    'end_time'   => '20170725000000',
    'offset'     => '0',
    'limit'      => '100',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/billcommentsp/batchquerycomment']->postAsync([
  'security' => true,
  'xml' => [
    'appid'      => 'wx8888888888888888',
    'mch_id'     => '1900000109',
    'sign_type'  => 'HMAC-SHA256',
    'begin_time' => '20170724000000',
    'end_time'   => '20170725000000',
    'offset'     => '0',
    'limit'      => '100',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->billcommentsp->batchquerycomment->post([
  'security' => true,
  'xml' => [
    'appid'      => 'wx8888888888888888',
    'mch_id'     => '1900000109',
    'sign_type'  => 'HMAC-SHA256',
    'begin_time' => '20170724000000',
    'end_time'   => '20170725000000',
    'offset'     => '0',
    'limit'      => '100',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/billcommentsp/batchquerycomment')->post([
  'security' => true,
  'xml' => [
    'appid'      => 'wx8888888888888888',
    'mch_id'     => '1900000109',
    'sign_type'  => 'HMAC-SHA256',
    'begin_time' => '20170724000000',
    'end_time'   => '20170725000000',
    'offset'     => '0',
    'limit'      => '100',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/billcommentsp/batchquerycomment']->post([
  'security' => true,
  'xml' => [
    'appid'      => 'wx8888888888888888',
    'mch_id'     => '1900000109',
    'sign_type'  => 'HMAC-SHA256',
    'begin_time' => '20170724000000',
    'end_time'   => '20170725000000',
    'offset'     => '0',
    'limit'      => '100',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg {data-required} | string | 返回信息
| result_code {data-required} | string | 业务结果<br/>`FAIL` 枚举值
| err_code {data-required} | string | 错误代码
| err_code_des | string | 错误代码描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4014326528)
