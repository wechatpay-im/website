---
title: 车牌状态变更通知(XML)
description: 从用户进入开通车主服务的停车场（用户入场通知接口），到用户离场期间（扣款接口），这个时间段内如果用户状态变为可用或者不可用，微信会把相关状态变更情况（可用/不可用）异步发送给商户，回调url为调用上述用户入场通知接口时填写的notify_url字段。商户在收到车主状态变更通知后，需进行接收处理并返回应答。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

> [!IMPORTANT] 注意：
> - 对后台通知交互时，如果微信收到商户的应答不是成功或超时，微信认为通知失败，微信会通过一定的策略定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功（通知频率为6/12/24/48/96/192/384/768/1536，单位：秒）。
> - 注意：同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。
> - 推荐的做法是，当收到通知进行处理时，首先检查对应业务数据的状态，判断该通知是否已经处理过，如果没有处理过再进行处理，如果处理过直接返回结果成功。在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| -- | -- | --
| headers {data-required} | object | 通知的头参数
| Request-ID {data-required data-indent=1} | string | 通知的唯一标识
| Content-Type {data-required data-indent=1} | string | `text/xml`
| body {data-required} | object | 通知的`XML`数据结构
| mch_id {data-required data-indent=1} | string | 商户号
| sub_mch_id {data-indent=1} | string | 子商户号
| appid {data-required data-indent=1} | string | 公众平台APPID
| nonce_str {data-required data-indent=1} | string | 随机字符串
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值
| sign {data-required data-indent=1} | string | 签名
| plate_number {data-required data-indent=1} | string | 车牌号
| vehicle_event_type {data-indent=1} | string | 车牌变更事件类型<br/>`NORMAL` \| `BLOCKED` 枚举值之一
| vehicle_event_des {data-indent=1} | string | 车牌变更事件信息<br/>`OVERDUE` \| `REMOVE` \| `PAUSE` 枚举值之一
| deduct_mode {data-indent=1} | string | 发起扣费方式<br/>`PROACTIVE` \| `AUTOPAY` 枚举值之一
| vehicle_event_createtime {data-required data-indent=1} | string | 车牌变更事件发生时间

{.im-table #request}

::: code-group

```php [处理程序]
// 使用Psr标准规范，示例如何处理(取值、转换、验签)「回调通知」事件，WebServer不同，用法略有差异，供参考实现。
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
- [官方文档](https://pay.weixin.qq.com/wiki/doc/api/vehicle_v2.php?chapter=20_912&index=12)
- [官方文档](https://pay.weixin.qq.com/wiki/doc/api/vehicle_v2_sl.php?chapter=20_912&index=12&p=202)
