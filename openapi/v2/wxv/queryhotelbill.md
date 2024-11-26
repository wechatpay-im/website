---
title: 查询速住订单
description: 前置条件：商户下单待受理后。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| version {data-required data-indent=1} | string | 接口版本号<br/>`1.0` 枚举值
| appid {data-required data-indent=1} | string | 公众账号ID
| mch_id {data-required data-indent=1} | string | 商户号
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值
| out_order_no {data-required data-indent=1} | string | 商户服务订单号
| return_query_id {data-required data-indent=1} | string | 回跳查询id
| service_id {data-required data-indent=1} | string | 服务ID
| security {data-required} | `true` | 声明加载商户API证书

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->wxv->queryhotelbill->postAsync([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'return_query_id' => '微信侧回跳到商户前端时用于查单的单据查询id.',
    'service_id' => '',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/wxv/queryhotelbill')->postAsync([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'return_query_id' => '微信侧回跳到商户前端时用于查单的单据查询id.',
    'service_id' => '',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/wxv/queryhotelbill']->postAsync([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'return_query_id' => '微信侧回跳到商户前端时用于查单的单据查询id.',
    'service_id' => '',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->wxv->queryhotelbill->post([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'return_query_id' => '微信侧回跳到商户前端时用于查单的单据查询id.',
    'service_id' => '',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/wxv/queryhotelbill')->post([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'return_query_id' => '微信侧回跳到商户前端时用于查单的单据查询id.',
    'service_id' => '',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/wxv/queryhotelbill']->post([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'return_query_id' => '微信侧回跳到商户前端时用于查单的单据查询id.',
    'service_id' => '',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required}| string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回结果
| sign {data-required}| string | 签名
| nonce_str {data-required}| string | 随机字符串
| result_code {data-required}| string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误描述
| appid {data-required}| string | 公众账号ID
| mch_id {data-required}| string | 商户号
| out_order_no {data-required}| string | 商户服务订单号
| service_id {data-required}| string | 服务ID
| state {data-required}| string | 单据状态<br/>`CREATED` \| `USER_ACCEPTED` \| `FINISHED` \| `USER_PAID` \| `REVOKED` \| `EXPIRED` 枚举值之一
| room {data-required}| string | 房间
| start_time {data-required}| string | 入住时间
| end_time | string | 预定离店时间
| service_location {data-required}| string | 酒店
| deposit_amount {data-required}| integer | 押金
| room_rate {data-required}| integer | 房费
| room_rate_desc {data-required}| string | 房费说明
| real_end_time | string | 实际离店时间
| checked_in {data-required}| boolean | 是否入住
| other_fee | integer | 其他费用
| other_fee_desc | string | 其他费用说明
| compensation_fee | integer | 赔偿金费用
| compensation_fee_desc | string | 赔偿金说明
| overdue_fine | integer | 延迟退房费
| overdue_fine_desc | string | 延迟退房说明
| cancel_fee | integer | 取消费用
| cancel_fee_desc | string | 取消费用说明
| order_id {data-required}| string | 微信支付服务订单号
| finish_ticket {data-required}| string | 完结凭证
| attach | string | 回调数据包
| finish_transaction_id | string | 结单交易单号
| pay_type | string | 支付方式<br/>`MchChannelPayType` 枚举值

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=19_2&index=3)
