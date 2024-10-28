---
title: 查询企业向微信用户个人付款
description: 付款操作进行结果查询，返回付款操作详细结果。查询企业付款API只支持查询30天内的订单，30天之前的订单请登录商户平台查询。
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
$instance->v2->mmpaymkttransfers->gettransferinfo->postAsync([
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
$instance->chain('v2/mmpaymkttransfers/gettransferinfo')->postAsync([
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
$instance['v2/mmpaymkttransfers/gettransferinfo']->postAsync([
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
$response = $instance->v2->mmpaymkttransfers->gettransferinfo->post([
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
$response = $instance->chain('v2/mmpaymkttransfers/gettransferinfo')->post([
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
$response = $instance['v2/mmpaymkttransfers/gettransferinfo']->post([
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
| partner_trade_no | string | 商户单号
| appid | string | Appid
| mch_id | string | 商户号
| detail_id | string | 付款单号
| status | string | 转账状态
| reason | string | 失败原因
| openid | string | 收款用户openid
| transfer_name | string | 收款用户姓名
| payment_amount | integer | 付款金额
| transfer_time | string | 转账时间
| payment_time | string | 付款成功时间
| desc | string | 企业付款备注

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay.php?chapter=14_3)
