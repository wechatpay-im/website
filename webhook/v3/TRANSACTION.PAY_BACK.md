---
title: 用户对垫资单还款(TRANSACTION.PAY_BACK)通知(JSON)
description: 商户请求微信支付分停车服务扣费受理接口，会完成订单受理。如果由于用户余额不足等原因，微信支付会进行垫资，用户对该垫资单进行了还款以后，微信支付会把该笔订单还款信息通知到商户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

> [!IMPORTANT] 注意：
> - 同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。 推荐的做法是，当商户系统收到通知进行处理时，先检查对应业务数据的状态，并判断该通知是否已经处理。如果未处理，则再进行处理；如果已处理，则直接返回结果成功。在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。
> - 如果在所有通知频率后没有收到微信侧回调，商户应调用查询订单接口确认订单状态。
> - 特别提醒：商户系统对于开启结果通知的内容一定要做签名验证，并校验通知的信息是否与商户侧的信息一致，防止数据泄露导致出现“假通知”，造成资金损失。
> - 用户支付完成后，微信会把相关支付结果和用户信息发送给商户，商户需要接收处理该消息，并返回应答。
> - 对后台通知交互时，如果微信收到商户的应答不符合规范或超时，微信认为通知失败，微信会通过一定的策略定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功。（通知频率为15s/15s/30s/3m/10m/20m/30m/30m/30m/60m/3h/3h/3h/6h/6h - 总计 24h4m）

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| headers {data-required} | object | 通知的头参数
| Content-Type {data-required data-indent=1} | string | `application/json`
| Request-ID {data-required data-indent=1} | string | 通知的唯一标识
| Wechatpay-Nonce {data-required data-indent=1} | string | 数据签名使用的随机串
| Wechatpay-Serial {data-required data-indent=1} | string | 平台证书序列号/平台公钥ID
| Wechatpay-Signature {data-required data-indent=1} | string | 签名串
| Wechatpay-Signature-Type {data-required data-indent=1} | string | 签名算法<br/>`WECHATPAY2-SHA256-RSA2048` 枚举值
| Wechatpay-Timestamp {data-required data-indent=1} | string | 时间戳
| body {data-required} | object | 通知的`JSON`数据结构
| id {data-required data-indent=1} | string | 通知的唯一ID
| create_time {data-required data-indent=1} | string | 通知创建的时间
| event_type {data-required data-indent=1} | string | 通知的类型<br/>`TRANSACTION.PAY_BACK` 枚举值
| resource_type {data-required data-indent=1} | string | 通知的资源数据类型
| summary {data-required data-indent=1} | string | 回调摘要
| resource {data-required data-indent=1} | object | 通知资源数据
| algorithm {data-required data-indent=2} | string | 对数据进行加密的加密算法<br/>`AEAD_AES_256_GCM` 枚举值
| associated_data {data-indent=2} | string | 数据加密的附加数据
| nonce {data-required data-indent=2} | string | 加密使用的随机串
| ciphertext {data-required data-indent=2} | string | 加密后的密文数据
| original_type {data-required data-indent=2} | string | 原始回调类型
| {colspan=3 .im-table-line}
| mchid {data-required data-indent=3} | string | 微信支付分配的商户号。如果是服务商模式接入则为服务商商户号；如果是直连商户模式接入则为直连商户号。
| appid {data-required data-indent=3} | string | 调用接口提交的应用ID
| sub_mchid {data-required data-indent=3} | string | 调用接口提交的子商户号
| sub_appid {data-required data-indent=3} | string | 调用接口提交的子商户应用ID
| out_trade_no {data-required data-indent=3} | string | 调用接口提交的商户服务订单号
| transaction_id {data-indent=3} | string | 微信支付系统生成的订单号
| trade_type {data-indent=3} | string | 交易类型，订单已受理，但未完成扣款时不返回，取值如下：<br/>`AUTH`：平台代扣
| trade_state {data-required data-indent=3} | string | 交易状态：<br/>`SUCCESS`：支付成功<br/>`ACCEPT`：已接收，等待扣款<br/>`PAY_FAIL`：支付失败(其他原因，如银行返回失败)<br/>`REFUND`：转入退款
| trade_state_desc {data-indent=3} | string | 对当前订单状态的描述和下一步操作的指引。
| bank_type {data-indent=3} | string | 银行类型，采用字符串类型的银行标识。
| attach {data-indent=3} | string | 附加数据，在查询API和支付通知中原样返回，可作为自定义参数使用，实际情况下只有支付完成状态才会返回该字段。
| success_time {data-indent=3} | string | 订单支付完成时间
| payer {data-indent=3} | object | 支付者信息，详细说明见下文
| openid {data-required data-indent=4} | string | 用户在服务商的标识
| sub_openid {data-indent=4} | string | 用户在子商户的标识
| amount {data-indent=3} | object | 订单金额信息，详细说明见下文
| currency {data-indent=4} | string | 符合ISO 4217标准的三位字母代码，目前只支持人民币：`CNY`
| device_info {data-indent=3} | object | 设备信息
| device_id {data-indent=4} | string | 商户设备号，商户自定义，最大长度32个字符。
| promotion_detail {data-indent=3} | object[] | 优惠功能信息，详细说明见下文
| coupon_id {data-required data-indent=4} | string | 券或者立减优惠ID
| name {data-indent=4} | string | 优惠名称。
| scope {data-indent=4} | string | 枚举值<br/>`GLOBAL`：全场代金券<br/>`SINGLE`：单品优惠
| type {data-indent=4} | string | 枚举值：<br/>`CASH`：充值型代金券<br/>`NOCASH`：免充值型代金券
| stock_id {data-indent=4} | string | 活动ID，批次ID。
| activity_id {data-indent=4} | string | 在微信商户后台配置的批次ID。
| currency {data-indent=4} | string | CNY：人民币，境内商户号仅支持人民币。
| sp_mchid {data-required data-indent=3} | string | 调用接口提交的商户号
| description {data-required data-indent=3} | string | 商户自定义字段，用户交易账单中对扣费服务的描述。
| create_time {data-required data-indent=3} | string | 订单成功创建时返回
| trade_state_description {data-indent=3} | string | 对当前订单状态的描述和下一步操作的指引。
| user_repaid {data-indent=3} | string | 枚举值：<br/>`Y`：用户已还款<br/>`N`：用户未还款<br/>注意：使用此字段前需先确认bank_type字段值为`BPA`以及 trade_state字段值为`SUCCESS`。
| trade_scene {data-indent=3} | string | 交易场景值，`PARKING`：车场停车场景
| parking_info {data-indent=3} | object | trade_scene为`PARKING`时，返回停车场景信息
| parking_id {data-indent=4} | string | 车主服务为商户分配的入场ID，商户通过入场通知接口获取入场ID
| plate_number {data-indent=4} | string | 车牌号，仅包括省份+车牌，不包括特殊字符。
| plate_color {data-indent=4} | string | 车牌颜色<br/>`BLUE` \| `GREEN` \| `YELLOW` \| `BLACK` \| `WHITE` \| `LIMEGREEN` 枚举值之一
| start_time {data-indent=4} | string | 用户入场时间
| end_time {data-indent=4} | string | 用户出场时间
| parking_name {data-indent=4} | string | 所在停车位车场的名称
| charging_duration {data-indent=4} | number | 计费的时间长，单位为秒
| device_id {data-indent=4} | string | 停车场设备ID

{.im-table #request}

1. 停车服务会返回(**trade_scene=PARKING**)字段 {#PARKING}

1. 校园轻松付交易类型，订单已受理，但未完成扣款时不返回(**trade_type=AUTH**)字段 {#EDUSCHOOLPAY}

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
| body | object | 应答的`JSON`数据结构
| code {data-indent=1} | string | 业务处理状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| message {data-indent=1} | string | 业务处理附加信息

{.im-table #response}

参阅
- [官方文档](https://pay.weixin.qq.com/docs/partner/apis/campus-easy-pay/transactions/order-repayment-notice.html)
- [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/wexin-pay-score-parking/payment-result-notification.html)
- [官方文档](https://pay.weixin.qq.com/docs/partner/apis/wexin-pay-score-parking/payment-result-notification.html)
- [停车服务扣费受理通知](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter8_8_6.shtml)
- [服务商停车服务扣费受理通知](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_8_6.shtml)
- [校园轻松付订单还款通知](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter5_3_12.shtml)
