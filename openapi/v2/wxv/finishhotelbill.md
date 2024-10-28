---
title: 完结速住订单
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| version {data-indent=1} | string | 接口版本号
| appid {data-indent=1} | string | 公众账号ID
| mch_id {data-indent=1} | string | 商户号
| sign_type {data-indent=1} | string | 签名类型
| out_order_no {data-indent=1} | string | 商户服务订单号
| service_id {data-indent=1} | string | 服务ID
| checked_in {data-indent=1} | boolean | 是否入住
| real_end_time {data-indent=1} | string | 实际离店时间
| other_fee {data-indent=1} | integer | 其他费用金额
| cancel_fee {data-indent=1} | integer | 取消费用
| compensation_fee {data-indent=1} | integer | 赔偿金费用
| compensation_fee_desc {data-indent=1} | string | 赔偿金说明
| room_rate {data-indent=1} | integer | 房费
| overdue_fine {data-indent=1} | integer | 延迟退房费用
| overdue_fine_desc {data-indent=1} | string | 延迟退房说明
| total_amount {data-indent=1} | integer | 总金额
| finish_ticket {data-indent=1} | string | 完结凭证
| profit_sharing {data-indent=1} | string | 分账标识
| security | boolean | 声明加载商户API证书<br/>固定值`true`

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->wxv->finishhotelbill->postAsync([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'service_id' => '',
    'checked_in' => 'TRUE',
    'real_end_time' => '20091225091010',
    'other_fee' => '10000',
    'cancel_fee' => '10000',
    'compensation_fee' => '6000',
    'compensation_fee_desc' => '打破房间杯子一个',
    'room_rate' => '5000',
    'overdue_fine' => '5000',
    'overdue_fine_desc' => '延迟退房2小时，增加50元房费',
    'total_amount' => '40000',
    'finish_ticket' => '',
    'profit_sharing' => 'Y',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/wxv/finishhotelbill')->postAsync([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'service_id' => '',
    'checked_in' => 'TRUE',
    'real_end_time' => '20091225091010',
    'other_fee' => '10000',
    'cancel_fee' => '10000',
    'compensation_fee' => '6000',
    'compensation_fee_desc' => '打破房间杯子一个',
    'room_rate' => '5000',
    'overdue_fine' => '5000',
    'overdue_fine_desc' => '延迟退房2小时，增加50元房费',
    'total_amount' => '40000',
    'finish_ticket' => '',
    'profit_sharing' => 'Y',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/wxv/finishhotelbill']->postAsync([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'service_id' => '',
    'checked_in' => 'TRUE',
    'real_end_time' => '20091225091010',
    'other_fee' => '10000',
    'cancel_fee' => '10000',
    'compensation_fee' => '6000',
    'compensation_fee_desc' => '打破房间杯子一个',
    'room_rate' => '5000',
    'overdue_fine' => '5000',
    'overdue_fine_desc' => '延迟退房2小时，增加50元房费',
    'total_amount' => '40000',
    'finish_ticket' => '',
    'profit_sharing' => 'Y',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->wxv->finishhotelbill->post([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'service_id' => '',
    'checked_in' => 'TRUE',
    'real_end_time' => '20091225091010',
    'other_fee' => '10000',
    'cancel_fee' => '10000',
    'compensation_fee' => '6000',
    'compensation_fee_desc' => '打破房间杯子一个',
    'room_rate' => '5000',
    'overdue_fine' => '5000',
    'overdue_fine_desc' => '延迟退房2小时，增加50元房费',
    'total_amount' => '40000',
    'finish_ticket' => '',
    'profit_sharing' => 'Y',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/wxv/finishhotelbill')->post([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'service_id' => '',
    'checked_in' => 'TRUE',
    'real_end_time' => '20091225091010',
    'other_fee' => '10000',
    'cancel_fee' => '10000',
    'compensation_fee' => '6000',
    'compensation_fee_desc' => '打破房间杯子一个',
    'room_rate' => '5000',
    'overdue_fine' => '5000',
    'overdue_fine_desc' => '延迟退房2小时，增加50元房费',
    'total_amount' => '40000',
    'finish_ticket' => '',
    'profit_sharing' => 'Y',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/wxv/finishhotelbill']->post([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'service_id' => '',
    'checked_in' => 'TRUE',
    'real_end_time' => '20091225091010',
    'other_fee' => '10000',
    'cancel_fee' => '10000',
    'compensation_fee' => '6000',
    'compensation_fee_desc' => '打破房间杯子一个',
    'room_rate' => '5000',
    'overdue_fine' => '5000',
    'overdue_fine_desc' => '延迟退房2小时，增加50元房费',
    'total_amount' => '40000',
    'finish_ticket' => '',
    'profit_sharing' => 'Y',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code | string | 返回状态码
| return_msg | string | 返回结果
| sign | string | 签名
| nonce_str | string | 随机字符串
| result_code | string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误描述
| appid | string | 公众账号ID
| mch_id | string | 商户号
| out_order_no | string | 商户服务订单号
| service_id | string | 服务ID
| order_id | string | 微信支付服务订单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=19_4&index=5)
