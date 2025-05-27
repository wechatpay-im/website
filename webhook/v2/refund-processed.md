---
title: 退款结果通知(XML)
description: 当商户申请的退款有结果后（退款状态为：退款成功、退款关闭、退款异常），微信会把相关结果发送给商户，商户需要接收处理，并返回应答。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

> [!IMPORTANT] 注意：
> - 当商户申请的退款有结果后（退款状态为：退款成功、退款关闭、退款异常），微信会把相关结果发送给商户，商户需要接收处理，并返回应答。
> - 对后台通知交互时，如果微信收到商户的应答不是成功或超时，微信认为通知失败，微信会通过一定的策略定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功（通知频率为15s/15s/30s/3m/10m/20m/30m/30m/30m/60m/3h/3h/3h/6h/6h - 总计 24h4m）。
> - 注意：同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。
> - 推荐的做法是，当收到通知进行处理时，首先检查对应业务数据的状态，判断该通知是否已经处理过，如果没有处理过再进行处理，如果处理过直接返回结果成功。在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。
> - 特别说明：退款结果对重要的数据进行了加密，商户需要用商户密钥进行解密后才能获得结果通知的内容

| 请求参数 | 类型 {.type} | 描述 {.desc}
| -- | -- | --
| headers {data-required} | object {data-tooltip="对应PHP的Array"} | 通知的头参数
| Request-ID {data-required data-indent=1} | string | 通知的唯一标识
| Content-Type {data-required data-indent=1} | string | `text/xml`
| body {data-required} | object {data-tooltip="对应PHP的Array"} | 通知的`XML`数据结构
| return_code {data-required data-indent=1} | string | 返回状态码
| return_msg {data-indent=1} | string | 返回信息
| appid {data-required data-indent=1} | string | 公众平台APPID
| mch_id {data-required data-indent=1} | string | 商户号
| sub_mch_id {data-indent=1} | string | 子商户号
| sub_appid {data-indent=1} | string | 子商户应用ID
| nonce_str {data-required data-indent=1} | string | 随机字符串
| req_info {data-required data-indent=1} | string {data-tooltip=经「MD5后的API密钥」加密后的BASE64字符串 data-encrypted=by-aes-ecb} | 加密的`XML`信息
| {colspan=3 .im-table-line}
| out_refund_no {data-required data-indent=2} | string | 商户退款单号
| out_trade_no {data-required data-indent=2} | string | 商户订单号
| refund_account {data-required data-indent=2} | string | 退款资金来源
| refund_fee {data-required data-indent=2} | string | 申请退款金额
| refund_id {data-required data-indent=2} | string | 微信退款单号
| refund_recv_accout {data-indent=2} | string | 退款入账账户
| refund_request_source {data-indent=2} | string | 退款发起来源<br/>`API` \| `VENDOR_PLATFORM` 枚举值之一
| refund_status {data-required data-indent=2} | string |退款状态<br/>`SUCCESS` \| `CHANGE` \| `REFUNDCLOSE` 枚举值之一
| settlement_refund_fee {data-indent=2} | string | 退款金额
| settlement_total_fee {data-indent=2} | string | 应结订单金额
| success_time {data-indent=2} | string | 退款成功时间
| total_fee {data-required data-indent=2} | string | 订单金额
| transaction_id {data-required data-indent=2} | string | 微信支付订单号
| cash_refund_fee {data-required data-indent=2} | string | 用户退款金额

{.im-table #request}

1. 服务商支付成功会带上(**sub_appid及sub_mch_id**)字段 {#PARTNER}

::: code-group

```php [处理程序]
// 使用Psr标准规范，示例如何处理(取值、转换、解密)「回调通知」事件，WebServer不同，用法略有差异，供参考实现。
function webhookProcessor(\Psr\Http\Message\RequestInterface $request,
  string $apiv2Key): array {
  if (\strlen($apiv2Key) !== 32) {
    throw new \WeChatPay\Exception\InvalidArgumentException('API密钥为32字节，长度不对');
  }

  $inBody = (string)$request->getBody();
  // 转换通知的XML文本消息为PHP Array数组
  $inBodyArray = \WeChatPay\Transformer::toArray($inBody);

  if (!\array_key_exists('req_info', $inBodyArray)) {
    throw new \WeChatPay\Exception\InvalidArgumentException('通知的XML数据异常');
  }

  $cipherKey = \WeChatPay\Crypto\Hash::md5($apiv2Key);

  $plaintext = \WeChatPay\Crypto\AesEcb::decrypt($inBodyArray['req_info'], $cipherKey);

  $inBodyArray['refund'] = \WeChatPay\Transformer::toArray($plaintext);

  return [
    'headers' => $request->getHeaders(),
    'body' => $inBodyArray
  ];
}

// do your business
// ...
// ...
$xml = \WeChatPay\Transformer::toXml([
  'return_code' => 'SUCCESS',
  'return_msg' => 'OK'
]);
```

:::

| 应答规范 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| body | object {data-tooltip="对应PHP的Array"} | 应答的`XML`数据结构
| return_code {data-indent=1} | string | 业务处理状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg {data-indent=1} | string | 业务处理附加信息

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011940955) [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011935223) [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011937201) [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011939959) [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011939475) [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011941681) [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011985425) [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011987569) [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011941745) [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011936652) [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011989265) [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011984153) [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4012297550) [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011984440) [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011989912) [官方文档](https://pay.weixin.qq.com/doc/v2/partner/4011988218) [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013634915) [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013634966) [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013635000) [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013635254) [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013636494) [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013636617)
