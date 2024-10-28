---
title: 支付押金（JSAPI/APP支付）
description: 微信支付提供了四种付款方式供用户支付押金：付款码支付、人脸支付、JSAPI支付、APP支付。商户可根据场景需要选择支持哪种付款方式，也可以四种都支持，即四种方式都对接。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| appid {data-indent=1} | string | 服务商应用ID
| mch_id {data-indent=1} | string | 商户号
| sub_appid {data-indent=1} | string | 子商户应用ID
| sub_mch_id {data-indent=1} | string | 子商户号
| device_info {data-indent=1} | string | 设备号
| sign_type {data-indent=1} | string | 签名类型
| body {data-indent=1} | string | 商品描述
| detail {data-indent=1} | string | 商品详情
| attach {data-indent=1} | string | 附加数据
| out_trade_no {data-indent=1} | string | 商户订单号
| fee_type {data-indent=1} | string | 货币类型
| total_fee {data-indent=1} | integer | 总金额
| spbill_create_ip {data-indent=1} | string | 终端IP
| time_start {data-indent=1} | string | 交易起始时间
| time_expire {data-indent=1} | string | 交易结束时间
| notify_url {data-indent=1} | string | 通知地址
| trade_type {data-indent=1} | string | 交易类型
| product_id {data-indent=1} | string | 商品ID
| limit_pay {data-indent=1} | string | 指定支付方式
| openid {data-indent=1} | string | 用户标识
| sub_openid {data-indent=1} | string | 用户子标识
| receipt {data-indent=1} | string | 电子发票入口开放标识
| scene_info {data-indent=1} | string | 场景信息
| id {data-indent=1} | string | 门店id
| name {data-indent=1} | string | 门店名称
| area_code {data-indent=1} | string | 门店行政区划码
| address {data-indent=1} | string | 门店详细地址

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->deposit->unifiedorder->postAsync([
  'xml' => [
    'appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
    'sub_mch_id' => '1900000109',
    'device_info' => '013467007045764',
    'sign_type' => 'HMAC-SHA256',
    'body' => '腾讯充值中心-QQ会员充值',
    'detail' => 'Ipadmini16G白色',
    'attach' => '说明',
    'out_trade_no' => '1217752501201407033233368018',
    'fee_type' => 'CNY',
    'total_fee' => '888',
    'spbill_create_ip' => '123.12.12.123',
    'time_start' => '20091225091010',
    'time_expire' => '20091227091010',
    'notify_url' => 'http://www.weixin.qq.com/wxpay/pay.php',
    'trade_type' => 'JSAPI',
    'product_id' => '12235413214070356458058',
    'limit_pay' => 'no_credit',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'receipt' => 'Y',
    'scene_info' => '{"store_info":{"id":"SZTX001","name":"腾大餐厅","area_code":"440305","address":"科技园中一路腾讯大厦"}}',
    'id' => 'SZTX001',
    'name' => '腾讯大厦腾大餐厅',
    'area_code' => '440305',
    'address' => '科技园中一路腾讯大厦',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/deposit/unifiedorder')->postAsync([
  'xml' => [
    'appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
    'sub_mch_id' => '1900000109',
    'device_info' => '013467007045764',
    'sign_type' => 'HMAC-SHA256',
    'body' => '腾讯充值中心-QQ会员充值',
    'detail' => 'Ipadmini16G白色',
    'attach' => '说明',
    'out_trade_no' => '1217752501201407033233368018',
    'fee_type' => 'CNY',
    'total_fee' => '888',
    'spbill_create_ip' => '123.12.12.123',
    'time_start' => '20091225091010',
    'time_expire' => '20091227091010',
    'notify_url' => 'http://www.weixin.qq.com/wxpay/pay.php',
    'trade_type' => 'JSAPI',
    'product_id' => '12235413214070356458058',
    'limit_pay' => 'no_credit',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'receipt' => 'Y',
    'scene_info' => '{"store_info":{"id":"SZTX001","name":"腾大餐厅","area_code":"440305","address":"科技园中一路腾讯大厦"}}',
    'id' => 'SZTX001',
    'name' => '腾讯大厦腾大餐厅',
    'area_code' => '440305',
    'address' => '科技园中一路腾讯大厦',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/deposit/unifiedorder']->postAsync([
  'xml' => [
    'appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
    'sub_mch_id' => '1900000109',
    'device_info' => '013467007045764',
    'sign_type' => 'HMAC-SHA256',
    'body' => '腾讯充值中心-QQ会员充值',
    'detail' => 'Ipadmini16G白色',
    'attach' => '说明',
    'out_trade_no' => '1217752501201407033233368018',
    'fee_type' => 'CNY',
    'total_fee' => '888',
    'spbill_create_ip' => '123.12.12.123',
    'time_start' => '20091225091010',
    'time_expire' => '20091227091010',
    'notify_url' => 'http://www.weixin.qq.com/wxpay/pay.php',
    'trade_type' => 'JSAPI',
    'product_id' => '12235413214070356458058',
    'limit_pay' => 'no_credit',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'receipt' => 'Y',
    'scene_info' => '{"store_info":{"id":"SZTX001","name":"腾大餐厅","area_code":"440305","address":"科技园中一路腾讯大厦"}}',
    'id' => 'SZTX001',
    'name' => '腾讯大厦腾大餐厅',
    'area_code' => '440305',
    'address' => '科技园中一路腾讯大厦',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->deposit->unifiedorder->post([
  'xml' => [
    'appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
    'sub_mch_id' => '1900000109',
    'device_info' => '013467007045764',
    'sign_type' => 'HMAC-SHA256',
    'body' => '腾讯充值中心-QQ会员充值',
    'detail' => 'Ipadmini16G白色',
    'attach' => '说明',
    'out_trade_no' => '1217752501201407033233368018',
    'fee_type' => 'CNY',
    'total_fee' => '888',
    'spbill_create_ip' => '123.12.12.123',
    'time_start' => '20091225091010',
    'time_expire' => '20091227091010',
    'notify_url' => 'http://www.weixin.qq.com/wxpay/pay.php',
    'trade_type' => 'JSAPI',
    'product_id' => '12235413214070356458058',
    'limit_pay' => 'no_credit',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'receipt' => 'Y',
    'scene_info' => '{"store_info":{"id":"SZTX001","name":"腾大餐厅","area_code":"440305","address":"科技园中一路腾讯大厦"}}',
    'id' => 'SZTX001',
    'name' => '腾讯大厦腾大餐厅',
    'area_code' => '440305',
    'address' => '科技园中一路腾讯大厦',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/deposit/unifiedorder')->post([
  'xml' => [
    'appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
    'sub_mch_id' => '1900000109',
    'device_info' => '013467007045764',
    'sign_type' => 'HMAC-SHA256',
    'body' => '腾讯充值中心-QQ会员充值',
    'detail' => 'Ipadmini16G白色',
    'attach' => '说明',
    'out_trade_no' => '1217752501201407033233368018',
    'fee_type' => 'CNY',
    'total_fee' => '888',
    'spbill_create_ip' => '123.12.12.123',
    'time_start' => '20091225091010',
    'time_expire' => '20091227091010',
    'notify_url' => 'http://www.weixin.qq.com/wxpay/pay.php',
    'trade_type' => 'JSAPI',
    'product_id' => '12235413214070356458058',
    'limit_pay' => 'no_credit',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'receipt' => 'Y',
    'scene_info' => '{"store_info":{"id":"SZTX001","name":"腾大餐厅","area_code":"440305","address":"科技园中一路腾讯大厦"}}',
    'id' => 'SZTX001',
    'name' => '腾讯大厦腾大餐厅',
    'area_code' => '440305',
    'address' => '科技园中一路腾讯大厦',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/deposit/unifiedorder']->post([
  'xml' => [
    'appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_appid' => 'wx8888888888888888',
    'sub_mch_id' => '1900000109',
    'device_info' => '013467007045764',
    'sign_type' => 'HMAC-SHA256',
    'body' => '腾讯充值中心-QQ会员充值',
    'detail' => 'Ipadmini16G白色',
    'attach' => '说明',
    'out_trade_no' => '1217752501201407033233368018',
    'fee_type' => 'CNY',
    'total_fee' => '888',
    'spbill_create_ip' => '123.12.12.123',
    'time_start' => '20091225091010',
    'time_expire' => '20091227091010',
    'notify_url' => 'http://www.weixin.qq.com/wxpay/pay.php',
    'trade_type' => 'JSAPI',
    'product_id' => '12235413214070356458058',
    'limit_pay' => 'no_credit',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'receipt' => 'Y',
    'scene_info' => '{"store_info":{"id":"SZTX001","name":"腾大餐厅","area_code":"440305","address":"科技园中一路腾讯大厦"}}',
    'id' => 'SZTX001',
    'name' => '腾讯大厦腾大餐厅',
    'area_code' => '440305',
    'address' => '科技园中一路腾讯大厦',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code | string | 返回状态码
| return_msg | string | 返回信息
| appid | string | 服务商应用ID
| mch_id | string | 商户号
| sub_appid | string | 子商户应用ID
| sub_mch_id | string | 子商户号
| device_info | string | 设备号
| nonce_str | string | 随机字符串
| sign | string | 签名
| result_code | string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| trade_type | string | 交易类型
| prepay_id | string | 预支付交易会话标识
| code_url | string | 二维码链接

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/deposit_sl.php?chapter=27_7&index=1) [官方文档](https://pay.weixin.qq.com/wiki/doc/api/deposit_sl.php?chapter=27_8&index=3)