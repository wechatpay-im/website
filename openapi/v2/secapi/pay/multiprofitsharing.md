---
title: 请求多次分账
description: 微信订单支付成功后，服务商代子商户发起分账请求，将结算后的钱分到分账接收方。多次分账请求仅会按照传入的分账接收方进行分账，不会对剩余的金额进行任何操作。故操作成功后，在待分账金额不等于零时，订单依旧能够再次进行分账。● 多次分账，可以将本商户作为分账接收方直接传入，实现释放资金给本商户的功能。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| security {data-required} | `true` | 声明加载商户API证书
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| mch_id {data-required data-indent=1} | string | 商户号
| sub_mch_id {data-indent=1} | string | 子商户号
| appid {data-required data-indent=1} | string | 公众账号ID
| sub_appid {data-indent=1} | string | 子商户公众账号ID
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值
| transaction_id {data-required data-indent=1} | string | 微信订单号
| out_order_no {data-required data-indent=1} | string | 商户分账单号
| receivers {data-required data-indent=1} | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 分账接收方列表`JSON`格式字符串
| {colspan=3 .im-table-line}
| receiver {data-required data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 分账接收方列表`JSON`表达式
| type {data-required data-indent=3} | string | 分账接收方类型<br/>`MERCHANT_ID` \| `PERSONAL_OPENID` \| `PERSONAL_SUB_OPENID` 枚举值之一
| account {data-required data-indent=3} | string | 分账接收方账号
| amount {data-required data-indent=3} | number | 分账金额
| description {data-required data-indent=3} | string | 分账描述
| name {data-indent=3} | string | 分账个人接收方姓名

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->secapi->pay->multiprofitsharing->postAsync([
  'security' => true,
  'xml' => [
    'mch_id'         => '1900000100',
    'sub_mch_id'     => '1900000109',
    'appid'          => 'wx8888888888888888',
    'sub_appid'      => 'wx8888888888888888',
    'sign_type'      => 'HMAC-SHA256',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no'   => 'P20150806125346',
    'receivers'      => \json_encode([[
      'type'        => 'MERCHANT_ID',
      'account'     => '190001001',
      'amount'      => 100,
      'description' => '分到商户',
      'name'        => '分到个人',
    ],]),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/secapi/pay/multiprofitsharing')->postAsync([
  'security' => true,
  'xml' => [
    'mch_id'         => '1900000100',
    'sub_mch_id'     => '1900000109',
    'appid'          => 'wx8888888888888888',
    'sub_appid'      => 'wx8888888888888888',
    'sign_type'      => 'HMAC-SHA256',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no'   => 'P20150806125346',
    'receivers'      => \json_encode([[
      'type'        => 'MERCHANT_ID',
      'account'     => '190001001',
      'amount'      => 100,
      'description' => '分到商户',
      'name'        => '分到个人',
    ],]),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/secapi/pay/multiprofitsharing']->postAsync([
  'security' => true,
  'xml' => [
    'mch_id'         => '1900000100',
    'sub_mch_id'     => '1900000109',
    'appid'          => 'wx8888888888888888',
    'sub_appid'      => 'wx8888888888888888',
    'sign_type'      => 'HMAC-SHA256',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no'   => 'P20150806125346',
    'receivers'      => \json_encode([[
      'type'        => 'MERCHANT_ID',
      'account'     => '190001001',
      'amount'      => 100,
      'description' => '分到商户',
      'name'        => '分到个人',
    ],]),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->secapi->pay->multiprofitsharing->post([
  'security' => true,
  'xml' => [
    'mch_id'         => '1900000100',
    'sub_mch_id'     => '1900000109',
    'appid'          => 'wx8888888888888888',
    'sub_appid'      => 'wx8888888888888888',
    'sign_type'      => 'HMAC-SHA256',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no'   => 'P20150806125346',
    'receivers'      => \json_encode([[
      'type'        => 'MERCHANT_ID',
      'account'     => '190001001',
      'amount'      => 100,
      'description' => '分到商户',
      'name'        => '分到个人',
    ],]),
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/secapi/pay/multiprofitsharing')->post([
  'security' => true,
  'xml' => [
    'mch_id'         => '1900000100',
    'sub_mch_id'     => '1900000109',
    'appid'          => 'wx8888888888888888',
    'sub_appid'      => 'wx8888888888888888',
    'sign_type'      => 'HMAC-SHA256',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no'   => 'P20150806125346',
    'receivers'      => \json_encode([[
      'type'        => 'MERCHANT_ID',
      'account'     => '190001001',
      'amount'      => 100,
      'description' => '分到商户',
      'name'        => '分到个人',
    ],]),
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/secapi/pay/multiprofitsharing']->post([
  'security' => true,
  'xml' => [
    'mch_id'         => '1900000100',
    'sub_mch_id'     => '1900000109',
    'appid'          => 'wx8888888888888888',
    'sub_appid'      => 'wx8888888888888888',
    'sign_type'      => 'HMAC-SHA256',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no'   => 'P20150806125346',
    'receivers'      => \json_encode([[
      'type'        => 'MERCHANT_ID',
      'account'     => '190001001',
      'amount'      => 100,
      'description' => '分到商户',
      'name'        => '分到个人',
    ],]),
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_appid | string | 子商户公众账号ID
| sub_mch_id | string | 子商户号
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| appid {data-required} | string | 公众账号ID
| mch_id {data-required} | string | 商户号
| nonce_str {data-required} | string | 随机字符串
| sign {data-required} | string | 签名
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| transaction_id {data-required} | string | 微信订单号
| out_order_no {data-required} | string | 商户分账单号
| order_id {data-required} | string | 微信分账单号
| receivers | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 分账接收方列表`JSON`格式字符串
| {colspan=3 .im-table-line}
| receiver {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 分账接收方列表`JSON`表达式
| type {data-required data-indent=2} | string | 分账接收方类型<br/>`MERCHANT_ID` \| `PERSONAL_OPENID` \| `PERSONAL_SUB_OPENID` 枚举值之一
| account {data-required data-indent=2} | string | 分账接收方账号
| amount {data-required data-indent=2} | number | 分账金额
| description {data-required data-indent=2} | string | 分账描述
| detail_id {data-required data-indent=2} | string | 分账明细单号
| finish_time {data-required data-indent=2} | string | 分账完成时间
| receiver_mchid {data-required data-indent=2} | string | 分账接收商户号
| result {data-required data-indent=2} | string | 分账结果<br/>`PENDING` \| `SUCCESS` \| `CLOSED` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011983158) [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011984646)
