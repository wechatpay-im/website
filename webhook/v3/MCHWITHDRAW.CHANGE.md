---
title: 商户提现状态变更(MCHWITHDRAW.CHANGE)通知(JSON)
description: 商户调用商户提现API中，当提现状态发生变更时微信支付会通过POST的请求方式，向商户预先设置的回调地址发送回调通知，让商户知晓提现状态变更（包括提现状态变为提现成功、失败、退票、关单）。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

> [!IMPORTANT] 注意：
> - 同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。推荐的做法是，当商户系统收到通知进行处理时，先检查对应业务数据的状态，并判断该通知是否已经处理。如果未处理，则再进行处理；如果已处理，则直接返回结果成功。在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。
> - 如果在所有通知频率后没有收到微信侧回调，商户应调用提现查询接口确认提现状态。
> - 特别提醒：商户系统对于开启结果通知的内容一定要做签名验证，并校验通知的信息是否与商户侧的信息一致，防止数据泄露导致出现“假通知”，造成资金损失。
> - 对后台通知交互时，如果微信收到商户的应答不符合规范或超时，微信认为通知失败，微信支付会通过一定的策略(**15秒×10次 / 5分钟×10次 / 30分钟×47次, 最多覆盖到24小时**)定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功。

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
| event_type {data-required data-indent=1} | string | 通知的类型<br/>`MCHWITHDRAW.CHANGE` 枚举值
| resource_type {data-required data-indent=1} | string | 通知的资源数据类型
| summary {data-required data-indent=1} | string | 回调摘要
| resource {data-required data-indent=1} | object | 通知资源数据
| algorithm {data-required data-indent=2} | string | 对数据进行加密的加密算法<br/>`AEAD_AES_256_GCM` 枚举值
| associated_data {data-indent=2} | string | 数据加密的附加数据<br/>`mch_withdraw` 枚举值
| nonce {data-required data-indent=2} | string | 加密使用的随机串
| ciphertext {data-required data-indent=2} | string | 加密后的密文数据
| original_type {data-required data-indent=2} | string | 原始回调类型<br/>`mch_withdraw` 枚举值
| {colspan=3 .im-table-line}
| original_data {data-indent=2} | object | 平台预约提现结果
| status {data-required data-indent=3} | string | 提现单状态<br/>`CREATE_SUCCESS` \| `SUCCESS` \| `FAIL` \| `REFUND` \| `CLOSE` \| `INIT` 枚举值之一
| withdraw_id {data-required data-indent=3} | string | 微信支付提现单号
| out_request_no {data-required data-indent=3} | string | 商户提现单号
| amount {data-required data-indent=3} | integer | 提现金额
| create_time {data-required data-indent=3} | string | 发起提现时间
| update_time {data-required data-indent=3} | string | 提现状态更新时间
| reason {data-required data-indent=3} | string | 失败原因
| remark {data-required data-indent=3} | string | 提现备注
| bank_memo {data-required data-indent=3} | string | 银行附言
| account_type {data-required data-indent=3} | string | 出款账户类型<br/>`BASIC` \| `OPERATION` \| `FEES` 枚举值之一
| solution {data-required data-indent=3} | string | 提现失败解决方案
| {colspan=3 .im-table-line}
| original_data {data-indent=2} | object | 二级商户预约提现结果
| sub_mchid {data-indent=3} | string | 二级商户号
| sp_mchid {data-required data-indent=3} | string | 电商平台商户号
| status {data-required data-indent=3} | string | 提现单状态<br/>`CREATE_SUCCESS` \| `SUCCESS` \| `FAIL` \| `REFUND` \| `CLOSE` \| `INIT` 枚举值之一
| withdraw_id {data-required data-indent=3} | string | 微信支付提现单号
| out_request_no {data-required data-indent=3} | string | 商户提现单号
| amount {data-required data-indent=3} | integer | 提现金额
| create_time {data-indent=3} | string | 发起提现时间
| update_time {data-indent=3} | string | 提现状态更新时间
| reason {data-indent=3} | string | 失败原因
| remark {data-indent=3} | string | 提现备注
| bank_memo {data-indent=3} | string | 银行备注
| account_type {data-indent=3} | string | 出款账户类型<br/>`BASIC` \| `OPERATION` \| `FEES` 枚举值之一
| account_number {data-indent=3} | string | 入账银行账号后四位
| account_bank {data-indent=3} | string | 入账银行
| bank_name {data-indent=3} | string | 入账银行全称（含支行）
| {colspan=3 .im-table-line}
| original_data {data-indent=2} | object | 二级商户按日终余额预约提现结果<Badge type="warning" text="特殊申请" />
| sub_mchid {data-indent=3} | string | 二级商户号
| sp_mchid {data-required data-indent=3} | string | 电商平台商户号
| status {data-required data-indent=3} | string | 提现单状态<br/>`CREATE_SUCCESS` \| `SUCCESS` \| `FAIL` \| `REFUND` \| `CLOSE` \| `INIT` 枚举值之一
| withdraw_id {data-required data-indent=3} | string | 微信支付提现单号
| out_request_no {data-required data-indent=3} | string | 商户提现单号
| amount {data-required data-indent=3} | integer | 提现金额
| create_time {data-indent=3} | string | 发起提现时间
| update_time {data-indent=3} | string | 提现状态更新时间
| reason {data-indent=3} | string | 失败原因
| remark {data-indent=3} | string | 提现备注
| bank_memo {data-indent=3} | string | 银行备注
| account_type {data-indent=3} | string | 出款账户类型<br/>`BASIC` \| `OPERATION` \| `FEES` 枚举值之一
| account_number {data-indent=3} | string | 入账银行账号后四位
| account_bank {data-indent=3} | string | 入账银行
| bank_name {data-indent=3} | string | 入账银行全称（含支行）

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

参阅
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013049135)