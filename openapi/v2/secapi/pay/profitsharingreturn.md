---
title: 分账回退
description: 此功能需要接收方在商户平台-交易中心-分账-分账接收设置下，开启同意分账回退后，才能使用。分账回退的时限是180天。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| mch_id {data-indent=1} | string | 商户号
| sub_mch_id {data-indent=1} | string | 子商户号
| appid {data-indent=1} | string | 公众账号ID
| sub_appid {data-indent=1} | string | 子商户公众账号ID
| sign_type {data-indent=1} | string | 签名类型
| order_id {data-indent=1} | string | 微信分账单号
| out_order_no {data-indent=1} | string | 商户分账单号
| out_return_no {data-indent=1} | string | 商户回退单号
| return_account_type {data-indent=1} | string | 回退方类型
| return_account {data-indent=1} | string | 回退方账号
| return_amount {data-indent=1} | integer | 回退金额
| description {data-indent=1} | string | 回退描述
| security | boolean | 声明加载商户API证书<br/>固定值`true`

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->secapi->pay->profitsharingreturn->postAsync([
  'xml' => [
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'sign_type' => 'HMAC-SHA256',
    'order_id' => '3008450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'out_return_no' => 'R20190516001',
    'return_account_type' => 'MERCHANT_ID',
    'return_account' => '86693852',
    'return_amount' => '888',
    'description' => '用户退款',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/secapi/pay/profitsharingreturn')->postAsync([
  'xml' => [
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'sign_type' => 'HMAC-SHA256',
    'order_id' => '3008450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'out_return_no' => 'R20190516001',
    'return_account_type' => 'MERCHANT_ID',
    'return_account' => '86693852',
    'return_amount' => '888',
    'description' => '用户退款',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/secapi/pay/profitsharingreturn']->postAsync([
  'xml' => [
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'sign_type' => 'HMAC-SHA256',
    'order_id' => '3008450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'out_return_no' => 'R20190516001',
    'return_account_type' => 'MERCHANT_ID',
    'return_account' => '86693852',
    'return_amount' => '888',
    'description' => '用户退款',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->secapi->pay->profitsharingreturn->post([
  'xml' => [
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'sign_type' => 'HMAC-SHA256',
    'order_id' => '3008450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'out_return_no' => 'R20190516001',
    'return_account_type' => 'MERCHANT_ID',
    'return_account' => '86693852',
    'return_amount' => '888',
    'description' => '用户退款',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/secapi/pay/profitsharingreturn')->post([
  'xml' => [
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'sign_type' => 'HMAC-SHA256',
    'order_id' => '3008450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'out_return_no' => 'R20190516001',
    'return_account_type' => 'MERCHANT_ID',
    'return_account' => '86693852',
    'return_amount' => '888',
    'description' => '用户退款',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/secapi/pay/profitsharingreturn']->post([
  'xml' => [
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'sign_type' => 'HMAC-SHA256',
    'order_id' => '3008450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'out_return_no' => 'R20190516001',
    'return_account_type' => 'MERCHANT_ID',
    'return_account' => '86693852',
    'return_amount' => '888',
    'description' => '用户退款',
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
| appid | string | 公众账号ID
| mch_id | string | 商户号
| nonce_str | string | 随机字符串
| sign | string | 签名
| result_code | string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| sub_mch_id | string | 子商户号
| sub_appid | string | 子商户公众账号ID
| sign_type | string | 签名类型
| order_id | string | 微信分账单号
| out_order_no | string | 商户分账单号
| out_return_no | string | 商户回退单号
| return_no | string | 微信回退单号
| return_account_type | string | 回退方类型
| return_account | string | 回退方账号
| return_amount | integer | 回退金额
| description | string | 回退描述
| result | string | 回退结果
| fail_reason | string | 失败原因
| finish_time | string | 完成时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/allocation_sp.php?chapter=25_7&index=9)