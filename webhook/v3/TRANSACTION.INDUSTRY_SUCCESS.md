---
title: 校园轻松付扣费支付成功(TRANSACTION.INDUSTRY_SUCCESS)通知(JSON)
description: 扣费成功后，微信会把相关支付结果信息异步通知给商户。
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
| event_type {data-required data-indent=1} | string | 通知的类型<br/>`TRANSACTION.INDUSTRY_SUCCESS` 枚举值
| resource_type {data-required data-indent=1} | string | 通知的资源数据类型
| summary {data-required data-indent=1} | string | 回调摘要
| resource {data-required data-indent=1} | object {data-tooltip="对应PHP的Array"} | 通知资源数据
| algorithm {data-required data-indent=2} | string | 对数据进行加密的加密算法<br/>`AEAD_AES_256_GCM` 枚举值
| associated_data {data-indent=2} | string | 数据加密的附加数据
| nonce {data-required data-indent=2} | string | 加密使用的随机串
| ciphertext {data-required data-indent=2} | string {data-tooltip=APIv3密钥加密后的BASE64字符串 data-encrypted=by-aes-gcm} | 加密后的密文数据
| original_type {data-required data-indent=2} | string | 原始回调类型
| {colspan=3 .im-table-line}
| mchid {data-required data-indent=3} | string | 微信支付分配的商户号。如果是服务商模式接入则为服务商商户号；如果是直连商户模式接入则为直连商户号。
| appid {data-required data-indent=3} | string | 微信公众平台为服务商商户分配的公众账号ID，与商户号存在绑定关系。 如果是服务商模式接入则为服务商商户号绑定的AppID；如果是直连商户模式接入则为直连商户号绑定的AppID。
| sub_mchid {data-indent=3} | string | 微信支付分配的商户号，服务商商户号与子商户号存在父子关系。如果是服务商模式接入则有值；如果是直连商户模式接入则该字段为空。
| sub_appid {data-indent=3} | string | 微信公众平台为商户分配的公众账号ID，与子商户号存在绑定关系。如果是服务商模式接入则有值；如果是直连商户模式接入则该字段为空。
| out_trade_no {data-required data-indent=3} | string | 商户自行生成的订单号，要求64个字符内，只能是数字、大小写字母和_-，且在同一个商户号下唯一。
| transaction_id {data-indent=3} | string | 微信支付订单号，订单已受理，但未完成扣款时不返回。
| trade_type {data-indent=3} | string | 交易类型，订单已受理，但未完成扣款时不返回，取值如下：<br/>AUTH：平台代扣
| trade_state {data-required data-indent=3} | string | 本支付订单的状态<br/>`SUCCESS` \| `REFUND` \| `ACCEPTED` \| `PAY_FAIL` \| `PAY_BACK` 枚举值之一
| trade_state_desc {data-indent=3} | string | 对当前订单状态的描述和下一步操作的指引。
| bank_type {data-indent=3} | string | 银行类型，扣款成功时返回，采用字符串类型的银行标识。<br/>注：使用`BPA`表示本笔订单由微信支付预先垫付资金。
| attach {data-indent=3} | string | 附加数据，在查询API和支付通知中原样返回，该字段主要用于商户携带订单的自定义数据
| success_time {data-indent=3} | string | 支付订单已成功才会返回
| payer {data-indent=3} | object {data-tooltip="对应PHP的Array"} | 支付者
| openid {data-required data-indent=4} | string | 用户在商户AppID下的唯一标识。
| sub_openid {data-indent=4} | string | 用户在子商户AppID下的唯一标识。如果是服务商模式接入则有值；如果是直连商户模式接入则该字段为空。
| amount {data-required data-indent=3} | object {data-tooltip="对应PHP的Array"} | 订单金额信息
| total {data-required data-indent=4} | number | 订单总金额，单位为分，只能为整数。
| payer_total {data-indent=4} | number | 用户实际支付金额，支付成功时有返回，单位为分，只能为整数。
| discount_total {data-indent=4} | number | 订单折扣，有优惠折扣则返回该字段。
| currency {data-required data-indent=4} | string | 符合ISO 4217标准的三位字母代码，目前只支持人民币：`CNY`
| device_info {data-required data-indent=3} | object {data-tooltip="对应PHP的Array"} | 设备信息
| device_id {data-indent=4} | string | 商户设备号，商户自定义，最大长度32个字符。
| device_ip {data-required data-indent=4} | string | 商户端设备IP（发起扣款请求的商户服务器IP），支持IPv6
| promotion_detail {data-indent=3} | object[] {data-tooltip="对应PHP的Array"} | 优惠详情
| coupon_id {data-indent=4} | string | 券ID。
| name {data-indent=4} | string | 优惠名称。
| scope {data-indent=4} | string | 枚举值：<br/>`GLOBAL`：全场代金券<br/>`SINGLE`：单品优惠
| type {data-indent=4} | string | `COUPON`：代金券，需要走结算资金的充值型代金券（境外商户券币种与支付币种一致）<br/>`DISCOUNT`：优惠券，不走结算资金的免充值型优惠券（境外商户券币种与标价币种一致）
| amount {data-indent=4} | number | 优惠券面额。
| stock_id {data-indent=4} | string | 活动ID，批次ID。
| wechatpay_contribute {data-indent=4} | number | 特指由微信支付商户平台创建的优惠，出资金额等于本项优惠总金额，单位为分。
| merchant_contribute {data-indent=4} | number | 特指商户自己创建的优惠，出资金额等于本项优惠总金额，单位为分。
| other_contribute {data-indent=4} | number | 其他出资方出资金额，单位为分。

{.im-table #request}

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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012161063)
