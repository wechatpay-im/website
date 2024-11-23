---
title: 沙箱订单查询
description: 该系统分为两种用例类型：支付成功用例与支付异常用例。请严格按照用例的顺序、金额执行用例，确保用例的检查点完全符合预期。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }} [支付成功用例](https://pay.weixin.qq.com/wiki/doc/api/download/sandbox-micropay-SUCCESS.docx)根据测试用例金额的不同返回不同的响应报文，[支付异常用例](https://pay.weixin.qq.com/wiki/doc/api/download/sandbox-micropay-ERROR.docx)的识别将通过 Http Header 中添加异常头 `Wechatpay-Negative-Test: {用例名}` 识别。沙箱系统将通过识别用例名返回对应的异常信息。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| -- | -- | --
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string {data-tooltip="最长32字符"} | 公众账号ID
| mch_id {data-required data-indent=1} | string {data-tooltip="最长32字符"} | 商户号
| out_trade_no {data-required data-indent=1} | string {data-tooltip="最长32字符"} | 商户订单号
| sign_type {data-indent=1} | string | 签名类型<br/>`MD5` \| `HMAC-SHA256`枚举值之一<br/>默认值 `MD5`
| headers | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Negative-Test {data-indent=1} | string | 异常用例名称<br/>`MICROPAY_USERPAYING` \| `MICROPAY_TIMEOUT` \| `MICROPAY_PAYERROR` \| `MICROPAY_PAY_QUERY_TIMEOUT`枚举值之一
| timeout | float | 请求超时时间

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->xdc->apiv2sandbox->pay->orderquery->postAsync([
  'xml' => [
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'out_trade_no' => '20150806125346',
    'sign_type' => 'HMAC-SHA256',
  ],
  'headers' => [
    'Wechatpay-Negative-Test' => 'MICROPAY_USERPAYING',
  ],
  'timeout' => 0.4,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string)$response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/xdc/apiv2sandbox/pay/orderquery')->postAsync([
  'xml' => [
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'out_trade_no' => '20150806125346',
    'sign_type' => 'HMAC-SHA256',
  ],
  'headers' => [
    'Wechatpay-Negative-Test' => 'MICROPAY_USERPAYING',
  ],
  'timeout' => 0.4,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string)$response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/xdc/apiv2sandbox/pay/orderquery']->postAsync([
  'xml' => [
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'out_trade_no' => '20150806125346',
    'sign_type' => 'HMAC-SHA256',
  ],
  'headers' => [
    'Wechatpay-Negative-Test' => 'MICROPAY_USERPAYING',
  ],
  'timeout' => 0.4,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string)$response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->xdc->apiv2sandbox->pay->orderquery->post([
  'xml' => [
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'out_trade_no' => '20150806125346',
    'sign_type' => 'HMAC-SHA256',
  ],
  'headers' => [
    'Wechatpay-Negative-Test' => 'MICROPAY_USERPAYING',
  ],
  'timeout' => 0.4,
]);
print_r(\WeChatPay\Transformer::toArray((string)$response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/xdc/apiv2sandbox/pay/orderquery')->post([
  'xml' => [
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'out_trade_no' => '20150806125346',
    'sign_type' => 'HMAC-SHA256',
  ],
  'headers' => [
    'Wechatpay-Negative-Test' => 'MICROPAY_USERPAYING',
  ],
  'timeout' => 0.4,
]);
print_r(\WeChatPay\Transformer::toArray((string)$response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/xdc/apiv2sandbox/pay/orderquery']->post([
  'xml' => [
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'out_trade_no' => '20150806125346',
    'sign_type' => 'HMAC-SHA256',
  ],
  'headers' => [
    'Wechatpay-Negative-Test' => 'MICROPAY_USERPAYING',
  ],
  'timeout' => 0.4,
]);
print_r(\WeChatPay\Transformer::toArray((string)$response->getBody()));
```
:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| -- | -- | --
| return_code {data-required} | string | 返回状态码 `SUCCESS` \| `FAIL`
| return_msg | string | 返回信息
| result_code {data-required} | string | 业务结果 `SUCCESS` \| `FAIL`
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| trade_type {data-required} | string | 交易类型 `MICROPAY`
| trade_state | string | 交易状态
| out_trade_no {data-required} | string | 商户订单号
| transaction_id {data-required} | string | 微信支付订单号
| total_fee {data-required} | string | 标价金额
| cash_fee {data-required} | string | 现金支付金额
| coupon_fee | string | 代金券金额

{.im-table #response}

> [!IMPORTANT] 重要提示
> 1. *$instance* 构造实例化时，需要显式初始化 **secret** 字段，此为沙箱环境密钥，即前序[获取沙箱环境密钥](../../apiv2getsignkey/sign/getsignkey.md)获取到的 **sandbox_signkey**；
> 2. 请求参数的**appid**为任意值，官方沙箱环境未做要求，也无需有[绑定关系](https://kf.qq.com/faq/1801116VJfua1801113QVNVz.html)；
> 3. 此接口仅支持以商户订单号**out_trade_no**查询；
> 4. [支付成功用例](https://pay.weixin.qq.com/wiki/doc/api/download/sandbox-micropay-SUCCESS.docx)仅代表前序[沙箱付款码支付](../../apiv2sandbox/pay/micropay.md)受理成功，用户支付行为是一个异步过程，是否完成，需要通过此接口二次确认交易真实完成，即：
>    1. 【付款码-正常】订单金额**0.01**元，用户支付成功
>    2. 【付款码-正常】订单金额**0.02**元（含0.01元代金券），用户支付成功
>    3. 【付款码-正常】订单金额**0.03**元（含0.01元代金券和0.02元免充值现金券），用户支付成功
> 5. [支付异常用例](https://pay.weixin.qq.com/wiki/doc/api/download/sandbox-micropay-ERROR.docx)通过此接口的第二参数 **headers** 字段进行验证，为可选字段，按需显式传递 *Wechatpay-Negative-Test* 对应的用例名称，即：
>    1. **MICROPAY_USERPAYING** 用户未支付完成
>    2. **MICROPAY_TIMEOUT** 用户支付成功，微信支付返回超时（客户端超时时间请设置在 500ms 以内）
>    3. **MICROPAY_PAYERROR** 用户支付失败，微信支付返回超时（客户端超时时间请设置在 500ms 以内）
>    4. **MICROPAY_PAY_QUERY_TIMEOUT** 微信支付返回超时，且查单失败
> 6. [支付异常用例](https://pay.weixin.qq.com/wiki/doc/api/download/sandbox-micropay-ERROR.docx)中要求限定客户端超时时间的，请求参数增加 **timeout** 参数，按需显式设置；
> 7. 此接口有QPS限制(官方未公布)，高频请求会被官方重定向到腾讯[公益404](https://wx.gtimg.com/core/404.html)页面；

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/sp_coupon.php?chapter=23_1&index=2)
