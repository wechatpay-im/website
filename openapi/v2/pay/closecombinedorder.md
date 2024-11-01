---
title: 合单关单
description: 合单支付订单只能使用此合单关单api完成关单。调用关单接口：商户订单支付失败需要生成新单号重新发起支付，要对原订单号调用关单，避免重复支付；系统下单后，用户支付超时，系统退出不再受理，避免用户继续，请调用关单接口。**注意：订单生成后不能马上调用关单接口，最短调用时间间隔为1分钟。**
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| combine_appid {data-indent=1} | string | 合单appid
| combine_mch_id {data-indent=1} | string | 合单商户号
| sign_type {data-indent=1} | string | 签名类型
| combine_out_trade_no {data-indent=1} | string | 合单商户订单号
| sub_order_list {data-indent=1} | string | +子单信息

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->pay->closecombinedorder->postAsync([
  'xml' => [
    'combine_appid' => 'wx8888888888888888',
    'combine_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'combine_out_trade_no' => '1217752501201407033233368018',
    'sub_order_list' => '{"order_list": [{"appid": "wxdace645e0bc2c424","mch_id": "1900009001","out_trade_no": "OD201708030001","sub_appid": "wxdace645e0bc2c423","sub_mch_id": 1900009002}],"order_num": 3}',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/pay/closecombinedorder')->postAsync([
  'xml' => [
    'combine_appid' => 'wx8888888888888888',
    'combine_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'combine_out_trade_no' => '1217752501201407033233368018',
    'sub_order_list' => '{"order_list": [{"appid": "wxdace645e0bc2c424","mch_id": "1900009001","out_trade_no": "OD201708030001","sub_appid": "wxdace645e0bc2c423","sub_mch_id": 1900009002}],"order_num": 3}',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/pay/closecombinedorder']->postAsync([
  'xml' => [
    'combine_appid' => 'wx8888888888888888',
    'combine_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'combine_out_trade_no' => '1217752501201407033233368018',
    'sub_order_list' => '{"order_list": [{"appid": "wxdace645e0bc2c424","mch_id": "1900009001","out_trade_no": "OD201708030001","sub_appid": "wxdace645e0bc2c423","sub_mch_id": 1900009002}],"order_num": 3}',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->pay->closecombinedorder->post([
  'xml' => [
    'combine_appid' => 'wx8888888888888888',
    'combine_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'combine_out_trade_no' => '1217752501201407033233368018',
    'sub_order_list' => '{"order_list": [{"appid": "wxdace645e0bc2c424","mch_id": "1900009001","out_trade_no": "OD201708030001","sub_appid": "wxdace645e0bc2c423","sub_mch_id": 1900009002}],"order_num": 3}',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/pay/closecombinedorder')->post([
  'xml' => [
    'combine_appid' => 'wx8888888888888888',
    'combine_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'combine_out_trade_no' => '1217752501201407033233368018',
    'sub_order_list' => '{"order_list": [{"appid": "wxdace645e0bc2c424","mch_id": "1900009001","out_trade_no": "OD201708030001","sub_appid": "wxdace645e0bc2c423","sub_mch_id": 1900009002}],"order_num": 3}',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/pay/closecombinedorder']->post([
  'xml' => [
    'combine_appid' => 'wx8888888888888888',
    'combine_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'combine_out_trade_no' => '1217752501201407033233368018',
    'sub_order_list' => '{"order_list": [{"appid": "wxdace645e0bc2c424","mch_id": "1900009001","out_trade_no": "OD201708030001","sub_appid": "wxdace645e0bc2c423","sub_mch_id": 1900009002}],"order_num": 3}',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code | string | 返回状态码
| return_msg | string | 返回信息
| combine_appid | string | 合单appid
| combine_mch_id | string | 合单商户号
| nonce_str | string | 随机字符串
| sign | string | 签名
| result_code | string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述

{.im-table #response}

参阅 [官方合单支付文档](https://pay.weixin.qq.com/wiki/doc/api/combine.php?chapter=24_2&index=3)
