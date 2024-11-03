---
title: 保险商户委托代扣签约成功通知(JSON)
description: 根据「国家金融监督管理总局深圳监督局」的2023 - 28号文 【关于个别短期健康险业务中存在问题及相关风险的通报】的精神指导，微信支付期望做到“让用户清晰签约、明确通知、有感扣费”。签约、解约成功后（包含用户主动解约），微信会把相关签约、解约信息异步通知给商户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

> [!IMPORTANT] 注意：
> - 同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。 推荐的做法是，当商户系统收到通知进行处理时，先检查对应业务数据的状态，并判断该通知是否已经处理。如果未处理，则再进行处理；如果已处理，则直接返回结果成功。在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。
> - 如果在所有通知频率后没有收到微信侧回调，商户应调用查询订单接口确认订单状态。
> - 特别提醒：商户系统对于开启结果通知的内容一定要做签名验证，并校验通知的信息是否与商户侧的信息一致，防止数据泄露导致出现“假通知”，造成资金损失。
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
| event_type {data-indent=1} | string | 通知的类型<br/>`INSURANCE_ENTRUST.SIGN` 枚举值
| resource_type {data-indent=1} | string | 通知的资源数据类型
| summary {data-indent=1} | string | 回调摘要
| resource {data-indent=1} | object | 通知资源数据
| algorithm {data-indent=2} | string | 对数据进行加密的加密算法<br/>`AEAD_AES_256_GCM` 枚举值
| associated_data {data-indent=2} | string | 数据加密的附加数据
| nonce {data-indent=2} | string | 加密使用的随机串
| ciphertext {data-indent=2} | string | 加密后的密文数据
| original_type {data-indent=2} | string | 原始回调类型
| {colspan=3 .im-table-line}
| mchid {data-indent=3} | string | 微信支付分配的商户号
| contract_id {data-indent=3} | string | 委托代扣协议的主键，唯一定义此资源的标识
| appid {data-indent=3} | string | 商户在微信申请的公众号或移动应用AppID
| plan_id {data-indent=3} | number | 委托代扣协议模板ID
| out_contract_code {data-indent=3} | string | 商户侧的签约协议号，商户侧需保证唯一性。只能是数字、大小写字母的组合
| insured_display_name {data-indent=3} | string | 签约用户的名称，用于页面展示，在签约时由商户传入。
| contract_state {data-indent=3} | string | 委托代扣协议状态<br/>`SIGNED` \| `TERMINATED` 枚举值之一
| contract_signed_time {data-indent=3} | string | 协议签署时间
| contract_expired_time {data-indent=3} | string | 协议到期时间
| openid {data-indent=3} | string | 商户AppID下的用户唯一标识
| contract_terminate_info {data-indent=3} | object | 协议解约信息，仅当contract_state=`TERMINATED`时，该值有效。
| contract_termination_mode {data-indent=4} | string | 协议解约方式<br/>`USER_TERMINATE` \| `MCH_API_TERMINATE` \| `API` \| `WEPAY_WEB_TERMINATE` \| `CUSTOMER_SERVICE_TERMINATE` \| `SYSTEM_TERMINATE` 枚举值之一
| contract_terminated_time {data-indent=4} | string | 协议解约时间
| contract_termination_remark {data-indent=4} | string | 解约原因的备注说明，如：签约信息有误，须重新签约。

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
- [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/insurance-entrusted-payment/contract-alter-notify.html)