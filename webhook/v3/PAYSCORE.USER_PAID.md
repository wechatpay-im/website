---
title: 支付分服务用户支付成功(PAYSCORE.USER_PAID)通知(JSON)
description: 支付分服务用户支付成功通知
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
| event_type {data-required data-indent=1} | string | 通知的类型<br/>`PAYSCORE.USER_PAID` 枚举值
| resource_type {data-required data-indent=1} | string | 通知的资源数据类型
| summary {data-required data-indent=1} | string | 回调摘要
| resource {data-required data-indent=1} | object {data-tooltip="对应PHP的Array"} | 通知资源数据
| algorithm {data-required data-indent=2} | string | 对数据进行加密的加密算法<br/>`AEAD_AES_256_GCM` 枚举值
| associated_data {data-indent=2} | string | 数据加密的附加数据
| nonce {data-required data-indent=2} | string | 加密使用的随机串
| ciphertext {data-required data-indent=2} | string {data-tooltip=APIv3密钥加密后的BASE64字符串 data-encrypted=by-aes-gcm} | 加密后的密文数据
| original_type {data-required data-indent=2} | string | 原始回调类型
| {colspan=3 .im-table-line}
| service_id {data-required data-indent=3} | string | 调用授权服务接口提交的服务ID。
| appid {data-required data-indent=3} | string | 调用授权服务接口提交的应用ID。
| mchid {data-required data-indent=3} | string | 调用授权服务接口提交的商户号。
| sub_appid {data-indent=3} | string | 子商户应用ID
| sub_mchid {data-required data-indent=3} | string | 子商户商户号
| channel_id {data-indent=3} | string | 调用创单接口时传入的渠道商商户号
| out_order_no {data-required data-indent=3} | string | 商户服务订单号
| out_trade_no {data-required data-indent=3} | string | 商户系统内部扣款单号
| openid {data-required data-indent=3} | string | 微信用户在商户对应AppID下的唯一标识。
| sub_openid {data-indent=3} | string | 子商户公众号下的用户标识
| state {data-required data-indent=3} | string | 服务订单状态
| service_introduction {data-required data-indent=3} | string | 服务信息
| total_amount {data-indent=3} | number | 商户收款总金额
| post_payments {data-required data-indent=3} | object[] {data-tooltip="对应PHP的Array"} | 后付费项目
| name {data-indent=4} | string | 付费项目名称
| amount {data-indent=4} | number | 金额
| description {data-indent=4} | string | 计费说明
| count {data-indent=4} | number | 付费数量
| post_discounts {data-indent=3} | object[] {data-tooltip="对应PHP的Array"} | 商户优惠
| name {data-indent=4} | string | 优惠名称
| description {data-indent=4} | string | 优惠说明
| amount {data-indent=4} | number | 优惠金额
| risk_fund {data-required data-indent=3} | object {data-tooltip="对应PHP的Array"} | 订单风险金
| amount {data-required data-indent=4} | number | 风险金额
| description {data-indent=4} | string | 风险说明
| time_range {data-required data-indent=3} | object {data-tooltip="对应PHP的Array"} | 服务时间段
| start_time {data-required data-indent=4} | string | 服务开始时间
| start_time_remark {data-indent=4} | string | 服务开始时间备注
| end_time {data-indent=4} | string | 服务结束时间
| end_time_remark {data-indent=4} | string | 服务结束时间备注
| location {data-indent=3} | object {data-tooltip="对应PHP的Array"} | 服务位置
| start_location {data-indent=4} | string | 服务开始地点
| end_location {data-indent=4} | string | 服务结束位置
| attach {data-indent=3} | string | 商户数据包
| order_id {data-indent=3} | string | 微信支付服务订单号
| need_collection {data-indent=3} | boolean | 是否需要收款
| collection {data-indent=3} | object {data-tooltip="对应PHP的Array"} | 收款信息
| state {data-required data-indent=4} | string | 收款状态
| total_amount {data-required data-indent=4} | number | 总收款金额
| paying_amount {data-required data-indent=4} | number | 待收金额
| paid_amount {data-required data-indent=4} | number | 已收金额
| details {data-indent=4} | object[] {data-tooltip="对应PHP的Array"} | 收款明细列表
| seq {data-indent=5} | number | 收款序号
| amount {data-required data-indent=5} | number | 单笔收款金额
| paid_type {data-indent=5} | string | 收款成功渠道
| paid_time {data-required data-indent=5} | string | 收款成功时间
| transaction_id {data-indent=5} | string | 微信支付交易单号
| promotion_detail {data-indent=5} | object[] {data-tooltip="对应PHP的Array"} | 优惠功能
| coupon_id {data-required data-indent=6} | string | 券ID
| name {data-indent=6} | string | 优惠名称
| scope {data-indent=6} | string | 优惠范围
| type {data-indent=6} | string | 优惠类型
| amount {data-required data-indent=6} | number | 优惠券面额
| stock_id {data-indent=6} | string | 活动ID
| wechatpay_contribute {data-indent=6} | number | 微信出资
| merchant_contribute {data-indent=6} | number | 商户出资
| other_contribute {data-indent=6} | number | 其他出资
| currency {data-indent=6} | string | 优惠币种
| goods_detail {data-indent=6} | object[] {data-tooltip="对应PHP的Array"} | 单品列表
| goods_id {data-required data-indent=7} | string | 商品编码
| quantity {data-indent=7} | number | 商品数量
| unit_price {data-indent=7} | number | 商品价格
| discount_amount {data-indent=7} | number | 商品优惠金额
| goods_remark {data-indent=7} | string | 商品备注
| user_service_status {data-indent=3} | string | 1、`USER_OPEN_SERVICE`：授权成功<br/>2、`USER_CLOSE_SERVICE`：解除授权成功
| openorclose_time {data-indent=3} | string | 服务开启/解除授权成功时间。
| authorization_code {data-indent=3} | string | 商户系统内部授权协议号，预授权时返回，非预授权不返回。
| state_description {data-indent=3} | string | 订单状态说明
| out_request_no {data-indent=3} | string | 调用授权服务接口提交的商户请求唯一标识（新签约的用户，且在授权签约中上传了该字段，则在解约授权回调通知中有返回）。

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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012587953) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012586137) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012625482) [官方文档](https://pay.weixin.qq.com/doc/global/v3/zh/4014096520)
