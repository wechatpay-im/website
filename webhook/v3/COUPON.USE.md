---
title: 核销事件回调(COUPON.USE)通知(JSON)
description: 用户使用券后，微信会把相关核销券信息发送给商户，商户需要接收处理，并按照文档规范返回应答。出于安全的考虑，我们对核销券信息数据进行了加密，商户需要先对通知数据进行解密，才能得到核销券信息数据。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

> [!IMPORTANT] 注意：
> - *business_type* 细分业务类型，仅有当值为**MULTIUSE**（消费金）时，才会返回，同时返回**consume_information.consume_amount**字段及值；
> - 同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。 推荐的做法是，当商户系统收到通知进行处理时，先检查对应业务数据的状态，并判断该通知是否已经处理。如果未处理，则再进行处理；如果已处理，则直接返回结果成功。在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。
> - 特别提醒：商户系统对于开启结果通知的内容一定要做签名验证，并校验通知的信息是否与商户侧的信息一致，防止数据泄露导致出现“假通知”，造成资金损失。
> - 对后台通知交互时，如果微信收到应答不是成功或超时，微信认为通知失败，微信会通过一定的策略定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功。（通知频率为1min1次，总计9次）

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
| event_type {data-required data-indent=1} | string | 通知的类型<br/>`COUPON.USE` 枚举值
| resource_type {data-required data-indent=1} | string | 通知的资源数据类型
| summary {data-required data-indent=1} | string | 回调摘要
| resource {data-required data-indent=1} | object {data-tooltip="对应PHP的Array"} | 通知资源数据
| algorithm {data-required data-indent=2} | string | 对数据进行加密的加密算法<br/>`AEAD_AES_256_GCM` 枚举值
| associated_data {data-indent=2} | string | 数据加密的附加数据
| nonce {data-required data-indent=2} | string | 加密使用的随机串
| ciphertext {data-required data-indent=2} | string {data-tooltip=APIv3密钥加密后的BASE64字符串 data-encrypted=by-aes-gcm} | 加密后的密文数据
| original_type {data-required data-indent=2} | string | 原始回调类型
| {colspan=3 .im-table-line}
| stock_creator_mchid {data-required data-indent=3} | string | 批次创建方商户号。
| stock_id {data-required data-indent=3} | string | 微信为每个代金券批次分配的唯一ID。
| coupon_id {data-required data-indent=3} | string | 微信为代金券或消费金唯一分配的id。
| singleitem_discount_off {data-indent=3} | object {data-tooltip="对应PHP的Array"} | 单品优惠特定信息。
| single_price_max {data-indent=4} | number | 单品最高优惠价格，单位：分。
| discount_to {data-indent=3} | object {data-tooltip="对应PHP的Array"} | 减至优惠限定字段，仅减至优惠场景有返回。
| cut_to_price {data-indent=4} | number | 减至后优惠单价，单位：分。
| max_price {data-indent=4} | number | 可享受优惠的最高价格，单位：分。
| coupon_name {data-required data-indent=3} | string | 券或消费金名称
| status {data-required data-indent=3} | string | 券或消费金状态：<br/>`SENDED`：可用<br/>`USED`：已实扣<br/>`EXPIRED`：已过期
| description {data-required data-indent=3} | string | 券或消费金描述说明字段。
| create_time {data-required data-indent=3} | string | 领券时间
| coupon_type {data-required data-indent=3} | string | 券或消费金类型：<br/>`NORMAL`：满减券<br/>`CUT_TO`：减至券
| no_cash {data-required data-indent=3} | boolean | 是否无资金流
| available_begin_time {data-required data-indent=3} | string | 可用开始时间
| available_end_time {data-required data-indent=3} | string | 可用结束时间
| singleitem {data-required data-indent=3} | boolean | 是否单品优惠
| normal_coupon_information {data-indent=3} | object {data-tooltip="对应PHP的Array"} | 普通满减券或消费金面额、门槛信息。
| coupon_amount {data-required data-indent=4} | number | 面额，单位：分。
| transaction_minimum {data-required data-indent=4} | number | 使用券或消费金金额门槛，单位：分。
| consume_information {data-indent=3} | object {data-tooltip="对应PHP的Array"} | 已实扣代金券或消费金信息。
| consume_time {data-required data-indent=4} | string | 代金券核销时间
| consume_mchid {data-required data-indent=4} | string | 核销代金券的商户号。<br/>校验规则：<br/>该参数目前现在返回的是收款商户号，间连模式下，目前传的是银联和网联的商户号<br/>
| transaction_id {data-required data-indent=4} | string | 微信支付系统生成的订单号。
| consume_amount {data-required data-indent=4} | number | 核销金额，仅有当business_type=`MULTIUSE`时，才会返回。单位，分
| goods_detail {data-indent=4} | object[] {data-tooltip="对应PHP的Array"} | 商户下单接口传的单品信息。
| goods_id {data-required data-indent=5} | string | 单品券创建时录入的单品编码。
| quantity {data-required data-indent=5} | number | 单品数据
| price {data-required data-indent=5} | number | 单品单价
| discount_amount {data-required data-indent=5} | number | 优惠金额
| business_type {data-indent=3} | string | 细分业务类型<br/>`MULTIUSE` 枚举值

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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012285250) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012285807)
