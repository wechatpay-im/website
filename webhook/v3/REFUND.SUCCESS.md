---
title: 退款成功(REFUND.SUCCESS)通知(JSON)
description: 退款状态改变后，微信会把相关退款结果发送给商户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

> [!IMPORTANT] 注意：
> - 同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。 推荐的做法是，当商户系统收到通知进行处理时，先检查对应业务数据的状态，并判断该通知是否已经处理。如果未处理，则再进行处理；如果已处理，则直接返回结果成功。在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。
> - 如果在所有通知频率后没有收到微信侧回调，商户应调用查询订单接口确认订单状态。
> - 特别提醒：商户系统对于开启结果通知的内容一定要做签名验证，并校验通知的信息是否与商户侧的信息一致，防止数据泄露导致出现“假通知”，造成资金损失。
> - 商户退款完成后，微信会把相关退款结果和用户信息发送给清算机构，清算机构需要接收处理后返回应答成功，然后继续给异步通知到下游从业机构。
> - 对后台通知交互时，如果微信收到商户的应答不符合规范或超时，微信认为通知失败，微信会通过一定的策略定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功。（通知频率为15s/15s/30s/3m/10m/20m/30m/30m/30m/60m/3h/3h/3h/6h/6h - 总计 24h4m）

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| headers {data-required} | object {data-tooltip="对应PHP的Array"} | 通知的头参数
| Content-Type {data-required data-indent=1} | string | `application/json`
| Request-ID {data-required data-indent=1} | string | 通知的唯一标识
| Wechatpay-Nonce {data-required data-indent=1} | string | 数据签名使用的随机串
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号
| Wechatpay-Signature {data-required data-indent=1} | string | 签名串
| Wechatpay-Signature-Type {data-required data-indent=1} | string | 签名算法<br/>`WECHATPAY2-SHA256-RSA2048` 枚举值
| Wechatpay-Timestamp {data-required data-indent=1} | string | 时间戳
| body {data-required} | object {data-tooltip="对应PHP的Array"} | 通知的`JSON`数据结构
| id {data-required data-indent=1} | string | 通知的唯一ID
| create_time {data-required data-indent=1} | string | 通知创建的时间
| event_type {data-required data-indent=1} | string | 通知的类型<br/>`REFUND.SUCCESS` 枚举值
| resource_type {data-required data-indent=1} | string | 通知的资源数据类型
| summary {data-required data-indent=1} | string | 回调摘要
| resource {data-required data-indent=1} | object {data-tooltip="对应PHP的Array"} | 通知资源数据
| algorithm {data-required data-indent=2} | string | 对数据进行加密的加密算法<br/>`AEAD_AES_256_GCM` 枚举值
| associated_data {data-indent=2} | string | 数据加密的附加数据
| nonce {data-required data-indent=2} | string | 加密使用的随机串
| ciphertext {data-required data-indent=2} | string {data-tooltip=APIv3密钥加密后的BASE64字符串 data-encrypted=by-aes-gcm} | 加密后的密文数据
| original_type {data-required data-indent=2} | string | 原始回调类型
| {colspan=3 .im-table-line}
| mchid {data-required data-indent=3} | string | 普通商户的商户号，由微信支付生成并下发。
| out_trade_no {data-required data-indent=3} | string | 返回的商户订单号
| transaction_id {data-required data-indent=3} | string | 微信支付订单号
| out_refund_no {data-required data-indent=3} | string | 商户退款单号
| refund_id {data-required data-indent=3} | string | 微信退款单号
| refund_status {data-required data-indent=3} | string | 退款状态<br/>`SUCCESS` \| `CLOSED` \| `ABNORMAL` 枚举值之一
| success_time {data-indent=3} | string | 1、退款成功时间
| user_received_account {data-required data-indent=3} | string | 取当前退款单的退款入账方。<br/>1、退回银行卡：{银行名称}{卡类型}{卡尾号}<br/>2、退回支付用户零钱: 支付用户零钱<br/>3、退还商户: 商户基本账户、商户结算银行账户<br/>4、退回支付用户零钱通：支付用户零钱通<br/>5、退回用户经营账户：用户经营账户<br/>6、退回支付用户银行电子账户：支付用户银行电子账户<br/>7、退回支付用户零花钱：支付用户零花钱<br/>8、退回支付用户来华零钱包：支付用户来华零钱包<br/>9、退回企业支付商户：企业支付商户
| recv_account {data-indent=3} | string | 退款入账账户
| fund_source {data-indent=3} | string | 退款资金来源<br/>`REFUND_SOURCE_UNSETTLED_FUNDS` \| `REFUND_SOURCE_RECHARGE_FUNDS` 枚举值之一
| amount {data-required data-indent=3} | object {data-tooltip="对应PHP的Array"} | 金额信息
| settlement_refund {data-indent=4} | number | 结算币种退款金额
| settlement_currency {data-indent=4} | string | 结算币种
| total {data-required data-indent=4} | number | 订单总金额，单位为分，只能为整数
| currency {data-required data-indent=4} | string | 货币类型
| refund {data-required data-indent=4} | number | 退款金额，币种的最小单位，只能为整数，不能超过原订单支付金额，如果有使用券，后台会按比例退。
| payer_total {data-required data-indent=4} | number | 用户实际支付金额，单位为分，只能为整数
| payer_currency {data-required data-indent=4} | string | 用户支付币种
| payer_refund {data-required data-indent=4} | number | 退款给用户的金额，不包含所有优惠券金额
| exchange_rate {data-indent=4} | object {data-tooltip="对应PHP的Array"} | 汇率信息
| type {data-indent=5} | string | 汇率类型<br/>`USERPAYMENT_RATE` \| `SETTLEMENT_RATE` 枚举值之一
| rate {data-indent=5} | integer | 汇率值
| sp_mchid {data-indent=3} | string | 服务商户号，由微信支付生成并下发 。
| sub_mchid {data-indent=3} | string | 子商户的商户号，由微信支付生成并下发。
| refund_account {data-indent=3} | string | 电商平台垫资退款专用参数<br/>`REFUND_SOURCE_PARTNER_ADVANCE` \| `REFUND_SOURCE_SUB_MERCHANT` 枚举值之一
| individual_auth_id {data-indent=3} | string | 个人收款的微信支付账户，微信用户在该平台的标志

{.im-table #request}

1. 跨境/全球会返回**exchange_rate**字典 {#GLOBAL}

1. 平台收付通-个人收款场景会返回**individual_auth_id**字典 {#INDIVIDUAL}

::: code-group

```php [处理程序]
// 使用Psr标准规范，示例如何处理(取值、验签、解密)「回调通知」事件，WebServer不同，用法略有差异，供参考实现。
function webhookProcessor(\Psr\Http\Message\RequestInterface $request,
  array $platformPublicKeyMap, string $apiv3Key): array {
  if (!\count($platformPublicKeyMap)) {
    throw new \WeChatPay\Exception\InvalidArgumentException('平台证书或者平台公钥数组不能为空');
  }

  if (\strlen($apiv3Key) !== 32) {
    throw new \WeChatPay\Exception\InvalidArgumentException('APIV3密钥为32字节，长度不对');
  }

  if (!($request->hasHeader(\WeChatPay\WechatpayNonce)
    && $request->hasHeader(\WeChatPay\WechatpaySerial)
    && $request->hasHeader(\WeChatPay\WechatpaySignature)
    && $request->hasHeader(\WeChatPay\WechatpayTimestamp))) {
    throw new \WeChatPay\Exception\InvalidArgumentException('通知的头参数缺失必要参数');
  }

  // 检查通知的时间偏移量，允许5分钟之内的偏移
  [$inWechatpayTimestamp] = $request->getHeader(\WeChatPay\WechatpayTimestamp);
  if (\WeChatPay\MAXIMUM_CLOCK_OFFSET < \abs(
    \WeChatPay\Formatter::timestamp() - (int)$inWechatpayTimestamp)) {
    throw new \WeChatPay\Exception\InvalidArgumentException('通知头参数的时间偏移量超过可信阈值');
  }

  // 检查通知的平台证书/平台公钥实例是否存在
  [$inWechatpaySerial] = $request->getHeader(\WeChatPay\WechatpaySerial);
  if (!\array_key_exists($inWechatpaySerial, $platformPublicKeyMap)) {
    throw new \WeChatPay\Exception\InvalidArgumentException('通知头参数的证书序列号/公钥ID本地不存在');
  }

  // 验证通知的数据签名
  [$inWechatpaySignature] = $request->getHeader(\WeChatPay\WechatpaySignature);
  [$inWechatpayNonce] = $request->getHeader(\WeChatPay\WechatpayNonce);
  $inBody = (string)$request->getBody();
  if (!\WeChatPay\Crypto\Rsa::verify(
    \WeChatPay\Formatter::joinedByLineFeed($inWechatpayTimestamp, $inWechatpayNonce, $inBody),
    $inWechatpaySignature, $platformPublicKeyMap[$inWechatpaySerial]
  )) {
    throw new \WeChatPay\Exception\InvalidArgumentException('通知头参数的数据签名校验未通过');
  }

  // 转换通知的JSON文本消息为PHP Array数组
  $inBodyArray = (array)\json_decode($inBody, true);
  // 使用PHP7+的数据解构语法，从Array中解构并赋值变量
  ['resource' => [
    'ciphertext'      => $ciphertext,
    'nonce'           => $nonce,
    'associated_data' => $aad
  ]] = $inBodyArray;
  // 加密文本消息解密，有可能解密异常(eg: 平台探测流量)会抛 \UnexpectedValueException
  $inBodyResource = \WeChatPay\Crypto\AesGcm::decrypt($ciphertext, $apiv3Key, $nonce, $aad);
  // 把解密后的文本转换为PHP Array数组
  $inBodyResourceArray = (array)\json_decode($inBodyResource, true);
  // 把解密后的数组定义为'original_data'函数返回
  $inBodyArray['resource']['original_data'] = $inBodyResourceArray;

  return [
    'headers' => $request->getHeaders(),
    'body' => $inBodyArray
  ];
}

// do your business
// ...
// ...
$json = \json_encode([
  'code' => 'SUCCESS',
  'message' => 'OK'
]);
```

:::

| 应答规范 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| status | number | `HTTP`状态码<br/>`20X` `4XX` `5XX` 枚举值之一
| body | object {data-tooltip="对应PHP的Array"} | 应答的`JSON`数据结构
| code {data-indent=1} | string | 业务处理状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| message {data-indent=1} | string | 业务处理附加信息

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012791865) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013070388) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012810605) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012791886) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012791906) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012085921) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421172) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421273) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421356) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421448) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013071196) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012268885) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012587976) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012647469) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012083103) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012085298) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013080241) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012085681) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012085876) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012085802) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012231901) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462126) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462195) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462327) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462586) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013080628) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012167494) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012650317) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012166857) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012886275) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012086319) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012124635) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013163616) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012586138) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015252444) [官方文档](https://pay.weixin.qq.com/doc/global/v3/zh/4013013884) [官方文档](https://pay.weixin.qq.com/doc/global/v3/zh/4012354447) [官方文档](https://pay.weixin.qq.com/doc/global/v3/zh/4012354487) [官方文档](https://pay.weixin.qq.com/doc/global/v3/zh/4012354541) [官方文档](https://pay.weixin.qq.com/doc/global/v3/zh/4012354577) [官方文档](https://pay.weixin.qq.com/doc/global/v3/zh/4012354605) [官方文档](https://pay.weixin.qq.com/doc/global/v3/zh/4013988467) [官方文档](https://pay.weixin.qq.com/doc/global/v3/zh/4014096479) [官方文档](https://pay.weixin.qq.com/doc/global/v3/zh/4012354862)
