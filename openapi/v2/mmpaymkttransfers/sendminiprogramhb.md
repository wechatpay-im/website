---
title: 发放小程序红包接口
description: 红包金额大于200或者小于1元时，请求参数scene_id必传，参数说明见下文。◆ 根据监管要求，新申请商户号使用小程序红包需要满足两个条件：1、入驻时间超过90天 2、连续正常交易30天。◆ 移动应用的appid无法使用红包接口。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| mch_billno {data-indent=1} | string | 商户订单号
| mch_id {data-indent=1} | string | 商户号
| wxappid {data-indent=1} | string | 公众账号appid
| send_name {data-indent=1} | string | 商户名称
| re_openid {data-indent=1} | string | 用户openid
| total_amount {data-indent=1} | integer | 付款金额
| total_num {data-indent=1} | integer | 红包发放总人数
| wishing {data-indent=1} | string | 红包祝福语
| act_name {data-indent=1} | string | 活动名称
| remark {data-indent=1} | string | 备注
| notify_way {data-indent=1} | string | 活动信息
| scene_id {data-indent=1} | string | 场景id
| security | boolean | 声明加载商户API证书<br/>固定值`true`

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->mmpaymkttransfers->sendminiprogramhb->postAsync([
  'xml' => [
    'mch_billno' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'wxappid' => 'wx8888888888888888',
    'send_name' => '天虹百货',
    're_openid' => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'total_amount' => '1000',
    'total_num' => '1',
    'wishing' => '感谢您参加猜灯谜活动，祝您元宵节快乐！',
    'act_name' => '猜灯谜抢红包活动',
    'remark' => '猜越多得越多，快来抢！',
    'notify_way' => 'MINI_PROGRAM_JSAPI',
    'scene_id' => 'PRODUCT_8',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/mmpaymkttransfers/sendminiprogramhb')->postAsync([
  'xml' => [
    'mch_billno' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'wxappid' => 'wx8888888888888888',
    'send_name' => '天虹百货',
    're_openid' => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'total_amount' => '1000',
    'total_num' => '1',
    'wishing' => '感谢您参加猜灯谜活动，祝您元宵节快乐！',
    'act_name' => '猜灯谜抢红包活动',
    'remark' => '猜越多得越多，快来抢！',
    'notify_way' => 'MINI_PROGRAM_JSAPI',
    'scene_id' => 'PRODUCT_8',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/mmpaymkttransfers/sendminiprogramhb']->postAsync([
  'xml' => [
    'mch_billno' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'wxappid' => 'wx8888888888888888',
    'send_name' => '天虹百货',
    're_openid' => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'total_amount' => '1000',
    'total_num' => '1',
    'wishing' => '感谢您参加猜灯谜活动，祝您元宵节快乐！',
    'act_name' => '猜灯谜抢红包活动',
    'remark' => '猜越多得越多，快来抢！',
    'notify_way' => 'MINI_PROGRAM_JSAPI',
    'scene_id' => 'PRODUCT_8',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->mmpaymkttransfers->sendminiprogramhb->post([
  'xml' => [
    'mch_billno' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'wxappid' => 'wx8888888888888888',
    'send_name' => '天虹百货',
    're_openid' => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'total_amount' => '1000',
    'total_num' => '1',
    'wishing' => '感谢您参加猜灯谜活动，祝您元宵节快乐！',
    'act_name' => '猜灯谜抢红包活动',
    'remark' => '猜越多得越多，快来抢！',
    'notify_way' => 'MINI_PROGRAM_JSAPI',
    'scene_id' => 'PRODUCT_8',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/mmpaymkttransfers/sendminiprogramhb')->post([
  'xml' => [
    'mch_billno' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'wxappid' => 'wx8888888888888888',
    'send_name' => '天虹百货',
    're_openid' => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'total_amount' => '1000',
    'total_num' => '1',
    'wishing' => '感谢您参加猜灯谜活动，祝您元宵节快乐！',
    'act_name' => '猜灯谜抢红包活动',
    'remark' => '猜越多得越多，快来抢！',
    'notify_way' => 'MINI_PROGRAM_JSAPI',
    'scene_id' => 'PRODUCT_8',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/mmpaymkttransfers/sendminiprogramhb']->post([
  'xml' => [
    'mch_billno' => '10000098201411111234567890',
    'mch_id' => '10000098',
    'wxappid' => 'wx8888888888888888',
    'send_name' => '天虹百货',
    're_openid' => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'total_amount' => '1000',
    'total_num' => '1',
    'wishing' => '感谢您参加猜灯谜活动，祝您元宵节快乐！',
    'act_name' => '猜灯谜抢红包活动',
    'remark' => '猜越多得越多，快来抢！',
    'notify_way' => 'MINI_PROGRAM_JSAPI',
    'scene_id' => 'PRODUCT_8',
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
| mch_billno | string | 商户订单号
| mch_id | string | 商户号
| wxappid | string | 公众账号appid
| re_openid | string | 用户openid
| total_amount | integer | 付款金额
| send_listid | string | 微信单号
| package | string | Jsapi的入参

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon_xcx.php?chapter=18_2&index=3)
