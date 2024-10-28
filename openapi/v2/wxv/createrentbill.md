---
title: 创建租借订单
description: 创建订单后如果超过一小时用户没有进行确认订单操作,订单将失效,无法被用户确认。
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
| goods_name {data-indent=1} | string | 商品名称
| start_time {data-indent=1} | string | 租用时间
| end_time {data-indent=1} | string | 预定归还时间
| service_location {data-indent=1} | string | 租用地点
| deposit_amount {data-indent=1} | integer | 押金总额
| rent_unit {data-indent=1} | string | 租金规则 计费单位
| rent_unit_fee {data-indent=1} | integer | 租金规则 计费单价费用
| rent_fee_desc {data-indent=1} | string | 租金规则 计费说明
| attach {data-indent=1} | string | 商户数据包
| cert_serial_no {data-indent=1} | string | 平台证书序列号
| openid {data-indent=1} | string | 用户标识
| name {data-indent=1} | string | 用户姓名
| phone {data-indent=1} | string | 用户手机号
| userid {data-indent=1} | string | 用户身份证ID
| address {data-indent=1} | string | 用户收货地址
| security | boolean | 声明加载商户API证书<br/>固定值`true`

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->wxv->createrentbill->postAsync([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'service_id' => '',
    'goods_name' => '充电宝一个',
    'start_time' => '20091225091010',
    'end_time' => '20091225091010',
    'service_location' => '嗨客时尚主题展餐厅',
    'deposit_amount' => '0',
    'rent_unit' => 'FEN_1_HOUR',
    'rent_unit_fee' => '8000',
    'rent_fee_desc' => '租金前1小时免费，每日封顶10元。',
    'attach' => '',
    'cert_serial_no' => '45233302',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'name' => '',
    'phone' => '',
    'userid' => '',
    'address' => '',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/wxv/createrentbill')->postAsync([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'service_id' => '',
    'goods_name' => '充电宝一个',
    'start_time' => '20091225091010',
    'end_time' => '20091225091010',
    'service_location' => '嗨客时尚主题展餐厅',
    'deposit_amount' => '0',
    'rent_unit' => 'FEN_1_HOUR',
    'rent_unit_fee' => '8000',
    'rent_fee_desc' => '租金前1小时免费，每日封顶10元。',
    'attach' => '',
    'cert_serial_no' => '45233302',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'name' => '',
    'phone' => '',
    'userid' => '',
    'address' => '',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/wxv/createrentbill']->postAsync([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'service_id' => '',
    'goods_name' => '充电宝一个',
    'start_time' => '20091225091010',
    'end_time' => '20091225091010',
    'service_location' => '嗨客时尚主题展餐厅',
    'deposit_amount' => '0',
    'rent_unit' => 'FEN_1_HOUR',
    'rent_unit_fee' => '8000',
    'rent_fee_desc' => '租金前1小时免费，每日封顶10元。',
    'attach' => '',
    'cert_serial_no' => '45233302',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'name' => '',
    'phone' => '',
    'userid' => '',
    'address' => '',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->wxv->createrentbill->post([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'service_id' => '',
    'goods_name' => '充电宝一个',
    'start_time' => '20091225091010',
    'end_time' => '20091225091010',
    'service_location' => '嗨客时尚主题展餐厅',
    'deposit_amount' => '0',
    'rent_unit' => 'FEN_1_HOUR',
    'rent_unit_fee' => '8000',
    'rent_fee_desc' => '租金前1小时免费，每日封顶10元。',
    'attach' => '',
    'cert_serial_no' => '45233302',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'name' => '',
    'phone' => '',
    'userid' => '',
    'address' => '',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/wxv/createrentbill')->post([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'service_id' => '',
    'goods_name' => '充电宝一个',
    'start_time' => '20091225091010',
    'end_time' => '20091225091010',
    'service_location' => '嗨客时尚主题展餐厅',
    'deposit_amount' => '0',
    'rent_unit' => 'FEN_1_HOUR',
    'rent_unit_fee' => '8000',
    'rent_fee_desc' => '租金前1小时免费，每日封顶10元。',
    'attach' => '',
    'cert_serial_no' => '45233302',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'name' => '',
    'phone' => '',
    'userid' => '',
    'address' => '',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/wxv/createrentbill']->post([
  'xml' => [
    'version' => '1.0',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'out_order_no' => '1234323JKHDFE1243252',
    'service_id' => '',
    'goods_name' => '充电宝一个',
    'start_time' => '20091225091010',
    'end_time' => '20091225091010',
    'service_location' => '嗨客时尚主题展餐厅',
    'deposit_amount' => '0',
    'rent_unit' => 'FEN_1_HOUR',
    'rent_unit_fee' => '8000',
    'rent_fee_desc' => '租金前1小时免费，每日封顶10元。',
    'attach' => '',
    'cert_serial_no' => '45233302',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'name' => '',
    'phone' => '',
    'userid' => '',
    'address' => '',
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
| miniprogram_appid | string | 小程序跳转appid
| miniprogram_path | string | 小程序跳转路径
| miniprogram_username | string | 小程序跳转username
| package | string | 跳转微信侧小程序订单数据

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=18_1&index=2)
