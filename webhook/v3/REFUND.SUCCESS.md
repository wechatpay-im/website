---
title: 退款成功通知(JSON)
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
| headers | object | 通知的头参数
| Content-Type {data-indent=1} | string | `application/json`
| Request-ID {data-indent=1} | string | 通知的唯一标识
| Wechatpay-Nonce {data-indent=1} | string | 数据签名使用的随机串
| Wechatpay-Serial {data-indent=1} | string | 平台证书序列号/平台公钥ID
| Wechatpay-Signature {data-indent=1} | string | 签名串
| Wechatpay-Signature-Type {data-indent=1} | string | 签名算法<br/>`WECHATPAY2-SHA256-RSA2048` 枚举值
| Wechatpay-Timestamp {data-indent=1} | string | 时间戳
| body | object | 通知的`JSON`数据结构
| id {data-indent=1} | string | 通知的唯一ID
| create_time {data-indent=1} | string | 通知创建的时间
| event_type {data-indent=1} | string | 通知的类型<br/>`REFUND.SUCCESS` 枚举值
| resource_type {data-indent=1} | string | 通知的资源数据类型
| summary {data-indent=1} | string | 回调摘要
| resource {data-indent=1} | object | 通知资源数据
| algorithm {data-indent=2} | string | 对数据进行加密的加密算法<br/>`AEAD_AES_256_GCM` 枚举值
| associated_data {data-indent=2} | string | 数据加密的附加数据
| nonce {data-indent=2} | string | 加密使用的随机串
| ciphertext {data-indent=2} | string | 加密后的密文数据
| original_type {data-indent=2} | string | 原始回调类型
| {colspan=3 .im-table-line}
| mchid {data-indent=3} | string | 普通商户的商户号，由微信支付生成并下发。
| out_trade_no {data-indent=3} | string | 返回的商户订单号
| transaction_id {data-indent=3} | string | 微信支付订单号
| out_refund_no {data-indent=3} | string | 商户退款单号
| refund_id {data-indent=3} | string | 微信退款单号
| refund_status {data-indent=3} | string | 退款状态<br/>`SUCCESS` \| `CLOSED` \| `ABNORMAL` 枚举值之一
| success_time {data-indent=3} | string | 1、退款成功时间
| user_received_account {data-indent=3} | string | 取当前退款单的退款入账方。<br/>1、退回银行卡：{银行名称}{卡类型}{卡尾号}<br/>2、退回支付用户零钱: 支付用户零钱<br/>3、退还商户: 商户基本账户、商户结算银行账户<br/>4、退回支付用户零钱通：支付用户零钱通<br/>5、退回用户经营账户：用户经营账户<br/>6、退回支付用户银行电子账户：支付用户银行电子账户<br/>7、退回支付用户零花钱：支付用户零花钱<br/>8、退回支付用户来华零钱包：支付用户来华零钱包<br/>9、退回企业支付商户：企业支付商户
| amount {data-indent=3} | object | 金额信息
| total {data-indent=4} | number | 订单总金额，单位为分，只能为整数
| refund {data-indent=4} | number | 退款金额，币种的最小单位，只能为整数，不能超过原订单支付金额，如果有使用券，后台会按比例退。
| payer_total {data-indent=4} | number | 用户实际支付金额，单位为分，只能为整数
| payer_refund {data-indent=4} | number | 退款给用户的金额，不包含所有优惠券金额
| sp_mchid {data-indent=3} | string | 服务商户号，由微信支付生成并下发 。
| sub_mchid {data-indent=3} | string | 子商户的商户号，由微信支付生成并下发。
| refund_account {data-indent=3} | string | 电商平台垫资退款专用参数<br/>`REFUND_SOURCE_PARTNER_ADVANCE` \| `REFUND_SOURCE_SUB_MERCHANT` 枚举值之一

{.im-table #request}

::: code-group

```php [处理程序]
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
```

:::

| 应答规范 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| status | number | `HTTP`状态码<br/>`20X` `4XX` `5XX` 枚举值之一
| body | object | 应答的`JSON`数据结构
| code {data-indent=1} | string | 业务处理状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| message {data-indent=1} | string | 业务处理附加信息

{.im-table #response}

参阅
- [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/combine-payment/refunds/refund-result-notice.html)
- [官方文档](https://pay.weixin.qq.com/docs/partner/apis/combine-payment/refunds/refund-result-notice.html)
- [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/combine-payment-identity/refunds/refund-result-notice.html)
- [官方文档](https://pay.weixin.qq.com/docs/partner/apis/combine-payment-identity/refunds/refund-result-notice.html)
- [官方文档](https://pay.weixin.qq.com/docs/partner/apis/ecommerce-refund/refund-result.html)
- [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/h5-payment/refund-result-notice.html)
- [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/in-app-payment/refund-result-notice.html)
- [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/jsapi-payment/refund-result-notice.html)
- [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/mini-program-payment/refund-result-notice.html)
- [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/native-payment/refund-result-notice.html)
- [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-h5-payment/refund-result-notice.html)
- [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-in-app-payment/refund-result-notice.html)
- [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-jsapi-payment/refund-result-notice.html)
- [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-mini-program-payment/refund-result-notice.html)
- [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-miniprogram-payment/refund-result-notice.html)
- [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-native-payment/refund-result-notice.html)
- [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-scannedpos-payment/refund-result-notice.html)
- [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/personal-collections/refund-result.html)
- [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/refund/refunds/refund-result-notice.html)
- [官方文档](https://pay.weixin.qq.com/docs/partner/apis/refund/refunds/refund-result-notice.html)
- [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/refunds/refund-result-notice.html)
- [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score-no-confirm/refund-result-notice.html)
- [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/wexin-pay-score-parking/refund-notification.html)
- [官方文档](https://pay.weixin.qq.com/docs/partner/apis/wexin-pay-score-parking/refund-notification.html)
- [退款结果通知](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/refunds/chapter3_3.shtml)