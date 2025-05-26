---
title: 支付押金（JSAPI/APP支付）
description: 微信支付提供了四种付款方式供用户支付押金：付款码支付、人脸支付、JSAPI支付、APP支付。商户可根据场景需要选择支持哪种付款方式，也可以四种都支持，即四种方式都对接。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 服务商应用ID
| mch_id {data-required data-indent=1} | string | 商户号
| sub_appid {data-indent=1} | string | 子商户应用ID
| sub_mch_id {data-required data-indent=1} | string | 子商户号
| device_info {data-indent=1} | string | 设备号
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`MD5` \| `HMAC-SHA256` 枚举值之一
| body {data-required data-indent=1} | string | 商品描述
| detail {data-indent=1} | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 单品优惠活动该字段必传，`JSON`格式字符串
| {colspan=3 .im-table-line}
| cost_price {data-indent=2} | number | 订单原价
| receipt_id {data-indent=2} | string | 商品小票ID
| goods_detail {data-required data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 单品列表
| goods_id {data-indent=3} | string | 商品编码
| wxpay_goods_id {data-indent=3} | string | 微信支付商品编码
| goods_name {data-indent=3} | string | 商品名称
| quantity {data-required data-indent=3} | number | 商品数量
| price {data-required data-indent=3} | number | 商品单价
| attach {data-indent=1} | string | 附加数据
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| fee_type {data-required data-indent=1} | string | 货币类型
| total_fee {data-required data-indent=1} | integer | 总金额
| spbill_create_ip {data-required data-indent=1} | string | 终端IP
| time_start {data-indent=1} | string | 交易起始时间
| time_expire {data-indent=1} | string | 交易结束时间
| notify_url {data-required data-indent=1} | string | 通知地址
| trade_type {data-required data-indent=1} | string | 交易类型<br/>`JSAPI` \| `APP` 枚举值之一
| product_id {data-indent=1} | string | 商品ID
| limit_pay {data-indent=1} | string | 指定支付方式
| openid {data-indent=1} | string | 用户标识
| sub_openid {data-indent=1} | string | 用户子标识
| receipt {data-indent=1} | string | 电子发票入口开放标识<br/>`Y` \| `N` 枚举值之一
| scene_info {data-indent=1} | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 场景信息`JSON`格式字符串
| {colspan=3 .im-table-line}
| store_info {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 实际门店信息
| id {data-required data-indent=3} | string | 门店id
| name {data-indent=3} | string | 门店名称
| area_code {data-indent=3} | string | 门店行政区划码
| address {data-indent=3} | string | 门店详细地址

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->deposit->unifiedorder->postAsync([
  'xml' => [
    'appid'            => 'wx8888888888888888',
    'mch_id'           => '1900000109',
    'sub_appid'        => 'wx8888888888888888',
    'sub_mch_id'       => '1900000109',
    'device_info'      => '013467007045764',
    'sign_type'        => 'HMAC-SHA256',
    'body'             => '腾讯充值中心-QQ会员充值',
    'detail'           => \json_encode([
      'cost_price'   => 1,
      'receipt_id'   => 'wx123',
      'goods_detail' => [[
        'goods_id'       => '商品编码',
        'wxpay_goods_id' => '1001',
        'goods_name'     => 'iPhone6s 16G',
        'quantity'       => 1,
        'price'          => 528800,
      ],],
    ]),
    'attach'           => '说明',
    'out_trade_no'     => '1217752501201407033233368018',
    'fee_type'         => 'CNY',
    'total_fee'        => '888',
    'spbill_create_ip' => '123.12.12.123',
    'time_start'       => '20091225091010',
    'time_expire'      => '20091227091010',
    'notify_url'       => 'http://www.weixin.qq.com/wxpay/pay.php',
    'trade_type'       => 'JSAPI',
    'product_id'       => '12235413214070356458058',
    'limit_pay'        => 'no_credit',
    'openid'           => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid'       => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'receipt'          => 'Y',
    'scene_info'       => \json_encode([
      'store_info' => [
        'id'        => 'SZTX001',
        'name'      => '腾大餐厅',
        'area_code' => '440305',
        'address'   => '科技园中一路腾讯大厦',
      ],
    ]),
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
    'appid'            => 'wx8888888888888888',
    'mch_id'           => '1900000109',
    'sub_appid'        => 'wx8888888888888888',
    'sub_mch_id'       => '1900000109',
    'device_info'      => '013467007045764',
    'sign_type'        => 'HMAC-SHA256',
    'body'             => '腾讯充值中心-QQ会员充值',
    'detail'           => \json_encode([
      'cost_price'   => 1,
      'receipt_id'   => 'wx123',
      'goods_detail' => [[
        'goods_id'       => '商品编码',
        'wxpay_goods_id' => '1001',
        'goods_name'     => 'iPhone6s 16G',
        'quantity'       => 1,
        'price'          => 528800,
      ],],
    ]),
    'attach'           => '说明',
    'out_trade_no'     => '1217752501201407033233368018',
    'fee_type'         => 'CNY',
    'total_fee'        => '888',
    'spbill_create_ip' => '123.12.12.123',
    'time_start'       => '20091225091010',
    'time_expire'      => '20091227091010',
    'notify_url'       => 'http://www.weixin.qq.com/wxpay/pay.php',
    'trade_type'       => 'JSAPI',
    'product_id'       => '12235413214070356458058',
    'limit_pay'        => 'no_credit',
    'openid'           => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid'       => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'receipt'          => 'Y',
    'scene_info'       => \json_encode([
      'store_info' => [
        'id'        => 'SZTX001',
        'name'      => '腾大餐厅',
        'area_code' => '440305',
        'address'   => '科技园中一路腾讯大厦',
      ],
    ]),
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
    'appid'            => 'wx8888888888888888',
    'mch_id'           => '1900000109',
    'sub_appid'        => 'wx8888888888888888',
    'sub_mch_id'       => '1900000109',
    'device_info'      => '013467007045764',
    'sign_type'        => 'HMAC-SHA256',
    'body'             => '腾讯充值中心-QQ会员充值',
    'detail'           => \json_encode([
      'cost_price'   => 1,
      'receipt_id'   => 'wx123',
      'goods_detail' => [[
        'goods_id'       => '商品编码',
        'wxpay_goods_id' => '1001',
        'goods_name'     => 'iPhone6s 16G',
        'quantity'       => 1,
        'price'          => 528800,
      ],],
    ]),
    'attach'           => '说明',
    'out_trade_no'     => '1217752501201407033233368018',
    'fee_type'         => 'CNY',
    'total_fee'        => '888',
    'spbill_create_ip' => '123.12.12.123',
    'time_start'       => '20091225091010',
    'time_expire'      => '20091227091010',
    'notify_url'       => 'http://www.weixin.qq.com/wxpay/pay.php',
    'trade_type'       => 'JSAPI',
    'product_id'       => '12235413214070356458058',
    'limit_pay'        => 'no_credit',
    'openid'           => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid'       => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'receipt'          => 'Y',
    'scene_info'       => \json_encode([
      'store_info' => [
        'id'        => 'SZTX001',
        'name'      => '腾大餐厅',
        'area_code' => '440305',
        'address'   => '科技园中一路腾讯大厦',
      ],
    ]),
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
    'appid'            => 'wx8888888888888888',
    'mch_id'           => '1900000109',
    'sub_appid'        => 'wx8888888888888888',
    'sub_mch_id'       => '1900000109',
    'device_info'      => '013467007045764',
    'sign_type'        => 'HMAC-SHA256',
    'body'             => '腾讯充值中心-QQ会员充值',
    'detail'           => \json_encode([
      'cost_price'   => 1,
      'receipt_id'   => 'wx123',
      'goods_detail' => [[
        'goods_id'       => '商品编码',
        'wxpay_goods_id' => '1001',
        'goods_name'     => 'iPhone6s 16G',
        'quantity'       => 1,
        'price'          => 528800,
      ],],
    ]),
    'attach'           => '说明',
    'out_trade_no'     => '1217752501201407033233368018',
    'fee_type'         => 'CNY',
    'total_fee'        => '888',
    'spbill_create_ip' => '123.12.12.123',
    'time_start'       => '20091225091010',
    'time_expire'      => '20091227091010',
    'notify_url'       => 'http://www.weixin.qq.com/wxpay/pay.php',
    'trade_type'       => 'JSAPI',
    'product_id'       => '12235413214070356458058',
    'limit_pay'        => 'no_credit',
    'openid'           => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid'       => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'receipt'          => 'Y',
    'scene_info'       => \json_encode([
      'store_info' => [
        'id'        => 'SZTX001',
        'name'      => '腾大餐厅',
        'area_code' => '440305',
        'address'   => '科技园中一路腾讯大厦',
      ],
    ]),
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/deposit/unifiedorder')->post([
  'xml' => [
    'appid'            => 'wx8888888888888888',
    'mch_id'           => '1900000109',
    'sub_appid'        => 'wx8888888888888888',
    'sub_mch_id'       => '1900000109',
    'device_info'      => '013467007045764',
    'sign_type'        => 'HMAC-SHA256',
    'body'             => '腾讯充值中心-QQ会员充值',
    'detail'           => \json_encode([
      'cost_price'   => 1,
      'receipt_id'   => 'wx123',
      'goods_detail' => [[
        'goods_id'       => '商品编码',
        'wxpay_goods_id' => '1001',
        'goods_name'     => 'iPhone6s 16G',
        'quantity'       => 1,
        'price'          => 528800,
      ],],
    ]),
    'attach'           => '说明',
    'out_trade_no'     => '1217752501201407033233368018',
    'fee_type'         => 'CNY',
    'total_fee'        => '888',
    'spbill_create_ip' => '123.12.12.123',
    'time_start'       => '20091225091010',
    'time_expire'      => '20091227091010',
    'notify_url'       => 'http://www.weixin.qq.com/wxpay/pay.php',
    'trade_type'       => 'JSAPI',
    'product_id'       => '12235413214070356458058',
    'limit_pay'        => 'no_credit',
    'openid'           => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid'       => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'receipt'          => 'Y',
    'scene_info'       => \json_encode([
      'store_info' => [
        'id'        => 'SZTX001',
        'name'      => '腾大餐厅',
        'area_code' => '440305',
        'address'   => '科技园中一路腾讯大厦',
      ],
    ]),
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/deposit/unifiedorder']->post([
  'xml' => [
    'appid'            => 'wx8888888888888888',
    'mch_id'           => '1900000109',
    'sub_appid'        => 'wx8888888888888888',
    'sub_mch_id'       => '1900000109',
    'device_info'      => '013467007045764',
    'sign_type'        => 'HMAC-SHA256',
    'body'             => '腾讯充值中心-QQ会员充值',
    'detail'           => \json_encode([
      'cost_price'   => 1,
      'receipt_id'   => 'wx123',
      'goods_detail' => [[
        'goods_id'       => '商品编码',
        'wxpay_goods_id' => '1001',
        'goods_name'     => 'iPhone6s 16G',
        'quantity'       => 1,
        'price'          => 528800,
      ],],
    ]),
    'attach'           => '说明',
    'out_trade_no'     => '1217752501201407033233368018',
    'fee_type'         => 'CNY',
    'total_fee'        => '888',
    'spbill_create_ip' => '123.12.12.123',
    'time_start'       => '20091225091010',
    'time_expire'      => '20091227091010',
    'notify_url'       => 'http://www.weixin.qq.com/wxpay/pay.php',
    'trade_type'       => 'JSAPI',
    'product_id'       => '12235413214070356458058',
    'limit_pay'        => 'no_credit',
    'openid'           => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid'       => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'receipt'          => 'Y',
    'scene_info'       => \json_encode([
      'store_info' => [
        'id'        => 'SZTX001',
        'name'      => '腾大餐厅',
        'area_code' => '440305',
        'address'   => '科技园中一路腾讯大厦',
      ],
    ]),
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| appid {data-required} | string | 服务商应用ID
| mch_id {data-required} | string | 商户号
| sub_appid | string | 子商户应用ID
| sub_mch_id {data-required} | string | 子商户号
| device_info | string | 设备号
| nonce_str {data-required} | string | 随机字符串
| sign {data-required} | string | 签名
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| trade_type {data-required} | string | 交易类型<br/>`JSAPI` \| `APP` 枚举值之一
| prepay_id {data-required} | string | 预支付交易会话标识
| code_url | string | 二维码链接

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011986340) [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011986476)
