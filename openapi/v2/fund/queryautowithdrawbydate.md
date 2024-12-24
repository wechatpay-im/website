---
title: 查询提现状态
description: 小微商户模式下，与微信支付对接的是服务商，小微商户可能并不感知微信支付，小微商户的日常维护，是登录服务商自建的APP或者公众号，来查询提现状态等等。本API即提供自动提现查询能力给到服务商。说明：1、反映的是小微商户历史自动提现单据的相关信息；2、资金账单中涉及金额的字段单位为“分”。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

::: danger :no_entry_sign: {.im-deprecated}

本接口服务已于 `2023.03.13` (北京时间)下线，文档仅做留存参考。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| security {data-required} | `true` | 声明加载商户API证书
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| mch_id {data-required data-indent=1} | string | 商户号
| sub_mch_id {data-required data-indent=1} | string | 小微商户号
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值
| date {data-required data-indent=1} | string | 日期

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->fund->queryautowithdrawbydate->postAsync([
  'security' => true,
  'xml' => [
    'mch_id'     => '1900000109',
    'sub_mch_id' => '1900000109',
    'sign_type'  => 'HMAC-SHA256',
    'date'       => '20180508',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/fund/queryautowithdrawbydate')->postAsync([
  'security' => true,
  'xml' => [
    'mch_id'     => '1900000109',
    'sub_mch_id' => '1900000109',
    'sign_type'  => 'HMAC-SHA256',
    'date'       => '20180508',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/fund/queryautowithdrawbydate']->postAsync([
  'security' => true,
  'xml' => [
    'mch_id'     => '1900000109',
    'sub_mch_id' => '1900000109',
    'sign_type'  => 'HMAC-SHA256',
    'date'       => '20180508',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->fund->queryautowithdrawbydate->post([
  'security' => true,
  'xml' => [
    'mch_id'     => '1900000109',
    'sub_mch_id' => '1900000109',
    'sign_type'  => 'HMAC-SHA256',
    'date'       => '20180508',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/fund/queryautowithdrawbydate')->post([
  'security' => true,
  'xml' => [
    'mch_id'     => '1900000109',
    'sub_mch_id' => '1900000109',
    'sign_type'  => 'HMAC-SHA256',
    'date'       => '20180508',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/fund/queryautowithdrawbydate']->post([
  'security' => true,
  'xml' => [
    'mch_id'     => '1900000109',
    'sub_mch_id' => '1900000109',
    'sign_type'  => 'HMAC-SHA256',
    'date'       => '20180508',
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
| err_code {data-required} | string | 错误代码
| err_code_des | string | 错误代码描述
| sign_type | string | 签名类型<br/>`HMAC-SHA256` 枚举值
| sign | string | 签名
| date {data-required} | string | 日期
| mch_id {data-required} | string | 商户号
| sub_mch_id {data-required} | string | 小微商户号
| nonce_str {data-required} | string | 随机字符
| withdraw_status {data-required} | string | 单据状态
| fail_reason | string | 单据失败原因
| withdraw_id | string | 提现单单据ID
| amount | integer | 金额
| create_time | string | 单据创建时间
| success_time | string | 单据成功时间
| refund_time | string | 单据退票时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=21_1)
