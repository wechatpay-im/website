---
title: 医保混合收款成功通知
description: 当有医保混合收款成功后，微信后台会把相关确认结果和订单信息发送给商户，商户需要接收处理该消息，并返回应答。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

> [!IMPORTANT] 注意：
> - 同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。 推荐的做法是，当商户系统收到通知进行处理时，先检查对应业务数据的状态，并判断该通知是否已经处理。如果未处理，则再进行处理；如果已处理，则直接返回结果成功。在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。
> - 如果在30秒后没有收到微信侧回调,商户应调用查询订单接口确认订单状态。
> - 商户系统对于确认订单通知的内容一定要做签名验证，并校验通知的信息是否与商户侧的信息一致，防止数据泄露导致出现“假通知”，造成损失。
> - 当收到通知进行处理时，首先检查对应业务数据的状态，判断该通知是否已经处理过，如果没有处理过再进行处理，如果处理过直接返回结果成功。在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。

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
| event_type {data-required data-indent=1} | string | 通知的类型<br/>`MEDICAL_INSURANCE.SUCCESS` 枚举值
| resource_type {data-required data-indent=1} | string | 通知的资源数据类型
| summary {data-required data-indent=1} | string | 回调摘要
| resource {data-required data-indent=1} | object | 通知资源数据
| original_type {data-required data-indent=2} | string | 原始回调类型
| algorithm {data-required data-indent=2} | string | 对数据进行加密的加密算法<br/>`AEAD_AES_256_GCM` 枚举值
| associated_data {data-indent=2} | string | 数据加密的附加数据
| nonce {data-required data-indent=2} | string | 加密使用的随机串
| ciphertext {data-required data-indent=2} | string {data-tooltip=APIv3密钥加密后的BASE64字符串 data-encrypted=by-aes-gcm} | 加密后的密文数据
| {colspan=3 .im-table-line}
| mix_trade_no {data-required data-indent=3} | string | 唯一定义此资源的标识
| mix_pay_status {data-required data-indent=3} | string | 医保自费混合订单支付状态<br/>`UNKNOWN_MIX_PAY_STATUS` \| `MIX_PAY_CREATED` \| `MIX_PAY_SUCCESS` \| `MIX_PAY_REFUND` \| `MIX_PAY_FAIL` 枚举值之一
| self_pay_status {data-indent=3} | string | 混合订单中自费部分的支付状态<br/>`UNKNOWN_SELF_PAY_STATUS` \| `SELF_PAY_CREATED` \| `SELF_PAY_SUCCESS` \| `SELF_PAY_REFUND` \| `SELF_PAY_FAIL` \| `NO_SELF_PAY` 枚举值之一
| med_ins_pay_status {data-indent=3} | string | 混合订单中医保部分的支付状态<br/>`UNKNOWN_MED_INS_PAY_STATUS` \| `MED_INS_PAY_CREATED` \| `MED_INS_PAY_SUCCESS` \| `MED_INS_PAY_REFUND` \| `MED_INS_PAY_FAIL` \| `NO_MED_INS_PAY` 枚举值之一
| paid_time {data-indent=3} | string | 订单支付时间
| passthrough_response_content {data-indent=3} | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 支付完成后医保局返回内容（透传给医疗机构）
| {colspan=3 .im-table-line}
| payAuthNo {data-indent=4} | string | 
| payOrdId {data-indent=4} | string | 
| setlLatlnt {data-indent=4} | string | 
| mix_pay_type {data-required data-indent=3} | string | 混合支付类型<br/>`UNKNOWN_MIX_PAY_TYPE` \| `CASH_ONLY` \| `INSURANCE_ONLY` \| `CASH_AND_INSURANCE` 枚举值之一
| order_type {data-indent=3} | string | 订单类型<br/>`UNKNOWN_ORDER_TYPE` \| `REG_PAY` \| `DIAG_PAY` \| `COVID_EXAM_PAY` \| `IN_HOSP_PAY` \| `PHARMACY_PAY` \| `INSURANCE_PAY` \| `INT_REG_PAY` \| `INT_RE_DIAG_PAY` \| `INT_RX_PAY` \| `COVID_ANTIGEN_PAY` \| `MED_PAY` 枚举值之一
| appid {data-required data-indent=3} | string | 从业机构的公众号ID
| sub_appid {data-indent=3} | string | 医疗机构的公众号ID
| sub_mchid {data-indent=3} | string | 医疗机构的商户号
| openid {data-indent=3} | string | 用户在appid下的唯一标识
| sub_openid {data-indent=3} | string | 用户在医疗机构AppID下的唯一标识
| pay_for_relatives {data-indent=3} | boolean | 是否代亲属支付，不传默认替本人支付
| out_trade_no {data-required data-indent=3} | string | 从业机构订单号
| serial_no {data-indent=3} | string | 医疗机构订单号
| pay_order_id {data-indent=3} | string | 医保局返回的支付单ID
| pay_auth_no {data-indent=3} | string | 医保局返回的支付授权码
| geo_location {data-indent=3} | string | 用户定位信息，经纬度。格式：经度,纬度
| city_id {data-required data-indent=3} | string | 城市ID
| med_inst_name {data-required data-indent=3} | string | 医疗机构名称
| med_inst_no {data-required data-indent=3} | string | 医疗机构编码
| med_ins_order_create_time {data-indent=3} | string | 医保下单时间
| cash_add_detail {data-indent=3} | object | 现金补充列表
| cash_add_type {data-required data-indent=4} | string | 现金补充类型<br/>`DEFAULT_ADD_TYPE` \| `FREIGHT` \| `OTHER_MEDICAL_EXPENSES` 枚举值之一
| cash_reduce_detail {data-indent=3} | object | 现金减免列表
| cash_reduce_type {data-required data-indent=4} | string | 现金减免类型<br/>`DEFAULT_REDUCE_TYPE` \| `HOSPITAL_REDUCE` \| `PHARMACY_DISCOUNT` \| `DISCOUNT` \| `PRE_PAYMENT` \| `DEPOSIT_DEDUCTION` 枚举值之一
| callback_url {data-required data-indent=3} | string | 回调通知URL
| prepay_id {data-indent=3} | string | 自费预下单ID，微信支付预支付交易会话标识。用于后续接口调用中使用，该值有效期为2小时
| passthrough_request_content {data-indent=3} | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 医疗机构透传给医保的数据
| {colspan=3 .im-table-line}
| payAuthNo {data-indent=4} | string | 
| payOrdId {data-indent=4} | string | 
| setlLatlnt {data-indent=4} | string | 
| extends {data-indent=3} | string | 医疗机构与微信医保约定的扩展字段
| attach {data-indent=3} | string | 查询与通知中返回，医疗机构可用于自定义业务逻辑
| channel_no {data-indent=3} | string | 渠道号
| med_ins_test_env {data-indent=3} | boolean | 是否到医保局测试环境下单

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
| body | object | 应答的`JSON`数据结构
| code {data-indent=1} | string | 业务处理状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| message {data-indent=1} | string | 业务处理附加信息

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4016781554) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012165722)
