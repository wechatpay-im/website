---
title: 重新发起提现
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

::: danger :no_entry_sign: {.im-deprecated}

本接口服务已于 `2020.04.13` (北京时间)下线，文档仅做留存参考。
:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| mch_id {data-indent=1} | string | 服务商商户号
| sub_mch_id {data-indent=1} | string | 小微商户号
| date {data-indent=1} | string | 自动提现单提现日期
| sign_type {data-indent=1} | string | 签名类型
| security | boolean | 声明加载商户API证书<br/>固定值`true`

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->fund->reautowithdrawbydate->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000109',
    'date' => '20180602',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/fund/reautowithdrawbydate')->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000109',
    'date' => '20180602',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/fund/reautowithdrawbydate']->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000109',
    'date' => '20180602',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->fund->reautowithdrawbydate->post([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000109',
    'date' => '20180602',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/fund/reautowithdrawbydate')->post([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000109',
    'date' => '20180602',
    'sign_type' => 'HMAC-SHA256',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/fund/reautowithdrawbydate']->post([
  'xml' => [
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000109',
    'date' => '20180602',
    'sign_type' => 'HMAC-SHA256',
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
| sign_type | string | 签名类型
| sign | string | 签名
| date | string | 自动提现单提现日期
| mch_id | string | 商户号
| sub_mch_id | string | 小微商户号
| withdraw_id | string | 提现单单据ID
| amount | integer | 金额
| create_time | string | 单据创建时间
| nonce_str | string | 随机字符

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=21_3)
