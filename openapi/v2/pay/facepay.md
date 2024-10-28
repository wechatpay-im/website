---
title: 提交刷脸支付
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| deposit {data-indent=1} | string | 是否押金支付
| appid {data-indent=1} | string | 公众账号ID
| sub_appid {data-indent=1} | string | 子商户公众账号ID
| mch_id {data-indent=1} | string | 商户号
| sub_mch_id {data-indent=1} | string | 子商户号
| device_info {data-indent=1} | string | 设备号
| body {data-indent=1} | string | 商品描述
| detail {data-indent=1} | string | 商品详情
| attach {data-indent=1} | string | 附加数据
| out_trade_no {data-indent=1} | string | 商户订单号
| total_fee {data-indent=1} | integer | 总金额
| fee_type {data-indent=1} | string | 货币类型
| spbill_create_ip {data-indent=1} | string | 终端IP
| goods_tag {data-indent=1} | string | 订单优惠标记
| limit_pay {data-indent=1} | string | 指定支付方式
| time_start {data-indent=1} | string | 交易起始时间
| time_expire {data-indent=1} | string | 交易结束时间
| openid {data-indent=1} | string | 用户标识
| face_code {data-indent=1} | string | 授权码
| sign_type {data-indent=1} | string | 签名类型

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->pay->facepay->postAsync([
  'xml' => [
    'deposit' => 'Y',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000100',
    'device_info' => '013467007045764',
    'body' => 'image形象店-深圳腾大- QQ公仔',
    'detail' => '',
    'attach' => '说明',
    'out_trade_no' => '1217472501201407033233367018',
    'total_fee' => '888',
    'fee_type' => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag' => '1234',
    'limit_pay' => 'no_credit',
    'time_start' => '20091225091010',
    'time_expire' => '20091227091010',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'face_code' => 'b713b5d2-666c-48',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/pay/facepay')->postAsync([
  'xml' => [
    'deposit' => 'Y',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000100',
    'device_info' => '013467007045764',
    'body' => 'image形象店-深圳腾大- QQ公仔',
    'detail' => '',
    'attach' => '说明',
    'out_trade_no' => '1217472501201407033233367018',
    'total_fee' => '888',
    'fee_type' => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag' => '1234',
    'limit_pay' => 'no_credit',
    'time_start' => '20091225091010',
    'time_expire' => '20091227091010',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'face_code' => 'b713b5d2-666c-48',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/pay/facepay']->postAsync([
  'xml' => [
    'deposit' => 'Y',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000100',
    'device_info' => '013467007045764',
    'body' => 'image形象店-深圳腾大- QQ公仔',
    'detail' => '',
    'attach' => '说明',
    'out_trade_no' => '1217472501201407033233367018',
    'total_fee' => '888',
    'fee_type' => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag' => '1234',
    'limit_pay' => 'no_credit',
    'time_start' => '20091225091010',
    'time_expire' => '20091227091010',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'face_code' => 'b713b5d2-666c-48',
    'sign_type' => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->pay->facepay->post([
  'xml' => [
    'deposit' => 'Y',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000100',
    'device_info' => '013467007045764',
    'body' => 'image形象店-深圳腾大- QQ公仔',
    'detail' => '',
    'attach' => '说明',
    'out_trade_no' => '1217472501201407033233367018',
    'total_fee' => '888',
    'fee_type' => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag' => '1234',
    'limit_pay' => 'no_credit',
    'time_start' => '20091225091010',
    'time_expire' => '20091227091010',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'face_code' => 'b713b5d2-666c-48',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/pay/facepay')->post([
  'xml' => [
    'deposit' => 'Y',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000100',
    'device_info' => '013467007045764',
    'body' => 'image形象店-深圳腾大- QQ公仔',
    'detail' => '',
    'attach' => '说明',
    'out_trade_no' => '1217472501201407033233367018',
    'total_fee' => '888',
    'fee_type' => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag' => '1234',
    'limit_pay' => 'no_credit',
    'time_start' => '20091225091010',
    'time_expire' => '20091227091010',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'face_code' => 'b713b5d2-666c-48',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/pay/facepay']->post([
  'xml' => [
    'deposit' => 'Y',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000100',
    'sub_mch_id' => '1900000100',
    'device_info' => '013467007045764',
    'body' => 'image形象店-深圳腾大- QQ公仔',
    'detail' => '',
    'attach' => '说明',
    'out_trade_no' => '1217472501201407033233367018',
    'total_fee' => '888',
    'fee_type' => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag' => '1234',
    'limit_pay' => 'no_credit',
    'time_start' => '20091225091010',
    'time_expire' => '20091227091010',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'face_code' => 'b713b5d2-666c-48',
    'sign_type' => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code | string | 返回状态码
| return_msg | string | 返回信息
| appid | string | 公众账号ID
| sub_appid | string | 子商户公众账号ID
| mch_id | string | 商户号
| sub_mch_id | string | 子商户号
| device_info | string | 设备号
| nonce_str | string | 随机字符串
| sign | string | 签名
| result_code | string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| openid | string | 用户标识
| is_subscribe | string | 是否关注公众账号
| sub_openid | string | 用户子标识
| sub_is_subscribe | string | 是否关注子公众账号
| trade_type | string | 交易类型
| bank_type | string | 付款银行
| fee_type | string | 标价币种
| total_fee | integer | 标价金额
| cash_fee_type | string | 现金支付币种
| cash_fee | integer | 现金支付金额
| settlement_total_fee | integer | 应结订单金额
| coupon_fee | integer | 代金券金额
| transaction_id | string | 微信支付订单号
| out_trade_no | string | 商户订单号
| attach | string | 商家数据包
| time_end | string | 支付完成时间

{.im-table #response}

参阅 [官方人脸支付文档](https://share.weiyun.com/5dxUgCw)
