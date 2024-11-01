---
title: 发放代金券
description: 用于商户主动调用接口给用户发放代金券的场景，已做防小号处理，给小号发放代金券将返回错误码。**注意：通过接口发放的代金券不会进入微信卡包**
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| coupon_stock_id {data-indent=1} | string | 代金券批次id
| openid_count {data-indent=1} | integer | openid记录数
| partner_trade_no {data-indent=1} | string | 商户单据号
| openid {data-indent=1} | string | 用户openid
| appid {data-indent=1} | string | 公众账号ID
| mch_id {data-indent=1} | string | 商户号
| op_user_id {data-indent=1} | string | 操作员
| device_info {data-indent=1} | string | 设备号
| version {data-indent=1} | string | 协议版本
| type {data-indent=1} | string | 协议类型
| security | boolean | 声明加载商户API证书<br/>固定值`true`

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->mmpaymkttransfers->send_coupon->postAsync([
  'xml' => [
    'coupon_stock_id' => '1757',
    'openid_count' => '1',
    'partner_trade_no' => '1000009820141203515766',
    'openid' => 'onqOjjrXT-776SpHnfexGm1_P7iE',
    'appid' => 'wx5edab3bdfba3dc1c',
    'mch_id' => '10000098',
    'op_user_id' => '10000098',
    'device_info' => '',
    'version' => '1.0',
    'type' => 'XML',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/mmpaymkttransfers/send_coupon')->postAsync([
  'xml' => [
    'coupon_stock_id' => '1757',
    'openid_count' => '1',
    'partner_trade_no' => '1000009820141203515766',
    'openid' => 'onqOjjrXT-776SpHnfexGm1_P7iE',
    'appid' => 'wx5edab3bdfba3dc1c',
    'mch_id' => '10000098',
    'op_user_id' => '10000098',
    'device_info' => '',
    'version' => '1.0',
    'type' => 'XML',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/mmpaymkttransfers/send_coupon']->postAsync([
  'xml' => [
    'coupon_stock_id' => '1757',
    'openid_count' => '1',
    'partner_trade_no' => '1000009820141203515766',
    'openid' => 'onqOjjrXT-776SpHnfexGm1_P7iE',
    'appid' => 'wx5edab3bdfba3dc1c',
    'mch_id' => '10000098',
    'op_user_id' => '10000098',
    'device_info' => '',
    'version' => '1.0',
    'type' => 'XML',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->mmpaymkttransfers->send_coupon->post([
  'xml' => [
    'coupon_stock_id' => '1757',
    'openid_count' => '1',
    'partner_trade_no' => '1000009820141203515766',
    'openid' => 'onqOjjrXT-776SpHnfexGm1_P7iE',
    'appid' => 'wx5edab3bdfba3dc1c',
    'mch_id' => '10000098',
    'op_user_id' => '10000098',
    'device_info' => '',
    'version' => '1.0',
    'type' => 'XML',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/mmpaymkttransfers/send_coupon')->post([
  'xml' => [
    'coupon_stock_id' => '1757',
    'openid_count' => '1',
    'partner_trade_no' => '1000009820141203515766',
    'openid' => 'onqOjjrXT-776SpHnfexGm1_P7iE',
    'appid' => 'wx5edab3bdfba3dc1c',
    'mch_id' => '10000098',
    'op_user_id' => '10000098',
    'device_info' => '',
    'version' => '1.0',
    'type' => 'XML',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/mmpaymkttransfers/send_coupon']->post([
  'xml' => [
    'coupon_stock_id' => '1757',
    'openid_count' => '1',
    'partner_trade_no' => '1000009820141203515766',
    'openid' => 'onqOjjrXT-776SpHnfexGm1_P7iE',
    'appid' => 'wx5edab3bdfba3dc1c',
    'mch_id' => '10000098',
    'op_user_id' => '10000098',
    'device_info' => '',
    'version' => '1.0',
    'type' => 'XML',
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
| appid | string | 公众账号ID
| mch_id | string | 商户号
| device_info | string | 设备号
| nonce_str | string | 随机字符串
| sign | string | 签名
| result_code | string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| coupon_stock_id | string | 代金券批次id
| resp_count | integer | 返回记录数
| success_count | integer | 成功记录数
| failed_count | integer | 失败记录数
| openid | string | 用户标识
| ret_code | string | 返回码
| coupon_id | string | 代金券id
| ret_msg | string | 返回信息

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/sp_coupon.php?chapter=12_3&index=4)
