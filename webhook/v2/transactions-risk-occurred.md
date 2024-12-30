---
title: 事中-风险交易回调通知银行服务商(XML)
description: 推送涉及高风险诈骗（尤其是来源订单/客服电话投诉）的风险订单给银行。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

> [!IMPORTANT] 注意：
> - 当商户申请的退款有结果后（退款状态为：退款成功、退款关闭、退款异常），微信会把相关结果发送给商户，商户需要接收处理，并返回应答。
> - 对后台通知交互时，如果微信收到商户的应答不是成功或超时，微信认为通知失败，微信会通过一定的策略定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功（通知频率为15s/15s/30s/3m/10m/20m/30m/30m/30m/60m/3h/3h/3h/6h/6h - 总计 24h4m）。
> - 注意：同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。
> - 推荐的做法是，当收到通知进行处理时，首先检查对应业务数据的状态，判断该通知是否已经处理过，如果没有处理过再进行处理，如果处理过直接返回结果成功。在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| -- | -- | --
| headers {data-required} | object {data-tooltip="对应PHP的Array"} | 通知的头参数
| Request-ID {data-required data-indent=1} | string | 通知的唯一标识
| Content-Type {data-required data-indent=1} | string | `text/xml`
| body {data-required} | object {data-tooltip="对应PHP的Array"} | 通知的`XML`数据结构
| return_code {data-required data-indent=1} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg {data-indent=1} | string | 返回信息
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值
| sign {data-required data-indent=1} | string | 签名
| nonce_str {data-required data-indent=1} | string | 随机字符串
| event_code {data-required data-indent=1} | string | 事件单号
| risk_level {data-required data-indent=1} | string | 风险级别<br/>`LOW` \| `MEDIUM` \| `HIGH` 枚举值之一
| risk_level_desc {data-required data-indent=1} | string | 风险描述
| mch_id {data-required data-indent=1} | string | 有风险交易的服务商号
| sub_mch_id {data-required data-indent=1} | string | 有风险交易的商户号
| transaction_id_list {data-required data-indent=1} | string | 风险交易的微信订单号列表`JSON`格式
| {colspan=3 .im-table-line}
| data {data-required data-indent=2} | object {data-tooltip="对应PHP的Array"} | 微信订单号列表
| transaction_id {data-required data-indent=3} | string[] | 微信订单号

{.im-table #request}

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
| body | object {data-tooltip="对应PHP的Array"} | 应答的`XML`数据结构
| return_code {data-indent=1} | string | 业务处理状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg {data-indent=1} | string | 业务处理附加信息

{.im-table #response}

参阅
- [官方文档](https://pay.weixin.qq.com/wiki/doc/api/mch_bank.php?chapter=9_292)
