---
title: 沙箱付款码支付
description: 该系统分为两种用例类型：支付成功用例与支付异常用例。请严格按照用例的顺序、金额执行用例，确保用例的检查点完全符合预期。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [支付成功用例](https://pay.weixin.qq.com/wiki/doc/api/download/sandbox-micropay-SUCCESS.docx)根据测试用例金额的不同返回不同的响应报文，[支付异常用例](https://pay.weixin.qq.com/wiki/doc/api/download/sandbox-micropay-ERROR.docx)的识别将通过 Http Header 中添加异常头 `Wechatpay-Negative-Test: {用例名}` 识别。

| 参数 | 类型 | 描述
| -- | -- | --
| xml | array | 请求声明的`XML`数据结构
| appid {data-indent=1} | string | 公众账号ID
| mch_id {data-indent=1} | string | 商户号
| body {data-indent=1} | string | 商品描述
| out_trade_no {data-indent=1} | string | 商户订单号
| nonce_str {data-indent=1} | string | 随机字符串
| sign_type {data-indent=1} | string | 签名类型
| attach {data-indent=1} | string | 附加数据
| total_fee {data-indent=1} | integer | 订单金额
| fee_type {data-indent=1} | string | 货币类型
| auth_code {data-indent=1} | string | 授权码
| headers | array | 请求头
| Wechatpay-Negative-Test {data-indent=1} | string | 声明所请求的用例名称

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->xdc->apiv2sandbox->pay->micropay->postAsync([
  'xml' => [
    'version' => '1.0',
    'profit_sharing' => 'N',
    'deposit' => 'Y',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000100',
    'device_info' => '013467007045764',
    'sign_type' => 'HMAC-SHA256',
    'body' => 'image形象店-深圳腾大- QQ公仔',
    'detail' => '{"cost_price":1,"receipt_id":"wx123","goods_detail":[{"goods_id":"商品编码","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","quantity":1,"price":1},{"goods_id":"商品编码","wxpay_goods_id":"1002","goods_name":"iPhone6s 32G","quantity":1,"price":1}]}',
    'attach' => '说明',
    'out_trade_no' => '1217752501201407033233368018',
    'total_fee' => '888',
    'fee_type' => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag' => '1234',
    'limit_pay' => 'no_credit',
    'time_start' => '20091225091010',
    'time_expire' => '20091227091010',
    'receipt' => 'Y',
    'auth_code' => '120061098828009406',
    'scene_info' => '{"store_info" : {"id": "SZTX001","name": "腾大餐厅","area_code": "440305","address": "科技园中一路腾讯大厦" }}',
  ],
  'headers' => [
    'Wechatpay-Negative-Test' => 'MICROPAY_USERPAYING',
  ],
])->wait();
```

```php [异步声明式]
$instance->chain('v2/xdc/apiv2sandbox/pay/micropay')->postAsync([
  'xml' => [
    'version' => '1.0',
    'profit_sharing' => 'N',
    'deposit' => 'Y',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000100',
    'device_info' => '013467007045764',
    'sign_type' => 'HMAC-SHA256',
    'body' => 'image形象店-深圳腾大- QQ公仔',
    'detail' => '{"cost_price":1,"receipt_id":"wx123","goods_detail":[{"goods_id":"商品编码","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","quantity":1,"price":1},{"goods_id":"商品编码","wxpay_goods_id":"1002","goods_name":"iPhone6s 32G","quantity":1,"price":1}]}',
    'attach' => '说明',
    'out_trade_no' => '1217752501201407033233368018',
    'total_fee' => '888',
    'fee_type' => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag' => '1234',
    'limit_pay' => 'no_credit',
    'time_start' => '20091225091010',
    'time_expire' => '20091227091010',
    'receipt' => 'Y',
    'auth_code' => '120061098828009406',
    'scene_info' => '{"store_info" : {"id": "SZTX001","name": "腾大餐厅","area_code": "440305","address": "科技园中一路腾讯大厦" }}',
  ],
  'headers' => [
    'Wechatpay-Negative-Test' => 'MICROPAY_USERPAYING',
  ],
])->wait();
```

```php [异步属性式]
$instance['v2/xdc/apiv2sandbox/pay/micropay']->postAsync([
  'xml' => [
    'version' => '1.0',
    'profit_sharing' => 'N',
    'deposit' => 'Y',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000100',
    'device_info' => '013467007045764',
    'sign_type' => 'HMAC-SHA256',
    'body' => 'image形象店-深圳腾大- QQ公仔',
    'detail' => '{"cost_price":1,"receipt_id":"wx123","goods_detail":[{"goods_id":"商品编码","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","quantity":1,"price":1},{"goods_id":"商品编码","wxpay_goods_id":"1002","goods_name":"iPhone6s 32G","quantity":1,"price":1}]}',
    'attach' => '说明',
    'out_trade_no' => '1217752501201407033233368018',
    'total_fee' => '888',
    'fee_type' => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag' => '1234',
    'limit_pay' => 'no_credit',
    'time_start' => '20091225091010',
    'time_expire' => '20091227091010',
    'receipt' => 'Y',
    'auth_code' => '120061098828009406',
    'scene_info' => '{"store_info" : {"id": "SZTX001","name": "腾大餐厅","area_code": "440305","address": "科技园中一路腾讯大厦" }}',
  ],
  'headers' => [
    'Wechatpay-Negative-Test' => 'MICROPAY_USERPAYING',
  ],
])->wait();
```

```php [同步纯链式]
$instance->v2->xdc->apiv2sandbox->pay->micropay->post([
  'xml' => [
    'version' => '1.0',
    'profit_sharing' => 'N',
    'deposit' => 'Y',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000100',
    'device_info' => '013467007045764',
    'sign_type' => 'HMAC-SHA256',
    'body' => 'image形象店-深圳腾大- QQ公仔',
    'detail' => '{"cost_price":1,"receipt_id":"wx123","goods_detail":[{"goods_id":"商品编码","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","quantity":1,"price":1},{"goods_id":"商品编码","wxpay_goods_id":"1002","goods_name":"iPhone6s 32G","quantity":1,"price":1}]}',
    'attach' => '说明',
    'out_trade_no' => '1217752501201407033233368018',
    'total_fee' => '888',
    'fee_type' => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag' => '1234',
    'limit_pay' => 'no_credit',
    'time_start' => '20091225091010',
    'time_expire' => '20091227091010',
    'receipt' => 'Y',
    'auth_code' => '120061098828009406',
    'scene_info' => '{"store_info" : {"id": "SZTX001","name": "腾大餐厅","area_code": "440305","address": "科技园中一路腾讯大厦" }}',
  ],
  'headers' => [
    'Wechatpay-Negative-Test' => 'MICROPAY_USERPAYING',
  ],
]);
```

```php [同步声明式]
$instance->chain('v2/xdc/apiv2sandbox/pay/micropay')->post([
  'xml' => [
    'version' => '1.0',
    'profit_sharing' => 'N',
    'deposit' => 'Y',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000100',
    'device_info' => '013467007045764',
    'sign_type' => 'HMAC-SHA256',
    'body' => 'image形象店-深圳腾大- QQ公仔',
    'detail' => '{"cost_price":1,"receipt_id":"wx123","goods_detail":[{"goods_id":"商品编码","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","quantity":1,"price":1},{"goods_id":"商品编码","wxpay_goods_id":"1002","goods_name":"iPhone6s 32G","quantity":1,"price":1}]}',
    'attach' => '说明',
    'out_trade_no' => '1217752501201407033233368018',
    'total_fee' => '888',
    'fee_type' => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag' => '1234',
    'limit_pay' => 'no_credit',
    'time_start' => '20091225091010',
    'time_expire' => '20091227091010',
    'receipt' => 'Y',
    'auth_code' => '120061098828009406',
    'scene_info' => '{"store_info" : {"id": "SZTX001","name": "腾大餐厅","area_code": "440305","address": "科技园中一路腾讯大厦" }}',
  ],
  'headers' => [
    'Wechatpay-Negative-Test' => 'MICROPAY_USERPAYING',
  ],
]);
```

```php [同步属性式]
$instance['v2/xdc/apiv2sandbox/pay/micropay']->post([
  'xml' => [
    'version' => '1.0',
    'profit_sharing' => 'N',
    'deposit' => 'Y',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000100',
    'device_info' => '013467007045764',
    'sign_type' => 'HMAC-SHA256',
    'body' => 'image形象店-深圳腾大- QQ公仔',
    'detail' => '{"cost_price":1,"receipt_id":"wx123","goods_detail":[{"goods_id":"商品编码","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","quantity":1,"price":1},{"goods_id":"商品编码","wxpay_goods_id":"1002","goods_name":"iPhone6s 32G","quantity":1,"price":1}]}',
    'attach' => '说明',
    'out_trade_no' => '1217752501201407033233368018',
    'total_fee' => '888',
    'fee_type' => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag' => '1234',
    'limit_pay' => 'no_credit',
    'time_start' => '20091225091010',
    'time_expire' => '20091227091010',
    'receipt' => 'Y',
    'auth_code' => '120061098828009406',
    'scene_info' => '{"store_info" : {"id": "SZTX001","name": "腾大餐厅","area_code": "440305","address": "科技园中一路腾讯大厦" }}',
  ],
  'headers' => [
    'Wechatpay-Negative-Test' => 'MICROPAY_USERPAYING',
  ],
]);
```
:::

| 字段 | 类型 | 描述
| -- | -- | --
| return_code | string | 返回状态码 `SUCCESS` \| `FAIL`
| return_msg | string | 返回信息
| result_code | string | 业务结果 `SUCCESS` \| `FAIL`
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| trade_type | string | 交易类型 `MICROPAY`
| trade_state | string | 交易状态
| out_trade_no | string | 商户订单号
| transaction_id | string | 微信支付订单号
| total_fee | string | 标价金额
| cash_fee | string | 现金支付金额
| coupon_fee | string | 代金券金额

{.im-table #response}

> [!IMPORTANT] 重要提示
> 1. *$instance* 构造实例化时，需要显式初始化 **secret** 字段，此为沙箱环境密钥，即前序[获取沙箱环境密钥](../../apiv2getsignkey/sign/getsignkey.md)获取到的 **sandbox_signkey**；
> 2. 请求参数的**appid**为任意值，官方沙箱环境未做要求，也无需有[绑定关系](https://kf.qq.com/faq/1801116VJfua1801113QVNVz.html)；
> 3. 此接口请求时，官方会按照[支付成功用例](https://pay.weixin.qq.com/wiki/doc/api/download/sandbox-micropay-SUCCESS.docx)所需参数进行校验，即：
>    1. 【付款码-正常】订单金额**0.01**元，用户支付成功
>    2. 【付款码-正常】订单金额**0.02**元（含0.01元代金券），用户支付成功
>    3. 【付款码-正常】订单金额**0.03**元（含0.01元代金券和0.02元免充值现金券），用户支付成功
> 4. 此接口第二参数 **headers** 字段为可选字段，按需显式传递 *Wechatpay-Negative-Test* 对应的用例名称；
> 5. 此接口有QPS限制(官方未公布)，高频请求会被官方重定向到腾讯[公益404](https://wx.gtimg.com/core/404.html)页面；

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/sp_coupon.php?chapter=23_1&index=2)