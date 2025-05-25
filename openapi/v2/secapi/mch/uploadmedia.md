---
title: 图片上传
description: 服务商操作员调用 API 接口，上传证件照片。支持 jpeg、jpg、bmp、png 格式，图片大小不超过2M。通过 POST 表单来调用该接口，表单媒体文件 id 为 media，需有 filename、filelength、content-type 等信息。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| security {data-required} | `true` | 声明加载商户API证书
| body {data-required} | object | `multipart/form-data` 数据结构
| media {data-required data-indent=1} | object | 媒体文件标识，有filename、filelength、content-type等信息。**不参与签名计算**
| media_hash {data-required data-indent=1} | string | 根据媒体文件内容进行MD5计算后的值，注意小写
| mch_id {data-required data-indent=1} | string | 服务商商户号或渠道号
| sign_type {data-required data-indent=1} | string | `MD5` \| `HMAC-SHA256` 枚举值之一
| sign {data-required data-indent=1} | string | `media_hash` `mch_id` `sign_type` 三个参数[通用签名算法](/guide/digital-signature#symmetric)计算得出的签名值

{.im-table #request}

::: code-group

```php [异步纯链式]
$stack = clone $instance->getDriver()->select('v2')->getConfig('handler');
$stack->remove('transform_request');
$stream = new \GuzzleHttp\Psr7\LazyOpenStream('file:///path/to/image.jpg', 'rb');
$mediaMd5Digest = \GuzzleHttp\Psr7\Utils::hash($stream, 'md5');

$instance->v2->secapi->mch->uploadmedia->postAsync([
  'security' => true,
  'handler' => $stack,
  'body' => new \GuzzleHttp\Psr7\MultipartStream([
    ['name' => 'media', 'content' => $stream, 'filename' => 'image.jpg'],
    ['name' => 'mch_id', 'content' => $mchid],
    ['name' => 'media_hash', 'content' => $mediaMd5Digest],
    ['name' => 'sign_type', 'content' => $signType],
    ['name' => 'sign', 'content' => \WeChatPay\Crypto\Hash::sign(
      $signType, "mch_id=$mchid&media_hash=$mediaMd5Digest&sign_type=$signType", $apiv2Key
    )],
  ]),
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$stack = clone $instance->getDriver()->select('v2')->getConfig('handler');
$stack->remove('transform_request');
$stream = new \GuzzleHttp\Psr7\LazyOpenStream('file:///path/to/image.jpg', 'rb');
$mediaMd5Digest = \GuzzleHttp\Psr7\Utils::hash($stream, 'md5');

$instance->chain('v2/secapi/mch/uploadmedia')->postAsync([
  'security' => true,
  'handler' => $stack,
  'body' => new \GuzzleHttp\Psr7\MultipartStream([
    ['name' => 'media', 'content' => $stream, 'filename' => 'image.jpg'],
    ['name' => 'mch_id', 'content' => $mchid],
    ['name' => 'media_hash', 'content' => $mediaMd5Digest],
    ['name' => 'sign_type', 'content' => $signType],
    ['name' => 'sign', 'content' => \WeChatPay\Crypto\Hash::sign(
      $signType, "mch_id=$mchid&media_hash=$mediaMd5Digest&sign_type=$signType", $apiv2Key
    )],
  ]),
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$stack = clone $instance->getDriver()->select('v2')->getConfig('handler');
$stack->remove('transform_request');
$stream = new \GuzzleHttp\Psr7\LazyOpenStream('file:///path/to/image.jpg', 'rb');
$mediaMd5Digest = \GuzzleHttp\Psr7\Utils::hash($stream, 'md5');

$instance['v2/secapi/mch/uploadmedia']->postAsync([
  'security' => true,
  'handler' => $stack,
  'body' => new \GuzzleHttp\Psr7\MultipartStream([
    ['name' => 'media', 'content' => $stream, 'filename' => 'image.jpg'],
    ['name' => 'mch_id', 'content' => $mchid],
    ['name' => 'media_hash', 'content' => $mediaMd5Digest],
    ['name' => 'sign_type', 'content' => $signType],
    ['name' => 'sign', 'content' => \WeChatPay\Crypto\Hash::sign(
      $signType, "mch_id=$mchid&media_hash=$mediaMd5Digest&sign_type=$signType", $apiv2Key
    )],
  ]),
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$stack =clone $instance->getDriver()->select('v2')->getConfig('handler');
$stack->remove('transform_request');
$stream = new \GuzzleHttp\Psr7\LazyOpenStream('file:///path/to/image.jpg', 'rb');
$mediaMd5Digest = \GuzzleHttp\Psr7\Utils::hash($stream, 'md5');

$response = $instance->v2->secapi->mch->uploadmedia->post([
  'security' => true,
  'handler' => $stack,
  'body' => new \GuzzleHttp\Psr7\MultipartStream([
    ['name' => 'media', 'content' => $stream, 'filename' => 'image.jpg'],
    ['name' => 'mch_id', 'content' => $mchid],
    ['name' => 'media_hash', 'content' => $mediaMd5Digest],
    ['name' => 'sign_type', 'content' => $signType],
    ['name' => 'sign', 'content' => \WeChatPay\Crypto\Hash::sign(
      $signType, "mch_id=$mchid&media_hash=$mediaMd5Digest&sign_type=$signType", $apiv2Key
    )],
  ]),
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$stack = clone $instance->getDriver()->select('v2')->getConfig('handler');
$stack->remove('transform_request');
$stream = new \GuzzleHttp\Psr7\LazyOpenStream('file:///path/to/image.jpg', 'rb');
$mediaMd5Digest = \GuzzleHttp\Psr7\Utils::hash($stream, 'md5');

$response = $instance->chain('v2/secapi/mch/uploadmedia')->post([
  'security' => true,
  'handler' => $stack,
  'body' => new \GuzzleHttp\Psr7\MultipartStream([
    ['name' => 'media', 'content' => $stream, 'filename' => 'image.jpg'],
    ['name' => 'mch_id', 'content' => $mchid],
    ['name' => 'media_hash', 'content' => $mediaMd5Digest],
    ['name' => 'sign_type', 'content' => $signType],
    ['name' => 'sign', 'content' => \WeChatPay\Crypto\Hash::sign(
      $signType, "mch_id=$mchid&media_hash=$mediaMd5Digest&sign_type=$signType", $apiv2Key
    )],
  ]),
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$stack = clone $instance->getDriver()->select('v2')->getConfig('handler');
$stack->remove('transform_request');
$stream = new \GuzzleHttp\Psr7\LazyOpenStream('file:///path/to/image.jpg', 'rb');
$mediaMd5Digest = \GuzzleHttp\Psr7\Utils::hash($stream, 'md5');

$response = $instance['v2/secapi/mch/uploadmedia']->post([
  'security' => true,
  'handler' => $stack,
  'body' => new \GuzzleHttp\Psr7\MultipartStream([
    ['name' => 'media', 'content' => $stream, 'filename' => 'image.jpg'],
    ['name' => 'mch_id', 'content' => $mchid],
    ['name' => 'media_hash', 'content' => $mediaMd5Digest],
    ['name' => 'sign_type', 'content' => $signType],
    ['name' => 'sign', 'content' => \WeChatPay\Crypto\Hash::sign(
      $signType, "mch_id=$mchid&media_hash=$mediaMd5Digest&sign_type=$signType", $apiv2Key
    )],
  ]),
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| appid {data-required} | string | 公众账号ID
| mch_id {data-required} | string | 商户号
| nonce_str {data-required} | string | 随机字符串
| sign {data-required} | string | 签名
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| media_id {data-required} | string | 媒体标识Id,微信返回的媒体文件标识Id

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/global/v2/zh/4013641477)
