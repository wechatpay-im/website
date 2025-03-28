---
title: 创建速住订单
description: 创建订单后如果超过一小时用户没有进行确认订单操作
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| security {data-required} | `true` | 声明加载商户API证书
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| version {data-required data-indent=1} | string | 接口版本号<br/>`1.0` 枚举值
| appid {data-required data-indent=1} | string | 公众账号ID
| mch_id {data-required data-indent=1} | string | 商户号
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值
| out_order_no {data-required data-indent=1} | string | 商户服务订单号
| service_id {data-required data-indent=1} | string | 服务ID
| room {data-required data-indent=1} | string | 房间
| start_time {data-required data-indent=1} | string | 入住时间
| end_time {data-required data-indent=1} | string | 预定离店时间
| service_location {data-required data-indent=1} | string | 酒店
| deposit_amount {data-required data-indent=1} | integer | 押金金额
| room_rate {data-required data-indent=1} | integer | 房费
| room_rate_desc {data-indent=1} | string | 房费说明
| attach {data-indent=1} | string | 回调数据包
| cancel_rule {data-required data-indent=1} | string | 取消规则标签
| cancel_rule_desc {data-required data-indent=1} | string | 取消规则描述
| cert_serial_no {data-required data-indent=1} | string | 平台证书序列号
| openid {data-indent=1} | string | 用户标识
| name {data-indent=1} | string | 用户姓名
| phone {data-indent=1} | string | 用户手机号
| userid {data-indent=1} | string | 用户身份证ID
| address {data-indent=1} | string | 用户收货地址

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->wxv->createhotelbill->postAsync([
  'security' => true,
  'xml' => [
    'version'          => '1.0',
    'appid'            => 'wxd678efh567hg6787',
    'mch_id'           => '1230000109',
    'sign_type'        => 'HMAC-SHA256',
    'out_order_no'     => '1234323JKHDFE1243252',
    'service_id'       => '',
    'room'             => '几木双床房2间',
    'start_time'       => '20091225091010',
    'end_time'         => '20091225091010',
    'service_location' => '北京亦庄亚朵酒店',
    'deposit_amount'   => '80000',
    'room_rate'        => '20000',
    'room_rate_desc'   => '共住3晚，每晚100元',
    'attach'           => '',
    'cancel_rule'      => '',
    'cancel_rule_desc' => '',
    'cert_serial_no'   => '45233302',
    'openid'           => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'name'             => '',
    'phone'            => '',
    'userid'           => '',
    'address'          => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/wxv/createhotelbill')->postAsync([
  'security' => true,
  'xml' => [
    'version'          => '1.0',
    'appid'            => 'wxd678efh567hg6787',
    'mch_id'           => '1230000109',
    'sign_type'        => 'HMAC-SHA256',
    'out_order_no'     => '1234323JKHDFE1243252',
    'service_id'       => '',
    'room'             => '几木双床房2间',
    'start_time'       => '20091225091010',
    'end_time'         => '20091225091010',
    'service_location' => '北京亦庄亚朵酒店',
    'deposit_amount'   => '80000',
    'room_rate'        => '20000',
    'room_rate_desc'   => '共住3晚，每晚100元',
    'attach'           => '',
    'cancel_rule'      => '',
    'cancel_rule_desc' => '',
    'cert_serial_no'   => '45233302',
    'openid'           => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'name'             => '',
    'phone'            => '',
    'userid'           => '',
    'address'          => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/wxv/createhotelbill']->postAsync([
  'security' => true,
  'xml' => [
    'version'          => '1.0',
    'appid'            => 'wxd678efh567hg6787',
    'mch_id'           => '1230000109',
    'sign_type'        => 'HMAC-SHA256',
    'out_order_no'     => '1234323JKHDFE1243252',
    'service_id'       => '',
    'room'             => '几木双床房2间',
    'start_time'       => '20091225091010',
    'end_time'         => '20091225091010',
    'service_location' => '北京亦庄亚朵酒店',
    'deposit_amount'   => '80000',
    'room_rate'        => '20000',
    'room_rate_desc'   => '共住3晚，每晚100元',
    'attach'           => '',
    'cancel_rule'      => '',
    'cancel_rule_desc' => '',
    'cert_serial_no'   => '45233302',
    'openid'           => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'name'             => '',
    'phone'            => '',
    'userid'           => '',
    'address'          => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->wxv->createhotelbill->post([
  'security' => true,
  'xml' => [
    'version'          => '1.0',
    'appid'            => 'wxd678efh567hg6787',
    'mch_id'           => '1230000109',
    'sign_type'        => 'HMAC-SHA256',
    'out_order_no'     => '1234323JKHDFE1243252',
    'service_id'       => '',
    'room'             => '几木双床房2间',
    'start_time'       => '20091225091010',
    'end_time'         => '20091225091010',
    'service_location' => '北京亦庄亚朵酒店',
    'deposit_amount'   => '80000',
    'room_rate'        => '20000',
    'room_rate_desc'   => '共住3晚，每晚100元',
    'attach'           => '',
    'cancel_rule'      => '',
    'cancel_rule_desc' => '',
    'cert_serial_no'   => '45233302',
    'openid'           => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'name'             => '',
    'phone'            => '',
    'userid'           => '',
    'address'          => '',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/wxv/createhotelbill')->post([
  'security' => true,
  'xml' => [
    'version'          => '1.0',
    'appid'            => 'wxd678efh567hg6787',
    'mch_id'           => '1230000109',
    'sign_type'        => 'HMAC-SHA256',
    'out_order_no'     => '1234323JKHDFE1243252',
    'service_id'       => '',
    'room'             => '几木双床房2间',
    'start_time'       => '20091225091010',
    'end_time'         => '20091225091010',
    'service_location' => '北京亦庄亚朵酒店',
    'deposit_amount'   => '80000',
    'room_rate'        => '20000',
    'room_rate_desc'   => '共住3晚，每晚100元',
    'attach'           => '',
    'cancel_rule'      => '',
    'cancel_rule_desc' => '',
    'cert_serial_no'   => '45233302',
    'openid'           => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'name'             => '',
    'phone'            => '',
    'userid'           => '',
    'address'          => '',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/wxv/createhotelbill']->post([
  'security' => true,
  'xml' => [
    'version'          => '1.0',
    'appid'            => 'wxd678efh567hg6787',
    'mch_id'           => '1230000109',
    'sign_type'        => 'HMAC-SHA256',
    'out_order_no'     => '1234323JKHDFE1243252',
    'service_id'       => '',
    'room'             => '几木双床房2间',
    'start_time'       => '20091225091010',
    'end_time'         => '20091225091010',
    'service_location' => '北京亦庄亚朵酒店',
    'deposit_amount'   => '80000',
    'room_rate'        => '20000',
    'room_rate_desc'   => '共住3晚，每晚100元',
    'attach'           => '',
    'cancel_rule'      => '',
    'cancel_rule_desc' => '',
    'cert_serial_no'   => '45233302',
    'openid'           => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'name'             => '',
    'phone'            => '',
    'userid'           => '',
    'address'          => '',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回结果
| sign {data-required} | string | 签名
| nonce_str {data-required} | string | 随机字符串
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误描述
| appid {data-required} | string | 公众账号ID
| mch_id {data-required} | string | 商户号
| out_order_no {data-required} | string | 商户服务订单号
| service_id {data-required} | string | 服务ID
| order_id {data-required} | string | 微信支付服务订单号
| miniprogram_appid {data-required} | string | 小程序跳转appid
| miniprogram_path {data-required} | string | 小程序跳转路径
| miniprogram_username {data-required} | string | 小程序跳转username
| package {data-required} | string | 跳转微信侧小程序订单数据

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=19_1&index=2)
