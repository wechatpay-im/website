---
title: 取消签约回调(PAYSCORE.USER_CANCEL_SIGN_PLAN)通知(JSON)
description: 用户在取消签约或者取消服务授权导致服务下签约计划取消后，微信会把相关计划取消签约信息发送给商户，商户需要接收处理，并按照文档规范返回应答。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

> [!IMPORTANT] 注意：
> - 同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。 推荐的做法是，当商户系统收到通知进行处理时，先检查对应业务数据的状态，并判断该通知是否已经处理。如果未处理，则再进行处理；如果已处理，则直接返回结果成功。在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。
> - 特别提醒：商户系统对于开启结果通知的内容一定要做签名验证，并校验通知的信息是否与商户侧的信息一致，防止数据泄露导致出现“假通知”，造成资金损失。
> - 对后台通知交互时，如果微信收到应答不是成功或超时，微信认为通知失败，微信会通过一定的策略定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功。（通知频率为60s/次 - 总计11次 ）

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
| event_type {data-required data-indent=1} | string | 通知的类型<br/>`PAYSCORE.USER_CANCEL_SIGN_PLAN` 枚举值
| resource_type {data-required data-indent=1} | string | 通知的资源数据类型
| summary {data-required data-indent=1} | string | 回调摘要
| resource {data-required data-indent=1} | object {data-tooltip="对应PHP的Array"} | 通知资源数据
| algorithm {data-required data-indent=2} | string | 对数据进行加密的加密算法<br/>`AEAD_AES_256_GCM` 枚举值
| associated_data {data-indent=2} | string | 数据加密的附加数据
| nonce {data-required data-indent=2} | string | 加密使用的随机串
| ciphertext {data-required data-indent=2} | string {data-tooltip=APIv3密钥加密后的BASE64字符串 data-encrypted=by-aes-gcm} | 加密后的密文数据
| original_type {data-required data-indent=2} | string | 原始回调类型
| {colspan=3 .im-table-line}
| sign_plan_id {data-required data-indent=3} | string | 签约计划的主键，唯一定义此资源的标识
| openid {data-indent=3} | string | 签约计划用户服务商应用下的OpenID
| sub_openid {data-indent=3} | string | 签约计划用户子商户应用下的OpenID
| service_id {data-required data-indent=3} | string | 计划所属服务
| mchid {data-required data-indent=3} | string | 服务商商户号
| sub_mchid {data-required data-indent=3} | string | 子商户商户号
| appid {data-required data-indent=3} | string | 服务商AppID
| sub_appid {data-indent=3} | string | 子商户AppID
| merchant_sign_plan_no {data-required data-indent=3} | string | 商户系统内部签约计划单号，只能是数字、大小写字母_-* 且在同一个商户号下唯一
| merchant_callback_url {data-required data-indent=3} | string | 签约事件通知回调地址，用于接收用户签约计划成功后和主动取消签约计划的通知
| plan_id {data-required data-indent=3} | string | 签约所属计划ID
| going_detail_no {data-required data-indent=3} | number | 序号从1开始，顺序按照创建计划时传入的计划详情顺序，0代表无任何详情开始使用
| sign_state {data-required data-indent=3} | string | 计划签约状态<br/>`UNSIGNED` 枚举值
| cancel_sign_time {data-required data-indent=3} | string | 取消计划时间
| cancel_sign_type {data-indent=3} | string | 签约计划取消类型<br/>`NOT_CANCEL` \| `USER` \| `MERCHANT` \| `REVOKE_SERVICE` 枚举值之一
| cancel_reason {data-indent=3} | string | 签约计划取消原因
| plan_name {data-required data-indent=3} | string | 签约计划的名称
| plan_over_time {data-required data-indent=3} | string | 签约计划过期时间
| total_origin_price {data-required data-indent=3} | number | 签约计划原总金额(单位分)
| deduction_quantity {data-required data-indent=3} | number | 签约计划扣费次数
| total_actual_price {data-required data-indent=3} | number | 签约计划实际总金额（单位分）
| signed_detail_list {data-required data-indent=3} | object[] {data-tooltip="对应PHP的Array"} | 签约计划明细列表
| plan_detail_no {data-required data-indent=4} | number | 根据创建计划时传入明细顺序编号，从1开始
| original_price {data-required data-indent=4} | number | 计划明细原支付金额（单位分）
| plan_discount_description {data-indent=4} | string | 计划明细优惠说明
| actual_price {data-required data-indent=4} | number | 计划明细实际支付金额（单位分）
| plan_detail_state {data-required data-indent=4} | string | 计划明细状态<br/>`NOT_USED` \| `USING` \| `USED` \| `SIGN_PLAN_DETAIL_CANCEL` 枚举值之一
| order_id {data-indent=4} | string | 计划明细在使用中，已使用和已取消状态下存在对应的支付分服务订单号
| merchant_plan_detail_no {data-required data-indent=4} | string | 必须保障在商户下唯一，会在创建计划详情对应的支付分订单时会使用该字段作为支付分订单商户侧订单号,只能是数字、大小写字母_-*
| plan_detail_name {data-required data-indent=4} | string | 计划详情名称
| actual_pay_price {data-indent=4} | number | 单位分，计划明细对应订单实际支付金额，是根据完结订单填写金额，订单完结后用户实际支付此金额
| use_time {data-required data-indent=4} | string | 详情使用时间
| complete_time {data-required data-indent=4} | string | 详情对应订单实际完成支付时间
| cancel_time {data-required data-indent=4} | string | 详情对应订单取消时间
| sign_time {data-required data-indent=3} | string | 签约时间

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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012286184) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012159037)
