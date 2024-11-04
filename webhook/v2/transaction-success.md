---
title: 普通支付通知(XML)
description: 当收到通知进行处理时，首先检查对应业务数据的状态，判断该通知是否已经处理过，如果没有处理过再进行处理，如果处理过直接返回结果成功。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

> [!IMPORTANT] 注意：
> - 同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。
> - 后台通知交互时，如果微信收到商户的应答不符合规范或超时，微信会判定本次通知失败，重新发送通知，直到成功为止（在通知一直不成功的情况下，微信总共会发起多次通知，通知频率为15s/15s/30s/3m/10m/20m/30m/30m/30m/60m/3h/3h/3h/6h/6h - 总计 24h4m），但微信不保证通知最终一定能成功。
> - 在订单状态不明或者没有收到微信支付结果通知的情况下，建议商户主动调用[微信支付查单API](/openapi/v2/pay/orderquery)确认订单状态。
> - 商户系统对于支付结果通知的内容一定要做签名验证,并校验返回的订单金额是否与商户侧的订单金额一致，防止数据泄露导致出现“假通知”，造成资金损失。
> - 当收到通知进行处理时，首先检查对应业务数据的状态，判断该通知是否已经处理过，如果没有处理过再进行处理，如果处理过直接返回结果成功。在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| -- | -- | --
| headers | object | 通知的头参数
| Request-ID {data-indent=1} | string | 通知的唯一标识
| Content-Type {data-indent=1} | string | `text/xml`
| body | object | 通知的`XML`数据结构
| appid {data-indent=1} | string |
| attach {data-indent=1} | string |
| bank_type {data-indent=1} | string |
| fee_type {data-indent=1} | string |
| is_subscribe {data-indent=1} | string |
| mch_id {data-indent=1} | string | 商户号
| nonce_str {data-indent=1} | string |
| openid {data-indent=1} | string |
| out_trade_no {data-indent=1} | string |
| result_code {data-indent=1} | string |
| return_code {data-indent=1} | string |
| sign {data-indent=1} | string |
| time_end {data-indent=1} | string |
| total_fee {data-indent=1} | string |
| coupon_fee {data-indent=1} | string |
| coupon_count {data-indent=1} | string |
| coupon_type {data-indent=1} | string |
| coupon_id {data-indent=1} | string |
| trade_type {data-indent=1} | string |
| transaction_id {data-indent=1} | string |

{.im-table #request}

::: code-group

```php [处理程序]
function webhookProcessor(\Psr\Http\Message\RequestInterface $request,
  string $apiv2Key): array {
  if (\strlen($apiv2Key) !== 32) {
    throw new \WeChatPay\Exception\InvalidArgumentException('API密钥为32字节，长度不对');
  }

  $inBody = (string)$request->getBody();
  // 转换通知的XML文本消息为PHP Array数组
  $inBodyArray = \WeChatPay\Transformer::toArray($inBody);

  if (!\WeChatPay\Crypto\Hash::equals(\WeChatPay\Crypto\Hash::sign(
    $inBodyArray['sign_type'] ?? \WeChatPay\Crypto\ALGO_MD5,
    \WeChatPay\Formatter::queryStringLike(\WeChatPay\Formatter::ksort($inBodyArray)),
    $apiv2Key), $inBodyArray['sign'] ?? null
  )) {
    throw new \WeChatPay\Exception\InvalidArgumentException('通知的数据签名校验未通过');
  }

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
| body | object | 应答的`XML`数据结构
| return_code {data-indent=1} | string | 业务处理状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg {data-indent=1} | string | 业务处理附加信息

{.im-table #response}

参阅
- [官方JSAPI文档](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_7&index=8)
- [官方NATIVE文档](https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_7&index=8)
- [官方APP文档](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_7&index=3)
- [官方H5文档](https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_3&index=8)
- [官方小程序支付文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_7&index=8)
