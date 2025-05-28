---
title: 支付分从业机构-商户预下单(PAYSCORE.MCH_PREPAY)通知(JSON)
description: 微信支付分通过商户预下单通知告知商户对待支付的支付分服务订单生成收银台订单，以便用户通过收银台完成对服务订单的主动支付。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

> [!IMPORTANT] 注意：
> - 同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。 推荐的做法是，当商户系统收到通知进行处理时，先检查对应业务数据的状态，并判断该通知是否已经处理。如果未处理，则再进行处理；如果已处理，则直接返回结果成功。在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。
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
| event_type {data-required data-indent=1} | string | 通知的类型<br/>`PAYSCORE.MCH_PREPAY` 枚举值
| resource_type {data-required data-indent=1} | string | 通知的资源数据类型
| summary {data-required data-indent=1} | string | 回调摘要
| resource {data-required data-indent=1} | object {data-tooltip="对应PHP的Array"} | 通知资源数据
| algorithm {data-required data-indent=2} | string | 对数据进行加密的加密算法<br/>`AEAD_AES_256_GCM` 枚举值
| associated_data {data-indent=2} | string | 数据加密的附加数据
| nonce {data-required data-indent=2} | string | 加密使用的随机串
| ciphertext {data-required data-indent=2} | string {data-tooltip=APIv3密钥加密后的BASE64字符串 data-encrypted=by-aes-gcm} | 加密后的密文数据
| original_type {data-required data-indent=2} | string | 原始回调类型
| {colspan=3 .im-table-line}
| service_id {data-required data-indent=3} | string | 调用创单接口时提交的服务ID
| appid {data-required data-indent=3} | string | 调用创单接口时提交的应用ID
| mchid {data-required data-indent=3} | string | 调用创单接口时提交的商户号
| sub_appid {data-indent=3} | string | 调用创单接口时传入的子商户应用ID
| sub_mchid {data-required data-indent=3} | string | 调用创单接口时传入的子商户商户号
| channel_id {data-indent=3} | string | 调用创单接口时传入的渠道商商户号
| out_order_no {data-required data-indent=3} | string | 调用创单接口时提交的商户服务订单号
| openid {data-indent=3} | string | 微信用户在商户对应AppID下的唯一标识。（传了sub_appid的情况下则只返回sub_openid）
| sub_openid {data-indent=3} | string | 微信用户在商户对应sub_appid下的唯一标识。（传了sub_appid的情况下则只返回sub_openid）
| total_amount {data-required data-indent=3} | number | 总金额，大于等于0的数字，单位为分，只能为整数。
| prepay_req_body {data-required data-indent=3} | object {data-tooltip="对应PHP的Array"} | 预下单请求部分输入参数。  <br/>注意：商户请求预下单接口时需要使用本对象中同名字段值，若字段在本对象中不存在则由商户根据实际情况填写。
| device_info {data-required data-indent=4} | string | 终端设备号，PC网页或公众号内支付请传`WEB`
| nonce_str {data-required data-indent=4} | string | 微信支付分配给收单服务商的ID
| body {data-required data-indent=4} | string | 商品或支付单简要描述
| attach {data-indent=4} | string | 附加数据，在查询API和支付通知中原样返回，该字段主要用于商户携带订单的自定义数据
| fee_type {data-required data-indent=4} | string | 符合ISO 4217标准的三位字母代码，默认人民币：`CNY`
| time_start {data-required data-indent=4} | string | 订单生成时间，格式为`yyyyMMddHHmmss`
| time_expire {data-required data-indent=4} | string | 订单失效时间，格式为`yyyyMMddHHmmss`
| goods_tag {data-indent=4} | string | 商品标记，代金券或立减优惠功能的参数， 说明详见代金券或立减优惠
| notify_url {data-required data-indent=4} | string | 异步接收微信支付结果通知的回调地址，通知URL必须为外网可访问的URL，不能携带参数。请使用HTTPS协议链接
| trade_type {data-required data-indent=4} | string | `JSAPI`：公众号支付 <br/> `NATIVE`：扫码支付 <br/> `App`：App 支付
| limit_pay {data-required data-indent=4} | string | `no_credit`：指定不能使用信用卡支付
| need_receipt {data-required data-indent=4} | boolean | 需要跟公众平台的发票功能联合使用
| prepay_req_header_base64 {data-indent=3} | string | Base64编码后的从业机构请求预下单接口使用请求的头部
| prepay_req_body_base64 {data-indent=3} | string | Base64编码后的从业机构请求预下单接口使用请求的包体
| prepay_resp_http_code {data-indent=3} | number | 从业机构请求预下单接口时，收到响应的HttpCode
| prepay_resp_header_base64 {data-indent=3} | string | Base64编码后的从业机构请求预下单接口收到响应的头部
| prepay_resp_body_base64 {data-indent=3} | string | Base64编码后的从业机构请求预下单接口收到响应的包体

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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012084127) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012084127)
