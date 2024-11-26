---
title: 发放企业红包
description: 红包金额大于200或者小于1元时，请求参数scene_id必传，参数说明见下文。根据监管要求，新申请商户号使用现金红包需要满足两个条件：1、入驻时间超过90天 2、连续正常交易30天。移动应用的appid无法使用红包接口。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| nonce_str {data-required data-indent=1} | string | 随机字符串
| mch_billno {data-required data-indent=1} | string | 商户订单号
| mch_id {data-required data-indent=1} | string | 商户号
| wxappid {data-required data-indent=1} | string | 公众账号appid
| agentid {data-indent=1} | integer | 发送红包的应用id
| sender_name {data-required data-indent=1} | string | 发送者名称
| sender_header_media_id {data-indent=1} | string | 发送者头像
| re_openid {data-required data-indent=1} | string | 用户openid
| total_amount {data-required data-indent=1} | integer | 付款金额
| wishing {data-required data-indent=1} | string | 红包祝福语
| act_name {data-required data-indent=1} | string | 活动名称
| remark {data-required data-indent=1} | string | 备注
| scene_id {data-indent=1} | string | 场景id<br/>`PRODUCT_1` \| `PRODUCT_2` \| `PRODUCT_3` \| `PRODUCT_4` \| `PRODUCT_5` \| `PRODUCT_6` \| `PRODUCT_7` \| `PRODUCT_8` 枚举值之一
| workwx_sign {data-indent=1} | string | 活动信息
| security {data-required} | `true` | 声明加载商户API证书

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->mmpaymkttransfers->sendworkwxredpack->postAsync([
  'xml' => [
    'nonce_str' => '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
    'mch_billno' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'wxappid' => 'wx8888888888888888',
    'agentid' => '1',
    'sender_name' => 'XX活动',
    'sender_header_media_id' => '1G6nrLmr5EC3MMb_-zK1dDdzmd0p7cNliYu9V5w7o8K0',
    're_openid' => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'total_amount' => '1000',
    'wishing' => '感谢您参加猜灯谜活动，祝您元宵节快乐！',
    'act_name' => '猜灯谜抢红包活动',
    'remark' => '猜越多得越多，快来抢！',
    'scene_id' => 'PRODUCT_8',
    'workwx_sign' => 'C380BEC2BFD727A4B6845133519F3AD6',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/mmpaymkttransfers/sendworkwxredpack')->postAsync([
  'xml' => [
    'nonce_str' => '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
    'mch_billno' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'wxappid' => 'wx8888888888888888',
    'agentid' => '1',
    'sender_name' => 'XX活动',
    'sender_header_media_id' => '1G6nrLmr5EC3MMb_-zK1dDdzmd0p7cNliYu9V5w7o8K0',
    're_openid' => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'total_amount' => '1000',
    'wishing' => '感谢您参加猜灯谜活动，祝您元宵节快乐！',
    'act_name' => '猜灯谜抢红包活动',
    'remark' => '猜越多得越多，快来抢！',
    'scene_id' => 'PRODUCT_8',
    'workwx_sign' => 'C380BEC2BFD727A4B6845133519F3AD6',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/mmpaymkttransfers/sendworkwxredpack']->postAsync([
  'xml' => [
    'nonce_str' => '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
    'mch_billno' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'wxappid' => 'wx8888888888888888',
    'agentid' => '1',
    'sender_name' => 'XX活动',
    'sender_header_media_id' => '1G6nrLmr5EC3MMb_-zK1dDdzmd0p7cNliYu9V5w7o8K0',
    're_openid' => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'total_amount' => '1000',
    'wishing' => '感谢您参加猜灯谜活动，祝您元宵节快乐！',
    'act_name' => '猜灯谜抢红包活动',
    'remark' => '猜越多得越多，快来抢！',
    'scene_id' => 'PRODUCT_8',
    'workwx_sign' => 'C380BEC2BFD727A4B6845133519F3AD6',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->mmpaymkttransfers->sendworkwxredpack->post([
  'xml' => [
    'nonce_str' => '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
    'mch_billno' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'wxappid' => 'wx8888888888888888',
    'agentid' => '1',
    'sender_name' => 'XX活动',
    'sender_header_media_id' => '1G6nrLmr5EC3MMb_-zK1dDdzmd0p7cNliYu9V5w7o8K0',
    're_openid' => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'total_amount' => '1000',
    'wishing' => '感谢您参加猜灯谜活动，祝您元宵节快乐！',
    'act_name' => '猜灯谜抢红包活动',
    'remark' => '猜越多得越多，快来抢！',
    'scene_id' => 'PRODUCT_8',
    'workwx_sign' => 'C380BEC2BFD727A4B6845133519F3AD6',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/mmpaymkttransfers/sendworkwxredpack')->post([
  'xml' => [
    'nonce_str' => '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
    'mch_billno' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'wxappid' => 'wx8888888888888888',
    'agentid' => '1',
    'sender_name' => 'XX活动',
    'sender_header_media_id' => '1G6nrLmr5EC3MMb_-zK1dDdzmd0p7cNliYu9V5w7o8K0',
    're_openid' => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'total_amount' => '1000',
    'wishing' => '感谢您参加猜灯谜活动，祝您元宵节快乐！',
    'act_name' => '猜灯谜抢红包活动',
    'remark' => '猜越多得越多，快来抢！',
    'scene_id' => 'PRODUCT_8',
    'workwx_sign' => 'C380BEC2BFD727A4B6845133519F3AD6',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/mmpaymkttransfers/sendworkwxredpack']->post([
  'xml' => [
    'nonce_str' => '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
    'mch_billno' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'wxappid' => 'wx8888888888888888',
    'agentid' => '1',
    'sender_name' => 'XX活动',
    'sender_header_media_id' => '1G6nrLmr5EC3MMb_-zK1dDdzmd0p7cNliYu9V5w7o8K0',
    're_openid' => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'total_amount' => '1000',
    'wishing' => '感谢您参加猜灯谜活动，祝您元宵节快乐！',
    'act_name' => '猜灯谜抢红包活动',
    'remark' => '猜越多得越多，快来抢！',
    'scene_id' => 'PRODUCT_8',
    'workwx_sign' => 'C380BEC2BFD727A4B6845133519F3AD6',
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
| wxappid {data-required}| string | 公众账号appid
| re_openid {data-required}| string | 用户openid
| total_amount {data-required}| integer | 付款金额
| send_listid {data-required}| string | 微信单号
| sender_name | string | 发送者名称
| sender_header_media_id | string | 发送者头像

{.im-table #response}

参阅 [官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90275)
