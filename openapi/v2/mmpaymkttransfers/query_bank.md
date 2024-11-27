---
title: 查询企业付款银行卡
description: 用于对商户企业付款到银行卡操作进行结果查询，返回付款操作详细结果。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| security {data-required} | `true` | 声明加载商户API证书
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| mch_id {data-required data-indent=1} | string | 商户号
| partner_trade_no {data-required data-indent=1} | string | 商户企业付款单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->mmpaymkttransfers->query_bank->postAsync([
  'security' => true,
  'xml' => [
    'mch_id'           => '1900000109',
    'partner_trade_no' => '1212121221227',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/mmpaymkttransfers/query_bank')->postAsync([
  'security' => true,
  'xml' => [
    'mch_id'           => '1900000109',
    'partner_trade_no' => '1212121221227',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/mmpaymkttransfers/query_bank']->postAsync([
  'security' => true,
  'xml' => [
    'mch_id'           => '1900000109',
    'partner_trade_no' => '1212121221227',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->mmpaymkttransfers->query_bank->post([
  'security' => true,
  'xml' => [
    'mch_id'           => '1900000109',
    'partner_trade_no' => '1212121221227',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/mmpaymkttransfers/query_bank')->post([
  'security' => true,
  'xml' => [
    'mch_id'           => '1900000109',
    'partner_trade_no' => '1212121221227',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/mmpaymkttransfers/query_bank']->post([
  'security' => true,
  'xml' => [
    'mch_id'           => '1900000109',
    'partner_trade_no' => '1212121221227',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| mch_id {data-required} | string | 商户号
| partner_trade_no {data-required} | string | 商户企业付款单号
| payment_no {data-required} | string | 微信企业付款单号
| bank_no_md5 {data-required} | string | 银行卡号
| true_name_md5 {data-required} | string | 用户真实姓名
| amount {data-required} | integer | 代付金额
| status {data-required} | string | 代付单状态<br/>`SUCCESS` \| `FAILED` \| `PROCESSING` \| `BANK_FAIL` 枚举值之一
| cmms_amt {data-required} | integer | 手续费金额
| create_time {data-required} | string | 商户下单时间
| pay_succ_time | string | 成功付款时间
| reason | string | 失败原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay.php?chapter=24_3)
