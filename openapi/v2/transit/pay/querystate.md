---
title: 查询用户状态接口
description: 用于查询用户是否有欠费或黑名单用户情况，确定能否符合微信侧开通乘车卡免密支付要求。如已经开通乘车卡，则需传签约号，可确定是否符合继续使用乘车卡的要求。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 公众账号id
| mch_id {data-required data-indent=1} | string | 商户号
| contract_id {data-required data-indent=1} | string | 委托代扣协议id
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->transit->pay->querystate->postAsync([
  'xml' => [
    'appid'       => 'wxcbda96de0b165486',
    'mch_id'      => '10000098',
    'contract_id' => 'wx15463511252015071056489715',
    'sign_type'   => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/transit/pay/querystate')->postAsync([
  'xml' => [
    'appid'       => 'wxcbda96de0b165486',
    'mch_id'      => '10000098',
    'contract_id' => 'wx15463511252015071056489715',
    'sign_type'   => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/transit/pay/querystate']->postAsync([
  'xml' => [
    'appid'       => 'wxcbda96de0b165486',
    'mch_id'      => '10000098',
    'contract_id' => 'wx15463511252015071056489715',
    'sign_type'   => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->transit->pay->querystate->post([
  'xml' => [
    'appid'       => 'wxcbda96de0b165486',
    'mch_id'      => '10000098',
    'contract_id' => 'wx15463511252015071056489715',
    'sign_type'   => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/transit/pay/querystate')->post([
  'xml' => [
    'appid'       => 'wxcbda96de0b165486',
    'mch_id'      => '10000098',
    'contract_id' => 'wx15463511252015071056489715',
    'sign_type'   => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/transit/pay/querystate']->post([
  'xml' => [
    'appid'       => 'wxcbda96de0b165486',
    'mch_id'      => '10000098',
    'contract_id' => 'wx15463511252015071056489715',
    'sign_type'   => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| appid {data-required} | string | 请求appid
| mch_id {data-required} | string | 商户号
| nonce_str {data-required} | string | 随机字符串
| sign {data-required} | string | 签名
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| user_state {data-required} | string | 用户状态<br/>`NORMAL` \| `BLOCKED` \| `OVERDUE` 枚举值之一
| contract_id | string | 委托代扣协议id
| plan_id | string | 签约模板id
| contract_code | string | 签约协议号
| contract_state | string | 协议状态<br/>`0` \| `1` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/pap_jt_v2.php?chapter=19_96&index=12)
