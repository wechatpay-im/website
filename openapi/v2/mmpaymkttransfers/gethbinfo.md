---
title: 查询红包记录
description: 用于商户对已发放的红包进行查询红包的具体信息，可支持普通红包和裂变包。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| mch_billno {data-required data-indent=1} | string | 商户订单号
| mch_id {data-required data-indent=1} | string | 商户号
| appid {data-required data-indent=1} | string | Appid
| bill_type {data-required data-indent=1} | string | 订单类型<br/>`MCHT` 枚举值
| security {data-required} | `true` | 声明加载商户API证书

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->mmpaymkttransfers->gethbinfo->postAsync([
  'xml' => [
    'mch_billno' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'appid' => 'wxe062425f740d30d8',
    'bill_type' => 'MCHT',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/mmpaymkttransfers/gethbinfo')->postAsync([
  'xml' => [
    'mch_billno' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'appid' => 'wxe062425f740d30d8',
    'bill_type' => 'MCHT',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/mmpaymkttransfers/gethbinfo']->postAsync([
  'xml' => [
    'mch_billno' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'appid' => 'wxe062425f740d30d8',
    'bill_type' => 'MCHT',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->mmpaymkttransfers->gethbinfo->post([
  'xml' => [
    'mch_billno' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'appid' => 'wxe062425f740d30d8',
    'bill_type' => 'MCHT',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/mmpaymkttransfers/gethbinfo')->post([
  'xml' => [
    'mch_billno' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'appid' => 'wxe062425f740d30d8',
    'bill_type' => 'MCHT',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/mmpaymkttransfers/gethbinfo']->post([
  'xml' => [
    'mch_billno' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'appid' => 'wxe062425f740d30d8',
    'bill_type' => 'MCHT',
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
| result_code {data-required}| string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| mch_billno {data-required}| string | 商户订单号
| mch_id {data-required}| string | 商户号
| detail_id {data-required}| string | 红包单号
| status {data-required}| string | 红包状态<br/>`SENDING` \| `SENT` \| `FAILED` \| `RECEIVED` \| `RFUND_ING` \| `REFUND` 枚举值之一
| send_type {data-required}| string | 发放类型<br/>`API` \| `UPLOAD` \| `ACTIVITY` 枚举值之一
| hb_type {data-required}| string | 红包类型<br/>`NORMAL` \| `GROUP` 枚举值之一
| total_num {data-required}| integer | 红包个数
| total_amount {data-required}| integer | 红包金额
| reason | string | 失败原因
| send_time {data-required}| string | 红包发送时间
| refund_time | string | 红包退款时间
| refund_amount | integer | 红包退款金额
| wishing | string | 祝福语
| remark | string | 活动描述
| act_name | string | 活动名称
| hblist | object {data-tooltip="对应PHP的array"} | 红包领取记录
| hbinfo {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 裂变红包领取列表
| openid {data-indent=2} | string | 领取红包的Openid
| amount {data-indent=2} | integer | 金额
| rcv_time {data-indent=2} | string | 接收时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon.php?chapter=13_6&index=5)
