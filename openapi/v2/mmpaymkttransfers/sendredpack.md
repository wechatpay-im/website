---
title: 发放普通红包
description: 现金红包发放后会以公众号消息的形式触达用户，不同情况下触达消息的形式会有差别，相关规则如下：1.已关注公众号的用户，使用“防伪消息”触达；2.未关注公众号的用户，使用“模板消息”触达。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| security {data-required} | `true` | 声明加载商户API证书
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| mch_billno {data-required data-indent=1} | string | 商户订单号
| mch_id {data-required data-indent=1} | string | 商户号
| sub_mch_id {data-indent=1} | string | 子商户号
| msgappid {data-indent=1} | string | 触达用户appid
| wxappid {data-required data-indent=1} | string | 公众账号appid
| send_name {data-required data-indent=1} | string | 商户名称
| re_openid {data-required data-indent=1} | string | 用户openid
| total_amount {data-required data-indent=1} | integer | 付款金额
| total_num {data-required data-indent=1} | integer | 红包发放总人数
| wishing {data-required data-indent=1} | string | 红包祝福语
| client_ip {data-required data-indent=1} | string | Ip地址
| act_name {data-required data-indent=1} | string | 活动名称
| remark {data-required data-indent=1} | string | 备注
| scene_id {data-indent=1} | string | 场景id<br/>`PRODUCT_1` \| `PRODUCT_2` \| `PRODUCT_3` \| `PRODUCT_4` \| `PRODUCT_5` \| `PRODUCT_6` \| `PRODUCT_7` \| `PRODUCT_8` 枚举值之一
| risk_info {data-indent=1} | string {data-tooltip=使用urlencode后的字符串 data-encoded=by-urlencode} | 活动信息
| {colspan=3 .im-table-line}
| posttime {data-indent=2} | number | 用户操作的时间戳
| mobile {data-indent=2} | string | 业务系统账号的手机号
| deviceid {data-indent=2} | string | MAC地址或者设备唯一标识
| clientversion {data-indent=2} | string | 用户操作的客户端版本

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->mmpaymkttransfers->sendredpack->postAsync([
  'security' => true,
  'xml' => [
    'mch_billno'   => '10000098201411111234567890',
    'mch_id'       => '10000098',
    'sub_mch_id'   => '10000090',
    'msgappid'     => 'wx8888888888888888',
    'wxappid'      => 'wx8888888888888888',
    'send_name'    => '天虹百货',
    're_openid'    => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'total_amount' => '1000',
    'total_num'    => '1',
    'wishing'      => '感谢您参加猜灯谜活动，祝您元宵节快乐！',
    'client_ip'    => '192.168.0.1',
    'act_name'     => '猜灯谜抢红包活动',
    'remark'       => '猜越多得越多，快来抢！',
    'scene_id'     => 'PRODUCT_8',
    'risk_info'    => \urlencode(\WeChatPay\Formatter::queryStringLike([
      'posttime'      => 1717171199,
      'mobile'        => '122344545',
      'deviceid'      => 'IOS',
      'clientversion' => '234134',
    ])),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/mmpaymkttransfers/sendredpack')->postAsync([
  'security' => true,
  'xml' => [
    'mch_billno'   => '10000098201411111234567890',
    'mch_id'       => '10000098',
    'sub_mch_id'   => '10000090',
    'msgappid'     => 'wx8888888888888888',
    'wxappid'      => 'wx8888888888888888',
    'send_name'    => '天虹百货',
    're_openid'    => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'total_amount' => '1000',
    'total_num'    => '1',
    'wishing'      => '感谢您参加猜灯谜活动，祝您元宵节快乐！',
    'client_ip'    => '192.168.0.1',
    'act_name'     => '猜灯谜抢红包活动',
    'remark'       => '猜越多得越多，快来抢！',
    'scene_id'     => 'PRODUCT_8',
    'risk_info'    => \urlencode(\WeChatPay\Formatter::queryStringLike([
      'posttime'      => 1717171199,
      'mobile'        => '122344545',
      'deviceid'      => 'IOS',
      'clientversion' => '234134',
    ])),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/mmpaymkttransfers/sendredpack']->postAsync([
  'security' => true,
  'xml' => [
    'mch_billno'   => '10000098201411111234567890',
    'mch_id'       => '10000098',
    'sub_mch_id'   => '10000090',
    'msgappid'     => 'wx8888888888888888',
    'wxappid'      => 'wx8888888888888888',
    'send_name'    => '天虹百货',
    're_openid'    => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'total_amount' => '1000',
    'total_num'    => '1',
    'wishing'      => '感谢您参加猜灯谜活动，祝您元宵节快乐！',
    'client_ip'    => '192.168.0.1',
    'act_name'     => '猜灯谜抢红包活动',
    'remark'       => '猜越多得越多，快来抢！',
    'scene_id'     => 'PRODUCT_8',
    'risk_info'    => \urlencode(\WeChatPay\Formatter::queryStringLike([
      'posttime'      => 1717171199,
      'mobile'        => '122344545',
      'deviceid'      => 'IOS',
      'clientversion' => '234134',
    ])),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->mmpaymkttransfers->sendredpack->post([
  'security' => true,
  'xml' => [
    'mch_billno'   => '10000098201411111234567890',
    'mch_id'       => '10000098',
    'sub_mch_id'   => '10000090',
    'msgappid'     => 'wx8888888888888888',
    'wxappid'      => 'wx8888888888888888',
    'send_name'    => '天虹百货',
    're_openid'    => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'total_amount' => '1000',
    'total_num'    => '1',
    'wishing'      => '感谢您参加猜灯谜活动，祝您元宵节快乐！',
    'client_ip'    => '192.168.0.1',
    'act_name'     => '猜灯谜抢红包活动',
    'remark'       => '猜越多得越多，快来抢！',
    'scene_id'     => 'PRODUCT_8',
    'risk_info'    => \urlencode(\WeChatPay\Formatter::queryStringLike([
      'posttime'      => 1717171199,
      'mobile'        => '122344545',
      'deviceid'      => 'IOS',
      'clientversion' => '234134',
    ])),
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/mmpaymkttransfers/sendredpack')->post([
  'security' => true,
  'xml' => [
    'mch_billno'   => '10000098201411111234567890',
    'mch_id'       => '10000098',
    'sub_mch_id'   => '10000090',
    'msgappid'     => 'wx8888888888888888',
    'wxappid'      => 'wx8888888888888888',
    'send_name'    => '天虹百货',
    're_openid'    => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'total_amount' => '1000',
    'total_num'    => '1',
    'wishing'      => '感谢您参加猜灯谜活动，祝您元宵节快乐！',
    'client_ip'    => '192.168.0.1',
    'act_name'     => '猜灯谜抢红包活动',
    'remark'       => '猜越多得越多，快来抢！',
    'scene_id'     => 'PRODUCT_8',
    'risk_info'    => \urlencode(\WeChatPay\Formatter::queryStringLike([
      'posttime'      => 1717171199,
      'mobile'        => '122344545',
      'deviceid'      => 'IOS',
      'clientversion' => '234134',
    ])),
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/mmpaymkttransfers/sendredpack']->post([
  'security' => true,
  'xml' => [
    'mch_billno'   => '10000098201411111234567890',
    'mch_id'       => '10000098',
    'sub_mch_id'   => '10000090',
    'msgappid'     => 'wx8888888888888888',
    'wxappid'      => 'wx8888888888888888',
    'send_name'    => '天虹百货',
    're_openid'    => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'total_amount' => '1000',
    'total_num'    => '1',
    'wishing'      => '感谢您参加猜灯谜活动，祝您元宵节快乐！',
    'client_ip'    => '192.168.0.1',
    'act_name'     => '猜灯谜抢红包活动',
    'remark'       => '猜越多得越多，快来抢！',
    'scene_id'     => 'PRODUCT_8',
    'risk_info'    => \urlencode(\WeChatPay\Formatter::queryStringLike([
      'posttime'      => 1717171199,
      'mobile'        => '122344545',
      'deviceid'      => 'IOS',
      'clientversion' => '234134',
    ])),
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
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| mch_billno {data-required} | string | 商户订单号
| mch_id {data-required} | string | 商户号
| wxappid {data-required} | string | 公众账号appid
| re_openid {data-required} | string | 用户openid
| total_amount {data-required} | integer | 付款金额
| send_listid {data-required} | string | 微信单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011983137)
