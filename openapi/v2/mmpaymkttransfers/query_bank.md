---
title: 查询企业付款银行卡
description: 用于对商户企业付款到银行卡操作进行结果查询，返回付款操作详细结果。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| mch_id {data-indent=1} | string | 商户号
| partner_trade_no {data-indent=1} | string | 商户企业付款单号
| security | boolean | 声明加载商户API证书<br/>固定值`true`

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->mmpaymkttransfers->query_bank->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'partner_trade_no' => '1212121221227',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/mmpaymkttransfers/query_bank')->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'partner_trade_no' => '1212121221227',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/mmpaymkttransfers/query_bank']->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'partner_trade_no' => '1212121221227',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->mmpaymkttransfers->query_bank->post([
  'xml' => [
    'mch_id' => '1900000109',
    'partner_trade_no' => '1212121221227',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/mmpaymkttransfers/query_bank')->post([
  'xml' => [
    'mch_id' => '1900000109',
    'partner_trade_no' => '1212121221227',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/mmpaymkttransfers/query_bank']->post([
  'xml' => [
    'mch_id' => '1900000109',
    'partner_trade_no' => '1212121221227',
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
| mch_id | string | 商户号
| partner_trade_no | string | 商户企业付款单号
| payment_no | string | 微信企业付款单号
| bank_no_md5 | string | 银行卡号
| true_name_md5 | string | 用户真实姓名
| amount | integer | 代付金额
| status | string | 代付单状态
| cmms_amt | integer | 手续费金额
| create_time | string | 商户下单时间
| pay_succ_time | string | 成功付款时间
| reason | string | 失败原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay.php?chapter=24_3)
