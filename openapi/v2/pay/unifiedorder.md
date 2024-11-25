---
title: 统一下单
description: 除付款码支付场景以外，商户系统先调用该接口在微信支付服务后台生成预支付交易单，返回正确的预支付交易会话标识后再按Native、JSAPI、APP等不同场景生成交易串调起支付。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| version {data-indent=1} | string | 接口版本号
| profit_sharing {data-indent=1} | string | 是否指定服务商分账;Y-是，需要分账;N-否，不分账;字母要求大写，不传默认不分账<br/>`N` \| `Y` 枚举值之一
| appid {data-required data-indent=1} | string | 公众账号ID
| mch_id {data-required data-indent=1} | string | 商户号
| device_info {data-indent=1} | string | 设备号
| sign_type {data-indent=1} | string | 签名类型<br/>`MD5` \| `HMAC-SHA256` 枚举值之一
| body {data-required data-indent=1} | string | 商品描述
| detail {data-indent=1} | string | 单品优惠活动该字段必传，`JSON`格式字符串
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
| fee_type {data-indent=1} | string | 标价币种
| total_fee {data-required data-indent=1} | integer | 标价金额
| spbill_create_ip {data-required data-indent=1} | string | 终端IP
| time_start {data-indent=1} | string | 交易起始时间
| time_expire {data-indent=1} | string | 交易结束时间
| goods_tag {data-indent=1} | string | 订单优惠标记
| notify_url {data-required data-indent=1} | string | 通知地址
| trade_type {data-required data-indent=1} | string | 交易类型
| product_id {data-indent=1} | string | 商品ID
| limit_pay {data-indent=1} | string | 指定支付方式
| openid {data-indent=1} | string | 用户标识
| receipt {data-indent=1} | string | 电子发票入口开放标识
| scene_info {data-indent=1} | string | 场景信息`JSON`格式字符串
| {colspan=3 .im-table-line}
| store_info {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 实际门店信息
| id {data-required data-indent=3} | string | 门店id
| name {data-indent=3} | string | 门店名称
| area_code {data-indent=3} | string | 门店行政区划码
| address {data-indent=3} | string | 门店详细地址

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->pay->unifiedorder->postAsync([
  'xml' => [
    'version' => '1.0',
    'profit_sharing' => 'N',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'device_info' => '013467007045764',
    'sign_type' => 'MD5',
    'body' => '腾讯充值中心-QQ会员充值',
    'detail' => '{"cost_price":1,"receipt_id":"wx123","goods_detail":[{"goods_id":"商品编码","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","quantity":1,"price":1},{"goods_id":"商品编码","wxpay_goods_id":"1002","goods_name":"iPhone6s 32G","quantity":1,"price":1}]}',
    'attach' => '深圳分店',
    'out_trade_no' => '20150806125346',
    'fee_type' => 'CNY',
    'total_fee' => '88',
    'spbill_create_ip' => '123.12.12.123',
    'time_start' => '20091225091010',
    'time_expire' => '20091227091010',
    'goods_tag' => 'WXG',
    'notify_url' => 'http://www.weixin.qq.com/wxpay/pay.php',
    'trade_type' => 'JSAPI',
    'product_id' => '12235413214070356458058',
    'limit_pay' => 'no_credit',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'receipt' => 'Y',
    'scene_info' => '{"store_info" : {"id": "SZTX001","name": "腾大餐厅","area_code": "440305","address": "科技园中一路腾讯大厦" }}',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/pay/unifiedorder')->postAsync([
  'xml' => [
    'version' => '1.0',
    'profit_sharing' => 'N',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'device_info' => '013467007045764',
    'sign_type' => 'MD5',
    'body' => '腾讯充值中心-QQ会员充值',
    'detail' => '{"cost_price":1,"receipt_id":"wx123","goods_detail":[{"goods_id":"商品编码","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","quantity":1,"price":1},{"goods_id":"商品编码","wxpay_goods_id":"1002","goods_name":"iPhone6s 32G","quantity":1,"price":1}]}',
    'attach' => '深圳分店',
    'out_trade_no' => '20150806125346',
    'fee_type' => 'CNY',
    'total_fee' => '88',
    'spbill_create_ip' => '123.12.12.123',
    'time_start' => '20091225091010',
    'time_expire' => '20091227091010',
    'goods_tag' => 'WXG',
    'notify_url' => 'http://www.weixin.qq.com/wxpay/pay.php',
    'trade_type' => 'JSAPI',
    'product_id' => '12235413214070356458058',
    'limit_pay' => 'no_credit',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'receipt' => 'Y',
    'scene_info' => '{"store_info" : {"id": "SZTX001","name": "腾大餐厅","area_code": "440305","address": "科技园中一路腾讯大厦" }}',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/pay/unifiedorder']->postAsync([
  'xml' => [
    'version' => '1.0',
    'profit_sharing' => 'N',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'device_info' => '013467007045764',
    'sign_type' => 'MD5',
    'body' => '腾讯充值中心-QQ会员充值',
    'detail' => '{"cost_price":1,"receipt_id":"wx123","goods_detail":[{"goods_id":"商品编码","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","quantity":1,"price":1},{"goods_id":"商品编码","wxpay_goods_id":"1002","goods_name":"iPhone6s 32G","quantity":1,"price":1}]}',
    'attach' => '深圳分店',
    'out_trade_no' => '20150806125346',
    'fee_type' => 'CNY',
    'total_fee' => '88',
    'spbill_create_ip' => '123.12.12.123',
    'time_start' => '20091225091010',
    'time_expire' => '20091227091010',
    'goods_tag' => 'WXG',
    'notify_url' => 'http://www.weixin.qq.com/wxpay/pay.php',
    'trade_type' => 'JSAPI',
    'product_id' => '12235413214070356458058',
    'limit_pay' => 'no_credit',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'receipt' => 'Y',
    'scene_info' => '{"store_info" : {"id": "SZTX001","name": "腾大餐厅","area_code": "440305","address": "科技园中一路腾讯大厦" }}',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->pay->unifiedorder->post([
  'xml' => [
    'version' => '1.0',
    'profit_sharing' => 'N',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'device_info' => '013467007045764',
    'sign_type' => 'MD5',
    'body' => '腾讯充值中心-QQ会员充值',
    'detail' => '{"cost_price":1,"receipt_id":"wx123","goods_detail":[{"goods_id":"商品编码","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","quantity":1,"price":1},{"goods_id":"商品编码","wxpay_goods_id":"1002","goods_name":"iPhone6s 32G","quantity":1,"price":1}]}',
    'attach' => '深圳分店',
    'out_trade_no' => '20150806125346',
    'fee_type' => 'CNY',
    'total_fee' => '88',
    'spbill_create_ip' => '123.12.12.123',
    'time_start' => '20091225091010',
    'time_expire' => '20091227091010',
    'goods_tag' => 'WXG',
    'notify_url' => 'http://www.weixin.qq.com/wxpay/pay.php',
    'trade_type' => 'JSAPI',
    'product_id' => '12235413214070356458058',
    'limit_pay' => 'no_credit',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'receipt' => 'Y',
    'scene_info' => '{"store_info" : {"id": "SZTX001","name": "腾大餐厅","area_code": "440305","address": "科技园中一路腾讯大厦" }}',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/pay/unifiedorder')->post([
  'xml' => [
    'version' => '1.0',
    'profit_sharing' => 'N',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'device_info' => '013467007045764',
    'sign_type' => 'MD5',
    'body' => '腾讯充值中心-QQ会员充值',
    'detail' => '{"cost_price":1,"receipt_id":"wx123","goods_detail":[{"goods_id":"商品编码","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","quantity":1,"price":1},{"goods_id":"商品编码","wxpay_goods_id":"1002","goods_name":"iPhone6s 32G","quantity":1,"price":1}]}',
    'attach' => '深圳分店',
    'out_trade_no' => '20150806125346',
    'fee_type' => 'CNY',
    'total_fee' => '88',
    'spbill_create_ip' => '123.12.12.123',
    'time_start' => '20091225091010',
    'time_expire' => '20091227091010',
    'goods_tag' => 'WXG',
    'notify_url' => 'http://www.weixin.qq.com/wxpay/pay.php',
    'trade_type' => 'JSAPI',
    'product_id' => '12235413214070356458058',
    'limit_pay' => 'no_credit',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'receipt' => 'Y',
    'scene_info' => '{"store_info" : {"id": "SZTX001","name": "腾大餐厅","area_code": "440305","address": "科技园中一路腾讯大厦" }}',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/pay/unifiedorder']->post([
  'xml' => [
    'version' => '1.0',
    'profit_sharing' => 'N',
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'device_info' => '013467007045764',
    'sign_type' => 'MD5',
    'body' => '腾讯充值中心-QQ会员充值',
    'detail' => '{"cost_price":1,"receipt_id":"wx123","goods_detail":[{"goods_id":"商品编码","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","quantity":1,"price":1},{"goods_id":"商品编码","wxpay_goods_id":"1002","goods_name":"iPhone6s 32G","quantity":1,"price":1}]}',
    'attach' => '深圳分店',
    'out_trade_no' => '20150806125346',
    'fee_type' => 'CNY',
    'total_fee' => '88',
    'spbill_create_ip' => '123.12.12.123',
    'time_start' => '20091225091010',
    'time_expire' => '20091227091010',
    'goods_tag' => 'WXG',
    'notify_url' => 'http://www.weixin.qq.com/wxpay/pay.php',
    'trade_type' => 'JSAPI',
    'product_id' => '12235413214070356458058',
    'limit_pay' => 'no_credit',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'receipt' => 'Y',
    'scene_info' => '{"store_info" : {"id": "SZTX001","name": "腾大餐厅","area_code": "440305","address": "科技园中一路腾讯大厦" }}',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required}| string | 返回状态码
| return_msg {data-required}| string | 返回信息
| appid {data-required}| string | 公众账号ID
| mch_id {data-required}| string | 商户号
| device_info | string | 设备号
| nonce_str {data-required}| string | 随机字符串
| sign {data-required}| string | 签名
| result_code {data-required}| string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| trade_type {data-required}| string | 交易类型<br/>`JSAPI` \| `NATIVE` \| `APP` \| `MWEB` 枚举值之一
| prepay_id {data-required}| string | 预支付交易会话标识
| code_url | string | 二维码链接
| mweb_url | string | 支付跳转链接，**mweb_url为拉起微信支付收银台的中间页面，可通过访问该url来拉起微信客户端，完成支付,mweb_url的有效期为5分钟。**
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

参阅 [官方JSAPI文档](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_1) [Native官方文档](https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_1) [官方APP文档](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_1) [官方H5文档](https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_20&index=1) [官方小程序支付文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_1)
