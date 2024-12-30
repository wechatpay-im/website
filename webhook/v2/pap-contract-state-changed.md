---
title: 扣款服务-签约/解约结果通知(XML)
description: 签约、解约成功后（包含用户主动解约），微信会把相关签约、解约信息异步通知给商户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

> [!IMPORTANT] 注意：
> - 同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。推荐的做法是：当商户系统收到通知进行处理时，先检查对应业务数据的状态，并判断该通知是否已经处理。如果未处理，则再进行处理；如果已处理，则直接返回结果成功。在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。
> - 如果在所有通知频率(0/10/10/10/30/30/30/300/300/300/300/300/300/300/300/300/300/300/300/300/300/300/300/300/300/300/300/300/300/300（单位：秒）)后没有收到微信侧回调,商户应调用查询订单接口确认订单状态。
> - 商户系统对于签约、解约结果通知的内容一定要做签名验证,并校验返回的商户协议号和用户openid信息是否一致，防止数据泄露导致出现“假通知”，造成损失。
> - 当收到通知进行处理时，首先检查对应业务数据的状态，判断该通知是否已经处理过，如果没有处理过再进行处理，如果处理过直接返回结果成功。在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| -- | -- | --
| headers {data-required} | object {data-tooltip="对应PHP的Array"} | 通知的头参数
| Request-ID {data-required data-indent=1} | string | 通知的唯一标识
| Content-Type {data-required data-indent=1} | string | `text/xml`
| body {data-required} | object {data-tooltip="对应PHP的Array"} | 通知的`XML`数据结构
| mch_id {data-required data-indent=1} | string | 商户号
| sub_mch_id {data-indent=1} | string | 子商户号
| contract_code {data-required data-indent=1} | string | 签约协议号
| plan_id {data-required data-indent=1} | string | 模板id
| openid {data-required data-indent=1} | string | 用户标识
| sub_openid {data-indent=1} | string | 用户子标识
| sign {data-required data-indent=1} | string | 签名
| change_type {data-required data-indent=1} | string | 变更类型<br/>`ADD` \| `DELETE` 枚举值之一
| operate_time {data-required data-indent=1} | string | 操作时间
| contract_id {data-required data-indent=1} | string | 委托代扣协议id
| contract_expired_time {data-indent=1} | string | 协议到期时间
| contract_termination_mode {data-indent=1} | string | 协议解约方式<br/>`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` 枚举值之一
| request_serial {data-required data-indent=1} | string | 请求序列号

{.im-table #request}

1. 服务商模式会带上(**sub_openid及sub_mch_id**)字段 {#PARTNER}

::: code-group

```php [处理程序]
// 使用Psr标准规范，示例处理(取值、转换、验签)「回调通知」事件，WebServer不同，用法略有差异，供参考实现。
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
- [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay_v2/papay/chapter5_6.shtml)
- [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay_v2/papay/chapter3_6.shtml)
