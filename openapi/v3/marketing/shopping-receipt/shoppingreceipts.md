---
title: 上传电子小票
description: 商户将支付成功回传的参数填入指定字段，可以给指定微信支付订单上传电子小票。 上传成功后，用户可以在账单详情页看到商户上传的电子小票。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 平台公钥ID/平台公钥证书序列号
| body {data-required} | object | `multipart/form-data` 数据结构
| file {data-required data-indent=1} | object | 图片文件，电子小票图片只支持PNG、JPG格式，文件大小不能超过200KB。
| meta {data-required data-indent=1} | string{data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 媒体文件元信息，使用json表示
| {colspan=3 .im-table-line}
| transaction_id {data-required data-indent=2} | string | 微信支付订单的交易单号，上传的电子小票会关联到该订单
| transaction_mchid {data-indent=2} | string | 微信支付订单的下单商户号
| transaction_sub_mchid {data-indent=2} | string | 微信支付订单的下单子商户号
| out_trade_no {data-indent=2} | string | 微信支付订单的商户订单号
| openid {data-required data-indent=2} | string | 微信支付订单中OpenID
| sha256 {data-required data-indent=2} | string | 图片文件的`sha256`摘要
| merchant_contact_information {data-indent=2} | object {data-tooltip="对应PHP的array"} | 用户与商家的联系渠道
| consultation_phone_number {data-indent=3} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 品牌售后部门的咨询电话。
| upload_time {data-indent=2} | string | 上传时间，用于标识请求的先后顺序

{.im-table #request}

::: code-group

```php [异步纯链式]
$digest = \hash_file('sha256', 'file:///path/to/image.jpg');
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');
$meta = [
  'transaction_id'               => '420000153220220···158964',
  'transaction_mchid'            => '1900006#',
  'transaction_sub_mchid'        => '',
  'out_trade_no'                 => 'sdk123456789202205#809',
  'openid'                       => 'oK7fFt8zzEZ909XH-LE2',
  'sha256'                       => $digest,
  'upload_time'                  => '2022-05-07T15:39:35.000+08:00',
  'merchant_contact_information' => [
    'consultation_phone_number' => 'pVd1v/69bDnuC4lw/wDaespQO/0kjiwfqdfg==',//平台证书加密
  ],
];
$media->setMeta(\json_encode($meta));

$instance->v3->marketing->shoppingReceipt->shoppingreceipts->postAsync([
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$digest = \hash_file('sha256', 'file:///path/to/image.jpg');
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');
$meta = [
  'transaction_id'               => '420000153220220···158964',
  'transaction_mchid'            => '1900006#',
  'transaction_sub_mchid'        => '',
  'out_trade_no'                 => 'sdk123456789202205#809',
  'openid'                       => 'oK7fFt8zzEZ909XH-LE2',
  'sha256'                       => $digest,
  'upload_time'                  => '2022-05-07T15:39:35.000+08:00',
  'merchant_contact_information' => [
    'consultation_phone_number' => 'pVd1HJ6v/69bDnuC4EL5Kz4jBHLiCa8MRtelw/wDa4SzfeespQO/0kjiwfqdfg==',//平台证书加密
  ],
];
$media->setMeta(\json_encode($meta));

$instance->chain('v3/marketing/shopping-receipt/shoppingreceipts')->postAsync([
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$digest = \hash_file('sha256', 'file:///path/to/image.jpg');
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');
$meta = [
  'transaction_id'               => '420000153220220···158964',
  'transaction_mchid'            => '1900006#',
  'transaction_sub_mchid'        => '',
  'out_trade_no'                 => 'sdk123456789202205#809',
  'openid'                       => 'oK7fFt8zzEZ909XH-LE2',
  'sha256'                       => $digest,
  'upload_time'                  => '2022-05-07T15:39:35.000+08:00',
  'merchant_contact_information' => [
    'consultation_phone_number' => 'pVd1HJ6v/69bDnuC4EL5Kz4jBHLiCa8MRtelw/wDa4SzfeespQO/0kjiwfqdfg==',//平台证书加密
  ],
];
$media->setMeta(\json_encode($meta));

$instance['v3/marketing/shopping-receipt/shoppingreceipts']->postAsync([
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$digest = \hash_file('sha256', 'file:///path/to/image.jpg');
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');
$meta = [
  'transaction_id'               => '420000153220220···158964',
  'transaction_mchid'            => '1900006#',
  'transaction_sub_mchid'        => '',
  'out_trade_no'                 => 'sdk123456789202205#809',
  'openid'                       => 'oK7fFt8zzEZ909XH-LE2',
  'sha256'                       => $digest,
  'upload_time'                  => '2022-05-07T15:39:35.000+08:00',
  'merchant_contact_information' => [
    'consultation_phone_number' => 'pVd1HJ6v/69bDnuC4EL5Kz4jBHLiCa8MRtelw/wDa4SzfeespQO/0kjiwfqdfg==',//平台证书加密
  ],
];
$media->setMeta(\json_encode($meta));

$response = $instance->v3->marketing->shoppingReceipt->shoppingreceipts->post([
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$digest = \hash_file('sha256', 'file:///path/to/image.jpg');
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');
$meta = [
  'transaction_id'               => '420000153220220···158964',
  'transaction_mchid'            => '1900006#',
  'transaction_sub_mchid'        => '',
  'out_trade_no'                 => 'sdk123456789202205#809',
  'openid'                       => 'oK7fFt8zzEZ909XH-LE2',
  'sha256'                       => $digest,
  'upload_time'                  => '2022-05-07T15:39:35.000+08:00',
  'merchant_contact_information' => [
    'consultation_phone_number' => 'pVd1HJ6v/69bDnuC4EL5Kz4jBHLiCa8MRtelw/wDa4SzfeespQO/0kjiwfqdfg==',//平台证书加密
  ],
];
$media->setMeta(\json_encode($meta));

$response = $instance->chain('v3/marketing/shopping-receipt/shoppingreceipts')->post([
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$digest = \hash_file('sha256', 'file:///path/to/image.jpg');
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');
$meta = [
  'transaction_id'               => '420000153220220···158964',
  'transaction_mchid'            => '1900006#',
  'transaction_sub_mchid'        => '',
  'out_trade_no'                 => 'sdk123456789202205#809',
  'openid'                       => 'oK7fFt8zzEZ909XH-LE2',
  'sha256'                       => $digest,
  'upload_time'                  => '2022-05-07T15:39:35.000+08:00',
  'merchant_contact_information' => [
    'consultation_phone_number' => 'pVd1HJ6v/69bDnuC4EL5Kz4jBHLiCa8MRtelw/wDa4SzfeespQO/0kjiwfqdfg==',//平台证书加密
  ],
];
$media->setMeta(\json_encode($meta));

$response = $instance['v3/marketing/shopping-receipt/shoppingreceipts']->post([
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| receipt {data-required} | object {data-tooltip="对应PHP的array"} | 电子小票上传信息
| receipt_id {data-required data-indent=1} | string | 电子小票ID
| state {data-required data-indent=1} | string | 电子小票图片审核状态
| transaction_id {data-required data-indent=1} | string | 微信支付订单的交易单号，上传的电子小票会关联到该订单
| transaction_mchid {data-indent=1} | string | 微信支付订单的商户号
| transaction_sub_mchid {data-indent=1} | string | 微信支付订单的子商户号
| openid {data-required data-indent=1} | string | 微信支付订单中OpenID
| sha256 {data-required data-indent=1} | string | 图片文件的文件摘要，即对图片文件的二进制内容进行sha256计算得到的值
| image_type {data-required data-indent=1} | string | 标识电子小票图片类型
| create_time {data-required data-indent=1} | string | 电子小票创建的时间
| modify_time {data-required data-indent=1} | string | 电子小票最后一次修改时间
| merchant_contact_information {data-indent=1} | object {data-tooltip="对应PHP的array"} | 用户与商家的联系渠道
| consultation_phone_number {data-indent=2} | string {data-tooltip=商户API证书对应的公钥加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 品牌售后部门的咨询电话。
| upload_time {data-indent=1} | string | 上传时间，用于标识请求的先后顺序，该笔小票上传时填写则返回，没有不返回

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012553506) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012698614)
