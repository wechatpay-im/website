---
title: 查询付款记录
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| partner_trade_no {data-indent=1} | string | 商户订单号
| mch_id {data-indent=1} | string | 商户号
| appid {data-indent=1} | string | Appid
| security | boolean | 声明加载商户API证书<br/>固定值`true`

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->mmpaymkttransfers->promotion->querywwsptrans2pocket->postAsync([
  'xml' => [
    'partner_trade_no' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'appid' => 'wxe062425f740d30d8',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/mmpaymkttransfers/promotion/querywwsptrans2pocket')->postAsync([
  'xml' => [
    'partner_trade_no' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'appid' => 'wxe062425f740d30d8',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/mmpaymkttransfers/promotion/querywwsptrans2pocket']->postAsync([
  'xml' => [
    'partner_trade_no' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'appid' => 'wxe062425f740d30d8',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->mmpaymkttransfers->promotion->querywwsptrans2pocket->post([
  'xml' => [
    'partner_trade_no' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'appid' => 'wxe062425f740d30d8',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/mmpaymkttransfers/promotion/querywwsptrans2pocket')->post([
  'xml' => [
    'partner_trade_no' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'appid' => 'wxe062425f740d30d8',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/mmpaymkttransfers/promotion/querywwsptrans2pocket']->post([
  'xml' => [
    'partner_trade_no' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'appid' => 'wxe062425f740d30d8',
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
| err_code_des | string | 错误代码描述
| partner_trade_no | string | 商户订单号
| mch_id | string | 商户号
| detail_id | string | 红包单号
| status | string | 红包状态
| reason | string | 失败原因
| transfer_name | string | 收款用户姓名
| payment_amount | integer | 红包退款金额
| transfer_time | string | 转账时间
| desc | string | 付款描述

{.im-table #response}

参阅 [官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90279)
