---
title: 支付押金（人脸支付）
description: 商户通过支付押金（人脸）接口发起押金支付请求；用户使用微信支付完成押金支付，支付完成后扣除相应金额，并生成押金交易记录，下发押金支付凭证；支付成功后，为用户下发押金支付凭证；注意：当押金超过一个月未进行处理，会自动执行退款。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| deposit {data-indent=1} | string | 是否押金支付<br/>`Y` \| `N` 枚举值之一
| appid {data-required data-indent=1} | string | 公众账号ID
| sub_appid {data-indent=1} | string | 子商户公众账号ID
| mch_id {data-required data-indent=1} | string | 商户号
| sub_mch_id {data-indent=1} | string | 子商户号
| device_info {data-indent=1} | string | 设备号
| body {data-required data-indent=1} | string | 商品描述
| detail {data-indent=1} | string | 商品详情`JSON`格式字符串
| {colspan=3 .im-table-line}
| goods_detail {data-required data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 单品列表
| goods_id {data-required data-indent=3} | string | 商品编码
| wxpay_goods_id {data-indent=3} | string | 微信支付商品编码
| goods_name {data-required data-indent=3} | string | 商品名称
| goods_num {data-required data-indent=3} | number | 商品数量
| price {data-required data-indent=3} | number | 商品单价
| goods_category {data-indent=3} | string | 商品类目ID
| body {data-indent=3} | string | 商品描述信息
| attach {data-indent=1} | string | 附加数据
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| total_fee {data-required data-indent=1} | integer | 总金额
| fee_type {data-required data-indent=1} | string | 货币类型
| spbill_create_ip {data-required data-indent=1} | string | 终端IP
| goods_tag {data-indent=1} | string | 订单优惠标记
| limit_pay {data-indent=1} | string | 指定支付方式
| time_start {data-indent=1} | string | 交易起始时间
| time_expire {data-indent=1} | string | 交易结束时间
| openid {data-indent=1} | string | 用户标识
| face_code {data-required data-indent=1} | string | 授权码
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->deposit->facepay->postAsync([
  'xml' => [
    'deposit'          => 'Y',
    'appid'            => 'wx8888888888888888',
    'sub_appid'        => 'wx8888888888888888',
    'mch_id'           => '1900000100',
    'sub_mch_id'       => '1900000100',
    'device_info'      => '013467007045764',
    'body'             => 'image形象店-深圳腾大- QQ公仔',
    'detail'           => \json_encode([
      'goods_detail' => [[
        'goods_id'       => '商品编码',
        'wxpay_goods_id' => '1001',
        'goods_name'     => 'iPhone6s 16G',
        'goods_num'      => 1,
        'price'          => 528800,
        'goods_category' => '123789',
        'body'           => '苹果手机',
      ],],
    ]),
    'attach'           => '说明',
    'out_trade_no'     => '1217472501201407033233367018',
    'total_fee'        => '888',
    'fee_type'         => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag'        => '1234',
    'limit_pay'        => 'no_credit',
    'time_start'       => '20091225091010',
    'time_expire'      => '20091227091010',
    'openid'           => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'face_code'        => 'b713b5d2-666c-48',
    'sign_type'        => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/deposit/facepay')->postAsync([
  'xml' => [
    'deposit'          => 'Y',
    'appid'            => 'wx8888888888888888',
    'sub_appid'        => 'wx8888888888888888',
    'mch_id'           => '1900000100',
    'sub_mch_id'       => '1900000100',
    'device_info'      => '013467007045764',
    'body'             => 'image形象店-深圳腾大- QQ公仔',
    'detail'           => \json_encode([
      'goods_detail' => [[
        'goods_id'       => '商品编码',
        'wxpay_goods_id' => '1001',
        'goods_name'     => 'iPhone6s 16G',
        'goods_num'      => 1,
        'price'          => 528800,
        'goods_category' => '123789',
        'body'           => '苹果手机',
      ],],
    ]),
    'attach'           => '说明',
    'out_trade_no'     => '1217472501201407033233367018',
    'total_fee'        => '888',
    'fee_type'         => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag'        => '1234',
    'limit_pay'        => 'no_credit',
    'time_start'       => '20091225091010',
    'time_expire'      => '20091227091010',
    'openid'           => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'face_code'        => 'b713b5d2-666c-48',
    'sign_type'        => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/deposit/facepay']->postAsync([
  'xml' => [
    'deposit'          => 'Y',
    'appid'            => 'wx8888888888888888',
    'sub_appid'        => 'wx8888888888888888',
    'mch_id'           => '1900000100',
    'sub_mch_id'       => '1900000100',
    'device_info'      => '013467007045764',
    'body'             => 'image形象店-深圳腾大- QQ公仔',
    'detail'           => \json_encode([
      'goods_detail' => [[
        'goods_id'       => '商品编码',
        'wxpay_goods_id' => '1001',
        'goods_name'     => 'iPhone6s 16G',
        'goods_num'      => 1,
        'price'          => 528800,
        'goods_category' => '123789',
        'body'           => '苹果手机',
      ],],
    ]),
    'attach'           => '说明',
    'out_trade_no'     => '1217472501201407033233367018',
    'total_fee'        => '888',
    'fee_type'         => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag'        => '1234',
    'limit_pay'        => 'no_credit',
    'time_start'       => '20091225091010',
    'time_expire'      => '20091227091010',
    'openid'           => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'face_code'        => 'b713b5d2-666c-48',
    'sign_type'        => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->deposit->facepay->post([
  'xml' => [
    'deposit'          => 'Y',
    'appid'            => 'wx8888888888888888',
    'sub_appid'        => 'wx8888888888888888',
    'mch_id'           => '1900000100',
    'sub_mch_id'       => '1900000100',
    'device_info'      => '013467007045764',
    'body'             => 'image形象店-深圳腾大- QQ公仔',
    'detail'           => \json_encode([
      'goods_detail' => [[
        'goods_id'       => '商品编码',
        'wxpay_goods_id' => '1001',
        'goods_name'     => 'iPhone6s 16G',
        'goods_num'      => 1,
        'price'          => 528800,
        'goods_category' => '123789',
        'body'           => '苹果手机',
      ],],
    ]),
    'attach'           => '说明',
    'out_trade_no'     => '1217472501201407033233367018',
    'total_fee'        => '888',
    'fee_type'         => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag'        => '1234',
    'limit_pay'        => 'no_credit',
    'time_start'       => '20091225091010',
    'time_expire'      => '20091227091010',
    'openid'           => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'face_code'        => 'b713b5d2-666c-48',
    'sign_type'        => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/deposit/facepay')->post([
  'xml' => [
    'deposit'          => 'Y',
    'appid'            => 'wx8888888888888888',
    'sub_appid'        => 'wx8888888888888888',
    'mch_id'           => '1900000100',
    'sub_mch_id'       => '1900000100',
    'device_info'      => '013467007045764',
    'body'             => 'image形象店-深圳腾大- QQ公仔',
    'detail'           => \json_encode([
      'goods_detail' => [[
        'goods_id'       => '商品编码',
        'wxpay_goods_id' => '1001',
        'goods_name'     => 'iPhone6s 16G',
        'goods_num'      => 1,
        'price'          => 528800,
        'goods_category' => '123789',
        'body'           => '苹果手机',
      ],],
    ]),
    'attach'           => '说明',
    'out_trade_no'     => '1217472501201407033233367018',
    'total_fee'        => '888',
    'fee_type'         => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag'        => '1234',
    'limit_pay'        => 'no_credit',
    'time_start'       => '20091225091010',
    'time_expire'      => '20091227091010',
    'openid'           => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'face_code'        => 'b713b5d2-666c-48',
    'sign_type'        => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/deposit/facepay']->post([
  'xml' => [
    'deposit'          => 'Y',
    'appid'            => 'wx8888888888888888',
    'sub_appid'        => 'wx8888888888888888',
    'mch_id'           => '1900000100',
    'sub_mch_id'       => '1900000100',
    'device_info'      => '013467007045764',
    'body'             => 'image形象店-深圳腾大- QQ公仔',
    'detail'           => \json_encode([
      'goods_detail' => [[
        'goods_id'       => '商品编码',
        'wxpay_goods_id' => '1001',
        'goods_name'     => 'iPhone6s 16G',
        'goods_num'      => 1,
        'price'          => 528800,
        'goods_category' => '123789',
        'body'           => '苹果手机',
      ],],
    ]),
    'attach'           => '说明',
    'out_trade_no'     => '1217472501201407033233367018',
    'total_fee'        => '888',
    'fee_type'         => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag'        => '1234',
    'limit_pay'        => 'no_credit',
    'time_start'       => '20091225091010',
    'time_expire'      => '20091227091010',
    'openid'           => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'face_code'        => 'b713b5d2-666c-48',
    'sign_type'        => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| appid {data-required} | string | 公众账号ID
| sub_appid | string | 子商户公众账号ID
| mch_id {data-required} | string | 商户号
| sub_mch_id | string | 子商户号
| device_info | string | 设备号
| nonce_str {data-required} | string | 随机字符串
| sign {data-required} | string | 签名
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| openid {data-required} | string | 用户标识
| is_subscribe {data-required} | string | 是否关注公众账号<br/>`Y` \| `N` 枚举值之一
| sub_openid | string | 用户子标识
| sub_is_subscribe | string | 是否关注子公众账号<br/>`Y` \| `N` 枚举值之一
| trade_type {data-required} | string | 交易类型
| bank_type {data-required} | string | 付款银行
| fee_type | string | 标价币种
| total_fee {data-required} | integer | 标价金额
| cash_fee_type | string | 现金支付币种
| cash_fee {data-required} | integer | 现金支付金额
| settlement_total_fee | integer | 应结订单金额
| coupon_fee | integer | 代金券金额
| transaction_id {data-required} | string | 微信支付订单号
| out_trade_no {data-required} | string | 商户订单号
| attach | string | 商家数据包
| time_end {data-required} | string | 支付完成时间
| promotion_detail | string | 营销详情`JSON`格式字符串
| {colspan=3 .im-table-line}
| promotion_id {data-required data-indent=1} | string | 券ID
| name {data-indent=1} | string | 优惠名称
| scope {data-indent=1} | string | 优惠范围<br/>`GLOBAL` \| `SINGLE` 枚举值之一
| type {data-indent=1} | string | 优惠类型<br/>`COUPON` \| `DISCOUNT` 枚举值之一
| amount {data-required data-indent=1} | string | 优惠券面额
| activity_id {data-required data-indent=1} | string | 活动ID
| wxpay_contribute {data-indent=1} | string | 微信出资
| merchant_contribute {data-indent=1} | string | 商户出资
| other_contribute {data-indent=1} | string | 其他出资
| goods_detail {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 单品列表
| goods_id {data-indent=2} | string | 商品编码
| wxpay_goods_id {data-indent=2} | string | 微信支付商品编码
| goods_name {data-indent=2} | string | 商品名称
| quantity {data-required data-indent=2} | number | 商品数量
| price {data-required data-indent=2} | number | 商品单价

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/deposit_sl.php?chapter=27_0&index=1)
