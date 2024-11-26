---
title: 查询红包记录
description: 查询红包记录API只支持查询30天内的红包订单，30天之前的红包订单请登录商户平台查询。如果查询单号对应的数据不存在，那么数据不存在的原因可能是：（1）发放请求还在处理中；（2）红包发放处理失败导致红包订单没有落地。在上述情况下，商户首先需要检查该商户订单号是否确实是自己发起的，如果商户确认是自己发起的，则请商户不要直接当做红包发放失败处理，请商户隔几分钟再尝试查询，或者商户可以通过相同的商户订单号再次发起发放请求。如果商户误把还在发放中的订单直接当发放失败处理，商户应当自行承担因此产生的所有损失和责任。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| mch_billno {data-required data-indent=1} | string | 商户订单号
| mch_id {data-required data-indent=1} | string | 商户号
| appid {data-required data-indent=1} | string | Appid
| security {data-required} | `true` | 声明加载商户API证书

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->mmpaymkttransfers->queryworkwxredpack->postAsync([
  'xml' => [
    'mch_billno' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'appid' => 'wxe062425f740d30d8',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/mmpaymkttransfers/queryworkwxredpack')->postAsync([
  'xml' => [
    'mch_billno' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'appid' => 'wxe062425f740d30d8',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/mmpaymkttransfers/queryworkwxredpack']->postAsync([
  'xml' => [
    'mch_billno' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'appid' => 'wxe062425f740d30d8',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->mmpaymkttransfers->queryworkwxredpack->post([
  'xml' => [
    'mch_billno' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'appid' => 'wxe062425f740d30d8',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/mmpaymkttransfers/queryworkwxredpack')->post([
  'xml' => [
    'mch_billno' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'appid' => 'wxe062425f740d30d8',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/mmpaymkttransfers/queryworkwxredpack']->post([
  'xml' => [
    'mch_billno' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'appid' => 'wxe062425f740d30d8',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required}| string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| sign | string | 微信支付签名
| result_code {data-required}| string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| mch_billno {data-required}| string | 商户订单号
| mch_id {data-required}| string | 商户号
| detail_id {data-required}| string | 红包单号
| status {data-required}| string | 红包状态<br/>`SENDING` \| `SENT` \| `FAILED` \| `RECEIVED` \| `RFUND_ING` \| `REFUND` 枚举值之一
| send_type {data-required}| string | 发放类型<br/>`API` 枚举值
| total_amount {data-required}| integer | 红包金额
| reason | string | 失败原因
| send_time {data-required}| string | 红包发送时间
| refund_time | string | 红包退款时间
| refund_amount | integer | 红包退款金额
| wishing | string | 祝福语
| remark | string | 活动描述
| act_name | string | 活动名称
| openid {data-required}| string | 领取红包的Openid
| amount {data-required}| integer | 金额
| rcv_time {data-required}| string | 接收时间
| sender_name | string | 发送者名称
| sender_header_media_id | string | 发送者头像

{.im-table #response}

参阅 [官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90276)
