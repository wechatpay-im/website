---
title: 回退结果查询
description: 商户需要核实回退结果，可调用此接口查询回退结果。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| mch_id {data-required data-indent=1} | string | 商户号
| sub_mch_id {data-indent=1} | string | 子商户号
| appid {data-required data-indent=1} | string | 公众账号ID
| sub_appid {data-indent=1} | string | 子商户公众账号ID
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值
| order_id {data-indent=1} | string | 微信分账单号
| out_order_no {data-indent=1} | string | 商户分账单号
| out_return_no {data-required data-indent=1} | string | 商户回退单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->pay->profitsharingreturnquery->postAsync([
  'xml' => [
    'mch_id'        => '1900000100',
    'sub_mch_id'    => '1900000109',
    'appid'         => 'wx8888888888888888',
    'sub_appid'     => 'wx8888888888888888',
    'sign_type'     => 'HMAC-SHA256',
    'order_id'      => '3008450740201411110007820472',
    'out_order_no'  => 'P20150806125346',
    'out_return_no' => 'R20190516001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/pay/profitsharingreturnquery')->postAsync([
  'xml' => [
    'mch_id'        => '1900000100',
    'sub_mch_id'    => '1900000109',
    'appid'         => 'wx8888888888888888',
    'sub_appid'     => 'wx8888888888888888',
    'sign_type'     => 'HMAC-SHA256',
    'order_id'      => '3008450740201411110007820472',
    'out_order_no'  => 'P20150806125346',
    'out_return_no' => 'R20190516001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/pay/profitsharingreturnquery']->postAsync([
  'xml' => [
    'mch_id'        => '1900000100',
    'sub_mch_id'    => '1900000109',
    'appid'         => 'wx8888888888888888',
    'sub_appid'     => 'wx8888888888888888',
    'sign_type'     => 'HMAC-SHA256',
    'order_id'      => '3008450740201411110007820472',
    'out_order_no'  => 'P20150806125346',
    'out_return_no' => 'R20190516001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->pay->profitsharingreturnquery->post([
  'xml' => [
    'mch_id'        => '1900000100',
    'sub_mch_id'    => '1900000109',
    'appid'         => 'wx8888888888888888',
    'sub_appid'     => 'wx8888888888888888',
    'sign_type'     => 'HMAC-SHA256',
    'order_id'      => '3008450740201411110007820472',
    'out_order_no'  => 'P20150806125346',
    'out_return_no' => 'R20190516001',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/pay/profitsharingreturnquery')->post([
  'xml' => [
    'mch_id'        => '1900000100',
    'sub_mch_id'    => '1900000109',
    'appid'         => 'wx8888888888888888',
    'sub_appid'     => 'wx8888888888888888',
    'sign_type'     => 'HMAC-SHA256',
    'order_id'      => '3008450740201411110007820472',
    'out_order_no'  => 'P20150806125346',
    'out_return_no' => 'R20190516001',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/pay/profitsharingreturnquery']->post([
  'xml' => [
    'mch_id'        => '1900000100',
    'sub_mch_id'    => '1900000109',
    'appid'         => 'wx8888888888888888',
    'sub_appid'     => 'wx8888888888888888',
    'sign_type'     => 'HMAC-SHA256',
    'order_id'      => '3008450740201411110007820472',
    'out_order_no'  => 'P20150806125346',
    'out_return_no' => 'R20190516001',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| appid {data-required} | string | 公众账号ID
| mch_id {data-required} | string | 商户号
| nonce_str {data-required} | string | 随机字符串
| sign {data-required} | string | 签名
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| sub_mch_id | string | 子商户号
| sub_appid | string | 子商户公众账号ID
| order_id | string | 微信分账单号
| out_order_no | string | 商户分账单号
| out_return_no {data-required} | string | 商户回退单号
| return_no | string | 微信回退单号
| return_account_type {data-required} | string | 回退方类型<br/>`MERCHANT_ID` 枚举值
| return_account {data-required} | string | 回退方账号
| return_amount {data-required} | integer | 回退金额
| description {data-required} | string | 回退描述
| result | string | 回退结果<br/>`SUCCESS` \| `PROCESSING` \| `FAILED` 枚举值之一
| fail_reason | string | 失败原因<br/>`ACCOUNT_ABNORMAL` \| `TIME_OUT_CLOSED` \| `PAYER_ACCOUNT_ABNORMAL` \| `INVALID_REQUEST` 枚举值之一
| finish_time | string | 完成时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/allocation.php?chapter=27_8&index=9) [官方文档](https://pay.weixin.qq.com/wiki/doc/api/allocation_sp.php?chapter=25_8&index=10)
