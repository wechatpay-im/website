---
title: 查询租借订单
description: 前置条件：商户下单待受理后。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| version {data-required data-indent=1} | string | 接口版本号
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
$instance->v2->wxv->queryrentbill->postAsync([
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
$instance->chain('v2/wxv/queryrentbill')->postAsync([
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
$instance['v2/wxv/queryrentbill']->postAsync([
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
$response = $instance->v2->wxv->queryrentbill->post([
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
$response = $instance->chain('v2/wxv/queryrentbill')->post([
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
$response = $instance['v2/wxv/queryrentbill']->post([
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
| return_code {data-required}| string | 返回状态码
| return_msg | string | 返回结果
| sign {data-required}| string | 签名
| nonce_str {data-required}| string | 随机字符串
| result_code {data-required}| string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误描述
| appid {data-required}| string | 公众账号ID
| mch_id {data-required}| string | 商户号
| out_order_no {data-required}| string | 商户服务订单号
| service_id {data-required}| string | 服务ID
| state {data-required}| string | 单据状态
| goods_name {data-required}| string | 商品名称
| returned {data-required}| string | 是否归还
| start_time | string | 租用时间
| service_location | string | 租用地点
| deposit_amount {data-required}| integer | 押金总额
| rent_unit {data-required}| string | 租金规则 计费单位
| rent_unit_fee {data-required}| integer | 租金规则 计费单价费用
| rent_fee_desc | string | 租金规则 计费说明
| real_end_time | string | 实际归还时间
| rent_fee | integer | 租金费用
| compensation_fee | integer | 赔偿金费用
| compensation_fee_desc | string | 赔偿金说明
| service_end_location | string | 归还地点
| order_id {data-required}| string | 微信支付服务订单号
| finish_ticket {data-required}| string | 完结凭证
| attach | string | 回调数据包
| finish_transaction_id | string | 结单交易单号
| pay_type | string | 支付方式

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=18_2&index=3)
