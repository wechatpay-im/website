---
title: 申请退款（支持单品）
description: 如果使用不支持单品优惠部分退款的历史接口，请看
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| detail {data-indent=1} | string | 退款包含的商品列表信息，全额退款可不传，必须按照规范上传，JSON格式
| appid {data-indent=1} | string | 公众账号ID
| sub_appid {data-indent=1} | string | 子商户公众账号ID
| mch_id {data-indent=1} | string | 商户号
| sub_mch_id {data-indent=1} | string | 子商户号
| sign_type {data-indent=1} | string | 签名类型
| transaction_id {data-indent=1} | string | 微信订单号
| out_trade_no {data-indent=1} | string | 商户订单号
| out_refund_no {data-indent=1} | string | 商户退款单号
| total_fee {data-indent=1} | integer | 订单金额
| refund_fee {data-indent=1} | integer | 退款金额
| refund_fee_type {data-indent=1} | string | 退款货币种类
| refund_desc {data-indent=1} | string | 退款原因
| refund_account {data-indent=1} | string | 退款资金来源
| notify_url {data-indent=1} | string | 退款结果通知url
| security | boolean | 声明加载商户API证书<br/>固定值`true`

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->secapi->pay->refundv2->postAsync([
  'xml' => [
    'detail' => '{"goods_detail":[{"goods_id":"商品编码","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","refund_amount":528800,"refund_quantity":1,"price":528800},{"goods_id":"商品编码","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","refund_amount":528800,"refund_quantity":1,"price":608800}]}',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no' => '1217752501201407033233368018',
    'out_refund_no' => '1217752501201407033233368018',
    'total_fee' => '100',
    'refund_fee' => '100',
    'refund_fee_type' => 'CNY',
    'refund_desc' => '商品已售完',
    'refund_account' => 'REFUND_SOURCE_RECHARGE_FUNDS',
    'notify_url' => 'https://weixin.qq.com/notify/',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/secapi/pay/refundv2')->postAsync([
  'xml' => [
    'detail' => '{"goods_detail":[{"goods_id":"商品编码","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","refund_amount":528800,"refund_quantity":1,"price":528800},{"goods_id":"商品编码","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","refund_amount":528800,"refund_quantity":1,"price":608800}]}',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no' => '1217752501201407033233368018',
    'out_refund_no' => '1217752501201407033233368018',
    'total_fee' => '100',
    'refund_fee' => '100',
    'refund_fee_type' => 'CNY',
    'refund_desc' => '商品已售完',
    'refund_account' => 'REFUND_SOURCE_RECHARGE_FUNDS',
    'notify_url' => 'https://weixin.qq.com/notify/',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/secapi/pay/refundv2']->postAsync([
  'xml' => [
    'detail' => '{"goods_detail":[{"goods_id":"商品编码","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","refund_amount":528800,"refund_quantity":1,"price":528800},{"goods_id":"商品编码","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","refund_amount":528800,"refund_quantity":1,"price":608800}]}',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no' => '1217752501201407033233368018',
    'out_refund_no' => '1217752501201407033233368018',
    'total_fee' => '100',
    'refund_fee' => '100',
    'refund_fee_type' => 'CNY',
    'refund_desc' => '商品已售完',
    'refund_account' => 'REFUND_SOURCE_RECHARGE_FUNDS',
    'notify_url' => 'https://weixin.qq.com/notify/',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->secapi->pay->refundv2->post([
  'xml' => [
    'detail' => '{"goods_detail":[{"goods_id":"商品编码","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","refund_amount":528800,"refund_quantity":1,"price":528800},{"goods_id":"商品编码","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","refund_amount":528800,"refund_quantity":1,"price":608800}]}',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no' => '1217752501201407033233368018',
    'out_refund_no' => '1217752501201407033233368018',
    'total_fee' => '100',
    'refund_fee' => '100',
    'refund_fee_type' => 'CNY',
    'refund_desc' => '商品已售完',
    'refund_account' => 'REFUND_SOURCE_RECHARGE_FUNDS',
    'notify_url' => 'https://weixin.qq.com/notify/',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/secapi/pay/refundv2')->post([
  'xml' => [
    'detail' => '{"goods_detail":[{"goods_id":"商品编码","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","refund_amount":528800,"refund_quantity":1,"price":528800},{"goods_id":"商品编码","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","refund_amount":528800,"refund_quantity":1,"price":608800}]}',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no' => '1217752501201407033233368018',
    'out_refund_no' => '1217752501201407033233368018',
    'total_fee' => '100',
    'refund_fee' => '100',
    'refund_fee_type' => 'CNY',
    'refund_desc' => '商品已售完',
    'refund_account' => 'REFUND_SOURCE_RECHARGE_FUNDS',
    'notify_url' => 'https://weixin.qq.com/notify/',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/secapi/pay/refundv2']->post([
  'xml' => [
    'detail' => '{"goods_detail":[{"goods_id":"商品编码","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","refund_amount":528800,"refund_quantity":1,"price":528800},{"goods_id":"商品编码","wxpay_goods_id":"1001","goods_name":"iPhone6s 16G","refund_amount":528800,"refund_quantity":1,"price":608800}]}',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'mch_id' => '1900000109',
    'sub_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no' => '1217752501201407033233368018',
    'out_refund_no' => '1217752501201407033233368018',
    'total_fee' => '100',
    'refund_fee' => '100',
    'refund_fee_type' => 'CNY',
    'refund_desc' => '商品已售完',
    'refund_account' => 'REFUND_SOURCE_RECHARGE_FUNDS',
    'notify_url' => 'https://weixin.qq.com/notify/',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code | string | 返回状态码
| return_msg | string | 返回信息
| result_code | string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| appid | string | 公众账号ID
| mch_id | string | 商户号
| sub_appid | string | 子商户公众账号ID
| sub_mch_id | string | 子商户号
| nonce_str | string | 随机字符串
| sign | string | 签名
| transaction_id | string | 微信订单号
| out_trade_no | string | 商户订单号
| out_refund_no | string | 商户退款单号
| refund_id | string | 微信退款单号
| refund_fee | integer | 退款金额
| settlement_refund_fee | integer | 应结退款金额
| total_fee | integer | 标价金额
| settlement_total_fee | integer | 应结订单金额
| fee_type | string | 标价币种
| cash_fee | integer | 现金支付金额
| cash_fee_type | string | 现金支付币种
| cash_refund_fee | integer | 现金退款金额
| coupon_type_$n | string | 代金券类型
| coupon_refund_fee | integer | 代金券退款总金额
| coupon_refund_fee_$n | integer | 单个代金券退款金额
| coupon_refund_count | integer | 退款代金券使用数量
| coupon_refund_id_$n | string | 退款代金券ID
| promotion_detail | string | 营销详情列表

{.im-table #response}

参阅 [这里](https://pay.weixin.qq.com/wiki/doc/api/jsapi_sl.php?chapter=9_4)，本接口支持单品优惠订单全额退款和单品优惠订单部分退款，推荐使用本接口，[官方文档](https://pay.weixin.qq.com/wiki/doc/api/danpin.php?chapter=9_103&index=3)