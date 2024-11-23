---
title: 合单支付通知(XML)
description: 合单支付的支付结果将只通知给合单支付发起方（即combine_appid一方），支付完成后，微信会把相关支付结果和用户信息发送给商户，商户需要接收处理，并返回应答。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

> [!IMPORTANT] 注意：
> - 合单支付的支付结果将只通知给合单支付发起方（即combine_appid一方）。
> - 支付完成后，微信会把相关支付结果和用户信息发送给商户，商户需要接收处理，并返回应答。
> - 对后台通知交互时，如果微信收到商户的应答不是成功或超时，微信认为通知失败，微信会通过一定的策略（如30分钟共8次）定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功。（通知频率为15/15/30/180/1800/1800/1800/1800/3600，单位：秒）
> - 注意：同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。
> - 推荐的做法是，当收到通知进行处理时，首先检查对应业务数据的状态，判断该通知是否已经处理过，如果没有处理过再进行处理，如果处理过直接返回结果成功。在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。
> - 特别提醒：商户系统对于支付结果通知的内容一定要做签名验证,并校验返回的订单金额是否与商户侧的订单金额一致，防止数据泄露导致出现“假通知”，造成资金损失。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| -- | -- | --
| headers {data-required} | object | 通知的头参数
| Request-ID {data-required data-indent=1} | string | 通知的唯一标识
| Content-Type {data-required data-indent=1} | string | `text/xml`
| body {data-required} | object | 通知的`XML`数据结构
| return_code {data-required data-indent=1} | string | 返回状态码
| return_msg {data-indent=1} | string | 返回信息
| combine_appid {data-required data-indent=1} | string | 合单APPID
| combine_mch_id {data-required data-indent=1} | string | 合单商户号
| nonce_str {data-required data-indent=1} | string | 随机字符串
| device_info {data-indent=1} | string | 设备号
| combine_openid {data-indent=1} | string | 合单用户标识
| combine_out_trade_no {data-required data-indent=1} | string | 合单商户订单号
| trade_type {data-required data-indent=1} | string | 交易类型<br/>`JSAPI` \| `NATIVE` \| `APP` \| `MWEB` 枚举值之一
| bank_type {data-indent=1} | string | 付款银行
| sign {data-required data-indent=1} | string | 签名
| sign_type {data-required data-indent=1} | string | 签名类型
| result_code {data-required data-indent=1} | string | 业务结果
| result_msg {data-indent=1} | string | 业务信息
| err_code {data-indent=1} | string | 错误代码
| err_code_des {data-indent=1} | string | 错误信息
| sub_order_list {data-required data-indent=1} | string | `JSON` 序列化的子订单集合
| {colspan=3 .im-table-line}
| order_num {data-required data-indent=2} | number | 子订单数
| order_list {data-required data-indent=2} | object[] | 子订单列表
| appid {data-required data-indent=3} | string | 公众账号ID
| mch_id {data-required data-indent=3} | string | 商户号
| openid {data-required data-indent=3} | string | 用户标识
| total_fee {data-required data-indent=3} | number | 标价金额
| cash_fee {data-required data-indent=3} | number | 现金支付金额
| transaction_id {data-required data-indent=3} | string | 微信订单号
| out_trade_no {data-required data-indent=3} | string | 子单商户订单号
| attach {data-indent=3} | string | 商家数据包
| time_end {data-required data-indent=3} | string | 支付完成时间

{.im-table #request}

::: code-group

```php [处理程序]
// 使用Psr标准规范，示例如何处理(取值、转换、验签、解码)「回调通知」事件，WebServer不同，用法略有差异，供参考实现。
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

  // 子单JSON文本转换为Array数组
  $inBodyArray['sub_orders'] = \json_decode($inBodyArray['sub_order_list'], true);

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
- [官方文档](https://pay.weixin.qq.com/wiki/doc/api/combine.php?chapter=24_4&index=5)
