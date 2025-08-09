---
title: 订单支付成功(TRANSACTION.SUCCESS)回调通知(XML)
description: 用户确认完成后，微信后台会把相关确认结果和订单信息发送给商户，商户需要接收处理该消息，并返回应答。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

> [!IMPORTANT] 注意：
> - 用户确认完成后，微信后台会把相关确认结果和订单信息发送给商户，商户需要接收处理该消息，并返回应答。
> - 对后台通知交互时，如果微信收到商户的应答不符合规范或超时，微信认为通知失败，微信会通过一定的策略定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功。 （通知频率为15s/15s/30s/3m/10m/20m/30m/30m/30m/60m/3h/3h/3h/6h/6h - 总计 24h4m）
> - 同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。
> - 推荐的做法是，当商户系统收到通知进行处理时，先检查对应业务数据的状态，并判断该通知是否已经处理。如果未处理，则再进行处理；如果已处理，则直接返回结果成功。在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。
> - 如果在所有通知频率(4小时)后没有收到微信侧回调,商户应调用查询订单接口确认订单状态。
> - 特别提醒：商户系统对于确认结果通知的内容一定要做签名验证，并校验通知的信息是否与商户侧的信息一致，防止数据泄露导致出现“假通知”，造成资金损失。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| -- | -- | --
| headers {data-required} | object {data-tooltip="对应PHP的Array"} | 通知的头参数
| Request-ID {data-required data-indent=1} | string | 通知的唯一标识
| Content-Type {data-required data-indent=1} | string | `text/xml`
| body {data-required} | object {data-tooltip="对应PHP的Array"} | 通知的`XML`数据结构
| mch_id {data-required data-indent=1} | string | 商户号
| appid {data-required data-indent=1} | string | 公众账号ID
| algorithm {data-required data-indent=1} | string | 签名算法<br/> `HMAC-SHA256` 枚举值
| nonce_str {data-required data-indent=1} | string | 随机字符串
| sign {data-required data-indent=1} | string | 签名
| event_id {data-required data-indent=1} | string | 通知ID
| event_create_time {data-required data-indent=1} | string | 通知创建时间
| event_type {data-required data-indent=1} | string | 通知类型<br/>`TRANSACTION.SUCCESS` 枚举值
| event_algorithm {data-required data-indent=1} | string | 通知加密类型<br/>`AEAD_AES_256_GCM` 枚举值
| event_nonce {data-required data-indent=1} | string | 通知随机串
| event_associated_data {data-indent=1} | string | 通知附加数据
| event_ciphertext {data-required data-indent=1} | string {data-tooltip=APIv3密钥加密后的BASE64字符串 data-encrypted=by-aes-gcm} | 通知密文
| {colspan=3 .im-table-line}
| state {data-indent=2} | string | 单据状态
| service_id {data-indent=2} | string | 服务ID
| out_order_no {data-indent=2} | string | 商户服务订单号
| order_id {data-indent=2} | string | 微信支付服务订单号
| goods_name {data-indent=2} | string | 商品名称
| returned {data-indent=2} | string | 是否归还
| room {data-indent=2} | string | 房间
| checked_in {data-indent=2} | string | 是否入住
| start_time {data-indent=2} | string | 入住时间
| deposit_amount {data-indent=2} | string | 押金金额
| total_amount {data-indent=2} | string | 总金额
| end_time {data-indent=2} | string | 预计离店时间
| finish_transaction_id {data-indent=2} | string | 结单交易单号

{.im-table #request}

- 免押租借 event_ciphertext 解密后含 **goods_name** 字段
- 免押速住 event_ciphertext 解密后含 **room** 字段

::: code-group

```php [处理程序]
// 使用Psr标准规范，示例如何处理(取值、转换、验签、解密)「回调通知」事件，WebServer不同，用法略有差异，供参考实现。
function webhookProcessor(\Psr\Http\Message\RequestInterface $request,
  string $apiv2Key, string $apiv3Key): array {
  if (\strlen($apiv2Key) !== 32) {
    throw new \WeChatPay\Exception\InvalidArgumentException('API密钥为32字节，长度不对');
  }

  if (\strlen($apiv3Key) !== 32) {
    throw new \WeChatPay\Exception\InvalidArgumentException('APIv3密钥为32字节，长度不对');
  }

  $inBody = (string)$request->getBody();
  // 转换通知的XML文本消息为PHP Array数组
  $inBodyArray = \WeChatPay\Transformer::toArray($inBody);

  if (!\WeChatPay\Crypto\Hash::equals(\WeChatPay\Crypto\Hash::sign(
    $inBodyArray['algorithm'] ?? \WeChatPay\Crypto\ALGO_HMAC_SHA256,
    \WeChatPay\Formatter::queryStringLike(\WeChatPay\Formatter::ksort($inBodyArray)),
    $apiv2Key), $inBodyArray['sign'] ?? null
  )) {
    throw new \WeChatPay\Exception\InvalidArgumentException('通知的数据签名校验未通过');
  }

  if (!(\array_key_exists('event_nonce', $inBodyArray)
    && \array_key_exists('event_associated_data', $inBodyArray)
    && \array_key_exists('event_ciphertext', $inBodyArray)
  )) {
    throw new \WeChatPay\Exception\InvalidArgumentException('通知的数据不完整');
  }

  $plaintext = \WeChatPay\Crypto\AesGcm::decrypt(
    $inBodyArray['event_ciphertext'],
    $apiv3Key,
    $inBodyArray['event_nonce'],
    $inBodyArray['event_associated_data']
  );

  $inBodyArray['event_data'] = \WeChatPay\Transformer::toArray($plaintext);

  return [
    'headers' => $request->getHeaders(),
    'body' => $inBodyArray
  ];
}

// do your business
// ...
// ...
$xml = \WeChatPay\Transformer::toXml([
  'return_code' => 'SUCCESS',
  'return_msg' => 'OK'
]);
```

:::

| 应答规范 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| body | object {data-tooltip="对应PHP的Array"} | 应答的`XML`数据结构
| return_code {data-indent=1} | string | 业务处理状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg {data-indent=1} | string | 业务处理附加信息

{.im-table #response}

参阅
- [免押租借订单支付成功通知](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=18_8&index=8)
- [免押速住订单支付成功通知](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=19_8&index=7)
