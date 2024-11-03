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
| headers | object | 通知的头参数
| Request-ID {data-indent=1} | string | 通知的唯一标识
| Content-Type {data-indent=1} | string | `text/xml`
| body | object | 通知的`XML`数据结构
| return_code {data-indent=1} | string
| return_msg {data-indent=1} | string
| appid {data-indent=1} | string
| mch_id {data-indent=1} | string
| nonce_str {data-indent=1} | string
| req_info {data-indent=1} | string
| {colspan=3 .im-table-line}
| out_refund_no {data-indent=2} | string
| out_trade_no {data-indent=2} | string
| refund_account {data-indent=2} | string
| refund_fee {data-indent=2} | string
| refund_id {data-indent=2} | string
| refund_recv_accout {data-indent=2} | string
| refund_request_source {data-indent=2} | string
| refund_status {data-indent=2} | string
| settlement_refund_fee {data-indent=2} | string
| settlement_total_fee {data-indent=2} | string
| success_time {data-indent=2} | string
| total_fee {data-indent=2} | string
| transaction_id {data-indent=2} | string
| cash_refund_fee {data-indent=2} | string

{.im-table #request}

::: code-group

```php [处理程序]
function webhookProcessor(\Psr\Http\Message\RequestInterface $request, string $apiv2Key): array {
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
  'return_msg' => 'OK',
]);
```

:::

| 应答规范 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| body | object | 应答的`XML`数据结构
| return_code {data-indent=1} | string | 业务处理状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg {data-indent=1} | string | 业务处理附加信息

{.im-table #response}

参阅
- [官方JSAPI文档](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_16&index=10)
- [官方NATIVE文档](https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_16&index=11)
- [官方APP文档](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_16&index=11)
- [官方H5文档](https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_16&index=10)
- [官方小程序支付文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_16&index=10)