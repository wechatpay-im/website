---
title: 向微信用户个人付款
description: 目前支持向指定微信用户的openid付款。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| security {data-required} | `true` | 声明加载商户API证书
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| mch_appid {data-required data-indent=1} | string | 商户账号appid
| mchid {data-required data-indent=1} | string | 商户号
| device_info {data-indent=1} | string | 设备号
| partner_trade_no {data-required data-indent=1} | string | 商户订单号
| openid {data-required data-indent=1} | string | 用户openid
| check_name {data-required data-indent=1} | string | 校验用户姓名选项
| re_user_name {data-indent=1} | string | 收款用户姓名
| amount {data-required data-indent=1} | integer | 金额
| desc {data-required data-indent=1} | string | 企业付款备注
| spbill_create_ip {data-required data-indent=1} | string | Ip地址
| scene {data-indent=1} | string | 付款场景，`BRAND_REDPACKET`：品牌红包，其他值或不传则默认为普通付款到零钱
| brand_id {data-indent=1} | integer | 品牌ID，品牌在微信支付的唯一标识。仅在付款场景为品牌红包时必填。
| finder_template_id {data-indent=1} | string | 消息模板ID，品牌在微信支付的唯一标识。仅在付款场景为品牌红包时必填。

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->mmpaymkttransfers->promotion->transfers->postAsync([
  'security' => true,
  'xml' => [
    'mch_appid'          => 'wx8888888888888888',
    'mchid'              => '1900000109',
    'device_info'        => '013467007045764',
    'partner_trade_no'   => '10000098201411111234567890',
    'openid'             => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'check_name'         => 'FORCE_CHECK',
    're_user_name'       => '王小王',
    'amount'             => '10099',
    'desc'               => '理赔',
    'spbill_create_ip'   => '192.168.0.1',
    'scene'              => 'BRAND_REDPACKET',
    'brand_id'           => '1234',
    'finder_template_id' => '1243100000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/mmpaymkttransfers/promotion/transfers')->postAsync([
  'security' => true,
  'xml' => [
    'mch_appid'          => 'wx8888888888888888',
    'mchid'              => '1900000109',
    'device_info'        => '013467007045764',
    'partner_trade_no'   => '10000098201411111234567890',
    'openid'             => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'check_name'         => 'FORCE_CHECK',
    're_user_name'       => '王小王',
    'amount'             => '10099',
    'desc'               => '理赔',
    'spbill_create_ip'   => '192.168.0.1',
    'scene'              => 'BRAND_REDPACKET',
    'brand_id'           => '1234',
    'finder_template_id' => '1243100000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/mmpaymkttransfers/promotion/transfers']->postAsync([
  'security' => true,
  'xml' => [
    'mch_appid'          => 'wx8888888888888888',
    'mchid'              => '1900000109',
    'device_info'        => '013467007045764',
    'partner_trade_no'   => '10000098201411111234567890',
    'openid'             => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'check_name'         => 'FORCE_CHECK',
    're_user_name'       => '王小王',
    'amount'             => '10099',
    'desc'               => '理赔',
    'spbill_create_ip'   => '192.168.0.1',
    'scene'              => 'BRAND_REDPACKET',
    'brand_id'           => '1234',
    'finder_template_id' => '1243100000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->mmpaymkttransfers->promotion->transfers->post([
  'security' => true,
  'xml' => [
    'mch_appid'          => 'wx8888888888888888',
    'mchid'              => '1900000109',
    'device_info'        => '013467007045764',
    'partner_trade_no'   => '10000098201411111234567890',
    'openid'             => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'check_name'         => 'FORCE_CHECK',
    're_user_name'       => '王小王',
    'amount'             => '10099',
    'desc'               => '理赔',
    'spbill_create_ip'   => '192.168.0.1',
    'scene'              => 'BRAND_REDPACKET',
    'brand_id'           => '1234',
    'finder_template_id' => '1243100000000000',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/mmpaymkttransfers/promotion/transfers')->post([
  'security' => true,
  'xml' => [
    'mch_appid'          => 'wx8888888888888888',
    'mchid'              => '1900000109',
    'device_info'        => '013467007045764',
    'partner_trade_no'   => '10000098201411111234567890',
    'openid'             => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'check_name'         => 'FORCE_CHECK',
    're_user_name'       => '王小王',
    'amount'             => '10099',
    'desc'               => '理赔',
    'spbill_create_ip'   => '192.168.0.1',
    'scene'              => 'BRAND_REDPACKET',
    'brand_id'           => '1234',
    'finder_template_id' => '1243100000000000',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/mmpaymkttransfers/promotion/transfers']->post([
  'security' => true,
  'xml' => [
    'mch_appid'          => 'wx8888888888888888',
    'mchid'              => '1900000109',
    'device_info'        => '013467007045764',
    'partner_trade_no'   => '10000098201411111234567890',
    'openid'             => 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
    'check_name'         => 'FORCE_CHECK',
    're_user_name'       => '王小王',
    'amount'             => '10099',
    'desc'               => '理赔',
    'spbill_create_ip'   => '192.168.0.1',
    'scene'              => 'BRAND_REDPACKET',
    'brand_id'           => '1234',
    'finder_template_id' => '1243100000000000',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| mch_appid | string | 商户appid
| mchid | string | 商户号
| device_info | string | 设备号
| nonce_str | string | 随机字符串
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| partner_trade_no {data-required} | string | 商户订单号
| payment_no {data-required} | string | 微信付款单号
| payment_time {data-required} | string | 付款成功时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay.php?chapter=14_2)
