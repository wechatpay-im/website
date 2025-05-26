---
title: 关闭订单
description: 以下情况需要调用关单接口：商户订单支付失败需要生成新单号重新发起支付，要对原订单号调用关单，避免重复支付；系统下单后，用户支付超时，系统退出不再受理，避免用户继续，请调用关单接口。**注意：订单生成后不能马上调用关单接口，最短调用时间间隔为5分钟。**
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 公众账号ID
| mch_id {data-required data-indent=1} | string | 商户号
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| sign_type {data-indent=1} | string | 签名类型<br/>`MD5` \| `HMAC-SHA256` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->pay->closeorder->postAsync([
  'xml' => [
    'appid'        => 'wx8888888888888888',
    'mch_id'       => '1900000109',
    'out_trade_no' => '1217752501201407033233368018',
    'sign_type'    => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/pay/closeorder')->postAsync([
  'xml' => [
    'appid'        => 'wx8888888888888888',
    'mch_id'       => '1900000109',
    'out_trade_no' => '1217752501201407033233368018',
    'sign_type'    => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/pay/closeorder']->postAsync([
  'xml' => [
    'appid'        => 'wx8888888888888888',
    'mch_id'       => '1900000109',
    'out_trade_no' => '1217752501201407033233368018',
    'sign_type'    => 'HMAC-SHA256',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->pay->closeorder->post([
  'xml' => [
    'appid'        => 'wx8888888888888888',
    'mch_id'       => '1900000109',
    'out_trade_no' => '1217752501201407033233368018',
    'sign_type'    => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/pay/closeorder')->post([
  'xml' => [
    'appid'        => 'wx8888888888888888',
    'mch_id'       => '1900000109',
    'out_trade_no' => '1217752501201407033233368018',
    'sign_type'    => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/pay/closeorder']->post([
  'xml' => [
    'appid'        => 'wx8888888888888888',
    'mch_id'       => '1900000109',
    'out_trade_no' => '1217752501201407033233368018',
    'sign_type'    => 'HMAC-SHA256',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg {data-required} | string | 返回信息
| appid {data-required} | string | 公众账号ID
| mch_id {data-required} | string | 商户号
| nonce_str {data-required} | string | 随机字符串
| sign {data-required} | string | 签名
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| result_msg {data-required} | string | 业务结果描述
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011935216) [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011936618) [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011937627) [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011937390) [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011941206) [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011987803) [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011936646) [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011989257) [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011960250) [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011940962) [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011984036) [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011988383) [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013634951) [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013634995) [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013635199) [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013636477) [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013636602)
